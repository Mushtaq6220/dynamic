"use client";

import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/visa", label: "Visa" },
  { href: "/flights", label: "Flights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Inquiry" },
  { href: "/support", label: "Support" },
];

function NavLink({ href, label, active, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative text-sm font-medium tracking-[0.18em] text-[color:var(--text)]/80 transition hover:text-[color:var(--green)] dark:text-white/80 dark:hover:text-[color:var(--gold)]"
    >
      {label}
      <span
        className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-[color:var(--green)] to-[color:var(--gold)] transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

export default function SiteNavbar({ theme = "light", onToggleTheme, menuOpen, onToggleMenu, onCloseMenu }) {
  const pathname = usePathname();

  useEffect(() => {
    onCloseMenu?.();
  }, [pathname, onCloseMenu]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--panel)]/85 backdrop-blur-2xl">
        <div className="section-shell flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="gold-glow flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--gold)] via-amber-300 to-[color:var(--green)] text-xl font-semibold text-white">
              ✈
            </div>
            <div>
              <p className="text-lg font-semibold tracking-[0.18em] text-[color:var(--text)] md:text-xl">Hajj & Umrah Travels</p>
              <p className="text-[11px] uppercase tracking-[0.38em] text-[color:var(--muted)]">Pilgrimage and Flight Services</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <NavLink key={link.href} {...link} active={pathname === link.href} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              className="glass-panel flex h-11 w-11 items-center justify-center rounded-2xl text-[color:var(--text)] transition hover:scale-105"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <Link
              href="/contact"
              className="gold-glow hidden rounded-full bg-gradient-to-r from-[color:var(--green)] to-[color:var(--gold)] px-5 py-3 text-sm font-semibold tracking-[0.16em] text-white md:inline-flex"
            >
              Book Now
            </Link>
            <button
              type="button"
              onClick={onToggleMenu}
              className="glass-panel flex h-11 w-11 items-center justify-center rounded-2xl text-[color:var(--text)] lg:hidden"
              aria-label="Open menu"
            >
              {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm lg:hidden"
            onClick={onCloseMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 240, damping: 28 }}
              className="ml-auto flex h-full w-[86%] max-w-sm flex-col gap-8 border-l border-white/10 bg-[color:var(--panel-strong)] px-6 py-8 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.36em] text-[color:var(--gold)]">Navigation</p>
                <p className="text-lg font-semibold text-[color:var(--text)]">Sacred travel, modern experience</p>
              </div>
              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <NavLink key={link.href} {...link} active={pathname === link.href} onClick={onCloseMenu} />
                ))}
              </div>
              <Link
                href="/contact"
                onClick={onCloseMenu}
                className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[color:var(--green)] to-[color:var(--gold)] px-5 py-3 text-sm font-semibold tracking-[0.16em] text-white"
              >
                Start Inquiry
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
