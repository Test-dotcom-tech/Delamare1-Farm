import farmCows from "@/assets/farm-cows.jpg";
import ayrshireCow from "@/assets/ayrshire-cow.jpg";
import girolandoCow from "@/assets/girolando-cow.jpg";
import saanenGoat from "@/assets/saanen-goat.jpg";
import farmSupplies from "@/assets/farm-supplies.jpg";

import galleryCow5 from "@/assets/gallery-cow-5.jpg";
import galleryCow6 from "@/assets/gallery-cow-6.jpg";
import galleryCow7 from "@/assets/gallery-cow-7.jpg";
import galleryCow9 from "@/assets/gallery-cow-9.jpg";
import galleryCow10 from "@/assets/gallery-cow-10.jpg";
import galleryCow11 from "@/assets/gallery-cow-11.jpg";

import galleryGoat10 from "@/assets/gallery-goat-10.jpg";
import galleryGoat11 from "@/assets/gallery-goat-11.jpg";
import galleryGoat15 from "@/assets/gallery-goat-15.jpg";
import galleryGoat16 from "@/assets/gallery-goat-16.jpg";
import galleryGoat17 from "@/assets/gallery-goat-17.jpg";

import galleryFeeds2 from "@/assets/gallery-feeds-2.jpg";
import galleryFeeds3 from "@/assets/gallery-feeds-3.jpg";
import galleryFeeds4 from "@/assets/gallery-feeds-4.jpg";
import galleryFeeds5 from "@/assets/gallery-feeds-5.jpg";
import galleryFeeds6 from "@/assets/gallery-feeds-6.jpg";
import galleryFeeds7 from "@/assets/gallery-feeds-7.jpg";
import galleryFeeds8 from "@/assets/gallery-feeds-8.jpg";
import galleryFeeds9 from "@/assets/gallery-feeds-9.jpg";
import galleryFeeds10 from "@/assets/gallery-feeds-10.jpg";
import galleryFeeds15 from "@/assets/gallery-feeds-15.jpg";

import sheep1 from "@/assets/sheep-1.jpeg";
import sheep2 from "@/assets/sheep-2.jpeg";
import sheep3 from "@/assets/sheep-3.jpeg";

import maize1 from "@/assets/maize-1.jpeg";
import maize2 from "@/assets/maize-2.jpeg";
import maize3 from "@/assets/maize-3.jpeg";
import maize4 from "@/assets/maize-4.jpeg";
import maize5 from "@/assets/maize-5.jpeg";
import maize6 from "@/assets/maize-6.jpeg";
import maize7 from "@/assets/maize-7.jpeg";
import maize8 from "@/assets/maize-8.jpeg";

import tomato1 from "@/assets/tomato-1.jpeg";
import tomato2 from "@/assets/tomato-2.jpeg";
import tomato3 from "@/assets/tomato-3.jpeg";
import tomato4 from "@/assets/tomato-4.jpeg";
import tomato5 from "@/assets/tomato-5.jpeg";
import tomato6 from "@/assets/tomato-6.jpeg";
import tomato7 from "@/assets/tomato-7.jpeg";
import tomato8 from "@/assets/tomato-8.jpeg";

import egg1 from "@/assets/egg-1.jpeg";
import egg2 from "@/assets/egg-2.jpeg";
import egg3 from "@/assets/egg-3.jpeg";
import egg4 from "@/assets/egg-4.jpeg";
import egg5 from "@/assets/egg-5.jpeg";
import egg6 from "@/assets/egg-6.jpeg";
import egg7 from "@/assets/egg-7.jpeg";
import egg8 from "@/assets/egg-8.jpeg";

import potato1 from "@/assets/potato-1.jpeg";
import potato2 from "@/assets/potato-2.jpeg";
import potato3 from "@/assets/potato-3.jpeg";
import potato4 from "@/assets/potato-4.jpeg";

export type ProductCategory = "cows" | "goats" | "sheep" | "feeds";

export interface FAQ {
  q: string;
  a: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  breed?: string;
  age?: string;
  milkYield?: string;
  price: number; // KES
  priceLabel?: string; // e.g. "per bale" or "Call for price"
  stock: "In Stock" | "Limited Stock" | "Pre-Order";
  location: string;
  images: string[];
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  faqs: FAQ[];
}

const commonLocation = "Naivasha, Kenya";

const livestockFaqs: FAQ[] = [
  {
    q: "Do you offer countrywide delivery in Kenya?",
    a: "Yes. Delamare Farm delivers livestock to every county in Kenya within 24–48 hours of order confirmation. Transport is handled in well-ventilated, livestock-grade trucks, and delivery cost is calculated based on distance from our Naivasha farm.",
  },
  {
    q: "Are the animals vaccinated and disease-free?",
    a: "Every animal leaves Delamare Farm fully vaccinated against common dairy diseases (Foot and Mouth, Lumpy Skin, Anthrax, Black Quarter, LSD, CCPP for goats) and dewormed. Complete vaccination and health records are handed over at delivery.",
  },
  {
    q: "How do I confirm an order?",
    a: "Send us a WhatsApp message on 0755 700 239 with the product you are interested in. Our manager Ibrahim Kassim will confirm availability, share farm photos and videos, and guide you on payment and delivery logistics.",
  },
  {
    q: "Can I visit the farm before buying?",
    a: "Yes, we welcome farm visits to our Naivasha facility. A booking fee of KSH 10,000 is fully redeemable on purchase. Visits help you inspect breeding stock, verify productivity records, and meet our team.",
  },
  {
    q: "What payment options do you accept?",
    a: "We accept M-PESA, bank transfer, and cash on delivery within Naivasha. For long-distance orders, a deposit is required to secure transport and the balance is paid before offloading.",
  },
  {
    q: "Do you offer after-sales support?",
    a: "Yes. Our team follows up by phone and WhatsApp after delivery to advise on feeding, housing, and lactation management so your investment performs from day one.",
  },
];

export const products: Product[] = [
  // ===== COWS =====
  {
    id: "holstein-2-4m",
    slug: "holstein-friesian-calf-2-4-months",
    name: "Holstein Friesian Calf (2–4 months)",
    category: "cows",
    breed: "Holstein Friesian",
    age: "2–4 months",
    milkYield: "Projected 25–35 L/day at maturity",
    price: 12000,
    stock: "In Stock",
    location: commonLocation,
    images: [farmCows, galleryCow5, galleryCow6, galleryCow7],
    shortDescription:
      "Weaned pedigree Holstein Friesian calf from a proven high-yielding dam.",
    longDescription:
      "Start your dairy farm with a strong foundation. This weaned Holstein Friesian calf, aged between 2 and 4 months, comes from a verified high-yielding dam producing over 30 litres per day at peak lactation. The calf has been raised on colostrum, transitioned cleanly onto calf starter and quality hay, and is already conditioned to handle, halter, and herd routines. Holstein Friesians remain the world's most productive dairy breed and adapt extremely well across Kenya's central, rift valley, and western dairy belts when given proper feed and shelter. At Delamare Farm in Naivasha we keep meticulous lineage and health records on every animal — vaccination, deworming, weight gain, and parentage — and these are handed over at delivery so you can plan breeding and lactation with confidence. Purchasing a young Holstein calf is the most affordable entry into commercial dairy: by the time she calves down at 22–26 months, you own a fully-grown, fully-acclimatised cow that you have raised yourself, often at less than half the cost of buying an in-calf heifer. We deliver countrywide within 24 hours, provide transition feeding guidance, and our team remains available on WhatsApp for any follow-up questions on housing, dehorning, and rumen development.",
    benefits: [
      "Pedigree Holstein Friesian — world's top dairy genetics",
      "From dams producing 28–35 L/day at peak",
      "Vaccinated, dewormed, with full records",
      "Low entry cost into commercial dairy",
      "Countrywide delivery within 24 hours",
    ],
    faqs: livestockFaqs,
  },
  {
    id: "holstein-4-5m",
    slug: "holstein-friesian-calf-4-5-months",
    name: "Holstein Friesian Calf (4–5 months)",
    category: "cows",
    breed: "Holstein Friesian",
    age: "4–5 months",
    milkYield: "Projected 25–35 L/day at maturity",
    price: 15000,
    stock: "In Stock",
    location: commonLocation,
    images: [farmCows, galleryCow6, galleryCow7, galleryCow10],
    shortDescription:
      "Well-grown weaned Friesian calf, fully on solid feed and ready to thrive.",
    longDescription:
      "This 4–5 month Holstein Friesian calf is fully weaned, transitioned to solid feed, and showing the steady weight gains that predict a productive future dairy cow. We select calves from cows producing 28 litres per day or more, and each animal at Delamare Farm in Naivasha is raised under strict hygiene, with daily monitoring of feed intake, faecal score, and weight. At this age the calf is past the most delicate developmental window and easier for first-time dairy farmers to manage on-farm. Holstein Friesians remain the benchmark for milk volume in Kenya, and with consistent quality forage, mineral supplementation, and clean water this calf will mature into a 500–650 kg cow producing 25–35 litres per day. We supply complete vaccination and deworming records, support you with feeding and housing advice over WhatsApp, and deliver to every county in Kenya. For dairy farmers expanding their herd or starting fresh, a 4–5 month calf strikes the best balance between purchase price and time-to-first-lactation.",
    benefits: [
      "Past the high-risk weaning window — safer to raise",
      "Documented weight-gain history",
      "Fully vaccinated and dewormed",
      "Excellent value vs. mature in-calf heifers",
      "WhatsApp support post-delivery",
    ],
    faqs: livestockFaqs,
  },
  {
    id: "holstein-7-8m",
    slug: "holstein-friesian-calf-7-8-months",
    name: "Holstein Friesian Heifer (7–8 months)",
    category: "cows",
    breed: "Holstein Friesian",
    age: "7–8 months",
    milkYield: "Projected 28–35 L/day at maturity",
    price: 25000,
    stock: "In Stock",
    location: commonLocation,
    images: [farmCows, galleryCow7, galleryCow9, galleryCow11],
    shortDescription:
      "Strong-growing Friesian heifer, approaching breeding age with excellent frame.",
    longDescription:
      "A 7–8 month Holstein Friesian heifer is the sweet spot for farmers who want to skip the high-maintenance early months and get closer to first lactation. At this stage the heifer is well-framed, eating up to 4–5% of body weight in dry matter, and only 7–10 months away from first service. Delamare Farm raises every heifer on premium forage — Boma Rhodes, lucerne, and corn silage — supplemented with a balanced mineral lick, so frame and udder development are on target. Each animal has documented sire and dam productivity, full vaccination history, and is regularly weighed to confirm growth curves. Holstein Friesians at this age handle relocation well and adapt quickly to new shelter and rations when transition is managed properly — our team provides a feeding schedule with every delivery. Countrywide delivery, vaccination records, and post-sale WhatsApp support are all included.",
    benefits: [
      "Only 7–10 months from first service",
      "Frame and udder development on target",
      "Raised on premium forage + mineral supplementation",
      "Full lineage and vaccination records",
      "Transition feeding plan included",
    ],
    faqs: livestockFaqs,
  },
  {
    id: "holstein-matured",
    slug: "holstein-friesian-matured-cow",
    name: "Holstein Friesian Matured Cow",
    category: "cows",
    breed: "Holstein Friesian",
    age: "Matured (ready to serve)",
    milkYield: "28–35 L/day potential",
    price: 65000,
    stock: "Limited Stock",
    location: commonLocation,
    images: [farmCows, galleryCow9, galleryCow10],
    shortDescription:
      "Matured Holstein Friesian, ready for service and first lactation.",
    longDescription:
      "This matured Holstein Friesian cow is ready for breeding and offers the fastest route to milk income for a farmer who wants to skip the long calf-rearing cycle. Sourced from Delamare Farm's own breeding stock in Naivasha, she has been raised on quality forage and concentrate, is in excellent body condition (BCS 3.0–3.5), and has the frame to comfortably produce 28–35 litres per day at first lactation. Holstein Friesians are unmatched in milk volume per cow, and a single well-managed Friesian can pay back her purchase price within the first lactation. We supply full vaccination, deworming, and reproductive health records at handover. Our team will recommend AI or natural service options and remain available to advise on feeding, calving, and lactation management.",
    benefits: [
      "Ready for breeding — shortest path to milk income",
      "BCS 3.0–3.5, frame for high production",
      "Full health and reproductive records",
      "AI / natural service options advised",
      "Countrywide delivery in 24 hours",
    ],
    faqs: livestockFaqs,
  },
  {
    id: "holstein-in-calf",
    slug: "holstein-friesian-in-calf-heifer",
    name: "Holstein Friesian In-Calf Heifer",
    category: "cows",
    breed: "Holstein Friesian",
    age: "In-calf (confirmed pregnant)",
    milkYield: "28–35 L/day at first lactation",
    price: 85000,
    stock: "Limited Stock",
    location: commonLocation,
    images: [farmCows, galleryCow10, galleryCow11],
    shortDescription:
      "Confirmed-pregnant Friesian heifer ready to deliver milk months after arrival.",
    longDescription:
      "An in-calf Holstein Friesian heifer is the most popular option for dairy farmers who want milk on the ground as soon as possible. This heifer's pregnancy has been confirmed by a qualified veterinarian, her calving date is documented, and she comes with full sire and dam information so you know exactly what genetic merit to expect. At Delamare Farm we only sell in-calf heifers that are in strong body condition, free of mastitis and reproductive issues, and on a steady plane of nutrition. Within months of arrival she will calve down on your farm and begin her first lactation — typically 25–35 litres per day for a well-managed Holstein. We supply a complete feeding and steaming-up plan to prepare her for calving, and our team is on WhatsApp for support through delivery and the early lactation period.",
    benefits: [
      "Confirmed pregnant — vet-verified",
      "Documented calving date and lineage",
      "Steaming-up and calving plan provided",
      "Milk income within months of arrival",
      "Post-calving WhatsApp support",
    ],
    faqs: livestockFaqs,
  },
  {
    id: "holstein-twin-family",
    slug: "holstein-friesian-twin-family",
    name: "Holstein Friesian Twin Family",
    category: "cows",
    breed: "Holstein Friesian",
    age: "Cow with twin calves",
    milkYield: "28–35 L/day",
    price: 105000,
    stock: "Limited Stock",
    location: commonLocation,
    images: [farmCows, galleryCow11, galleryCow9],
    shortDescription:
      "Productive Friesian dam sold together with her twin calves — instant herd.",
    longDescription:
      "The twin family package gives you three pedigree Friesians for less than the price of buying them individually: a productive dam in lactation plus her two healthy twin calves. This is the fastest way to build a small dairy herd. The cow is currently in milk and producing 25–35 litres per day depending on stage of lactation, and the calves have been raised on her milk plus calf starter, ensuring excellent growth and strong rumen development. Twin births in Holsteins are uncommon, and a healthy twin family with a proven mothering cow is a rare opportunity. Delamare Farm supplies full vaccination records for all three animals, feeding plans for both the cow and the calves, and ongoing WhatsApp support.",
    benefits: [
      "Three pedigree Holsteins in one package",
      "Cow already in milk — immediate income",
      "Calves raised on dam's milk for strong growth",
      "Builds a small dairy herd instantly",
      "Best value per animal",
    ],
    faqs: livestockFaqs,
  },
  {
    id: "ayrshire-2nd",
    slug: "ayrshire-dairy-cow-2nd-lactation",
    name: "Ayrshire Dairy Cow (2nd Lactation)",
    category: "cows",
    breed: "Ayrshire",
    age: "2nd lactation",
    milkYield: "26–28 L/day",
    price: 140000,
    stock: "Limited Stock",
    location: commonLocation,
    images: [ayrshireCow, galleryCow5, galleryCow6],
    shortDescription:
      "Proven-producer Ayrshire cow giving 26–28 litres a day. Vaccinated, with records.",
    longDescription:
      "Ayrshires are the workhorses of the Kenyan dairy industry — hardy, efficient grazers that produce rich, high-butterfat milk on less feed than larger breeds. This Ayrshire cow is in her second lactation, currently producing a verified 26–28 litres per day on a balanced forage and concentrate ration. She has clean conformation, healthy feet, a sound udder, and a calm temperament that makes her easy to milk both by hand and by machine. Delamare Farm tracks every Ayrshire by ear tag with full milk records, vaccination history (FMD, LSD, Anthrax, Black Quarter), deworming logs, and breeding history. Ayrshires thrive in the cooler highlands of Kenya — Nakuru, Nyandarua, Kiambu, Meru, Bomet, Trans Nzoia, Uasin Gishu — and tolerate variable forage quality better than Friesians, making them ideal for medium-scale dairy farmers. We deliver countrywide in well-ventilated transport, hand over all records on arrival, and follow up by WhatsApp.",
    benefits: [
      "Verified 26–28 L/day in 2nd lactation",
      "Higher butterfat than Friesian — better milk price",
      "Hardy in cool highlands, efficient feed converter",
      "Calm temperament, machine-milk friendly",
      "Full health, milk, and breeding records",
    ],
    faqs: livestockFaqs,
  },
  {
    id: "girolando",
    slug: "girolando-tropical-dairy-cow",
    name: "Girolando Tropical Dairy Cow",
    category: "cows",
    breed: "Girolando (Gir × Holstein)",
    age: "Various ages available",
    milkYield: "18–25 L/day in tropical climates",
    price: 0,
    priceLabel: "Call for Price",
    stock: "Pre-Order",
    location: commonLocation,
    images: [girolandoCow, galleryCow6, galleryCow10],
    shortDescription:
      "Heat-tolerant, disease-resistant tropical dairy breed — perfect for warm Kenyan counties.",
    longDescription:
      "Girolando is a Brazilian-developed cross between the Indian Gir (Bos indicus) and the Holstein Friesian (Bos taurus), bred specifically to thrive in hot, humid environments while still producing high milk volumes. For Kenyan dairy farmers in warm counties — Kisumu, Homa Bay, Migori, Kilifi, Kwale, Machakos, Tharaka Nithi, Garissa — Girolandos solve the single biggest problem with pure Holsteins: heat stress. They tolerate tick-borne diseases better, drink less water per litre of milk produced, and continue lactating productively in conditions where pure Friesians collapse in yield. A well-managed Girolando comfortably produces 18–25 litres per day in tropical climates, with butterfat higher than Holstein and feed efficiency that suits semi-extensive systems. Delamare Farm sources Girolandos with verified Gir and Holstein percentages, full vaccination, and tick-control programmes. Pricing depends on age and percentage breeding; call or WhatsApp us for current availability and prices.",
    benefits: [
      "Built for tropical Kenyan climates",
      "Heat tolerant and tick-resistant",
      "18–25 L/day under tropical conditions",
      "Higher butterfat than pure Holstein",
      "Lower water and feed cost per litre",
    ],
    faqs: livestockFaqs,
  },
  // ===== GOATS =====
  {
    id: "saanen-2w",
    slug: "saanen-dairy-goat-2-weeks-delivery",
    name: "Saanen Dairy Goat — 2 Weeks Delivery",
    category: "goats",
    breed: "Saanen (South African stock)",
    age: "Ready in 2 weeks",
    milkYield: "3–4 L/day",
    price: 18000,
    stock: "In Stock",
    location: commonLocation,
    images: [saanenGoat, galleryGoat10, galleryGoat11, galleryGoat15],
    shortDescription:
      "Premium South-African-sourced Saanen, the world's top dairy goat breed.",
    longDescription:
      "Saanens are the world's most productive dairy goat breed, and the Saanens at Delamare Farm are sourced from premium South African breeding lines, then acclimatised in Naivasha before sale. A mature Saanen doe comfortably produces 3–4 litres of milk per day on a balanced ration of Boma Rhodes hay, lucerne, dairy meal, and clean water — a single doe matches the milk output of several local goats. Saanen milk is low in odour, high in solids, and excellent for cheese, yoghurt, and direct consumption. This 2-week delivery tier ships within 14 days of order confirmation; the doe is fully vaccinated against CCPP, PPR, and foot-and-mouth, dewormed, hoof-trimmed, and comes with complete records. Delamare Farm offers free delivery on Saanens to our farmers and provides feeding and housing guidance via WhatsApp.",
    benefits: [
      "Imported South African genetics",
      "3–4 L of high-quality dairy milk per day",
      "Vaccinated against CCPP, PPR, FMD",
      "Free delivery to our farmers",
      "Housing & feeding plan included",
    ],
    faqs: livestockFaqs,
  },
  {
    id: "saanen-1m",
    slug: "saanen-dairy-goat-1-month-delivery",
    name: "Saanen Dairy Goat — 1 Month Delivery",
    category: "goats",
    breed: "Saanen (South African stock)",
    age: "Ready in 1 month",
    milkYield: "3–4 L/day",
    price: 16000,
    stock: "In Stock",
    location: commonLocation,
    images: [saanenGoat, galleryGoat11, galleryGoat16, galleryGoat17],
    shortDescription:
      "Same premium Saanen genetics, scheduled for delivery in one month.",
    longDescription:
      "Plan your dairy goat project with the 1-month delivery Saanen tier — same premium South African genetics as our flagship Saanens, at a more accessible price for farmers who can plan their stock arrival a month ahead. The doe is held at our Naivasha farm under our care, on a balanced ration, with all vaccinations (CCPP, PPR, FMD), deworming, and hoof trimming up to date until handover. Saanens are the highest-producing dairy goat breed worldwide, producing 3–4 litres per day with low-odour, easily digestible milk that earns premium prices in Kenyan urban markets. Free delivery to our farmers is included.",
    benefits: [
      "Same Saanen quality at a planning-friendly price",
      "3–4 L/day production",
      "Pre-paid stock — guaranteed delivery slot",
      "Full vaccination and hoof care",
      "Free delivery included",
    ],
    faqs: livestockFaqs,
  },
  {
    id: "saanen-first-timer",
    slug: "saanen-first-timer-doe",
    name: "Saanen First Timer Doe",
    category: "goats",
    breed: "Saanen",
    age: "First lactation",
    milkYield: "2.5–3.5 L/day (first kidding)",
    price: 14000,
    stock: "In Stock",
    location: commonLocation,
    images: [saanenGoat, galleryGoat15, galleryGoat10],
    shortDescription:
      "First-lactation Saanen doe — younger animal with a full productive life ahead.",
    longDescription:
      "A first-timer Saanen doe is one that has kidded for the first time and is in her opening lactation. First-timers typically produce slightly less than mature does (2.5–3.5 litres per day) but offer a longer productive lifespan and excellent value. At Delamare Farm every first-timer is hand-selected from healthy, well-grown does with sound udders and good mothering instinct. Vaccination, deworming, and hoof care are all current at handover. This is the right entry point for farmers who want premium Saanen genetics on a tighter budget and are prepared to grow with their animal through future lactations, when milk production rises sharply.",
    benefits: [
      "Lower entry price for premium Saanen genetics",
      "Long productive life ahead",
      "Already proven mother",
      "Vaccinated and dewormed",
      "Free delivery to our farmers",
    ],
    faqs: livestockFaqs,
  },
  {
    id: "saanen-second-timer",
    slug: "saanen-second-timer-doe",
    name: "Saanen Second Timer Doe",
    category: "goats",
    breed: "Saanen",
    age: "Second lactation",
    milkYield: "3–4 L/day",
    price: 13500,
    stock: "In Stock",
    location: commonLocation,
    images: [saanenGoat, galleryGoat17, galleryGoat11],
    shortDescription:
      "Proven-producer second-lactation Saanen at a friendly farmer price.",
    longDescription:
      "The second-timer Saanen doe is one that has completed her first lactation and kidded again — a proven producer whose milk yield (3–4 litres per day) and temperament are documented. This is the best-value Saanen we sell: a productive, vaccinated, dewormed doe at a price that pays back within months. Second-timers are settled in their routines, easy to milk, and well-suited to first-time dairy goat farmers in Kenya. Delamare Farm provides full records, feeding guidance, and free delivery to our farmers.",
    benefits: [
      "Best price-to-production value",
      "Proven 3–4 L/day milk record",
      "Settled, easy-to-milk temperament",
      "Vaccinated, dewormed, hoof-trimmed",
      "Free delivery included",
    ],
    faqs: livestockFaqs,
  },
  // ===== SHEEP =====
  {
    id: "hampshire-lamb",
    slug: "hampshire-down-lamb",
    name: "Hampshire Down Lamb",
    category: "sheep",
    breed: "Hampshire Down",
    age: "Lamb",
    price: 6000,
    stock: "Limited Stock",
    location: commonLocation,
    images: [sheep1, sheep2, sheep3],
    shortDescription: "Healthy Hampshire Down lambs — fast growth and excellent meat quality.",
    longDescription:
      "Premium Hampshire Down lambs raised at Delamare Farm Naivasha. Known for rapid weight gain, excellent meat conformation, and strong adaptability to Kenyan climates. Each lamb is dewormed, vaccinated, and ready for relocation. Ideal for farmers building a meat flock or upgrading existing stock with superior genetics.",
    benefits: [
      "Fast growth and superior meat quality",
      "Dewormed and vaccinated",
      "Strong adaptability across Kenya",
      "Free countrywide delivery",
    ],
    faqs: livestockFaqs,
  },
  {
    id: "hampshire-ram",
    slug: "hampshire-down-breeding-ram",
    name: "Hampshire Down Breeding Ram",
    category: "sheep",
    breed: "Hampshire Down",
    age: "Mature — ready to serve",
    price: 11000,
    stock: "Limited Stock",
    location: commonLocation,
    images: [sheep2, sheep3, sheep1],
    shortDescription: "Mature, proven Hampshire breeding rams ready to serve your flock.",
    longDescription:
      "Upgrade your flock with proven Hampshire Down breeding rams from Delamare Farm. Selected for strong frame, libido, and superior meat genetics. Each ram is health-checked, vaccinated, and ready to serve, delivering fast-growing lambs and improved meat conformation across your entire flock.",
    benefits: [
      "Ready-to-serve mature rams",
      "Selected for superior meat genetics",
      "Health-checked and vaccinated",
      "Free countrywide delivery",
    ],
    faqs: livestockFaqs,
  },
  {
    id: "hampshire-ewe",
    slug: "hampshire-down-ewe",
    name: "Pregnant & Lactating Hampshire Ewe",
    category: "sheep",
    breed: "Hampshire Down",
    age: "Mature ewe",
    price: 16000,
    priceLabel: "from",
    stock: "Limited Stock",
    location: commonLocation,
    images: [sheep3, sheep1, sheep2],
    shortDescription: "Pregnant and lactating Hampshire ewes — KSH 16,000 to 40,000.",
    longDescription:
      "Productive Hampshire Down ewes — pregnant or lactating — priced between KSH 16,000 and KSH 40,000 depending on age, stage, and lamb count. Perfect for farmers wanting immediate returns on a meat flock with proven mothering ability and milk supply for lambs.",
    benefits: [
      "Pregnant or lactating — immediate flock returns",
      "Proven mothering and milk supply",
      "Health-checked and vaccinated",
      "Free countrywide delivery",
    ],
    faqs: livestockFaqs,
  },
  // ===== FEEDS =====
  ...feedProducts(),
];

function feedProducts(): Product[] {
  const feedFaqs: FAQ[] = [
    {
      q: "Do you deliver feeds and supplies across Kenya?",
      a: "Yes. Delamare Farm delivers feeds, seeds, hay, silage, and fertilizer countrywide. Transport cost depends on order volume and destination — bulk orders qualify for reduced delivery rates.",
    },
    {
      q: "How fresh are your hay and silage stocks?",
      a: "Our hay and silage are baled on rotation from our own farm and partner farms in the Rift Valley. Bales are stored under cover to preserve nutrient value, and we ship in stock-rotation order so you always receive recent batches.",
    },
    {
      q: "Can I order in bulk?",
      a: "Absolutely. Bulk orders for hay, silage, and fertilizer qualify for volume pricing and prioritised delivery. Message us on WhatsApp with your quantity and location for a custom quote.",
    },
    {
      q: "Are the seeds certified?",
      a: "Yes — our Boma Rhodes and lucerne seeds are sourced from KEPHIS-certified suppliers, with high germination rates and clear packaging information.",
    },
    {
      q: "What's the difference between corn and sorghum silage?",
      a: "Corn silage is higher in energy and ideal for high-producing dairy cows; sorghum silage is more drought-tolerant in production and a cost-effective option for medium producers and dual-purpose herds. We stock both so you can mix to suit your ration.",
    },
  ];

  const feedItems: Array<Omit<Product, "category" | "location" | "stock" | "faqs" | "shortDescription" | "longDescription" | "benefits"> & {
    short: string;
    long: string;
    benefits: string[];
    img: string;
    images: string[];
  }> = [
    {
      id: "boma-rhodes-seeds",
      slug: "boma-rhodes-seeds",
      name: "Boma Rhodes Seeds",
      price: 450,
      priceLabel: "per kg",
      img: galleryFeeds4,
      images: [galleryFeeds4, galleryFeeds7, galleryFeeds8],
      short: "Certified Boma Rhodes seeds for high-yielding pasture establishment.",
      long: "Boma Rhodes grass is the backbone of Kenyan dairy pasture — fast-establishing, drought-tolerant, high-yielding, and palatable to cattle, sheep, and goats. Our seed is sourced from KEPHIS-certified suppliers with high germination rates (above 80%) and clean packaging. One kilogram of seed plants approximately a quarter-acre at recommended sowing density, producing 8–12 tonnes of dry matter per acre per year under good rainfall and management. Pair Boma Rhodes with lucerne and a leguminous browse for a balanced, low-cost forage system that cuts your concentrate bill substantially. Delamare Farm supplies planting guidance with every order.",
      benefits: [
        "KEPHIS-certified seed",
        "High germination rate (>80%)",
        "Drought-tolerant pasture",
        "8–12 tonnes DM/acre/year",
        "Planting guidance included",
      ],
    },
    {
      id: "boma-rhodes-hay",
      slug: "boma-rhodes-hay",
      name: "Boma Rhodes Hay",
      price: 250,
      priceLabel: "per bale",
      img: galleryFeeds5,
      images: [galleryFeeds5, galleryFeeds9, galleryFeeds6],
      short: "Quality sun-cured Boma Rhodes hay bales — Kenya's most reliable dry forage.",
      long: "Boma Rhodes hay is the staple roughage of profitable Kenyan dairy farms. Our bales are cut at the right maturity stage to preserve crude protein (8–11%) and digestibility, sun-cured to the correct moisture, and baled tightly for easy handling and storage. Stored under cover and rotated through stock, each bale ships in excellent condition. Feeding 2–3 bales per cow per week alongside concentrate and mineral supplementation reliably supports 20+ litres of milk per day. Available in any quantity — single bales for smallholders, full truck loads for commercial farms.",
      benefits: [
        "Cut at optimal maturity",
        "8–11% crude protein",
        "Tight, easy-handling bales",
        "Stored under cover",
        "Bulk pricing available",
      ],
    },
    {
      id: "lucerne-hay",
      slug: "lucerne-hay",
      name: "Lucerne Hay",
      price: 400,
      priceLabel: "per bale",
      img: galleryFeeds6,
      images: [galleryFeeds6, galleryFeeds7, galleryFeeds9],
      short: "Premium lucerne hay — the protein powerhouse of dairy nutrition.",
      long: "Lucerne (alfalfa) is the highest-quality leguminous forage you can feed to dairy cows, dairy goats, and breeding stock. Our lucerne is grown on irrigated farms in the Rift Valley, cut at early-bloom stage to maximise crude protein (18–22%), and field-cured then baled to lock in leaf — the most nutritious part. Feeding 1–2 kg of lucerne per cow per day reliably increases milk volume, butterfat, and reproductive performance, and reduces dependence on imported concentrates. Delamare Farm stocks lucerne year-round for dairy farmers across Kenya.",
      benefits: [
        "18–22% crude protein",
        "Cut at early-bloom stage",
        "Leaf-rich, field-cured bales",
        "Boosts milk and fertility",
        "Year-round availability",
      ],
    },
    {
      id: "lucerne-seeds",
      slug: "lucerne-seeds",
      name: "Lucerne Seeds",
      price: 1250,
      priceLabel: "per kg",
      img: galleryFeeds8,
      images: [galleryFeeds8, galleryFeeds7, galleryFeeds4],
      short: "Certified lucerne seed for establishing your own protein-rich forage.",
      long: "Establish your own lucerne stand and cut your protein bill for the next 4–6 years. Our lucerne seed is certified, scarified, and rhizobium-compatible — sow it on well-drained, lime-corrected soil at 8–10 kg per acre under irrigation or reliable rainfall. A well-managed lucerne stand yields 4–6 cuts per year of high-protein forage that transforms milk production. Delamare Farm provides establishment guidance covering soil testing, seedbed preparation, inoculation, and first-year management.",
      benefits: [
        "Certified, scarified seed",
        "4–6 cuts per year once established",
        "Stand lasts 4–6 years",
        "Transforms milk production",
        "Establishment guidance included",
      ],
    },
    {
      id: "fine-rice-bran",
      slug: "fine-rice-bran",
      name: "Fine Rice Bran",
      price: 40,
      priceLabel: "per kg",
      img: galleryFeeds3,
      images: [galleryFeeds3, galleryFeeds15, galleryFeeds10],
      short: "Energy-dense fine rice bran — affordable concentrate ingredient.",
      long: "Fine rice bran is one of Kenya's most affordable energy concentrate ingredients for dairy cows, pigs, and poultry. Our rice bran is freshly milled, clean, and dry, with consistent particle size suitable for mixing into home rations or feeding directly with hay and silage. Rice bran adds energy and palatability to a dairy ration and helps maintain body condition during peak lactation when energy requirements are highest. Order in any quantity from 50 kg upward.",
      benefits: [
        "High energy concentrate",
        "Freshly milled, clean and dry",
        "Affordable energy source",
        "Improves milk and condition",
        "Available in bulk",
      ],
    },
    {
      id: "rice-stalks-hay",
      slug: "rice-stalks-hay",
      name: "Rice Stalks Hay",
      price: 120,
      priceLabel: "per bale",
      img: galleryFeeds9,
      images: [galleryFeeds9, galleryFeeds5, galleryFeeds6],
      short: "Affordable rice-stalk hay — bulk roughage for dry cows and herd maintenance.",
      long: "Rice-stalk hay is the most affordable bulk roughage on the Kenyan feed market — ideal for dry cows, heifers, and beef herds where energy and protein are supplied separately. Our bales are baled tight, kept dry, and sold at honest farmer-friendly prices. Combined with a small amount of dairy meal, mineral supplement, and a quality protein source like lucerne, rice-stalk hay keeps your maintenance herd in excellent condition at minimum cost.",
      benefits: [
        "Lowest-cost roughage",
        "Ideal for dry cows and heifers",
        "Tight, dry bales",
        "Bulk discounts on truck loads",
        "Pairs well with concentrate",
      ],
    },
    {
      id: "corn-silage",
      slug: "corn-bailed-silage",
      name: "Corn Bailed Silage",
      price: 20,
      priceLabel: "per kg",
      img: galleryFeeds3,
      images: [galleryFeeds3, galleryFeeds5, galleryFeeds15],
      short: "High-energy corn silage in tight bales — fuel for high-producing cows.",
      long: "Corn silage is the highest-energy forage you can feed to a dairy cow, and our bailed corn silage delivers that energy in convenient, easy-to-handle bales. Harvested at the right dry-matter stage, chopped, and ensiled to optimum lactic-acid fermentation, our silage is sweet-smelling, palatable, and consistently of high quality. Feeding corn silage as a base forage reliably supports 25+ litres of milk per cow per day with the right balance of protein, fibre, and minerals. Bailed silage stores well and travels well countrywide.",
      benefits: [
        "Highest-energy forage",
        "Properly fermented, sweet smelling",
        "Easy-handling baled format",
        "Supports 25+ L/day",
        "Travels well countrywide",
      ],
    },
    {
      id: "sorghum-silage",
      slug: "sorghum-bailed-silage",
      name: "Sorghum Bailed Silage",
      price: 19,
      priceLabel: "per kg",
      img: galleryFeeds3,
      images: [galleryFeeds3, galleryFeeds15, galleryFeeds5],
      short: "Cost-effective sorghum silage — drought-tolerant energy forage.",
      long: "Sorghum silage offers most of the benefits of corn silage with significantly more drought tolerance in production, making it the cost-effective choice for medium-yield dairy herds and dual-purpose cattle in drier regions. Our sorghum silage is ensiled in tight bales, fermented to a stable, palatable feed that mixes well with hay and concentrate. A great choice for farmers balancing production goals against feed cost.",
      benefits: [
        "Drought-tolerant in production",
        "Cost-effective vs corn silage",
        "Palatable, stable fermentation",
        "Easy-handling bales",
        "Great for medium-yield herds",
      ],
    },
    {
      id: "super-napier-stems",
      slug: "super-napier-stems-30cm",
      name: "Super Napier Stems (30cm)",
      price: 25,
      priceLabel: "per stem",
      img: galleryFeeds7,
      images: [galleryFeeds7, galleryFeeds4, galleryFeeds8],
      short: "Pre-cut Super Napier planting stems — establish your own high-yielding fodder.",
      long: "Super Napier (Pakchong) is a hybrid napier grass that yields significantly more biomass than traditional napier varieties, with higher crude protein and excellent palatability for dairy cattle and goats. Our 30-cm planting stems are cut from healthy, mature stands and shipped fresh, ready to plant in well-prepared rows at 60×90 cm spacing. With proper fertilisation and cut-and-carry management, Super Napier delivers 6–8 cuts per year and can supply most of the bulk forage requirement for a small to medium dairy herd. Delamare Farm provides planting guidance with every order.",
      benefits: [
        "Higher biomass than traditional napier",
        "Higher crude protein",
        "6–8 cuts per year",
        "Fresh, viable stems",
        "Planting guidance included",
      ],
    },
    {
      id: "maize-germ",
      slug: "maize-germ-50kg",
      name: "Maize Germ (50kg)",
      price: 2150,
      priceLabel: "per 50kg bag",
      img: galleryFeeds3,
      images: [galleryFeeds3, galleryFeeds15, galleryFeeds10],
      short: "Quality maize germ — high-energy concentrate ingredient.",
      long: "Maize germ is a popular energy and oil-rich ingredient in home-mixed dairy meal, pig rations, and poultry feed. Our maize germ is fresh, clean, and consistently sized, supplied in 50 kg bags for easy handling and storage. Combining maize germ with cotton seed cake, fishmeal or sunflower cake, dairy salt, and a mineral premix produces a balanced concentrate at a fraction of the cost of pre-mixed commercial dairy meal.",
      benefits: [
        "High-energy ingredient",
        "Convenient 50 kg bags",
        "Fresh and clean",
        "Reduces concentrate cost",
        "Bulk pricing available",
      ],
    },
    {
      id: "hygrow-fertilizer",
      slug: "hygrow-organic-fertilizer-50kg",
      name: "Hygrow Organic Fertilizer (50kg)",
      price: 0,
      priceLabel: "Call for price",
      img: galleryFeeds10,
      images: [galleryFeeds10, galleryFeeds2, galleryFeeds3],
      short: "Premium Hygrow organic fertilizer — build soil health while you grow.",
      long: "Hygrow Organic Fertilizer is a premium soil-building product that improves crop yields while restoring soil biology, organic matter, and water-holding capacity. Unlike synthetic fertilizers that feed the plant but degrade the soil, Hygrow feeds both — making it the smart long-term choice for forage farmers establishing Boma Rhodes, lucerne, and napier, as well as horticulture and food crop growers. Available in 50 kg bags. Pricing depends on volume and delivery location — message us on WhatsApp for the current quote.",
      benefits: [
        "Builds soil organic matter",
        "Improves water-holding capacity",
        "Boosts forage and crop yield",
        "Restores soil biology",
        "Volume pricing on WhatsApp",
      ],
    },
    {
      id: "dry-maize",
      slug: "dry-maize-90kg-bag",
      name: "Dry Maize (90kg Bag)",
      price: 3500,
      priceLabel: "per 90kg bag",
      img: maize1,
      images: [maize1, maize2, maize3, maize4, maize5, maize6, maize7, maize8],
      short: "Clean, dry maize — KSH 3,500 per 90kg bag. Free from dust, delivery on agreement.",
      long: "Premium dry maize from Delamare Farm Naivasha. Sun-dried to ideal moisture, machine-cleaned, and completely free from dust and foreign matter. Sold in standard 90kg bags at KSH 3,500. Ideal for milling, animal feed formulation, or resale. Delivery is arranged on agreement with the client to any destination countrywide. Call or WhatsApp 0755-700-239 to confirm stock and arrange logistics.",
      benefits: [
        "Clean, dust-free dry maize",
        "Standard 90kg bag",
        "Sun-dried to ideal moisture",
        "Delivery on agreement countrywide",
        "Bulk pricing available",
      ],
    },
    {
      id: "fresh-tomatoes",
      slug: "fresh-farm-tomatoes",
      name: "Fresh Farm Tomatoes",
      price: 6600,
      priceLabel: "per crate",
      img: tomato1,
      images: [tomato1, tomato2, tomato3, tomato4, tomato5, tomato6, tomato7, tomato8],
      short: "Fresh Nyanya for sale — KSH 6,600 per crate. 5 acres yield 300 crates weekly for 6 weeks.",
      long: "Fresh Nyanya (tomatoes) from Delamare Farm Naivasha — a crate goes at KSH 6,600. Our 5-acre tomato plots produce up to 300 crates weekly for 6 weeks straight, giving wholesalers, market vendors, supermarkets, hotels, and households a reliable, high-volume supply of hand-graded fruit. Want to farm your own? We also have 10 acres for sale at Delamere Farm Naivasha — KSH 400,000 per acre, title ready and available, water on site, accessible, and within human settlements. Call or WhatsApp 0755700239 to order crates or inquire about the land.",
      benefits: [
        "KSH 6,600 per crate — fresh nyanya",
        "5 acres yield 300 crates weekly for 6 weeks",
        "Reliable wholesale supply",
        "Land for sale: 10 acres @ KSH 400,000/acre",
        "Title ready, water available, accessible",
        "Countrywide delivery on agreement",
      ],
    },
    {
      id: "eggs-wholesale",
      slug: "eggs-wholesale-tray",
      name: "Fresh Eggs (Wholesale Trays)",
      price: 300,
      priceLabel: "per tray (Big Size)",
      img: egg1,
      images: [egg1, egg2, egg3, egg4, egg5, egg6, egg7, egg8],
      short: "Wholesale eggs — Big 300/=, Small 280/=, Kienyeji 400/= per tray. Empty trays available.",
      long: "Fresh eggs from Delamare Farm Naivasha at wholesale prices. Big size at KSH 300 per tray, Small size at KSH 280 per tray, and Kienyeji eggs at KSH 400 per tray. We also supply empty paper trays at KSH 10 and empty plastic trays at KSH 30. Call or WhatsApp 0755-700-239 to place your order. Countrywide delivery on agreement.",
      benefits: [
        "Big Size eggs — KSH 300 per tray",
        "Small Size eggs — KSH 280 per tray",
        "Kienyeji eggs — KSH 400 per tray",
        "Empty paper trays — KSH 10",
        "Empty plastic trays — KSH 30",
        "Wholesale supply, countrywide delivery",
      ],
    },
    {
      id: "potato-seeds",
      slug: "potato-seeds-c1-c2",
      name: "Potato Seeds (Ready for Planting)",
      price: 3700,
      priceLabel: "per 90kg C1 bag",
      img: potato1,
      images: [potato1, potato2, potato3, potato4],
      short: "Certified potato seeds — Shangi C1/C2, Sherekea, Markies, Dutch & more. KSH 3,700 / 90kg.",
      long: "Certified potato seeds from Delamare Farm Naivasha — ready for planting. All popular varieties available including Super Shangi C1 and C2, Stephen, Eunica, Sherekea, Dutch, Markies and more. Pricing: 90kg C1 at KSH 3,700, 50kg C1 at KSH 2,800. Healthy, well-sprouted tubers with strong eyes for excellent germination and high yield potential. Call or WhatsApp 0755-700-239 to order today and we will arrange delivery countrywide on agreement.",
      benefits: [
        "90kg C1 — KSH 3,700",
        "50kg C1 — KSH 2,800",
        "Varieties: Super Shangi C1/C2, Stephen, Eunica, Sherekea, Dutch, Markies",
        "Well-sprouted, ready for planting",
        "Countrywide delivery on agreement",
      ],
    },
  ];

  return feedItems.map((f) => ({
    id: f.id,
    slug: f.slug,
    name: f.name,
    category: "feeds" as const,
    price: f.price,
    priceLabel: f.priceLabel,
    stock: "In Stock" as const,
    location: commonLocation,
    images: f.images,
    shortDescription: f.short,
    longDescription: f.long,
    benefits: f.benefits,
    faqs: feedFaqs,
  }));
}

export const formatKES = (n: number) =>
  `KSH ${n.toLocaleString("en-KE")}`;

export const productPriceLabel = (p: Product) =>
  p.price > 0 ? `${formatKES(p.price)}${p.priceLabel ? ` ${p.priceLabel}` : ""}` : (p.priceLabel ?? "Call for price");

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const productSlugs = () => products.map((p) => p.slug);
