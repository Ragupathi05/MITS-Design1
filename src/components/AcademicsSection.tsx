import { GraduationCap, BookOpen, FlaskConical } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const programs = {
  undergraduate: {
    icon: GraduationCap,
    title: "Undergraduate",
    programCount: 18,
    departmentCount: 9,
    description: "Comprehensive B.Tech pathways with strong academic mentoring and outcome-based curriculum.",
    highlights: ["Industry-aligned curriculum", "Project-based learning", "Internship pathways", "Modern laboratory infrastructure"],
  },
  postgraduate: {
    icon: BookOpen,
    title: "Postgraduate",
    programCount: 10,
    departmentCount: 7,
    description: "Advanced M.Tech, MBA, and interdisciplinary programs focused on specialization and leadership.",
    highlights: ["Advanced specialization tracks", "Research-integrated coursework", "Management and technology blend", "Academic-industry interface"],
  },
  phd: {
    icon: FlaskConical,
    title: "PhD",
    programCount: 12,
    departmentCount: 8,
    description: "Doctoral research opportunities with faculty mentorship, funded projects, and publication support.",
    highlights: ["Interdisciplinary research", "Sponsored projects", "Publication ecosystem", "Innovation and patent support"],
  },
};

const ProgramPane = ({
  title, description, highlights, programCount, departmentCount, icon: Icon,
}: {
  title: string; description: string; highlights: string[]; programCount: number; departmentCount: number; icon: typeof GraduationCap;
}) => (
  <div className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
    <div className="w-14 h-14 rounded-md bg-secondary flex items-center justify-center mb-6">
      <Icon className="w-7 h-7 text-secondary-foreground" />
    </div>
    <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
    <div className="grid grid-cols-2 gap-3 mb-6">
      <div className="border border-border rounded-sm px-3 py-2 bg-muted/40">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Programs</p>
        <p className="font-display text-xl font-bold text-primary">{programCount}+</p>
      </div>
      <div className="border border-border rounded-sm px-3 py-2 bg-muted/40">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Departments</p>
        <p className="font-display text-xl font-bold text-primary">{departmentCount}+</p>
      </div>
    </div>
    <ul className="grid md:grid-cols-2 gap-3">
      {highlights.map((item) => (
        <li key={item} className="text-sm text-foreground/80 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const AcademicsSection = () => {
  return (
    <section id="academics" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Academics</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Programs That Shape Leaders
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from a wide range of accredited programs designed to prepare you for a successful career.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <Tabs defaultValue="undergraduate" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 w-full h-auto bg-secondary/10 p-1.5 rounded-md">
              <TabsTrigger value="undergraduate" className="py-2.5 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground font-semibold">
                Undergraduate
              </TabsTrigger>
              <TabsTrigger value="postgraduate" className="py-2.5 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground font-semibold">
                Postgraduate
              </TabsTrigger>
              <TabsTrigger value="phd" className="py-2.5 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground font-semibold">
                PhD
              </TabsTrigger>
            </TabsList>
            <TabsContent value="undergraduate"><ProgramPane {...programs.undergraduate} /></TabsContent>
            <TabsContent value="postgraduate"><ProgramPane {...programs.postgraduate} /></TabsContent>
            <TabsContent value="phd"><ProgramPane {...programs.phd} /></TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AcademicsSection;