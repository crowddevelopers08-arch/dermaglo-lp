function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#25D366]" aria-hidden="true">
      <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.95 9.95 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2Zm5.8 14.2c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.05.25-3.5-.73-2.94-1.17-4.83-4.15-4.98-4.34-.14-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.6.83 2.06.9 2.2.07.15.12.32.02.51-.1.2-.15.32-.3.49-.15.17-.31.38-.44.5-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13.99 2.08 1.31 2.38 1.46.3.15.47.13.65-.08.18-.2.75-.87.96-1.17.2-.3.4-.24.65-.15.26.1 1.65.78 1.94.93.28.15.47.22.54.34.07.13.07.72-.19 1.4Z" />
    </svg>
  );
}

export default function CaregiverHeroSection() {
  return (
    <section className="font-sans relative min-h-[320px] overflow-hidden bg-[#1F1F1F] sm:min-h-[380px]">
      <img
        src="/images/clinix.jpg"
        alt="Caregiver supporting an elderly woman"
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto flex min-h-[320px] max-w-[1300px] flex-col items-center justify-center px-4 py-8 text-center text-white sm:min-h-[370px] sm:px-6 sm:py-10">
        <div className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white sm:gap-3 sm:text-xs">
          <span className="h-px w-4 bg-white/70 sm:w-8" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 shrink-0 animate-[spin_4s_linear_infinite] text-white"
            aria-hidden="true"
          >
            <path
              d="M12 2.75c.55 4.87 4.38 8.7 9.25 9.25-4.87.55-8.7 4.38-9.25 9.25C11.45 16.38 7.62 12.55 2.75 12 7.62 11.45 11.45 7.62 12 2.75Z"
              fill="currentColor"
            />
          </svg>
          <span className="whitespace-nowrap">DermaGlow Studio</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 shrink-0 animate-[spin_4s_linear_infinite] text-white"
            aria-hidden="true"
          >
            <path
              d="M12 2.75c.55 4.87 4.38 8.7 9.25 9.25-4.87.55-8.7 4.38-9.25 9.25C11.45 16.38 7.62 12.55 2.75 12 7.62 11.45 11.45 7.62 12 2.75Z"
              fill="currentColor"
            />
          </svg>
          <span className="h-px w-4 bg-white/70 sm:w-8" />
        </div>

        <h2 className="mt-3 max-w-[340px] text-2xl font-extrabold leading-[1.15] tracking-tight sm:mt-4 sm:max-w-none sm:text-4xl">
          Begin Your Journey Towards Healthier Skin &amp; Hair
        </h2>

        <p className="mt-5 max-w-[350px] text-xs font-medium leading-5 text-white/90 sm:mt-7 sm:max-w-4xl sm:text-base sm:leading-6">
          2nd Floor, 122, 9th Main Road, Near Nimishamba Temple, 1st Phase,
          Remco BHEL Layout, Ideal Homes Township, Rajarajeshwari Nagar,
          Bengaluru, Karnataka 560098
        </p>

        <div className="mt-6 flex w-full max-w-[330px] flex-col items-stretch justify-center gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:items-center">
          <a
            href="#book-consultation"
            className="wave-btn relative inline-flex min-h-12 items-center justify-center rounded-full bg-black px-6 text-center text-xs font-bold text-white transition-opacity hover:opacity-90 sm:min-h-[48px] sm:text-sm"
          >
            Book Your Consultation Today
          </a>
          <a
            href="tel:+917019643144"
            className="wave-btn relative inline-flex min-h-12 items-center justify-center rounded-full border border-black bg-black px-6 text-center text-xs font-bold text-white transition-opacity hover:opacity-90 sm:min-h-[48px] sm:text-sm"
          >
            Call Now
          </a>
            <a
              href="https://wa.me/917019643144"
              target="_blank"
              rel="noopener noreferrer"
              className="wave-btn relative inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] px-7 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#25D366]/10 sm:py-3 sm:text-sm"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
        </div>
      </div>
    </section>
  );
}
