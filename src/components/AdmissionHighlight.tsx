import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileDown, ArrowRight, CalendarDays, GraduationCap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const AdmissionHighlight = () => {
  return (
    <section id="admissions" className="py-20 bg-navy-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto rounded-2xl border border-accent/30 bg-white/5 backdrop-blur-sm px-6 md:px-10 py-10 md:py-12">
            <div className="text-center">
              <div className="inline-block bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
                <span className="text-accent font-semibold text-sm tracking-wide">Admissions 2026</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
                Admissions Open <span className="text-gradient-gold">2026</span>
              </h2>
              <p className="text-white/80 text-lg mb-4 max-w-xl mx-auto">
                Begin your journey towards academic excellence. Apply for B.Tech, M.Tech, MBA, and Ph.D. programs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-8">
              <div className="rounded-xl border border-accent/25 bg-white/5 px-4 py-4">
                <p className="text-accent font-semibold text-sm mb-1 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" /> Important Dates
                </p>
                <p className="text-white/85 text-sm">Applications close: 30 June 2026</p>
              </div>
              <div className="rounded-xl border border-accent/25 bg-white/5 px-4 py-4">
                <p className="text-accent font-semibold text-sm mb-1 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> Scholarship Info
                </p>
                <p className="text-white/85 text-sm">Merit and need-based scholarships available</p>
              </div>
              <div className="rounded-xl border border-accent/25 bg-white/5 px-4 py-4">
                <p className="text-accent font-semibold text-sm mb-1">Eligibility</p>
                <p className="text-white/85 text-sm">10+2 with qualifying entrance exam score</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button className="bg-accent text-accent-foreground hover:bg-gold-light font-bold px-7 text-sm rounded-full transition-all duration-200 shadow-lg">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button className="bg-white/15 text-white border-2 border-white/40 hover:bg-white hover:text-secondary font-semibold px-7 text-sm rounded-full backdrop-blur-sm transition-all duration-200">
                <FileDown className="mr-2 w-4 h-4" /> Download Prospectus
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AdmissionHighlight;
