import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, Clock, Globe, Monitor, Search, Users, Wifi } from "lucide-react";

const resources = [
  { icon: BookOpen, title: "50,000+ Volumes", desc: "Extensive collection of textbooks, reference books, and periodicals across all disciplines." },
  { icon: Globe, title: "Digital Library", desc: "Access to DELNET, NPTEL, Swayam, and other digital repositories for e-learning resources." },
  { icon: Monitor, title: "E-Journals & Databases", desc: "Subscriptions to IEEE, Springer, Elsevier, and other research journal databases." },
  { icon: Search, title: "OPAC Search", desc: "Online Public Access Catalogue for easy search and location of library resources." },
  { icon: Users, title: "Reading Halls", desc: "Spacious reading halls with seating capacity for 500+ students simultaneously." },
  { icon: Wifi, title: "Wi-Fi Enabled", desc: "Entire library campus is Wi-Fi enabled for seamless digital access." },
];

const stats = [
  { value: "50,000+", label: "Books & Volumes" },
  { value: "5,000+", label: "E-Journals" },
  { value: "500+", label: "Seating Capacity" },
  { value: "14 Hrs", label: "Daily Access" },
];

const Library = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative pt-32 md:pt-40 pb-20 bg-secondary">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Knowledge Hub</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">Central Library</h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              A modern library supporting academic excellence with print, digital, and research resources.
            </p>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
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
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Library Resources</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {resources.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <item.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Library Timings</h2>
              <div className="max-w-md mx-auto bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Monday – Friday</span>
                    <span className="font-semibold text-card-foreground">8:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Saturday</span>
                    <span className="font-semibold text-card-foreground">9:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Sunday & Holidays</span>
                    <span className="font-semibold text-card-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Library;
