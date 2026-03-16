import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, TrendingUp, Users, Building2, MapPin, Trophy, Zap, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Placements = () => {
  const stats = [
    { number: "96%+", label: "Placement Rate", icon: Trophy },
    { number: "₹16.5+", label: "Average Package (LPA)", icon: Zap },
    { number: "250+", label: "Recruiting Companies", icon: Building2 },
    { number: "₹68+", label: "Highest Package (LPA)", icon: Award },
  ];

  const topRecruiters = [
    { name: "Google", sector: "Tech" },
    { name: "Microsoft", sector: "Tech" },
    { name: "Amazon", sector: "Tech" },
    { name: "Meta", sector: "Tech" },
    { name: "Apple", sector: "Tech" },
    { name: "TCS", sector: "IT Services" },
    { name: "Infosys", sector: "IT Services" },
    { name: "Accenture", sector: "IT Services" },
    { name: "Wipro", sector: "IT Services" },
    { name: "IBM", sector: "IT Services" },
    { name: "Cisco", sector: "Networking" },
    { name: "Oracle", sector: "Enterprise" },
    { name: "Deloitte", sector: "Consulting" },
    { name: "McKinsey", sector: "Consulting" },
    { name: "Goldman Sachs", sector: "Finance" }
  ];

  const departments = [
    {
      name: "Computer Science Engineering",
      avgPackage: "₹22 LPA",
      highestPackage: "₹68 LPA",
      companies: "220+ Companies",
      placement: "98%",
      icon: Zap
    },
    {
      name: "Electronics & Communication",
      avgPackage: "₹14.5 LPA",
      highestPackage: "₹45 LPA",
      companies: "150+ Companies",
      placement: "95%",
      icon: Target
    },
    {
      name: "Electrical Engineering",
      avgPackage: "₹12.5 LPA",
      highestPackage: "₹38 LPA",
      companies: "110+ Companies",
      placement: "93%",
      icon: Award
    },
    {
      name: "Mechanical Engineering",
      avgPackage: "₹13.5 LPA",
      highestPackage: "₹42 LPA",
      companies: "140+ Companies",
      placement: "94%",
      icon: Trophy
    },
    {
      name: "Civil Engineering",
      avgPackage: "₹11 LPA",
      highestPackage: "₹32 LPA",
      companies: "95+ Companies",
      placement: "91%",
      icon: Building2
    },
  ];

  const placements = [
    { year: "2024", total: "720", avg: "₹15.8 LPA", placed: "692" },
    { year: "2023", total: "680", avg: "₹14.5 LPA", placed: "648" },
    { year: "2022", total: "650", avg: "₹13.2 LPA", placed: "618" },
  ];

  const careerServices = [
    {
      icon: Users,
      title: "Resume & Profile Building",
      description: "Professional guidance for crafting impactful resumes, LinkedIn profiles, and portfolios"
    },
    {
      icon: Building2,
      title: "Interview Preparation",
      description: "Comprehensive training for technical, HR, and group discussion rounds"
    },
    {
      icon: TrendingUp,
      title: "Career Counseling",
      description: "One-on-one guidance for career path planning and skill development"
    },
    {
      icon: Target,
      title: "Aptitude Training",
      description: "Coaching for placement tests, coding challenges, and competitive exams"
    },
    {
      icon: Award,
      title: "Industry Mentorship",
      description: "Connect with successful MITS alumni and industry professionals"
    },
    {
      icon: Zap,
      title: "Internship Programs",
      description: "Placement in paid internships at leading companies during course period"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/50 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-secondary/80 font-semibold tracking-widest uppercase text-sm mb-4">Career Excellence</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Launch Your Global Career
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Connect with 250+ leading organizations and secure your future with competitive packages and growth opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bg-card border border-border rounded-xl p-8 text-center hover:border-secondary/50 hover:shadow-lg transition-all hover:scale-105">
                  <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <p className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.number}</p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Department-wise Performance */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Performance Excellence</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Department-wise Statistics</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Detailed placement metrics across all engineering and science departments</p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {departments.map((dept, i) => {
              const Icon = dept.icon;
              return (
                <Card key={i} className="border-border hover:border-secondary/50 hover:shadow-xl transition-all hover:-translate-y-2 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-8 h-8 text-secondary" />
                        <h3 className="text-xl font-bold text-foreground">{dept.name}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-secondary">{dept.placement}</p>
                      <p className="text-xs text-muted-foreground">Placement Rate</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-muted-foreground">Average Package</span>
                      <span className="font-bold text-secondary text-lg">{dept.avgPackage}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-muted-foreground">Highest Package</span>
                      <span className="font-bold text-secondary text-lg">{dept.highestPackage}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Recruiting Companies</span>
                      <span className="font-bold text-foreground">{dept.companies}</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Yearly Trend */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Consistent Growth</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Year-on-Year Growth</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {placements.map((placement, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-secondary/50 transition-all hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{placement.year} Batch</h3>
                      <p className="text-muted-foreground">Comprehensive placement metrics</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">Total Students</p>
                        <p className="text-3xl font-bold text-foreground">{placement.total}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">Placement Rate</p>
                        <p className="text-3xl font-bold text-secondary">{((parseInt(placement.placed) / parseInt(placement.total)) * 100).toFixed(1)}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">Average Package</p>
                        <p className="text-3xl font-bold text-primary">{placement.avg}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Recruiters */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Global Companies</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Top Recruiting Companies</h2>
            <p className="text-lg text-muted-foreground mt-4">Trusted by the world's leading organizations</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {topRecruiters.map((company, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-secondary/50 transition-all hover:shadow-lg group">
                  <p className="font-bold text-foreground group-hover:text-secondary transition-colors mb-2">{company.name}</p>
                  <p className="text-xs text-muted-foreground">{company.sector}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Services */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Professional Development</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Comprehensive Career Support</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Complete ecosystem for career preparation and placement success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {careerServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Card key={i} className="border-border hover:border-secondary/50 hover:shadow-xl transition-all hover:-translate-y-2 p-8">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl p-16 text-center max-w-3xl mx-auto border border-secondary/40">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-4">Ready to Launch Your Career?</h2>
            <p className="text-secondary-foreground/90 text-lg mb-10">
              Join thousands of MITS graduates working with Fortune 500 companies and startups worldwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 font-semibold text-lg px-8 py-6 inline-flex items-center gap-2">
                Start Your Journey <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold text-lg px-8 py-6">
                Explore Internships
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Placements;
