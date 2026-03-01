import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "B.Tech CSE, 2024",
    type: "Student",
    text: "MITS provided me with the perfect platform to grow both academically and personally. The faculty support and industry exposure helped me land my dream job at a top MNC.",
  },
  {
    name: "Rahul Reddy",
    role: "Senior Engineer, Global Semiconductor Company",
    type: "Alumnus",
    text: "The research ecosystem at MITS built my problem-solving mindset. Faculty mentorship and technical depth gave me a strong foundation for my professional journey.",
  },
  {
    name: "Ananya Patel",
    role: "MBA, 2024",
    type: "Student",
    text: "The MBA program at MITS is truly transformative. The case-study approach and industry visits gave me practical insights that textbooks alone could never provide.",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Student Voices</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Testimonials</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border min-h-[260px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[active].name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                  className="w-full"
                >
                  <Quote className="w-8 h-8 text-secondary mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic text-lg">"{testimonials[active].text}"</p>
                  <div>
                    <p className="font-display font-semibold text-card-foreground text-xl">{testimonials[active].name}</p>
                    <p className="text-muted-foreground text-sm">{testimonials[active].type} • {testimonials[active].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${active === i ? "w-8 bg-secondary" : "w-2.5 bg-primary/25"}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
