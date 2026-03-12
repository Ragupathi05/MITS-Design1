import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { getNewsEventImageSrc, newsEvents } from "@/data/newsEvents";

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
          {newsEvents.slice(0, 6).map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.1}>
              <Link
                to={`/news-events/${item.slug}`}
                className="block bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border group h-full"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={getNewsEventImageSrc(item.image)}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{item.category}</span>
                  <h3 className="font-display text-lg font-semibold text-card-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{item.excerpt}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 group-hover:text-secondary transition-colors">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 group-hover:text-secondary transition-colors">
                      <MapPin className="w-4 h-4" />
                      <span className="line-clamp-1">{item.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6">
              <Link to="/news-events">
                View All Updates
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsEventsSection;
