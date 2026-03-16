import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Router = HashRouter;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/news-events/:slug" element={<NewsEventDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
