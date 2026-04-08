"use client";

import { useEffect, useState } from "react";

export default function useLoader(duration = 2200) {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let animationFrame;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const ratio = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);
      setProgress(Math.round(eased * 100));

      if (ratio < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setComplete(true);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [duration]);

  return { progress, complete };
}
