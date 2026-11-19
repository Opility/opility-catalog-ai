import type { NextRequest } from 'next/server'
import { client, getInfo } from '@/app/api/utils/common'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const { user } = getInfo(request)
    formData.set('user', user)
    const res = await client.fileUpload(formData)
    return new Response(res.data.id as any)
  }
  catch {
    return new Response('Upload failed.', { status: 502 })
  }
}
