
import React from "react";

export interface DeptResearchProps {
  researchAreas: string[];
}

const DeptResearch: React.FC<DeptResearchProps> = ({ researchAreas }) => {
  if (!researchAreas || researchAreas.length === 0) return null;
  return (
    <section
      id="research"
      className="py-10 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto"
      aria-labelledby="research-heading"
    >
      <h2
        id="research-heading"
        className="text-2xl md:text-3xl font-bold text-[#7B1C1C] mb-6 tracking-tight"
      >
        Research Areas
      </h2>
      <div className="flex flex-wrap gap-3">
        {researchAreas.map((area, idx) => (
          <span
            key={idx}
            className="px-4 py-2 rounded-full bg-[#7B1C1C] text-white text-sm md:text-base font-medium shadow-sm border border-[#e8d0d0]"
          >
            {area}
          </span>
        ))}
      </div>
    </section>
  );
};

export default DeptResearch;
