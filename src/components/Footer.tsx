import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0f2a44] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-sm bg-white p-1.5 flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}mits-logo.jfif`} alt="MITS logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-white">MITS</p>
                <p className="font-body text-white/70 text-xs">Madanapalle</p>
              </div>
            </div>
            <p className="font-body text-white/80 text-sm leading-relaxed">
              Madanapalle Institute of Technology & Science is committed to excellence in education, research, and innovation.
            </p>
            <div className="mt-6">
              <h3 className="font-display font-bold text-[#caa74d] text-base mb-3">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3 text-white/80 font-body">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  Post Box No. 4, Angallu, Madanapalle – 517325, Andhra Pradesh
                </li>
                <li className="flex gap-3 text-white/80 font-body">
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  +91 8571 280255
                </li>
                <li className="flex gap-3 text-white/80 font-body">
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  info@mits.ac.in
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#caa74d] text-base mb-4">Quick &amp; Admissions</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Academics", href: "/academics" },
                { label: "Research", href: "/research" },
                { label: "Placements", href: "/placements" },
                { label: "Contact", href: "/contact" },
                { label: "Apply Now", href: "/admissions" },
                { label: "Prospectus", href: "/admissions" },
                { label: "Important Dates", href: "/admissions" },
                { label: "Scholarships", href: "/admissions" },
                { label: "Mandatory Disclosure", href: "/about" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="font-body text-white/80 hover:text-[#caa74d] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#caa74d] text-base mb-4">Academics &amp; Compliance</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Departments", href: "/departments" },
                { label: "Library", href: "/library" },
                { label: "Examinations", href: "/examinations" },
                { label: "Research", href: "/research" },
                { label: "Campus Life", href: "/campus-life" },
                { label: "NAAC", href: "/about" },
                { label: "NIRF", href: "/about" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="font-body text-white/80 hover:text-[#caa74d] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#caa74d] text-base mb-4">Connect</h3>
            <div className="flex gap-3">
              {([Facebook, Twitter, Linkedin, Youtube] as const).map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#caa74d] hover:text-[#0f172a] transition-colors"
                  aria-label={["Facebook", "Twitter", "LinkedIn", "YouTube"][i]}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="mt-6 text-sm space-y-2">
              <a href="#" className="block font-body text-white/80 hover:text-[#caa74d] transition-colors">Privacy Policy</a>
              <a href="#" className="block font-body text-white/80 hover:text-[#caa74d] transition-colors">Mandatory Disclosure</a>
              <a href="#" className="block font-body text-white/80 hover:text-[#caa74d] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-white/70 text-sm">© 2026 Madanapalle Institute of Technology & Science. All rights reserved.</p>
          <p className="font-body text-white/50 text-sm">Prepared for institutional quality and accreditation presentation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
