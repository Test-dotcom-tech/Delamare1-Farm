import { MessageCircle, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { whatsappLink } from "./Navbar";
import { useCart } from "@/context/CartContext";
import { products, formatKES } from "@/data/products";
import { toast } from "sonner";

interface LivestockCardItem {
  label: string;
  productId: string; // id from products.ts
}

interface LivestockCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  items: LivestockCardItem[];
  badge?: string;
  whatsappMessage: string;
  primarySlug: string; // slug to link card title/image to
  imageAlt?: string;
}

const LivestockCard = ({
  image,
  title,
  subtitle,
  description,
  items,
  badge,
  whatsappMessage,
  primarySlug,
  imageAlt,
}: LivestockCardProps) => {
  const { addItem } = useCart();

  const handleAdd = (productId: string, label: string) => {
    const p = products.find((x) => x.id === productId);
    if (!p) return;
    if (p.price <= 0) {
      window.open(whatsappLink(`Hello Delamare Farm! I'd like a quote for ${p.name}.`), "_blank", "noopener,noreferrer");
      return;
    }
    addItem({
      id: p.id,
      name: p.name,
      price: p.price,
      priceLabel: p.priceLabel,
      image: p.images[0],
    });
    toast.success(`${label} added to cart`);
  };

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-md transition-shadow hover:shadow-xl">
      <Link to={`/product/${primarySlug}`} className="relative block h-56 overflow-hidden md:h-64">
        <img
          src={image}
          alt={imageAlt ?? title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
            {badge}
          </span>
        )}
      </Link>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{subtitle}</p>
        <Link to={`/product/${primarySlug}`} className="mt-1 block font-serif text-xl font-bold text-card-foreground hover:underline">
          {title}
        </Link>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-4 space-y-2">
          {items.map((item) => {
            const p = products.find((x) => x.id === item.productId);
            const priceText = p
              ? p.price > 0
                ? formatKES(p.price)
                : (p.priceLabel ?? "Call for price")
              : "";
            return (
              <div key={item.productId} className="flex items-center justify-between gap-2 rounded-md bg-muted px-3 py-2 text-sm">
                <span className="font-medium text-card-foreground">{item.label}</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary">{priceText}</span>
                  <button
                    type="button"
                    onClick={() => handleAdd(item.productId, item.label)}
                    aria-label={`Add ${item.label} to cart`}
                    className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground transition hover:brightness-110"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-bold text-cta-foreground transition hover:brightness-110"
        >
          <MessageCircle className="h-4 w-4" />
          Inquire on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default LivestockCard;
