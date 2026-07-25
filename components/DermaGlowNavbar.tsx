"use client";

import Image from "next/image";
import { useState } from "react";

const PRIMARY = "#D96A3A";

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Meet Your Doctor", href: "/#doctor" },
  { label: "Clients Stories", href: "/#testimonials" },
];

export default function DermaGlowNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[#E8E2DA] bg-[#F8F5F1]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-10 lg:px-16">
        {/* Left: logo */}
        <a href="/" className="relative h-12 w-36 shrink-0 sm:h-14 sm:w-44">
          <Image
            src="/logo-re.png"
            alt="Dermaglow Studio by Dr. Sahana Karthik — Skin Clinic, Aesthetics & Wellness"
            fill
            sizes="176px"
            className="object-cover object-center"
            loading="eager"
          />
        </a>

        {/* Center: nav links */}
        <ul className="hidden items-center gap-9 text-sm font-medium text-[#1F1F1F] lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-colors hover:text-[#C85A2A]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+917019643144"
            className="hidden items-center gap-2 whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:inline-flex"
            style={{ backgroundColor: PRIMARY }}
          >
            <PhoneIcon />
            <span>+91 70196 43144</span>
          </a>

          <button
            className="rounded text-[#1F1F1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96A3A] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#E8E2DA] px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1 text-sm font-medium text-[#1F1F1F]">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="block py-2">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#book-consultation"
            className="mt-3 block rounded-full px-6 py-2.5 text-center text-sm font-semibold text-white"
            style={{ backgroundColor: PRIMARY }}
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
}
