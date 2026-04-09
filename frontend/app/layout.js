"use client";

import "../styles/globals.css";
import PremiumFooter from "../components/PremiumFooter";
import PremiumNavbar from "../components/PremiumNavbar";
import FloatingSupportWidget from "../components/FloatingSupportWidget";
import PageTransitionProvider from "../components/PageTransitionProvider";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>FLY International Tours and Travels</title>
        <meta name="description" content="Premium Hajj, Umrah, and Global Travel Solutions including Visa, Air Ticketing, and Certificate Attestations." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="site-body">
        {/* Hide public navbar on admin pages */}
        {!isAdminPage && <PremiumNavbar />}
        
        <div className={isAdminPage ? "admin-content-wrapper" : "site-content"}>
          <PageTransitionProvider>
            {children}
          </PageTransitionProvider>
          
          {/* Hide public footer on admin pages */}
          {!isAdminPage && <PremiumFooter />}
        </div>

        {/* Hide floating tools on admin pages */}
        {!isAdminPage && <FloatingSupportWidget />}
      </body>
    </html>
  );
}
