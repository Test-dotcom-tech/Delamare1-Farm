import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import galleryGrazing from "@/assets/gallery-grazing.jpg";
import galleryMilking from "@/assets/gallery-milking.jpg";
import galleryGoats from "@/assets/gallery-goats.jpg";
import galleryCalves from "@/assets/gallery-calves.jpg";
import galleryDelivery from "@/assets/gallery-delivery.jpg";
import galleryFeeds from "@/assets/gallery-feeds.jpg";

const photos = [
  { src: galleryGrazing, alt: "Holstein Friesian cows grazing on green pastures", caption: "Our Dairy Herd Grazing" },
  { src: galleryMilking, alt: "Dairy cows at the milking station", caption: "Healthy Milking Cows" },
  { src: galleryGoats, alt: "Saanen dairy goats in their pen", caption: "Saanen Dairy Goats" },
  { src: galleryCalves, alt: "Young dairy calves in the barn", caption: "Pedigree Calves" },
  { src: galleryDelivery, alt: "Livestock delivery across Kenya", caption: "Countrywide Delivery" },
  { src: galleryFeeds, alt: "Quality animal feeds and hay bales", caption: "Premium Animal Feeds" },
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxPrev = () => setLightboxIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const lightboxNext = () => setLightboxIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  // Show 3 images at a time on desktop, 1 on mobile
  const getVisibleIndices = () => {
    const indices = [];
    for (let offset = -1; offset <= 1; offset++) {
      indices.push((currentIndex + offset + photos.length) % photos.length);
    }
    return indices;
  };

  return (
    <section id="gallery" className="bg-secondary/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Farm Gallery</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Life at Delamere Farm
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Take a closer look at our livestock, facilities, and the care we put into every animal.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-5xl">
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:bg-primary/90 md:-left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Mobile: single image */}
          <div className="block md:hidden">
            <div
              className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => openLightbox(currentIndex)}
            >
              <img
                src={photos[currentIndex].src}
                alt={photos[currentIndex].alt}
                className="aspect-[3/2] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="bg-card px-4 py-3">
                <p className="text-sm font-semibold text-foreground">{photos[currentIndex].caption}</p>
              </div>
            </div>
          </div>

          {/* Desktop: 3 images */}
          <div className="hidden gap-4 md:grid md:grid-cols-3">
            {getVisibleIndices().map((photoIndex) => (
              <div
                key={photoIndex}
                className="cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => openLightbox(photoIndex)}
              >
                <img
                  src={photos[photoIndex].src}
                  alt={photos[photoIndex].alt}
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="bg-card px-4 py-3">
                  <p className="text-sm font-semibold text-foreground">{photos[photoIndex].caption}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:bg-primary/90 md:-right-6"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === currentIndex ? "scale-125 bg-primary" : "bg-primary/30"
              }`}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <div className="relative">
            <img
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              className="w-full rounded-lg object-contain"
            />
            <p className="mt-2 text-center text-sm font-semibold text-primary-foreground">
              {photos[lightboxIndex].caption}
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
