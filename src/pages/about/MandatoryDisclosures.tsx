import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, ExternalLink, Search } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { Input } from "@/components/ui/input";
import { mandatoryDisclosures } from "@/data/aboutData";

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
      <div className="relative max-w-md mb-6">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-secondary/50" />
        <Input
          placeholder="Search disclosures…"
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
