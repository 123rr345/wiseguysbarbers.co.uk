# Wise Guys Barbers — Website

A modern, premium barbershop website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx       — Root layout with fonts & metadata
  globals.css      — Tailwind + custom styles
  page.tsx         — Main page with all sections + JSON-LD SEO

components/
  Nav.tsx          — Sticky navbar (transparent → solid on scroll)
  Hero.tsx         — Full-screen hero with shop interior background
  Services.tsx     — 6 service cards with icons & prices
  Gallery.tsx      — Masonry photo grid with filter chips & lightbox
  About.tsx        — About section with stats
  BookingCTA.tsx   — Full-width booking call-to-action
  Visit.tsx        — Map, hours (highlights today), address & phone
  Footer.tsx       — Links, contact info, Instagram

lib/
  services.ts      — Service data (names, prices, descriptions)
  gallery.ts       — Gallery image list & categories

public/gallery/    — 20 cropped photos from Instagram
```

## How to Customise

- **Swap gallery photos:** Replace files in `public/gallery/` and update `lib/gallery.ts`
- **Change prices:** Edit `lib/services.ts`
- **Edit copy:** Each component has its own text — edit directly
- **Change accent colour:** Edit `tailwind.config.ts` → `colors.gold`
- **Update hours:** Edit `components/Visit.tsx`
- **"Site by" credit:** Edit `components/Footer.tsx`

## Key Features

- Dark premium design with gold accent
- Responsive — mobile-first
- Masonry gallery with category filters and lightbox
- Framer Motion scroll animations
- Highlights today's opening hours
- SEO with JSON-LD LocalBusiness schema
- "Book Now" button always visible (nav bar on every screen size)
- All images optimised with next/image

## Deploy to Vercel

```bash
npx vercel
```

## Business Details

- **Name:** Wise Guys Barbers
- **Address:** 3A Brocket Road, Hoddesdon, EN11 8NZ
- **Phone:** 01992 676774
- **Booking:** https://wiseguysbarberhoddesdon31.booksy.com/a
- **Instagram:** @wiseguyshoddesdon

## Important Note

⚠️ This project must live in a folder path **without** `#` or `"` characters — Node.js/Next.js cannot handle those in file paths. Use the copy at `~/Documents/wiseguys-barbers-site/`.
