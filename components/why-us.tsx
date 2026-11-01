import { Clock, Handshake, Route, ShieldCheck, Wallet, Headset } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const reasons = [
  {
    icon: Headset,
    title: 'Customer-focused coordination',
    text: 'We listen to your shipment requirements and offer transport options that actually fit.',
  },
  {
    icon: Clock,
    title: 'Time-conscious planning',
    text: 'Schedules are planned around agreed dates, with clear updates if road conditions change.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible handling',
    text: 'Skilled crew, secured loads and careful attention to pickup and delivery instructions.',
  },
  {
    icon: Route,
    title: 'Pan-India reach',
    text: 'Strong network of fleet partners lets us cover metros and transship to other locations.',
  },
  {
    icon: Wallet,
    title: 'Competitive freight & easy payment',
    text: 'Requirement-based pricing. Pay by cash, cheque, demand draft or bank transfer.',
  },
  {
    icon: Handshake,
    title: 'GST-registered & established',
    text: 'Operating since 2008 with full GST compliance — ready to be listed as your approved vendor.',
  },
]

const steps = [
  { title: 'Share requirement', text: 'Tell us pickup, drop, material and vehicle size.' },
  { title: 'Get your quote', text: 'Receive competitive freight and transit time quickly.' },
  { title: 'Pickup & transit', text: 'We collect from your door with the right vehicle.' },
  { title: 'Safe delivery', text: 'Consignment delivered intact, on schedule.' },
]

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading center eyebrow="Why Axis" title="Why businesses" highlight="keep choosing us" />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={(i % 3) * 100} className="h-full">
                <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-ink hover:text-ink-foreground hover:shadow-2xl">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-highlight text-white shadow-lg shadow-primary/20">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-ink-foreground/70">
                    {text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-20 rounded-3xl bg-secondary p-8 md:p-12">
          <h3 className="text-center text-2xl font-black tracking-tight md:text-3xl">
            Booking a truck takes <span className="text-highlight">4 simple steps</span>
          </h3>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xl font-black text-primary-foreground ring-8 ring-primary/10">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="road-dash hidden h-0.5 flex-1 text-primary/50 md:block" aria-hidden="true" />
                  )}
                </div>
                <p className="mt-5 text-lg font-extrabold">{step.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
