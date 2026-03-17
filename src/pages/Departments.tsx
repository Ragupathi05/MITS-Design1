import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ArrowRight, Users, BookOpen, Microscope, Award, Globe, Search, Filter, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const schools = [
  {
    name: "School of Engineering",
    description: "Cutting-edge programs designed to prepare the engineers and technologists of tomorrow.",
    departments: [
      {
        key: "ce",
        name: "Civil Engineering",
        shortName: "CE",
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
      {
        key: "eee",
        name: "Electrical & Electronics Engineering",
        shortName: "EEE",
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
      {
        key: "me",
        name: "Mechanical Engineering",
        shortName: "ME",
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
      {
        key: "ece",
        name: "Electronics & Communication Engineering",
        shortName: "ECE",
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
      {
        key: "bioinfo",
        name: "Bioinformatics",
        shortName: "Bioinformatics",
        established: "2010",
        icon: Microscope,
        mission: "To train students at the intersection of biology and computing, enabling breakthroughs in genomics, drug discovery, and computational biology.",
        highlights: [
          "Interdisciplinary curriculum combining biology and computer science",
          "Advanced genomics and proteomics research labs",
          "Collaborations with biotech and pharmaceutical companies",
          "Research in computational drug discovery",
          "Strong placement in biotech and research sectors"
        ],
        facilities: [
          "Genomics and sequencing laboratory",
          "Computational biology research center",
          "Bioinformatics software and tools lab",
          "Proteomics analysis facility",
          "Molecular biology laboratory"
        ],
        courses: [
          "Molecular Biology & Genetics",
          "Computational Biology",
          "Genomics & Proteomics",
          "Bioinformatics Algorithms",
          "Structural Bioinformatics",
          "Drug Discovery & Design",
          "Systems Biology",
          "Biostatistics"
        ],
        faculty: 8,
        students: 120,
        specialization: ["Genomics", "Computational Drug Discovery", "Proteomics", "Systems Biology"]
      }
    ]
  },
  {
    name: "School of Computing",
    description: "Innovative computing programs preparing students for the digital future.",
    departments: [
      {
        key: "cse",
        name: "Computer Science & Engineering",
        shortName: "CSE",
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
      {
        key: "cseds",
        name: "CSE – Data Science",
        shortName: "CSE-DS",
        established: "2019",
        icon: Globe,
        mission: "To develop data-driven problem solvers equipped with statistical, computational, and analytical skills for the modern data economy.",
        highlights: [
          "Specialized curriculum in data analytics and machine learning",
          "Industry projects with data-driven companies",
          "Advanced data visualization and big data labs",
          "Research in predictive analytics and AI",
          "95% placement rate with average package ₹16 LPA"
        ],
        facilities: [
          "Big data analytics laboratory",
          "Data visualization center",
          "Machine learning research lab",
          "Statistical computing facility",
          "Cloud data platform lab"
        ],
        courses: [
          "Statistics for Data Science",
          "Machine Learning",
          "Big Data Technologies",
          "Data Visualization",
          "Deep Learning",
          "Natural Language Processing",
          "Data Engineering",
          "Business Intelligence"
        ],
        faculty: 14,
        students: 360,
        specialization: ["Data Analytics", "Machine Learning", "Big Data", "Business Intelligence"]
      },
      {
        key: "csecs",
        name: "CSE – Cyber Security",
        shortName: "CSE-CS",
        established: "2020",
        icon: Award,
        mission: "To produce cybersecurity professionals capable of protecting digital infrastructure and combating modern cyber threats.",
        highlights: [
          "Hands-on training in ethical hacking and penetration testing",
          "Dedicated cybersecurity operations center",
          "Industry certifications integrated into curriculum",
          "Research in network security and cryptography",
          "High demand placements in security firms and government"
        ],
        facilities: [
          "Cybersecurity operations center (SOC)",
          "Ethical hacking and penetration testing lab",
          "Network security research facility",
          "Cryptography and forensics lab",
          "Secure software development center"
        ],
        courses: [
          "Network Security",
          "Ethical Hacking & Penetration Testing",
          "Cryptography",
          "Digital Forensics",
          "Secure Software Development",
          "Incident Response",
          "Cloud Security",
          "Malware Analysis"
        ],
        faculty: 10,
        students: 240,
        specialization: ["Ethical Hacking", "Network Security", "Digital Forensics", "Cloud Security"]
      },
      {
        key: "bca",
        name: "Bachelor of Computer Applications",
        shortName: "BCA",
        established: "2008",
        icon: BookOpen,
        mission: "To provide a strong foundation in computer applications and software development for students aspiring to careers in IT.",
        highlights: [
          "Comprehensive programming and application development curriculum",
          "Industry-aligned projects and internships",
          "Strong placement support for IT roles",
          "Focus on web, mobile, and enterprise applications",
          "90% placement rate in IT companies"
        ],
        facilities: [
          "Programming and development labs",
          "Web and mobile application studio",
          "Database management center",
          "Software testing facility",
          "Project development lab"
        ],
        courses: [
          "Programming in C & Java",
          "Web Technologies",
          "Database Management",
          "Operating Systems",
          "Software Engineering",
          "Mobile Application Development",
          "Computer Networks",
          "Project Management"
        ],
        faculty: 8,
        students: 180,
        specialization: ["Web Development", "Mobile Apps", "Database", "Software Testing"]
      },
      {
        key: "mca",
        name: "Master of Computer Applications",
        shortName: "MCA",
        established: "2006",
        icon: Users,
        mission: "To produce highly skilled computing professionals with advanced knowledge in software engineering and emerging technologies.",
        highlights: [
          "Advanced postgraduate curriculum in computing",
          "Research and industry project opportunities",
          "Strong alumni network in top IT companies",
          "Specializations in AI, cloud, and enterprise software",
          "95% placement rate with average package ₹14 LPA"
        ],
        facilities: [
          "Advanced computing research lab",
          "Enterprise software development center",
          "AI and cloud computing lab",
          "Research and innovation hub",
          "Industry collaboration center"
        ],
        courses: [
          "Advanced Algorithms",
          "Software Architecture",
          "Cloud Computing",
          "Artificial Intelligence",
          "Enterprise Application Development",
          "Data Science",
          "Research Methodology",
          "Project Management"
        ],
        faculty: 10,
        students: 120,
        specialization: ["Enterprise Software", "AI & Cloud", "Data Science", "Software Architecture"]
      }
    ]
  },
  {
    name: "School of Management Studies",
    description: "Developing future business leaders with strong analytical and leadership skills.",
    departments: [
      {
        key: "bba",
        name: "Bachelor of Business Administration",
        shortName: "BBA",
        established: "2010",
        icon: Users,
        mission: "To develop business-ready graduates with strong managerial, entrepreneurial, and leadership capabilities.",
        highlights: [
          "Industry-integrated curriculum with live projects",
          "Entrepreneurship development cell",
          "Guest lectures from industry leaders",
          "Strong placement in corporate and startup sectors",
          "85% placement rate with average package ₹8 LPA"
        ],
        facilities: [
          "Business simulation lab",
          "Entrepreneurship development center",
          "Case study and seminar hall",
          "Finance and trading lab",
          "Digital marketing studio"
        ],
        courses: [
          "Principles of Management",
          "Financial Accounting",
          "Marketing Management",
          "Human Resource Management",
          "Business Communication",
          "Entrepreneurship Development",
          "Operations Management",
          "Business Analytics"
        ],
        faculty: 8,
        students: 180,
        specialization: ["Marketing", "Finance", "HR Management", "Entrepreneurship"]
      },
      {
        key: "mba",
        name: "Master of Business Administration",
        shortName: "MBA",
        established: "2008",
        icon: Award,
        mission: "To cultivate strategic thinkers and ethical business leaders equipped to navigate complex global business environments.",
        highlights: [
          "AICTE approved MBA program",
          "Industry mentorship and live consulting projects",
          "National and international case competitions",
          "Strong corporate recruitment network",
          "90% placement rate with average package ₹12 LPA"
        ],
        facilities: [
          "Advanced business analytics lab",
          "Bloomberg terminal and finance center",
          "Executive seminar and conference rooms",
          "Leadership development center",
          "Digital business innovation lab"
        ],
        courses: [
          "Strategic Management",
          "Financial Management",
          "Marketing Strategy",
          "Organizational Behavior",
          "Operations & Supply Chain",
          "Business Analytics",
          "Corporate Governance",
          "International Business"
        ],
        faculty: 12,
        students: 120,
        specialization: ["Finance", "Marketing", "Operations", "Business Analytics"]
      }
    ]
  },
  {
    name: "School of AI & ML",
    description: "Pioneering artificial intelligence and machine learning education for the next generation of innovators.",
    departments: [
      {
        key: "aiml",
        name: "AI and Machine Learning",
        shortName: "AI and ML",
        established: "2020",
        icon: Microscope,
        mission: "To produce AI engineers and researchers capable of building intelligent systems that solve real-world problems.",
        highlights: [
          "Cutting-edge curriculum in deep learning, NLP, and computer vision",
          "GPU-powered AI research infrastructure",
          "Collaborations with AI-focused companies and research labs",
          "Hands-on projects in autonomous systems and generative AI",
          "96% placement rate with average package ₹20 LPA"
        ],
        facilities: [
          "GPU cluster and AI computing lab",
          "Computer vision and robotics lab",
          "NLP and speech processing center",
          "Generative AI research studio",
          "AI ethics and governance lab"
        ],
        courses: [
          "Machine Learning Fundamentals",
          "Deep Learning",
          "Natural Language Processing",
          "Computer Vision",
          "Reinforcement Learning",
          "Generative AI",
          "AI Ethics & Governance",
          "MLOps & Deployment"
        ],
        faculty: 12,
        students: 240,
        specialization: ["Deep Learning", "NLP", "Computer Vision", "Generative AI"]
      },
      {
        key: "ai",
        name: "Artificial Intelligence",
        shortName: "AI",
        established: "2021",
        icon: Globe,
        mission: "To train students in the theoretical and applied foundations of artificial intelligence for research and industry innovation.",
        highlights: [
          "Strong theoretical foundation in AI algorithms and logic",
          "Research-oriented curriculum with publication opportunities",
          "Industry tie-ups with AI product companies",
          "Focus on explainable AI and responsible AI development",
          "94% placement rate with average package ₹18 LPA"
        ],
        facilities: [
          "AI algorithms research lab",
          "Knowledge representation and reasoning center",
          "Explainable AI research facility",
          "Multi-agent systems lab",
          "AI simulation and testing environment"
        ],
        courses: [
          "Foundations of AI",
          "Knowledge Representation",
          "Search & Optimization",
          "Probabilistic Reasoning",
          "Explainable AI",
          "Multi-Agent Systems",
          "AI for Healthcare",
          "Responsible AI"
        ],
        faculty: 10,
        students: 180,
        specialization: ["Explainable AI", "Knowledge Systems", "AI Research", "Responsible AI"]
      }
    ]
  }
];

const Departments = () => {
  const [selectedDept, setSelectedDept] = useState(schools[0].departments[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSchool, setFilterSchool] = useState("all");

  const CurrentIcon = selectedDept.icon;

  const filteredSchools = schools
    .filter(school => filterSchool === "all" || school.name === filterSchool)
    .map(school => ({
      ...school,
      departments: school.departments.filter(dept =>
        dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dept.shortName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(school => school.departments.length > 0);

  const DeptCard = ({ dept }: { dept: typeof schools[0]["departments"][0] }) => {
    const DeptIcon = dept.icon;
    const isSelected = selectedDept.key === dept.key;
    return (
      <ScrollReveal>
        <button
          onClick={() => setSelectedDept(dept)}
          className={`w-full text-left bg-card rounded-xl border shadow-md hover:shadow-lg transition-all duration-300 group h-full overflow-hidden ${isSelected ? "border-primary" : "border-border hover:border-primary/30"}`}
        >
          <div className={`h-1 transition-all duration-300 ${isSelected ? "bg-primary h-1.5" : "bg-secondary group-hover:h-1.5"}`} />
          <div className="p-6">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${isSelected ? "bg-primary scale-110" : "bg-primary/10 group-hover:bg-secondary group-hover:scale-110"}`}>
              <DeptIcon className={`w-6 h-6 transition-colors ${isSelected ? "text-white" : "text-primary group-hover:text-white"}`} />
            </div>
            <h3 className={`font-display text-lg font-bold mb-1 transition-colors line-clamp-2 ${isSelected ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
              {dept.name}
            </h3>
            <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded mb-3">
              {dept.shortName}
            </span>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {dept.mission.substring(0, 80)}...
            </p>
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
            <div className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
              View Department <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </button>
      </ScrollReveal>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Banner */}
        <div className="relative h-80 md:h-96 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <ScrollReveal>
              <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3 opacity-90">Academics</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Academic Departments
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">Excellence Across Disciplines</p>
            </ScrollReveal>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="cursor-default">Academics</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-semibold">Departments</span>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="container mx-auto px-4 py-12">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11 border-border focus:border-primary focus:ring-primary"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <select
                  value={filterSchool}
                  onChange={(e) => setFilterSchool(e.target.value)}
                  className="flex-1 h-11 px-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
                >
                  <option value="all">All Schools</option>
                  {schools.map(s => (
                    <option key={s.name} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Schools & Departments */}
{filteredSchools.length > 0 ? filteredSchools.map((school, si) => (
  <section key={school.name} className={`py-12 ${si % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{school.name}</h2>
          <div className="w-16 h-1 bg-secondary rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl">{school.description}</p>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {school.departments.map(dept => (
          <DeptCard key={dept.key} dept={dept} />
        ))}
      </div>
    </div>
  </section>
)) : (
  <div className="container mx-auto px-4 py-16 text-center">
    <p className="text-muted-foreground text-lg">No departments match your search criteria.</p>
  </div>
)}


        {/* Department Detail */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container mx-auto px-4 space-y-8">
            <ScrollReveal>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-border rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <CurrentIcon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full">
                        Est. {selectedDept.established}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-3">{selectedDept.name}</h2>
                    <p className="text-foreground/80 leading-relaxed mb-6 max-w-3xl">{selectedDept.mission}</p>
                    <div className="flex flex-wrap gap-8 text-sm">
                      <div>
                        <p className="text-muted-foreground uppercase tracking-wider text-xs font-semibold mb-1">Faculty Members</p>
                        <p className="text-2xl font-bold text-secondary">{selectedDept.faculty}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground uppercase tracking-wider text-xs font-semibold mb-1">Total Students</p>
                        <p className="text-2xl font-bold text-secondary">{selectedDept.students}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground uppercase tracking-wider text-xs font-semibold mb-1">Specializations</p>
                        <p className="text-2xl font-bold text-secondary">{selectedDept.specialization.length}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Department Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedDept.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-lg border border-border hover:border-secondary hover:bg-secondary/5 transition-all group">
                      <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <p className="text-foreground/80 group-hover:text-foreground transition-colors">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">Facilities & Infrastructure</h3>
                  <div className="space-y-3">
                    {selectedDept.facilities.map((facility, i) => (
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
                    {selectedDept.courses.map((course, i) => (
                      <div key={i} className="flex gap-3 items-start p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                        <span className="flex-shrink-0 text-secondary font-bold group-hover:scale-125 transition-transform origin-left">→</span>
                        <p className="text-foreground/80 text-sm group-hover:text-foreground transition-colors">{course}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

                        <ScrollReveal delay={0.3}>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Specialization Areas</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {selectedDept.specialization.map((spec, i) => (
                    <div key={i} className="bg-white border border-border rounded-lg p-5 text-center hover:border-secondary hover:shadow-md transition-all group cursor-pointer">
                      <div className="w-3 h-3 bg-secondary rounded-full mx-auto mb-3 group-hover:scale-150 transition-transform" />
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{spec}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 md:p-10 text-center border border-primary/30">
                <h3 className="font-display text-2xl font-bold text-white mb-3">Ready to Join?</h3>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  Discover excellence in {selectedDept.name.toLowerCase()} and shape your future at MITS.
                </p>
                <Link to="/admissions">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold inline-flex items-center gap-2 px-8 h-11">
                    Apply Now <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
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

