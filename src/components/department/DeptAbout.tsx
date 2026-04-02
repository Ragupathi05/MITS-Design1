
import React from "react";

export interface DeptAboutProps {
  about: string;
}

const DeptAbout: React.FC<DeptAboutProps> = ({ about }) => {
  if (!about) return null;
  return (
    <section
      id="about"
      className="py-10 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto"
      aria-labelledby="about-heading"
    >
      <h2
        id="about-heading"
        className="text-2xl md:text-3xl font-bold text-[#7B1C1C] mb-6 tracking-tight"
      >
        About the Department
      </h2>
      <div className="bg-[#f8f6f6] rounded-lg p-6 border-l-4 border-[#7B1C1C] shadow-sm">
        <p className="text-[#374151] text-base md:text-lg leading-relaxed">
          {about}
        </p>
      </div>
    </section>
  );
};

export default DeptAbout;
