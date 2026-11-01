import Image from 'next/image'
import { ArrowRight, BadgeCheck, MapPin, MessageCircle, ShieldCheck, Truck } from 'lucide-react'
import { company, yearsInBusiness, vehicleSizes } from '@/lib/site'
import { CountUp } from '@/components/count-up'

export function Hero() {
  const waText = encodeURIComponent('Hello Axis Logistics India, I would like a freight quote.')

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <Image
        src="/images/hero-truck.png"
        alt="Axis Logistics trailer truck on an Indian highway at dusk"
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-right"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-r from-ink via-ink/90 to-ink/30" />
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
      <div aria-hidden="true" className="absolute -left-40 -top-40 -z-10 size-[32rem] rounded-full bg-primary/40 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-40 right-1/3 -z-10 size-96 rounded-full bg-highlight/25 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-16 md:px-6 md:pb-24 md:pt-24 lg:grid-cols-[1.35fr_1fr]">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-highlight opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-highlight" />
            </span>
            Trusted transport contractor since {company.established}
          </p>

          <h1 className="mt-6 font-display text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
            Axis Logistics{' '}
            <span className="bg-gradient-to-r from-highlight via-[oklch(0.7_0.2_40)] to-highlight bg-clip-text text-transparent">
              India
            </span>
          </h1>
          <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.3em] text-ink-foreground/80 md:text-base">
            Fleet Owners &amp; Transport Contractor
          </p>

          <p className="mt-8 max-w-2xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            Your cargo. <span className="text-sky">Any city.</span> On time.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-foreground/75">
            FTL, part load, ODC trailers and container transport from Mumbai, Bhiwandi &amp; Navi
            Mumbai to destinations across India.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-7 py-4 font-bold text-highlight-foreground shadow-lg shadow-highlight/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-highlight/40"
            >
              Get a Free Freight Quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 font-bold backdrop-blur transition-colors hover:bg-white/15"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-foreground/75">
            <li className="flex items-center gap-2">
              <BadgeCheck className="size-4 text-sky" aria-hidden="true" /> GST registered
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-sky" aria-hidden="true" /> Safe &amp; secured loads
            </li>
            <li className="flex items-center gap-2">
              <Truck className="size-4 text-sky" aria-hidden="true" /> 14 ft – 32 ft fleet
            </li>
          </ul>
        </div>

        <HeroRouteCard />
      </div>

      <div className="relative border-t border-white/10 bg-ink/70 backdrop-blur">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 px-4 md:grid-cols-4 md:px-6">
          <Stat label="Years on the road">
            <CountUp to={yearsInBusiness} suffix="+" />
          </Stat>
          <Stat label="Vehicle sizes, 14–32 ft">
            <CountUp to={vehicleSizes.length} />
          </Stat>
          <Stat label="States & regions covered">
            <CountUp to={12} suffix="+" />
          </Stat>
          <Stat label="Pickup hubs in Mumbai region">
            <CountUp to={4} />
          </Stat>
        </dl>
      </div>
    </section>
  )
}

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-white/10 py-6 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0">
      <dt className="text-sm text-ink-foreground/65">{label}</dt>
      <dd className="order-first font-display text-3xl font-black text-white md:text-4xl">{children}</dd>
    </div>
  )
}

function HeroRouteCard() {
  return (
    <div className="relative hidden lg:block" aria-hidden="true">
      <div className="animate-float rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-sky">Active lane</p>
          <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
            In transit
          </span>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-xs text-ink-foreground/60">From</p>
            <p className="font-display text-2xl font-black">Bhiwandi</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-ink-foreground/60">To</p>
            <p className="font-display text-2xl font-black">Delhi NCR</p>
          </div>
        </div>

        <div className="relative mt-5 h-10">
          <div className="road-dash animate-dash absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 text-white/40" />
          <MapPin className="absolute left-0 top-1/2 size-5 -translate-y-1/2 text-sky" />
          <MapPin className="absolute right-0 top-1/2 size-5 -translate-y-1/2 text-highlight" />
          <span className="animate-drive absolute top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-highlight shadow-lg shadow-highlight/40">
            <Truck className="size-5 text-white" />
          </span>
        </div>

        <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            ['Vehicle', '32 ft MXL'],
            ['Load', 'FTL'],
            ['Cargo', 'Machinery'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-white/5 p-3">
              <dt className="text-[11px] uppercase tracking-wider text-ink-foreground/55">{k}</dt>
              <dd className="mt-1 text-sm font-bold">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="absolute -bottom-8 -left-8 flex items-center gap-3 rounded-2xl bg-white p-4 text-ink shadow-2xl">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary font-display text-lg font-black text-primary-foreground">
          {new Date().getFullYear() - company.established}+
        </span>
        <div>
          <p className="font-display font-black leading-tight">Years of trust</p>
          <p className="text-xs text-muted-foreground">Serving since {company.established}</p>
        </div>
      </div>
    </div>
  )
}
