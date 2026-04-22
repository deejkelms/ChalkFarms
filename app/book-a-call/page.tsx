import type { Metadata } from 'next'
import ProofBar from '@/components/ProofBar'
import BookCallForm from '@/components/BookCallForm'

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

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/mackenzieleahy/30-minute-meeting-clone'

export default function BookACallPage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b-chalk">
        {/* Left — context */}
        <div className="px-5 sm:px-10 py-10 sm:py-14 border-b-chalk lg:border-b-0 lg:border-r-chalk">
          <div className="eyebrow mb-5">Book a call</div>
          <h1 className="font-display text-[2rem] sm:text-[2.5rem] leading-[1.15] mb-4">
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
        <div className="px-5 sm:px-10 py-10 sm:py-14" style={{ background: 'var(--bg-secondary)' }}>
          <BookCallForm />
        </div>
      </div>

      <ProofBar />
    </>
  )
}
