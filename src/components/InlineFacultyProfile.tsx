import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, MapPin, Mail, Award, BookOpen, Briefcase, FileText, Globe, Star, Users } from "lucide-react";
import type { FacultyProfile } from "@/data/facultyProfileData";

interface InlineFacultyProfileProps {
  profile: FacultyProfile;
  onBack: () => void;
}

const tableHeaders: Record<string, string[]> = {
  education: ["Degree", "Specialization / Branch", "Institution", "Year"],
  projects: ["Title", "Funding Agency", "Amount", "Duration", "Role", "Status"],
  publications: ["Title", "Authors", "Year", "Publisher", "Type"],
  patents: ["Title", "Application No.", "Year", "Status"],
  achievements: ["Award Name", "Organization", "Year", "Description"],
  events: ["Event Title", "Role", "Date", "Location"],
};

export default function InlineFacultyProfile({ profile, onBack }: InlineFacultyProfileProps) {
  // Helpers
  const renderLinkBtn = (label: string, url: string, colorClass: string) => {
    if (!url) return null;
    return (
      <a
        href={url} target="_blank" rel="noopener noreferrer"
        className={`px-4 py-1.5 rounded-full text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-md ${colorClass}`}
      >
        {label}
      </a>
    );
  };

  const hasResearch = profile.researchInterests?.length > 0 || profile.researchSummary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="w-full flex-1 flex flex-col space-y-8 pb-16"
    >
      {/* Back Button */}
      <div>
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </span>
          Back to Faculty List
        </button>
      </div>

      {/* 1. HERO PROFILE SECTION */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="h-4 bg-gradient-to-r from-primary via-accent to-secondary" />
        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          {/* Photo */}
          <div className="shrink-0 relative group">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-slate-100">
              {profile.image ? (
                <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300">
                  <Users className="w-16 h-16" />
                </div>
              )}
            </div>
            {/* Dept Badge */}
            <div className="absolute -bottom-3 inset-x-0 flex justify-center">
              <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                {profile.department}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 pt-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-2" style={{ fontFamily: "var(--font-display)" }}>
              {profile.name}
            </h1>
            <p className="text-lg text-primary font-medium">{profile.designation}</p>
            
            <div className="flex items-center gap-2 mt-4 text-sm text-slate-500">
              <Mail className="w-4 h-4 text-slate-400" />
              <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">{profile.email || "Contact department"}</a>
            </div>

            {/* Research Area Tags */}
            {profile.researchInterests && profile.researchInterests.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.researchInterests.map((tag, i) => (
                  <span key={i} className="bg-slate-100 border border-slate-200 text-slate-700 text-xs px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Link Badges */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-3 items-center">
              {renderLinkBtn("Scopus", profile.researchProfileLinks?.scopus || "", "bg-orange-500")}
              {renderLinkBtn("Google Scholar", profile.researchProfileLinks?.googleScholar || "", "bg-blue-600")}
              {renderLinkBtn("ORCID", profile.researchProfileLinks?.orcid || "", "bg-emerald-600")}
              {renderLinkBtn("Vidwan", profile.researchProfileLinks?.vidwan || "", "bg-purple-600")}
              {profile.researchProfileLinks?.hIndex && (
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-slate-800 text-amber-400 border border-slate-700 shadow-sm ml-auto">
                  h-index: {profile.researchProfileLinks.hIndex}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. RESEARCH SUMMARY */}
      {hasResearch && profile.researchSummary && (
        <SectionContainer title="Research Summary" icon={Star} color="text-amber-500">
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-4xl">
            {profile.researchSummary}
          </p>
        </SectionContainer>
      )}

      {/* 3. EDUCATION */}
      {profile.education && profile.education.length > 0 && (
        <SectionContainer title="Education" icon={GraduationCap} color="text-primary">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  {tableHeaders.education.map(h => <th key={h} className="px-6 py-4">{h}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {profile.education.map((edu, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-secondary whitespace-nowrap">{edu.degree}</td>
                    <td className="px-6 py-4 text-slate-600">{edu.specialization}</td>
                    <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{edu.institution}</td>
                    <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{edu.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionContainer>
      )}

      {/* 4. PROJECTS */}
      {(profile.fundedProjects?.length > 0 || profile.consultancyProjects?.length > 0) && (
        <SectionContainer title="Projects & Consultancy" icon={Briefcase} color="text-blue-600">
          {profile.fundedProjects && profile.fundedProjects.length > 0 && (
            <div className="mb-8">
              <h4 className="text-sm font-bold text-slate-800 mb-4 px-6 uppercase tracking-wider">Funded Projects</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                    <tr>{tableHeaders.projects.map(h => <th key={h} className="px-6 py-3">{h}</th>)}</tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {profile.fundedProjects.map((p, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 font-medium text-secondary">{p.title}</td>
                        <td className="px-6 py-4 text-slate-600">{p.fundingAgency}</td>
                        <td className="px-6 py-4 text-slate-600 whitespace-nowrap font-medium">{p.amount}</td>
                        <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{p.duration}</td>
                        <td className="px-6 py-4 text-slate-500">{p.role}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${p.status === "Ongoing" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>{p.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {profile.consultancyProjects && profile.consultancyProjects.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-4 px-6 uppercase tracking-wider">Consultancy Work</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                    <tr>{tableHeaders.projects.map(h => <th key={h} className="px-6 py-3">{h}</th>)}</tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {profile.consultancyProjects.map((p, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 font-medium text-secondary">{p.title}</td>
                        <td className="px-6 py-4 text-slate-600">{p.fundingAgency}</td>
                        <td className="px-6 py-4 text-slate-600 whitespace-nowrap font-medium">{p.amount}</td>
                        <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{p.duration}</td>
                        <td className="px-6 py-4 text-slate-500">{p.role}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${p.status === "Ongoing" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>{p.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </SectionContainer>
      )}

      {/* 5. PUBLICATIONS & INTELLECTUAL OUTPUT */}
      {(profile.publications?.length > 0 || profile.patents?.length > 0) && (
        <SectionContainer title="Intellectual Output" icon={BookOpen} color="text-indigo-600">
          {profile.publications && profile.publications.length > 0 && (
            <div className="mb-8">
              <h4 className="text-sm font-bold text-slate-800 mb-4 px-6 uppercase tracking-wider">Publications</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                    <tr>{tableHeaders.publications.map(h => <th key={h} className="px-6 py-3">{h}</th>)}</tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {profile.publications.map((p, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 font-medium text-secondary max-w-md">{p.title}</td>
                        <td className="px-6 py-4 text-slate-600">{p.authors}</td>
                        <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{p.year}</td>
                        <td className="px-6 py-4 text-slate-600">{p.journal || p.conference || "-"}</td>
                        <td className="px-6 py-4 capitalize text-xs font-semibold text-slate-500">{p.journal ? "Journal" : p.conference ? "Conference" : "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {profile.patents && profile.patents.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-4 px-6 uppercase tracking-wider">Patents</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                    <tr>{tableHeaders.patents.map(h => <th key={h} className="px-6 py-3">{h}</th>)}</tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {profile.patents.map((p, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 font-medium text-secondary max-w-md">{p.title}</td>
                        <td className="px-6 py-4 text-slate-600 font-mono text-xs">{p.applicationNumber || "N/A"}</td>
                        <td className="px-6 py-4 text-slate-500">{p.year}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            p.status === "Granted" ? "bg-green-100 text-green-800" 
                            : p.status === "Published" ? "bg-blue-100 text-blue-800" 
                            : "bg-slate-100 text-slate-600"
                          }`}>{p.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </SectionContainer>
      )}

      {/* 6. ACHIEVEMENTS */}
      {profile.awards && profile.awards.length > 0 && (
        <SectionContainer title="Awards & Recognitions" icon={Award} color="text-yellow-600">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>{tableHeaders.achievements.map(h => <th key={h} className="px-6 py-3">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {profile.awards.map((a, i) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-bold text-secondary">{a.awardName}</td>
                    <td className="px-6 py-4 text-slate-600">{a.organization}</td>
                    <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{a.year}</td>
                    <td className="px-6 py-4 text-slate-600 text-xs">{a.description || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionContainer>
      )}

      {/* 7. EVENTS & EXPOSURE */}
      {(profile.eventsOrganised?.length > 0 || profile.eventsAttended?.length > 0 || profile.academicVisits?.length > 0) && (
        <SectionContainer title="Events & Academic Exposure" icon={Globe} color="text-teal-600">
          {profile.eventsOrganised && profile.eventsOrganised.length > 0 && (
            <div className="mb-8">
              <h4 className="text-sm font-bold text-slate-800 mb-4 px-6 uppercase tracking-wider">Events Organised</h4>
              <div className="grid md:grid-cols-2 gap-4 px-6">
                {profile.eventsOrganised.map((e, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:shadow-sm transition-all text-sm">
                    <h5 className="font-bold text-secondary mb-1">{e.title}</h5>
                    <p className="text-slate-500 mb-2">{e.role}</p>
                    <div className="flex items-center gap-4 text-slate-400 text-xs">
                      <span>{e.date}</span>
                      {e.venue && <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/>{e.venue}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {profile.academicVisits && profile.academicVisits.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-4 px-6 uppercase tracking-wider">Academic Visits / Invitations</h4>
              <ul className="space-y-3 px-6 text-sm">
                {profile.academicVisits.map((v, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                    <div>
                      <p className="font-medium text-secondary">{v.purpose}</p>
                      <p className="text-slate-500 mt-0.5">{v.institution} · {v.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </SectionContainer>
      )}

    </motion.div>
  );
}

// Reusable Section Shell
function SectionContainer({ title, icon: Icon, color, children }: { title: string, icon: any, color: string, children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
    >
      <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
        <div className={`p-2 rounded-lg bg-slate-50 ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
      </div>
      <div className="py-6">
        {children}
      </div>
    </motion.div>
  );
}
