import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star, Home, ChevronRight, Users, Award, Mail, Globe,
  ExternalLink, GraduationCap, Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { stanfordAbout, stanfordFellows, stanfordGallery } from "@/data/internationalRelations";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const StanfordInitiative = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const totalFellows = stanfordFellows.reduce((a, b) => a + b.students.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-20 lg:pt-28">
        <div className="relative min-h-[50vh] bg-gradient-to-br from-secondary via-secondary to-primary overflow-hidden">
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, hsl(var(--accent)) 0%, transparent 40%), radial-gradient(circle at 80% 60%, hsl(var(--primary)) 0%, transparent 50%)",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 text-white">
            <div className="flex items-center gap-2 text-xs md:text-sm text-white/80 mb-4">
              <Link to="/" className="hover:text-accent inline-flex items-center gap-1"><Home className="w-3 h-3" />Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/international-relations" className="hover:text-accent">International Relations</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-accent">Stanford Initiative</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <Star className="w-3 h-3" />University Innovation Fellows
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Stanford d.school Initiative
            </motion.h1>
            <p className="mt-4 max-w-3xl text-lg text-white/90">
              MITS is proud to be part of the University Innovation Fellows programme of the Hasso Plattner Institute of Design
              (d.school) at Stanford University — a global movement of student change-makers.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-2xl">
              <div className="rounded-xl bg-white/10 border border-white/20 backdrop-blur p-4">
                <div className="text-2xl md:text-3xl font-bold text-accent">{stanfordFellows.length}</div>
                <div className="text-xs text-white/80">Batches</div>
              </div>
              <div className="rounded-xl bg-white/10 border border-white/20 backdrop-blur p-4">
                <div className="text-2xl md:text-3xl font-bold text-accent">{totalFellows}</div>
                <div className="text-xs text-white/80">Fellows</div>
              </div>
              <div className="rounded-xl bg-white/10 border border-white/20 backdrop-blur p-4">
                <div className="text-2xl md:text-3xl font-bold text-accent">2016+</div>
                <div className="text-xs text-white/80">Since</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4 text-[15px] leading-relaxed text-secondary/90">
            <h2 className="text-3xl font-bold text-secondary mb-4" style={{ fontFamily: "var(--font-display)" }}>
              About the Programme
            </h2>
            {stanfordAbout.intro.map((p, i) => <p key={i}>{p}</p>)}
            <div className="pt-4">
              <a href={stanfordAbout.coordinator.website} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2"><ExternalLink className="w-4 h-4" />Visit MITS-UIF Website</Button>
              </a>
            </div>
          </div>
          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-white p-6">
              <div className="flex items-center gap-2 text-primary font-bold mb-3">
                <Users className="w-4 h-4" />Programme Coordinator
              </div>
              <div className="font-bold text-secondary">{stanfordAbout.coordinator.name}</div>
              <div className="text-xs text-muted-foreground mb-3">{stanfordAbout.coordinator.designation}</div>
              <div className="space-y-2 text-sm">
                <a href={`mailto:${stanfordAbout.coordinator.emailGmail}`} className="flex items-center gap-2 text-primary hover:underline">
                  <Mail className="w-4 h-4" />{stanfordAbout.coordinator.emailGmail}
                </a>
                <a href={`mailto:${stanfordAbout.coordinator.emailOffice}`} className="flex items-center gap-2 text-primary hover:underline">
                  <Mail className="w-4 h-4" />{stanfordAbout.coordinator.emailOffice}
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <div className="flex items-center gap-2 text-secondary font-bold mb-2">
                <Award className="w-4 h-4" />Featured In
              </div>
              <p className="text-sm text-secondary/80">{stanfordAbout.coordinator.qsIssue}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Fellows */}
      <section className="bg-muted/40 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
              MITS Fellows
            </h2>
            <p className="text-muted-foreground mt-2">Batches from Fall 2016 to Fall 2024, with faculty champions and Wiki profiles.</p>
            <div className="h-1 w-16 bg-primary rounded-full mt-4" />
          </div>

          <div className="space-y-6">
            {stanfordFellows.map((batch, i) => (
              <motion.div
                key={batch.batch}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
                className="rounded-2xl border border-border bg-white overflow-hidden"
              >
                <div className="p-5 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-primary font-bold">{batch.batch}</div>
                      <h3 className="text-lg font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
                        Faculty Champions: {batch.facultyChampions}
                      </h3>
                    </div>
                    <span className="text-xs bg-accent/20 text-accent-foreground px-3 py-1 rounded-full font-bold">
                      {batch.students.length} Fellows
                    </span>
                  </div>
                </div>
                <div className="p-5 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="text-xs uppercase text-muted-foreground border-b border-border">
                      <tr>
                        <th className="text-left py-2 pr-4">#</th>
                        <th className="text-left py-2 pr-4">Name</th>
                        <th className="text-left py-2 pr-4">Department</th>
                        <th className="text-left py-2 pr-4">Roll No</th>
                        <th className="text-left py-2">Profile</th>
                      </tr>
                    </thead>
                    <tbody>
                      {batch.students.map((s) => (
                        <tr key={s.sno} className="border-b border-border last:border-0">
                          <td className="py-2 pr-4 text-muted-foreground">{s.sno}</td>
                          <td className="py-2 pr-4 font-medium text-secondary">{s.name}</td>
                          <td className="py-2 pr-4">{s.dept}</td>
                          <td className="py-2 pr-4 text-muted-foreground">{s.roll}</td>
                          <td className="py-2">
                            {s.wiki && (
                              <a href={s.wiki} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline text-xs">
                                <ExternalLink className="w-3 h-3" />Wiki
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>UIF Gallery</h2>
          <div className="h-1 w-16 bg-primary rounded-full mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {stanfordGallery.map((src) => (
            <button key={src} onClick={() => setLightbox(src)}
              className="group relative aspect-video rounded-xl overflow-hidden bg-secondary/90">
              <div
                className="absolute inset-0 bg-center bg-cover scale-110 blur-xl opacity-40"
                style={{ backgroundImage: `url("${src}")` }}
                aria-hidden
              />
              <img src={src} loading="lazy" alt="" className="relative w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
            </button>
          ))}
        </div>

      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}>
            <img src={lightbox} className="max-h-[92vh] max-w-[92vw] object-contain rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default StanfordInitiative;
