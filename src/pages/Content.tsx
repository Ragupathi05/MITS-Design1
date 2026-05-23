import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { FileText, Download, BookOpen, Award, Shield, Scale, GraduationCap, Building2, ChevronRight, ExternalLink } from "lucide-react";

const quickAccess = [
  { icon: GraduationCap, title: "Academics", desc: "Programmes, departments, schools and academic structure.", to: "/academics", accent: "from-[#b30000] to-[#d93030]" },
  { icon: Building2, title: "Infrastructure", desc: "Campus facilities, labs, transport and student amenities.", to: "/infrastructure", accent: "from-[#0f2a44] to-[#1a3d5c]" },
  { icon: BookOpen, title: "Library", desc: "Digital library, journals, books and research databases.", to: "/library", accent: "from-[#8a6a1a] to-[#caa74d]" },
  { icon: Award, title: "Placements", desc: "Recruiters, statistics and the dedicated placement process.", to: "/placements", accent: "from-[#7a0000] to-[#b30000]" },
];

const resources = [
  { icon: FileText, title: "NAAC Accreditation", href: "https://mits.ac.in/naac" },
  { icon: FileText, title: "NIRF Report", href: "https://mits.ac.in/nirf" },
  { icon: Shield, title: "Mandatory Disclosures", to: "/about/mandatory-disclosures" },
  { icon: Scale, title: "Affiliations & Accreditations", href: "https://mits.ac.in/affiliations-accreditations" },
  { icon: FileText, title: "Public Self Disclosures", href: "https://mits.ac.in/public-self-disclosure" },
  { icon: Download, title: "Annual Report", href: "https://mits.ac.in/annual-report" },
  { icon: FileText, title: "AICTE Approvals", href: "https://mits.ac.in/aicte-approval" },
  { icon: Shield, title: "Anti-Ragging Policy", href: "https://mits.ac.in/anti-ragging" },
];

const Content = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <div className="relative h-72 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a44] via-[#1a3d5c] to-[#0f2a44]" />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#caa74d]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#b30000]/20 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <ScrollReveal>
              <p className="text-[#caa74d] font-semibold tracking-[0.25em] uppercase text-xs md:text-sm mb-3">Resources Hub</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Content & Resources</h1>
              <p className="font-body text-base md:text-lg text-white/85 max-w-2xl mx-auto">
                Quick access to institutional information, accreditations and statutory disclosures.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Quick Access */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-10">
                <p className="text-[#b30000] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Explore</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0f2a44]">Quick Access</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {quickAccess.map((q, i) => {
                const Icon = q.icon;
                return (
                  <ScrollReveal key={q.title} delay={i * 0.08}>
                    <Link to={q.to} className="group block h-full">
                      <div className="relative h-full bg-white border border-border/70 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${q.accent} opacity-10 group-hover:opacity-25 transition-opacity`} />
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${q.accent} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display font-bold text-lg text-[#0f2a44] mb-2">{q.title}</h3>
                        <p className="text-sm text-foreground/70 leading-relaxed mb-3">{q.desc}</p>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#b30000] group-hover:gap-2 transition-all">
                          Explore <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Statutory resources */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-10">
                <p className="text-[#b30000] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Compliance</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0f2a44]">Statutory & Institutional Documents</h2>
                <p className="font-body text-foreground/70 mt-3 max-w-2xl mx-auto">All approvals, accreditations and public disclosures in one place.</p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {resources.map((r, i) => {
                const Icon = r.icon;
                const inner = (
                  <div className="group relative h-full bg-white/80 backdrop-blur border border-border/70 rounded-xl p-5 shadow-sm hover:shadow-lg hover:border-[#b30000]/40 hover:-translate-y-0.5 transition-all overflow-hidden">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#b30000]/10 to-[#b30000]/5 text-[#b30000] flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#b30000] group-hover:to-[#d93030] group-hover:text-white transition-all">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-sm text-[#0f2a44] leading-snug">{r.title}</h4>
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground/55 mt-1">
                          {r.href ? <>Open <ExternalLink className="w-3 h-3" /></> : <>View <ChevronRight className="w-3 h-3" /></>}
                        </span>
                      </div>
                    </div>
                  </div>
                );
                return (
                  <ScrollReveal key={r.title} delay={i * 0.05}>
                    {r.href ? (
                      <a href={r.href} target="_blank" rel="noreferrer">{inner}</a>
                    ) : (
                      <Link to={r.to!}>{inner}</Link>
                    )}
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 text-center bg-gradient-to-br from-[#7a0000] via-[#b30000] to-[#d93030] shadow-xl shadow-[#b30000]/25">
                <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#caa74d]/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
                <div className="relative">
                  <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-3">Need something specific?</h2>
                  <p className="text-white/85 max-w-xl mx-auto mb-6">Reach out to our offices for documents, certifications or institutional queries.</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#b30000] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                    Contact MITS <ChevronRight className="w-4 h-4" />
                  </Link>
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

export default Content;
