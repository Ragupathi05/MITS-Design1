import { Target, Eye, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import campusBuilding from "@/assets/campus-building.png";
import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Shaping Futures Since 1998
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Madanapalle Institute of Technology & Science (MITS) is a premier institution committed to providing quality education
              in engineering, sciences, and management. With NAAC A+ accreditation and NBA-approved programs, MITS advances
              outcome-based learning, innovation, and responsible leadership. The institute fosters an ecosystem where teaching,
              research, and industry collaboration work together to prepare students for global careers and societal impact.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Target className="w-6 h-6 text-primary-foreground group-hover:text-secondary-foreground transition-colors" />
                </div>
                <div className="group-hover:translate-x-1 transition-all duration-300">
                  <h3 className="font-display font-semibold text-foreground text-lg group-hover:text-primary transition-colors">Our Mission</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">To impart quality education, foster innovation, and develop skilled professionals who contribute to society.</p>
                </div>
              </div>
              <div className="flex gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Eye className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="group-hover:translate-x-1 transition-all duration-300">
                  <h3 className="font-display font-semibold text-foreground text-lg group-hover:text-primary transition-colors">Our Vision</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">To be a globally recognized institution of excellence in education, research, and innovation.</p>
                </div>
              </div>
              <div className="flex gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Award className="w-6 h-6 text-primary-foreground group-hover:text-secondary-foreground transition-colors" />
                </div>
                <div className="group-hover:translate-x-1 transition-all duration-300">
                  <h3 className="font-display font-semibold text-foreground text-lg group-hover:text-primary transition-colors">NAAC A+ Accredited</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">Recognized for academic excellence and quality standards by the National Assessment and Accreditation Council.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6">
                  Read More
                </Button>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative group">
              <img src={campusBuilding} alt="MITS Campus Building" className="rounded-2xl shadow-2xl w-full group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300" />
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-xl p-6 shadow-xl hidden md:block group-hover:bg-secondary group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <p className="text-secondary font-display text-3xl font-bold group-hover:text-secondary-foreground">25+</p>
                <p className="text-primary-foreground/80 text-sm group-hover:text-primary/80">Years of Excellence</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
