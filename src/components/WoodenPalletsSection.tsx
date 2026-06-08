import { MessageCircle, Phone, Plus, TreePine, Package, Truck, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "./Navbar";
import { toast } from "sonner";
import wooden1 from "@/assets/wooden-pallet-1.jpeg";
import wooden2 from "@/assets/wooden-pallet-2.jpeg";
import wooden3 from "@/assets/wooden-pallet-3.jpeg";
import wooden4 from "@/assets/wooden-pallet-4.jpeg";
import wooden5 from "@/assets/wooden-pallet-5.jpeg";

const KES = (n: number) =>
  new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);

const FEATURES = [
  { icon: TreePine, title: "Hardwood Built", desc: "Strong EPAL-grade timber for heavy loads" },
  { icon: Package, title: "Stackable", desc: "Easy to stack and store in warehouses" },
  { icon: Truck, title: "Shipping Ready", desc: "Ideal for transport & logistics" },
  { icon: ShieldCheck, title: "Quality Checked", desc: "Inspected for cracks & defects" },
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

const WoodenPalletsSection = () => {
  const { addItem } = useCart();
  const images = [wooden1, wooden2, wooden3, wooden4, wooden5];

  const handleAdd = () => {
    addItem({
      id: "wooden-pallet",
      name: "Wooden Pallets (EPAL-grade)",
      price: 500,
      image: wooden1,
    });
    toast.success("Wooden Pallets added to cart");
  };

  return (
    <section id="wooden-pallets" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Farm & Warehouse Supplies</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Wooden Pallets
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            EPAL-grade hardwood pallets built for warehousing, shipping and heavy-duty stacking. Quality timber, inspected and ready for delivery.
          </p>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-xl">
          <div className="relative">
            <Slideshow images={images} alt="Wooden pallet Delamare Farm Kenya" />
            <span className="absolute left-3 top-3 rounded-full bg-cta px-3 py-1 text-xs font-bold text-cta-foreground shadow">
              KSH 500
            </span>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              EPAL-grade Hardwood
            </p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-card-foreground md:text-3xl">
              Heavy-Duty Wooden Pallets
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              Strong, well-graded wooden pallets perfect for warehousing, shipping and stacking. Made from durable hardwood with EPAL stamping. Handles heavy loads with ease and can be reused across multiple transport cycles.
            </p>

            <div className="mt-5 flex items-center justify-between gap-2 rounded-md bg-muted px-4 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Price per piece</p>
                <p className="font-serif text-2xl font-bold text-primary">{KES(500)}</p>
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
              {["EPAL Stamped", "Heavy Load", "Reusable", "Bulk Orders"].map((b) => (
                <span key={b} className="rounded-md border border-accent/40 bg-accent/10 px-2 py-2 font-semibold text-foreground">
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappLink(
                  "Hello Delamare Farm! I'd like to order Wooden Pallets at KSH 500 per piece. Please confirm stock and delivery."
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

            <p className="mt-4 text-center text-xs text-muted-foreground">
              📍 Delamare Farm, Naivasha · ☎️ +254 755 700 239 · Countrywide delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WoodenPalletsSection;
