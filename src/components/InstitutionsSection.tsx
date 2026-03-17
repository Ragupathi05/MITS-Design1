import { Building2, GraduationCap, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";

const institutions = [
  {
    icon: Building2,
    title: "MITS Deemed to be University",
    description:
      "MITS Deemed to be University advances multidisciplinary education with a strong focus on research outcomes, international partnerships, and governance aligned to national quality standards. Our programs are designed to cultivate critical thinking, innovation, and leadership in every graduate.",
    points: ["Research-driven programs", "Global collaborations", "Outcome-based academic regulations"],
    badges: ["NAAC A+", "UGC Recognized", "NIRF Participating"],
    accentColor: "bg-[#b30000]",
    iconColor: "text-white",
    borderAccent: "border-[#b30000]/30",
    barColor: "bg-[#b30000]",
  },
  {
    icon: GraduationCap,
    title: "MITS Autonomous Institute",
    description:
      "MITS Autonomous Institute delivers a rigorous, industry-oriented academic model with curriculum flexibility, contemporary pedagogy, and consistent student outcomes. Students benefit from hands-on learning, strong industry ties, and a culture of continuous improvement.",
    points: ["Industry-oriented curriculum", "Strong placements", "Continuous academic quality assurance"],
    badges: ["AICTE Approved", "NBA Accredited", "Autonomous Status"],
    accentColor: "bg-[#0f2a44]",
    iconColor: "text-white",
    borderAccent: "border-[#0f2a44]/30",
    barColor: "bg-[#caa74d]",
  },
];

const InstitutionsSection = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="institutions-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[#b30000] font-body font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-3">
              Our Institutions
            </p>
            <h2
              id="institutions-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4 leading-tight"
            >
              Two Pathways, One Vision
            </h2>
            <p className="font-body text-[#1a1a1a] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Two academic pathways, one shared commitment to excellence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {institutions.map((inst, i) => (
            <ScrollReveal key={inst.title} delay={i * 0.2} direction={i === 0 ? "left" : "right"}>
              <div
                className={`bg-white border-2 ${inst.borderAccent} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group h-full cursor-pointer`}
              >
                {/* Top accent bar */}
                <div className={`w-12 h-1 rounded-full ${inst.barColor} mb-6`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${inst.accentColor} flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                  <inst.icon className={`w-6 h-6 ${inst.iconColor}`} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-[#0f172a] mb-4 leading-snug">
                  {inst.title}
                </h3>

                {/* Description — improved readability */}
                <p className="font-body text-[#1a1a1a] text-base md:text-[1.05rem] leading-[1.8] mb-6 max-w-prose">
                  {inst.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {inst.badges.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="border-[#b30000]/40 text-[#0f172a] font-body font-medium text-xs px-3 py-1 rounded-full"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>

                {/* Points */}
                <ul className="space-y-2 mb-7" aria-label={`Key features of ${inst.title}`}>
                  {inst.points.map((point) => (
                    <li key={point} className="font-body text-[#1a1a1a] text-sm md:text-base flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#caa74d] flex-shrink-0" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#0f2a44] text-[#0f2a44] hover:bg-[#0f2a44] hover:text-white font-body font-semibold transition-all duration-200 rounded-full px-5"
                >
                  Enter Portal <ArrowUpRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionsSection;
