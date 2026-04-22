import { NextRequest, NextResponse } from 'next/server'

const CALENDLY_URL = 'https://calendly.com/mackenzieleahy/30-minute-meeting-clone'

export async function POST(request: NextRequest) {
  const { name, email, company, problem } = await request.json()

  const [firstName, ...rest] = (name as string).trim().split(' ')
  const lastName = rest.join(' ')

  try {
    const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          firstname: firstName,
          lastname: lastName,
          email,
          company,
          lifecyclestage: 'lead',
        },
      }),
    })

    // 409 = contact already exists — that's fine, still send them to Calendly
    if (!res.ok && res.status !== 409) {
      console.error('HubSpot error:', res.status, await res.text())
    }
  } catch (err) {
    console.error('HubSpot request failed:', err)
  }

  // Always succeed from the user's perspective — Calendly is the next step regardless
  return NextResponse.json({ redirectUrl: CALENDLY_URL })
}
