import { MessageCircle } from "lucide-react";
import { whatsappLink } from "./Navbar";

interface LivestockItem {
  label: string;
  price: string;
  detail?: string;
}

interface LivestockCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  items: LivestockItem[];
  badge?: string;
  whatsappMessage: string;
}

const LivestockCard = ({ image, title, subtitle, description, items, badge, whatsappMessage }: LivestockCardProps) => (
  <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-md transition-shadow hover:shadow-xl">
    <div className="relative h-56 overflow-hidden md:h-64">
      <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      {badge && (
        <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
          {badge}
        </span>
      )}
    </div>
    <div className="p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{subtitle}</p>
      <h3 className="mt-1 font-serif text-xl font-bold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-4 space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm">
            <span className="font-medium text-card-foreground">{item.label}</span>
            <span className="font-bold text-primary">{item.price}</span>
          </div>
        ))}
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

export default LivestockCard;
