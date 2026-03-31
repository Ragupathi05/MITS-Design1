import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Award, BookOpen, Building, IndianRupee, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

const stats = [
  { icon: IndianRupee, value: 21, suffix: " LPA", label: "Highest Package" },
  { icon: TrendingUp, value: 6.8, suffix: " LPA", label: "Average Package" },
  { icon: Users, value: 94, suffix: "%", label: "Placement Rate" },
  { icon: Building, value: 200, suffix: "+", label: "Recruiters" },
];

const recruiters = [
  { name: "Accenture",     logo: `${BASE}recruiters/accenture.png` },
  { name: "Akkodis",       logo: `${BASE}recruiters/akkodis.png` },
  { name: "Amazon",        logo: `${BASE}recruiters/amazon.png` },
  { name: "Bosch",         logo: `${BASE}recruiters/bosch.png` },
  { name: "Broadridge",    logo: `${BASE}recruiters/broadridge.png` },
  { name: "Capgemini",     logo: `${BASE}recruiters/capgemini.png` },
  { name: "Capsitech",     logo: `${BASE}recruiters/capsitech.png` },
  { name: "Cognizant",     logo: `${BASE}recruiters/cognizant.png` },
  { name: "Deloitte",      logo: `${BASE}recruiters/Deloitte.png` },
  { name: "Finbox",        logo: `${BASE}recruiters/finbox.png` },
  { name: "Google",        logo: `${BASE}recruiters/google.webp` },
  { name: "HCL Tech",      logo: `${BASE}recruiters/hcltech.png` },
  { name: "Hexaware",      logo: `${BASE}recruiters/hexaware.png` },
  { name: "IBM",           logo: `${BASE}recruiters/IBM.png` },
  { name: "Infosys",       logo: `${BASE}recruiters/infosys.png` },
  { name: "ITC",           logo: `${BASE}recruiters/itc.png` },
  { name: "JLL",           logo: `${BASE}recruiters/jll.png` },
  { name: "Kewaunee",      logo: `${BASE}recruiters/kewaunee.png` },
  { name: "Knowledge Lens",logo: `${BASE}recruiters/knowledge lens.png` },
  { name: "L&T",           logo: `${BASE}recruiters/L&T.png` },
  { name: "LTIMindtree",   logo: `${BASE}recruiters/ltimindtree.png` },
  { name: "Lumen",         logo: `${BASE}recruiters/lumen.png` },
  { name: "Mahindra",      logo: `${BASE}recruiters/mahindra.png` },
  { name: "Microsoft",     logo: `${BASE}recruiters/microsoft.png` },
  { name: "PeopleTech",    logo: `${BASE}recruiters/peopletech.png` },
  { name: "Recruit",       logo: `${BASE}recruiters/recruit.png` },
  { name: "Regami",        logo: `${BASE}recruiters/regami.png` },
  { name: "SBI General",   logo: `${BASE}recruiters/SBI General.png` },
  { name: "TCS",           logo: `${BASE}recruiters/tcs.png` },
  { name: "Tech Mahindra", logo: `${BASE}recruiters/tech mahindra.png` },
  { name: "Wiley",         logo: `${BASE}recruiters/wiley.png` },
  { name: "Wipro",         logo: `${BASE}recruiters/wipro.png` },
  { name: "Yash Tech",     logo: `${BASE}recruiters/yash tech.png` },
  { name: "Zoho",          logo: `${BASE}recruiters/zoho.png` },
];


const training = [
  { icon: BookOpen, title: "Pre-Placement Training", desc: "Comprehensive aptitude, technical, and soft skills training from Year 2 onwards." },
  { icon: Award, title: "Mock Interviews", desc: "Regular mock interview sessions with industry professionals and alumni." },
  { icon: Users, title: "Industry Mentoring", desc: "One-on-one mentoring programs with corporate professionals." },
  { icon: TrendingUp, title: "Certification Programs", desc: "Industry-recognized certifications in emerging technologies." },
];

const successStories = [
  { name: "Priya Sharma", role: "Software Engineer at Google", batch: "B.Tech CSE 2024", quote: "MITS placement cell provided exceptional preparation and the right platform to land my dream role." },
  { name: "Rahul Reddy", role: "Analyst at Deloitte", batch: "MBA 2024", quote: "The corporate exposure and case study approach at MITS gave me a competitive edge." },
  { name: "Ananya Patel", role: "Data Scientist at Amazon", batch: "B.Tech AI&DS 2024", quote: "The AI specialization and lab infrastructure at MITS truly prepared me for the industry." },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(0.1, target / 45);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); return; }
      setCount(Math.round(current * 10) / 10);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{Number.isInteger(target) ? Math.round(count) : count.toFixed(1)}{suffix}</span>;
};

const Placements = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section
          className="relative pt-32 md:pt-40 pb-20 overflow-hidden"
          style={{
            backgroundImage: `url(${BASE}Hero-Section/image%204.JPG)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/75" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Career Success</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Highlights</span></h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              MITS students are placed in top companies globally with strong industry partnerships and comprehensive training.
            </p>
          </div>
          <div className="absolute bottom-4 left-6 z-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm">
                <li><a href="/" className="text-white/70 hover:text-white transition-colors">Home</a></li>
                <li className="text-white/50">›</li>
                <li className="text-white font-semibold">Placements</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                    <stat.icon className="w-7 h-7 text-accent" />
                  </div>
                  <p className="font-display text-3xl md:text-4xl font-bold text-accent">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Our Partners</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Top Recruiters</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
              {recruiters.map((rec, i) => (
                <ScrollReveal key={rec.name} delay={i * 0.04}>
                  <div className="bg-card border border-border rounded-lg p-4 flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-all">
                    <img
                      src={rec.logo}
                      alt={rec.name + " logo"}
                      className="max-h-16 max-w-[110px] object-contain"
                      title={rec.name}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Training Programs</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {training.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Student Success Stories</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {successStories.map((story, i) => (
                <ScrollReveal key={story.name} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm h-full">
                    <p className="text-muted-foreground italic text-sm mb-4 leading-relaxed">"{story.quote}"</p>
                    <h4 className="font-display font-bold text-card-foreground">{story.name}</h4>
                    <p className="text-primary text-sm font-semibold">{story.role}</p>
                    <p className="text-muted-foreground text-xs">{story.batch}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Placements;
