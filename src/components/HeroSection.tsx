import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const BASE = import.meta.env.BASE_URL;

const slides = [
  {
    image: `${BASE}Hero-Section/image%204.JPG`,
    alt: "MITS Campus Aerial View",
    headline: "MITS: Academic Excellence, Research, and Institutional Leadership",
    sub: "Madanapalle Institute of Technology & Science advances rigorous education, credible research output, and outcome-based learning for national and global impact.",
  },
  {
    image: `${BASE}Hero-Section/image%202.JPG`,
    alt: "MITS Library",
    headline: "World-Class Learning Resources & Infrastructure",
    sub: "State-of-the-art labs, digital libraries, and modern classrooms designed to fuel curiosity and discovery.",
  },
  {
    image: `${BASE}Hero-Section/image%201.JPG`,
    alt: "MITS Graduation Ceremony",
    headline: "Celebrating Success – 25+ Years of Excellence",
    sub: "Join thousands of successful alumni shaping the future across industries worldwide.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = slides[current];

  return (
    <section
      className="relative h-[78vh] md:h-[84vh] min-h-[560px] md:min-h-[680px] flex items-center justify-center overflow-hidden pt-[4.5rem] md:pt-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background carousel */}
      {slides.map((s, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === current ? 1 : 0, scale: i === current ? 1 : 1.08 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ zIndex: i === current ? 1 : 0 }}
        >
          <img src={s.image} alt={s.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.85),rgba(11,31,58,0.55))]" />
        </motion.div>
      ))}

      <div className="absolute inset-y-0 right-3 md:right-6 z-20 hidden md:flex items-center">
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="w-11 h-11 rounded-full border border-white/20 bg-secondary/40 backdrop-blur-sm text-white hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-200 flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pt-4 md:pt-5"
            >
              <p className="text-[#caa74d] font-body font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-3 md:mb-4">
                Madanapalle Institute of Technology & Science
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-5 leading-[1.1] max-w-5xl mx-auto">
                {slide.headline}
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[#caa74d] font-body font-semibold text-sm md:text-base max-w-3xl mx-auto mb-2 md:mb-3"
              >
                NAAC A+ Accredited | UGC Recognized | NBA Accredited
              </motion.p>
              <p className="text-white/90 font-body text-base md:text-lg max-w-3xl mx-auto mb-2 leading-relaxed">
                {slide.sub}
              </p>
              <p className="text-white/75 font-body text-sm md:text-base max-w-2xl mx-auto mb-7 font-medium">
                NIRF Ranking 201–300 | 27+ Years of Excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/admissions">
                  <Button className="bg-accent text-accent-foreground hover:bg-gold-light font-bold px-7 py-2.5 text-sm rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
                    Apply Now
                  </Button>
                </Link>
                <a href="#academics">
                  <Button className="bg-white/15 text-white border-2 border-white/40 hover:bg-white hover:text-secondary font-semibold px-7 py-2.5 text-sm rounded-full backdrop-blur-sm transition-all duration-200">
                    Explore Programs
                  </Button>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 pb-6 md:pb-7">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-accent ${
                i === current ? "bg-accent w-8" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center pb-2 md:pb-4">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="text-white/75 hover:text-accent transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
