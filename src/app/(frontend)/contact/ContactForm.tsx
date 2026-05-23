'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('お名前・メールアドレス・お問い合わせ内容は必須です')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company: company || undefined, message }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'エラーが発生しました')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'エラーが発生しました')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-16 text-center">
        <p className="text-[#c8a951] text-[10px] tracking-[0.45em] uppercase mb-6">Sent</p>
        <h2 className="font-serif text-[#0a0a0c] text-2xl tracking-wide mb-6">
          お問い合わせを受け付けました
        </h2>
        <p className="font-sans text-[#2a2820] text-[14px] leading-loose">
          お送りいただきありがとうございます。
          <br />
          通常2営業日以内にご返信いたします。
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full bg-white border border-[#2a2820]/20 px-5 py-4 font-sans text-[14px] text-[#0a0a0c] placeholder:text-[#9a9889] focus:outline-none focus:ring-2 focus:ring-[#c8a951] focus:border-transparent transition-all duration-200'

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label className="font-sans text-[#2a2820] text-[12px] tracking-[0.15em]">
          お名前 <span className="text-[#c8a951]">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="中谷 健一"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-[#2a2820] text-[12px] tracking-[0.15em]">
          メールアドレス <span className="text-[#c8a951]">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="hello@example.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-[#2a2820] text-[12px] tracking-[0.15em]">
          会社名・屋号
          <span className="text-[#9a9889] ml-2 text-[11px]">任意</span>
        </label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="株式会社〇〇 / フリーランス"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-[#2a2820] text-[12px] tracking-[0.15em]">
          お問い合わせ内容 <span className="text-[#c8a951]">*</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="ご相談内容・ご要望をできるだけ具体的にご記入ください"
          rows={6}
          className={inputClass + ' resize-y'}
        />
      </div>

      {errorMessage && (
        <p className="font-sans text-red-500 text-[13px]">{errorMessage}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center px-10 py-4 bg-[#c8a951] text-[#0a0a0c] font-sans text-[12px] tracking-[0.2em] font-medium hover:bg-[#d4b96a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {status === 'sending' ? '送信中…' : '送信する'}
      </button>

      <p className="font-sans text-[#9a9889] text-[11px] leading-relaxed">
        ご入力いただいた情報は、お問い合わせへの返答以外には使用いたしません。
      </p>
    </div>
  )
}
