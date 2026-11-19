from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json, threading

requests = []
cid = '9c97d7d3-1af7-432b-9ad2-303fe8fffa18'

class DifyFixture(BaseHTTPRequestHandler):
    def send(self, body, kind='application/json'):
        self.send_response(200)
        self.send_header('Content-Type', kind)
        self.end_headers()
        self.wfile.write(body.encode())
    def do_GET(self):
        assert self.headers['Authorization'] == 'Bearer fixture-only'
        requests.append(self.path)
        if self.path.startswith('/v1/parameters'):
            payload = {'user_input_form': [], 'opening_statement': 'Ella test fixture', 'file_upload': {'enabled': False}}
        else:
            payload = {'data': [], 'has_more': False, 'limit': 20}
        self.send(json.dumps(payload))
    def do_POST(self):
        assert self.headers['Authorization'] == 'Bearer fixture-only'
        data = json.loads(self.rfile.read(int(self.headers['Content-Length'])))
        requests.append((self.path, data))
        if self.path.endswith('/name'):
            self.send(json.dumps({'id': cid, 'name': 'Fixture chat'}))
            return
        assert data['response_mode'] == 'streaming'
        message = {'conversation_id': cid, 'message_id': cid, 'task_id': cid, 'id': cid}
        events = [{'event': 'message', 'answer': 'שלום עולם — fixture response', **message}, {'event': 'message_end', **message}]
        self.send(''.join('data: ' + json.dumps(event) + '\n\n' for event in events), 'text/event-stream')

threading.Thread(target=ThreadingHTTPServer(('127.0.0.1', 18764), DifyFixture).serve_forever, daemon=True).start()
base = 'http://127.0.0.1:3000'

from urllib.request import Request, build_opener, HTTPCookieProcessor, ProxyHandler
from urllib.error import HTTPError
from base64 import b64encode

opener = build_opener(ProxyHandler({}), HTTPCookieProcessor())
auth = 'Basic ' + b64encode(b'preview:fixture-preview').decode()
session_cookie = ''

def request(path, expected=200, body=None, authorized=True, extra=None):
    global session_cookie
    headers = {'Authorization': auth} if authorized else {}
    if session_cookie:
        headers['Cookie'] = session_cookie
    if body is not None:
        headers['Content-Type'] = 'application/json'
    headers.update(extra or {})
    req = Request(base + path, data=json.dumps(body).encode() if body is not None else None, headers=headers)
    try:
        result = opener.open(req, timeout=5)
    except HTTPError as error:
        result = error
    with result:
        assert result.status == expected, (path, result.status, expected)
        if result.headers.get('Set-Cookie', '').startswith('session_id='):
            session_cookie = result.headers['Set-Cookie'].split(';', 1)[0]
        return result.read().decode()

proof = request('/proof', authorized=False)
assert 'dir="rtl"' in proof and 'Dify' in proof
request('/api/parameters', 401, authorized=False)
request('/api/chat-messages', 400, {'query': ' '})
request('/api/chat-messages', 403, {'query': 'test'}, extra={'Origin': 'https://elsewhere.example'})
request('/api/chat-messages', 415, {'query': 'test'}, extra={'Content-Type': 'text/plain'})
request('/api/chat-messages', 413, {'query': 'x' * 33000})
request('/api/conversations')
assert 'Ella test fixture' in request('/api/parameters')
output = request('/api/chat-messages', body={'query': 'fixture test'})
assert any(json.loads(line[6:]).get('answer','').startswith('שלום') for line in output.splitlines() if line.startswith('data: '))
post = next(data for path, data in (entry for entry in requests if isinstance(entry, tuple)) if path.endswith('/chat-messages'))
assert any('/parameters?user=' in entry and post['user'] in entry for entry in requests if isinstance(entry, str))
print('PASS proof, RTL markup, preview gate, request validation, session continuity and Hebrew SSE against local fixture')
