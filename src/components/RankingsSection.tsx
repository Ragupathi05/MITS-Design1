import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
const BASE = import.meta.env.BASE_URL;

type CredentialCard = {
  svgIcon: string;
  title: string;
  subtitle: string;
  displayValue?: string;
  value?: number;
  suffix?: string;
};

const credentials: CredentialCard[] = [
  {
    svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    title: "NAAC A+",
    subtitle: "Accredited by NAAC",
    displayValue: "NAAC A+",
  },
  {
    svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 12l2 2 4-4"/></svg>`,
    title: "UGC",
    subtitle: "Recognized under Sections 2(f) & 12(B)",
    displayValue: "UGC",
  },
  {
    svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    title: "7+",
    subtitle: "NBA Accredited Programs",
    value: 7,
    suffix: "+",
  },
  {
    svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M8 14l-4 8h16l-4-8"/><path d="M12 14v8"/></svg>`,
    title: "201–300",
    subtitle: "NIRF Engineering Ranking Band",
    displayValue: "201–300",
  },
  {
    svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
    title: "27+",
    subtitle: "Years of Excellence (Est. 1998)",
    value: 27,
    suffix: "+",
  },
  {
    svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: "12000+",
    subtitle: "Students Enrolled",
    value: 12000,
    suffix: "+",
  },
  {
    svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M12 11v4"/><path d="M10 13h4"/></svg>`,
    title: "600+",
    subtitle: "Faculty Members",
    value: 600,
    suffix: "+",
  },
  {
    svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    title: "Highest Package",
    subtitle: "Top CTC Offered to Students",
    displayValue: "21 LPA",
  },
  {
    svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    title: "No. of Offers",
    subtitle: "Placement Offers Received",
    displayValue: "1200+",
  },
];

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 50));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); return; }
      setCount(current);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const RankingsSection = () => {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${BASE}Hero-Section/image%205.JPG)`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,21,37,0.93)_0%,rgba(15,42,68,0.88)_50%,rgba(7,21,37,0.93)_100%)]" />
      {/* Ambient glow blobs */}
      <div className="absolute top-16 left-1/4 w-80 h-80 bg-[#caa74d]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-1/4 w-80 h-80 bg-[#b30000]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[#caa74d] font-body font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-3">
              Trust &amp; Accreditation
            </p>
            <h2
              id="trust-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
            >
              Institutional Credentials
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-body">
              MITS upholds national quality standards through accredited programs, strong governance,
              and consistent academic outcomes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {credentials.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.07}>
              <div
                className="group relative text-center rounded-2xl p-7 glass-card glass-card-hover cursor-default h-full"
                role="article"
              >
                {/* Gold top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#caa74d] rounded-full opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-400" />

                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-xl bg-[#caa74d]/15 border border-[#caa74d]/30 flex items-center justify-center mb-5 group-hover:bg-[#caa74d]/30 group-hover:scale-110 transition-all duration-300 shadow-[0_4px_16px_rgba(202,167,77,0.12)]">
                  <span
                    className="w-8 h-8 text-[#caa74d] block"
                    dangerouslySetInnerHTML={{ __html: item.svgIcon }}
                    aria-hidden="true"
                  />
                </div>

                {/* Value */}
                <p className="font-display text-2xl md:text-3xl font-bold text-[#caa74d] mb-2 leading-none">
                  {typeof item.value === "number"
                    ? <CountUp target={item.value} suffix={item.suffix} />
                    : item.displayValue}
                </p>

                {/* Title */}
                <p className="font-body font-semibold text-white text-sm md:text-base mb-1">
                  {item.title}
                </p>

                {/* Subtitle */}
                <p className="font-body text-white/70 text-xs md:text-sm leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RankingsSection;
