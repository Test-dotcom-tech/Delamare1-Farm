import heroFarm from "@/assets/hero-farm.jpg";
import { MessageCircle, Truck, Shield } from "lucide-react";
import { whatsappLink } from "./Navbar";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroFarm} alt="Delamare Farm dairy cows grazing" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30" />
    </div>
    <div className="container relative mx-auto px-4 py-20 md:py-32">
      <div className="max-w-2xl animate-fade-in-up">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-highlight">
          Delamare Farm Naivasha, Kenya
        </p>
        <h1 className="mb-4 font-serif text-3xl font-black leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Quality Dairy Cows &amp; Goats at Affordable Prices
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
          Pedigree calves, in-calf heifers, Ayrshire, Girolando, and Saanen dairy goats — delivered countrywide within 24 hours.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={whatsappLink("Hello Delamare Farm! I'm interested in purchasing dairy livestock.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3 text-base font-bold text-cta-foreground shadow-lg transition hover:shadow-xl hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" />
            Order Now
          </a>
          <a
            href="#dairy-cows"
            className="inline-flex items-center rounded-lg border-2 border-primary-foreground/40 px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
          >
            Browse Livestock
          </a>
        </div>
      </div>
    </div>
    {/* Trust badges */}
    <div className="relative border-t border-primary-foreground/10 bg-primary/80 backdrop-blur">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-8 px-4 py-4 text-sm text-primary-foreground/90 md:justify-between">
        <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-highlight" /> Countrywide Delivery in 24hrs</span>
        <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-highlight" /> Fully Vaccinated Livestock</span>
        <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-highlight" /> WhatsApp Support Available</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
