import campusHero from "@/assets/campus-hero.png";
import campusBuilding from "@/assets/campus-building.png";
import studentsLearning from "@/assets/students-learning.png";
import campusLibrary from "@/assets/campus-library.png";
import campusGraduation from "@/assets/campus-graduation.png";
import ScrollReveal from "@/components/ScrollReveal";

const images = [
  { src: campusHero, alt: "MITS Campus Aerial View", span: "md:col-span-2" },
  { src: campusBuilding, alt: "MITS Main Building", span: "" },
  { src: studentsLearning, alt: "Students in Lab", span: "" },
  { src: campusLibrary, alt: "MITS Library", span: "" },
  { src: campusGraduation, alt: "Graduation Ceremony", span: "md:col-span-2" },
];

const CampusGallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Campus Life</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Campus Gallery</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <ScrollReveal key={img.alt} delay={i * 0.1} className={img.span}>
              <div className="overflow-hidden rounded-xl group relative cursor-pointer">
                <img src={img.src} alt={img.alt} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/50 transition-all duration-300 flex items-end">
                  <p className="text-white font-semibold text-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {img.alt}
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

export default CampusGallery;
