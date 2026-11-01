'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { company, navLinks } from '@/lib/site'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 text-ink shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#top" aria-label={`${company.name} home`} className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ink/75 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${company.phones[0].tel}`}
            className="hidden items-center gap-2 text-sm font-semibold text-ink/85 hover:text-primary xl:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {company.phones[0].display}
          </a>
          <a
            href="#quote"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-md hover:bg-muted lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border px-4 pb-6 lg:hidden"
        >
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-ink/85"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="flex w-full justify-center rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground"
          >
            Get a Free Quote
          </a>
        </nav>
      )}
    </header>
  )
}
