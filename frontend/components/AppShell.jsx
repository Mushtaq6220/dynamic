"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ChatBubbleBottomCenterTextIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useMemo, useState } from "react";
import Loader from "./Loader";
import SiteFooter from "./SiteFooter";
import SiteNavbar from "./SiteNavbar";
import PageTransition from "./PageTransition";
import useLoader from "../hooks/useLoader";

const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), { ssr: false });

export default function AppShell({ children }) {
  const { progress, complete } = useLoader(2100);
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const resolved = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(resolved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 320);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent("Hi, I would like to enquire about your travel packages.");
    return `https://wa.me/916281144625?text=${text}`;
  }, []);

  if (!complete) {
    return <Loader progress={progress} />;
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <SiteNavbar
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((current) => !current)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <PageTransition>{children}</PageTransition>
      <SiteFooter />

      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        <Link
          href="/contact"
          className="gold-glow rounded-full bg-gradient-to-r from-[color:var(--green)] to-[color:var(--gold)] px-5 py-3 text-sm font-semibold tracking-[0.16em] text-white"
        >
          Start Inquiry
        </Link>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="glass-panel flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium text-[color:var(--text)]"
        >
          <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
          WhatsApp
        </a>
        {showTop ? (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="glass-panel flex h-12 w-12 items-center justify-center rounded-full text-[color:var(--text)]"
            aria-label="Back to top"
          >
            <ArrowUpIcon className="h-5 w-5" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
