import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { products, formatKES, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "./Navbar";
import { toast } from "sonner";

const AUTO_MS = 4000;

const ProductSlideshow = ({ images, alt }: { images: string[]; alt: string }) => {
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
      className="group/slide relative h-56 w-full overflow-hidden rounded-t-xl bg-muted md:h-64"
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

      <button
        type="button"
        aria-label="Previous image"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-2 text-white opacity-0 backdrop-blur-md transition group-hover/slide:opacity-100 hover:bg-white/40"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-2 text-white opacity-0 backdrop-blur-md transition group-hover/slide:opacity-100 hover:bg-white/40"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to image ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-5 bg-white" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const SheepCard = ({ p }: { p: Product }) => {
  const { addItem } = useCart();
  const handleAdd = () => {
    addItem({
      id: p.id,
      name: p.name,
      price: p.price,
      priceLabel: p.priceLabel,
      image: p.images[0],
    });
    toast.success(`${p.name} added to cart`);
  };

  return (
    <div className="group flex w-72 shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:-translate-y-1 hover:shadow-xl sm:w-80">
      <ProductSlideshow images={p.images} alt={p.name} />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {p.breed}
        </p>
        <Link
          to={`/product/${p.slug}`}
          className="mt-1 font-serif text-lg font-bold text-card-foreground hover:underline"
        >
          {p.name}
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {p.shortDescription}
        </p>
        <div className="mt-3 flex items-baseline gap-1">
          {p.priceLabel === "from" && (
            <span className="text-xs text-muted-foreground">from</span>
          )}
          <span className="font-serif text-2xl font-bold text-primary">
            {formatKES(p.price)}
          </span>
        </div>
        <div className="mt-auto flex gap-2 pt-4">
          <button
            type="button"
            onClick={handleAdd}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110"
          >
            <Plus className="h-4 w-4" />
            Add to Cart
          </button>
          <a
            href={whatsappLink(`Hello Delamare Farm! I'd like to order ${p.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${p.name} on WhatsApp`}
            className="flex items-center justify-center rounded-lg bg-cta px-3 py-2.5 text-cta-foreground transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const SheepSection = () => {
  const sheepProducts = products.filter((p) => p.category === "sheep");
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="sheep" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            🐑 Limited Stock
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Premium Hampshire Down Sheep for Sale
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Upgrade your farm with Hampshire sheep — fast growth, excellent meat quality, and strong adaptability. Free countrywide delivery from Delamare Farm Naivasha.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-card p-3 text-foreground shadow-lg transition hover:scale-110 md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-card p-3 text-foreground shadow-lg transition hover:scale-110 md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {sheepProducts.map((p) => (
              <SheepCard key={p.id} p={p} />
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          📍 Delamare Farm, Naivasha · 🚚 Free Delivery Countrywide · 📲 0755 700 239
        </p>
      </div>
    </section>
  );
};

export default SheepSection;
