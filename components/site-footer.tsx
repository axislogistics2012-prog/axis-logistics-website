import { company, navLinks, services } from '@/lib/site'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="inline-flex rounded-lg bg-white px-4 py-3">
            <Logo className="h-8 w-auto md:h-10" />
          </div>
          <p className="mt-3 font-display text-sm font-extrabold uppercase tracking-widest text-ink-foreground">
            Fleet Owners &amp; Transport Contractor
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/65">
            {company.tagline} Full truck load, part load, ODC and container
            transportation across India since {company.established}.
          </p>
          <p className="mt-4 text-xs text-ink-foreground/50">GSTIN: {company.gstin}</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-bold uppercase tracking-widest text-sky">Explore</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-ink-foreground/75">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-sky">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-sky">Services</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-ink-foreground/75">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-ink-foreground/50 md:px-6">
          {`© ${new Date().getFullYear()} ${company.name}. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}
