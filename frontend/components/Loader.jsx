"use client";

import { motion } from "framer-motion";

export default function Loader({ progress = 0, compact = false }) {
  const shellClasses = compact
    ? "min-h-[40vh] rounded-[32px] border border-white/10 bg-[color:var(--panel)] px-6 py-8 shadow-2xl backdrop-blur-xl"
    : "min-h-screen w-full";

  return (
    <div className={`${shellClasses} relative flex items-center justify-center overflow-hidden`}>
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[8%] top-[16%] h-28 w-28 rounded-full bg-emerald-400/15 blur-3xl dark:bg-emerald-300/10" />
        <div className="absolute right-[12%] top-[14%] h-36 w-36 rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-300/10" />
        <div className="absolute bottom-[10%] left-1/3 h-32 w-32 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-300/10" />
      </div>

      <div className="relative z-10 w-full max-w-xl px-6 text-center">
        <div className="glass-panel-strong rounded-[36px] px-8 py-10">
          <div className="relative mx-auto mb-8 h-28 w-full max-w-md overflow-hidden rounded-full border border-white/15 bg-white/10 dark:bg-white/5">
            <motion.div
              className="absolute inset-y-1 left-2 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-10%", "130%"] }}
              transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              style={{ width: "40%" }}
            />
            <motion.div
              className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-3"
              animate={{ x: ["-5%", "88%"] }}
              transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="flight-spinner-trail h-3 w-20 rounded-full bg-gradient-to-r from-sky-400/0 via-sky-300/40 to-sky-200/80 blur-md" />
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/40 bg-white/80 text-2xl text-emerald-700 shadow-lg dark:bg-slate-900/90 dark:text-amber-200">
                ✈
              </div>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold tracking-tight text-[color:var(--text)] md:text-4xl"
          >
            Hajj & Umrah Travels
          </motion.h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[color:var(--muted)] md:text-base">
            Preparing sacred journeys, visa support, and managed flight services with a calm aviation-inspired experience.
          </p>

          <div className="mt-8 overflow-hidden rounded-full bg-[color:var(--line)] p-1">
            <motion.div
              className="h-3 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.32em] text-[color:var(--muted)]">
            Loading {progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
