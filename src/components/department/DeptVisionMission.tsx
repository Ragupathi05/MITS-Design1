
import React from "react";

export interface DeptVisionMissionProps {
  vision: string;
  mission: string[];
}

const DeptVisionMission: React.FC<DeptVisionMissionProps> = ({ vision, mission }) => {
  if (!vision && (!mission || mission.length === 0)) return null;
  return (
    <section
      id="vision-mission"
      className="py-10 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto"
      aria-labelledby="vision-mission-heading"
    >
      <h2
        id="vision-mission-heading"
        className="text-2xl md:text-3xl font-bold text-[#7B1C1C] mb-6 tracking-tight"
      >
        Vision & Mission
      </h2>
      {vision && (
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-[#7B1C1C] mb-2">Vision</h3>
          <div className="bg-[#f8f6f6] rounded-lg p-5 border-l-4 border-[#7B1C1C] shadow-sm">
            <p className="text-[#374151] text-base md:text-lg leading-relaxed">{vision}</p>
          </div>
        </div>
      )}
      {mission && mission.length > 0 && (
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#7B1C1C] mb-2">Mission</h3>
          <ol className="list-decimal pl-6 space-y-3">
            {mission.map((m, idx) => (
              <li key={idx} className="bg-[#f8f6f6] rounded-lg p-5 border-l-4 border-[#7B1C1C] shadow-sm text-[#374151] text-base md:text-lg leading-relaxed">
                {m}
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
};

export default DeptVisionMission;
