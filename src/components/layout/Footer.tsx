import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

interface FooterLink {
  label: string;
  to: string;
}

const QUICK_LINKS: FooterLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Departments", to: "/departments" },
  { label: "Admissions", to: "/admissions" },
  { label: "Placements", to: "/placements" },
  { label: "Contact", to: "/contact" }
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#7B1C1C] text-white mt-12" aria-label="Site Footer">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address */}
        <div>
          <h3 className="font-bold text-lg mb-2">Madanapalle Institute of Technology & Science</h3>
          <p className="text-sm mb-2">Post Box No: 14, Kadiri Road, Angallu (V),<br />Madanapalle-517325, Annamayya District, Andhra Pradesh, India.</p>
          <p className="text-sm">Phone: <a href="tel:+918571280255" className="underline hover:text-[#fef0f0] transition-colors duration-200">+91-8571-280255</a></p>
          <p className="text-sm">Email: <a href="mailto:info@mits.ac.in" className="underline hover:text-[#fef0f0] transition-colors duration-200">info@mits.ac.in</a></p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-[#fef0f0] transition-colors duration-200 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#7B1C1C]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Social & Map */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg mb-2">Connect with Us</h3>
          <div className="flex gap-4 mb-2">
            <a href="https://facebook.com/mits.madanapalle" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#7B1C1C]">
              <Facebook size={22} className="hover:text-[#fef0f0] transition-colors duration-200" aria-hidden="true" />
            </a>
            <a href="https://twitter.com/mits_madanapalle" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#7B1C1C]">
              <Twitter size={22} className="hover:text-[#fef0f0] transition-colors duration-200" aria-hidden="true" />
            </a>
            <a href="https://linkedin.com/school/mits-madanapalle" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#7B1C1C]">
              <Linkedin size={22} className="hover:text-[#fef0f0] transition-colors duration-200" aria-hidden="true" />
            </a>
            <a href="mailto:info@mits.ac.in" aria-label="Email" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#7B1C1C]">
              <Mail size={22} className="hover:text-[#fef0f0] transition-colors duration-200" aria-hidden="true" />
            </a>
          </div>
          <div className="w-full h-24 rounded overflow-hidden border border-[#e8d0d0] bg-white flex items-center justify-center">
            <svg width="40" height="40" fill="none" stroke="#7B1C1C" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" /></svg>
            <span className="sr-only">MITS Location Map</span>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-[#fef0f0] py-2 border-t border-[#e8d0d0]">© {new Date().getFullYear()} MITS Madanapalle. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
