"use client";

import { useEffect, useState } from "react";

export default function ZiyaratSpotCard({ spot, accent = "makkah" }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!spot.images?.length || spot.images.length < 2) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setActiveImage((current) => (current + 1) % spot.images.length);
    }, 3200);

    return () => clearInterval(intervalId);
  }, [spot.images]);

  return (
    <article className={`ziyarat-card ziyarat-card-${accent}`}>
      <div className="ziyarat-copy">
        <p className="eyebrow">{spot.subtitle}</p>
        <h2>{spot.name}</h2>
        <p className="ziyarat-location">{spot.location}</p>
        <p className="hero-copy">{spot.description}</p>
        <ul className="included-list">
          {spot.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="ziyarat-slider-shell">
        <div className="ziyarat-slider-frame">
          {spot.images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={index === activeImage ? "ziyarat-slide active" : "ziyarat-slide"}
            />
          ))}
        </div>
        <div className="ziyarat-slider-dots">
          {spot.images.map((image, index) => (
            <button
              key={image.alt}
              type="button"
              aria-label={`Show image ${index + 1} for ${spot.name}`}
              className={index === activeImage ? "slider-dot active" : "slider-dot"}
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
