"use client";

import Image from "next/image";
import Link from "next/link";

const PRIMARY = "#D96A3A";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export default function DermaGlowNavbars() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#E8E2DA] bg-[#F8F5F1]">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:min-h-0 sm:gap-3 sm:px-10 sm:py-3 lg:px-16">
        <Link
          href="/"
          className="relative h-14 w-[clamp(128px,42vw,170px)] shrink-0 sm:w-44"
        >
          <Image
            src="/logo-re.png"
            alt="DermaGlow Studio by Dr. Sahana Karthik — Skin Clinic, Aesthetics and Wellness"
            fill
            sizes="(max-width: 639px) 190px, 176px"
            className="object-cover object-center"
            priority
          />
        </Link>

        <a
          href="tel:+917019643144"
          className="flex h-12 min-w-0 shrink items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 text-xs font-bold text-white transition-opacity hover:opacity-90 sm:h-auto sm:shrink-0 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
          style={{ backgroundColor: PRIMARY }}
          aria-label="Call DermaGlow Studio at +91 70196 43144"
        >
          <span className="flex shrink-0 justify-center">
            <PhoneIcon />
          </span>
          <span>+91 70196 43144</span>
        </a>
      </div>
    </header>
  );
}
