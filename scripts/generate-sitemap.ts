// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.delamarefarm.co.ke";

const productSlugs = [
  "holstein-friesian-calf-2-4-months",
  "holstein-friesian-calf-4-5-months",
  "holstein-friesian-calf-7-8-months",
  "holstein-friesian-matured-cow",
  "holstein-friesian-in-calf-heifer",
  "holstein-friesian-twin-family",
  "ayrshire-dairy-cow-2nd-lactation",
  "girolando-tropical-dairy-cow",
  "saanen-dairy-goat-2-weeks-delivery",
  "saanen-dairy-goat-1-month-delivery",
  "saanen-first-timer-doe",
  "saanen-second-timer-doe",
  "boma-rhodes-seeds",
  "boma-rhodes-hay",
  "lucerne-hay",
  "lucerne-seeds",
  "fine-rice-bran",
  "rice-stalks-hay",
  "corn-bailed-silage",
  "sorghum-bailed-silage",
  "super-napier-stems-30cm",
  "maize-germ-50kg",
  "hygrow-organic-fertilizer-50kg",
];

interface Entry { path: string; changefreq?: string; priority?: string; }

const entries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  ...productSlugs.map((s) => ({ path: `/product/${s}`, changefreq: "weekly", priority: "0.8" })),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ].filter(Boolean).join("\n")
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
