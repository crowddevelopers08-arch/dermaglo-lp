import Image from "next/image";

const NAVY = "#1F1F1F";

const DIFFERENTIATORS = [
  "Dermatologist-led consultations",
  "Personalised skin and hair treatment plans",
  "Advanced aesthetic procedures",
  "Authentic patient transformations",
  "Ethical treatment recommendations",
  "Comprehensive follow-up care",
  "Trusted dermatology clinic in Rajarajeshwari Nagar",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full p-1 ${className}`}
      style={{ backgroundColor: "#000000" }}
    >
      <CheckIcon />
    </span>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FertilityCommitmentSection() {
  return (
    <section id="why-choose-us" className="scroll-mt-24 font-sans px-4 py-6 sm:px-10 sm:py-8 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-black sm:gap-3 sm:text-xs">
            <span className="h-px w-4 bg-black sm:w-8" />
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 animate-[spin_4s_linear_infinite] text-black" aria-hidden="true">
              <path d="M12 2.75c.55 4.87 4.38 8.7 9.25 9.25-4.87.55-8.7 4.38-9.25 9.25C11.45 16.38 7.62 12.55 2.75 12 7.62 11.45 11.45 7.62 12 2.75Z" fill="currentColor" />
            </svg>
            <span className="whitespace-nowrap">Our Commitment</span>
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 animate-[spin_4s_linear_infinite] text-black" aria-hidden="true">
              <path d="M12 2.75c.55 4.87 4.38 8.7 9.25 9.25-4.87.55-8.7 4.38-9.25 9.25C11.45 16.38 7.62 12.55 2.75 12 7.62 11.45 11.45 7.62 12 2.75Z" fill="currentColor" />
            </svg>
            <span className="h-px w-4 bg-black sm:w-8" />
          </div>

          <h2
            className="mt-3 text-2xl font-extrabold leading-[1.15] sm:mt-4 sm:text-4xl"
            style={{ color: NAVY }}
          >
            Why Choose <span style={{ color: "#000000" }}>DermaGlow Studio</span>?
          </h2>

          <div className="mt-3 flex flex-col gap-4 sm:mt-3">
            <p className="max-w-2xl text-sm leading-relaxed text-[#1F1F1F]/70 sm:leading-normal">
              At DermaGlow Studio, we believe every skin and hair concern
              deserves an individual approach. Rather than recommending the
              same treatment for everyone, we begin by understanding the root
              cause of your concern and then create a personalised treatment
              plan.
            </p>

            <div className="relative aspect-square w-full sm:hidden">
              <Image
                src="/images/why-choose.png"
                alt="Why choose DermaGlow Studio"
                fill
                sizes="calc(100vw - 32px)"
                className="rounded-[15px] object-contain"
              />
            </div>

          <h3 className=" text-base font-bold sm:block" style={{ color: NAVY }}>
            What Makes Us Different :
          </h3>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_48px,black_calc(100%-48px),transparent)] sm:block">
            <div className="flex w-max animate-marquee gap-5">
              {[...DIFFERENTIATORS, ...DIFFERENTIATORS].map((item, i) => (
                <div key={i} className="flex items-center gap-3 whitespace-nowrap">
                  <CheckBadge />
                  <span className="text-sm font-medium text-[#1F1F1F]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#eeeadd]" />

            <p className="max-w-2xl text-sm text-[#1F1F1F]/70 sm:block">
              Our focus is simple: safe treatments, honest recommendations, and
              long-term skin and hair health. Every consultation is led by a
              qualified dermatologist, ensuring you receive evidence-based care
              that&apos;s designed around you, not just your symptoms.
            </p>
          </div>


          <a
            href="#book-consultation"
            className="wave-btn relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:opacity-90 sm:mt-8 sm:w-fit sm:py-4"
          >
            Explore More
            <ArrowUpRightIcon />
          </a>
        </div>

        {/* Right column */}
        <div className="relative hidden aspect-square w-full max-w-[560px] sm:block">
          <Image
            src="/images/why-choose.png"
            alt="Why choose DermaGlow Studio"
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 560px, 50vw"
            className="object-contain rounded-[15px] sm:rounded-[38px]"
          />
        </div>
      </div>
    </section>
  );
}
