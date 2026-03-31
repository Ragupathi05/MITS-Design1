import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
const BASE = import.meta.env.BASE_URL;

interface Slide {
  id: string;
  video?: string;
  image: string;
  overlay: string;
  eyebrow: string;
  title: string;
  tagline: string;
  highlight?: string;
  subHighlight?: string;
  leftLogo?: string;
  rightLogo?: string;
  buttons: Array<{ label: string; href: string; style: string; external?: boolean }>;
  align: string;
  showCredentials?: boolean;
}

const slides: Slide[] = [
  {
    id: "identity",
    video: `${BASE}Hero-Section/MITS%20first-Slide.mp4`,
    image: `${BASE}Hero-Section/image%201.JPG`,
    overlay: "",
    eyebrow: "",
    title: "",
    tagline: "",
    highlight: "",
    subHighlight: "",
    leftLogo: "",
    rightLogo: "",
    buttons: [
      { label: "Explore", href: "#about", style: "outline" },
      { label: "Apply Now", href: "https://admission.mits.ac.in/", style: "primary", external: true },
    ],
    align: "center",
  },
  {
    id: "admissions",
    image: `${BASE}Hero-Section/admissions.png`,
    overlay: "",
    eyebrow: "",
    title: "",
    tagline: "",
    buttons: [
      { label: "Apply Now", href: "https://admission.mits.ac.in/", style: "primary", external: true },
      { label: "Prospectus", href: "#admissions", style: "outline" },
    ],
    align: "right",
  },
  {
    id: "placements",
    image: `${BASE}Hero-Section/placements2.png`,
    overlay: "",
    eyebrow: "",
    title: "",
    tagline: "",
    highlight: "",
    buttons: [
      { label: "View Placements", href: "/placements", style: "primary" },
    ],
    align: "right",
  },
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
  {
    id: "campus",
    video: `${BASE}Hero-Section/campuse.mp4`,
    image: `${BASE}Hero-Section/image%206.jpg`,
    overlay: "",
    eyebrow: "Life at MITS",
    title: "Campus Life",
    tagline: "Vibrant  •  Dynamic  •  Inspiring",
    buttons: [{ label: "Explore Campus", href: "/campus-life", style: "outline" }],
    align: "center",
  },
];

const credentials = [
  { label: "NAAC A+",            gold: true  },
  { label: "UGC Recognized",     gold: false },
  { label: "NIRF 201–300",       gold: true  },
  { label: "4,401+ Scholarships", gold: false },
  { label: "9,599+ Internships", gold: true  },
  { label: "600+ International",  gold: false },
  { label: "144+ MoUs",          gold: true  },
];

const textVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
  exit:   { opacity: 0, y: -16 },
};

const HeroSection = () => {
  const [current, setCurrent]           = useState(0);
  const [dir,     setDir]               = useState(1);
  const [campusShrunk, setCampusShrunk] = useState(false);
  const [isVisible, setIsVisible]       = useState(true);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const go = useCallback((next: number) => {
    setDir(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  const prev = () => go((current - 1 + slides.length) % slides.length);
  const next = useCallback(() => go((current + 1) % slides.length), [current, go]);

  // IntersectionObserver
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Play/pause video on visibility and move to next slide when scrolled down
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const currentSlide = slides[current];
    if (!currentSlide.video) return;
    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
      // Move to next slide when user scrolls down
      next();
    }
  }, [isVisible, current, next]);

  // Reset + restart when campus becomes active
  useEffect(() => {
    if (slides[current].id === "campus") {
      setCampusShrunk(false);
      const video = videoRef.current;
      if (video) { video.currentTime = 0; video.play().catch(() => {}); }
    }
    // Also play video for identity slide
    if (slides[current].id === "identity") {
      const video = videoRef.current;
      if (video) { video.currentTime = 0; video.play().catch(() => {}); }
    }
    // Reset campusShrunk when navigating away from campus slide
    if (slides[current].id !== "campus") {
      setCampusShrunk(false);
    }
  }, [current]);

  // Slide timer / video-end
  useEffect(() => {
    const currentSlide = slides[current];
    if (currentSlide.video) {
      const video = videoRef.current;
      if (!video) return;
      let shrinkTimer: ReturnType<typeof setTimeout> | null = null;
      if (!campusShrunk) {
        shrinkTimer = setTimeout(() => setCampusShrunk(true), 5500);
      }
      let fallbackTimer: ReturnType<typeof setTimeout> | null = null;
      if (!isVisible) {
        fallbackTimer = setTimeout(() => next(), 5000);
      }
      const onEnded = () => { if (isVisible) next(); };
      video.addEventListener("ended", onEnded);
      return () => {
        if (shrinkTimer) clearTimeout(shrinkTimer);
        if (fallbackTimer) clearTimeout(fallbackTimer);
        video.removeEventListener("ended", onEnded);
      };
    }
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, current, isVisible, campusShrunk]);

  const slide = slides[current];
  const contentAlign =
    slide.align === "left"  ? "items-start text-left"  :
    slide.align === "right" ? "items-end   text-right" :
                              "items-center text-center";

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        height: "clamp(220px, 50vw, 90vh)",
        width: "100%",
      }}
    >
      {/* Backgrounds */}
      {slides.map((s, i) => (
        <motion.div
          key={s.id}
          className="absolute inset-0"
          style={{ zIndex: i === current ? 1 : 0 }}
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          {s.video ? (
            <video
              ref={i === current ? videoRef : undefined}
              autoPlay loop={false} muted playsInline
              className="w-full h-full"
              style={{
                objectFit: "cover",
                objectPosition: "center center",
                filter: "contrast(1.08) brightness(1.05) saturate(1.1)",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                width: "100%",
                height: "100%",
              }}
              src={s.video}
            />
          ) : (
            <motion.img
              src={s.image} alt={s.id}
              className="w-full h-full"
              style={{
                objectFit: "cover",
                objectPosition: s.id === "admissions" ? "center 30%" : s.id === "placements" ? "center 20%" : "center center",
              }}
              initial={false}
              animate={{ scale: (s.id === "admissions" || s.id === "placements") ? 1 : (i === current ? 1.04 : 1) }}
              transition={{ duration: 7, ease: "easeOut" }}
            />
          )}
          {/* Campus: solid black shade that fades out when title moves */}
          {s.id === "campus" ? (
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: campusShrunk ? 0 : 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              style={{ background: "rgba(0,0,0,0.72)" }}
            />
          ) : s.overlay ? (
            <div className={`absolute inset-0 ${s.overlay}`} />
          ) : null}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="absolute inset-0 z-10 flex flex-col">
        <div className={`flex-1 flex flex-col justify-center ${
          slide.id === "admissions" || slide.id === "placements"
            ? "px-2 sm:px-4"
            : "px-4 sm:px-8 md:px-16 lg:px-24"
        } ${contentAlign}`}>

          {/* ── Campus slide: all stacked together, title animates out ── */}
          {slide.id === "campus" && (
            <div className="flex flex-col items-center text-center">
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: campusShrunk ? 0 : 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="font-body font-semibold text-[#caa74d] tracking-[0.18em] uppercase text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3"
              >
                Life at MITS
              </motion.p>

              {/* Title — moves to bottom-right after 5.5s */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={
                  campusShrunk
                    ? { opacity: 1, y: "22vh", x: "28vw", scale: 0.75 }
                    : { opacity: 1, y: 0, x: 0, scale: 1 }
                }
                transition={
                  campusShrunk
                    ? { duration: 12, ease: [0.25, 0.1, 0.25, 1] }
                    : { duration: 0.4, ease: "easeOut" }
                }
                className="font-display font-bold text-white leading-[1.05] mb-2 sm:mb-3 md:mb-4 origin-center whitespace-nowrap"
                style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}
              >
                Campus Life
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: campusShrunk ? 0 : 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-body text-white/80 text-sm sm:text-base md:text-xl font-light mb-3 tracking-wide"
              >
                Vibrant  •  Dynamic  •  Inspiring
              </motion.p>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: campusShrunk ? 0 : 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Link to="/campus-life">
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                    className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white backdrop-blur-sm font-body font-bold px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base transition-all">
                    Explore Campus
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          )}

          {/* ── Non-campus slides ── */}
          {slide.id !== "campus" && (
            <AnimatePresence mode="wait">
              <div
                key={current}
                className={`flex flex-col ${contentAlign} ${
                  slide.id === "admissions"
                    ? "absolute right-32 top-3/4 -translate-y-[calc(50%+10px)] w-[55%] sm:w-[45%] md:w-[38%] pr-3 sm:pr-6 md:pr-10 text-right items-end"
                    : slide.id === "placements"
                    ? "absolute right-32 top-3/4 -translate-y-[calc(50%+60px)] w-[55%] sm:w-[45%] md:w-[38%] pr-3 sm:pr-6 md:pr-10 text-right items-end"
                    : slide.id === "identity"
                    ? "absolute bottom-8 sm:bottom-10 md:bottom-40 left-1/2 -translate-x-1/2 w-full px-4"
                    : slide.align === "right" 
                    ? "max-w-xl md:max-w-2xl ml-auto"
                    : slide.align === "left"  
                    ? "max-w-xl md:max-w-2xl"
                    : "max-w-xl md:max-w-2xl mx-auto"
                }`}
              >
                <motion.p variants={textVariants} initial="hidden" animate="show" exit="exit" transition={{ duration: 0.3 }}
                  className="font-body font-semibold text-[#caa74d] tracking-[0.18em] uppercase text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4">
                  {slide.eyebrow}
                </motion.p>
                <motion.h1 variants={textVariants} initial="hidden" animate="show" exit="exit" transition={{ duration: 0.3 }}
                  className={`font-display font-bold text-white leading-[1.05] ${slide.id === "placements" ? "mb-1 sm:mb-2" : "mb-2 sm:mb-3 md:mb-4"}`}
                  style={{ fontSize: slide.id === "placements" ? "clamp(2.2rem, 5.5vw, 5rem)" : "clamp(2rem, 6vw, 5.5rem)" }}>
                  {slide.title}
                </motion.h1>
                <motion.p variants={textVariants} initial="hidden" animate="show" exit="exit" transition={{ duration: 0.3 }}
                  className="font-body text-white/80 text-sm sm:text-base md:text-xl font-light mb-2 sm:mb-3 tracking-wide">
                  {slide.tagline}
                </motion.p>
                {"highlight" in slide && slide.highlight && (
                  <motion.p variants={textVariants} initial="hidden" animate="show" exit="exit" transition={{ duration: 0.3 }}
                    className="font-body text-[#caa74d] text-sm sm:text-base md:text-xl font-bold tracking-wider mx-auto text-center">
                    {slide.highlight}
                  </motion.p>
                )}
                {"subHighlight" in slide && slide.subHighlight && (
                  <motion.p variants={textVariants} initial="hidden" animate="show" exit="exit" transition={{ duration: 0.3 }}
                    className="font-body text-white/80 text-xs sm:text-sm md:text-base font-medium tracking-wider mt-2 mb-3 sm:mb-4 text-center">
                    {slide.subHighlight}
                  </motion.p>
                )}
                {slide.buttons.length > 0 && (
                  <motion.div variants={textVariants} initial="hidden" animate="show" exit="exit" transition={{ duration: 0.3 }}
                    className={`flex flex-wrap gap-2 sm:gap-3 ${slide.id === "identity" ? "mt-2 sm:mt-3" : "mt-3 sm:mt-4 md:mt-6"} ${slide.align === "center" ? "justify-center" : slide.align === "right" ? "justify-end" : "justify-start"}`}>
                    {slide.buttons.map((btn) => {
                      const isAdmissions = slide.id === "admissions";
                      const cls = btn.style === "primary"
                        ? isAdmissions
                          ? "bg-[#caa74d] hover:bg-[#ddb85e] text-white border-2 border-[#caa74d] hover:border-[#ddb85e] shadow-[0_4px_24px_rgba(202,167,77,0.4)]"
                          : "bg-[#b30000] hover:bg-[#d40000] text-white border-2 border-[#b30000] hover:border-[#d40000] shadow-[0_4px_24px_rgba(179,0,0,0.4)]"
                        : "bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white backdrop-blur-sm";
                      const inner = (
                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                          className={`${cls} font-body font-bold px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full text-[10px] sm:text-xs md:text-sm lg:text-base transition-all duration-250`}>
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
              </div>
            </AnimatePresence>
          )}

          {/* Logos for identity slide - hidden */}
          {false && slide.id === "identity" && (
            <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-8 md:px-16 pointer-events-none">
              <div className="pointer-events-auto ml-1 sm:ml-4 md:ml-12 lg:ml-20">
                {"leftLogo" in slide && slide.leftLogo && (
                  <motion.img src={slide.leftLogo} alt="MITS Logo"
                    className="h-14 sm:h-24 md:h-32 lg:h-44 w-auto object-contain"
                    initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} />
                )}
              </div>
              <div className="pointer-events-auto mr-1 sm:mr-4 md:mr-8 lg:mr-12">
                {"rightLogo" in slide && slide.rightLogo && (
                  <motion.img src={slide.rightLogo} alt="ESTD Logo"
                    className="h-14 sm:h-24 md:h-32 lg:h-44 w-auto object-contain"
                    initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Credential bar */}
        <AnimatePresence>
          {slide.showCredentials && (
            <motion.div key="cred-bar"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mx-2 sm:mx-6 md:mx-16 mb-4 sm:mb-8 md:mb-14">
              <div className="rounded-xl border border-white/15 px-2 sm:px-4 md:px-6 py-2 sm:py-3 flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 md:gap-x-6 gap-y-1 sm:gap-y-2 overflow-x-auto"
                style={{ background: "rgba(7,21,37,0.65)", backdropFilter: "blur(14px)" }}>
                {credentials.map((c, i) => (
                  <div key={c.label} className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                    <span className={`font-body font-bold text-[9px] sm:text-xs md:text-sm whitespace-nowrap ${c.gold ? "text-[#caa74d]" : "text-white"}`}>
                      {c.label}
                    </span>
                    {i < credentials.length - 1 && <span className="w-px h-3 bg-white/20 shrink-0" />}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom controls */}
        <div className="relative z-20 flex items-center justify-between px-3 sm:px-6 md:px-16 pb-3 sm:pb-4 md:pb-6">
          <div className="flex items-center gap-1.5 sm:gap-2 mx-auto">
            {slides.map((_, i) => (
              <button key={i} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-400 ${
                  i === current ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-[#caa74d]" : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/35 hover:bg-white/60"
                }`} />
            ))}
          </div>
          <a href="#about" aria-label="Scroll down" className="text-white/50 hover:text-[#caa74d] transition-colors hidden md:block">
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button onClick={prev} aria-label="Previous slide"
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-[#b30000] border border-white/20 hover:border-[#b30000] text-white backdrop-blur-sm flex items-center justify-center transition-all duration-250 hover:scale-110">
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button onClick={next} aria-label="Next slide"
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-[#b30000] border border-white/20 hover:border-[#b30000] text-white backdrop-blur-sm flex items-center justify-center transition-all duration-250 hover:scale-110">
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </section>
  );
};

export default HeroSection;
