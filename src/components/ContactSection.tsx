import { Mail, MessageCircle, Clock } from "lucide-react";
import { whatsappLink, PHONE_DISPLAY } from "./Navbar";
import GoogleMap from "./GoogleMap";

export const FARM_EMAIL = "delamare@delamarefarm.co.ke";

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
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
        <a
          href={whatsappLink("Hello Delamare Farm! I'd like to make an inquiry.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-primary-foreground transition hover:bg-primary-foreground/15"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-highlight">
            <MessageCircle className="h-6 w-6 text-accent-foreground" />
          </div>
          <div>
            <p className="text-sm text-primary-foreground/70">Call</p>
            <p className="text-lg font-bold">{PHONE_DISPLAY}</p>
          </div>
        </a>
        <a
          href={`mailto:${FARM_EMAIL}`}
          className="flex items-center gap-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-primary-foreground transition hover:bg-primary-foreground/15"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cta">
            <Mail className="h-6 w-6 text-cta-foreground" />
          </div>
          <div className="min-w-0">
            <p className="text-sm text-primary-foreground/70">Email</p>
            <p className="truncate text-base font-bold">{FARM_EMAIL}</p>
          </div>
        </a>
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
      <GoogleMap />
    </div>
  </section>
);

export default ContactSection;
