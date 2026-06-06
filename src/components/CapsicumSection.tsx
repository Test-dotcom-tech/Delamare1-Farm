import { MessageCircle, Phone, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "./Navbar";
import { toast } from "sonner";
import capsicum1 from "@/assets/capsicum-1.jpeg";

const KES = (n: number) =>
  new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);

const CapsicumSection = () => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id: "capsicum-bag",
      name: "Fresh Capsicum (Farm Gate Bag)",
      price: 1500,
      priceLabel: "Per bag · farm gate",
      image: capsicum1,
    });
    toast.success("Capsicum added to cart");
  };

  return (
    <section id="capsicum" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            💚 Farm Fresh Produce
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Fresh Capsicum (Pilipili Hoho) — Farm Gate Price
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Hand-picked green capsicum direct from Delamare Farm Naivasha. Wholesale bags ready for vendors,
            grocers, hotels and supermarkets countrywide.
          </p>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-xl">
          <div className="relative h-72 w-full overflow-hidden rounded-t-xl bg-muted sm:h-96 md:h-[28rem]">
            <img
              src={capsicum1}
              alt="Fresh green capsicum bags farm gate price Delamare Farm Naivasha Kenya"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow">
              Farm Gate · KSH 1,500
            </span>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Produce · Wholesale Bag
            </p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-card-foreground md:text-3xl">
              Green Capsicum (Pilipili Hoho)
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              Freshly harvested, well-graded capsicum in standard sacks — ideal for resale and bulk catering.
            </p>

            <div className="mt-5 flex items-center justify-between gap-2 rounded-md bg-muted px-4 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Farm gate price
                </p>
                <p className="font-serif text-2xl font-bold text-primary">{KES(1500)}</p>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                aria-label="Add Capsicum to cart"
                className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110"
              >
                <Plus className="h-4 w-4" />
                Add to Cart
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappLink(
                  "Hello Delamare Farm! I'd like to order fresh capsicum at the farm gate price of KSH 1,500. Please confirm stock."
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
              📍 Delamare Farm, Naivasha · Kenya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapsicumSection;
