import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { deansList, departmentHeads } from "@/data/aboutData";

const AcademicLeadership = () => {
  return (
    <PageShell
      eyebrow="About"
      title="Academic Leadership"
      intro="Deans of schools and heads of departments who together shape the academic vision of MITS."
    >
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Link
          to="/about/deans"
          className="group bg-white border border-border rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all"
        >
          <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-secondary group-hover:text-primary" style={{ fontFamily: "var(--font-display)" }}>
            Deans of Schools
          </h3>
          <p className="text-sm text-secondary/70 mt-2 leading-relaxed">
            {deansList.length} deans steering Academics, Engineering, Computing and Management.
          </p>
          <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-primary">
            View Deans <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
        <Link
          to="/about/department-heads"
          className="group bg-white border border-border rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all"
        >
          <div className="w-12 h-12 rounded-md bg-accent/15 text-accent-foreground flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-secondary group-hover:text-primary" style={{ fontFamily: "var(--font-display)" }}>
            Department Heads
          </h3>
          <p className="text-sm text-secondary/70 mt-2 leading-relaxed">
            {departmentHeads.length} heads of departments across all schools.
          </p>
          <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-primary">
            View Heads <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </PageShell>
  );
};

export default AcademicLeadership;
