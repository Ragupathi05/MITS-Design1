import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ArrowRight, Users, BookOpen, Microscope, Award, Globe, Search, Filter, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const Departments = () => {
  const [selectedDept, setSelectedDept] = useState("cse");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const departments = {
    cse: {
      name: "Computer Science & Engineering",
      type: "Engineering",
      established: "2005",
      icon: Microscope,
      mission: "To prepare students as world-class computer science professionals with expertise in emerging technologies and strong ethical values.",
      highlights: [
        "Advanced curriculum covering AI, ML, Cloud Computing, and Cybersecurity",
        "Industry partnerships with tech giants like Google, Microsoft, and Amazon",
        "State-of-the-art computing labs and data centers",
        "Internship opportunities at leading tech companies",
        "98% placement rate with average package ₹18 LPA"
      ],
      facilities: [
        "High-performance computing labs with 100+ workstations",
        "AI/ML innovation hub with GPU clusters",
        "Cybersecurity research center",
        "Cloud computing infrastructure",
        "Programming languages and development tools lab"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Artificial Intelligence & Machine Learning",
        "Cloud Computing & DevOps",
        "Cybersecurity & Data Protection",
        "Web Development & Mobile Apps",
        "Database Management Systems",
        "Computer Networks",
        "Software Engineering"
      ],
      faculty: 22,
      students: 540,
      specialization: ["AI & ML", "Cloud Computing", "Cybersecurity", "Big Data Analytics"]
    },
    ece: {
      name: "Electronics & Communication Engineering",
      type: "Engineering",
      established: "2005",
      icon: Award,
      mission: "To nurture skilled engineers in electronics and communication with expertise in modern communication systems and embedded systems.",
      highlights: [
        "Specialization in 5G networks, IoT, and embedded systems",
        "Advanced telecommunications and signal processing labs",
        "Industry collaborations with telecom companies",
        "Research opportunities in RF and microwave engineering",
        "90% placement rate with average package ₹12 LPA"
      ],
      facilities: [
        "RF & Microwave engineering laboratory",
        "Digital signal processing lab",
        "Communication systems test bed",
        "Embedded systems development center",
        "Telecommunications equipment lab"
      ],
      courses: [
        "Analog & Digital Electronics",
        "Signals & Systems",
        "Microprocessors & Microcontrollers",
        "Communication Systems",
        "Electromagnetic Theory",
        "RF & Microwave Engineering",
        "Digital Signal Processing",
        "VLSI Design"
      ],
      faculty: 12,
      students: 270,
      specialization: ["5G Networks", "IoT", "Embedded Systems", "RF Engineering"]
    },
    eee: {
      name: "Electrical & Electronics Engineering",
      type: "Engineering",
      established: "2007",
      icon: Globe,
      mission: "To produce electrical engineers capable of designing, developing, and implementing electrical systems for sustainable energy solutions.",
      highlights: [
        "Focus on power systems, renewable energy, and power electronics",
        "Advanced power system analysis and simulation labs",
        "Research in smart grids and renewable energy",
        "Industry partnerships with power generation companies",
        "85% placement rate with average package ₹10 LPA"
      ],
      facilities: [
        "High voltage laboratory",
        "Power electronics and drives lab",
        "Electrical machines laboratory",
        "Power systems simulation center",
        "Renewable energy research lab"
      ],
      courses: [
        "Circuit Theory & Analysis",
        "Electrical Machines",
        "Power Systems",
        "Power Electronics",
        "Control Systems",
        "Renewable Energy Sources",
        "Electrical Safety",
        "High Voltage Engineering"
      ],
      faculty: 10,
      students: 270,
      specialization: ["Power Systems", "Renewable Energy", "Smart Grids", "Power Electronics"]
    },
    mech: {
      name: "Mechanical Engineering",
      type: "Engineering",
      established: "2006",
      icon: Users,
      mission: "To develop mechanical engineers with strong fundamentals and expertise in design, manufacturing, and thermal systems.",
      highlights: [
        "Comprehensive programs in mechanical design and manufacturing",
        "Advanced CAD/CAM and simulation facilities",
        "Automotive and aerospace industry partnerships",
        "Research in thermal engineering and fluid mechanics",
        "88% placement rate with average package ₹11 LPA"
      ],
      facilities: [
        "CAD/CAM laboratory with latest software",
        "Manufacturing and workshop facilities",
        "Thermal & fluid mechanics lab",
        "Dynamics and vibration lab",
        "Hydraulics and pneumatics center"
      ],
      courses: [
        "Engineering Mechanics",
        "Thermodynamics",
        "Fluid Mechanics",
        "Machine Design",
        "Manufacturing Technology",
        "Automotive Engineering",
        "Heat Transfer",
        "CAD/CAM Applications"
      ],
      faculty: 11,
      students: 270,
      specialization: ["Automotive Engineering", "Manufacturing", "Thermal Systems", "Aerospace"]
    },
    civil: {
      name: "Civil Engineering",
      type: "Engineering",
      established: "2008",
      icon: BookOpen,
      mission: "To prepare civil engineers for designing and constructing sustainable infrastructure with advanced engineering solutions.",
      highlights: [
        "Specialization in structural design and construction management",
        "Advanced building information modeling (BIM) labs",
        "Infrastructure and highway projects",
        "Sustainability and green building focus",
        "80% placement rate with average package ₹9 LPA"
      ],
      facilities: [
        "Structural testing laboratory",
        "Materials testing center",
        "BIM and CAD laboratory",
        "Geotechnical engineering lab",
        "Environmental engineering facilities"
      ],
      courses: [
        "Structural Analysis & Design",
        "Soil Mechanics",
        "Construction Management",
        "Transportation Engineering",
        "Water Resources Engineering",
        "Environmental Engineering",
        "Building Information Modeling",
        "Sustainable Infrastructure"
      ],
      faculty: 9,
      students: 270,
      specialization: ["Structural Engineering", "Geotechnical", "Water Resources", "Sustainability"]
    },
    physics: {
      name: "Physics",
      type: "Science",
      established: "2010",
      icon: Microscope,
      mission: "To impart comprehensive knowledge in physics and conduct research in fundamental and applied sciences.",
      highlights: [
        "Advanced laboratories for experimental and theoretical physics",
        "Research in condensed matter physics and optics",
        "Equipment for quantum mechanics and particle physics studies",
        "Strong foundation for higher studies and research careers",
        "100% placement in research institutions and academia"
      ],
      facilities: [
        "Advanced optics and photonics laboratory",
        "Condensed matter physics lab",
        "Nuclear physics facilities",
        "Spectroscopy center",
        "Computational physics lab"
      ],
      courses: [
        "Classical Mechanics",
        "Thermodynamics & Statistical Mechanics",
        "Quantum Mechanics",
        "Electromagnetism",
        "Optics & Modern Physics",
        "Nuclear & Particle Physics",
        "Solid State Physics",
        "Astrophysics"
      ],
      faculty: 8,
      students: 180,
      specialization: ["Quantum Physics", "Astrophysics", "Material Science", "Optics"]
    }
  };

  const deptKeys = Object.keys(departments) as (keyof typeof departments)[];
  const currentDept = departments[selectedDept];
  const CurrentIcon = currentDept.icon;

  // Organize departments by category
  const engineeringDepts = deptKeys.filter(key => departments[key].type === "Engineering");
  const scienceDepts = deptKeys.filter(key => departments[key].type === "Science");

  // Filter departments based on search and category
  const filterDepts = (depts: (keyof typeof departments)[]) => {
    return depts.filter(key => {
      const dept = departments[key];
      const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           key.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === "all" || dept.type === filterCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const filteredEngineeringDepts = filterDepts(engineeringDepts);
  const filteredScienceDepts = filterDepts(scienceDepts);

  // Department Card Component
  const DeptCard = ({ deptKey }: { deptKey: keyof typeof departments }) => {
    const dept = departments[deptKey];
    const DeptIcon = dept.icon;
    return (
      <ScrollReveal>
        <Link to="#" onClick={(e) => { e.preventDefault(); setSelectedDept(deptKey); }}>
          <div className="bg-card rounded-xl border border-border hover:border-primary/30 shadow-md hover:shadow-lg transition-all duration-300 group h-full overflow-hidden">
            {/* Gold accent bar at top */}
            <div className="h-1 bg-secondary group-hover:h-1.5 transition-all duration-300" />
            
            <div className="p-6">
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <DeptIcon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>

              {/* Department Name */}
              <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {dept.name}
              </h3>

              {/* Type Badge */}
              <div className="mb-3">
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded">
                  {dept.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:text-foreground/70 transition-colors">
                {dept.mission.substring(0, 80)}...
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Faculty</p>
                  <p className="font-bold text-foreground">{dept.faculty}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Students</p>
                  <p className="font-bold text-foreground">{dept.students}</p>
                </div>
              </div>

              {/* View Button */}
              <button className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                View Department <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </Link>
      </ScrollReveal>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Professional Banner */}
        <div className="relative h-80 md:h-96 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <ScrollReveal>
              <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3 opacity-90">Academics</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Academic Departments
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Excellence Across Disciplines
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="#" className="hover:text-foreground transition-colors">Academics</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-semibold">Departments</span>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="container mx-auto px-4 py-12">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11 border-border focus:border-primary focus:ring-primary"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="flex-1 h-11 px-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
                >
                  <option value="all">All Departments</option>
                  <option value="Engineering">Engineering & Technology</option>
                  <option value="Science">Sciences</option>
                </select>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Engineering & Technology Section */}
        {filteredEngineeringDepts.length > 0 && (
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <div className="mb-12">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                    Engineering & Technology
                  </h2>
                  <div className="w-16 h-1 bg-secondary rounded-full" />
                  <p className="text-muted-foreground mt-4 max-w-2xl">
                    Cutting-edge programs designed to prepare the engineers and technologists of tomorrow.
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {filteredEngineeringDepts.map(key => (
                  <DeptCard key={key} deptKey={key} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sciences Section */}
        {filteredScienceDepts.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <div className="mb-12">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                    Sciences
                  </h2>
                  <div className="w-16 h-1 bg-secondary rounded-full" />
                  <p className="text-muted-foreground mt-4 max-w-2xl">
                    Rigorous academic programs combining theoretical knowledge with practical research experience.
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {filteredScienceDepts.map(key => (
                  <DeptCard key={key} deptKey={key} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No results message */}
        {filteredEngineeringDepts.length === 0 && filteredScienceDepts.length === 0 && (
          <div className="container mx-auto px-4 py-16 text-center">
            <p className="text-muted-foreground text-lg">No departments match your search criteria.</p>
          </div>
        )}

        {/* Department Details Section */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            {selectedDept && currentDept && (
              <div className="space-y-8">
                {/* Department Header */}
                <ScrollReveal>
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-border rounded-xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <CurrentIcon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full">
                            {currentDept.type} • Est. {currentDept.established}
                          </span>
                        </div>
                        <h2 className="font-display text-3xl font-bold text-foreground mb-3">{currentDept.name}</h2>
                        <p className="text-foreground/80 leading-relaxed mb-6 max-w-3xl">{currentDept.mission}</p>
                        <div className="flex flex-wrap gap-8 text-sm">
                          <div>
                            <p className="text-muted-foreground uppercase tracking-wider text-xs font-semibold mb-1">Faculty Members</p>
                            <p className="text-2xl font-bold text-secondary">{currentDept.faculty}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground uppercase tracking-wider text-xs font-semibold mb-1">Total Students</p>
                            <p className="text-2xl font-bold text-secondary">{currentDept.students}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground uppercase tracking-wider text-xs font-semibold mb-1">Specializations</p>
                            <p className="text-2xl font-bold text-secondary">{currentDept.specialization.length}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Highlights */}
                <ScrollReveal delay={0.1}>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-6">Department Highlights</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentDept.highlights.map((highlight, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 rounded-lg border border-border hover:border-secondary hover:bg-secondary/5 transition-all group">
                          <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <p className="text-foreground/80 group-hover:text-foreground transition-colors">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Facilities & Courses */}
                <ScrollReveal delay={0.2}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-6">Facilities & Infrastructure</h3>
                      <div className="space-y-3">
                        {currentDept.facilities.map((facility, i) => (
                          <div key={i} className="flex gap-3 items-start p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold group-hover:scale-110 transition-transform">✓</span>
                            <p className="text-foreground/80 text-sm group-hover:text-foreground transition-colors">{facility}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-6">Core Courses</h3>
                      <div className="space-y-3">
                        {currentDept.courses.map((course, i) => (
                          <div key={i} className="flex gap-3 items-start p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                            <span className="flex-shrink-0 text-secondary font-bold group-hover:scale-125 transition-transform origin-left">→</span>
                            <p className="text-foreground/80 text-sm group-hover:text-foreground transition-colors">{course}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Specializations */}
                <ScrollReveal delay={0.3}>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-6">Specialization Areas</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {currentDept.specialization.map((spec, i) => (
                        <div
                          key={i}
                          className="bg-white border border-border rounded-lg p-5 text-center hover:border-secondary hover:shadow-md transition-all group cursor-pointer"
                        >
                          <div className="w-3 h-3 bg-secondary rounded-full mx-auto mb-3 group-hover:scale-150 transition-transform" />
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{spec}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* CTA */}
                <ScrollReveal delay={0.4}>
                  <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 md:p-10 text-center border border-primary/30">
                    <h3 className="font-display text-2xl font-bold text-white mb-3">Ready to Join?</h3>
                    <p className="text-white/90 mb-6 max-w-xl mx-auto">
                      Discover excellence in {currentDept.name.toLowerCase()} and shape your future at MITS.
                    </p>
                    <Link to="/admissions">
                      <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold inline-flex items-center gap-2 px-8 h-11">
                        Apply Now <ArrowRight size={18} />
                      </Button>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose MITS */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Why Choose MITS Departments?
                </h2>
                <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <ScrollReveal delay={0.1}>
                <Card className="border-border p-6 text-center hover:shadow-lg hover:border-secondary transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Expert Faculty</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    Experienced educators with industry and research backgrounds
                  </p>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <Card className="border-border p-6 text-center hover:shadow-lg hover:border-secondary transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all">
                    <Microscope className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Modern Labs</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    State-of-the-art facilities and equipment for hands-on learning
                  </p>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <Card className="border-border p-6 text-center hover:shadow-lg hover:border-secondary transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all">
                    <Globe className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Global Recognition</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    Accredited and recognized internationally for academic excellence
                  </p>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Departments;
