import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { getNewsEventImageSrc, newsEvents } from "@/data/newsEvents";

const NewsEventCard = ({ item, index }: { item: typeof newsEvents[0]; index: number }) => {
  return (
    <ScrollReveal delay={index * 0.1}>
      <Link
        to={`/news-events/${item.slug}`}
        className="group block relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden transition-transform duration-700 ease-out group-hover:[transform:rotateY(-4deg)_rotateX(2deg)_translateY(-6px)_scale(1.01)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Image */}
          <img
            src={getNewsEventImageSrc(item.image)}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />

          {/* Bottom gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

          {/* Excerpt — fades in on hover */}
          <div className="absolute inset-x-0 bottom-[7.5rem] px-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none">
            <p className="text-white/90 text-sm leading-relaxed line-clamp-2 drop-shadow-md">
              {item.excerpt}
            </p>
          </div>

          {/* Bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1.5 text-white/70 text-xs font-medium tracking-wide uppercase">
              <Calendar className="w-3.5 h-3.5" />
              {item.date}
            </span>
            <h3 className="font-display text-lg md:text-xl font-bold text-white leading-snug line-clamp-2 drop-shadow-md">
              {item.title}
            </h3>
            <Button
              variant="secondary"
              size="sm"
              className="mt-1 w-fit bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/40 hover:text-white font-semibold text-sm px-5 rounded-lg transition-colors duration-300"
            >
              Read More
            </Button>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
};

const NewsEventsSection = () => {
  return (
    <section className="py-24 bg-muted" id="news">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Stay Updated</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">News & Events</h2>
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Highlights from campus achievements, academic events, and institutional announcements.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {newsEvents.slice(0, 6).map((item, i) => (
            <NewsEventCard key={item.slug} item={item} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-2.5 rounded-lg"
            >
              <Link to="/news-events">View All Updates</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsEventsSection;
