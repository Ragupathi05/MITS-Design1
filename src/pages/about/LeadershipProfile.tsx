import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Quote, Award, ExternalLink, FileText, ArrowLeft } from "lucide-react";
import PageShell from "@/components/about/PageShell";
import { leadershipProfiles } from "@/data/aboutData";
import { Button } from "@/components/ui/button";

const LeadershipProfilePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const profile = slug ? leadershipProfiles[slug] : undefined;

  if (!profile) {
    return <Navigate to="/about/leadership" replace />;
  }

  return (
    <PageShell
      eyebrow="Leadership"
      title={profile.name}
      intro={profile.designation + (profile.qualification ? ` · ${profile.qualification}` : "")}
    >
      <Link
        to="/about/leadership"
        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Leadership
      </Link>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Portrait card */}
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4"
        >
          <div className="sticky top-28 bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-[3/4] bg-secondary/5 relative">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://mits.ac.in/images/inner-banner.jpg";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white p-5">
                {profile.tagline && (
                  <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-1">
                    {profile.tagline}
                  </p>
                )}
                <p className="font-display text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  {profile.name}
                </p>
                <p className="text-sm text-white/90 mt-0.5">{profile.designation}</p>
              </div>
            </div>
            {profile.qualification && (
              <div className="px-5 py-3 border-t border-border text-sm text-secondary/80">
                {profile.qualification}
              </div>
            )}
            <div className="p-5 border-t border-border">
              <a
                href={profile.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Official MITS profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.aside>

        {/* Body */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-8 space-y-8"
        >
          {profile.message && (
            <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary p-6 md:p-8 rounded-r-xl">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-base md:text-lg italic text-secondary/90 leading-relaxed">
                {profile.message}
              </p>
              <p className="mt-4 text-sm font-semibold text-primary">— {profile.name}</p>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold text-secondary mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Brief Profile
            </h2>
            <div className="space-y-4 text-secondary/80 text-base leading-[1.8]">
              {profile.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {profile.highlights && profile.highlights.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Recognitions & Highlights
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {profile.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white border border-border rounded-lg hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-secondary/85">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {profile.documents && profile.documents.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Documents
              </h2>
              <div className="flex flex-wrap gap-3">
                {profile.documents.map((d) => (
                  <Button key={d.url} asChild variant="outline" className="border-primary text-primary">
                    <a href={d.url} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-2" /> {d.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </motion.section>
      </div>
    </PageShell>
  );
};

export default LeadershipProfilePage;
