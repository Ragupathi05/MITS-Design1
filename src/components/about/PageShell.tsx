import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  bannerImage?: string;
}

const BASE = import.meta.env.BASE_URL;

const PageShell = ({ eyebrow = "About", title, intro, children, bannerImage }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />
      <main className="flex-1">
        {/* Hero banner */}
        <section
          className="relative bg-gradient-to-br from-primary via-primary to-[#7a0a0d] text-primary-foreground"
        >
          {bannerImage && (
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <img
                src={bannerImage}
                alt=""
                className="w-full h-full object-cover pointer-events-none"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          )}
          <nav className="absolute left-4 bottom-4 md:left-8 md:bottom-6 z-20 flex items-center gap-1.5 text-xs md:text-sm text-primary-foreground/80">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/about" className="hover:text-accent">About</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-accent">{title}</span>
          </nav>
          <div className="relative container mx-auto px-4 py-14 md:py-20">
            <h1
              className="font-display text-3xl md:text-5xl font-bold leading-tight text-accent"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h1>
            {intro && (
              <p className="mt-4 max-w-3xl text-primary-foreground/85 text-base md:text-lg leading-relaxed">
                {intro}
              </p>
            )}
          </div>
          <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export { BASE };
export default PageShell;
