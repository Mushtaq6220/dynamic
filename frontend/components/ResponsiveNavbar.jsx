"use client";

import dynamic from "next/dynamic";
import useDeviceType from "../hooks/useDeviceType";

const MobileNavbar = dynamic(() => import("./mobile/MobileNavbar"), { ssr: false });
const DesktopNavbar = dynamic(() => import("./desktop/DesktopNavbar"), { ssr: false });

export default function ResponsiveNavbar(props) {
  const { isMobile, isHydrated } = useDeviceType();

  if (!isHydrated) {
    // Render a minimal blank space or skeleton of the navbar height to avoid layout shift
    // For now we return null or a skeleton
    return <header className="h-[80px] w-full bg-white dark:bg-[#0A0F1C] border-b border-gray-100 dark:border-gray-800" />;
  }

  return isMobile ? <MobileNavbar {...props} /> : <DesktopNavbar {...props} />;
}
