"use client";

import { motion } from "framer-motion";

const planes = [
  {
    style: { top: "10%", left: "4%" },
    x: [0, 80, 30, 0],
    y: [0, 40, -18, 0],
    rotate: [-24, -8, -18, -24],
    duration: 24,
    delay: 0,
    scale: 1.05,
  },
  {
    style: { top: "18%", right: "5%" },
    x: [0, -92, -28, 0],
    y: [0, 30, -22, 0],
    rotate: [148, 168, 158, 148],
    duration: 28,
    delay: 1.4,
    scale: 1.1,
  },
  {
    style: { bottom: "14%", left: "6%" },
    x: [0, 100, 34, 0],
    y: [0, -54, -8, 0],
    rotate: [24, 8, 18, 24],
    duration: 26,
    delay: 0.8,
    scale: 0.95,
  },
  {
    style: { bottom: "10%", right: "4%" },
    x: [0, -110, -40, 0],
    y: [0, -46, 12, 0],
    rotate: [200, 182, 194, 200],
    duration: 30,
    delay: 2.2,
    scale: 1,
  },
  {
    style: { top: "46%", left: "48%" },
    x: [0, 46, -36, 0],
    y: [0, -38, 26, 0],
    rotate: [86, 106, 78, 86],
    duration: 32,
    delay: 1.1,
    scale: 0.82,
  },
];

function PlaneMark() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 6L35 23L53 21C55.7 20.7 57.7 23.6 56.2 25.8L45.5 31L56.2 36.1C58.4 37.2 56.8 40.5 54.2 40.4L35 39L30 58L25 39L7.8 40.4C5.2 40.5 3.6 37.2 5.8 36.1L16.5 31L5.8 25.8C4.3 23.6 6.3 20.7 9 21L25 23L30 6Z"
        fill="url(#planeFill)"
        stroke="rgba(255,255,255,0.82)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="planeFill" x1="8" y1="8" x2="54" y2="54">
          <stop offset="0%" stopColor="#F2FBFF" />
          <stop offset="55%" stopColor="#7BC7F3" />
          <stop offset="100%" stopColor="#2571B8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(159,220,255,0.34),transparent_18%),radial-gradient(circle_at_82%_18%,rgba(118,184,255,0.18),transparent_18%),radial-gradient(circle_at_70%_84%,rgba(174,235,255,0.18),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02))] dark:bg-[radial-gradient(circle_at_12%_10%,rgba(111,188,255,0.14),transparent_18%),radial-gradient(circle_at_82%_18%,rgba(118,184,255,0.12),transparent_18%),radial-gradient(circle_at_70%_84%,rgba(95,188,255,0.12),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.12))]" />
      <div className="absolute inset-0 grid-pattern opacity-45 dark:opacity-20" />

      <svg className="absolute inset-0 h-full w-full opacity-45 dark:opacity-25" viewBox="0 0 1600 900" preserveAspectRatio="none">
        <path className="flight-path" d="M-20 180 C 220 40, 430 360, 760 260 S 1320 130, 1620 220" fill="none" stroke="rgba(214,177,96,0.48)" strokeWidth="2" />
        <path className="flight-path" d="M0 760 C 220 680, 430 840, 760 660 S 1280 540, 1605 820" fill="none" stroke="rgba(78,167,223,0.5)" strokeWidth="2" />
        <path className="flight-path" d="M260 900 C 520 720, 810 860, 1180 520 S 1490 260, 1600 150" fill="none" stroke="rgba(109,198,214,0.45)" strokeWidth="2" />
        <path className="flight-path" d="M1600 120 C 1350 280, 1180 420, 920 520 S 420 640, 180 820" fill="none" stroke="rgba(134,197,255,0.36)" strokeWidth="2" />
      </svg>

      <div className="sky-glow absolute left-[2%] top-[6%] h-52 w-52 rounded-full opacity-85 blur-3xl dark:opacity-35" />
      <div className="sky-glow absolute right-[4%] top-[10%] h-44 w-44 rounded-full opacity-70 blur-3xl dark:opacity-25" />
      <div className="sky-glow absolute bottom-[8%] left-[18%] h-48 w-48 rounded-full opacity-75 blur-3xl dark:opacity-30" />
      <div className="absolute left-[8%] top-[14%] h-20 w-32 rounded-full bg-white/45 blur-3xl dark:bg-sky-100/5" />
      <div className="absolute right-[10%] top-[22%] h-16 w-28 rounded-full bg-white/40 blur-3xl dark:bg-sky-100/5" />
      <div className="absolute bottom-[14%] right-[20%] h-20 w-36 rounded-full bg-white/35 blur-3xl dark:bg-sky-100/5" />

      {planes.map((plane, index) => (
        <motion.div
          key={`${index}`}
          className="absolute h-10 w-10 opacity-80 drop-shadow-[0_6px_12px_rgba(67,143,214,0.22)] dark:opacity-45"
          style={plane.style}
          animate={{
            x: plane.x,
            y: plane.y,
            rotate: plane.rotate,
            scale: [plane.scale, plane.scale + 0.05, plane.scale - 0.04, plane.scale],
          }}
          transition={{
            duration: plane.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: plane.delay,
          }}
        >
          <PlaneMark />
        </motion.div>
      ))}
    </div>
  );
}
