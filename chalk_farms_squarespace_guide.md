# Chalk Farms — Squarespace Build Guide

A page-by-page guide to building the Chalk Farms website in Squarespace, using the designs and copy we've developed.

---

## Before You Start

### Recommended Template
Use **Paloma** or **Hester** — both are minimal, typography-forward templates that support the clean editorial aesthetic we've designed. Avoid templates with heavy built-in styling that will fight your design.

### Design Settings (Apply First)
Set these globally before building any pages.

**Fonts**
- Heading font: **Cormorant** (closest free alternative to Instrument Serif) or use Google Fonts custom embed for Instrument Serif
- Body font: **DM Sans** (available in Squarespace font library)

**Colors**
- Primary (text): `#1a1a1a`
- Secondary (muted text): `#888780`
- Background: `#ffffff`
- Surface/secondary background: `#f5f4f0`
- Accent (green dots and lines): `#4a9e4a`
- Border: `#e5e4e0`

**Custom CSS (Settings > Advanced > Custom CSS)**
Add this to get the hairline borders and clean spacing our design uses:
```css
/* Hairline borders */
.sqs-block-horizontalrule hr { border-color: #e5e4e0; border-width: 0.5px; }

/* Eyebrow label style */
.eyebrow { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #888780; }

/* Remove default section padding where needed */
.minimal-section .sqs-layout { padding-top: 0; padding-bottom: 0; }
```

---

## Page 1: Homepage

### Nav
Squarespace handles this automatically. Set it to:
- Logo: "CHALK FARMS" in your heading font, all caps
- Links: Work / Services / About / Greenhouse / Pricing
- Button: "Book a call" — link to /book-a-call

### Section 1: Hero
**Block type:** Blank section with text blocks

- Add a **Text block** for the eyebrow: "Growth marketing agency" — apply small caps styling
- Add a **Text block** for the H1: "Full-funnel growth marketing for challenger brands." — use your heading font at largest size
- Add a **Text block** for the subhead — body font, muted color
- Add a **Button block** for "See our services" — link to /services
- Add a **Text block** for the secondary link "View our work →" — link to /work

**Spacing:** Set section padding to 80px top, 64px bottom.

### Section 2: Client Logo Bar
**Block type:** Blank section

- Add a **Text block** above with the framing line: "Growth-stage brands that chose to scale differently" — small, uppercase, centered
- Add a **Gallery block** in a horizontal scrolling strip — upload each client logo as a PNG with transparent background
- Set gallery to display as a logo strip

### Section 3: Proof Bar
**Block type:** 3-column section

In each column:
- **Text block** for the large number (Instrument Serif, ~40px): `$30M+` / `$20M+` / `45+`
- **Text block** for the label below — body font, muted color, small size

Add a **Line block** above and below this section to create the border treatment.

### Section 4: Services Overview
**Block type:** Blank section with stacked content blocks or a **Summary block** linked to your Services page

- Add a **Text block** for the eyebrow: "Services"
- Add a **Text block** for the section headline: "Everything you need to grow. Nothing you don't."
- Add 6 **Card blocks** or a **Summary block** (2 columns × 3 rows) — one card per service with name, one-line description, and starting price

### Section 5: Case Study Preview
**Block type:** 2-column section

One column per case study (FELFEL, Benchmark Vehicles):
- **Text block** for client name + vertical (small, uppercase)
- **Text block** for the headline in Instrument Serif
- **Text block** for the hero stat (large number + label)
- **Text block** for tags (small pills — use inline text with light backgrounds via custom CSS)
- **Button block** for "Read case study →" — link to respective case study page

### Section 6: The Model
**Block type:** 2-column section

Left column:
- Eyebrow: "The model"
- Section title: "Strategy first. Performance always."
- 3 paragraphs of body copy

Right column:
- Stack 6 **Text blocks** with a left-border treatment via custom CSS, one per pillar

### Section 7: Greenhouse Teaser
**Block type:** Blank section with background color `#f5f4f0`

- Eyebrow: "Greenhouse"
- Headline: "Where growth-stage thinking gets published."
- Subtext
- **Button block**: "Explore Greenhouse →" — link to /greenhouse

### Section 8: Closing CTA
**Block type:** 2-column section

Left: headline in Instrument Serif
Right: Button + small note text below it

### Footer
Set in Squarespace footer settings:
- Left: CHALK FARMS logo/wordmark
- Right: © 2026 Chalk Farms
- Optional middle column: nav links

---

## Page 2: Services + Pricing

Create as a single long page at `/services`.

### Hero Section
- Eyebrow: "Services"
- H1: "The full stack for companies ready to scale."
- Subhead paragraph

### Service Blocks (repeat × 6)
**Block type:** 2-column section (left narrower, right wider)

Left column:
- Service number (01-06)
- Service name in Instrument Serif
- Price tag
- "Best for" label + ICP description — smaller text, separated by a line

Right column:
- Description paragraph
- "What's included" label
- Bulleted list of deliverables (use Squarespace list block)
- "Learn more →" text link or button

Add a **Line block** between each service block to create the divider treatment.

### Pricing Section
**Block type:** 3-column section (repeat 2 rows for 6 cards)

Per card:
- Service name
- Large price number
- Cadence (per month / project)
- **Line block**
- Deliverables list with + prefix
- **Button block**: "Book a call" — link to /book-a-call

### FAQ Section
**Block type:** 2-column section

Use an **Accordion block** (Squarespace has this natively) for the Q&A pairs. Much cleaner than text blocks for FAQs.

### Bottom CTA
2-column: headline left, button + note right.

---

## Page 3: About

Create at `/about`.

### Hero
- Eyebrow: "About"
- Large H1 in Instrument Serif

### Thesis Section
**Block type:** 2-column section

Left: Section label + subheading
Right: 4 paragraphs of body copy

### How We Work (3 Steps)
**Block type:** 3-column section with background color `#f5f4f0`

One column per step:
- Step number (01 / 02 / 03)
- Step title
- Step description

### What We Believe (6 Beliefs)
**Block type:** 2-column grid

Use a **Summary block** or manually place 6 card blocks (2 × 3 grid). Each card:
- Green dot + belief title
- Belief description

### Who We Work With (6 Verticals)
**Block type:** 3-column section × 2 rows (or use a 6-card Summary block)

Each card:
- Small icon (upload as SVG or use emoji)
- Vertical name
- 1-2 sentence description

### CTA Strip
Standard 2-column: headline left, button + note right.

---

## Page 4: Book a Call

Create at `/book-a-call`.

### Main Section
**Block type:** 2-column section

Left column:
- Eyebrow: "Book a call"
- H1: "Let's talk about what's actually going on."
- Subhead paragraph
- **Line block**
- "What to expect" label
- Bulleted list of 4 expectations

Right column (use background color `#f5f4f0`):
- **Form block** with these fields:
  - Your name (single line, required)
  - Work email (email field, required)
  - Company (single line, required)
  - What's the problem you're trying to solve? (paragraph/textarea, **not** required — mark as optional in field settings)
- Submit button text: "Continue to scheduling →"
- After form submission: redirect to your Calendly link, or embed Calendly below the form using a **Code block**:

```html
<!-- Calendly inline embed -->
<div class="calendly-inline-widget" 
  data-url="https://calendly.com/YOUR-LINK" 
  style="min-width:320px;height:630px;">
</div>
<script src="https://assets.calendly.com/assets/external/widget.js"></script>
```

### Proof Bar
3-column section below the form — same treatment as homepage proof bar.

---

## Page 5: Greenhouse (Blog)

Squarespace's built-in **Blog** feature handles this natively. Set it up as follows.

### Setup
- Create a new page, select **Blog** as the page type
- Set URL to `/greenhouse`
- Page title: "Greenhouse"

### Blog Settings
- Set display to show: Title, excerpt, category tag, read time
- Turn off: Author name, author photo, comments
- Layout: Grid (2 or 3 columns)

### Categories
Create these categories in your blog settings — they become the filter tabs:
- Paid media
- Performance creative
- Lifecycle and retention
- Growth strategy
- Conversion

### Hero Section (above blog posts)
Add a **Header section** above the blog feed using Squarespace's page header:
- Title: "Greenhouse"
- Eyebrow text
- Subhead: "Frameworks, channel playbooks, and honest POVs..."

### Newsletter Signup
Add a **Newsletter block** or a **Form block** at the bottom of the page:
- Email input only
- Connect to Mailchimp or your email platform of choice
- Subhead: "New thinking, when it's ready."
- Note: "No cadence. No filler. Unsubscribe anytime."

### Creating Articles
Each Greenhouse article is a **Blog post**. For each placeholder article:
- Set the title (use the article titles from our designs)
- Set the category tag
- Write a short excerpt (the description shown in the grid)
- Set estimated read time in the post subtitle or tags
- Add "Placeholder" tag so you can find and update drafts later

---

## Page 6: Case Studies

Each case study is a standalone page. Create them under `/work/` as individual pages.

**Suggested URL structure:**
- `/work/felfel`
- `/work/benchmark-vehicles`
- `/work/jvp-labs`
- `/work/jennifer-hollister-group`
- `/work/joann-hoffman`

### Case Study Page Structure (repeat for each)

**Section 1: Header**
- Eyebrow: "Case Study · [Client Name]"
- H1: The case study headline in Instrument Serif

**Section 2: About the Client**
- 2-column section with "About" label left, description right
- Background: `#f5f4f0`

**Section 3: Meta Strip**
4-column section, each column:
- Small label (Client / Industry / Services / Engagement start)
- Bold value below

**Section 4: Stats Bar**
3-column section with `#f5f4f0` background (or bordered cards):
- Large number in Instrument Serif
- Label below

**Section 5: The Situation**
Full-width text block — 2 paragraphs

**Section 6: The Approach**
Eyebrow + headline + body copy. For channel strategy, use a 2 or 3-column card section.

**Section 7: The Results**
- Bar chart or data visualization — build as an **Image block** (screenshot your charts) or use a **Code block** to embed a simple HTML chart
- Pull quote block — use Squarespace's **Quote block** with the left-border treatment

**Section 8: Services Delivered**
Inline tags — use a **Text block** with small pill styling applied via custom CSS:
```css
.service-tag {
  display: inline-block;
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 20px;
  border: 0.5px solid #d3d1c7;
  color: #888780;
  margin: 0 4px 4px 0;
}
```

**Section 9: CTA Strip**
2-column: "Ready to rebuild your pipeline?" + "Book a call" button.

### Work Index Page
Create a `/work` page that links to all case studies:
- 2-column card grid
- Each card: client name, headline, hero stat, tags, "Read case study →"
- Use a **Summary block** linked to case study pages for automatic population

---

## Integrations Checklist

| Tool | Purpose | How to connect |
|------|---------|----------------|
| Calendly | Book a Call scheduling | Embed via Code block or redirect after form submit |
| Mailchimp / ConvertKit | Greenhouse newsletter | Connect via Squarespace Email Marketing or Form block integration |
| Google Analytics | Site tracking | Paste GA4 tag in Settings > Advanced > Code Injection |
| HubSpot | CRM / form data | Add HubSpot tracking code via Code Injection; or use HubSpot form embed |
| Meta Pixel | Ad tracking | Paste pixel code in Settings > Advanced > Code Injection |

---

## Custom CSS Additions (Nice to Have)

Add these to Settings > Advanced > Custom CSS to get closer to the design:

```css
/* Green accent line on eyebrow labels */
.eyebrow-accent::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 1px;
  background: #4a9e4a;
  margin-right: 10px;
  vertical-align: middle;
}

/* Muted nav links */
.header-nav-item a {
  color: #888780 !important;
  font-size: 13px;
}

/* Remove button border-radius to match flat design */
.sqs-block-button .sqs-block-button-element {
  border-radius: 8px;
}

/* Tighten heading line height */
h1, h2, h3 {
  line-height: 1.15 !important;
}
```

---

## Build Order Recommendation

Build in this sequence to get to a presentable site fastest:

1. Design settings (fonts, colors, CSS) — 30 min
2. Homepage — 2-3 hours
3. Book a Call page — 1 hour
4. FELFEL case study — 1 hour
5. About — 1.5 hours
6. Services + Pricing — 2 hours
7. Greenhouse setup + placeholder posts — 1 hour
8. Remaining case studies — 1 hour each
9. Work index page — 30 min
10. Footer, nav, domain — 30 min

**Estimated total build time: 12-16 hours** working independently with this guide.

---

## Tips for Getting the Design Right

- **Squarespace's spacing controls are your best friend.** Most of the premium feel in our design comes from generous padding and breathing room -- not complex layouts. Increase section padding generously everywhere.
- **Use line blocks liberally.** The hairline border treatment between sections is what gives the site its editorial quality. Every section transition should have a line block.
- **Keep blocks simple.** Resist the urge to use complex Squarespace templates. A blank section with well-spaced text blocks will look better than a pre-built layout.
- **Import Google Fonts.** Go to Design > Custom CSS and add: `@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500&display=swap');` then reference them in your font settings.
- **Test on mobile as you go.** Squarespace's mobile preview is accurate. Check each page as you build it -- the 2-column layouts will stack to single column automatically, but check spacing and font sizes.

---

*Built with Chalk Farms design system. All copy and structure developed and ready to implement.*
