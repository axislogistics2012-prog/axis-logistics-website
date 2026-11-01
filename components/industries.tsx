import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const industries = [
  {
    title: 'Textiles & Fabrics',
    text: 'Fabric rolls, yarn and garment consignments from Bhiwandi and beyond.',
    image: '/images/textile-cargo.png',
    alt: 'Fabric rolls being loaded into a cargo truck',
  },
  {
    title: 'Steel & Engineering',
    text: 'Steel coils, pipes, plant and machinery secured for heavy transit.',
    image: '/images/steel-cargo.png',
    alt: 'Steel coils chained on a flatbed trailer',
  },
  {
    title: 'Construction Materials',
    text: 'Cement, rebar, tools and project materials delivered to site.',
    image: '/images/construction-cargo.png',
    alt: 'Truck loaded with construction materials at a site',
  },
  {
    title: 'Containers & Chemicals',
    text: 'Container movement and chemicals handled per transport norms.',
    image: '/images/container-yard.png',
    alt: 'Container trucks at a logistics yard',
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Industries we serve"
            title="Cargo we handle"
            highlight="every day"
            description="Trusted by textile mills, engineering firms, chemical producers and equipment manufacturers."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 100}>
                <article className="group relative aspect-[3/4] overflow-hidden rounded-3xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent transition-opacity group-hover:from-primary/95" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <span className="font-display text-sm font-black text-sky">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 text-2xl font-black leading-tight">{item.title}</h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 max-lg:max-h-24 max-lg:opacity-100">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
