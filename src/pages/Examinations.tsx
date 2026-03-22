import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, Calendar, ClipboardCheck, Download, FileText, GraduationCap, Shield, Award, Users, TrendingUp, CheckCircle2, AlertCircle, Clock, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  { icon: Calendar, title: "Exam Schedules", desc: "Semester-wise examination timetables published well in advance for all UG, PG, and PhD programs.", color: "from-blue-500 to-cyan-500" },
  { icon: FileText, title: "Exam Payment", desc: "Secure online payment portal for examination fees with multiple payment options and instant confirmation.", color: "from-purple-500 to-pink-500" },
  { icon: Download, title: "Hall Ticket Download", desc: "Students can download hall tickets from the examination portal before the commencement of exams.", color: "from-orange-500 to-red-500" },
  { icon: ClipboardCheck, title: "Results", desc: "Semester results published on the official portal with grade cards and consolidated marksheets.", color: "from-green-500 to-emerald-500" },
  { icon: Shield, title: "Examination Cell", desc: "Dedicated examination cell handling scheduling, invigilation, evaluation, and grievance redressal.", color: "from-indigo-500 to-blue-500" },
  { icon: GraduationCap, title: "Convocation", desc: "Annual convocation ceremony for conferring degrees to graduating students.", color: "from-yellow-500 to-orange-500" },
];

const stats = [
  { icon: Users, value: "5000+", label: "Students Examined", color: "text-blue-500" },
  { icon: Award, value: "98%", label: "Pass Percentage", color: "text-green-500" },
  { icon: TrendingUp, value: "100%", label: "Result Accuracy", color: "text-purple-500" },
  { icon: Clock, value: "15 Days", label: "Result Declaration", color: "text-orange-500" },
];

const examTypes = [
  { title: "Regular Examinations", desc: "Conducted at the end of each semester for all registered students", icon: Calendar },
  { title: "Supplementary Exams", desc: "For students who need to clear backlogs or improve grades", icon: FileText },
  { title: "Re-evaluation", desc: "Option to apply for answer script re-evaluation within stipulated time", icon: ClipboardCheck },
  { title: "Challenge Valuation", desc: "Provision for viewing answer scripts and challenging evaluation", icon: AlertCircle },
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
        <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/75" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <ScrollReveal>
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3 animate-fade-in">Examinations</p>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">Examinations <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Cell</span></h1>
              <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
                Managing all aspects of the examination process with transparency, efficiency, and academic integrity.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all">
                  <Download className="w-4 h-4 mr-2" />
                  Download Hall Ticket
                </Button>
                <a href="https://mits.ac.in/results">
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Check Results
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
          <div className="absolute bottom-4 left-6 z-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm">
                <li><a href="/" className="text-white/70 hover:text-white transition-colors">Home</a></li>
                <li className="text-white/50">›</li>
                <li><a href="/academics" className="text-white/70 hover:text-white transition-colors">Academics</a></li>
                <li className="text-white/50">›</li>
                <li className="text-white font-semibold">Examinations</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">Examination Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive examination management system ensuring fairness and transparency</p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
              {sections.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group h-full overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-card to-card/50 border border-border rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                    <div className="font-display text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto shadow-lg animate-pulse">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Academic Regulations</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive framework ensuring quality education and fair evaluation</p>
              </div>
            </ScrollReveal>
            <div className="max-w-4xl mx-auto space-y-4 mb-16">
              {regulations.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 group">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-lg group-hover:scale-110 transition-transform">{i + 1}</span>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors flex-1">{item}</p>
                    <CheckCircle2 className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="max-w-5xl mx-auto">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Examination Types</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {examTypes.map((type, i) => (
                    <div key={i} className="bg-gradient-to-br from-card to-card/80 border border-border rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <type.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{type.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Examinations;
