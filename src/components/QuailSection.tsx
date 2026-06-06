import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "./Navbar";
import { toast } from "sonner";
import q1 from "@/assets/quail-1.jpeg";
import q2 from "@/assets/quail-2.jpeg";
import q3 from "@/assets/quail-3.jpeg";
import q4 from "@/assets/quail-4.jpeg";
import q5 from "@/assets/quail-5.jpeg";
import q6 from "@/assets/quail-6.jpeg";
import q7 from "@/assets/quail-7.jpeg";
import q8 from "@/assets/quail-8.jpeg";
import q9 from "@/assets/quail-9.jpeg";

const AUTO_MS = 4000;
const images = [q8, q9, q4, q5, q2, q3, q6, q7, q1];

const KES = (n: number) =>
  new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);

interface Item {
  id: string;
  name: string;
  price: number;
  note?: string;
  image: string;
}

const items: Item[] = [
  { id: "quail-bird", name: "Mature Quail Bird", price: 500, note: "Each", image: q5 },
  { id: "quail-chick", name: "Quail Chick", price: 250, note: "Each", image: q6 },
  { id: "quail-egg", name: "Quail Egg", price: 100, note: "Each", image: q1 },
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
        Quail · Available
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
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-1.5 bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
};

const ItemRow = ({ item }: { item: Item }) => {
  const { addItem } = useCart();
  const handleAdd = () => {
    addItem({ id: item.id, name: item.name, price: item.price, image: item.image });
    toast.success(`${item.name} added to cart`);
  };
  return (
    <div className="flex items-center justify-between gap-2 rounded-md bg-muted px-3 py-2.5 text-sm">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-card-foreground">{item.name}</p>
        {item.note && <p className="text-xs text-muted-foreground">{item.note}</p>}
      </div>
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

const QuailSection = () => (
  <section id="quails" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">🐦 Quail Birds</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Quail Birds, Chicks &amp; Eggs for Sale
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Healthy quails from Delamare Farm Naivasha perfect for high-protein eggs and lean meat. Countrywide delivery available.
        </p>
      </div>

      <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-xl">
        <Slideshow alt="Quail birds, chicks and eggs at Delamare Farm Naivasha" />
        <div className="p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Poultry · Quails
          </p>
          <h3 className="mt-1 font-serif text-2xl font-bold text-card-foreground md:text-3xl">
            Quail Pricing
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            Mature laying quails, day-old chicks and fresh fertile eggs. Start or grow your quail flock today.
          </p>

          <div className="mt-5 space-y-2">
            {items.map((it) => <ItemRow key={it.id} item={it} />)}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={whatsappLink(
                "Hello Delamare Farm! I'd like to order quails — Birds @ KSH 500, Chicks @ KSH 250, Eggs @ KSH 100. Please confirm availability."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-bold text-cta-foreground transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
              Order Now
            </a>
            <a
              href="tel:+254755700239"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-background px-4 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Inquire
            </a>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            📍 Delamare Farm, Naivasha · Kenya
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default QuailSection;
