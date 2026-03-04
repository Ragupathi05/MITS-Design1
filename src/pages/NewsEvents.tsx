import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { getNewsEventImageSrc, newsEvents } from "@/data/newsEvents";

const NewsEvents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <section className="py-14 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">MITS Updates</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">News & Events</h1>
              <p className="text-muted-foreground text-lg">
                Explore recent events, announcements, and campus highlights from MITS.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {newsEvents.map((item) => (
                <Link
                  key={item.slug}
                  to={`/news-events/${item.slug}`}
                  className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border group"
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
                    <h2 className="font-display text-lg font-semibold text-card-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{item.excerpt}</p>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="line-clamp-1">{item.location}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsEvents;
