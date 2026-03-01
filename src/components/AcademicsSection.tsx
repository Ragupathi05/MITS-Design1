import { GraduationCap, BookOpen, FlaskConical, Handshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const programs = [
  {
    icon: GraduationCap,
    title: "Undergraduate",
    description: "Comprehensive B.Tech pathways with outcome-based curriculum, innovation labs, and strong academic mentoring.",
    courses: ["Computer Science", "Electronics", "Mechanical", "Civil Engineering"],
  },
  {
    icon: BookOpen,
    title: "Postgraduate",
    description: "Advanced M.Tech, MBA, and interdisciplinary programs focused on specialization and professional excellence.",
    courses: ["M.Tech CSE", "M.Tech VLSI", "MBA", "MCA"],
  },
  {
    icon: FlaskConical,
    title: "PhD & Research",
    description: "Doctoral and sponsored research opportunities with modern laboratories and faculty-led research groups.",
    courses: ["Ph.D. in Engineering", "Ph.D. in Sciences", "Ph.D. in Management"],
  },
  {
    icon: Handshake,
    title: "Industry Collaboration",
    description: "Structured academic-industry engagement through internships, live projects, skilling tracks, and MoUs.",
    courses: ["Internships", "Live Projects", "Corporate Training", "Innovation Partnerships"],
  },
];

const AcademicsSection = () => {
  return (
    <section id="academics" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Academics</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Programs That Shape Leaders
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from a wide range of accredited programs designed to prepare you for a successful career.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <ScrollReveal key={prog.title} delay={i * 0.15}>
              <div className="bg-card rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-secondary/35 hover:border-secondary group h-full cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:bg-secondary transition-all duration-300">
                  <prog.icon className="w-7 h-7 text-primary-foreground group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">{prog.title}</h3>
                <p className="text-muted-foreground mb-5 group-hover:text-foreground/80 transition-colors">{prog.description}</p>
                <ul className="space-y-2">
                  {prog.courses.map((c) => (
                    <li key={c} className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-primary group-hover:scale-150 transition-all" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
