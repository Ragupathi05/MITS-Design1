import React, { useRef, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  Brain,
  Cpu,
  Building,
  Wind,
  Heart,
  Leaf,
  ArrowRight,
  Award,
  Globe,
  Users,
  BookOpen,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Send,
  Zap,
  Microscope,
  Briefcase,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

// Google Fonts (add to index.html or <style> tag):
// @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@700&family=Space+Mono:wght@700&display=swap');

// =====================
// COLOR SYSTEM (Tailwind config or CSS vars)
// =====================
// --color-primary-dark: #0A1628;
// --color-primary-mid: #112240;
// --color-accent-gold: #C9A84C;
// --color-accent-teal: #0EA5E9;
// --color-surface-light: #F0F4FF;
// --color-surface-card: #FFFFFF;
// --color-surface-cream: #F8F5EE;
// --color-text-primary: #0A1628;
// --color-text-muted: #64748B;

// =====================
// DATA INTERFACES
// =====================
interface Stat {
  label: string;
  value: number | string;
  mono?: boolean;
}
interface FocusArea {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  department: string;
}
interface Metric {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}
interface Project {
  id: string;
  title: string;
  department: string;
  agency: string;
  amount: string;
  status: 'Ongoing' | 'Completed';
  leadFaculty: string;
  facultyInitials: string;
}
interface Faculty {
  id: string;
  name: string;
  department: string;
  initials: string;
  researchTags: string[];
  publications: number;
}
interface Collaboration {
  id: string;
  institution: string;
  country: string;
  flag: string;
  year: number;
}
interface StudentOpportunity {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  cta: string;
}
interface Badge {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}
interface News {
  id: string;
  date: string;
  department: string;
  headline: string;
  excerpt: string;
}
interface YearlyProject {
  year: number;
  projects: number;
}
interface FundingAgency {
  name: string;
  value: number;
  color: string;
}

// =====================
// DATA ARRAYS
// =====================
const HERO_STATS: Stat[] = [
  { label: 'Funded Projects', value: 59, mono: true },
  { label: '₹ Lakhs Funding', value: 550, mono: true },
  { label: 'Global MoUs', value: '20+', mono: true },
];
const FOCUS_AREAS: FocusArea[] = [
  { id: 'ai', title: 'AI & ML', description: 'Deep learning, NLP, computer vision, and intelligent systems.', icon: Brain, department: 'CSE' },
  { id: 'embedded', title: 'Embedded Systems', description: 'IoT, microcontrollers, and smart device innovation.', icon: Cpu, department: 'ECE' },
  { id: 'civil', title: 'Civil Engineering', description: 'Smart materials, earthquake-resistant design, sustainability.', icon: Building, department: 'Civil' },
  { id: 'drone', title: 'Drone Technology', description: 'Autonomous UAVs, aerial imaging, and flight systems.', icon: Wind, department: 'Mech' },
  { id: 'biomed', title: 'Biomedical', description: 'Medical devices, diagnostics, and healthcare tech.', icon: Heart, department: 'BioMed' },
  { id: 'energy', title: 'Sustainable Energy', description: 'Solar, wind, and renewable energy solutions.', icon: Leaf, department: 'EEE' },
];
const METRICS: Metric[] = [
  { label: 'Funded Projects', value: '59', icon: Briefcase },
  { label: 'Total Funding', value: '₹550.06 Lakhs', icon: Zap },
  { label: 'Patents Filed', value: '25+', icon: CheckCircle },
  { label: 'International MoUs', value: '20+', icon: Globe },
];
const YEARLY_PROJECTS: YearlyProject[] = [
  { year: 2019, projects: 8 },
  { year: 2020, projects: 12 },
  { year: 2021, projects: 18 },
  { year: 2022, projects: 25 },
  { year: 2023, projects: 28 },
  { year: 2024, projects: 32 },
];
const FUNDING_AGENCIES: FundingAgency[] = [
  { name: 'DST', value: 220, color: '#C9A84C' },
  { name: 'AICTE', value: 180, color: '#0EA5E9' },
  { name: 'SERB', value: 90, color: '#112240' },
  { name: 'Others', value: 60, color: '#64748B' },
];
const PROJECTS: Project[] = [
  { id: 'p1', title: 'AI-Driven Crop Prediction System', department: 'CSE & Agri', agency: 'DST', amount: '₹18.5L', status: 'Ongoing', leadFaculty: 'Dr. Rajeev Sharma', facultyInitials: 'RS' },
  { id: 'p2', title: 'IoT Smart Building Management', department: 'ECE', agency: 'AICTE', amount: '₹22.3L', status: 'Ongoing', leadFaculty: 'Prof. Sanjana Joshi', facultyInitials: 'SJ' },
  { id: 'p3', title: 'Earthquake-Resistant Housing', department: 'Civil', agency: 'SERB', amount: '₹15.8L', status: 'Completed', leadFaculty: 'Dr. Amit Patel', facultyInitials: 'AP' },
];
const FACULTY: Faculty[] = [
  { id: 'f1', name: 'Dr. Rajeev Sharma', department: 'CSE', initials: 'RS', researchTags: ['ML', 'NLP', 'Data Science'], publications: 47 },
  { id: 'f2', name: 'Prof. Sanjana Joshi', department: 'ECE', initials: 'SJ', researchTags: ['IoT', 'Embedded', '5G'], publications: 38 },
  { id: 'f3', name: 'Dr. Vikram Kumar', department: 'Mech', initials: 'VK', researchTags: ['Renewable', 'Thermal', 'Sustainability'], publications: 35 },
  { id: 'f4', name: 'Dr. Priya Menon', department: 'BioMed', initials: 'PM', researchTags: ['Devices', 'Biosensors', 'Healthcare'], publications: 42 },
];
const COLLABS: Collaboration[] = [
  { id: 'c1', institution: 'Aizu University', country: 'Japan', flag: '🇯🇵', year: 2022 },
  { id: 'c2', institution: 'Osaka IT', country: 'Japan', flag: '🇯🇵', year: 2023 },
  { id: 'c3', institution: 'BRNO', country: 'Czech Republic', flag: '🇨🇿', year: 2021 },
  { id: 'c4', institution: 'Innopolis', country: 'Russia', flag: '🇷🇺', year: 2022 },
  { id: 'c5', institution: 'Asia University', country: 'Taiwan', flag: '🇹🇼', year: 2023 },
  { id: 'c6', institution: 'Providence University', country: 'Taiwan', flag: '🇹🇼', year: 2022 },
  { id: 'c7', institution: 'Steinbeis', country: 'Germany', flag: '🇩🇪', year: 2021 },
  { id: 'c8', institution: 'BGSU', country: 'USA', flag: '🇺🇸', year: 2023 },
];
const STUDENT_OPPS: StudentOpportunity[] = [
  { id: 's1', title: 'Research Internship', description: 'Join faculty labs and work on real projects.', icon: Microscope, cta: 'Apply Now' },
  { id: 's2', title: 'Join Research Club', description: 'Collaborate, attend seminars, build skills.', icon: Users, cta: 'Explore Clubs' },
  { id: 's3', title: 'Publish a Paper', description: 'Get mentorship to publish your research.', icon: BookOpen, cta: 'Submit Paper' },
];
const BADGES: Badge[] = [
  { id: 'b1', label: 'NAAC Accredited', icon: Award },
  { id: 'b2', label: 'NBA Accredited', icon: CheckCircle },
  { id: 'b3', label: 'AICTE Gold', icon: Zap },
  { id: 'b4', label: 'UGC Recognized', icon: Globe },
  { id: 'b5', label: 'Deemed University', icon: Award },
];
const NEWS: News[] = [
  { id: 'n1', date: 'Mar 28, 2026', department: 'ECE', headline: 'MoU with Aizu University Japan', excerpt: 'MITS signed a landmark MoU with Aizu University, Japan, to foster AI research and student exchange.' },
  { id: 'n2', date: 'Mar 15, 2026', department: 'CSE', headline: 'AI/ML Product Development Workshop', excerpt: 'Industry leaders and students collaborated in a hands-on workshop on AI/ML product development.' },
  { id: 'n3', date: 'Mar 1, 2026', department: 'All', headline: 'High-Octane Hackathon 2026', excerpt: '48-hour internal hackathon saw record participation and innovative solutions from MITS students.' },
];

// ...existing code for hooks, components, and the full ResearchPage implementation...

// ============================================================================
// INTERFACES & TYPES
// ============================================================================

interface ResearchFocusArea {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface ResearchProject {
  id: string;
  title: string;
  department: string;
  agency: string;
  amount: string;
  status: 'Ongoing' | 'Completed';
  leadFaculty: string;
}

interface FacultyProfile {
  id: string;
  name: string;
  department: string;
  initials: string;
  researchInterests: string[];
  publicationCount: number;
  avatarBg: string;
}

interface InternationalCollaboration {
  id: string;
  institution: string;
  country: string;
  flag: string;
  year: number;
}

interface StudentResource {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  cta: string;
}

interface CrewdibilityBadge {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NewsArticle {
  id: string;
  date: string;
  department: string;
  headline: string;
}

interface YearlyProjectData {
  year: number;
  projects: number;
}

// ============================================================================
// DATA
// ============================================================================

const RESEARCH_FOCUS_AREAS: ResearchFocusArea[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Advanced algorithms, deep learning, and intelligent systems for real-world applications.',
    icon: Brain,
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 'embedded',
    title: 'Embedded Systems',
    description: 'IoT, microcontrollers, and smart device development for industry 4.0.',
    icon: Cpu,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'civil',
    title: 'Civil & Structural Engineering',
    description: 'Smart materials, earthquake-resistant design, and sustainable infrastructure.',
    icon: Building,
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'drone',
    title: 'Drone Technology',
    description: 'Autonomous flight systems, aerial imaging, and UAV applications.',
    icon: Wind,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'biomedical',
    title: 'Biomedical Engineering',
    description: 'Medical devices, diagnostics, and healthcare technology innovation.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'renewable',
    title: 'Sustainable Energy',
    description: 'Solar, wind, and renewable energy solutions for climate action.',
    icon: Leaf,
    color: 'from-lime-500 to-green-500',
  },
];

const FEATURED_PROJECTS: ResearchProject[] = [
  {
    id: 'proj-001',
    title: 'AI-Driven Crop Prediction System for Precision Agriculture',
    department: 'CSE & Agriculture Engineering',
    agency: 'DST (Department of Science & Technology)',
    amount: '₹18.5 Lakhs',
    status: 'Ongoing',
    leadFaculty: 'Dr. Rajeev Sharma',
  },
  {
    id: 'proj-002',
    title: 'IoT-Based Smart Building Management System',
    department: 'ECE (Electronics & Communication)',
    agency: 'AICTE (All India Council for Technical Education)',
    amount: '₹22.3 Lakhs',
    status: 'Ongoing',
    leadFaculty: 'Prof. Sanjana Joshi',
  },
  {
    id: 'proj-003',
    title: 'Earthquake-Resistant Low-Cost Housing Module',
    department: 'Civil Engineering',
    agency: 'Industry Partner (TCS DeepTech)',
    amount: '₹15.8 Lakhs',
    status: 'Completed',
    leadFaculty: 'Dr. Amit Patel',
  },
];

const FACULTY_PROFILES: FacultyProfile[] = [
  {
    id: 'fac-001',
    name: 'Dr. Rajeev Sharma',
    department: 'Computer Science & Engineering',
    initials: 'RS',
    researchInterests: ['Machine Learning', 'Natural Language Processing', 'Data Science'],
    publicationCount: 47,
    avatarBg: 'from-blue-400 to-blue-600',
  },
  {
    id: 'fac-002',
    name: 'Prof. Sanjana Joshi',
    department: 'Electronics & Communication Engineering',
    initials: 'SJ',
    researchInterests: ['IoT', 'Embedded Systems', '5G Networks'],
    publicationCount: 38,
    avatarBg: 'from-purple-400 to-purple-600',
  },
  {
    id: 'fac-003',
    name: 'Dr. Vikram Kumar',
    department: 'Mechanical Engineering',
    initials: 'VK',
    researchInterests: ['Renewable Energy', 'Thermal Systems', 'Sustainability'],
    publicationCount: 35,
    avatarBg: 'from-green-400 to-green-600',
  },
  {
    id: 'fac-004',
    name: 'Dr. Priya Menon',
    department: 'Biomedical Engineering',
    initials: 'PM',
    researchInterests: ['Medical Devices', 'Biosensors', 'Healthcare Tech'],
    publicationCount: 42,
    avatarBg: 'from-rose-400 to-rose-600',
  },
];

const INTERNATIONAL_COLLABORATIONS: InternationalCollaboration[] = [
  {
    id: 'collab-001',
    institution: 'Aizu University',
    country: 'Japan',
    flag: '🇯🇵',
    year: 2022,
  },
  {
    id: 'collab-002',
    institution: 'Osaka Institute of Technology',
    country: 'Japan',
    flag: '🇯🇵',
    year: 2023,
  },
  {
    id: 'collab-003',
    institution: 'Brno University of Technology',
    country: 'Czech Republic',
    flag: '🇨🇿',
    year: 2021,
  },
  {
    id: 'collab-004',
    institution: 'Innopolis University',
    country: 'Russia',
    flag: '🇷🇺',
    year: 2022,
  },
  {
    id: 'collab-005',
    institution: 'Asia University',
    country: 'Taiwan',
    flag: '🇹🇼',
    year: 2023,
  },
  {
    id: 'collab-006',
    institution: 'Providence University',
    country: 'Taiwan',
    flag: '🇹🇼',
    year: 2022,
  },
  {
    id: 'collab-007',
    institution: 'Steinbeis University',
    country: 'Germany',
    flag: '🇩🇪',
    year: 2021,
  },
  {
    id: 'collab-008',
    institution: 'Bowling Green State University',
    country: 'USA',
    flag: '🇺🇸',
    year: 2023,
  },
];

const STUDENT_RESOURCES: StudentResource[] = [
  {
    id: 'res-001',
    title: 'Apply for Research Internship',
    description: 'Join our faculty labs and work on cutting-edge projects during summers or semesters.',
    icon: Microscope,
    cta: 'Apply Now',
  },
  {
    id: 'res-002',
    title: 'Join a Research Club',
    description: 'Collaborate with peers, attend seminars, and build research skills in our vibrant clubs.',
    icon: Users,
    cta: 'Explore Clubs',
  },
  {
    id: 'res-003',
    title: 'Publish Your Paper',
    description: 'Get mentorship to publish your research in national and international conferences.',
    icon: BookOpen,
    cta: 'Submit Paper',
  },
];

const CREDIBILITY_BADGES: CrewdibilityBadge[] = [
  {
    id: 'badge-001',
    label: 'NAAC Accredited',
    description: 'Grade A, Highest Rating in Region',
    icon: Award,
  },
  {
    id: 'badge-002',
    label: 'NBA Accredited',
    description: '8+ Programs, Professional Excellence',
    icon: CheckCircle,
  },
  {
    id: 'badge-003',
    label: 'AICTE Gold Rated',
    description: 'Approved & Excellence in Education',
    icon: Zap,
  },
  {
    id: 'badge-004',
    label: 'UGC Recognized',
    description: 'Section 12(B), Autonomous Institute',
    icon: Globe,
  },
  {
    id: 'badge-005',
    label: 'Deemed University 2025',
    description: 'Official Recognition by Government of India',
    icon: Award,
  },
];

const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-001',
    date: 'March 28, 2026',
    department: 'ECE',
    headline: 'MoU Signed with Aizu University Japan for AI Research Collaboration',
  },
  {
    id: 'news-002',
    date: 'March 15, 2026',
    department: 'CSE',
    headline: 'AI & ML Product Development Workshop: Industry Leaders Share Insights',
  },
  {
    id: 'news-003',
    date: 'March 1, 2026',
    department: 'All Departments',
    headline: 'High-Octane Internal Hackathon 2026: 48-Hour Innovation Challenge',
  },
];

const YEARLY_PROJECT_DATA: YearlyProjectData[] = [
  { year: 2019, projects: 8 },
  { year: 2020, projects: 12 },
  { year: 2021, projects: 18 },
  { year: 2022, projects: 25 },
  { year: 2023, projects: 28 },
  { year: 2024, projects: 32 },
];

// ============================================================================
// COMPONENTS
// ============================================================================

/**
 * Animated Counter Component for Hero Stats
 */
const AnimatedCounter: React.FC<{ target: number; label: string; duration?: number }> = ({
  target,
  label,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-6xl font-bold text-[#C9A84C] font-display">{count}+</p>
      <p className="text-white/80 text-sm md:text-base mt-2">{label}</p>
    </div>
  );
};

/**
 * Scroll-triggered Fade-in Component
 */
const FadeInOnScroll: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}> = ({ children, delay = 0, direction = 'up' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: isVisible ? 'translate-y-0' : 'translate-y-10',
    left: isVisible ? 'translate-x-0' : '-translate-x-10',
    right: isVisible ? 'translate-x-0' : 'translate-x-10',
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${directionClass} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/**
 * Main Research Page Component
 */
const ResearchPage: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FB]">
      <Header />
      <main>
        {/* ====== HERO SECTION ====== */}
        <section
          className="relative w-full py-32 md:py-48 overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1B2236] to-[#23395d]"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#C9A84C_0%,transparent_60%)]" />
          <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
            <FadeInOnScroll delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5E9C8] rounded-full border border-[#C9A84C]/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                <span className="text-[#C9A84C] font-semibold text-sm">Core Competencies</span>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-[#F5E9C8] mb-6 leading-tight drop-shadow-lg">
                <span className="block">Research & Innovation</span>
              </h1>
            </FadeInOnScroll>

            <FadeInOnScroll delay={300}>
              <p className="text-lg md:text-xl text-[#E0E6F0] mb-8 leading-relaxed">
                MITS became a <span className="text-[#C9A84C] font-semibold">Deemed University in 2025</span>, recognized for cutting-edge research, 
                innovation, and academic excellence across engineering, sciences, and technology.
              </p>
            </FadeInOnScroll>

            {/* Stat Counters */}
            <FadeInOnScroll delay={400}>
              <div className="grid grid-cols-3 gap-6 md:gap-12 mt-12 pt-8 border-t border-[#C9A84C]/20">
                <AnimatedCounter target={59} label="Funded Projects" />
                <AnimatedCounter target={550} label="₹ Lakhs Funding" />
                <AnimatedCounter target={100} label="Publications" />
              </div>
            </FadeInOnScroll>

            {/* Badge */}
            <FadeInOnScroll delay={500}>
              <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-[#C9A84C]/20 border border-[#C9A84C]/40 rounded-lg shadow-md">
                <Award className="w-5 h-5 text-[#C9A84C]" />
                <span className="text-[#C9A84C] font-semibold">Deemed University 2025</span>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* ====== RESEARCH FOCUS AREAS ====== */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <FadeInOnScroll>
              <div className="text-center mb-16">
                <p className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4">
                  Key Research Domains
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-4">
                  Research Focus Areas
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Pioneering research across six strategic domains to tackle global challenges
                </p>
              </div>
            </FadeInOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {RESEARCH_FOCUS_AREAS.map((area, idx) => {
                const IconComponent = area.icon;
                return (
                  <FadeInOnScroll key={area.id} delay={idx * 100}>
                    <div
                      className="group relative p-8 rounded-xl border border-gray-200 bg-white hover:border-[#C9A84C]/50 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        <div
                          className={`w-14 h-14 rounded-lg bg-gradient-to-br ${area.color} p-3 mb-6 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-xl font-display font-bold text-[#0A1628] mb-3">
                          {area.title}
                        </h3>

                        <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>

                        <div className="flex items-center gap-2 text-[#C9A84C] font-semibold group-hover:gap-3 transition-all">
                          <span>View Projects</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </FadeInOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====== STATS DASHBOARD ====== */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeInOnScroll>
              <div className="text-center mb-16">
                <p className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4">
                  Growth Metrics
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-4">
                  Research Growth Timeline
                </h2>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-12">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={YEARLY_PROJECT_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 50 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="year" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0A1628',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#fff',
                      }}
                      cursor={{ fill: '#C9A84C', opacity: 0.1 }}
                    />
                    <Legend />
                    <Bar
                      dataKey="projects"
                      fill="#C9A84C"
                      radius={[8, 8, 0, 0]}
                      name="Funded Projects"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </FadeInOnScroll>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Funded Projects', value: '59', icon: Briefcase },
                { label: 'Total Funding', value: '₹550.06 Lakhs', icon: Zap },
                { label: 'Patents Filed', value: '25+', icon: CheckCircle },
                { label: 'International MoUs', value: '20+', icon: Globe },
              ].map((metric, idx) => {
                const MetricIcon = metric.icon;
                return (
                  <FadeInOnScroll key={idx} delay={300 + idx * 100}>
                    <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center mb-4">
                        <MetricIcon className="w-6 h-6 text-[#C9A84C]" />
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{metric.label}</p>
                      <p className="text-3xl font-display font-bold text-[#0A1628]">{metric.value}</p>
                    </div>
                  </FadeInOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====== FEATURED RESEARCH PROJECTS ====== */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <FadeInOnScroll>
              <div className="text-center mb-16">
                <p className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4">
                  Highlighted Initiatives
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-4">
                  Featured Research Projects
                </h2>
              </div>
            </FadeInOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURED_PROJECTS.map((project, idx) => (
                <FadeInOnScroll key={project.id} delay={idx * 150}>
                  <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          {project.department}
                        </p>
                        <h3 className="text-xl font-display font-bold text-[#0A1628] leading-snug">
                          {project.title}
                        </h3>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-4 ${
                          project.status === 'Ongoing'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {project.status === 'Ongoing' ? (
                          <>
                            <Clock className="w-3 h-3 inline mr-1" />
                            {project.status}
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-3 h-3 inline mr-1" />
                            {project.status}
                          </>
                        )}
                      </span>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Funding Agency</p>
                        <p className="font-semibold text-gray-800">{project.agency}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Project Amount</p>
                        <p className="text-lg font-display font-bold text-[#C9A84C]">{project.amount}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Lead Faculty</p>
                        <p className="font-semibold text-gray-800">{project.leadFaculty}</p>
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ====== FACULTY RESEARCH SPOTLIGHT ====== */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeInOnScroll>
              <div className="text-center mb-16">
                <p className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4">
                  Expert Researchers
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-4">
                  Faculty Research Spotlight
                </h2>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="relative">
                <div
                  ref={scrollContainerRef}
                  className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {FACULTY_PROFILES.map((faculty) => (
                    <div
                      key={faculty.id}
                      className="flex-shrink-0 w-80 bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${faculty.avatarBg} flex items-center justify-center text-white font-display font-bold text-xl mb-4`}
                      >
                        {faculty.initials}
                      </div>

                      <h3 className="text-lg font-display font-bold text-[#0A1628] mb-1">{faculty.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{faculty.department}</p>

                      <div className="mb-6 pb-6 border-b border-gray-200">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Research Interests
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {faculty.researchInterests.map((interest, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-semibold rounded-full"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#C9A84C]" />
                        <span className="text-sm font-semibold text-gray-800">
                          {faculty.publicationCount} Publications
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scroll Buttons */}
                <button
                  onClick={() => scroll('left')}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#C9A84C] text-white flex items-center justify-center hover:bg-[#B8953A] transition-colors shadow-lg hidden lg:flex"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#C9A84C] text-white flex items-center justify-center hover:bg-[#B8953A] transition-colors shadow-lg hidden lg:flex"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* ====== INTERNATIONAL COLLABORATIONS ====== */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <FadeInOnScroll>
              <div className="text-center mb-16">
                <p className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4">
                  Global Partnerships
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-4">
                  International Collaborations
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Strategic MoUs and partnerships with 20+ institutions across 6 continents
                </p>
              </div>
            </FadeInOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {INTERNATIONAL_COLLABORATIONS.map((collab, idx) => (
                <FadeInOnScroll key={collab.id} delay={idx * 75}>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-[#C9A84C]/50 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{collab.flag}</span>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {collab.country}
                        </p>
                        <p className="font-semibold text-gray-800">{collab.institution}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      MoU signed in <span className="font-semibold">{collab.year}</span>
                    </p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ====== FOR STUDENTS SECTION ====== */}
        <section className="py-24 px-4 bg-orange-50/30">
          <div className="container mx-auto max-w-7xl">
            <FadeInOnScroll>
              <div className="text-center mb-16">
                <p className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4">
                  Opportunities
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-4">
                  For Students
                </h2>
                <p className="text-gray-600 max-x-2xl mx-auto text-lg">
                  Get involved in research, develop skills, and make your mark on innovation
                </p>
              </div>
            </FadeInOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {STUDENT_RESOURCES.map((resource, idx) => {
                const IconComponent = resource.icon;
                return (
                  <FadeInOnScroll key={resource.id} delay={idx * 150}>
                    <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <div className="w-14 h-14 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center mb-6">
                        <IconComponent className="w-7 h-7 text-[#C9A84C]" />
                      </div>

                      <h3 className="text-xl font-display font-bold text-[#0A1628] mb-3">
                        {resource.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>

                      <button
                        className="px-6 py-2 bg-[#C9A84C] text-white font-semibold rounded-lg hover:bg-[#B8953A] transition-colors"
                        aria-label={`${resource.cta} for ${resource.title}`}
                      >
                        {resource.cta} →
                      </button>
                    </div>
                  </FadeInOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====== FOR PARENTS SECTION ====== */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <FadeInOnScroll>
              <div className="text-center mb-16">
                <p className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4">
                  Trust & Quality
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-4">
                  For Parents
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  MITS is accredited and recognized by all major regulatory bodies in India
                </p>
              </div>
            </FadeInOnScroll>

            <div className="space-y-4">
              {CREDIBILITY_BADGES.map((badge, idx) => {
                const BadgeIcon = badge.icon;
                return (
                  <FadeInOnScroll key={badge.id} delay={idx * 100}>
                    <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#C9A84C]/50 hover:bg-white transition-all">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                        <BadgeIcon className="w-6 h-6 text-[#C9A84C]" />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-display font-bold text-lg text-[#0A1628]">{badge.label}</h3>
                        <p className="text-gray-600 text-sm">{badge.description}</p>
                      </div>

                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    </div>
                  </FadeInOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====== LATEST RESEARCH NEWS ====== */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <FadeInOnScroll>
              <div className="text-center mb-16">
                <p className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4">
                  Recent Updates
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-4">
                  Latest Research News
                </h2>
              </div>
            </FadeInOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {NEWS_ARTICLES.map((article, idx) => (
                <FadeInOnScroll key={article.id} delay={idx * 150}>
                  <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                    <div className="bg-gradient-to-br from-[#C9A84C]/10 to-transparent p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-semibold text-gray-500">{article.date}</span>
                        <span className="px-3 py-1 bg-[#C9A84C]/20 text-[#C9A84C] text-xs font-bold rounded">
                          {article.department}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#0A1628] leading-snug group-hover:text-[#C9A84C] transition-colors">
                        {article.headline}
                      </h3>
                    </div>
                    <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[#C9A84C] font-semibold text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4 text-[#C9A84C] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </article>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ====== CONTACT / CTA FOOTER ====== */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#0A1628] to-[#0F2139]">
          <div className="container mx-auto max-w-4xl">
            <FadeInOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Collaborate With Us
                </h2>
                <p className="text-white/80 text-lg">
                  Have a research proposal or interested in partnering with MITS? Get in touch now.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Email */}
                <a
                  href="mailto:research@mits.ac.in"
                  className="flex items-center gap-4 p-6 bg-white/10 rounded-lg border border-white/20 hover:border-[#C9A84C]/50 hover:bg-white/15 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/20 flex items-center justify-center group-hover:bg-[#C9A84C] transition-colors">
                    <Mail className="w-6 h-6 text-[#C9A84C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Email Address</p>
                    <p className="text-white font-semibold">research@mits.ac.in</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 p-6 bg-white/10 rounded-lg border border-white/20 hover:border-[#C9A84C]/50 hover:bg-white/15 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/20 flex items-center justify-center group-hover:bg-[#C9A84C] transition-colors">
                    <Phone className="w-6 h-6 text-[#C9A84C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Phone Number</p>
                    <p className="text-white font-semibold">+91-9876-543-210</p>
                  </div>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-3 bg-[#C9A84C] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E5C158] transition-colors flex items-center justify-center gap-2"
                  aria-label="Submit research proposal"
                >
                  <Send className="w-5 h-5" />
                  Submit Research Proposal
                </button>
                <button
                  className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                  aria-label="Contact research cell"
                >
                  Contact Research Cell
                </button>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResearchPage;
