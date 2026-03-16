import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting MITS. We will get back to you soon."
    });

    setFormData({ name: "", email: "", phone: "", subject: "", category: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["MITS Campus", "Madanapalle, Andhra Pradesh - 517325", "India"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-8571-244444", "+91-8571-244445", "+91-8571-244446"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["admissions@mits.ac.in", "info@mits.ac.in", "careers@mits.ac.in"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:30 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"]
    },
  ];

  const departments = [
    { name: "Admissions", email: "admissions@mits.ac.in" },
    { name: "Academic", email: "academic@mits.ac.in" },
    { name: "Placements", email: "placements@mits.ac.in" },
    { name: "Research", email: "research@mits.ac.in" },
    { name: "General Inquiry", email: "info@mits.ac.in" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">Get in Touch</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                We'd love to hear from you. Reach out to us with any questions or inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <Card key={i} className="border-border p-6 text-center hover:border-secondary/50 transition-all">
                  <Icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-3">{info.title}</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    {info.details.map((detail, j) => (
                      <p key={j}>{detail}</p>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Form */}
              <div className="md:col-span-3">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground mb-2 block">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="border-border"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-foreground mb-2 block">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground mb-2 block">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91-XXXXXXXXXX"
                        className="border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground mb-2 block">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this about?"
                      className="border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category" className="text-foreground mb-2 block">Category *</Label>
                    <Select value={formData.category} onValueChange={handleSelectChange}>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admissions">Admissions</SelectItem>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="placements">Placements</SelectItem>
                        <SelectItem value="research">Research</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground mb-2 block">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message here..."
                      rows={6}
                      className="border-border resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold inline-flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </Button>
                </form>
              </div>

              {/* Department Contacts */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-foreground mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, i) => (
                    <div key={i} className="bg-card border border-border rounded-lg p-4 hover:border-secondary/50 transition-all">
                      <h4 className="font-bold text-foreground text-sm mb-2">{dept.name}</h4>
                      <a href={`mailto:${dept.email}`} className="text-secondary text-sm hover:underline break-words">
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg p-6 border border-secondary/20">
                  <h4 className="font-bold text-foreground mb-3">Quick Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>For admissions queries, contact our admissions office</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Placement queries should be directed to career services</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Response time: 24-48 business hours</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Find Us</h2>
          </div>
          <div className="bg-card border border-border rounded-lg overflow-hidden h-96">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="MITS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.5482568169533!2d78.30249!3d13.19847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc2b2b2b2b2b2b%3A0x2b2b2b2b2b2b2b2b!2sMadanapalle%20Institute%20of%20Technology%20and%20Science!5e0!3m2!1sen!2sin!4v1234567890"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
