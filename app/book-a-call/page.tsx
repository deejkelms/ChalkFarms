import type { Metadata } from 'next'
import ProofBar from '@/components/ProofBar'

export const metadata: Metadata = {
  title: 'Book a Call — Chalk Farms',
  description: 'A straight 30-minute conversation about your situation.',
}

const expectations = [
  "A diagnosis, not a pitch. We'll ask about your current program and what's not working.",
  "Honest feedback. If we're not the right fit, we'll say so and point you somewhere better.",
  "A clear next step. You'll leave with something actionable.",
  'No commitment required. The call is free.',
]

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? ''

export default function BookACallPage() {
  return (
    <>
      <div
        className="grid border-b-chalk"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Left — context */}
        <div className="px-10 py-14 border-r-chalk">
          <div className="eyebrow mb-5">Book a call</div>
          <h1 className="font-display text-[2.5rem] leading-[1.15] mb-4">
            Let's talk about{' '}
            <span className="italic text-[var(--text-secondary)]">what's actually going on.</span>
          </h1>
          <p className="text-[15px] leading-[1.7] text-[var(--text-secondary)] mb-8 max-w-[400px]">
            This isn't a sales call. It's a straight 30-minute conversation about your situation —
            where your growth program stands, what's blocking it, and whether Chalk Farms is the
            right fit.
          </p>
          <div className="border-t-chalk pt-6">
            <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-secondary)] mb-4">
              What to expect
            </div>
            <div className="flex flex-col gap-[10px]">
              {expectations.map((item) => (
                <div key={item} className="flex items-start gap-[10px] text-[13px] text-[var(--text-secondary)] leading-[1.5]">
                  <div className="w-[5px] h-[5px] rounded-full bg-[var(--green)] flex-shrink-0 mt-[5px]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="px-10 py-14" style={{ background: 'var(--bg-secondary)' }}>
          <div className="text-[13px] font-medium mb-6">Tell us a little about yourself.</div>
          <form
            action={CALENDLY_URL || '#'}
            method="get"
            className="space-y-5"
          >
            <div>
              <div className="flex items-center justify-between mb-[6px]">
                <label className="text-[11px] uppercase tracking-[0.08em] text-[var(--text-secondary)]">
                  Your name
                </label>
              </div>
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

            <button
              type="submit"
              className="w-full py-[13px] bg-[var(--text)] text-white rounded-chalk text-[14px] font-medium mt-2 cursor-pointer"
            >
              Continue to scheduling →
            </button>

            <p className="text-[12px] text-[var(--text-secondary)] text-center leading-[1.5]">
              We'll never share your information or add you to a list without asking.
            </p>
          </form>
        </div>
      </div>

      <ProofBar />
    </>
  )
}
