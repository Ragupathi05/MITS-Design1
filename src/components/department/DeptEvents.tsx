
import React from "react";

export interface Event {
  title: string;
  description: string;
  date: string;
}

export interface DeptEventsProps {
  events: Event[];
  achievements: string[];
}

const DeptEvents: React.FC<DeptEventsProps> = ({ events, achievements }) => {
  if ((!events || events.length === 0) && (!achievements || achievements.length === 0)) return null;
  return (
    <section
      id="events"
      className="py-10 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto"
      aria-labelledby="events-heading"
    >
      <h2
        id="events-heading"
        className="text-2xl md:text-3xl font-bold text-[#7B1C1C] mb-6 tracking-tight"
      >
        Events & Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {/* Events List */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#7B1C1C] mb-3">Recent Events</h3>
          <ul className="divide-y divide-[#eee]" role="list">
            {events && events.map((event, idx) => (
              <li key={idx} className="py-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block px-2 py-1 text-xs bg-[#fef0f0] text-[#7B1C1C] rounded-full border border-[#e8d0d0] font-semibold">
                    {event.date}
                  </span>
                  <span className="font-medium text-[#1a1a1a]">{event.title}</span>
                </div>
                {event.description && (
                  <div className="text-[#555] text-sm ml-8 mt-1">{event.description}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Achievements */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg md:text-xl font-semibold text-[#7B1C1C] mb-3">Achievements & Awards</h3>
          {achievements && achievements.map((ach, idx) => (
            <div key={idx} className="bg-[#f8f6f6] border-l-4 border-[#7B1C1C] px-4 py-2 rounded shadow-sm text-[#1a1a1a] font-medium">
              {ach}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeptEvents;
