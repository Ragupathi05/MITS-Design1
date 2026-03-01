import { Award, Shield, Star, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

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
    <section className="py-24 bg-muted" id="trust">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Trust & Accreditation</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Institutional Credentials</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              MITS upholds national quality standards through accredited programs, strong governance, and consistent academic outcomes.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {rankings.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="text-center group bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-16 h-16 mx-auto rounded-md bg-secondary/15 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="font-display text-2xl font-bold text-primary mb-1">
                  <CountUp target={item.value} suffix={item.suffix} />
                </p>
                <p className="font-display text-lg font-bold text-foreground leading-tight mb-1">{item.title}</p>
                <p className="text-muted-foreground text-sm">{item.subtitle}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 border border-border rounded-lg bg-card p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {institutionalCounters.map((counter) => (
                <div key={counter.label} className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                    <CountUp target={counter.value} suffix={counter.suffix} />
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base">{counter.label}</p>
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
