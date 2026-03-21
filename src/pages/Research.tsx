import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, FlaskConical, Handshake, Lightbulb, Microscope, FileText, Award, Building2 } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const researchCenters = [
  { icon: FlaskConical, title: "Advanced Materials Research", desc: "Research on nano-materials, composites, and sustainable engineering materials." },
  { icon: Microscope, title: "Signal Processing & VLSI", desc: "Advanced research in signal processing, embedded systems, and VLSI design." },
  { icon: Lightbulb, title: "AI & Machine Learning Lab", desc: "Deep learning, NLP, computer vision, and data science research." },
  { icon: Building2, title: "Renewable Energy Center", desc: "Solar energy, wind power, and sustainable energy systems research." },
];

const stats = [
  { value: "500+", label: "Research Publications" },
  { value: "50+", label: "Funded Projects" },
  { value: "25+", label: "Patents Filed" },
  { value: "30+", label: "Industry Collaborations" },
];

const collaborations = [
  "International academic exchange programs with universities worldwide",
  "Industry-sponsored research projects with leading corporations",
  "MoUs with national laboratories and research institutions",
  "Collaborative PhD programs with partner universities",
  "Joint publications and conference presentations",
];

const Research = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section
          className="relative pt-32 md:pt-40 pb-20 overflow-hidden"
          style={{
            backgroundImage: `url(${BASE}Hero-Section/image%203.JPG)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/75" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Research</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">Research & Innovation</h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              MITS fosters a vibrant research ecosystem through advanced labs, funded projects, and industry collaborations.
            </p>
          </div>
          <div className="absolute bottom-4 left-6 z-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm">
                <li><a href="/" className="text-white/70 hover:text-white transition-colors">Home</a></li>
                <li className="text-white/50">/</li>
                <li className="text-white font-semibold">Research</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl font-bold text-accent">{stat.value}</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Centers of Excellence</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Research Centers</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {researchCenters.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <item.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ScrollReveal direction="left">
                <div className="bg-card border border-border rounded-xl p-8 shadow-sm h-full">
                  <FileText className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">Research Publications</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    MITS faculty and scholars publish consistently in reputed journals including IEEE, Elsevier, Springer, and Taylor & Francis. Over 500 publications in the last five years demonstrate the institution's commitment to advancing knowledge.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="bg-card border border-border rounded-xl p-8 shadow-sm h-full">
                  <Award className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">Patents & Projects</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Innovation at MITS has resulted in 25+ patents filed across domains including IoT, AI, materials science, and renewable energy. Funded projects from DST, AICTE, and industry partners drive applied research outcomes.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <Handshake className="w-10 h-10 text-primary mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Industry Collaborations</h2>
              </div>
            </ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-3">
              {collaborations.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 shadow-sm">
                    <BookOpen className="w-5 h-5 text-accent shrink-0" />
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
