import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import galleryCow1 from "@/assets/gallery-cow-1.jpg";
import galleryCow2 from "@/assets/gallery-cow-2.jpg";
import galleryCow3 from "@/assets/gallery-cow-3.jpg";
import galleryCow4 from "@/assets/gallery-cow-4.jpg";
import galleryGoat1 from "@/assets/gallery-goat-1.jpg";
import galleryGoat2 from "@/assets/gallery-goat-2.jpg";
import galleryGoat3 from "@/assets/gallery-goat-3.jpg";
import galleryGoat4 from "@/assets/gallery-goat-4.jpg";
import galleryGoat5 from "@/assets/gallery-goat-5.jpg";
import galleryGoat6 from "@/assets/gallery-goat-6.jpg";
import galleryGoat7 from "@/assets/gallery-goat-7.jpg";
import galleryGoat8 from "@/assets/gallery-goat-8.jpg";
import galleryGoat9 from "@/assets/gallery-goat-9.jpg";
import galleryGoat10 from "@/assets/gallery-goat-10.jpg";
import galleryGoat11 from "@/assets/gallery-goat-11.jpg";
import galleryGoat12 from "@/assets/gallery-goat-12.jpg";
import galleryGoat13 from "@/assets/gallery-goat-13.jpg";
import galleryGoat14 from "@/assets/gallery-goat-14.jpg";
import galleryGoat15 from "@/assets/gallery-goat-15.jpg";
import galleryGoat16 from "@/assets/gallery-goat-16.jpg";
import galleryGoat17 from "@/assets/gallery-goat-17.jpg";
import galleryGoat18 from "@/assets/gallery-goat-18.jpg";
import galleryCow5 from "@/assets/gallery-cow-5.jpg";
import galleryCow6 from "@/assets/gallery-cow-6.jpg";
import galleryCow7 from "@/assets/gallery-cow-7.jpg";
import galleryCow8 from "@/assets/gallery-cow-8.jpg";
import galleryCow9 from "@/assets/gallery-cow-9.jpg";
import galleryCow10 from "@/assets/gallery-cow-10.jpg";
import galleryCow11 from "@/assets/gallery-cow-11.jpg";
import galleryCow12 from "@/assets/gallery-cow-12.jpg";
import galleryFeeds1 from "@/assets/gallery-feeds-1.jpg";
import galleryFeeds2 from "@/assets/gallery-feeds-2.jpg";
import galleryFeeds3 from "@/assets/gallery-feeds-3.jpg";
import galleryFeeds4 from "@/assets/gallery-feeds-4.jpg";
import galleryFeeds5 from "@/assets/gallery-feeds-5.jpg";
import galleryFeeds6 from "@/assets/gallery-feeds-6.jpg";
import galleryFeeds7 from "@/assets/gallery-feeds-7.jpg";
import galleryFeeds8 from "@/assets/gallery-feeds-8.jpg";
import galleryFeeds9 from "@/assets/gallery-feeds-9.jpg";
import galleryFeeds10 from "@/assets/gallery-feeds-10.jpg";
import galleryFeeds11 from "@/assets/gallery-feeds-11.jpg";
import galleryFeeds12 from "@/assets/gallery-feeds-12.jpg";
import galleryFeeds13 from "@/assets/gallery-feeds-13.jpg";
import galleryFeeds14 from "@/assets/gallery-feeds-14.jpg";
import galleryFeeds15 from "@/assets/gallery-feeds-15.jpg";

type Category = "all" | "cows" | "goats" | "feeds";

const allPhotos = [
  { src: galleryCow1, alt: "Ayrshire dairy cow at Delamare Farm", caption: "Ayrshire Dairy Cow", category: "cows" as const },
  { src: galleryCow3, alt: "Farm manager with dairy cow", caption: "Quality Livestock Inspection", category: "cows" as const },
  { src: galleryCow5, alt: "Holstein Friesian cows in milking shed", caption: "Milking Shed", category: "cows" as const },
  { src: galleryCow9, alt: "Holstein Friesian herd in paddock", caption: "Friesian Herd Outdoors", category: "cows" as const },
  { src: galleryGoat1, alt: "Dorper sheep in pen at Delamare Farm", caption: "Dorper Sheep Flock", category: "goats" as const },
  { src: galleryGoat5, alt: "Two Dorper sheep close-up", caption: "Healthy Dorper Pair", category: "goats" as const },
  { src: galleryGoat11, alt: "Saanen dairy goat herd", caption: "Saanen Herd", category: "goats" as const },
  { src: galleryGoat17, alt: "High-yield Saanen with full udder", caption: "High-Yield Saanen", category: "goats" as const },
  { src: galleryFeeds2, alt: "AgriFlora certified organic fertilizer bag", caption: "AgriFlora Fertilizer", category: "feeds" as const },
  { src: galleryFeeds5, alt: "Stacked hay bales at the farm barn", caption: "Hay Bales Storage", category: "feeds" as const },
  { src: galleryFeeds6, alt: "Fresh lucerne hay bales", caption: "Lucerne Hay Bales", category: "feeds" as const },
  { src: galleryFeeds10, alt: "Hygrow organic fertilizer 50kg bag", caption: "Hygrow Fertilizer", category: "feeds" as const },
];

const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "🐄 Dairy Cows", value: "cows" },
  { label: "🐑 Goats & Sheep", value: "goats" },
  { label: "🌾 Feeds & Supplies", value: "feeds" },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const photos = activeCategory === "all" ? allPhotos : allPhotos.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxPrev = () => setLightboxIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const lightboxNext = () => setLightboxIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  return (
    <section id="gallery" className="bg-secondary/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Farm Gallery</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Life at Delamare Farm
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Take a closer look at our livestock, facilities, and the care we put into every animal.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-primary/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => openLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="bg-card px-3 py-2">
                <p className="text-xs font-semibold text-foreground md:text-sm">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          📸 See more photos on{" "}
          <a href="https://facebook.com/delamarefarm" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline hover:text-accent">
            Facebook
          </a>{" "}
          ·{" "}
          <a href="https://instagram.com/delamarefarm" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline hover:text-accent">
            Instagram
          </a>
        </p>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <div className="relative">
            <img
              src={photos[lightboxIndex]?.src}
              alt={photos[lightboxIndex]?.alt}
              className="w-full rounded-lg object-contain"
            />
            <p className="mt-2 text-center text-sm font-semibold text-primary-foreground">
              {photos[lightboxIndex]?.caption}
            </p>
            <button
              onClick={lightboxPrev}
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary/80 text-primary-foreground transition hover:bg-primary"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={lightboxNext}
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary/80 text-primary-foreground transition hover:bg-primary"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
