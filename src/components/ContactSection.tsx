import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { whatsappLink, PHONE_DISPLAY, WHATSAPP_NUMBER } from "./Navbar";

const ContactSection = () => (
  <section id="contact" className="bg-primary py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-highlight">Get In Touch</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
          Ready to Order?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
          Contact Manager Ibrahim Kassim today. We deliver countrywide within 24 hours of placing your order.
        </p>
      </div>
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <a
          href={`tel:+${WHATSAPP_NUMBER}`}
          className="flex items-center gap-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-primary-foreground transition hover:bg-primary-foreground/15"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cta">
            <Phone className="h-6 w-6 text-cta-foreground" />
          </div>
          <div>
            <p className="text-sm text-primary-foreground/70">Call Us</p>
            <p className="text-lg font-bold">{PHONE_DISPLAY}</p>
          </div>
        </a>
        <a
          href={whatsappLink("Hello Delamere Farm! I'd like to make an inquiry.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-primary-foreground transition hover:bg-primary-foreground/15"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-highlight">
            <MessageCircle className="h-6 w-6 text-accent-foreground" />
          </div>
          <div>
            <p className="text-sm text-primary-foreground/70">WhatsApp</p>
            <p className="text-lg font-bold">{PHONE_DISPLAY}</p>
          </div>
        </a>
        <div className="flex items-center gap-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-primary-foreground">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
            <MapPin className="h-6 w-6 text-secondary-foreground" />
          </div>
          <div>
            <p className="text-sm text-primary-foreground/70">Location</p>
            <p className="text-lg font-bold">Naivasha, Kenya</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-primary-foreground">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
            <Clock className="h-6 w-6 text-secondary-foreground" />
          </div>
          <div>
            <p className="text-sm text-primary-foreground/70">Delivery</p>
            <p className="text-lg font-bold">Countrywide in 24hrs</p>
          </div>
        </div>
      </div>
      {/* Quick order menu */}
      <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 p-6 text-center text-primary-foreground">
        <h3 className="font-serif text-lg font-bold">Quick Order Guide</h3>
        <div className="mt-4 space-y-2 text-sm text-primary-foreground/80">
          <p>1️⃣ Reply with 1 — For order placement</p>
          <p>2️⃣ Reply with 2 — For returns, refund & order tracking</p>
          <p>3️⃣ Reply with 3 — To speak to a representative</p>
          <p>4️⃣ Reply with 4 — To book a farm visit (KSH 10,000 redeemable on purchase)</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
