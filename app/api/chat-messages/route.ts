import type { Readable } from 'node:stream'
import type { NextRequest } from 'next/server'
import { Readable as NodeReadable } from 'node:stream'
import { client, getInfo, setSession } from '@/app/api/utils/common'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  if (!body || typeof body.query !== 'string' || !body.query.trim() || body.query.length > 12000)
  { return Response.json({ error: 'Enter a prompt of up to 12,000 characters.' }, { status: 400 }) }

  const { inputs, query, files, conversation_id: conversationId } = body
  const { user, sessionId } = getInfo(request)
  try {
    const { data } = await client.createChatMessage(inputs, query, user, true, conversationId, files)
    const stream = NodeReadable.toWeb(data as Readable) as ReadableStream<Uint8Array>
    return new Response(stream, {
      headers: { ...setSession(sessionId), 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-store' },
    })
  }
  catch {
    return Response.json({ error: 'Unable to contact Ella.' }, { status: 502 })
  }
}
