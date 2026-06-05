import { MessageCircle, Plus } from "lucide-react";
import { whatsappLink } from "./Navbar";
import { useCart } from "@/context/CartContext";
import { products, formatKES } from "@/data/products";
import { toast } from "sonner";
import farmSupplies from "@/assets/farm-supplies.jpg";

const feedIds = [
  "boma-rhodes-seeds",
  "boma-rhodes-hay",
  "lucerne-hay",
  "lucerne-seeds",
  "fine-rice-bran",
  "rice-stalks-hay",
  "corn-silage",
  "sorghum-silage",
  "maize-germ",
  "hygrow-fertilizer",
];

const FeedsSection = () => {
  const { addItem } = useCart();
  const feeds = feedIds.map((id) => products.find((p) => p.id === id)!).filter(Boolean);

  const handleAdd = (id: string) => {
    const p = products.find((x) => x.id === id);
    if (!p) return;
    if (p.price <= 0) {
      window.open(whatsappLink(`Hello Delamare Farm! I'd like a quote for ${p.name}.`), "_blank", "noopener,noreferrer");
      return;
    }
    addItem({ id: p.id, name: p.name, price: p.price, priceLabel: p.priceLabel, image: p.images[0] });
    toast.success(`${p.name} added to cart`);
  };

  return (
    <section id="feeds" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Farm Supplies</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Quality Feeds, Seeds &amp; Fertilizer in Kenya
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Premium animal feeds, certified seeds, and organic fertilizer delivered countrywide from Delamare Farm Naivasha. Boost productivity with reliable farm supplies.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={farmSupplies}
              alt="Delamare Farm feeds, hay bales and organic fertilizer supplies in Kenya"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="space-y-2">
              {feeds.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm transition hover:shadow-sm"
                >
                  <a href={`/product/${p.slug}`} className="font-medium text-card-foreground hover:underline">
                    {p.name}
                  </a>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary whitespace-nowrap">
                      {p.price > 0 ? `${formatKES(p.price)}${p.priceLabel ? ` ${p.priceLabel}` : ""}` : (p.priceLabel ?? "Call")}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleAdd(p.id)}
                      aria-label={`Add ${p.name} to cart`}
                      className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground transition hover:brightness-110"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={whatsappLink("Hello Delamare Farm! I'd like to order animal feeds/supplies.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 font-bold text-cta-foreground transition hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedsSection;
