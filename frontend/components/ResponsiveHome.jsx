"use client";

import dynamic from "next/dynamic";
import useDeviceType from "../hooks/useDeviceType";

const MobileHome = dynamic(() => import("./mobile/MobileHome"), { ssr: false });
const DesktopHome = dynamic(() => import("./desktop/DesktopHome"), { ssr: false });

export default function ResponsiveHome(props) {
  const { isMobile, isHydrated } = useDeviceType();

  if (!isHydrated) {
    return <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0A0F1C]" />;
  }

  return isMobile ? <MobileHome {...props} /> : <DesktopHome {...props} />;
}
