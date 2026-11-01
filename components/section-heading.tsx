import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  className,
  invert = false,
  center = false,
}: {
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  className?: string
  invert?: boolean
  center?: boolean
}) {
  return (
    <div className={cn('max-w-2xl', center && 'mx-auto text-center', className)}>
      <p
        className={cn(
          'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]',
          invert ? 'bg-white/10 text-sky' : 'bg-highlight/10 text-highlight',
        )}
      >
        <span className={cn('size-1.5 rounded-full', invert ? 'bg-sky' : 'bg-highlight')} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
        {title}
        {highlight && (
          <>
            {' '}
            <span
              className={cn(
                'bg-clip-text text-transparent',
                invert
                  ? 'bg-gradient-to-r from-sky to-white'
                  : 'bg-gradient-to-r from-primary to-highlight',
              )}
            >
              {highlight}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            invert ? 'text-ink-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
