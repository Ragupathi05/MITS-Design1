import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { aboutSections, leadershipProfiles, leadershipOrder } from "@/data/aboutData";

const BASE = import.meta.env.BASE_URL;

interface Props {
  open: boolean;
  onClose: () => void;
}

const previewMap: Record<string, { title: string; body: string; image: string }> = {
  leadership: {
    title: "Institutional Leadership",
    body: "Chancellor, Pro-Chancellor, Vice-Chancellor, Registrar, Controller of Examinations and Ombudsperson guiding MITS Deemed to be University.",
    image: leadershipProfiles.chancellor.image,
  },
  "academic-leadership": {
    title: "Academic Leadership",
    body: "Deans of Academics, Engineering, Computing and Management driving curricular excellence.",
    image: `${BASE}Hero-Section/image%202.JPG`,
  },
  deans: {
    title: "Deans of Schools",
    body: "School Deans steering each academic vertical with global academic credentials.",
    image: `${BASE}Hero-Section/image%203.JPG`,
  },
  "department-heads": {
    title: "Department Heads",
    body: "Heads of departments across Engineering, Computing, Sciences, Humanities and Management.",
    image: `${BASE}Hero-Section/image%204.JPG`,
  },
  "executive-council": {
    title: "Executive Council",
    body: "Apex governance body — administration, financial governance and strategic direction.",
    image: `${BASE}Hero-Section/image%205.JPG`,
  },
  "academic-council": {
    title: "Academic Council",
    body: "Highest academic authority — curriculum, evaluation and academic policy.",
    image: `${BASE}Hero-Section/image%201.JPG`,
  },
  bos: {
    title: "Board of Studies",
    body: "Departmental academic boards for curriculum design across all schools.",
    image: `${BASE}Hero-Section/image%202.JPG`,
  },
  organogram: {
    title: "University Organogram",
    body: "Complete organisational hierarchy of MITS Deemed to be University.",
    image: `${BASE}Hero-Section/image%203.JPG`,
  },
  "mandatory-disclosures": {
    title: "Mandatory Disclosures",
    body: "Statutory disclosures, audit reports, AICTE/NBA approvals and accreditations.",
    image: `${BASE}Hero-Section/image%204.JPG`,
  },
};

const AboutMegaMenu = ({ open, onClose }: Props) => {
  const [hovered, setHovered] = useState<string>("leadership");
  const preview = previewMap[hovered] ?? previewMap.leadership;
  const leaders = leadershipOrder.slice(0, 6).map((s) => leadershipProfiles[s]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 right-0 z-50 mt-0 pt-1"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="bg-white rounded-b-2xl border border-border shadow-2xl overflow-hidden">
              <div className="grid grid-cols-12">
                {/* LEFT: section nav */}
                <div className="col-span-4 bg-gradient-to-b from-primary/[0.04] to-transparent border-r border-border p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary mb-4">
                    About MITS
                  </p>
                  <ul className="space-y-0.5">
                    {aboutSections.map((s) => (
                      <li key={s.key}>
                        <Link
                          to={s.href}
                          onMouseEnter={() => setHovered(s.key)}
                          onClick={onClose}
                          className={`group flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold transition-colors duration-150 ${
                            hovered === s.key
                              ? "bg-primary/10 text-primary"
                              : "text-secondary hover:bg-primary/5 hover:text-primary"
                          }`}
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          <span>{s.label}</span>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              hovered === s.key ? "translate-x-0.5 text-primary" : "text-secondary/40"
                            }`}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT: dynamic preview */}
                <div className="col-span-8 p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={hovered}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-5 gap-6 items-start"
                    >
                      <div className="col-span-2 relative h-44 rounded-lg overflow-hidden bg-secondary/5">
                        <img
                          src={preview.image}
                          alt={preview.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = `${BASE}Hero-Section/image%201.JPG`;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                      <div className="col-span-3">
                        <h3
                          className="text-2xl font-bold text-secondary mb-2"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {preview.title}
                        </h3>
                        <p className="text-sm text-secondary/70 leading-relaxed mb-4">
                          {preview.body}
                        </p>
                        {hovered === "leadership" && (
                          <div className="grid grid-cols-3 gap-2">
                            {leaders.map((l) => (
                              <Link
                                key={l.slug}
                                to={`/about/leadership/${l.slug}`}
                                onClick={onClose}
                                className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/5 transition-colors group"
                              >
                                <img
                                  src={l.image}
                                  alt={l.name}
                                  className="w-9 h-9 rounded-full object-cover border border-border"
                                />
                                <div className="min-w-0">
                                  <p className="text-[11px] font-semibold text-secondary leading-tight truncate group-hover:text-primary">
                                    {l.name.replace(/^Dr\. |Sri\. |Prof\. /, "")}
                                  </p>
                                  <p className="text-[9px] text-secondary/60 uppercase tracking-wider truncate">
                                    {l.designation}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutMegaMenu;
