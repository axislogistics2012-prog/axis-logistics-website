import { Truck } from 'lucide-react'

const items = [
  'Mumbai',
  'Bhiwandi',
  'Navi Mumbai',
  'Thane',
  'Delhi',
  'Gurugram',
  'Noida',
  'Chandigarh',
  'Gujarat',
  'Madhya Pradesh',
  'Goa',
  'Hyderabad',
  'Andhra Pradesh',
  'Himachal Pradesh',
]

export function RouteTicker() {
  return (
    <div className="overflow-hidden bg-primary py-4 text-primary-foreground" aria-label="Cities we serve">
      <ul className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {[...items, ...items].map((city, i) => (
          <li
            key={`${city}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-8 font-display text-lg font-black uppercase tracking-wide"
          >
            {city}
            <Truck className="size-4 text-white/60" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  )
}
