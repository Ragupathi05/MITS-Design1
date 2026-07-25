import { useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import {
  Briefcase,
  GraduationCap,
  Award,
  Users,
  CheckCircle2,
  Mail,
  Phone,
  Building2,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  DollarSign,
  TrendingUp,
  Landmark,
  UserCheck,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const careerTabs = [
    { id: "overview",     label: "Careers" },
    { id: "vc",           label: "VC Position" },
    { id: "director-tp",  label: "Director Training & Placements" },
    { id: "deans",        label: "Dean Positions" },
    { id: "faculty",      label: "Faculty Positions" },
    { id: "benefits",     label: "Benefits" },
    { id: "press",        label: "Press Release" },
    { id: "contact",      label: "Contact" },
  ];

  const featuredRoles = [
    {
      title: "Chief Finance Officer",
      img: "https://mits.ac.in/public/uploads/career/car-img-3.jpg",
      dept: "Finance & Accounts Division",
    },
    {
      title: "Senior Placement Officer",
      img: "https://mits.ac.in/public/uploads/career/car-img-1.jpg",
      dept: "Training & Placement Cell",
    },
    {
      title: "Placement Officer",
      img: "https://mits.ac.in/public/uploads/career/car-img-2.jpg",
      dept: "Training & Placement Cell",
    },
  ];

  const whatWeDoList = [
    {
      title: "A mature and motivated student community",
      img: "https://mits.ac.in/public/uploads/career/moti1.png",
    },
    {
      title: "A talented and diverse student body",
      img: "https://mits.ac.in/public/uploads/career/ta-student.png",
    },
    {
      title: "Access to the latest instructional technologies",
      img: "https://mits.ac.in/public/uploads/career/3lates.png",
    },
    {
      title: "Comprehensive training and ongoing support",
      img: "https://mits.ac.in/public/uploads/career/moti.png",
    },
  ];

  const benefitsList = [
    {
      icon: DollarSign,
      title: "Competitive Pay Scale",
      desc: "Salary benchmarked against 7th Pay Commission norms with higher pay for Ph.D. holders from IITs/IISc/NITs.",
    },
    {
      icon: Award,
      title: "Research & Publication Incentives",
      desc: "Cash rewards and performance incentives for high-impact Scopus/WoS journal publications and granted patents.",
    },
    {
      icon: TrendingUp,
      title: "Conference Sponsorship",
      desc: "Financial assistance and Duty Leave for presenting research papers at reputed national and international conferences.",
    },
    {
      icon: Sparkles,
      title: "Internal Seed Funding",
      desc: "Dedicated institutional seed grants to kickstart innovative interdisciplinary projects and prototype development.",
    },
    {
      icon: ShieldCheck,
      title: "Health & Medical Insurance",
      desc: "Comprehensive health insurance policy for employees & family along with on-campus free medical dispensary.",
    },
    {
      icon: Landmark,
      title: "Retirement & Social Security",
      desc: "Employees' Provident Fund (EPF), Gratuity benefits, and Encashment of Accumulated Earned Leave.",
    },
    {
      icon: Building2,
      title: "Campus Housing & Transport",
      desc: "Subsidized staff quarters within serene campus surroundings and complimentary bus transportation facilities.",
    },
    {
      icon: HeartHandshake,
      title: "Child Education & Wellness",
      desc: "Tuition fee concessions for children of employees, access to campus sports complex, gymnasium, and yoga center.",
    },
  ];

  return (
    <PageShell>
      <SEO
        title="Careers & Faculty Recruitment | MITS Deemed to be University"
        description="Explore career opportunities, faculty positions, Vice-Chancellor (VC) position, Director Training & Placements recruitment, and employee benefits at Madanapalle Institute of Technology & Science (MITS)."
      />

      {/* Hero Banner */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Briefcase className="w-4 h-4 text-blue-400" />
                Join Our Academic Leadership & Team
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                Build Your Future at MITS
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Madanapalle Institute of Technology &amp; Science (MITS), Deemed to be University, invites passionate educators, researchers, and administrators to shape the next generation of global leaders.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sub-tab Navigation Strip */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-none gap-1 py-2">
            {careerTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all shrink-0 ${
                  activeTab === t.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* TAB 1 — OVERVIEW / CAREERS */}
          {activeTab === "overview" && (
            <div className="space-y-10">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Welcome to MITS Careers</h2>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Our goal is to equip students with the knowledge, skills, and leadership abilities needed to pursue environmental management and technical leadership positions in industry, government, consulting, and business organizations.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    We are a pioneer in technical education in this region and are committed to build an effective team that performs at the highest standards and upholds our legacy of excellence. Due to our blistering pace of growth, we continuously seek competent and dedicated professionals across academic, management, and support functions.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    MITS strives to create an attractive and supportive work environment that enables employees to achieve excellence and take pride in their accomplishments. We are committed to provide a rewarding and enriching MITS experience for all staff members. We value and respect our employees and actively involve them in decision-making processes. Promoting equal opportunity, openness, freedom of expression, and social responsibility is central to our success.
                  </p>
                </div>
              </ScrollReveal>

              {/* Teach for MITS and Enjoy */}
              <ScrollReveal delay={0.05}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <SectionHeading title="Teach for MITS and Enjoy" />
                    <ul className="space-y-3.5">
                      {[
                        "A mature and motivated student community",
                        "A talented and diverse student body",
                        "Access to the latest instructional technologies",
                        "Comprehensive training and ongoing professional support",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <SectionHeading title="Equal Employment Opportunity Policy" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      MITS is committed to a policy of equal employment opportunity and does not discriminate against any employee or applicant on the basis of race, age, sex, color, physical or mental disability, religion, sexual orientation, marital status, national origin, or political affiliation.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Featured Key Roles */}
              <ScrollReveal delay={0.08}>
                <div>
                  <SectionHeading title="Featured Key Positions" subtitle="Key managerial and operational leadership roles at MITS." />
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                    {featuredRoles.map((role, i) => (
                      <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="aspect-[4/3] bg-muted overflow-hidden">
                          <img
                            src={role.img}
                            alt={role.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://placehold.co/600x450/1e293b/38bdf8?text=Key+Position";
                            }}
                          />
                        </div>
                        <div className="p-5">
                          <span className="text-[11px] font-bold text-primary uppercase tracking-wider">{role.dept}</span>
                          <h3 className="font-bold text-foreground text-base mt-1">{role.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* What We Do Here */}
              <ScrollReveal delay={0.1}>
                <div className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
                  <SectionHeading title="What We Do Here?" subtitle="A vibrant culture of collaborative learning and innovation." />
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    {whatWeDoList.map((item, idx) => (
                      <div key={idx} className="bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </div>
                        <h4 className="font-semibold text-foreground text-xs leading-snug">{item.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Apply Banner */}
              <ScrollReveal delay={0.12}>
                <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold">Applications Invited for Faculty Positions</h3>
                    <p className="text-slate-300 text-sm mt-1">Submit your CV and credentials to join our distinguished faculty team.</p>
                  </div>
                  <a
                    href="mailto:jobs@mits.ac.in"
                    className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors shrink-0 shadow-lg"
                  >
                    <Mail className="w-4 h-4" />
                    jobs@mits.ac.in
                  </a>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 2 — VC POSITION */}
          {activeTab === "vc" && (
            <div className="space-y-8">
              <ScrollReveal>
                {/* Poster container matching official MITS VC poster */}
                <div className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-900/50 shadow-2xl space-y-8">
                  {/* Header */}
                  <div className="text-center space-y-3 border-b border-blue-800/50 pb-8">
                    <span className="inline-block bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-extrabold uppercase px-4 py-1.5 rounded-full tracking-widest">
                      INVITATION FOR APPLICATIONS
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                      VICE-CHANCELLOR (VC)
                    </h2>
                    <p className="text-lg font-bold text-amber-300">Madanapalle Institute of Technology &amp; Science (MITS)</p>
                    <p className="text-xs text-slate-300">Deemed to be University under Section 3 of UGC Act, 1956 • Established 1998 • www.mits.ac.in</p>
                  </div>

                  {/* 4 Cards Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/80 border border-blue-800/60 rounded-2xl p-6 space-y-2">
                      <h4 className="font-bold text-amber-300 text-base flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-amber-300 shrink-0" />
                        ABOUT THE INSTITUTION
                      </h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        Madanapalle Institute of Technology &amp; Science (MITS), situated in Madanapalle, Andhra Pradesh, was established in 1998 and attained the status of a Deemed to be University in 2025. A premier institution dedicated to academic excellence, research, innovation, industry collaboration, and societal impact.
                      </p>
                    </div>

                    <div className="bg-slate-900/80 border border-blue-800/60 rounded-2xl p-6 space-y-2">
                      <h4 className="font-bold text-amber-300 text-base flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-amber-300 shrink-0" />
                        THE ROLE
                      </h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        MITS invites applications from accomplished academicians for the position of Vice-Chancellor (VC). The incumbent will bring a distinguished research profile, an internationally recognized record of leadership, and a forward-looking vision for global higher education.
                      </p>
                    </div>

                    <div className="bg-slate-900/80 border border-blue-800/60 rounded-2xl p-6 space-y-2">
                      <h4 className="font-bold text-amber-300 text-base flex items-center gap-2">
                        <Users className="w-5 h-5 text-amber-300 shrink-0" />
                        CANDIDATE PROFILE
                      </h4>
                      <ul className="space-y-1.5 text-slate-300 text-xs sm:text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-300 font-bold">&gt;</span> Exemplify academic excellence and integrity.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-300 font-bold">&gt;</span> Possess strong governance and strategic management capabilities.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-300 font-bold">&gt;</span> Effectively motivate and guide faculty, students, and stakeholders.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-300 font-bold">&gt;</span> Advance the University's mission and international aspirations.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-slate-900/80 border border-blue-800/60 rounded-2xl p-6 space-y-2">
                      <h4 className="font-bold text-amber-300 text-base flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-300 shrink-0" />
                        ELIGIBILITY &amp; PREFERENCE
                      </h4>
                      <ul className="space-y-1.5 text-slate-300 text-xs sm:text-sm">
                        <li><strong>• Age:</strong> Candidates around 55 years of age preferred; max age shall not exceed 59 years.</li>
                        <li><strong>• Qualifications:</strong> As per UGC norms for Vice-Chancellor appointments.</li>
                        <li><strong>• Experience:</strong> Prior Leadership experience at IIT's / IIM's / IIIT's or universities ranked within top 300 QS World University Rankings.</li>
                        <li><strong>• Profile:</strong> Distinguished research record with international recognition.</li>
                      </ul>
                    </div>
                  </div>

                  {/* REMUNERATION BOX */}
                  <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 border-2 border-amber-400/40 rounded-2xl p-6 text-center space-y-2">
                    <p className="text-slate-300 text-xs font-bold uppercase tracking-widest">REMUNERATION &amp; COMPENSATION</p>
                    <h3 className="font-display text-3xl sm:text-4xl font-black text-amber-300">
                      ANNUAL CTC: ₹1 CRORE
                    </h3>
                    <p className="text-slate-300 text-xs font-semibold">Rupees One Crore Only • Benchmark against top global institutions</p>
                  </div>

                  {/* HOW TO APPLY & DEADLINE */}
                  <div className="bg-slate-900 border border-blue-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-base">HOW TO APPLY</h4>
                      <p className="text-slate-300 text-xs sm:text-sm">
                        Eligible and interested academic leaders are invited to submit their detailed CV with Vision Statement to:
                      </p>
                      <a
                        href="mailto:leadershipsearch@mits.ac.in"
                        className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-bold text-sm px-4 py-2 rounded-lg hover:bg-amber-300 transition-colors mt-1"
                      >
                        <Mail className="w-4 h-4" />
                        leadershipsearch@mits.ac.in
                      </a>
                    </div>

                    <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-blue-800 pt-4 md:pt-0 md:pl-8">
                      <p className="text-xs text-slate-400 font-medium">LAST DATE FOR APPLICATION</p>
                      <p className="font-display text-2xl font-extrabold text-amber-300 mt-1">15th MAY 2026</p>
                      <p className="text-[11px] text-slate-400 mt-2">Leadership Search Committee • +91 91000 80999</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 3 — DIRECTOR TRAINING & PLACEMENTS */}
          {activeTab === "director-tp" && (
            <div className="space-y-8">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                  {/* Poster Image */}
                  <div className="w-full bg-slate-900 overflow-hidden">
                    <img
                      src="https://mits.ac.in/assets/dtp5.jpg"
                      alt="Director Training & Placements Position"
                      className="w-full h-auto object-cover max-h-[500px]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/1200x500/0f172a/38bdf8?text=Director+-+Training+%26+Placements";
                      }}
                    />
                  </div>

                  {/* Content details */}
                  <div className="p-6 md:p-8 space-y-8">
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">Strategic Executive Leadership Role</span>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">
                        Director — Training &amp; Placements
                      </h2>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-2">
                        Madanapalle Institute of Technology and Science (Deemed to be University) invites applications from accomplished Training &amp; Placement leaders and industry professionals for the position of <strong>Director – Training &amp; Placements</strong>. This is a strategic leadership role responsible for driving university placement outcomes, industry partnerships, and student career readiness at a national and global scale.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Key Responsibilities */}
                      <div className="bg-muted/30 border border-border rounded-xl p-6 space-y-4">
                        <h4 className="font-bold text-foreground text-lg flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          KEY RESPONSIBILITIES
                        </h4>
                        <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>Lead the training and placement team and transform the Training &amp; Placement ecosystem with a strategic, outcome-driven approach.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>Build and maintain strong relationships with top recruiters, MNCs, startups, and global organizations.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>Design and implement structured training programs (technical, aptitude, soft skills, career readiness).</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>Drive internship programs, live industry projects, and pre-placement engagements.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>Achieve high placement benchmarks in terms of percentage, CTC, and recruiter diversity.</span>
                          </li>
                        </ul>
                      </div>

                      {/* Eligibility Criteria */}
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-4">
                        <h4 className="font-bold text-primary text-lg flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          ELIGIBILITY CRITERIA
                        </h4>
                        <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span><strong>Postgraduate degree (MBA/PGDM preferred)</strong> from a reputed institution; Ph.D. is an added advantage.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Minimum <strong>15–20 years of experience</strong> in Training &amp; Placements / Corporate Relations / Talent Acquisition.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Demonstrated success in achieving high-quality placement outcomes in reputed institutions.</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* How to apply */}
                    <div className="bg-slate-900 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div>
                        <h4 className="font-bold text-amber-300 text-base">HOW TO APPLY</h4>
                        <p className="text-slate-300 text-xs sm:text-sm mt-1">
                          Eligible and interested candidates are invited to submit their application to:
                        </p>
                        <a
                          href="mailto:directortrainingplacement@mits.ac.in"
                          className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-bold text-sm px-4 py-2 rounded-lg hover:bg-amber-300 transition-colors mt-2"
                        >
                          <Mail className="w-4 h-4" />
                          directortrainingplacement@mits.ac.in
                        </a>
                      </div>
                      <div className="text-center md:text-right shrink-0">
                        <p className="text-xs text-slate-400">LAST DATE FOR APPLICATION</p>
                        <p className="font-display text-2xl font-extrabold text-amber-300">20 MAY 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 4 — DEAN POSITIONS */}
          {activeTab === "deans" && (
            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
                  <SectionHeading title="Dean Positions Offered" subtitle="Academic leadership positions across constituent Schools at MITS." />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    MITS Deemed to be University invites applications for Dean Positions from distinguished academicians with proven administrative competence, visionary leadership, and an outstanding research track record.
                  </p>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "School of Engineering",
                      "School of Computing",
                      "School of Management",
                      "School of Artificial Intelligence & ML",
                      "Research & Development Cell",
                    ].map((school, i) => (
                      <div key={i} className="border border-border rounded-xl p-4 bg-muted/20 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                          0{i + 1}
                        </div>
                        <span className="font-semibold text-foreground text-sm">{school}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-foreground text-base">How to Apply</h4>
                      <p className="text-muted-foreground text-xs">Send detailed resume with publication list &amp; vision document to jobs@mits.ac.in</p>
                    </div>
                    <a
                      href="mailto:jobs@mits.ac.in"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors text-xs"
                    >
                      <Mail className="w-4 h-4" />
                      jobs@mits.ac.in
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 5 — FACULTY POSITIONS */}
          {activeTab === "faculty" && (
            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
                  <SectionHeading title="Faculty Positions Offered" subtitle="Faculty Recruitment Drive for Academic Year 2026-27" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Applications are invited for Professors, Associate Professors, and Assistant Professors across the following engineering and science disciplines:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-border rounded-xl p-5 bg-muted/20">
                      <h4 className="font-bold text-foreground text-sm mb-2">School of Computing &amp; AI</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        CSE, Artificial Intelligence, Machine Learning, Data Science, Cyber Security, Networks, CST, MCA.
                      </p>
                    </div>
                    <div className="border border-border rounded-xl p-5 bg-muted/20">
                      <h4 className="font-bold text-foreground text-sm mb-2">School of Engineering</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Electronics &amp; Communication Engineering (ECE), Electrical &amp; Electronics Engineering (EEE), Mechanical Engineering (ME), Civil Engineering (CE).
                      </p>
                    </div>
                    <div className="border border-border rounded-xl p-5 bg-muted/20">
                      <h4 className="font-bold text-foreground text-sm mb-2">Management &amp; Humanities</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Management Studies (MBA, BBA), English, Mathematics, Physics, Chemistry.
                      </p>
                    </div>
                    <div className="border border-border rounded-xl p-5 bg-primary/5 border-primary/20">
                      <h4 className="font-bold text-primary text-sm mb-2">Qualifications &amp; Salary</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        As per AICTE / UGC norms. Higher pay package for Ph.D. holders from IITs, IISc, NITs, and reputed foreign universities.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">Email your updated resume &amp; certificates to: <strong>jobs@mits.ac.in</strong></p>
                    <a
                      href="mailto:jobs@mits.ac.in"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors text-xs shrink-0"
                    >
                      <Mail className="w-4 h-4" />
                      Apply via Email
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 6 — BENEFITS */}
          {activeTab === "benefits" && (
            <div className="space-y-6">
              <ScrollReveal>
                <div>
                  <SectionHeading title="MITS Employee Benefits & Perks" subtitle="We empower our faculty and staff with an enriching work ecosystem." />
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                    {benefitsList.map((b, idx) => {
                      const IconComp = b.icon;
                      return (
                        <div key={idx} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-colors space-y-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-foreground text-sm">{b.title}</h4>
                          <p className="text-muted-foreground text-xs leading-relaxed">{b.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 7 — PRESS RELEASE */}
          {activeTab === "press" && (
            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                  <SectionHeading title="Press Release & Advertisements" subtitle="Recruitment notifications published in leading national dailies." />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Official advertisements for MITS Deemed to be University recruitment drives published in leading national newspapers including The Hindu, Times of India, and Deccan Chronicle.
                  </p>
                  <div className="border border-border rounded-xl p-5 bg-muted/20">
                    <p className="text-xs text-muted-foreground">
                      For detailed advertisement clippings or media inquiries, please reach out to the HR Recruitment team at <strong>jobs@mits.ac.in</strong>.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* TAB 8 — CONTACT */}
          {activeTab === "contact" && (
            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 max-w-2xl">
                  <SectionHeading title="Contact HR & Recruitment Office" />
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Mr. Dinesh Motakatla</h4>
                    <p className="text-primary text-sm font-semibold">Senior Manager - HR</p>
                  </div>

                  <div className="space-y-3 text-sm text-muted-foreground border-t border-border pt-4">
                    <p className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary shrink-0" />
                      <span>
                        Madanapalle Institute of Technology &amp; Science<br />
                        Deemed to be University<br />
                        Madanapalle-Kadiri Road, Kurabalakota Mandal, Madanapalle - 517325<br />
                        Andhra Pradesh, India
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <span>Phone: +91 9160020744 / 9100973274</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <span>Email: <a href="mailto:jobs@mits.ac.in" className="text-primary hover:underline font-semibold">jobs@mits.ac.in</a>, <a href="mailto:hr@mits.ac.in" className="text-primary hover:underline font-semibold">hr@mits.ac.in</a></span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

        </div>
      </section>
    </PageShell>
  );
};

export default Careers;
