import { useMemo, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDepartmentByKey, type FacultyMember } from "@/data/departmentData";
import { getFacultyProfile, type FacultyProfile, type FacultySection } from "@/data/facultyProfiles";
import { slugifyFaculty } from "@/lib/facultySlug";
import {
  ArrowLeft, ArrowRight, Mail, GraduationCap, BookOpen,
  Award, FileText, Users, ExternalLink, ChevronRight, Sparkles, Briefcase
} from "lucide-react";

function buildFromFacultyMember(f: FacultyMember): FacultyProfile {
  const sections: FacultySection[] = [];
  const p = f.profile;
  if (p?.education?.length) {
    sections.push({
      title: "Details of Educational Qualification",
      content: p.education.map((e, i) => ({
        "S.No": String(i + 1),
        Course: e.degree,
        Specialization: e.specializatio,
        "College Name/University": e.university,
        "Year of Passing": e.year,
      })),
    });
  }
  if (p?.researchAreas) sections.push({ title: "Research Areas", content: p.researchAreas });
  if (p?.publications?.length) {
    sections.push({
      title: "Publication Details",
      content: p.publications.map((pub, i) => ({
        "S.No": String(i + 1),
        "Academic Year": pub.year,
        "Details of Research Publication": pub.title,
        Indexing: pub.index,
      })),
    });
  }
  if (p?.patents?.length) {
    sections.push({
      title: "Patents",
      content: p.patents.map((pt, i) => ({
        "S.No": String(i + 1),
        "Academic Year": pt.year,
        "Title of the Patent": pt.title,
        Status: pt.status,
      })),
    });
  }
  if (p?.awards?.length) sections.push({ title: "Awards/Achievements", content: p.awards });
  return { name: f.name, designation: f.designation, image: f.image, email: f.email, sections };
}

const KNOWN_LINK_BRANDS: Record<string, { color: string; label: string }> = {
  scopus: { color: "from-orange-500 to-red-500", label: "Scopus" },
  vidwan: { color: "from-emerald-600 to-teal-600", label: "Vidwan" },
  scholar: { color: "from-blue-600 to-indigo-600", label: "Google Scholar" },
  google: { color: "from-blue-600 to-indigo-600", label: "Google Scholar" },
  orcid: { color: "from-green-600 to-lime-600", label: "ORCID" },
  researchgate: { color: "from-cyan-600 to-sky-600", label: "ResearchGate" },
  linkedin: { color: "from-blue-700 to-blue-500", label: "LinkedIn" },
  publons: { color: "from-purple-600 to-fuchsia-600", label: "Publons" },
};

function brandFor(identifier: string) {
  const key = identifier.toLowerCase();
  for (const k of Object.keys(KNOWN_LINK_BRANDS)) {
    if (key.includes(k)) return KNOWN_LINK_BRANDS[k];
  }
  return { color: "from-slate-700 to-slate-500", label: identifier };
}

function isTableContent(content: unknown): content is Record<string, string>[] {
  if (!Array.isArray(content) || content.length === 0) return false;
  return typeof content[0] === "object" && content[0] !== null;
}

function isLinkList(content: unknown): boolean {
  if (!Array.isArray(content) || content.length === 0) return false;
  const first = content[0];
  if (typeof first !== "object" || first === null) return false;
  return "Link" in first && "Identifier" in first;
}

function renderSectionContent(section: FacultySection) {
  const content = section.content;
  if (typeof content === "string") {
    return <p className="text-slate-700 leading-relaxed whitespace-pre-line">{content}</p>;
  }
  if (Array.isArray(content)) {
    if (isLinkList(content)) {
      const items = content as Record<string, string>[];
      return (
        <ul className="space-y-2">
          {items.map((it, i) => (
            <li key={i} className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-semibold text-secondary">{it.Identifier}:</span>
              {it.Link?.startsWith("http") ? (
                <a href={it.Link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">{it.Link}</a>
              ) : (
                <span className="text-slate-600">{it.Link}</span>
              )}
            </li>
          ))}
        </ul>
      );
    }
    if (isTableContent(content)) {
      const rows = content;
      const columns = Object.keys(rows[0]);
      return (
        <>
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
                <tr>
                  {columns.map((c) => (
                    <th key={c} className="px-4 py-3 text-left font-semibold whitespace-nowrap">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 odd:bg-white even:bg-slate-50/30">
                    {columns.map((c) => (
                      <td key={c} className="px-4 py-3 text-slate-700 align-top">{r[c] || "-"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {rows.map((r, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                {columns.map((c) => (
                  <div key={c} className="flex flex-col py-1.5 border-b border-slate-100 last:border-0">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{c}</span>
                    <span className="text-sm text-slate-800">{r[c] || "-"}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      );
    }
    return (
      <ul className="space-y-2">
        {(content as string[]).map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-700">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return null;
}

const SECTION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Details of Educational Qualification": GraduationCap,
  "Education": GraduationCap,
  "Research Areas": Sparkles,
  "Research Identifiers": ExternalLink,
  "Publication Details": BookOpen,
  "Publications": BookOpen,
  "Patents": FileText,
  "Awards/Achievements": Award,
  "Projects": Briefcase,
  "Books": BookOpen,
  "Conferences": Users,
};

const FacultyProfilePage = () => {
  const { deptKey, slug } = useParams<{ deptKey: string; slug: string }>();
  const navigate = useNavigate();
  const dept = getDepartmentByKey(deptKey || "");

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const { faculty, profile, prev, next, index } = useMemo(() => {
    if (!dept || !slug) return { faculty: undefined, profile: undefined, prev: undefined, next: undefined, index: -1 };
    const idx = dept.faculty.findIndex((f) => slugifyFaculty(f.name) === slug);
    if (idx < 0) return { faculty: undefined, profile: undefined, prev: undefined, next: undefined, index: -1 };
    const f = dept.faculty[idx];
    const rich = getFacultyProfile(deptKey || "", f.name);
    const merged: FacultyProfile = rich
      ? { ...rich, image: rich.image || f.image, email: rich.email || f.email }
      : buildFromFacultyMember(f);
    return {
      faculty: f,
      profile: merged,
      prev: dept.faculty[idx - 1],
      next: dept.faculty[idx + 1],
      index: idx,
    };
  }, [dept, slug, deptKey]);

  useEffect(() => {
    if (deptKey && dept && !faculty) navigate(`/department/${deptKey}/faculty`, { replace: true });
  }, [deptKey, dept, faculty, navigate]);

  if (!dept || !faculty || !profile) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />
        <div className="container mx-auto px-4 py-24 text-center">Loading…</div>
        <Footer />
      </div>
    );
  }

  // Extract research links + h-index from sections
  const idSection = profile.sections.find((s) => /research identifier/i.test(s.title));
  const researchLinks: { label: string; url: string; color: string }[] = [];
  let hIndex: string | undefined;
  if (idSection && Array.isArray(idSection.content)) {
    for (const item of idSection.content as Record<string, string>[]) {
      if (!item.Identifier) continue;
      if (/h-?index/i.test(item.Identifier)) {
        hIndex = item.Link;
        continue;
      }
      if (item.Link?.startsWith("http")) {
        const b = brandFor(item.Identifier);
        researchLinks.push({ label: b.label, url: item.Link, color: b.color });
      }
    }
  }

  const educationSection = profile.sections.find((s) => /educational qualification|education/i.test(s.title));
  const eduCount = Array.isArray(educationSection?.content) ? (educationSection!.content as unknown[]).length : 0;
  const pubSection = profile.sections.find((s) => /publication/i.test(s.title));
  const pubCount = Array.isArray(pubSection?.content) ? (pubSection!.content as unknown[]).length : 0;
  const patentSection = profile.sections.find((s) => /patent/i.test(s.title));
  const patentCount = Array.isArray(patentSection?.content) ? (patentSection!.content as unknown[]).length : 0;
  const researchAreasSection = profile.sections.find((s) => /research area/i.test(s.title));
  const researchTags = typeof researchAreasSection?.content === "string"
    ? researchAreasSection!.content.split(/,|;/).map((s) => s.trim()).filter(Boolean)
    : [];

  // Sections to render in main column (exclude identifiers + research areas which are shown in sidebar)
  const mainSections = profile.sections.filter(
    (s) => !/research identifier|research area/i.test(s.title)
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-[#0a1f33] text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-accent blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 pt-6 pb-12 md:pt-10 md:pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-white/70 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/departments" className="hover:text-white">Departments</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to={`/department/${deptKey}`} className="hover:text-white">{dept.shortName}</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to={`/department/${deptKey}/faculty`} className="hover:text-white">Faculty</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-medium">{profile.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-10 items-center"
          >
            <div className="relative mx-auto md:mx-0">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent to-primary blur-xl opacity-50" />
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-200">
                {profile.image ? (
                  <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/40">
                    <Users className="w-20 h-20" />
                  </div>
                )}
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="inline-block text-[11px] tracking-[0.3em] uppercase font-semibold text-accent mb-3 px-3 py-1 rounded-full bg-white/10 border border-white/15">
                {dept.name}
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
                {profile.name}
              </h1>
              <p className="text-lg md:text-xl text-accent font-medium mb-3">{profile.designation}</p>
              {faculty.qualification && (
                <p className="text-sm text-white/70 mb-4">{faculty.qualification}</p>
              )}

              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                {profile.email && (
                  <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-white/90 hover:text-accent">
                    <Mail className="w-4 h-4" /> {profile.email}
                  </a>
                )}
              </div>
              <p className="mt-3 text-sm text-white/75">
                Office Address : NPN204
              </p>
            </div>
          </motion.div>

          {/* Stat strip */}
          {(eduCount + pubCount + patentCount > 0 || hIndex) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10"
            >
              {[
                { label: "Publications", value: pubCount, icon: BookOpen, show: pubCount > 0 },
                { label: "Patents", value: patentCount, icon: FileText, show: patentCount > 0 },
                { label: "Qualifications", value: eduCount, icon: GraduationCap, show: eduCount > 0 },
                { label: "h-Index (Scopus)", value: hIndex, icon: Sparkles, show: !!hIndex },
              ].filter((s) => s.show).map((s, i) => (
                <div key={i} className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 px-4 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold leading-none">{s.value}</div>
                    <div className="text-[11px] uppercase tracking-wider text-white/70 mt-1">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* BODY */}
      <main className="container mx-auto px-4 py-10 md:py-14 flex-1 w-full">
        <div className="grid lg:grid-cols-[320px,1fr] gap-8">
          {/* SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            {/* Research links */}
            {researchLinks.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-4">Research Profiles</h3>
                <div className="space-y-2">
                  {researchLinks.map((l, i) => (
                    <a
                      key={i}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between gap-3 rounded-xl px-4 py-3 bg-gradient-to-r ${l.color} text-white font-semibold text-sm shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all`}
                    >
                      <span className="flex items-center gap-2"><ExternalLink className="w-4 h-4" /> {l.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Expertise */}
            {researchTags.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {researchTags.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">{t}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Back */}
            <Link
              to={`/department/${deptKey}/faculty`}
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-secondary hover:bg-secondary hover:text-white transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Faculty List
            </Link>
          </aside>

          {/* MAIN */}
          <div className="space-y-6 min-w-0">
            {mainSections.length === 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center text-slate-500">
                Detailed academic profile is being updated. Please refer to the department for the latest information.
              </div>
            )}

            {mainSections.map((section, i) => {
              const Icon = SECTION_ICONS[section.title] || BookOpen;
              return (
                <motion.section
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.2) }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
                >
                  <header className="flex items-center gap-3 px-5 md:px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                      {section.title}
                    </h2>
                  </header>
                  <div className="p-5 md:p-6">{renderSectionContent(section)}</div>
                </motion.section>
              );
            })}

            {/* Prev / Next */}
            {(prev || next) && (
              <div className="grid sm:grid-cols-2 gap-3 pt-4">
                {prev ? (
                  <Link
                    to={`/department/${deptKey}/faculty/${slugifyFaculty(prev.name)}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-4 hover:border-primary/40 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-slate-500 mb-1">
                      <ArrowLeft className="w-3 h-3" /> Previous Faculty
                    </div>
                    <div className="font-bold text-secondary group-hover:text-primary">{prev.name}</div>
                    <div className="text-xs text-slate-500">{prev.designation}</div>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link
                    to={`/department/${deptKey}/faculty/${slugifyFaculty(next.name)}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-4 hover:border-primary/40 hover:shadow-md transition-all text-right"
                  >
                    <div className="flex items-center justify-end gap-2 text-[11px] uppercase tracking-widest text-slate-500 mb-1">
                      Next Faculty <ArrowRight className="w-3 h-3" />
                    </div>
                    <div className="font-bold text-secondary group-hover:text-primary">{next.name}</div>
                    <div className="text-xs text-slate-500">{next.designation}</div>
                  </Link>
                ) : <div />}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FacultyProfilePage;
