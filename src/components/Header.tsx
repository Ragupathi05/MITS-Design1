import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Departments", href: "/departments" },
      { label: "Library", href: "/library" },
      { label: "Examinations", href: "/examinations" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Research", href: "/research" },
  { label: "Placements", href: "/placements" },
  { label: "Campus Life", href: "/campus-life" },
  {
    label: "News",
    href: "/news-events",
    children: [
      { label: "Latest News", href: "/news-events" },
      { label: "Events", href: "/news-events" },
      { label: "Announcements", href: "/news-events" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-xl"
          : ""
      }`}
    >
      <div className="bg-navy-dark text-primary-foreground/80 border-b border-primary-foreground/10 hidden md:block">
        <div className="container mx-auto px-4 h-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4 lg:gap-6 whitespace-nowrap">
            <a href="#" className="hover:text-secondary transition-colors">Student Portal</a>
            <a href="#" className="hover:text-secondary transition-colors">Faculty Login</a>
            <a href="#" className="hover:text-secondary transition-colors">ERP</a>
            <a href="tel:+918571280255" className="hover:text-secondary transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> Admission Helpline
            </a>
            <a href="mailto:info@mits.ac.in" className="hover:text-secondary transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
          <div className="flex items-center gap-2">
            {[Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-7 h-7 rounded-md bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground transition-colors flex items-center justify-center">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={`bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10 ${scrolled ? "" : ""}`}>
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4 gap-3">
        <Link to="/" className="flex items-center min-w-0 flex-1 lg:flex-none" onClick={() => setMobileOpen(false)}>
          <div className="flex items-center gap-2 sm:gap-3 transition-all duration-300 shrink-0 max-w-full">
            <img
              src={`${import.meta.env.BASE_URL}mits-logo.png`}
              alt="MITS logo"
              className="h-11 sm:h-13 lg:h-16 w-auto object-contain shrink-0"
            />
            <div className="hidden sm:flex items-center gap-3 min-w-0">
              <div className="min-w-0">
                <p className="text-secondary font-black text-2xl lg:text-4xl leading-none tracking-tight" style={{fontFamily:"var(--font-display)"}}>
                  MITS
                </p>
                {/* underline below MITS */}
                <div className="h-[2px] bg-secondary rounded-full mt-1 mb-0.5 w-full" />
                <p className="text-secondary/90 font-extrabold text-[10px] lg:text-sm leading-none tracking-widest">
                  MADANAPALLE
                </p>
              </div>
              <div className="h-10 lg:h-12 w-px bg-primary-foreground/25 shrink-0" />
              <div className="min-w-0 leading-none">
                <p className="text-primary-foreground font-bold text-[10px] lg:text-[0.95rem] tracking-wide" style={{fontFamily:"var(--font-body)", letterSpacing:"0.04em"}}>
                  Madanapalle Institute of
                </p>
                <p className="text-primary-foreground font-bold text-[10px] lg:text-[0.95rem] tracking-wide mt-0.5" style={{fontFamily:"var(--font-body)", letterSpacing:"0.04em"}}>
                  Technology &amp; Science
                </p>
                <p className="text-secondary/80 font-semibold text-[8px] lg:text-[11px] uppercase tracking-[0.14em] mt-1" style={{fontFamily:"var(--font-body)"}}>
                  Deemed to be University
                </p>
              </div>
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navItems.map((item) => (
            item.children ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger className="text-primary-foreground/85 hover:text-secondary transition-colors text-base font-semibold font-body flex items-center gap-1 outline-none">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border-border">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.label} asChild>
                      <Link to={child.href} className="cursor-pointer text-sm text-foreground hover:text-primary">
                        {child.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-primary-foreground/85 hover:text-secondary transition-colors text-base font-semibold font-body relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/admissions">
            <Button className="bg-secondary text-secondary-foreground hover:bg-gold-light font-semibold text-sm px-5 transition-all duration-200">
              Apply Now
            </Button>
          </Link>
          <button
            className="lg:hidden text-primary-foreground hover:text-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
