
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  IconCSE, IconAIDS, IconAIML, IconRobotics, IconBioinfo,
  IconECE, IconEEE, IconCivil, IconMech, IconBBA, IconBCA,
  IconVLSI, IconCEM, IconAutoRobot, IconEVTech, IconCSEPG,
  IconMBA, IconMCA
} from "@/components/icons/ProgramIcons";

type Program = { name: string; icon: React.ElementType };

const ugPrograms: Program[] = [
  { name: "B.Tech - CSE", icon: IconCSE },
  { name: "B.Tech - CSE (AI & DS)", icon: IconAIDS },
  { name: "B.Tech - CSE (AI and ML)", icon: IconAIML },
  { name: "B.Tech - CSE (AI and Robotics)", icon: IconRobotics },
  { name: "B.Tech - Bioinformatics", icon: IconBioinfo },
  { name: "B.Tech - ECE", icon: IconECE },
  { name: "B.Tech - EEE", icon: IconEEE },
  { name: "B.Tech - CIVIL", icon: IconCivil },
  { name: "B.Tech - MECH", icon: IconMech },
  { name: "BBA", icon: IconBBA },
  { name: "BCA", icon: IconBCA },
];

const pgPrograms: Program[] = [
  { name: "M.Tech - ECE (VLSI & ES)", icon: IconVLSI },
  { name: "M.Tech - CIVIL (CEM)", icon: IconCEM },
  { name: "M.Tech - MECH (Automation and Robotics)", icon: IconAutoRobot },
  { name: "M.Tech - EEE (EV Tech)", icon: IconEVTech },
  { name: "M.Tech - CSE", icon: IconCSEPG },
  { name: "M.Tech - CSE (AI and ML)", icon: IconAIML },
  { name: "MBA", icon: IconMBA },
  { name: "MCA", icon: IconMCA },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: "easeOut" as const },
  }),
};

const ProgramCard = ({ program, index }: { program: Program; index: number }) => {
  const Icon = program.icon;
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={cardVariants}
      className="group cursor-pointer"
    >
      <div className="flex items-center gap-4 bg-card rounded-md p-3.5 pr-5 shadow-sm
        border border-transparent
        transition-all duration-300
        hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20"
      >
        {/* Icon Box */}
        <div className="flex-shrink-0 w-[62px] h-[62px] rounded border-2 border-primary/50
          bg-primary/[0.03] flex items-center justify-center
          transition-all duration-300
          group-hover:border-primary group-hover:bg-primary/[0.07] group-hover:scale-105"
        >
          <Icon className="w-9 h-9 text-primary transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-[15px] text-foreground leading-snug mb-1">
            {program.name}
          </h4>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground
            transition-colors duration-300 group-hover:text-primary"
          >
            View More
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProgramGrid = ({ title, programs }: { title: string; programs: Program[] }) => (
  <div className="mb-14 last:mb-0">
    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
      {title.split("Offered")[0]}
      <span className="text-primary">Offered</span>
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {programs.map((program, i) => (
        <ProgramCard key={program.name} program={program} index={i} />
      ))}
    </div>
  </div>
);

const AcademicsSection = () => (
  <section id="academics" className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Programmes <span className="text-primary">Offered</span>
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
