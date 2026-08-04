"use client";

import { useState } from "react";

type Concern = {
  name: string;
  description: string;
  image: string;
};

const CONCERNS: Concern[] = [
  {
    name: "Acne & Acne Scars",
    description:
      "Acne can affect people of all ages, often leaving behind scars, marks, and uneven skin texture. Whether you're dealing with active breakouts or post-acne scarring, we focus on identifying the underlying cause and creating a personalised treatment plan that helps improve skin clarity, texture, and overall skin health.",
    image: "/images/service-1.avif",
  },
  {
    name: "Pigmentation & Uneven Skin Tone",
    description:
      "Dark spots, melasma, tanning, and uneven skin tone are among the most common concerns we see. Since pigmentation can be influenced by sun exposure, hormones, acne, or lifestyle, every treatment begins with understanding its causes before recommending advanced solutions that gradually restore a brighter, more even complexion.",
    image: "/images/service-2.avif",
  },
  {
    name: "Laser Hair Reduction",
    description:
      "Constant shaving, waxing, and threading can become time-consuming and irritating. Our laser hair reduction treatments offer a long-term solution for unwanted hair on the face and body using advanced technology that's customised to your skin type and hair growth pattern for safe, comfortable, and effective.",
    image: "/images/service-3.webp",
  },
  {
    name: "Hair Loss & Hair Thinning",
    description:
      "Hair fall can happen for many reasons, from genetics and hormonal changes to stress and nutritional deficiencies. Instead of treating every case the same way, we evaluate your scalp and hair health before recommending personalised solutions that support stronger, healthier hair growth.",
    image: "/images/service-4.jpg",
  },
  {
    name: "Chin Reduction & Facial Contouring",
    description:
      "A well-balanced facial profile can make a noticeable difference to your overall appearance. If excess fullness under the chin affects your confidence, our non-surgical contouring solutions are designed to enhance facial definition while maintaining natural-looking proportions that complement your features.",
    image: "/images/service-5.jpg",
  },
  {
    name: "Skin Tightening & Rejuvenation",
    description:
      "As collagen production slows with age, the skin may begin to lose firmness and elasticity. Our skin-tightening treatments are designed to improve skin texture, support collagen production, and restore a firmer, more refreshed appearance with minimal downtime.",
    image: "/images/service-6.avif",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function CarouselArrow({
  direction,
  onClick,
}: {
  direction: "previous" | "next";
  onClick: () => void;
}) {
  const isPrevious = direction === "previous";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${isPrevious ? "Previous" : "Next"} treatment`}
      className="wave-btn relative flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:opacity-80 active:scale-90"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        {isPrevious ? (
          <path d="m15 18-6-6 6-6" />
        ) : (
          <path d="m9 18 6-6-6-6" />
        )}
      </svg>
    </button>
  );
}

function ConcernCard({
  concern,
  index,
}: {
  concern: Concern;
  index: number;
}) {
  return (
    <article data-pricing-animate className="group flex min-h-[520px] flex-col overflow-hidden rounded-[1.75rem] border border-[#eeeadd] bg-white transition duration-500 hover:-translate-y-2 hover:border-black">
      <div className="relative h-[220px] overflow-hidden bg-[#eeeadd]">
        <img
          src={concern.image}
          alt={concern.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/35 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-[#eeeadd]/90 text-sm font-extrabold text-black backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-extrabold leading-snug text-[#1F1F1F]">
          {concern.name}
        </h3>
        <div className="mt-3 h-px w-12 bg-[#eeeadd]" />
        <p className="mt-4 text-sm leading-6 text-[#1F1F1F]/68">
          {concern.description}
        </p>

        <a
          href="#book-consultation"
          className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-bold text-black transition-opacity hover:opacity-70"
        >
          Explore Treatment
          <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

export default function PricingPlansSection() {
  const [activeConcern, setActiveConcern] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "previous">(
    "next",
  );

  const showPrevious = () => {
    setSlideDirection("previous");
    setActiveConcern(
      (current) => (current - 1 + CONCERNS.length) % CONCERNS.length,
    );
  };

  const showNext = () => {
    setSlideDirection("next");
    setActiveConcern((current) => (current + 1) % CONCERNS.length);
  };

  return (
    <section className="font-sans bg-black px-4 py-8 sm:px-10 sm:py-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div data-pricing-animate className="inline-flex items-center max-sm:gap-1 max-sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-white sm:gap-3 sm:text-xs">
            <span className="h-px w-4 bg-white sm:w-8" />
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 animate-[spin_4s_linear_infinite] text-white" aria-hidden="true">
              <path d="M12 2.75c.55 4.87 4.38 8.7 9.25 9.25-4.87.55-8.7 4.38-9.25 9.25C11.45 16.38 7.62 12.55 2.75 12 7.62 11.45 11.45 7.62 12 2.75Z" fill="currentColor" />
            </svg>
            <span className="whitespace-nowrap">Personalised Dermatology</span>
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 animate-[spin_4s_linear_infinite] text-white" aria-hidden="true">
              <path d="M12 2.75c.55 4.87 4.38 8.7 9.25 9.25-4.87.55-8.7 4.38-9.25 9.25C11.45 16.38 7.62 12.55 2.75 12 7.62 11.45 11.45 7.62 12 2.75Z" fill="currentColor" />
            </svg>
            <span className="h-px w-4 bg-white sm:w-8" />
          </div>
          <h2 data-pricing-animate className="mt-1 text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl">
            Your Concern{" "}
            <span className="text-white">Comes First</span>
          </h2>
          <p data-pricing-animate className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/70">
            Every patient walks in with a different concern. Our role is to
            understand what&apos;s causing it and recommend the right solution,
            not just another treatment.
          </p>
        </div>

        <div className="mt-5 overflow-hidden md:hidden">
          <div
            key={activeConcern}
            className={`pricing-card-enter ${
              slideDirection === "previous"
                ? "pricing-card-enter-previous"
                : "pricing-card-enter-next"
            }`}
          >
            <ConcernCard
              concern={CONCERNS[activeConcern]}
              index={activeConcern}
            />
          </div>

          <div data-pricing-animate className="mt-5 flex items-center justify-end gap-3">
            <div
              className="mr-1 flex items-center gap-1.5"
              aria-label={`Treatment ${activeConcern + 1} of ${CONCERNS.length}`}
            >
              {CONCERNS.map((concern, index) => (
                <button
                  key={concern.name}
                  type="button"
                  onClick={() => {
                    setSlideDirection(index < activeConcern ? "previous" : "next");
                    setActiveConcern(index);
                  }}
                  aria-label={`Show ${concern.name}`}
                  aria-current={activeConcern === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeConcern === index
                      ? "w-5 bg-[#eeeadd]"
                      : "w-2 bg-[#8A6F63]/35"
                  }`}
                />
              ))}
            </div>
            <CarouselArrow direction="previous" onClick={showPrevious} />
            <CarouselArrow direction="next" onClick={showNext} />
          </div>
        </div>

        <div className="mt-5 hidden gap-6 md:grid md:grid-cols-2 lg:mt-8 lg:grid-cols-3">
          {CONCERNS.map((concern, index) => (
            <ConcernCard
              key={concern.name}
              concern={concern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
