import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import {
  Building2, Dumbbell, Home, Music, Palette, Theater, Trophy, Users,
  Camera, MapPin, Wifi, Shield, Coffee, BookOpen, Volleyball, ArrowRight,
  Calendar, Star, Heart,
} from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const clubs = [
  { icon: Music, name: "Music Club", desc: "Vocal and instrumental performances, band activities, and musical workshops.", color: "from-purple-500 to-pink-500" },
  { icon: Palette, name: "Arts & Crafts Club", desc: "Painting, sketching, photography, and creative arts workshops.", color: "from-orange-500 to-red-500" },
  { icon: Theater, name: "Drama & Theatre", desc: "Stage plays, street theatre, and cultural performances on national stages.", color: "from-blue-500 to-indigo-500" },
  { icon: Users, name: "NSS / NCC", desc: "National Service Scheme and National Cadet Corps for social responsibility.", color: "from-green-500 to-emerald-500" },
  { icon: Trophy, name: "Technical Clubs", desc: "Coding, robotics, IoT, hackathons, and competitive programming.", color: "from-cyan-500 to-blue-500" },
  { icon: Building2, name: "Entrepreneurship Cell", desc: "Start-up mentoring, pitch events, and business incubation programs.", color: "from-amber-500 to-orange-500" },
];

const facilities = [
  { icon: Dumbbell, title: "Sports Complex", desc: "Indoor and outdoor sports facilities including cricket, basketball, volleyball, and athletics tracks.", features: ["Cricket Ground", "Basketball Courts", "Gymnasium"] },
  { icon: Home, title: "Hostels", desc: "Separate hostels for boys and girls with modern amenities and 24/7 security.", features: ["Wi-Fi Enabled", "Mess Facilities", "24/7 Security"] },
  { icon: Building2, title: "Auditorium", desc: "Air-conditioned auditorium for seminars, conferences, and cultural programs.", features: ["1000+ Capacity", "AV Equipment", "Stage Lighting"] },
  { icon: Coffee, title: "Cafeteria", desc: "Multiple food outlets serving hygienic and diverse cuisine options.", features: ["Multi-Cuisine", "Affordable Pricing", "Hygienic Standards"] },
  { icon: BookOpen, title: "Central Library", desc: "24/7 library with digital resources, research journals, and study spaces.", features: ["Digital Resources", "E-Journals", "Study Rooms"] },
  { icon: Wifi, title: "Wi-Fi Campus", desc: "High-speed internet connectivity across the entire campus.", features: ["Full Coverage", "High Speed", "Secure Network"] },
  { icon: Shield, title: "Medical Center", desc: "On-campus health center with trained medical staff and first aid.", features: ["24/7 Available", "Trained Staff", "Ambulance"] },
  { icon: Camera, title: "Media Center", desc: "Studios for photography, videography, and digital content creation.", features: ["Studio Setup", "Editing Suites", "Equipment"] },
];

const events = [
  { title: "MITS Fest", desc: "Annual inter-college cultural and technical festival with national-level participation and celebrity performances.", icon: Star, date: "February" },
  { title: "Sports Meet", desc: "Annual sports day with inter-departmental competitions, athletics, and prize ceremonies.", icon: Trophy, date: "December" },
  { title: "Smruthi Sangamam", desc: "Alumni reunion and homecoming event celebrating achievements of MITS graduates across the world.", icon: Heart, date: "March" },
  { title: "Technical Symposiums", desc: "Department-wise technical events, workshops, hackathons, and guest lectures by industry leaders.", icon: BookOpen, date: "Throughout Year" },
];

const gallery = [
  { src: `${BASE}Hero-Section/image%201.JPG`, alt: "Campus Event", span: "md:col-span-2 md:row-span-2" },
  { src: `${BASE}Hero-Section/image%202.JPG`, alt: "Student Activities", span: "" },
  { src: `${BASE}Hero-Section/image%203.JPG`, alt: "Sports Day", span: "" },
  { src: `${BASE}Hero-Section/image%204.JPG`, alt: "Cultural Fest", span: "md:col-span-2" },
  { src: `${BASE}Hero-Section/image%205.JPG`, alt: "Graduation Day", span: "" },
];

const CampusLife = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={`${BASE}Hero-Section/image%205.JPG`} alt="Campus Life at MITS" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/70" />
          </div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4"
              >
                Life at MITS
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Experience a <span className="text-accent">Vibrant</span> Campus Life
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/85 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              >
                A dynamic campus experience with clubs, sports, cultural events, modern facilities, and a thriving student community.
              </motion.p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80V40C240 0 480 60 720 40C960 20 1200 60 1440 40V80H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Student Clubs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-2">Get Involved</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Student Clubs & Organizations</h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto">
                  Join passionate communities that foster creativity, leadership, and personal growth.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {clubs.map((club, i) => (
                <ScrollReveal key={club.name} delay={i * 0.08}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 group h-full">
                    <div className={`h-1.5 bg-gradient-to-r ${club.color}`} />
                    <div className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <club.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-card-foreground mb-2">{club.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{club.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Events */}
        <section className="py-20 bg-navy-gradient text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-accent font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-2">Celebrations</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Cultural Events & Fests</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {events.map((event, i) => (
                <ScrollReveal key={event.title} delay={i * 0.1}>
                  <div className="glass-card glass-card-hover rounded-2xl p-6 h-full group">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/40 transition-colors">
                        <event.icon className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-display text-xl font-bold text-white">{event.title}</h3>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-3.5 h-3.5 text-accent" />
                          <span className="text-accent text-xs font-semibold">{event.date}</span>
                        </div>
                        <p className="text-white/75 text-sm leading-relaxed">{event.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Facilities */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-2">World-Class Infrastructure</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Campus Facilities</h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto">
                  Modern infrastructure designed to support academic excellence and student well-being.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {facilities.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.06}>
                  <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 group h-full">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-3">{item.desc}</p>
                    <div className="space-y-1.5">
                      {item.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground text-xs">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Gallery */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-[0.18em] uppercase text-xs md:text-sm mb-2">Visual Tour</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Campus Gallery</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {gallery.map((img, i) => (
                <ScrollReveal key={img.alt} delay={i * 0.08} className={img.span}>
                  <div className="overflow-hidden rounded-2xl group relative cursor-pointer h-full min-h-[200px]">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[200px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                      <div className="p-5">
                        <p className="text-white font-display font-bold text-sm">{img.alt}</p>
                        <div className="flex items-center gap-1 text-accent text-xs mt-1">
                          <MapPin className="w-3 h-3" /> MITS Campus
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Experience Life at MITS?
              </h2>
              <p className="text-primary-foreground/80 text-base max-w-xl mx-auto mb-6">
                Join a vibrant community of learners, innovators, and future leaders.
              </p>
              <a href="/admissions" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg">
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CampusLife;
