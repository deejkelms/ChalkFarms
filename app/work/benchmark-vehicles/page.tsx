import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Benchmark Vehicles Case Study — Chalk Farms',
  description: "Built from zero to demand they couldn't keep up with.",
}

const stats = [
  { num: '18+', label: 'Van pre-bookings per quarter — goal surpassed, media paused to manage demand' },
  { num: '2x', label: 'Returning customer rate driven by retargeting and lifecycle strategy' },
  { num: '27%', label: 'Increase in total site users driven by paid search and organic lift' },
]

const channels = [
  { name: 'YouTube', role: 'Awareness and consideration. Vertical video for action, horizontal for reach. Intent audiences over Interest.' },
  { name: 'Google Search', role: 'High-intent demand capture. Highest CTR (9.25%) at lowest CPC ($0.67).' },
  { name: 'Performance Max', role: 'Conversion engine. 12 form submissions in its first week live. $0.23 CPC by December.' },
  { name: 'Meta', role: 'Retargeting and lookalike audiences built from existing customers.' },
]

const miniStats = [
  { num: '26', label: 'Form submissions in Nov–Dec alone' },
  { num: '$0.23', label: 'CPC on PMax conversions by December' },
  { num: '1,935', label: 'Clicks on email and phone number on site' },
]

export default function BenchmarkVehiclesCaseStudy() {
  return (
    <article>
      {/* Header */}
      <section className="px-8 pt-10 pb-8">
        <div
          style={{
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '1.25rem',
          }}
        >
          <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--green)' }} />
          Case Study &nbsp;·&nbsp; Benchmark Vehicles
        </div>

        <h1
          className="font-display mb-6 max-w-[680px]"
          style={{ fontSize: '2.75rem', lineHeight: '1.15' }}
        >
          Built from zero to{' '}
          <em className="italic text-[var(--text-secondary)]">demand they couldn't keep up with.</em>
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
            Benchmark Vehicles builds fully custom adventure vehicles — Sprinter van conversions,
            INEOS Grenadier upfits, and rally Porsches — from Portland, Oregon. Every build is
            bespoke, high-ticket, and made to order. Before Chalk Farms, their only marketing was
            organic Instagram.
          </div>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Client', value: 'Benchmark Vehicles' },
            { label: 'Industry', value: 'Premium B2C / Adventure' },
            { label: 'Services', value: 'Paid Media, Creative Strategy' },
            { label: 'Starting point', value: 'Zero paid media' },
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
          Benchmark had a loyal Instagram following and a product that sold itself in person. But
          their pipeline was thin — relying on word of mouth for a high-ticket, made-to-order
          product with a 6-month build cycle. Goal: pre-book 18 vans per quarter. Starting point:
          no paid media infrastructure, no tracking, no data.
        </p>

        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--text-secondary)] mt-8 mb-4">
          The approach
        </div>
        <div className="grid grid-cols-2 gap-3 mb-8">
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

        {/* Mini stats */}
        <div className="grid grid-cols-3 gap-3 my-6">
          {miniStats.map((s) => (
            <div key={s.num} className="rounded-chalk p-5" style={{ background: 'var(--bg-secondary)' }}>
              <div className="font-display text-[1.75rem] mb-1">{s.num}</div>
              <div className="text-[12px] text-[var(--text-secondary)] leading-[1.4]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="border-l-[2px] border-[var(--green)] pl-5 my-6">
          <div className="font-display text-[1.35rem] leading-[1.5] mb-[6px]">
            "The goal was to extend the pipeline from 6 months to 18 months. We hit the van
            pre-booking target, doubled returning customers, and grew site users 27% — then paused
            because demand outpaced capacity. That's the right problem to have."
          </div>
          <div className="text-[12px] text-[var(--text-secondary)]">
            Chalk Farms — Benchmark Vehicles engagement review, Q4 2025
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between border-chalk rounded-chalk-lg px-7 py-6 mt-12 flex-wrap gap-4">
          <div className="font-display text-[1.35rem]">
            Ready to build a pipeline your team can't keep up with?
          </div>
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
