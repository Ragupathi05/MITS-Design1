import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";

// Lazy load components for code splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Academics = lazy(() => import("./pages/Academics"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Research = lazy(() => import("./pages/Research"));
const Placements = lazy(() => import("./pages/Placements"));
const CampusLife = lazy(() => import("./pages/CampusLife"));
const Contact = lazy(() => import("./pages/Contact"));
const Departments = lazy(() => import("./pages/Departments"));
const Library = lazy(() => import("./pages/Library"));
const Examinations = lazy(() => import("./pages/Examinations"));
const NewsEvents = lazy(() => import("./pages/NewsEvents"));
const NewsEventDetail = lazy(() => import("./pages/NewsEventDetail"));
const EligibilityAndFees = lazy(() => import("./pages/EligibilityAndFees"));
const AcademicCalendar = lazy(() => import("./pages/AcademicCalendar"));
const Gallery = lazy(() => import("./pages/Gallery"));
const DepartmentPage = lazy(() => import("./pages/DepartmentPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();
const Router = HashRouter;

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
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
            <Route path="/department/:deptKey" element={<DepartmentPage />} />
            <Route path="/department/:deptKey/:section" element={<DepartmentPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
