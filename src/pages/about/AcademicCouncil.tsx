import { FileText, ExternalLink, BookOpen, Calendar } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { Button } from "@/components/ui/button";
import { academicCouncil } from "@/data/aboutData";

const AcademicCouncil = () => {
  return (
    <PageShell eyebrow="Governance" title={academicCouncil.title} intro={academicCouncil.description}>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-border rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                  Constitution of the Academic Council
                </h3>
                <p className="text-sm text-secondary/70 mt-1 leading-relaxed">
                  Composition and academic responsibilities of the Council under the
                  MITS Deemed to be University statutes.
                </p>
                <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                  <a href={academicCouncil.constitutionUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    View Constitution
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold text-secondary mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Minutes of Academic Council Meetings
            </h3>
            <div className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-secondary/70 bg-secondary/5">
              <Calendar className="w-6 h-6 mx-auto text-primary/60 mb-2" />
              Approved minutes of Academic Council meetings are published on the official MITS portal.
              <div className="mt-4">
                <Button asChild variant="outline" className="border-primary text-primary">
                  <a href={academicCouncil.sourceUrl} target="_blank" rel="noopener noreferrer">
                    Open on MITS portal <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <aside>
          <div className="bg-gradient-to-br from-primary to-[#7a0a0d] text-primary-foreground rounded-2xl p-6">
            <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-2">Governance</p>
            <h4 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>Apex Academic Authority</h4>
            <p className="text-sm text-primary-foreground/85 leading-relaxed">
              The Academic Council is responsible for the regulation of academic standards,
              evaluation policy, curriculum reforms and research programmes across the University.
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default AcademicCouncil;
