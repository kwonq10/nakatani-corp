import { getPayload } from 'payload'
import config from '@payload-config'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'お名前・メールアドレス・お問い合わせ内容は必須です' },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config })

    await payload.create({
      collection: 'contacts',
      data: {
        name,
        email,
        ...(company ? { company } : {}),
        message,
      },
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[POST /api/contact]', err)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。しばらくしてから再度お試しください。' },
      { status: 500 },
    )
  }
}
