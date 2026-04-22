import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { email } = await request.json()

  const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        email,
        lifecyclestage: 'subscriber',
      },
    }),
  })

  // 409 = already subscribed — treat as success
  if (!res.ok && res.status !== 409) {
    console.error('HubSpot newsletter error:', res.status, await res.text())
    return NextResponse.json({ error: 'Signup failed' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
