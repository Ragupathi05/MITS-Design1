import { Building2, GraduationCap, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";

const institutions = [
  {
    icon: Building2,
    title: "MITS Deemed to be University",
    description: "A research-oriented institutional ecosystem focused on advanced academics, interdisciplinary inquiry, and global engagement.",
    points: ["Research-driven programs", "Global collaborations"],
    badges: ["NAAC A+", "UGC Recognized", "NIRF Participating"],
    color: "bg-primary",
    iconColor: "text-primary-foreground",
  },
  {
    icon: GraduationCap,
    title: "MITS Autonomous Institute",
    description: "An industry-aligned autonomous institution delivering outcome-based curriculum and consistent placement outcomes.",
    points: ["Industry-oriented curriculum", "Strong placements"],
    badges: ["AICTE Approved", "NBA Accredited", "Autonomous Status"],
    color: "bg-secondary",
    iconColor: "text-secondary-foreground",
  },
];

const InstitutionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Our Institutions</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Institutions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Two academic pathways, one shared commitment to excellence.</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {institutions.map((inst, i) => (
            <ScrollReveal key={inst.title} delay={i * 0.2} direction={i === 0 ? "left" : "right"}>
              <div className="bg-card border border-border rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full cursor-pointer">
                <div className="w-16 h-1 rounded-full bg-secondary mb-6" />
                <div className={`w-14 h-14 rounded-xl ${inst.color} flex items-center justify-center mb-6 transition-all duration-300`}>
                  <inst.icon className={`w-8 h-8 ${inst.iconColor}`} />
                </div>
                <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">{inst.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{inst.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {inst.badges.map((item) => (
                    <Badge key={item} variant="outline" className="border-secondary/50 text-foreground">
                      {item}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-2 mb-8">
                  {inst.points.map((point) => (
                    <li key={point} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-200">
                    Enter Portal <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionsSection;
