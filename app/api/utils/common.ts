import type { NextRequest } from 'next/server'
import { ChatClient } from 'dify-client'
import { v4 } from 'uuid'
import 'server-only'
import { APP_ID, APP_INFO } from '@/config'

const userPrefix = `user_${APP_ID}:`

export const getInfo = (request: NextRequest) => {
  const cookie = request.cookies.get('session_id')?.value ?? ''
  const sessionId = /^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i.test(cookie) ? cookie : v4()
  const user = userPrefix + sessionId
  return {
    sessionId,
    user,
  }
}

export const setSession = (sessionId: string) => {
  if (APP_INFO.disable_session_same_site)
  { return { 'Set-Cookie': `session_id=${sessionId}; Path=/; HttpOnly; SameSite=None; Secure` } }

  return { 'Set-Cookie': `session_id=${sessionId}; Path=/; HttpOnly; SameSite=Lax; Secure` }
}

// Never export the Dify secret from a module imported by client components.
const apiKey = process.env.DIFY_API_KEY || ''
const apiUrl = process.env.DIFY_API_URL || 'https://api.dify.ai/v1'
export const client = new ChatClient(apiKey, apiUrl)
