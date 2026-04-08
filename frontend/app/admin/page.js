"use client";

import { useState, useEffect } from "react";
import AdminLoginPage from "../../components/admin/AdminLoginPage";
import AdminLayout from "../../components/admin/AdminLayout";
import DashboardHome from "../../components/admin/DashboardHome";
import InquiryManager from "../../components/admin/InquiryManager";
import FlightManager from "../../components/admin/FlightManager";
import PackageManager from "../../components/admin/PackageManager";
import ServiceManager from "../../components/admin/ServiceManager";

export default function AdminMainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    // Check local storage for session
    const session = localStorage.getItem("fly_admin_session");
    if (session === "active") {
      setIsLoggedIn(true);
    }
    setIsVerifying(false);
  }, []);

  const handleLogin = (success) => {
    if (success) {
      localStorage.setItem("fly_admin_session", "active");
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("fly_admin_session");
    setIsLoggedIn(false);
  };

  if (isVerifying) return <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#061A2B]"></div>;

  if (!isLoggedIn) {
    return <AdminLoginPage onLogin={handleLogin} />;
  }

  return (
    <AdminLayout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      onLogout={handleLogout}
    >
      {activeTab === "dashboard" && <DashboardHome />}
      {activeTab === "packages" && <PackageManager />}
      {activeTab === "services" && <ServiceManager />}
      {activeTab === "inquiries" && <InquiryManager />}
      {activeTab === "flights" && <FlightManager />}
    </AdminLayout>
  );
}
