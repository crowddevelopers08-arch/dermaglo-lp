import Image from "next/image";
import Link from "next/link";

const policySections = [
  {
    title: "Information We Collect",
    content:
      "We may collect information you provide when booking a consultation or contacting us, including your name, phone number, email address, treatment concern, and any other details you choose to share.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to respond to enquiries, schedule consultations, provide requested services, share appointment updates, improve our website and patient experience, and meet applicable legal or regulatory requirements.",
  },
  {
    title: "How We Share Information",
    content:
      "We do not sell or rent your personal information. Information may be shared only with authorised team members, service providers who support our operations, or authorities when disclosure is required by law.",
  },
  {
    title: "Data Security",
    content:
      "We use reasonable administrative and technical safeguards to protect the information provided to us. However, no internet transmission or electronic storage method can be guaranteed to be completely secure.",
  },
  {
    title: "Cookies and Website Data",
    content:
      "Our website may use essential cookies and basic analytics to understand website usage and improve performance. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "Your Choices",
    content:
      "You may ask us to review, correct, or delete the personal information you have provided, subject to applicable legal and medical record-keeping requirements. You may also opt out of promotional communication at any time.",
  },
  {
    title: "Policy Updates",
    content:
      "We may update this Privacy Policy when our practices or legal requirements change. The latest version will always be published on this page with its effective date.",
  },
];

function SparkleLabel() {
  return (
    <div className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C85A2A] sm:gap-3 sm:text-xs">
      <span className="h-px w-4 bg-[#D96A3A]/65 sm:w-8" />
      <span className="text-base text-[#D96A3A]" aria-hidden="true">
        ✦
      </span>
      <span>Legal Information</span>
      <span className="text-base text-[#D96A3A]" aria-hidden="true">
        ✦
      </span>
      <span className="h-px w-4 bg-[#D96A3A]/65 sm:w-8" />
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F1] text-[#1F1F1F]">
      <header className="border-b border-[#D96A3A]/20 px-4 py-4 sm:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="relative h-12 w-36 sm:h-14 sm:w-44">
            <Image
              src="/logo-re.png"
              alt="DermaGlow Studio"
              fill
              sizes="(max-width: 639px) 144px, 176px"
              className="object-cover object-center"
              priority
            />
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[#D96A3A]/40 px-4 py-2 text-xs font-bold text-[#C85A2A] transition-colors hover:bg-[#D96A3A] hover:text-white sm:px-5 sm:text-sm"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <section className="bg-[#E8E2DA] px-4 py-12 text-center sm:px-10 sm:py-16">
        <SparkleLabel />
        <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
          Privacy <span className="text-[#C85A2A]">Policy</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#1F1F1F]/70 sm:text-base sm:leading-7">
          This policy explains how DermaGlow Studio collects, uses, and
          protects information shared through our website and consultation
          enquiries.
        </p>
      </section>

      <section className="px-4 py-10 sm:px-10 sm:py-14">
        <div className="mx-auto max-w-4xl space-y-4">
          {policySections.map((section, index) => (
            <article
              key={section.title}
              className="rounded-2xl border border-[#D96A3A]/20 bg-white p-5 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8E2DA] text-xs font-extrabold text-[#C85A2A]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-lg font-extrabold sm:text-xl">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#1F1F1F]/70 sm:text-base sm:leading-7">
                    {section.content}
                  </p>
                </div>
              </div>
            </article>
          ))}

          <article className="rounded-2xl bg-[#1F1F1F] p-6 text-white sm:p-8">
            <h2 className="text-xl font-extrabold">Contact Us</h2>
            <p className="mt-3 text-sm leading-6 text-white/75 sm:text-base">
              For privacy-related questions, contact DermaGlow Studio at{" "}
              <a
                href="tel:+917019643144"
                className="font-bold text-[#D96A3A]"
              >
                7019643144
              </a>
              .
            </p>
            <p className="mt-2 text-sm leading-6 text-white/75">
              2nd Floor, 122, 9th Main Road, Near Nimishamba Temple, 1st Phase,
              Remco BHEL Layout, Ideal Homes Township, Rajarajeshwari Nagar,
              Bengaluru, Karnataka 560098
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
