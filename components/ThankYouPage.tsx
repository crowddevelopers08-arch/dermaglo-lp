import Link from "next/link";
import DermaGlowNavbars from "./thank-nav";

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <DermaGlowNavbars />
      <main className="flex flex-1 items-center justify-center px-4 py-10 text-[#1F1F1F]">
        <section className="w-full max-w-2xl rounded-[2rem] border border-[#eeeadd] bg-[#eeeadd] px-5 py-9 text-center sm:px-12 sm:py-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white sm:h-20 sm:w-20">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 sm:h-10 sm:w-10"
            aria-hidden="true"
          >
            <path d="m5 12 4 4L19 6" />
          </svg>
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-black">
          Enquiry Received
        </p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">
          Thank You!
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#1F1F1F]/70 sm:text-base sm:leading-7">
          Your consultation request has been received. Our DermaGlow Studio
          team will contact you shortly.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-3">
          <Link
            href="/"
            className="wave-btn relative inline-flex min-h-12 items-center justify-center rounded-full bg-black px-3 text-xs font-bold text-white transition-colors hover:opacity-90 sm:px-5 sm:text-sm"
          >
            Back to Home
          </Link>
          <a
            href="tel:+917019643144"
            className="wave-btn relative inline-flex min-h-12 flex-col items-center justify-center rounded-full border border-black px-3 text-xs font-bold leading-4 text-black transition-colors hover:bg-black hover:text-white sm:flex-row sm:gap-1.5 sm:px-5 sm:text-sm"
          >
            <span>Call Now</span>
            <span>7019643144</span>
          </a>
          <a
            href="https://wa.me/917019643144"
            target="_blank"
            rel="noopener noreferrer"
            className="wave-btn relative col-span-2 inline-flex min-h-12 items-center justify-center rounded-full border border-[#25D366] px-5 text-sm font-bold text-[#128C4A] transition-colors hover:bg-[#25D366] hover:text-white sm:mx-auto sm:w-full sm:max-w-xs"
          >
            WhatsApp Us
          </a>
        </div>
        </section>
      </main>
    </div>
  );
}
