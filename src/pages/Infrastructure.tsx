import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Trophy, Bus, Heart, UtensilsCrossed, Library, Radio,
  Lightbulb, Monitor, MessageSquare, Wifi, ChevronLeft, ChevronRight,
  ZoomIn, X,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const BASE = import.meta.env.BASE_URL;

// ─── Palette ────────────────────────────────────────────────────────────────
const DARK_NAVY   = "#0f2a44";
const MITS_RED    = "#b30000";
const GOLD        = "#caa74d";
const SLATE       = "#475569";
const BORDER      = "#e2e8f0";

// ─── Campus Detail Images (hero per section) ────────────────────────────────
const campusImages: Record<string, string> = {
  sports:         `${BASE}infrastructure/sports/ground-1.JPG`,
  transport:      `${BASE}infrastructure/transport/transport-1.JPG`,
  dispensary:     `${BASE}infrastructure/dispensary/dispensary-1.JPG`,
  canteen:        `${BASE}infrastructure/canteen/canteen-1.JPG`,
  wifi:           `${BASE}gallery/wifi1.jpg`,
  library:        `${BASE}infrastructure/library/library-1.webp`,
  "digital-library": `${BASE}infrastructure/labs-library/lab-9.JPG`,
  radio:          `${BASE}infrastructure/radio-station/radio-1.JPG`,
  "aicte-idea":   `${BASE}infrastructure/aicte-lab/aicte-1.JPG`,
  computer:       `${BASE}infrastructure/labs-library/lab-1.JPG`,
  "comm-lab":     `${BASE}infrastructure/labs-library/lab-7.JPG`,
  hero:           `${BASE}gallery/main entrance.JPG`,
};

// ─── Gallery Images per Section ─────────────────────────────────────────────
const galleryImages: Record<string, { src: string; alt: string }[]> = {
  sports: [
    { src: `${BASE}infrastructure/sports/ground-1.JPG`, alt: "Sports Ground - View 1" },
    { src: `${BASE}infrastructure/sports/ground-2.JPG`, alt: "Sports Ground - View 2" },
    { src: `${BASE}infrastructure/sports/sports-1.jpg`, alt: "Sports Activities" },
    { src: `${BASE}infrastructure/sports/sports-2.JPG`, alt: "Sports Facilities" },
    { src: `${BASE}infrastructure/sports/sports-3.JPG`, alt: "Athletic Track" },
    { src: `${BASE}infrastructure/sports/sports-4.JPG`, alt: "Outdoor Sports" },
    { src: `${BASE}infrastructure/gym/gym-1.JPG`, alt: "Gymnasium - View 1" },
    { src: `${BASE}infrastructure/gym/gym-2.JPG`, alt: "Gymnasium Equipment" },
    { src: `${BASE}infrastructure/gym/gym-3.JPG`, alt: "Indoor Gym" },
    { src: `${BASE}infrastructure/gym/gym-4.JPG`, alt: "Fitness Center" },
    { src: `${BASE}infrastructure/gym/gym-5.JPG`, alt: "Gym Training Area" },
  ],
  transport: [
    { src: `${BASE}infrastructure/transport/transport-1.JPG`, alt: "Transport Fleet - View 1" },
    { src: `${BASE}infrastructure/transport/transport-2.JPG`, alt: "Transport Fleet - View 2" },
    { src: `${BASE}infrastructure/transport/transport-3.JPG`, alt: "College Buses" },
    { src: `${BASE}infrastructure/transport/transport-4.JPG`, alt: "Bus Parking Area" },
    { src: `${BASE}infrastructure/transport/transport-5.JPG`, alt: "Transport Facilities" },
  ],
  dispensary: [
    { src: `${BASE}infrastructure/dispensary/dispensary-1.JPG`, alt: "Dispensary - Main Entrance" },
    { src: `${BASE}infrastructure/dispensary/dispensary-2.JPG`, alt: "Medical Facility" },
    { src: `${BASE}infrastructure/dispensary/dispensary-3.JPG`, alt: "Consultation Room" },
    { src: `${BASE}infrastructure/dispensary/dispensary-4.JPG`, alt: "Health Center" },
    { src: `${BASE}infrastructure/dispensary/dispensary-5.JPG`, alt: "Medical Equipment" },
  ],
  canteen: [
    { src: `${BASE}infrastructure/canteen/canteen-1.JPG`, alt: "Canteen - Main Hall" },
    { src: `${BASE}infrastructure/canteen/canteen-2.JPG`, alt: "Dining Area" },
    { src: `${BASE}infrastructure/canteen/canteen-3.JPG`, alt: "Food Court" },
    { src: `${BASE}infrastructure/canteen/canteen-4.JPG`, alt: "Kitchen Facilities" },
    { src: `${BASE}infrastructure/canteen/canteen-5.JPG`, alt: "Seating Area" },
  ],
  wifi: [
    { src: `${BASE}gallery/wifi1.jpg`, alt: "Wi-Fi Router Setup" },
    { src: `${BASE}gallery/wifi2.jpg`, alt: "Network Server Rack" },
    { src: `${BASE}gallery/wifi3.jpg`, alt: "Server Room Panel" },
    { src: `${BASE}gallery/biometric authentication.jpg`, alt: "Biometric Authentication" },
    { src: `${BASE}gallery/camera.jpg`, alt: "CCTV Security camera" },
    { src: `${BASE}gallery/camera2.jpg`, alt: "CCTV Security System" },
  ],
  library: [
    { src: `${BASE}infrastructure/library/library-1.webp`, alt: "Central Library - Main Hall" },
    { src: `${BASE}infrastructure/library/library-2.webp`, alt: "Reading Section" },
    { src: `${BASE}infrastructure/library/library-3.webp`, alt: "Book Collection" },
    { src: `${BASE}infrastructure/library/library-4.webp`, alt: "Library Interior" },
    { src: `${BASE}infrastructure/labs-library/library-photo.JPG`, alt: "Library Overview" },
  ],
  "digital-library": [
    { src: `${BASE}infrastructure/labs-library/lab-9.JPG`, alt: "Digital Library - Terminals" },
    { src: `${BASE}infrastructure/labs-library/lab-10.JPG`, alt: "Digital Resource Center" },
    { src: `${BASE}infrastructure/labs-library/lab-11.JPG`, alt: "E-Library Section" },
    { src: `${BASE}infrastructure/labs-library/lab-12.JPG`, alt: "Digital Access Area" },
  ],
  radio: [
    { src: `${BASE}infrastructure/radio-station/radio-1.JPG`, alt: "Radio Station - Studio" },
    { src: `${BASE}infrastructure/radio-station/radio-2.JPG`, alt: "Broadcasting Setup" },
    { src: `${BASE}infrastructure/radio-station/radio-3.JPG`, alt: "Recording Equipment" },
    { src: `${BASE}infrastructure/radio-station/radio-4.JPG`, alt: "Radio Control Room" },
    { src: `${BASE}infrastructure/radio-station/radio-5.JPG`, alt: "On-Air Studio" },
  ],
  "aicte-idea": [
    { src: `${BASE}infrastructure/aicte-lab/aicte-1.JPG`, alt: "AICTE Idea Lab - Overview" },
    { src: `${BASE}infrastructure/aicte-lab/aicte-2.JPG`, alt: "Innovation Hub" },
    { src: `${BASE}infrastructure/aicte-lab/aicte-3.JPG`, alt: "Prototyping Area" },
    { src: `${BASE}infrastructure/aicte-lab/aicte-4.JPG`, alt: "3D Printing Station" },
    { src: `${BASE}infrastructure/aicte-lab/aicte-5.JPG`, alt: "Workshop Space" },
  ],
  computer: [
    { src: `${BASE}infrastructure/labs-library/lab-1.JPG`, alt: "Computer Lab - View 1" },
    { src: `${BASE}infrastructure/labs-library/lab-2.JPG`, alt: "Computer Lab - View 2" },
    { src: `${BASE}infrastructure/labs-library/lab-3.JPG`, alt: "High-Performance Computing" },
    { src: `${BASE}infrastructure/labs-library/lab-4.JPG`, alt: "Server Room" },
    { src: `${BASE}infrastructure/labs-library/lab-5.JPG`, alt: "Computing Infrastructure" },
    { src: `${BASE}infrastructure/labs-library/lab-6.JPG`, alt: "Lab Equipment" },
  ],
  "comm-lab": [
    { src: `${BASE}infrastructure/labs-library/lab-7.JPG`, alt: "Communication Lab - View 1" },
    { src: `${BASE}infrastructure/labs-library/lab-8.JPG`, alt: "Language Lab Terminals" },
    { src: `${BASE}infrastructure/labs-library/lab-13.JPG`, alt: "Communication Skills Lab" },
    { src: `${BASE}infrastructure/labs-library/lab-14.JPG`, alt: "Practice Room" },
  ],
};

// ─── Facilities Data ─────────────────────────────────────────────────────────
const infrastructureItems = [
  {
    key: "sports", label: "Sports", icon: Trophy, title: "Sports & Athletics",
    desc: "MITS offers world-class sports infrastructure to promote physical fitness and competitive spirit among students.",
    points: [
      "Cricket ground with practice nets and pavilion",
      "Football, volleyball, and basketball courts",
      "Badminton and table tennis halls",
      "Athletics track and field facilities",
      "Indoor gymnasium with modern equipment",
      "Annual sports meet and inter-collegiate tournaments",
    ],
  },
  {
    key: "transport", label: "Transport", icon: Bus, title: "Transport Facilities",
    desc: "MITS provides safe and reliable transportation services covering Madanapalle and surrounding areas.",
    points: [
      "Fleet of 40+ buses covering 80+ km radius",
      "Routes covering Madanapalle, Tirupati, Chittoor, and nearby towns",
      "GPS-enabled buses for real-time tracking",
      "Dedicated routes for day scholars and staff",
      "Well-maintained vehicles with trained drivers",
      "Special transport for examination and events",
    ],
  },
  {
    key: "dispensary", label: "Dispensary", icon: Heart, title: "Health & Dispensary",
    desc: "A fully equipped on-campus dispensary ensures the health and well-being of all students and staff.",
    points: [
      "24/7 medical assistance on campus",
      "Qualified doctors and nursing staff",
      "First aid and emergency care facilities",
      "Tie-ups with nearby hospitals for referrals",
      "Regular health check-up camps",
      "Mental health and counseling support",
    ],
  },
  {
    key: "canteen", label: "Canteen", icon: UtensilsCrossed, title: "Canteen & Dining",
    desc: "Hygienic and affordable food services are available across the campus to cater to diverse tastes.",
    points: [
      "Main canteen with seating capacity of 500+",
      "Multiple food stalls across campus",
      "Vegetarian and non-vegetarian options",
      "Hygienic food preparation with regular audits",
      "Affordable meal plans for hostel students",
      "Special dietary options available on request",
    ],
  },
  {
    key: "wifi", label: "Wi-Fi", icon: Wifi, title: "Wi-Fi & Connectivity",
    desc: "High-speed internet connectivity is available across the entire campus for seamless academic and research activities.",
    points: [
      "Campus-wide Wi-Fi with 1 Gbps internet bandwidth",
      "500+ access points across academic and hostel blocks",
      "24/7 connectivity for students and faculty",
      "Secure network with firewall and content filtering",
      "Dedicated bandwidth for research and labs",
      "NKN (National Knowledge Network) connectivity",
    ],
  },
  {
    key: "library", label: "Library", icon: Library, title: "Central Library",
    desc: "The MITS Central Library is a knowledge hub with an extensive collection of books, journals, and digital resources.",
    points: [
      "50,000+ volumes across all disciplines",
      "Subscriptions to 100+ national and international journals",
      "Spacious reading halls with seating for 400+ students",
      "Separate sections for reference, periodicals, and thesis",
      "OPAC (Online Public Access Catalogue) system",
      "Extended library hours during examination periods",
    ],
  },
  {
    key: "digital-library", label: "Digital Library", icon: Monitor, title: "Digital Library",
    desc: "The Digital Library provides access to a vast repository of e-resources, online databases, and research tools.",
    points: [
      "Access to NPTEL, DELNET, and INFLIBNET N-LIST",
      "IEEE, Springer, Elsevier, and Scopus database access",
      "E-books and e-journals across all disciplines",
      "Dedicated digital library lab with 100+ terminals",
      "Remote access for students and faculty",
      "Plagiarism detection tools (Turnitin/iThenticate)",
    ],
  },
  {
    key: "radio", label: "Radio Station", icon: Radio, title: "Campus Radio Station",
    desc: "MITS operates a vibrant campus radio station that serves as a creative and communicative platform for students.",
    points: [
      "Licensed FM community radio station",
      "Student-run programming and content creation",
      "Broadcasts news, music, and educational content",
      "Platform for developing communication and media skills",
      "Regular shows on campus events and achievements",
      "Training in audio production and broadcasting",
    ],
  },
  {
    key: "aicte-idea", label: "AICTE Idea Lab", icon: Lightbulb, title: "AICTE Idea Lab",
    desc: "The AICTE Idea Lab at MITS is a state-of-the-art innovation hub that fosters creativity, prototyping, and entrepreneurship.",
    points: [
      "Equipped with 3D printers, laser cutters, and CNC machines",
      "Electronics prototyping and IoT development kits",
      "Dedicated space for student startups and projects",
      "Workshops on design thinking and innovation",
      "Collaboration with AICTE's national innovation network",
      "Mentorship from industry experts and entrepreneurs",
    ],
  },
  {
    key: "computer", label: "Computer Infrastructure", icon: Monitor, title: "Computer Infrastructure",
    desc: "MITS maintains cutting-edge computing infrastructure to support academic, research, and innovation activities.",
    points: [
      "3000+ computing systems across departments",
      "High-performance GPU servers for AI/ML research",
      "Licensed software: MATLAB, AutoCAD, ANSYS, and more",
      "Cloud computing lab with AWS and Azure access",
      "24/7 lab access for project and research work",
      "Regular hardware and software upgrades",
    ],
  },
  {
    key: "comm-lab", label: "Communication Lab", icon: MessageSquare, title: "Communication Lab",
    desc: "The Communication Lab at MITS is designed to enhance the language, presentation, and interpersonal skills of students.",
    points: [
      "State-of-the-art language lab with 60+ terminals",
      "Software for pronunciation, listening, and speaking practice",
      "Group discussion and debate practice rooms",
      "Regular workshops on business communication",
      "Mock interview and presentation training sessions",
      "English proficiency programs for all students",
    ],
  },
];

// ─── Normalise class list ───────────────────────────────────────────────────
const cx = (...classes: (string | false | null | undefined)[]): string =>
  classes.filter(Boolean).join(" ");

// ─── Image Gallery Carousel Component ───────────────────────────────────────
const ImageGallery = ({ images, sectionTitle }: { images: { src: string; alt: string }[]; sectionTitle: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Reset slide when images change
  useEffect(() => {
    setCurrentSlide(0);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [images]);

  const scrollToSlide = useCallback((idx: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const slideWidth = container.offsetWidth * 0.72; // matches the slide width
    const gap = 12;
    container.scrollTo({
      left: idx * (slideWidth + gap),
      behavior: "smooth",
    });
    setCurrentSlide(idx);
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current || isDragging) return;
    const container = scrollRef.current;
    const slideWidth = container.offsetWidth * 0.72;
    const gap = 12;
    const idx = Math.round(container.scrollLeft / (slideWidth + gap));
    setCurrentSlide(Math.min(idx, images.length - 1));
  }, [images.length, isDragging]);

  // Mouse drag for desktop
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLightboxIdx((p) => Math.max(0, p - 1));
      if (e.key === "ArrowRight") setLightboxIdx((p) => Math.min(images.length - 1, p + 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
}, [lightboxOpen, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div
        className="rounded-xl overflow-hidden mb-5 shadow-sm"
        style={{ background: "#fff", border: `1px solid ${BORDER}` }}
      >
        {/* Header */}
        <div
          className="px-6 py-3.5 flex items-center gap-2.5"
          style={{
            borderBottom: `1px solid ${BORDER}`,
            background: `linear-gradient(90deg, rgba(15,42,68,0.03), transparent)`,
          }}
        >
          <ZoomIn className="w-4 h-4" style={{ color: GOLD }} />
          <span
            className="font-bold text-[15px]"
            style={{ color: DARK_NAVY, fontFamily: "var(--font-display)" }}
          >
            Photo Gallery
          </span>
          <span
            className="ml-auto text-[10px] font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${DARK_NAVY}, ${MITS_RED})`,
            }}
          >
            {images.length} Photos
          </span>
        </div>

        {/* Carousel */}
        <div className="relative px-4 py-5">
          {/* Left arrow */}
          {currentSlide > 0 && (
            <button
              onClick={() => scrollToSlide(currentSlide - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
              style={{
                background: "rgba(15,42,68,0.85)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
          )}

          {/* Right arrow */}
          {currentSlide < images.length - 1 && (
            <button
              onClick={() => scrollToSlide(currentSlide + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
              style={{
                background: "rgba(15,42,68,0.85)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          )}

          {/* Scrollable image strip */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className="flex gap-3 overflow-x-auto scroll-smooth"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
            }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 relative group rounded-lg overflow-hidden"
                style={{
                  width: "72%",
                  minWidth: "260px",
                  maxWidth: "560px",
                  aspectRatio: "16/10",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  draggable={false}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <div className="p-4 flex items-center justify-between w-full">
                    <p className="text-white text-[13px] font-medium">{img.alt}</p>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: `${GOLD}cc` }}
                    >
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                {/* Active slide indicator */}
                {i === currentSlide && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, ${MITS_RED}, ${GOLD})`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-4">
            {images.map((_, i) => {
              const on = i === currentSlide;
              return (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className="rounded-full transition-all duration-200 cursor-pointer"
                  aria-label={`Go to image ${i + 1}`}
                  style={{
                    width: on ? 20 : 6,
                    height: 6,
                    borderRadius: 99,
                    background: on
                      ? `linear-gradient(90deg, ${DARK_NAVY} 0%, ${MITS_RED} 60%, ${GOLD} 100%)`
                      : "#d1d5db",
                    boxShadow: on ? `0 2px 6px ${MITS_RED}30` : "none",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 z-10"
            style={{ background: "rgba(255,255,255,0.15)" }}
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 text-white/70 text-[13px] font-medium z-10">
            {lightboxIdx + 1} / {images.length} — {sectionTitle}
          </div>

          {/* Prev */}
          {lightboxIdx > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((p) => p - 1);
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 z-10"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)" }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Next */}
          {lightboxIdx < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((p) => p + 1);
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 z-10"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)" }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIdx].src}
              alt={images[lightboxIdx].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium z-10 text-center px-4">
            {images[lightboxIdx].alt}
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-10 max-w-[90vw] overflow-x-auto py-2 px-3"
            style={{ scrollbarWidth: "none" }}
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIdx(i)}
                className="flex-shrink-0 rounded-md overflow-hidden transition-all duration-200 cursor-pointer"
                style={{
                  width: 48,
                  height: 36,
                  border: i === lightboxIdx ? `2px solid ${GOLD}` : "2px solid transparent",
                  opacity: i === lightboxIdx ? 1 : 0.5,
                }}
              >
                <img
                  src={img.src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

// ─── Main Component ─────────────────────────────────────────────────────────
const Infrastructure = () => {
  const [activeInfra, setActiveInfra] = useState(infrastructureItems[0].key);
  const current = infrastructureItems.find((i) => i.key === activeInfra)!;
  const currentIdx = infrastructureItems.findIndex((i) => i.key === activeInfra);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tabsRef.current?.querySelector<HTMLButtonElement>(
      `[data-key="${activeInfra}"]`
    );
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeInfra]);

  const go = (dir: -1 | 1) => {
    const next = currentIdx + dir;
    if (next >= 0 && next < infrastructureItems.length) {
      setActiveInfra(infrastructureItems[next].key);
    }
  };

  const currentGallery = galleryImages[current.key] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfbf7] via-white to-white">
      <Header />
      <SEO
        title="MITS Campus Infrastructure – Labs, Library, Sports & Facilities"
        description="Explore MITS Madanapalle infrastructure: 26.17-acre campus, 3,000+ computers, 1 Gbps Wi-Fi, central library with 50,000+ volumes, AICTE Idea Lab, sports grounds, and hostel facilities."
        canonical="/infrastructure"
      />
      <SEO
        title="MITS Campus Infrastructure – Labs, Library, Sports & Facilities"
        description="Explore MITS Madanapalle infrastructure: 26.17-acre campus, 3,000+ computers, 1 Gbps Wi-Fi, central library with 50,000+ volumes, AICTE Idea Lab, sports grounds, and hostel facilities."
        canonical="/infrastructure"
      />
      <main>

        {/* ══════════════════════════════════════════════════════
            HERO  — full-bleed image with dark overlay
           ══════════════════════════════════════════════════════ */}
        <div className="relative h-[340px] md:h-[420px] overflow-hidden">
          <img
            src={campusImages.hero}
            alt="MITS Campus"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a44]/80 via-[#0f2a44]/55 to-[#0f2a44]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a44]/40 to-transparent" />

          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
            <p className="text-[11px] font-bold tracking-[0.32em] uppercase mb-3"
              style={{ color: GOLD, textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              Campus Life
            </p>
            <h1 className="font-display text-4xl md:text-[3.5rem] lg:text-[4rem] font-bold text-white mb-4 tracking-tight leading-none"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.35)", fontFamily: "var(--font-display)" }}>
              Infrastructure
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>
              World-class facilities designed for academic excellence and holistic development.
            </p>
          </div>

          <div className="absolute bottom-5 left-6 z-10 text-xs text-white/70">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li>&rsaquo;</li>
              <li className="text-white font-semibold">Infrastructure</li>
            </ol>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            LIVE STATS STRIP
           ══════════════════════════════════════════════════════ */}
        <div className="border-y" style={{ background: DARK_NAVY, borderColor: "rgba(202,167,77,0.2)" }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x"
              style={{ borderColor: "rgba(202,167,77,0.15)" }}>
              {[
                { label: "Acre Campus",  value: "26.17+" },
                { label: "Buses",        value: "40+"    },
                { label: "Computers",    value: "3000+"  },
                { label: "Internet Speed", value: "1 Gbps" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={cx(
                    "py-5 px-4 text-center",
                    i > 0 ? "border-t md:border-t-0" : "",
                    i < 3 ? "md:border-r" : ""
                  )}
                >
                  <p className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight leading-none text-white">
                    {s.value}
                  </p>
                  <p className="text-[10px] md:text-xs mt-2 font-medium uppercase tracking-wider"
                    style={{ color: GOLD }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            MAIN FACILITIES — sidebar + detail + highlights
           ══════════════════════════════════════════════════════ */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">

            {/* ── Mobile tab strip ── */}
            <div className="lg:hidden mb-7 -mx-4 px-4">
              <div
                ref={tabsRef}
                className="flex gap-2 overflow-x-auto pb-1.5 snap-x snap-mandatory scroll-smooth"
                style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
              >
                {infrastructureItems.map((item) => {
                  const IconComp = item.icon as React.ElementType;
                  const on = activeInfra === item.key;
                  return (
                    <button
                      key={item.key}
                      data-key={item.key}
                      onClick={() => setActiveInfra(item.key)}
                      className={cx(
                        "snap-start flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-semibold",
                        "whitespace-nowrap transition-all duration-200 flex-shrink-0 border",
                        on
                          ? "text-white border-transparent shadow-md"
                          : cx("text-[#0f2a44] border-white/60 bg-white/80")
                      )}
                      style={on ? { background: DARK_NAVY } : undefined}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

              {/* ══════════════════════════════════════════════════════
                  LEFT SIDEBAR  — sticky
                  navy bg · gold left-bar on active
               ══════════════════════════════════════════════════════ */}
              <aside className="hidden lg:block lg:w-[270px] flex-shrink-0">
                <div
                  className="sticky top-24 rounded-xl overflow-hidden shadow-sm"
                  style={{ background: DARK_NAVY, border: `1px solid rgba(202,167,77,0.2)` }}
                >
                  <div className="px-5 py-3 flex items-center gap-2"
                    style={{ borderBottom: `1px solid rgba(202,167,77,0.15)` }}>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: GOLD }} />
                    <p className="text-white font-bold text-[11px] uppercase tracking-[0.26em]">
                      Facilities
                    </p>
                  </div>
                  <nav className="py-1.5">
                    {infrastructureItems.map((item) => {
                      const SidebarIcon = item.icon as React.ElementType;
                      const on = activeInfra === item.key;
                      return (
                        <button
                          key={item.key}
                          onClick={() => setActiveInfra(item.key)}
                          className={cx(
                            "w-full flex items-center gap-3 px-5 py-2.5 text-left text-[13px]",
                            "transition-colors duration-150 group",
                            on ? "text-white" : "text-white/65 hover:text-white hover:bg-white/[0.07]"
                          )}
                        >
                          <span
                            className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300"
                            style={{
                              background: on ? GOLD : "transparent",
                              opacity: on ? 1 : 0,
                              boxShadow: on ? `0 0 10px ${GOLD}90` : "none",
                            }}
                          />
                          <SidebarIcon
                            className="w-4 h-4 flex-shrink-0 relative z-10"
                            style={{ color: on ? GOLD : "rgba(255,255,255,0.45)" }}
                          />
                          <span className="flex-1 relative z-10 font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </aside>

              {/* ══════════════════════════════════════════════════════
                  RIGHT CONTENT
               ══════════════════════════════════════════════════════ */}
              <div className="flex-1 min-w-0">

                {/* ── FACILITY HEADER ── */}
                <div className="mb-6 p-6 rounded-xl border shadow-sm transition-all duration-300" style={{ borderColor: BORDER, background: "#fff" }}>
                  <div className="flex items-center gap-3 mb-3">
                    {(() => {
                      const IconComp = current.icon as React.ElementType;
                      return (
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${GOLD}15` }}>
                          <IconComp className="w-5.5 h-5.5 flex-shrink-0" style={{ color: MITS_RED }} />
                        </div>
                      );
                    })()}
                    <h2 className="font-display text-xl md:text-2xl font-bold" style={{ color: DARK_NAVY, fontFamily: "var(--font-display)" }}>
                      {current.title}
                    </h2>
                    <span className="ml-auto text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100" style={{ color: SLATE }}>
                      {String(currentIdx + 1).padStart(2, "0")} / {String(infrastructureItems.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="h-[2px] w-12 mb-4 rounded-full" style={{ background: `linear-gradient(90deg, ${MITS_RED}, ${GOLD})` }} />
                  <p className="text-[14px] md:text-[15px] leading-relaxed" style={{ color: SLATE }}>
                    {current.desc}
                  </p>
                </div>

                {/* ── PHOTO GALLERY CAROUSEL ── */}
                <ImageGallery images={currentGallery} sectionTitle={current.title} />

                {/* ── KEY HIGHLIGHTS ── */}
                <div
                  className="rounded-xl overflow-hidden mb-5 shadow-sm"
                  style={{ background: "#fff", border: `1px solid ${BORDER}` }}
                >
                  <div
                    className="px-6 py-3.5 flex items-center gap-2.5"
                    style={{
                      borderBottom: `1px solid ${BORDER}`,
                      background: `linear-gradient(90deg, rgba(15,42,68,0.03), transparent)`,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 1L8.5 5H9.5L8 7.5L7 12L6 7.5L4.5 5H5.5L7 1Z"
                        fill={GOLD} stroke={MITS_RED} strokeWidth="0.6"
                      />
                    </svg>
                    <span
                      className="font-bold text-[15px]"
                      style={{ color: DARK_NAVY, fontFamily: "var(--font-display)" }}
                    >
                      Key Highlights
                    </span>
                    <span
                      className="ml-auto text-[10px] font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${DARK_NAVY}, ${MITS_RED})`,
                      }}
                    >
                      {current.points.length} Points
                    </span>
                  </div>

                  <div className="p-5 md:p-6 grid sm:grid-cols-2 gap-2.5 md:gap-3">
                    {current.points.map((text, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 px-5 py-3.5 rounded-xl border transition-all duration-200 group/card cursor-default"
                        style={{ borderColor: BORDER, background: "#fff" }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget;
                          el.style.borderColor = GOLD;
                          el.style.background = `${GOLD}0c`;
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;
                          el.style.borderColor = BORDER;
                          el.style.background = "#fff";
                        }}
                      >
                        <span
                          className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-extrabold text-white mt-0.5"
                          style={{
                            background: `linear-gradient(135deg, ${DARK_NAVY} 0%, ${MITS_RED} 100%)`,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[13px] leading-relaxed flex-1" style={{ color: SLATE }}>
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── BOTTOM NAV: Prev · Dots · Next ── */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    onClick={() => go(-1)}
                    disabled={currentIdx === 0}
                    className={cx(
                      "px-5 py-2.5 flex items-center gap-2 rounded-full text-[13px] font-semibold",
                      "transition-all duration-200 cursor-pointer select-none disabled:cursor-not-allowed"
                    )}
                    style={{
                      border: `1px solid ${BORDER}`,
                      color: DARK_NAVY,
                      background: "#fff",
                      opacity: currentIdx === 0 ? 0.35 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (currentIdx === 0) return;
                      const el = e.currentTarget;
                      el.style.background = DARK_NAVY;
                      el.style.color = "#fff";
                      el.style.borderColor = DARK_NAVY;
                      el.style.boxShadow = `0 6px 18px ${DARK_NAVY}20`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "#fff";
                      el.style.color = DARK_NAVY;
                      el.style.borderColor = BORDER;
                      el.style.boxShadow = "none";
                    }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  <div className="flex gap-1.5 items-center py-2">
                    {infrastructureItems.map((_, i) => {
                      const on = i === currentIdx;
                      return (
                        <button
                          key={i}
                          onClick={() => setActiveInfra(infrastructureItems[i].key)}
                          aria-label={infrastructureItems[i].label}
                          className="rounded-full transition-all duration-200 cursor-pointer"
                          style={{
                            width: on ? 22 : 7,
                            height: 7,
                            borderRadius: 99,
                            background: on
                              ? `linear-gradient(90deg, ${DARK_NAVY} 0%, ${MITS_RED} 60%, ${GOLD} 100%)`
                              : BORDER,
                            boxShadow: on ? `0 2px 8px ${MITS_RED}35` : "none",
                          }}
                        />
                      );
                    })}
                  </div>

                  <button
                    onClick={() => go(1)}
                    disabled={currentIdx === infrastructureItems.length - 1}
                    className={cx(
                      "px-5 py-2.5 flex items-center gap-2 rounded-full text-[13px] font-semibold",
                      "transition-all duration-200 cursor-pointer select-none disabled:cursor-not-allowed"
                    )}
                    style={{
                      border: `1px solid ${BORDER}`,
                      color: DARK_NAVY,
                      background: "#fff",
                      opacity: currentIdx === infrastructureItems.length - 1 ? 0.35 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (currentIdx === infrastructureItems.length - 1) return;
                      const el = e.currentTarget;
                      el.style.background = DARK_NAVY;
                      el.style.color = "#fff";
                      el.style.borderColor = DARK_NAVY;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "#fff";
                      el.style.color = DARK_NAVY;
                      el.style.borderColor = BORDER;
                    }}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>{/* /flex-1 */}
            </div>{/* /flex-row */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;
