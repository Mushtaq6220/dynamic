import Link from "next/link";

const resourceCards = [
  {
    title: "Makkah Ziyarats",
    description: "Browse sacred landmarks, history, and key stops around Makkah.",
    href: "/resources/makkah-ziyarats",
  },
  {
    title: "Madinah Ziyarats",
    description: "Explore important sites in Madinah with mobile-friendly reading cards.",
    href: "/resources/madinah-ziyarats",
  },
  {
    title: "Travel Blog",
    description: "Read helpful articles, updates, and destination guidance from our team.",
    href: "/resources/blog",
  },
];

export const metadata = {
  title: "Resources | FLY International Tours & Travels",
  description: "Browse ziyarat guides, travel articles, and destination resources from Fly International.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-20">
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass-panel rounded-[28px] p-6 sm:rounded-[36px] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">Resources</p>
          <h1 className="mt-3 text-3xl font-bold text-[var(--heading)] sm:text-4xl md:text-5xl">
            Travel guides and ziyarat resources that work well on mobile
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Use these pages to quickly open destination guides, spiritual landmarks, and travel reading without hunting through the menu.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {resourceCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="glass-panel rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--secondary)]">Open page</p>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--heading)]">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.description}</p>
              <span className="mt-6 inline-flex rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white">
                Explore
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
