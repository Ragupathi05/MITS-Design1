import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Trophy, Bus, Heart, UtensilsCrossed, Library, Radio,
  Lightbulb, Monitor, MessageSquare, Wifi, ChevronLeft, ChevronRight, Sparkles,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const infrastructureItems = [
  { key: "sports", label: "Sports", icon: Trophy, title: "Sports & Athletics",
    desc: "MITS offers world-class sports infrastructure to promote physical fitness and competitive spirit among students.",
    points: ["Cricket ground with practice nets and pavilion", "Football, volleyball, and basketball courts", "Badminton and table tennis halls", "Athletics track and field facilities", "Indoor gymnasium with modern equipment", "Annual sports meet and inter-collegiate tournaments"] },
  { key: "transport", label: "Transport", icon: Bus, title: "Transport Facilities",
    desc: "MITS provides safe and reliable transportation services covering Madanapalle and surrounding areas.",
    points: ["Fleet of 40+ buses covering 80+ km radius", "Routes covering Madanapalle, Tirupati, Chittoor, and nearby towns", "GPS-enabled buses for real-time tracking", "Dedicated routes for day scholars and staff", "Well-maintained vehicles with trained drivers", "Special transport for examination and events"] },
  { key: "dispensary", label: "Dispensary", icon: Heart, title: "Health & Dispensary",
    desc: "A fully equipped on-campus dispensary ensures the health and well-being of all students and staff.",
    points: ["24/7 medical assistance on campus", "Qualified doctors and nursing staff", "First aid and emergency care facilities", "Tie-ups with nearby hospitals for referrals", "Regular health check-up camps", "Mental health and counseling support"] },
  { key: "canteen", label: "Canteen", icon: UtensilsCrossed, title: "Canteen & Dining",
    desc: "Hygienic and affordable food services are available across the campus to cater to diverse tastes.",
    points: ["Main canteen with seating capacity of 500+", "Multiple food stalls across campus", "Vegetarian and non-vegetarian options", "Hygienic food preparation with regular audits", "Affordable meal plans for hostel students", "Special dietary options available on request"] },
  { key: "wifi", label: "Wi-Fi", icon: Wifi, title: "Wi-Fi & Connectivity",
    desc: "High-speed internet connectivity is available across the entire campus for seamless academic and research activities.",
    points: ["Campus-wide Wi-Fi with 1 Gbps internet bandwidth", "500+ access points across academic and hostel blocks", "24/7 connectivity for students and faculty", "Secure network with firewall and content filtering", "Dedicated bandwidth for research and labs", "NKN (National Knowledge Network) connectivity"] },
  { key: "library", label: "Library", icon: Library, title: "Central Library",
    desc: "The MITS Central Library is a knowledge hub with an extensive collection of books, journals, and digital resources.",
    points: ["50,000+ volumes across all disciplines", "Subscriptions to 100+ national and international journals", "Spacious reading halls with seating for 400+ students", "Separate sections for reference, periodicals, and thesis", "OPAC (Online Public Access Catalogue) system", "Extended library hours during examination periods"] },
  { key: "digital-library", label: "Digital Library", icon: Monitor, title: "Digital Library",
    desc: "The Digital Library provides access to a vast repository of e-resources, online databases, and research tools.",
    points: ["Access to NPTEL, DELNET, and INFLIBNET N-LIST", "IEEE, Springer, Elsevier, and Scopus database access", "E-books and e-journals across all disciplines", "Dedicated digital library lab with 100+ terminals", "Remote access for students and faculty", "Plagiarism detection tools (Turnitin/iThenticate)"] },
  { key: "radio", label: "Radio Station", icon: Radio, title: "Campus Radio Station",
    desc: "MITS operates a vibrant campus radio station that serves as a creative and communicative platform for students.",
    points: ["Licensed FM community radio station", "Student-run programming and content creation", "Broadcasts news, music, and educational content", "Platform for developing communication and media skills", "Regular shows on campus events and achievements", "Training in audio production and broadcasting"] },
  { key: "aicte-idea", label: "AICTE Idea Lab", icon: Lightbulb, title: "AICTE Idea Lab",
    desc: "The AICTE Idea Lab at MITS is a state-of-the-art innovation hub that fosters creativity, prototyping, and entrepreneurship.",
    points: ["Equipped with 3D printers, laser cutters, and CNC machines", "Electronics prototyping and IoT development kits", "Dedicated space for student startups and projects", "Workshops on design thinking and innovation", "Collaboration with AICTE's national innovation network", "Mentorship from industry experts and entrepreneurs"] },
  { key: "computer", label: "Computer Infrastructure", icon: Monitor, title: "Computer Infrastructure",
    desc: "MITS maintains cutting-edge computing infrastructure to support academic, research, and innovation activities.",
    points: ["3000+ computing systems across departments", "High-performance GPU servers for AI/ML research", "Licensed software: MATLAB, AutoCAD, ANSYS, and more", "Cloud computing lab with AWS and Azure access", "24/7 lab access for project and research work", "Regular hardware and software upgrades"] },
  { key: "comm-lab", label: "Communication Lab", icon: MessageSquare, title: "Communication Lab",
    desc: "The Communication Lab at MITS is designed to enhance the language, presentation, and interpersonal skills of students.",
    points: ["State-of-the-art language lab with 60+ terminals", "Software for pronunciation, listening, and speaking practice", "Group discussion and debate practice rooms", "Regular workshops on business communication", "Mock interview and presentation training sessions", "English proficiency programs for all students"] },
];

const Infrastructure = () => {
  const [activeInfra, setActiveInfra] = useState(infrastructureItems[0].key);
  const current = infrastructureItems.find(i => i.key === activeInfra)!;
  const CurrentIcon = current.icon;
  const currentIdx = infrastructureItems.findIndex(i => i.key === activeInfra);
  const mobileTabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mobileTabsRef.current?.querySelector<HTMLButtonElement>(`[data-key="${activeInfra}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeInfra]);

  const go = (dir: -1 | 1) => {
    const next = currentIdx + dir;
    if (next >= 0 && next < infrastructureItems.length) setActiveInfra(infrastructureItems[next].key);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="relative h-72 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7a0000] via-[#b30000] to-[#d93030]" />
          <div className="absolute inset-0 opacity-[0.12]"
            style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#caa74d]/20 blur-3xl" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <ScrollReveal>
              <p className="text-[#caa74d] font-semibold tracking-[0.25em] uppercase text-xs md:text-sm mb-3">Campus Life</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Infrastructure</h1>
              <p className="font-body text-base md:text-lg text-white/85 max-w-2xl mx-auto">
                World-class facilities designed for academic excellence and holistic development.
              </p>
            </ScrollReveal>
          </div>
          <div className="absolute bottom-4 left-6">
            <ol className="flex items-center gap-1.5 text-sm">
              <li><a href="/" className="text-white/70 hover:text-white">Home</a></li>
              <li className="text-white/50">›</li>
              <li className="text-white font-semibold">Infrastructure</li>
            </ol>
          </div>
        </div>

        <div className="bg-[#0f2a44] text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
              {[{ value: "26.17+", label: "Acre Campus" },{ value: "40+", label: "Buses" },{ value: "3000+", label: "Computers" },{ value: "1 Gbps", label: "Internet Speed" }].map((s) => (
                <div key={s.label} className="py-5 px-4 text-center">
                  <p className="font-display text-2xl md:text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-white/70 text-xs md:text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="py-10 md:py-16 bg-gradient-to-b from-muted/40 via-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="lg:hidden mb-6 -mx-4 px-4">
              <div
                ref={mobileTabsRef}
                className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none" }}
              >
                {infrastructureItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeInfra === item.key;
                  return (
                    <button
                      key={item.key}
                      data-key={item.key}
                      onClick={() => setActiveInfra(item.key)}
                      className={`snap-start flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                        isActive
                          ? "bg-gradient-to-r from-[#7a0000] to-[#b30000] text-white shadow-md shadow-[#b30000]/30"
                          : "bg-white text-[#0f2a44] border border-border hover:border-[#b30000]/40"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
              <aside className="hidden lg:block lg:w-72 flex-shrink-0">
                <div className="bg-white/80 backdrop-blur border border-border/70 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] sticky top-24">
                  <div className="bg-gradient-to-r from-[#7a0000] via-[#b30000] to-[#a01010] px-5 py-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#caa74d]" />
                    <p className="text-white font-bold text-xs uppercase tracking-[0.2em]">Facilities</p>
                  </div>
                  <nav className="p-2">
                    {infrastructureItems.map((item) => {
                      const ItemIcon = item.icon;
                      const isActive = activeInfra === item.key;
                      return (
                        <button
                          key={item.key}
                          onClick={() => setActiveInfra(item.key)}
                          className={`w-full flex items-center gap-3 px-3 py-3 my-0.5 rounded-xl text-left transition-all duration-300 group relative overflow-hidden ${
                            isActive
                              ? "bg-gradient-to-r from-[#b30000] to-[#d93030] text-white shadow-md shadow-[#b30000]/25"
                              : "hover:bg-muted/70 text-foreground hover:translate-x-1"
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isActive
                              ? "bg-white/20 text-white shadow-inner"
                              : "bg-muted text-[#b30000] group-hover:bg-[#b30000]/10 group-hover:scale-110"
                          }`}>
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <span className={`text-sm font-medium ${isActive ? "text-white" : ""}`}>{item.label}</span>
                          {isActive && <ChevronRight className="ml-auto w-4 h-4 text-white" />}
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </aside>

              <div className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeInfra}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <div className="relative rounded-2xl overflow-hidden mb-6 shadow-[0_12px_40px_rgba(179,0,0,0.18)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#7a0000] via-[#b30000] to-[#d93030]" />
                      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#caa74d]/15 blur-3xl" />
                      <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-white/5 blur-2xl" />
                      <div className="absolute inset-0 opacity-[0.08]"
                        style={{ backgroundImage: "radial-gradient(circle at 30% 40%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                      <div className="relative p-6 md:p-8 flex items-start gap-4 md:gap-5">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center flex-shrink-0 shadow-inner">
                          <CurrentIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block w-8 h-px bg-[#caa74d]" />
                            <p className="text-[#caa74d] text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em]">
                              {String(currentIdx + 1).padStart(2,"0")} / {String(infrastructureItems.length).padStart(2,"0")}
                            </p>
                          </div>
                          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">{current.title}</h2>
                          <p className="text-white/85 text-sm md:text-base leading-relaxed max-w-2xl">{current.desc}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-border/70 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] overflow-hidden mb-6">
                      <div className="px-6 py-4 border-b border-border/70 bg-gradient-to-r from-muted/50 to-transparent flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#b30000]" />
                        <h3 className="font-display font-bold text-foreground">Key Highlights</h3>
                      </div>
                      <div className="p-4 md:p-6 grid sm:grid-cols-2 gap-3 md:gap-4">
                        {current.points.map((point, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="flex items-start gap-3 p-4 rounded-xl border border-border/60 bg-gradient-to-br from-white to-muted/30 hover:border-[#b30000]/40 hover:shadow-lg hover:shadow-[#b30000]/5 hover:-translate-y-0.5 transition-all duration-300 group"
                          >
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#b30000] to-[#d93030] text-white flex items-center justify-center text-xs font-bold shadow-sm shadow-[#b30000]/30 group-hover:scale-110 transition-transform">
                              {String(i + 1).padStart(2,"0")}
                            </span>
                            <p className="text-foreground/85 text-sm leading-relaxed group-hover:text-foreground transition-colors">{point}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => go(-1)}
                    disabled={currentIdx === 0}
                    className="flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full border border-border bg-white text-sm font-semibold text-foreground hover:bg-[#b30000] hover:text-white hover:border-[#b30000] hover:shadow-md hover:shadow-[#b30000]/20 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-foreground disabled:hover:border-border disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>
                  <div className="flex gap-1.5 overflow-x-auto max-w-[50%] [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
                    {infrastructureItems.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveInfra(infrastructureItems[i].key)}
                        aria-label={`Go to ${infrastructureItems[i].label}`}
                        className={`rounded-full transition-all duration-300 flex-shrink-0 ${
                          i === currentIdx
                            ? "w-7 h-2.5 bg-gradient-to-r from-[#b30000] to-[#d93030]"
                            : "w-2.5 h-2.5 bg-border hover:bg-[#b30000]/40"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => go(1)}
                    disabled={currentIdx === infrastructureItems.length - 1}
                    className="flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full border border-border bg-white text-sm font-semibold text-foreground hover:bg-[#b30000] hover:text-white hover:border-[#b30000] hover:shadow-md hover:shadow-[#b30000]/20 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-foreground disabled:hover:border-border disabled:cursor-not-allowed transition-all"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
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

export default Infrastructure;
