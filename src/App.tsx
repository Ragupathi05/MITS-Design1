import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Research from "./pages/Research";
import Placements from "./pages/Placements";
import CampusLife from "./pages/CampusLife";
import Contact from "./pages/Contact";
import Departments from "./pages/Departments";
import Library from "./pages/Library";
import Examinations from "./pages/Examinations";
import NewsEvents from "./pages/NewsEvents";
import NewsEventDetail from "./pages/NewsEventDetail";
import EligibilityAndFees from "./pages/EligibilityAndFees";
import AcademicCalendar from "./pages/AcademicCalendar";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import DepartmentPage from "./pages/DepartmentPage";
// Department pages
import ECEPage from "./pages/ECEPage";
import CSEAIMLPage from "./pages/CSEAIMLPage";
import MechanicalPage from "./pages/MechanicalPage";
import CivilPage from "./pages/CivilPage";
import EEEPage from "./pages/EEEPage";
import CSEPage from "./pages/CSEPage";
import MBAPage from "./pages/MBAPage";
import CSEDataSciencePage from "./pages/CSEDataSciencePage";
import CSECyberSecPage from "./pages/CSECyberSecPage";
import CSEAIPage from "./pages/CSEAIPage";
import MCAPage from "./pages/MCAPage";
import MTechPage from "./pages/MTechPage";

const queryClient = new QueryClient();
const Router = HashRouter;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/research" element={<Research />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/library" element={<Library />} />
          <Route path="/examinations" element={<Examinations />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/news-events/:slug" element={<NewsEventDetail />} />
          <Route path="/eligibility-and-fees" element={<EligibilityAndFees />} />
          {/* Department static routes */}
          <Route path="/department/9/ece" element={<ECEPage />} />
          <Route path="/department/28/cse-ai-ml" element={<CSEAIMLPage />} />
          <Route path="/department/8/mechanical" element={<MechanicalPage />} />
          <Route path="/department/11/civil" element={<CivilPage />} />
          <Route path="/department/5/eee" element={<EEEPage />} />
          <Route path="/department/4/cse" element={<CSEPage />} />
          <Route path="/department/6/mba" element={<MBAPage />} />
          <Route path="/department/26/cse-data-science" element={<CSEDataSciencePage />} />
          <Route path="/department/27/cse-cyber-security" element={<CSECyberSecPage />} />
          <Route path="/department/18/cse-ai" element={<CSEAIPage />} />
          <Route path="/department/29/mca" element={<MCAPage />} />
          <Route path="/department/30/mtech" element={<MTechPage />} />
          {/* Department dynamic route (fallback) */}
          <Route path="/department/:id/:slug" element={<DepartmentPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
