export default function MeetDermatologistSection() {
  return (
    <section id="doctor" className="scroll-mt-24 font-sans overflow-hidden bg-[#E8E2DA] px-4 py-8 sm:px-10 sm:py-20 lg:px-20 lg:py-10">
      <div className="mx-auto grid max-w-[1380px] items-center gap-0 sm:gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="order-4 relative mx-auto mt-6 h-[360px] w-full max-w-[590px] sm:order-1 sm:mt-0 sm:h-[610px]">
          <div className="absolute left-0 top-0 h-[78%] w-[72%] overflow-hidden rounded-[1.75rem] rounded-br-[5rem] border-[6px] border-white bg-[#E8E2DA] sm:rounded-[2.5rem] sm:rounded-br-[8rem] sm:border-[10px]">
            <img
              src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=1000&q=90"
              alt="Dr. Sahana"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="absolute bottom-0 right-0 h-[52%] w-[54%] overflow-hidden rounded-[1.5rem] rounded-tl-[4rem] border-[6px] border-white bg-[#E8E2DA] sm:rounded-[2rem] sm:rounded-tl-[7rem] sm:border-[10px]">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=90"
              alt="Dermatology consultation"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div
            className="absolute right-[13%] top-[7%] h-16 w-16 rounded-full bg-[#D96A3A]/35 blur-sm sm:h-32 sm:w-32"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-[12%] left-[8%] h-3 w-3 rounded-full bg-[#C85A2A] sm:h-4 sm:w-4"
            aria-hidden="true"
          />
        </div>

        <div className="contents sm:order-2 sm:block">
          <div className="order-1 inline-flex w-fit items-center max-sm:gap-1 max-sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#C85A2A] sm:gap-3 sm:text-xs">
            <span className="h-px w-4 bg-[#D96A3A]/65 sm:w-8" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 shrink-0 animate-[spin_4s_linear_infinite] text-[#D96A3A]"
              aria-hidden="true"
            >
              <path
                d="M12 2.75c.55 4.87 4.38 8.7 9.25 9.25-4.87.55-8.7 4.38-9.25 9.25C11.45 16.38 7.62 12.55 2.75 12 7.62 11.45 11.45 7.62 12 2.75Z"
                fill="currentColor"
              />
            </svg>
            <span className="whitespace-nowrap">Meet Your Dermatologist</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 shrink-0 animate-[spin_4s_linear_infinite] text-[#D96A3A]"
              aria-hidden="true"
            >
              <path
                d="M12 2.75c.55 4.87 4.38 8.7 9.25 9.25-4.87.55-8.7 4.38-9.25 9.25C11.45 16.38 7.62 12.55 2.75 12 7.62 11.45 11.45 7.62 12 2.75Z"
                fill="currentColor"
              />
            </svg>
            <span className="h-px w-4 bg-[#D96A3A]/65 sm:w-8" />
          </div>

          <h2 className="order-2 mt-3 text-2xl font-extrabold leading-tight text-[#1F1F1F] sm:mt-5 sm:text-4xl">
            Dr. Sahana
          </h2>

          <div className="order-3 mt-3 inline-flex w-fit rounded-full bg-gradient-to-r from-[#D96A3A] to-[#C85A2A] px-5 py-2.5 text-xs font-bold tracking-wide text-white sm:mt-4 sm:px-6 sm:py-3 sm:text-sm">
            MBBS, MD Dermatology
          </div>

          <div className="order-5 mt-5 border-l-3 border-[#D96A3A] pl-4 sm:mt-8 sm:border-l-4 sm:pl-6">
            <p className="text-sm leading-6 text-[#1F1F1F]/75 sm:text-base sm:leading-7">
              Dr Sahana is a qualified dermatologist dedicated to providing{" "}
              <span className="font-bold text-[#1F1F1F]">
                personalised care
              </span>{" "}
              for a wide range of skin and hair concerns. Her approach combines{" "}
              <span className="font-bold text-[#1F1F1F]">
                clinical expertise with advanced dermatological technologies
              </span>{" "}
              to create treatment plans that are safe, effective, and tailored
              to each patient&apos;s needs.
            </p>
          </div>

          <div className="order-6 mt-5 rounded-[1.25rem] bg-white p-5 sm:mt-7 sm:rounded-[1.75rem] sm:p-8">
            <p className="text-sm font-medium leading-6 text-[#1F1F1F]/75 sm:text-base sm:leading-7">
              She believes in{" "}
              <span className="font-bold text-[#C85A2A]">
                educating patients, setting realistic expectations, and
                delivering ethical, evidence-based care
              </span>{" "}
              that prioritises long-term skin and hair health
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
