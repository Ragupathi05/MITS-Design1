import React from "react";
import { DepartmentData } from "../../data/departmentData";
import { ChevronRight, Home } from "lucide-react";

interface DeptHeroProps {
  department: DepartmentData;
}


const DeptHero: React.FC<DeptHeroProps> = ({ department }) => {
  return (
    <div
      className="relative w-full h-[200px] flex items-stretch bg-gradient-to-br from-[#7B1C1C] to-[#4A0E0E] border-b-4 border-[#C0392B] overflow-hidden"
    >
      {/* SVG pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        style={{ opacity: 0.08 }}
        viewBox="0 0 800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#fff" />
          </pattern>
        </defs>
        <rect width="800" height="200" fill="url(#dots)" />
      </svg>
      <div className="relative z-10 flex-1 flex flex-col justify-center pl-8 pr-4">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-[#fef0f0] gap-2 mb-2">
          <Home size={18} className="inline-block mr-1" />
          <span>Home</span>
          <ChevronRight size={16} />
          <span>Academics</span>
          <ChevronRight size={16} />
          <span className="font-semibold text-[#fef0f0]">{department.fullName}</span>
        </nav>
        <h1 className="text-3xl font-semibold text-white drop-shadow-lg">
          {department.fullName}
        </h1>
      </div>
      <div className="relative z-10 flex items-end pr-12 pb-6 select-none hidden md:flex">
        <span className="font-black text-7xl text-white opacity-15 tracking-tight" style={{ WebkitTextStroke: '1px #fff', opacity: 0.15 }}>
          {department.shortName}
        </span>
      </div>
    </div>
  );
};

export default DeptHero;
