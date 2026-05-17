import { FileText, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { Button } from "@/components/ui/button";
import { executiveCouncil } from "@/data/aboutData";

const ExecutiveCouncil = () => {
  return (
    <PageShell eyebrow="Governance" title={executiveCouncil.title} intro={executiveCouncil.description}>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-border rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                  Constitution of the Executive Council
                </h3>
                <p className="text-sm text-secondary/70 mt-1 leading-relaxed">
                  The composition, powers and responsibilities of the Executive Council as approved for MITS Deemed to be University.
                </p>
                <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                  <a href={executiveCouncil.constitutionUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    View Constitution
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold text-secondary mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Minutes of Executive Council Meetings
            </h3>
            <div className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-secondary/70 bg-secondary/5">
              <Calendar className="w-6 h-6 mx-auto text-primary/60 mb-2" />
              Minutes of recent EC meetings are maintained on the official MITS portal.
              <div className="mt-4">
                <Button asChild variant="outline" className="border-primary text-primary">
                  <a href={executiveCouncil.sourceUrl} target="_blank" rel="noopener noreferrer">
                    Open on MITS portal <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-gradient-to-br from-primary to-[#7a0a0d] text-primary-foreground rounded-2xl p-6">
            <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-2">Governance</p>
            <h4 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>Apex Administrative Body</h4>
            <p className="text-sm text-primary-foreground/85 leading-relaxed">
              The Executive Council exercises supervisory powers over the University and ensures
              compliance with the UGC Regulations for Deemed to be Universities.
            </p>
          </div>
          <div className="bg-white border border-border rounded-2xl p-5 text-sm text-secondary/70">
            <p className="font-semibold text-secondary mb-1">Source</p>
            <a
              href={executiveCouncil.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1 text-xs"
            >
              mits.ac.in/mits-minutes-ec <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default ExecutiveCouncil;
