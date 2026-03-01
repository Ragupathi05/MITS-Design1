import { FlaskConical, Handshake, Lightbulb, FileText } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const highlights = [
  {
    icon: FlaskConical,
    title: "Research Labs",
    description: "Domain-focused laboratories supporting engineering, applied sciences, and interdisciplinary problem solving.",
  },
  {
    icon: Handshake,
    title: "Industry Collaborations",
    description: "Strategic partnerships and MoUs enabling internships, sponsored projects, and industry mentoring.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Centers",
    description: "Innovation and incubation ecosystem that supports student ventures, prototypes, and entrepreneurial initiatives.",
  },
  {
    icon: FileText,
    title: "Publications",
    description: "Consistent research output in journals and conferences, guided by experienced faculty and research groups.",
  },
];

const ResearchInnovationSection = () => {
  return (
    <section className="py-20 bg-background" id="research-innovation">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Research & Innovation</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advancing Knowledge Through Innovation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              MITS cultivates an academic research culture through advanced labs, collaborative projects, and innovation-led outcomes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInnovationSection;
