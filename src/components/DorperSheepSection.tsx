import { MessageCircle, Phone, Plus } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "./Navbar";
import dorperVideoAsset from "@/assets/dorper-sheep.mp4.asset.json";
import sheep1 from "@/assets/sheep-1.jpeg";
import sheep2 from "@/assets/sheep-2.jpeg"; // Import multiple images for gallery
import sheep3 from "@/assets/sheep-3.jpeg";

const PriceRow = ({
  id,
  label,
  price,
  priceValue,
  note,
}: {
  id: string;
  label: string;
  price: string;
  priceValue: number;
  note?: string;
}) => {
  const { addItem } = useCart();
  const handleAdd = () => {
    addItem({ id, name: `Dorper Sheep — ${label}`, price: priceValue, image: sheep1 });
    toast.success(`Dorper Sheep (${label}) added to cart`);
  };
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-border bg-muted/40 px-4 py-3">
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-card-foreground">{label}</p>
        {note && <p className="text-xs text-muted-foreground">{note}</p>}
      </div>
      <p className="font-serif text-lg font-bold text-primary">{price}</p>
      <button
        type="button"
        onClick={handleAdd}
        aria-label={`Add Dorper sheep ${label} to cart`}
        className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition hover:brightness-110"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

const DorperSheepSection = () => {
  const [videoError, setVideoError] = useState(true); // Default to true since video isn't working
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Gallery images (use your available sheep images)
  const galleryImages = [sheep1, sheep2, sheep3].filter(Boolean);
  
  // Try multiple possible video paths
  const videoPaths = [
    dorperVideoAsset?.url,
    "/videos/dorper-sheep.mp4",
    "/assets/dorper-sheep.mp4",
    "https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_ID", // Add if you have Google Drive link
  ].filter(Boolean);
  
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>(videoPaths[0] || "");

  useEffect(() => {
    console.log("Attempting to load video from:", currentVideoUrl);
    
    // Auto-rotate gallery images every 5 seconds if video fails
    if (videoError && galleryImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [videoError, galleryImages.length]);

  const handleVideoError = () => {
    console.error("Video failed to load from:", currentVideoUrl);
    
    // Try next video path if available
    const currentIndex = videoPaths.indexOf(currentVideoUrl);
    if (currentIndex < videoPaths.length - 1) {
      const nextUrl = videoPaths[currentIndex + 1];
      console.log("Trying next video path:", nextUrl);
      setCurrentVideoUrl(nextUrl);
    } else {
      console.log("All video paths failed, showing image gallery");
      setVideoError(true);
    }
  };

  return (
    <section id="dorper-sheep" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            🐑 KALRO × Delamare Farm
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Dorper Sheep Available (KALRO Farm Kenya Shop)
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Dorper sheep fast-growing, hardy, and excellent meat quality. View our gallery below or contact us for a video tour.
          </p>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-xl">
          <div className="relative h-72 w-full overflow-hidden rounded-t-xl bg-muted sm:h-96 md:h-[28rem]">
            {!videoError ? (
              <video
                key={currentVideoUrl}
                className="absolute inset-0 h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                onError={handleVideoError}
                onLoadedData={() => console.log("Video loaded successfully")}
                autoPlay={false}
              >
                <source src={currentVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <>
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`Dorper sheep at Delamare Farm - ${currentImageIndex + 1}`}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                />
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                      aria-label="Previous image"
                    >
                      ◀
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                      aria-label="Next image"
                    >
                      ▶
                    </button>
                    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
                      {galleryImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === currentImageIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
            <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow">
              {!videoError ? "Live Video" : "Dorper Sheep Gallery"}
            </span>
            {videoError && (
              <div className="pointer-events-none absolute bottom-3 right-3 rounded-lg bg-black/70 px-2 py-1 text-xs text-white">
                📸 {currentImageIndex + 1} / {galleryImages.length}
              </div>
            )}
          </div>

          <div className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Dorper Sheep · Delamere Farm
            </p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-card-foreground md:text-3xl">
              Dorper Sheep for Sale
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              Healthy, well-raised Dorper sheep at every stage — from 5-month lambs to ready-pregnant females. 
              {videoError && " Since our video is temporarily unavailable, please contact us for a personalized video tour of available stock."}
            </p>

            <div className="mt-5 grid gap-2.5">
              <PriceRow id="dorper-5m" label="5 Months Old" price="KSH 5,500" priceValue={5500} />
              <PriceRow id="dorper-7m" label="7 Months Old" price="KSH 8,000" priceValue={8000} />
              <PriceRow id="dorper-10m" label="10 Months Old" price="KSH 12,500" priceValue={12500} />
              <PriceRow id="dorper-female-pregnant" label="Female — Ready Pregnant" price="KSH 13,500" priceValue={13500} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappLink(
                  "Hello Delamare Farm! I'd like to order Dorper sheep (5m, 7m, 10m or ready-pregnant female). Please share details and a video tour if available."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-bold text-cta-foreground transition hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" />
                Order Now
              </a>
              <a
                href="tel:0101024658"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-background px-4 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                Call 0755 700 239
              </a>
            </div>

            {videoError && (
              <div className="mt-4 rounded-md bg-muted p-3 text-center">
                <p className="text-xs text-muted-foreground">
                  🎥 Video tour unavailable? Request a personalized video of our Dorper sheep via WhatsApp!
                </p>
              </div>
            )}

            <p className="mt-4 text-center text-xs text-muted-foreground">
              📍 Delamere Farm Shop, Naivasha · ☎️ +254 755 700 239
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DorperSheepSection;