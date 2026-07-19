import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen, Clock, Globe, Monitor, Search, Users, Wifi, Home, ChevronRight,
  Database, Network, ExternalLink, MapPin, Mail, Phone, Award, FileText,
  Newspaper, Disc, Printer, Copy, ScanLine, Barcode, Library as LibraryIcon,
  GraduationCap, BookMarked, Sparkles, Download,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import {
  libraryStats, digitalResources, memberships, facilities, services,
  collections, quickAccess, libraryContact,
} from "@/data/libraryData";

const BASE = import.meta.env.BASE_URL;
const heroImg = `${BASE}gallery/lib1.jpg`;
const galleryImgs = [
  "lib1.jpg", "lib2.jpg", "lib3.jpg", "lib4.jpg", "lib5.jpg",
  "lib6.jpg", "lib7.jpg", "lib9.jpg", "digital library.jpg", "digital library1.jpg",
].map((f) => `${BASE}gallery/${f}`);

/* ---------------- Count-up hook ---------------- */
const useCountUp = (target: number, duration = 1400, start = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
};

const StatCard = ({ stat, icon: Icon, index }: { stat: typeof libraryStats[number]; icon: any; index: number }) => {
  const [inView, setInView] = useState(false);
  const value = useCountUp(stat.value, 1400, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      onViewportEnter={() => setInView(true)}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3) }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
      <div className="relative">
        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
          <Icon className="w-5 h-5" />
        </div>
        <div className="font-display text-3xl md:text-4xl font-bold text-secondary tabular-nums">
          {value.toLocaleString("en-IN")}{stat.suffix || (stat.value >= 1000 ? "+" : "")}
        </div>
        <div className="text-sm font-semibold text-secondary/80 mt-1">{stat.label}</div>
        {stat.note && <div className="text-xs text-muted-foreground mt-1.5">{stat.note}</div>}
      </div>
    </motion.div>
  );
};

const iconFor = (key: string): any => {
  const map: Record<string, any> = {
    titles: BookOpen, volumes: BookMarked, reference: LibraryIcon,
    ebooks: Monitor, ejournals: FileText, projectReports: FileText,
    boundVolumes: BookOpen, cdroms: Disc, digitalSystems: Monitor,
    newspapers: Newspaper, periodicals: FileText, magazines: Newspaper,
  };
  return map[key] || BookOpen;
};

const facilityIcon = (title: string): any => {
  const map: Record<string, any> = {
    "Digital Library": Monitor, "Photocopying": Copy, "Printing": Printer,
    "Scanning": ScanLine, "Barcoding": Barcode, "Reading Hall": Users,
    "Reference Section": BookMarked, "Internet & Wi-Fi": Wifi, "Remote Access": Globe,
  };
  return map[title] || Sparkles;
};

const SectionTitle = ({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) => (
  <div className="mb-10 text-center max-w-3xl mx-auto">
    {eyebrow && <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</div>}
    <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary">{title}</h2>
    {subtitle && <p className="text-muted-foreground mt-3">{subtitle}</p>}
    <div className="h-1 w-16 bg-primary rounded-full mx-auto mt-5" />
  </div>
);

const Library = () => {
  const heroStats = useMemo(() => libraryStats.slice(0, 4), []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title="Central Library – MITS | 64,600+ Volumes, IEEE, Springer, DELNET"
        description="MITS Central Library — 11,104 titles, 64,600 volumes, 4,200 e-books, 2,505 e-journals (IEEE, Springer, EBSCO), DELNET, NDL & INFLIBNET N-LIST. SOUL 3.0 managed digital library with 30 systems."
        canonical="/library"
      />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="relative pt-20 lg:pt-28">
          <div className="relative min-h-[55vh] bg-gradient-to-br from-secondary via-secondary to-primary overflow-hidden">
            <img
              src={heroImg}
              alt="MITS Central Library"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/80" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, hsl(var(--accent)) 0%, transparent 40%), radial-gradient(circle at 80% 60%, hsl(var(--primary)) 0%, transparent 50%)",
              }}
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 text-white">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm text-white/80 mb-4">
                <Link to="/" className="hover:text-accent inline-flex items-center gap-1"><Home className="w-3 h-3" />Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-accent">Central Library</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <BookOpen className="w-3 h-3" />Knowledge Resource Centre
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="font-display text-4xl md:text-6xl font-bold"
              >
                Central Library
              </motion.h1>
              <p className="mt-4 max-w-3xl text-lg text-white/90">
                Knowledge Resource Centre supporting teaching, learning, innovation and research at MITS.
              </p>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
                {heroStats.map((s) => (
                  <div key={s.key} className="rounded-xl bg-white/10 border border-white/20 backdrop-blur p-4">
                    <div className="text-2xl md:text-3xl font-bold text-accent tabular-nums">{s.value.toLocaleString("en-IN")}+</div>
                    <div className="text-xs text-white/80">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Overview ---------------- */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              <ScrollReveal className="lg:col-span-2">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">About the Library</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-5">A Modern Knowledge Resource Centre</h2>
                <div className="h-1 w-16 bg-primary rounded-full mb-6" />
                <div className="space-y-4 text-secondary/85 text-[15px] leading-relaxed">
                  <p>
                    The Central Library at MITS is the intellectual heart of the campus — a spacious, fully computerised
                    facility with a rich collection of print and digital resources spanning engineering, sciences,
                    management, humanities and research.
                  </p>
                  <p>
                    The library operates on the INFLIBNET <strong>SOUL 3.0</strong> integrated library management system
                    and offers barcoded circulation, an online OPAC, remote access to e-resources through
                    <strong> Knimbus</strong>, and network-wide document delivery via <strong>DELNET</strong>.
                  </p>
                  <p>
                    With subscriptions to <strong>IEEE, Springer Nature</strong> and <strong>EBSCO</strong>, and access
                    to the <strong>National Digital Library of India</strong> and <strong>INFLIBNET N-LIST (e-Shodh Sindhu)</strong>,
                    students and faculty have world-class content at their fingertips.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-white p-6 mb-4">
                  <div className="flex items-center gap-2 text-primary font-bold mb-3">
                    <Sparkles className="w-4 h-4" />Mission
                  </div>
                  <p className="text-sm text-secondary/85">
                    To acquire, organise and disseminate high-quality knowledge resources that empower academic
                    excellence, innovation and lifelong learning.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/5 to-white p-6">
                  <div className="flex items-center gap-2 text-secondary font-bold mb-3">
                    <Award className="w-4 h-4" />Objectives
                  </div>
                  <ul className="space-y-2 text-sm text-secondary/85">
                    {[
                      "Build a diverse print & digital collection aligned to curriculum and research.",
                      "Provide 24×7 access to e-resources via remote & campus networks.",
                      "Foster research productivity through advanced information services.",
                      "Ensure an inclusive, technology-enabled learning environment.",
                    ].map((o) => (
                      <li key={o} className="flex gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />{o}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ---------------- Statistics Dashboard ---------------- */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionTitle
              eyebrow="Library at a Glance"
              title="Statistics Dashboard"
              subtitle="Official collection figures from the Central Library (as per institutional records)."
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {libraryStats.map((s, i) => (
                <StatCard key={s.key} stat={s} icon={iconFor(s.key)} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Digital Resources ---------------- */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionTitle
              eyebrow="Digital Resources"
              title="World-class E-Resources"
              subtitle="Subscribed research databases, e-journals and platforms accessible on campus and remotely."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {digitalResources.map((r, i) => (
                <motion.a
                  key={r.name}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.05, 0.3) }}
                  className="group rounded-2xl border border-border bg-white p-6 hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Database className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1.5">{r.category}</div>
                  <h3 className="font-display text-lg font-bold text-secondary leading-snug">{r.name}</h3>
                  {r.count && <div className="text-xs font-semibold text-accent-foreground bg-accent/20 inline-block px-2 py-0.5 rounded mt-2">{r.count}</div>}
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{r.desc}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Collections ---------------- */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionTitle
              eyebrow="Collections"
              title="A Rich, Diverse Library"
              subtitle="Curated resources across print, digital, reference and research categories."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {collections.map((c, i) => (
                <ScrollReveal key={c.title} delay={i * 0.04}>
                  <Card className="p-6 h-full border border-border hover:shadow-lg hover:-translate-y-1 transition-all">
                    <BookOpen className="w-6 h-6 text-primary mb-3" />
                    <h3 className="font-display font-bold text-lg text-secondary">{c.title}</h3>
                    <div className="text-primary font-bold text-xl mt-1">{c.value}</div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Memberships ---------------- */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionTitle
              eyebrow="Networks & Memberships"
              title="National & Institutional Affiliations"
              subtitle="Official memberships that expand our resource-sharing footprint."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {memberships.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-white to-white p-6 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center mb-4 shadow-md">
                    <Network className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-secondary text-lg leading-snug">{m.title}</h3>
                  <div className="text-xs font-mono bg-secondary/10 text-secondary inline-block px-2 py-0.5 rounded mt-2">{m.id}</div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Facilities ---------------- */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionTitle
              eyebrow="Facilities"
              title="On-site & Digital Facilities"
              subtitle="Everything needed for a modern, productive learning experience."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {facilities.map((f, i) => {
                const Icon = facilityIcon(f.title);
                return (
                  <ScrollReveal key={f.title} delay={i * 0.04}>
                    <Card className="p-6 h-full border border-border hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 transition-all group">
                      <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-secondary">{f.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------- Digital Library Infrastructure ---------------- */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionTitle
              eyebrow="Digital Infrastructure"
              title="Powering Anytime, Anywhere Learning"
            />
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: Monitor, title: "30 Digital Systems", desc: "Dedicated workstations for research and e-resource access, all networked for high-speed use." },
                { icon: Database, title: "SOUL 3.0", desc: "INFLIBNET Software for University Libraries — a fully integrated ILS for circulation, cataloguing and OPAC." },
                { icon: Globe, title: "Remote Access", desc: "Access to subscribed IEEE, Springer, EBSCO and more from anywhere via the Knimbus platform." },
              ].map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-gradient-to-br from-secondary via-secondary to-primary text-white p-8 hover:shadow-2xl transition-all"
                >
                  <c.icon className="w-9 h-9 text-accent mb-4" />
                  <h3 className="font-display font-bold text-xl mb-2">{c.title}</h3>
                  <p className="text-sm text-white/85 leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Research Support ---------------- */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionTitle
              eyebrow="Research Support"
              title="Supporting Scholars at Every Stage"
              subtitle="Tailored library services for faculty, PhD scholars, researchers and students."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: GraduationCap, title: "Faculty", desc: "Research databases, journal alerts and inter-library loans for teaching & publications." },
                { icon: Award, title: "PhD Scholars", desc: "Advanced literature-search support, citation guidance and plagiarism-check services." },
                { icon: Users, title: "Researchers", desc: "Access to IEEE, Springer & EBSCO, plus DELNET document delivery." },
                { icon: BookOpen, title: "Students", desc: "Textbooks, reference material, project reports & digital learning resources." },
              ].map((r, i) => (
                <ScrollReveal key={r.title} delay={i * 0.05}>
                  <Card className="p-6 h-full text-center border border-border hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      <r.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-secondary">{r.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.desc}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Services ---------------- */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionTitle eyebrow="Library Services" title="Comprehensive Service Portfolio" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 0.03}>
                  <div className="rounded-2xl border border-border bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all h-full">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent-foreground flex items-center justify-center shrink-0">
                        <BookMarked className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-secondary">{s.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Gallery ---------------- */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionTitle eyebrow="Gallery" title="Inside the Central Library" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {galleryImgs.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.04, 0.3) }}
                  className="group relative aspect-video rounded-xl overflow-hidden bg-secondary/90"
                >
                  <div
                    className="absolute inset-0 bg-center bg-cover scale-110 blur-xl opacity-40"
                    style={{ backgroundImage: `url("${src}")` }}
                    aria-hidden
                  />
                  <img
                    src={src}
                    alt="Library"
                    loading="lazy"
                    className="relative w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Quick Access ---------------- */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionTitle eyebrow="Quick Access" title="One-Click Portals" subtitle="Jump directly to catalogues, digital libraries and research databases." />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {quickAccess.map((q, i) => (
                <a
                  key={q.title}
                  href={q.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-border bg-gradient-to-br from-white to-muted/30 p-5 hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Download className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-secondary text-sm">{q.title}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Contact ---------------- */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <SectionTitle eyebrow="Contact & Hours" title="Reach the Library" />
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border border-border">
                <h3 className="font-display font-bold text-secondary mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Location & Contact
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span className="text-secondary/85">{libraryContact.location}</span></div>
                  <a href={`mailto:${libraryContact.email}`} className="flex gap-3 text-secondary/85 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />{libraryContact.email}
                  </a>
                  <a href={`tel:${libraryContact.phone}`} className="flex gap-3 text-secondary/85 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />{libraryContact.phone}
                  </a>
                </div>
              </Card>
              <Card className="p-6 border border-border">
                <h3 className="font-display font-bold text-secondary mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" /> Working Hours
                </h3>
                <div className="space-y-3 text-sm">
                  {libraryContact.hours.map((h) => (
                    <div key={h.day} className="flex justify-between border-b border-border last:border-0 pb-2 last:pb-0">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-semibold text-secondary">{h.time}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Library;
