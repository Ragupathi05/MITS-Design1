import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { departmentHeads } from "@/data/aboutData";

const DepartmentHeads = () => {
  return (
    <PageShell
      eyebrow="About"
      title="Department Heads"
      intro="Heads of academic departments across Engineering, Computing, Sciences, Humanities and Management at MITS Deemed to be University."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {departmentHeads.map((h, i) => (
          <motion.div
            key={`${h.name}-${h.department}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <Link
              to={`/department/${h.deptKey}/faculty?faculty=${encodeURIComponent(h.name)}`}
              className="group flex gap-4 bg-white border border-border rounded-xl p-4 hover:-translate-y-0.5 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="w-20 h-24 shrink-0 rounded-lg overflow-hidden bg-secondary/5">
                <img
                  src={h.image}
                  alt={h.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://mits.ac.in/images/inner-banner.jpg";
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.16em] text-accent font-bold mb-1 truncate">
                  Head — {h.department}
                </p>
                <h3
                  className="text-sm font-bold text-secondary leading-tight group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {h.name}
                </h3>
                <span className="inline-flex items-center gap-1 mt-3 text-[11px] font-semibold text-primary">
                  View profile <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
};

export default DepartmentHeads;
