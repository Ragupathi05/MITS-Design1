import { Building2, GraduationCap, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";

const institutions = [
  {
    icon: Building2,
    title: "MITS Deemed to be University",
    description: "MITS Deemed to be University advances multidisciplinary education with a strong focus on research outcomes, international partnerships, and governance aligned to national quality standards.",
    points: ["Research-driven programs", "Global collaborations", "Outcome-based academic regulations"],
    badges: ["NAAC A+", "UGC Recognized", "NIRF Participating"],
    accentColor: "bg-primary",
    iconColor: "text-primary-foreground",
  },
  {
    icon: GraduationCap,
    title: "MITS Autonomous Institute",
    description: "MITS Autonomous Institute delivers a rigorous, industry-oriented academic model with curriculum flexibility, contemporary pedagogy, and consistent student outcomes.",
    points: ["Industry-oriented curriculum", "Strong placements", "Continuous academic quality assurance"],
    badges: ["AICTE Approved", "NBA Accredited", "Autonomous Status"],
    accentColor: "bg-secondary",
    iconColor: "text-secondary-foreground",
  },
];

const InstitutionsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Our Institutions</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Institutions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Two academic pathways, one shared commitment to excellence.</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {institutions.map((inst, i) => (
            <ScrollReveal key={inst.title} delay={i * 0.2} direction={i === 0 ? "left" : "right"}>
              <div className="bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full cursor-pointer">
                <div className={`w-10 h-1 rounded-sm ${i === 0 ? 'bg-primary' : 'bg-accent'} mb-4`} />
                <div className={`w-10 h-10 rounded-md ${inst.accentColor} flex items-center justify-center mb-4 transition-all duration-300`}>
                  <inst.icon className={`w-5 h-5 ${inst.iconColor}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-card-foreground mb-2 leading-tight">{inst.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{inst.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {inst.badges.map((item) => (
                    <Badge key={item} variant="outline" className="border-primary/30 rounded-sm text-foreground text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-1.5 mb-5">
                  {inst.points.map((point) => (
                    <li key={point} className="text-muted-foreground text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold transition-all duration-200">
                  Enter Portal <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default InstitutionsSection;
=======
export default InstitutionsSection;
>>>>>>> 0d4056c349f384a67be56b93fddbf97736de7866
