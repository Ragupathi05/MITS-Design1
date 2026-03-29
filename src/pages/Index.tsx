import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AcademicsSection from "@/components/AcademicsSection";
import AdmissionHighlight from "@/components/AdmissionHighlight";
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
      {/* Spacer: mobile = h-16 (64px nav only), md = h-16+h-9 (100px), lg = h-20+h-9 (116px) */}
      <div className="h-16 md:h-[100px] lg:h-[116px] shrink-0" />
      <main>
        <HeroSection />
        {/* Accent ticker bar */}
        <div className="relative z-10 bg-primary">
          <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-6 flex-wrap">
            {["NAAC A+ Accredited", "UGC Recognized", "AICTE Approved", "NBA Accredited", "NIRF Ranked"].map((label, i) => (
              <span key={label} className="flex items-center gap-2 text-xs font-semibold text-primary-foreground uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                {label}
                {i < 4 && <span className="w-px h-4 bg-primary-foreground/25 ml-4 hidden sm:block" />}
              </span>
            ))}
          </div>
          <div className="h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
        <RankingsSection />
        <AboutSection />
        <AcademicsSection />
        <AdmissionHighlight />
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
