# Chalk Farms

Website for **Chalk Farms**, a growth marketing agency for challenger brands. Built as a fully static Next.js site with pre-rendered HTML for SEO performance.

---

## What this is

A multi-page marketing site covering:

- **Homepage** — hero, client logo bar, proof stats, services overview, case study previews, and CTA
- **Services + Pricing** — six service lines with deliverables and a transparent pricing grid
- **About** — company thesis, how we work, beliefs, and who we serve
- **Work** — index page and individual case studies (FELFEL, Benchmark Vehicles)
- **Greenhouse** — editorial hub with category filtering and newsletter signup
- **Book a Call** — lead capture form with scheduling integration

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15, App Router |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Deployment | Vercel (or `next export` for static hosting) |

---

## Design language

### Fonts

| Role | Family | Source |
|---|---|---|
| Headings / Display | Instrument Serif | Google Fonts |
| Body / UI | DM Sans | Google Fonts |

### Color tokens

| Token | Hex | Usage |
|---|---|---|
| `--text` | `#1a1a1a` | Primary text |
| `--text-secondary` | `#888780` | Muted text, labels, metadata |
| `--bg` | `#ffffff` | Page background |
| `--bg-secondary` | `#f5f4f0` | Section backgrounds, form panels |
| `--border` | `rgba(26,26,26,0.15)` | Hairline dividers |
| `--border-secondary` | `rgba(26,26,26,0.25)` | Tag borders, input borders |
| `--green` | `#4a9e4a` | Accent — eyebrow lines, dots, highlights |

### Design principles

- **Typography-forward.** Most of the visual weight comes from Instrument Serif at large sizes and generous line-height. Don't fight it with heavy graphics.
- **Hairline borders everywhere.** `0.5px solid` dividers between every section and component give the site its editorial quality.
- **Generous padding.** Section padding is `3.5–4rem` vertical. Don't compress it.
- **Italic + muted for contrast.** Headlines split between upright and `italic muted` spans. This is intentional — don't remove it.
- **Green is an accent, not a brand color.** Used only for the eyebrow line, dots, and active states. Never for large fills.

---

## Getting started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

Deploys as a fully static site. Push to GitHub and connect to Vercel for automatic deploys on every merge to `main`.

---

## Integrations (placeholders — to be wired up)

| Integration | Purpose | Status |
|---|---|---|
| Calendly | Scheduling on Book a Call page | `NEXT_PUBLIC_CALENDLY_URL` — ✅ wired |
| HubSpot | CRM contacts + newsletter signups | `HUBSPOT_ACCESS_TOKEN` + `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` — pending token |
| Google Analytics | Site tracking | `NEXT_PUBLIC_GA_ID` — pending |
| Meta Pixel | Ad retargeting | `NEXT_PUBLIC_META_PIXEL_ID` — pending |

Add these to a `.env.local` file when ready:

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/mackenzieleahy/30-minute-meeting-clone
HUBSPOT_ACCESS_TOKEN=your-private-app-token
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=XXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
```

---

## Project structure

```
app/
  page.tsx                        # Homepage
  services/page.tsx               # Services + Pricing
  about/page.tsx                  # About
  book-a-call/page.tsx            # Book a Call (form + scheduling)
  greenhouse/page.tsx             # Greenhouse blog index
  work/
    page.tsx                      # Work index
    felfel/page.tsx               # FELFEL case study
    benchmark-vehicles/page.tsx   # Benchmark Vehicles case study
components/
  Nav.tsx
  Footer.tsx
  ProofBar.tsx                    # Shared: homepage + book-a-call
  CtaStrip.tsx                    # Shared: multiple pages
```

---

## Contact

**Developer:** Derek Kelmanson — dkelmanson@gmail.om 
**Client:** Chalk Farms — mackenzieleahy@gmail.com
