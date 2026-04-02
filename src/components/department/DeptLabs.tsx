
import React from "react";

export interface Lab {
  name: string;
  description: string;
  icon?: string;
}

export interface DeptLabsProps {
  labs: Lab[];
}

const DeptLabs: React.FC<DeptLabsProps> = ({ labs }) => {
  if (!labs || labs.length === 0) return null;
  return (
    <section
      id="labs"
      className="py-10 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto"
      aria-labelledby="labs-heading"
    >
      <h2
        id="labs-heading"
        className="text-2xl md:text-3xl font-bold text-[#7B1C1C] mb-6 tracking-tight"
      >
        Facilities & Labs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {labs.map((lab, idx) => (
          <div
            key={idx}
            className="bg-[#f8f6f6] rounded-xl shadow border-l-4 border-[#7B1C1C] p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
            tabIndex={0}
            aria-label={lab.name}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fef0f0] border-2 border-[#e8d0d0] mb-2">
              {/* Optionally render icon here if needed */}
            </div>
            <div className="font-bold text-[#1a1a1a] text-base md:text-lg">{lab.name}</div>
            <div className="text-[#555] text-sm mt-1">{lab.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeptLabs;
