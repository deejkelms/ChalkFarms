import type { Metadata } from 'next'
import Link from 'next/link'
import CtaStrip from '@/components/CtaStrip'

export const metadata: Metadata = {
  title: 'Services + Pricing — Chalk Farms',
  description: 'Six service lines built around the complete growth journey.',
}

const services = [
  {
    num: '01',
    name: 'Paid media management',
    price: '$6,000',
    cadence: '/ month starting',
    icp: 'Growth-stage companies with a pipeline or lead volume problem. B2B and B2C.',
    desc: 'LinkedIn, Google, and Meta built for pipeline. We assign each channel a job and optimize against business outcomes, not platform vanity metrics.',
    includes: [
      'Channel strategy and audience architecture',
      'Campaign build, launch, and ongoing management',
      'Weekly reporting with plain-language insights',
      'GA4, GTM, and CRM tracking setup and maintenance',
    ],
  },
  {
    num: '02',
    name: 'Performance creative',
    price: '$5,000',
    cadence: '/ month starting',
    icp: 'Companies with stale creative or launching without an in-house team.',
    desc: "Creative built to convert, not just to look good. Designed around your buyer's psychology — whether B2B decision-maker or premium consumer.",
    includes: [
      'Monthly creative strategy and concepting',
      'Ad creative production (static, video, carousel)',
      'A/B testing structure and creative iteration',
    ],
  },
  {
    num: '03',
    name: 'Lifecycle and retention',
    price: '$5,000',
    cadence: '/ month starting',
    icp: 'B2B companies with a leaky funnel or B2C brands needing to improve LTV.',
    desc: 'From first impression to closed deal — and everything after. HubSpot, email, and nurture sequences that keep your pipeline moving.',
    includes: [
      'HubSpot setup, audit, or optimization',
      'Lead scoring and MQL-to-SQL pipeline design',
      'Email nurture sequence strategy and copywriting',
    ],
  },
  {
    num: '04',
    name: 'Conversion architecture',
    price: '$40,000',
    cadence: 'starting / project',
    icp: "Companies with traffic that isn't converting or a website that hasn't been optimized.",
    desc: "Your website is your best salesperson — or it should be. We redesign and optimize conversion experiences from first click to form submit or purchase.",
    includes: [
      'Conversion audit and funnel analysis',
      'Website redesign or landing page build',
      'Messaging hierarchy and positioning copy',
    ],
  },
  {
    num: '05',
    name: 'Growth strategy',
    price: '$8,000',
    cadence: 'starting / project',
    icp: "Founders who know they need to grow but aren't sure where to start.",
    desc: 'The plan before the spend. ICP definition, channel selection, competitive positioning, and a 90-day roadmap your team can execute against.',
    includes: [
      'ICP definition and buyer journey mapping',
      'Channel strategy and budget allocation framework',
      '90-day growth roadmap with prioritized actions',
    ],
  },
]

const pricing = [
  { name: 'Paid media management', amount: '$6,000', cadence: 'per month, starting', items: ['Up to 2 channels', 'Campaign management', 'Weekly reporting'], featured: false },
  { name: 'Performance creative', amount: '$5,000', cadence: 'per month, starting', items: ['Monthly creative strategy', 'Ad production', 'A/B testing'], featured: false },
  { name: 'Lifecycle and retention', amount: '$5,000', cadence: 'per month, starting', items: ['HubSpot setup', 'Email nurture', 'Lead scoring'], featured: true },
  { name: 'Conversion architecture', amount: '$40,000', cadence: 'project, starting', items: ['Conversion audit', 'Website build', 'Positioning copy'], featured: false },
  { name: 'Growth strategy', amount: '$8,000', cadence: 'project, starting', items: ['ICP and buyer journey', 'Channel strategy', '90-day roadmap'], featured: false, primary: true },
  { name: 'Greenhouse', amount: 'Free', cadence: 'always', items: ['Frameworks and playbooks', 'Channel POVs', 'No email required'], featured: false, cta: 'Explore →', href: '/greenhouse' },
]

const faqs = [
  { q: 'Do you require a minimum contract term?', a: 'Retainer engagements start with a 3-month minimum. After that, month-to-month.' },
  { q: "What's not included in the retainer?", a: 'Ad spend is separate. Media spend goes directly to the platforms, not through us.' },
  { q: 'Can I engage multiple service lines?', a: 'Yes. Paid media and performance creative are most commonly paired.' },
  { q: 'How quickly can we get started?', a: 'Most engagements launch within two weeks of contract signing.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 sm:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12 border-b-chalk">
        <div className="eyebrow mb-5">Services</div>
        <h1 className="font-display text-[2.25rem] sm:text-[3.25rem] leading-[1.15] mb-4 max-w-[680px]">
          The full stack for{' '}
          <span className="italic text-[var(--text-secondary)]">companies ready to scale.</span>
        </h1>
        <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[var(--text-secondary)] max-w-[560px]">
          Six service lines built around the complete growth journey. Engage one or build a full
          program. All of it run by senior operators, not account managers.
        </p>
      </section>

      {/* Service blocks */}
      {services.map((s) => (
        <div
          key={s.num}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] border-b-chalk"
        >
          <div className="px-5 sm:px-8 py-6 sm:py-8 border-b-chalk lg:border-b-0 lg:border-r-chalk">
            <div className="text-[11px] text-[var(--text-secondary)] font-medium mb-3 tracking-[0.06em]">
              {s.num}
            </div>
            <div className="font-display text-[1.5rem] leading-[1.2] mb-4">{s.name}</div>
            <span className="text-[13px] font-medium block mb-4">
              {s.price}{' '}
              <span className="text-[var(--text-secondary)] font-normal text-[12px]">{s.cadence}</span>
            </span>
            <div className="text-[12px] text-[var(--text-secondary)] border-t-chalk pt-4 mt-4">
              <strong className="block text-[11px] uppercase tracking-[0.08em] text-[var(--text)] font-medium mb-1">
                Best for
              </strong>
              {s.icp}
            </div>
          </div>
          <div className="px-5 sm:px-8 py-6 sm:py-8">
            <p className="text-[15px] leading-[1.75] text-[var(--text-secondary)] mb-6">{s.desc}</p>
            <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-secondary)] mb-3">
              What's included
            </div>
            <div className="flex flex-col gap-2 mb-6">
              {s.includes.map((item) => (
                <div key={item} className="flex items-start gap-[10px] text-[13px] leading-[1.45]">
                  <div className="w-[5px] h-[5px] rounded-full bg-[var(--green)] flex-shrink-0 mt-[6px]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Pricing */}
      <section id="pricing" className="px-5 sm:px-8 py-10 sm:py-14">
        <div className="eyebrow mb-5">Pricing</div>
        <h2 className="font-display text-[2rem] sm:text-[2.75rem] leading-[1.15] mb-4">
          Transparent pricing.{' '}
          <span className="italic text-[var(--text-secondary)]">No surprises.</span>
        </h2>
        <p className="text-[15px] text-[var(--text-secondary)] mb-8 max-w-[520px] leading-[1.7]">
          Every engagement is scoped to your actual situation. The numbers below are honest starting
          points — not bait-and-switch minimums.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-sep border-chalk rounded-chalk-lg overflow-hidden mb-10">
          {pricing.map((p) => (
            <div
              key={p.name}
              className="p-5 sm:p-7"
              style={{ background: p.featured ? 'var(--bg-secondary)' : '#fff' }}
            >
              <div className="text-[13px] font-medium mb-[6px]">{p.name}</div>
              <div className="font-display text-[2rem] leading-none mb-1">{p.amount}</div>
              <div className="text-[12px] text-[var(--text-secondary)] mb-5">{p.cadence}</div>
              <div className="h-[0.5px] bg-[var(--border)] mb-5" />
              <div className="flex flex-col gap-2 mb-5">
                {p.items.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)] leading-[1.4]">
                    <span className="text-[var(--green)] font-medium flex-shrink-0">+</span>
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href={p.href ?? '/book-a-call'}
                className={`block w-full text-[12px] font-medium py-[13px] sm:py-[9px] text-center rounded-chalk no-underline ${
                  p.primary
                    ? 'bg-[var(--text)] text-white'
                    : 'bg-transparent border-chalk-2 text-[var(--text)]'
                }`}
              >
                {p.cta ?? 'Book a call'}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h3 className="font-display text-[1.5rem] mb-8">Pricing questions, answered plainly.</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-10">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <div className="text-[14px] font-medium mb-[6px]">{faq.q}</div>
              <div className="text-[13px] text-[var(--text-secondary)] leading-[1.6]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaStrip
        headline="Ready to build a program that"
        headlineItalic="actually delivers?"
        note="No commitment. 30 minutes. We'll tell you what we'd do differently."
      />
    </>
  )
}
