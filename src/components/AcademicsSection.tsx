
import { motion } from "framer-motion";
import {
  Cpu, Cog, CircuitBoard, HardHat, GraduationCap, Monitor,
  BrainCircuit, Bot, Dna, Zap, ArrowRight, BarChart3
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

type Program = { name: string; icon: React.ElementType };

const ugPrograms: Program[] = [
  { name: "B.Tech – CSE", icon: Monitor },
  { name: "B.Tech – CSE (AI & DS)", icon: BrainCircuit },
  { name: "B.Tech – CSE (AI and ML)", icon: Cpu },
  { name: "B.Tech – CSE (AI and Robotics)", icon: Bot },
  { name: "B.Tech – Bioinformatics", icon: Dna },
  { name: "B.Tech – ECE", icon: CircuitBoard },
  { name: "B.Tech – EEE", icon: Zap },
  { name: "B.Tech – CIVIL", icon: HardHat },
  { name: "B.Tech – MECH", icon: Cog },
  { name: "BBA", icon: BarChart3 },
  { name: "BCA", icon: Monitor },
];

const pgPrograms: Program[] = [
  { name: "M.Tech – ECE (VLSI & ES)", icon: CircuitBoard },
  { name: "M.Tech – CIVIL (CEM)", icon: HardHat },
  { name: "M.Tech – MECH (Automation and Robotics)", icon: Bot },
  { name: "M.Tech – EEE (EV Tech)", icon: Zap },
  { name: "M.Tech – CSE", icon: Monitor },
  { name: "M.Tech – CSE (AI and ML)", icon: BrainCircuit },
  { name: "MBA", icon: GraduationCap },
  { name: "MCA", icon: Monitor },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ProgramCard = ({ program, index }: { program: Program; index: number }) => {
  const Icon = program.icon;
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariants}
      className="group cursor-pointer"
    >
      <div className="flex items-center gap-5 bg-card border border-border rounded-lg p-4 pr-6
        transition-all duration-300
        hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.02]"
      >
        {/* Icon Box */}
        <div className="flex-shrink-0 w-16 h-16 rounded-md border border-border bg-muted/50
          flex items-center justify-center
          transition-all duration-300
          group-hover:border-primary/40 group-hover:bg-secondary/5 group-hover:scale-105"
        >
          <Icon className="w-7 h-7 text-secondary transition-colors duration-300 group-hover:text-primary" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h4 className="font-display text-base font-semibold text-foreground leading-snug truncate">
            {program.name}
          </h4>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-primary/70 mt-1.5
            transition-colors duration-300 group-hover:text-primary"
          >
            View More
            <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProgramGrid = ({ title, programs }: { title: string; programs: Program[] }) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-3 mb-8">
      <div className="w-1 h-8 rounded-full bg-primary" />
      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {programs.map((program, i) => (
        <ProgramCard key={program.name} program={program} index={i} />
      ))}
    </div>
  </div>
);

const AcademicsSection = () => (
  <section id="academics" className="py-24 bg-muted/40">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Academics</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Programmes Offered
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our AICTE-approved, outcome-based programmes designed to shape future-ready professionals.
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto">
        <ProgramGrid title="UG Programmes Offered" programs={ugPrograms} />
        <ProgramGrid title="PG Programmes Offered" programs={pgPrograms} />
      </div>
    </div>
  </section>
);

export default AcademicsSection;
