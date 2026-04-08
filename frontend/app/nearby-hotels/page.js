const hotelGroups = [
  {
    city: "Makkah",
    hotels: [
      "Hotels near Masjid al-Haram",
      "Shuttle-connected family stays",
      "Comfort and premium stay options",
    ],
  },
  {
    city: "Madinah",
    hotels: [
      "Hotels near Masjid an-Nabawi",
      "Senior-friendly walking-distance stays",
      "Group booking support with meal options",
    ],
  },
];

export default function NearbyHotelsPage() {
  return (
    <main className="page-shell">
      <section className="section-heading">
        <p className="eyebrow">Nearby Hotels</p>
        <h1>Stay options close to the sacred destinations</h1>
        <p className="hero-copy">
          Explore the kind of nearby hotel arrangements the platform can support for Umrah groups,
          families, and comfort-focused travelers.
        </p>
      </section>

      <section className="section-grid">
        {hotelGroups.map((group) => (
          <article key={group.city} className="panel">
            <h2>{group.city}</h2>
            <ul className="included-list">
              {group.hotels.map((hotel) => (
                <li key={hotel}>{hotel}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
