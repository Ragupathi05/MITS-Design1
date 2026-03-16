import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Monitor, Users, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Library = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Academic Resources</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Central Library</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              A modern academic library supporting teaching, learning, and advanced research.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, label: "Volumes", value: "85,000+" },
              { icon: Monitor, label: "E-Journals", value: "12,000+" },
              { icon: Users, label: "Daily Visitors", value: "1,200+" },
              { icon: Clock, label: "Working Hours", value: "8 AM - 8 PM" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all">
                  <item.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Library;
