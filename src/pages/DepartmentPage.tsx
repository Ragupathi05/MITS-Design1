import { useState, useEffect } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDepartmentByKey } from "@/data/departmentData";
import { Card, CardContent } from "@/components/ui/card";
import InlineFacultyProfile from "@/components/InlineFacultyProfile";
import { getFacultyProfile, type FacultyProfile } from "@/data/facultyProfileData";
import {
  Users, Award, FlaskConical, FileText, BookOpen, Calendar, Handshake, Briefcase, FolderOpen, GraduationCap, Building2, ChevronRight, Eye, Target, Trophy, Lightbulb, Mail, Phone
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
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<FacultyProfile | null>(null);
  const dept = getDepartmentByKey(deptKey || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!dept && deptKey) {
      navigate('/departments', { replace: true });
      return;
    }
    const pathParts = location.pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart && sidebarItems.some(item => item.id === lastPart)) {
      setActiveSection(lastPart);
    } else if (location.hash) {
      const hash = location.hash.replace('#', '');
      if (hash && sidebarItems.some(item => item.id === hash)) {
        setActiveSection(hash);
      }
    }
  }, [location.pathname, location.hash]);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const basePath = `/department/${deptKey}`;
    const newPath = sectionId === "about" ? basePath : `${basePath}/${sectionId}`;
    navigate(newPath, { replace: true });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  useEffect(() => {
    if (!dept) {
      navigate('/departments', { replace: true });
    }
  }, [dept]);

  if (!dept) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="relative h-[240px] sm:h-[300px] md:h-[380px] overflow-hidden">
        <img src={dept.bannerImage} alt={dept.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 pt-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white drop-shadow-2xl" style={{ fontFamily: "var(--font-display)" }}
            >
              {dept.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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

      <div className="xl:hidden sticky top-16 md:top-[100px] z-40 bg-card border-b border-border shadow-sm">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-secondary"
        >
          <span className="flex items-center gap-2">
            {(() => {
              const activeItem = sidebarItems.find(i => i.id === activeSection);
              if (activeItem) {
                const Icon = activeItem.icon;
                return <Icon className="w-4 h-4 text-primary" />;
              }
              return null;
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
                onClick={() => handleSectionChange(item.id)}
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

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {!selectedProfile && (
          <aside className="hidden xl:block w-64 shrink-0">
            <div className="sticky top-[140px]">
              <nav className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="bg-primary px-4 py-3">
                  <h3 className="text-primary-foreground font-bold text-sm">Quick Navigation</h3>
                </div>
                {sidebarItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleSectionChange(item.id)}
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
          )}

          <main id="department-content" className="flex-1 min-w-0 space-y-10">
            {activeSection === "about" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-secondary mb-4" style={{ fontFamily: "var(--font-display)" }}>About Us</h2>
                    <p className="text-muted-foreground leading-relaxed">{dept.about}</p>
                  </div>
                  <div>
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
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <Card className="h-full border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Eye className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-lg text-secondary">Vision</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{dept.vision}</p>
                    </CardContent>
                  </Card>
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
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-secondary mb-4" style={{ fontFamily: "var(--font-display)" }}>Key Achievements</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Consultancy", value: dept.achievements.consultancyAmount, icon: Briefcase },
                      { label: "Research Projects", value: dept.achievements.researchProjects, icon: FlaskConical },
                      { label: "Patents", value: dept.achievements.patents, icon: FileText },
                      { label: "Publications", value: dept.achievements.publications, icon: BookOpen },
                    ].map((stat) => (
                      <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-4">
                          <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                          <p className="text-xl md:text-2xl font-bold text-secondary">{stat.value}</p>
                          <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
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
                </div>
              </motion.div>
            )}

            {activeSection === "faculty" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {selectedProfile ? (
                  <InlineFacultyProfile 
                    profile={selectedProfile}
                    onBack={() => setSelectedProfile(null)}
                  />
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>People / Faculty</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {dept.faculty.map((f, i) => {
                        const handleCardClick = () => {
                          if (f.profileUrl) {
                            window.open(f.profileUrl, "_blank", "noopener,noreferrer");
                            return;
                          }
                          let profile = getFacultyProfile(deptKey || "", f.name);
                          if (!profile) {
                            const sections = [];
                            if (f.profile?.education) {
                              sections.push({
                                title: "Details of Educational Qualification",
                                content: f.profile.education.map((e, i) => ({ "S.No": String(i+1), Course: e.degree, Specialization: e.specializatio, "College Name/University": e.university, "Year of Passing": e.year }))
                              });
                            }
                            if (f.profile?.researchAreas) {
                              sections.push({ title: "Research Areas", content: f.profile.researchAreas });
                            }
                            if (f.profile?.publications) {
                              sections.push({
                                title: "Publication Details",
                                content: f.profile.publications.map((p, i) => ({ "S.No": String(i+1), "Publication Affiliation": "MITS", "Academic Year": p.year, "Author Position": "1", "Details of Research Publication": p.title, Indexing: p.index, Publication: "Article", "Journal Quartile": "None" }))
                              });
                            }
                            if (f.profile?.patents) {
                              sections.push({
                                title: "Patents",
                                content: f.profile.patents.map((p, i) => ({ "S.No": String(i+1), Affiliation: "MITS", "Academic Year": p.year, "Title of the Patent": p.title, Status: p.status }))
                              });
                            }
                            if (f.profile?.awards) {
                              sections.push({ title: "Awards/Achievements", content: f.profile.awards });
                            }
                            profile = {
                              name: f.name,
                              designation: f.designation,
                              image: f.image,
                              email: f.email,
                              sections: sections.length > 0 ? sections : []
                            };
                          }
                          setSelectedProfile(profile);
                        };
                        return (
                          <div
                            key={i}
                            className="group relative bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 flex flex-col items-center text-center cursor-pointer"
                            onClick={handleCardClick}
                          >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center mb-4 overflow-hidden border-2 border-transparent group-hover:border-primary/20 transition-colors shadow-sm">
                              {f.image ? (
                                <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                              ) : (
                                <Users className="w-8 h-8 text-slate-300" />
                              )}
                            </div>
                            <h4 className="font-extrabold text-secondary mb-1" style={{ fontFamily: "var(--font-display)" }}>{f.name}</h4>
                            <p className="text-[13px] text-primary font-semibold mb-0.5">{f.designation}</p>
                            <p className="text-[11px] text-slate-500 mb-3 uppercase tracking-wider">{f.qualification}</p>

                            <div className="mt-auto pt-4 w-full flex justify-center border-t border-slate-50">
                              <a 
                                href={f.profileUrl || `https://mits.ac.in/facultyprofile/${encodeURIComponent(f.name)}`}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary bg-primary/5 px-4 py-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors uppercase tracking-widest no-underline"
                              >
                                View Profile <ChevronRight className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {activeSection === "achievements" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Achievements</h2>
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">Faculty Achievements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {dept.detailedAchievements.filter(a => a.type === "faculty").map((a, i) => (
                      <Card key={i} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-sm text-secondary">{a.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{a.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <h3 className="font-semibold text-accent-foreground mt-6">Student Achievements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {dept.detailedAchievements.filter(a => a.type === "student").map((a, i) => (
                      <Card key={i} className="border-l-4 border-l-accent hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-sm text-secondary">{a.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{a.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "facilities" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Facilities</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {dept.facilities.map((f, i) => (
                    <Card key={i} className="hover:shadow-lg transition-all duration-300">
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
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "patents" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Patents</h2>
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
              </motion.div>
            )}

            {activeSection === "publications" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Publications</h2>
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
              </motion.div>
            )}

            {activeSection === "consultancy" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Consultancy</h2>
                <div className="space-y-3">
                  {dept.consultancy.map((c, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm text-secondary">{c.title}</p>
                          <p className="text-xs text-muted-foreground">Agency: {c.agency}</p>
                        </div>
                        {c.amount && <span className="text-sm font-bold text-primary">{c.amount}</span>}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "events" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Events</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {dept.events.map((e, i) => (
                    <Card key={i} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-xs text-muted-foreground">{e.date}</span>
                        </div>
                        <h4 className="font-semibold text-sm text-secondary">{e.title}</h4>
                        {e.description && <p className="text-xs text-muted-foreground mt-1">{e.description}</p>}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "mou" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Memoranda of Understanding (MoU)</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {dept.mous.map((m, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow border-l-4 border-l-primary/30">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-sm text-secondary">{m.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{m.purpose}</p>
                        {m.year && <span className="text-xs bg-muted px-2 py-0.5 rounded-full mt-2 inline-block">{m.year}</span>}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "placement" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Placement / Internship</h2>
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
                  <Card className="text-center bg-gradient-to-br from-muted to-muted/50">
                    <CardContent className="p-4">
                      <p className="text-2xl font-bold text-secondary">{dept.placement.highestPackage}</p>
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
              </motion.div>
            )}

            {activeSection === "projects" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Student Projects</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {dept.studentProjects.map((p, i) => (
                    <Card key={i} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-sm text-secondary">{p.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{p.students}</p>
                        {p.description && <p className="text-xs text-muted-foreground mt-2">{p.description}</p>}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "subjects" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: "var(--font-display)" }}>Subjects</h2>
                {["core", "elective", "professional-skill", "optional-training"].map(type => {
                  const filtered = dept.subjects.filter(s => s.type === type);
                  if (filtered.length === 0) return null;
                  const label = type === "core" ? "Core Subjects" : type === "elective" ? "Elective Subjects" : type === "professional-skill" ? "Professional Skills" : "Optional Training (Industry)";
                  return (
                    <div key={type} className="mb-6">
                      <h3 className="font-semibold text-primary mb-3">{label}</h3>
                      <div className="flex flex-wrap gap-2">
                        {filtered.map((s, i) => (
                          <span key={i} className="bg-card border border-border text-secondary text-sm px-3 py-1.5 rounded-lg">
                            {s.name} <span className="text-xs text-muted-foreground ml-1">(Sem {s.semester})</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DepartmentPage;