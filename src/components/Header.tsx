import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Programs Offered", href: "/academics" },
      { label: "Departments", href: "/departments" },
      { label: "Academic Calendar", href: "/academics" },
      { label: "Examinations", href: "/examinations" },
      { label: "Library", href: "/library" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admission Process", href: "/admissions" },
      { label: "Apply Online", href: "/admissions" },
      { label: "Eligibility & Fees", href: "/admissions" },
    ],
  },
  { label: "Research", href: "/research" },
  { label: "Placements", href: "/placements" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}>
      {/* Top ticker bar */}
      <div className="bg-primary text-primary-foreground hidden md:block overflow-hidden">
        <div className="h-9 flex items-center">
          <div className="bg-accent text-accent-foreground font-bold text-xs px-4 h-full flex items-center shrink-0 z-10">
            🎓 ADMISSIONS 2026
          </div>
          <div className="overflow-hidden flex-1 relative">
            <div className="flex whitespace-nowrap animate-marquee">
              {[1, 2].map((n) => (
                <span key={n} className="inline-flex items-center gap-6 px-8 text-sm font-semibold">
                  <span className="text-accent font-bold tracking-wide">🌟 Admissions for 2026 are NOW OPEN!</span>
                  <span className="text-primary-foreground/60">•</span>
                  <span>Apply today at MITS — Deemed to be University</span>
                  <span className="text-primary-foreground/60">•</span>
                  <span className="text-accent font-bold">🚀 Limited seats — Don't miss out!</span>
                  <span className="text-primary-foreground/60">•</span>
                  <span>NAAC A+ Accredited | UGC Recognized | AICTE Approved</span>
                  <span className="text-primary-foreground/60">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b border-border shadow-sm">
        <div className="w-full flex items-center justify-between h-16 lg:h-20 px-[10px] md:px-[15px] sm:px-[20px] gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center min-w-0 shrink-0" onClick={() => setMobileOpen(false)}>
            <div className="flex items-center gap-2 sm:gap-3 transition-all duration-300 shrink-0 max-w-full">
              <img
                src={`${import.meta.env.BASE_URL}mits-logo.png`}
                alt="MITS logo"
                className="h-11 sm:h-13 lg:h-16 w-auto object-contain shrink-0"
              />
              <div className="hidden sm:flex items-center gap-3 min-w-0">
                <div className="min-w-0">
                  <p className="text-primary font-black text-2xl lg:text-4xl leading-none tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                    MITS
                  </p>
                  <div className="h-[2px] bg-primary rounded-full mt-1 mb-0.5 w-full" />
                  <p className="text-primary/80 font-extrabold text-[10px] lg:text-sm leading-none tracking-widest">
                    MADANAPALLE
                  </p>
                </div>
                <div className="h-10 lg:h-12 w-px bg-secondary/25 shrink-0" />
                <div className="min-w-0 leading-none">
                  <p className="text-secondary font-bold text-[10px] lg:text-[0.95rem] tracking-wide" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
                    Madanapalle Institute of
                  </p>
                  <p className="text-secondary font-bold text-[10px] lg:text-[0.95rem] tracking-wide mt-0.5" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
                    Technology &amp; Science
                  </p>
                  <p className="text-primary/70 font-semibold text-[8px] lg:text-[11px] uppercase tracking-[0.14em] mt-1" style={{ fontFamily: "var(--font-body)" }}>
                    Deemed to be University
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-1 justify-end">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-3 py-2 text-base font-semibold transition-colors duration-200 rounded-md
                      ${isActive(item.href) ? "text-primary bg-primary/5" : "text-secondary hover:text-primary hover:bg-primary/5"}
                      relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
                    `}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </Link>
                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-0 pt-1 min-w-[220px] z-50 transition-all duration-200 ${
                      openDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white rounded-lg border border-border shadow-xl py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-base text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-150 font-medium"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3 py-2 text-base font-semibold transition-colors duration-200 rounded-md
                    ${isActive(item.href) ? "text-primary bg-primary/5" : "text-secondary hover:text-primary hover:bg-primary/5"}
                    relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
                  `}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right: Apply + Mobile toggle */}
          <div className="flex items-center gap-3 shrink-0 ml-auto lg:ml-0">
            <Link to="/admissions">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm px-5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
                Apply Now
              </Button>
            </Link>
            <button
              className="lg:hidden text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg max-h-[70vh] overflow-y-auto">
          <nav className="w-full px-[20px] py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.href}
                    className={`flex-1 text-sm font-semibold py-2.5 transition-colors ${
                      isActive(item.href) ? "text-primary" : "text-secondary hover:text-primary"
                    }`}
                    onClick={() => !item.children && setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className="p-2 text-secondary hover:text-primary"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block text-sm text-muted-foreground hover:text-primary py-1.5 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
