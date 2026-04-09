import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Trophy, Bus, Heart, UtensilsCrossed, Library, Radio, Lightbulb, Monitor, MessageSquare, Wifi } from "lucide-react";
import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

const infrastructureItems = [
  {
    key: "sports",
    label: "Sports",
    icon: Trophy,
    title: "Sports & Athletics",
    desc: "MITS offers world-class sports infrastructure to promote physical fitness and competitive spirit among students.",
    points: [
      "Cricket ground with practice nets and pavilion",
      "Football, volleyball, and basketball courts",
      "Badminton and table tennis halls",
      "Athletics track and field facilities",
      "Indoor gymnasium with modern equipment",
      "Annual sports meet and inter-collegiate tournaments",
    ],
  },
  {
    key: "transport",
    label: "Transport",
    icon: Bus,
    title: "Transport Facilities",
    desc: "MITS provides safe and reliable transportation services covering Madanapalle and surrounding areas.",
    points: [
      "Fleet of 40+ buses covering 80+ km radius",
      "Routes covering Madanapalle, Tirupati, Chittoor, and nearby towns",
      "GPS-enabled buses for real-time tracking",
      "Dedicated routes for day scholars and staff",
      "Well-maintained vehicles with trained drivers",
      "Special transport for examination and events",
    ],
  },
  {
    key: "dispensary",
    label: "Dispensary",
    icon: Heart,
    title: "Health & Dispensary",
    desc: "A fully equipped on-campus dispensary ensures the health and well-being of all students and staff.",
    points: [
      "24/7 medical assistance on campus",
      "Qualified doctors and nursing staff",
      "First aid and emergency care facilities",
      "Tie-ups with nearby hospitals for referrals",
      "Regular health check-up camps",
      "Mental health and counseling support",
    ],
  },
  {
    key: "canteen",
    label: "Canteen",
    icon: UtensilsCrossed,
    title: "Canteen & Dining",
    desc: "Hygienic and affordable food services are available across the campus to cater to diverse tastes.",
    points: [
      "Main canteen with seating capacity of 500+",
      "Multiple food stalls across campus",
      "Vegetarian and non-vegetarian options",
      "Hygienic food preparation with regular audits",
      "Affordable meal plans for hostel students",
      "Special dietary options available on request",
    ],
  },
  {
    key: "wifi",
    label: "Wi-Fi",
    icon: Wifi,
    title: "Wi-Fi & Connectivity",
    desc: "High-speed internet connectivity is available across the entire campus for seamless academic and research activities.",
    points: [
      "Campus-wide Wi-Fi with 1 Gbps internet bandwidth",
      "500+ access points across academic and hostel blocks",
      "24/7 connectivity for students and faculty",
      "Secure network with firewall and content filtering",
      "Dedicated bandwidth for research and labs",
      "NKN (National Knowledge Network) connectivity",
    ],
  },
  {
    key: "library",
    label: "Library",
    icon: Library,
    title: "Central Library",
    desc: "The MITS Central Library is a knowledge hub with an extensive collection of books, journals, and digital resources.",
    points: [
      "50,000+ volumes across all disciplines",
      "Subscriptions to 100+ national and international journals",
      "Spacious reading halls with seating for 400+ students",
      "Separate sections for reference, periodicals, and thesis",
      "OPAC (Online Public Access Catalogue) system",
      "Extended library hours during examination periods",
    ],
  },
  {
    key: "digital-library",
    label: "Digital Library",
    icon: Monitor,
    title: "Digital Library",
    desc: "The Digital Library provides access to a vast repository of e-resources, online databases, and research tools.",
    points: [
      "Access to NPTEL, DELNET, and INFLIBNET N-LIST",
      "IEEE, Springer, Elsevier, and Scopus database access",
      "E-books and e-journals across all disciplines",
      "Dedicated digital library lab with 100+ terminals",
      "Remote access for students and faculty",
      "Plagiarism detection tools (Turnitin/iThenticate)",
    ],
  },
  {
    key: "radio",
    label: "Radio Station",
    icon: Radio,
    title: "Campus Radio Station",
    desc: "MITS operates a vibrant campus radio station that serves as a creative and communicative platform for students.",
    points: [
      "Licensed FM community radio station",
      "Student-run programming and content creation",
      "Broadcasts news, music, and educational content",
      "Platform for developing communication and media skills",
      "Regular shows on campus events and achievements",
      "Training in audio production and broadcasting",
    ],
  },
  {
    key: "aicte-idea",
    label: "AICTE Idea Lab",
    icon: Lightbulb,
    title: "AICTE Idea Library",
    desc: "The AICTE Idea Lab at MITS is a state-of-the-art innovation hub that fosters creativity, prototyping, and entrepreneurship.",
    points: [
      "Equipped with 3D printers, laser cutters, and CNC machines",
      "Electronics prototyping and IoT development kits",
      "Dedicated space for student startups and projects",
      "Workshops on design thinking and innovation",
      "Collaboration with AICTE's national innovation network",
      "Mentorship from industry experts and entrepreneurs",
    ],
  },
  {
    key: "computer",
    label: "Computer Infrastructure",
    icon: Monitor,
    title: "Computer Infrastructure",
    desc: "MITS maintains cutting-edge computing infrastructure to support academic, research, and innovation activities.",
    points: [
      "3000+ computing systems across departments",
      "High-performance GPU servers for AI/ML research",
      "Licensed software: MATLAB, AutoCAD, ANSYS, and more",
      "Cloud computing lab with AWS and Azure access",
      "24/7 lab access for project and research work",
      "Regular hardware and software upgrades",
    ],
  },
  {
    key: "comm-lab",
    label: "Communication Lab",
    icon: MessageSquare,
    title: "Communication Lab",
    desc: "The Communication Lab at MITS is designed to enhance the language, presentation, and interpersonal skills of students.",
    points: [
      "State-of-the-art language lab with 60+ terminals",
      "Software for pronunciation, listening, and speaking practice",
      "Group discussion and debate practice rooms",
      "Regular workshops on business communication",
      "Mock interview and presentation training sessions",
      "English proficiency programs for all students",
    ],
  },
];

const Contact = () => {
  const [activeInfra, setActiveInfra] = useState(infrastructureItems[0].key);
  const current = infrastructureItems.find(i => i.key === activeInfra)!;
  const CurrentIcon = current.icon;
  const currentIdx = infrastructureItems.findIndex(i => i.key === activeInfra);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <div className="relative h-72 md:h-80 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }}
          />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <ScrollReveal>
              <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3 opacity-90">Campus Life</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Infrastructure
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                World-class facilities designed for academic excellence and holistic development.
              </p>
            </ScrollReveal>
          </div>
          <div className="absolute bottom-4 left-6">
            <ol className="flex items-center gap-1.5 text-sm">
              <li><a href="/" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li className="text-white/50">›</li>
              <li className="text-white font-semibold">Infrastructure</li>
            </ol>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
              {[
                { value: "26.17+", label: "Acre Campus" },
                { value: "40+", label: "Buses" },
                { value: "3000+", label: "Computers" },
                { value: "1 Gbps", label: "Internet Speed" },
              ].map((stat) => (
                <div key={stat.label} className="py-5 px-6 text-center">
                  <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Infrastructure Sidebar Layout */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

              {/* Sidebar */}
              <aside className="lg:w-72 flex-shrink-0">
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-md sticky top-24">
                  <div className="bg-gradient-to-r from-primary to-primary/80 px-5 py-4">
                    <p className="text-primary-foreground font-bold text-sm uppercase tracking-widest">Facilities</p>
                  </div>
                  <nav>
                    {infrastructureItems.map((item, idx) => {
                      const ItemIcon = item.icon;
                      const isActive = activeInfra === item.key;
                      return (
                        <button
                          key={item.key}
                          onClick={() => setActiveInfra(item.key)}
                          className={`w-full flex items-center gap-3 px-5 py-3.5 text-left transition-all duration-200 group relative ${
                            isActive
                              ? "bg-primary/10 text-primary font-semibold"
                              : "hover:bg-muted text-foreground"
                          } ${idx !== 0 ? "border-t border-border" : ""}`}
                        >
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                          )}
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                            isActive ? "bg-primary text-white" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                          }`}>
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <span className="text-sm">{item.label}</span>
                          {isActive && <span className="ml-auto text-primary">›</span>}
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </aside>

              {/* Content Panel */}
              <div className="flex-1 min-w-0">
                {/* Header Card */}
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 mb-6 text-white shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  <div className="relative flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0 shadow-inner">
                      <CurrentIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
                        {currentIdx + 1} of {infrastructureItems.length}
                      </p>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">{current.title}</h2>
                      <p className="text-white/80 text-sm leading-relaxed max-w-xl">{current.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Points Grid */}
                <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden mb-6">
                  <div className="px-6 py-4 border-b border-border bg-muted/50">
                    <h3 className="font-display font-bold text-foreground">Key Highlights</h3>
                  </div>
                  <div className="p-6 grid sm:grid-cols-2 gap-4">
                    {current.points.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                      >
                        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                          {i + 1}
                        </span>
                        <p className="text-foreground/80 text-sm leading-relaxed group-hover:text-foreground transition-colors">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prev / Next */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => { if (currentIdx > 0) setActiveInfra(infrastructureItems[currentIdx - 1].key); }}
                    disabled={currentIdx === 0}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-semibold text-foreground hover:bg-card hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    ← Previous
                  </button>
                  <div className="flex gap-1.5">
                    {infrastructureItems.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveInfra(infrastructureItems[i].key)}
                        className={`rounded-full transition-all duration-200 ${
                          i === currentIdx ? "w-6 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-border hover:bg-primary/40"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => { if (currentIdx < infrastructureItems.length - 1) setActiveInfra(infrastructureItems[currentIdx + 1].key); }}
                    disabled={currentIdx === infrastructureItems.length - 1}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-semibold text-foreground hover:bg-card hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
