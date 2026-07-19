import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Users, GraduationCap, Award, Plane, Sparkles, Calendar,
  BookOpen, FileText, Download, ExternalLink, MapPin, Phone, Mail,
  Building2, ChevronLeft, ChevronRight, Home, ArrowRight, Landmark, Star,
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
  workshopGallery, stanfordGallery, heroBanners,
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
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-border bg-secondary/95 shadow-md group mb-8">
        {/* Blurred backdrop fill (same image, scaled + blurred) — prevents empty bars while keeping subject intact */}
        <div
          className="absolute inset-0 bg-center bg-cover scale-110 blur-2xl opacity-40"
          style={{ backgroundImage: `url("${images[currentIndex]}")` }}
          aria-hidden
        />
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="International Relations"
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain cursor-zoom-in"
            onClick={() => setLightbox(images[currentIndex])}
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
        </AnimatePresence>

        {/* Subtle bottom gradient for dot legibility */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
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

const domainMap: Record<string, string> = {
  "Bowling Green State University (BGSU)": "bgsu.edu",
  "Rivier University": "rivier.edu",
  "University of Applied Sciences, Hagenberg – Upper Austria": "fh-ooe.at",
  "BRNO University of Technology": "vutbr.cz",
  "Maharishi Vedic University": "meru.international",
  "University of Eastern Finland": "uef.fi",
  "Karlsruhe Institute of Technology": "kit.edu",
  "University of Aizu": "u-aizu.ac.jp",
  "Ichinoseki College (NIT)": "ichinoseki.ac.jp",
  "Iwate Prefectural University – Faculty of Software & Information Science": "iwate-pu.ac.jp",
  "Asia University": "asia.edu.tw",
  "Providence University": "pu.edu.tw",
  "National Chiao Tung University (NCTU)": "nycu.edu.tw",
  "National Chung Cheng University (NCCU)": "ccu.edu.tw",
  "Pusan National University": "pusan.ac.kr",
  "Kookmin University": "kookmin.ac.kr",
  "GS Co., Ltd. – Gyeonggi-do": "gscorp.co.kr",
  "Nanyang Technological University (NTU)": "ntu.edu.sg",
  "Rise & Shine Group of Companies": "riseandshinegroup.com",
  "Jenmars Technical Services LLC": "jenmars.com",
};

const getDomain = (url: string) => {
  try {
    if (!url || url === "#") return null;
    const clean = url
      .replace("https://www.", "")
      .replace("http://www.", "")
      .replace("https://", "")
      .replace("http://", "");
    return clean.split("/")[0];
  } catch (e) {
    return null;
  }
};

const FallbackCrest = ({ name }: { name: string }) => {
  const isCompany =
    name.toLowerCase().includes("group") ||
    name.toLowerCase().includes("services") ||
    name.toLowerCase().includes("co., ltd.");

  if (isCompany) {
    return (
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#caa74d]/10 to-[#caa74d]/20 border border-[#caa74d]/30 flex items-center justify-center p-3 text-[#caa74d] shrink-0 shadow-sm">
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full text-[#caa74d] fill-none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 flex items-center justify-center p-2.5 text-primary shrink-0 shadow-sm">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-primary fill-none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M50 12 L82 22 V55 C82 72 67 83 50 88 C33 83 18 72 18 55 V22 Z" />
        <path d="M35 48 H65 M50 35 V62" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M35 55 L50 65 L65 55" strokeWidth="2" />
        <circle cx="50" cy="35" r="5" className="fill-primary" />
      </svg>
    </div>
  );
};

const localLogos: Record<string, string> = {
  "Bowling Green State University (BGSU)": "Logos/bgsu.png",
  "University of Applied Sciences, Hagenberg – Upper Austria": "Logos/fh-ooe.png",
  "BRNO University of Technology": "Logos/brno.png",
  "The University of South Bohemia in České Budějovice": "Logos/jcu.png",
  "Maharishi Vedic University": "Logos/meru.png",
  "University of Aizu": "Logos/aizu.png",
  "Ichinoseki College (NIT)": "Logos/ichinoseki.png",
  "Iwate Prefectural University – Faculty of Software & Information Science": "Logos/iwate.png",
  "Asia University": "Logos/asia.png",
  "Providence University": "Logos/providence.png",
  "Pusan National University": "Logos/pusan.png",
  "Kookmin University": "Logos/kookmin.png",
};

const PartnerCard = ({ p }: { p: (typeof partners)[0] }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const BASE = import.meta.env.BASE_URL;
  const localLogo = localLogos[p.name];
  const domain = domainMap[p.name] || getDomain(p.website);
  const logoUrl = localLogo
    ? `${BASE}${localLogo}`
    : domain && p.website !== "#"
      ? `https://logo.clearbit.com/${domain}`
      : null;

  return (
    <a
      href={p.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl border border-border bg-white p-5 hover:shadow-xl hover:-translate-y-1 hover:border-[#caa74d]/50 transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          {!imgFailed && logoUrl ? (
            <div className="h-14 flex items-center bg-white shrink-0">
              <img
                src={logoUrl}
                alt={`${p.name} logo`}
                className="h-full w-auto object-contain max-w-[140px]"
                onError={() => setImgFailed(true)}
              />
            </div>
          ) : (
            <FallbackCrest name={p.name} />
          )}
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
        </div>
        <h4
          className="font-bold text-secondary text-base leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {p.name}
        </h4>
        <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
          <MapPin className="w-3 h-3 text-primary shrink-0" />
          {p.country}
        </p>
      </div>
      {p.highlight && (
        <p className="text-xs text-secondary/70 mt-4 leading-relaxed border-t border-border pt-3">
          {p.highlight}
        </p>
      )}
    </a>
  );
};

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
              <PartnerCard key={p.name} p={p} />
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

const GlobalSection = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (title: string) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="space-y-8">
      <SectionTitle title="Global Immersion, Summer & Winter Programs" subtitle="Short-term intensive academic and cultural immersion experiences with partner universities." />
      <ImageCarousel images={globalGallery} />
      <div className="space-y-6">
        {globalPrograms.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs text-primary font-bold mb-1.5 uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />{g.country}
                  </div>
                  <h3 className="text-xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>{g.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                    {g.partner && <span className="inline-flex items-center gap-1"><Building2 className="w-3 h-3" />{g.partner}</span>}
                    {g.period && <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{g.period}</span>}
                  </div>
                </div>
                {g.participants && g.participants.length > 0 && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleExpand(g.title)}
                    className="gap-2"
                  >
                    <Users className="w-4 h-4" />
                    {expanded[g.title] ? "Hide Participants" : `View Participants (${g.participants.length})`}
                  </Button>
                )}
              </div>
              {g.description && <p className="text-sm text-secondary/80 mt-3 leading-relaxed">{g.description}</p>}
            </div>

            {/* Collapsible Student Table */}
            {g.participants && g.participants.length > 0 && expanded[g.title] && (
              <div className="p-6 border-t border-border overflow-x-auto bg-muted/10">
                <table className="w-full text-sm">
                  <thead className="text-xs uppercase text-muted-foreground border-b border-border">
                    <tr>
                      <th className="text-left py-2 pr-4">#</th>
                      <th className="text-left py-2 pr-4">Name</th>
                      <th className="text-left py-2 pr-4">Department</th>
                      <th className="text-left py-2 pr-4">Roll No</th>
                      <th className="text-left py-2">Program Track</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.participants.map((s) => (
                      <tr key={s.sno} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="py-2.5 pr-4 text-muted-foreground">{s.sno}</td>
                        <td className="py-2.5 pr-4 font-medium text-secondary">{s.name}</td>
                        <td className="py-2.5 pr-4">{s.dept}</td>
                        <td className="py-2.5 pr-4 text-muted-foreground">{s.roll}</td>
                        <td className="py-2.5 text-secondary/70">{s.extra || "Global Immersion"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const EventCard = ({ e }: { e: { date: string; title: string; description: string } }) => {
  const [showFull, setShowFull] = useState(false);
  const needsTruncation = e.description.length > 280;
  const text = showFull ? e.description : (needsTruncation ? `${e.description.substring(0, 260)}...` : e.description);

  return (
    <div className="p-6">
      <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5">{e.date}</div>
      <h3 className="font-bold text-secondary text-lg mb-2 leading-snug" style={{ fontFamily: "var(--font-display)" }}>{e.title}</h3>
      <p className="text-sm text-secondary/80 leading-relaxed whitespace-pre-line">
        {text}
        {needsTruncation && (
          <button
            onClick={() => setShowFull(!showFull)}
            className="text-primary font-semibold ml-2 hover:underline focus:outline-none inline-flex items-center gap-0.5 text-xs"
          >
            {showFull ? "Read Less" : "Read More"}
          </button>
        )}
      </p>
      {e.reportUrl && (
        <a href={e.reportUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors bg-primary/5 hover:bg-primary/10 px-3 py-2 rounded-lg border border-primary/20">
          <Download className="w-3.5 h-3.5" />Event Report (PDF)
        </a>
      )}
    </div>
  );
};

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
            <EventCard e={e} />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const WorkshopsSection = () => (
  <div className="space-y-10">
    <SectionTitle title="Workshops" subtitle="Skill-building sessions and awareness workshops facilitated by the IRO." />
    <ImageCarousel images={workshopGallery} />
    <div className="space-y-8">
      {workshops.map((w, i) => (
        <div key={i} className="rounded-2xl border border-border bg-white p-6 md:p-8 hover:shadow-xl transition-all">
          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-3">
            <Calendar className="w-4 h-4" />{w.date}
          </div>
          <h3 className="font-bold text-secondary text-xl md:text-2xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
            {w.title}
          </h3>
          <p className="text-sm md:text-base text-secondary/80 leading-relaxed mb-6">
            {w.description}
          </p>

          {w.scientists && w.scientists.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-secondary text-sm uppercase tracking-wider mb-3 flex items-center gap-2 text-primary">
                <Users className="w-4 h-4 text-primary" /> Distinguished Scientists &amp; Resource Persons
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-secondary/80">
                {w.scientists.map((s, idx) => (
                  <li key={idx} className="flex gap-2 items-start bg-muted/50 p-2.5 rounded-lg border border-border/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {w.objectives && w.objectives.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-secondary text-sm uppercase tracking-wider mb-3 flex items-center gap-2 text-secondary/90">
                <Sparkles className="w-4 h-4 text-secondary/80" /> Objectives of the Workshop
              </h4>
              <ul className="space-y-2 text-sm text-secondary/80">
                {w.objectives.map((obj, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {w.reportUrl && (
            <div className="pt-4 border-t border-border/60">
              <a href={w.reportUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary/80 transition-colors">
                <FileText className="w-4 h-4" /> Download Official Workshop Report (PDF)
              </a>
            </div>
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
  const BASE = import.meta.env.BASE_URL;
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
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2a44] via-[#143557] to-[#0a1f33] text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-25">
          <img
            src={`${BASE}Hero-Section/image%206.jpg`}
            alt="MITS Campus"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = `${BASE}Hero-Section/image%201.JPG`;
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a44]/95 via-[#0f2a44]/80 to-[#0a1f33]/95" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #caa74d 0%, transparent 40%), radial-gradient(circle at 80% 80%, #b31317 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22><path d=%22M0 0h60v60H0z%22 fill=%22none%22/><path d=%22M30 0v60M0 30h60%22 stroke=%22%23ffffff%22 stroke-opacity=%220.04%22/></svg>')]" />
        
        <div className="container relative mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 font-body">
            <Link to="/" className="hover:text-[#caa74d] transition-colors inline-flex items-center gap-1">
              <Home className="w-3 h-3" />Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#caa74d]">International Relations</span>
          </nav>
          
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#caa74d]/15 border border-[#caa74d]/30 text-[#caa74d] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              <Globe className="w-3.5 h-3.5" /> Global Engagement
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-6xl font-bold leading-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              International Relations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-body text-lg md:text-xl text-white/80 mt-6 max-w-2xl leading-relaxed"
            >
              Connecting MITS to global universities through academic partnerships, student mobility,
              collaborative research and international learning opportunities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 md:-mt-14 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 bg-white rounded-2xl shadow-xl border border-border p-4 md:p-6">
          {heroStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#0f2a44]" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

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
                  <h3 className="text-xl font-bold mb-1 text-white" style={{ fontFamily: "var(--font-display)" }}>{contactCard.office}</h3>
                  <p className="text-sm text-white/90 mb-4">{contactCard.institute}</p>
                  <div className="space-y-2 text-sm text-white/95">
                    <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />{contactCard.address}</div>
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" />{contactCard.timings}</div>
                    <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /><a href={`tel:${contactCard.phone}`} className="hover:underline text-white">{contactCard.phone}</a></div>
                    <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /><a href={`mailto:${contactCard.email}`} className="hover:underline text-white">{contactCard.email}</a></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-5">
                    <a href={`mailto:${contactCard.email}`}><Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"><Mail className="w-4 h-4" />Email</Button></a>
                    <a href={`tel:${contactCard.phone}`}><Button size="sm" variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white gap-2"><Phone className="w-4 h-4" />Call</Button></a>
                    <a href={contactCard.mapsUrl} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white gap-2"><MapPin className="w-4 h-4" />Directions</Button></a>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-accent uppercase tracking-wide">IRO Team</h4>
                  {contactCard.team.map((t) => (
                    <div key={t.name} className="rounded-lg bg-white/5 border border-white/10 p-3">
                      <div className="font-semibold text-sm text-white">{t.name}</div>
                      <div className="text-xs text-white/80">{t.designation}</div>
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
