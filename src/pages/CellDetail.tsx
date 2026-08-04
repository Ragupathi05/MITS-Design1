import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft, FileText, Download, Phone, Mail, MapPin,
  Users, BookOpen, ChevronRight, ExternalLink,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { cellsDetailData } from "@/data/cellsDetailData";
import { cellCategories } from "@/data/cellsData";

const BASE = import.meta.env.BASE_URL;

export default function CellDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const cell = id ? cellsDetailData[id] : null;

  if (!cell) {
    return (
      <div className="min-h-screen bg-[#fafaf7]">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <h2 className="text-2xl font-bold text-[#0f2a44]">Cell not found</h2>
          <Link to="/cells" className="text-[#b31317] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to Cells
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const categoryTitle =
    cellCategories.find((cat) => cat.cells.some((c) => c.detailId === id))?.title ??
    "Cells & Committees";

  const brochureDoc = cell.documents.find((d) => d.title === "Download Brochure");
  const otherDocs   = cell.documents.filter((d) => d.title !== "Download Brochure");
  const isStatsTable = cell.id === "swc" && cell.members.length > 0 && cell.members[0].sno === "Year";

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Header />

      <section
        className="relative pt-32 md:pt-44 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url(${BASE}Hero-Section/image%205.JPG)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.2)_70%,rgba(0,0,0,0.4)_100%)]" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#ffb300] font-bold tracking-[0.25em] uppercase text-sm sm:text-sm mb-4">
            {categoryTitle}
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight max-w-4xl mx-auto">
            {cell.name}
          </h1>
        </div>
        <nav className="absolute bottom-4 left-6 z-10">
          <ol className="flex items-center gap-1.5 text-sm text-white/80">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">›</li>
            <li><Link to="/cells" className="text-white/70 hover:text-white transition-colors">Cells & Committees</Link></li>
            <li className="text-white/50">›</li>
            <li className="text-[#ffd15c] font-semibold truncate max-w-[200px]">{cell.name}</li>
          </ol>
        </nav>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
        <button
          onClick={() => navigate("/cells")}
          className="mb-8 flex items-center gap-2 text-sm font-semibold text-[#0f2a44] hover:text-[#b31317] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cells & Committees
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {cell.aboutText.length > 0 && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-5 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#b31317]" />
                    About {cell.name}
                  </h2>
                  <div className="space-y-3">
                    {cell.aboutText.map((para, i) => (
                      <p key={i} className="text-[#0f2a44]/80 text-sm md:text-base leading-relaxed">{para}</p>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            )}

            {cell.members.length > 0 && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm overflow-hidden">
                  <div className="px-6 md:px-8 py-5 border-b border-[#0f2a44]/5 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#b31317]" />
                    <h2 className="font-display text-xl font-bold text-[#0f2a44]">
                      {isStatsTable ? "Scholarship Statistics" : "Committee Members"}
                    </h2>
                  </div>
                  <div className="overflow-x-auto">
                    {isStatsTable ? (
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-[#0f2a44] text-white text-sm uppercase tracking-wider">
                            <th className="py-3 px-5 text-left">Year</th>
                            <th className="py-3 px-5 text-left">No. of Scholarships</th>
                            <th className="py-3 px-5 text-left">No. of Student Beneficiaries</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {cell.members.slice(1).map((row, i) => (
                            <tr key={i} className="hover:bg-[#fff8e6]/30 transition-colors">
                              <td className="py-3 px-5 font-semibold text-[#0f2a44]">{row.sno}</td>
                              <td className="py-3 px-5 text-[#0f2a44]/80">{row.name}</td>
                              <td className="py-3 px-5 text-[#0f2a44]/80">{row.designation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-[#0f2a44] text-white text-sm uppercase tracking-wider">
                            <th className="py-3 px-4 text-center w-12">S.No</th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left hidden sm:table-cell">Designation</th>
                            <th className="py-3 px-4 text-left hidden md:table-cell">Position</th>
                            <th className="py-3 px-4 text-left hidden lg:table-cell">Email</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {cell.members.map((m, i) => (
                            <tr key={i} className="hover:bg-[#fff8e6]/30 transition-colors">
                              <td className="py-3 px-4 text-center text-[#0f2a44]/50 font-medium">{m.sno ?? i + 1}</td>
                              <td className="py-3 px-4 font-semibold text-[#0f2a44]">{m.name}</td>
                              <td className="py-3 px-4 text-[#0f2a44]/70 hidden sm:table-cell">{m.designation}</td>
                              <td className="py-3 px-4 hidden md:table-cell">
                                <span className="text-sm bg-[#fff8e6] border border-[#ffd15c]/30 text-[#b31317] px-2 py-0.5 rounded font-semibold">
                                  {m.position}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-[#0f2a44]/60 text-sm hidden lg:table-cell">{m.email}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </section>
              </ScrollReveal>
            )}

            {otherDocs.length > 0 && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold text-[#0f2a44] mb-5 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#b31317]" />
                    Documents & Downloads
                  </h2>
                  <ul className="divide-y divide-gray-100">
                    {otherDocs.map((doc, i) => {
                      const genericTitles = ["document link", "view document", "for report on event click here", "click here for event details", "for report on event click here", "click here for report on event", "report on event click here", "click here for details on event", "click here for details", "click here report on event", "click here for report", "for event winners click here", "event winners click here", "click here for event details"];
                      const isGeneric = genericTitles.includes(doc.title.toLowerCase().trim());
                      const displayTitle = isGeneric
                        ? decodeURIComponent(doc.href.split("/").pop() ?? doc.title).replace(/\.pdf$/i, "").replace(/[-_]/g, " ").replace(/\s+/g, " ").trim()
                        : doc.title;
                      return (
                        <li key={i}>
                          <a
                            href={doc.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-3 py-3 group hover:bg-[#fff8e6]/40 -mx-2 px-2 rounded-lg transition-colors"
                          >
                            <span className="flex items-center gap-2.5 text-sm text-[#0f2a44] group-hover:text-[#b31317] transition-colors font-medium leading-snug">
                              <FileText className="w-4 h-4 shrink-0 text-[#caa74d]" />
                              {displayTitle}
                            </span>
                            {(() => {
                              const isPdf = doc.href.includes(".pdf") || doc.href.includes(".doc") || doc.href.includes(".xlsx");
                              const ActionIcon = isPdf ? Download : ExternalLink;
                              return <ActionIcon className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-[#b31317] transition-colors" />;
                            })()}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              </ScrollReveal>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {cell.contacts.length > 0 && (
              <ScrollReveal>
                <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-6">
                  <h2 className="font-display text-lg font-bold text-[#0f2a44] mb-4 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#b31317]" />
                    Contact
                  </h2>
                  <div className="space-y-5">
                    {cell.contacts.map((c, i) => (
                      <div key={i} className="space-y-1.5">
                        {c.name && <p className="font-semibold text-[#0f2a44] text-sm">{c.name}</p>}
                        {c.designation && <p className="text-sm text-[#b31317] font-medium">{c.designation}</p>}
                        {c.address && (
                          <p className="text-sm text-[#0f2a44]/60 flex items-start gap-1.5">
                            <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />{c.address}
                          </p>
                        )}
                        {c.phone && c.phone.trim() && (
                          <p className="text-sm text-[#0f2a44]/70 flex items-start gap-1.5 whitespace-pre-line">
                            <Phone className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                            {c.phone.replace("Phone :", "").trim()}
                          </p>
                        )}
                        {c.email && c.email.trim() && (
                          <p className="text-sm text-[#0f2a44]/70 flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 shrink-0" />{c.email}
                          </p>
                        )}
                        {i < cell.contacts.length - 1 && <hr className="border-gray-100 mt-3" />}
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            )}

            {brochureDoc && (
              <ScrollReveal>
                <a
                  href={brochureDoc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 bg-gradient-to-br from-[#0f2a44] to-[#11355a] text-white rounded-2xl p-5 hover:shadow-lg transition-all group"
                >
                  <div>
                    <p className="text-sm text-[#caa74d] font-semibold uppercase tracking-wider mb-1">Official</p>
                    <p className="font-display font-bold text-base">Download Brochure</p>
                    <p className="text-white/60 text-sm mt-0.5">MITS Deemed to be University 2026</p>
                  </div>
                  <Download className="w-6 h-6 text-[#caa74d] group-hover:scale-110 transition-transform shrink-0" />
                </a>
              </ScrollReveal>
            )}

            <ScrollReveal>
              <section className="bg-white rounded-2xl border border-[#0f2a44]/10 shadow-sm p-5">
                <h3 className="font-display text-sm font-bold text-[#0f2a44] uppercase tracking-wider mb-3">
                  Compliance Portals
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "IQAC", to: "/iqac" },
                    { label: "NAAC", to: "/naac" },
                    { label: "NIRF Rankings", to: "/nirf" },
                    { label: "Public Disclosures", to: "/psd" },
                  ].map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center justify-between text-sm text-[#0f2a44] hover:text-[#b31317] transition-colors py-1.5 border-b border-gray-50 last:border-0 group"
                    >
                      {p.label}
                      <ChevronRight className="w-3.5 h-3.5 text-[#caa74d] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <a
                href={cell.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 text-sm text-[#0f2a44]/50 hover:text-[#b31317] transition-colors px-1"
              >
                <span>View original source page</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
