import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  FileText,
  ExternalLink,
  Award,
  Users,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Trophy,
  BookOpen,
  ClipboardList,
  ScrollText,
  GraduationCap,
  Building2,
  ShieldCheck,
  Video,
  Menu,
  Download,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import {
  accreditationCore,
  cycle1Documents,
  aisheReports,
  criteria,
  extendedProfileDVV,
  iqacLinks,
  highlights,
  coordinator,
  NAAC_GRADE,
  NAAC_CYCLE,
  type DocLink,
} from "@/data/naacData";

type SectionKey =
  | "overview"
  | "highlights"
  | "cycle1"
  | "iqac"
  | "ssr"
  | "criteria"
  | "dvv-ep"
  | "aishe"
  | "certificate"
  | "reports"
  | "contact";

const sections: { key: SectionKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "overview", label: "Overview", icon: BookOpen },
  { key: "highlights", label: "Highlights", icon: Sparkles },
  { key: "cycle1", label: "Cycle 1 (2020)", icon: Trophy },
  { key: "iqac", label: "IQAC", icon: ShieldCheck },
  { key: "ssr", label: "SSR", icon: ClipboardList },
  { key: "criteria", label: "Criteria 1–7", icon: ScrollText },
  { key: "dvv-ep", label: "DVV / Extended Profile", icon: GraduationCap },
  { key: "aishe", label: "AISHE Reports", icon: Building2 },
  { key: "certificate", label: "Certificate", icon: Award },
  { key: "reports", label: "Peer Team Reports", icon: FileText },
  { key: "contact", label: "Coordinator", icon: Users },
];

const DocCard = ({ doc, highlight }: { doc: DocLink; highlight?: boolean }) => {
  const isVideo = doc.type === "video";
  const isLink = doc.type === "link";
  const Icon = isVideo ? Video : isLink ? ExternalLink : FileText;
  return (
    <motion.a
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className={`group relative flex items-center gap-4 rounded-xl border bg-white p-4 md:p-5 shadow-sm transition-all hover:shadow-[0_12px_32px_rgba(15,42,68,0.12)] hover:border-[#caa74d] ${
        highlight ? "border-[#caa74d]/60 bg-gradient-to-br from-[#fff8e6] to-white" : "border-[#0f2a44]/10"
      }`}
    >
      <div
        className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center ${
          highlight
            ? "bg-gradient-to-br from-[#caa74d] to-[#a8862e] text-white"
            : isVideo
              ? "bg-gradient-to-br from-[#0f2a44] to-[#1a3a5c] text-white"
              : "bg-gradient-to-br from-[#0f2a44] to-[#11355a] text-white"
        }`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-[#0f2a44] text-sm md:text-base leading-snug">
          {doc.title}
        </p>
        <p className="font-body text-xs text-[#0f2a44]/60 mt-1 uppercase tracking-wider">
          {isVideo ? "Video" : isLink ? "External Link" : "PDF Document"}
        </p>
      </div>
      <Download className="w-5 h-5 text-primary/40 group-hover:text-[#caa74d] transition-colors shrink-0" />
    </motion.a>
  );
};

const SectionHeader = ({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) => (
  <div className="mb-8">
    <p className="font-body text-xs uppercase tracking-[0.2em] text-[#caa74d] font-semibold mb-2">{eyebrow}</p>
    <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0f2a44]">{title}</h2>
    {description && (
      <p className="font-body text-[#0f2a44]/70 mt-3 max-w-3xl leading-relaxed">{description}</p>
    )}
  </div>
);

const DocGrid = ({ docs }: { docs: DocLink[] }) => (
  <div className="grid sm:grid-cols-2 gap-4">
    {docs.map((d) => (
      <DocCard key={d.title + d.url} doc={d} />
    ))}
  </div>
);

const NAAC = () => {
  const [active, setActive] = useState<SectionKey>("overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const filter = (docs: DocLink[]) => docs;

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <Header />
      <SEO
        title="MITS NAAC A+ Accreditation – Grade, SSR & IQAC Documents"
        description="MITS Madanapalle holds NAAC A+ accreditation. Access the SSR, IQAC reports, criteria documents, DVV clarifications, AISHE data, and peer team reports for MITS deemed university."
        canonical="/naac"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2a44] via-[#152f4f] to-[#0a1d33] text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #caa74d 0%, transparent 40%), radial-gradient(circle at 80% 80%, #b31317 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22><path d=%22M0 0h60v60H0z%22 fill=%22none%22/><path d=%22M30 0v60M0 30h60%22 stroke=%22%23ffffff%22 stroke-opacity=%220.04%22/></svg>')]" />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 font-body">
            <Link to="/" className="hover:text-[#caa74d] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/about" className="hover:text-[#caa74d] transition-colors">About</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#caa74d]">NAAC Accreditation</span>
          </nav>
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#caa74d]/15 border border-[#caa74d]/30 text-[#caa74d] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              <Award className="w-3.5 h-3.5" /> NAAC Accredited · Grade {NAAC_GRADE}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-white">
              National Assessment and<br />
              <span className="text-[#caa74d]">Accreditation Council</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-white/80 mt-6 max-w-2xl leading-relaxed">
              MITS' commitment to quality, transparency and continuous improvement — documented through
              NAAC accreditation, IQAC governance and the seven-criterion framework.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={accreditationCore[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#caa74d] text-[#0f2a44] font-semibold hover:bg-[#dbb95c] transition-colors"
              >
                <Award className="w-4 h-4" /> View NAAC Certificate
              </a>
              <a
                href={accreditationCore[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                <ClipboardList className="w-4 h-4" /> Download SSR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-xl border border-[#0f2a44]/10 p-5 shadow-sm">
                <p className="font-display font-bold text-[#0f2a44] text-sm uppercase tracking-wider mb-3">
                  NAAC Portal
                </p>
                <nav className="space-y-1">
                  {sections.map((s) => {
                    const Icon = s.icon;
                    const isActive = active === s.key;
                    return (
                      <button
                        key={s.key}
                        onClick={() => setActive(s.key)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body font-medium text-left transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-[#0f2a44] to-[#11355a] text-[#caa74d] shadow-md"
                            : "text-[#0f2a44]/75 hover:bg-[#0f2a44]/5 hover:text-[#0f2a44]"
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{s.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="bg-gradient-to-br from-[#0f2a44] to-[#152f4f] text-white rounded-xl p-5">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-[#caa74d] mb-2">Status</p>
                <p className="font-display text-2xl font-bold text-white">Grade {NAAC_GRADE}</p>
                <p className="font-body text-white/70 text-xs mt-1">{NAAC_CYCLE}</p>
              </div>
            </div>
          </aside>

          {/* Mobile nav */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileNavOpen((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#0f2a44]/10 rounded-xl shadow-sm"
            >
              <span className="flex items-center gap-2 font-body font-semibold text-primary">
                <Menu className="w-4 h-4" />
                {sections.find((s) => s.key === active)?.label}
              </span>
              <ChevronRight className={`w-4 h-4 transition-transform ${mobileNavOpen ? "rotate-90" : ""}`} />
            </button>
            <AnimatePresence>
              {mobileNavOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-white border border-t-0 border-[#0f2a44]/10 rounded-b-xl"
                >
                  <div className="p-2 grid grid-cols-2 gap-1">
                    {sections.map((s) => {
                      const Icon = s.icon;
                      return (
                        <button
                          key={s.key}
                          onClick={() => {
                            setActive(s.key);
                            setMobileNavOpen(false);
                          }}
                          className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-body font-medium text-left ${
                            active === s.key
                              ? "bg-[#0f2a44] text-[#caa74d]"
                              : "text-[#0f2a44]/75 hover:bg-[#0f2a44]/5"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{s.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content */}
          <main className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {active === "overview" && (
                  <section>
                    <SectionHeader
                      eyebrow="About"
                      title="NAAC at MITS"
                      description="Madanapalle Institute of Technology & Science (MITS), established in 1998, has been conferred the status of a Deemed to be University by the Government of India under Section 3 of the UGC Act, 1956 (Notification dated 15th July 2025)."
                    />
                    <div className="bg-white rounded-2xl border border-[#0f2a44]/10 p-6 md:p-10 shadow-sm">
                      <div className="prose max-w-none font-body text-[#0f2a44]/85 leading-relaxed space-y-4">
                        <p>
                          MITS is accredited by the <strong>National Assessment and Accreditation Council (NAAC)</strong>,
                          a hallmark of quality across teaching-learning, research, infrastructure, governance and student
                          support. MITS has successfully completed its <strong>first cycle of NAAC accreditation with an A+ Grade</strong>,
                          and is now preparing for the next cycle with a strengthened focus on outcome-based education,
                          research impact and global engagement.
                        </p>
                        <p>
                          Through its <strong>Internal Quality Assurance Cell (IQAC)</strong>, MITS continuously monitors and
                          enhances academic and administrative performance through quality benchmarks, stakeholder
                          feedback and systematic documentation aligned with the NAAC framework.
                        </p>
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
                        {[
                          "Student-centric learning & OBE",
                          "Research, innovation & consultancy",
                          "Industry interaction & skill development",
                          "Inclusive practices & social responsibility",
                          "Sustainable & green campus initiatives",
                          "Transparent governance & accountability",
                        ].map((t) => (
                          <div
                            key={t}
                            className="flex items-start gap-2 p-3 rounded-lg bg-[#faf7f2] border border-[#caa74d]/20"
                          >
                            <Sparkles className="w-4 h-4 text-[#caa74d] mt-0.5 shrink-0" />
                            <span className="font-body text-sm text-[#0f2a44]/85">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="font-display text-xl font-bold text-[#0f2a44] mb-4">Quick Access</h3>
                      <DocGrid docs={accreditationCore} />
                    </div>
                  </section>
                )}

                {active === "highlights" && (
                  <section>
                    <SectionHeader
                      eyebrow="At a Glance"
                      title="Accreditation Highlights"
                      description="Key institutional metrics that underpin MITS' NAAC accreditation status."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {highlights.map((h, i) => (
                        <motion.div
                          key={h.label}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.07 }}
                          className="relative overflow-hidden rounded-2xl bg-white border border-[#0f2a44]/10 p-6 shadow-sm"
                        >
                          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#caa74d]/30 to-transparent" />
                          <p className="font-body text-xs uppercase tracking-[0.18em] text-primary/60">
                            {h.label}
                          </p>
                          <p className="font-display text-4xl font-bold text-[#0f2a44] mt-2">{h.value}</p>
                          <p className="font-body text-sm text-primary/70 mt-2">{h.note}</p>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {active === "cycle1" && (
                  <section>
                    <SectionHeader
                      eyebrow="Cycle 1"
                      title="Reassessment 2020 — Cycle 1 Documents"
                      description="Complete documentation set submitted and issued during the first cycle of NAAC accreditation."
                    />
                    <DocGrid docs={filter(cycle1Documents)} />
                  </section>
                )}

                {active === "iqac" && (
                  <section>
                    <SectionHeader
                      eyebrow="Quality Assurance"
                      title="Internal Quality Assurance Cell"
                      description="IQAC is the nodal body driving institutional quality enhancement, benchmarking and NAAC compliance at MITS."
                    />
                    <div className="bg-gradient-to-br from-[#0f2a44] to-[#152f4f] text-white rounded-2xl p-6 md:p-8 mb-6">
                      <p className="font-body text-white/85 leading-relaxed">
                        The IQAC develops a system for conscious, consistent and catalytic improvement in
                        the overall performance of MITS — by promoting measures for institutional functioning
                        towards quality enhancement through internalization of quality culture and
                        institutionalization of best practices.
                      </p>
                    </div>
                    <DocGrid docs={filter(iqacLinks)} />
                  </section>
                )}

                {active === "ssr" && (
                  <section>
                    <SectionHeader
                      eyebrow="Self Study Report"
                      title="SSR & IIQA"
                      description="The Self Study Report (SSR) and Institutional Information for Quality Assessment (IIQA) submitted to NAAC."
                    />
                    <DocGrid
                      docs={filter([
                        { title: "MITS Updated SSR", url: accreditationCore[2].url, type: "pdf" },
                        ...cycle1Documents.filter((d) => /SSR|IIQA/i.test(d.title)),
                      ])}
                    />
                  </section>
                )}

                {active === "criteria" && (
                  <section>
                    <SectionHeader
                      eyebrow="Framework"
                      title="NAAC Criteria 1 – 7"
                      description="The seven criteria framework prescribed by NAAC for institutional assessment. Each criterion opens its detailed metric-wise documentation on the official NAAC repository."
                    />
                    <div className="grid sm:grid-cols-2 gap-4">
                      {criteria.map((c, i) => (
                        <motion.a
                          key={c.number}
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ y: -3 }}
                          className="group relative overflow-hidden bg-white rounded-2xl border border-[#0f2a44]/10 p-6 shadow-sm hover:shadow-[0_16px_40px_rgba(15,42,68,0.12)] hover:border-[#caa74d] transition-all"
                        >
                          <div className="flex items-start gap-4">
                            <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#0f2a44] to-[#11355a] text-[#caa74d] flex items-center justify-center font-display text-2xl font-bold">
                              {c.number}
                            </div>
                            <div className="flex-1">
                              <p className="font-body text-xs uppercase tracking-wider text-[#caa74d] font-semibold mb-1">
                                Criterion {c.number}
                              </p>
                              <h3 className="font-display text-lg font-bold text-[#0f2a44] leading-snug">
                                {c.title}
                              </h3>
                              <p className="font-body text-sm text-[#0f2a44]/70 mt-2 leading-relaxed">
                                {c.description}
                              </p>
                              <span className="inline-flex items-center gap-1.5 text-[#caa74d] font-body text-sm font-semibold mt-3 group-hover:gap-2.5 transition-all">
                                Open Metric Repository <ExternalLink className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </section>
                )}

                {active === "dvv-ep" && (
                  <section>
                    <SectionHeader
                      eyebrow="DVV"
                      title="DVV Clarifications — Extended Profile"
                      description="Data Validation & Verification clarifications submitted against the Extended Profile metrics."
                    />
                    <DocGrid docs={filter(extendedProfileDVV)} />
                  </section>
                )}

                {active === "aishe" && (
                  <section>
                    <SectionHeader
                      eyebrow="AISHE"
                      title="All India Survey on Higher Education"
                      description="Year-wise AISHE certificates filed with the Ministry of Education, Government of India."
                    />
                    <DocGrid docs={filter(aisheReports)} />
                  </section>
                )}

                {active === "certificate" && (
                  <section>
                    <SectionHeader
                      eyebrow="Recognition"
                      title="NAAC Certificate & Grade Sheet"
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <DocCard doc={cycle1Documents[0]} highlight />
                      <DocCard doc={cycle1Documents[1]} highlight />
                    </div>
                  </section>
                )}

                {active === "reports" && (
                  <section>
                    <SectionHeader
                      eyebrow="Evaluation"
                      title="Peer Team & Metric-wise Reports"
                      description="Reports issued by the NAAC peer team following institutional evaluation."
                    />
                    <DocGrid
                      docs={filter([
                        cycle1Documents[2],
                        cycle1Documents[3],
                        cycle1Documents[4],
                        cycle1Documents[5],
                        cycle1Documents[6],
                      ])}
                    />
                  </section>
                )}

                {active === "contact" && (
                  <section>
                    <SectionHeader eyebrow="Contact" title="IQAC Coordinator" />
                    <div className="bg-white rounded-2xl border border-[#0f2a44]/10 p-6 md:p-8 shadow-sm">
                      <p className="font-display text-xl font-bold text-[#0f2a44]">{coordinator.office}</p>
                      <p className="font-body text-[#0f2a44]/70 mt-1">{coordinator.institute}</p>
                      <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-[#faf7f2]">
                          <MapPin className="w-5 h-5 text-[#caa74d] shrink-0 mt-0.5" />
                          <p className="font-body text-sm text-[#0f2a44]/85">{coordinator.address}</p>
                        </div>
                        <a
                          href={`mailto:${coordinator.email}`}
                          className="flex items-start gap-3 p-4 rounded-lg bg-[#faf7f2] hover:bg-[#caa74d]/10 transition-colors"
                        >
                          <Mail className="w-5 h-5 text-[#caa74d] shrink-0 mt-0.5" />
                          <p className="font-body text-sm text-[#0f2a44]/85">{coordinator.email}</p>
                        </a>
                        <a
                          href={`tel:${coordinator.phone}`}
                          className="flex items-start gap-3 p-4 rounded-lg bg-[#faf7f2] hover:bg-[#caa74d]/10 transition-colors"
                        >
                          <Phone className="w-5 h-5 text-[#caa74d] shrink-0 mt-0.5" />
                          <p className="font-body text-sm text-[#0f2a44]/85">{coordinator.phone}</p>
                        </a>
                      </div>
                    </div>
                  </section>
                )}
              </motion.div>
            </AnimatePresence>


          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NAAC;
