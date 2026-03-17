import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ArrowRight, Search, Filter, Cpu, Building2, Zap, CircuitBoard, Microscope, Database, Shield, Code, Briefcase, Brain, GraduationCap, Beaker, TrendingUp, Users, BookOpen, Award, Target, Activity, Factory, Construction, Globe, Sparkles, FlaskConical, LineChart, GraduationCap as Cap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

// MITS Theme Colors
const THEME = {
  primary: "#b30000",    // Deep red
  secondary: "#0f2a44",   // Dark blue  
  accent: "#caa74d",     // Gold
  lightGray: "#f8f9fa"
};

// Department background images
const deptImages: Record<string, string> = {
  // Engineering
  ce: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  eee: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  me: "https://images.unsplash.com/photo-1565680018093-ebb6b9ab5460?w=800&q=80",
  ece: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  bioinfo: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
  // Computing
  cse: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  cseds: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  csecs: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  bca: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  mca: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  // Management
  bba: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  mba: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  // AI & ML
  aiml: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  ai: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
};

// Schools data structure - Corrected as per MITS college
const schools = [
  {
    name: "School of Engineering",
    description: "Cutting-edge programs designed to prepare the engineers and technologists of tomorrow.",
    accentColor: "from-red-600 to-red-800",
    borderColor: "border-l-red-500",
    departments: [
      {
        key: "ce",
        name: "Civil Engineering",
        shortName: "CE",
        established: "2008",
        description: "Specialization in structural design and construction management",
        highlights: ["Advanced BIM labs", "Infrastructure and highway projects", "Sustainability focus", "80% placement rate with ₹9 LPA avg"],
        facilities: ["Structural testing laboratory", "Materials testing center", "BIM and CAD laboratory", "Geotechnical engineering lab"],
        courses: ["Structural Analysis & Design", "Soil Mechanics", "Construction Management", "Transportation Engineering"],
        faculty: 9,
        students: 270,
        specialization: ["Structural Engineering", "Geotechnical", "Water Resources", "Sustainability"],
        areas: ["Structural Design", "BIM", "Infrastructure"],
        labHighlights: ["Structural Lab", "BIM Center", "Geotech Lab"],
        placementStrength: "80% | ₹9 LPA Avg",
        mission: "To prepare civil engineers for designing and constructing sustainable infrastructure."
      },
      {
        key: "eee",
        name: "Electrical & Electronics Engineering",
        shortName: "EEE",
        established: "2007",
        description: "Focus on power systems, renewable energy, and power electronics",
        highlights: ["Advanced power system analysis labs", "Research in smart grids and renewable energy", "Industry partnerships", "85% placement rate with ₹10 LPA avg"],
        facilities: ["High voltage laboratory", "Power electronics and drives lab", "Electrical machines laboratory", "Renewable energy research lab"],
        courses: ["Circuit Theory & Analysis", "Electrical Machines", "Power Systems", "Renewable Energy Sources"],
        faculty: 10,
        students: 270,
        specialization: ["Power Systems", "Renewable Energy", "Smart Grids", "Power Electronics"],
        areas: ["Power Systems", "Renewable Energy", "Smart Grids"],
        labHighlights: ["Power Systems Lab", "Renewable Energy Lab", "HV Lab"],
        placementStrength: "85% | ₹10 LPA Avg",
        mission: "To produce electrical engineers capable of designing and implementing electrical systems for sustainable energy."
      },
      {
        key: "me",
        name: "Mechanical Engineering",
        shortName: "ME",
        established: "2006",
        description: "Comprehensive programs in mechanical design and manufacturing",
        highlights: ["Advanced CAD/CAM and simulation facilities", "Automotive and aerospace partnerships", "Research in thermal engineering", "88% placement rate with ₹11 LPA avg"],
        facilities: ["CAD/CAM laboratory", "Manufacturing and workshop", "Thermal & fluid mechanics lab", "Dynamics and vibration lab"],
        courses: ["Engineering Mechanics", "Thermodynamics", "Machine Design", "Manufacturing Technology"],
        faculty: 11,
        students: 270,
        specialization: ["Automotive Engineering", "Manufacturing", "Thermal Systems", "Aerospace"],
        areas: ["CAD/CAM", "Automotive", "Thermal Engineering"],
        labHighlights: ["CAD/CAM Lab", "Manufacturing Workshop", "Thermal Lab"],
        placementStrength: "88% | ₹11 LPA Avg",
        mission: "To develop mechanical engineers with strong fundamentals and expertise in design, manufacturing, and thermal systems."
      },
      {
        key: "ece",
        name: "Electronics & Communication Engineering",
        shortName: "ECE",
        established: "2005",
        description: "Specialization in 5G networks, IoT, and embedded systems",
        highlights: ["Advanced telecommunications labs", "Industry collaborations with telecom companies", "Research in RF and microwave engineering", "90% placement rate with ₹12 LPA avg"],
        facilities: ["RF & Microwave laboratory", "Digital signal processing lab", "Embedded systems development center", "Telecommunications equipment lab"],
        courses: ["Analog & Digital Electronics", "Communication Systems", "RF & Microwave Engineering", "VLSI Design"],
        faculty: 12,
        students: 270,
        specialization: ["5G Networks", "IoT", "Embedded Systems", "RF Engineering"],
        areas: ["5G & IoT", "Embedded Systems", "VLSI Design"],
        labHighlights: ["RF Lab", "IoT Center", "VLSI Design Lab"],
        placementStrength: "90% | ₹12 LPA Avg",
        mission: "To nurture skilled engineers in electronics and communication with expertise in modern communication systems."
      },
      {
        key: "bioinfo",
        name: "Bioinformatics",
        shortName: "Bioinformatics",
        established: "2010",
        description: "Interdisciplinary curriculum combining biology and computer science",
        highlights: ["Advanced genomics and proteomics research labs", "Collaborations with biotech companies", "Research in computational drug discovery", "Strong placement in biotech sectors"],
        facilities: ["Genomics and sequencing laboratory", "Computational biology research center", "Bioinformatics software and tools lab", "Proteomics analysis facility"],
        courses: ["Molecular Biology & Genetics", "Computational Biology", "Genomics & Proteomics", "Drug Discovery & Design"],
        faculty: 8,
        students: 120,
        specialization: ["Genomics", "Computational Drug Discovery", "Proteomics", "Systems Biology"],
        areas: ["Genomics", "Drug Discovery", "Computational Biology"],
        labHighlights: ["Genomics Lab", "Drug Discovery Center", "Proteomics Lab"],
        placementStrength: "85% | ₹10 LPA Avg",
        mission: "To train students at the intersection of biology and computing for breakthroughs in genomics and drug discovery."
      }
    ]
  },
  {
    name: "School of Computing",
    description: "Innovative computing programs preparing students for the digital future.",
    accentColor: "from-blue-600 to-blue-800",
    borderColor: "border-l-blue-500",
    departments: [
      {
        key: "cse",
        name: "Computer Science & Engineering",
        shortName: "CSE",
        established: "2005",
        description: "Focus on AI, Machine Learning, Cloud Computing, and Cybersecurity",
        highlights: ["Advanced curriculum covering AI, ML, Cloud Computing", "Industry partnerships with tech giants", "State-of-the-art computing labs", "98% placement rate with ₹18 LPA avg"],
        facilities: ["High-performance computing labs", "AI/ML innovation hub", "Cybersecurity research center", "Cloud computing infrastructure"],
        courses: ["Data Structures & Algorithms", "Artificial Intelligence & Machine Learning", "Cloud Computing & DevOps", "Cybersecurity"],
        faculty: 22,
        students: 540,
        specialization: ["AI & ML", "Cloud Computing", "Cybersecurity", "Big Data Analytics"],
        areas: ["AI & ML", "Cloud Computing", "Cyber Security"],
        labHighlights: ["AI Research Lab", "Cloud Center", "Cyber Security Ops"],
        placementStrength: "98% | ₹18 LPA Avg",
        mission: "To prepare students as world-class computer science professionals with expertise in emerging technologies."
      },
      {
        key: "cseds",
        name: "CSE – Data Science",
        shortName: "CSE-DS",
        established: "2019",
        description: "Specialized curriculum in data analytics and machine learning",
        highlights: ["Industry projects with data-driven companies", "Advanced data visualization labs", "Research in predictive analytics", "95% placement rate with ₹16 LPA avg"],
        facilities: ["Big data analytics laboratory", "Data visualization center", "Machine learning research lab", "Statistical computing facility"],
        courses: ["Statistics for Data Science", "Machine Learning", "Big Data Technologies", "Data Visualization"],
        faculty: 14,
        students: 360,
        specialization: ["Data Analytics", "Machine Learning", "Big Data", "Business Intelligence"],
        areas: ["Data Analytics", "Big Data", "ML"],
        labHighlights: ["Big Data Lab", "Data Viz Center", "ML Research Lab"],
        placementStrength: "95% | ₹16 LPA Avg",
        mission: "To develop data-driven problem solvers equipped with analytical skills for the modern data economy."
      },
      {
        key: "csecs",
        name: "CSE – Cyber Security",
        shortName: "CSE-CS",
        established: "2020",
        description: "Hands-on training in ethical hacking and penetration testing",
        highlights: ["Dedicated cybersecurity operations center", "Industry certifications integrated", "Research in network security", "High demand placements"],
        facilities: ["SOC center", "Ethical hacking lab", "Network security research facility", "Cryptography and forensics lab"],
        courses: ["Network Security", "Ethical Hacking & Penetration Testing", "Cryptography", "Digital Forensics"],
        faculty: 10,
        students: 240,
        specialization: ["Ethical Hacking", "Network Security", "Digital Forensics", "Cloud Security"],
        areas: ["Ethical Hacking", "Network Security", "Forensics"],
        labHighlights: ["SOC Center", "Ethical Hacking Lab", "Forensics Lab"],
        placementStrength: "92% | ₹15 LPA Avg",
        mission: "To produce cybersecurity professionals capable of protecting digital infrastructure."
      },
      {
        key: "bca",
        name: "Bachelor of Computer Applications",
        shortName: "BCA",
        established: "2008",
        description: "Comprehensive programming and application development curriculum",
        highlights: ["Industry-aligned projects and internships", "Strong placement support for IT roles", "Focus on web and mobile applications", "90% placement rate in IT companies"],
        facilities: ["Programming and development labs", "Web and mobile application studio", "Database management center", "Project development lab"],
        courses: ["Programming in C & Java", "Web Technologies", "Database Management", "Mobile Application Development"],
        faculty: 8,
        students: 180,
        specialization: ["Web Development", "Mobile Apps", "Database", "Software Testing"],
        areas: ["Web Development", "Mobile Apps", "Database"],
        labHighlights: ["Programming Labs", "Web Studio", "Mobile Lab"],
        placementStrength: "90% | ₹8 LPA Avg",
        mission: "To provide a strong foundation in computer applications and software development."
      },
      {
        key: "mca",
        name: "Master of Computer Applications",
        shortName: "MCA",
        established: "2006",
        description: "Advanced postgraduate curriculum in computing",
        highlights: ["Research and industry project opportunities", "Strong alumni network in top IT companies", "Specializations in AI, cloud", "95% placement rate with ₹14 LPA avg"],
        facilities: ["Advanced computing research lab", "Enterprise software development center", "AI and cloud computing lab", "Industry collaboration center"],
        courses: ["Advanced Algorithms", "Software Architecture", "Cloud Computing", "Artificial Intelligence"],
        faculty: 10,
        students: 120,
        specialization: ["Enterprise Software", "AI & Cloud", "Data Science", "Software Architecture"],
        areas: ["Enterprise Software", "Cloud Computing", "AI"],
        labHighlights: ["Research Lab", "Dev Center", "AI Cloud Lab"],
        placementStrength: "95% | ₹14 LPA Avg",
        mission: "To produce highly skilled computing professionals with advanced knowledge in software engineering."
      }
    ]
  },
  {
    name: "School of Management Studies",
    description: "Developing future business leaders with strong analytical and leadership skills.",
    accentColor: "from-amber-600 to-amber-800",
    borderColor: "border-l-amber-500",
    departments: [
      {
        key: "bba",
        name: "Bachelor of Business Administration",
        shortName: "BBA",
        established: "2010",
        description: "Industry-integrated curriculum with live projects",
        highlights: ["Entrepreneurship development cell", "Guest lectures from industry leaders", "Strong placement in corporate sectors", "85% placement rate with ₹8 LPA avg"],
        facilities: ["Business simulation lab", "Entrepreneurship development center", "Finance and trading lab", "Digital marketing studio"],
        courses: ["Principles of Management", "Financial Accounting", "Marketing Management", "Human Resource Management"],
        faculty: 8,
        students: 180,
        specialization: ["Marketing", "Finance", "HR Management", "Entrepreneurship"],
        areas: ["Marketing", "Finance", "HR"],
        labHighlights: ["Simulation Lab", "E-Cell", "Marketing Studio"],
        placementStrength: "85% | ₹8 LPA Avg",
        mission: "To develop business-ready graduates with strong managerial and leadership capabilities."
      },
      {
        key: "mba",
        name: "Master of Business Administration",
        shortName: "MBA",
        established: "2008",
        description: "AICTE approved MBA program with industry mentorship",
        highlights: ["Industry mentorship and live consulting projects", "National case competitions", "Strong corporate recruitment network", "90% placement rate with ₹12 LPA avg"],
        facilities: ["Advanced business analytics lab", "Bloomberg terminal and finance center", "Leadership development center", "Digital business innovation lab"],
        courses: ["Strategic Management", "Financial Management", "Marketing Strategy", "Business Analytics"],
        faculty: 12,
        students: 120,
        specialization: ["Finance", "Marketing", "Operations", "Business Analytics"],
        areas: ["Finance", "Marketing", "Operations"],
        labHighlights: ["Bloomberg Lab", "Analytics Center", "Leadership Lab"],
        placementStrength: "90% | ₹12 LPA Avg",
        mission: "To cultivate strategic thinkers and ethical business leaders for global environments."
      }
    ]
  },
  {
    name: "School of AI & ML",
    description: "Leading the future of artificial intelligence and machine learning.",
    accentColor: "from-purple-600 to-purple-800",
    borderColor: "border-l-purple-500",
    departments: [
      {
        key: "aiml",
        name: "AI and Machine Learning",
        shortName: "AI & ML",
        established: "2020",
        description: "Cutting-edge curriculum in deep learning, NLP, and computer vision",
        highlights: ["GPU-powered AI research infrastructure", "Collaborations with AI-focused companies", "Hands-on projects in generative AI", "96% placement rate with ₹20 LPA avg"],
        facilities: ["GPU cluster and AI computing lab", "Computer vision and robotics lab", "NLP and speech processing center", "Generative AI research studio"],
        courses: ["Machine Learning Fundamentals", "Deep Learning", "Natural Language Processing", "Computer Vision"],
        faculty: 12,
        students: 240,
        specialization: ["Deep Learning", "NLP", "Computer Vision", "Generative AI"],
        areas: ["Deep Learning", "NLP", "Computer Vision"],
        labHighlights: ["GPU Cluster", "Computer Vision Lab", "NLP Center"],
        placementStrength: "96% | ₹20 LPA Avg",
        mission: "To produce AI engineers and researchers capable of building intelligent systems."
      },
      {
        key: "ai",
        name: "Artificial Intelligence",
        shortName: "AI",
        established: "2021",
        description: "Strong theoretical foundation in AI algorithms and logic",
        highlights: ["Research-oriented curriculum", "Industry tie-ups with AI product companies", "Focus on explainable AI", "94% placement rate with ₹18 LPA avg"],
        facilities: ["AI algorithms research lab", "Knowledge representation center", "Explainable AI research facility", "Multi-agent systems lab"],
        courses: ["Foundations of AI", "Knowledge Representation", "Search & Optimization", "Probabilistic Reasoning"],
        faculty: 10,
        students: 180,
        specialization: ["Explainable AI", "Knowledge Systems", "AI Research", "Responsible AI"],
        areas: ["AI Research", "Knowledge Systems", "Explainable AI"],
        labHighlights: ["Research Lab", "XAI Center", "Agent Systems Lab"],
        placementStrength: "94% | ₹18 LPA Avg",
        mission: "To train students in the theoretical and applied foundations of artificial intelligence."
      }
    ]
  }
];

const Departments = () => {
  const [selectedDept, setSelectedDept] = useState(schools[0].departments[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSchool, setFilterSchool] = useState("all");

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

  // Department Card - Image with name, hover shows description and button with school color
  const DeptCard = ({ dept, index, schoolAccent }: { 
    dept: typeof schools[0]["departments"][0]; 
    index: number;
    schoolAccent: string;
  }) => {
    const imageUrl = deptImages[dept.key] || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80";

    return (
      <ScrollReveal delay={index * 0.05}>
        <div 
          className="group relative h-[220px] md:h-[250px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{ boxShadow: '0 0 0 0 transparent' }}
        >
          {/* Background Image */}
          <img 
            src={imageUrl} 
            alt={dept.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Dynamic Overlay with school color */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:opacity-90 transition-opacity duration-300`} />

          {/* School color accent border on hover */}
          <div className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-transparent transition-all duration-300 bg-gradient-to-r ${schoolAccent} opacity-0 group-hover:opacity-100`} style={{ padding: '2px' }}>
            <div className="w-full h-full rounded-xl bg-black/80" />
          </div>

          {/* Department Name - Centered (default) */}
          <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
            <h3 className="font-display text-lg md:text-xl font-bold text-white text-center px-3 drop-shadow-lg">
              {dept.name}
            </h3>
          </div>

          {/* Hover Content - Shows on hover with school color */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-display text-lg md:text-xl font-bold text-white text-center mb-2 drop-shadow-lg">
              {dept.name}
            </h3>
            <p className="text-white/80 text-xs text-center mb-3 line-clamp-2">
              {dept.description}
            </p>
            <button className={`bg-gradient-to-r ${schoolAccent} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity`}>
              Explore Department
            </button>
          </div>
        </div>
      </ScrollReveal>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="pt-0">
        {/* ==================== HERO SECTION ==================== */}
        <div className="relative h-[300px] md:h-[350px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/Hero-Section/image 1.JPG" 
              alt="MITS Campus" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/75" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <ScrollReveal>
              <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">Departments</span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-2xl">
                Departments & Schools
              </h1>
              
              <p className="text-base md:text-lg text-white/85 max-w-xl mx-auto">
                Explore our academic excellence across disciplines
              </p>

              <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 via-red-500 to-amber-400 mx-auto mt-3 rounded-full" />
            </ScrollReveal>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10">
              <path d="M0 50L60 42C120 33 240 17 360 12C480 7 600 7 720 12C840 17 960 25 1080 33C1200 42 1320 45 1380 47L1440 48V50H1380C1320 50 1200 50 1080 50C960 50 840 50 720 50C600 50 480 50 360 50C240 50 120 50 60 50H0Z" fill="#f8f9fa"/>
            </svg>
          </div>
        </div>

        {/* ==================== SEARCH & FILTER SECTION ==================== */}
        <div className="bg-gradient-to-r from-[#0f2a44] to-[#1a3d5c] shadow-md relative z-10 -mt-1">
          <div className="container mx-auto px-4 py-2.5">
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 h-8 border-0 bg-white text-sm"
                />
              </div>
                
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-white/80" />
                <select
                  value={filterSchool}
                  onChange={(e) => setFilterSchool(e.target.value)}
                  className="h-8 px-2 rounded border-0 bg-white/10 text-white cursor-pointer text-sm"
                >
                  <option value="all" className="text-gray-900">All Schools</option>
                  {schools.map(s => (
                    <option key={s.name} value={s.name} className="text-gray-900">{s.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== SCHOOLS & DEPARTMENTS ==================== */}
        {filteredSchools.length > 0 ? filteredSchools.map((school, si) => (
          <section key={school.name} className="py-6 bg-gray-50">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <div className="mb-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${school.accentColor} flex items-center justify-center shadow-lg`}>
                      {si === 0 && <Factory className="w-6 h-6 text-white" />}
                      {si === 1 && <Database className="w-6 h-6 text-white" />}
                      {si === 2 && <Briefcase className="w-6 h-6 text-white" />}
                      {si === 3 && <Brain className="w-6 h-6 text-white" />}
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#0f2a44]">{school.name}</h2>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base ml-0 md:ml-16">{school.description}</p>
                </div>
              </ScrollReveal>
               
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-0 md:ml-9">
                {school.departments.map((dept, di) => (
                  <DeptCard 
                    key={dept.key} 
                    dept={dept} 
                    index={di}
                    schoolAccent={school.accentColor}
                  />
                ))}
              </div>
            </div>
          </section>
        )) : (
          <div className="container mx-auto px-4 py-10 text-center">
            <p className="text-gray-500">No departments match your search criteria.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Departments;
