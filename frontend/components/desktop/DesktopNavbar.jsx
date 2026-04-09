"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
  XMarkIcon,
  MapPinIcon,
  StarIcon,
  PaperAirplaneIcon,
  DocumentCheckIcon,
  AcademicCapIcon,
  TicketIcon,
  IdentificationIcon,
  GlobeAltIcon,
  CalendarDaysIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import "../styles/premium-navbar.css";

const menuData = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    label: "Packages",
    href: "/packages",
    dropdown: [
      {
        title: "Umrah Packages",
        desc: "Guided spiritual journeys with premium amenities",
        href: "/packages",
        icon: <MoonIcon className="w-6 h-6" />,
      },
      {
        title: "Hajj Packages",
        desc: "Complete Hajj services with expert guidance",
        href: "/packages/hajj",
        icon: <StarIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        title: "Air Ticketing",
        desc: "Best fares for international travel",
        href: "/services/air-ticketing",
        icon: <PaperAirplaneIcon className="w-6 h-6" />,
      },
      {
        title: "Certificate Attestation",
        desc: "Professional document legalization",
        href: "/services/certificate-attestations",
        icon: <DocumentCheckIcon className="w-6 h-6" />,
      },
      {
        title: "Study Abroad",
        desc: "Global educational opportunities",
        href: "/services/study-abroad",
        icon: <AcademicCapIcon className="w-6 h-6" />,
      },
      {
        title: "Train Ticket",
        desc: "Hassle-free rail bookings",
        href: "/services/train-ticket-booking",
        icon: <TicketIcon className="w-6 h-6" />,
      },
      {
        title: "Visa Stamping",
        desc: "Reliable visa processing",
        href: "/services/visa-stamping",
        icon: <IdentificationIcon className="w-6 h-6" />,
      },
      {
        title: "Visit Visa",
        desc: "Leisure and business travel visas",
        href: "/services/visit-visa",
        icon: <GlobeAltIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      {
        title: "Makkah Ziyarat",
        desc: "Sacred sites exploration in Makkah",
        href: "/resources/makkah-ziyarats",
        icon: <MapPinIcon className="w-6 h-6" />,
      },
      {
        title: "Madina Ziyarat",
        desc: "Historical visits in the Prophet's city",
        href: "/resources/madinah-ziyarats",
        icon: <MapPinIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    label: "More",
    href: null,
    dropdown: [
      {
        title: "Flight Schedules",
        desc: "Real-time updates on flights",
        href: "/flights",
        icon: <CalendarDaysIcon className="w-6 h-6" />,
      },
      {
        title: "Nearby Hotels",
        desc: "Premium stay near the holy sites",
        href: "/nearby-hotels",
        icon: <BuildingOfficeIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
];

export default function PremiumNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState([]);

  const toggleMobileItem = (idx) => {
    setExpandedMobileItems((prev) => (
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    ));
  };

  const isItemActive = (item) => {
    if (item.href && item.href !== "/" && pathname.startsWith(item.href)) {
      return true;
    }

    if (item.href === pathname) {
      return true;
    }

    return item.dropdown?.some((subItem) => pathname === subItem.href) || false;
  };

  // Handle Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme support
  useEffect(() => {
    const savedTheme = localStorage.getItem("site-theme") || 
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(savedTheme);
    document.documentElement.dataset.theme = savedTheme;
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("site-theme", newTheme);
  };

  return (
    <header className={`premium-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-glow"></div>
      <div className="nav-container">
        {/* Left: Logo */}
        <Link href="/" className="brand-mark">
          <Image
            src="/fly-international-logo-latest.png"
            alt="Fly International Logo"
            width={250}
            height={72}
            priority
            className="brand-logo"
          />
        </Link>

        {/* Center: Desktop Menu */}
        <nav className="nav-menu">
          {menuData.map((item, idx) => (
            <div 
              key={idx} 
              className="nav-item"
              onMouseEnter={() => setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdown ? (
                <button
                  type="button"
                  className={`nav-link-btn ${isItemActive(item) ? "active" : ""}`}
                  aria-expanded={activeDropdown === idx}
                >
                  {item.label}
                  <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === idx ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link href={item.href} className={`nav-link-btn ${isItemActive(item) ? "active" : ""}`}>
                  {item.label}
                </Link>
              )}

              {/* Dropdown Card */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === idx && (
                  <motion.div 
                    className="dropdown-card"
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 10, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    {item.dropdown.map((subItem, sIdx) => (
                      <Link key={sIdx} href={subItem.href} className="dropdown-item">
                        <div className="dropdown-icon">
                          {subItem.icon}
                        </div>
                        <div className="dropdown-content">
                          <span className="dropdown-title">{subItem.title}</span>
                          <span className="dropdown-desc">{subItem.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="nav-actions">
          <div
            onClick={toggleTheme}
            className="theme-switch-wrapper"
            role="switch"
            aria-checked={theme === "dark"}
            aria-label="Toggle Theme"
          >
            <div className="theme-switch-circle">
               {theme === "dark" ? (
                 <MoonIcon className="w-4 h-4 text-slate-800" />
               ) : (
                 <SunIcon className="w-4 h-4 text-yellow-500" />
               )}
            </div>
          </div>

          <Link href="/contact" className="cta-btn">
            Get Started
          </Link>

        </div>
      </div>
    </header>
  );
}
