import { NextResponse } from 'next/server'

// Drop-in Resend integration: install `resend` and set RESEND_API_KEY + ENQUIRY_TO_EMAIL
// in your Vercel env vars, then uncomment the Resend block below.

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // ── Resend (uncomment to activate) ────────────────────
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'intresseanmalan@kastfast.se',
    //   to: process.env.ENQUIRY_TO_EMAIL ?? 'kast_fast@outlook.com',
    //   replyTo: data.email,
    //   subject: `Intresseanmälan – ${data.apartment}`,
    //   text: formatEmail(data),
    // })
    // ──────────────────────────────────────────────────────

    // Until Resend is wired up, log to console (visible in Vercel function logs)
    console.log('[enquiry]', JSON.stringify(data, null, 2))

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[enquiry error]', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

function formatEmail(d: Record<string, string>) {
  return [
    `Boende: ${d.apartment}`,
    `Namn: ${d.name}`,
    `E-post: ${d.email}`,
    `Telefon: ${d.phone || '—'}`,
    `Inflyttning: ${d.moveIn || '—'}`,
    `Hushåll: ${d.people || '—'} person(er)`,
    `Husdjur: ${d.pets || '—'}`,
    ``,
    `Meddelande:`,
    d.message,
  ].join('\n')
}
