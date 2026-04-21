import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work — Chalk Farms',
  description: 'Case studies from growth-stage brands that chose to scale differently.',
}

const caseStudies = [
  {
    client: 'FELFEL',
    vertical: 'Food tech / B2B',
    headline: 'From stalled pipeline to 3x monthly SQL growth in 60 days.',
    stat: '103',
    statLabel: 'SQLs in March 2026 vs. 40/month goal',
    tags: ['LinkedIn', 'Meta', 'Google', 'HubSpot'],
    href: '/work/felfel',
  },
  {
    client: 'Benchmark Vehicles',
    vertical: 'Premium B2C',
    headline: "Built from zero to demand they couldn't keep up with.",
    stat: '2x',
    statLabel: 'Returning customers. Media paused — pipeline full.',
    tags: ['YouTube', 'Google', 'PMax', 'Meta'],
    href: '/work/benchmark-vehicles',
  },
  {
    client: 'JVP Labs',
    vertical: 'B2B SaaS',
    headline: 'Coming soon.',
    stat: '—',
    statLabel: '',
    tags: [],
    href: null,
  },
  {
    client: 'Jennifer Hollister Group',
    vertical: 'Professional services',
    headline: 'Coming soon.',
    stat: '—',
    statLabel: '',
    tags: [],
    href: null,
  },
  {
    client: 'Joann Hoffman',
    vertical: 'Professional services',
    headline: 'Coming soon.',
    stat: '—',
    statLabel: '',
    tags: [],
    href: null,
  },
]

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-8 pt-16 pb-14 border-b-chalk">
        <div className="eyebrow mb-5">Work</div>
        <h1 className="font-display text-[3.25rem] leading-[1.1] mb-4">
          Results that <span className="italic text-[var(--text-secondary)]">speak plainly.</span>
        </h1>
        <p className="text-[16px] leading-[1.7] text-[var(--text-secondary)] max-w-[520px]">
          A look at what happens when strategy comes first. Real numbers, real clients,
          real outcomes.
        </p>
      </section>

      {/* Case study grid */}
      <section className="px-8 py-10">
        <div className="grid grid-cols-2 gap-3">
          {caseStudies.map((cs) => {
            const inner = (
              <>
                <div className="text-[11px] tracking-[0.1em] uppercase text-[var(--text-secondary)] mb-3">
                  {cs.client} &nbsp;·&nbsp; {cs.vertical}
                </div>
                <div className="font-display text-[1.35rem] leading-[1.35] mb-4">{cs.headline}</div>
                {cs.statLabel && (
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-[2rem]">{cs.stat}</span>
                    <span className="text-[12px] text-[var(--text-secondary)]">{cs.statLabel}</span>
                  </div>
                )}
                {cs.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-[9px] py-[3px] rounded-full border-chalk-2 text-[var(--text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {cs.href && (
                  <div className="text-[13px] text-[var(--text-secondary)]">Read case study →</div>
                )}
              </>
            )

            return cs.href ? (
              <Link
                key={cs.client}
                href={cs.href}
                className="block border-chalk rounded-chalk-lg p-7 no-underline text-[var(--text)] hover:border-chalk-2 transition-colors"
              >
                {inner}
              </Link>
            ) : (
              <div
                key={cs.client}
                className="border-chalk rounded-chalk-lg p-7 opacity-50"
              >
                {inner}
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
