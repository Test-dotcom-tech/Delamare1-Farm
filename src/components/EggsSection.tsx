import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { getProductBySlug } from "@/data/products";
import { whatsappLink } from "./Navbar";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const AUTO_MS = 4000;

const Slideshow = ({ images, alt }: { images: string[]; alt: string }) => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), AUTO_MS);
    return () => clearInterval(t);
  }, [paused, images.length]);

  const go = (dir: number) =>
    setIdx((i) => (i + dir + images.length) % images.length);

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
        Wholesale
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

const EGG_ITEMS = [
  { id: "egg-big", label: "Big Size", note: "per tray", price: 300 },
  { id: "egg-small", label: "Small Size", note: "per tray", price: 280 },
  { id: "egg-kienyeji", label: "Kienyeji Eggs", note: "per tray", price: 400 },
  { id: "egg-paper-tray", label: "Empty Paper Tray", note: "each", price: 10 },
  { id: "egg-plastic-tray", label: "Empty Plastic Tray", note: "each", price: 30 },
];

const PriceRow = ({
  label,
  price,
  note,
  onAdd,
}: {
  label: string;
  price: string;
  note?: string;
  onAdd: () => void;
}) => (
  <div className="flex items-center justify-between gap-3 rounded-md border border-border bg-muted/40 px-4 py-3">
    <div className="min-w-0">
      <p className="text-sm font-semibold text-card-foreground">{label}</p>
      {note && <p className="text-xs text-muted-foreground">{note}</p>}
    </div>
    <div className="flex items-center gap-2">
      <p className="font-serif text-base font-bold text-primary sm:text-lg">{price}</p>
      <button
        type="button"
        onClick={onAdd}
        aria-label={`Add ${label} to cart`}
        className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition hover:brightness-110"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  </div>
);

const EggsSection = () => {
  const p = getProductBySlug("eggs-wholesale-tray");
  const { addItem } = useCart();
  if (!p) return null;

  const handleAdd = (item: typeof EGG_ITEMS[number]) => {
    addItem({
      id: item.id,
      name: `Eggs — ${item.label}`,
      price: item.price,
      priceLabel: item.note,
      image: p.images[0],
    });
    toast.success(`${item.label} added to cart`);
  };

  return (
    <section id="eggs" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            🥚 Wholesale Prices
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Fresh Eggs — Wholesale Trays
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Big size, small size, and Kienyeji eggs at wholesale prices. Empty paper and plastic trays also available.
          </p>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-xl">
          <Slideshow images={p.images} alt="Fresh wholesale eggs at Delamare Farm Naivasha" />
          <div className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Eggs · Wholesale
            </p>
            <Link
              to={`/product/${p.slug}`}
              className="mt-1 block font-serif text-2xl font-bold text-card-foreground hover:underline md:text-3xl"
            >
              {p.name}
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              {p.shortDescription}
            </p>

            <div className="mt-5 grid gap-2.5">
              {EGG_ITEMS.map((it) => (
                <PriceRow
                  key={it.id}
                  label={it.label}
                  note={it.note}
                  price={`KSH ${it.price}`}
                  onAdd={() => handleAdd(it)}
                />
              ))}
            </div>


            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappLink(
                  "Hello Delamare Farm! I'd like to order eggs (Big 300/=, Small 280/=, Kienyeji 400/= per tray). Please confirm stock and delivery."
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
                Call 0755 700 239
              </a>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              📍 Delamare Farm, Naivasha · 🚚 Countrywide Delivery · ☎️ 0755 700 239
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EggsSection;
