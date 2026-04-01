import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Award, BookOpen, Building2, GraduationCap, History, Landmark, Shield, Star, Target, Eye, Users, MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const BASE = import.meta.env.BASE_URL;

const achievements = [
  { icon: Award, title: "NAAC A+ Accredited", desc: "Highest grade by the National Assessment and Accreditation Council." },
  { icon: Shield, title: "UGC Recognized", desc: "Recognized under Sections 2(f) & 12(B) of UGC Act." },
  { icon: Star, title: "NBA Accredited", desc: "Multiple programs accredited by the National Board of Accreditation." },
  { icon: Landmark, title: "NIRF Ranked", desc: "Consistently ranked in the NIRF Engineering category (201-300 band)." },
  { icon: BookOpen, title: "AICTE Approved", desc: "All engineering programs are approved by AICTE." },
  { icon: GraduationCap, title: "Deemed to be University", desc: "Declared as Deemed to be University u/s 3 of UGC Act, 1956." },
];

const leadership = [
  { name: "Dr. N. Vijaya Bhaskar Choudary", role: "Chancellor", desc: "Visionary leader guiding MITS towards global academic excellence." },
  { name: "Dr. C. Yuvaraj", role: "Vice-Chancellor", desc: "Driving academic reforms and research initiatives across all schools." },
  { name: "Dr. Pradeep Kumar", role: "Registrar", desc: "Overseeing administrative operations and institutional governance." },
];

const infrastructure = [
  { icon: Building2, title: "100+ Acre Campus", desc: "Sprawling green campus with modern academic blocks and amenities." },
  { icon: BookOpen, title: "Central Library", desc: "50,000+ volumes, e-journals, digital resources, and reading halls." },
  { icon: Users, title: "Smart Classrooms", desc: "ICT-enabled classrooms with projectors and interactive learning tools." },
  { icon: GraduationCap, title: "Research Labs", desc: "Advanced laboratories for engineering, sciences, and computing disciplines." },
];

const contactInfo = [
  { icon: MapPin, title: "Address", lines: ["Post Box No. 4, Angallu", "Madanapalle – 517325", "Annamayya District, Andhra Pradesh"] },
  { icon: Phone, title: "Phone", lines: ["+91 8571 280255", "+91 8571 280256"] },
  { icon: Mail, title: "Email", lines: ["info@mits.ac.in", "admissions@mits.ac.in"] },
  { icon: Clock, title: "Office Hours", lines: ["Mon – Fri: 9:00 AM – 5:00 PM", "Sat: 9:00 AM – 1:00 PM"] },
];

const About = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We will get back to you shortly." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative pt-32 md:pt-40 pb-20 overflow-hidden"
          style={{
            backgroundImage: `url(${BASE}Hero-Section/image%205.JPG)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/75" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">About MITS</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Shaping Futures <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Since 1998</span>
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Madanapalle Institute of Technology & Science — a premier institution committed to academic excellence, research innovation, and holistic development.
            </p>
          </div>
          <div className="absolute bottom-4 left-6 z-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm">
                <li><a href="/" className="text-white/70 hover:text-white transition-colors">Home</a></li>
                <li className="text-white/50">›</li>
                <li className="text-white font-semibold">About</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* History */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="flex items-center gap-3 mb-4">
                  <History className="w-8 h-8 text-primary" />
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our History</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Established in 1998, Madanapalle Institute of Technology & Science (MITS) was founded under the aegis of the Ratakonda Ranga Reddy Educational Academy. Over the past 27 years, MITS has evolved from a regional engineering college into a Deemed to be University, recognized by UGC.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  The institution is located in Madanapalle, Annamayya District, Andhra Pradesh, nestled in the scenic Horsely Hills region. MITS has consistently expanded its academic offerings and research capabilities, earning NAAC A+ accreditation and NBA recognition for multiple programs.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Today, MITS serves over 12,000 students across 4 schools — Engineering, Computing, Management, and Science — with 600+ faculty members and a growing network of global academic and industry partners.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <img
                  src={`${BASE}Hero-Section/image%201.JPG`}
                  alt="MITS Campus"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Vision & Mission</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ScrollReveal direction="left">
                <div className="bg-card border border-border rounded-xl p-8 shadow-sm h-full">
                  <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-5">
                    <Eye className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a globally respected institution known for innovation, ethics, and future-ready education that empowers learners to become responsible citizens and leaders.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="bg-card border border-border rounded-xl p-8 shadow-sm h-full">
                  <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-5">
                    <Target className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To serve the region, nation, and world through academic excellence, research relevance, and community engagement while fostering an environment of holistic learning.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Administration</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leadership.map((person, i) => (
                <ScrollReveal key={person.name} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-20 h-20 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                      <Users className="w-10 h-10 text-secondary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-card-foreground mb-1">{person.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-2">{person.role}</p>
                    <p className="text-muted-foreground text-sm">{person.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Recognition</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Institutional Achievements</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {achievements.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div className="bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Facilities</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Infrastructure Overview</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {infrastructure.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Reach Us</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
              {contactInfo.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm text-center h-full hover:shadow-lg transition-all">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-primary flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-muted-foreground text-sm">{line}</p>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Form & Map */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ScrollReveal direction="left">
                <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                  <h2 className="font-display text-2xl font-bold text-card-foreground mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                      <input
                        type="text"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                    <textarea
                      placeholder="Your Message *"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    />
                    <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 rounded-full">
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d78.4867!3d13.5535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb28cb0e7c5b5e7%3A0xae7e3e8c1b9e3f47!2sMadanapalle%20Institute%20of%20Technology%20%26%20Science!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MITS Location"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
