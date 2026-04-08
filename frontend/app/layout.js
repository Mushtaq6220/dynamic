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
