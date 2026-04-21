import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FELFEL Case Study — Chalk Farms',
  description: 'From stalled pipeline to 3x monthly SQL growth in 60 days.',
}

const stats = [
  { num: '3x', label: 'SQL volume growth within 60 days of engagement' },
  { num: '103', label: 'SQLs generated in March 2026 vs. 40/month goal' },
  { num: '2.5x', label: 'Above monthly target, sustained over 6+ consecutive weeks' },
]

const channels = [
  { name: 'LinkedIn', role: 'Quality driver. Targets decision-makers by title and company size.' },
  { name: 'Meta', role: 'Volume driver. Expanded audiences for top-of-funnel reach and retargeting.' },
  { name: 'Google', role: 'Efficiency driver. Search and display capturing in-market demand.' },
]

const bars = [
  { label: 'Jan 2026', value: 30, width: '29%', type: 'before' as const },
  { label: 'Feb 2026', value: '52 ↑ start 2/9', width: '50%', type: 'after' as const },
  { label: 'Mar 2026', value: 103, width: '99%', type: 'after' as const },
]

export default function FelfelCaseStudy() {
  return (
    <article>
      {/* Header */}
      <section className="px-8 pt-10 pb-8">
        <div className="cs-eyebrow mb-5" style={{
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--green)' }} />
          Case Study &nbsp;·&nbsp; FELFEL
        </div>
        <h1
          className="font-display mb-6 max-w-[680px]"
          style={{ fontSize: '2.75rem', lineHeight: '1.15' }}
        >
          From stalled pipeline to{' '}
          <em className="italic text-[var(--text-secondary)]">3x monthly SQL growth</em> in 60 days.
        </h1>

        {/* About */}
        <div
          className="rounded-chalk-lg p-5 mb-8 flex gap-5"
          style={{ background: 'var(--bg-secondary)' }}
        >
          <div
            className="text-[11px] tracking-[0.1em] uppercase text-[var(--text-secondary)] flex-shrink-0 pt-[2px]"
            style={{ minWidth: '52px' }}
          >
            About
          </div>
          <div className="text-[14px] leading-[1.65] text-[var(--text-secondary)]">
            FELFEL brings restaurant-quality, chef-crafted meals into the office through a smart
            fridge platform — stocked every morning, open 24/7, zero admin. Trusted by 1,000+
            companies across 12+ years. Founded in Switzerland, now serving the NYC tri-state market.
          </div>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Client', value: 'FELFEL NYC' },
            { label: 'Industry', value: 'Food Tech / Workplace' },
            { label: 'Services', value: 'Paid Media, Lifecycle, Tracking' },
            { label: 'Engagement start', value: 'February 2026' },
          ].map((m) => (
            <div key={m.label}>
              <label className="block text-[11px] tracking-[0.1em] uppercase text-[var(--text-secondary)] mb-[6px]">
                {m.label}
              </label>
              <span className="text-[14px] font-medium">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 rounded-chalk-lg overflow-hidden border-chalk my-8"
          style={{ gap: '1px', background: 'var(--border)' }}
        >
          {stats.map((s) => (
            <div key={s.num} className="bg-white p-7">
              <div className="font-display text-[2.75rem] leading-none mb-2">{s.num}</div>
              <div className="text-[13px] text-[var(--text-secondary)] leading-[1.4]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="px-8 pb-8">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--text-secondary)] mt-8 mb-4">
          The situation
        </div>
        <p className="text-[16px] leading-[1.75] max-w-[640px] mb-5">
          FELFEL had paid media running across three channels. The problem: they couldn't tell what
          was working. Ads were stale, audiences were broad, attribution was broken, and the program
          was consistently missing its 40 SQL/month target — averaging around 30.
        </p>

        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--text-secondary)] mt-8 mb-4">
          The approach
        </div>
        <p className="text-[16px] leading-[1.75] max-w-[640px] mb-6">
          Before touching a single campaign, we rebuilt the tracking infrastructure — GA4, GTM, and
          HubSpot. Then redesigned all creative and assigned each channel a distinct role:
        </p>
        <div className="grid grid-cols-3 gap-3 mb-8">
          {channels.map((ch) => (
            <div key={ch.name} className="rounded-chalk p-5" style={{ background: 'var(--bg-secondary)' }}>
              <div className="text-[13px] font-medium mb-[6px]">{ch.name}</div>
              <div className="text-[12px] text-[var(--text-secondary)] leading-[1.4]">{ch.role}</div>
            </div>
          ))}
        </div>

        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--text-secondary)] mt-8 mb-4">
          The results
        </div>

        {/* Bar chart */}
        <div className="border-chalk rounded-chalk-lg overflow-hidden my-8">
          <div className="flex items-center justify-between px-5 py-4 border-b-chalk">
            <strong className="text-[14px] font-medium">Monthly SQL volume</strong>
            <span className="text-[12px] text-[var(--text-secondary)]">Goal: 40 SQLs/month</span>
          </div>
          <div className="p-5">
            {bars.map((bar) => (
              <div key={bar.label} className="flex items-center gap-[10px] mb-[10px]">
                <div
                  className="text-[11px] text-[var(--text-secondary)] text-right flex-shrink-0"
                  style={{ width: '56px' }}
                >
                  {bar.label}
                </div>
                <div
                  className="flex-1 h-7 rounded-[4px] overflow-hidden"
                  style={{ background: 'var(--bg-secondary)' }}
                >
                  <div
                    className="h-full rounded-[4px] flex items-center pl-[10px] text-[12px] font-medium"
                    style={{
                      width: bar.width,
                      background: bar.type === 'after' ? '#1a2e1a' : 'var(--bg-secondary)',
                      color: bar.type === 'after' ? '#a8d4a8' : 'var(--text-secondary)',
                      border: bar.type === 'before' ? '0.5px solid var(--border-secondary)' : undefined,
                    }}
                  >
                    {bar.value}
                  </div>
                </div>
              </div>
            ))}
            <div className="text-[11px] text-[var(--text-secondary)] italic mt-2">
              SQLs = Sales Qualified Leads entering the US pipeline.
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <div className="border-l-[2px] border-[var(--green)] pl-5 my-6">
          <div className="font-display text-[1.35rem] leading-[1.5] mb-[6px]">
            "Within three weeks of rebuilding the program, weekly SQLs went from 3–6 to 12–15. By
            March, we were running at 2.5x goal consistently."
          </div>
          <div className="text-[12px] text-[var(--text-secondary)]">
            Chalk Farms — FELFEL engagement review, March 2026
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between border-chalk rounded-chalk-lg px-7 py-6 mt-12 flex-wrap gap-4">
          <div className="font-display text-[1.35rem]">Ready to rebuild your pipeline?</div>
          <Link
            href="/book-a-call"
            className="inline-block text-[13px] font-medium px-6 py-3 bg-[var(--text)] text-white rounded-chalk no-underline"
          >
            Book a call
          </Link>
        </div>
      </section>
    </article>
  )
}
