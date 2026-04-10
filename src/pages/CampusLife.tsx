import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Play, Pause, ArrowRight, Calendar, MapPin, Users, Award, Sparkles, BookOpen, Mic2, Dumbbell, Building2, Home, Music, Palette, Theater, Trophy, FlaskConical, Laptop } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

// ============================================
// EXPERIENCE CARDS DATA
// ============================================
const experienceCards = [
  {
    id: "cultural",
    title: "Cultural Life (ASHV)",
    description: "Immerse yourself in vibrant traditions, festivals, and artistic expressions that celebrate diversity and creativity.",
    image: `${BASE}news-events/smruthi-sangamam.jpg`,
    icon: Sparkles,
    stats: "50+ Events Annually",
  },
  {
    id: "technical",
    title: "Technical Activities",
    description: "Cutting-edge hackathons, robotics competitions, innovation challenges, and tech symposiums that shape future leaders.",
    image: `${BASE}news-events/aimex-2026.jpg`,
    icon: FlaskConical,
    stats: "20+ Technical Clubs",
  },
  {
    id: "clubs",
    title: "Student Clubs",
    description: "From music to entrepreneurship, find your passion and connect with like-minded peers in our thriving club ecosystem.",
    image: `${BASE}Hero-Section/image%202.JPG`,
    icon: Users,
    stats: "15+ Active Clubs",
  },
  {
    id: "sports",
    title: "Sports & Fitness",
    description: "State-of-the-art sports complex with indoor arenas, outdoor fields, and professional training facilities.",
    image: `${BASE}news-events/3k-run.jpg`,
    icon: Dumbbell,
    stats: "Olympic Standard Facilities",
  },
  {
    id: "hostel",
    title: "Hostel Life",
    description: "Modern residential facilities with round-the-clock security, WiFi connectivity, and a thriving community atmosphere.",
    image: `${BASE}Hero-Section/image%205.JPG`,
    icon: Home,
    stats: "5000+ Students Hosted",
  },
  {
    id: "infrastructure",
    title: "Campus Infrastructure",
    description: "World-class laboratories, libraries, auditoriums, and green spaces designed for holistic development.",
    image: `${BASE}Hero-Section/image%201.JPG`,
    icon: Building2,
    stats: "100+ Acres Campus",
  },
];

// ============================================
// ASHV FESTIVAL GALLERY
// ============================================
const ashvGallery = [
  {
    id: 1,
    title: "ASHV Cultural Night",
    description: "The grand finale of our annual cultural festival",
    image: `${BASE}news-events/smruthi-sangamam.jpg`,
  },
  {
    id: 2,
    title: "Dance & Music Performances",
    description: "Students showcase their talents on a grand stage",
    image: `${BASE}Hero-Section/image%202.JPG`,
  },
  {
    id: 3,
    title: "Student Fest Celebrations",
    description: "Days of excitement, competition, and camaraderie",
    image: `${BASE}Hero-Section/image%203.JPG`,
  },
  {
    id: 4,
    title: "Technical Symposiums",
    description: "Innovation meets competition at AIMEX",
    image: `${BASE}news-events/aimex-2026.jpg`,
  },
];

// ============================================
// STUDENT LIFE STORIES
// ============================================
const lifeStories = [
  {
    id: 1,
    title: "Innovation Labs",
    description: "Our state-of-the-art innovation labs provide students with hands-on experience in cutting-edge technologies. From AI and ML to IoT and robotics, students work on real-world projects that transform ideas into impactful solutions.",
    image: `${BASE}news-events/aimex-2026.jpg`,
    stats: "50+ Research Projects",
    reverse: false,
  },
  {
    id: 2,
    title: "Cultural Diversity",
    description: "MITS celebrates the rich tapestry of Indian culture with students from over 25 states. Our campus is a melting pot of traditions, languages, and perspectives, fostering global understanding and unity.",
    image: `${BASE}Hero-Section/image%204.JPG`,
    stats: "25+ States Represented",
    reverse: true,
  },
  {
    id: 3,
    title: "Student Collaboration",
    description: "Teamwork is at the heart of the MITS experience. Students collaborate across disciplines, participate in group projects, and build lifelong friendships that extend far beyond the classroom.",
    image: `${BASE}Hero-Section/image%202.JPG`,
    stats: "100+ Team Projects",
    reverse: false,
  },
  {
    id: 4,
    title: "Campus Environment",
    description: "Nestled in the scenic hills of Madanapalle, our campus offers a perfect blend of natural beauty and modern infrastructure. The lush green surroundings create an ideal atmosphere for learning and personal growth.",
    image: `${BASE}Hero-Section/image%201.JPG`,
    stats: "100 Acres of Green Space",
    reverse: true,
  },
];

// ============================================
// CAMPUS GALLERY
// ============================================
const campusGallery = [
  { id: 1, image: `${BASE}Hero-Section/image%201.JPG`, title: "Main Building" },
  { id: 2, image: `${BASE}Hero-Section/image%202.JPG`, title: "Student Activities" },
  { id: 3, image: `${BASE}Hero-Section/image%203.JPG`, title: "Campus View" },
  { id: 4, image: `${BASE}Hero-Section/image%204.JPG`, title: "Academic Block" },
  { id: 5, image: `${BASE}Hero-Section/image%205.JPG`, title: "Hostel Complex" },
  { id: 6, image: `${BASE}Hero-Section/image%206.jpg`, title: "Sports Ground" },
  { id: 7, image: `${BASE}news-events/smruthi-sangamam.jpg`, title: "Cultural Events" },
  { id: 8, image: `${BASE}news-events/aimex-2026.jpg`, title: "Technical Events" },
  { id: 9, image: `${BASE}news-events/3k-run.jpg`, title: "Sports Events" },
];

// ============================================
// FACILITIES
// ============================================
const facilities = [
  {
    id: 1,
    title: "Central Library",
    description: "A treasure trove of knowledge with over 50,000 books, digital resources, and quiet study spaces.",
    image: `${BASE}librery/library.webp`,
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Research Laboratories",
    description: "State-of-the-art labs for every department, equipped with industry-standard equipment.",
    image: `${BASE}news-events/aimex-2026.jpg`,
    icon: FlaskConical,
  },
  {
    id: 3,
    title: "Sports Complex",
    description: "Indoor and outdoor facilities for cricket, basketball, volleyball, and athletics.",
    image: `${BASE}news-events/3k-run.jpg`,
    icon: Dumbbell,
  },
  {
    id: 4,
    title: "Auditorium",
    description: "A 2000-seat air-conditioned auditorium for conferences, seminars, and cultural programs.",
    image: `${BASE}Hero-Section/image%202.JPG`,
    icon: Mic2,
  },
  {
    id: 5,
    title: "Hostels",
    description: "Separate comfortable hostels for boys and girls with modern amenities and 24/7 security.",
    image: `${BASE}Hero-Section/image%205.JPG`,
    icon: Home,
  },
  {
    id: 6,
    title: "Computer Center",
    description: "High-speed computing facilities with the latest software and 24/7 internet access.",
    image: `${BASE}Hero-Section/image%203.JPG`,
    icon: Laptop,
  },
];

// ============================================
// COMPONENTS
// ============================================

// Cinematic Hero Section
const CinematicHero = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToContent = () => {
    document.getElementById("experience-cards")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={`${BASE}Hero-Section/college%20video.mp4`}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />

      {/* Animated Particles/Shimmer Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y: y2, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent font-semibold text-sm tracking-[0.2em] uppercase">
            Life at MITS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          Where Learning Meets{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent">
            Experience
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 font-light"
        >
          Culture, Innovation, and Endless Possibilities Await
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/admissions">
            <button className="group relative px-8 py-4 bg-primary text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40">
              <span className="relative z-10 flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
          </Link>
          <button
            onClick={scrollToContent}
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Explore Campus
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToContent}
        >
          <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Experience Card with 3D Tilt Effect
const ExperienceCard = ({ card, index }: { card: typeof experienceCards[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-[400px] md:h-[450px] w-full"
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full overflow-hidden rounded-2xl cursor-pointer group"
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={card.image}
            alt={card.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </div>

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'bg-gradient-to-t from-black/90 via-black/50 to-transparent' : 'bg-gradient-to-t from-black/70 via-black/30 to-transparent'}`} />

        {/* Glassmorphism Overlay */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'bg-white/5 backdrop-blur-sm' : ''}`} />

        {/* Content */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-20'}`}>
          {/* Icon */}
          <div className={`flex items-center gap-3 mb-3 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
            <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-md flex items-center justify-center">
              <card.icon className="w-6 h-6 text-accent" />
            </div>
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">
              {card.stats}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            {card.title}
          </h3>

          {/* Description */}
          <p className={`text-white/70 text-sm md:text-base leading-relaxed transition-all duration-500 ${isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            {card.description}
          </p>

          {/* Explore More Link */}
          <div className={`mt-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
              Explore More
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Corner Accent */}
        <div className={`absolute top-4 right-4 w-16 h-16 border-2 border-accent/30 rounded-full transition-all duration-500 ${isHovered ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
      </div>
    </motion.div>
  );
};

// ASHV Festival Showcase
const ASHVShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ashvGallery.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section className="relative py-24 bg-navy-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #b30000 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, #caa74d 0%, transparent 50%)`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
              Annual Cultural Festival
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              ASHV <span className="text-accent">Festival</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The most awaited cultural extravaganza that brings together students from across the nation
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Showcase */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group"
            >
              <img
                src={ashvGallery[activeIndex].image}
                alt={ashvGallery[activeIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Play/Pause Button */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                  {ashvGallery[activeIndex].title}
                </h3>
                <p className="text-white/70">{ashvGallery[activeIndex].description}</p>
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 gap-4">
              {ashvGallery.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative h-[240px] rounded-xl overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'ring-2 ring-accent ring-offset-2 ring-offset-navy-gradient' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Festival Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Calendar, label: "Duration", value: "3 Days" },
            { icon: Users, label: "Participants", value: "5000+" },
            { icon: Award, label: "Events", value: "100+" },
          ].map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-white/60 text-sm uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-white text-2xl font-bold">{stat.value}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Student Life Story Section
const StudentLifeStory = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
              Beyond Classroom
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              The MITS <span className="text-primary">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover a world of opportunities, friendships, and memories that last a lifetime
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {lifeStories.map((story, index) => (
            <ScrollReveal key={story.id} direction={story.reverse ? "right" : "left"}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${story.reverse ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`relative ${story.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden group">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Stats Badge */}
                    <div className="absolute bottom-6 left-6 bg-accent text-accent-foreground px-5 py-3 rounded-xl font-bold shadow-lg">
                      {story.stats}
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-xl -z-10" />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full -z-10" />
                </div>

                {/* Content */}
                <div className={story.reverse ? 'lg:order-1' : 'lg:order-2'}>
                  <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
                    0{story.id}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Campus Gallery with Lightbox
const CampusGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % campusGallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + campusGallery.length) % campusGallery.length);
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
              Our Campus
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Our <span className="text-primary">Campus</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take a visual journey through our world-class facilities and vibrant campus life
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {campusGallery.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => openLightbox(index)}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronDown className="w-6 h-6 rotate-90" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronDown className="w-6 h-6 -rotate-90" />
              </button>

              {/* Image */}
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-w-5xl max-h-[80vh] px-16"
              >
                <img
                  src={campusGallery[currentImage].image}
                  alt={campusGallery[currentImage].title}
                  className="w-full h-full object-contain"
                />
                <p className="text-white text-center mt-4 text-lg font-semibold">
                  {campusGallery[currentImage].title}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Facilities Showcase
const FacilitiesShowcase = () => {
  return (
    <section className="py-24 bg-navy-gradient">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
              World-Class Infrastructure
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-accent">Facilities</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              State-of-the-art amenities designed to support your academic and personal growth
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <ScrollReveal key={facility.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-primary/90 group-hover:via-primary/70 transition-all duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <facility.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2 group-hover:text-white/90 transition-colors">
                    {facility.description}
                  </p>
                </div>

                {/* Hover Accent */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={`${BASE}Hero-Section/image%204.JPG`}
          alt="Join Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Begin Your Journey at MITS
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Join a community of innovators, leaders, and change-makers. Experience education that goes beyond textbooks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <button className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Apply Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                  Visit Campus
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
const CampusLife = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Cinematic Hero */}
        <CinematicHero />

        {/* Experience Cards Section */}
        <section id="experience-cards" className="py-24 bg-navy-gradient">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
                  Discover Life at MITS
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                  Experience <span className="text-accent">Campus Life</span>
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                  From academics to extracurriculars, discover a world of opportunities waiting for you
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experienceCards.map((card, index) => (
                <ExperienceCard key={card.id} card={card} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ASHV Festival Showcase */}
        <ASHVShowcase />

        {/* Student Life Stories */}
        <StudentLifeStory />

        {/* Campus Gallery */}
        <CampusGallery />

        {/* Facilities Showcase */}
        <FacilitiesShowcase />

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CampusLife;
