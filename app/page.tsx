import Link from 'next/link'
import ProofBar from '@/components/ProofBar'
import CtaStrip from '@/components/CtaStrip'

const services = [
  { num: '01', name: 'Paid media management', desc: 'LinkedIn, Google, and Meta built for pipeline — not just impressions.', price: '$6,000/mo' },
  { num: '02', name: 'Performance creative', desc: 'Creative built to convert, not just to look good.', price: '$5,000/mo' },
  { num: '03', name: 'Lifecycle and retention', desc: 'From first impression to closed deal — and everything after.', price: '$5,000/mo' },
  { num: '04', name: 'Conversion architecture', desc: 'Your website should be your best salesperson. We rebuild it to perform.', price: '$40,000' },
  { num: '05', name: 'Growth strategy', desc: 'ICP, channel strategy, and a 90-day roadmap. The plan before the spend.', price: '$8,000' },
  { num: '06', name: 'Greenhouse', desc: 'Our free editorial hub for growth-stage founders and marketing leads.', price: 'Free' },
]

const clients = ['FELFEL', 'Benchmark Vehicles', 'JVP Labs', 'Jennifer Hollister Group', 'Joann Hoffman']

const pillars = [
  'Audience and ICP strategy',
  'Channel architecture',
  'Creative built to convert',
  'Full-funnel measurement',
  'AI-enabled delivery',
  'Transparent reporting',
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-8 pt-16 pb-14 border-b-chalk">
        <div className="eyebrow mb-5">Growth marketing agency</div>
        <h1 className="font-display text-[3.25rem] leading-[1.1] mb-6 max-w-[680px]">
          Full-funnel growth marketing for{' '}
          <span className="italic text-[var(--text-secondary)]">challenger brands.</span>
        </h1>
        <p className="text-[16px] leading-[1.7] text-[var(--text-secondary)] max-w-[560px] mb-8">
          Chalk Farms builds the marketing engines that take growth-stage companies from stalled to
          scalable — across paid media, performance creative, lifecycle marketing, and conversion
          strategy.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/services"
            className="inline-block text-[13px] font-medium px-6 py-3 bg-[var(--text)] text-white rounded-chalk no-underline"
          >
            See our services
          </Link>
          <Link
            href="/work"
            className="text-[13px] text-[var(--text-secondary)] no-underline"
          >
            View our work →
          </Link>
        </div>
      </section>

      {/* Client logo bar */}
      <div className="border-b-chalk py-4">
        <p className="text-center text-[11px] tracking-[0.1em] uppercase text-[var(--text-secondary)] mb-3">
          Growth-stage brands that chose to scale differently
        </p>
        <div className="flex gap-10 items-center flex-wrap justify-center px-8">
          {clients.map((client, i) => (
            <span key={client} className="flex items-center gap-10">
              <span className="text-[13px] font-medium text-[var(--text-secondary)]">{client}</span>
              {i < clients.length - 1 && (
                <span className="w-[3px] h-[3px] rounded-full bg-[var(--border-secondary)]" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Proof bar */}
      <ProofBar />

      {/* Services */}
      <section className="px-8 py-14 border-b-chalk">
        <p className="text-[11px] tracking-[0.12em] uppercase text-[var(--text-secondary)] mb-4">
          Services
        </p>
        <h2 className="font-display text-[2.5rem] leading-[1.2] mb-10 max-w-[560px]">
          Everything you need to grow.{' '}
          <span className="italic text-[var(--text-secondary)]">Nothing you don't.</span>
        </h2>
        <div
          className="grid grid-cols-3 border-chalk rounded-chalk-lg overflow-hidden"
          style={{ gap: '1px', background: 'var(--border)' }}
        >
          {services.map((s) => (
            <div key={s.num} className="bg-white p-6">
              <div className="text-[11px] text-[var(--text-secondary)] font-medium mb-3">{s.num}</div>
              <div className="text-[14px] font-medium mb-2">{s.name}</div>
              <div className="text-[12px] text-[var(--text-secondary)] leading-[1.55] mb-4">{s.desc}</div>
              <div className="text-[12px] text-[var(--text-secondary)] border-t-chalk pt-3">
                From <strong className="text-[var(--text)] font-medium">{s.price}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work preview */}
      <section className="px-8 py-14 border-b-chalk">
        <p className="text-[11px] tracking-[0.12em] uppercase text-[var(--text-secondary)] mb-4">Work</p>
        <h2 className="font-display text-[2.5rem] leading-[1.2] mb-10 max-w-[560px]">
          Results that <span className="italic text-[var(--text-secondary)]">speak plainly.</span>
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <Link href="/work/felfel" className="block border-chalk rounded-chalk-lg p-7 no-underline text-[var(--text)] hover:border-chalk-2 transition-colors">
            <div className="text-[11px] tracking-[0.1em] uppercase text-[var(--text-secondary)] mb-3">
              FELFEL &nbsp;·&nbsp; Food tech / B2B
            </div>
            <div className="font-display text-[1.35rem] leading-[1.35] mb-4">
              From below-goal pipeline to 2.5x target in 60 days.
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[2rem]">103</span>
              <span className="text-[12px] text-[var(--text-secondary)]">SQLs in March 2026 vs. 40/month goal</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-1">
              {['LinkedIn', 'Meta', 'Google', 'HubSpot'].map((tag) => (
                <span key={tag} className="text-[11px] px-[9px] py-[3px] rounded-full border-chalk-2 text-[var(--text-secondary)]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-[13px] text-[var(--text-secondary)] mt-4">Read case study →</div>
          </Link>

          <Link href="/work/benchmark-vehicles" className="block border-chalk rounded-chalk-lg p-7 no-underline text-[var(--text)] hover:border-chalk-2 transition-colors">
            <div className="text-[11px] tracking-[0.1em] uppercase text-[var(--text-secondary)] mb-3">
              Benchmark Vehicles &nbsp;·&nbsp; Premium B2C
            </div>
            <div className="font-display text-[1.35rem] leading-[1.35] mb-4">
              Built from zero to demand they couldn't keep up with.
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[2rem]">2x</span>
              <span className="text-[12px] text-[var(--text-secondary)]">Returning customers. Media paused — pipeline full.</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-1">
              {['YouTube', 'Google', 'PMax', 'Meta'].map((tag) => (
                <span key={tag} className="text-[11px] px-[9px] py-[3px] rounded-full border-chalk-2 text-[var(--text-secondary)]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-[13px] text-[var(--text-secondary)] mt-4">Read case study →</div>
          </Link>
        </div>
      </section>

      {/* The model */}
      <section className="px-8 py-14 border-b-chalk">
        <p className="text-[11px] tracking-[0.12em] uppercase text-[var(--text-secondary)] mb-4">The model</p>
        <h2 className="font-display text-[2.5rem] leading-[1.2] mb-10 max-w-[560px]">
          Strategy first.{' '}
          <span className="italic text-[var(--text-secondary)]">Performance always.</span>
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="text-[14px] leading-[1.75] text-[var(--text-secondary)] space-y-4">
            <p>
              Most growth agencies are execution shops. They take your brief, run your ads, and
              report back. What they can't do is tell you why your ICP is wrong, why your funnel is
              leaking, or why you're spending on the wrong channel.
            </p>
            <p>
              Chalk Farms was built by operators who've done the work inside startups and lean
              teams — where there's no room for experiments that don't move the needle. Strategy
              first, performance always.
            </p>
            <p>
              AI is embedded in how we work, not what we sell. We move faster and cost less than
              an in-house team.
            </p>
          </div>
          <div
            className="flex flex-col rounded-chalk-lg overflow-hidden border-chalk"
            style={{ gap: '1px', background: 'var(--border)' }}
          >
            {pillars.map((pillar) => (
              <div key={pillar} className="bg-white px-5 py-4 flex items-center gap-4">
                <div className="w-[6px] h-[6px] rounded-full bg-[var(--green)] flex-shrink-0" />
                <span className="text-[14px] font-medium">{pillar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Greenhouse teaser */}
      <section className="px-8 py-14 border-b-chalk">
        <div
          className="rounded-chalk-lg p-10 grid gap-8"
          style={{ background: 'var(--bg-secondary)', gridTemplateColumns: '1fr auto', alignItems: 'center' }}
        >
          <div>
            <div className="text-[11px] tracking-[0.1em] uppercase text-[var(--text-secondary)] mb-3">
              Greenhouse
            </div>
            <div className="font-display text-[1.5rem] mb-3">
              Where growth-stage thinking gets published.
            </div>
            <div className="text-[14px] text-[var(--text-secondary)] leading-[1.6]">
              Frameworks, channel playbooks, and honest POVs for founders and marketing leads. No
              fluff, no gatekeeping.
            </div>
          </div>
          <Link
            href="/greenhouse"
            className="inline-block text-[13px] font-medium px-[22px] py-3 border-chalk-2 rounded-chalk no-underline text-[var(--text)] whitespace-nowrap"
          >
            Explore Greenhouse →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CtaStrip
        headline="Ready to build a pipeline that"
        headlineItalic="actually scales?"
        note="No commitment. 30 minutes. We'll tell you what we'd do differently."
      />
    </>
  )
}
