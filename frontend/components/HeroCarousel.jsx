"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/global-travel-connections.png",
    quote: "Start Your Journey Now",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80",
    quote: "Your sacred journey begins with us",
  },
  {
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=80",
    quote: "Experience peace and devotion in every step",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542816417-0983670d1bb5?auto=format&fit=crop&w=1600&q=80",
    quote: "Trusted partner for Hajj & Umrah travel",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1600&q=80",
    quote: "Comfort, faith, and a blessed journey",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  function showNextSlide() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  function showPreviousSlide() {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
    touchDeltaX.current = 0;
  }

  function handleTouchMove(event) {
    if (touchStartX.current === null) {
      return;
    }

    touchDeltaX.current = event.touches[0].clientX - touchStartX.current;
  }

  function handleTouchEnd() {
    if (touchStartX.current === null) {
      return;
    }

    if (touchDeltaX.current <= -50) {
      showNextSlide();
    } else if (touchDeltaX.current >= 50) {
      showPreviousSlide();
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
  }

  return (
    <section
      className="hero-carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-carousel-track">
        {slides.map((slide, index) => (
                <article
            key={slide.quote}
            className={index === activeIndex ? "hero-slide active" : "hero-slide"}
            style={{ backgroundImage: `linear-gradient(135deg, rgba(9, 34, 22, 0.72), rgba(9, 22, 18, 0.5)), url(${slide.image})` }}
          >
            <div className="hero-slide-content">
              {!slide.hideCopy ? (
                <>
                  <p className="hero-pill">Premium Pilgrimage Journeys</p>
                  <h1 className={index === 0 ? "hero-script-heading" : undefined}>{slide.quote}</h1>
                  <p className="hero-slide-copy">Trusted guidance for Hajj and Umrah journeys.</p>
                  <div className="hero-slide-actions">
                    <Link href="#packages" className="primary-button gold-button">
                      Explore Packages
                    </Link>
                    <Link href="#inquiry" className="secondary-button hero-secondary-button">
                      Start Inquiry
                    </Link>
                  </div>
                </>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <div className="hero-dots">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.quote}
            className={index === activeIndex ? "hero-dot active" : "hero-dot"}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
