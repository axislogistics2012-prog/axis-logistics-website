import { ArrowRight, MapPin, Navigation } from 'lucide-react'
import { destinations } from '@/lib/site'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const nationwideReach = [
  'Major cities and commercial centres',
  'Industrial hubs and manufacturing locations',
  'Inter-state and long-distance transportation routes',
]

export function RoutesSection() {
  return (
    <section id="routes" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Routes & coverage"
            title="Pan-India Freight"
            highlight="& Transportation Services"
            description="Axis Logistics India provides road transportation solutions across India, connecting major cities, industrial hubs and commercial destinations. We coordinate each consignment according to cargo requirements, vehicle availability and route conditions, with freight charges and estimated transit schedules confirmed before dispatch."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto_2fr] lg:items-stretch">
          <Reveal className="h-full">
            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-ink p-7 text-primary-foreground">
              <Navigation aria-hidden="true" className="absolute -bottom-6 -right-6 size-40 text-white/10" />
              <p className="text-xs font-bold uppercase tracking-widest text-sky">Our Nationwide Reach</p>
              <ul className="mt-6 flex flex-col gap-5">
                {nationwideReach.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-display text-lg font-bold leading-snug">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <MapPin className="size-4" aria-hidden="true" />
                    </span>
                    <span className="pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="hidden items-center justify-center lg:flex" aria-hidden="true">
            <div className="flex size-16 items-center justify-center rounded-full bg-highlight text-highlight-foreground shadow-lg shadow-highlight/30">
              <ArrowRight className="size-7" />
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <li key={d.region}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="h-full rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">{d.region}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {d.places.map((p) => (
                        <li key={p} className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
            <li>
              <Reveal delay={400} className="h-full">
                <a
                  href="#quote"
                  className="group flex h-full flex-col justify-center rounded-2xl border-2 border-dashed border-highlight bg-highlight/5 p-5 transition-colors hover:bg-highlight hover:text-highlight-foreground"
                >
                  <p className="font-display text-lg font-black">Your destination?</p>
                  <p className="mt-1 flex items-center gap-1 text-sm font-semibold">
                    Ask about your route
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </p>
                </a>
              </Reveal>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}