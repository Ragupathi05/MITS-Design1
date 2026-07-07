import { useState, useMemo } from "react";
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
  Target,
  Layers,
  Milestone,
  Calendar,
  MessageSquare,
  BarChart3,
  Library as LibraryIcon,
  Globe,
  Newspaper,
  BookMarked,
  FolderTree,
  ImageIcon,
  Bell,
  Search,
  Files,
  Star,
  ClipboardCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  about,
  objectives,
  strategies,
  functions as iqacFunctions,
  benefits,
  compositionNotes,
  compositionYearly,
  organogram,
  naacReforms2024,
  milestones,
  certifications,
  aicteMandate,
  aicte360Feedback,
  feedbackPolicy,
  actionTakenReports,
  atrEvidence,
  feedbackForms,
  aaaOverview,
  aaaPolicyDocs,
  externalAuditReports,
  internalAuditReports,
  externalAuditATR,
  internalAuditATR,
  aaaReferences,
  strategicPlan,
  econtent,
  poPsoCoUG,
  poPsoCoPG,
  annualReports,
  iqacHoursReports,
  ugcMandate,
  iqacEvents,
  eNoticeBoard,
  auditFormats,
  naacFormats,
  nbaFormats,
  nirfFormats,
  checkLists,
  manualsTable,
  qualityInitiatives,
  contact,
  bannerImage,
  type Doc,
} from "@/data/iqac";

type SectionKey =
  | "about"
  | "objectives"
  | "functions"
  | "composition"
  | "organogram"
  | "policies"
  | "activities"
  | "initiatives"
  | "milestones"
  | "meetings"
  | "certifications"
  | "aicte"
  | "aqar"
  | "reports"
  | "feedback"
  | "aaa"
  | "aaaRef"
  | "strategic"
  | "bestPractices"
  | "distinctive"
  | "sss"
  | "econtent"
  | "popsoco"
  | "annual"
  | "newsletter"
  | "handbook"
  | "ugc"
  | "events"
  | "eiqac"
  | "naacReforms"
  | "manuals"
  | "gallery"
  | "contact";

const sections: { key: SectionKey; label: string; icon: React.ComponentType<{ className?: string }>; group: string }[] = [
  { key: "about", label: "About IQAC", icon: BookOpen, group: "Introduction" },
  { key: "objectives", label: "Objectives & Strategies", icon: Target, group: "Introduction" },
  { key: "functions", label: "Functions & Benefits", icon: Layers, group: "Introduction" },
  { key: "composition", label: "IQAC Composition", icon: Users, group: "Governance" },
  { key: "organogram", label: "IQAC Organogram", icon: FolderTree, group: "Governance" },
  { key: "policies", label: "IQAC Policies", icon: ShieldCheck, group: "Governance" },
  { key: "activities", label: "Activities of IQAC", icon: Calendar, group: "Operations" },
  { key: "initiatives", label: "Quality Initiatives", icon: Sparkles, group: "Operations" },
  { key: "milestones", label: "Milestones", icon: Milestone, group: "Operations" },
  { key: "meetings", label: "Minutes of Meeting", icon: ClipboardList, group: "Operations" },
  { key: "certifications", label: "Certifications", icon: Award, group: "Accreditation" },
  { key: "aicte", label: "AICTE Quality Mandate", icon: Trophy, group: "Accreditation" },
  { key: "aqar", label: "AQAR", icon: ClipboardCheck, group: "Accreditation" },
  { key: "reports", label: "Reports", icon: FileText, group: "Accreditation" },
  { key: "feedback", label: "Feedback System", icon: MessageSquare, group: "Assurance" },
  { key: "aaa", label: "Academic & Admin Audit", icon: ScrollText, group: "Assurance" },
  { key: "aaaRef", label: "AAA & References", icon: BookMarked, group: "Assurance" },
  { key: "strategic", label: "Strategic Plan", icon: Target, group: "Planning" },
  { key: "bestPractices", label: "Best Practices", icon: Star, group: "Planning" },
  { key: "distinctive", label: "Distinctive Performance", icon: Sparkles, group: "Planning" },
  { key: "sss", label: "Student Satisfaction Survey", icon: BarChart3, group: "Assurance" },
  { key: "econtent", label: "e-Content Facility", icon: LibraryIcon, group: "Academic" },
  { key: "popsoco", label: "PO-PSO-CO", icon: GraduationCap, group: "Academic" },
  { key: "annual", label: "MITS Annual Report", icon: FileText, group: "Publications" },
  { key: "newsletter", label: "Newsletter", icon: Newspaper, group: "Publications" },
  { key: "handbook", label: "Hand Book", icon: BookMarked, group: "Publications" },
  { key: "ugc", label: "UGC Quality Mandate", icon: Building2, group: "External" },
  { key: "events", label: "IQAC Events & Collaborations", icon: Calendar, group: "External" },
  { key: "eiqac", label: "e-IQAC", icon: Globe, group: "External" },
  { key: "naacReforms", label: "NAAC Reforms 2024", icon: ShieldCheck, group: "Accreditation" },
  { key: "manuals", label: "Manuals / Formats / Guidelines", icon: Files, group: "Downloads" },
  { key: "gallery", label: "Gallery", icon: ImageIcon, group: "External" },
  { key: "contact", label: "Contact Us", icon: Mail, group: "External" },
];

const NAVY = "#0f2a44";
const GOLD = "#caa74d";

const DocCard = ({ doc }: { doc: Doc }) => {
  const isVideo = doc.type === "video";
  const isLink = doc.type === "link";
  const Icon = isVideo ? Video : isLink ? ExternalLink : FileText;
  const label =
    isVideo ? "Video" :
    isLink ? "External Link" :
    doc.type === "xlsx" ? "Excel Document" :
    doc.type === "doc" ? "Word Document" :
    doc.type === "zip" ? "Archive" :
    "PDF Document";
  return (
    <motion.a
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className="group relative flex items-center gap-4 rounded-xl border border-[#0f2a44]/10 bg-white p-4 md:p-5 shadow-sm transition-all hover:shadow-[0_12px_32px_rgba(15,42,68,0.12)] hover:border-[#caa74d]"
    >
      <div className={`shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${isVideo ? "from-[#b31317] to-[#8a0e12]" : isLink ? "from-[#caa74d] to-[#a8862e]" : "from-[#0f2a44] to-[#11355a]"} text-white`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-[#0f2a44] text-sm md:text-[15px] leading-snug">{doc.title}</p>
        <p className="font-body text-[11px] text-[#0f2a44]/60 mt-1 uppercase tracking-wider">{label}</p>
      </div>
      <Download className="w-5 h-5 text-primary/40 group-hover:text-[#caa74d] transition-colors shrink-0" />
    </motion.a>
  );
};

const DocGrid = ({ docs }: { docs: Doc[] }) =>
  docs.length === 0 ? (
    <p className="font-body text-[#0f2a44]/60 italic">No documents match your search.</p>
  ) : (
    <div className="grid sm:grid-cols-2 gap-4">
      {docs.map((d) => <DocCard key={d.title + d.url} doc={d} />)}
    </div>
  );

const SectionHeader = ({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) => (
  <div className="mb-8">
    <p className="font-body text-xs uppercase tracking-[0.2em] text-[#caa74d] font-semibold mb-2">{eyebrow}</p>
    <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0f2a44]">{title}</h2>
    {description && <p className="font-body text-[#0f2a44]/70 mt-3 max-w-3xl leading-relaxed">{description}</p>}
  </div>
);

const SubHeader = ({ title }: { title: string }) => (
  <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44] mt-10 mb-4 flex items-center gap-2">
    <span className="w-1 h-6 bg-[#caa74d] rounded" /> {title}
  </h3>
);

const NoticeCard = ({ notice }: { notice: { title: string; date: string; detail?: string; url?: string } }) => (
  <div className="rounded-xl border border-[#0f2a44]/10 bg-white p-4 hover:border-[#caa74d] transition-colors">
    <div className="flex items-start gap-3">
      <Bell className="w-4 h-4 text-[#caa74d] mt-0.5 shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-[#0f2a44] text-sm">{notice.title}</p>
        <p className="font-body text-xs text-[#0f2a44]/70 mt-1">{notice.date}</p>
        {notice.detail && <p className="font-body text-xs text-[#0f2a44]/60 mt-1">{notice.detail}</p>}
        {notice.url && (
          <a href={notice.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-[#b31317] hover:underline">
            View details <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const IQAC = () => {
  const [active, setActive] = useState<SectionKey>("about");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filter = (docs: Doc[]) => {
    if (!search.trim()) return docs;
    const q = search.toLowerCase();
    return docs.filter((d) => d.title.toLowerCase().includes(q));
  };

  const grouped = useMemo(() => {
    const map: Record<string, typeof sections> = {};
    sections.forEach((s) => {
      (map[s.group] ||= []).push(s);
    });
    return map;
  }, []);

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2a44] via-[#152f4f] to-[#0a1d33] text-white">
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #caa74d 0%, transparent 40%), radial-gradient(circle at 80% 80%, #b31317 0%, transparent 50%)" }}
        />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 font-body">
            <Link to="/" className="hover:text-[#caa74d] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/naac" className="hover:text-[#caa74d] transition-colors">NAAC</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#caa74d]">IQAC Portal</span>
          </nav>
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#caa74d]/15 border border-[#caa74d]/30 text-[#caa74d] text-xs font-semibold uppercase tracking-[0.2em] mb-5"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Internal Quality Assurance Cell
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold leading-tight text-white"
            >
              Quality Assurance<br /><span className="text-[#caa74d]">at MITS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-body text-lg md:text-xl text-white/85 mt-6 max-w-3xl leading-relaxed"
            >
              Driving institutional excellence through continuous quality enhancement, accreditation, academic audits,
              best practices and outcome-based education — anchored in NAAC, NBA, ISO 21001:2018 and UGC frameworks.
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 max-w-3xl">
              {[
                { k: "NAAC", v: "A+ Grade" },
                { k: "ISO", v: "21001:2018" },
                { k: "AQARs", v: "Submitted" },
                { k: "Est.", v: "IQAC 2008" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-white/15 bg-white/5 backdrop-blur px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#caa74d]">{s.k}</p>
                  <p className="font-display text-xl font-bold text-white mt-1">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
              <div className="bg-white rounded-xl border border-[#0f2a44]/10 p-4 shadow-sm">
                <p className="font-display font-bold text-[#0f2a44] text-sm uppercase tracking-wider mb-3 px-2">
                  IQAC Portal
                </p>
                <div className="relative mb-3">
                  <Search className="w-4 h-4 text-[#0f2a44]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search documents..."
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#0f2a44]/15 bg-[#faf7f2] text-sm font-body focus:outline-none focus:border-[#caa74d]"
                  />
                </div>
                <nav className="space-y-3">
                  {Object.entries(grouped).map(([group, items]) => (
                    <div key={group}>
                      <p className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-[#0f2a44]/50 px-2 mb-1">{group}</p>
                      <div className="space-y-0.5">
                        {items.map((s) => {
                          const Icon = s.icon;
                          const isActive = active === s.key;
                          return (
                            <button
                              key={s.key}
                              onClick={() => setActive(s.key)}
                              className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] font-body font-medium text-left transition-all ${
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
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
              <div className="bg-gradient-to-br from-[#0f2a44] to-[#152f4f] text-white rounded-xl p-5">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-[#caa74d] mb-2">IQAC Coordinator</p>
                <p className="font-body text-sm text-white/85">{contact.email}</p>
                <p className="font-body text-sm text-white/85 mt-1">{contact.phone}</p>
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
                  initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-white border border-t-0 border-[#0f2a44]/10 rounded-b-xl"
                >
                  <div className="p-2 grid grid-cols-2 gap-1 max-h-[60vh] overflow-y-auto">
                    {sections.map((s) => {
                      const Icon = s.icon;
                      return (
                        <button
                          key={s.key}
                          onClick={() => { setActive(s.key); setMobileNavOpen(false); }}
                          className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-body font-medium text-left ${
                            active === s.key ? "bg-[#0f2a44] text-[#caa74d]" : "text-[#0f2a44]/75 hover:bg-[#0f2a44]/5"
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
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {active === "about" && (
                  <section>
                    <SectionHeader eyebrow="Introduction" title="About IQAC" />
                    <div className="bg-white rounded-2xl border border-[#0f2a44]/10 p-6 md:p-8 shadow-sm space-y-4 font-body text-[#0f2a44]/85 leading-relaxed">
                      {about.intro.map((p, i) => <p key={i}>{p}</p>)}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-gradient-to-br from-[#0f2a44] to-[#152f4f] text-white rounded-2xl p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#caa74d] mb-2">Vision</p>
                        <p className="font-body text-white/90 leading-relaxed">{about.vision}</p>
                      </div>
                      <div className="bg-white rounded-2xl p-6 border border-[#0f2a44]/10">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#caa74d] mb-3">Mission</p>
                        <ul className="space-y-2 font-body text-[#0f2a44]/85 text-sm">
                          {about.mission.map((m, i) => (
                            <li key={i} className="flex gap-2"><span className="text-[#caa74d]">•</span>{m}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <SubHeader title="E-Notice Board" />
                    <div className="grid md:grid-cols-2 gap-3">
                      {eNoticeBoard.slice(0, 10).map((n, i) => <NoticeCard key={i} notice={n} />)}
                    </div>
                  </section>
                )}

                {active === "objectives" && (
                  <section>
                    <SectionHeader eyebrow="Purpose" title="Objectives & Strategies" description="The primary aim of IQAC and the mechanisms it evolves to deliver on institutional quality." />
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl p-6 border border-[#0f2a44]/10">
                        <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-3">Primary Objectives</h3>
                        <ul className="space-y-3">
                          {objectives.map((o, i) => (
                            <li key={i} className="flex gap-3 font-body text-sm text-[#0f2a44]/85">
                              <span className="shrink-0 w-6 h-6 rounded-full bg-[#caa74d]/15 text-[#caa74d] font-bold text-xs flex items-center justify-center">{i + 1}</span>
                              <span>{o}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-[#0f2a44] to-[#152f4f] text-white rounded-2xl p-6">
                        <h3 className="font-display text-lg font-bold mb-3">Strategies</h3>
                        <ul className="space-y-2 font-body text-sm text-white/90">
                          {strategies.map((s, i) => (
                            <li key={i} className="flex gap-2"><span className="text-[#caa74d]">›</span>{s}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                )}

                {active === "functions" && (
                  <section>
                    <SectionHeader eyebrow="Scope" title="Functions & Benefits" />
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-3">Functions of IQAC</h3>
                        <div className="space-y-2">
                          {iqacFunctions.map((f, i) => (
                            <div key={i} className="bg-white rounded-lg p-4 border border-[#0f2a44]/10 font-body text-sm text-[#0f2a44]/85 flex gap-3">
                              <Sparkles className="w-4 h-4 text-[#caa74d] shrink-0 mt-0.5" />{f}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-3">Benefits</h3>
                        <div className="space-y-2">
                          {benefits.map((b, i) => (
                            <div key={i} className="bg-gradient-to-br from-[#faf7f2] to-white rounded-lg p-4 border border-[#caa74d]/30 font-body text-sm text-[#0f2a44]/85 flex gap-3">
                              <Trophy className="w-4 h-4 text-[#b31317] shrink-0 mt-0.5" />{b}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {active === "composition" && (
                  <section>
                    <SectionHeader eyebrow="Governance" title="IQAC Composition" description="MITS IQAC has been meticulously constituted based on NAAC and UGC guidelines, with year-wise notifications available below." />
                    <div className="bg-white rounded-2xl p-6 border border-[#0f2a44]/10 mb-6">
                      <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-3">Composition Framework</h3>
                      <ul className="grid sm:grid-cols-2 gap-2 font-body text-sm text-[#0f2a44]/85">
                        {compositionNotes.map((c, i) => (
                          <li key={i} className="flex gap-2"><span className="text-[#caa74d]">•</span>{c}</li>
                        ))}
                      </ul>
                    </div>
                    <SubHeader title="Year-wise Committee Notifications" />
                    <DocGrid docs={filter(compositionYearly)} />
                  </section>
                )}

                {active === "organogram" && (
                  <section>
                    <SectionHeader eyebrow="Structure" title="IQAC Organogram" />
                    <div className="bg-white rounded-2xl p-6 md:p-10 border border-[#0f2a44]/10">
                      <p className="font-body text-[#0f2a44]/80 leading-relaxed mb-6">{organogram.note}</p>
                      <div className="grid gap-3 max-w-3xl mx-auto">
                        {[
                          { level: "Apex", role: "Chairperson — Vice-Chancellor / Head of Institution", color: "from-[#b31317] to-[#8a0e12]" },
                          { level: "L2", role: "IQAC Director", color: "from-[#0f2a44] to-[#11355a]" },
                          { level: "L3", role: "IQAC Coordinator", color: "from-[#0f2a44] to-[#11355a]" },
                          { level: "L4", role: "Criterion Coordinators (I–VII)", color: "from-[#caa74d] to-[#a8862e]" },
                          { level: "L5", role: "Department IQAC Coordinators", color: "from-[#caa74d] to-[#a8862e]" },
                          { level: "L6", role: "Functional Cells & Committees", color: "from-[#0f2a44]/70 to-[#11355a]/70" },
                        ].map((n, i) => (
                          <motion.div
                            key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                            className={`bg-gradient-to-r ${n.color} text-white rounded-xl px-5 py-4 flex items-center gap-4 shadow`}
                          >
                            <span className="font-mono text-xs opacity-70">{n.level}</span>
                            <span className="font-display font-semibold">{n.role}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {active === "policies" && (
                  <section>
                    <SectionHeader eyebrow="Policies" title="IQAC Policies & Framework" description="Institutional quality policies governing academic audit, feedback, benchmarks, and NAAC 2024 reforms." />
                    <SubHeader title="Academic Audit Policy" />
                    <DocGrid docs={filter(aaaPolicyDocs)} />
                    <SubHeader title="Stakeholder Feedback Policy" />
                    <DocGrid docs={filter(feedbackPolicy)} />
                    <SubHeader title="NAAC 2024 Reforms — Institutional Policies" />
                    <DocGrid docs={filter(naacReforms2024.slice(0, 8))} />
                  </section>
                )}

                {active === "activities" && (
                  <section>
                    <SectionHeader eyebrow="Timeline" title="Activities of IQAC" description="Chronological log of IQAC-conducted programmes, audits and initiatives." />
                    <div className="relative pl-6 border-l-2 border-[#caa74d]/40 space-y-6">
                      {filter(iqacEvents.map((e) => ({ title: `${e.title} — ${e.date}`, url: e.url || "#", type: "pdf" as const }))).map((e, i) => {
                        const original = iqacEvents.find((x) => `${x.title} — ${x.date}` === e.title);
                        if (!original) return null;
                        return (
                          <motion.div
                            key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}
                            className="relative"
                          >
                            <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-[#caa74d] border-4 border-[#faf7f2]" />
                            <div className="bg-white rounded-xl p-4 border border-[#0f2a44]/10">
                              <p className="font-body text-xs text-[#b31317] font-bold uppercase tracking-wider">{original.date}</p>
                              <p className="font-display font-semibold text-[#0f2a44] mt-1">{original.title}</p>
                              {original.url && (
                                <a href={original.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-sm text-[#caa74d] font-semibold hover:underline">
                                  <FileText className="w-3.5 h-3.5" /> Read Report
                                </a>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </section>
                )}

                {active === "initiatives" && (
                  <section>
                    <SectionHeader eyebrow="Quality" title="IQAC Quality Initiatives" description="Core institutional levers deployed by IQAC to embed quality across academics, governance and student experience." />
                    <div className="grid md:grid-cols-2 gap-4">
                      {qualityInitiatives.map((q, i) => (
                        <motion.div
                          key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                          className="relative overflow-hidden rounded-2xl bg-white border border-[#0f2a44]/10 p-6 shadow-sm"
                        >
                          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#caa74d]/30 to-transparent" />
                          <p className="font-body text-xs uppercase tracking-[0.18em] text-[#caa74d] font-semibold">Initiative {i + 1}</p>
                          <h3 className="font-display text-xl font-bold text-[#0f2a44] mt-2">{q.title}</h3>
                          <p className="font-body text-sm text-[#0f2a44]/70 mt-2 leading-relaxed">{q.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {active === "milestones" && (
                  <section>
                    <SectionHeader eyebrow="Journey" title="MITS Quality Milestones" description="Key institutional milestones since the IQAC was established in 2008." />
                    <div className="relative">
                      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#caa74d]/40 hidden md:block" />
                      <div className="space-y-6">
                        {milestones.map((m, i) => (
                          <motion.div
                            key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className={`relative md:grid md:grid-cols-2 md:gap-8 ${i % 2 ? "" : ""}`}
                          >
                            <div className={`${i % 2 ? "md:col-start-2" : "md:text-right"}`}>
                              <div className="bg-white rounded-xl p-5 border border-[#0f2a44]/10 shadow-sm inline-block max-w-md">
                                <p className="font-display text-3xl font-bold text-[#b31317]">{m.year}</p>
                                <p className="font-body text-sm text-[#0f2a44]/80 mt-2">{m.text}</p>
                              </div>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#caa74d] border-4 border-[#faf7f2]" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {active === "meetings" && (
                  <section>
                    <SectionHeader eyebrow="Minutes of Meeting" title="IQAC Meeting Records" description="Year-wise minutes, agendas and resolutions of IQAC review meetings including IQAC Hours reports (last Thursday of every month)." />
                    <SubHeader title="IQAC Hours — Monthly Reports" />
                    <DocGrid docs={filter(iqacHoursReports)} />
                  </section>
                )}

                {active === "certifications" && (
                  <section>
                    <SectionHeader eyebrow="Accreditation" title="Certifications & Approvals" description="ISO 21001:2018, NAAC, NBA, UGC-Autonomous, AICTE approvals and NIRF rankings — the full accreditation portfolio of MITS." />
                    <DocGrid docs={filter(certifications)} />
                  </section>
                )}

                {active === "aicte" && (
                  <section>
                    <SectionHeader eyebrow="Regulator" title="AICTE Quality Mandate" description="AICTE's quality initiatives, examination reforms, PARAKH, NEAT, ONOD, NETF and the MITS 360° Feedback participation record." />
                    <SubHeader title="AICTE Quality Mandate — Resources" />
                    <DocGrid docs={filter(aicteMandate)} />
                    <SubHeader title="AICTE 360° Feedback" />
                    <DocGrid docs={filter(aicte360Feedback)} />
                  </section>
                )}

                {active === "aqar" && (
                  <section>
                    <SectionHeader eyebrow="AQAR" title="Annual Quality Assurance Report" description="AQAR is submitted online to NAAC every year for each completed academic year, in accordance with NAAC's Manage AQAR portal." />
                    <div className="bg-gradient-to-br from-[#0f2a44] to-[#152f4f] text-white rounded-2xl p-6 mb-6">
                      <p className="font-body text-white/85 leading-relaxed text-sm">
                        For each cycle of accreditation with a validity of 5 years, HEIs submit 4 AQARs. Institutions with 'A' grade in three consecutive cycles submit 6 AQARs over 7 years. MITS submits AQARs annually before 31st December for the previous completed academic year.
                      </p>
                    </div>
                    <SubHeader title="AQAR & Supporting Documents" />
                    <DocGrid docs={filter(naacFormats)} />
                    <SubHeader title="Stakeholder Feedback — Action Taken Reports" />
                    <DocGrid docs={filter(actionTakenReports)} />
                    <SubHeader title="ATR — Evidences" />
                    <DocGrid docs={filter(atrEvidence)} />
                  </section>
                )}

                {active === "reports" && (
                  <section>
                    <SectionHeader eyebrow="Reports" title="Institutional Reports Repository" description="Consolidated repository of MITS annual reports, IQAC hours reports and quality reports." />
                    <SubHeader title="MITS Annual Reports" />
                    <DocGrid docs={filter(annualReports)} />
                    <SubHeader title="IQAC Hours Reports" />
                    <DocGrid docs={filter(iqacHoursReports)} />
                  </section>
                )}

                {active === "feedback" && (
                  <section>
                    <SectionHeader eyebrow="Feedback" title="Stakeholder Feedback System" description="Structured multi-stakeholder feedback loop covering students, faculty, parents, alumni, employers and experts — with published policy, questionnaires, ATRs and evidences." />
                    <SubHeader title="Policy & Questionnaires" />
                    <DocGrid docs={filter(feedbackPolicy)} />
                    <SubHeader title="Action Taken Reports" />
                    <DocGrid docs={filter(actionTakenReports)} />
                    <SubHeader title="Evidence on ATR" />
                    <DocGrid docs={filter(atrEvidence)} />
                    <SubHeader title="Online Feedback Forms" />
                    <div className="grid sm:grid-cols-2 gap-3">
                      {feedbackForms.map((f) => (
                        <a key={f.label} href={f.url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 bg-white rounded-lg p-4 border border-[#0f2a44]/10 hover:border-[#caa74d] transition"
                        >
                          <span className="font-body text-sm text-[#0f2a44] font-medium">{f.label}</span>
                          <ExternalLink className="w-4 h-4 text-[#caa74d]" />
                        </a>
                      ))}
                    </div>
                  </section>
                )}

                {active === "aaa" && (
                  <section>
                    <SectionHeader eyebrow="AAA" title="Academic & Administrative Audit" description={aaaOverview.policy} />
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="bg-white rounded-2xl p-6 border border-[#0f2a44]/10">
                        <h3 className="font-display font-bold text-[#0f2a44] mb-2">Academic Audit</h3>
                        <p className="font-body text-sm text-[#0f2a44]/80">{aaaOverview.academic}</p>
                      </div>
                      <div className="bg-white rounded-2xl p-6 border border-[#0f2a44]/10">
                        <h3 className="font-display font-bold text-[#0f2a44] mb-2">Administrative Audit</h3>
                        <p className="font-body text-sm text-[#0f2a44]/80">{aaaOverview.administrative}</p>
                      </div>
                    </div>
                    <SubHeader title="AAA Policy" />
                    <DocGrid docs={filter(aaaPolicyDocs)} />
                    <SubHeader title="External Audit Reports" />
                    <DocGrid docs={filter(externalAuditReports)} />
                    <SubHeader title="Internal Audit Reports" />
                    <DocGrid docs={filter(internalAuditReports)} />
                    <SubHeader title="External Audit — Action Taken Reports" />
                    <DocGrid docs={filter(externalAuditATR)} />
                    <SubHeader title="Internal Audit — Action Taken Reports" />
                    <DocGrid docs={filter(internalAuditATR)} />
                  </section>
                )}

                {active === "aaaRef" && (
                  <section>
                    <SectionHeader eyebrow="References" title="AAA & References — Assessment, Accreditation, Approvals, Rankings" description="Reference manuals, SOPs and methodology documents from NAAC, NBA and NIRF." />
                    <DocGrid docs={filter(aaaReferences)} />
                  </section>
                )}

                {active === "strategic" && (
                  <section>
                    <SectionHeader eyebrow="Vision to Action" title="Strategic Plan" description="MITS Strategic Plan (2022-23 to 2026-27), implementation progress and annual gap analyses." />
                    <div className="grid sm:grid-cols-3 gap-3 mb-6">
                      {[
                        { k: "Vision", v: "Globally recognized research & academic institution" },
                        { k: "Horizon", v: "2022-23 → 2026-27" },
                        { k: "Review", v: "Annual Gap Analysis" },
                      ].map((s) => (
                        <div key={s.k} className="bg-gradient-to-br from-[#0f2a44] to-[#152f4f] text-white rounded-xl p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-[#caa74d]">{s.k}</p>
                          <p className="font-body font-semibold mt-1 text-sm">{s.v}</p>
                        </div>
                      ))}
                    </div>
                    <DocGrid docs={filter(strategicPlan)} />
                  </section>
                )}

                {active === "bestPractices" && (
                  <section>
                    <SectionHeader eyebrow="NAAC Criterion 7" title="Best Practices of the Institute" description="IQAC-institutionalised best practices with measurable outcomes." />
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: "Mentor-Mentee System", obj: "Personalized academic & emotional support through structured mentor-mentee pairing.", out: "Documented weekly reports and student counselling records across all departments." },
                        { title: "Outcome-Based Education (OBE)", obj: "Systematic PO/PSO/CO attainment and closing-the-loop reviews.", out: "OBE templates, CO-PO assessment for R20 and R23 curricula across UG & PG." },
                        { title: "Guru Dakshta — Faculty Induction", obj: "Comprehensive induction of newly appointed faculty under UGC's FIP framework.", out: "Annual FIP conducted with published reports since AY 2024-25." },
                        { title: "Stakeholder Feedback Loop", obj: "Multi-stakeholder feedback with policy, questionnaire, ATR and evidence.", out: "Publicly available ATRs from 2018-19 onwards with department-level evidence." },
                      ].map((b, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                          className="bg-white rounded-2xl p-6 border border-[#0f2a44]/10"
                        >
                          <h3 className="font-display text-lg font-bold text-[#0f2a44]">{b.title}</h3>
                          <p className="font-body text-xs text-[#caa74d] uppercase tracking-wider mt-2">Objective</p>
                          <p className="font-body text-sm text-[#0f2a44]/80">{b.obj}</p>
                          <p className="font-body text-xs text-[#caa74d] uppercase tracking-wider mt-3">Outcome</p>
                          <p className="font-body text-sm text-[#0f2a44]/80">{b.out}</p>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {active === "distinctive" && (
                  <section>
                    <SectionHeader eyebrow="Institutional Distinctiveness" title="Distinctive Performance" description="Areas where MITS demonstrates a distinctive institutional identity." />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { t: "Deemed to be University", d: "Section 3 of UGC Act, 1956 — Gazette Notification 15.07.2025." },
                        { t: "NAAC A+ Cycle 1", d: "First cycle A+ Grade valid 2021–2026." },
                        { t: "NBA Multi-Programme", d: "UG & PG programmes accredited by NBA up to 2028." },
                        { t: "ISO 21001:2018", d: "Educational Organizations Management System — TUV SUD surveillance annually." },
                        { t: "NIRF Ranked", d: "Engineering band 201-300 in NIRF 2024 & 2025." },
                        { t: "ISTE Best Private Engineering College", d: "National Award 2016-17." },
                      ].map((d, i) => (
                        <div key={i} className="bg-gradient-to-br from-[#faf7f2] to-white rounded-2xl border border-[#caa74d]/30 p-5">
                          <Star className="w-6 h-6 text-[#caa74d] mb-2" />
                          <h3 className="font-display font-bold text-[#0f2a44]">{d.t}</h3>
                          <p className="font-body text-sm text-[#0f2a44]/75 mt-1">{d.d}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {active === "sss" && (
                  <section>
                    <SectionHeader eyebrow="SSS" title="Student Satisfaction Survey" description="Annual SSS on teaching-learning process, facilities and student experience." />
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      {[
                        { k: "Coverage", v: "All UG & PG" },
                        { k: "Frequency", v: "Annual" },
                        { k: "Analysis", v: "Published in AQAR" },
                      ].map((s) => (
                        <div key={s.k} className="bg-white rounded-xl p-5 border border-[#0f2a44]/10">
                          <p className="text-xs uppercase tracking-[0.18em] text-[#caa74d]">{s.k}</p>
                          <p className="font-display text-xl font-bold text-[#0f2a44] mt-1">{s.v}</p>
                        </div>
                      ))}
                    </div>
                    <a href="https://74.235.98.35/mits_fb_iqac_24/feedback_form.php" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#caa74d] text-[#0f2a44] font-semibold hover:bg-[#dbb95c]">
                      <ExternalLink className="w-4 h-4" /> Take the Student Satisfaction Survey
                    </a>
                  </section>
                )}

                {active === "econtent" && (
                  <section>
                    <SectionHeader eyebrow="Digital Learning" title="e-Content Facility" description="MITS e-Content Development Center, facilities, SOPs and faculty repository." />
                    <DocGrid docs={filter(econtent)} />
                  </section>
                )}

                {active === "popsoco" && (
                  <section>
                    <SectionHeader eyebrow="Outcomes" title="PO – PSO – CO of All Departments" description="Programme Outcomes, Programme Specific Outcomes and Course Outcomes across UG and PG departments." />
                    <SubHeader title="Under Graduate Programmes" />
                    <DocGrid docs={filter(poPsoCoUG)} />
                    <SubHeader title="Post Graduate Programmes" />
                    <DocGrid docs={filter(poPsoCoPG)} />
                  </section>
                )}

                {active === "annual" && (
                  <section>
                    <SectionHeader eyebrow="Annual Reports" title="MITS Annual Report" description="Institution-wide annual reports covering academics, research, placements, infrastructure and governance." />
                    <DocGrid docs={filter(annualReports)} />
                  </section>
                )}

                {active === "newsletter" && (
                  <section>
                    <SectionHeader eyebrow="Communication" title="MITS Newsletter" description="Departmental and institutional newsletters archive." />
                    <a href="https://mits.ac.in/newsletter" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#caa74d] text-[#0f2a44] font-semibold hover:bg-[#dbb95c]">
                      <ExternalLink className="w-4 h-4" /> Open Newsletter Archive
                    </a>
                  </section>
                )}

                {active === "handbook" && (
                  <section>
                    <SectionHeader eyebrow="Handbook" title="Institutional Handbook" description="Handbook curated by IQAC covering academic and administrative processes, files to be maintained and general information." />
                    <DocGrid docs={filter([
                      { title: "Files to be Maintained by Department (B.Tech)", url: "https://mits.ac.in/assets/pdf/iqac/Files%20to%20be_maintained%20by%20Department%20for%20B.Tech%20V0.1.pdf", type: "pdf" },
                      { title: "General Information to be Maintained by Department", url: "https://mits.ac.in/assets/pdf/iqac/General%20Information%20to%20be%20maintained%20by%20Department.pdf", type: "pdf" },
                      { title: "Action Taken Reports to be Maintained", url: "https://mits.ac.in/assets/pdf/iqac/Action%20Taken%20Reports%20to%20be%20maintained.pdf", type: "pdf" },
                    ])} />
                  </section>
                )}

                {active === "ugc" && (
                  <section>
                    <SectionHeader eyebrow="UGC" title="UGC Quality Mandate" description="Guidelines, frameworks and quality initiatives from UGC, MoE and allied national bodies." />
                    <DocGrid docs={filter(ugcMandate)} />
                  </section>
                )}

                {active === "events" && (
                  <section>
                    <SectionHeader eyebrow="Events" title="IQAC Events & Collaborations" description="Professional development programmes, workshops, audits, expert talks and collaborations conducted by IQAC." />
                    <div className="space-y-3">
                      {filter(iqacEvents.map((e) => ({ title: e.title, url: e.url || "#", type: "pdf" as const }))).map((_, i) => {
                        const e = iqacEvents[i]; if (!e) return null;
                        return (
                          <div key={i} className="bg-white rounded-xl p-4 border border-[#0f2a44]/10 flex gap-4 items-start">
                            <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#0f2a44] to-[#11355a] text-white flex items-center justify-center">
                              <Calendar className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <p className="font-display font-semibold text-[#0f2a44]">{e.title}</p>
                              <p className="font-body text-xs text-[#b31317] font-bold mt-0.5 uppercase tracking-wider">{e.date}</p>
                            </div>
                            {e.url && (
                              <a href={e.url} target="_blank" rel="noopener noreferrer"
                                className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-[#caa74d] hover:underline">
                                Report <Download className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </section>
                )}

                {active === "eiqac" && (
                  <section>
                    <SectionHeader eyebrow="Digital IQAC" title="e-IQAC" description="MITS e-IQAC portal — internal tracker for departments, cells and committees." />
                    <div className="bg-white rounded-2xl p-6 border border-[#0f2a44]/10">
                      <p className="font-body text-[#0f2a44]/80 mb-4">
                        The MITS e-IQAC internal tracker consolidates department-level compliance, activities, and quality documentation. Access is restricted to campus network users.
                      </p>
                      <a href="http://172.16.0.222/" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0f2a44] text-[#caa74d] font-semibold hover:bg-[#152f4f]">
                        <Globe className="w-4 h-4" /> Open e-IQAC Tracker (Intranet)
                      </a>
                    </div>
                  </section>
                )}

                {active === "naacReforms" && (
                  <section>
                    <SectionHeader eyebrow="NAAC 2024" title="NAAC Reforms 2024" description="Institutional preparedness for NAAC 2024 reforms including binary accreditation framework, supporting document manuals and MITS responsibilities matrix." />
                    <DocGrid docs={filter(naacReforms2024)} />
                  </section>
                )}

                {active === "manuals" && (
                  <section>
                    <SectionHeader eyebrow="Downloads" title="Manuals / Formats / Guidelines" description="Comprehensive downloads for department, audit, NAAC, NBA and NIRF formats along with functional check-lists." />
                    <SubHeader title="Audit Formats" />
                    <DocGrid docs={filter(auditFormats)} />
                    <SubHeader title="NAAC Formats" />
                    <DocGrid docs={filter(naacFormats)} />
                    <SubHeader title="NBA / OBE Formats" />
                    <DocGrid docs={filter(nbaFormats)} />
                    <SubHeader title="NIRF Formats" />
                    <DocGrid docs={filter(nirfFormats)} />
                    <SubHeader title="Check Lists" />
                    <DocGrid docs={filter(checkLists)} />
                    <SubHeader title="Department Manuals & Templates" />
                    <div className="space-y-4">
                      {manualsTable.map((m) => {
                        const matched = filter(m.docs);
                        if (matched.length === 0 && search.trim()) return null;
                        return (
                          <div key={m.no} className="bg-white rounded-xl p-4 border border-[#0f2a44]/10">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="w-8 h-8 rounded-lg bg-[#caa74d]/15 text-[#caa74d] font-bold text-sm flex items-center justify-center">{m.no}</span>
                              <h4 className="font-display font-bold text-[#0f2a44]">{m.title}</h4>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {(search.trim() ? matched : m.docs).map((d) => (
                                <a key={d.url} href={d.url} target="_blank" rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-sm text-[#0f2a44]/80 hover:text-[#caa74d] px-3 py-2 rounded-lg bg-[#faf7f2] hover:bg-[#caa74d]/10">
                                  <Download className="w-3.5 h-3.5 shrink-0" />
                                  <span className="truncate">{d.title}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                )}

                {active === "gallery" && (
                  <section>
                    <SectionHeader eyebrow="Gallery" title="IQAC Gallery" description="Snapshots from IQAC-conducted programmes, audits and faculty development workshops." />
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {iqacEvents.slice(0, 12).map((e, i) => (
                        <a key={i} href={e.url || "#"} target="_blank" rel="noopener noreferrer"
                          className="group relative overflow-hidden rounded-xl bg-white border border-[#0f2a44]/10 aspect-[4/3] flex flex-col">
                          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#0f2a44] to-[#152f4f]">
                            <Calendar className="w-12 h-12 text-[#caa74d]/70" />
                          </div>
                          <div className="p-3">
                            <p className="font-body text-xs font-bold text-[#b31317] uppercase tracking-wider">{e.date}</p>
                            <p className="font-body text-sm text-[#0f2a44] mt-1 line-clamp-2">{e.title}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </section>
                )}

                {active === "contact" && (
                  <section>
                    <SectionHeader eyebrow="Contact" title="IQAC Contact" description="Get in touch with the Internal Quality Assurance Cell for accreditation, audit, feedback and quality-related matters." />
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-[#0f2a44] to-[#152f4f] text-white rounded-2xl p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#caa74d] mb-3">Office</p>
                        <h3 className="font-display text-xl font-bold">{contact.office}</h3>
                        <p className="font-body text-white/80 text-sm mt-1">{contact.institute}</p>
                        <div className="mt-6 space-y-3 font-body text-sm">
                          <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[#caa74d] mt-0.5" />{contact.address}</div>
                          <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#caa74d]" /><a href={`mailto:${contact.email}`} className="hover:text-[#caa74d]">{contact.email}</a></div>
                          <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#caa74d]" /><a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-[#caa74d]">{contact.phone}</a></div>
                          <div className="flex items-start gap-3"><Calendar className="w-4 h-4 text-[#caa74d] mt-0.5" />{contact.hours}</div>
                        </div>
                        <a href={contact.maps} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg bg-[#caa74d] text-[#0f2a44] font-semibold text-sm hover:bg-[#dbb95c]">
                          <MapPin className="w-4 h-4" /> Open in Google Maps
                        </a>
                      </div>
                      <div className="bg-white rounded-2xl p-6 border border-[#0f2a44]/10">
                        <h3 className="font-display text-lg font-bold text-[#0f2a44] mb-3">Quick Links</h3>
                        <div className="space-y-2">
                          <Link to="/naac" className="flex items-center justify-between p-3 bg-[#faf7f2] rounded-lg hover:bg-[#caa74d]/10">
                            <span className="font-body font-medium text-[#0f2a44]">NAAC Accreditation Portal</span>
                            <ChevronRight className="w-4 h-4 text-[#caa74d]" />
                          </Link>
                          <Link to="/nirf" className="flex items-center justify-between p-3 bg-[#faf7f2] rounded-lg hover:bg-[#caa74d]/10">
                            <span className="font-body font-medium text-[#0f2a44]">NIRF Rankings</span>
                            <ChevronRight className="w-4 h-4 text-[#caa74d]" />
                          </Link>
                          <Link to="/affiliations-accreditations" className="flex items-center justify-between p-3 bg-[#faf7f2] rounded-lg hover:bg-[#caa74d]/10">
                            <span className="font-body font-medium text-[#0f2a44]">Affiliations & Accreditations</span>
                            <ChevronRight className="w-4 h-4 text-[#caa74d]" />
                          </Link>
                          <Link to="/psd" className="flex items-center justify-between p-3 bg-[#faf7f2] rounded-lg hover:bg-[#caa74d]/10">
                            <span className="font-body font-medium text-[#0f2a44]">Public Self Disclosures</span>
                            <ChevronRight className="w-4 h-4 text-[#caa74d]" />
                          </Link>
                        </div>
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

export default IQAC;
