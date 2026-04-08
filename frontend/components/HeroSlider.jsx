"use client";

import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1519817914152-22f90e75a6dd?auto=format&fit=crop&w=1600&q=80",
    quote: "Your sacred journey begins with us",
    subtitle: "Trusted pilgrimage planning with modern comfort",
  },
  {
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1600&q=80",
    quote: "Experience peace and devotion in every خطوة",
    subtitle: "Elegant arrangements for Umrah, visas, and coordinated departures",
  },
  {
    image: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=1600&q=80",
    quote: "Trusted partner for Hajj & Umrah سفر",
    subtitle: "Flight services and support designed around family journeys",
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
    quote: "راحة، إيمان، رحلة مباركة",
    subtitle: "Aviation precision with sincere care for every pilgrim",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4600);

    return () => window.clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <section className="section-shell pt-6 md:pt-10">
      <div className="glass-panel-strong relative overflow-hidden rounded-[36px]">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative min-h-[78vh] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.image}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${current.image})` }}
            />
          </AnimatePresence>
          <div className="hero-image-overlay absolute inset-0" />

          <div className="relative z-10 flex min-h-[78vh] flex-col items-center justify-center px-6 py-16 text-center md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="glass-panel mb-6 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.36em] text-white/90"
            >
              Hajj, Umrah and Flight Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
            >
              Begin Your Sacred Journey with Comfort & Trust
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18 }}
              className="mt-5 max-w-3xl text-lg leading-8 text-white/85 md:text-xl"
            >
              {current.quote}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.26 }}
              className="mt-3 max-w-2xl text-sm uppercase tracking-[0.32em] text-amber-200 md:text-base"
            >
              {current.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.34 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/packages"
                className="gold-glow rounded-full bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--green)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white"
              >
                Explore Packages
              </Link>
              <Link
                href="/contact"
                className="glass-panel rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white"
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          <button
            type="button"
            onClick={() => setIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length)}
            className="glass-panel absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => setIndex((currentIndex) => (currentIndex + 1) % slides.length)}
            className="glass-panel absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white md:flex"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setIndex(slideIndex)}
                aria-label={`Go to slide ${slideIndex + 1}`}
                className={`h-3 rounded-full transition-all ${slideIndex === index ? "w-10 bg-amber-300" : "w-3 bg-white/55"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
