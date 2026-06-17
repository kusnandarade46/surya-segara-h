# SSH Company — Enterprise Corporate Website

A premium, Swiss-style B2B website for SSH Company (Surya Segara Hana), positioning them as Indonesia's leading Industrial Safety Technology partner. Bilingual (ID default / EN), strict 12-col grid, large typography, restrained red accents.

## Design system

- **Tokens** (`src/styles.css`, `@theme`): primary `#C72026`, secondary `#1E2329`, accent `#FF7A00`, neutral `#667085`, background `#F8F9FB`. Sharp corners (radius 0–2px max). No gradients, no glass.
- **Type**: Inter + IBM Plex Sans via `<link>` in `__root.tsx`. Scale: hero 80px / section 56px / subtitle 28px / body 18px (fluid clamp for mobile).
- **Grid**: max-width 1440px container, 12-col desktop / 8 tablet / 4 mobile, generous gutters.
- **Color use**: ~80% white, 15% charcoal, 5% red (CTAs + key highlights only).
- **Motion**: fade-in, slide-up, hover underline, hover elevation, number counter. No parallax.

## Pages & routes (TanStack file-based)

```
src/routes/
  __root.tsx              header, footer, lang context, fonts, default SEO
  index.tsx               Home
  about.tsx               About
  solutions.tsx           Solutions overview + lead form
  solutions.$slug.tsx     H2S, Connected Safety, Emergency Response, Gas Detection, Consulting
  products.tsx            Products index
  products.$slug.tsx      iNet, SAFER One, Ventis Pro5, Radius BZ1, Tango TX1, MX6 iBrid
  industries.tsx          Industries index
  industries.$slug.tsx    Oil & Gas, Petrochemical, Mining, Manufacturing, LNG, Refinery
  resources.tsx           Insights/blog list
  contact.tsx             Contact form + offices + map
```

Each leaf route defines its own `head()` with title, description, og:title/description, canonical, og:url. Home gets Organization JSON-LD; product/industry pages get Product/Service JSON-LD.

## Home page sections

1. Hero — left text block (label, 80px headline, subhead, two CTAs); right industrial photo with 4 floating stat cards.
2. Trust strip — 4 large Swiss-typography stats (10+, 250+, 100+, 24/7).
3. Solutions — 4-card grid (H2S, Connected Safety, Emergency Response, Gas Detection).
4. Featured Tech — iNet® block + SAFER One® block, each with feature list + CTA.
5. Industries — 6-card grid with imagery.
6. Why SSH — dark `#1E2329` section, 6 reason cards.
7. Client logos — monochrome wall.
8. Insights — 3 editorial blog cards.
9. Final CTA — full-width section with red primary CTA.

## Bilingual (ID default / EN)

- Lightweight i18n via React context + dictionary objects (`src/i18n/id.ts`, `src/i18n/en.ts`) — no heavy lib needed.
- Language toggle (ID | EN) in header; persisted to `localStorage`, default `id`.
- `<html lang>` updated via root effect. All copy strings flow through a `t()` hook.

## Lead generation

- Contact form, Consultation form, Demo request form, Download form — shared validated form component (Zod + react-hook-form, already in stack).
- Floating WhatsApp button (fixed bottom-right, all pages).
- Forms currently submit to a stub handler with success toast. Backend wiring (email/CRM) is out of scope for this build; can be added later via Lovable Cloud.

## SEO

- Per-route `head()` with target keywords (H2S Services Indonesia, Industrial Safety Solutions, Gas Detection, iNet Safety, SAFER One, Connected Worker Safety, etc.).
- Organization + Service + Product JSON-LD on relevant routes.
- `public/robots.txt` + `public/sitemap.xml` (static list of routes).
- Semantic HTML, single H1 per page, alt text on all imagery, mobile-first responsive.

## Imagery

Generated industrial photography (refinery, offshore platform, workers in PPE, gas detectors, control rooms) via imagegen, saved to `src/assets/`. Monochrome client logo placeholders as SVG.

## Out of scope (call out)

- No CMS — content is hardcoded in route files / dictionary.
- No real backend for forms (stub submit + toast).
- No real blog content engine — Insights uses 3 static cards.
- No Google Maps API key wiring — uses generic iframe embed of a placeholder coordinate (user can swap).
- No payments, no auth.

## Technical notes

- TanStack Start + Tailwind v4 (CSS-first tokens in `src/styles.css`).
- shadcn components restyled to sharp/industrial (no rounded-2xl, no shadow-glow).
- Animations via Motion for React (already supported) — restrained variants only.
- All copy authored in both ID and EN from the start.
