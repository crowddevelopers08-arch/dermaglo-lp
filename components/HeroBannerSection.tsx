"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const FORM_SOURCE = "dermaglo-form";

const NAVY = "#1F1F1F";
const ACCENT = "#C85A2A";
const PRIMARY = "#D96A3A";

const USPS = [
  "Dermatologist-Led Care",
  "Personalised Treatment Plans",
  "Advanced Aesthetic Technologies",
  "Ethical & Transparent Treatment",
];

const CONCERN_OPTIONS = [
  "Acne",
  "Pigmentation",
  "Hair Loss",
  "Unwanted Hair",
  "Signs of Ageing",
  "Other",
];

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.95 9.95 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2Zm5.8 14.2c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.05.25-3.5-.73-2.94-1.17-4.83-4.15-4.98-4.34-.14-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.6.83 2.06.9 2.2.07.15.12.32.02.51-.1.2-.15.32-.3.49-.15.17-.31.38-.44.5-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13.99 2.08 1.31 2.38 1.46.3.15.47.13.65-.08.18-.2.75-.87.96-1.17.2-.3.4-.24.65-.15.26.1 1.65.78 1.94.93.28.15.47.22.54.34.07.13.07.72-.19 1.4Z" />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D96A3A"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 shrink-0"
      aria-hidden="true"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white/50"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function HeroBannerSection() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const concern = String(formData.get("concern") || "").trim();

    if (!name || !phone || !concern) {
      setFormError("Please fill in your name, phone number, and concern.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: FORM_SOURCE,
          name,
          phone,
          concern,
          pageUrl: window.location.href,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed");
      }

      form.reset();
      router.push("/thank-you");
    } catch {
      setFormError("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="font-sans relative overflow-hidden bg-gradient-to-b from-[#E8E2DA] to-[#F8F5F1] px-4 py-8 sm:px-10 sm:py-8 lg:px-10">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D96A3A]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#C85A2A]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 sm:gap-12 lg:grid-cols-12">
        {/* Left column: copy */}
        <div className="contents sm:block lg:col-span-5">
          <div
            className="order-1 inline-flex w-full max-w-[390px] items-center justify-center gap-3 rounded-full border border-[#D96A3A]/55 bg-[#F8F5F1]/75 px-4 py-3 text-center text-[11px] font-bold leading-4 sm:w-fit sm:max-w-none sm:px-5 sm:text-sm sm:leading-5"
            style={{ color: ACCENT }}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D96A3A]/18 text-[#C85A2A]">
              <PinIcon />
            </span>
            <span>
              Best Skin &amp; Hair Clinic in Rajarajeshwari Nagar, Bangalore
            </span>
          </div>

          <h1
            className="order-2 mt-4 text-center text-xl font-extrabold leading-[1.2] sm:mt-5 sm:text-left sm:text-4xl sm:leading-[1.25]"
            style={{ color: NAVY }}
          >
            Personalised Dermatology for Every{" "}
            <span style={{ color: ACCENT }}>Skin &amp; Hair Concern</span>
          </h1>

          <p className="order-4 mt-6 max-w-md text-sm leading-[1.65] text-[#1F1F1F]/70 sm:mt-5 sm:text-sm sm:leading-6">
            Healthy skin and hair begin with the right diagnosis. Whether
            you&apos;re struggling with acne, pigmentation, hair loss,
            unwanted hair, or signs of ageing, DermaGlow Studio offers
            dermatologist-led care tailored to your unique needs.
          </p>

          <p
            className="order-5 mt-4 max-w-md border-l-4 pl-4 text-[11px] text-[#1F1F1F]/70 sm:text-xs sm:leading-5"
            style={{ borderColor: PRIMARY }}
          >
            Led by{" "}
            <strong style={{ color: NAVY }}>
              Dr Sahana (MBBS, MD Dermatology)
            </strong>
            , we combine clinical expertise with advanced aesthetic
            technologies to help you achieve healthy, natural-looking
            results.
          </p>

          <div className="order-6 mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-semibold text-white transition-colors hover:opacity-90 sm:py-4 sm:text-sm"
               style={{ backgroundColor: ACCENT }}
            >
              Book Your Consultation
              <ArrowIcon />
            </a>
            <a
              href="https://wa.me/917019643144"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 text-[13px] font-semibold transition-colors hover:bg-[#25D366]/10 sm:py-4 sm:text-sm"
              style={{ borderColor: "#25D366", color: "#128C4A" }}
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Center column: consultation form */}
        <div
          className="order-8 mt-8 scroll-mt-24 rounded-[24px] p-5 sm:order-none sm:mt-0 sm:rounded-[32px] sm:p-8 lg:col-span-4"
          style={{ backgroundColor: NAVY }}
          id="book-consultation"
        >
          <h2 className="text-center text-base font-bold leading-tight text-white sm:text-xl">
            Book Your Consultation
          </h2>

          <form
            name={FORM_SOURCE}
            className="mt-6 flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col gap-1.5">
              <span
                className="text-[11px] font-semibold uppercase tracking-wide sm:text-xs"
                style={{ color: PRIMARY }}
              >
                Full Name
              </span>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-[11px] text-white placeholder:text-[13px] placeholder:text-white/40 outline-none focus:border-white/40 sm:py-3 sm:text-sm sm:placeholder:text-sm"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span
                className="text-[11px] font-semibold uppercase tracking-wide sm:text-xs"
                style={{ color: PRIMARY }}
              >
                Phone Number
              </span>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 sm:py-3">
                <span className="text-xs text-white/60 sm:text-sm">+91</span>
                <span className="h-4 w-px bg-white/20" aria-hidden="true" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit number"
                  className="w-full rounded-full bg-transparent text-[11px] text-white placeholder:text-[13px] placeholder:text-white/40 outline-none sm:text-sm sm:placeholder:text-sm"
                />
              </div>
            </label>

            <label className="flex flex-col gap-1.5">
              <span
                className="text-[11px] font-semibold uppercase tracking-wide sm:text-xs"
                style={{ color: PRIMARY }}
              >
                Skin &amp; Hair Concern
              </span>
              <div className="relative">
                <select
                  name="concern"
                  defaultValue=""
                  className="hero-concern-select w-full appearance-none rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-[11px] text-white outline-none focus:border-white/40 sm:py-3 sm:text-sm"
                >
                  <option value="" disabled className="text-[#1F1F1F]">
                    Select your concern
                  </option>
                  {CONCERN_OPTIONS.map((concern) => (
                    <option key={concern} value={concern} className="text-[#1F1F1F]">
                      {concern}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                  <ChevronDownIcon />
                </span>
              </div>
            </label>

            {formError && (
              <p className="text-center text-[11px] font-medium text-red-400 sm:text-xs">
                {formError}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="hero-submit-button mt-2 whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:px-6 sm:py-4 sm:text-sm"
              style={{ backgroundColor: ACCENT }}
            >
              {submitting ? "Submitting..." : "Book Your Consultation"}
            </button>
          </form>
        </div>

        {/* Right column: layered dermatologist portrait */}
        <div className="order-3 mt-7 flex justify-center sm:order-none sm:mt-0 lg:col-span-3">
          <div className="relative h-[330px] w-full max-w-[280px] sm:h-[370px] sm:max-w-[300px]">
            <div
              className="absolute -right-5 top-8 h-[310px] w-[250px] rounded-t-full rounded-b-[2rem] border border-[#D96A3A]/30 bg-[#D96A3A]/20"
              aria-hidden="true"
            />

            <div className="absolute inset-x-3 top-0 h-[340px] overflow-hidden rounded-t-full rounded-b-[2rem] border-[7px] border-[#F8F5F1] bg-[#E8E2DA]">
              <img
                src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=90"
                alt="Dr. Sahana, dermatologist"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1F1F1F]/55 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-1/2 flex w-[230px] -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/70 bg-[#F8F5F1]/95 px-4 py-3 backdrop-blur">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C85A2A] text-sm font-bold text-white">
                DS
              </span>
              <div>
                <p className="hero-doctor-name text-sm font-bold text-[#1F1F1F]">Dr. Sahana</p>
                <p className="hero-doctor-qualification text-[11px] font-medium text-[#1F1F1F]/55">
                  MBBS, MD Dermatology
                </p>
              </div>
            </div>

            <span
              className="absolute left-0 top-20 h-14 w-14 rounded-full border-[10px] border-[#F8F5F1] bg-[#D96A3A]"
              aria-hidden="true"
            />
            <span
              className="absolute right-1 top-3 h-4 w-4 rounded-full bg-[#C85A2A]"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="order-7 relative left-1/2 right-1/2 -mx-[50vw] mt-5 w-screen overflow-hidden sm:hidden">
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_28px,black_calc(100%-28px),transparent)]">
            <div className="flex w-max animate-marquee items-center gap-7">
              {[...USPS, ...USPS].map((usp, index) => (
                <div
                  key={`${usp}-${index}`}
                  className="flex items-center gap-7 whitespace-nowrap"
                >
                  <span className="text-base font-bold tracking-tight text-[#1A1A1A]">
                    {usp}
                  </span>
                  <PulseIcon />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative left-1/2 right-1/2 -mx-[50vw] mt-4 hidden w-screen overflow-hidden sm:block">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_48px,black_calc(100%-48px),transparent)]">
          <div className="flex w-max animate-marquee items-center gap-10">
            {[...USPS, ...USPS].map((usp, i) => (
              <div key={i} className="flex items-center gap-10 whitespace-nowrap">
                <span className="capitalize text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-3xl">
                  {usp}
                </span>
                <PulseIcon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
