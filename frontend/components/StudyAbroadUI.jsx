"use client";

import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  IdentificationIcon,
  MapIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

export default function StudyAbroadUI({ service }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.15 }
  };

  const features = [
    { title: "Visa Assistance", desc: "End-to-end support for student visa applications and interviews.", icon: IdentificationIcon },
    { title: "Admission Guidance", desc: "Expert help in selecting universities and securing offer letters.", icon: AcademicCapIcon },
    { title: "Travel Planning", desc: "Coordinating student-friendly routes and flight bookings.", icon: MapIcon },
    { title: "Documentation", desc: "SOP, LOR, and essential paperwork verification.", icon: DocumentTextIcon },
  ];

  const benefits = [
    { title: "Global Network", desc: "Partnerships with top universities worldwide.", icon: GlobeAltIcon },
    { title: "Personalized Support", desc: "Tailored career paths based on your goals.", icon: UserGroupIcon },
    { title: "Financial Guidance", desc: "Assistance with scholarships and student loans.", icon: BriefcaseIcon },
    { title: "Safe Journey", desc: "Complete insurance and pre-departure guidance.", icon: ShieldCheckIcon },
  ];

  const processSteps = [
    { step: "01", title: "Free Consultation", desc: "Discuss your academic goals and career aspirations." },
    { step: "02", title: "University Selection", desc: "Shortlist the best-fit universities and programs globally." },
    { step: "03", title: "Application Process", desc: "Prepare SOPs, LORs, and submit error-free applications." },
    { step: "04", title: "Visa Approval", desc: "Mock interviews, financial documents, and visa filing." },
    { step: "05", title: "Travel & Settlement", desc: "Flight booking, accommodation, and pre-departure check." },
  ];

  const destinations = [
    { country: "United Kingdom", icon: "https://flagcdn.com/w80/gb.png", tag: "Top Rated" },
    { country: "United States", icon: "https://flagcdn.com/w80/us.png", tag: "Most Popular" },
    { country: "Canada", icon: "https://flagcdn.com/w80/ca.png", tag: "High ROI" },
    { country: "Australia", icon: "https://flagcdn.com/w80/au.png", tag: "Student Friendly" },
  ];

  return (
    <div className="space-y-32 pb-24 overflow-hidden font-sans">
      
      {/* 🧭 1. HERO SECTION */}
      <section className="relative rounded-[40px] overflow-hidden min-h-[700px] flex items-center bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] dark:from-[#061A2B] dark:to-[#0B3C5D] border border-black/5 dark:border-white/5">
        
        {/* Soft Animated Background Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#D4AF37]/10 dark:bg-[#D4AF37]/5 blur-[120px] rounded-full opacity-60" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300/30 dark:bg-blue-600/10 blur-[100px] rounded-full opacity-50" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Elegant typography & Glass Card */}
          <div className="w-full lg:w-[50%] flex-shrink-0 relative z-20">
            <motion.div 
              {...fadeInUp}
              className="bg-white/40 dark:bg-[#061A2B]/40 backdrop-blur-[20px] p-8 md:p-12 rounded-[32px] border border-white/50 dark:border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#D4AF37]"></div>
                <span className="text-[#0B3C5D] dark:text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">Study Abroad Program</span>
              </div>

              <h1 className="text-[#0F172A] dark:text-white text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 font-serif">
                Unlock Your Global <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B3C5D] to-[#D4AF37] dark:from-[#D4AF37] dark:to-white">
                  Education Journey
                </span>
              </h1>

              <div className="space-y-4 mb-8">
                <p className="text-[#0F172A] dark:text-[#E2E8F0] font-medium text-xl leading-relaxed">
                  Study Abroad with Confidence & Expert Guidance.
                </p>
                <p className="text-[#334155] dark:text-[#CBD5E1] text-base leading-[1.7] opacity-90 max-w-lg">
                  We help you choose the right university, secure admissions, handle visa processes, and plan your journey seamlessly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 mb-4">
                <button className="bg-gradient-to-r from-[#D4AF37] to-[#eec95d] hover:from-[#c29f30] hover:to-[#d4af37] shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.6)] py-4 px-8 rounded-full text-[#0B3C5D] font-extrabold tracking-wide flex items-center justify-center gap-3 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <span className="relative z-10">Get Free Consultation</span>
                  <ArrowRightIcon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                </button>
                <button className="bg-transparent hover:bg-[#0B3C5D]/5 dark:hover:bg-white/10 border-2 border-[#0B3C5D] dark:border-white/50 text-[#0B3C5D] dark:text-white py-4 px-8 rounded-full font-bold transition-all duration-300 hover:-translate-y-1">
                  Explore Universities
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image Zoom Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[50%] relative group"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/40 dark:border-white/10 aspect-square lg:aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/60 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students celebrating graduation" 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
              />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 z-20 glass-panel !bg-white/90 dark:!bg-[#061A2B]/80 !border-white/20 p-5 rounded-2xl flex items-center justify-between transform transition-transform group-hover:-translate-y-2">
                <div>
                  <p className="text-[#334155] dark:text-[#CBD5E1] text-xs font-bold uppercase tracking-wider mb-1">Success Rate</p>
                  <p className="text-[#0F172A] dark:text-white text-2xl font-black">99.8%</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <AcademicCapIcon className="w-6 h-6 text-[#D4AF37]" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 🌍 2. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] dark:text-white font-serif">Our Expertise</h2>
          <p className="text-[#334155] dark:text-[#CBD5E1] text-lg max-w-2xl mx-auto">Comprehensive support for every stage of your international education.</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white dark:bg-[#0B3C5D]/40 p-8 rounded-[24px] border border-[#E2E8F0] dark:border-white/5 hover:border-[#D4AF37]/50 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] dark:bg-[#061A2B] border border-[#E2E8F0] dark:border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 transition-colors">
                <feat.icon className="w-7 h-7 text-[#0B3C5D] dark:text-white group-hover:text-[#D4AF37] transition-colors group-hover:scale-110 duration-300" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0F172A] dark:text-white mb-3">{feat.title}</h3>
              <p className="text-[#1E293B] dark:text-[#F8FAFC] text-[15px] font-semibold leading-[1.6]">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ⭐ 3. WHY CHOOSE US */}
      <section className="bg-gradient-to-br from-[#F8FAFC] to-white dark:from-[#061A2B] dark:to-[#0B3C5D]/50 rounded-[40px] border border-[#E2E8F0] dark:border-white/5 max-w-7xl mx-auto p-10 md:p-16 lg:p-20 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <motion.div {...fadeInUp} className="w-full lg:w-1/2">
            <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">The FLY Advantage</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] dark:text-white mb-10 leading-tight font-serif">
              Why Choose Our Academic Expertise?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {benefits.map((ben, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-[#0B3C5D] shadow-sm flex items-center justify-center border border-[#E2E8F0] dark:border-white/5 group-hover:bg-[#D4AF37] transition-colors">
                    <ben.icon className="w-6 h-6 text-[#0B3C5D] dark:text-white group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] dark:text-white text-lg mb-2">{ben.title}</h4>
                    <p className="text-sm text-[#334155] dark:text-[#CBD5E1] leading-relaxed opacity-90">{ben.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div {...fadeInUp} className="w-full lg:w-1/2">
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-2xl border border-white/20 group">
              <img 
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students Collaboration" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061A2B]/90 via-[#061A2B]/40 to-transparent flex items-end p-10">
                <p className="text-white font-serif italic text-xl leading-[1.6]">
                  "Empowering the next generation of global citizens through collaborative learning."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🛤️ 4. PROCESS TIMELINE */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] dark:text-white font-serif">The Application Process</h2>
          <p className="text-blue-500 dark:text-blue-400 font-medium text-lg max-w-2xl mx-auto">Your journey from dream to reality, simplified into 5 actionable steps.</p>
        </motion.div>

        <div className="relative">
          {/* Animated Line connecting steps (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-1 bg-gradient-to-r from-[#E2E8F0] via-[#D4AF37] to-[#E2E8F0] dark:from-[#0B3C5D] dark:via-[#D4AF37] dark:to-[#0B3C5D] opacity-30 rounded-full"></div>
          
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between">
            {processSteps.map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative z-10 w-full lg:w-1/5 flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="w-24 h-24 rounded-full bg-white dark:bg-[#061A2B] shadow-lg border-4 border-[#F1F5F9] dark:border-[#0B3C5D] flex items-center justify-center mb-6 group-hover:border-[#D4AF37] transition-colors relative">
                  <span className="text-2xl font-black text-[#0B3C5D] dark:text-white group-hover:text-[#D4AF37] transition-colors">{step.step}</span>
                  {/* Active dot */}
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="font-extrabold text-red-600 dark:text-red-500 text-lg mb-2 drop-shadow-sm transition-colors">{step.title}</h4>
                <p className="text-[15px] font-semibold text-blue-500 dark:text-blue-300 leading-relaxed max-w-[220px]">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🗺️ 5. COUNTRIES / DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] dark:text-white font-serif mb-4">Top Destinations</h2>
            <p className="text-[#334155] dark:text-[#CBD5E1] text-lg">Choose from the world's most prestigious academic hubs.</p>
          </div>
          <button className="text-[#0B3C5D] dark:text-[#D4AF37] font-bold flex items-center gap-2 hover:underline">
            View All Countries <ArrowRightIcon className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white dark:bg-[#0B3C5D]/40 p-8 rounded-[24px] border border-[#E2E8F0] dark:border-white/10 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer group relative overflow-hidden flex flex-col h-full hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="absolute top-4 right-4 bg-[#0B3C5D] dark:bg-white text-xs font-bold px-3 py-1.5 rounded-full text-white dark:text-[#0B3C5D] shadow-md z-10 transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-white">
                {dest.tag}
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-[3px] border-[#F1F5F9] dark:border-white/10 shadow-sm mt-2 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                <img src={dest.icon} alt={dest.country} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-6 flex-grow">{dest.country}</h3>
              
              <div className="mt-auto pt-4 border-t border-[#F1F5F9] dark:border-white/10">
                <button className="w-full py-3 px-4 bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-transparent group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] text-[#0F172A] dark:text-white group-hover:text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-between">
                  View Universities
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 6. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-[#061A2B] to-[#0B3C5D] p-12 md:p-20 text-center border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          {/* Gold Glow */}
          <div className="absolute -top-[50%] left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#D4AF37]/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold !text-white mb-6 font-serif leading-tight drop-shadow-md">
              Start Your Study Abroad <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Journey</span> Today
            </h2>
            <p className="text-[#E2E8F0] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Don't let complex procedures hold you back. Let our experts chart the perfect path to your dream university.
            </p>
            
            <a 
              href="https://wa.me/916281144625?text=I%20want%20to%20know%20more%20about%20Study%20Abroad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] py-5 px-10 rounded-full text-white font-extrabold text-lg transition-all duration-300 hover:-translate-y-1 transform group"
            >
              <ChatBubbleLeftRightIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
              Talk to Expert on WhatsApp
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
