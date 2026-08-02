import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home, ChevronRight, ExternalLink, MapPin, Award, ArrowLeft, Globe, Landmark,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/international-relations/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { slugify } from "@/lib/utils";
import {
  partners, aboutGallery, internshipGallery, globalGallery,
} from "@/data/internationalRelations";
import {
  ImageCarousel, PartnerCard, localLogos, FallbackCrest, regionColors,
} from "@/pages/InternationalRelations";

/**
 * Curated, confidently-matched MoU/delegation photos for specific partners,
 * built entirely from image URLs that already exist in the IR data file.
 * Partners not listed here fall back to the general IRO engagement archive
 * below rather than being paired with another university's photos.
 */
const partnerSpecificGallery: Record<string, string[]> = {
  "Bowling Green State University (BGSU)": [
    "https://mits.ac.in/public/uploads/internationalrelation/bowling.JPG",
    "https://mits.ac.in/public/uploads/internationalrelation/us-mou.JPG",
    "https://mits.ac.in/public/uploads/internationalrelation/mou1.jpg",
    "https://mits.ac.in/public/uploads/internationalrelation/mou2.jpg",
  ],
  "Asia University (AU)": [...globalGallery.filter((g) => g.toLowerCase().includes("asia") || g.toLowerCase().includes("taiwan"))],
  "Providence University": globalGallery.filter((g) => g.toLowerCase().includes("providence")),
  "Ichinoseki College (National Institute of Technology - KOSEN)": internshipGallery.filter((g) =>
    g.toLowerCase().includes("sakura")
  ),
};

/** Generic IRO documentation photos — used when no partner-specific match exists. Never mislabeled as campus-specific. */
const fallbackGallery = aboutGallery;

const InternationalRelationsPartner = () => {
  const { slug } = useParams<{ slug: string }>();
  const partner = partners.find((p) => slugify(p.name) === slug);

  if (!partner) {
    return <Navigate to="/international-relations#mou" replace />;
  }

  const specificGallery = partnerSpecificGallery[partner.name];
  const gallery = specificGallery && specificGallery.length > 0 ? specificGallery : fallbackGallery;
  const isSpecific = Boolean(specificGallery && specificGallery.length > 0);

  const BASE = import.meta.env.BASE_URL;
  const localLogo = localLogos[partner.name];
  const logoUrl = localLogo ? `${BASE}${localLogo}` : null;

  const regionLabel =
    partner.region === "US" ? "United States" : partner.region === "Europe" ? "Europe" : partner.region;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2a44] via-[#143557] to-[#0a1f33] text-white py-14 md:py-20">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, #caa74d 0%, transparent 40%), radial-gradient(circle at 85% 80%, #b31317 0%, transparent 50%)",
          }}
        />
        <div className="container relative mx-auto px-4 md:px-6">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/70 mb-6 font-body">
            <Link to="/" className="hover:text-[#caa74d] transition-colors inline-flex items-center gap-1">
              <Home className="w-3 h-3" />Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/international-relations" className="hover:text-[#caa74d] transition-colors">
              International Relations
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/international-relations#mou" className="hover:text-[#caa74d] transition-colors">
              MoUs
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#caa74d] line-clamp-1">{partner.name}</span>
          </nav>

          <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-white flex items-center justify-center p-5 shadow-2xl shrink-0"
            >
              {logoUrl ? (
                <img src={logoUrl} alt={`${partner.name} logo`} className="max-w-full max-h-full object-contain" />
              ) : (
                <FallbackCrest name={partner.name} />
              )}
            </motion.div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={cnBadge(regionColors[partner.region])}>{regionLabel}</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-white/90">
                  <MapPin className="w-3 h-3" />{partner.country}
                </span>
                {partner.ranking && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#caa74d]/15 border border-[#caa74d]/40 text-[#caa74d]">
                    <Award className="w-3 h-3" />{partner.ranking}
                  </span>
                )}
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold leading-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {partner.name}
              </motion.h1>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href={partner.website} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#caa74d] text-[#0f2a44] hover:bg-[#caa74d]/90 font-bold gap-2">
                    Visit Official Website <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
                <Link to="/international-relations#mou">
                  <Button variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white gap-2">
                    <ArrowLeft className="w-4 h-4" /> All MoU Partners
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 space-y-12">
        {/* Gallery */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-4 h-4 text-primary" />
            <h2 className="font-bold text-secondary text-lg" style={{ fontFamily: "var(--font-display)" }}>
              {isSpecific ? "MoU & Delegation Photos" : "IRO Global Engagement Archive"}
            </h2>
          </div>
          {!isSpecific && (
            <p className="text-xs text-muted-foreground -mt-3 mb-4">
              Dedicated photos for this specific delegation haven't been catalogued yet — showing MITS IRO's general
              MoU &amp; global engagement photo archive in the meantime.
            </p>
          )}
          <ImageCarousel images={gallery} />
        </div>

        {/* Profile */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Landmark className="w-4 h-4 text-primary" />
            <h2 className="font-bold text-secondary text-lg" style={{ fontFamily: "var(--font-display)" }}>
              Institutional Profile
            </h2>
          </div>
          <div className="max-w-2xl">
            <PartnerCard p={partner} />
          </div>
        </div>
      </section>

      <Footer />
      <LanguageSwitcher />
    </div>
  );
};

const cnBadge = (colorClass: string | undefined) =>
  `px-3.5 py-1 rounded-full text-xs font-bold shadow-sm ${colorClass || "bg-slate-100 text-slate-700"}`;

export default InternationalRelationsPartner;
