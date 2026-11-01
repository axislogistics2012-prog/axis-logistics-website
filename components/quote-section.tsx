import { Mail, MapPin, Phone, User } from 'lucide-react'
import { company } from '@/lib/site'
import { QuoteForm } from '@/components/quote-form'

export function QuoteSection() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`

  return (
    <section id="quote" className="bg-ink py-20 text-ink-foreground md:py-28">
      <div id="contact" className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-sky">
            <span className="h-px w-8 bg-sky" aria-hidden="true" />
            {"Let's move business forward"}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            Get the most competitive freight rate for your consignment
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-foreground/70">
            Add us to your list of approved transport contractors. Share your
            requirement and we will call you back with a quote — or meet you in
            person to discuss.
          </p>

          <ul className="mt-10 flex flex-col gap-5">
            <li className="flex gap-4">
              <User className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
              <div>
                <p className="text-sm text-ink-foreground/60">Contact person</p>
                <p className="font-semibold">{company.contactPerson}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
              <div>
                <p className="text-sm text-ink-foreground/60">Call us</p>
                <p className="flex flex-wrap gap-x-4 font-semibold">
                  {company.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="hover:text-sky">
                      {p.display}
                    </a>
                  ))}
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
              <div>
                <p className="text-sm text-ink-foreground/60">Email</p>
                <a href={`mailto:${company.email}`} className="font-semibold break-all hover:text-sky">
                  {company.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
              <div>
                <p className="text-sm text-ink-foreground/60">Office</p>
                <address className="not-italic font-semibold leading-relaxed">{company.address}</address>
              </div>
            </li>
          </ul>

          <div className="mt-10 aspect-video overflow-hidden rounded-lg border border-white/10">
            <iframe
              title="Axis Logistics India office location on map"
              src={mapSrc}
              className="size-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  )
}
