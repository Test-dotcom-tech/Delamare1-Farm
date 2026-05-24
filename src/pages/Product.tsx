import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { MessageCircle, ShoppingCart, MapPin, Tag, Activity, Calendar, CheckCircle2, ChevronLeft } from "lucide-react";
import { Navbar, whatsappLink } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCart } from "@/context/CartContext";
import { getProductBySlug, products, formatKES, productPriceLabel } from "@/data/products";
import { toast } from "sonner";

const SITE_URL = "https://www.delamarefarm.co.ke";

const ProductPage = () => {
  const { slug = "" } = useParams();
  const product = getProductBySlug(slug);
  const [imgIdx, setImgIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  if (!product) return <Navigate to="/404" replace />;

  const canonical = `${SITE_URL}/product/${product.slug}`;
  const mainImg = product.images[imgIdx] ?? product.images[0];
  const hasPrice = product.price > 0;

  const handleAdd = () => {
    if (!hasPrice) {
      window.open(whatsappLink(`Hello Delamare Farm! I'd like a quote for ${product.name}.`), "_blank", "noopener,noreferrer");
      return;
    }
    addItem(
      { id: product.id, name: product.name, price: product.price, priceLabel: product.priceLabel, image: product.images[0] },
      qty
    );
    toast.success(`${product.name} added to cart`);
  };

  const whatsappOrder = whatsappLink(
    `Hello Delamare Farm! I'd like to order ${qty}× ${product.name}${hasPrice ? ` at ${formatKES(product.price)} each (Total ${formatKES(product.price * qty)})` : ""}. Please confirm delivery to my location.`
  );

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((i) => `${SITE_URL}${i}`),
    brand: { "@type": "Brand", name: "Delamare Farm" },
    sku: product.id,
    offers: hasPrice
      ? {
          "@type": "Offer",
          priceCurrency: "KES",
          price: product.price,
          availability:
            product.stock === "In Stock"
              ? "https://schema.org/InStock"
              : product.stock === "Limited Stock"
                ? "https://schema.org/LimitedAvailability"
                : "https://schema.org/PreOrder",
          url: canonical,
          seller: { "@type": "Organization", name: "Delamare Farm" },
        }
      : undefined,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${product.name} — Delamare Farm Kenya`}</title>
        <meta name="description" content={product.shortDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${product.name} — Delamare Farm`} />
        <meta property="og:description" content={product.shortDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Navbar />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ChevronLeft className="h-4 w-4" /> Back to all products
        </Link>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
              <img src={mainImg} alt={`${product.name} at Delamare Farm Kenya`} className="aspect-[4/3] w-full object-cover" />
            </div>
            {product.images.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {product.images.map((src, i) => (
                  <button
                    type="button"
                    key={src + i}
                    onClick={() => setImgIdx(i)}
                    className={`overflow-hidden rounded-md border-2 transition ${i === imgIdx ? "border-primary" : "border-transparent hover:border-border"}`}
                    aria-label={`Show image ${i + 1}`}
                  >
                    <img src={src} alt={`${product.name} view ${i + 1}`} loading="lazy" className="aspect-square w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {product.category === "cows" ? "Dairy Cow" : product.category === "goats" ? "Dairy Goat" : "Farm Supplies"}
            </p>
            <h1 className="mt-1 font-serif text-3xl font-bold text-foreground md:text-4xl">{product.name}</h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{product.shortDescription}</p>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-serif text-3xl font-bold text-primary">{productPriceLabel(product)}</span>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-foreground">{product.stock}</span>
            </div>

            <ul className="mt-5 grid grid-cols-1 gap-2 text-sm text-foreground sm:grid-cols-2">
              {product.breed && (
                <li className="flex items-center gap-2"><Tag className="h-4 w-4 text-accent" /> <span className="font-semibold">Breed:</span> {product.breed}</li>
              )}
              {product.age && (
                <li className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> <span className="font-semibold">Age:</span> {product.age}</li>
              )}
              {product.milkYield && (
                <li className="flex items-center gap-2"><Activity className="h-4 w-4 text-accent" /> <span className="font-semibold">Yield:</span> {product.milkYield}</li>
              )}
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> <span className="font-semibold">Location:</span> {product.location}</li>
            </ul>

            {hasPrice && (
              <div className="mt-5 flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">Quantity:</span>
                <div className="flex items-center rounded-md border border-border">
                  <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-9 w-9 text-foreground hover:bg-muted">−</button>
                  <span className="w-10 text-center font-semibold">{qty}</span>
                  <button type="button" onClick={() => setQty((q) => q + 1)} className="h-9 w-9 text-foreground hover:bg-muted">+</button>
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleAdd}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-bold text-primary-foreground transition hover:brightness-110"
              >
                <ShoppingCart className="h-5 w-5" />
                {hasPrice ? "Add to Cart" : "Request Quote"}
              </button>
              <a
                href={whatsappOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-cta px-5 py-3 font-bold text-cta-foreground transition hover:brightness-110"
              >
                <MessageCircle className="h-5 w-5" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Long description */}
        <section className="mt-14 grid gap-10 md:grid-cols-3">
          <article className="prose prose-sm max-w-none md:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-foreground">About this {product.category === "feeds" ? "product" : "animal"}</h2>
            <p className="mt-4 leading-relaxed text-foreground/90">{product.longDescription}</p>
          </article>
          <aside className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-foreground">Why choose Delamare Farm</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-bold text-foreground">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-4 rounded-xl border border-border bg-card px-5">
            {product.faqs.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-foreground">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-serif text-2xl font-bold text-foreground">Related products</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/product/${r.slug}`}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
                >
                  <img src={r.images[0]} alt={r.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
                  <div className="p-4">
                    <p className="font-serif font-bold text-foreground">{r.name}</p>
                    <p className="mt-1 text-sm font-bold text-primary">{productPriceLabel(r)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
