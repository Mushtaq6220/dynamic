import Image from "next/image";

export default function OfferPosterGrid({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="offer-poster-grid">
      {items.map((item) => (
        <article key={item.title} className="offer-poster-card">
          <div className="offer-poster-media">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="offer-poster-copy">
            <p className="offer-poster-subtitle">{item.subtitle}</p>
            <h3>{item.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
