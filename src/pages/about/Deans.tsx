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
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {deansList.map((d, i) => (
          <motion.article
            key={d.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="flex gap-5 bg-card border border-border rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <div className="w-32 h-40 sm:w-36 sm:h-48 shrink-0 rounded-xl overflow-hidden bg-secondary/5">
              <img
                src={d.image}
                alt={d.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://mits.ac.in/images/inner-banner.jpg";
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] uppercase tracking-[0.18em] text-primary font-semibold mb-1">
                {d.school}
              </p>
              <h3
                className="text-xl font-bold text-primary leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {d.name}
              </h3>
              <p className="text-sm text-muted-foreground font-semibold mt-1">{d.designation}</p>
              <p className="text-sm text-secondary/70 mt-1">{d.qualification}</p>

              <div className="mt-4 flex flex-wrap gap-3 items-center">
                {d.deptKey && d.facultyName ? (
                  <Link
                    to={`/department/${d.deptKey}/faculty?faculty=${encodeURIComponent(d.facultyName)}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    View profile <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : d.externalProfile ? (
                  <a
                    href={d.externalProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    Official profile <ExternalLink className="w-4 h-4" />
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
