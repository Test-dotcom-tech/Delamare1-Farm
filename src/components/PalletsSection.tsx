import { MessageCircle, Phone, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "./Navbar";
import { toast } from "sonner";
import wooden1 from "@/assets/wooden-pallet-1.jpeg";
import wooden2 from "@/assets/wooden-pallet-2.jpeg";
import wooden3 from "@/assets/wooden-pallet-3.jpeg";
import wooden4 from "@/assets/wooden-pallet-4.jpeg";
import wooden5 from "@/assets/wooden-pallet-5.jpeg";
import plastic1 from "@/assets/plastic-pallet-1.jpeg";
import plastic2 from "@/assets/plastic-pallet-2.jpeg";
import plastic3 from "@/assets/plastic-pallet-3.jpeg";
import plastic4 from "@/assets/plastic-pallet-4.jpeg";
import plastic5 from "@/assets/plastic-pallet-5.jpeg";

const KES = (n: number) =>
  new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);

const Slideshow = ({ images, alt }: { images: string[]; alt: string }) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-t-xl bg-muted sm:h-80">
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
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Image ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-4 bg-white" : "w-1.5 bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
};

const PalletCard = ({
  id,
  title,
  subtitle,
  description,
  price,
  images,
  badge,
}: {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  images: string[];
  badge?: string;
}) => {
  const { addItem } = useCart();
  const handleAdd = () => {
    addItem({ id, name: title, price, image: images[0] });
    toast.success(`${title} added to cart`);
  };
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-xl">
      <div className="relative">
        <Slideshow images={images} alt={title} />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow">
            {badge}
          </span>
        )}
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{subtitle}</p>
        <h3 className="mt-1 font-serif text-xl font-bold text-card-foreground md:text-2xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>

        <div className="mt-4 flex items-center justify-between gap-2 rounded-md bg-muted px-4 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Price per piece</p>
            <p className="font-serif text-2xl font-bold text-primary">{KES(price)}</p>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${title} to cart`}
            className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110"
          >
            <Plus className="h-4 w-4" />
            Add to Cart
          </button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <a
            href={whatsappLink(
              `Hello Delamare Farm! I'd like to order ${title} at ${KES(price)} per piece. Please confirm stock and delivery.`
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
            Call
          </a>
        </div>
      </div>
    </div>
  );
};

const PalletsSection = () => {
  return (
    <section id="pallets" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">📦 Farm & Warehouse Supplies</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Wooden & Plastic Pallets
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Heavy-duty pallets for storage, transport and warehousing. EPAL-grade wooden pallets and durable plastic pallets in stock.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <PalletCard
            id="wooden-pallet"
            title="Wooden Pallets"
            subtitle="EPAL-grade hardwood"
            description="Strong, well-graded wooden pallets (EPAL stamped). Perfect for warehousing, shipping and stacking."
            price={500}
            images={[wooden1, wooden2, wooden3, wooden4, wooden5]}
            badge="KSH 500"
          />
          <PalletCard
            id="plastic-pallet"
            title="Plastic Pallets"
            subtitle="Heavy-duty plastic"
            description="Durable, hygienic plastic pallets — ideal for food storage, cold rooms and industrial use. Long-lasting & reusable."
            price={850}
            images={[plastic1, plastic2, plastic3, plastic4, plastic5]}
            badge="KSH 850"
          />
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          📍 Delamare Farm, Naivasha · ☎️ +254 755 700 239 · Countrywide delivery
        </p>
      </div>
    </section>
  );
};

export default PalletsSection;
