"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FadeIn from "./scrollanimate";

const CARDS = [
  {
    id: 1,
    tag: "Skin Brightening",
    name: "Glutathione Glow Drip",
    desc: "IV glutathione infusion that fades pigmentation and delivers a luminous, even-toned complexion from within.",
    stat: "Visible glow from session 1",
    tagColor: "#D96A3A",
    tagBg: "rgba(217,106,58,0.14)",
    tagBorder: "rgba(217,106,58,0.4)",
    image: "https://ik.imagekit.io/meafuhrp0/public/before5.jpg?updatedAt=1773322231367",
  },
  {
    id: 2,
    tag: "Anti-Ageing",
    name: "Laser Hair Removal",
    desc: "LHR reduces unwanted hair growth, giving smoother skin with fewer ingrown hairs and less need for shaving or waxing.",
    stat: "Results last 6–12 months",
    tagColor: "#D96A3A",
    tagBg: "rgba(217,106,58,0.14)",
    tagBorder: "rgba(217,106,58,0.4)",
    image: "/images/image-2.jpg",
  },
  {
    id: 3,
    tag: "Acne & Scars",
    name: "Chemical Peel",
    desc: "Hollywood peel that deep-cleanses pores, reduces active acne, and significantly lightens post-acne marks.",
    stat: "Zero downtime treatment",
    tagColor: "#D96A3A",
    tagBg: "rgba(217,106,58,0.14)",
    tagBorder: "rgba(217,106,58,0.4)",
    image: "https://ik.imagekit.io/meafuhrp0/public/peels.png?updatedAt=1773322250030",
  },
  {
    id: 4,
    tag: "Skin Tightening",
    name: "HIFU",
    desc: "High-intensity focused ultrasound that stimulates deep collagen production for a non-surgical face lift.",
    stat: "Lifts & firms in 1 session",
    tagColor: "#D96A3A",
    tagBg: "rgba(217,106,58,0.14)",
    tagBorder: "rgba(217,106,58,0.4)",
    image: "https://ik.imagekit.io/meafuhrp0/public/BA-Template-3-5.jpg?updatedAt=1773322231157",
  },
];

export default function BeforeAfterSection() {
  const [current, setCurrent] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = CARDS.length;

  const go = (idx: number) => setCurrent((idx + total) % total);

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setCurrent((p) => (p + 1) % total), 4000);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => setCurrent((p) => (p + 1) % total), 4000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [total]);

  const prev = () => { go(current - 1); resetAuto(); };
  const next = () => { go(current + 1); resetAuto(); };

  const visible = [
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ];

  return (
    <>
      <style>{`
        .ba-wrap { font-family: var(--font-onest), Arial, Helvetica, sans-serif; }

        .ba-eyebrow-line-l { height:1px; width:60px; background:linear-gradient(90deg,transparent,#D96A3A); }
        .ba-eyebrow-line-r { height:1px; width:60px; background:linear-gradient(90deg,#D96A3A,transparent); }

        .ba-italic-teal {
          font-family: var(--font-onest), Arial, Helvetica, sans-serif;
          font-style: normal;
          font-weight: 800;
          background: linear-gradient(90deg, #D96A3A, #C85A2A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ba-card-anim { transition: all 0.45s cubic-bezier(0.4,0,0.2,1); }

        .ba-line-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes baShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        @media (max-width: 860px) {
          .ba-side { display: none !important; }
          .ba-center { width: 100% !important; max-width: 360px !important; }
        }

        @media (max-width: 580px) {
          .ba-side { display: none !important; }
          .ba-center {
            width: calc(100vw - 48px) !important;
            max-width: 100% !important;
            height: 460px !important;
          }
          .ba-cards-container {
            min-height: 460px !important;
          }
          .ba-title-block { margin-bottom: 24px !important; }
          .ba-wrap { padding-top: 24px !important; padding-bottom: 24px !important; }
          .ba-arrow-side { display: none !important; }
          .ba-bottom-nav { display: flex !important; }
        }
      `}</style>

      <section className="ba-wrap max-sm:py-5 py-10" style={{ background: "#E8E2DA" }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* ── TITLE BLOCK ── */}
          <FadeIn direction="up">
          <div className="ba-title-block text-center mb-8">
            <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C85A2A] sm:gap-3 sm:text-xs">
              <span className="h-px w-4 bg-[#D96A3A]/65 sm:w-8" />
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 animate-[spin_4s_linear_infinite] text-[#D96A3A]" aria-hidden="true">
                <path d="M12 2.75c.55 4.87 4.38 8.7 9.25 9.25-4.87.55-8.7 4.38-9.25 9.25C11.45 16.38 7.62 12.55 2.75 12 7.62 11.45 11.45 7.62 12 2.75Z" fill="currentColor" />
              </svg>
              <span className="whitespace-nowrap">Transformation Gallery</span>
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 animate-[spin_4s_linear_infinite] text-[#D96A3A]" aria-hidden="true">
                <path d="M12 2.75c.55 4.87 4.38 8.7 9.25 9.25-4.87.55-8.7 4.38-9.25 9.25C11.45 16.38 7.62 12.55 2.75 12 7.62 11.45 11.45 7.62 12 2.75Z" fill="currentColor" />
              </svg>
              <span className="h-px w-4 bg-[#D96A3A]/65 sm:w-8" />
            </div>
            <h2 style={{ fontSize:"clamp(28px,4vw,40px)", fontWeight:800, color:"#1F1F1F", lineHeight:1.15, margin:"0 0 4px", letterSpacing:"-0.3px" }}>
              Real Patients.{" "}
              <span className="ba-italic-teal">Real Results.</span>
            </h2>
            <p style={{ fontSize:"14px", color:"rgba(31,31,31,0.7)", maxWidth:"720px", margin:"0 auto", lineHeight:1.7, fontWeight:400 }}>
              Every transformation tells a unique story. Our gallery features
              authentic patient results achieved through personalised treatment
              plans and dermatologist-led care.
            </p>
          </div>
          </FadeIn>

          {/* ── CAROUSEL ── */}
          <FadeIn direction="up" delay={180}>
          <div className="mb-4">
            <div className="flex items-center gap-3">

              {/* Prev */}
              <button
                onClick={prev}
                aria-label="Previous"
                className="ba-arrow-side w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
                style={{ background:"rgba(0,0,0,0.05)", border:"1px solid rgba(0,0,0,0.12)", color:"#444", transition:"all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background="rgba(217,106,58,0.12)"; e.currentTarget.style.borderColor="rgba(200,90,42,0.5)"; e.currentTarget.style.color="#C85A2A"; }}
                onMouseLeave={e => { e.currentTarget.style.background="rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor="rgba(0,0,0,0.12)"; e.currentTarget.style.color="#444"; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Cards */}
              <div className="ba-cards-container flex-1 flex items-center justify-center gap-5" style={{ perspective:"1200px", minHeight:"540px", width:"100%" }}>
                {visible.map((cardIdx, position) => {
                  const card = CARDS[cardIdx];
                  const isCenter = position === 1;
                  return (
                    <div
                      key={`${card.id}-${position}`}
                      className={`ba-card-anim relative rounded-3xl overflow-hidden flex-shrink-0 cursor-pointer ${isCenter ? "ba-center" : "ba-side"}`}
                      style={isCenter ? {
                        width: "420px", height: "540px",
                        transform: "scale(1) translateZ(0)",
                        border: "1px solid rgba(217,106,58,0.45)",
                        zIndex: 2,
                      } : {
                        width: "330px", height: "460px",
                        transform: "scale(0.92)",
                        opacity: 0.55,
                        zIndex: 1,
                        border: "1px solid rgba(0,0,0,0.08)",
                      }}
                      onClick={() => { if (!isCenter) { go(cardIdx); resetAuto(); } }}
                    >
                      {/* Image */}
                      <div className="absolute inset-0">
                        <Image src={card.image} alt={`Treatment ${card.id}`} fill style={{ objectFit:"cover" }} />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom, transparent 30%, rgba(5,5,5,0.5) 60%, rgba(5,5,5,0.95) 100%)" }} />

                      {/* Body */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div
                          className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border mb-2.5"
                          style={{ color:card.tagColor, background:card.tagBg, borderColor:card.tagBorder }}
                        >
                          <span style={{ width:5, height:5, background:card.tagColor, borderRadius:"50%", display:"inline-block", flexShrink:0 }} />
                          {card.tag}
                        </div>
                        <div className="text-xl font-bold text-white mb-2 tracking-tight">{card.name}</div>
                        {isCenter && (
                          <p className="ba-line-clamp text-[12.5px] leading-relaxed mb-3" style={{ color:"rgba(255,255,255,0.6)" }}>
                            {card.desc}
                          </p>
                        )}
                        <div
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
                          style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.85)" }}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M9 11l3 3 9-9" stroke="#D96A3A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {card.stat}
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Next */}
              <button
                onClick={next}
                aria-label="Next"
                className="ba-arrow-side w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
                style={{ background:"rgba(0,0,0,0.05)", border:"1px solid rgba(0,0,0,0.12)", color:"#444", transition:"all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background="rgba(217,106,58,0.12)"; e.currentTarget.style.borderColor="rgba(200,90,42,0.5)"; e.currentTarget.style.color="#C85A2A"; }}
                onMouseLeave={e => { e.currentTarget.style.background="rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor="rgba(0,0,0,0.12)"; e.currentTarget.style.color="#444"; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Dots — desktop */}
            <div className="flex justify-center items-center gap-2 mt-6 max-sm:hidden">
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { go(i); resetAuto(); }}
                  aria-label={`Slide ${i + 1}`}
                  className="border-none cursor-pointer p-0 rounded-full transition-all duration-300"
                  style={{
                    height: "8px",
                    width: i === current ? "24px" : "8px",
                    borderRadius: i === current ? "4px" : "50%",
                    background: i === current ? "#C85A2A" : "rgba(31,31,31,0.18)",
                  }}
                />
              ))}
            </div>

            {/* Bottom nav — mobile only (arrows + dots together) */}
            <div className="ba-bottom-nav" style={{ display:"none", alignItems:"center", justifyContent:"center", gap:"12px", marginTop:"16px" }}>
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
                style={{ background:"rgba(0,0,0,0.05)", border:"1px solid rgba(0,0,0,0.12)", color:"#444" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { go(i); resetAuto(); }}
                  aria-label={`Slide ${i + 1}`}
                  className="border-none cursor-pointer p-0 rounded-full transition-all duration-300"
                  style={{
                    height: "8px",
                    width: i === current ? "24px" : "8px",
                    borderRadius: i === current ? "4px" : "50%",
                    background: i === current ? "#C85A2A" : "rgba(31,31,31,0.18)",
                  }}
                />
              ))}
              <button
                onClick={next}
                aria-label="Next"
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
                style={{ background:"rgba(0,0,0,0.05)", border:"1px solid rgba(0,0,0,0.12)", color:"#444" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          </FadeIn>

        </div>
      </section>
    </>
  );
}
