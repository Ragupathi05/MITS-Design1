import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users, GraduationCap, BookOpen, ShieldCheck, FileText,
  Building2, Network, Award, ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { aboutSections, leadershipProfiles, leadershipOrder } from "@/data/aboutData";

const BASE = import.meta.env.BASE_URL;

const sectionIcon: Record<string, JSX.Element> = {
  leadership: <Users className="w-6 h-6" />,
  "academic-leadership": <GraduationCap className="w-6 h-6" />,
  deans: <GraduationCap className="w-6 h-6" />,
  "department-heads": <Users className="w-6 h-6" />,
  "executive-council": <ShieldCheck className="w-6 h-6" />,
  "academic-council": <BookOpen className="w-6 h-6" />,
  bos: <FileText className="w-6 h-6" />,
  organogram: <Network className="w-6 h-6" />,
  "mandatory-disclosures": <Award className="w-6 h-6" />,
};

const About = () => {
  const featured = leadershipOrder.slice(0, 3).map((s) => leadershipProfiles[s]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-[#7a0a0d] text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={`${BASE}Hero-Section/image%202.JPG`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent mb-3">
              About MITS
            </p>
            <h1
              className="font-display text-4xl md:text-6xl font-bold leading-[1.05] max-w-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A complete institutional, governance and leadership portal.
            </h1>
            <p className="mt-5 max-w-2xl text-primary-foreground/85 text-base md:text-lg leading-relaxed">
              Madanapalle Institute of Technology &amp; Science — now MITS Deemed to be University —
              brings together visionary leadership, structured governance and statutory disclosures
              on a single, transparent platform.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/about/leadership"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm px-5 py-3 rounded-full transition-all"
              >
                Meet our Leadership <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about/mandatory-disclosures"
                className="inline-flex items-center gap-2 border border-primary-foreground/40 hover:border-accent hover:text-accent text-sm px-5 py-3 rounded-full transition-all"
              >
                View Disclosures
              </Link>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </section>

        {/* FEATURED LEADERSHIP */}
        <section className="container mx-auto px-4 py-14 md:py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Leadership</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                Guiding the University
              </h2>
            </div>
            <Link to="/about/leadership" className="text-sm font-semibold text-primary hover:underline hidden sm:inline-flex items-center gap-1">
              All leaders <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Link
                  to={`/about/leadership/${p.slug}`}
                  className="group block bg-white border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all"
                >
                  <div className="aspect-[4/3] bg-secondary/5 overflow-hidden relative">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://mits.ac.in/images/inner-banner.jpg";
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">{p.designation}</p>
                    <h3 className="text-lg font-bold text-secondary mt-1 group-hover:text-primary" style={{ fontFamily: "var(--font-display)" }}>
                      {p.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTIONS GRID */}
        <section className="bg-secondary/[0.03] py-14 md:py-20 border-y border-border">
          <div className="container mx-auto px-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Explore</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-10" style={{ fontFamily: "var(--font-display)" }}>
              Institutional Information Hub
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {aboutSections.map((s, i) => (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <Link
                    to={s.href}
                    className="group block bg-white border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-all h-full"
                  >
                    <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {sectionIcon[s.key] ?? <Building2 className="w-6 h-6" />}
                    </div>
                    <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                      {s.label}
                    </h3>
                    <p className="text-sm text-secondary/70 mt-2 leading-relaxed">{s.description}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-primary">
                      Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
