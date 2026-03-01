import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const news = [
  { date: "Feb 20, 2026", title: "MITS Ranked Among Top 100 Engineering Colleges in India", category: "Achievement" },
  { date: "Feb 15, 2026", title: "International Conference on AI & Machine Learning 2026", category: "Event" },
  { date: "Feb 10, 2026", title: "Campus Placement Drive: 150+ Companies Participate", category: "Placement" },
];

const NewsEventsSection = () => {
  return (
    <section className="py-20 bg-muted" id="news">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Stay Updated</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">News & Events</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Highlights from campus achievements, academic events, and institutional announcements.</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border group cursor-pointer h-full">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{item.category}</span>
                <h3 className="font-display text-lg font-semibold text-card-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">{item.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm group-hover:text-secondary transition-colors">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6">
              View All
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsEventsSection;
