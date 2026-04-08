"use client";

import { useEffect, useRef, useState } from "react";

const visaSlides = [
  {
    image: "/visa-stamping-banner-blue.png",
    alt: "Passport and aircraft themed visa stamping banner",
  },
  {
    image: "/visa-stamping-banner-gold.png",
    alt: "Visa approved passport themed visa stamping banner",
  },
];

export default function VisaStampingBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const dragStartX = useRef(null);
  const dragDeltaX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % visaSlides.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  function showNextSlide() {
    setActiveIndex((current) => (current + 1) % visaSlides.length);
  }

  function showPreviousSlide() {
    setActiveIndex((current) => (current - 1 + visaSlides.length) % visaSlides.length);
  }

  function handlePointerDown(event) {
    if (sliderRef.current) {
      sliderRef.current.setPointerCapture?.(event.pointerId);
    }

    dragStartX.current = event.clientX;
    dragDeltaX.current = 0;
    setIsDragging(true);
  }

  function handlePointerMove(event) {
    if (dragStartX.current === null) {
      return;
    }

    dragDeltaX.current = event.clientX - dragStartX.current;
    setDragOffset(dragDeltaX.current);
  }

  function handlePointerEnd(event) {
    if (dragStartX.current === null) {
      return;
    }

    if (sliderRef.current) {
      sliderRef.current.releasePointerCapture?.(event.pointerId);
    }

    const swipeThreshold = sliderRef.current
      ? Math.max(40, sliderRef.current.clientWidth * 0.08)
      : 40;

    if (dragDeltaX.current <= -swipeThreshold) {
      showNextSlide();
    } else if (dragDeltaX.current >= swipeThreshold) {
      showPreviousSlide();
    }

    dragStartX.current = null;
    dragDeltaX.current = 0;
    setDragOffset(0);
    setIsDragging(false);
  }

  return (
    <section
      ref={sliderRef}
      className={isDragging ? "service-banner-slider dragging" : "service-banner-slider"}
      aria-label="Visa stamping highlights"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onPointerLeave={handlePointerEnd}
    >
      <div className="service-banner-track">
        {visaSlides.map((slide, index) => (
          <article
            key={slide.image}
            className={
              index === activeIndex
                ? isDragging
                  ? "service-banner-slide active dragging"
                  : "service-banner-slide active"
                : "service-banner-slide"
            }
            aria-hidden={index !== activeIndex}
            style={index === activeIndex ? { transform: `translateX(${dragOffset}px)` } : undefined}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="service-banner-image"
              draggable="false"
            />
          </article>
        ))}
      </div>

      <div className="service-banner-dots">
        {visaSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            className={index === activeIndex ? "service-banner-dot active" : "service-banner-dot"}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to visa banner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
