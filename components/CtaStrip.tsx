import Link from 'next/link'

interface CtaStripProps {
  headline: string
  headlineItalic?: string
  buttonText?: string
  note?: string
}

export default function CtaStrip({
  headline,
  headlineItalic,
  buttonText = 'Book a call',
  note,
}: CtaStripProps) {
  return (
    <div className="flex items-center justify-between gap-8 px-8 py-16 border-b-chalk">
      <div className="font-display text-[2.25rem] leading-[1.25] max-w-[460px]">
        {headline}{' '}
        {headlineItalic && (
          <span className="italic text-[var(--text-secondary)]">{headlineItalic}</span>
        )}
      </div>
      <div>
        <Link
          href="/book-a-call"
          className="inline-block text-[13px] font-medium px-6 py-3 bg-[var(--text)] text-white rounded-chalk no-underline"
        >
          {buttonText}
        </Link>
        {note && (
          <p className="text-[12px] text-[var(--text-secondary)] mt-2">{note}</p>
        )}
      </div>
    </div>
  )
}
