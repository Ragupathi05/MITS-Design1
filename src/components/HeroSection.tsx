import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import campusHero from "@/assets/campus-hero.png";
import campusLibrary from "@/assets/campus-library.png";
import campusGraduation from "@/assets/campus-graduation.png";

const slides = [
  {
    image: campusHero,
    alt: "MITS Campus Aerial View",
    headline: "MITS: Academic Excellence, Research, and Institutional Leadership",
    sub: "Madanapalle Institute of Technology & Science advances rigorous education, credible research output, and outcome-based learning for national and global impact.",
  },
  {
    image: campusLibrary,
    alt: "MITS Library",
    headline: "World-Class Learning Resources & Infrastructure",
    sub: "State-of-the-art labs, digital libraries, and modern classrooms designed to fuel curiosity and discovery.",
  },
  {
    image: campusGraduation,
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
      {/* Background carousel - all images stacked, opacity-driven for no flash */}
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
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.88),rgba(11,31,58,0.62))]" />
        </motion.div>
      ))}

      <div className="absolute inset-y-0 right-3 md:right-6 z-20 hidden md:flex items-center">
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="w-11 h-11 rounded-full border border-primary-foreground/20 bg-primary/30 backdrop-blur-sm text-primary-foreground hover:bg-primary/50 hover:border-secondary/60 transition-all duration-200 flex items-center justify-center"
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
              <p className="text-secondary font-body font-semibold tracking-[0.16em] uppercase text-xs md:text-sm mb-3 md:mb-4">
                Madanapalle Institute of Technology & Science
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 leading-[1.02] max-w-5xl mx-auto text-balance">
                {slide.headline}
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-secondary text-sm md:text-base max-w-3xl mx-auto mb-2 md:mb-3 font-semibold"
              >
                NAAC A+ Accredited | UGC Recognized | AICTE Approved
              </motion.p>
              <p className="text-primary-foreground/90 text-base md:text-lg max-w-3xl mx-auto mb-2 font-body">
                {slide.sub}
              </p>
              <p className="text-primary-foreground/80 text-sm md:text-base max-w-2xl mx-auto mb-6 md:mb-7 font-medium">
                NBA Accredited Programs | NIRF Participating Institution
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/admissions">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-gold-light font-semibold px-6 py-2.5 text-sm transition-all duration-200">
                    Apply Now
                  </Button>
                </Link>
                <a href="#academics">
                  <Button variant="outline" className="border-secondary text-secondary bg-secondary/10 hover:bg-secondary hover:text-secondary-foreground font-semibold px-6 py-2.5 text-sm transition-all duration-200">
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
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-secondary ${
                i === current ? "bg-secondary w-8" : "bg-primary-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center pb-2 md:pb-4">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="text-primary-foreground/75 hover:text-secondary transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
