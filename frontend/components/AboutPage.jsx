"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  HeartIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  ScaleIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

// Compact Animated Counter
const CompactCounter = ({ from = 0, to, duration = 2, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime = null;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{prefix}{count}{suffix}</span>;
};

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <main className="relative bg-[var(--bg)] text-[var(--text)] overflow-hidden font-sans">
      
      {/* SECTION 1: MINIMAL HERO */}
      <section className="relative pt-32 pb-16 px-6 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full"
        >
          <span className="text-[var(--primary)] dark:text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B3C5D] dark:text-[#D4AF37] mb-6 tracking-tight leading-loose serif-heading drop-shadow-sm">
            Navigating the globe, <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3D67A] italic font-light">honoring your traditions.</span>
          </h1>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[var(--primary)] dark:from-[#D4AF37] to-transparent mx-auto mt-8 mb-4"></div>
        </motion.div>
      </section>

      {/* SECTION 2: BRAND STORY */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="flex flex-col gap-6"
        >
          <motion.p variants={fadeUp} className="text-xl md:text-2xl font-medium text-[var(--heading)] leading-relaxed serif-heading">
            FLY International Tours & Travels was established with a singular focus: to strip away the complexities of international travel and documentation.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-lg leading-relaxed">
            We specialize in curating dignified, stress-free <strong className="text-[var(--text)] font-semibold">Hajj & Umrah experiences</strong>, ensuring every detail is managed with deep respect and precision. 
          </motion.p>
          <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-lg leading-relaxed">
            Beyond pilgrimage, we serve as a comprehensive travel infrastructure. From expediting strict <strong className="text-[var(--text)] font-semibold">Visa Stamping</strong> and <strong className="text-[var(--text)] font-semibold">Certificate Attestations</strong>, to supporting students venturing into <strong className="text-[var(--text)] font-semibold">Study Abroad</strong> programs, we handle the coordination so you don't have to.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-lg leading-relaxed">
            We believe in simple communication, reliable execution, and prioritizing human care above all else.
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION 3: WHAT MAKES US DIFFERENT (HIGHLIGHT STRIP) */}
      <section className="py-12 bg-gradient-to-r from-[var(--surface)] via-[var(--bg)] to-[var(--surface)] border-y border-[var(--border)] dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto pb-4 hide-scrollbar">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="flex flex-nowrap md:grid md:grid-cols-4 gap-6 min-w-[800px] md:min-w-0"
          >
            {[
              { title: "Personalized Guidance", desc: "Tailored advice for your specific needs.", icon: UserGroupIcon },
              { title: "Complete Documentation", desc: "Flawless attestation & visa handling.", icon: DocumentTextIcon },
              { title: "Transparent Process", desc: "No hidden fees or unexpected changes.", icon: ScaleIcon },
              { title: "Reliable Coordination", desc: "Logistics managed end-to-end.", icon: ShieldCheckIcon },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-col gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[var(--surface-strong)] dark:bg-[#1E293B] flex items-center justify-center text-[var(--primary)] dark:text-[#D4AF37] group-hover:bg-[var(--primary)] dark:group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[var(--heading)] group-hover:text-[var(--primary)] dark:group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: TRUST INDICATORS (COMPACT STATS) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-between items-center gap-8 py-8 px-10 rounded-2xl bg-[var(--surface)] border border-[var(--border)] dark:border-[#1E293B] shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          {[
            { num: 5000, suffix: "+", label: "Clients Assisted" },
            { num: 300, suffix: "+", label: "Travel Plans Completed" },
            { num: 100, suffix: "%", label: "Multi-Service Expertise", isText: true },
            { num: 99, suffix: "%", label: "Customer Satisfaction" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1 w-[40%] md:w-auto">
              {stat.isText ? (
                <span className="text-2xl font-extrabold text-[var(--heading)] font-serif">Comprehensive</span>
              ) : (
                <span className="text-2xl font-extrabold text-[var(--heading)] font-serif tracking-tight">
                  <CompactCounter from={0} to={stat.num} suffix={stat.suffix} />
                </span>
              )}
              <span className="text-sm font-medium text-[var(--text-muted)]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 5: SERVICE ECOSYSTEM VIEW */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[var(--heading)] mb-4 serif-heading">Our Service Ecosystem</h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">Seamlessly connected modules ensuring every aspect of your travel is covered.</p>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
        >
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[40%] left-[15%] right-[15%] h-[1px] bg-[var(--border)] dark:bg-[#1E293B] z-0"></div>

          {/* Ecosystem 1 */}
          <motion.div variants={fadeUp} className="relative z-10 flex flex-col items-center bg-[var(--bg)] p-8 rounded-[20px] border border-[var(--border)] dark:border-[#1E293B] shadow-sm hover:shadow-md dark:shadow-none transition-shadow group">
            <div className="w-16 h-16 rounded-[14px] bg-[#EEF6FF] dark:bg-[#111827] flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform">
              <MapIcon className="w-8 h-8 text-[#0B3C5D] dark:text-[#F3D67A]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--heading)] mb-3">Travel</h3>
            <ul className="text-sm text-[var(--text-muted)] space-y-2 text-center">
              <li>Hajj & Umrah Packages</li>
              <li>Flight & Train Ticketing</li>
              <li>Global Visiting Visas</li>
            </ul>
          </motion.div>

          {/* Ecosystem 2 */}
          <motion.div variants={fadeUp} className="relative z-10 flex flex-col items-center bg-[var(--bg)] p-8 rounded-[20px] border border-[var(--border)] dark:border-[#1E293B] shadow-sm hover:shadow-md dark:shadow-none transition-shadow group">
            <div className="w-16 h-16 rounded-[14px] bg-[#F3FAFF] dark:bg-[#0A0F1C] flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform border border-[var(--border)] dark:border-white/5">
              <DocumentTextIcon className="w-8 h-8 text-[#0EA5E9] dark:text-white" />
            </div>
            <h3 className="text-xl font-bold text-[var(--heading)] mb-3">Documentation</h3>
            <ul className="text-sm text-[var(--text-muted)] space-y-2 text-center">
              <li>Embassy Visa Stamping</li>
              <li>Certificate Attestations</li>
              <li>Legal Translations</li>
            </ul>
          </motion.div>

          {/* Ecosystem 3 */}
          <motion.div variants={fadeUp} className="relative z-10 flex flex-col items-center bg-[var(--bg)] p-8 rounded-[20px] border border-[var(--border)] dark:border-[#1E293B] shadow-sm hover:shadow-md dark:shadow-none transition-shadow group">
            <div className="w-16 h-16 rounded-[14px] bg-[#FFFBEB] dark:bg-[#1E293B] flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform">
              <GlobeAltIcon className="w-8 h-8 text-[#D4AF37] dark:text-[#D4AF37]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--heading)] mb-3">Opportunities</h3>
            <ul className="text-sm text-[var(--text-muted)] space-y-2 text-center">
              <li>Study Abroad Programs</li>
              <li>University Admissions</li>
              <li>Student Visa Support</li>
            </ul>
          </motion.div>

        </motion.div>
      </section>

      {/* SECTION 6: SPIRITUAL TOUCH */}
      <section className="relative py-32 flex items-center justify-center text-center overflow-hidden bg-[var(--surface-strong)]">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[var(--bg)] z-0"></div>
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-3xl"
        >
          <HeartIcon className="w-8 h-8 mx-auto text-[var(--primary)] dark:text-[#D4AF37] opacity-60 mb-6" />
          <p className="text-xl md:text-2xl font-serif text-[var(--heading)] leading-relaxed italic tracking-wide">
            "We understand that some journeys are more than travel — they are deeply meaningful experiences. Our goal is to make every step simple, respectful, and well-guided."
          </p>
        </motion.div>
      </section>

      {/* SECTION 7: HOW WE WORK (HORIZONTAL PROCESS) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-14 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--heading)] serif-heading mb-3">How We Work</h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">A streamlined approach guaranteeing precision and care.</p>
        </div>

        <div className="relative">
          {/* Timeline Connector */}
          <div className="hidden lg:block absolute top-[24px] left-[10%] right-[10%] h-[1px] bg-[var(--border)] dark:bg-[#1E293B] z-0"></div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10"
          >
            {[
              { num: "1", title: "Consultation", sub: "Understanding needs" },
              { num: "2", title: "Handling", sub: "Document intake" },
              { num: "3", title: "Processing", sub: "Embassy tracking" },
              { num: "4", title: "Preparation", sub: "Booking & briefing" },
              { num: "5", title: "Support", sub: "Ongoing trip care" },
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-col lg:items-center text-left lg:text-center group">
                <div className="w-12 h-12 rounded-full border border-[var(--border)] dark:border-[#D4AF37]/30 bg-[var(--surface)] text-[var(--heading)] flex items-center justify-center font-bold text-sm shadow-sm mb-4 group-hover:bg-[var(--primary)] dark:group-hover:bg-[#D4AF37] group-hover:text-white dark:group-hover:text-[#0A0F1C] transition-colors duration-300">
                  {step.num}
                </div>
                <h4 className="font-bold text-[var(--heading)] mb-1">{step.title}</h4>
                <p className="text-xs text-[var(--text-muted)]">{step.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-24 px-6 mb-12 max-w-4xl mx-auto text-center border-t border-[var(--border)] dark:border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading)] mb-4 serif-heading">
            Let us assist you in your next journey
          </h2>
          <p className="text-[var(--text-muted)] mb-10 max-w-lg mx-auto">
            Get in touch with our experts to secure your travel and documentation requirements seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 rounded-full bg-[var(--primary)] dark:bg-[#D4AF37] text-white dark:text-[#0A0F1C] font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center shadow-md">
              Contact Us
            </Link>
            <Link href="/services" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] dark:from-[#F3D67A] dark:to-[#E5C158] text-white dark:text-[#0A0F1C] font-bold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
