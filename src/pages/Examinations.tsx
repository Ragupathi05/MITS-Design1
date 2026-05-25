import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText, Download, Calendar, ClipboardList, BookOpen, FolderDown,
  Megaphone, GraduationCap, IdCard, Phone, Mail, MapPin, Search,
  ChevronRight, Building2, ShieldCheck, ExternalLink, FileSpreadsheet,
  FileArchive, Sparkles, Clock,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ugNotifications, ugMidTermTimetables, ugEndSemTimetables,
  ugFacultyFormats, ugStudentFormats, ugDownloads,
  pgNotifications, ugResults, pgResults, apaarAbc, autonomousArchive,
  coeOffice, coeResponsibilities, type ExamLink,
} from "@/data/examData";

type SectionKey =
  | "overview" | "ug-notif" | "ug-circulars" | "ug-mid" | "ug-end"
  | "ug-fac" | "ug-stu" | "ug-down"
  | "pg-notif" | "pg-down"
  | "results" | "apaar" | "archive" | "contact";

const NAV: { id: SectionKey; label: string; icon: any; group: string }[] = [
  { id: "overview",     label: "Overview",                 icon: Building2,     group: "Office of CoE" },
  { id: "ug-notif",     label: "Notifications",            icon: Megaphone,     group: "UG Programmes" },
  { id: "ug-circulars", label: "Circulars",                icon: FileText,      group: "UG Programmes" },
  { id: "ug-mid",       label: "Mid Term Tests",           icon: Calendar,      group: "UG Programmes" },
  { id: "ug-end",       label: "End Semester Exams",       icon: ClipboardList, group: "UG Programmes" },
  { id: "ug-fac",       label: "Formats — Faculty",        icon: FileSpreadsheet, group: "UG Programmes" },
  { id: "ug-stu",       label: "Formats — Students",       icon: FileSpreadsheet, group: "UG Programmes" },
  { id: "ug-down",      label: "Downloads",                icon: FolderDown,    group: "UG Programmes" },
  { id: "pg-notif",     label: "Notifications",            icon: Megaphone,     group: "PG Programmes" },
  { id: "pg-down",      label: "Question Papers",          icon: BookOpen,      group: "PG Programmes" },
  { id: "results",      label: "Results",                  icon: GraduationCap, group: "Results & Records" },
  { id: "apaar",        label: "APAAR / ABC",              icon: IdCard,        group: "Results & Records" },
  { id: "archive",      label: "Autonomous Archive",       icon: FileArchive,   group: "Results & Records" },
  { id: "contact",      label: "Contact Us",               icon: Phone,         group: "Office of CoE" },
];

const kindIcon = (k?: ExamLink["kind"]) => {
  switch (k) {
    case "doc": return FileText;
    case "xlsx": return FileSpreadsheet;
    case "rar": return FileArchive;
    case "link": return ExternalLink;
    default: return FileText;
  }
};

/* ---------------- Notification list card ---------------- */
const NotificationList = ({ items, query }: { items: ExamLink[]; query: string }) => {
  const filtered = useMemo(
    () => items.filter((i) => i.title.toLowerCase().includes(query.toLowerCase())),
    [items, query],
  );
  if (!filtered.length) {
    return (
      <div className="text-center py-12 text-muted-foreground bg-muted/30 rounded-xl border border-dashed">
        No items match your search.
      </div>
    );
  }
  return (
    <ul className="divide-y divide-border rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      {filtered.map((it, i) => {
        const Icon = kindIcon(it.kind);
        return (
          <motion.li
            key={it.href + i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.02 }}
            className="group"
          >
            <a
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 md:p-5 hover:bg-primary/5 transition-colors"
            >
              {typeof it.no === "number" && (
                <span className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 text-primary font-display font-semibold flex items-center justify-center text-sm">
                  {it.no}
                </span>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                  {it.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {it.kind === "link" ? "External link" : `${(it.kind || "pdf").toUpperCase()} document`}
                </p>
              </div>
              <span className="shrink-0 w-10 h-10 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground text-muted-foreground flex items-center justify-center transition-all">
                <Icon className="w-4 h-4" />
              </span>
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
};

const SectionHead = ({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle?: string }) => (
  <div className="mb-6 md:mb-8">
    <div className="flex items-center gap-3 mb-2">
      <span className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center shadow-md">
        <Icon className="w-5 h-5" />
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
    </div>
    {subtitle && <p className="text-sm md:text-base text-muted-foreground ml-14">{subtitle}</p>}
  </div>
);

/* ---------------- Page ---------------- */
const Examinations = () => {
  const [active, setActive] = useState<SectionKey>("overview");
  const [query, setQuery] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const k = location.hash.slice(1) as SectionKey;
      if (NAV.some((n) => n.id === k)) setActive(k);
    }
  }, []);

  const grouped = useMemo(() => {
    const map: Record<string, typeof NAV> = {};
    NAV.forEach((n) => { (map[n.group] ||= []).push(n); });
    return map;
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-32 md:pt-40 pb-14 md:pb-20 overflow-hidden bg-[#0a0f1f]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/.6),transparent_50%),radial-gradient(circle_at_80%_60%,hsl(var(--accent)/.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('https://mits.ac.in/images/inner-banner.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0f1f]" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="text-accent font-semibold tracking-[0.25em] uppercase text-xs md:text-sm mb-4 inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> MITS Deemed to be University
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Office of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-100">Controller of Examinations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-white/75 text-base md:text-lg max-w-3xl mx-auto"
            >
              Notifications, time tables, circulars, results, downloads and APAAR/ABC information for all UG and PG programmes.
            </motion.p>
            <nav aria-label="Breadcrumb" className="mt-6">
              <ol className="flex items-center justify-center gap-1.5 text-sm">
                <li><a href="/" className="text-white/60 hover:text-white">Home</a></li>
                <li className="text-white/40">/</li>
                <li><a href="/academics" className="text-white/60 hover:text-white">Academics</a></li>
                <li className="text-white/40">/</li>
                <li className="text-white font-semibold">Examinations</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* SEARCH + MOBILE NAV TRIGGER */}
        <div className="sticky top-16 z-30 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-3 flex gap-2 items-center">
            <button
              onClick={() => setMobileNavOpen((o) => !o)}
              className="lg:hidden shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card text-sm font-medium"
            >
              <ClipboardList className="w-4 h-4" /> Sections
            </button>
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search notifications, time tables, downloads…"
                className="pl-9 h-10"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* SIDEBAR */}
            <aside className={cn("lg:block", mobileNavOpen ? "block" : "hidden")}>
              <div className="lg:sticky lg:top-32 space-y-6">
                {Object.entries(grouped).map(([group, items]) => (
                  <div key={group}>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground px-3 mb-2">{group}</p>
                    <ul className="space-y-1">
                      {items.map((n) => (
                        <li key={n.id}>
                          <button
                            onClick={() => { setActive(n.id); setMobileNavOpen(false); window.scrollTo({ top: 200, behavior: "smooth" }); }}
                            className={cn(
                              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group",
                              active === n.id
                                ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md"
                                : "text-foreground hover:bg-muted",
                            )}
                          >
                            <n.icon className={cn("w-4 h-4 shrink-0", active === n.id ? "" : "text-muted-foreground group-hover:text-primary")} />
                            <span className="flex-1 text-left truncate">{n.label}</span>
                            {active === n.id && <ChevronRight className="w-4 h-4" />}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </aside>

            {/* CONTENT */}
            <section className="min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {active === "overview" && <Overview />}
                  {active === "ug-notif" && (<>
                    <SectionHead icon={Megaphone} title="UG Programmes — Notifications" subtitle="Official end-semester, regular, supplementary, re-evaluation and recounting notifications." />
                    <NotificationList items={ugNotifications} query={query} />
                  </>)}
                  {active === "ug-circulars" && (<>
                    <SectionHead icon={FileText} title="UG Programmes — Circulars" subtitle="Latest circulars from the Controller of Examinations." />
                    <EmptyState message="No active circulars at this time. Please check back later or refer to the latest notifications." />
                  </>)}
                  {active === "ug-mid" && (<>
                    <SectionHead icon={Calendar} title="UG Programmes — Mid Term Time Tables" subtitle="Time tables for I & II Mid term examinations including Engineering Graphics." />
                    <NotificationList items={ugMidTermTimetables} query={query} />
                  </>)}
                  {active === "ug-end" && (<>
                    <SectionHead icon={ClipboardList} title="UG Programmes — End Semester Exams" subtitle="Theory, practical and model lab time tables." />
                    <NotificationList items={ugEndSemTimetables} query={query} />
                  </>)}
                  {active === "ug-fac" && (<>
                    <SectionHead icon={FileSpreadsheet} title="UG Programmes — Faculty Formats" subtitle="Forms and templates for invigilation, evaluation and lab awards." />
                    <NotificationList items={ugFacultyFormats} query={query} />
                  </>)}
                  {active === "ug-stu" && (<>
                    <SectionHead icon={FileSpreadsheet} title="UG Programmes — Student Formats" subtitle="Application forms for re-evaluation and recounting of answer scripts." />
                    <NotificationList items={ugStudentFormats} query={query} />
                  </>)}
                  {active === "ug-down" && (<>
                    <SectionHead icon={FolderDown} title="UG Programmes — Downloads" subtitle="Question papers, regulations, syllabi and academic calendars." />
                    <NotificationList items={ugDownloads} query={query} />
                  </>)}
                  {active === "pg-notif" && (<>
                    <SectionHead icon={Megaphone} title="PG Programmes — Notifications" subtitle="End-semester examination notifications for MBA, MCA and M.Tech." />
                    <NotificationList items={pgNotifications} query={query} />
                  </>)}
                  {active === "pg-down" && (<>
                    <SectionHead icon={BookOpen} title="PG Programmes — Question Papers" subtitle="MBA, MCA, Direct 2nd Year MCA and M.Tech archives." />
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {["MBA Question Papers","MCA Question Papers","Direct 2nd Year MCA Question Papers","M.Tech Question Papers"].map((t) => (
                        <li key={t} className="rounded-xl border border-border bg-card p-5 hover:shadow-lg transition-shadow">
                          <BookOpen className="w-6 h-6 text-primary mb-3" />
                          <p className="font-display font-semibold text-foreground mb-1">{t}</p>
                          <p className="text-xs text-muted-foreground mb-3">Access archived question papers via the official autonomous exam portal.</p>
                          <a href="https://mits.ac.in/ugc-autonomous-exam-portal" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="w-full">Open archive <ExternalLink className="w-3.5 h-3.5 ml-1" /></Button>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>)}
                  {active === "results" && (<>
                    <SectionHead icon={GraduationCap} title="Results" subtitle="UG and PG results portal — including recounting and re-evaluation outcomes." />
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-display text-xl font-semibold mb-3 text-foreground">UG Results</h3>
                        <NotificationList items={ugResults} query={query} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold mb-3 text-foreground">PG Results</h3>
                        <NotificationList items={pgResults} query={query} />
                      </div>
                    </div>
                  </>)}
                  {active === "apaar" && (<>
                    <SectionHead icon={IdCard} title="APAAR / ABC" subtitle="Automated Permanent Academic Account Registry and Academic Bank of Credits." />
                    <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-6 mb-6">
                      <ShieldCheck className="w-8 h-8 text-primary mb-3" />
                      <p className="text-sm md:text-base text-foreground leading-relaxed">
                        APAAR ID (One Nation One Student ID) and the Academic Bank of Credits enable students to digitally store, transfer and accumulate academic credits across institutions under NEP 2020. All MITS students must generate their APAAR/ABC ID.
                      </p>
                    </div>
                    <NotificationList items={apaarAbc} query={query} />
                  </>)}
                  {active === "archive" && (<>
                    <SectionHead icon={FileArchive} title="UGC-Autonomous Archive" subtitle="Historical notifications from the autonomous era. Visit the full archive for the complete 430+ document history." />
                    <NotificationList items={autonomousArchive} query={query} />
                    <div className="mt-6">
                      <a href="https://mits.ac.in/ugc-autonomous-exam-portal" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full sm:w-auto">Open Full Autonomous Archive <ExternalLink className="w-4 h-4 ml-2" /></Button>
                      </a>
                    </div>
                  </>)}
                  {active === "contact" && <Contact />}
                </motion.div>
              </AnimatePresence>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

/* ---------------- Sub-views ---------------- */
const EmptyState = ({ message }: { message: string }) => (
  <div className="rounded-xl border border-dashed border-border bg-muted/30 p-10 text-center">
    <Clock className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
    <p className="text-sm text-muted-foreground max-w-md mx-auto">{message}</p>
  </div>
);

const Overview = () => (
  <div>
    <SectionHead
      icon={Building2}
      title="Office of the Controller of Examinations"
      subtitle="Central authority for conduction, evaluation and certification of all university examinations."
    />
    <div className="grid md:grid-cols-3 gap-4 mb-10">
      {[
        { v: "5,000+", l: "Students Examined / Year", i: GraduationCap },
        { v: "100%",   l: "Result Accuracy",          i: ShieldCheck },
        { v: "15 Days", l: "Result Declaration",       i: Clock },
      ].map((s) => (
        <div key={s.l} className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <s.i className="w-7 h-7 text-primary mb-3" />
          <p className="font-display text-3xl font-bold text-foreground">{s.v}</p>
          <p className="text-sm text-muted-foreground">{s.l}</p>
        </div>
      ))}
    </div>
    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">Functions & Responsibilities</h3>
    <ul className="grid md:grid-cols-2 gap-3">
      {coeResponsibilities.map((r, i) => (
        <li key={i} className="flex gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
          <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
          <p className="text-sm text-foreground leading-relaxed">{r}</p>
        </li>
      ))}
    </ul>
  </div>
);

const Contact = () => (
  <div>
    <SectionHead icon={Phone} title="Contact the Examination Office" subtitle="For grievances, certificates, verifications and general queries." />
    <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-gradient-to-br from-card to-card/60">
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6">
        <p className="text-sm uppercase tracking-wider opacity-80">Controller of Examinations</p>
        <h3 className="font-display text-2xl md:text-3xl font-bold mt-1">{coeOffice.name}</h3>
        <p className="opacity-90">{coeOffice.designation}</p>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex gap-3"><MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm text-foreground">{coeOffice.address}</p></div>
        <div className="flex gap-3"><Phone  className="w-5 h-5 text-primary shrink-0 mt-0.5" /><a href={`tel:${coeOffice.phone}`} className="text-sm text-foreground hover:text-primary">{coeOffice.phone}</a></div>
        <div className="flex gap-3"><Mail   className="w-5 h-5 text-primary shrink-0 mt-0.5" /><a href={`mailto:${coeOffice.email}`} className="text-sm text-foreground hover:text-primary">{coeOffice.email}</a></div>
      </div>
    </div>
  </div>
);

export default Examinations;
