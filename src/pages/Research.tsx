import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Microscope, TrendingUp, Users, Award, Zap, Target, BookOpen, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Research = () => {
  const researchAreas = [
    {
      icon: Zap,
      title: "Artificial Intelligence & Machine Learning",
      description: "Developing cutting-edge AI solutions for real-world problems including computer vision, NLP, autonomous systems, and healthcare AI.",
      publications: "65+ Publications",
      funding: "$3.2M",
      highlights: ["Deep Learning", "Computer Vision", "NLP", "Robotics"],
      faculty: 12
    },
    {
      icon: Target,
      title: "Renewable Energy & Sustainability",
      description: "Research in solar energy, wind power, energy storage, sustainable materials, and carbon footprint reduction for a greener future.",
      publications: "48+ Publications",
      funding: "$2.4M",
      highlights: ["Solar Energy", "Wind Power", "Energy Storage", "Green Materials"],
      faculty: 9
    },
    {
      icon: Microscope,
      title: "Biomedical Engineering",
      description: "Innovation in medical devices, tissue engineering, diagnostic systems, and healthcare technology solutions for better patient outcomes.",
      publications: "42+ Publications",
      funding: "$1.9M",
      highlights: ["Medical Devices", "Tissue Engineering", "Diagnostics", "Healthcare IT"],
      faculty: 8
    },
    {
      icon: Users,
      title: "Internet of Things (IoT)",
      description: "Developing smart systems, connected devices, edge computing, and industry 4.0 applications for intelligent automation.",
      publications: "52+ Publications",
      funding: "$1.8M",
      highlights: ["Smart Cities", "Industrial IoT", "Edge Computing", "Wireless Sensor Networks"],
      faculty: 10
    },
    {
      icon: Award,
      title: "Nanotechnology",
      description: "Exploring nanostructured materials for electronics, energy storage, environmental remediation, and medical applications.",
      publications: "38+ Publications",
      funding: "$1.5M",
      highlights: ["Nanomaterials", "Nanoelectronics", "Drug Delivery", "Environmental Applications"],
      faculty: 7
    },
    {
      icon: BookOpen,
      title: "Cybersecurity & Data Privacy",
      description: "Advanced research in securing digital infrastructure, protecting sensitive information, and developing secure communication protocols.",
      publications: "56+ Publications",
      funding: "$2.1M",
      highlights: ["Network Security", "Cryptography", "Data Privacy", "Threat Detection"],
      faculty: 9
    },
  ];

  const facilities = [
    { name: "Advanced Computing Lab", desc: "High-performance computing systems, AI accelerators, and server infrastructure", icon: Zap },
    { name: "Electronics Research Center", desc: "State-of-the-art fabrication and testing equipment for semiconductor research", icon: Microscope },
    { name: "Biotechnology Lab", desc: "Modern facilities for biological research, cell culture, and biomedical analysis", icon: Microscope },
    { name: "Mechanical Testing Lab", desc: "Comprehensive material testing and mechanical analysis equipment", icon: Award },
    { name: "AI/ML Innovation Hub", desc: "GPU clusters, deep learning infrastructure, and computational resources", icon: Zap },
    { name: "Environmental Research Center", desc: "Facilities for sustainability studies and environmental impact analysis", icon: Target },
  ];

  const stats = [
    { number: "320+", label: "Research Publications" },
    { number: "68+", label: "Active Research Projects" },
    { number: "45+", label: "Industry Partnerships" },
    { number: "$15.9M", label: "Research Funding" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/50 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-secondary/80 font-semibold tracking-widest uppercase text-sm mb-4">Research & Innovation</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Advancing Knowledge, Shaping Future
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Cutting-edge research driving technological innovation and solving real-world challenges through collaborative excellence and world-class infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-8 text-center hover:border-secondary/50 hover:shadow-lg transition-all">
                <p className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.number}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Focus Areas</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Research Domains</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Leading interdisciplinary research initiatives addressing global challenges</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <Card key={i} className="border-border hover:border-secondary/50 transition-all hover:shadow-xl hover:-translate-y-2 p-8">
                  <Icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-3">{area.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{area.description}</p>
                  
                  <div className="mb-6 pb-6 border-t border-border">
                    <div className="flex flex-wrap gap-2 mt-4">
                      {area.highlights.map((h, j) => (
                        <span key={j} className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border text-xs">
                    <span className="text-secondary font-semibold">{area.publications}</span>
                    <span className="text-muted-foreground">|</span>
                    <span className="text-secondary font-semibold">{area.funding}</span>
                    <span className="text-muted-foreground">|</span>
                    <span className="text-muted-foreground">{area.faculty} Faculty</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Research Facilities */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Infrastructure</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Research Facilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {facilities.map((facility, i) => {
                const Icon = facility.icon;
                return (
                  <Card key={i} className="border-border hover:border-secondary/50 hover:shadow-lg transition-all p-6">
                    <Icon className="w-10 h-10 text-secondary mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">{facility.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{facility.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Collaborations */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Global Collaborations</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 hover:border-secondary/50 transition-all">
              <Users className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Industry Partnerships</h3>
              <p className="text-muted-foreground mb-4">Collaborations with leading Fortune 500 companies for applied research and technology transfer</p>
              <p className="text-secondary font-bold text-lg">45+ Partners</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 hover:border-secondary/50 transition-all">
              <Globe className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">International Collaborations</h3>
              <p className="text-muted-foreground mb-4">Research partnerships with 60+ universities across USA, Europe, Asia, and other continents</p>
              <p className="text-secondary font-bold text-lg">60+ Countries</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 hover:border-secondary/50 transition-all">
              <TrendingUp className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Innovation Hubs</h3>
              <p className="text-muted-foreground mb-4">Joint research centers with government agencies and international research organizations</p>
              <p className="text-secondary font-bold text-lg">15+ Centers</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl p-16 text-center max-w-3xl mx-auto border border-secondary/40">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-4">Join Our Research Community</h2>
            <p className="text-secondary-foreground/90 text-lg mb-10">
              Collaborate with leading researchers and contribute to breakthrough innovations shaping the future.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 font-semibold text-lg px-8 py-6 inline-flex items-center gap-2">
                Explore Opportunities <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold text-lg px-8 py-6">
                Research Publications
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
