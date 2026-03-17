import { Calendar, ChevronRight, Instagram, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { getNewsEventImageSrc, latestNews, newsEvents, trendingOn } from "@/data/newsEvents";

const NewsEventsSection = () => {
  return (
    <section className="py-20 bg-muted" id="news">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[#b30000] font-body font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-3">Stay Updated</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4 leading-tight">Trending, News &amp; Events</h2>
            <p className="font-body text-[#1a1a1a] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Institutional updates in separate sections inspired by the official MITS portal.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 mb-12">
          <ScrollReveal className="lg:col-span-7">
            <div className="bg-white border border-border rounded-2xl p-5 shadow-sm lg:h-[600px] flex flex-col">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[#0f172a] mb-5">
                What's Trending <span className="text-[#b30000]">On</span>
              </h3>
              <div className="overflow-x-auto pb-3 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-muted/60 [&::-webkit-scrollbar-thumb]:bg-primary/45 [&::-webkit-scrollbar-thumb]:rounded-full">
                <div className="flex gap-3 min-w-max pr-2">
                  {trendingOn.map((item) => (
                    <a
                      key={item.id}
                      href={item.ctaUrl}
                      target={item.ctaUrl.startsWith("http") ? "_blank" : undefined}
                      rel={item.ctaUrl.startsWith("http") ? "noreferrer" : undefined}
                      className="group snap-start w-[220px] sm:w-[240px] rounded-xl border border-border bg-muted/25 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="px-3 py-2 border-b border-border/70 bg-white flex items-center gap-2">
                        <Instagram className="w-4 h-4 text-secondary" />
                        <div>
                          <p className="text-[12px] leading-none font-semibold text-secondary">{item.source}</p>
                          <p className="text-[11px] text-muted-foreground">{item.handle}</p>
                        </div>
                      </div>
                      <img
                        src={getNewsEventImageSrc(item.image)}
                        alt={item.text}
                        loading="lazy"
                        className="w-full h-64 object-cover object-center"
                      />
                      <div className="px-3 py-2.5 bg-white">
                        <p className="text-xs text-muted-foreground mb-1">{item.timeAgo}</p>
                        <p className="text-xs leading-relaxed text-foreground/85 line-clamp-2">{item.text}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-primary text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                Follow @MITS to see what is happening around campus
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5" delay={0.08}>
            <div className="bg-white border border-border rounded-2xl p-5 shadow-sm h-full lg:h-[600px] flex flex-col">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[#0f172a] mb-5">
                Latest <span className="text-[#b30000]">News</span>
              </h3>
              <div className="flex-1 overflow-y-auto pr-1 space-y-3 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-muted/60 [&::-webkit-scrollbar-thumb]:bg-secondary/40 [&::-webkit-scrollbar-thumb]:rounded-full">
                {latestNews.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news-events/${item.slug}`}
                    className="flex gap-3 rounded-xl p-2.5 hover:bg-muted/40 transition-colors"
                  >
                    <img
                      src={getNewsEventImageSrc(item.image)}
                      alt={item.title}
                      loading="lazy"
                      className="w-28 h-20 object-cover object-center rounded-md border border-border shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-display text-[#b30000] font-bold text-base leading-snug line-clamp-2 mb-1">{item.title}</h4>
                      <p className="font-body text-[#1a1a1a] text-sm leading-relaxed line-clamp-3">{item.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="flex items-center gap-2 mb-5">
            <PartyPopper className="w-6 h-6 text-[#b30000]" aria-hidden="true" />
            <h3 className="font-display text-3xl md:text-4xl font-bold text-[#0f172a]">Latest Events</h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsEvents.slice(0, 6).map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.08}>
              <Link
                to={`/news-events/${item.slug}`}
                className="block group relative rounded-2xl overflow-hidden bg-white border border-border/40
                  shadow-md transition-all duration-400 ease-out
                  hover:shadow-2xl hover:-translate-y-2"
                style={{ height: "288px" }}
              >
                <div className="relative overflow-hidden h-[208px]">
                  <img
                    src={getNewsEventImageSrc(item.image)}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                <div
                  className="px-4 py-3 flex flex-col justify-center"
                  style={{ height: "80px", background: "rgba(241,245,252,1)" }}
                >
                  <h4 className="text-gray-800 font-bold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs mt-1 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 flex-shrink-0 text-secondary" />
                    {item.date}
                  </p>
                </div>

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
                    <h4 className="text-white font-bold text-sm leading-snug line-clamp-2 mb-1">
                      {item.title}
                    </h4>
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
                      View Event
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
              className="border-[#b30000] text-[#b30000] hover:bg-[#b30000] hover:text-white font-body font-semibold px-6 rounded-full"
            >
              <Link to="/news-events">View All Events</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsEventsSection;
