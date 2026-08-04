"use client";

import { useRef } from "react";

type Treatment = {
  title: string;
  image: string;
  imagePosition?: string;
};

const treatments: Treatment[] = [
  {
    title: "Hydrafacial®",
    image:
      "/images/icons1.avif",
  },
  {
    title: "Green Peel",
    image:
      "/images/icons-2.jpg",
  },
  {
    title: "Cosmelan Peel",
    image:
      "/images/icons-3.avif",
  },
  // {
  //   title: "PRP Therapy",
  //   image:
  //     "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=90",
  //   imagePosition: "center 65%",
  // },
  // {
  //   title: "GFC Hair Therapy",
  //   image:
  //     "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=700&q=90",
  // },
  {
    title: "Laser Hair Reduction",
    image:
      "/images/icons-1.avif",
  },
  {
    title: "Medical Chemical Peels",
    image:
      "/images/icons-4.avif",
  },
  {
    title: "Advanced Skin Rejuvenation",
    image:
      "/images/icons-5.jpg",
  },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

export default function ParadiseTreatmentsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    const isMobile = window.innerWidth < 640;
    sliderRef.current?.scrollBy({
      left: direction * (isMobile ? sliderRef.current.clientWidth : 320),
      behavior: "smooth",
    });
  };

  return (
    <section id="treatments" className="scroll-mt-24 font-sans relative overflow-hidden bg-[#ffffff] px-4 pb-8 pt-4 sm:px-10 sm:pb-[44px] sm:pt-[15px] lg:px-20">
      <div className="mx-auto max-w-[1590px]">
        <header className="text-center ">
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
            <span className="whitespace-nowrap">Our Treatments</span>
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
          <h2 className="mx-auto mt-3 max-w-[1280px] text-balance text-2xl font-extrabold leading-[1.15] text-[#1F1F1F] sm:mt-4 sm:text-4xl">
            Advanced Treatments  Backed by{" "}
            <span className="text-black">
              Dermatology Expertise
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[#1F1F1F]/70 sm:leading-normal">
            Every treatment we recommend is selected based on your{" "}
            <span className="font-bold text-black">
              diagnosis, skin type, and goals
            </span>
            , not because it&apos;s popular.
          </p>

        </header>

        <div className="relative mx-auto mt-5 max-w-[1450px] sm:mt-[24px]">
          <p className="mb-5 block max-w-[900px] text-center text-sm font-semibold leading-[1.55] sm:ml-10 sm:mb-6 sm:flex sm:text-left sm:text-base sm:leading-[1.45]">
            At DermaGlow Studio, we offer{" "}
            <span className="ml-1 font-extrabold text-black">
              advanced aesthetic procedures
            </span>
            &nbsp;including :
          </p>
          <button
            type="button"
            aria-label="Previous treatments"
            onClick={() => move(-1)}
            className="wave-btn absolute -left-11 top-[150px] z-10 hidden h-[46px] w-[46px] items-center justify-center rounded-full bg-black text-white transition hover:opacity-90 lg:flex"
          >
            <ArrowIcon direction="left" />
          </button>

          <div
            ref={sliderRef}
            className="scrollbar-hide mx-auto flex max-w-[1300px] snap-x snap-mandatory overflow-x-auto pb-3 sm:gap-4 sm:px-1 lg:justify-between"
          >
            {treatments.map((treatment) => (
              <article
                key={treatment.title}
                className="group w-full shrink-0 snap-center text-center sm:w-[246px]"
              >
                <div className="relative mx-auto h-[210px] w-[210px] overflow-hidden rounded-full border-[8px] border-[#eeeadd] bg-[#eeeadd] transition-colors duration-300 group-hover:border-black sm:h-[246px] sm:w-[246px] sm:border-[10px]">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: treatment.imagePosition }}
                  />
                </div>

                <h3 className="mt-3 text-base font-semibold text-[#1F1F1F] sm:mt-[18px] sm:text-lg">
                  {treatment.title}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              aria-label="Previous treatment"
              onClick={() => move(-1)}
              className="wave-btn relative flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition active:bg-black active:text-white"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next treatment"
              onClick={() => move(1)}
              className="wave-btn relative flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition active:opacity-80"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>

          <button
            type="button"
            aria-label="Next treatments"
            onClick={() => move(1)}
            className="wave-btn absolute -right-11 top-[150px] z-10 hidden h-[46px] w-[46px] items-center justify-center rounded-full bg-black text-white transition hover:opacity-90 lg:flex"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
        <div className="mt-4 flex justify-center px-1 sm:mt-8 sm:px-0">
        <p className="max-w-[980px] text-center text-sm leading-[1.55] text-[#1F1F1F]/70 sm:text-base">
          Your dermatologist will recommend the{" "}
          <span className="font-bold text-black">
            most appropriate treatment
          </span>{" "}
          after carefully evaluating your concern during your{" "}
          <span className="font-bold text-[#1F1F1F]">consultation.</span>
        </p>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="#book-consultation"
            className="wave-btn relative inline-flex w-full max-w-[240px] items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-bold text-white transition-colors hover:opacity-90 sm:w-auto sm:max-w-none sm:px-9"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
