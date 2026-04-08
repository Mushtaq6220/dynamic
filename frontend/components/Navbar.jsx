"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/#hajj-packages", label: "Hajj Packages" },
  { href: "/#umrah-packages", label: "Umrah Packages" },
  { href: "/#visa-services", label: "Visa Services" },
  { href: "/flights", label: "Flight Schedules" },
  { href: "/#about", label: "About" },
  { href: "/#inquiry", label: "Inquiry" },
  { href: "/#support", label: "Customer Support" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand-mark">
          <Image
            src="/newimg.png"
            alt="Fly International Tours & Travels"
            width={560}
            height={180}
            className="brand-logo"
          />
        </Link>

        <nav className="nav-links">
          <div
            className="nav-dropdown"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              type="button"
              className={resourcesOpen ? "nav-link nav-dropdown-trigger active" : "nav-link nav-dropdown-trigger"}
              onClick={() => setResourcesOpen((current) => !current)}
              aria-expanded={resourcesOpen}
            >
              Resources <span className="dropdown-caret">▾</span>
            </button>

            {resourcesOpen ? (
              <div className="nav-dropdown-menu">
                {resourceLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="nav-dropdown-item">
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "nav-link active" : "nav-link"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
