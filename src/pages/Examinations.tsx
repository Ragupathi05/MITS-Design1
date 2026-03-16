import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, Calendar, ClipboardCheck, Download, FileText, GraduationCap, Shield } from "lucide-react";

const sections = [
  { icon: Calendar, title: "Exam Schedules", desc: "Semester-wise examination timetables published well in advance for all UG, PG, and PhD programs." },
  { icon: ClipboardCheck, title: "Results", desc: "Semester results published on the official portal with grade cards and consolidated marksheets." },
  { icon: FileText, title: "Academic Regulations", desc: "Outcome-based education (OBE) framework with choice-based credit system (CBCS) and continuous evaluation." },
  { icon: Download, title: "Hall Ticket Download", desc: "Students can download hall tickets from the examination portal before the commencement of exams." },
  { icon: Shield, title: "Examination Cell", desc: "Dedicated examination cell handling scheduling, invigilation, evaluation, and grievance redressal." },
  { icon: GraduationCap, title: "Convocation", desc: "Annual convocation ceremony for conferring degrees to graduating students." },
];

const regulations = [
  "Choice-Based Credit System (CBCS) with flexible electives",
  "Continuous Internal Evaluation (CIE) — 40% weightage",
  "Semester End Examination (SEE) — 60% weightage",
  "Minimum 75% attendance required for examination eligibility",
  "Re-evaluation and supplementary examination provisions",
  "Online examination portal for registration and hall tickets",
];

const Examinations = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative pt-32 md:pt-40 pb-20 bg-secondary">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Examinations</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">Examinations Cell</h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Managing all aspects of the examination process with transparency, efficiency, and academic integrity.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Examination Services</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {sections.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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
                <BookOpen className="w-10 h-10 text-primary mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Regulations</h2>
              </div>
            </ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-3">
              {regulations.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 shadow-sm">
                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">{i + 1}</span>
                    <p className="text-muted-foreground text-sm">{item}</p>
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

export default Examinations;
