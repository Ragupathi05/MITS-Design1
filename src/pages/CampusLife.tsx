import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Zap, Palette, Trophy, Music, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CampusLife = () => {
  const facilities = [
    {
      icon: Users,
      title: "Student Hostel",
      description: "Comfortable residential accommodations with modern amenities, Wi-Fi, and 24/7 security"
    },
    {
      icon: Palette,
      title: "Arts & Cultural Center",
      description: "World-class facilities for performing arts, exhibitions, and cultural events"
    },
    {
      icon: Trophy,
      title: "Sports Complex",
      description: "Olympic-standard facilities for cricket, basketball, tennis, swimming, and more"
    },
    {
      icon: Music,
      title: "Auditorium",
      description: "State-of-the-art auditorium for seminars, conferences, and cultural programs"
    },
    {
      icon: BookOpen,
      title: "Central Library",
      description: "Extensive collection with digital access, reading rooms, and study areas"
    },
    {
      icon: Zap,
      title: "Tech Hub",
      description: "Innovation spaces for startups and entrepreneurial ventures"
    },
  ];

  const clubs = [
    { name: "Tech Club", desc: "Programming and software development" },
    { name: "Robotics Club", desc: "Building and programming robots" },
    { name: "Photography Club", desc: "Capturing moments and events" },
    { name: "Debate Society", desc: "Honing communication skills" },
    { name: "Cultural Club", desc: "Organizing cultural festivals" },
    { name: "Entrepreneurship Club", desc: "Business and startup ventures" },
    { name: "Environmental Club", desc: "Sustainability initiatives" },
    { name: "Sports Association", desc: "Athletic competitions and training" },
  ];

  const activities = [
    {
      title: "Annual Fest",
      description: "Three-day celebration with competitions, performances, and exhibitions",
      icon: Trophy
    },
    {
      title: "Workshop Series",
      description: "Regular workshops on emerging technologies and soft skills",
      icon: BookOpen
    },
    {
      title: "Sports Events",
      description: "Inter-college and intra-college sports tournaments throughout the year",
      icon: Zap
    },
    {
      title: "Cultural Programs",
      description: "Theatrical performances, music concerts, and dance shows",
      icon: Palette
    },
    {
      title: "Social Service",
      description: "Community outreach programs and social responsibility initiatives",
      icon: Users
    },
    {
      title: "Leadership Programs",
      description: "Developing leadership and team management skills",
      icon: Trophy
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">Campus Experience</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Life at MITS
              </h1>
              <p className="text-lg text-muted-foreground">
                A vibrant campus community that nurtures growth beyond academics.
              </p>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Infrastructure</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Campus Facilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, i) => {
              const Icon = facility.icon;
              return (
                <Card key={i} className="border-border hover:border-secondary/50 transition-all p-6">
                  <Icon className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Student Clubs */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Community</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Student Clubs & Organizations</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {clubs.map((club, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 hover:border-secondary/50 transition-all">
                <h3 className="font-bold text-foreground mb-2 text-sm">{club.name}</h3>
                <p className="text-xs text-muted-foreground">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities & Events */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Year-round</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Activities & Events</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <Card key={i} className="border-border hover:border-secondary/50 transition-all p-6">
                  <Icon className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Hostel Information */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Residential Life</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Boys Hostel</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Separate blocks with modern rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>24/7 security and CCTV surveillance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>High-speed internet connectivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Common rooms and sports facilities</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Girls Hostel</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Spacious and comfortable rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Strict security protocols and gating</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Mentorship programs and counseling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Regular wellness and health programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Student Support */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-lg p-8 max-w-3xl mx-auto border border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Student Support Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-foreground mb-3">Academic Support</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Tutoring and remedial classes</li>
                  <li>• Study groups and peer learning</li>
                  <li>• Academic counseling</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3">Personal Well-being</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Counseling and mental health support</li>
                  <li>• Health and medical facilities</li>
                  <li>• Sports and fitness programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-lg p-12 text-center max-w-2xl mx-auto border border-secondary/20">
            <h2 className="text-3xl font-bold text-foreground mb-4">Experience Campus Life</h2>
            <p className="text-muted-foreground mb-8">
              Join a thriving community that celebrates excellence, diversity, and personal growth.
            </p>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold inline-flex items-center gap-2">
              Take a Virtual Tour <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CampusLife;
