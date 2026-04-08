"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AdminGuardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("fly_admin_session");
    
    // If on /admin itself, the page.js handles it
    if (pathname === "/admin") {
      setAuthorized(true);
      return;
    }

    if (session !== "active") {
      router.push("/admin");
    } else {
      setAuthorized(true);
    }
  }, [pathname, router]);

  if (!authorized) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#061A2B] flex items-center justify-center">
         <div className="w-12 h-12 border-4 border-[#0B3C5D] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return children;
}
