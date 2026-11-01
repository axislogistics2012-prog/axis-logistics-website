'use client'

import { useState, type FormEvent } from 'react'
import { Mail, MessageCircle } from 'lucide-react'
import { company, vehicleSizes } from '@/lib/site'

const fieldClass =
  'w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'

function buildMessage(data: FormData) {
  const get = (k: string) => String(data.get(k) ?? '').trim()
  const lines = [
    'New freight enquiry — Axis Logistics India website',
    '',
    `Name: ${get('name')}`,
    get('company') && `Company: ${get('company')}`,
    `Phone: ${get('phone')}`,
    get('email') && `Email: ${get('email')}`,
    `From: ${get('from')}`,
    `To: ${get('to')}`,
    `Load type: ${get('load')}`,
    `Vehicle: ${get('vehicle')}`,
    get('material') && `Material: ${get('material')}`,
    get('date') && `Pickup date: ${get('date')}`,
    get('notes') && `Notes: ${get('notes')}`,
  ]
  return lines.filter(Boolean).join('\n')
}

export function QuoteForm() {
  const [sent, setSent] = useState(false)

  function send(form: HTMLFormElement, channel: 'whatsapp' | 'email') {
    if (!form.reportValidity()) return
    const message = buildMessage(new FormData(form))
    const url =
      channel === 'whatsapp'
        ? `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`
        : `mailto:${company.email}?subject=${encodeURIComponent('Freight quote request')}&body=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    send(e.currentTarget, 'whatsapp')
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl bg-card p-6 text-card-foreground shadow-2xl md:p-8"
      aria-labelledby="quote-form-title"
    >
      <h3 id="quote-form-title" className="text-2xl font-extrabold tracking-tight">
        Request a free quote
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fields marked * are required. We usually respond within a few hours.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Your name *
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Company
          <input name="company" autoComplete="organization" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Phone *
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            pattern="[0-9+\s\-]{8,15}"
            placeholder="+91"
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Email
          <input name="email" type="email" autoComplete="email" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Pickup city *
          <input name="from" required placeholder="e.g. Bhiwandi" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Delivery city *
          <input name="to" required placeholder="e.g. Delhi" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Load type
          <select name="load" className={fieldClass} defaultValue="Full Truck Load (FTL)">
            <option>Full Truck Load (FTL)</option>
            <option>Part Truck Load (PTL)</option>
            <option>ODC / Over-dimensional</option>
            <option>Container</option>
            <option>Door-to-door</option>
          </select>
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Vehicle size
          <select name="vehicle" className={fieldClass} defaultValue="Not sure — please advise">
            <option>Not sure — please advise</option>
            {vehicleSizes.map((ft) => (
              <option key={ft}>{ft} ft</option>
            ))}
            <option>ODC trailer</option>
          </select>
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Material / cargo
          <input name="material" placeholder="e.g. Textile machinery" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Pickup date
          <input name="date" type="date" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium sm:col-span-2">
          Additional details
          <textarea
            name="notes"
            rows={3}
            placeholder="Weight, dimensions, special handling..."
            className={fieldClass}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Send via WhatsApp
        </button>
        <button
          type="button"
          onClick={(e) => send(e.currentTarget.form!, 'email')}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-input px-5 py-3 font-semibold transition-colors hover:bg-secondary"
        >
          <Mail className="size-4" aria-hidden="true" />
          Send via Email
        </button>
      </div>

      <p role="status" aria-live="polite" className="mt-4 text-sm text-muted-foreground">
        {sent
          ? 'Thank you! Your enquiry is ready — just press send in the window that opened.'
          : ''}
      </p>
    </form>
  )
}
