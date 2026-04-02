// src/pages/DepartmentPage.tsx
import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDepartmentById, DepartmentData } from "../data/departmentData";
import DeptHero from "../components/department/DeptHero";
import DeptSlider from "../components/department/DeptSlider";
import DeptStats from "../components/department/DeptStats";
import DeptNews from "../components/department/DeptNews";
import DeptAbout from "../components/department/DeptAbout";
import DeptVisionMission from "../components/department/DeptVisionMission";
import DeptPrograms from "../components/department/DeptPrograms";
import DeptFaculty from "../components/department/DeptFaculty";
import DeptLabs from "../components/department/DeptLabs";
import DeptResearch from "../components/department/DeptResearch";
import DeptEvents from "../components/department/DeptEvents";
import DeptPlacements from "../components/department/DeptPlacements";
import DeptContact from "../components/department/DeptContact";
import DeptSidebar from "../components/department/DeptSidebar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Section anchors for sidebar navigation
const SECTION_IDS = [
  "hero",
  "slider",
  "stats",
  "news",
  "about",
  "vision-mission",
  "programs",
  "faculty",
  "labs",
  "research",
  "events",
  "placements",
  "contact"
];

const DepartmentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const deptId = Number(id);
  const department: DepartmentData | undefined = getDepartmentById(deptId);

  // Scroll to section on sidebar link click
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    SECTION_IDS.forEach((id) => {
      sectionRefs.current[id] = document.getElementById(id);
    });
  }, []);

  const handleSidebarNav = (section: string) => {
    const el = sectionRefs.current[section];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (!department) {
      navigate("/not-found", { replace: true });
    }
  }, [department, navigate]);

  if (!department) return null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9]">
      <Navbar />
      <div className="flex flex-1 w-full max-w-[1440px] mx-auto">
        {/* Sidebar */}
        <DeptSidebar
          sectionIds={SECTION_IDS}
          onNav={handleSidebarNav}
        />
        {/* Main Content */}
        <main className="flex-1 px-2 sm:px-4 md:px-8 py-4 md:py-8 ml-[220px] max-w-full">
          <section id="hero"><DeptHero department={department} /></section>
          <section id="slider" className="mt-6"><DeptSlider department={department} /></section>
          <section id="stats" className="mt-8"><DeptStats stats={department.stats} /></section>
          <section id="news" className="mt-8"><DeptNews news={department.news} /></section>
          <section id="about" className="mt-8"><DeptAbout about={department.about} /></section>
          <section id="vision-mission" className="mt-8"><DeptVisionMission vision={department.vision} mission={department.mission} /></section>
          <section id="programs" className="mt-8"><DeptPrograms programs={department.programs} /></section>
          <section id="faculty" className="mt-8"><DeptFaculty faculty={department.faculty} /></section>
          <section id="labs" className="mt-8"><DeptLabs labs={department.labs} /></section>
          <section id="research" className="mt-8"><DeptResearch researchAreas={department.researchAreas} /></section>
          <section id="events" className="mt-8"><DeptEvents events={department.events} achievements={department.achievements} /></section>
          <section id="placements" className="mt-8"><DeptPlacements placements={department.placements} /></section>
          <section id="contact" className="mt-8"><DeptContact contact={department.contact} /></section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DepartmentPage;
