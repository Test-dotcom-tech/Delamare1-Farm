import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Plus } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "./Navbar";

import g1 from "@/assets/girolando-heifer-1.jpeg";
import g2 from "@/assets/girolando-heifer-2.jpeg";
import g3 from "@/assets/girolando-heifer-3.jpeg";
import g4 from "@/assets/girolando-heifer-4.jpeg";
import g5 from "@/assets/girolando-heifer-5.jpeg";
import g6 from "@/assets/girolando-heifer-6.jpeg";
import g7 from "@/assets/girolando-heifer-7.jpeg";
import g8 from "@/assets/girolando-heifer-8.jpeg";
import g9 from "@/assets/girolando-heifer-9.jpeg";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9];
const AUTO_MS = 4000;

const KES = (n: number) =>
  new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);

interface Tier {
  id: string;
  name: string;
  price: number;
  image: string;
}

const tiers: Tier[] = [
  { id: "girolando-4-5m", name: "Girolando Heifer · 4–5 months", price: 20000, image: g3 },
  { id: "girolando-7-8m", name: "Girolando Heifer · 7–8 months", price: 40000, image: g6 },
  { id: "girolando-mature", name: "Girolando Mature Heifer", price: 80000, image: g4 },
  { id: "girolando-in-calf", name: "Girolando In-Calf Heifer", price: 180000, image: g5 },
];

const Slideshow = () => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), AUTO_MS);
    return () => clearInterval(t);
  }, [paused]);

  const go = (dir: number) => setIdx((i) => (i + dir + images.length) % images.length);

  return (
    <div
      className="group/slide relative h-72 w-full overflow-hidden rounded-t-xl bg-muted sm:h-96 md:h-[28rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={`Girolando heifer for sale at Delamare Farm Naivasha — image ${i + 1}`}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow">
        Limited Stock
      </span>
      <button
        type="button"
        aria-label="Previous image"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-2.5 text-white opacity-0 backdrop-blur-md transition group-hover/slide:opacity-100 hover:bg-white/40"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-2.5 text-white opacity-0 backdrop-blur-md transition group-hover/slide:opacity-100 hover:bg-white/40"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to image ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-6 bg-white" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const TierRow = ({ tier }: { tier: Tier }) => {
  const { addItem } = useCart();
  const handleAdd = () => {
    addItem({ id: tier.id, name: tier.name, price: tier.price, image: tier.image });
    toast.success(`${tier.name} added to cart`);
  };
  return (
    <div className="flex items-center justify-between gap-2 rounded-md bg-muted px-3 py-2.5 text-sm">
      <p className="min-w-0 flex-1 font-medium text-card-foreground">{tier.name}</p>
      <div className="flex items-center gap-2">
        <span className="font-bold text-primary">{KES(tier.price)}</span>
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${tier.name} to cart`}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground transition hover:brightness-110"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const GirolandoHeifersSection = () => (
  <section id="girolando-heifers" className="bg-muted/40 py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          🐄 Tropical Dairy Breed
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Girolando Breed Heifers for Sale
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Quality Girolando heifers healthy, well-managed and ideal for warm Kenyan climates. Limited stock  book yours today!
        </p>
      </div>

      <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-xl">
        <Slideshow />
        <div className="p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Delamare Farm Naivasha · Girolando Heifers
          </p>
          <h3 className="mt-1 font-serif text-2xl font-bold text-card-foreground md:text-3xl">
            Healthy &amp; Well-Managed Heifers
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            Heat-tolerant, disease-resistant Gir × Holstein heifers available at every growth stage from young heifers to in-calf, ready to deliver.
          </p>

          <div className="mt-5 space-y-2">
            {tiers.map((t) => <TierRow key={t.id} tier={t} />)}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={whatsappLink(
                "Hello Delamare Farm! I'd like to order a Girolando heifer (4–5m / 7–8m / mature / in-calf). Please share details."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-bold text-cta-foreground transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
              Order Now
            </a>
            <a
              href="tel:0101024658"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-background px-4 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Inquire
            </a>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            📍 Delamare Farm, Naivasha
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default GirolandoHeifersSection;
