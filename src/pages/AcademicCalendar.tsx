import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, FileText, Download, Eye, Clock, GraduationCap, BookOpen, Users, CalendarDays, ChevronRight, LayoutList, GitBranch, School, Award, CalendarRange, University, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Calendar data for UG - Based on official MITS website
const ugCalendars = [
  {
    title: "B.Tech in Electronics & Communication Engineering",
    description: "Electronics & Communication Engineering academic calendar",
    year: "2025-26",
    program: "B.Tech ECE",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech%20ECE%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "B.Tech in Civil Engineering",
    description: "Civil Engineering academic calendar",
    year: "2025-26",
    program: "B.Tech Civil",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech%20Civil%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "B.Tech in Mechanical Engineering",
    description: "Mechanical Engineering academic calendar",
    year: "2025-26",
    program: "B.Tech Mechanical",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech%20Mechanical%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "B.Tech in Electrical & Electronics Engineering",
    description: "Electrical & Electronics Engineering academic calendar",
    year: "2025-26",
    program: "B.Tech EEE",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech%20EEE%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "B.Tech in Bioinformatics",
    description: "Bioinformatics academic calendar",
    year: "2025-26",
    program: "B.Tech Bioinformatics",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech%20Bioinformatics%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "B.Tech Computer Science and Engineering",
    description: "Computer Science and Engineering academic calendar",
    year: "2025-26",
    program: "B.Tech CSE",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech%20CSE%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "B.Tech CSE (AI and Data Science)",
    description: "Computer Science and Engineering AI and Data Science academic calendar",
    year: "2025-26",
    program: "B.Tech AI & DS",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech%20AI%20DS%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "B.Tech CSE (AI and ML)",
    description: "Computer Science and Engineering AI and ML academic calendar",
    year: "2025-26",
    program: "B.Tech AI and ML",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech%20AI%20ML%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "B.Tech CSE (AI and Robotics)",
    description: "Computer Science and Engineering AI and Robotics academic calendar",
    year: "2025-26",
    program: "B.Tech AI and Robotics",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech%20AI%20Robotics%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "B.Tech CSE (Cyber Security)",
    description: "Computer Science and Engineering Cyber Security academic calendar",
    year: "2025-26",
    program: "B.Tech Cyber Security",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/B.Tech%20Cyber%20Security%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "BBA - Bachelor of Business Administration",
    description: "Bachelor of Business Administration academic calendar",
    year: "2025-26",
    program: "BBA",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/BBA%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "BCA - Bachelor of Computer Applications",
    description: "Bachelor of Computer Applications academic calendar",
    year: "2025-26",
    program: "BCA",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/BCA%20Academic%20Calendar%202025-26.pdf"
  }
];

// Calendar data for PG - Based on official MITS website
const pgCalendars = [
  {
    title: "M.Tech Civil Engineering (Construction Engineering & Management)",
    description: "M.Tech Civil Engineering Construction Engineering & Management academic calendar",
    year: "2025-26",
    program: "M.Tech Civil",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MTech%20Civil%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "M.Tech Automation and Robotics",
    description: "M.Tech Automation and Robotics academic calendar",
    year: "2025-26",
    program: "M.Tech Automation & Robotics",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MTech%20Automation%20Robotics%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "M.Tech Electric Vehicle Technology",
    description: "M.Tech Electric Vehicle Technology academic calendar",
    year: "2025-26",
    program: "M.Tech EV Technology",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MTech%20EV%20Technology%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "M.Tech VLSI Design & Embedded Systems",
    description: "M.Tech VLSI Design & Embedded Systems academic calendar",
    year: "2025-26",
    program: "M.Tech VLSI",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MTech%20VLSI%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "M.Tech Computer Science and Engineering",
    description: "M.Tech Computer Science and Engineering academic calendar",
    year: "2025-26",
    program: "M.Tech CSE",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MTech%20CSE%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "M.Tech CSE (AI and ML)",
    description: "M.Tech Computer Science and Engineering AI and ML academic calendar",
    year: "2025-26",
    program: "M.Tech AI and ML",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MTech%20AI%20ML%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "MBA - Master of Business Administration",
    description: "Master of Business Administration academic calendar",
    year: "2025-26",
    program: "MBA",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MBA%20Academic%20Calendar%202025-26.pdf"
  },
  {
    title: "MCA - Master of Computer Applications",
    description: "Master of Computer Applications academic calendar",
    year: "2025-26",
    program: "MCA",
    highlights: ["Sem I & II", "Internal Exams", "External Exams", "Holidays"],
    pdfUrl: "https://mits.ac.in/public/uploads/ugc/MCA%20Academic%20Calendar%202025-26.pdf"
  }
];

// Timeline data
const timelineEvents = [
  { month: "August", event: "Semester Commencement", description: "New academic year begins", type: "start" },
  { month: "September", event: "Add/Drop Courses", description: "Course selection window", type: "activity" },
  { month: "October", event: "Mid-Term Examinations", description: "First sessional examinations", type: "exam" },
  { month: "November", event: "Project Work Begins", description: "Major project initialization", type: "activity" },
  { month: "December", event: "End Semester Exams", description: "Final semester examinations", type: "exam" },
  { month: "January", event: "Winter Break", description: "Vacation period", type: "break" },
  { month: "February", event: "Result Declaration", description: "Semester results announcement", type: "result" },
  { month: "March", event: "Next Semester", description: "Academic year continues", type: "start" }
];

const CalendarCard = ({ calendar, index }: { calendar: typeof ugCalendars[0]; index: number }) => {
  const getProgramColor = (program: string) => {
    const colors: Record<string, string> = {
      "B.Tech CSE": "from-blue-600 to-blue-800",
      "B.Tech ECE": "from-cyan-600 to-cyan-800",
      "B.Tech EEE": "from-amber-600 to-amber-800",
      "B.Tech Mech": "from-red-600 to-red-800",
      "B.Tech Civil": "from-orange-600 to-orange-800",
      "AI and ML": "from-violet-600 to-purple-800",
      "CSD": "from-teal-600 to-teal-800",
      "BBA": "from-rose-600 to-pink-800",
      "BCA": "from-emerald-600 to-green-800",
      "M.Tech CSE": "from-slate-600 to-slate-800",
      "M.Tech ECE": "from-indigo-600 to-indigo-800",
      "M.Tech Thermal": "from-amber-700 to-orange-900",
      "M.Tech Power": "from-yellow-600 to-amber-800",
      "MBA": "from-purple-600 to-violet-800",
      "MCA": "from-cyan-600 to-teal-800",
      "M.Sc Physics": "from-blue-600 to-indigo-800",
      "M.Sc Chemistry": "from-green-600 to-emerald-800",
      "M.Sc Mathematics": "from-red-600 to-rose-800"
    };
    return colors[program] || "from-slate-600 to-slate-800";
  };

  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Top colored bar with shine effect */}
        <div className="relative h-2 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${getProgramColor(calendar.program)}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        <div className="relative p-5">
          {/* Header with floating icon */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getProgramColor(calendar.program)} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">{calendar.program}</span>
                <span className="text-xs text-slate-500 font-medium">{calendar.year}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-base text-slate-800 mb-2 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
            {calendar.title}
          </h3>
          <p className="text-sm text-slate-500 mb-4 line-clamp-1">
            {calendar.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {calendar.highlights.map((highlight, i) => (
              <span 
                key={i} 
                className={`px-2 py-1 text-xs font-medium rounded-md ${
                  i === 0 
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                    : i === 1 
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : i === 2 
                    ? "bg-amber-50 text-amber-700 border border-amber-200"
                    : "bg-slate-50 text-slate-600 border border-slate-200"
                }`}
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <a href={calendar.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button size="sm" className="w-full bg-primary hover:bg-red-700 text-xs py-1.5">
                <Eye className="w-3.5 h-3.5 mr-1.5" />
                View
              </Button>
            </a>
            <a href={calendar.pdfUrl} download className="flex-1">
              <Button size="sm" variant="outline" className="w-full border-slate-300 hover:border-primary hover:bg-primary/5 text-xs py-1.5">
                <Download className="w-3.5 h-3.5 mr-1.5" />
                Download
              </Button>
            </a>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-px h-6 bg-gradient-to-b from-primary/0 to-primary/20" />
          <div className="absolute top-0 right-0 h-px w-6 bg-gradient-to-l from-primary/0 to-primary/20" />
        </div>
      </div>
    </ScrollReveal>
  );
};

const TimelineView = () => {
  const getTypeStyles = (type: string) => {
    switch(type) {
      case 'exam':
        return { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', dot: 'bg-amber-500' };
      case 'start':
        return { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', dot: 'bg-emerald-500' };
      case 'result':
        return { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', dot: 'bg-blue-500' };
      case 'break':
        return { bg: 'from-slate-50 to-slate-100', border: 'border-slate-200', dot: 'bg-slate-400' };
      default:
        return { bg: 'from-violet-50 to-purple-50', border: 'border-violet-200', dot: 'bg-violet-500' };
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-[#caa74d] to-primary" />

      {timelineEvents.map((event, index) => {
        const styles = getTypeStyles(event.type);
        const isLeft = index % 2 === 0;
        
        return (
          <ScrollReveal key={index} delay={index * 0.15}>
            <div className={`flex items-center mb-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`ml-10 md:ml-0 md:w-[45%] ${isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
                <div className={`bg-gradient-to-br ${styles.border} border rounded-xl p-4 hover:shadow-lg hover:scale-[1.01] transition-all duration-300`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 block">{event.month}</span>
                  <h4 className="font-bold text-slate-800">{event.event}</h4>
                  <p className="text-xs text-slate-500 mt-1">{event.description}</p>
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2">
                <div className={`relative w-3.5 h-3.5 rounded-full ${styles.dot} border-2 border-white shadow`} />
              </div>

              <div className="hidden md:block md:w-[45%]" />
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
};

const AcademicCalendar = () => {
  const [viewMode, setViewMode] = useState<"list" | "timeline">("list");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-4 md:pt-36 md:pb-6 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={`${import.meta.env.BASE_URL}Hero-Section/image%203.JPG`}
              alt="Academic Calendar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/75" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col">
            {/* Content centered */}
            <div className="flex-1 flex items-center justify-center">
              <ScrollReveal>
                <div className="max-w-3xl text-center">
                  <div className="flex items-center gap-3 mb-5 justify-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-red-700 flex items-center justify-center shadow-lg shadow-primary/30">
                      <University className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className="text-amber-400 font-bold tracking-wider uppercase text-sm block">
                        Madanapalle Institute of
                      </span>
                      <span className="text-white font-semibold">
                        Technology & Science
                      </span>
                    </div>
                  </div>
                  
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Calendar</span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                    Access detailed academic calendars for all programs - UG and PG courses at MITS
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Breadcrumb â€” absolute positioned bottom-left */}
          <div className="absolute bottom-6 left-6 z-10">
            <nav className="flex items-center gap-2 text-sm text-slate-300">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="text-white/50">â€º</span>
              <a href="/academics" className="hover:text-white transition-colors">Academics</a>
              <span className="text-white/50">â€º</span>
              <span className="text-white font-medium">Academic Calendar</span>
            </nav>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-24">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#calGrad)" fillOpacity="0.1"/>
              <defs>
                <linearGradient id="calGrad" x1="720" y1="0" x2="720" y2="120" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0f2a44"/>
                  <stop offset="1" stopColor="#b30000"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-4 md:py-6 -mt-3 relative z-20">
          <div className="container mx-auto px-4">
            {/* Tabs */}
            <Tabs defaultValue="ug" className="w-full">
              <ScrollReveal>
                <TabsList className="bg-white border border-slate-200 shadow-lg p-1.5 h-auto flex-wrap mb-8 grid grid-cols-2 md:flex gap-1">
                  <TabsTrigger 
                    value="ug" 
                    className="flex-1 px-5 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-red-600 data-[state=active]:text-white font-bold text-sm"
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Undergraduate (UG)
                  </TabsTrigger>
                  <TabsTrigger 
                    value="pg" 
                    className="flex-1 px-5 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-red-600 data-[state=active]:text-white font-bold text-sm"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Postgraduate (PG)
                  </TabsTrigger>
                </TabsList>
              </ScrollReveal>

              <TabsContent value="ug" className="mt-0">
                {viewMode === "list" ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {ugCalendars.map((calendar, index) => (
                      <CalendarCard key={index} calendar={calendar} index={index} />
                    ))}
                  </div>
                ) : (
                  <TimelineView />
                )}
              </TabsContent>

              <TabsContent value="pg" className="mt-0">
                {viewMode === "list" ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {pgCalendars.map((calendar, index) => (
                      <CalendarCard key={index} calendar={calendar} index={index} />
                    ))}
                  </div>
                ) : (
                  <TimelineView />
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full mb-3 border border-primary/20">
                  ðŸ“š Academic Information
                </span>
                <h2 className="font-bold text-2xl md:text-3xl text-slate-800 mb-2">Plan Your Academic Year</h2>
                <p className="text-slate-500">Key information about MITS academic programs</p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ScrollReveal delay={0.1}>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all">
                  <CalendarRange className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-slate-800 mb-1">Semester System</h3>
                  <p className="text-sm text-slate-500">Two semesters per year</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all">
                  <Clock className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-slate-800 mb-1">Examinations</h3>
                  <p className="text-sm text-slate-500">Mid & End semester exams</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all">
                  <School className="w-8 h-8 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-slate-800 mb-1">Course Registration</h3>
                  <p className="text-sm text-slate-500">Online registration</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all">
                  <Award className="w-8 h-8 text-violet-600 mb-3" />
                  <h3 className="font-bold text-slate-800 mb-1">Holidays</h3>
                  <p className="text-sm text-slate-500">National & semester breaks</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AcademicCalendar;


