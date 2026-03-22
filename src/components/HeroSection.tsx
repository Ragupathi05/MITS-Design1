import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
const BASE = import.meta.env.BASE_URL;

// ── Slide data ────────────────────────────────────────────────────────────────
const slides = [
  // 1 — College Identity
  {
    id: "identity",
    image: `${BASE}Hero-Section/image%201.JPG`,
    overlay: "bg-[linear-gradient(160deg,rgba(7,21,37,0.82)_0%,rgba(15,42,68,0.65)_100%)]",
    eyebrow: "ESTABLISHED 1998",
    title: "MITS",
    tagline: "",
    highlight: "Madanapalle Institute of Technology & Science",
    subHighlight: "Deemed to be University",
    leftLogo: `${BASE}mits-logo.png`,
    rightLogo: `${BASE}estd.png`,
    buttons: [
      { label: "Explore", href: "#about", style: "outline" },
      { label: "Apply Now", href: "https://admission.mits.ac.in/", style: "primary", external: true },
    ],
    align: "center",
  },
  // 2 — Admissions
  {
    id: "admissions",
    image: `${BASE}Hero-Section/admissions.jpg`,
    overlay: "", // No overlay for admissions image
    eyebrow: "Academic Year 2026–27",
    title: "Admissions 2026",
    tagline: "Start Your Journey",
    buttons: [
      { label: "Apply Now", href: "https://admission.mits.ac.in/", style: "primary", external: true },
      { label: "Prospectus", href: "#admissions", style: "outline" },
    ],
    align: "right",
  },
  // 3 — Placements
  {
    id: "placements",
    image: `${BASE}Hero-Section/placements.png`,
    overlay: "", // No overlay for placements image
    eyebrow: "Career Success",
    title: "Placements",
    tagline: "Industry Ready Graduates",
    highlight: "Top Recruiters  •  Strong Outcomes",
    buttons: [
      { label: "View Placements", href: "/placements", style: "primary" },
    ],
    align: "right",
  },
  // 4 — Credentials
  {
    id: "credentials",
    image: `${BASE}Hero-Section/image%205.JPG`,
    overlay: "bg-[linear-gradient(180deg,rgba(7,21,37,0.80)_0%,rgba(7,21,37,0.70)_100%)]",
    eyebrow: "Excellence Since 1998",
    title: "Legacy of Achievements",
    tagline: "Shaping Tomorrow's Leaders Today",
    buttons: [],
    align: "center",
    showCredentials: true,
  },
  // 5 — Campus Life
  {
    id: "campus",
    image: `${BASE}Hero-Section/image%206.jpg`,
    overlay: "bg-[linear-gradient(160deg,rgba(7,21,37,0.78)_0%,rgba(15,42,68,0.55)_100%)]",
    eyebrow: "Life at MITS",
    title: "Campus Life",
    tagline: "Vibrant  •  Dynamic  •  Inspiring",
    buttons: [
      { label: "Explore Campus", href: "/campus-life", style: "outline" },
    ],
    align: "center",
  },
];

const credentials = [
  { label: "NAAC A+",             gold: true  },
  { label: "UGC Recognized",      gold: false },
  { label: "NIRF 201–300",        gold: true  },
  { label: "4,401+ Scholarships",  gold: false },
  { label: "9,599+ Internships",  gold: true  },
  { label: "600+ International",    gold: false },
  { label: "144+ MoUs",            gold: true  },
];

// ── Text animation variants ───────────────────────────────────────────────────
const textVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
  exit:   { opacity: 0, y: -16 },
};

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [dir,     setDir]     = useState(1);

  const go = useCallback((next: number) => {
    setDir(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  const prev = () => go((current - 1 + slides.length) % slides.length);
  const next = useCallback(() => go((current + 1) % slides.length), [current, go]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  const contentAlign =
    slide.align === "left"  ? "items-start text-left"  :
    slide.align === "right" ? "items-end   text-right" :
                              "items-center text-center";

  return (
    <section
      className="relative h-screen min-h-[500px] max-h-[650px] overflow-hidden mt-[80px]"
    >

      {/* ── Background images (static for admissions/placements) ── */}
      {slides.map((s, i) => (
        <motion.div
          key={s.id}
          className="absolute inset-0"
          style={{ zIndex: i === current ? 1 : 0 }}
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          <motion.img
            src={s.image}
            alt={s.id}
            className={`w-full h-full object-cover ${
              s.id === "admissions" ? "object-top" // Show more of the top part of the image
                : s.id === "placements" ? "object-[center_top_-20px]" // Move placements image up
                : "" // Normal center positioning for other slides
            }`}
            initial={false}
            animate={{ 
              scale: (s.id === "admissions" || s.id === "placements") ? 1 : (i === current ? 1.06 : 1)
            }}
            transition={{ duration: 7, ease: "easeOut" }}
          />
          {s.overlay && <div className={`absolute inset-0 ${s.overlay}`} />}
        </motion.div>
      ))}

      {/* ── Progress bar ── */}
      <div className="absolute top-0 left-0 right-0 z-30 h-[3px] bg-white/10">
        <motion.div
          key={current}
          className="h-full bg-[#caa74d]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="absolute inset-0 z-10 flex flex-col">
        <div className={`flex-1 flex flex-col justify-center ${
          slide.id === "admissions" || slide.id === "placements" 
            ? "px-2 sm:px-4" // Reduced padding for admissions/placements on smaller screens
            : "px-4 sm:px-8 md:px-16 lg:px-24" // Responsive padding for other slides
        } ${contentAlign}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={`flex flex-col ${contentAlign} ${
                slide.id === "admissions" || slide.id === "placements"
                  ? "absolute right-0 top-1/2 -translate-y-1/2 w-full sm:w-[40%] md:w-[35%] pr-4 sm:pr-6 md:pr-12 text-right items-end" // Responsive width for admissions/placements
                  : slide.align === "right" ? "max-w-2xl md:max-w-3xl ml-auto" : slide.align === "left" ? "max-w-2xl md:max-w-3xl" : "max-w-2xl md:max-w-3xl mx-auto" // Responsive max-width
              }`}
            >
              {/* Eyebrow */}
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="font-body font-semibold text-[#caa74d] tracking-[0.22em] uppercase text-xs md:text-sm mb-4"
              >
                {slide.eyebrow}
              </motion.p>

              {/* Title */}
              <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ duration: 0.3 }}
                className={`font-display font-bold text-white leading-[1.05] ${
                  slide.id === "placements" ? "mb-2 text-7xl md:text-8xl" : "mb-4"
                }`}
                style={slide.id === "placements" ? {} : { fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
              >
                {slide.title}
              </motion.h1>

              {/* Tagline */}
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="font-body text-white/80 text-lg md:text-2xl font-light mb-3 tracking-wide"
              >
                {slide.tagline}
              </motion.p>

              {/* Optional highlight */}
              {"highlight" in slide && slide.highlight && (
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="font-body text-[#caa74d] text-lg md:text-2xl font-bold tracking-wider max-w-3xl mx-auto text-center"
                >
                  {slide.highlight}
                </motion.p>
              )}

              {/* Optional sub-highlight */}
              {"subHighlight" in slide && slide.subHighlight && (
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="font-body text-white/80 text-sm md:text-lg font-medium tracking-wider mt-3 mb-6 text-center"
                >
                  {slide.subHighlight}
                </motion.p>
              )}

              {/* Buttons */}
              {slide.buttons.length > 0 && (
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className={`flex flex-wrap gap-3 mt-6 ${slide.align === "center" ? "justify-center" : slide.align === "right" ? "justify-end" : "justify-start"}`}
                >
                  {slide.buttons.map((btn) => {
                    const isAdmissions = slide.id === "admissions";
                    const cls = btn.style === "primary"
                      ? isAdmissions
                        ? "bg-[#caa74d] hover:bg-[#ddb85e] text-white border-2 border-[#caa74d] hover:border-[#ddb85e] shadow-[0_4px_24px_rgba(202,167,77,0.4)] hover:shadow-[0_6px_32px_rgba(202,167,77,0.55)]"
                        : "bg-[#b30000] hover:bg-[#d40000] text-white border-2 border-[#b30000] hover:border-[#d40000] shadow-[0_4px_24px_rgba(179,0,0,0.4)] hover:shadow-[0_6px_32px_rgba(179,0,0,0.55)]"
                      : "bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white backdrop-blur-sm";
                    const inner = (
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className={`${cls} font-body font-bold px-8 py-3 rounded-full text-sm md:text-base transition-all duration-250`}
                      >
                        {btn.label}
                      </motion.button>
                    );
                    return btn.external
                      ? <a key={btn.label} href={btn.href} target="_blank" rel="noreferrer">{inner}</a>
                      : btn.href.startsWith("#")
                        ? <a key={btn.label} href={btn.href}>{inner}</a>
                        : <Link key={btn.label} to={btn.href}>{inner}</Link>;
                  })}
                </motion.div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Logos for identity slide - positioned next to text */}
          {slide.id === "identity" && (
            <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 md:px-16 pointer-events-none">
              <div className="pointer-events-auto ml-2 sm:ml-4 md:ml-12 lg:ml-20">
                {"leftLogo" in slide && slide.leftLogo && (
                  <motion.img
                    src={slide.leftLogo}
                    alt="MITS Logo"
                    className="h-20 sm:h-28 md:h-36 lg:h-48 w-auto object-contain"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
              <div className="pointer-events-auto mr-2 sm:mr-4 md:mr-8 lg:mr-12">
                {"rightLogo" in slide && slide.rightLogo && (
                  <motion.img
                    src={slide.rightLogo}
                    alt="ESTD Logo"
                    className="h-20 sm:h-28 md:h-36 lg:h-48 w-auto object-contain"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* ── Credential bar (slide 4 only) ── */}
        <AnimatePresence>
          {slide.showCredentials && (
            <motion.div
              key="cred-bar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mx-3 sm:mx-6 md:mx-16 mb-12 md:mb-20"
            >
              <div
                className="rounded-2xl border border-white/15 px-3 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 gap-y-2 sm:gap-y-3 overflow-x-auto"
                style={{ background: "rgba(7,21,37,0.65)", backdropFilter: "blur(14px)" }}
              >
                {credentials.map((c, i) => (
                  <div key={c.label} className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className={`font-body font-bold text-xs sm:text-sm md:text-base whitespace-nowrap ${c.gold ? "text-[#caa74d]" : "text-white"}`}>
                      {c.label}
                    </span>
                    {i < credentials.length - 1 && (
                      <span className="w-px h-3 sm:h-4 bg-white/20 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Bottom controls ── */}
        <div className="relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-16 pb-4 sm:pb-6 md:pb-8">

          {/* Dot indicators */}
          <div className="flex items-center gap-2 mx-auto">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-400 ${
                  i === current
                    ? "w-8 h-2 bg-[#caa74d]"
                    : "w-2 h-2 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Scroll down */}
          <a href="#about" aria-label="Scroll down" className="text-white/50 hover:text-[#caa74d] transition-colors hidden md:block">
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20
          w-10 h-10 md:w-12 md:h-12 rounded-full
          bg-black/30 hover:bg-[#b30000] border border-white/20 hover:border-[#b30000]
          text-white backdrop-blur-sm
          flex items-center justify-center
          transition-all duration-250 hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20
          w-10 h-10 md:w-12 md:h-12 rounded-full
          bg-black/30 hover:bg-[#b30000] border border-white/20 hover:border-[#b30000]
          text-white backdrop-blur-sm
          flex items-center justify-center
          transition-all duration-250 hover:scale-110"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

    </section>
  );
};

export default HeroSection;
