import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  Globe,
  Monitor,
  Home,
  ChevronRight,
  Database,
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  Award,
  FileText,
  Newspaper,
  Disc,
  Printer,
  Copy,
  ScanLine,
  Barcode,
  Library as LibraryIcon,
  GraduationCap,
  BookMarked,
  Sparkles,
  Wifi,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  libraryStats,
  digitalResources,
  memberships,
  facilities,
  services,
  collections,
  quickAccess,
  libraryContact,
} from "@/data/libraryData";

const BASE = import.meta.env.BASE_URL;
const heroImg = `${BASE}infrastructure/library/library-1.webp`;
const galleryImgs = [
  `${BASE}infrastructure/library/library-2.webp`,
  `${BASE}infrastructure/library/library-3.webp`,
  `${BASE}infrastructure/library/library-4.webp`,
  `${BASE}gallery/lib1.jpg`,
];

const useCountUp = (target: number, duration = 1400, start = false) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const startTime = performance.now();

    const tick = (time: number) => {
      const progress = Math.min(1, (time - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return value;
};

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
    {eyebrow && <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">{eyebrow}</p>}
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-lg mt-4 leading-relaxed">{subtitle}</p>}
    <div className="h-1 w-16 bg-primary rounded-full mx-auto mt-5" />
  </div>
);

const statIconFor = (key: string): any => {
  const map: Record<string, any> = {
    titles: BookOpen,
    volumes: BookMarked,
    reference: LibraryIcon,
    ebooks: Monitor,
    ejournals: FileText,
    projectReports: FileText,
    boundVolumes: BookOpen,
    cdroms: Disc,
    digitalSystems: Monitor,
    newspapers: Newspaper,
    periodicals: FileText,
    magazines: Newspaper,
  };

  return map[key] || BookOpen;
};

const facilityIconFor = (title: string): any => {
  const map: Record<string, any> = {
    "Digital Library": Monitor,
    "SOUL 3.0": Database,
    Photocopying: Copy,
    Printing: Printer,
    Scanning: ScanLine,
    Barcoding: Barcode,
    "Reading Hall": Users,
    "Reference Section": BookMarked,
    "Internet & Wi-Fi": Wifi,
    "Remote Access": Globe,
  };

  return map[title] || Sparkles;
};

const serviceByTitle = Object.fromEntries(services.map((service) => [service.title, service.desc])) as Record<string, string>;

const audienceServices = [
  {
    key: "students",
    label: "Students",
    note: "Borrow print material, discover the catalogue and stay connected to the core collection.",
    items: [
      { title: "Book Lending", desc: serviceByTitle["Book Lending"] },
      { title: "Online Catalogue (OPAC)", desc: serviceByTitle["Online Catalogue (OPAC)"] },
      { title: "Library Membership", desc: serviceByTitle["Library Membership"] },
    ],
  },
  {
    key: "faculty",
    label: "Faculty",
    note: "Use the library as a teaching, publication and class-preparation partner.",
    items: [
      { title: "Reference Services", desc: serviceByTitle["Reference Services"] },
      { title: "Journal Access", desc: serviceByTitle["Journal Access"] },
    ],
  },
  {
    key: "researchers",
    label: "Researchers",
    note: "Access deeper databases and document delivery for project work and publications.",
    items: [
      { title: "Digital Access", desc: serviceByTitle["Digital Access"] },
      { title: "Document Delivery", desc: serviceByTitle["Document Delivery"] },
    ],
  },
  {
    key: "phd",
    label: "PhD Scholars",
    note: "Find focused support for literature review, citation discipline and current awareness.",
    items: [
      { title: "Research Support", desc: serviceByTitle["Research Support"] },
      { title: "Current Awareness", desc: serviceByTitle["Current Awareness"] },
    ],
  },
] as const;

const Library = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <SEO
        title="Central Library – MITS | Official Resources and Services"
        description="Explore the MITS Central Library with official collection figures, research databases, facilities, audience-based services, gallery, and contact details."
        canonical="/library"
      />

      <main className="flex-1">
        <section
          className="relative pt-32 md:pt-40 pb-20 overflow-hidden"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.2)_70%,rgba(0,0,0,0.4)_100%)]" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Central Library</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Knowledge Access <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">at MITS</span>
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
              The Central Library is the academic spine of the campus, combining print collections, digital access,
              research support and quiet study spaces in one fully computerised environment.
            </p>
          </div>
          <div className="absolute bottom-4 left-6 z-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm">
                <li>
                  <Link to="/" className="text-white/70 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-white/50">›</li>
                <li>
                  <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li className="text-white/50">›</li>
                <li className="text-white font-semibold">Central Library</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
              <ScrollReveal>
                <div>
                  <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">About</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                    A modern knowledge resource centre for teaching and research
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                    <p>
                      The Central Library at MITS is the intellectual heart of the campus - a spacious, fully
                      computerised facility with a rich collection of print and digital resources spanning
                      engineering, sciences, management, humanities and research.
                    </p>
                    <p>
                      The library operates on the INFLIBNET <strong className="text-foreground">SOUL 3.0</strong>
                      integrated library management system and offers barcoded circulation, an online OPAC, and
                      network-wide document delivery via <strong className="text-foreground">DELNET</strong>.
                    </p>
                    <p>
                      With access to <strong className="text-foreground">IEEE, Springer Nature, EBSCO</strong>,and the
                      <strong className="text-foreground"> National Digital Library of India</strong>, students and faculty gain a
                      research-ready digital environment alongside the print collection.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.12}>
                <div className="space-y-4">
                  <Card className="p-6 border-border shadow-sm">
                    <div className="flex items-center gap-2 text-primary font-bold mb-3">
                      <Sparkles className="w-4 h-4" /> Mission
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      To acquire, organise and disseminate high-quality knowledge resources that empower academic
                      excellence, innovation and lifelong learning.
                    </p>
                  </Card>

                  <Card className="p-6 border-border shadow-sm">
                    <div className="flex items-center gap-2 text-secondary font-bold mb-3">
                      <Award className="w-4 h-4" /> What the library supports
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {[
                        "A diverse print and digital collection aligned to curriculum and research.",
                        "24x7 access pathways to e-resources on campus and remotely.",
                        "Research productivity through database access and document delivery.",
                        "An inclusive, technology-enabled learning environment for all users.",
                      ].map((item) => (
                        <li key={item} className="flex gap-2">
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Statistics"
              title="Library at a glance"
              subtitle="Official collection figures from the Central Library, presented once and in full."
            />
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
              {libraryStats.map((stat, index) => (
                <StatCard key={stat.key} stat={stat} icon={statIconFor(stat.key)} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="digital-resources" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Digital Resources"
              title="Collections, e-resources and quick access in one place"
              subtitle="A unified view of print holdings, research databases, remote access platforms and official portals."
            />

            <div className="grid lg:grid-cols-[1fr_1.05fr] gap-8 items-start">
              <ScrollReveal>
                <Card className="overflow-hidden border-border/80 shadow-sm h-full">
                  <div className="border-b border-border bg-secondary/5 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Collections</p>
                        <h3 className="font-display text-xl font-bold text-foreground">Print and digital stock</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {collections
                        .filter((collection) => collection.title !== "Research Resources")
                        .map((collection) => (
                          <div
                            key={collection.title}
                            className="rounded-xl border border-border bg-muted/30 px-4 py-3"
                          >
                            <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                              {collection.title}
                            </div>
                            <div className="mt-1 text-lg font-bold text-foreground">{collection.value}</div>
                          </div>
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-5 leading-relaxed">
                      Books, reference material, journals, magazines, project reports, CD-ROMs and digital content are
                      organised for direct academic use across disciplines.
                    </p>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <Card className="overflow-hidden border-border/80 shadow-sm h-full">
                  <div className="border-b border-border bg-secondary/5 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Database className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Access</p>
                        <h3 className="font-display text-xl font-bold text-foreground">Research resources and portals</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-secondary mb-3">
                        Research databases
                      </h4>
                      <div className="space-y-3">
                        {digitalResources
                          .filter((resource) => resource.category === "Journals")
                          .map((resource) => (
                            <a
                              key={resource.name}
                              href={resource.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-white p-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
                            >
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                                    {resource.name}
                                  </span>
                                  {resource.count && (
                                    <span className="inline-flex rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-semibold text-secondary">
                                      {resource.count}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{resource.desc}</p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                            </a>
                          ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-secondary mb-3">
                        E-resources and systems
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {digitalResources
                          .filter((resource) => resource.category !== "Journals")
                          .map((resource) => (
                            <a
                              key={resource.name}
                              href={resource.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-xl border border-border bg-muted/25 p-4 hover:border-primary/40 hover:shadow-sm transition-all"
                            >
                              <div className="text-sm font-bold text-foreground">{resource.name}</div>
                              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{resource.desc}</p>
                            </a>
                          ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-secondary mb-3">
                        Memberships
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {memberships.map((membership) => (
                          <span
                            key={membership.title}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/5 px-3 py-1.5 text-xs font-semibold text-secondary"
                          >
                            {membership.title}
                            <span className="rounded-full bg-white/70 px-2 py-0.5 text-[10px] font-bold text-primary">
                              {membership.id}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-secondary mb-3">
                        Quick access
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {quickAccess.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-2 text-xs font-semibold text-secondary hover:bg-primary hover:text-white transition-colors"
                          >
                            {item.title}
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Facilities"
              title="Library facilities that support study and access"
              subtitle="Merged physical and digital infrastructure presented as one cohesive support system."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {facilities.map((facility, index) => {
                const Icon = facilityIconFor(facility.title);

                return (
                  <ScrollReveal key={facility.title} delay={index * 0.04}>
                    <Card className="p-6 h-full border-border shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 transition-all group">
                      <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground">{facility.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{facility.desc}</p>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Library Services"
              title="Audience-based services with a clear focus"
              subtitle="Research support, service portfolio and user-specific help are consolidated into one tabbed experience."
            />

            <Tabs defaultValue="students" className="w-full">
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 lg:grid-cols-4 h-auto p-1.5 rounded-full bg-muted/70">
                {audienceServices.map((audience) => (
                  <TabsTrigger
                    key={audience.key}
                    value={audience.key}
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-sm py-2.5"
                  >
                    {audience.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {audienceServices.map((audience) => (
                <TabsContent key={audience.key} value={audience.key}>
                  <Card className="mt-6 p-6 md:p-8 border-border shadow-sm">
                    <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 items-start">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">{audience.label}</p>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                          Tailored support for {audience.label.toLowerCase()}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{audience.note}</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {audience.items.map((serviceItem) => (
                          <div
                            key={serviceItem.title}
                            className="rounded-xl border border-border bg-muted/25 p-4 hover:bg-white hover:shadow-sm transition-all"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <BookMarked className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground">{serviceItem.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{serviceItem.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <SectionHeading eyebrow="Gallery" title="Inside the Central Library" subtitle="A concise visual snapshot of the reading and digital spaces." />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImgs.map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.05, 0.3) }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-secondary/90"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-xl scale-110 opacity-30"
                    style={{ backgroundImage: `url(${src})` }}
                    aria-hidden
                  />
                  <img
                    src={src}
                    alt="Central Library"
                    loading="lazy"
                    className="relative z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    onError={(event) => {
                      (event.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading eyebrow="Contact" title="Reach the library" subtitle="Contact details and working hours for visits, assistance and enquiries." />

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="p-6 md:p-7 border-border shadow-sm">
                <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Location and contact
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3 text-muted-foreground leading-relaxed">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{libraryContact.location}</span>
                  </div>
                  <a href={`mailto:${libraryContact.email}`} className="flex gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{libraryContact.email}</span>
                  </a>
                  <a href={`tel:${libraryContact.phone}`} className="flex gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{libraryContact.phone}</span>
                  </a>
                </div>
              </Card>

              <Card className="p-6 md:p-7 border-border shadow-sm">
                <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" /> Working hours
                </h3>
                <div className="space-y-3 text-sm">
                  {libraryContact.hours.map((hour) => (
                    <div key={hour.day} className="flex items-center justify-between gap-4 border-b border-border last:border-0 pb-2 last:pb-0">
                      <span className="text-muted-foreground">{hour.day}</span>
                      <span className="font-semibold text-foreground">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const StatCard = ({ stat, icon: Icon, index }: { stat: typeof libraryStats[number]; icon: any; index: number }) => {
  const [inView, setInView] = useState(false);
  const value = useCountUp(stat.value, 1400, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      onViewportEnter={() => setInView(true)}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3) }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
    >
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
      <div className="relative">
        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
          <Icon className="w-5 h-5" />
        </div>
        <div className="font-display text-3xl md:text-4xl font-bold text-foreground tabular-nums">
          {value.toLocaleString("en-IN")}
          {stat.suffix || (stat.value >= 1000 ? "+" : "")}
        </div>
        <div className="text-sm font-semibold text-foreground/80 mt-1">{stat.label}</div>
        {stat.note && <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{stat.note}</div>}
      </div>
    </motion.div>
  );
};

export default Library;
