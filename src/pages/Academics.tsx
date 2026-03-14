import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, Users, BookOpen, Zap, Award, Target, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Academics = () => {
  const programs = [
    {
      category: "Engineering",
      courses: [
        { name: "Computer Science & Engineering", duration: "4 Years", students: "180/Year", rating: "4.9/5" },
        { name: "Electronics & Communication Engineering", duration: "4 Years", students: "90/Year", rating: "4.8/5" },
        { name: "Electrical & Electronics Engineering", duration: "4 Years", students: "90/Year", rating: "4.7/5" },
        { name: "Mechanical Engineering", duration: "4 Years", students: "90/Year", rating: "4.8/5" },
        { name: "Civil Engineering", duration: "4 Years", students: "90/Year", rating: "4.6/5" },
      ]
    },
    {
      category: "Science",
      courses: [
        { name: "Physics", duration: "3 Years", students: "60/Year", rating: "4.7/5" },
        { name: "Chemistry", duration: "3 Years", students: "60/Year", rating: "4.7/5" },
        { name: "Biological Sciences", duration: "3 Years", students: "60/Year", rating: "4.6/5" },
        { name: "Mathematics", duration: "3 Years", students: "60/Year", rating: "4.8/5" },
      ]
    },
    {
      category: "Postgraduate",
      courses: [
        { name: "M.Tech - Computer Science", duration: "2 Years", students: "30/Year", rating: "4.9/5" },
        { name: "M.Tech - Electronics", duration: "2 Years", students: "20/Year", rating: "4.8/5" },
        { name: "M.Sc - Advanced Mathematics", duration: "2 Years", students: "20/Year", rating: "4.7/5" },
        { name: "MBA", duration: "2 Years", students: "60/Year", rating: "4.8/5" },
      ]
    },
  ];

  const features = [
    { icon: BookOpen, title: "Industry-Aligned Curriculum", description: "Programs designed with industry experts ensuring relevance to current job market and future technologies" },
    { icon: Users, title: "Expert Faculty", description: "Highly qualified PhD faculty with 15+ years experience and active research collaborations" },
    { icon: Zap, title: "State-of-the-art Labs", description: "Advanced laboratories with latest equipment for hands-on learning and research" },
    { icon: Globe, title: "International Partnerships", description: "Collaborations with 50+ universities worldwide for student exchange and joint programs" },
  ];

  const stats = [
    { number: "500+", label: "Annual Graduates" },
    { number: "15:1", label: "Student-Faculty Ratio" },
    { number: "95%+", label: "Overall Placement" },
    { number: "50+", label: "International Partnerships" },
  ];

  const learningOutcomes = [
    "Master core concepts with strong theoretical and practical foundation",
    "Develop critical thinking and innovative problem-solving abilities",
    "Gain hands-on experience through capstone projects and internships",
    "Build professional communication and collaboration skills",
    "Understand ethical responsibilities and societal impact of engineering",
    "Prepare for lifelong learning and professional certifications",
    "Develop entrepreneurial mindset and venture creation skills",
    "Excel in competitive exams and higher studies"
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
              <p className="text-secondary/80 font-semibold tracking-widest uppercase text-sm mb-4">Academic Programs</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Transform Your Future
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Comprehensive, industry-aligned programs designed to develop skilled professionals ready to lead in their fields and make global impact.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-6">
                  Explore Programs
                </Button>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-8 text-center hover:border-secondary/50 hover:shadow-lg transition-all">
                <p className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.number}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs & Courses */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Our Offerings</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Academic Programs</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Choose from our diverse range of engineering, science, and postgraduate programs</p>
          </div>

          <Tabs defaultValue="Engineering" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-card border border-border p-1 rounded-xl">
              {programs.map((prog) => (
                <TabsTrigger key={prog.category} value={prog.category} className="text-base font-semibold">{prog.category}</TabsTrigger>
              ))}
            </TabsList>

            {programs.map((prog) => (
              <TabsContent key={prog.category} value={prog.category}>
                <div className="space-y-6">
                  {prog.courses.map((course, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-secondary/50 hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-4">{course.name}</h3>
                          <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5 text-secondary" />
                              <span className="text-muted-foreground font-medium">{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-5 h-5 text-secondary" />
                              <span className="text-muted-foreground font-medium">{course.students}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Award className="w-5 h-5 text-secondary" />
                              <span className="text-muted-foreground font-medium">{course.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3 inline-flex items-center gap-2">
                          Learn More <ArrowRight size={18} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Why Study Here */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Why Study at MITS?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-secondary/50 hover:shadow-lg transition-all">
                    <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Skills Development</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Learning Outcomes</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">What you'll achieve through our rigorous curriculum</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {learningOutcomes.map((outcome, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center mt-1">
                    <Target className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Curriculum Highlights */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Curriculum Highlights</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Cutting-Edge Content", desc: "Regularly updated curriculum incorporating latest industry trends and technologies" },
              { title: "Practical Projects", desc: "Real-world projects, case studies, and capstone designs from industry partners" },
              { title: "Research Opportunities", desc: "Participate in published research and innovation projects with faculty mentors" },
              { title: "Industry Exposure", desc: "Guest lectures, industrial visits, and mentorship from practicing professionals" },
              { title: "Global Standards", desc: "Curriculum benchmarked against MIT, Stanford, and other global leaders" },
              { title: "Flexibility", desc: "Multiple electives and specializations to pursue your passion areas" }
            ].map((item, i) => (
              <Card key={i} className="border-border p-8 hover:border-secondary/50 hover:shadow-lg transition-all hover:-translate-y-2">
                <Award className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-bold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl p-16 text-center max-w-3xl mx-auto border border-secondary/40">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-4">Ready to Transform Your Future?</h2>
            <p className="text-secondary-foreground/90 text-lg mb-10">
              Join MITS and become part of a community that produces global leaders and innovators.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 font-semibold text-lg px-8 py-6 inline-flex items-center gap-2">
                Start Your Application <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold text-lg px-8 py-6">
                Schedule Campus Tour
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Academics;
