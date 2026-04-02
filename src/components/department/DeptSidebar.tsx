import React, { useEffect, useState, useRef } from "react";
import { Menu } from "lucide-react";

interface SidebarLink {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

const NAV_LINKS: SidebarLink[] = [
  { id: "hero", label: "Home" },
  { id: "faculty", label: "People" },
  { id: "programs", label: "Academics & Timetable" },
  { id: "labs", label: "Facilities" },
  { id: "committees", label: "Committees" },
  { id: "news", label: "Publications" },
  { id: "research", label: "Projects" },
  { id: "patents", label: "Patents" },
  { id: "events", label: "Events" },
  { id: "achievements", label: "Awards & Honours" },
  { id: "placements", label: "Placements" },
  { id: "slider", label: "Photo Gallery" },
  { id: "contact", label: "Contact Us" }
];

interface DeptSidebarProps {
  sectionIds: string[];
  onNav: (section: string) => void;
}

const DeptSidebar: React.FC<DeptSidebarProps> = ({ sectionIds, onNav }) => {
  const [active, setActive] = useState(sectionIds[0]);
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      let found = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) found = id;
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (idx + 1) % NAV_LINKS.length;
      document.getElementById(`sidebar-link-${NAV_LINKS[next].id}`)?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (idx - 1 + NAV_LINKS.length) % NAV_LINKS.length;
      document.getElementById(`sidebar-link-${NAV_LINKS[prev].id}`)?.focus();
    }
  };

  // Desktop sidebar
  const sidebar = (
    <nav
      className="flex-1 flex flex-col py-6 gap-1"
      aria-label="Section Navigation"
      ref={sidebarRef}
    >
      {NAV_LINKS.map((link, idx) => (
        <button
          key={link.id}
          id={`sidebar-link-${link.id}`}
          tabIndex={0}
          onClick={() => onNav(link.id)}
          onKeyDown={e => handleKeyDown(e, idx)}
          className={`w-full text-left px-6 py-2 rounded-l-full font-medium transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B1C1C] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${active === link.id ? "bg-[#7B1C1C] text-white" : "text-[#374151] hover:bg-[#fef0f0] hover:text-[#7B1C1C]"}`}
          aria-current={active === link.id ? "page" : undefined}
          aria-label={link.label}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );

  // Mobile drawer
  return (
    <>
      {/* Desktop sticky sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-16 md:top-20 h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] w-[220px] bg-white border-r border-[#e8d0d0] shadow-md z-30">
        {sidebar}
      </aside>
      {/* Mobile hamburger and drawer */}
      <div className="md:hidden">
        <button
          className="fixed left-2 top-20 z-40 bg-[#7B1C1C] text-white p-2 rounded shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B1C1C]"
          aria-label="Open section navigation"
          onClick={() => setOpen(true)}
          type="button"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
        {open && (
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setOpen(false)}
            aria-label="Close navigation overlay"
          />
        )}
        <nav
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-200 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}
          aria-label="Section Navigation Drawer"
          tabIndex={-1}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-[#e8d0d0]">
            <span className="font-bold text-[#7B1C1C] text-lg">Sections</span>
            <button
              className="text-[#7B1C1C] p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B1C1C]"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
              type="button"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex flex-col py-4 gap-1">
            {NAV_LINKS.map((link, idx) => (
              <button
                key={link.id}
                id={`drawer-link-${link.id}`}
                tabIndex={0}
                onClick={() => { setOpen(false); onNav(link.id); }}
                onKeyDown={e => handleKeyDown(e, idx)}
                className={`w-full text-left px-6 py-2 rounded font-medium transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B1C1C] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${active === link.id ? "bg-[#7B1C1C] text-white" : "text-[#374151] hover:bg-[#fef0f0] hover:text-[#7B1C1C]"}`}
                aria-current={active === link.id ? "page" : undefined}
                aria-label={link.label}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default DeptSidebar;
