import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { deansList } from "@/data/aboutData";

const Deans = () => {
  return (
    <PageShell
      eyebrow="About"
      title="Deans of MITS"
      intro="Deans of Academics, Engineering, Computing and Management who lead each school of the University."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {deansList.map((d, i) => (
          <motion.article
            key={d.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="flex gap-5 bg-white border border-border rounded-2xl p-5 hover:shadow-lg hover:border-primary/30 transition-all"
          >
            <div className="w-28 h-32 sm:w-32 sm:h-40 shrink-0 rounded-xl overflow-hidden bg-secondary/5">
              <img
                src={d.image}
                alt={d.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://mits.ac.in/images/inner-banner.jpg";
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-1">
                {d.school}
              </p>
              <h3
                className="text-lg font-bold text-secondary leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {d.name}
              </h3>
              <p className="text-xs text-primary font-semibold mt-1">{d.designation}</p>
              <p className="text-xs text-secondary/60 mt-1">{d.qualification}</p>

              <div className="mt-4 flex flex-wrap gap-3 items-center">
                {d.deptKey && d.facultyName ? (
                  <Link
                    to={`/department/${d.deptKey}/faculty?faculty=${encodeURIComponent(d.facultyName)}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    View profile <ArrowRight className="w-3 h-3" />
                  </Link>
                ) : d.externalProfile ? (
                  <a
                    href={d.externalProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    Official profile <ExternalLink className="w-3 h-3" />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
};

export default Deans;
