"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "Your dermatologist will first identify the cause of your concern before recommending a personalised treatment plan.",
  },
  {
    question: "Are your treatments safe?",
    answer:
      "Yes. All procedures are performed under the supervision of a dermatologist using advanced technologies and evidence-based treatment protocols.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions depends on your concern, its severity, and your personalised treatment plan.",
  },
  {
    question: "Do you treat both men and women?",
    answer:
      "Yes. We provide customised skin and hair treatments for both men and women.",
  },
  {
    question: "Will I receive follow-up care?",
    answer:
      "Absolutely. We provide aftercare guidance and scheduled follow-ups to monitor your progress and support your results.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

export default function FrequentlyAskedQuestionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white px-4 py-8 sm:px-10 sm:py-16 lg:px-20 lg:py-10">
      <div className="mx-auto grid max-w-[1215px] gap-8 sm:gap-14 lg:grid-cols-[456px_1fr] lg:gap-[100px]">
        <div>
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
            <span className="whitespace-nowrap">Asked Question</span>
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

          <h2 className="mt-5 text-3xl font-extrabold leading-[1.2] text-[#1F1F1F] sm:mt-4 sm:text-4xl">
            Frequently Asked{" "}
            <span className="relative inline-block px-2 text-black">
              <span className="absolute inset-x-0 bottom-0 h-[38%] rounded-sm" />
              <span className="relative">Questions</span>
            </span>
          </h2>

          <div className="group relative mt-5 h-[280px] overflow-hidden rounded-[15px] sm:mt-6 sm:h-[360px] sm:rounded-[18px]">
            <img
              src="/images/faq.jpg"
              alt="Medical team answering a patient's questions"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#1F1F1F]/25" />
            <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/90 to-transparent" />

            <div className="absolute inset-x-5 bottom-4 flex flex-col items-center text-center sm:inset-x-8 sm:bottom-5">
              <p className="text-base leading-[1.35] text-white sm:text-lg">
                Have Any Question
                <br />
                on Your Minds?
              </p>
              <a
                href="#book-consultation"
                className="wave-btn relative mt-4 inline-flex h-10 items-center gap-3 rounded-full bg-black pl-5 pr-1.5 text-xs font-semibold text-white transition-colors hover:opacity-90 sm:mt-7 sm:h-12 sm:gap-5 sm:pl-7 sm:pr-2 sm:text-sm"
              >
                Get in Touch
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-base text-[#1F1F1F] sm:h-9 sm:w-9 sm:text-xl">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="self-start rounded-[16px] border border-[#eeeadd] px-4 py-2 sm:mt-18 sm:rounded-[20px] sm:px-12 sm:py-8">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#eeeadd] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 py-4 text-left text-sm font-medium leading-6 text-[#1F1F1F] sm:gap-6 sm:py-5 sm:text-base sm:leading-7"
                >
                  <span>
                    {index + 1}. {faq.question}
                  </span>
                  <span className="shrink-0">
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[590px] pb-5 text-sm leading-7 text-[#1F1F1F]/60 sm:pb-7 sm:leading-[1.9]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
