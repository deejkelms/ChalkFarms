'use client'

import { useState } from 'react'

export default function BookCallForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      problem: (form.elements.namedItem('problem') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (res.ok && json.redirectUrl) {
        window.location.href = json.redirectUrl
      } else {
        setError('Something went wrong. Please try again or email us directly.')
        setLoading(false)
      }
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-[13px] font-medium mb-6">Tell us a little about yourself.</div>

      <div>
        <label className="block text-[11px] uppercase tracking-[0.08em] text-[var(--text-secondary)] mb-[6px]">
          Your name
        </label>
        <input
          type="text"
          name="name"
          placeholder="First and last name"
          required
          className="w-full px-[14px] py-[10px] text-[14px] bg-white border-chalk-2 rounded-chalk text-[var(--text)] outline-none focus:border-[var(--text)]"
        />
      </div>

      <div>
        <label className="block text-[11px] uppercase tracking-[0.08em] text-[var(--text-secondary)] mb-[6px]">
          Work email
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@company.com"
          required
          className="w-full px-[14px] py-[10px] text-[14px] bg-white border-chalk-2 rounded-chalk text-[var(--text)] outline-none focus:border-[var(--text)]"
        />
      </div>

      <div>
        <label className="block text-[11px] uppercase tracking-[0.08em] text-[var(--text-secondary)] mb-[6px]">
          Company
        </label>
        <input
          type="text"
          name="company"
          placeholder="Company name"
          required
          className="w-full px-[14px] py-[10px] text-[14px] bg-white border-chalk-2 rounded-chalk text-[var(--text)] outline-none focus:border-[var(--text)]"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-[6px]">
          <label className="text-[11px] uppercase tracking-[0.08em] text-[var(--text-secondary)]">
            What's the problem you're trying to solve?
          </label>
          <span className="text-[11px] text-[var(--text-secondary)] italic opacity-70">Optional</span>
        </div>
        <textarea
          name="problem"
          placeholder="Give us a sense of where you are and what's not working. The more context you share, the more useful the call will be."
          rows={4}
          className="w-full px-[14px] py-[10px] text-[14px] bg-white border-chalk-2 rounded-chalk text-[var(--text)] outline-none focus:border-[var(--text)] resize-y leading-[1.6]"
        />
      </div>

      {error && (
        <p className="text-[13px] text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-[13px] bg-[var(--text)] text-white rounded-chalk text-[14px] font-medium cursor-pointer disabled:opacity-60"
      >
        {loading ? 'One moment…' : 'Continue to scheduling →'}
      </button>

      <p className="text-[12px] text-[var(--text-secondary)] text-center leading-[1.5]">
        We'll never share your information or add you to a list without asking.
      </p>
    </form>
  )
}
