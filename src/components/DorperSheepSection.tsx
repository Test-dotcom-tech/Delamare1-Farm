import { MessageCircle, Phone } from "lucide-react";
import { whatsappLink } from "./Navbar";
import dorperVideo from "@/assets/dorper-sheep.mp4.asset.json";

const PriceRow = ({ label, price, note }: { label: string; price: string; note?: string }) => (
  <div className="flex items-center justify-between gap-3 rounded-md border border-border bg-muted/40 px-4 py-3">
    <div>
      <p className="text-sm font-semibold text-card-foreground">{label}</p>
      {note && <p className="text-xs text-muted-foreground">{note}</p>}
    </div>
    <p className="font-serif text-lg font-bold text-primary">{price}</p>
  </div>
);

const DorperSheepSection = () => {
  return (
    <section id="dorper-sheep" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            🐑 KALRO × Delamare Farm
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Dorper Sheep Available — KALRO Farm Kenya Shop
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Premium Dorper sheep — fast-growing, hardy, and excellent meat quality. Watch them live below.
          </p>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-xl">
          <div className="relative h-72 w-full overflow-hidden rounded-t-xl bg-muted sm:h-96 md:h-[28rem]">
            <video
              src={dorperVideo.url}
              className="absolute inset-0 h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
            />
            <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow">
              Live Video
            </span>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Dorper Sheep · Karlo Delamere Farm Shop
            </p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-card-foreground md:text-3xl">
              Dorper Sheep for Sale
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              Healthy, well-raised Dorper sheep at every stage — from 5-month lambs to ready-pregnant females. Call for more information.
            </p>

            <div className="mt-5 grid gap-2.5">
              <PriceRow label="5 Months Old" price="KSH 5,500" />
              <PriceRow label="7 Months Old" price="KSH 8,000" />
              <PriceRow label="10 Months Old" price="KSH 12,500" />
              <PriceRow label="Female — Ready Pregnant" price="KSH 13,500" />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappLink(
                  "Hello Delamare Farm! I'd like to inquire about your Dorper sheep (5m, 7m, 10m or ready-pregnant female). Please share details."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-bold text-cta-foreground transition hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" />
                Inquire on WhatsApp
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
              📍 Karlo Delamere Farm Shop, Naivasha · ☎️ +254 755 700 239
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DorperSheepSection;
