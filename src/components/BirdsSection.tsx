import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "./Navbar";
import { toast } from "sonner";
import bird1 from "@/assets/bird-1.jpeg";
import bird2 from "@/assets/bird-2.jpeg";
import bird3 from "@/assets/bird-3.jpeg";
import bird4 from "@/assets/bird-4.jpeg";
import bird5 from "@/assets/bird-5.jpeg";
import bird6 from "@/assets/bird-6.jpeg";
import bird7 from "@/assets/bird-7.jpeg";
import bird8 from "@/assets/bird-8.jpeg";
import bird9 from "@/assets/bird-9.jpeg";
import bird10 from "@/assets/bird-10.jpeg";
import bird11 from "@/assets/bird-11.jpeg";
import bird12 from "@/assets/bird-12.jpeg";

const AUTO_MS = 4000;

const images = [bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8, bird9, bird10, bird11, bird12];

const KES = (n: number) =>
  new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);

interface BirdItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

const chickItems: BirdItem[] = [
  { id: "bird-goose-chick", name: "Goose Chicks", price: 200, image: bird2 },
  { id: "bird-turkey-chick", name: "Turkey Chicks", price: 250, image: bird5 },
  { id: "bird-silkie-chick", name: "Silkie Chicks", price: 250, image: bird7 },
  { id: "bird-brahma-chick", name: "Brahma Chicks", price: 250, image: bird10 },
];

const matureItems: BirdItem[] = [
  { id: "bird-goose-pair", name: "Mature Goose Pair", price: 4000, image: bird1 },
  { id: "bird-turkey-pair", name: "Mature Turkey Pair", price: 6000, image: bird5 },
];

const Slideshow = ({ alt }: { alt: string }) => {
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
          alt={`${alt} — image ${i + 1}`}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow">
        New Arrivals
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

const ItemRow = ({ item }: { item: BirdItem }) => {
  const { addItem } = useCart();
  const handleAdd = () => {
    addItem({ id: item.id, name: item.name, price: item.price, image: item.image });
    toast.success(`${item.name} added to cart`);
  };
  return (
    <div className="flex items-center justify-between gap-2 rounded-md bg-muted px-3 py-2.5 text-sm">
      <p className="min-w-0 flex-1 font-medium text-card-foreground">{item.name}</p>
      <div className="flex items-center gap-2">
        <span className="font-bold text-primary">{KES(item.price)}</span>
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${item.name} to cart`}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground transition hover:brightness-110"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const BirdsSection = () => (
  <section id="birds" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          🐓🦆 New Arrivals
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Birds on Sale — Guinea Fowl, Goose, Turkey &amp; More
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Get your feathered friends today! Healthy &amp; vaccinated chicks and mature pairs from Delamare Farm Naivasha — countrywide delivery available.
        </p>
      </div>

      <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-xl">
        <Slideshow alt="Farm birds at Delamare Farm Naivasha" />
        <div className="p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Poultry · Chicks &amp; Mature Pairs
          </p>
          <h3 className="mt-1 font-serif text-2xl font-bold text-card-foreground md:text-3xl">
            Healthy &amp; Vaccinated 💯
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            Choose from Guinea Fowl, Goose, Turkey, Silkie and Brahma — vaccinated chicks for rearing, or mature breeding pairs ready to lay.
          </p>

          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Chicks
            </p>
            <div className="space-y-2">
              {chickItems.map((it) => <ItemRow key={it.id} item={it} />)}
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Mature Pairs
            </p>
            <div className="space-y-2">
              {matureItems.map((it) => <ItemRow key={it.id} item={it} />)}
            </div>
          </div>

          <a
            href={whatsappLink(
              "Hello Delamare Farm! I'd like to order birds (Guinea Fowl / Goose / Turkey / Silkie / Brahma). Please confirm availability."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-bold text-cta-foreground transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            Order Birds on WhatsApp
          </a>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            📍 Delamare Farm, Naivasha · 📲 BIRDS: 0755 700 239
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BirdsSection;
