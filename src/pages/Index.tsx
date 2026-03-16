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
    <div className="bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <AdmissionHighlight />
        <InstitutionsSection />
        <PlacementsSection />
        <RankingsSection />
        <ResearchInnovationSection />
        <CampusGallery />
        <NewsEventsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
