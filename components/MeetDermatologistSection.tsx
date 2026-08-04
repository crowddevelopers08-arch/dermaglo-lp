export default function MeetDermatologistSection() {
  return (
    <section id="doctor" className="scroll-mt-24 font-sans overflow-hidden bg-white px-4 py-8 sm:px-10 sm:py-20 lg:px-20 lg:py-10">
      <div className="mx-auto grid max-w-[1380px] items-center gap-0 sm:gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="order-4 relative mx-auto mt-6 h-[360px] w-full max-w-[590px] sm:order-1 sm:mt-0 sm:h-[610px]">
          <div className="absolute left-0 top-0 h-[78%] w-[72%] overflow-hidden rounded-[1.75rem] rounded-br-[5rem] border-[6px] border-white bg-[#eeeadd] sm:rounded-[2.5rem] sm:rounded-br-[8rem] sm:border-[10px]">
            <img
              src="/images/doctors.JPG"
              alt="Dr. Sahana"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="absolute bottom-0 right-0 h-[52%] w-[54%] overflow-hidden rounded-[1.5rem] rounded-tl-[4rem] border-[6px] border-white bg-[#eeeadd] sm:rounded-[2rem] sm:rounded-tl-[7rem] sm:border-[10px]">
            <img
              src="/images/clinic.JPG"
              alt="Dermatology consultation"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div
            className="absolute right-[3%] top-[13%] h-16 w-16 rounded-full bg-[#eeeadd] blur-sm sm:h-32 sm:w-32"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-[12%] left-[8%] h-3 w-3 rounded-full bg-[#eeeadd] sm:h-4 sm:w-4"
            aria-hidden="true"
          />
        </div>

        <div className="contents sm:order-2 sm:block">
          <div className="order-1 inline-flex w-fit items-center max-sm:gap-1 max-sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-black sm:gap-3 sm:text-xs">
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
            <span className="whitespace-nowrap">Meet Your Dermatologist</span>
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

          <h2 className="order-2 mt-3 text-2xl font-extrabold leading-tight text-[#1F1F1F] sm:mt-5 sm:text-4xl">
            Dr. Sahana
          </h2>

          <div className="order-3 mt-3 inline-flex w-fit rounded-full bg-black px-5 py-2.5 text-xs font-bold tracking-wide text-white sm:mt-4 sm:px-6 sm:py-3 sm:text-sm">
            MBBS, MD Dermatology
          </div>

          <div className="order-5 mt-5 border-l-3 border-[#eeeadd] pl-4 sm:mt-8 sm:border-l-4 sm:pl-6">
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

          <div className="order-6 mt-5 rounded-[1.25rem] bg-[#eeeadd] p-5 sm:mt-7 sm:rounded-[1.75rem] sm:p-8">
            <p className="text-sm font-medium leading-6 text-[#1F1F1F]/75 sm:text-base sm:leading-7">
              She believes in{" "}
              <span className="font-bold text-black">
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
