import React from "react";
import { DepartmentNews } from "../../data/departmentData";
import { CalendarDays } from "lucide-react";

interface DeptNewsProps {
  news: DepartmentNews[];
}

const DeptNews: React.FC<DeptNewsProps> = ({ news }) => {
  const items = news?.slice(0, 5);
  if (!items || items.length === 0) return null;
    return (
      <section
        id="news"
        className="py-10 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto"
        aria-labelledby="news-heading"
      >
        <h2
          id="news-heading"
          className="text-2xl md:text-3xl font-bold text-[#7B1C1C] mb-6 tracking-tight"
        >
          Recent News & Publications
        </h2>
        <ul className="space-y-5" role="list">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="bg-[#f8f6f6] rounded-lg p-5 border-l-4 border-[#7B1C1C] shadow-sm focus-within:ring-2 focus-within:ring-[#7B1C1C]"
              tabIndex={-1}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-lg md:text-xl text-[#1a1a1a]">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-[#374151] text-sm md:text-base mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
                <span className="text-xs md:text-sm text-[#7B1C1C] font-medium md:ml-4 whitespace-nowrap">
                  {item.date}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
};

export default DeptNews;
