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

      {/* Why Choose Us Section - Integrated to match context but using pp classes */}
      <section className="mt-24 max-w-7xl mx-auto px-6">
         <div className="text-center mb-16">
            <h2 className="pp-title">Unmatched Hajj Experience</h2>
            <p className="pp-subtitle">Trusted by thousands for a decade.</p>
         </div>
         <div className="pp-grid">
            {[
              { title: "Trusted Service", desc: "Decades of verified expertise in spiritual travel coordination." },
              { title: "Comfortable Stay", desc: "Top-rated hotels located within minutes of the Holy sites." },
              { title: "Guided Support", desc: "Scholar-led guidance ensuring your pilgrimage is perfectly executed." },
              { title: "Affordability", desc: "Premium quality services balanced for value-focused pilgrims." }
            ].map((perk, i) => (
               <div key={i} className="pp-card p-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mb-6">
                     <StarIcon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="pp-card-title">{perk.title}</h3>
                  <p className="pp-subtitle" style={{fontSize: '0.9rem'}}>{perk.desc}</p>
               </div>
            ))}
         </div>
      </section>
    </main>
  );
}
