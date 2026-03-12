import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AcademicsSection from "@/components/AcademicsSection";
import ResearchInnovationSection from "@/components/ResearchInnovationSection";
import AdmissionHighlight from "@/components/AdmissionHighlight";
import InstitutionsSection from "@/components/InstitutionsSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import PlacementsSection from "@/components/PlacementsSection";
import RankingsSection from "@/components/RankingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CampusGallery from "@/components/CampusGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        {/* Accent separator between hero and rankings */}
        <div className="relative z-10 bg-white">
          <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-6 flex-wrap">
            <span className="flex items-center gap-2 text-xs font-semibold text-primary/80 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
              NAAC A+ Accredited
            </span>
            <span className="w-px h-4 bg-border hidden sm:block" />
            <span className="flex items-center gap-2 text-xs font-semibold text-primary/80 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
              UGC Recognized
            </span>
            <span className="w-px h-4 bg-border hidden sm:block" />
            <span className="flex items-center gap-2 text-xs font-semibold text-primary/80 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
              AICTE Approved
            </span>
            <span className="w-px h-4 bg-border hidden sm:block" />
            <span className="flex items-center gap-2 text-xs font-semibold text-primary/80 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
              NBA Accredited
            </span>
            <span className="w-px h-4 bg-border hidden sm:block" />
            <span className="flex items-center gap-2 text-xs font-semibold text-primary/80 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
              NIRF Ranked
            </span>
          </div>
          <div className="h-[3px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
        </div>
        <RankingsSection />
        <AboutSection />
        <AcademicsSection />
        <ResearchInnovationSection />
        <AdmissionHighlight />
        <InstitutionsSection />
        <PlacementsSection />
        <NewsEventsSection />
        <TestimonialsSection />
        <CampusGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
