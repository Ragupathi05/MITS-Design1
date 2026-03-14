import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { getNewsEventImageSrc, newsEvents } from "@/data/newsEvents";

const categoryColor: Record<string, string> = {
  Event: "bg-blue-500",
  News: "bg-secondary",
  Announcement: "bg-amber-500",
};

const NewsEventsSection = () => {
  return (
    <section className="py-20 bg-muted" id="news">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Stay Updated</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">News & Events</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Highlights from campus achievements, academic events, and institutional announcements.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsEvents.slice(0, 6).map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.08}>
              <Link
                to={`/news-events/${item.slug}`}
                className="block group relative rounded-2xl overflow-hidden bg-white border border-border/40
                  shadow-md transition-all duration-400 ease-out
                  hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
                style={{ height: "288px" }}
              >
                {/* ── Image area: ~5.5cm (208px) ── */}
                <div className="relative overflow-hidden" style={{ height: "208px" }}>
                  <img
                    src={getNewsEventImageSrc(item.image)}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Category pill */}
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-bold uppercase
                      tracking-widest text-white rounded-full px-2.5 py-1
                      ${categoryColor[item.category] ?? "bg-gray-500"}`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* ── Text area: remaining ~2cm (80px) — always visible ── */}
                <div
                  className="px-4 py-3 flex flex-col justify-center"
                  style={{ height: "80px", background: "rgba(241,245,252,1)" }}
                >
                  <h3 className="text-gray-800 font-bold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 flex-shrink-0 text-secondary" />
                    {item.date}
                  </p>
                </div>

                {/* ── HOVER OVERLAY: covers full card, slides up from bottom ── */}
                <div
                  className="absolute inset-0 flex flex-col justify-end
                    opacity-0 translate-y-4
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-400 ease-out pointer-events-none group-hover:pointer-events-auto"
                  style={{ background: "rgba(140,50,60,0.70)" }}
                >
                  <div
                    className="px-5 py-4"
                    style={{ background: "rgba(120,40,52,0.88)" }}
                  >
                    <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs flex items-center gap-1.5 mb-2">
                      <Calendar className="w-3 h-3 flex-shrink-0" />
                      {item.date}
                    </p>
                    <p className="text-slate-200 text-xs leading-relaxed line-clamp-3 mb-3">
                      {item.excerpt}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 w-fit px-4 py-1.5 rounded-full
                        bg-secondary text-white text-xs font-semibold shadow-md"
                    >
                      Read More
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6"
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
