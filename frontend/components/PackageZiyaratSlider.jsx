"use client";

import { useEffect, useRef, useState } from "react";

export default function PackageZiyaratSlider({ slides = [], title = "Ziyarat Highlights" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const dragStartX = useRef(null);
  const dragDeltaX = useRef(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3400);

    return () => clearInterval(timer);
  }, [slides.length]);

  function showNextSlide() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  function showPreviousSlide() {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }

  function handlePointerDown(event) {
    if (slides.length <= 1) {
      return;
    }

    sliderRef.current?.setPointerCapture?.(event.pointerId);
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

    sliderRef.current?.releasePointerCapture?.(event.pointerId);

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

  if (!slides.length) {
    return null;
  }

  return (
    <section className="panel package-ziyarat-panel">
      <div className="panel-header">
        <h2>{title}</h2>
        <span>Swipe or drag</span>
      </div>

      <section
        ref={sliderRef}
        className={isDragging ? "package-ziyarat-slider dragging" : "package-ziyarat-slider"}
        aria-label={title}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onPointerLeave={handlePointerEnd}
      >
        <div className="package-ziyarat-track">
          {slides.map((slide, index) => (
            <article
              key={`${slide.src}-${index}`}
              className={
                index === activeIndex
                  ? isDragging
                    ? "package-ziyarat-slide active dragging"
                    : "package-ziyarat-slide active"
                  : "package-ziyarat-slide"
              }
              aria-hidden={index !== activeIndex}
              style={index === activeIndex ? { transform: `translateX(${dragOffset}px)` } : undefined}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="package-ziyarat-image"
                draggable="false"
              />
              <div className="package-ziyarat-caption">
                <strong>{slide.title}</strong>
                <span>{slide.subtitle}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="package-ziyarat-dots">
          {slides.map((slide, index) => (
            <button
              key={`${slide.src}-dot-${index}`}
              type="button"
              className={index === activeIndex ? "package-ziyarat-dot active" : "package-ziyarat-dot"}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ziyarat image ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
