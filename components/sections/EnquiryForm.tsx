'use client'

import { useState } from 'react'

interface Props { apartmentName: string }

export default function EnquiryForm({ apartmentName }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', moveIn: '', people: '', pets: '', message: '' })

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, apartment: apartmentName }) })
      setStatus(res.ok ? 'success' : 'error')
    } catch { setStatus('error') }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-16 h-px bg-[var(--color-brass)] mx-auto mb-8" />
        <h3 className="font-display text-2xl font-medium text-[var(--color-charcoal)] mb-3">Tack för din intresseanmälan</h3>
        <p className="text-[var(--color-stone)] text-sm">Vi återkommer till dig inom kort.</p>
      </div>
    )
  }

  const inputCls = 'w-full text-sm border-b border-[var(--color-sand)] bg-transparent py-3 text-[var(--color-charcoal)] placeholder:text-[var(--color-stone)] focus:outline-none focus:border-[var(--color-brass)] transition-colors duration-200'
  const labelCls = 'block text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-stone)] mb-1'

  return (
    <form onSubmit={submit} className="grid gap-8 sm:grid-cols-2">
      <p className="sm:col-span-2 text-xs text-[var(--color-stone)] italic">Angående: {apartmentName}</p>

      <div>
        <label className={labelCls} htmlFor="eq-name">Namn *</label>
        <input id="eq-name" type="text" required value={form.name} onChange={set('name')} placeholder="Ditt namn" className={inputCls} />
      </div>
      <div>
        <label className={labelCls} htmlFor="eq-email">E-post *</label>
        <input id="eq-email" type="email" required value={form.email} onChange={set('email')} placeholder="din@email.se" className={inputCls} />
      </div>
      <div>
        <label className={labelCls} htmlFor="eq-phone">Telefon</label>
        <input id="eq-phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="070-000 00 00" className={inputCls} />
      </div>
      <div>
        <label className={labelCls} htmlFor="eq-movein">Önskat inflyttningsdatum</label>
        <input id="eq-movein" type="date" value={form.moveIn} onChange={set('moveIn')} className={inputCls} />
      </div>
      <div>
        <label className={labelCls} htmlFor="eq-people">Antal personer i hushållet</label>
        <input id="eq-people" type="number" min={1} value={form.people} onChange={set('people')} placeholder="1" className={inputCls} />
      </div>
      <div>
        <label className={labelCls} htmlFor="eq-pets">Husdjur</label>
        <select id="eq-pets" value={form.pets} onChange={set('pets')} className={inputCls}>
          <option value="">Välj...</option>
          <option value="Nej">Nej</option>
          <option value="Ja – hund">Ja – hund</option>
          <option value="Ja – katt">Ja – katt</option>
          <option value="Ja – övrigt">Ja – övrigt</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="eq-msg">Meddelande *</label>
        <textarea id="eq-msg" required rows={4} value={form.message} onChange={set('message')} placeholder="Berätta lite om dig själv och varför du söker detta boende..." className={`${inputCls} resize-none`} />
      </div>

      {status === 'error' && (
        <p className="sm:col-span-2 text-sm text-red-700">Något gick fel. Mejla oss direkt på kast_fast@outlook.com.</p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="group flex items-center gap-3 text-sm font-medium text-[var(--color-charcoal)] border-b border-[var(--color-charcoal)] pb-0.5 hover:text-[var(--color-brass)] hover:border-[var(--color-brass)] disabled:opacity-40 transition-all duration-300"
        >
          {status === 'loading' ? 'Skickar...' : 'Skicka intresseanmälan'}
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </form>
  )
}
