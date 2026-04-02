import React, { useEffect, useRef, useState } from "react";

export interface DeptStatsProps {
  stats: {
    faculty: number;
    journalPublications: number;
    conferencePublications: number;
    researchProjects: number;
    phdAwarded: number;
  };
}

const statsConfig = [
  { key: "faculty", label: "Faculty Count" },
  { key: "journalPublications", label: "Journal Publications" },
  { key: "conferencePublications", label: "Conference Publications" },
  { key: "researchProjects", label: "Research Projects" },
  { key: "phdAwarded", label: "PhD Awarded" }
] as const;

type StatKey = typeof statsConfig[number]["key"];

const DeptStats: React.FC<DeptStatsProps> = ({ stats }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(() => statsConfig.map(() => 0));

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const target = statsConfig.map(({ key }) => stats[key as StatKey]);
    let frame: number;
    let start = 0;
    const duration = 1200;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCounts(target.map((val) => Math.floor(val * progress)));
      if (progress < 1) frame = requestAnimationFrame(animate);
      else setCounts(target);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [visible, stats]);

  return (
    <section
      ref={ref}
      id="stats"
      className="w-full bg-[#fef0f0] px-4 md:px-12 py-10"
      aria-labelledby="stats-heading"
    >
      <h2
        id="stats-heading"
        className="text-2xl md:text-3xl font-bold text-[#7B1C1C] mb-8 tracking-tight text-center"
      >
        Department Stats
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0 rounded-xl shadow border border-[#e8d0d0] overflow-hidden">
        {statsConfig.map(({ key, label }, i) => (
          <div key={key} className="flex flex-col items-center justify-center py-6">
            <span className="text-4xl font-bold text-[#7B1C1C]">{counts[i]}</span>
            <span className="text-sm text-gray-500 uppercase tracking-wide mt-2">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeptStats;
