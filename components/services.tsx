import Image from 'next/image'
import {
  ArrowUpRight,
  Boxes,
  Construction,
  Container,
  DoorOpen,
  Factory,
  MapPinned,
  Package,
  Truck,
  type LucideIcon,
} from 'lucide-react'
import { services } from '@/lib/site'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const icons: Record<(typeof services)[number]['icon'], LucideIcon> = {
  truck: Truck,
  boxes: Boxes,
  construction: Construction,
  container: Container,
  factory: Factory,
  package: Package,
  door: DoorOpen,
  map: MapPinned,
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden="true" className="absolute -right-40 top-20 -z-10 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we move"
            title="One partner for"
            highlight="every road shipment"
            description="From a single tempo load to over-dimensional machinery, we match each consignment with the right vehicle and route."
          />
          <a
            href="#quote"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-foreground px-5 py-2.5 font-bold transition-colors hover:bg-foreground hover:text-background"
          >
            Request pricing
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <figure className="group relative h-full min-h-96 overflow-hidden rounded-3xl">
              <Image
                src="/images/odc-trailer.png"
                alt="Low-bed trailer carrying heavy industrial machinery"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-7 text-ink-foreground">
                <span className="rounded-full bg-highlight px-3 py-1 text-xs font-bold uppercase tracking-widest text-highlight-foreground">
                  Specialists
                </span>
                <p className="mt-4 font-display text-3xl font-black leading-tight">
                  Heavy machinery &amp; ODC cargo
                </p>
                <p className="mt-2 text-sm text-ink-foreground/75">
                  Low-bed trailers, permits and route planning handled end to end.
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {services.map((service, i) => {
              const Icon = icons[service.icon]
              return (
                <li key={service.title}>
                  <Reveal delay={(i % 2) * 100} className="h-full">
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-highlight transition-transform duration-500 group-hover:scale-x-100"
                      />
                      <div className="flex items-start justify-between">
                        <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="size-6" aria-hidden="true" />
                        </span>
                        <span className="font-display text-sm font-black text-muted-foreground/50">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-extrabold">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
