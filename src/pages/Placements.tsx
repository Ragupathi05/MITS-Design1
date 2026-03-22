import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Award, BookOpen, Building, IndianRupee, TrendingUp, Users, Star, ArrowRight, Quote, Briefcase, GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

const stats = [
  { icon: IndianRupee, value: 21, suffix: " LPA", label: "Highest Package", desc: "Top offer received" },
  { icon: TrendingUp, value: 6.8, suffix: " LPA", label: "Average Package", desc: "Across all branches" },
  { icon: Users, value: 94, suffix: "%", label: "Placement Rate", desc: "Consistent excellence" },
  { icon: Building, value: 200, suffix: "+", label: "Recruiters", desc: "Global companies" },
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

const getRecruiterLogoSrc = (logo: string) => `${BASE}recruiters/${logo}`;

const training = [
  { icon: BookOpen, title: "Pre-Placement Training", desc: "Comprehensive aptitude, technical, and soft skills training from Year 2 onwards with industry mentors.", step: "01" },
  { icon: Award, title: "Mock Interviews", desc: "Regular mock interview sessions with industry professionals and successful alumni from top companies.", step: "02" },
  { icon: Users, title: "Industry Mentoring", desc: "One-on-one mentoring programs with corporate professionals providing career guidance and skill mapping.", step: "03" },
  { icon: TrendingUp, title: "Certifications", desc: "Industry-recognized certifications in cloud computing, data science, cybersecurity, and more.", step: "04" },
];

const successStories = [
  { name: "Priya Sharma", role: "Software Engineer at Google", batch: "B.Tech CSE 2024", quote: "MITS placement cell provided exceptional preparation and the right platform to land my dream role at Google.", rating: 5 },
  { name: "Rahul Reddy", role: "Analyst at Deloitte", batch: "MBA 2024", quote: "The corporate exposure and case study approach at MITS gave me a competitive edge in management consulting.", rating: 5 },
  { name: "Ananya Patel", role: "Data Scientist at Amazon", batch: "B.Tech AI&DS 2024", quote: "The AI specialization and lab infrastructure at MITS truly prepared me for cutting-edge roles in the industry.", rating: 5 },
];

const placementProcess = [
  { step: "1", title: "Pre-Placement Talk", desc: "Companies present their profiles and job descriptions" },
  { step: "2", title: "Online Assessment", desc: "Aptitude, coding, and domain-specific tests" },
  { step: "3", title: "Group Discussion", desc: "Evaluating communication and teamwork skills" },
  { step: "4", title: "Technical Interview", desc: "In-depth technical evaluation by experts" },
  { step: "5", title: "HR Interview", desc: "Final selection and offer rollout" },
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
        {/* Hero */}
        <section className="relative pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={`${BASE}Hero-Section/image%204.JPG`} alt="Placements at MITS" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/70" />
          </div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <p className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4">Career Success</p>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Where <span className="text-accent">Talent</span> Meets{" "}
                <span className="text-accent">Opportunity</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/85 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              >
                MITS students are placed in top companies globally with strong industry partnerships and comprehensive career training.
              </motion.p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80V40C240 0 480 60 720 40C960 20 1200 60 1440 40V80H0Z" fill="hsl(var(--primary))" />
            </svg>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary text-primary-foreground -mt-1">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 0.08}>
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:border-accent/40 group-hover:scale-110 transition-all duration-300">
                      <stat.icon className="w-8 h-8 text-accent" />
                    </div>
                    <p className="font-display text-3xl md:text-5xl font-bold text-accent leading-none">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-primary-foreground font-semibold text-sm mt-2">{stat.label}</p>
                    <p className="text-primary-foreground/60 text-xs mt-1">{stat.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Top Recruiters - Logo Marquee */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-primary font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-2">Our Partners</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Top Recruiters</h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto">
                  200+ companies recruit from MITS every year including Fortune 500 and leading tech firms.
                </p>
              </div>
            </ScrollReveal>
            <div className="max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card py-6">
                <div className="recruiter-marquee-track">
                  {[...recruiters, ...recruiters].map((company, index) => (
                    <div key={`${company.name}-${index}`} className="recruiter-logo-card" aria-hidden={index >= recruiters.length}>
                      <img src={getRecruiterLogoSrc(company.logo)} alt={company.name} className="h-10 w-auto object-contain" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Logo grid for mobile */}
              <div className="grid grid-cols-4 gap-3 mt-6 md:hidden">
                {recruiters.slice(0, 8).map((company) => (
                  <div key={company.name} className="bg-card border border-border rounded-lg p-3 flex items-center justify-center h-16">
                    <img src={getRecruiterLogoSrc(company.logo)} alt={company.name} className="h-8 w-auto object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Placement Process */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-2">How It Works</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Placement Process</h2>
              </div>
            </ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-stretch gap-4">
                {placementProcess.map((item, i) => (
                  <ScrollReveal key={item.step} delay={i * 0.08} className="flex-1">
                    <div className="bg-card border border-border rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group relative">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      <h4 className="font-display font-bold text-card-foreground text-sm mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                      {i < placementProcess.length - 1 && (
                        <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary z-10" />
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-2">Career Development</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Training Programs</h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto">
                  Structured training from Year 2 to ensure students are industry-ready.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {training.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 h-full group">
                    <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                          <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <span className="font-display text-3xl font-bold text-primary/15 group-hover:text-primary/30 transition-colors">{item.step}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-navy-gradient text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-accent font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-2">Testimonials</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Student Success Stories</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {successStories.map((story, i) => (
                <ScrollReveal key={story.name} delay={i * 0.1}>
                  <div className="glass-card glass-card-hover rounded-2xl p-6 h-full relative">
                    <Quote className="w-8 h-8 text-accent/30 absolute top-4 right-4" />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: story.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-white/85 italic text-sm mb-6 leading-relaxed">"{story.quote}"</p>
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-white text-sm">{story.name}</h4>
                          <p className="text-accent text-xs font-semibold">{story.role}</p>
                          <p className="text-white/50 text-xs">{story.batch}</p>
                        </div>
                      </div>
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
              <div className="flex items-center justify-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-accent" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                  Ready to Start Your Career Journey?
                </h2>
              </div>
              <p className="text-primary-foreground/80 text-base max-w-xl mx-auto mb-6">
                Join MITS and get access to 200+ top recruiters, comprehensive training, and a proven placement record.
              </p>
              <a href="/admissions" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg">
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Placements;
