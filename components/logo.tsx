import Image from 'next/image'

export function Logo({ className = 'h-7 w-auto sm:h-8 xl:h-10' }: { className?: string }) {
  return (
    <Image
      src="/images/axis-logo.png"
      alt="Axis Logistics India"
      width={1443}
      height={141}
      priority
      className={className}
    />
  )
}
