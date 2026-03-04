import { TrendingUp, Users, Building, IndianRupee } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: IndianRupee, value: 21, suffix: " LPA", label: "Highest Package" },
  { icon: TrendingUp, value: 6, suffix: ".8 LPA", label: "Average Package" },
  { icon: Users, value: 94, suffix: "%", label: "Placement %" },
  { icon: Building, value: 200, suffix: "+", label: "Recruiters" },
];

const recruiters = [
  { name: "Accenture", logo: "accenture.png" },
  { name: "Amazon", logo: "amazon.png" },
  { name: "Bosch", logo: "bosch.png" },
  { name: "Capgemini", logo: "capgemini.png" },
  { name: "Cognizant", logo: "congnizant.png" },
  { name: "Deloitte", logo: "Deloitte.png" },
  { name: "Google", logo: "google.webp" },
  { name: "HCLTech", logo: "hcltech.png" },
  { name: "IBM", logo: "IBM.png" },
  { name: "Infosys", logo: "infosys.png" },
  { name: "L&T", logo: "L&T.png" },
  { name: "Mahindra", logo: "mahindra.png" },
  { name: "Microsoft", logo: "microsoft.png" },
  { name: "TCS", logo: "tcs.png" },
  { name: "Wipro", logo: "wipro.png" },
  { name: "Zoho", logo: "zoho.png" },
];

const getRecruiterLogoSrc = (logo: string) => `${import.meta.env.BASE_URL}recruiters/${logo}`;

const CountUp = ({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / (duration * 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const PlacementsSection = () => {
  return (
    <section className="py-24 bg-navy-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Career Success</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Placement Highlights</h2>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Our students are recruited by top companies across the globe.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 md:p-7">
                <div className="w-16 h-16 mx-auto rounded-md bg-secondary/20 flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-secondary" />
                </div>
                <p className="font-display text-4xl md:text-5xl font-bold text-secondary leading-none">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-4">Top Recruiters</p>
            <div className="relative overflow-hidden rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 py-4">
              <div className="recruiter-marquee-track">
                {[...recruiters, ...recruiters].map((company, index) => (
                  <div
                    key={`${company.name}-${index}`}
                    className="recruiter-logo-card"
                    aria-hidden={index >= recruiters.length}
                  >
                    <img
                      src={getRecruiterLogoSrc(company.logo)}
                      alt={company.name}
                      className="h-10 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-primary-foreground/60 mt-3">
              Logos shown in original company colors.
            </p>
            <div className="mt-8">
              <Link to="/placements">
                <Button className="bg-secondary text-secondary-foreground hover:bg-gold-light font-semibold px-6 text-sm">
                  Explore Placements
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlacementsSection;
