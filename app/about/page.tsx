import type { Metadata } from 'next'
import CtaStrip from '@/components/CtaStrip'

export const metadata: Metadata = {
  title: 'About — Chalk Farms',
  description: "We build growth engines for companies that can't afford to get it wrong.",
}

const steps = [
  {
    num: 'Step 01',
    title: 'Diagnose before we prescribe',
    desc: "Every engagement starts with an audit — your channels, your funnel, your tracking, your ICP. We don't touch a campaign until we understand what's broken.",
  },
  {
    num: 'Step 02',
    title: 'Build the plan, then the program',
    desc: 'Before we launch anything, you have a clear channel strategy, a defined ICP, a creative framework, and a 90-day roadmap.',
  },
  {
    num: 'Step 03',
    title: 'Execute, test, and compound',
    desc: 'We launch fast, measure everything, and iterate weekly. Every decision is traceable back to data. The program improves every month.',
  },
]

const beliefs = [
  { title: 'Speed compounds', desc: 'A good campaign launched today beats a perfect one next month. Momentum matters more than polish.' },
  { title: 'Creative is a performance lever', desc: "The best media buying can't save bad creative. We treat them as one system." },
  { title: 'Test everything, assume nothing', desc: 'Gut instinct gets us to a hypothesis. Data gets us to a decision.' },
  { title: 'Small is a feature', desc: 'You work with the people who built the program. No bait-and-switch to junior staff.' },
  { title: 'Report on outcomes, not activity', desc: 'Pipeline, CAC, and revenue are the report. Impressions are context.' },
  { title: 'AI is how we work, not what we sell', desc: "We use it to move faster. We don't package it as a product." },
]

const verticals = [
  { name: 'B2B SaaS and tech', desc: 'LinkedIn-first pipeline programs for software companies with long sales cycles.' },
  { name: 'Health tech', desc: 'Go-to-market programs for health tech navigating institutional buyers and credibility-first sales.' },
  { name: 'Premium B2C', desc: 'Performance programs for high-ticket consumer brands with passion-driven buyers.' },
  { name: 'Professional services', desc: 'Digital acquisition for law firms and consulting practices growing beyond referrals.' },
  { name: 'Food and workplace tech', desc: 'B2B demand gen for companies selling into office and facilities decision-makers.' },
  { name: 'Growth-stage challengers', desc: "Any company $2M–$50M with a defined product and a marketing program that hasn't kept pace." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 sm:px-8 pt-12 sm:pt-16 pb-10 sm:pb-14 border-b-chalk">
        <div className="eyebrow mb-5">About</div>
        <h1 className="font-display text-[2.25rem] sm:text-[3.25rem] leading-[1.1]">
          We build growth engines for{' '}
          <span className="italic text-[var(--text-secondary)]">
            companies that can't afford to get it wrong.
          </span>
        </h1>
      </section>

      {/* Thesis */}
      <section className="px-5 sm:px-8 py-8 sm:py-10 border-b-chalk">
        <div className="eyebrow mb-5">Our thesis</div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.75fr] gap-8 lg:gap-12 lg:items-start">
          <div className="font-display text-[1.75rem] leading-[1.2]">
            Growth marketing is broken{' '}
            <span className="italic text-[var(--text-secondary)]">for the middle.</span>
          </div>
          <div className="text-[15px] leading-[1.8] text-[var(--text-secondary)] space-y-5">
            <p>
              The holding companies are built for enterprises. The freelance economy is built for
              one-off projects. Most performance agencies are built for DTC brands that can pour
              money into Meta and measure ROAS in real time.
            </p>
            <p>
              That leaves an entire tier of companies — growth-stage, $2M to $50M — either
              overpaying for an agency that treats them like a B-level client, or piecing together
              freelancers who don't talk to each other.
            </p>
            <p>
              <strong className="text-[var(--text)] font-medium">
                Chalk Farms was built for that gap.
              </strong>{' '}
              We bring the accountability of a performance shop and the strategic thinking of an
              integrated agency — without the overhead, the layers, or the account managers who've
              never run a campaign themselves.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-b-chalk">
        <div className="px-5 sm:px-8 pt-8 sm:pt-10">
          <div className="eyebrow mb-5">How we work</div>
          <h2 className="font-display text-[2rem] sm:text-[2.5rem] leading-[1.2] mb-8">
            A process built for{' '}
            <span className="italic text-[var(--text-secondary)]">speed and accountability.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 grid-sep border-t-chalk">
          {steps.map((step, i) => (
            <div key={step.num} className={`bg-white p-6 sm:p-8 ${i < steps.length - 1 ? 'border-b-chalk sm:border-b-0' : ''}`}>
              <div className="text-[11px] font-medium text-[var(--text-secondary)] tracking-[0.06em] mb-4">
                {step.num}
              </div>
              <div className="text-[15px] font-medium mb-3">{step.title}</div>
              <div className="text-[13px] leading-[1.65] text-[var(--text-secondary)]">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Beliefs */}
      <section className="px-5 sm:px-8 py-8 sm:py-12 border-b-chalk">
        <div className="eyebrow mb-5">What we believe</div>
        <h2 className="font-display text-[2rem] sm:text-[2.5rem] leading-[1.2] mb-8">
          The principles that{' '}
          <span className="italic text-[var(--text-secondary)]">shape every engagement.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-sep rounded-chalk-lg overflow-hidden border-chalk">
          {beliefs.map((b) => (
            <div key={b.title} className="bg-white p-6 flex gap-4">
              <div className="w-[6px] h-[6px] rounded-full bg-[var(--green)] flex-shrink-0 mt-[5px]" />
              <div>
                <div className="text-[14px] font-medium mb-[5px]">{b.title}</div>
                <div className="text-[13px] text-[var(--text-secondary)] leading-[1.55]">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who we work with */}
      <section className="px-5 sm:px-8 py-8 sm:py-12 border-b-chalk">
        <div className="eyebrow mb-5">Who we work with</div>
        <h2 className="font-display text-[2rem] sm:text-[2.5rem] leading-[1.2] mb-3">
          Built for the <span className="italic text-[var(--text-secondary)]">challenger brand.</span>
        </h2>
        <p className="text-[15px] text-[var(--text-secondary)] mb-8 max-w-[560px] leading-[1.7]">
          Growth-stage companies across B2B and B2C — $2M to $50M revenue, defined product, real
          market, marketing program that hasn't kept pace.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-sep rounded-chalk-lg overflow-hidden border-chalk">
          {verticals.map((v) => (
            <div key={v.name} className="bg-white p-6">
              <div className="text-[13px] font-medium mb-[5px]">{v.name}</div>
              <div className="text-[12px] text-[var(--text-secondary)] leading-[1.5]">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaStrip
        headline="Want to know if we're"
        headlineItalic="the right fit?"
        buttonText="Book a free 30-minute call"
        note="No pitch. No commitment. Just a straight conversation."
      />
    </>
  )
}
