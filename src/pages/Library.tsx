import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, Clock, Globe, Monitor, Search, Users, Wifi, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import campusLibrary from "@/assets/campus-library.png";

const resources = [
  { icon: BookOpen, title: "50,000+ Volumes", desc: "Extensive collection of textbooks, reference books, and periodicals across all disciplines." },
  { icon: Globe, title: "Digital Library", desc: "Access to DELNET, NPTEL, Swayam, and other digital repositories for e-learning resources." },
  { icon: Monitor, title: "E-Journals & Databases", desc: "Subscriptions to IEEE, Springer, Elsevier, and other research journal databases." },
  { icon: Search, title: "OPAC Search", desc: "Online Public Access Catalogue for easy search and location of library resources." },
  { icon: Users, title: "Reading Halls", desc: "Spacious reading halls with seating capacity for 500+ students simultaneously." },
  { icon: Wifi, title: "Wi-Fi Enabled", desc: "Entire library campus is Wi-Fi enabled for seamless digital access." },
];

const galleryImages = [
  campusLibrary,
  "https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg",
  "https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg",
  "https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg",
  "https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg",
  "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg",
  "https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg",
];

const stats = [
  { value: "50,000+", label: "Books & Volumes", icon: BookOpen },
  { value: "5,000+", label: "E-Journals", icon: Monitor },
  { value: "500+", label: "Seating Capacity", icon: Users },
  { value: "14 Hrs", label: "Daily Access", icon: Clock },
];

const Library = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 overflow-hidden">
          <img src={galleryImages[0]} alt="Library Hero" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <ScrollReveal>
              <Badge className="mb-4 text-lg bg-accent/80">Knowledge Hub</Badge>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Central Library</h1>
              <p className="text-white/80 text-xl max-w-3xl mx-auto mb-8">
                A modern library supporting academic excellence with print, digital, and research resources.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <Card key={stat.label} className="flex flex-col items-center justify-center p-6 shadow-lg hover:shadow-xl transition-all">
                  <stat.icon className="w-10 h-10 text-accent mb-3" />
                  <p className="font-display text-4xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-primary-foreground/70 text-base">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Carousel */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Library Gallery</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Explore our vibrant library spaces and resources</p>
              </div>
            </ScrollReveal>
            <div className="max-w-4xl mx-auto relative">
              <Carousel>
                <CarouselContent>
                  {galleryImages.map((img, i) => (
                    <CarouselItem key={i} className="flex items-center justify-center">
                      <img src={img} alt={`Library Gallery ${i + 1}`} className="rounded-2xl shadow-lg w-full h-96 object-cover" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Features/Resources Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Library Resources</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {resources.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <Card className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <item.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timings Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Library Timings</h2>
              <Card className="max-w-md mx-auto bg-card border border-border rounded-xl p-6 shadow-md">
                <div className="space-y-3 text-base">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Monday – Friday</span>
                    <span className="font-semibold text-card-foreground">8:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Saturday</span>
                    <span className="font-semibold text-card-foreground">9:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Sunday & Holidays</span>
                    <span className="font-semibold text-card-foreground">Closed</span>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Library;
