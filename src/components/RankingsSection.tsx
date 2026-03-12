import { Award, Shield, Star, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import campusBuilding from "@/assets/campus-building.png";

const rankings = [
  { icon: Award, title: "NAAC A+ Grade", subtitle: "Accredited", value: 1, suffix: "" },
  { icon: Trophy, title: "UGC Recognition", subtitle: "Recognized", value: 100, suffix: "%" },
  { icon: Shield, title: "AICTE Approval", subtitle: "Approved Programs", value: 25, suffix: "+" },
  { icon: Star, title: "NBA Accreditation", subtitle: "Eligible Programs", value: 12, suffix: "+" },
  { icon: Award, title: "NIRF Ranking", subtitle: "National Presence", value: 100, suffix: " Top" },
];

const institutionalCounters = [
  { label: "Years of Excellence", value: 25, suffix: "+" },
  { label: "Students", value: 12000, suffix: "+" },
  { label: "Faculty", value: 600, suffix: "+" },
  { label: "Recruiters", value: 200, suffix: "+" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 45));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
        return;
      }
      setCount(current);
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const RankingsSection = () => {
  return (
    <section
      id="trust"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${campusBuilding})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,31,58,0.87)_0%,rgba(11,31,58,0.72)_50%,rgba(11,31,58,0.87)_100%)]" />

      {/* Glowing accent orbs for depth */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Trust & Accreditation</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Institutional Credentials</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              MITS upholds national quality standards through accredited programs, strong governance, and consistent academic outcomes.
            </p>
          </div>
        </ScrollReveal>

        {/* Glassmorphism credential cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {rankings.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="text-center group rounded-xl p-6 border border-white/15 bg-white/8 backdrop-blur-md hover:bg-white/14 hover:-translate-y-1 hover:border-secondary/50 transition-all duration-300 h-full"
                style={{ background: "rgba(255,255,255,0.07)" }}>
                <div className="w-14 h-14 mx-auto rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center mb-4 group-hover:bg-secondary/40 transition-colors">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="font-display text-2xl font-bold text-secondary mb-1">
                  <CountUp target={item.value} suffix={item.suffix} />
                </p>
                <p className="font-display text-base font-bold text-white leading-tight mb-1">{item.title}</p>
                <p className="text-white/55 text-xs">{item.subtitle}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats bar — glass strip */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 rounded-xl border border-white/15 backdrop-blur-md p-6 md:p-8"
            style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x md:divide-white/15">
              {institutionalCounters.map((counter, i) => (
                <div key={counter.label} className={`text-center ${i > 0 ? "md:pl-6" : ""}`}>
                  <p className="font-display text-3xl md:text-4xl font-bold text-secondary mb-1">
                    <CountUp target={counter.value} suffix={counter.suffix} />
                  </p>
                  <p className="text-white/65 text-sm md:text-base">{counter.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RankingsSection;
