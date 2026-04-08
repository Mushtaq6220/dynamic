import Link from "next/link";
import SectionReveal from "../../components/SectionReveal";

const supportCards = [
  {
    title: "Package guidance",
    text: "Discuss hotel category, stay duration, transport comfort, and family travel expectations before booking.",
  },
  {
    title: "Visa support",
    text: "Get help understanding document readiness, application flow, and current visa tracking responses.",
  },
  {
    title: "Flight coordination",
    text: "Understand your managed route schedules, departure windows, and India-Gulf travel direction options.",
  },
];

export default function SupportPage() {
  return (
    <div className="section-shell py-10">
      <SectionReveal>
        <div className="glass-panel-strong rounded-[36px] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--gold)]">Support</p>
          <h1 className="mt-3 text-4xl font-semibold text-[color:var(--text)] md:text-5xl">Friendly support channels for packages, visas, and flight planning</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--muted)] md:text-base">
            Use this page as your customer-support hub while you continue adding your final profile links and social channels in code.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal className="mt-8" delay={0.05}>
        <div className="grid gap-5 md:grid-cols-3">
          {supportCards.map((card) => (
            <div key={card.title} className="glass-panel rounded-[28px] p-6">
              <h2 className="text-xl font-semibold text-[color:var(--text)]">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{card.text}</p>
            </div>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="mt-8" delay={0.08}>
        <div className="glass-panel-strong rounded-[32px] p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">Contact channels</p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[color:var(--muted)]">
                <p>Phone: +916281144625</p>
                <p>Email: mushtaq@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/contact" className="gold-glow inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[color:var(--green)] to-[color:var(--gold)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Open Inquiry Form
              </Link>
              <Link href="/flights" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/60 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--text)] dark:bg-white/5">
                View Flight Search
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
