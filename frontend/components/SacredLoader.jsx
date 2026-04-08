"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingTextStates = [
  "Arranging your travel experience with care",
  "Guiding you every step of the way",
  "Almost ready...",
];

export default function SacredLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  // Handle the text transition
  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTextStates.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isLoading]);

  // Handle overall load state completion (simulated for initial boot)
  useEffect(() => {
    // Hide the loader after 3 seconds for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="sacred-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col justify-center items-center bg-gradient-to-br from-[#0B3C5D] to-[#041522] overflow-hidden"
        >
          {/* Subtle Islamic Motif Background */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>

          {/* Floating Light Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#D4AF37] blur-[2px]"
              initial={{
                x: Math.random() * window.innerWidth - window.innerWidth / 2,
                y: Math.random() * window.innerHeight - window.innerHeight / 2,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                y: [null, Math.random() * -200, Math.random() * -400],
                opacity: [0, 0.7, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Core Animation Container */}
          <div className="relative flex justify-center items-center w-64 h-64 mb-12">
            {/* Pulsing Back Glow */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-[#D4AF37] blur-[80px]"
            ></motion.div>

            {/* Inner Tawaf Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute w-40 h-40 rounded-full border border-[#D4AF37]/30 border-dashed"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_#ffffff]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white/70 shadow-[0_0_10px_#ffffff]" />
            </motion.div>

            {/* Outer Airplane Journey Orbit */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute w-60 h-60 rounded-full border border-white/10"
            >
              {/* Airplane Icon mapping the orbit */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-90 text-[#D4AF37]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                </svg>
              </div>
            </motion.div>

            {/* Minimal Kaaba Silhouette */}
            <motion.div
              className="relative z-10 w-16 h-20 bg-black rounded-sm border-t-2 border-[#D4AF37] shadow-xl box-border"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute top-2 w-full h-1 bg-[#D4AF37]" />
            </motion.div>
          </div>

          {/* Text Section */}
          <div className="relative z-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wider serif-heading mb-3">
              Preparing Your Sacred Journey...
            </h2>
            <div className="h-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={textIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#D4AF37] font-medium tracking-wide text-sm md:text-base"
                >
                  {loadingTextStates[textIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
