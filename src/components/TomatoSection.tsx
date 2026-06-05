import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { getProductBySlug, formatKES } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "./Navbar";
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
        Fresh Today
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

const TomatoSection = () => {
  const { addItem } = useCart();
  const p = getProductBySlug("fresh-farm-tomatoes");
  if (!p) return null;

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
    <section id="fresh-tomatoes" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            🍅 Farm Fresh Produce
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Fresh Farm Tomatoes — Wholesale &amp; Retail
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Hand-picked, hand-graded tomatoes from our greenhouse and open-field plots in Naivasha. Crates, baskets, and cartons available — delivered countrywide on agreement.
          </p>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-xl">
          <Slideshow images={p.images} alt="Fresh farm tomatoes at Delamare Farm Naivasha" />
          <div className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Produce · Greenhouse &amp; Open-Field
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

            <div className="mt-5 flex items-center justify-between gap-2 rounded-md bg-muted px-4 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Price per crate
                </p>
                <p className="font-serif text-2xl font-bold text-primary">
                  {formatKES(p.price)}
                </p>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                aria-label="Add Fresh Tomatoes to cart"
                className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110"
              >
                <Plus className="h-4 w-4" />
                Add to Cart
              </button>
            </div>

            <div className="mt-5 rounded-md border border-border bg-background/60 p-4 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">📈 Reliable Wholesale Supply</p>
              <p className="mt-1">5 acres yield <strong className="text-foreground">300 crates weekly for 6 weeks</strong> — perfect for vendors, supermarkets &amp; hotels.</p>
            </div>

            <div className="mt-3 rounded-md border border-accent/40 bg-accent/10 p-4 text-sm">
              <p className="font-semibold text-foreground">🔥 Land Offer: 10 Acres at KSH 400k/Acre — Title Ready</p>
              <p className="mt-1 text-muted-foreground">
                <strong className="text-foreground">10 Acres for sale</strong> at Delamere Farm Naivasha · <strong className="text-foreground">KSH 400,000 per acre</strong>
              </p>
              <ul className="mt-2 space-y-0.5 text-xs text-muted-foreground">
                <li>✔️ Title deed ready</li>
                <li>✔️ 5km from Naivasha–Mai Mahiu road</li>
                <li>✔️ Water borehole on site</li>
                <li>✔️ Accessible, within human settlements</li>
              </ul>
            </div>

            <a
              href={whatsappLink(
                "Hello Delamare Farm! I'd like to order fresh tomatoes (crate @ KSH 6,600). Please confirm stock and delivery."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-bold text-cta-foreground transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
              Order Now
            </a>

            <a
              href={whatsappLink(
                "Hello Delamare Farm! I'm interested in the 10 acres for sale at KSH 400,000 per acre. Please share more details."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-transparent px-4 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Inquire About Land
            </a>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              📍 Delamere Farm, Naivasha · 🔺 Helpline: 0755 700 239
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TomatoSection;
