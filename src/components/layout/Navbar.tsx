
import React from "react";
import { Link, useLocation } from "react-router-dom";
const BASE = import.meta.env.BASE_URL;

interface NavLinkItem {
  label: string;
  to: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Departments", to: "/departments" },
  { label: "Admissions", to: "/admissions" },
  { label: "Placements", to: "/placements" },
  { label: "Contact", to: "/contact" }
];

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-40 w-full bg-[#7B1C1C] border-b border-[#e8d0d0] shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 sm:gap-3" aria-label="MITS Home">
          <img 
            src={`${BASE}mits-logo.png`} 
            alt="MITS Logo" 
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" 
          />
          <span className="font-extrabold text-xl sm:text-2xl md:text-3xl text-white tracking-tight">MITS</span>
        </Link>
        <nav className="hidden md:flex gap-6" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium px-2 py-1 rounded transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#7B1C1C] ${isActive ? "bg-white text-[#7B1C1C]" : "text-white hover:bg-[#fff8f8] hover:text-[#7B1C1C]"}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        {/* Mobile Hamburger (not implemented, placeholder for future) */}
        <div className="md:hidden">
          <button
            className="text-white p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Open navigation menu"
            tabIndex={0}
            type="button"
            // No inline event handler, placeholder only
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
