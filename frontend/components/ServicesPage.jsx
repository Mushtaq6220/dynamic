"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  PaperAirplaneIcon,
  DocumentCheckIcon,
  AcademicCapIcon,
  TicketIcon,
  IdentificationIcon,
  GlobeAltIcon,
  MoonIcon,
  StarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  // Service Data
  const servicesData = [
    { id: "visa", category: "documentation", icon: IdentificationIcon, title: "Visa Stamping", desc: "Expert embassy processing for fast and reliable approvals.", link: "/services/visa-stamping", styleType: "centered" },
    { id: "air", category: "travel", icon: PaperAirplaneIcon, title: "Air Ticketing", desc: "Global flight reservations with optimal routing and pricing.", link: "/services/air-ticketing", styleType: "centered" },
    { id: "train", category: "travel", icon: TicketIcon, title: "Train Ticket Booking", desc: "Seamless rail network bookings across major international routes.", link: "/services/train-ticket-booking", styleType: "centered" },
    { id: "visit", category: "global", icon: GlobeAltIcon, title: "Visit Visa", desc: "Comprehensive tourist and family visa processing.", link: "/services/visit-visa", styleType: "centered" },
    { id: "attestation", category: "documentation", icon: DocumentCheckIcon, title: "Certificate Attestation", desc: "Secure multi-tier legalization of educational and commercial documents.", link: "/services/certificate-attestations", styleType: "centered" },
    { id: "study", category: "global", icon: AcademicCapIcon, title: "Study Abroad", desc: "End-to-end university placement and student visa handling.", link: "/services/study-abroad", styleType: "centered" },
  ];

  const filteredServices = activeTab === "all" ? servicesData : servicesData.filter(s => s.category === activeTab);

  return (
    <main className="relative bg-[var(--bg)] text-[var(--text)] overflow-hidden font-sans">
      
      {/* SECTION 1: HERO HEADER */}
      <section className="relative pt-32 pb-16 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EEF6FF] to-[var(--bg)] dark:from-[#0A0F1C] dark:to-[var(--bg)] z-0"></div>
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B3C5D] dark:text-[#F9FAFB] mb-6 tracking-tight leading-tight serif-heading">
            Explore Our Travel & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[#0284C7] dark:from-[#D4AF37] dark:to-[#F3D67A] italic font-light">Documentation Services</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            Complete solutions for your journeys, ensuring peace of mind from planning to arrival.
          </p>
        </motion.div>
      </section>

      {/* SECTION 2: FEATURED SERVICES (HIGHLIGHT STYLE) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Featured Card 1 */}
          <motion.div variants={fadeUp} className="group relative rounded-[30px] bg-gradient-to-br from-white to-[#F0F9FF] border border-[#BAE6FD] p-8 flex flex-col md:flex-row items-start md:items-center gap-8 shadow-sm hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="w-20 h-20 flex-shrink-0 rounded-[20px] bg-[#E0F2FE] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-[#BAE6FD]">
              <MoonIcon className="w-10 h-10 text-[#0EA5E9]" />
            </div>
            <div className="flex-1">
              <span className="text-[#0EA5E9] font-bold tracking-widest uppercase text-xs mb-2 block">Flagship Service</span>
              <h3 className="text-2xl font-bold text-[#0B3C5D] mb-3">Hajj & Umrah Packages</h3>
              <p className="text-[#334155] leading-relaxed mb-6">Expertly curated spiritual journeys featuring premium stays, guided ziyarat, and seamless ground logistics.</p>
              <Link href="/packages" className="inline-flex items-center gap-2 text-sm font-bold text-[#0EA5E9] hover:text-[#0284C7] group-hover:gap-3 transition-all">
                Explore Packages <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Featured Card 2 */}
          <motion.div variants={fadeUp} className="group relative rounded-[30px] bg-gradient-to-br from-white to-[#F1F5F9] border border-[#E2E8F0] p-8 flex flex-col md:flex-row items-start md:items-center gap-8 shadow-sm hover:shadow-[0_20px_40px_rgba(11,60,93,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="w-20 h-20 flex-shrink-0 rounded-[20px] bg-white border border-[#E2E8F0] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
              <CheckCircleIcon className="w-10 h-10 text-[#0EA5E9]" />
            </div>
            <div className="flex-1">
              <span className="text-[#0EA5E9] font-bold tracking-widest uppercase text-xs mb-2 block">High Priority</span>
              <h3 className="text-2xl font-bold text-[#0B3C5D] mb-3">Visa Stamping</h3>
              <p className="text-[#475569] leading-relaxed mb-6">Fast and reliable embassy visa stamping services for major international pathways, fully managed by our experts.</p>
              <Link href="/services/visa-stamping" className="inline-flex items-center gap-2 text-sm font-bold text-[#0EA5E9] hover:text-[#0284C7] group-hover:gap-3 transition-all">
                Explore Service <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 4 & 5: CATEGORIES & MAIN GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--heading)] serif-heading">Service Categories</h2>
          
          {/* TABS */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center p-1.5 bg-white border border-[#E2E8F0] rounded-full shadow-sm max-w-full overflow-x-auto hide-scrollbar">
              {[
                { id: "all", label: "All Services" },
                { id: "travel", label: "Travel" },
                { id: "documentation", label: "Documentation" },
                { id: "global", label: "Global" }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`
                    px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap
                    ${activeTab === cat.id 
                      ? 'bg-[#0EA5E9] text-white shadow-md' 
                      : 'text-[#475569] hover:text-[#0B3C5D] hover:bg-[#F1F5F9]'}
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SERVICES GRID (MIXED STYLES) */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial="hidden" animate="visible" exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredServices.map((srv) => (
              <motion.div key={srv.id} variants={fadeUp} className="h-full">
                {/* DYNAMIC RENDER BASED ON STYLE TYPE */}
                
                {srv.styleType === "gradient" && (
                  <div className="group relative h-full rounded-[24px] bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-white border border-[#BAE6FD] p-8 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(14,165,233,0.15)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-white border border-[#BAE6FD] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <srv.icon className="w-7 h-7 text-[#0EA5E9]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0B3C5D] mb-3 relative z-10">{srv.title}</h3>
                      <p className="text-[#334155] text-sm leading-relaxed mb-8 relative z-10">{srv.desc}</p>
                    </div>
                    {/* Sliding Button */}
                    <Link href={srv.link} className="relative z-10 flex items-center justify-between w-full p-4 rounded-xl bg-white font-bold text-sm text-[#0B3C5D] shadow-sm border border-[#BAE6FD] group-hover:bg-[#0EA5E9] group-hover:text-white group-hover:border-[#0284C7] transition-all duration-300">
                      View details <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                )}

                {srv.styleType === "horizontal" && (
                  <div className="group relative h-full rounded-[24px] bg-gradient-to-tr from-[#F8FAFC] to-white border border-[#E2E8F0] p-6 md:p-8 hover:-translate-y-2 hover:border-[#7DD3FC] hover:shadow-[0_10px_20px_rgba(14,165,233,0.08)] transition-all duration-300 flex flex-col justify-between">
                    <div className="flex items-start gap-5 mb-8">
                      <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center group-hover:bg-[#0EA5E9] transition-colors duration-300 shadow-sm">
                        <srv.icon className="w-6 h-6 text-[#0EA5E9] group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="text-[1.15rem] font-bold text-[#0B3C5D] mb-2 group-hover:text-[#0EA5E9] transition-colors">{srv.title}</h3>
                        <p className="text-[#475569] text-sm leading-relaxed">{srv.desc}</p>
                      </div>
                    </div>
                    {/* The Full Width Button from Visa Stamping */}
                    <Link href={srv.link} className="relative z-10 flex flex-shrink-0 items-center justify-between w-full p-4 rounded-xl bg-white font-bold text-sm text-[#0B3C5D] shadow-sm border border-[#BAE6FD] group-hover:bg-[#0EA5E9] group-hover:text-white group-hover:border-[#0284C7] transition-all duration-300 mt-auto">
                      View details <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                )}

                {srv.styleType === "centered" && (
                  <div className="group relative h-full rounded-[24px] bg-white border border-[#BAE6FD] p-8 text-center hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(14,165,233,0.12)] transition-all duration-300 flex flex-col items-center justify-between overflow-hidden">
                    {/* Floating Hover Background */}
                    <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-[#E0F2FE] to-transparent opacity-0 group-hover:h-[80%] group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative z-10 flex flex-col items-center flex-grow mb-8">
                      <div className="w-16 h-16 rounded-full border border-[#BAE6FD] bg-[#F0F9FF] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-sm">
                        <srv.icon className="w-8 h-8 text-[#0EA5E9]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">{srv.title}</h3>
                      <p className="text-[#334155] text-sm leading-relaxed">{srv.desc}</p>
                    </div>
                    {/* The Full Width Button from Visa Stamping */}
                    <Link href={srv.link} className="relative z-10 flex flex-shrink-0 items-center justify-between w-full p-4 rounded-xl bg-white font-bold text-sm text-[#0B3C5D] shadow-sm border border-[#BAE6FD] group-hover:bg-[#0EA5E9] group-hover:text-white group-hover:border-[#0284C7] transition-all duration-300 mt-auto">
                      View details <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                )}
                
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* SECTION 4: PROCESS FLOW (HOW IT WORKS) */}
      <section className="py-24 px-6 bg-[var(--surface-strong)] relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#0B3C5D 1px, transparent 1px), linear-gradient(90deg, #0B3C5D 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-[var(--primary)] dark:text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-3 block">Simple & Intuitive</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--heading)] serif-heading">How It Works</h2>
          </div>

          <div className="relative">
            {/* Horizontal Timeline Connector */}
            <div className="hidden lg:block absolute top-[45px] left-[12%] right-[12%] h-[2px] bg-[var(--border)] dark:bg-[#1E293B] z-0 overflow-hidden">
               <div className="absolute top-0 left-0 h-full w-[20%] bg-[#0EA5E9] dark:bg-[#D4AF37] animate-[slideRight_3s_ease-in-out_infinite]"></div>
            </div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10"
            >
              {[
                { step: "01", title: "Choose Service", desc: "Select the specific travel or documentation service you require from our catalog.", icon: ClipboardDocumentCheckIcon },
                { step: "02", title: "Submit Details", desc: "Provide necessary documents securely through our streamlined intake system.", icon: DocumentCheckIcon },
                { step: "03", title: "Processing", desc: "Our expert team handles the complexities and coordinates with relevant authorities.", icon: ClockIcon },
                { step: "04", title: "Completion", desc: "Receive your approved documents or finalized travel arrangements instantly.", icon: CheckCircleIcon },
              ].map((phase, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center text-center group cursor-default">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full bg-white dark:bg-[#111827] border-[4px] border-[var(--surface-strong)] dark:border-[#1E293B] shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:border-[#0EA5E9] dark:group-hover:border-[#D4AF37] transition-all duration-300 z-10 relative">
                      <phase.icon className="w-8 h-8 text-[#0B3C5D] dark:text-[#F9FAFB] group-hover:text-[#0EA5E9] dark:group-hover:text-[#D4AF37] transition-colors" />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0B3C5D] dark:bg-[#D4AF37] text-white dark:text-[#0A0F1C] font-bold text-sm flex items-center justify-center shadow-lg border-2 border-white dark:border-[#111827]">
                      {phase.step}
                    </div>
                  </div>
                  <h4 className="text-xl font-extrabold text-[var(--heading)] mb-3">{phase.title}</h4>
                  <p className="text-sm font-medium text-[var(--text-muted)] max-w-[240px] leading-relaxed mx-auto">{phase.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(500%); opacity: 0; }
        }
      `}</style>
    </main>
  );
}

function ClockIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}
