import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-8 py-6 border-t-chalk">
      <Link
        href="/"
        className="text-[13px] font-medium tracking-[0.08em] text-[var(--text)] no-underline"
      >
        CHALK FARMS
      </Link>
      <span className="text-[12px] text-[var(--text-secondary)]">© 2026 Chalk Farms</span>
    </footer>
  )
}
