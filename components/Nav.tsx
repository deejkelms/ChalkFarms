'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/greenhouse', label: 'Greenhouse' },
  { href: '/services#pricing', label: 'Pricing' },
]

export default function Nav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b-chalk relative z-50 bg-white">
        <Link
          href="/"
          className="text-[15px] font-medium tracking-[0.08em] text-[var(--text)] no-underline"
        >
          CHALK<span className="text-[var(--text-secondary)]">&nbsp;FARMS</span>
        </Link>

        <div className="hidden lg:flex gap-8">
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
          className="hidden lg:inline-block text-[12px] font-medium px-[18px] py-2 bg-[var(--text)] text-white rounded-chalk no-underline"
        >
          Book a call
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden flex flex-col justify-center items-center w-[44px] h-[44px] gap-[5px]"
        >
          <span className={`block w-5 h-[1.5px] bg-[var(--text)] transition-all duration-200 origin-center ${isOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-[var(--text)] transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-[var(--text)] transition-all duration-200 origin-center ${isOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[57px] z-40 bg-white border-t-chalk flex flex-col" style={{ height: 'calc(100dvh - 57px)' }}>
          <div className="flex flex-col flex-1 px-5 pt-6 pb-8 overflow-y-auto">
            {links.map((link) => {
              const base = link.href.split('#')[0]
              const isActive = pathname === base || pathname.startsWith(base + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-[18px] py-4 border-b-chalk no-underline transition-colors ${
                    isActive
                      ? 'text-[var(--text)] font-medium'
                      : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="mt-auto pt-8">
              <Link
                href="/book-a-call"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center text-[14px] font-medium px-6 py-4 bg-[var(--text)] text-white rounded-chalk no-underline"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
