import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Building2, Dumbbell, Home, Music, Palette, Theater, Trophy, Users } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const clubs = [
  { icon: Music, name: "Music Club", desc: "Vocal and instrumental performances, band activities." },
  { icon: Palette, name: "Arts & Crafts Club", desc: "Painting, sketching, and creative arts workshops." },
  { icon: Theater, name: "Drama & Theatre", desc: "Stage plays, street theatre, and cultural performances." },
  { icon: Users, name: "NSS / NCC", desc: "National Service Scheme and National Cadet Corps activities." },
  { icon: Trophy, name: "Technical Clubs", desc: "Coding, robotics, IoT, and hackathon clubs." },
  { icon: Building2, name: "Entrepreneurship Cell", desc: "Start-up mentoring, pitch events, and business incubation." },
];

const facilities = [
  { icon: Dumbbell, title: "Sports Complex", desc: "Indoor and outdoor sports facilities including cricket, basketball, volleyball, and athletics." },
  { icon: Home, title: "Hostels", desc: "Separate hostels for boys and girls with Wi-Fi, mess facilities, and 24/7 security." },
  { icon: Building2, title: "Auditorium", desc: "Air-conditioned auditorium for seminars, conferences, and cultural programs." },
  { icon: Users, title: "Student Activity Center", desc: "Dedicated space for club activities, meetings, and recreational events." },
];

const events = [
  { title: "MITS Fest", desc: "Annual inter-college cultural and technical festival with national-level participation." },
  { title: "Sports Meet", desc: "Annual sports day with inter-departmental competitions and athletics events." },
  { title: "Smruthi Sangamam", desc: "Alumni reunion and homecoming event celebrating achievements of MITS graduates." },
  { title: "Technical Symposiums", desc: "Department-wise technical events, workshops, and guest lectures." },
];

const CampusLife = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section
          className="relative pt-32 md:pt-40 pb-20 overflow-hidden"
          style={{
            backgroundImage: `url(${BASE}Hero-Section/image%205.JPG)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-secondary/85" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Life at MITS</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">Campus Life</h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              A vibrant campus experience with clubs, sports, cultural events, and modern residential facilities.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Get Involved</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Student Clubs & Organizations</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {clubs.map((club, i) => (
                <ScrollReveal key={club.name} delay={i * 0.08}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <club.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{club.name}</h3>
                    <p className="text-muted-foreground text-sm">{club.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Cultural Events & Fests</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {events.map((event, i) => (
                <ScrollReveal key={event.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm h-full">
                    <h3 className="font-display text-xl font-bold text-card-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Campus Facilities</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {facilities.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <item.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CampusLife;
