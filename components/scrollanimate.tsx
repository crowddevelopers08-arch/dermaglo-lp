"use client";

import { CSSProperties, ReactNode, useEffect, useRef } from "react";

export type FadeDirection = "up" | "down" | "left" | "right" | "fade";

interface FadeInProps {
  children: ReactNode;
  direction?: FadeDirection;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
  staggerSelector?: string;
}

const INITIAL_TRANSFORM: Record<FadeDirection, string> = {
  up: "translate3d(0, 36px, 0)",
  down: "translate3d(0, -36px, 0)",
  left: "translate3d(42px, 0, 0)",
  right: "translate3d(-42px, 0, 0)",
  fade: "translate3d(0, 0, 0)",
};

const DEFAULT_STAGGER_SELECTOR =
  "h1, h2, h3, p, img, form, article, a, button";

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 850,
  className = "",
  style = {},
  threshold = 0.08,
  staggerChildren = false,
  staggerDelay = 120,
  staggerSelector = DEFAULT_STAGGER_SELECTOR,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const animations: Animation[] = [];
    let hasAnimated = false;

    const reveal = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      if (reduceMotion) {
        element.style.opacity = "1";
        element.style.transform = "none";
        element.style.transition = "none";
        return;
      }

      const items = staggerChildren
        ? Array.from(
            element.querySelectorAll<HTMLElement>(staggerSelector),
          ).filter(
            (item) =>
              item.getClientRects().length > 0 &&
              !item.closest("[data-no-scroll-stagger]"),
          )
        : [];

      items.forEach((item) => {
        item.style.opacity = "0";
      });

      element.style.transition = `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      element.style.transitionDelay = `${delay}ms`;

      requestAnimationFrame(() => {
        element.style.opacity = "1";
        element.style.transform = "none";

        items.forEach((item, index) => {
          const animation = item.animate(
            [
              {
                opacity: 0,
                transform: "translate3d(0, 24px, 0)",
              },
              {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
              },
            ],
            {
              duration,
              delay: delay + index * staggerDelay,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "both",
            },
          );

          animations.push(animation);
          void animation.finished
            .then(() => {
              item.style.opacity = "";
              animation.cancel();
            })
            .catch(() => undefined);
        });
      });
    };

    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [
    delay,
    direction,
    duration,
    staggerChildren,
    staggerDelay,
    staggerSelector,
    threshold,
  ]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: INITIAL_TRANSFORM[direction],
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
