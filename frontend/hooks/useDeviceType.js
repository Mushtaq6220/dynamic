"use client";

import { useState, useEffect } from "react";

export default function useDeviceType() {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isHydrated: false,
  });

  useEffect(() => {
    // Determine the device type based on standard breakpoints
    const handleResize = () => {
      const width = window.innerWidth;
      setDevice({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        isHydrated: true,
      });
    };

    // Initial check on mount
    handleResize();

    // Debounce the resize event to improve performance
    let timeoutId = null;
    const debouncedResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", debouncedResize);
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return device;
}
