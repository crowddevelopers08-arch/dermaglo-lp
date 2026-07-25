'use client';

import { useState } from 'react';
import Image from 'next/image';

const RATINGS = ['Terrible', 'Poor', 'Okay', 'Good', 'Excellent'];
const EMOJIS = ['😞', '😟', '😐', '😊', '🤩'];

const GOOGLE_REVIEW_URL =
  'https://g.page/r/CVsEvRLly08iEBM/review';

function wordCount(str: string) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

export default function ReviewPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [callback, setCallback] = useState(true);
  const [message, setMessage] = useState('');
  const [msgError, setMsgError] = useState('');

  function handleStar(index: number) {
    setSelected(index + 1);
    setTimeout(() => setSubmitted(true), 600);
  }

  function handleChange() {
    setSubmitted(false);
    setFormDone(false);
    setMsgError('');
  }

  async function handleFeedbackSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (wordCount(message) < 5) {
      setMsgError('Your message is too short. Please add a few more words.');
      return;
    }
    setMsgError('');
    setLoading(true);

    try {
      await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'Review Page',
          name,
          phone,
          concern: `${message} | Rating: ${selected}/5 | Callback: ${callback ? 'Yes' : 'No'}`,
          pageUrl: window.location.href,
        }),
      });
    } catch {
      // still show success to user even if network fails
    }

    setLoading(false);
    window.location.href = GOOGLE_REVIEW_URL;
  }

  const isLowRating = selected !== null && selected <= 3;

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#c85a2a] px-4 py-8">

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #c85a2a88 0%, transparent 70%)' }}
      />

      <div className="relative w-full max-w-md bg-white rounded-[28px] shadow-[0_24px_72px_rgba(0,0,0,0.35)] px-8 py-10 flex flex-col items-center gap-5">

        {/* <div className="absolute top-0 left-10 right-10 h-[3px] rounded-full bg-[#c85a2a]" /> */}

        {/* Header */}
        <div className="relative h-20 w-64 pt-2">
          <Image
            src="/images/logo.png"
            alt="DermaGlow Studio by Dr. Sahana Karthik — Skin Clinic, Aesthetics and Wellness"
            fill
            sizes="256px"
            className="object-contain object-center"
            priority
          />
        </div>

        <div className="w-10 h-px bg-[#c85a2a]/40" />

        {/* ── SCREEN 1: Star rating ── */}
        {!submitted && (
          <>
            <div className="w-16 h-16 rounded-2xl bg-[#c85a2a]/5 border border-[#c85a2a]/20 flex items-center justify-center">
              <span className="text-3xl">{selected ? EMOJIS[selected - 1] : '😌'}</span>
            </div>

            <div className="text-center">
              <h2 className="text-[22px] font-black text-[#c85a2a] tracking-tight">How was your experience?</h2>
              <p className="text-[#c85a2a]/80 text-[15px] mt-1 leading-relaxed">
                Please rate your visit. Your feedback<br />helps us improve our care.
              </p>
            </div>

            <div className="flex gap-2.5">
              {RATINGS.map((label, i) => {
                const filled = selected !== null && i < selected;
                return (
                  <button
                    key={i}
                    onClick={() => handleStar(i)}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-[22px] transition-all duration-200 active:scale-90 ${
                      filled
                        ? 'bg-[#c85a2a] text-white shadow-lg shadow-[#c85a2a]/25'
                        : 'bg-[#c85a2a]/5 border border-[#c85a2a]/10 text-[#c85a2a]/25 hover:border-[#c85a2a]/40 hover:text-[#c85a2a]/60'
                    }`}
                    aria-label={label}
                  >
                    ★
                  </button>
                );
              })}
            </div>

            <p className="text-[13px] font-bold text-[#c85a2a] tracking-wide min-h-[18px] uppercase">
              {selected ? RATINGS[selected - 1] : 'Select your rating'}
            </p>
          </>
        )}

        {/* ── SCREEN 2A: Low rating (1–3) → feedback form ── */}
        {submitted && isLowRating && !formDone && (
          <>
            <div className="w-16 h-16 rounded-2xl bg-[#c85a2a]/5 border border-[#c85a2a]/20 flex items-center justify-center">
              <span className="text-3xl">💬</span>
            </div>

            <div className="text-center">
              <h2 className="text-[22px] font-black text-[#c85a2a] tracking-tight">Tell us how we can improve</h2>
              <p className="text-[#c85a2a] text-[14px] mt-1 leading-relaxed">
                We're sorry your experience was not perfect.<br />Please share your concern with us.
              </p>
            </div>

            <form onSubmit={handleFeedbackSubmit} className="w-full flex flex-col gap-4">

              <div className="flex max-sm:flex-col gap-3">
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-[#c85a2a] uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full min-w-0 border border-[#c85a2a]/15 rounded-xl px-3 py-2.5 text-[13px] text-black placeholder-[#c85a2a]/70 outline-none focus:border-[#c85a2a] transition"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-[#c85a2a] uppercase tracking-wide">Phone</label>
                  <div className="flex min-w-0 border border-[#c85a2a]/15 rounded-xl overflow-hidden focus-within:border-[#c85a2a] transition">
                    <span className="bg-[#c85a2a]/5 px-3 flex items-center text-[13px] font-semibold text-[#c85a2a]/60 border-r border-[#c85a2a]/10">+91</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="10-digit"
                      maxLength={10}
                      required
                      className="flex-1 min-w-0 px-3 py-2.5 text-[13px] text-black placeholder-[#c85a2a]/70 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-[#c85a2a] uppercase tracking-wide">Request a Callback?</label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setCallback(true)}
                    className={`flex-1 py-2.5 rounded-xl text-[13px] font-bold transition-all ${
                      callback ? 'bg-[#c85a2a] text-white' : 'bg-[#c85a2a]/5 border border-[#c85a2a]/10 text-[#c85a2a]/50'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setCallback(false)}
                    className={`flex-1 py-2.5 rounded-xl text-[13px] font-bold transition-all ${
                      !callback ? 'bg-[#c85a2a] text-white' : 'bg-[#c85a2a]/5 border border-[#c85a2a]/10 text-[#c85a2a]/50'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-[#c85a2a] uppercase tracking-wide">Message</label>
                <textarea
                  value={message}
                  onChange={e => { setMessage(e.target.value); if (msgError) setMsgError(''); }}
                  placeholder="Write your message here"
                  rows={4}
                  className={`w-full border rounded-xl px-3 py-2.5 text-[14px] text-black placeholder-[#c85a2a]/70 outline-none transition resize-none ${
                    msgError ? 'border-red-400 focus:border-red-400' : 'border-[#c85a2a]/15 focus:border-[#c85a2a]'
                  }`}
                />
                {msgError && (
                  <p className="text-red-500 text-[12px] mt-0.5">{msgError}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c85a2a] text-white font-black py-3.5 rounded-xl text-[13px] tracking-[0.12em] uppercase transition-all hover:opacity-90 active:scale-95 disabled:opacity-60"
              >
                {loading ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>

            <button onClick={handleChange} className="text-[#c85a2a]/80 text-[15px] tracking-wide hover:text-[#c85a2a] transition-colors">
              Change rating
            </button>
          </>
        )}

        {/* ── SCREEN 2B: High rating (4–5) → thank you + Google ── */}
        {submitted && !isLowRating && (
          <>
            <div className="w-16 h-16 rounded-2xl bg-[#c85a2a]/5 border border-[#c85a2a]/20 flex items-center justify-center">
              <span className="text-3xl">🎉</span>
            </div>

            <div className="text-center">
              <h2 className="text-[25px] font-black text-[#c85a2a] tracking-tight">Thank you for your feedback!</h2>
              <p className="text-[#c85a2a]/80 text-[15px] mt-1 leading-relaxed">
                We're glad you had a great experience.<br />Please share it with us.
              </p>
            </div>

            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between bg-[#c85a2a] text-white rounded-xl px-4 py-3.5 hover:opacity-90 transition-all duration-200 active:scale-95 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                  <span className="text-[16px]">★</span>
                </div>
                <div>
                  <p className="font-bold text-[17px] tracking-wide">Share Your Experience</p>
                  <p className="text-[13px] opacity-60">Continue to Google Reviews</p>
                </div>
              </div>
              <span className="text-[18px] font-light">→</span>
            </a>

            <button onClick={handleChange} className="text-[#c85a2a]/80 text-[15px] tracking-wide hover:text-[#c85a2a] transition-colors">
              Change rating
            </button>
          </>
        )}

        {/* ── SCREEN 3: After low rating form submitted ── */}
        {formDone && (
          <>
            <div className="w-16 h-16 rounded-2xl bg-[#c85a2a]/5 border border-[#c85a2a]/20 flex items-center justify-center">
              <span className="text-3xl">🙏</span>
            </div>
            <div className="text-center">
              <h2 className="text-[20px] font-black text-[#c85a2a] tracking-tight">Thank you for your feedback!</h2>
              <p className="text-[#c85a2a]/80 text-[13px] mt-1 leading-relaxed">
                We appreciate your honesty and<br />will work to improve.
              </p>
            </div>
          </>
        )}

      </div>
    </main>
  );
}
