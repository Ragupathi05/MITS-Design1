import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-sm bg-white p-1.5 flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}mits-logo.jfif`} alt="MITS logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-display font-bold text-sm">MITS</p>
                <p className="text-primary-foreground/60 text-xs">Madanapalle</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Madanapalle Institute of Technology & Science is committed to excellence in education, research, and innovation.
            </p>
            <div className="mt-6">
              <h3 className="font-display font-semibold text-secondary mb-3">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3 text-primary-foreground/70">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Post Box No. 4, Angallu, Madanapalle – 517325, Andhra Pradesh
                </li>
                <li className="flex gap-3 text-primary-foreground/70">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +91 8571 280255
                </li>
                <li className="flex gap-3 text-primary-foreground/70">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@mits.ac.in
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-secondary mb-4">Quick & Admissions</h3>
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
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-secondary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-secondary mb-4">Academics & Compliance</h3>
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
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-secondary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-secondary mb-4">Connect</h3>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-6 text-sm space-y-2">
              <a href="#" className="block text-primary-foreground/70 hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="block text-primary-foreground/70 hover:text-secondary transition-colors">Mandatory Disclosure</a>
              <a href="#" className="block text-primary-foreground/70 hover:text-secondary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4 text-center text-primary-foreground/50 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© 2026 Madanapalle Institute of Technology & Science. All rights reserved.</p>
          <p>Prepared for institutional quality and accreditation presentation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
