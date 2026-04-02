import React, { useEffect, useRef, useState } from "react";
import { DepartmentData } from "../../data/departmentData";

interface DeptSliderProps {
  department: DepartmentData;
}

const AUTO_SLIDE_INTERVAL = 3500;

const MAROON_GRADIENTS = [
  "bg-gradient-to-br from-[#7B1C1C] to-[#9B2525]",
  "bg-gradient-to-br from-[#9B2525] to-[#C0392B]",
  "bg-gradient-to-br from-[#8B2020] to-[#4A0E0E]",
  "bg-gradient-to-br from-[#7B1C1C] to-[#C0392B]"
];

const DeptSlider: React.FC<DeptSliderProps> = ({ department }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const slides = MAROON_GRADIENTS;
  const slideCount = slides.length;

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, AUTO_SLIDE_INTERVAL);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [current, slideCount]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
  const next = () => setCurrent((prev) => (prev + 1) % slideCount);

  return (
    <div className="w-full max-w-5xl mx-auto h-[220px] md:h-[380px] relative overflow-hidden rounded-xl shadow-lg">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((bg, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 w-full h-[220px] md:h-[380px] flex items-center justify-center ${bg} relative`}
          >
            <span className="text-white text-4xl md:text-6xl font-black opacity-80 drop-shadow-lg select-none">
              {department.fullName}
            </span>
            <span className="absolute bottom-4 right-8 text-white text-2xl md:text-4xl font-black opacity-20 select-none">
              {department.shortName}
            </span>
          </div>
        ))}
      </div>
      {/* Prev/Next arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#7B1C1C] text-white flex items-center justify-center shadow-lg hover:bg-[#8B2020] transition z-20"
        onClick={prev}
        aria-label="Previous Slide"
        style={{ opacity: 0.9 }}
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#7B1C1C] text-white flex items-center justify-center shadow-lg hover:bg-[#8B2020] transition z-20"
        onClick={next}
        aria-label="Next Slide"
        style={{ opacity: 0.9 }}
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border-2 border-[#e8d0d0] ${idx === current ? "bg-[#7B1C1C]" : "bg-[#fef0f0]"}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DeptSlider;
