"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { packageCategories, umrahPackages } from "../data/packageCatalog";
import SectionReveal from "./SectionReveal";
import "../styles/premium-packages.css";

export default function UmrahPackageSelector() {
  const [activeCategory, setActiveCategory] = useState(packageCategories[0].key);

  const filteredPackages = useMemo(
    () => umrahPackages.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <main className="pp-page-wrapper">
      <SectionReveal>
        <section className="pp-header-glass">
          <h1 className="pp-title">Choose Your Perfect Package</h1>
          <p className="pp-subtitle">
            Pick a package category and explore premium Umrah options designed around comfort,
            value, and smooth travel planning.
          </p>
        </section>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <section className="pp-tabs" aria-label="Package filters">
          {packageCategories.map((category) => (
            <button
              key={category.key}
              type="button"
              className={
                activeCategory === category.key
                  ? "pp-tab-btn active"
                  : "pp-tab-btn"
              }
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </section>
      </SectionReveal>

      <section className="pp-grid">
        {filteredPackages.map((item, index) => (
          <SectionReveal key={item.id} delay={0.15 + index * 0.1}>
            <article className="pp-card">
              <div className="pp-card-media">
                <img
                  src={item.image}
                  alt={item.name}
                  className="pp-card-img"
                  draggable="false"
                />
                <div className="pp-card-overlay"></div>
                <span className="pp-card-badge">
                  {packageCategories.find((cat) => cat.key === item.category)?.label}
                </span>
              </div>

              <div className="pp-card-content">
                <h2 className="pp-card-title">{item.name}</h2>
                <div className="pp-card-price-row">
                  <span className="pp-card-price">{item.price}</span>
                  <span className="pp-card-duration">{item.duration}</span>
                </div>

                <ul className="pp-card-features">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <Link href={`/packages/${item.id}`} className="pp-card-btn">
                  Book Now
                </Link>
              </div>
            </article>
          </SectionReveal>
        ))}
      </section>
    </main>
  );
}
