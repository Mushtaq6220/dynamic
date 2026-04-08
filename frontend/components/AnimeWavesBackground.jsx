"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

const AirplaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 rotate-90 text-[var(--primary-dark)] dark:text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
);

export default function AnimeWavesBackground() {
  const orbRefs = useRef([]);
  const planeRefs = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const animations = orbRefs.current
      .filter(Boolean)
      .map((orb, index) =>
        animate(orb, {
          translateX: index === 0 ? ["-16px", "36px"] : index === 1 ? ["22px", "-28px"] : ["-10px", "20px"],
          translateY: index === 0 ? ["-12px", "18px"] : index === 1 ? ["18px", "-14px"] : ["-20px", "10px"],
          scale: index === 1 ? [1, 1.08] : [0.96, 1.05],
          opacity: [0.38, 0.68],
          duration: 5200 + index * 1300,
          ease: "inOutSine",
          loop: true,
          alternate: true,
        })
      );

    const planeAnimations = [];
    const planeTimeouts = [];

    const randomBetween = (min, max) => min + Math.random() * (max - min);

    const schedulePlane = (plane, index) => {
      if (!plane || !document.body.contains(plane)) {
        return;
      }

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      let startX;
      let endX;
      let startY;
      let endY;
      let forwardDirection;
      const startFromLeft = Math.random() >= 0.5;
      startX = startFromLeft ? -240 : viewportWidth + 240;
      endX = startFromLeft ? viewportWidth + 240 : -240;
      startY = randomBetween(96, Math.max(180, viewportHeight - 180));
      endY = Math.max(48, Math.min(viewportHeight - 120, startY + randomBetween(-180, 180)));
      forwardDirection = startFromLeft;

      plane.classList.toggle("anime-flight-plane-reverse", !forwardDirection);
      plane.classList.remove("anime-flight-plane-vertical");
      plane.style.left = `${startX}px`;
      plane.style.top = `${startY}px`;

      const animation = animate(plane, {
        translateX: [0, endX - startX],
        translateY: [0, endY - startY],
        rotate: forwardDirection ? [-6, 4, -2] : [6, -4, 2],
        opacity: [0, 0.9, 0.9, 0],
        ease: "linear",
        duration: randomBetween(14000, 22000),
        delay: index * 800,
        onComplete: () => {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
          }

          planeTimeouts[index] = window.setTimeout(() => {
            schedulePlane(plane, index);
          }, randomBetween(300, 1600));
        },
      });

      planeAnimations[index] = animation;
    };

    planeRefs.current.filter(Boolean).forEach((plane, index) => {
      schedulePlane(plane, index);
    });

    return () => {
      animations.forEach((animation) => {
        animation.cancel();
      });
      planeAnimations.forEach((animation) => {
        animation?.cancel();
      });
      planeTimeouts.forEach((timeoutId) => {
        if (timeoutId) {
          window.clearTimeout(timeoutId);
        }
      });
    };
  }, []);

  return (
    <div className="home-wave-shell" aria-hidden="true">
      <div className="home-wave-overlay" />
      <div className="anime-orb-stage">
        <span
          ref={(node) => {
            orbRefs.current[0] = node;
          }}
          className="anime-home-orb anime-home-orb-one"
        />
        <span
          ref={(node) => {
            orbRefs.current[1] = node;
          }}
          className="anime-home-orb anime-home-orb-two"
        />
        <span
          ref={(node) => {
            orbRefs.current[2] = node;
          }}
          className="anime-home-orb anime-home-orb-three"
        />
      </div>
      <div className="anime-plane-stage opacity-40">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            ref={(node) => {
              planeRefs.current[i] = node;
            }}
            className="anime-flight-plane"
          >
            <span className="anime-flight-trail opacity-40" />
            <span className="anime-flight-icon"><AirplaneIcon /></span>
          </span>
        ))}
      </div>
    </div>
  );
}
