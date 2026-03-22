import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import {
  BookOpen, FlaskConical, Handshake, Lightbulb, Microscope,
  FileText, Award, Building2, GraduationCap, Globe, Beaker,
  BarChart3, Users, ArrowRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

const researchCenters = [
  { icon: FlaskConical, title: "Advanced Materials Research", desc: "Research on nano-materials, composites, and sustainable engineering materials with state-of-the-art characterization facilities.", color: "from-primary to-brand-red-light" },
  { icon: Microscope, title: "Signal Processing & VLSI", desc: "Advanced research in signal processing, embedded systems, and VLSI design with industry-grade EDA tools.", color: "from-secondary to-mits-navy-light" },
  { icon: Lightbulb, title: "AI & Machine Learning Lab", desc: "Deep learning, NLP, computer vision, and data science research with GPU-accelerated computing infrastructure.", color: "from-primary to-brand-red-light" },
  { icon: Building2, title: "Renewable Energy Center", desc: "Solar energy, wind power, and sustainable energy systems research with rooftop installations and testing facilities.", color: "from-secondary to-mits-navy-light" },
  { icon: Beaker, title: "Biotechnology Research", desc: "Molecular biology, bioinformatics, and pharmaceutical research with advanced genomics and proteomics tools.", color: "from-primary to-brand-red-light" },
  { icon: Globe, title: "IoT & Smart Systems Lab", desc: "Internet of Things, smart city technologies, and sensor networks for real-world applications.", color: "from-secondary to-mits-navy-light" },
];

const stats = [
  { value: 500, suffix: "+", label: "Research Publications", icon: FileText },
  { value: 50, suffix: "+", label: "Funded Projects", icon: Award },
  { value: 25, suffix: "+", label: "Patents Filed", icon: Lightbulb },
  { value: 30, suffix: "+", label: "Industry Collaborations", icon: Handshake },
  { value: 100, suffix: "+", label: "PhD Scholars", icon: GraduationCap },
  { value: 15, suffix: "+", label: "Research Labs", icon: FlaskConical },
];

const publications = [
  { journal: "IEEE Transactions", count: "120+", field: "Electronics & Computing" },
  { journal: "Elsevier Journals", count: "95+", field: "Materials & Energy" },
  { journal: "Springer Nature", count: "80+", field: "AI & Data Science" },
  { journal: "Taylor & Francis", count: "65+", field: "Interdisciplinary Research" },
];

const collaborations = [
  { org: "ISRO", type: "Space Research & Remote Sensing", icon: Globe },
  { org: "DRDO", type: "Defense Technology Research", icon: Building2 },
  { org: "DST", type: "Govt. Funded Research Projects", icon: Award },
  { org: "AICTE", type: "Faculty Development & Grants", icon: GraduationCap },
  { org: "TCS", type: "Industry-Sponsored Research", icon: BarChart3 },
  { org: "Infosys", type: "Campus Innovation Programs", icon: Users },
];

const patents = [
  { title: "Smart Irrigation System using IoT", year: "2024", status: "Granted" },
  { title: "AI-based Crop Disease Detection", year: "2023", status: "Granted" },
  { title: "Nano-composite for Solar Cells", year: "2023", status: "Published" },
  { title: "Blockchain-based Academic Verification", year: "2024", status: "Published" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, target / 40);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); return; }
      setCount(Math.round(current));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Research = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={`${BASE}Hero-Section/image%203.JPG`} alt="Research at MITS" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/70" />
          </div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4"
              >
                Research & Innovation
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Advancing Knowledge Through{" "}
                <span className="text-accent">Innovation</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/85 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              >
                MITS fosters a vibrant research ecosystem through advanced labs, funded projects,
                and industry collaborations driving impactful outcomes.
              </motion.p>
            </div>
          </div>
          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80V40C240 0 480 60 720 40C960 20 1200 60 1440 40V80H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-16 bg-background -mt-1">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 0.06}>
                  <div className="text-center bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <stat.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <p className="font-display text-3xl md:text-4xl font-bold text-primary leading-none">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-muted-foreground text-xs mt-2 font-medium">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Research Centers */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-2">Centers of Excellence</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Research Centers</h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                  Domain-focused research centers driving innovation across engineering, computing, and science disciplines.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {researchCenters.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 group h-full">
                    <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                    <div className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Publications & Patents */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {/* Publications */}
              <ScrollReveal direction="left">
                <div className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">Research Publications</h3>
                      <p className="text-muted-foreground text-sm">500+ publications in reputed journals</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {publications.map((pub, i) => (
                      <motion.div
                        key={pub.journal}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:border-primary/30 hover:shadow-md transition-all duration-300"
                      >
                        <div>
                          <h4 className="font-semibold text-card-foreground text-sm">{pub.journal}</h4>
                          <p className="text-muted-foreground text-xs">{pub.field}</p>
                        </div>
                        <span className="font-display text-2xl font-bold text-primary">{pub.count}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Patents */}
              <ScrollReveal direction="right">
                <div className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">Patents & Innovations</h3>
                      <p className="text-muted-foreground text-sm">25+ patents filed across domains</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {patents.map((patent, i) => (
                      <motion.div
                        key={patent.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border rounded-xl p-4 hover:border-accent/40 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="font-semibold text-card-foreground text-sm">{patent.title}</h4>
                            <p className="text-muted-foreground text-xs mt-1">{patent.year}</p>
                          </div>
                          <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${
                            patent.status === "Granted"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}>
                            {patent.status}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Industry Collaborations */}
        <section className="py-20 bg-navy-gradient text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-accent font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-2">Partnerships</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Industry Collaborations</h2>
                <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto">
                  Strategic partnerships with leading organizations powering cutting-edge research and innovation.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {collaborations.map((collab, i) => (
                <ScrollReveal key={collab.org} delay={i * 0.08}>
                  <div className="glass-card glass-card-hover rounded-2xl p-6 group cursor-default">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/40 transition-colors">
                        <collab.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-white">{collab.org}</h3>
                        <p className="text-white/60 text-sm">{collab.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                      <span>View Partnership</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Interested in Research at MITS?
              </h2>
              <p className="text-primary-foreground/80 text-base max-w-xl mx-auto mb-6">
                Explore PhD programs, funded projects, and research opportunities across disciplines.
              </p>
              <a href="/academics" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg">
                Explore Programs <ArrowRight className="w-4 h-4" />
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
