import { Award, BadgeCheck, Building2, GraduationCap, Shield, Star, Trophy, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
const BASE = import.meta.env.BASE_URL;

type CredentialCard = {
  icon: typeof Award;
  title: string;
  subtitle: string;
  displayValue?: string;
  value?: number;
  suffix?: string;
};

const credentials: CredentialCard[] = [
  { icon: Award, title: "NAAC A+", subtitle: "Accredited by NAAC", displayValue: "NAAC A+" },
  { icon: BadgeCheck, title: "UGC", subtitle: "Recognized under Sections 2(f) & 12(B)", displayValue: "UGC" },
  { icon: Shield, title: "AICTE", subtitle: "Approved Engineering Programs", displayValue: "AICTE" },
  { icon: Star, title: "7+", subtitle: "NBA Accredited Programs", value: 7, suffix: "+" },
  { icon: Trophy, title: "201-300", subtitle: "NIRF Engineering Ranking Band", displayValue: "201-300" },
  { icon: Building2, title: "27+", subtitle: "Years of Excellence (Established 1998)", value: 27, suffix: "+" },
  { icon: GraduationCap, title: "12000+", subtitle: "Students", value: 12000, suffix: "+" },
  { icon: Users, title: "600+", subtitle: "Faculty Members", value: 600, suffix: "+" },
  { icon: BadgeCheck, title: "200+", subtitle: "Recruiters", value: 200, suffix: "+" },
];

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 45));
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
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${BASE}Hero-Section/image%205.JPG)`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,31,58,0.90)_0%,rgba(11,31,58,0.75)_50%,rgba(11,31,58,0.90)_100%)]" />
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Trust & Accreditation</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Institutional Credentials</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              MITS upholds national quality standards through accredited programs, strong governance, and consistent academic outcomes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {credentials.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="text-center group rounded-xl p-6 border border-white/15 backdrop-blur-md hover:-translate-y-1 hover:border-accent/50 transition-all duration-300 h-full"
                style={{ background: "rgba(255,255,255,0.07)" }}>
                <div className="w-14 h-14 mx-auto rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center mb-4 group-hover:bg-accent/40 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <p className="font-display text-2xl font-bold text-accent mb-1">
                  {typeof item.value === "number" ? <CountUp target={item.value} suffix={item.suffix} /> : item.displayValue}
                </p>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">{item.subtitle}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RankingsSection;
