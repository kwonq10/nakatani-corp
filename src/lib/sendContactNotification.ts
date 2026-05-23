import { Resend } from 'resend'

interface ContactData {
  name: string
  email: string
  company?: string | null
  message: string
}

export async function sendContactNotification(data: ContactData): Promise<void> {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'
  const to = process.env.CONTACT_TO_EMAIL

  if (!to) {
    console.warn('[sendContactNotification] CONTACT_TO_EMAIL が未設定です')
    return
  }

  await resend.emails.send({
    from,
    to,
    subject: `【お問い合わせ】${data.name} 様よりお問い合わせがありました`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #faf8f3; padding: 40px;">
        <div style="border-top: 3px solid #c8a951; padding-top: 24px; margin-bottom: 32px;">
          <h1 style="color: #0a0a0c; font-size: 20px; font-weight: 600; margin: 0;">
            新しいお問い合わせ
          </h1>
          <p style="color: #9a9889; font-size: 12px; margin: 8px 0 0;">
            kanazawa AI starter コーポレートサイト
          </p>
        </div>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e8e6df; color: #9a9889; font-size: 12px; width: 140px; vertical-align: top;">お名前</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e8e6df; color: #0a0a0c; font-size: 14px; vertical-align: top;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e8e6df; color: #9a9889; font-size: 12px; vertical-align: top;">メールアドレス</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e8e6df; color: #0a0a0c; font-size: 14px; vertical-align: top;">${data.email}</td>
          </tr>
          ${
            data.company
              ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e8e6df; color: #9a9889; font-size: 12px; vertical-align: top;">会社名・屋号</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e8e6df; color: #0a0a0c; font-size: 14px; vertical-align: top;">${data.company}</td>
          </tr>
          `
              : ''
          }
          <tr>
            <td style="padding: 12px 0; color: #9a9889; font-size: 12px; vertical-align: top;">お問い合わせ内容</td>
            <td style="padding: 12px 0; color: #0a0a0c; font-size: 14px; vertical-align: top; white-space: pre-wrap;">${data.message}</td>
          </tr>
        </table>

        <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #e8e6df;">
          <p style="color: #9a9889; font-size: 11px; margin: 0;">
            このメールは kanazawa AI starter コーポレートサイトのお問い合わせフォームから自動送信されました。
          </p>
        </div>
      </div>
    `,
  })
}
