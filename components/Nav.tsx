'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/greenhouse', label: 'Greenhouse' },
  { href: '/services#pricing', label: 'Pricing' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b-chalk">
      <Link
        href="/"
        className="text-[15px] font-medium tracking-[0.08em] text-[var(--text)] no-underline"
      >
        CHALK<span className="text-[var(--text-secondary)]">&nbsp;FARMS</span>
      </Link>

      <div className="flex gap-8">
        {links.map((link) => {
          const base = link.href.split('#')[0]
          const isActive = pathname === base || pathname.startsWith(base + '/')
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] no-underline transition-colors ${
                isActive
                  ? 'text-[var(--text)] font-medium'
                  : 'text-[var(--text-secondary)]'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </div>

      <Link
        href="/book-a-call"
        className="text-[12px] font-medium px-[18px] py-2 bg-[var(--text)] text-white rounded-chalk no-underline"
      >
        Book a call
      </Link>
    </nav>
  )
}
