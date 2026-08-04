"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Ananya Rao",
    role: "Acne Treatment Patient",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=90",
    quote:
      "I had been struggling with recurring acne and marks for years. Dr. Sahana explained the cause clearly and created a personalised plan that made my skin feel healthier and more confident.",
  },
  {
    name: "Meera Krishnan",
    role: "Pigmentation Treatment Patient",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=90",
    quote:
      "The consultation was detailed and honest. My treatment was planned around my skin type, and the improvement in my pigmentation and overall skin tone has been wonderful.",
  },
  {
    name: "Rahul Sharma",
    role: "Hair Therapy Patient",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=90",
    quote:
      "I appreciated the practical advice and realistic expectations. The team monitored my progress carefully, and my hair feels noticeably stronger after following the recommended treatment plan.",
  },
  {
    name: "Priya Nair",
    role: "Skin Rejuvenation Patient",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=90",
    quote:
      "Every step was explained before my procedure, which made me feel completely comfortable. The care, follow-up, and natural-looking results exceeded my expectations.",
  },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d={
          direction === "left"
            ? "M19 12H5m6-6-6 6 6 6"
            : "M5 12h14m-6-6 6 6-6 6"
        }
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const pauseUntilRef = useRef(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const move = (direction: number) => {
    if (window.innerWidth < 640) {
      setMobileIndex(
        (current) =>
          (current + direction + testimonials.length) % testimonials.length,
      );
      return;
    }

    const slider = sliderRef.current;
    if (!slider) return;

    const firstCard = slider.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(slider).columnGap) || 0;
    const cardStep = (firstCard?.offsetWidth ?? 814) + gap;

    pauseUntilRef.current = performance.now() + 900;
    slider.scrollBy({
      left: direction * cardStep,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const getCardStep = () => {
      const firstCard = slider.firstElementChild as HTMLElement | null;
      const gap = Number.parseFloat(getComputedStyle(slider).columnGap) || 0;
      return (firstCard?.offsetWidth ?? 814) + gap;
    };

    let cardStep = getCardStep();
    let loopPoint = cardStep * testimonials.length;
    let frameId = 0;
    const isMobile = window.matchMedia("(max-width: 639px)").matches;

    const updateMeasurements = () => {
      cardStep = getCardStep();
      loopPoint = cardStep * testimonials.length;
    };

    window.addEventListener("resize", updateMeasurements);

    if (isMobile) {
      slider.scrollLeft = 0;

      const mobileTimer = window.setInterval(() => {
        setMobileIndex((current) => (current + 1) % testimonials.length);
      }, 5000);

      return () => {
        window.clearInterval(mobileTimer);
        window.removeEventListener("resize", updateMeasurements);
      };
    }

    slider.scrollLeft = cardStep / 2;

    const animate = () => {
      if (performance.now() >= pauseUntilRef.current) {
        slider.scrollLeft += 0.55;
      }

      if (slider.scrollLeft >= loopPoint) {
        slider.scrollLeft -= loopPoint;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", updateMeasurements);
    };
  }, []);

  return (
    <section id="testimonials" className="scroll-mt-24 font-sans overflow-hidden bg-white py-8 text-[#1F1F1F] sm:py-10 max-sm:px-4">
      <header className="mx-auto px-4 text-center sm:px-6">
        <div className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-black sm:gap-3 sm:text-xs">
          <span className="h-px w-4 bg-black sm:w-8" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 shrink-0 animate-[spin_4s_linear_infinite] text-black"
            aria-hidden="true"
          >
            <path
              d="M12 2.75c.55 4.87 4.38 8.7 9.25 9.25-4.87.55-8.7 4.38-9.25 9.25C11.45 16.38 7.62 12.55 2.75 12 7.62 11.45 11.45 7.62 12 2.75Z"
              fill="currentColor"
            />
          </svg>
          <span className="whitespace-nowrap">Client Reviews</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 shrink-0 animate-[spin_4s_linear_infinite] text-black"
            aria-hidden="true"
          >
            <path
              d="M12 2.75c.55 4.87 4.38 8.7 9.25 9.25-4.87.55-8.7 4.38-9.25 9.25C11.45 16.38 7.62 12.55 2.75 12 7.62 11.45 11.45 7.62 12 2.75Z"
              fill="currentColor"
            />
          </svg>
          <span className="h-px w-4 bg-black sm:w-8" />
        </div>
        <h2 className="mx-auto mt-5 max-w-[850px] text-3xl font-extrabold leading-[1.2] text-[#1F1F1F] sm:mt-4 sm:text-4xl">
          Trusted by clients, backed by{" "}
          <span className="relative inline-block px-2 text-black">
            <span className="absolute inset-x-0 bottom-0 h-[38%] rounded-sm" />
            <span className="relative"> real experiences</span>
          </span>
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-sm font-medium leading-6 text-[#1F1F1F]/70 sm:mt-3 sm:text-base sm:leading-7">
          We believe in realistic expectations and natural-looking outcomes,
          with every treatment tailored to the individual&apos;s concerns, skin
          type, and goals.
        </p>
      </header>

      <div
        ref={sliderRef}
        className="scrollbar-hide mt-8 flex gap-4 overflow-x-auto sm:mt-6 sm:gap-7"
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <article
            key={`${testimonial.name}-${index}`}
            className={`min-h-[260px] w-full shrink-0 rounded-[22px] border border-[#eeeadd] bg-[#eeeadd] p-5 sm:min-h-[240px] sm:w-[400px] sm:rounded-[30px] sm:p-8 ${
              index === mobileIndex ? "flex" : "hidden sm:flex"
            } relative flex-col justify-center`}
          >
            <span
              className="absolute right-3 top-0 font-serif text-[90px] leading-none text-[#eeeadd] sm:text-[110px]"
              aria-hidden="true"
            >
              ”
            </span>

            <div className="relative flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-medium">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-[#8A6F63]">
                  {testimonial.role}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#1F1F1F]/80 px-3 py-1.5 text-sm tracking-[2px] text-[#ffd231]">
                ★★★★☆
              </span>
            </div>

            <p className="relative mt-6 text-sm font-semibold leading-[1.7] text-[#1F1F1F]/80">
              {testimonial.quote}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 sm:mt-9">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => move(-1)}
          className="wave-btn relative flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition hover:opacity-80 sm:h-14 sm:w-14"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => move(1)}
          className="wave-btn relative flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition hover:opacity-80 sm:h-14 sm:w-14"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </section>
  );
}
