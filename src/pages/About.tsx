import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Award, Users, BookOpen, Globe, Target, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "18+", label: "Years of Excellence", icon: Award },
    { number: "6", label: "Engineering Departments", icon: Zap },
    { number: "5000+", label: "Active Students", icon: Users },
    { number: "200+", label: "Top Companies", icon: Globe },
  ];

  const values = [
    {
      icon: Target,
      title: "Academic Excellence",
      description: "Rigorous curriculum combining theoretical knowledge with practical skills, aligned with global standards and industry requirements."
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description: "Committed to creating responsible professionals who contribute positively to society and drive sustainable development."
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Welcoming diverse talents from across the globe, fostering a vibrant campus culture of respect and collaboration."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International partnerships, exchange programs, and exposure to global standards preparing students for worldwide opportunities."
    },
    {
      icon: Zap,
      title: "Innovation & Research",
      description: "Fostering a culture of innovation with cutting-edge research facilities and entrepreneurial ventures."
    },
    {
      icon: BookOpen,
      title: "Holistic Development",
      description: "Beyond academics, developing leadership, communication, and life skills for well-rounded professionals."
    },
  ];

  const milestones = [
    { year: "2005", event: "MITS Founded with CSE and ECE departments" },
    { year: "2007", event: "EEE and Mechanical Engineering departments established" },
    { year: "2008", event: "Civil Engineering department launched" },
    { year: "2010", event: "Achieved Autonomous Institution Status from AICTE" },
    { year: "2015", event: "NAAC Accreditation with 'A' Grade" },
    { year: "2018", event: "ISO 9001:2015 Certification achieved" },
    { year: "2020", event: "Research Excellence Centers established" },
    { year: "2023", event: "State-of-the-art Innovation Hub inaugurated" },
  ];

  const achievements = [
    { title: "NAAC Accreditation", description: "Grade 'A' recognized by National Assessment and Accreditation Council" },
    { title: "NBA Accreditation", description: "National Board of Accreditation approved engineering programs" },
    { title: "ISO 9001:2015", description: "Quality Management System certified internationally" },
    { title: "Research Recognition", description: "200+ publications in peer-reviewed international journals" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section with Gradient */}
        <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/50 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Shaping Tomorrow's <span className="text-secondary">Leaders</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Since 2005, MITS has been India's premier institution dedicated to excellence in engineering and science education, fostering innovation, research, and holistic development of future professionals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8 py-6">
                  Learn More
                </Button>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6">
                  Explore Programs
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="container mx-auto px-4 py-20 -mt-10 relative z-20">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bg-card border border-border rounded-xl p-8 text-center hover:border-secondary/50 hover:shadow-xl transition-all hover:scale-105">
                  <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <p className="text-4xl font-bold text-secondary mb-2">{stat.number}</p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 rounded-2xl p-10 hover:border-secondary/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-secondary" />
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide transformative education that combines rigorous academics with practical experience, nurturing socially responsible professionals and entrepreneurs who excel globally and contribute meaningfully to society's advancement through innovation, ethics, and excellence.
              </p>
              <div className="mt-6 pt-6 border-t border-secondary/20">
                <p className="text-sm text-secondary font-semibold">Our commitment: Creating leaders, not just professionals</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-10 hover:border-primary/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be globally recognized as a center of academic excellence, innovation, and research where diverse talents thrive. An institution that produces ethical professionals, entrepreneurs, and thought leaders who shape industries, solve complex global challenges, and create positive impact through sustainable and responsible practices.
              </p>
              <div className="mt-6 pt-6 border-t border-primary/20">
                <p className="text-sm text-primary font-semibold">Our aspiration: Excellence without boundaries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Core Values</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">What We Believe In</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">These principles guide every decision and shape our institutional culture</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-secondary/50 hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Recognized Excellence</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Accreditations & Awards</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, i) => (
              <div key={i} className="bg-gradient-to-br from-secondary/10 to-background border border-secondary/20 rounded-xl p-8 hover:border-secondary/40 transition-all">
                <Award className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Our Journey</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Milestone Achievements</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-secondary border-4 border-background z-10"></div>
                    {i !== milestones.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-secondary to-border my-2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="bg-card border border-border rounded-lg p-6 hover:border-secondary/50 transition-all">
                      <p className="text-secondary font-bold text-lg mb-2">{milestone.year}</p>
                      <p className="text-foreground text-lg font-semibold">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose MITS */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Why Choose MITS?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-bold text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">World-Class Faculty</h3>
                  <p className="text-muted-foreground">PhD holders and industry experts with international experience guiding your learning journey</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-bold text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Modern Infrastructure</h3>
                  <p className="text-muted-foreground">State-of-the-art laboratories, libraries, and computing facilities supporting cutting-edge research</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-bold text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Industry Partnerships</h3>
                  <p className="text-muted-foreground">Strong connections with 200+ companies ensuring internships, placements, and industry projects</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-bold text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Holistic Growth</h3>
                  <p className="text-muted-foreground">Beyond academics - sports, arts, clubs, and mentorship for complete personality development</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl p-16 text-center max-w-3xl mx-auto border border-secondary/40">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-4">Join Our Community</h2>
            <p className="text-secondary-foreground/90 text-lg mb-10">
              Be part of a legacy of excellence. Apply now and start your journey towards becoming a global leader.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 font-semibold text-lg px-8 py-6 inline-flex items-center gap-2">
                Apply Now <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold text-lg px-8 py-6">
                Request Brochure
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
