import { Phone } from "lucide-react";

const WHATSAPP_NUMBER = "254755700239";
const PHONE_DISPLAY = "0755 700 239";

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-primary shadow-lg">
    <div className="container mx-auto flex items-center justify-between px-4 py-3">
      <a href="#" className="font-serif text-xl font-bold text-primary-foreground md:text-2xl">
        🐄 Delamere Farm
      </a>
      <div className="hidden items-center gap-6 md:flex">
        <a href="#dairy-cows" className="text-sm font-medium text-primary-foreground/80 transition hover:text-primary-foreground">Dairy Cows</a>
        <a href="#dairy-goats" className="text-sm font-medium text-primary-foreground/80 transition hover:text-primary-foreground">Dairy Goats</a>
        <a href="#feeds" className="text-sm font-medium text-primary-foreground/80 transition hover:text-primary-foreground">Feeds & Supplies</a>
        <a href="#contact" className="text-sm font-medium text-primary-foreground/80 transition hover:text-primary-foreground">Contact</a>
      </div>
      <a
        href={`tel:+${WHATSAPP_NUMBER}`}
        className="flex items-center gap-2 rounded-lg bg-cta px-4 py-2 text-sm font-semibold text-cta-foreground transition hover:opacity-90"
      >
        <Phone className="h-4 w-4" />
        <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
        <span className="sm:hidden">Call</span>
      </a>
    </div>
  </nav>
);

export { Navbar, whatsappLink, PHONE_DISPLAY, WHATSAPP_NUMBER };
