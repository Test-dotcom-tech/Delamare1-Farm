import { MessageCircle, Phone, Plus, Recycle, SprayCan, Boxes, Snowflake } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "./Navbar";
import { toast } from "sonner";
import plastic1 from "@/assets/plastic-pallet-1.jpeg";
import plastic2 from "@/assets/plastic-pallet-2.jpeg";
import plastic3 from "@/assets/plastic-pallet-3.jpeg";
import plastic4 from "@/assets/plastic-pallet-4.jpeg";
import plastic5 from "@/assets/plastic-pallet-5.jpeg";

const KES = (n: number) =>
  new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);

const FEATURES = [
  { icon: Recycle, title: "Long-Lasting", desc: "Durable plastic built for years of reuse" },
  { icon: SprayCan, title: "Easy to Clean", desc: "Hygienic surface — just wash and reuse" },
  { icon: Boxes, title: "Stackable", desc: "Nested design saves warehouse space" },
  { icon: Snowflake, title: "Cold-Room Safe", desc: "Performs in cold storage & freezers" },
];

const Slideshow = ({ images, alt }: { images: string[]; alt: string }) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-t-xl bg-muted sm:h-96 md:h-[28rem]">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${alt} ${idx + 1}`}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Image ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-5 bg-white" : "w-1.5 bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
};

const PlasticPalletsSection = () => {
  const { addItem } = useCart();
  const images = [plastic1, plastic2, plastic3, plastic4, plastic5];

  const handleAdd = () => {
    addItem({
      id: "plastic-pallet",
      name: "Plastic Pallets (Heavy-Duty)",
      price: 850,
      image: plastic1,
    });
    toast.success("Plastic Pallets added to cart");
  };

  return (
    <section id="plastic-pallets" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Farm & Warehouse Supplies</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Plastic Pallets
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Heavy-duty plastic pallets for food storage, cold rooms and industrial use. Hygienic, durable and built to last.
          </p>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-xl">
          <div className="relative">
            <Slideshow images={images} alt="Plastic pallet Delamare Farm Kenya" />
            <span className="absolute left-3 top-3 rounded-full bg-cta px-3 py-1 text-xs font-bold text-cta-foreground shadow">
              KSH 850
            </span>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Heavy-Duty Industrial Plastic
            </p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-card-foreground md:text-3xl">
              Durable Plastic Pallets
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              Hygienic, reusable plastic pallets ideal for food storage, cold rooms and industrial warehousing. Resistant to moisture, chemicals and temperature changes. A smart long-term investment for any farm or warehouse.
            </p>

            <div className="mt-5 flex items-center justify-between gap-2 rounded-md bg-muted px-4 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Price per piece</p>
                <p className="font-serif text-2xl font-bold text-primary">{KES(850)}</p>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110"
              >
                <Plus className="h-4 w-4" />
                Add to Cart
              </button>
            </div>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex gap-3 rounded-md border border-border bg-background/60 p-3">
                  <f.icon className="h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{f.title}</p>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 text-center text-xs sm:grid-cols-4">
              {["Hygienic", "Chemical Resistant", "Lightweight", "Bulk Orders"].map((b) => (
                <span key={b} className="rounded-md border border-accent/40 bg-accent/10 px-2 py-2 font-semibold text-foreground">
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappLink(
                  "Hello Delamare Farm! I'd like to order Plastic Pallets at KSH 850 per piece. Please confirm stock and delivery."
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
                Call
              </a>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              📍 Delamare Farm, Naivasha · ☎️ +254 755 700 239 · Countrywide delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlasticPalletsSection;
