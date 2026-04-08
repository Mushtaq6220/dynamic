import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/packages", label: "Packages" },
      { href: "/visa", label: "Visa Services" },
      { href: "/flights", label: "Flight Schedules" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Inquiry" },
      { href: "/support", label: "Support" },
      { href: "/resources/makkah-ziyarats", label: "Makkah Ziyarats" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[color:var(--panel)]/70 backdrop-blur-xl">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.2fr,0.8fr,0.8fr,1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="gold-glow flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--gold)] via-amber-300 to-[color:var(--green)] text-white">
              ✈
            </div>
            <div>
              <p className="font-semibold tracking-[0.16em] text-[color:var(--text)]">Hajj & Umrah Travels</p>
              <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Sacred route planning</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[color:var(--muted)]">
            A modern pilgrimage platform for trusted Umrah planning, visa assistance, managed departures, and flight support with calm hospitality.
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">{group.title}</h3>
            <div className="flex flex-col gap-3 text-sm text-[color:var(--muted)]">
              {group.links.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-[color:var(--green)] dark:hover:text-[color:var(--gold)]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">Contact</h3>
          <div className="space-y-3 text-sm leading-7 text-[color:var(--muted)]">
            <p>Phone: +91 62811 44625</p>
            <p>Email: support@hajjumrahtravels.com</p>
            <p>Support: Available for package guidance and schedule coordination</p>
          </div>
          <div className="flex gap-3 pt-2 text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
            <span className="glass-panel rounded-full px-3 py-2">WhatsApp</span>
            <span className="glass-panel rounded-full px-3 py-2">Instagram</span>
            <span className="glass-panel rounded-full px-3 py-2">YouTube</span>
          </div>
        </div>
      </div>
      <div className="section-shell border-t border-white/10 py-5 text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
        (c) 2026 Hajj & Umrah Travels. Designed for calm pilgrimage planning.
      </div>
    </footer>
  );
}
