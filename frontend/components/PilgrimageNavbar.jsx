"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  PaperAirplaneIcon,
  DocumentCheckIcon,
  AcademicCapIcon,
  TicketIcon,
  IdentificationIcon,
  GlobeAltIcon,
  MoonIcon,
  StarIcon,
  MapPinIcon,
  CalendarDaysIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

const primaryLinks = [
  { href: "/about", label: "About Us", match: (pathname) => pathname === "/about" },
];

const packageLinks = [
  { href: "/packages", label: "Umrah", icon: <MoonIcon className="w-5 h-5" /> },
  { href: "/packages/hajj", label: "Hajj", icon: <StarIcon className="w-5 h-5" /> },
];

const serviceLinks = [
  { href: "/services/air-ticketing", label: "Air Ticketing", icon: <PaperAirplaneIcon className="w-5 h-5" /> },
  { href: "/services/certificate-attestations", label: "Certificate Attestation", icon: <DocumentCheckIcon className="w-5 h-5" /> },
  { href: "/services/study-abroad", label: "Study Abroad", icon: <AcademicCapIcon className="w-5 h-5" /> },
  { href: "/services/train-ticket-booking", label: "Train Ticket", icon: <TicketIcon className="w-5 h-5" /> },
  { href: "/services/visa-stamping", label: "Visa Stamping", icon: <IdentificationIcon className="w-5 h-5" /> },
  { href: "/services/visit-visa", label: "Visit Visa", icon: <GlobeAltIcon className="w-5 h-5" /> },
];

const resourceLinks = [
  { href: "/resources/makkah-ziyarats", label: "Makkah Ziyarat", icon: <MapPinIcon className="w-5 h-5" /> },
  { href: "/resources/madinah-ziyarats", label: "Madina Ziyarat", icon: <MapPinIcon className="w-5 h-5" /> },
];

const moreLinks = [
  { href: "/flights", label: "Flight Schedules", icon: <CalendarDaysIcon className="w-5 h-5" /> },
  { href: "/nearby-hotels", label: "Nearby Hotels", icon: <BuildingOfficeIcon className="w-5 h-5" /> },
];

function NavDropdown({
  label,
  links,
  active,
  menuKey,
  openMenu,
  setOpenMenu,
  currentPath,
  advanced = false,
}) {
  const isOpen = openMenu === menuKey;

  return (
    <div className="nav-dropdown">
      <button
        type="button"
        className={active || isOpen ? "nav-dropdown-trigger active" : "nav-dropdown-trigger"}
        onClick={() => setOpenMenu(isOpen ? null : menuKey)}
        aria-expanded={isOpen}
      >
        {label}
        <span className="dropdown-caret">▼</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[calc(100%+14px)] left-0 w-[300px] p-2.5 rounded-[20px] z-50 flex flex-col gap-1.5 overflow-hidden backdrop-blur-xl border bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-white dark:bg-gradient-to-br dark:from-[#0F172A] dark:to-[#1E293B] dark:shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(37,99,235,0.15)] dark:border-white/10"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 + 0.1, duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className={`group relative flex items-center gap-3.5 px-4 py-3.5 rounded-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden bg-white text-[#0B3C5D] hover:bg-gradient-to-r hover:from-[#E0F2FE] hover:to-white hover:shadow-[0_6px_16px_rgba(11,60,93,0.06)] border border-transparent hover:border-[#BAE6FD]/40 dark:hover:bg-gradient-to-r dark:hover:from-[#7DD3FC] dark:hover:to-[#0EA5E9] dark:hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] dark:hover:border-[#38BDF8]/50 ${currentPath === link.href ? "shadow border-[#BAE6FD]/50 dark:border-[#38BDF8]/50" : ""}`}
                  onClick={() => setOpenMenu(null)}
                >
                  {/* Glowing highlight bar on hover */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[60%] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0B3C5D] shadow-[0_0_8px_#0B3C5D] dark:bg-[#0B3C5D] dark:shadow-[0_0_5px_rgba(0,0,0,0.5)]" />

                  <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-110 text-[#0EA5E9] group-hover:text-[#0B3C5D]">
                    {link.icon}
                  </div>
                  <strong className="text-[0.9rem] font-bold tracking-wide group-hover:text-[#0B3C5D] transition-colors">{link.label}</strong>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PilgrimageNavbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [theme, setTheme] = useState(null);
  const navRef = useRef(null);
  const isHomePage = pathname === "/";

  useEffect(() => {
    function handlePointerDown(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("site-theme");
    const preferredTheme =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    const resolvedTheme = storedTheme || preferredTheme;

    setTheme(resolvedTheme);
    document.documentElement.dataset.theme = resolvedTheme;
  }, []);

  useEffect(() => {
    if (!theme) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("site-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <header className="site-header">
      <div className="nav-shell" ref={navRef}>
        <Link href="/" className="brand-mark" aria-label="Fly International home">

        </Link>

        <nav className="nav-links">
          {isHomePage ? (
            <>
              <Link
                href="/"
                className={pathname === "/" ? "nav-link active" : "nav-link"}
              >
                Home
              </Link>

              <NavDropdown
                label="Packages"
                links={packageLinks}
                active={pathname.startsWith("/packages")}
                menuKey="packages"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                currentPath={pathname}
              />

              <NavDropdown
                label="Services"
                links={serviceLinks}
                active={pathname.startsWith("/services")}
                menuKey="services"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                currentPath={pathname}
                advanced
              />

              <NavDropdown
                label="Resources"
                links={resourceLinks}
                active={pathname.startsWith("/resources")}
                menuKey="resources"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                currentPath={pathname}
              />

              <NavDropdown
                label="More"
                links={moreLinks}
                active={pathname.startsWith("/nearby-hotels") || pathname.startsWith("/flights")}
                menuKey="more"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                currentPath={pathname}
              />

              <Link
                href={primaryLinks[0].href}
                className={primaryLinks[0].match(pathname) ? "nav-link active" : "nav-link"}
              >
                {primaryLinks[0].label}
              </Link>
            </>
          ) : (
            <>
              <Link href="/" className="nav-link">
                Home
              </Link>

              <NavDropdown
                label="Packages"
                links={packageLinks}
                active={pathname.startsWith("/packages")}
                menuKey="packages"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                currentPath={pathname}
              />

              <NavDropdown
                label="Services"
                links={serviceLinks}
                active={pathname.startsWith("/services")}
                menuKey="services"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                currentPath={pathname}
                advanced
              />

              <NavDropdown
                label="Resources"
                links={resourceLinks}
                active={pathname.startsWith("/resources")}
                menuKey="resources"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                currentPath={pathname}
              />

              <Link
                href={primaryLinks[0].href}
                className={primaryLinks[0].match(pathname) ? "nav-link active" : "nav-link"}
              >
                {primaryLinks[0].label}
              </Link>
            </>
          )}
        </nav>

        <motion.button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-transparent hover:border-[#D4AF37]/50 bg-transparent hover:bg-[var(--surface-strong)] transition-all duration-300 group"
          whileTap={{ scale: 0.9, rotate: 15 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative flex justify-center items-center w-7 h-7 rounded-full bg-[#0A0F1C]/5 dark:bg-[#D4AF37]/10 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500">
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.svg
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F5D76E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B3C5D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        </motion.button>
      </div>
    </header>
  );
}
