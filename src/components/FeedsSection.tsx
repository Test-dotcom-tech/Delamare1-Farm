import { MessageCircle } from "lucide-react";
import { whatsappLink } from "./Navbar";
import farmSupplies from "@/assets/farm-supplies.jpg";

const feedItems = [
  { name: "Boma Rhodes Seeds", price: "KSH 450/kg" },
  { name: "Boma Rhodes Hay", price: "KSH 250/bale" },
  { name: "Lucerne Hay", price: "KSH 400/bale" },
  { name: "Lucerne Seeds", price: "KSH 1,250/kg" },
  { name: "Fine Rice Bran", price: "KSH 40/kg" },
  { name: "Rice Stalks Hay", price: "KSH 120/bale" },
  { name: "Corn Bailed Silage", price: "KSH 20/kg" },
  { name: "Sorghum Bailed Silage", price: "KSH 19/kg" },
  { name: "Super Napier Stems (30cm)", price: "KSH 25/stem" },
  { name: "Maize Germ (50kg)", price: "KSH 2,150/bag" },
  { name: "Hygrow Organic Fertilizer (50kg)", price: "Call for price" },
];

const FeedsSection = () => (
  <section id="feeds" className="bg-muted py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Farm Supplies</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Quality Feeds, Seeds &amp; Fertilizer
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Quality animal feeds and organic fertilizer delivered countrywide. Boost your farm productivity with our premium supplies.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img src={farmSupplies} alt="Farm feeds and supplies" className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="space-y-2">
            {feedItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm transition hover:shadow-sm"
              >
                <span className="font-medium text-card-foreground">{item.name}</span>
                <span className="font-bold text-primary">{item.price}</span>
              </div>
            ))}
          </div>
          <a
            href={whatsappLink("Hello Delamere Farm! I'd like to order animal feeds/supplies.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 font-bold text-cta-foreground transition hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" />
            Order Feeds on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default FeedsSection;
