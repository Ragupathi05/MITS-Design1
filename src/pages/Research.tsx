import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  BookOpen, FlaskConical, Lightbulb, Microscope, FileText, Award,
  Building2, GraduationCap, Globe, Download, ExternalLink, Calendar,
  Users, ChevronDown, ChevronRight, Mail, Phone, Shield, Briefcase,
  Target, Eye, ArrowRight, Layers, Scale,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  researchOverview, projectsData, publicationsData, patentsData,
  policiesData, eventsData, documentsData, iprCellData, mdrfData,
} from "@/data/researchData";

const BASE = import.meta.env.BASE_URL;

const sectionTabs = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "publications", label: "Publications", icon: FileText },
  { id: "patents", label: "Patents", icon: Lightbulb },
  { id: "policies", label: "Policies", icon: Shield },
  { id: "events", label: "Events", icon: Calendar },
  { id: "documents", label: "Documents", icon: Layers },
  { id: "ipr", label: "IPR Cell", icon: Scale },
  { id: "mdrf", label: "MDRF", icon: Globe },
];

/* ─── Reusable Card ─── */
const LinkCard = ({ title, link, icon: Icon = ExternalLink }: { title: string; link: string; icon?: React.ElementType }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
  >
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all">
      <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
    </div>
    <span className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors flex-1">{title}</span>
    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
  </a>
);

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-8">
    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
    {subtitle && <p className="text-muted-foreground mt-2 max-w-3xl">{subtitle}</p>}
  </div>
);

/* ─── OVERVIEW TAB ─── */
const OverviewSection = () => (
  <div className="space-y-8">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Research & Development Cell" />
        <p className="text-muted-foreground leading-relaxed mb-4">{researchOverview.description}</p>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-4">
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
            <GraduationCap className="w-5 h-5 text-primary" /> Recognised Research Centre
          </h3>
          <p className="text-muted-foreground text-sm">{researchOverview.recognisedCenter}</p>
        </div>
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 mb-4">
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-accent" /> Ph.D. Stipend
          </h3>
          <p className="text-muted-foreground text-sm">{researchOverview.scholarStipend}</p>
        </div>
        <a
          href={researchOverview.enrolledScholarsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
        >
          <Download className="w-4 h-4" /> List of Enrolled Research Scholars
        </a>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.1}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Contact Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchOverview.contacts.map((c) => (
            <div key={c.email} className="border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-card-foreground text-sm">{c.name}</h4>
              <p className="text-primary text-xs font-medium mb-2">{c.role}</p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {c.email}</p>
                <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {c.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* ─── PROJECTS TAB ─── */
const ProjectsSection = () => (
  <div className="space-y-8">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Sanctioned Research Projects" subtitle="Year-wise research project details submitted to funding agencies." />
        <a
          href={projectsData.sanctionedProjects.allProjectsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity mb-6"
        >
          <Download className="w-4 h-4" /> Download All Projects (PDF)
        </a>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {projectsData.sanctionedProjects.yearWise.map((y) => (
            <a
              key={y.year}
              href={y.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">A.Y. {y.year}</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground ml-auto group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.1}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Research Resources" />
        <div className="grid sm:grid-cols-2 gap-3">
          <LinkCard title="Research Areas" link={projectsData.subSections[0].link!} icon={Microscope} />
          <LinkCard title="Writing Tips for Projects" link={projectsData.subSections[2].link!} icon={BookOpen} />
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.15}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Research Facilities" subtitle="Advanced lab equipment across departments." />
        <div className="grid sm:grid-cols-2 gap-3">
          {projectsData.subSections[1].items?.map((item) => (
            <LinkCard key={item.title} title={item.title} link={item.link} icon={FlaskConical} />
          ))}
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.2}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Funding Agencies" subtitle="National agencies providing research grants." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projectsData.fundingAgencies.indian.map((a) => (
            <LinkCard key={a.name} title={a.name} link={a.link} icon={Building2} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* ─── PUBLICATIONS TAB ─── */
const PublicationsSection = () => {
  const [openYear, setOpenYear] = useState<string>(publicationsData.topRated[0].year);
  return (
    <div className="space-y-6">
      <ScrollReveal>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <SectionHeading title={publicationsData.title} subtitle={publicationsData.subtitle} />
          <div className="space-y-4">
            {publicationsData.topRated.map((yr) => (
              <div key={yr.year} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenYear(openYear === yr.year ? "" : yr.year)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-muted hover:bg-primary/10 transition-colors"
                >
                  <span className="font-display font-bold text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" /> Academic Year: {yr.year}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-primary transition-transform ${openYear === yr.year ? "rotate-180" : ""}`} />
                </button>
                {openYear === yr.year && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary/5 border-b border-border">
                          <th className="text-left px-4 py-3 font-semibold text-foreground">Name</th>
                          <th className="text-left px-4 py-3 font-semibold text-foreground">Dept</th>
                          <th className="text-left px-4 py-3 font-semibold text-foreground">Publication Details</th>
                          <th className="text-left px-4 py-3 font-semibold text-foreground whitespace-nowrap">IF & Publisher</th>
                        </tr>
                      </thead>
                      <tbody>
                        {yr.entries.map((pub, i) => (
                          <tr key={i} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
                            <td className="px-4 py-3 font-medium text-foreground align-top whitespace-nowrap">{pub.name}</td>
                            <td className="px-4 py-3 text-primary font-semibold align-top whitespace-nowrap">{pub.dept}</td>
                            <td className="px-4 py-3 text-muted-foreground align-top leading-relaxed">{pub.details}</td>
                            <td className="px-4 py-3 text-foreground font-medium align-top whitespace-nowrap">{pub.ifPublisher}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a
              href={publicationsData.moreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
            >
              <ExternalLink className="w-4 h-4" /> View All Publications on mits.ac.in
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

/* ─── PATENTS TAB ─── */
const PatentsSection = () => (
  <ScrollReveal>
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
      <SectionHeading title={patentsData.title} subtitle={patentsData.description} />
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <LinkCard title="Download Patent Details (Excel)" link={patentsData.patentDetailsLink} icon={Download} />
        <LinkCard title="View All Patents on mits.ac.in" link={patentsData.moreLink} icon={ExternalLink} />
      </div>
      <a
        href={patentsData.iprCellLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
      >
        <ExternalLink className="w-4 h-4" /> More details at mits.ac.in/researchpatents
      </a>
    </div>
  </ScrollReveal>
);

/* ─── POLICIES TAB ─── */
const PoliciesSection = () => (
  <ScrollReveal>
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
      <SectionHeading title="Policies" subtitle="Research and innovation policies governing MITS R&D activities." />
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-primary/5 border-b border-border">
              <th className="text-left px-4 py-3 font-semibold text-foreground w-16">S.No</th>
              <th className="text-left px-4 py-3 font-semibold text-foreground">Name of the Policy</th>
              <th className="text-left px-4 py-3 font-semibold text-foreground">View</th>
            </tr>
          </thead>
          <tbody>
            {policiesData.map((p, i) => (
              <tr key={p.sno} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
                <td className="px-4 py-3 text-muted-foreground">{p.sno}</td>
                <td className="px-4 py-3 font-medium text-foreground">{p.title}</td>
                <td className="px-4 py-3">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </ScrollReveal>
);

/* ─── EVENTS TAB ─── */
const EventsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? eventsData : eventsData.slice(0, 8);

  return (
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Research Events" subtitle="Workshops, seminars, and awareness programs organized by the R&D Cell." />
        <div className="space-y-3">
          {visible.map((e, i) => (
            <a
              key={i}
              href={e.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary transition-colors">
                  <Calendar className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors leading-snug">{e.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{e.dept}</p>
                  <p className="text-xs text-primary/80 font-medium mt-1">{e.date}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1 group-hover:text-primary" />
              </div>
            </a>
          ))}
        </div>
        {eventsData.length > 8 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            {showAll ? "Show Less" : `Show All ${eventsData.length} Events`}
            <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
    </ScrollReveal>
  );
};

/* ─── DOCUMENTS TAB ─── */
const DocumentsSection = () => (
  <ScrollReveal>
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
      <SectionHeading title="Documents" subtitle="Committee formations and institutional ethics documents." />
      <div className="grid sm:grid-cols-2 gap-3">
        {documentsData.map((d) => (
          <LinkCard key={d.title} title={d.title} link={d.link} icon={FileText} />
        ))}
      </div>
    </div>
  </ScrollReveal>
);

/* ─── IPR CELL TAB ─── */
const IPRSection = () => (
  <div className="space-y-8">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title={iprCellData.title} />
        <div className="space-y-4">
          <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">National IPR Policy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{iprCellData.nationalPolicy}</p>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{iprCellData.rationale}</p>
          <a href={iprCellData.committeeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
            <Download className="w-4 h-4" /> MITS IPR Committee 2025-26
          </a>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.05}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-3">
            <Eye className="w-5 h-5 text-primary" /> Vision
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{iprCellData.vision}</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-primary" /> Mission
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{iprCellData.mission}</p>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.1}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Objectives" />
        <ul className="space-y-2">
          {iprCellData.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.15}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Types of Intellectual Property" />
        <Accordion type="multiple" className="space-y-2">
          {iprCellData.ipTypes.map((ip, i) => (
            <AccordionItem key={i} value={`ip-${i}`} className="border border-border rounded-xl px-4">
              <AccordionTrigger className="text-sm font-semibold text-card-foreground hover:text-primary py-3">
                {ip.name}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-3">
                {ip.desc}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.2}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-2xl p-6">
          <SectionHeading title="Submit Your Ideas" />
          <a
            href={iprCellData.ideaSubmissionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" /> Google Form
          </a>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <SectionHeading title="Useful Websites" />
          <div className="space-y-2">
            {iprCellData.usefulLinks.map((l) => (
              <a key={l.name} href={l.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ExternalLink className="w-3.5 h-3.5" /> {l.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.25}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="IPR Policy & Documents" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {iprCellData.policyDocuments.map((d) => (
            <LinkCard key={d.title} title={d.title} link={d.link} icon={FileText} />
          ))}
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.3}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Contact" />
        <div className="grid sm:grid-cols-2 gap-4">
          {iprCellData.contacts.map((c) => (
            <div key={c.email} className="border border-border rounded-xl p-4">
              <p className="text-xs text-primary font-semibold mb-1">{c.role}</p>
              <h4 className="font-bold text-card-foreground text-sm">{c.name}</h4>
              <p className="text-xs text-muted-foreground">{c.dept}</p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2"><Mail className="w-3.5 h-3.5" /> {c.email}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* ─── MDRF TAB ─── */
const MDRFSection = () => (
  <div className="space-y-8">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title={mdrfData.title} />
        <p className="text-muted-foreground leading-relaxed mb-4">{mdrfData.about}</p>
        <p className="text-muted-foreground leading-relaxed mb-4">{mdrfData.platform}</p>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Purpose" />
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{mdrfData.purpose}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{mdrfData.industryPerspective}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{mdrfData.societalImpact}</p>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.1}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-2xl p-6">
          <SectionHeading title="Objectives" />
          <ul className="space-y-2">
            {mdrfData.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <SectionHeading title="Goals" />
          <ul className="space-y-2">
            {mdrfData.goals.map((g, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* ─── MAIN PAGE ─── */
const Research = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={`${BASE}Hero-Section/image%203.JPG`} alt="Research at MITS" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/70" />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4">
                Research & Development
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Advancing Knowledge Through <span className="text-accent">Innovation</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-white/85 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                MITS fosters a vibrant research ecosystem through advanced labs, funded projects, and industry collaborations driving impactful outcomes.
              </motion.p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80V40C240 0 480 60 720 40C960 20 1200 60 1440 40V80H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Tabs Navigation + Content */}
        <section className="py-12 md:py-16 bg-background -mt-1">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
              {/* Scrollable Tab List */}
              <div className="mb-8 -mx-4 px-4 overflow-x-auto scrollbar-hide">
                <TabsList className="inline-flex h-auto p-1 bg-muted rounded-xl gap-1 w-max">
                  {sectionTabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-medium rounded-lg whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
                    >
                      <tab.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.label.length > 8 ? tab.label.slice(0, 6) + "…" : tab.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value="overview"><OverviewSection /></TabsContent>
              <TabsContent value="projects"><ProjectsSection /></TabsContent>
              <TabsContent value="publications"><PublicationsSection /></TabsContent>
              <TabsContent value="patents"><PatentsSection /></TabsContent>
              <TabsContent value="policies"><PoliciesSection /></TabsContent>
              <TabsContent value="events"><EventsSection /></TabsContent>
              <TabsContent value="documents"><DocumentsSection /></TabsContent>
              <TabsContent value="ipr"><IPRSection /></TabsContent>
              <TabsContent value="mdrf"><MDRFSection /></TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
