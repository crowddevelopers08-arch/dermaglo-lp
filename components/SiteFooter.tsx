import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Meet Your Doctor", href: "/#doctor" },
  { label: "Clients Stories", href: "/#testimonials" },
  { label: "Book Consultation", href: "/#book-consultation" },
];


function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#25D366]" aria-hidden="true">
      <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.95 9.95 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2Zm5.8 14.2c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.05.25-3.5-.73-2.94-1.17-4.83-4.15-4.98-4.34-.14-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.6.83 2.06.9 2.2.07.15.12.32.02.51-.1.2-.15.32-.3.49-.15.17-.31.38-.44.5-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13.99 2.08 1.31 2.38 1.46.3.15.47.13.65-.08.18-.2.75-.87.96-1.17.2-.3.4-.24.65-.15.26.1 1.65.78 1.94.93.28.15.47.22.54.34.07.13.07.72-.19 1.4Z" />
    </svg>
  );
}

function InstagramIcon() {
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
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-black px-4 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 py-10 sm:py-12 md:grid-cols-[1.3fr_0.75fr_1fr] md:gap-12 lg:gap-20">
          <div>
            <Link href="/" className="relative block h-14 w-44 sm:h-16 sm:w-52 bg-white">
              <Image
                src="/logo-re.png"
                alt="DermaGlow Studio"
                fill
                sizes="(max-width: 639px) 176px, 208px"
                className="object-cover object-center"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/68">
              Personalised, dermatologist-led skin and hair care focused on
              safe treatments, realistic expectations, and natural-looking
              results.
            </p>

            <a
              href="https://www.instagram.com/dermaglow_studio_clinic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow DermaGlow Studio on Instagram"
              className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-opacity hover:opacity-90"
            >
              <InstagramIcon />
            </a>
          </div>

          <div>
            <h2 className="text-base font-extrabold text-white">
              Quick Links
            </h2>
            <div className="mt-3 h-0.5 w-10 bg-[#eeeadd]" />
            <nav className="mt-5" aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm md:grid-cols-1">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                    >
                      <span className="text-white">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="text-base font-extrabold text-white">
              Contact
            </h2>
            <div className="mt-3 h-0.5 w-10 bg-[#eeeadd]" />
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/70">
              <li>
                <a
                  href="tel:+917019643144"
                  className="flex gap-3 transition-colors hover:text-white"
                >
                  <span className="text-white">
                    <PhoneIcon />
                  </span>
                  <span>+91 70196 43144</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917019643144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 transition-colors hover:text-[#128C4A]"
                >
                  <span className="text-[#25D366]">
                     <WhatsAppIcon />
                  </span>
                  <span>WhatsApp: +91 70196 43144</span>
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-white">
                  <LocationIcon />
                </span>
                <span>
                  2nd Floor, 122, 9th Main Road, Near Nimishamba Temple, 1st
                  Phase, Remco BHEL Layout, Ideal Homes Township,
                  Rajarajeshwari Nagar, Bengaluru, Karnataka 560098
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-[#eeeadd]/25 py-4 text-center text-xs leading-5 text-white/60 sm:flex-row sm:text-left">
          <p>© 2026 Alpha Dental Studio. All Rights Reserved.</p>
          <Link
            href="/privacy-policy"
            className="font-semibold transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
