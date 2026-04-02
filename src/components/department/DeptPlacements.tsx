
import React from "react";

export interface Placements {
  placementPercent: number;
  avgPackage: string;
  highestPackage: string;
  recruiters: string[];
}

export interface DeptPlacementsProps {
  placements: Placements;
}

const DeptPlacements: React.FC<DeptPlacementsProps> = ({ placements }) => {
  if (!placements) return null;
  const { placementPercent, avgPackage, highestPackage, recruiters } = placements;
  return (
    <section
      id="placements"
      className="py-10 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto"
      aria-labelledby="placements-heading"
    >
      <h2
        id="placements-heading"
        className="text-2xl md:text-3xl font-bold text-[#7B1C1C] mb-6 tracking-tight"
      >
        Placement Highlights
      </h2>
      <div className="flex flex-wrap gap-8 items-center mb-6">
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-extrabold text-[#7B1C1C]">{placementPercent}%</span>
          <span className="text-[#555] text-sm">Placement %</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-extrabold text-[#7B1C1C]">{avgPackage}</span>
          <span className="text-[#555] text-sm">Avg. Package</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-extrabold text-[#7B1C1C]">{highestPackage}</span>
          <span className="text-[#555] text-sm">Highest Package</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-[#7B1C1C] mb-3">Top Recruiters</h3>
        <div className="flex flex-wrap gap-3 items-center">
          {recruiters.map((rec, idx) => (
            <div
              key={idx}
              className="w-20 h-10 bg-[#fef0f0] border border-[#e8d0d0] rounded flex items-center justify-center text-[#7B1C1C] font-bold text-xs shadow-sm"
            >
              {rec}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeptPlacements;
