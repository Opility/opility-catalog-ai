import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const windowMs = 60_000
let windowStart = 0
let writes = 0

export async function middleware(request: NextRequest) {
  if (!process.env.DIFY_API_KEY)
  { return NextResponse.json({ error: 'Chat service is unavailable.' }, { status: 503 }) }

  // A shared password restricts access to the private preview.
  // Public deployment requires a distributed limiter and abuse protection.
  const password = process.env.DIFY_PREVIEW_PASSWORD
  const credentials = request.headers.get('authorization')
  if (!password || credentials !== `Basic ${btoa(`preview:${password}`)}`) {
    return NextResponse.json({ error: 'Preview authentication required.' }, {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Opility Catalog AI"' },
    })
  }

  if (request.method === 'POST') {
    if (request.headers.get('sec-fetch-site') === 'cross-site')
    { return NextResponse.json({ error: 'Cross-site request.' }, { status: 403 }) }
    const origin = request.headers.get('origin')
    if (origin && new URL(request.url).origin !== origin)
    { return NextResponse.json({ error: 'Invalid origin.' }, { status: 403 }) }

    const upload = request.nextUrl.pathname === '/api/file-upload'
    const type = request.headers.get('content-type')?.split(';')[0].trim()
    if (type !== (upload ? 'multipart/form-data' : 'application/json'))
    { return NextResponse.json({ error: 'Unsupported content type.' }, { status: 415 }) }

    const length = request.headers.get('content-length')
    if (!length || !/^\d+$/.test(length))
    { return NextResponse.json({ error: 'Content length required.' }, { status: 411 }) }
    if (Number(length) > (upload ? 5 * 1024 * 1024 : 32 * 1024))
    { return NextResponse.json({ error: 'Request is too large.' }, { status: 413 }) }

    const now = Date.now()
    if (now - windowStart >= windowMs) {
      windowStart = now
      writes = 0
    }
    if (++writes > 20)
    { return NextResponse.json({ error: 'Try again shortly.' }, { status: 429, headers: { 'Retry-After': '60' } }) }
  }

  const response = NextResponse.next()
  response.headers.set('Cache-Control', 'no-store')
  return response
}

export const config = { matcher: ['/api/:path*'] }
