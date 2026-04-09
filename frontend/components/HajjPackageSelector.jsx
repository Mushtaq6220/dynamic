"use client";

import Link from "next/link";
import { packageCategories, hajjPackages } from "../data/packageCatalog";
import { 
  CheckCircleIcon, StarIcon, DocumentCheckIcon 
} from "@heroicons/react/24/outline";
import SectionReveal from "./SectionReveal";
import "../styles/premium-packages.css";

export default function HajjPackageSelector() {
  return (
    <main className="pp-page-wrapper">
      <SectionReveal>
        <section className="pp-header-glass">
            {/* Added badge for context */}
          <div className="flex justify-center mb-4">
             <span className="bg-[#D4AF37] text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                Reserving For 2026
             </span>
          </div>
          <h1 className="pp-title">Choose Your Perfect Hajj Journey</h1>
          <p className="pp-subtitle">
            Carefully designed packages for a comfortable, deeply rewarding, and spiritually uplifting pilgrimage.
          </p>
        </section>
      </SectionReveal>

      <section className="pp-grid">
        {hajjPackages.map((item, index) => (
          <SectionReveal key={item.id} delay={0.15 + index * 0.1}>
            <article className="pp-card">
              <div className="pp-card-media">
                <img
                  src={item.image}
                  alt={item.name}
                  className="pp-card-img"
                  draggable="false"
                />
                <div className="pp-card-overlay"></div>
                <span className="pp-card-badge">
                  {item.badge || packageCategories.find((cat) => cat.key === item.category)?.label}
                </span>
              </div>

              <div className="pp-card-content">
                <h2 className="pp-card-title">{item.name}</h2>
                <div className="pp-card-price-row">
                  <span className="pp-card-price">{item.price}</span>
                  <span className="pp-card-duration">{item.duration}</span>
                </div>

                <ul className="pp-card-features">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <Link href={`/packages/${item.id}`} className="pp-card-btn">
                  Book Now
                </Link>
              </div>
            </article>
          </SectionReveal>
        ))}
      </section>

      {/* ABOUT HAJJ SECTION */}
      <div className="mt-32 max-w-7xl mx-auto px-6">
        <SectionReveal>
          <div className="pp-header-glass !mb-20">
            <h2 className="pp-title">What is Hajj?</h2>
            <p className="pp-subtitle !max-w-4xl">
              Hajj is one of the five pillars of Islam, an obligation that every Muslim must undertake at least once in their lifetime if they are physically and financially able. It is performed annually during the Islamic month of Dhul-Hijjah, from the 8th to the 12th.
            </p>
            <p className="pp-subtitle !max-w-4xl mt-4 opacity-80">
              Pilgrims retrace the footsteps of Prophet Ibrahim (AS), Hagar, and Prophet Muhammad (PBUH), engaging in rites of unity, devotion, and sacrifice.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* Documentation & Health */}
          <SectionReveal delay={0.1}>
            <div className="pp-card p-10 h-full">
              <h3 className="pp-card-title !text-2xl mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0B3C5D]/10 rounded-xl flex items-center justify-center">
                   <DocumentCheckIcon className="w-6 h-6 text-[#0B3C5D]" />
                </div>
                Before You Go
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-[#D4AF37] uppercase tracking-widest text-xs mb-3">A. Hajj Visa Process</h4>
                  <ul className="pp-card-features">
                    <li>Apply through approved Hajj operators.</li>
                    <li>Eligibility: Must be Muslim, meet health guidelines, and not have performed Hajj in past 5 years.</li>
                    <li>Documents: Passport, photos, vaccine records, proof of Mahram (for women under 45).</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#D4AF37] uppercase tracking-widest text-xs mb-3">B. Required Vaccinations</h4>
                  <ul className="pp-card-features">
                    <li>Meningococcal meningitis (ACWY) within 5 years.</li>
                    <li>COVID-19 vaccination (latest guidelines).</li>
                    <li>Polio vaccine (for endemic countries).</li>
                    <li>Seasonal flu (strongly recommended).</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Essentials & Connectivity */}
          <SectionReveal delay={0.2}>
            <div className="pp-card p-10 h-full border-t-4 border-t-[#D4AF37]">
              <h3 className="pp-card-title !text-2xl mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
                   <StarIcon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                Essentials & Planning
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-[#0B3C5D] dark:text-white uppercase tracking-widest text-xs mb-3">C. Travel Essentials</h4>
                  <ul className="pp-card-features">
                    <li>Pack: Ihram clothes, hygiene kits, medications, sandals, power bank.</li>
                    <li>Choose a package that suits your health, budget, and preference.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#0B3C5D] dark:text-white uppercase tracking-widest text-xs mb-3">D. Connectivity</h4>
                  <p className="text-sm text-[var(--pp-text-muted-light)] leading-relaxed mb-4">
                    Use an eSIM from <strong>Voye Global</strong> for instant activation and reliable 4G/5G data across Makkah, Mina, Arafat, and Madinah.
                  </p>
                  <ul className="pp-card-features">
                    <li>Avoid physical SIM swaps.</li>
                    <li>Stay connected with family effortlessly.</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* FIVE DAYS OF HAJJ TIMELINE */}
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="pp-title">The Five Days of Hajj</h2>
            <p className="pp-subtitle">A step-by-step overview of the sacred journey.</p>
          </div>
        </SectionReveal>

        <div className="space-y-8 mb-32">
          {[
            { 
              day: "Day 1", 
              date: "8 Dhul-Hijjah", 
              title: "Yaum al-Tarwiyah",
              steps: ["State of Ihram: Enter from Miqat point.", "Intention (Niyyah): Verbally declare intention.", "Travel to Mina: Spend the night in tents.", "Prayer: Perform shortened prayers."]
            },
            { 
              day: "Day 2", 
              date: "9 Dhul-Hijjah", 
              title: "Day of Arafat",
              steps: ["Travel to Arafat by mid-morning.", "Standing (Wuquf): Main ritual until sunset.", "Combined Prayers: Dhuhr + Asr.", "Travel to Muzdalifah after sunset.", "Sleep under the open sky & collect pebbles."]
            },
            { 
              day: "Day 3", 
              date: "10 Dhul-Hijjah", 
              title: "Eid al-Adha",
              steps: ["Rami al-Jamarat: Stone the largest pillar.", "Animal Sacrifice (Qurbani).", "Shaving/Cutting Hair: Tahlul.", "Tawaf al-Ifadah: Return to Makkah for Sa’i."]
            },
            { 
              day: "Day 4 & 5", 
              date: "11-12 Dhul-Hijjah", 
              title: "Tashreeq Days",
              steps: ["Stay in Mina & stone all three Jamarat.", "Optional: Leave Mina before sunset on 12th."]
            },
            { 
              day: "Optional 6", 
              date: "13 Dhul-Hijjah", 
              title: "Final Rami",
              steps: ["Final stoning at all three Jamarat.", "Return to Makkah."]
            }
          ].map((item, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="pp-card p-8 flex flex-col md:flex-row gap-8 items-center bg-white/40 dark:bg-white/5 group">
                <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-black/20 rounded-3xl min-w-[160px] shadow-sm border border-red-100 dark:border-red-900/30 group-hover:shadow-md transition-all duration-300">
                  <span className="text-sm font-black uppercase tracking-widest bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">{item.day}</span>
                  <span className="text-lg font-black bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">{item.date}</span>
                </div>
                <div className="flex-1">
                  <h3 className="pp-card-title !mb-4">{item.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-sm font-medium opacity-80">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section - REDESIGNED for Premium Feel */}
      <section className="mt-32 max-w-7xl mx-auto px-6 pb-24">
         <div className="text-center mb-16 px-4">
            <span className="text-[#D4AF37] font-extrabold tracking-[0.3em] uppercase text-[10px] mb-4 block">Trust & Excellence</span>
            <h2 className="pp-title !text-4xl md:text-5xl !leading-tight uppercase tracking-tight">Unmatched Hajj <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B3C5D] dark:from-[#D4AF37] to-[#1a4f76] dark:to-[#F3D67A] italic">Experience</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mt-6"></div>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Trusted Service", desc: "Decades of verified expertise in spiritual travel coordination.", icon: ShieldCheckIcon },
              { title: "Comfortable Stay", desc: "Top-rated hotels located within minutes of the Holy sites.", icon: BuildingOfficeIcon },
              { title: "Guided Support", desc: "Scholar-led guidance ensuring your pilgrimage is perfectly executed.", icon: UserGroupIcon },
              { title: "Affordability", desc: "Premium quality services balanced for value-focused pilgrims.", icon: StarIcon }
            ].map((perk, i) => {
               const Icon = perk.icon;
               return (
                <div key={i} className="group relative transition-all duration-700 hover:-translate-y-3">
                   {/* Animated Background Glow */}
                   <div className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-b from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 blur-[8px] transition-opacity duration-700"></div>
                   
                   <div className="relative h-full flex flex-col items-center text-center bg-white dark:bg-[#0A0F1C] border border-[var(--border)] dark:border-[#1E293B] rounded-[32px] p-10 shadow-sm group-hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] transition-all duration-500 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-1000"></div>
                      
                      <div className="relative w-16 h-16 bg-[#D4AF37]/10 dark:bg-[#D4AF37]/5 rounded-[22px] flex items-center justify-center mb-8 border border-[#D4AF37]/20 transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:rotate-[360deg] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                         <Icon className="w-8 h-8 text-[#D4AF37] group-hover:text-white transition-colors duration-500" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-[var(--heading)] mb-4 tracking-tight group-hover:text-[#D4AF37] transition-colors">{perk.title}</h3>
                      <p className="text-[var(--text-muted)] leading-relaxed text-sm font-medium">{perk.desc}</p>
                   </div>
                </div>
               );
            })}
         </div>
      </section>
    </main>
  );
}
