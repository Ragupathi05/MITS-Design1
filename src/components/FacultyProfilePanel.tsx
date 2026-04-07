import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, ExternalLink, BookOpen, Award, Briefcase, FlaskConical, Users, GraduationCap, Globe, FileText, Calendar, Building2, Megaphone, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { FacultyProfile } from "@/data/facultyProfileData";

interface Props {
  profile: FacultyProfile | null;
  onClose: () => void;
}

const SectionHeading = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
    <Icon className="w-5 h-5 text-primary" />
    <h3 className="text-lg font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
  </div>
);

const FacultyProfilePanel = ({ profile, onClose }: Props) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (profile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [profile]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const p = profile;

  return (
    <AnimatePresence>
      {p && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 h-full w-full md:w-[680px] lg:w-[780px] bg-background shadow-2xl overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-full bg-muted hover:bg-destructive hover:text-destructive-foreground p-2 transition-colors"
              aria-label="Close profile"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-secondary to-secondary/90 px-6 pt-8 pb-6">
              <div className="flex items-start gap-5">
                <div className="w-24 h-24 rounded-xl bg-white/10 border-2 border-white/20 flex items-center justify-center overflow-hidden shrink-0">
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <Users className="w-10 h-10 text-primary-foreground/60" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold text-primary-foreground" style={{ fontFamily: "var(--font-display)" }}>{p.name}</h2>
                  <p className="text-primary-foreground/80 text-sm mt-1">{p.designation}</p>
                  <p className="text-primary-foreground/60 text-sm">{p.department}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {p.email && (
                      <a href={`mailto:${p.email}`} className="flex items-center gap-1.5 text-xs text-primary-foreground/80 hover:text-accent transition-colors">
                        <Mail className="w-3.5 h-3.5" /> {p.email}
                      </a>
                    )}
                    {p.phone && (
                      <span className="flex items-center gap-1.5 text-xs text-primary-foreground/80">
                        <Phone className="w-3.5 h-3.5" /> {p.phone}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Research Profile Links */}
              {p.researchProfileLinks && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.researchProfileLinks.scopus && (
                    <a href={p.researchProfileLinks.scopus} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 text-primary-foreground text-xs px-3 py-1.5 rounded-full transition-colors">
                      <ExternalLink className="w-3 h-3" /> Scopus
                    </a>
                  )}
                  {p.researchProfileLinks.vidwan && (
                    <a href={p.researchProfileLinks.vidwan} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 text-primary-foreground text-xs px-3 py-1.5 rounded-full transition-colors">
                      <ExternalLink className="w-3 h-3" /> Vidwan
                    </a>
                  )}
                  {p.researchProfileLinks.googleScholar && (
                    <a href={p.researchProfileLinks.googleScholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 text-primary-foreground text-xs px-3 py-1.5 rounded-full transition-colors">
                      <ExternalLink className="w-3 h-3" /> Google Scholar
                    </a>
                  )}
                  {p.researchProfileLinks.orcid && (
                    <a href={p.researchProfileLinks.orcid} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 text-primary-foreground text-xs px-3 py-1.5 rounded-full transition-colors">
                      <ExternalLink className="w-3 h-3" /> ORCID
                    </a>
                  )}
                  {p.researchProfileLinks.hIndex && (
                    <span className="inline-flex items-center gap-1 bg-accent/80 text-accent-foreground text-xs px-3 py-1.5 rounded-full font-semibold">
                      h-index: {p.researchProfileLinks.hIndex}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Content sections */}
            <div className="px-6 py-6 space-y-8">

              {/* Education */}
              {p.education && p.education.length > 0 && (
                <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <SectionHeading icon={GraduationCap} title="Education" />
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead>Degree</TableHead>
                          <TableHead>Specialization</TableHead>
                          <TableHead>Institution</TableHead>
                          <TableHead>Year</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {p.education.map((e, i) => (
                          <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                            <TableCell className="font-medium text-secondary">{e.degree}</TableCell>
                            <TableCell>{e.specialization}{e.branch ? ` (${e.branch})` : ""}</TableCell>
                            <TableCell>{e.institution}</TableCell>
                            <TableCell>{e.year}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </motion.section>
              )}

              {/* Post Doctoral */}
              {p.postDoctoral && p.postDoctoral.length > 0 && (
                <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                  <SectionHeading icon={BookOpen} title="Post Doctoral Experience" />
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead>Institution</TableHead>
                          <TableHead>Research Area</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {p.postDoctoral.map((e, i) => (
                          <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                            <TableCell className="font-medium text-secondary">{e.institution}</TableCell>
                            <TableCell>{e.researchArea}</TableCell>
                            <TableCell>{e.duration}</TableCell>
                            <TableCell>{e.description || "—"}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </motion.section>
              )}

              {/* Research */}
              {(p.researchInterests?.length || p.researchSummary) && (
                <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <SectionHeading icon={FlaskConical} title="Research" />
                  {p.researchInterests && p.researchInterests.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Research Interests</p>
                      <div className="flex flex-wrap gap-2">
                        {p.researchInterests.map((r, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{r}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {p.researchSummary && (
                    <div className="bg-muted/30 rounded-lg p-4 border border-border">
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.researchSummary}</p>
                    </div>
                  )}
                </motion.section>
              )}

              {/* Projects */}
              {(p.fundedProjects?.length || p.consultancyProjects?.length) && (
                <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                  <SectionHeading icon={Briefcase} title="Projects" />
                  {p.fundedProjects && p.fundedProjects.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-primary mb-3">Funded Projects</p>
                      <div className="overflow-x-auto rounded-lg border border-border">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead>Title</TableHead>
                              <TableHead>Funding Agency</TableHead>
                              <TableHead>Amount</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>Role</TableHead>
                              <TableHead>Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {p.fundedProjects.map((pr, i) => (
                              <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                                <TableCell className="font-medium text-secondary min-w-[200px]">{pr.title}</TableCell>
                                <TableCell>{pr.fundingAgency}</TableCell>
                                <TableCell className="text-primary font-semibold">{pr.amount}</TableCell>
                                <TableCell>{pr.duration}</TableCell>
                                <TableCell>{pr.role || "—"}</TableCell>
                                <TableCell>
                                  {pr.status && (
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${pr.status === "Completed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                                      {pr.status}
                                    </span>
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  )}
                  {p.consultancyProjects && p.consultancyProjects.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-primary mb-3">Consultancy Projects</p>
                      <div className="overflow-x-auto rounded-lg border border-border">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead>Title</TableHead>
                              <TableHead>Client</TableHead>
                              <TableHead>Amount</TableHead>
                              <TableHead>Duration</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {p.consultancyProjects.map((pr, i) => (
                              <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                                <TableCell className="font-medium text-secondary">{pr.title}</TableCell>
                                <TableCell>{pr.fundingAgency}</TableCell>
                                <TableCell className="text-primary font-semibold">{pr.amount}</TableCell>
                                <TableCell>{pr.duration}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  )}
                </motion.section>
              )}

              {/* Intellectual Output */}
              {(p.patents?.length || p.booksChapters?.length || p.publications?.length) && (
                <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <SectionHeading icon={FileText} title="Intellectual Output" />
                  
                  {p.patents && p.patents.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-primary mb-3">Patents</p>
                      <div className="overflow-x-auto rounded-lg border border-border">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead>Title</TableHead>
                              <TableHead>Application No.</TableHead>
                              <TableHead>Year</TableHead>
                              <TableHead>Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {p.patents.map((pt, i) => (
                              <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                                <TableCell className="font-medium text-secondary">{pt.title}</TableCell>
                                <TableCell className="text-xs">{pt.applicationNumber || "—"}</TableCell>
                                <TableCell>{pt.year}</TableCell>
                                <TableCell>
                                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                    pt.status === "Granted" ? "bg-green-100 text-green-700" : 
                                    pt.status === "Published" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"
                                  }`}>{pt.status}</span>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  )}

                  {p.booksChapters && p.booksChapters.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-primary mb-3">Books & Chapters</p>
                      <div className="overflow-x-auto rounded-lg border border-border">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead>Title</TableHead>
                              <TableHead>Publisher</TableHead>
                              <TableHead>Year</TableHead>
                              <TableHead>Type</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {p.booksChapters.map((b, i) => (
                              <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                                <TableCell className="font-medium text-secondary">{b.title}</TableCell>
                                <TableCell>{b.publisher}</TableCell>
                                <TableCell>{b.year}</TableCell>
                                <TableCell><Badge variant="outline" className="text-xs capitalize">{b.type}</Badge></TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  )}

                  {p.publications && p.publications.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-primary mb-3">Publications</p>
                      <div className="overflow-x-auto rounded-lg border border-border">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead>Title</TableHead>
                              <TableHead>Venue</TableHead>
                              <TableHead>Year</TableHead>
                              <TableHead>Authors</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {p.publications.map((pub, i) => (
                              <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                                <TableCell className="font-medium text-secondary min-w-[200px]">{pub.title}</TableCell>
                                <TableCell className="text-xs">{pub.journal || pub.conference || "—"}</TableCell>
                                <TableCell>{pub.year}</TableCell>
                                <TableCell className="text-xs">{pub.authors}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  )}
                </motion.section>
              )}

              {/* Awards */}
              {p.awards && p.awards.length > 0 && (
                <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                  <SectionHeading icon={Award} title="Awards & Recognition" />
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead>Award</TableHead>
                          <TableHead>Organization</TableHead>
                          <TableHead>Year</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {p.awards.map((a, i) => (
                          <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                            <TableCell className="font-medium text-secondary">{a.awardName}</TableCell>
                            <TableCell>{a.organization}</TableCell>
                            <TableCell>{a.year}</TableCell>
                            <TableCell className="text-xs">{a.description || "—"}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </motion.section>
              )}

              {/* Industry Collaboration */}
              {p.industryCollaboration && p.industryCollaboration.length > 0 && (
                <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <SectionHeading icon={Building2} title="Industry Collaboration" />
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead>Organization</TableHead>
                          <TableHead>Area</TableHead>
                          <TableHead>Duration</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {p.industryCollaboration.map((c, i) => (
                          <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                            <TableCell className="font-medium text-secondary">{c.organization}</TableCell>
                            <TableCell>{c.area}</TableCell>
                            <TableCell>{c.duration || "—"}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </motion.section>
              )}

              {/* Events Organised & Attended */}
              {(p.eventsOrganised?.length || p.eventsAttended?.length) && (
                <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
                  <SectionHeading icon={Calendar} title="Events" />
                  {p.eventsOrganised && p.eventsOrganised.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-primary mb-3">Events Organised</p>
                      <div className="overflow-x-auto rounded-lg border border-border">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead>Title</TableHead>
                              <TableHead>Role</TableHead>
                              <TableHead>Venue</TableHead>
                              <TableHead>Date</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {p.eventsOrganised.map((e, i) => (
                              <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                                <TableCell className="font-medium text-secondary">{e.title}</TableCell>
                                <TableCell>{e.role}</TableCell>
                                <TableCell>{e.venue || "—"}</TableCell>
                                <TableCell>{e.date}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  )}
                  {p.eventsAttended && p.eventsAttended.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-primary mb-3">Events Attended</p>
                      <div className="overflow-x-auto rounded-lg border border-border">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead>Title</TableHead>
                              <TableHead>Role</TableHead>
                              <TableHead>Venue</TableHead>
                              <TableHead>Date</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {p.eventsAttended.map((e, i) => (
                              <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                                <TableCell className="font-medium text-secondary">{e.title}</TableCell>
                                <TableCell>{e.role}</TableCell>
                                <TableCell>{e.venue || "—"}</TableCell>
                                <TableCell>{e.date}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  )}
                </motion.section>
              )}

              {/* Professional Affiliations */}
              {p.professionalAffiliations && p.professionalAffiliations.length > 0 && (
                <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <SectionHeading icon={Users} title="Professional Memberships" />
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead>Organization</TableHead>
                          <TableHead>Membership ID</TableHead>
                          <TableHead>Since</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {p.professionalAffiliations.map((a, i) => (
                          <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                            <TableCell className="font-medium text-secondary">{a.organization}</TableCell>
                            <TableCell>{a.membershipId || "—"}</TableCell>
                            <TableCell>{a.since || "—"}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </motion.section>
              )}

              {/* Invitations */}
              {p.invitations && p.invitations.length > 0 && (
                <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
                  <SectionHeading icon={Globe} title="Invited Talks & Keynotes" />
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead>Title</TableHead>
                          <TableHead>Event</TableHead>
                          <TableHead>Venue</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {p.invitations.map((inv, i) => (
                          <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                            <TableCell className="font-medium text-secondary">{inv.title}</TableCell>
                            <TableCell>{inv.event}</TableCell>
                            <TableCell>{inv.venue || "—"}</TableCell>
                            <TableCell>{inv.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </motion.section>
              )}

              {/* Academic Visits */}
              {p.academicVisits && p.academicVisits.length > 0 && (
                <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                  <SectionHeading icon={Building2} title="Academic Visits" />
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead>Institution</TableHead>
                          <TableHead>Purpose</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {p.academicVisits.map((v, i) => (
                          <TableRow key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                            <TableCell className="font-medium text-secondary">{v.institution}</TableCell>
                            <TableCell>{v.purpose}</TableCell>
                            <TableCell>{v.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </motion.section>
              )}

              {/* Outreach Activities */}
              {p.outreachActivities && p.outreachActivities.length > 0 && (
                <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
                  <SectionHeading icon={Megaphone} title="Outreach Activities" />
                  <div className="space-y-3">
                    {p.outreachActivities.map((o, i) => (
                      <div key={i} className="bg-muted/30 rounded-lg p-4 border border-border">
                        <p className="font-semibold text-sm text-secondary">{o.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{o.description}</p>
                        {o.date && <p className="text-xs text-primary mt-1">{o.date}</p>}
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Other Information */}
              {p.otherInformation && (
                <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                  <SectionHeading icon={Info} title="Other Information" />
                  <div className="bg-muted/30 rounded-lg p-4 border border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.otherInformation}</p>
                  </div>
                </motion.section>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FacultyProfilePanel;
