import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Trophy, Bus, Heart, UtensilsCrossed, Library, Radio,
  Lightbulb, Monitor, MessageSquare, Wifi, ChevronLeft, ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const BASE = import.meta.env.BASE_URL;

// ─── Palette ────────────────────────────────────────────────────────────────
const DARK_NAVY   = "#0f2a44";
const MITS_RED    = "#b30000";
const GOLD        = "#caa74d";
const SLATE       = "#475569";
const BORDER      = "#e2e8f0";

// ─── Campus Detail Images ───────────────────────────────────────────────────
const campusImages: Record<string, string> = {
  sports:         `${BASE}Campus Gallery/DSC_7376.JPG`,
  transport:      `${BASE}Campus Gallery/DSC_1888.JPG`,
  dispensary:     `${BASE}Hero-Section/image%204.JPG`,
  canteen:        `${BASE}Hero-Section/image%203.JPG`,
  wifi:           `${BASE}Campus Gallery/DSC00642.jpg`,
  library:        `${BASE}Campus Gallery/DSC_1862.JPG`,
  "digital-library": `${BASE}Campus Gallery/DSC00846.jpg`,
  radio:          `${BASE}Campus Gallery/DSC00674.jpg`,
  "aicte-idea":   `${BASE}Campus Gallery/DSC00807.jpg`,
  computer:       `${BASE}Campus Gallery/DSC00892.jpg`,
  "comm-lab":     `${BASE}Campus Gallery/DSC00890.jpg`,
  hero:           `${BASE}Campus Gallery/DSC00955.jpg`,
};

// ─── Facilities Data ─────────────────────────────────────────────────────────
const infrastructureItems = [
  {
    key: "sports", label: "Sports", icon: Trophy, title: "Sports & Athletics",
    desc: "MITS offers world-class sports infrastructure to promote physical fitness and competitive spirit among students.",
    points: [
      "Cricket ground with practice nets and pavilion",
      "Football, volleyball, and basketball courts",
      "Badminton and table tennis halls",
      "Athletics track and field facilities",
      "Indoor gymnasium with modern equipment",
      "Annual sports meet and inter-collegiate tournaments",
    ],
  },
  {
    key: "transport", label: "Transport", icon: Bus, title: "Transport Facilities",
    desc: "MITS provides safe and reliable transportation services covering Madanapalle and surrounding areas.",
    points: [
      "Fleet of 40+ buses covering 80+ km radius",
      "Routes covering Madanapalle, Tirupati, Chittoor, and nearby towns",
      "GPS-enabled buses for real-time tracking",
      "Dedicated routes for day scholars and staff",
      "Well-maintained vehicles with trained drivers",
      "Special transport for examination and events",
    ],
  },
  {
    key: "dispensary", label: "Dispensary", icon: Heart, title: "Health & Dispensary",
    desc: "A fully equipped on-campus dispensary ensures the health and well-being of all students and staff.",
    points: [
      "24/7 medical assistance on campus",
      "Qualified doctors and nursing staff",
      "First aid and emergency care facilities",
      "Tie-ups with nearby hospitals for referrals",
      "Regular health check-up camps",
      "Mental health and counseling support",
    ],
  },
  {
    key: "canteen", label: "Canteen", icon: UtensilsCrossed, title: "Canteen & Dining",
    desc: "Hygienic and affordable food services are available across the campus to cater to diverse tastes.",
    points: [
      "Main canteen with seating capacity of 500+",
      "Multiple food stalls across campus",
      "Vegetarian and non-vegetarian options",
      "Hygienic food preparation with regular audits",
      "Affordable meal plans for hostel students",
      "Special dietary options available on request",
    ],
  },
  {
    key: "wifi", label: "Wi-Fi", icon: Wifi, title: "Wi-Fi & Connectivity",
    desc: "High-speed internet connectivity is available across the entire campus for seamless academic and research activities.",
    points: [
      "Campus-wide Wi-Fi with 1 Gbps internet bandwidth",
      "500+ access points across academic and hostel blocks",
      "24/7 connectivity for students and faculty",
      "Secure network with firewall and content filtering",
      "Dedicated bandwidth for research and labs",
      "NKN (National Knowledge Network) connectivity",
    ],
  },
  {
    key: "library", label: "Library", icon: Library, title: "Central Library",
    desc: "The MITS Central Library is a knowledge hub with an extensive collection of books, journals, and digital resources.",
    points: [
      "50,000+ volumes across all disciplines",
      "Subscriptions to 100+ national and international journals",
      "Spacious reading halls with seating for 400+ students",
      "Separate sections for reference, periodicals, and thesis",
      "OPAC (Online Public Access Catalogue) system",
      "Extended library hours during examination periods",
    ],
  },
  {
    key: "digital-library", label: "Digital Library", icon: Monitor, title: "Digital Library",
    desc: "The Digital Library provides access to a vast repository of e-resources, online databases, and research tools.",
    points: [
      "Access to NPTEL, DELNET, and INFLIBNET N-LIST",
      "IEEE, Springer, Elsevier, and Scopus database access",
      "E-books and e-journals across all disciplines",
      "Dedicated digital library lab with 100+ terminals",
      "Remote access for students and faculty",
      "Plagiarism detection tools (Turnitin/iThenticate)",
    ],
  },
  {
    key: "radio", label: "Radio Station", icon: Radio, title: "Campus Radio Station",
    desc: "MITS operates a vibrant campus radio station that serves as a creative and communicative platform for students.",
    points: [
      "Licensed FM community radio station",
      "Student-run programming and content creation",
      "Broadcasts news, music, and educational content",
      "Platform for developing communication and media skills",
      "Regular shows on campus events and achievements",
      "Training in audio production and broadcasting",
    ],
  },
  {
    key: "aicte-idea", label: "AICTE Idea Lab", icon: Lightbulb, title: "AICTE Idea Lab",
    desc: "The AICTE Idea Lab at MITS is a state-of-the-art innovation hub that fosters creativity, prototyping, and entrepreneurship.",
    points: [
      "Equipped with 3D printers, laser cutters, and CNC machines",
      "Electronics prototyping and IoT development kits",
      "Dedicated space for student startups and projects",
      "Workshops on design thinking and innovation",
      "Collaboration with AICTE's national innovation network",
      "Mentorship from industry experts and entrepreneurs",
    ],
  },
  {
    key: "computer", label: "Computer Infrastructure", icon: Monitor, title: "Computer Infrastructure",
    desc: "MITS maintains cutting-edge computing infrastructure to support academic, research, and innovation activities.",
    points: [
      "3000+ computing systems across departments",
      "High-performance GPU servers for AI/ML research",
      "Licensed software: MATLAB, AutoCAD, ANSYS, and more",
      "Cloud computing lab with AWS and Azure access",
      "24/7 lab access for project and research work",
      "Regular hardware and software upgrades",
    ],
  },
  {
    key: "comm-lab", label: "Communication Lab", icon: MessageSquare, title: "Communication Lab",
    desc: "The Communication Lab at MITS is designed to enhance the language, presentation, and interpersonal skills of students.",
    points: [
      "State-of-the-art language lab with 60+ terminals",
      "Software for pronunciation, listening, and speaking practice",
      "Group discussion and debate practice rooms",
      "Regular workshops on business communication",
      "Mock interview and presentation training sessions",
      "English proficiency programs for all students",
    ],
  },
];

// ─── Normalise class list (single truthy source, no `classnames` / `clsx` needed) ──
const cx = (...classes: (string | false | null | undefined)[]): string =>
  classes.filter(Boolean).join(" ");

const Infrastructure = () => {
  const [activeInfra, setActiveInfra] = useState(infrastructureItems[0].key);
  const current = infrastructureItems.find((i) => i.key === activeInfra)!;
  const currentIdx = infrastructureItems.findIndex((i) => i.key === activeInfra);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tabsRef.current?.querySelector<HTMLButtonElement>(
      `[data-key="${activeInfra}"]`
    );
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeInfra]);

  const go = (dir: -1 | 1) => {
    const next = currentIdx + dir;
    if (next >= 0 && next < infrastructureItems.length) {
      setActiveInfra(infrastructureItems[next].key);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfbf7] via-white to-white">
      <Header />
      <main>

        {/* ══════════════════════════════════════════════════════
            HERO  — full-bleed image with dark overlay
           ══════════════════════════════════════════════════════ */}
        <div className="relative h-[340px] md:h-[420px] overflow-hidden">
          <img
            src={campusImages.hero}
            alt="MITS Campus"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a44]/80 via-[#0f2a44]/55 to-[#0f2a44]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a44]/40 to-transparent" />

          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
            <p className="text-[11px] font-bold tracking-[0.32em] uppercase mb-3"
              style={{ color: GOLD, textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              Campus Life
            </p>
            <h1 className="font-display text-4xl md:text-[3.5rem] lg:text-[4rem] font-bold text-white mb-4 tracking-tight leading-none"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.35)", fontFamily: "var(--font-display)" }}>
              Infrastructure
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>
              World-class facilities designed for academic excellence and holistic development.
            </p>
          </div>

          <div className="absolute bottom-5 left-6 z-10 text-xs text-white/70">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li>&rsaquo;</li>
              <li className="text-white font-semibold">Infrastructure</li>
            </ol>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            LIVE STATS STRIP
           ══════════════════════════════════════════════════════ */}
        <div className="border-y" style={{ background: DARK_NAVY, borderColor: "rgba(202,167,77,0.2)" }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x"
              style={{ borderColor: "rgba(202,167,77,0.15)" }}>
              {[
                { label: "Acre Campus",  value: "26.17+" },
                { label: "Buses",        value: "40+"    },
                { label: "Computers",    value: "3000+"  },
                { label: "Internet Speed", value: "1 Gbps" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={cx(
                    "py-5 px-4 text-center",
                    i > 0 ? "border-t md:border-t-0" : "",
                    i < 3 ? "md:border-r" : ""
                  )}
                >
                  <p className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight leading-none text-white">
                    {s.value}
                  </p>
                  <p className="text-[10px] md:text-xs mt-2 font-medium uppercase tracking-wider"
                    style={{ color: GOLD }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            MAIN FACILITIES — sidebar + detail + highlights
           ══════════════════════════════════════════════════════ */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">

            {/* ── Mobile tab strip ── */}
            <div className="lg:hidden mb-7 -mx-4 px-4">
              <div
                ref={tabsRef}
                className="flex gap-2 overflow-x-auto pb-1.5 snap-x snap-mandatory scroll-smooth"
                style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
              >
                {infrastructureItems.map((item) => {
                  const IconComp = item.icon as React.ElementType;
                  const on = activeInfra === item.key;
                  return (
                    <button
                      key={item.key}
                      data-key={item.key}
                      onClick={() => setActiveInfra(item.key)}
                      className={cx(
                        "snap-start flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-semibold",
                        "whitespace-nowrap transition-all duration-200 flex-shrink-0 border",
                        on
                          ? "text-white border-transparent shadow-md"
                          : cx("text-[#0f2a44] border-white/60 bg-white/80")
                      )}
                      style={on ? { background: DARK_NAVY } : undefined}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

              {/* ══════════════════════════════════════════════════════
                  LEFT SIDEBAR  — sticky
                  navy bg · gold left-bar on active
               ══════════════════════════════════════════════════════ */}
              <aside className="hidden lg:block lg:w-[270px] flex-shrink-0">
                <div
                  className="sticky top-24 rounded-xl overflow-hidden shadow-sm"
                  style={{ background: DARK_NAVY, border: `1px solid rgba(202,167,77,0.2)` }}
                >
                  <div className="px-5 py-3 flex items-center gap-2"
                    style={{ borderBottom: `1px solid rgba(202,167,77,0.15)` }}>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: GOLD }} />
                    <p className="text-white font-bold text-[11px] uppercase tracking-[0.26em]">
                      Facilities
                    </p>
                  </div>
                  <nav className="py-1.5">
                    {infrastructureItems.map((item) => {
                      const SidebarIcon = item.icon as React.ElementType;
                      const on = activeInfra === item.key;
                      return (
                        <button
                          key={item.key}
                          onClick={() => setActiveInfra(item.key)}
                          className={cx(
                            "w-full flex items-center gap-3 px-5 py-2.5 text-left text-[13px]",
                            "transition-colors duration-150 group",
                            on ? "text-white" : "text-white/65 hover:text-white hover:bg-white/[0.07]"
                          )}
                        >
                          <span
                            className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300"
                            style={{
                              background: on ? GOLD : "transparent",
                              opacity: on ? 1 : 0,
                              boxShadow: on ? `0 0 10px ${GOLD}90` : "none",
                            }}
                          />
                          <SidebarIcon
                            className="w-4 h-4 flex-shrink-0 relative z-10"
                            style={{ color: on ? GOLD : "rgba(255,255,255,0.45)" }}
                          />
                          <span className="flex-1 relative z-10 font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </aside>

              {/* ══════════════════════════════════════════════════════
                  RIGHT CONTENT
               ══════════════════════════════════════════════════════ */}
              <div className="flex-1 min-w-0">

                {/* ── FACILITY HERO IMAGE ── */}
                <div className="relative rounded-xl overflow-hidden mb-6 shadow-md"
                  style={{ aspectRatio: "16/6" }}>
                  <img
                    src={campusImages[current.key] || campusImages.hero}
                    alt={current.title}
                    className="w-full h-full object-cover transition-all duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = campusImages.hero;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a44]/90 via-[#0f2a44]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, ${MITS_RED} 0%, ${GOLD} 50%, ${MITS_RED} 100%)`,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-2">
                      {(() => {
                        const IconComp = current.icon as React.ElementType;
                        return (
                          <IconComp className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0"
                            style={{ color: GOLD }} />
                        );
                      })()}
                      <h2 className="font-display text-xl md:text-[1.75rem] font-bold text-white tracking-tight leading-none"
                        style={{ fontFamily: "var(--font-display)" }}>
                        {current.title}
                      </h2>
                      <span className="hidden md:inline-block ml-auto text-[10px] font-bold uppercase tracking-widest text-white/60">
                        {String(currentIdx + 1).padStart(2, "0")} /{" "}
                        {String(infrastructureItems.length).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-white/75 text-[13px] md:text-sm leading-relaxed max-w-2xl hidden sm:block">
                      {current.desc}
                    </p>
                  </div>
                </div>

                {/* ── MOBILE DESCRIPTION ── */}
                <div className="sm:hidden mb-6 px-1">
                  <p className="text-[14px] leading-relaxed" style={{ color: SLATE }}>
                    {current.desc}
                  </p>
                </div>

                {/* ── KEY HIGHLIGHTS ── */}
                <div
                  className="rounded-xl overflow-hidden mb-5 shadow-sm"
                  style={{ background: "#fff", border: `1px solid ${BORDER}` }}
                >
                  <div
                    className="px-6 py-3.5 flex items-center gap-2.5"
                    style={{
                      borderBottom: `1px solid ${BORDER}`,
                      background: `linear-gradient(90deg, rgba(15,42,68,0.03), transparent)`,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 1L8.5 5H9.5L8 7.5L7 12L6 7.5L4.5 5H5.5L7 1Z"
                        fill={GOLD} stroke={MITS_RED} strokeWidth="0.6"
                      />
                    </svg>
                    <span
                      className="font-bold text-[15px]"
                      style={{ color: DARK_NAVY, fontFamily: "var(--font-display)" }}
                    >
                      Key Highlights
                    </span>
                    <span
                      className="ml-auto text-[10px] font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${DARK_NAVY}, ${MITS_RED})`,
                      }}
                    >
                      {current.points.length} Points
                    </span>
                  </div>

                  <div className="p-5 md:p-6 grid sm:grid-cols-2 gap-2.5 md:gap-3">
                    {current.points.map((text, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 px-5 py-3.5 rounded-xl border transition-all duration-200 group/card cursor-default"
                        style={{ borderColor: BORDER, background: "#fff" }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget;
                          el.style.borderColor = GOLD;
                          el.style.background = `${GOLD}0c`;
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;
                          el.style.borderColor = BORDER;
                          el.style.background = "#fff";
                        }}
                      >
                        <span
                          className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-extrabold text-white mt-0.5"
                          style={{
                            background: `linear-gradient(135deg, ${DARK_NAVY} 0%, ${MITS_RED} 100%)`,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[13px] leading-relaxed flex-1" style={{ color: SLATE }}>
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── BOTTOM NAV: Prev · Dots · Next ── */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    onClick={() => go(-1)}
                    disabled={currentIdx === 0}
                    className={cx(
                      "px-5 py-2.5 flex items-center gap-2 rounded-full text-[13px] font-semibold",
                      "transition-all duration-200 cursor-pointer select-none disabled:cursor-not-allowed"
                    )}
                    style={{
                      border: `1px solid ${BORDER}`,
                      color: DARK_NAVY,
                      background: "#fff",
                      opacity: currentIdx === 0 ? 0.35 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (currentIdx === 0) return;
                      const el = e.currentTarget;
                      el.style.background = DARK_NAVY;
                      el.style.color = "#fff";
                      el.style.borderColor = DARK_NAVY;
                      el.style.boxShadow = `0 6px 18px ${DARK_NAVY}20`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "#fff";
                      el.style.color = DARK_NAVY;
                      el.style.borderColor = BORDER;
                      el.style.boxShadow = "none";
                    }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  <div className="flex gap-1.5 items-center py-2">
                    {infrastructureItems.map((_, i) => {
                      const on = i === currentIdx;
                      return (
                        <button
                          key={i}
                          onClick={() => setActiveInfra(infrastructureItems[i].key)}
                          aria-label={infrastructureItems[i].label}
                          className="rounded-full transition-all duration-200 cursor-pointer"
                          style={{
                            width: on ? 22 : 7,
                            height: 7,
                            borderRadius: 99,
                            background: on
                              ? `linear-gradient(90deg, ${DARK_NAVY} 0%, ${MITS_RED} 60%, ${GOLD} 100%)`
                              : BORDER,
                            boxShadow: on ? `0 2px 8px ${MITS_RED}35` : "none",
                          }}
                        />
                      );
                    })}
                  </div>

                  <button
                    onClick={() => go(1)}
                    disabled={currentIdx === infrastructureItems.length - 1}
                    className={cx(
                      "px-5 py-2.5 flex items-center gap-2 rounded-full text-[13px] font-semibold",
                      "transition-all duration-200 cursor-pointer select-none disabled:cursor-not-allowed"
                    )}
                    style={{
                      border: `1px solid ${BORDER}`,
                      color: DARK_NAVY,
                      background: "#fff",
                      opacity: currentIdx === infrastructureItems.length - 1 ? 0.35 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (currentIdx === infrastructureItems.length - 1) return;
                      const el = e.currentTarget;
                      el.style.background = DARK_NAVY;
                      el.style.color = "#fff";
                      el.style.borderColor = DARK_NAVY;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "#fff";
                      el.style.color = DARK_NAVY;
                      el.style.borderColor = BORDER;
                    }}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>{/* /flex-1 */}
            </div>{/* /flex-row */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;
