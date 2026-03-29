import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const allImages = [
  { src: `${BASE}Campus Gallery/DJI_20250312173138_0088_D.JPG`, alt: "MITS Campus Aerial View" },
  { src: `${BASE}Campus Gallery/DJI_20250312173143_0089_D.JPG`, alt: "Campus Panorama" },
  { src: `${BASE}Campus Gallery/DJI_20250312173329_0094_D.JPG`, alt: "Aerial Campus View" },
  { src: `${BASE}Campus Gallery/DJI_20250312174210_0103_D.JPG`, alt: "Campus Buildings" },
  { src: `${BASE}Campus Gallery/DJI_20250312174304_0106_D.JPG`, alt: "Campus Overview" },
  { src: `${BASE}Campus Gallery/DJI_20250312174636_0111_D.JPG`, alt: "Campus Landscape" },
  { src: `${BASE}Campus Gallery/DJI_20250318122106_0002_D.JPG`, alt: "Campus View" },
  { src: `${BASE}Campus Gallery/DJI_20250325164702_0090_D.JPG`, alt: "Campus Aerial" },
  { src: `${BASE}Campus Gallery/DJI_20250618181011_0141_D.JPG`, alt: "Evening Campus" },
  { src: `${BASE}Campus Gallery/DJI_20250618181013_0142_D.JPG`, alt: "Campus at Dusk" },
  { src: `${BASE}Campus Gallery/DJI_20250618181038_0143_D.JPG`, alt: "Campus Night View" },
  { src: `${BASE}Campus Gallery/DJI_20250925152948_0001_D.JPG`, alt: "Campus Entrance" },
  { src: `${BASE}Campus Gallery/DJI_20250925153026_0005_D.JPG`, alt: "Main Building" },
  { src: `${BASE}Campus Gallery/DJI_20250925153057_0006_D.JPG`, alt: "Campus Grounds" },
  { src: `${BASE}Campus Gallery/DJI_20250925153459_0013_D.JPG`, alt: "Campus View" },
  { src: `${BASE}Campus Gallery/DJI_20251219130850_0023_D.JPG`, alt: "Winter Campus" },
  { src: `${BASE}Campus Gallery/DJI_20251219131047_0036_D.JPG`, alt: "Campus in Winter" },
  { src: `${BASE}Campus Gallery/DJI_20260307095516_0015_D.JPG`, alt: "Spring Campus" },
  { src: `${BASE}Campus Gallery/DJI_20260307095521_0017_D.JPG`, alt: "Campus Garden" },
  { src: `${BASE}Campus Gallery/DJI_20260307095523_0018_D.JPG`, alt: "Campus Pathway" },
  { src: `${BASE}Campus Gallery/DJI_20260307095649_0019_D.JPG`, alt: "Campus Building" },
  { src: `${BASE}Campus Gallery/DJI_20260307095707_0021_D.JPG`, alt: "Campus View" },
  { src: `${BASE}Campus Gallery/DSC_1805.JPG`, alt: "MITS Main Building" },
  { src: `${BASE}Campus Gallery/DSC_1825.JPG`, alt: "Students in Campus" },
  { src: `${BASE}Campus Gallery/DSC_1826.JPG`, alt: "Campus Life" },
  { src: `${BASE}Campus Gallery/DSC_1830.JPG`, alt: "Campus Event" },
  { src: `${BASE}Campus Gallery/DSC_1831.JPG`, alt: "Student Activity" },
  { src: `${BASE}Campus Gallery/DSC_1832.JPG`, alt: "Campus Gathering" },
  { src: `${BASE}Campus Gallery/DSC_1833.JPG`, alt: "Campus Function" },
  { src: `${BASE}Campus Gallery/DSC_1836.JPG`, alt: "Campus Celebration" },
  { src: `${BASE}Campus Gallery/DSC_1862.JPG`, alt: "MITS Library" },
  { src: `${BASE}Campus Gallery/DSC_1863.JPG`, alt: "Library Interior" },
  { src: `${BASE}Campus Gallery/DSC_1865.JPG`, alt: "Reading Area" },
  { src: `${BASE}Campus Gallery/DSC_1867.JPG`, alt: "Study Space" },
  { src: `${BASE}Campus Gallery/DSC_1888.JPG`, alt: "Campus Building" },
  { src: `${BASE}Campus Gallery/DSC_6397.JPG`, alt: "Campus Event" },
  { src: `${BASE}Campus Gallery/DSC_6415.JPG`, alt: "Annual Function" },
  { src: `${BASE}Campus Gallery/DSC_7246.JPG`, alt: "Campus Activity" },
  { src: `${BASE}Campus Gallery/DSC_7247.JPG`, alt: "Student Life" },
  { src: `${BASE}Campus Gallery/DSC_7352.JPG`, alt: "Campus Scene" },
  { src: `${BASE}Campus Gallery/DSC_7364.JPG`, alt: "Campus View" },
  { src: `${BASE}Campus Gallery/DSC_7376.JPG`, alt: "Campus Building" },
  { src: `${BASE}Campus Gallery/DSC_7525.JPG`, alt: "Campus Grounds" },
  { src: `${BASE}Campus Gallery/DSC_7526.JPG`, alt: "Campus Area" },
  { src: `${BASE}Campus Gallery/DSC00642.jpg`, alt: "Campus Entrance" },
  { src: `${BASE}Campus Gallery/DSC00643.jpg`, alt: "Main Gate" },
  { src: `${BASE}Campus Gallery/DSC00669.jpg`, alt: "Campus View" },
  { src: `${BASE}Campus Gallery/DSC00672.jpg`, alt: "Campus Building" },
  { src: `${BASE}Campus Gallery/DSC00674.jpg`, alt: "Campus Area" },
  { src: `${BASE}Campus Gallery/DSC00722.jpg`, alt: "Campus Scene" },
  { src: `${BASE}Campus Gallery/DSC00807.jpg`, alt: "Campus Event" },
  { src: `${BASE}Campus Gallery/DSC00846.jpg`, alt: "Campus Function" },
  { src: `${BASE}Campus Gallery/DSC00890.jpg`, alt: "Campus Activity" },
  { src: `${BASE}Campus Gallery/DSC00892.jpg`, alt: "Campus Life" },
  { src: `${BASE}Campus Gallery/DSC00901.jpg`, alt: "Campus View" },
  { src: `${BASE}Campus Gallery/DSC00906.jpg`, alt: "Campus Building" },
  { src: `${BASE}Campus Gallery/DSC00925.jpg`, alt: "Campus Grounds" },
  { src: `${BASE}Campus Gallery/DSC00955.jpg`, alt: "Campus Area" },
  { src: `${BASE}Campus Gallery/DSC00975.jpg`, alt: "Campus Scene" },
  { src: `${BASE}Campus Gallery/DSC01029.jpg`, alt: "Campus View" },
  { src: `${BASE}Campus Gallery/DSC01030.jpg`, alt: "Campus Building" },
  { src: `${BASE}Campus Gallery/DSC01036.jpg`, alt: "Campus Area" },
  { src: `${BASE}Campus Gallery/DSC01099.jpg`, alt: "Campus Scene" },
  { src: `${BASE}Campus Gallery/DSC03132.jpg`, alt: "Campus Event" },
  { src: `${BASE}Campus Gallery/DSC03133.jpg`, alt: "Campus Function" },
  { src: `${BASE}Campus Gallery/DSC03233.jpg`, alt: "Campus Activity" },
  { src: `${BASE}Campus Gallery/DSC03235.jpg`, alt: "Campus Life" },
  { src: `${BASE}Campus Gallery/DSC03288.jpg`, alt: "Campus View" },
  { src: `${BASE}Campus Gallery/DSC03289.jpg`, alt: "Campus Building" },
  { src: `${BASE}Campus Gallery/DSC03294.jpg`, alt: "Campus Grounds" },
  { src: `${BASE}Campus Gallery/DSC03584.jpg`, alt: "Campus Area" },
  { src: `${BASE}Campus Gallery/DSC03612.jpg`, alt: "Campus Scene" },
  { src: `${BASE}Campus Gallery/DSC03613.jpg`, alt: "Campus View" },
  { src: `${BASE}Campus Gallery/DSC03670.jpg`, alt: "Campus Building" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-[#0f2a44] py-6">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white hover:text-[#caa74d] transition-colors mb-4">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Home
          </Link>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">Campus Gallery</h1>
          <p className="text-white/70 mt-2">Explore our beautiful campus through these images</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.02}>
              <div 
                className="overflow-hidden rounded-xl group relative cursor-pointer"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/50 transition-all duration-300 flex items-end">
                  <p className="text-white font-semibold text-xs md:text-sm p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {img.alt}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-[#caa74d] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery Image" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
