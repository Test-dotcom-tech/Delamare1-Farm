import { MessageCircle, Phone, Plus, Shield, Heart, Droplets, Layers, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "./Navbar";
import { toast } from "sonner";
import cowMat from "@/assets/cow-mat-1.jpeg";

const FEATURES = [
  { icon: Shield, title: "Heavy Duty", desc: "Extra strong & durable for long lasting use" },
  { icon: Heart, title: "Maximum Comfort", desc: "Reduces stress, joint pressure & fatigue" },
  { icon: Droplets, title: "Water Resistant", desc: "Easy to clean & moisture proof" },
  { icon: Layers, title: "Thick & Premium", desc: "15mm thick for superior cushion & protection" },
  { icon: CheckCircle2, title: "Protects Floors", desc: "Prevents damage from hooves, urine & wear" },
];

const CowMatSection = () => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id: "cow-rubber-mat",
      name: "Cow Rubber Floor Mat (5ft × 3ft, 15mm)",
      price: 1999,
      priceLabel: "per mat",
      image: cowMat,
    });
    toast.success("Cow Rubber Mat added to cart");
  };

  return (
    <section id="cow-mats" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            🐄 Comfort · Protection · Hygiene
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Cow Rubber Floor Mats
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            ✅ Don't let your cows suffer on hard floors. Give them comfort, protection &amp; better health improves milk yield and reduces vet bills.
          </p>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-xl">
          <div className="relative h-72 w-full overflow-hidden rounded-t-xl bg-muted sm:h-96 md:h-[28rem]">
            <img
              src={cowMat}
              alt="Cow Rubber Floor Mat 5ft x 3ft 15mm thick — Delamare Farm Naivasha"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <span className="absolute left-3 top-3 rounded-full bg-cta px-3 py-1 text-xs font-bold text-cta-foreground shadow">
              OFFER · Pay on Delivery
            </span>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Farm Equipment · 5ft × 3ft · 15mm Thick
            </p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-card-foreground md:text-3xl">
              Premium Cow Rubber Floor Mat
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              Heavy-duty rubber matting designed for dairy sheds, milking parlours and zero-grazing units. Reduces stress, prevents hoof and joint injuries, and improves overall herd health and milk production.
            </p>

            <div className="mt-5 flex items-center justify-between gap-2 rounded-md bg-muted px-4 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Offer Price
                </p>
                <p className="font-serif text-2xl font-bold text-primary">KSH 1,999</p>
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
              {["Shock Absorbing", "Non-Slip Surface", "Easy to Clean", "Safe & Hygienic"].map((b) => (
                <span key={b} className="rounded-md border border-accent/40 bg-accent/10 px-2 py-2 font-semibold text-foreground">
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappLink(
                  "Hello Delamare Farm! I'd like to order the Cow Rubber Floor Mat (5ft × 3ft, 15mm) @ KSH 1,999. Please confirm delivery."
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
              📍 Delamare Farm, Naivasha · 🚚 Pay on Delivery<br />
              <span className="text-[11px]">Delivery fee applies outside Naivasha.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CowMatSection;
