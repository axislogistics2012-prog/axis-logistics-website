import { Truck } from 'lucide-react'
import { vehicleSizes } from '@/lib/site'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const maxSize = Math.max(...vehicleSizes)

function sizeLabel(ft: number) {
  if (ft <= 17) return 'Pickup / LCV'
  if (ft <= 22) return 'Medium truck'
  if (ft <= 24) return 'Large truck'
  return 'Multi-axle / Trailer'
}

export function Fleet() {
  return (
    <section id="fleet" className="relative isolate overflow-hidden bg-ink py-20 text-ink-foreground md:py-28">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <div aria-hidden="true" className="absolute -left-32 bottom-0 -z-10 size-96 rounded-full bg-primary/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 md:px-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <SectionHeading
            invert
            eyebrow="Fleet options"
            title="The right size vehicle,"
            highlight="every time"
            description="From 14 ft pickups to 32 ft multi-axle vehicles, plus ODC trailers for oversized loads. Book a full truck or share space with part-load."
          />
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/60 p-5">
              <p className="font-display text-3xl font-black">FTL</p>
              <p className="mt-1 text-sm text-white/80">Full Truck Load — dedicated vehicle</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-highlight to-highlight/60 p-5">
              <p className="font-display text-3xl font-black">PTL</p>
              <p className="mt-1 text-sm text-white/85">Part Truck Load — pay for your space</p>
            </div>
          </div>
        </Reveal>

        <ol className="flex flex-col gap-3 lg:col-span-3" aria-label="Available vehicle lengths">
          {vehicleSizes.map((ft, i) => (
            <li key={ft}>
              <Reveal delay={i * 80} className="flex items-center gap-4">
                <span className="w-16 shrink-0 text-right font-display text-2xl font-black">
                  {ft}
                  <span className="text-sm font-bold text-ink-foreground/55"> ft</span>
                </span>
                <div className="relative h-12 flex-1 rounded-full bg-white/5">
                  <div
                    className="group flex h-full items-center justify-between rounded-full bg-gradient-to-r from-primary to-sky px-4 transition-all hover:brightness-110"
                    style={{ width: `${Math.max((ft / maxSize) * 100, 45)}%` }}
                  >
                    <span className="truncate text-xs font-bold uppercase tracking-wide text-white">
                      {sizeLabel(ft)}
                    </span>
                    <Truck className="size-5 shrink-0 text-white transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
          <li className="mt-3 text-sm text-ink-foreground/60">
            {'+ ODC trailers for over-dimensional cargo. All vehicles subject to availability.'}
          </li>
        </ol>
      </div>
    </section>
  )
}
