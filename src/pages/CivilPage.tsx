
import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
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
import { departments } from "../data/departmentData";

const department = departments[11];

const sectionIds = [
	"hero","slider","stats","about","vision-mission","programs","faculty","labs","research","news","events","placements","contact"
];

const CivilPage: React.FC = () => {
	const handleNav = (id: string) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
	};
	return (
		<div className="bg-[#fff8f8] min-h-screen flex flex-col">
			<Navbar />
			<div className="flex w-full max-w-[1440px] mx-auto pt-6 pb-16 px-2 md:px-8 relative">
				<div className="hidden md:block">
					<DeptSidebar sectionIds={sectionIds} onNav={handleNav} />
				</div>
				<main className="flex-1 md:ml-[240px] w-full flex flex-col gap-10">
					<section id="hero"><DeptHero department={department} /></section>
					<section id="slider"><DeptSlider department={department} /></section>
					<section id="stats"><DeptStats stats={department.stats} /></section>
					<section id="about"><DeptAbout about={department.about} /></section>
					<section id="vision-mission"><DeptVisionMission vision={department.vision} mission={department.mission} /></section>
					<section id="programs"><DeptPrograms programs={department.programs} /></section>
					<section id="faculty"><DeptFaculty faculty={department.faculty} /></section>
					<section id="labs"><DeptLabs labs={department.labs} /></section>
					<section id="research"><DeptResearch researchAreas={department.researchAreas} /></section>
					<section id="news"><DeptNews news={department.news} /></section>
					<section id="events"><DeptEvents events={department.events} achievements={department.achievements} /></section>
					<section id="placements"><DeptPlacements placements={department.placements} /></section>
					<section id="contact"><DeptContact contact={department.contact} /></section>
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default CivilPage;
