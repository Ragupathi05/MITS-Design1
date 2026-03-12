import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { getNewsEventImageSrc, newsEvents } from "@/data/newsEvents";

const NewsEventCard = ({ item }: { item: typeof newsEvents[0] }) => {
  return (
    <Link
      to={`/news-events/${item.slug}`}
      className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 ease-out cursor-pointer aspect-[16/11]"
    >
      {/* Image */}
      <img
        src={getNewsEventImageSrc(item.image)}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Always-visible bottom gradient with title & date */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-16 transition-opacity duration-500">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-secondary mb-1.5">
          {item.category}
        </span>
        <h3 className="font-display text-lg font-semibold text-white leading-snug line-clamp-2">
          {item.title}
        </h3>
        <div className="flex items-center gap-1.5 text-white/70 text-xs mt-1.5">
          <Calendar className="w-3.5 h-3.5" />
          <span>{item.date}</span>
        </div>
      </div>

      {/* Hover overlay with description & button */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-secondary mb-1.5">
          {item.category}
        </span>
        <h3 className="font-display text-lg font-semibold text-white leading-snug line-clamp-2">
          {item.title}
        </h3>
        <div className="flex items-center gap-1.5 text-white/70 text-xs mt-1.5">
          <Calendar className="w-3.5 h-3.5" />
          <span>{item.date}</span>
        </div>
        <p className="text-white/80 text-sm mt-3 line-clamp-3 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {item.excerpt}
        </p>
        <div className="mt-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors">
            Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </Link>
  );
};

const NewsEventsSection = () => {
  return (
    <section className="py-24 bg-muted" id="news">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Stay Updated</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">News & Events</h2>
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Highlights from campus achievements, academic events, and institutional announcements.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsEvents.slice(0, 6).map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.08}>
              <NewsEventCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8">
              <Link to="/news-events">View All Updates</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsEventsSection;
