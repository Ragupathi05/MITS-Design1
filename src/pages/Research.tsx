import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  BookOpen, FlaskConical, Lightbulb, Microscope, FileText, Award,
  Building2, GraduationCap, Globe, Download, ExternalLink, Calendar,
  Users, ChevronDown, ChevronRight, Mail, Phone, Shield, Briefcase,
  Target, Eye, ArrowRight, Layers, Scale, TrendingUp, Rocket, Droplets,
  Sparkles, Trophy, Handshake, Library, Wrench,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  researchOverview, projectsData, publicationsData, patentsData, seedGrantDocs, writingTipsContent,
  policiesData, eventsData, documentsData, iprCellData, mdrfData,
  researchVisionMission, keyAchievements, scopusPublications, wosPublications,
  hIndexTrend, projectFunding, patentsAYWise, patentTotals,
  mitsFoundationData, wwrcData, collaborationData,
  ipfcData, consultancyData, innovationData, researchCentresData,
  advisoryCommitteeData, academicResearchData,
} from "@/data/researchData";
import BarChart from "@/components/research/BarChart";

const BASE = import.meta.env.BASE_URL;

const sectionTabs = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "publications", label: "Publications", icon: FileText },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "patents", label: "Patents", icon: Lightbulb },
  { id: "policies", label: "Policies", icon: Shield },
  { id: "events", label: "Events", icon: Calendar },
  // { id: "documents", label: "Documents", icon: Layers },
  // { id: "advisory", label: "Advisory", icon: Users },
  { id: "Committee", label: "Committee", icon: Users },
  { id: "academic", label: "Academic", icon: GraduationCap },
  { id: "ipr", label: "IPR Cell", icon: Scale },
  { id: "collaborations", label: "Collaborations", icon: Handshake },
  { id: "innovation", label: "Innovation", icon: Sparkles },

  { id: "foundation", label: "MITS Foundation", icon: Rocket },
  { id: "wwrc", label: "WWRC", icon: Droplets },
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
        <SectionHeading title="About Research & Development Cell" />
        <p className="text-muted-foreground leading-relaxed mb-4">
          In alignment with the vision of the University to promote academic excellence, innovation
          and impactful research, the Research &amp; Development (R&amp;D) Cell at MITS, Deemed to
          be University, strengthens and supports the university's research ecosystem. The Cell
          facilitates and monitors research publications, sponsored projects, patents, technology
          transfer and consultancy activities, and plays a vital role in fostering interdisciplinary
          research, innovation, and academic & technological growth of the Institution.
        </p>
        {/* <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-primary" /> Recognised Research Centre
            </h3>
            <p className="text-muted-foreground text-sm">{researchOverview.recognisedCenter}</p>
          </div>
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
            <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-accent" /> Ph.D. Stipend
            </h3>
            <p className="text-muted-foreground text-sm">{researchOverview.scholarStipend}</p>
          </div>
        </div> */}
        <a
          href={researchOverview.enrolledScholarsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
        >
          <Download className="w-4 h-4" /> List of Enrolled Research Scholars
        </a>
      </div>
    </ScrollReveal>

    {/* Vision / Mission */}
    <ScrollReveal delay={0.05}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-3">
            <Eye className="w-5 h-5 text-primary" /> Vision
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{researchVisionMission.vision}</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-primary" /> Mission
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{researchVisionMission.mission}</p>
        </div>
      </div>
    </ScrollReveal>

    {/* Objectives */}
    <ScrollReveal delay={0.08}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Objectives of R&D Cell" />
        <ul className="grid sm:grid-cols-2 gap-3">
          {researchVisionMission.objectives.map((o, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>

    {/* Key Achievements stat grid */}
    <ScrollReveal delay={0.1}>
      <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Key Research Achievements" subtitle="A consolidated snapshot of MITS research performance and recognitions." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {keyAchievements.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="relative bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-2xl font-bold text-foreground leading-tight">{k.value}</p>
                  <p className="text-sm font-semibold text-card-foreground mt-1">{k.label}</p>
                  {k.sub && <p className="text-xs text-muted-foreground mt-1">{k.sub}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollReveal>

    {/* H-Index chart
    <ScrollReveal delay={0.12}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="H-Index Growth" subtitle="MITS institutional H-Index trend (Scopus, 2019 – 2025)." />
        <div className="flex items-center gap-3 mb-4 text-xs">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">H-Index has grown from <b className="text-foreground">21</b> in 2019 to <b className="text-foreground">70</b> in 2025.</span>
        </div>
        <BarChart data={hIndexTrend} rotateLabels={false} height={280} />
      </div>
    </ScrollReveal> */}

    {/* Contacts */}
    <ScrollReveal delay={0.15}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="R&D Cell Leadership" />
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
    {/* Funding analytics */}
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Project Funding Analytics" subtitle="Year-wise sanctioned project funding (Amount in ₹ Lakhs)." />
        <div className="grid place-items-center mb-6">
  <div className="w-full max-w-md bg-primary/5 border border-primary/20 rounded-xl p-5">
    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
      Total Sanctioned
    </p>
    <p className="font-display text-3xl font-bold text-primary mt-1">
      ₹18.46 Cr
    </p>
    <p className="text-xs text-muted-foreground mt-1">
      Cumulative Research Projects / Workshops/ seminar grants till date
    </p>
  </div>
</div>
        <BarChart data={projectFunding} unit="Amount in ₹ Lakhs" height={300} />
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Sanctioned Research Projects" subtitle="Download year-wise funded project reports." />
        {/* <a
          href={projectsData.sanctionedProjects.allProjectsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity mb-6"
        >
          <Download className="w-4 h-4" /> Download All Projects (PDF)
        </a> */}
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
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <LinkCard title="Research Areas" link={projectsData.subSections[0].link!} icon={Microscope} />
        </div>
        <div className="border border-border rounded-xl p-5 bg-muted/20">
          <h3 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" /> Writing Tips for Research Proposals
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{writingTipsContent.intro}</p>
          <Accordion type="single" collapsible>
            {writingTipsContent.sections.map((s, i) => (
              <AccordionItem key={i} value={`tip-${i}`}>
                <AccordionTrigger className="text-sm font-semibold text-foreground">{s.heading}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1.5">
                    {s.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
      {/* Stat strip */}
      <ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-2xl p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Scopus Indexed Publications (2007 - Till Date)</p>
            <p className="font-display text-3xl font-bold text-primary mt-1">3,200+</p>
            {/* <p className="text-xs text-muted-foreground mt-1">• Scopus ID 60107346</p> */}
          </div>
          {/* <div className="bg-card border border-border rounded-2xl p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">SCI / Scopus Articles</p>
            <p className="font-display text-3xl font-bold text-foreground mt-1">3,000+</p>
            <p className="text-xs text-muted-foreground mt-1">Published in reputed indexed journals</p>
          </div> */}
          <div className="bg-card border border-border rounded-2xl p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">H-Index (2026*)</p>
            <p className="font-display text-3xl font-bold text-accent mt-1">75</p>
            {/* <p className="text-xs text-muted-foreground mt-1">sustained growth</p> */}
          </div>
        </div>
      </ScrollReveal>

      {/* Scopus + WoS charts */}
      <ScrollReveal delay={0.05}>
        <div className="grid lg:grid-cols-1 gap-8">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-1">Publications in Scopus</h3>
            <p className="text-xs text-muted-foreground mb-4">Year-wise Scopus indexed publications (2021 – 2026*).</p>
            <BarChart data={scopusPublications} height={280} />
          </div>
          {/* <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-1">WoS Indexed Publications</h3>
            <p className="text-xs text-muted-foreground mb-4">Year-wise Web of Science indexed publications (2021 – 2026*).</p>
            <BarChart data={wosPublications} height={280} accent="hsl(var(--accent))" />
          </div> */}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
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
const PatentsSection = () => {
  const totals = [
    { label: "Total Patents", value: patentTotals.total, color: "hsl(var(--primary))" },
    { label: "Patents Published", value: patentTotals.published, color: "hsl(var(--accent))" },
    { label: "Patents Granted", value: patentTotals.granted, color: "hsl(var(--secondary))" },
  ];
  const filed = patentsAYWise.map((p) => ({ label: p.year, value: p.filed }));
  const published = patentsAYWise.map((p) => ({ label: p.year, value: p.published }));
  const granted = patentsAYWise.map((p) => ({ label: p.year, value: p.granted }));
  const totalAY = patentsAYWise.map((p) => ({ label: p.year, value: p.total }));
  return (
    <div className="space-y-6">
      {/* Headline totals */}
      <ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { l: "Total Patents", v: patentTotals.total, cls: "text-primary" },
            { l: "Published", v: patentTotals.published, cls: "text-accent" },
            { l: "Granted", v: patentTotals.granted, cls: "text-secondary" },
          ].map((s) => (
            <div key={s.l} className="bg-card border border-border rounded-2xl p-6 text-center">
              <p className={`font-display text-5xl font-bold ${s.cls}`}>{s.v}</p>
              <p className="text-sm font-semibold text-card-foreground mt-2 uppercase tracking-wider">{s.l}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Composition + AY-wise chart */}
      <ScrollReveal delay={0.05}>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          {/* <SectionHeading title="Patent Portfolio Breakdown" subtitle="Includes Patents, Copyrights, Trademarks & Geographical Indications (GI)." /> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {[
              { l: "Copyrights", v: "08" },
              { l: "Trademarks", v: "03" },
              { l: "GI", v: "30" }, 
            ].map((s) => (
              <div key={s.l} className="bg-muted/40 border border-border rounded-2xl p-6 text-center">
                <p className="font-display text-5xl font-bold text-foreground">{s.v}</p>
                <p className="text-xs text-muted-foreground mt-2">{s.l}</p>
              </div>
            ))}
          </div>
          <BarChart data={totals} rotateLabels={false} height={220} />
        </div>
      </ScrollReveal>

      {/* AY-wise charts */}
      <ScrollReveal delay={0.08}>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <SectionHeading title="Patents — Academic Year wise" subtitle="Filed, published, granted and total patents across academic years." />
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Total Patents</p>
              <BarChart data={totalAY} height={240} />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Patents Granted</p>
              <BarChart data={granted} height={240} accent="hsl(var(--accent))" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Patents Published</p>
              <BarChart data={published} height={240} accent="hsl(var(--secondary))" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Patents Filed</p>
              <BarChart data={filed} height={240} />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mt-6 border border-border rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-primary/5">
                <tr>
                  {["A.Y.", "Filed", "Published","Granted", "Total"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 font-semibold text-foreground whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {patentsAYWise.map((p, i) => (
                  <tr key={p.year} className={`border-t border-border/50 ${i % 2 ? "bg-muted/30" : ""}`}>
                    <td className="px-4 py-3 font-semibold text-foreground">{p.year}</td>
                    <td className="px-4 py-3 text-muted-foreground">{p.filed}</td>
                    <td className="px-4 py-3 text-muted-foreground">{p.published}</td>
                    {/* <td className="px-4 py-3 text-muted-foreground">{p.underExam}</td> */}
                    <td className="px-4 py-3 text-muted-foreground">{p.granted}</td>
                    <td className="px-4 py-3 font-semibold text-primary">{p.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>

      {/* <ScrollReveal delay={0.12}>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <SectionHeading title={patentsData.title} subtitle={patentsData.description} />
          <div className="grid sm:grid-cols-2 gap-4">
            <LinkCard title="Download Patent Details (Excel)" link={patentsData.patentDetailsLink} icon={Download} />
            <LinkCard title="View All Patents" link={patentsData.patentDetailsLink} icon={FileText} />
          </div>
        </div>
      </ScrollReveal> */}

    </div>
  );
};

/* ─── POLICIES TAB ─── */
const PoliciesSection = () => (
  <div className="space-y-6">
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

    {/* SEED Grant Policy — inline */}
    {/* <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading
          title="SEED Grant Policy"
          subtitle="The SEED Money scheme supports faculty-led early-stage research at MITS. Application, utilisation, expenditure and completion forms are provided below."
        />
        <div className="grid sm:grid-cols-2 gap-3">
          {seedGrantDocs.map((d) => (
            <LinkCard key={d.title} title={d.title} link={d.link} icon={FileText} />
          ))}
        </div>
      </div>
    </ScrollReveal> */}
  </div>
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
// const DocumentsSection = () => (
//   <ScrollReveal>
//     <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
//       <SectionHeading title="Documents" subtitle="Committee formations and institutional ethics documents." />
//       <div className="grid sm:grid-cols-2 gap-3">
//         {documentsData.map((d) => (
//           <LinkCard key={d.title} title={d.title} link={d.link} icon={FileText} />
//         ))}
//       </div>
//     </div>
//   </ScrollReveal>
// );
/* committe Tab */


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

/* ─── ADVISORY COMMITTEE TAB ─── */
// const AdvisorySection = () => (
//   <div className="space-y-6">
//     <ScrollReveal>
//       <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
//         <SectionHeading title={advisoryCommitteeData.title} subtitle={advisoryCommitteeData.description} />
//         <div className="grid sm:grid-cols-2 gap-4">
//           {advisoryCommitteeData.members.map((m, i) => (
//             <div key={i} className="border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
//               <h4 className="font-bold text-card-foreground text-sm">{m.name}</h4>
//               <p className="text-primary text-xs font-medium mt-1">{m.designation}</p>
//               <p className="text-muted-foreground text-xs mt-1">{m.affiliation}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </ScrollReveal>
//     <ScrollReveal delay={0.05}>
//       <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
//         <SectionHeading title="Responsibilities" />
//         <ul className="grid sm:grid-cols-2 gap-3">
//           {advisoryCommitteeData.responsibilities.map((r, i) => (
//             <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
//               <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
//               <span>{r}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </ScrollReveal>
//   </div>
// );

/* ─── ACADEMIC RESEARCH TAB ─── */
const AcademicResearchSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title={academicResearchData.title} subtitle={academicResearchData.description} />
        <div className="space-y-4">
          {academicResearchData.programmes.map((p, i) => (
            <div key={i} className="bg-muted/40 border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.details}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          {academicResearchData.links.map((l) => (
            <LinkCard key={l.title} title={l.title} link={l.link} icon={ExternalLink} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* ─── COLLABORATIONS TAB ─── */
const CollaborationsSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Research Collaborations" subtitle={collaborationData.description} />
        <div className="grid sm:grid-cols-2 gap-4">
          {collaborationData.partners.map((p, i) => (
            <div key={i} className="bg-muted/40 border border-border rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Handshake className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{p}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* ─── IPFC TAB ─── */
const IPFCSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title={ipfcData.title} subtitle={ipfcData.description} />
        <a href={ipfcData.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
          <ExternalLink className="w-4 h-4" /> Visit IPFC Portal
        </a>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.05}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-2xl p-6">
          <SectionHeading title="Objectives" />
          <ul className="space-y-2">
            {ipfcData.objectives.map((o, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <SectionHeading title="Services" />
          <ul className="space-y-2">
            {ipfcData.services.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.1}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Contact" />
        <div className="grid sm:grid-cols-2 gap-4">
          {ipfcData.contacts.map((c, i) => (
            <div key={i} className="border border-border rounded-xl p-4">
              <h4 className="font-bold text-card-foreground text-sm">{c.name}</h4>
              <p className="text-primary text-xs font-medium mt-1">{c.role}</p>
              <div className="space-y-1 text-xs text-muted-foreground mt-2">
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

/* ─── CONSULTANCY TAB ─── */
const ConsultancySection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title={consultancyData.title} subtitle={consultancyData.description} />
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Consultancy Revenue</p>
            <p className="font-display text-4xl font-bold text-primary mt-2">{consultancyData.revenue}</p>
            <p className="text-xs text-muted-foreground mt-1">{consultancyData.revenueNote}</p>
          </div>
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Core Activities</p>
            <ul className="space-y-1">
              {consultancyData.activities.slice(0, 3).map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a href={consultancyData.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
          <ExternalLink className="w-4 h-4" /> Explore Consultancy
        </a>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Consultancy Services" />
        <ul className="grid sm:grid-cols-2 gap-3">
          {consultancyData.activities.map((a, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.1}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Resources" />
        <div className="grid sm:grid-cols-2 gap-3">
          {consultancyData.links.map((l) => (
            <LinkCard key={l.title} title={l.title} link={l.link} icon={ExternalLink} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* ─── INNOVATION TAB ─── */
const InnovationSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title={innovationData.title} subtitle={innovationData.description} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {innovationData.highlights.map((h, i) => (
            <div key={i} className="bg-muted/40 border border-border rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{h}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Innovation Ecosystem" />
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Startup Support</h3>
            <p className="text-muted-foreground text-sm">20+ startups incubated with MSME support, mentoring and seed funding.</p>
          </div>
          <div className="border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Entrepreneurship</h3>
            <p className="text-muted-foreground text-sm">Regular hackathons, idea pitches and innovation challenges for students and faculty.</p>
          </div>
          <div className="border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Idea Lab</h3>
            <p className="text-muted-foreground text-sm">AICTE IDEA Lab provides prototype development, 3D printing and hands-on innovation support.</p>
          </div>
          <div className="border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Incubation Activities</h3>
            <p className="text-muted-foreground text-sm">MITS Foundation incubation centre offers co-working space, IPR support and investor connect.</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.1}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Resources" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {innovationData.links.map((l) => (
            <LinkCard key={l.title} title={l.title} link={l.link} icon={ExternalLink} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

/* ─── RESEARCH CENTRES TAB ─── */
const ResearchCentresSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title={researchCentresData.title} subtitle={researchCentresData.description} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchCentresData.centres.map((c, i) => (
            <div key={i} className="bg-muted/40 border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">{c.name}</h3>
              <p className="text-muted-foreground text-sm">{c.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Centre Objectives" />
        <ul className="grid sm:grid-cols-2 gap-3">
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>Foster interdisciplinary research aligned with national priorities</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>Provide specialised infrastructure and lab facilities</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>Support doctoral and post-doctoral research programmes</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>Facilitate industry-sponsored projects and consultancy</span>
          </li>
        </ul>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.1}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Resources" />
        <div className="grid sm:grid-cols-2 gap-3">
          {researchCentresData.links.map((l) => (
            <LinkCard key={l.title} title={l.title} link={l.link} icon={ExternalLink} />
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
        <a href="https://mits.ac.in/mdrf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
          <ExternalLink className="w-4 h-4" /> Visit MDRF Portal
        </a>
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

/* ─── MITS FOUNDATION TAB ─── */
const FoundationSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-gradient-to-br from-primary/10 via-background to-accent/5 border border-border rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
            <Rocket className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{mitsFoundationData.title}</h2>
            <p className="text-xs text-primary font-semibold mt-1 uppercase tracking-wider">Section 8 Company • Incubation & Innovation</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{mitsFoundationData.description}</p>
        <a href={mitsFoundationData.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
          <ExternalLink className="w-4 h-4" /> Visit mitsfoundation.org
        </a>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Key Highlights" />
        <ul className="grid sm:grid-cols-2 gap-3">
          {mitsFoundationData.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  </div>
);

/* ─── WWRC TAB ─── */
const WWRCSection = () => (
  <div className="space-y-6">
    <ScrollReveal>
      <div className="bg-gradient-to-br from-secondary/10 via-background to-primary/5 border border-border rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center shrink-0">
            <Droplets className="w-7 h-7 text-secondary" />
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{wwrcData.title}</h2>
            <p className="text-xs text-secondary font-semibold mt-1 uppercase tracking-wider">Sustainable Water & Environmental Research</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{wwrcData.description}</p>
        <a href={wwrcData.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
          <ExternalLink className="w-4 h-4" /> Visit WWRC Portal
        </a>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.05}>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <SectionHeading title="Focus Areas" />
        <ul className="grid sm:grid-cols-2 gap-3">
          {wwrcData.focusAreas.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Droplets className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  </div>
);

const Research = () => {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const el = document.getElementById("tab-scroll");
    const leftFade = document.getElementById("tab-fade-left");
    const rightFade = document.getElementById("tab-fade-right");
    if (!el || !leftFade || !rightFade) return;

    const update = () => {
      const canScroll = el.scrollWidth > el.clientWidth;
      if (!canScroll) {
        leftFade.classList.add("hidden");
        rightFade.classList.add("hidden");
        return;
      }
      leftFade.classList.toggle("hidden", el.scrollLeft <= 2);
      rightFade.classList.toggle("hidden", el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    };

    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <SEO
        title="Research & Innovation at MITS Madanapalle – 3,085 Scopus Papers"
        description="MITS research: 3,085 Scopus publications, H-Index 70, ₹18.44 Cr funded projects, 200+ patents. Explore R&D cell, IPR, consultancy, MDRF and innovation ecosystem."
        canonical="/research"
      />
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
        <section className="py-6 md:py-12 bg-background -mt-1">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
              {/* Scrollable Tab List */}
              <div className="relative mb-8 -mx-4 px-4">
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden" id="tab-fade-left" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" id="tab-fade-right" />
                <div className="overflow-x-auto pb-2" id="tab-scroll" style={{ scrollbarWidth: "thin", scrollbarColor: "hsl(var(--primary)) transparent" }}>
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
              </div>

              <TabsContent value="overview"><OverviewSection /></TabsContent>
              <TabsContent value="projects"><ProjectsSection /></TabsContent>
              <TabsContent value="publications"><PublicationsSection /></TabsContent>
              <TabsContent value="patents"><PatentsSection /></TabsContent>
              <TabsContent value="policies"><PoliciesSection /></TabsContent>
              <TabsContent value="events"><EventsSection /></TabsContent>
              {/* <TabsContent value="documents"><DocumentsSection /></TabsContent> */}
              {/* <TabsContent value="advisory"><AdvisorySection /></TabsContent> */}
              <TabsContent value="academic"><AcademicResearchSection /></TabsContent>
              <TabsContent value="ipr"><IPRSection /></TabsContent>
              <TabsContent value="collaborations"><CollaborationsSection /></TabsContent>
              <TabsContent value="ipfc"><IPFCSection /></TabsContent>
              <TabsContent value="innovation"><InnovationSection /></TabsContent>

              <TabsContent value="foundation"><FoundationSection /></TabsContent>
              <TabsContent value="wwrc"><WWRCSection /></TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;


