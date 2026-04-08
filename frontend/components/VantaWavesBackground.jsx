"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VantaWavesBackground() {
  const containerRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      if (!mounted || !containerRef.current || effectRef.current) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const wavesModule = await import("vanta/dist/vanta.waves.min");
      const WAVES = wavesModule.default;

      effectRef.current = WAVES({
        el: containerRef.current,
        THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0x71bfff,
        shininess: 34,
        waveHeight: 34,
        waveSpeed: 0.75,
        zoom: 0.72,
        backgroundColor: 0xfafdff,
      });
    };

    init();

    return () => {
      mounted = false;
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div className="vanta-shell" aria-hidden="true">
      <div ref={containerRef} className="vanta-waves-surface" />
      <div className="vanta-waves-overlay" />
      <div className="vanta-fallback-waves">
        <span className="vanta-fallback-wave wave-one" />
        <span className="vanta-fallback-wave wave-two" />
        <span className="vanta-fallback-wave wave-three" />
      </div>
    </div>
  );
}
