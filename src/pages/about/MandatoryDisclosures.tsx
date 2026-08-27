import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, ExternalLink, Search, ShieldCheck } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { Input } from "@/components/ui/input";
import { mandatoryDisclosures } from "@/data/aboutData";

// Key mandatory disclosure documents matching reference table
const keyMandatoryDocs = [
  {
    sno: "9",
    name: "Minutes of Governing Council Meeting 2014-2026",
    url: "https://mits.ac.in/bog",
  },
  {
    sno: "10",
    name: "Minutes of Academic Council Meeting 2014-2026",
    url: "https://mits.ac.in/minutes-ac",
  },
  {
    sno: "54",
    name: "NABL Accredited Certificate for Labs",
    url: "https://mits.ac.in/assets/pdf/admin/Certificate%20TC-15590.pdf",
  },
  {
    sno: "52",
    name: "2f & 12B Certificates",
    url: "https://mits.ac.in/assets/pdf/admin/2f%20&%2012B.pdf",
  },
  {
    sno: "53",
    name: "ISO 21001:2018 Certificate",
    url: "https://mits.ac.in/assets/pdf/admin/Madanapalle%20Institute%20of%20Technology%20&%20Science-ISO.pdf",
  },
  {
    sno: "8",
    name: "Functioning is as per the professional code of prescribed / Suggested by statutory bodies / Regulatory authorities",
    url: "https://mits.ac.in/assets/pdf/admin/Professional%20Code%20of%20Conduct.pdf",
  },
];

const MandatoryDisclosures = () => {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(mandatoryDisclosures.map((c, i) => [c.category, i < 2]))
  );
  const [q, setQ] = useState("");

  const filtered = mandatoryDisclosures
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((it) =>
        it.label.toLowerCase().includes(q.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <PageShell
      eyebrow="Compliance"
      title="Mandatory Disclosures"
      intro="Statutory documents, audit reports, AICTE/NBA approvals, UGC certifications and annual reports of MITS Deemed to be University."
    >
      {/* KEY MANDATORY DISCLOSURES TABLE */}
      <div className="mb-10 bg-white border border-[#0f2a44]/15 rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#0f2a44]/10">
          <ShieldCheck className="w-5 h-5 text-[#8b0000]" />
          <h3 className="font-display font-bold text-lg text-[#0f2a44]">
            Statutory & Regulatory Mandatory Documents
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#8b0000] text-white">
                <th className="py-3 px-4 font-semibold w-16 text-center border border-white/20">S.No</th>
                <th className="py-3 px-4 font-semibold border border-white/20">Document Title</th>
                <th className="py-3 px-4 font-semibold w-24 text-center border border-white/20">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {keyMandatoryDocs.map((doc) => (
                <tr key={doc.sno} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-500 text-center border border-slate-200">
                    {doc.sno}
                  </td>
                  <td className="py-3 px-4 font-medium text-slate-800 border border-slate-200 leading-snug">
                    {doc.name}
                  </td>
                  <td className="py-3 px-4 text-center border border-slate-200">
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#8b0000] hover:text-[#6e0000] hover:underline"
                    >
                      <span>View</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SEARCH AND CATEGORIZED DISCLOSURES ACCORDION */}
      <div className="relative max-w-md mb-6">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-secondary/50" />
        <Input
          placeholder="Search all disclosures..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((cat) => {
          const isOpen = q ? true : !!open[cat.category];
          return (
            <div
              key={cat.category}
              className="bg-white border border-border rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() =>
                  setOpen((o) => ({ ...o, [cat.category]: !o[cat.category] }))
                }
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-primary/5 transition-colors"
              >
                <div>
                  <p className="text-base font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                    {cat.category}
                  </p>
                  <p className="text-sm text-secondary/60 mt-0.5">
                    {cat.items.length} document{cat.items.length === 1 ? "" : "s"}
                  </p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-secondary/60 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <ul className="divide-y divide-border border-t border-border">
                      {cat.items.map((it) => (
                        <li key={it.url}>
                          <a
                            href={it.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-3 px-5 py-3 text-sm hover:bg-secondary/5 transition-colors group"
                          >
                            <span className="flex items-center gap-3 min-w-0">
                              <FileText className="w-4 h-4 text-primary shrink-0" />
                              <span className="text-secondary group-hover:text-primary truncate">
                                {it.label}
                              </span>
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 text-secondary/50 group-hover:text-primary shrink-0" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="text-sm text-secondary/60 py-12 text-center">No disclosures match your search.</p>
        )}
      </div>
    </PageShell>
  );
};

export default MandatoryDisclosures;
