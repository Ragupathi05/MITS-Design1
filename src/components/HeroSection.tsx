import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import campusHero from "@/assets/campus-hero.png";
import campusLibrary from "@/assets/campus-library.png";
import campusGraduation from "@/assets/campus-graduation.png";

const slides = [
  {
    image: campusHero,
    alt: "MITS Campus Aerial View",
    headline: "Welcome to MITS – Excellence in Education & Innovation",
    sub: "A premier institution with NAAC A+ accreditation, blending academic rigor, research excellence, and value-driven learning.",
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
  const [authorityIndex, setAuthorityIndex] = useState(0);

  const authorityLines = [
    "NAAC A+ Accredited | UGC Recognized | 25+ Years of Excellence",
    "Outcome-Based Education | Research Excellence | Strong Industry Connect",
  ];

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  useEffect(() => {
    const timer = setInterval(() => {
      setAuthorityIndex((prev) => (prev + 1) % authorityLines.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [authorityLines.length]);

  const slide = slides[current];

  return (
    <section
      className="relative h-[78vh] md:h-[84vh] min-h-[560px] flex items-center justify-center overflow-hidden pt-16 md:pt-24"
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
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.82),rgba(11,31,58,0.58))]" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="text-secondary font-body font-semibold tracking-[0.16em] uppercase text-xs md:text-sm mb-4">
                Madanapalle Institute of Technology & Science
              </p>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-tight max-w-4xl mx-auto">
                {slide.headline}
              </h1>
              <AnimatePresence mode="wait">
                <motion.p
                  key={authorityIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45 }}
                  className="text-secondary text-sm md:text-base max-w-2xl mx-auto mb-3 font-semibold"
                >
                  {authorityLines[authorityIndex]}
                </motion.p>
              </AnimatePresence>
              <p className="text-primary-foreground/90 text-base md:text-lg max-w-3xl mx-auto mb-2 font-body">
                {slide.sub}
              </p>
              <p className="text-primary-foreground/80 text-sm md:text-base max-w-2xl mx-auto mb-8 font-medium">
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
            className="text-primary-foreground/75 hover:text-secondary transition-colors animate-bounce"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
