'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setDone(true)
      } else {
        setError('Something went wrong. Try again.')
        setLoading(false)
      }
    } catch {
      setError('Something went wrong. Try again.')
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div className="pt-6">
        <p className="text-[14px] font-medium">You're in.</p>
        <p className="text-[13px] text-[var(--text-secondary)] mt-1">
          We'll send new Greenhouse pieces directly to you when they're ready.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-[10px] mt-6">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="flex-1 px-[14px] py-[11px] text-[14px] bg-white border-chalk-2 rounded-chalk outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-[22px] py-[11px] bg-[var(--text)] text-white rounded-chalk text-[13px] font-medium whitespace-nowrap cursor-pointer disabled:opacity-60"
        >
          {loading ? '…' : 'Subscribe'}
        </button>
      </div>
      {error && <p className="text-[12px] text-red-500 mt-2">{error}</p>}
      <div className="text-[11px] text-[var(--text-secondary)] mt-3">
        No cadence. No filler. Unsubscribe anytime.
      </div>
    </form>
  )
}
