import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, CalendarDays, CheckCircle, ClipboardCheck, FileText, GraduationCap, ShieldCheck, UserRoundPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL;

const processSteps = [
  { icon: UserRoundPlus, title: "Online Registration", desc: "Fill the application form on the official MITS admissions portal with personal and academic details." },
  { icon: ShieldCheck, title: "Document Verification", desc: "Upload required documents including mark sheets, ID proof, and category certificates." },
  { icon: CalendarDays, title: "MITSUCET 2026", desc: "Appear for the MITS University Common Entrance Test (MITSUCET) conducted by the university." },
  { icon: ClipboardCheck, title: "Counseling & Admission", desc: "Attend counseling, select your preferred program, pay fees, and confirm admission." },
];

const eligibility = [
  { program: "B.Tech", criteria: "10+2 with Physics, Chemistry, Mathematics with minimum 45% aggregate (40% for reserved categories)." },
  { program: "M.Tech", criteria: "B.Tech/B.E. in relevant discipline with minimum 50% aggregate. Valid GATE score preferred." },
  { program: "MBA", criteria: "Bachelor's degree in any discipline with minimum 50% aggregate. Valid MAT/CAT/XAT score." },
  { program: "MCA", criteria: "BCA/B.Sc./B.Com with Mathematics at 10+2 or graduation level. Minimum 50% aggregate." },
  { program: "Ph.D.", criteria: "Postgraduate degree in relevant discipline. Minimum 55% aggregate. Research proposal required." },
  { program: "BBA / BCA", criteria: "10+2 in any stream with minimum 45% aggregate." },
];

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section
          className="relative pt-32 md:pt-40 pb-20 overflow-hidden"
          style={{
            backgroundImage: `url(${BASE}admissions/admission1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-secondary/85" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Admissions 2026</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Join MITS — Shape Your Future
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto mb-6">
              Begin your journey at one of India's leading Deemed to be Universities. Admissions are now open for AY 2026-27.
            </p>
            <a href="https://admission.mits.ac.in/" target="_blank" rel="noreferrer">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-7 rounded-full">
                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">How to Apply</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Admission Process</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full relative">
                    <div className="absolute top-4 right-4 text-primary/20 font-display text-4xl font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
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
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Requirements</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Eligibility Criteria</h2>
              </div>
            </ScrollReveal>
            <div className="max-w-4xl mx-auto space-y-4">
              {eligibility.map((item, i) => (
                <ScrollReveal key={item.program} delay={i * 0.06}>
                  <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex gap-4 items-start hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-card-foreground mb-1">{item.program}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.criteria}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <FileText className="w-14 h-14 mx-auto text-accent mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">MITSUCET 2026</h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-6">
                MITS University Common Entrance Test (MITSUCET) is conducted for admissions to UG and PG programs. The test evaluates aptitude in relevant subjects.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {["Online Test", "Multiple Sessions", "Merit-based Selection", "Scholarship Opportunity"].map((item) => (
                  <span key={item} className="flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-accent" /> {item}
                  </span>
                ))}
              </div>
              <a href="https://admission.mits.ac.in/" target="_blank" rel="noreferrer">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 rounded-full text-lg">
                  Apply Online <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
