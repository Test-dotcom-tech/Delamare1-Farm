import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LivestockCard from "@/components/LivestockCard";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import FeedsSection from "@/components/FeedsSection";
import SheepSection from "@/components/SheepSection";
import MaizeSection from "@/components/MaizeSection";
import TomatoSection from "@/components/TomatoSection";
import BirdsSection from "@/components/BirdsSection";
import EggsSection from "@/components/EggsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import farmCows from "@/assets/farm-cows.jpg";
import ayrshireCow from "@/assets/ayrshire-cow.jpg";
import girolandoCow from "@/assets/girolando-cow.jpg";
import saanenGoat from "@/assets/saanen-goat.jpg";

const SITE_URL = "https://www.delamarefarm.co.ke";

const Index = () => {
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Delamare Farm",
    image: `${SITE_URL}/favicon.jpeg`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: "+254755700239",
    priceRange: "KSH",
    address: { "@type": "PostalAddress", addressLocality: "Naivasha", addressCountry: "KE" },
    areaServed: { "@type": "Country", name: "Kenya" },
    description:
      "Delamare Farm Naivasha sells quality dairy cows (Friesian, Ayrshire, Girolando), Saanen dairy goats, and farm feeds with countrywide delivery in Kenya.",
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Delamare Farm — Dairy Cows, Saanen Goats &amp; Farm Feeds in Kenya</title>
        <meta
          name="description"
          content="Buy dairy cows for sale in Kenya, Saanen goats and quality farm feeds from Delamare Farm Naivasha. Countrywide delivery, vaccinated livestock, WhatsApp ordering."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content="Delamare Farm — Dairy Cows, Saanen Goats & Farm Feeds in Kenya" />
        <meta property="og:description" content="Pedigree dairy cows, Saanen goats and farm supplies delivered countrywide in Kenya." />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(localBusinessLd)}</script>
      </Helmet>

      <Navbar />
      <HeroSection />

      {/* Dairy Cows Section */}
      <section id="dairy-cows" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Premium Livestock</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Dairy Cows for Sale in Kenya
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Pedigree Friesian, Ayrshire and Girolando dairy cows from Delamare Farm Naivasha. Fully vaccinated, full records, countrywide delivery.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <LivestockCard
              image={farmCows}
              imageAlt="Holstein Friesian dairy calves at Delamare Farm Kenya"
              title="Holstein Friesian Calves"
              subtitle="Pedigree Dairy Calves"
              description="Quality weaned pedigree calves from high-yielding dams. Available at every stage from 2 months to in-calf heifer."
              badge="Best Seller"
              primarySlug="holstein-friesian-calf-2-4-months"
              items={[
                { label: "2-4 months", productId: "holstein-2-4m" },
                { label: "4-5 months", productId: "holstein-4-5m" },
                { label: "7-8 months", productId: "holstein-7-8m" },
                { label: "Matured", productId: "holstein-matured" },
                { label: "In-Calf", productId: "holstein-in-calf" },
                { label: "Twin Family", productId: "holstein-twin-family" },
              ]}
              whatsappMessage="Hello Delamare Farm! I'm interested in Holstein Friesian dairy calves. Please share details."
            />
            <LivestockCard
              image={ayrshireCow}
              imageAlt="Ayrshire dairy cow high milk yield Delamare Farm Kenya"
              title="Ayrshire Dairy Cow"
              subtitle="2nd Lactation"
              description="Produces 26-28 litres per day. Fully vaccinated with all records. Countrywide delivery."
              badge="Hot Deal"
              primarySlug="ayrshire-dairy-cow-2nd-lactation"
              items={[
                { label: "Ayrshire (2nd Lactation)", productId: "ayrshire-2nd" },
              ]}
              whatsappMessage="Hello Delamare Farm! I'm interested in the Ayrshire dairy cow. Please share details."
            />
            <LivestockCard
              image={girolandoCow}
              imageAlt="Girolando tropical dairy cow heat tolerant Kenya"
              title="Girolando Breed"
              subtitle="Tropical Dairy Breed"
              description="Gir × Holstein cross — heat-resistant and disease-tolerant, ideal for warm Kenyan counties."
              primarySlug="girolando-tropical-dairy-cow"
              items={[
                { label: "Girolando Cow", productId: "girolando" },
              ]}
              whatsappMessage="Hello Delamare Farm! I'm interested in Girolando dairy cattle. Please share details."
            />
          </div>
        </div>
      </section>

      {/* Dairy Goats Section */}
      <section id="dairy-goats" className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">The Queen of Dairy Goats</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Saanen Dairy Goats — Kenya Price &amp; Delivery
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              The world's top dairy goat breed producing 3-4 litres per day. Disease-free, sourced from South Africa, raised at Delamare Farm.
            </p>
          </div>
          <div className="mx-auto max-w-lg">
            <LivestockCard
              image={saanenGoat}
              imageAlt="Saanen dairy goat South African breed high milk yield Kenya"
              title="Saanen Breed Goats"
              subtitle="Source: South Africa"
              description="Disease-free Saanen goats with competitive pricing. Free delivery to our farmers."
              badge="3-4L/Day"
              primarySlug="saanen-dairy-goat-2-weeks-delivery"
              items={[
                { label: "2 Weeks Delivery", productId: "saanen-2w" },
                { label: "1 Month Delivery", productId: "saanen-1m" },
                { label: "First Timer", productId: "saanen-first-timer" },
                { label: "Second Timer", productId: "saanen-second-timer" },
              ]}
              whatsappMessage="Hello Delamare Farm! I'm interested in Saanen dairy goats. Please share details."
            />
          </div>
        </div>
      </section>

      <SheepSection />
      <MaizeSection />
      <TomatoSection />
      <BirdsSection />
      <EggsSection />


      <GallerySection />
      <FeedsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/254755700239?text=${encodeURIComponent("Hello Delamare Farm!")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-highlight shadow-lg transition hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-accent-foreground">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;
