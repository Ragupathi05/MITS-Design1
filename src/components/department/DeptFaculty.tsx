
import React from "react";

export interface FacultyMember {
  name: string;
  designation: string;
  specialization?: string;
  email: string;
  photoUrl?: string;
}

export interface DeptFacultyProps {
  faculty: FacultyMember[];
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

const DeptFaculty: React.FC<DeptFacultyProps> = ({ faculty }) => {
  if (!faculty || faculty.length === 0) return null;
  return (
    <section
      id="faculty"
      className="py-10 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto"
      aria-labelledby="faculty-heading"
    >
      <h2
        id="faculty-heading"
        className="text-2xl md:text-3xl font-bold text-[#7B1C1C] mb-6 tracking-tight"
      >
        Faculty
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {faculty.map((fac, idx) => (
          <div
            key={idx}
            className="bg-[#f8f6f6] rounded-xl shadow border-l-4 border-[#7B1C1C] p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
            tabIndex={0}
            aria-label={fac.name}
          >
            {fac.photoUrl ? (
              <img
                src={fac.photoUrl}
                alt={fac.name}
                className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-[#e8d0d0]"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-[#fef0f0] text-[#7B1C1C] flex items-center justify-center text-2xl font-bold mb-2 border-2 border-[#e8d0d0]">
                {getInitials(fac.name)}
              </div>
            )}
            <div className="font-bold text-[#1a1a1a] text-base md:text-lg">{fac.name}</div>
            <div className="text-[#555] text-sm font-medium mt-1">{fac.designation}</div>
            {fac.specialization && (
              <div className="text-[#888] text-xs mt-1">{fac.specialization}</div>
            )}
            <a
              href={`mailto:${fac.email}`}
              className="text-[#7B1C1C] text-xs mt-2 underline hover:text-[#C0392B] transition-colors duration-200"
            >
              {fac.email}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeptFaculty;
