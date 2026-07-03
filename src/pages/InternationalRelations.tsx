import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Users, GraduationCap, Award, Plane, Sparkles, Calendar,
  BookOpen, FileText, Download, ExternalLink, MapPin, Phone, Mail,
  Building2, ChevronRight, Home, ArrowRight, Landmark, Star,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  aboutIR, aboutGallery, contactCard, partners, partnerImages,
  internships, internshipArchives, fellowships, globalPrograms,
  events, workshops, heroBanner, heroStats,
  internshipGallery, fellowshipGallery, globalGallery, eventGallery,
  workshopGallery, stanfordGallery,
} from "@/data/internationalRelations";

type Section =
  | "about" | "mou" | "internships" | "fellowships"
  | "global" | "events" | "workshops" | "stanford";

const NAV: { id: Section; label: string; icon: LucideIcon }[] = [
  { id: "about",       label: "About",             icon: Globe },
  { id: "mou",         label: "MoUs",              icon: Landmark },
  { id: "internships", label: "Internships & Exchange", icon: Plane },
  { id: "fellowships", label: "Fellowships",       icon: Award },
  { id: "global",      label: "Global Immersion",  icon: Sparkles },
  { id: "events",      label: "Events",            icon: Calendar },
  { id: "workshops",   label: "Workshops",         icon: BookOpen },
  { id: "stanford",    label: "Stanford Initiative", icon: Star },
];

const regionColors: Record<string, string> = {
  US: "bg-blue-100 text-blue-800",
  Europe: "bg-emerald-100 text-emerald-800",
  Japan: "bg-rose-100 text-rose-800",
  Taiwan: "bg-amber-100 text-amber-800",
  "South Korea": "bg-indigo-100 text-indigo-800",
  Singapore: "bg-teal-100 text-teal-800",
  "Middle East": "bg-orange-100 text-orange-800",
  Other: "bg-slate-100 text-slate-700",
};

/* ---------- shared UI helpers ---------- */

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl md:text-4xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
      {title}
    </h2>
    {subtitle && <p className="text-muted-foreground mt-2 max-w-3xl">{subtitle}</p>}
    <div className="h-1 w-16 bg-primary rounded-full mt-4" />
  </div>
);

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] overflow-hidden rounded-2xl border border-border bg-muted shadow-md group mb-8">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="International Relations"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
            onClick={() => setLightbox(images[currentIndex])}
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-secondary shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-secondary shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Indicator Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/25 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-white w-5" : "bg-white/50 w-1.5"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <img src={lightbox} className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const GalleryGrid = ({ images }: { images: string[] }) => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightbox(src)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <img src={lightbox} className="max-h-[92vh] max-w-[92vw] object-contain rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ---------- Section renderers ---------- */

const AboutSection = () => (
  <div className="space-y-10">
    <SectionTitle title="About International Relations" subtitle="MITS – Deemed to be University's global engagement, partnerships and academic mobility." />
    <ImageCarousel images={aboutGallery} />
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4 text-[15px] leading-relaxed text-secondary/90">
        {aboutIR.intro.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <div className="space-y-4">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-white p-6">
          <div className="flex items-center gap-2 text-primary font-bold mb-2"><Sparkles className="w-4 h-4" />Goal</div>
          <p className="text-sm text-secondary/90">{aboutIR.goal}</p>
        </div>
        <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/5 to-white p-6">
          <div className="flex items-center gap-2 text-secondary font-bold mb-3"><Award className="w-4 h-4" />Mission</div>
          <ul className="space-y-2 text-sm text-secondary/85">
            {aboutIR.mission.map((m, i) => (
              <li key={i} className="flex gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />{m}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-border bg-white p-6">
        <h3 className="font-bold text-secondary mb-3" style={{ fontFamily: "var(--font-display)" }}>Short-term Objectives</h3>
        <ul className="space-y-2 text-sm text-secondary/85">
          {aboutIR.shortTerm.map((o, i) => (
            <li key={i} className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />{o}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-border bg-white p-6">
        <h3 className="font-bold text-secondary mb-3" style={{ fontFamily: "var(--font-display)" }}>Long-term Objectives</h3>
        <ul className="space-y-2 text-sm text-secondary/85">
          {aboutIR.longTerm.map((o, i) => (
            <li key={i} className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />{o}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="rounded-2xl border border-border bg-gradient-to-r from-secondary to-secondary/90 text-white p-6 md:p-8">
      <div className="flex items-center gap-2 text-accent font-bold mb-3"><Users className="w-4 h-4" />International Relations Office</div>
      <p className="text-sm md:text-base leading-relaxed text-white/90">{aboutIR.office}</p>
    </div>
  </div>
);

const MoUSection = () => {
  const grouped = partners.reduce((acc, p) => {
    (acc[p.region] ||= []).push(p);
    return acc;
  }, {} as Record<string, typeof partners>);

  return (
    <div className="space-y-10">
      <SectionTitle title="Memoranda of Understanding" subtitle="MITS – Deemed to be University has active MoUs with the following institutions across the world." />
      <ImageCarousel images={partnerImages} />
      {Object.entries(grouped).map(([region, list]) => (
        <div key={region} className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <span className={cn("px-3 py-1 rounded-full text-xs font-bold", regionColors[region])}>
              {region === "US" ? "US Universities" : region === "Europe" ? "European Universities" : `${region} Partners`}
            </span>
            <span className="text-sm text-muted-foreground">{list.length} partners</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map((p) => (
              <a key={p.name} href={p.website} target="_blank" rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-white p-5 hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-primary/5 text-primary"><Landmark className="w-5 h-5" /></div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-bold text-secondary text-base leading-snug" style={{ fontFamily: "var(--font-display)" }}>{p.name}</h4>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" />{p.country}</p>
                {p.highlight && <p className="text-xs text-secondary/70 mt-3 leading-relaxed border-t border-border pt-3">{p.highlight}</p>}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const InternshipsSection = () => (
  <div className="space-y-10">
    <SectionTitle title="Internships & Exchange Programs" subtitle="Research internships, student exchange and academic mobility across MITS' global network." />
    <ImageCarousel images={internshipGallery} />
    <div className="grid gap-6">
      {internships.map((p) => (
        <div key={p.title} className="rounded-2xl border border-border bg-white overflow-hidden">
          <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                  {p.country && <span className="inline-flex items-center gap-1"><Globe className="w-3 h-3" />{p.country}</span>}
                  {p.partner && <span className="inline-flex items-center gap-1"><Building2 className="w-3 h-3" />{p.partner}</span>}
                  {p.period && <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{p.period}</span>}
                </div>
              </div>
              {p.reportUrl && (
                <a href={p.reportUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="gap-2"><FileText className="w-4 h-4" />Report</Button>
                </a>
              )}
            </div>
            {p.description && <p className="text-sm text-secondary/80 mt-3">{p.description}</p>}
          </div>
          {p.participants && (
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-xs uppercase text-muted-foreground border-b border-border">
                  <tr>
                    <th className="text-left py-2 pr-4">#</th>
                    <th className="text-left py-2 pr-4">Name</th>
                    <th className="text-left py-2 pr-4">Department</th>
                    <th className="text-left py-2">Roll No</th>
                  </tr>
                </thead>
                <tbody>
                  {p.participants.map((s) => (
                    <tr key={s.sno} className="border-b border-border last:border-0">
                      <td className="py-2 pr-4 text-muted-foreground">{s.sno}</td>
                      <td className="py-2 pr-4 font-medium text-secondary">{s.name}</td>
                      <td className="py-2 pr-4">{s.dept}</td>
                      <td className="py-2 text-muted-foreground">{s.roll}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="rounded-2xl border border-border bg-muted/30 p-6">
      <h3 className="font-bold text-secondary mb-3" style={{ fontFamily: "var(--font-display)" }}>Internship Archives</h3>
      <div className="flex flex-wrap gap-3">
        {internshipArchives.map((a) => (
          <a key={a.year} href={a.url} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors">
            <Download className="w-4 h-4" />{a.year} Internships Data
          </a>
        ))}
      </div>
    </div>
  </div>
);

const FellowshipsSection = () => (
  <div className="space-y-8">
    <SectionTitle title="Fellowships & Scholarships" subtitle="Prestigious global programmes MITS students are encouraged to compete for." />
    <ImageCarousel images={fellowshipGallery} />
    <div className="grid md:grid-cols-2 gap-5">
      {fellowships.map((f) => (
        <div key={f.title} className="rounded-2xl border border-border bg-white p-6 hover:shadow-lg transition-all">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-accent/15 text-accent-foreground"><Award className="w-5 h-5" /></div>
            <div className="flex-1">
              <h3 className="font-bold text-secondary text-lg" style={{ fontFamily: "var(--font-display)" }}>{f.title}</h3>
              <div className="flex flex-wrap gap-2 mt-1 text-xs text-muted-foreground">
                {f.country && <span className="inline-flex items-center gap-1"><Globe className="w-3 h-3" />{f.country}</span>}
                {f.partner && <span className="inline-flex items-center gap-1"><Building2 className="w-3 h-3" />{f.partner}</span>}
                {f.period && <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{f.period}</span>}
              </div>
            </div>
          </div>
          {f.description && <p className="text-sm text-secondary/80 leading-relaxed">{f.description}</p>}
          {f.reportUrl && (
            <a href={f.reportUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline">
              <FileText className="w-4 h-4" />View Report
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

const GlobalSection = () => (
  <div className="space-y-8">
    <SectionTitle title="Global Immersion, Summer & Winter Programs" subtitle="Short-term intensive academic and cultural immersion experiences with partner universities." />
    <ImageCarousel images={globalGallery} />
    <div className="grid md:grid-cols-2 gap-5">
      {globalPrograms.map((g) => (
        <div key={g.title} className="rounded-2xl border border-border bg-gradient-to-br from-white to-primary/5 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
          <div className="flex items-center gap-2 text-xs text-primary font-bold mb-2 uppercase tracking-wide">
            <Sparkles className="w-4 h-4" />{g.country}
          </div>
          <h3 className="font-bold text-secondary text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>{g.title}</h3>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
            {g.partner && <span className="inline-flex items-center gap-1"><Building2 className="w-3 h-3" />{g.partner}</span>}
            {g.period && <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{g.period}</span>}
          </div>
          {g.description && <p className="text-sm text-secondary/80 leading-relaxed">{g.description}</p>}
        </div>
      ))}
    </div>
  </div>
);

const EventsSection = () => (
  <div className="space-y-8">
    <SectionTitle title="International Events & Delegations" subtitle="Visits, MoU signings, awareness programmes and international interactions organised by the IRO." />
    <ImageCarousel images={eventGallery} />
    <div className="relative border-l-2 border-primary/30 ml-4 space-y-8 pl-8">
      {events.map((e, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="relative">
          <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white shadow-md" />
          <div className="rounded-2xl border border-border bg-white overflow-hidden hover:shadow-lg transition-all">
            {e.image && (
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img src={e.image} alt={e.title} loading="lazy" className="w-full h-full object-cover" onError={(ev) => ((ev.target as HTMLImageElement).style.display = "none")} />
              </div>
            )}
            <div className="p-5">
              <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1">{e.date}</div>
              <h3 className="font-bold text-secondary text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>{e.title}</h3>
              <p className="text-sm text-secondary/80 leading-relaxed">{e.description}</p>
              {e.reportUrl && (
                <a href={e.reportUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-primary hover:underline">
                  <Download className="w-4 h-4" />Event Report (PDF)
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const WorkshopsSection = () => (
  <div className="space-y-8">
    <SectionTitle title="Workshops" subtitle="Skill-building sessions and awareness workshops facilitated by the IRO." />
    <ImageCarousel images={workshopGallery} />
    <div className="grid md:grid-cols-2 gap-5">
      {workshops.map((w, i) => (
        <div key={i} className="rounded-2xl border border-border bg-white p-6 hover:shadow-lg transition-all">
          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wide mb-2">
            <BookOpen className="w-4 h-4" />{w.date}
          </div>
          <h3 className="font-bold text-secondary text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>{w.title}</h3>
          <p className="text-sm text-secondary/80 leading-relaxed">{w.description}</p>
          {w.reportUrl && (
            <a href={w.reportUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline">
              <FileText className="w-4 h-4" />Workshop Report
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

const StanfordTeaser = () => (
  <div className="space-y-6">
    <SectionTitle title="Stanford d.school Initiative" subtitle="MITS – University Innovation Fellows (UIF) programme, in association with Stanford University's Hasso Plattner Institute of Design." />
    <ImageCarousel images={stanfordGallery} />
    <div className="rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-secondary via-secondary to-primary text-white p-8 md:p-12">
      <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest mb-4">
        <Star className="w-4 h-4" />Global Student Leadership
      </div>
      <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
        11 Batches of Fellows since 2016
      </h3>
      <p className="text-white/90 max-w-3xl mb-6">
        MITS has consistently produced batches of University Innovation Fellows, empowering student leaders to become
        agents of change on campus through Stanford d.school's global network.
      </p>
      <Link to="/international-relations/stanford-initiative">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
          Explore the Stanford Initiative <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  </div>
);

/* ---------- MAIN PAGE ---------- */

const InternationalRelations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initial = (location.hash.replace("#", "") as Section) || "about";
  const validIds = NAV.map(n => n.id);
  const [active, setActive] = useState<Section>(
    validIds.includes(initial) ? initial : "about"
  );

  useEffect(() => {
    const hash = location.hash.replace("#", "") as Section;
    if (hash && validIds.includes(hash)) setActive(hash);
  }, [location.hash]);

  const handleNav = (id: Section) => {
    setActive(id);
    navigate({ hash: id }, { replace: false });
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-20 lg:pt-28">
        <div className="relative h-[52vh] md:h-[60vh] overflow-hidden">
          <img src={heroBanner} alt="International Relations" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/70" />
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col justify-end pb-10 text-white">
            <div className="flex items-center gap-2 text-xs md:text-sm text-white/80 mb-3">
              <Link to="/" className="hover:text-accent inline-flex items-center gap-1"><Home className="w-3 h-3" />Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-accent">International Relations</span>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              International Relations
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-3 max-w-3xl text-white/90 text-base md:text-lg">
              Connecting MITS to global universities through academic partnerships, student mobility,
              collaborative research and international learning opportunities.
            </motion.p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 bg-white rounded-2xl shadow-xl border border-border p-4 md:p-6">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          {/* Sticky sidebar (desktop) / horizontal (mobile) */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="lg:block flex overflow-x-auto gap-2 lg:gap-1 pb-2 lg:pb-0 lg:flex-col">
              {NAV.map((n) => {
                const Icon = n.icon;
                const isActive = active === n.id;
                return (
                  <button
                    key={n.id}
                    onClick={() => handleNav(n.id)}
                    className={cn(
                      "shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap lg:w-full lg:justify-start",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-white border border-border text-secondary hover:border-primary hover:text-primary"
                    )}
                  >
                    <Icon className="w-4 h-4" />{n.label}
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {active === "about" && <AboutSection />}
                {active === "mou" && <MoUSection />}
                {active === "internships" && <InternshipsSection />}
                {active === "fellowships" && <FellowshipsSection />}
                {active === "global" && <GlobalSection />}
                {active === "events" && <EventsSection />}
                {active === "workshops" && <WorkshopsSection />}
                {active === "stanford" && <StanfordTeaser />}
              </motion.div>
            </AnimatePresence>

            {/* Contact card - always visible below content */}
            <div className="mt-14 rounded-2xl border border-border bg-gradient-to-br from-secondary to-secondary/90 text-white p-6 md:p-8">
              <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest mb-4">
                <Phone className="w-4 h-4" />Contact IRO
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>{contactCard.office}</h3>
                  <p className="text-sm text-white/80 mb-4">{contactCard.institute}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />{contactCard.address}</div>
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" />{contactCard.timings}</div>
                    <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /><a href={`tel:${contactCard.phone}`} className="hover:underline">{contactCard.phone}</a></div>
                    <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /><a href={`mailto:${contactCard.email}`} className="hover:underline">{contactCard.email}</a></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-5">
                    <a href={`mailto:${contactCard.email}`}><Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"><Mail className="w-4 h-4" />Email</Button></a>
                    <a href={`tel:${contactCard.phone}`}><Button size="sm" variant="outline" className="border-white/40 text-white hover:bg-white/10 gap-2"><Phone className="w-4 h-4" />Call</Button></a>
                    <a href={contactCard.mapsUrl} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline" className="border-white/40 text-white hover:bg-white/10 gap-2"><MapPin className="w-4 h-4" />Directions</Button></a>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-accent uppercase tracking-wide">IRO Team</h4>
                  {contactCard.team.map((t) => (
                    <div key={t.name} className="rounded-lg bg-white/5 border border-white/10 p-3">
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-white/70">{t.designation}</div>
                      {t.email && <a href={`mailto:${t.email}`} className="text-xs text-accent hover:underline mt-1 inline-flex items-center gap-1"><Mail className="w-3 h-3" />{t.email}</a>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternationalRelations;
