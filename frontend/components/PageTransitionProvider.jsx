"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const loadingTextStates = [
  "Connecting destinations worldwide",
  "Almost ready to explore",
  "Taking you across borders",
];

const INITIAL_BUFFER_MS = 850;
const ROUTE_BUFFER_MS = 550;
const TEXT_ROTATE_MS = 500;

export default function PageTransitionProvider({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const firstLoadRef = useRef(true);
  const hideTimerRef = useRef(null);
  const textIntervalRef = useRef(null);

  useEffect(() => {
    const clearTimers = () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }

      if (textIntervalRef.current) {
        clearInterval(textIntervalRef.current);
        textIntervalRef.current = null;
      }
    };

    clearTimers();
    setIsTransitioning(true);
    setTextIndex(0);

    textIntervalRef.current = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTextStates.length);
    }, TEXT_ROTATE_MS);

    hideTimerRef.current = setTimeout(() => {
      setIsTransitioning(false);

      if (textIntervalRef.current) {
        clearInterval(textIntervalRef.current);
        textIntervalRef.current = null;
      }
    }, firstLoadRef.current ? INITIAL_BUFFER_MS : ROUTE_BUFFER_MS);

    firstLoadRef.current = false;

    return clearTimers;
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="page-buffer"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, scale: 1.05, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed inset-0 z-[9999] flex flex-col justify-center items-center"
            style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 85%, transparent)' }}
          >
            {/* Minimal Loader Design */}
            <motion.div 
              initial={{ scale: 0.6, opacity: 0, filter: "blur(15px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
              className="relative flex justify-center items-center w-32 h-32 mb-10 group"
            >
              {/* Floating Magic Particles */}
              <div className="absolute inset-[-80px] pointer-events-none z-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    initial={{ y: 20, opacity: 0, scale: 0.5 }}
                    animate={{ y: -60, opacity: [0, 0.8, 0], scale: 1 }}
                    transition={{
                      duration: 2 + i * 0.4,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                    className={`absolute rounded-full blur-[1px] ${
                      i % 2 === 0 ? "bg-[var(--primary)] w-1.5 h-1.5" : "bg-[#D4AF37] w-1 h-1"
                    }`}
                    style={{ left: `${15 + i * 15}%`, top: "70%" }}
                  />
                ))}
              </div>
              {/* Globe Core Backdrop Glow (Sky Blue everywhere) */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-[#87CEEB] blur-[30px] dark:blur-[40px] opacity-40"
              />

              {/* Minimal 3D Globe SVG with Sky Blue gradient everywhere */}
              <motion.div 
                className="relative z-10 w-16 h-16 rounded-full flex justify-center items-center overflow-hidden bg-gradient-to-br from-[#E0F6FF] via-[#87CEEB] to-[#0EA5E9] border border-[#E0F6FF]/60 shadow-[0_0_20px_rgba(135,206,235,0.6)] dark:shadow-[0_0_30px_rgba(135,206,235,0.4),inset_0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {/* Globe Grid Lines */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-white/40 drop-shadow-sm select-none">
                  <ellipse cx="50" cy="50" rx="20" ry="48" fill="none" stroke="currentColor" strokeWidth="1" />
                  <ellipse cx="50" cy="50" rx="35" ry="48" fill="none" stroke="currentColor" strokeWidth="1" />
                  <ellipse cx="50" cy="50" rx="48" ry="48" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M 2 50 Q 50 65 98 50" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M 2 50 Q 50 35 98 50" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M 12 25 Q 50 40 88 25" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M 12 75 Q 50 60 88 75" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </motion.div>

              {/* Glowing Outer Orbit & Airplane */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.8, ease: "linear" }}
                className="absolute w-28 h-28 rounded-full border border-[#D4AF37]/30 dark:border-[#D4AF37]/60 shadow-inner dark:shadow-[0_0_20px_rgba(212,175,55,0.25)] z-20"
              >
                {/* Airplane */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D4AF37] rotate-90 z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px] drop-shadow-[0_0_8px_#D4AF37] dark:drop-shadow-[0_0_12px_#F5D76E]">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                  {/* Intense Shiny Flare on Airplane in Dark Mode */}
                  <div className="hidden dark:block absolute top-[1px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white blur-[3px] opacity-60"></div>
                </div>
                {/* Light tail curve */}
                <div className="absolute top-0 left-0 w-14 h-14 rounded-tl-full border-t-[2.5px] border-l-[2.5px] border-[#D4AF37] dark:border-[#F5D76E] border-b-transparent border-r-transparent opacity-60 dark:opacity-90 filter blur-[1px] dark:drop-shadow-[0_0_8px_#D4AF37]"></div>
              </motion.div>
            </motion.div>

            {/* Fading Animated Text */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              className="relative text-center z-20"
            >
              <h2 className="text-xl md:text-2xl font-extrabold text-[#D4AF37] tracking-[0.2em] uppercase mb-3 drop-shadow-lg">
                Preparing Your Journey
              </h2>
              <div className="h-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={textIndex}
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-[var(--text)] text-sm md:text-base font-semibold tracking-widest drop-shadow-sm opacity-80"
                  >
                    {loadingTextStates[textIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="w-full min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
