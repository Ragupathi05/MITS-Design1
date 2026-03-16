import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CalendarDays, FileCheck, BadgeCheck, ClipboardList } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Examinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Academic Administration</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Examinations Cell</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Transparent, timely, and student-centric examination processes aligned with university standards.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-14">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: CalendarDays, title: "Exam Timetables", text: "Published in advance with clear schedules for all departments." },
              { icon: ClipboardList, title: "Continuous Assessment", text: "Structured internal assessments with academic monitoring." },
              { icon: FileCheck, title: "Result Processing", text: "Efficient evaluation and secure result publication workflow." },
              { icon: BadgeCheck, title: "Grievance Support", text: "Dedicated support for revaluation, recounting, and queries." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <item.icon className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
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

export default Examinations;
