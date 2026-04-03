import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getDepartmentByKey } from "@/data/departmentData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users, Award, FlaskConical, FileText, BookOpen, Calendar, Handshake, Briefcase, FolderOpen, GraduationCap, Building2, ChevronRight, Eye, Target, Trophy, Lightbulb, Mail, Phone, ArrowRight
} from "lucide-react";

const sidebarItems = [
  { id: "about", label: "About Department", icon: Building2 },
  { id: "faculty", label: "People / Faculty", icon: Users },
  { id: "achievements", label: "Achievements", icon: Award },
  { id: "facilities", label: "Facilities", icon: FlaskConical },
  { id: "patents", label: "Patents", icon: FileText },
  { id: "publications", label: "Publications", icon: BookOpen },
  { id: "consultancy", label: "Consultancy", icon: Briefcase },
  { id: "events", label: "Events", icon: Calendar },
  { id: "mou", label: "MoU", icon: Handshake },
  { id: "placement", label: "Placement / Internship", icon: Trophy },
  { id: "projects", label: "Student Projects", icon: FolderOpen },
  { id: "subjects", label: "Subjects", icon: GraduationCap },
];

const DepartmentPage = () => {
  const { deptKey } = useParams<{ deptKey: string }>();
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dept = getDepartmentByKey(deptKey || "");

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of sidebarItems) {
        const el = sectionRefs.current[item.id];
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!dept) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-40 text-center">
          <h1 className="text-2xl font-bold text-secondary">Department Not Found</h1>
          <Link to="/departments" className="text-primary underline mt-4 inline-block">← Back to Departments</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const setRef = (id: string) => (el: HTMLDivElement | null) => { sectionRefs.current[id] = el; };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION */}
      <div className="relative h-[300px] md:h-[380px] overflow-hidden">
        <img src={dept.bannerImage} alt={dept.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 pt-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white drop-shadow-2xl" style={{ fontFamily: "var(--font-display)" }}
            >
              {dept.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 mt-2 text-base md:text-lg"
            >
              Established {dept.established} | {dept.nbaAccredited ? "NBA Accredited" : "MITS Deemed to be University"}
            </motion.p>
            <div className="w-20 h-0.5 bg-accent mx-auto mt-3 rounded-full" />
          </div>
        </div>
        <div className="absolute bottom-4 left-6">
          <nav className="flex items-center gap-1.5 text-sm">
            <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
            <span className="text-white/50">›</span>
            <Link to="/departments" className="text-white/70 hover:text-white transition-colors">Departments</Link>
            <span className="text-white/50">›</span>
            <span className="text-white font-semibold">{dept.shortName}</span>
          </nav>
        </div>
      </div>

      {/* MOBILE SIDEBAR DROPDOWN */}
      <div className="lg:hidden sticky top-[100px] z-40 bg-card border-b border-border shadow-sm">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-secondary"
        >
          <span className="flex items-center gap-2">
            {sidebarItems.find(i => i.id === activeSection)?.icon && (() => {
              const Icon = sidebarItems.find(i => i.id === activeSection)!.icon;
              return <Icon className="w-4 h-4 text-primary" />;
            })()}
            {sidebarItems.find(i => i.id === activeSection)?.label}
          </span>
          <ChevronRight className={`w-4 h-4 transition-transform ${mobileMenuOpen ? "rotate-90" : ""}`} />
        </button>
        {mobileMenuOpen && (
          <div className="bg-card border-t border-border max-h-[50vh] overflow-y-auto">
            {sidebarItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                  activeSection === item.id ? "text-primary bg-primary/5 font-semibold" : "text-muted-foreground hover:text-primary"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* MAIN 2-COLUMN LAYOUT */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* LEFT SIDEBAR - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-[140px]">
              <nav className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="bg-primary px-4 py-3">
                  <h3 className="text-primary-foreground font-bold text-sm">Quick Navigation</h3>
                </div>
                {sidebarItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-all duration-200 border-l-3 ${
                      activeSection === item.id
                        ? "text-primary bg-primary/5 font-semibold border-l-primary border-l-[3px]"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5 border-l-transparent border-l-[3px]"
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    <span className="text-left">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* RIGHT CONTENT AREA */}
          <main className="flex-1 min-w-0 space-y-10">

            {/* SECTION 1: About + HOD */}
            <div ref={setRef("about")} id="about" className="scroll-mt-40">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <ScrollReveal>
                    <h2 className="text-2xl font-bold text-secondary mb-4" style={{ fontFamily: "var(--font-display)" }}>About Us</h2>
                    <p className="text-muted-foreground leading-relaxed">{dept.about}</p>
                  </ScrollReveal>
                </div>
                <div>
                  <ScrollReveal delay={0.1}>
                    <Card className="overflow-hidden border-2 border-primary/10">
                      <div className="bg-gradient-to-br from-primary to-primary/80 p-4 text-center">
                        <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center overflow-hidden mb-2">
                          {dept.hod.image ? <img src={dept.hod.image} alt={dept.hod.name} className="w-full h-full object-cover" /> : <Users className="w-8 h-8 text-primary-foreground" />}
                        </div>
                        <h4 className="text-primary-foreground font-bold text-sm">{dept.hod.name}</h4>
                        <p className="text-primary-foreground/80 text-xs">{dept.hod.designation}</p>
                        <p className="text-primary-foreground/60 text-xs mt-0.5">{dept.hod.qualification}</p>
                      </div>
                      <CardContent className="p-3 text-center">
                        <span className="text-xs font-semibold text-accent-foreground bg-accent/20 px-2 py-1 rounded-full">Head of Department</span>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </div>
              </div>

              {/* SECTION 2: Vision & Mission */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <ScrollReveal>
                  <Card className="h-full border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Eye className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-lg text-secondary">Vision</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{dept.vision}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <Card className="h-full border-l-4 border-l-accent">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-accent-foreground" />
                        <h3 className="font-bold text-lg text-secondary">Mission</h3>
                      </div>
                      <ul className="space-y-2">
                        {dept.mission.map((m, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex gap-2">
                            <span className="text-primary font-bold shrink-0">M{i + 1}:</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>

              {/* SECTION 3: Key Achievements Stats */}
              <div className="mt-8">
                <ScrollReveal>
                  <h3 className="text-xl font-bold text-secondary mb-4" style={{ fontFamily: "var(--font-display)" }}>Key Achievements</h3>
                </ScrollReveal>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Consultancy", value: dept.achievements.consultancyAmount, icon: Briefcase },
                    { label: "Research Projects", value: dept.achievements.researchProjects, icon: FlaskConical },
                    { label: "Patents", value: dept.achievements.patents, icon: FileText },
                    { label: "Publications", value: dept.achievements.publications, icon: BookOpen },
                  ].map((stat, i) => (
                    <ScrollReveal key={stat.label} delay={i * 0.05}>
                      <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-4">
                          <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                          <p className="text-xl md:text-2xl font-bold text-secondary">{stat.value}</p>
                          <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* SECTION 4: Teaching Approach */}
              <div className="mt-8">
                <ScrollReveal>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-5 h-5 text-accent-foreground" />
                        <h3 className="font-bold text-lg text-secondary">Teaching Approach</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{dept.teachingApproach.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {dept.teachingApproach.points.map((p, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>

              {/* SECTION 5: Courses + Contact */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <ScrollReveal>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-secondary mb-3">Courses Offered</h3>
                      <ul className="space-y-2">
                        {dept.courses.map((c, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-secondary mb-3">Contact Us</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="w-4 h-4 text-primary shrink-0" />
                          <a href={`mailto:${dept.contactInfo.email}`} className="hover:text-primary transition-colors">{dept.contactInfo.email}</a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="w-4 h-4 text-primary shrink-0" />
                          {dept.contactInfo.phone}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Building2 className="w-4 h-4 text-primary shrink-0" />
                          MITS, Madanapalle, Andhra Pradesh
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>

            {/* FACULTY */}
            <div ref={setRef("faculty")} id="faculty" className="scroll-mt-40">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>People / Faculty</h2>
              </ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {dept.faculty.map((f, i) => (
                  <ScrollReveal key={i} delay={i * 0.03}>
                    <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-4">
                        <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-2">
                          <Users className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <h4 className="font-semibold text-sm text-secondary">{f.name}</h4>
                        <p className="text-xs text-muted-foreground">{f.designation}</p>
                        <p className="text-xs text-primary/70 mt-0.5">{f.qualification}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* ACHIEVEMENTS */}
            <div ref={setRef("achievements")} id="achievements" className="scroll-mt-40">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Achievements</h2>
              </ScrollReveal>
              <div className="space-y-4">
                <h3 className="font-semibold text-primary">Faculty Achievements</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {dept.detailedAchievements.filter(a => a.type === "faculty").map((a, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                      <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-sm text-secondary">{a.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{a.description}</p>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
                <h3 className="font-semibold text-accent-foreground mt-6">Student Achievements</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {dept.detailedAchievements.filter(a => a.type === "student").map((a, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                      <Card className="border-l-4 border-l-accent hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-sm text-secondary">{a.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{a.description}</p>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

            {/* FACILITIES */}
            <div ref={setRef("facilities")} id="facilities" className="scroll-mt-40">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Facilities</h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {dept.facilities.map((f, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <FlaskConical className="w-5 h-5 text-primary" />
                          <h4 className="font-bold text-secondary">{f.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{f.description}</p>
                        {f.equipment && f.equipment.length > 0 && (
                          <div>
                            <p className="text-xs font-semibold text-secondary mb-1">Key Equipment:</p>
                            <div className="flex flex-wrap gap-1.5">
                              {f.equipment.map((e, j) => (
                                <span key={j} className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{e}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* PATENTS */}
            <div ref={setRef("patents")} id="patents" className="scroll-mt-40">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Patents</h2>
              </ScrollReveal>
              {dept.patents.length > 0 ? (
                <div className="space-y-3">
                  {["Granted", "Published", "Filed"].map(status => {
                    const filtered = dept.patents.filter(p => p.status === status);
                    if (filtered.length === 0) return null;
                    return (
                      <div key={status}>
                        <h3 className="font-semibold text-sm text-primary mb-2">{status} ({filtered.length})</h3>
                        <div className="space-y-2">
                          {filtered.map((p, i) => (
                            <Card key={i} className="hover:shadow-md transition-shadow">
                              <CardContent className="p-3 flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-medium text-secondary">{p.title}</p>
                                  {p.year && <p className="text-xs text-muted-foreground">Year: {p.year}</p>}
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                  status === "Granted" ? "bg-green-100 text-green-700" : status === "Published" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"
                                }`}>{status}</span>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">No patent records available.</p>
              )}
            </div>

            {/* PUBLICATIONS */}
            <div ref={setRef("publications")} id="publications" className="scroll-mt-40">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Publications</h2>
              </ScrollReveal>
              {["journal", "conference"].map(type => {
                const filtered = dept.publications.filter(p => p.type === type);
                if (filtered.length === 0) return null;
                return (
                  <div key={type} className="mb-6">
                    <h3 className="font-semibold text-primary mb-3 capitalize">{type === "journal" ? "Journal Publications" : "Conference Publications"}</h3>
                    <div className="space-y-2">
                      {filtered.map((p, i) => (
                        <Card key={i} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-3">
                            <p className="text-sm font-medium text-secondary">{p.title}</p>
                            <div className="flex items-center gap-3 mt-1">
                              {p.authors && <span className="text-xs text-muted-foreground">{p.authors}</span>}
                              <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{p.year}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CONSULTANCY */}
            <div ref={setRef("consultancy")} id="consultancy" className="scroll-mt-40">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Consultancy</h2>
              </ScrollReveal>
              <div className="space-y-3">
                {dept.consultancy.map((c, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm text-secondary">{c.title}</p>
                          <p className="text-xs text-muted-foreground">Agency: {c.agency}</p>
                        </div>
                        {c.amount && <span className="text-sm font-bold text-primary">{c.amount}</span>}
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* EVENTS */}
            <div ref={setRef("events")} id="events" className="scroll-mt-40">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Events</h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-4">
                {dept.events.map((e, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-xs text-muted-foreground">{e.date}</span>
                        </div>
                        <h4 className="font-semibold text-sm text-secondary">{e.title}</h4>
                        {e.description && <p className="text-xs text-muted-foreground mt-1">{e.description}</p>}
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* MoU */}
            <div ref={setRef("mou")} id="mou" className="scroll-mt-40">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Memoranda of Understanding (MoU)</h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-4">
                {dept.mous.map((m, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <Card className="hover:shadow-md transition-shadow border-l-4 border-l-primary/30">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-sm text-secondary">{m.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{m.purpose}</p>
                        {m.year && <span className="text-xs bg-muted px-2 py-0.5 rounded-full mt-2 inline-block">{m.year}</span>}
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* PLACEMENT / INTERNSHIP */}
            <div ref={setRef("placement")} id="placement" className="scroll-mt-40">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Placement / Internship</h2>
              </ScrollReveal>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-4">
                    <p className="text-2xl font-bold text-primary">{dept.placement.percentage}</p>
                    <p className="text-xs text-muted-foreground">Placed</p>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-accent/10 to-accent/20">
                  <CardContent className="p-4">
                    <p className="text-2xl font-bold text-accent-foreground">{dept.placement.avgPackage}</p>
                    <p className="text-xs text-muted-foreground">Avg Package</p>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="p-4">
                    <p className="text-2xl font-bold text-green-700">{dept.placement.highestPackage}</p>
                    <p className="text-xs text-muted-foreground">Highest</p>
                  </CardContent>
                </Card>
              </div>
              <h3 className="font-semibold text-secondary mb-3">Top Recruiters</h3>
              <div className="flex flex-wrap gap-2">
                {dept.placement.recruiters.map((r, i) => (
                  <span key={i} className="bg-muted text-muted-foreground text-sm px-3 py-1.5 rounded-full font-medium">{r}</span>
                ))}
              </div>
            </div>

            {/* STUDENT PROJECTS */}
            <div ref={setRef("projects")} id="projects" className="scroll-mt-40">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Student Projects</h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-4">
                {dept.studentProjects.map((p, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-sm text-secondary">{p.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{p.students}</p>
                        {p.description && <p className="text-xs text-muted-foreground mt-2">{p.description}</p>}
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* SUBJECTS */}
            <div ref={setRef("subjects")} id="subjects" className="scroll-mt-40">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Subjects</h2>
              </ScrollReveal>
              {["core", "elective", "professional-skill", "optional-training"].map(type => {
                const filtered = dept.subjects.filter(s => s.type === type);
                if (filtered.length === 0) return null;
                const label = type === "core" ? "Core Subjects" : type === "elective" ? "Elective Subjects" : type === "professional-skill" ? "Professional Skills" : "Optional Training (Industry)";
                const semesters = [...new Set(filtered.map(s => s.semester))].sort((a, b) => a - b);
                return (
                  <div key={type} className="mb-6">
                    <h3 className="font-semibold text-primary mb-3">{label}</h3>
                    {semesters.map(sem => (
                      <div key={sem} className="mb-3">
                        <p className="text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">Semester {sem}</p>
                        <div className="flex flex-wrap gap-2">
                          {filtered.filter(s => s.semester === sem).map((s, i) => (
                            <span key={i} className="bg-card border border-border text-secondary text-sm px-3 py-1.5 rounded-lg">{s.name}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DepartmentPage;
