## Goal

Transform the site into a functional livestock e-commerce marketplace with cart, SEO, expanded content, and brand correction — without altering the existing visual design (colors, typography, layout patterns, components).

## Scope

### 1. Branding correction (sitewide)
- Replace every occurrence of "Delamere Farm" → "Delamare Farm" across `index.html`, components (`Navbar`, `Footer`, `HeroSection`, `ContactSection`, `GallerySection`, `FeedsSection`, `ReviewsSection`, `LivestockCard` messages), and meta/alt text.
- Remove any "Lovable" references from `index.html` (author meta, og:title, og:image, twitter:site, twitter:image, og defaults). Set author to "Delamare Farm".

### 2. Product data model (frontend-only)
Create `src/data/products.ts` exporting a typed `Product[]`:
```
id, slug, name, category ('cows'|'goats'|'feeds'),
breed?, age?, milkYield?, price (KES number), priceLabel,
stock, location ('Naivasha, Kenya'), images: string[],
shortDescription, longDescription (200–500+ words),
benefits: string[], faqs: {q,a}[]
```
Seed with all existing items currently rendered (Holstein variants, Ayrshire, Girolando, Saanen tiers, all feed items) using the photos already imported in the codebase. No new images generated.

### 3. Cart system (localStorage, no backend)
- `src/context/CartContext.tsx` — provider with `items`, `addItem`, `removeItem`, `updateQty`, `clear`, `total`, `count`. Merges duplicates by id, persists to `localStorage` under `delamare_cart_v1`, hydrates on mount.
- `src/components/CartButton.tsx` — floating cart icon (bottom-left, mirror of existing WhatsApp button styling) with live count badge.
- `src/components/CartDrawer.tsx` — slide-in panel using existing shadcn `Sheet`, styled with current tokens (`bg-card`, `text-foreground`, `bg-cta`). Shows items, qty +/-, remove, line + grand total in KES, empty state, "Checkout" button (simulated toast confirmation), and "Order via WhatsApp" button that builds a message:  
  `Hello Delamare Farm! I'd like to order:\n- 2× Holstein Friesian Calf (2-4 months) @ KSH 12,000 = KSH 24,000\n…\nTotal: KSH XX,XXX`
- Animations via existing Sheet transitions + simple Tailwind transitions on item add/remove.

### 4. "Add to Cart" on existing cards
- Extend `LivestockCard` and feed list rows to render an additional "Add to Cart" button next to the existing WhatsApp button. Same token-based styling, no visual redesign. Each price-row in `LivestockCard` becomes individually addable.
- Existing WhatsApp inquiry buttons stay.

### 5. Product detail pages (SEO + long content)
- New route `/product/:slug` rendered by `src/pages/Product.tsx`, registered in `App.tsx` above the catch-all.
- Layout reuses existing tokens/components: navbar, hero-style header with image gallery (thumbnails switch main image), price, stock, location, breed/age/milk-yield specs, Add-to-Cart + WhatsApp order buttons, 200–500+ word description, benefits bullet list, 4–8 FAQ items using existing shadcn `Accordion`, related-products grid, footer.
- Cards on the home page link their title to `/product/{slug}`.

### 6. SEO
- `index.html`: unique title "Delamare Farm — Dairy Cows, Saanen Goats & Farm Feeds in Kenya", meta description with Kenya keywords, canonical `/`, OG + Twitter tags (no og:image placeholder), JSON-LD `LocalBusiness` (Naivasha, phone, areaServed Kenya).
- Install `react-helmet-async`, wrap app in `<HelmetProvider>` in `main.tsx`. Add per-route `<Helmet>` in `Index` and `Product` with unique title/description/canonical/OG and `Product` JSON-LD (name, image, brand, offers in KES, availability).
- `public/robots.txt`: keep current allow rules, add `Sitemap: https://www.delamarefarm.co.ke/sitemap.xml`.
- `scripts/generate-sitemap.ts` with `BASE_URL = "https://www.delamarefarm.co.ke"`, entries for `/` + every product slug. Wire `predev`/`prebuild` in `package.json`.
- Image `alt` text rewritten descriptively (e.g. "Friesian dairy cow high milk yield Delamare Farm Kenya"). Add `loading="lazy"` and `decoding="async"` to all non-hero images.

### 7. FAQ content
Reusable `<ProductFAQ items={...}/>` on each product page; each product seeded with 4–8 Kenya-specific Q&A on delivery (countrywide, transport cost), vaccination records, feeding routine, expected milk yield, ordering via WhatsApp, payment on delivery, etc.

## Technical Details

- No new visual design tokens; everything uses existing `bg-card`, `bg-cta`, `text-primary`, `bg-muted`, `bg-accent`, `font-serif`, etc.
- All currency formatted as `KSH {n.toLocaleString('en-KE')}`.
- Cart state lives in React Context, mounted in `App.tsx` above `BrowserRouter` children so it's available across routes.
- WhatsApp order message uses existing `whatsappLink` helper.
- No backend, no payments — checkout shows a toast "Order recorded. We'll confirm on WhatsApp." and opens the WhatsApp link with the cart summary.
- `react-helmet-async` is the only new dependency.

## Out of scope (will not touch)
- Color palette, font choices, spacing scale, hero imagery, section ordering.
- Real payment integration, auth, admin, inventory backend.

## Deliverables
- Cart works end-to-end with persistence.
- Every product reachable at a unique URL with long-form SEO content + FAQs.
- Sitewide brand reads "Delamare Farm"; no Lovable traces remain.
- Sitemap, robots, JSON-LD, per-page meta in place pointing at `https://www.delamarefarm.co.ke`.
