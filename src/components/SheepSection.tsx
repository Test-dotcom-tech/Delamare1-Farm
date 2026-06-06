import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { products, formatKES, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "./Navbar";
import { toast } from "sonner";
import sheep1 from "@/assets/sheep-1.jpeg";
import sheep2 from "@/assets/sheep-2.jpeg";
import sheep3 from "@/assets/sheep-3.jpeg";

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

const SheepSection = () => {
  const sheepProducts = products.filter((p) => p.category === "sheep");
  const { addItem } = useCart();

  const handleAdd = (p: Product) => {
    addItem({
      id: p.id,
      name: p.name,
      price: p.price,
      priceLabel: p.priceLabel,
      image: p.images[0],
    });
    toast.success(`${p.name} added to cart`);
  };

  const primary = sheepProducts[0];
  const images = [sheep1, sheep2, sheep3];

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
            Upgrade your farm with Hampshire sheep. Fast growth, excellent meat quality, and strong adaptability. Free countrywide delivery from Delamare Farm Naivasha.
          </p>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-xl">
          <Slideshow images={images} alt="Hampshire Down sheep at Delamare Farm Naivasha" />
          <div className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Hampshire Down · Premium Meat Breed
            </p>
            {primary && (
              <Link
                to={`/product/${primary.slug}`}
                className="mt-1 block font-serif text-2xl font-bold text-card-foreground hover:underline md:text-3xl"
              >
                Hampshire Down Sheep
              </Link>
            )}
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              Known for fast growth, excellent meat quality, and strong adaptability. Healthy, vaccinated stock ready for delivery countrywide. Order early while stock lasts.
            </p>

            <div className="mt-5 space-y-2">
              {sheepProducts.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between gap-2 rounded-md bg-muted px-3 py-2.5 text-sm"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-card-foreground">{p.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">
                      {p.priceLabel === "from" ? `from ${formatKES(p.price)}` : formatKES(p.price)}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleAdd(p)}
                      aria-label={`Add ${p.name} to cart`}
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground transition hover:brightness-110"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink(
                "Hello Delamare Farm! I'd like to inquire about your Hampshire Down sheep (lambs, breeding rams, pregnant/lactating ewes)."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-bold text-cta-foreground transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
              Order Now
            </a>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              📍 Delamare Farm, Naivasha · 🚚 Free Delivery Countrywide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SheepSection;
