import type { Metadata } from 'next'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Greenhouse — Chalk Farms',
  description: 'Frameworks, channel playbooks, and honest POVs for growth-stage founders.',
}

const categories = ['All', 'Paid media', 'Performance creative', 'Lifecycle and retention', 'Growth strategy', 'Conversion']

const featuredMain = {
  tag: 'Growth strategy',
  title: 'The $0 audit: how to diagnose your growth program before you fix it.',
  desc: "Most companies hire an agency before they understand what's actually broken. The result is an expensive solution to the wrong problem. Here's the diagnostic framework we run on every new engagement.",
  readTime: '8 min read',
}

const featuredSecondary = [
  {
    tag: 'Paid media',
    title: 'Why your LinkedIn CPL is high — and what to actually do about it.',
    desc: "LinkedIn is the highest-intent B2B channel available. It's also the most consistently mismanaged.",
    readTime: '6 min read',
  },
  {
    tag: 'Lifecycle and retention',
    title: 'The difference between a lead nurture sequence and a lead burial sequence.',
    desc: "Most nurture programs don't nurture. They delay. Here's how to tell the difference.",
    readTime: '5 min read',
  },
]

const articles = [
  { tag: 'Paid media', title: "How we assign each channel a job — and why most programs don't.", readTime: '5 min read' },
  { tag: 'Creative', title: 'Why B2B creative looks the same everywhere — and how to fix it.', readTime: '6 min read' },
  { tag: 'Conversion', title: "Your website is losing you leads. Here's where to look first.", readTime: '7 min read' },
  { tag: 'Lifecycle', title: 'HubSpot for non-HubSpot people: what you actually need to set up first.', readTime: '7 min read' },
  { tag: 'Paid media', title: "The Google PMax playbook for companies that aren't e-commerce.", readTime: '6 min read' },
  { tag: 'Strategy', title: 'The ICP exercise every growth-stage company should do before spending on ads.', readTime: '8 min read' },
  { tag: 'Strategy', title: 'What a real 90-day growth roadmap looks like — and what usually gets left out.', readTime: '9 min read' },
  { tag: 'Creative', title: 'What we learned from pausing a campaign that was working too well.', readTime: '5 min read' },
]


export default function GreenhousePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-8 pt-14 pb-14 border-b-chalk">
        <div className="eyebrow mb-5">Greenhouse</div>
        <h1 className="font-display text-[3rem] leading-[1.15] mb-4 max-w-[600px]">
          Where growth-stage thinking{' '}
          <span className="italic text-[var(--text-secondary)]">gets published.</span>
        </h1>
        <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[520px]">
          Frameworks, channel playbooks, and honest POVs for founders and marketing leads
          navigating the gap between scrappy startup and real scale. No fluff, no gatekeeping, no
          email required.
        </p>
      </section>

      {/* Category filter */}
      <div className="px-8 py-3 border-b-chalk flex gap-2 flex-wrap">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`text-[12px] px-[14px] py-[5px] rounded-full border-chalk-2 font-sans cursor-pointer ${
              i === 0 ? 'bg-[var(--text)] text-white border-transparent' : 'text-[var(--text-secondary)] bg-transparent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured articles */}
      <div
        className="grid border-b-chalk"
        style={{ gridTemplateColumns: '1.25fr 1fr', gap: '1px', background: 'var(--border)' }}
      >
        {/* Main featured */}
        <div className="bg-white p-8">
          <div className="text-[11px] tracking-[0.08em] uppercase text-[var(--green)] font-medium mb-3">
            {featuredMain.tag}
          </div>
          <div className="font-display text-[1.9rem] leading-[1.25] mb-3">{featuredMain.title}</div>
          <div className="text-[13px] text-[var(--text-secondary)] leading-[1.65] mb-4">
            {featuredMain.desc}
          </div>
          <div className="flex items-center gap-3 text-[12px] text-[var(--text-secondary)]">
            <span>Chalk Farms</span>
            <span className="w-[3px] h-[3px] rounded-full bg-[var(--border-secondary)]" />
            <span>{featuredMain.readTime}</span>
          </div>
        </div>

        {/* Side featured */}
        <div className="flex flex-col" style={{ gap: '1px', background: 'var(--border)' }}>
          {featuredSecondary.map((article) => (
            <div key={article.title} className="bg-white p-7 flex-1">
              <div className="text-[11px] tracking-[0.08em] uppercase text-[var(--green)] font-medium mb-3">
                {article.tag}
              </div>
              <div className="font-display text-[1.2rem] leading-[1.25] mb-3">{article.title}</div>
              <div className="text-[13px] text-[var(--text-secondary)] leading-[1.65] mb-4">
                {article.desc}
              </div>
              <div className="text-[12px] text-[var(--text-secondary)]">{article.readTime}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Article grid */}
      <section className="px-8 py-10 border-b-chalk">
        <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-secondary)] mb-6">
          Latest from the Greenhouse
        </div>
        <div
          className="grid grid-cols-4 border-chalk rounded-chalk-lg overflow-hidden"
          style={{ gap: '1px', background: 'var(--border)' }}
        >
          {articles.map((article) => (
            <div key={article.title} className="bg-white p-6">
              <div className="text-[11px] tracking-[0.08em] uppercase text-[var(--green)] font-medium mb-3">
                {article.tag}
              </div>
              <div className="font-display text-[1.05rem] leading-[1.25] mb-3">{article.title}</div>
              <div className="flex items-center gap-3 text-[12px] text-[var(--text-secondary)] mt-3">
                <span>{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="px-8 py-12 border-b-chalk grid gap-12"
        style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}
      >
        <div>
          <div className="eyebrow mb-5">Stay in the loop</div>
          <div className="font-display text-[1.75rem] mb-3">
            New thinking, <span className="italic text-[var(--text-secondary)]">when it's ready.</span>
          </div>
          <p className="text-[14px] text-[var(--text-secondary)] leading-[1.65]">
            We publish when we have something worth saying. Drop your email and we'll send new
            Greenhouse pieces directly to you.
          </p>
        </div>
        <div>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
