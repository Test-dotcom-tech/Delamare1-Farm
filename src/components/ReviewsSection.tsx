import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  { name: "Ibrahim Hussein", location: "Nakuru", stars: 5, text: "The Ayrshire cow I bought is giving me 26-28 liters daily. Delivery to Nakuru was smooth and the cow settled in within days. Fully vaccinated with all records provided." },
  { name: "John Kihara", location: "Kiambu", stars: 5, text: "My two Holstein calves arrived healthy and have gained excellent weight. Vaccination records were complete. Exactly what I needed to start my dairy farm." },
  { name: "Henry Omondi", location: "Kisumu", stars: 5, text: "The Girolando heifer performs beautifully in our warm climate. She's now giving 20L daily and is very heat-tolerant. Perfect breed for this region." },
  { name: "Edith Kerubo", location: "Nyamira", stars: 5, text: "Three Saanen goats from South African stock, each producing 3-4L daily. Disease-free with proper papers. Best dairy goats in my shed." },
  { name: "Stephen Wafula", location: "Bungoma", stars: 4, text: "Lucerne hay and Boma Rhodes seeds arrived on time. Feed quality is good and my cows' condition has improved. Four stars only because I'd love even faster delivery." },
  { name: "James Koech", location: "Eldoret", stars: 5, text: "The matured Holstein cow matched the description perfectly. Producing 25L daily and Ibrahim's team followed up after delivery. Excellent service." },
  { name: "Samuel Naingisa", location: "Narok", stars: 5, text: "Bought a breeding pair of Saanen goats. They arrived healthy and are already kidding. Expanding my herd with quality genetics." },
  { name: "Joseph Kiasa", location: "Kitale", stars: 4, text: "Ayrshire heifer and dairy meal both good quality. The farm visit option helped me choose well. Would recommend." },
  { name: "Antony Ruiru", location: "Murang'a", stars: 5, text: "My 7-month Girolando calf grew well and is now in-calf. Vaccination records were thorough. Will buy again." },
  { name: "Abraham Ogiki", location: "Kisii", stars: 5, text: "Regular customer for corn silage and rice bran. My milk production increased 30% since switching. Consistent quality every time." },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % reviews.length, "right");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + reviews.length) % reviews.length, "left");
  }, [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const review = reviews[current];

  return (
    <section id="reviews" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">What Our Farmers Say</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">Customer Reviews</h2>
        </div>

        <div
          className="relative mx-auto max-w-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition hover:bg-primary/90 md:-left-14"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition hover:bg-primary/90 md:-right-14"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Card */}
          <div
            className={`rounded-2xl border bg-card p-8 text-center shadow-lg transition-all duration-300 ease-in-out md:p-10 ${
              isAnimating
                ? direction === "right"
                  ? "translate-x-8 opacity-0"
                  : "-translate-x-8 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            {/* Stars */}
            <div className="mb-4 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < review.stars ? "fill-accent text-accent" : "text-border"}`}
                />
              ))}
            </div>

            <blockquote className="mb-6 text-base leading-relaxed text-foreground/90 md:text-lg">
              "{review.text}"
            </blockquote>

            <div className="flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-serif text-lg font-bold text-primary-foreground">
                {review.name[0]}
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "right" : "left")}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-7 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
