import { ArrowRight, Phone } from 'lucide-react'
import { company } from '@/lib/site'
import { Reveal } from '@/components/reveal'

export function CtaBanner() {
  return (
    <section className="px-4 pb-20 md:px-6 md:pb-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-ink px-6 py-14 text-primary-foreground md:px-14 md:py-20">
          <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
          <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 size-80 rounded-full bg-highlight/50 blur-3xl" />
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                Add Axis Logistics India to your approved transporter list
              </h2>
              <p className="mt-4 text-lg text-white/80">
                One call gets you competitive freight, the right vehicle and a team that cares about your cargo.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="#quote"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-7 py-4 font-bold text-highlight-foreground shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
              >
                Get a Quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href={`tel:${company.phones[0].tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-ink transition-transform hover:-translate-y-0.5"
              >
                <Phone className="size-4" aria-hidden="true" />
                {company.phones[0].display}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
