
import React from "react";

export interface Program {
  name: string;
  duration: string;
  intake: string;
  accreditation?: string;
}

export interface DeptProgramsProps {
  programs: Program[];
}

const DeptPrograms: React.FC<DeptProgramsProps> = ({ programs }) => {
  if (!programs || programs.length === 0) return null;
  return (
    <section
      id="programs"
      className="py-10 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto"
      aria-labelledby="programs-heading"
    >
      <h2
        id="programs-heading"
        className="text-2xl md:text-3xl font-bold text-[#7B1C1C] mb-6 tracking-tight"
      >
        Programs Offered
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {programs.map((prog, idx) => (
          <div
            key={idx}
            className="bg-[#f8f6f6] rounded-xl shadow border-l-4 border-[#7B1C1C] p-6 flex flex-col gap-2 hover:shadow-lg transition-shadow duration-200"
            tabIndex={0}
            aria-label={prog.name}
          >
            <h3 className="text-lg md:text-xl font-bold text-[#7B1C1C] mb-1">{prog.name}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-[#374151] mb-1">
              <span><span className="font-medium">Duration:</span> {prog.duration}</span>
              <span><span className="font-medium">Intake:</span> {prog.intake}</span>
            </div>
            {prog.accreditation && (
              <span className="text-xs mt-1 px-2 py-1 bg-[#fef0f0] text-[#7B1C1C] rounded-full border border-[#e8d0d0] w-fit font-semibold">
                {prog.accreditation}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeptPrograms;
