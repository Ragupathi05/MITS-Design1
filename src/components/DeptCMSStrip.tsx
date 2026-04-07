import { motion } from "framer-motion";
import { Calendar, Newspaper, Handshake, ExternalLink, Globe, MapPin, Tag, Loader2 } from "lucide-react";
import type { CMSEvent, CMSNews, CMSMoU } from "@/hooks/useDeptCMSContent";
import { useDeptCMSContent } from "@/hooks/useDeptCMSContent";

interface Props {
  deptKey: string;
}

const typeColors: Record<string, string> = {
  Conference: "bg-blue-100 text-blue-700",
  Workshop:   "bg-emerald-100 text-emerald-700",
  Seminar:    "bg-violet-100 text-violet-700",
  FDP:        "bg-orange-100 text-orange-700",
  Hackathon:  "bg-pink-100 text-pink-700",
};

const categoryColors: Record<string, string> = {
  Research:      "bg-purple-100 text-purple-700",
  Achievement:   "bg-amber-100 text-amber-700",
  Industry:      "bg-teal-100 text-teal-700",
  Accreditation: "bg-blue-100 text-blue-700",
};

const EventCard = ({ event }: { event: CMSEvent }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-2"
  >
    <div className="flex items-start justify-between gap-2">
      <h4 className="font-semibold text-sm text-slate-800 leading-snug flex-1">{event.title}</h4>
      {event.type && (
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${typeColors[event.type] ?? "bg-slate-100 text-slate-600"}`}>
          {event.type}
        </span>
      )}
    </div>
    {event.description && <p className="text-xs text-slate-500 leading-relaxed">{event.description}</p>}
    <div className="flex flex-wrap items-center gap-3 mt-auto pt-1">
      <span className="flex items-center gap-1 text-xs text-primary font-medium">
        <Calendar className="w-3 h-3" />{event.date}
      </span>
      {event.venue && (
        <span className="flex items-center gap-1 text-xs text-slate-400">
          <MapPin className="w-3 h-3" />{event.venue}
        </span>
      )}
    </div>
  </motion.div>
);

const NewsCard = ({ item }: { item: CMSNews }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-2"
  >
    <div className="flex items-start justify-between gap-2">
      <h4 className="font-semibold text-sm text-slate-800 leading-snug flex-1">{item.title}</h4>
      {item.category && (
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${categoryColors[item.category] ?? "bg-slate-100 text-slate-600"}`}>
          {item.category}
        </span>
      )}
    </div>
    {item.content && <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{item.content}</p>}
    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-auto pt-1">
      <Newspaper className="w-3 h-3" />{item.date}
    </div>
  </motion.div>
);

const MoUCard = ({ mou }: { mou: CMSMoU }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
  >
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
        <Handshake className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-sm text-slate-800 group-hover:text-primary transition-colors">{mou.organization}</h4>
        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{mou.purpose}</p>
        <div className="flex flex-wrap items-center gap-3 mt-2">
          <span className="flex items-center gap-1 text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
            <Tag className="w-3 h-3" />{mou.year}
          </span>
          {mou.country && (
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <Globe className="w-3 h-3" />{mou.country}
            </span>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const SectionTitle = ({ icon: Icon, title, count, color }: { icon: React.ElementType; title: string; count: number; color: string }) => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-2.5">
      <div className="p-2 rounded-lg" style={{ background: `${color}18` }}>
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <h3 className="font-bold text-base text-slate-800" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
    </div>
    <span className="text-xs bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-full font-medium">{count} items</span>
  </div>
);

const DeptCMSStrip = ({ deptKey }: Props) => {
  const { data, loading, source } = useDeptCMSContent(deptKey);

  const hasContent = data.events.length > 0 || data.news.length > 0 || data.mous.length > 0;

  if (loading) {
    return (
      <div className="mt-10 pt-8 border-t border-slate-200 flex items-center justify-center gap-2 text-sm text-muted-foreground py-8">
        <Loader2 className="w-4 h-4 animate-spin" />
        Loading department updates…
      </div>
    );
  }

  if (!hasContent) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-10 pt-8 border-t border-slate-200"
    >
      {/* Strip Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-secondary" style={{ fontFamily: "var(--font-display)" }}>
            Department Updates
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Live content from the MITS CMS Portal
            {source === "static" && " · Static preview"}
          </p>
        </div>
        <a
          href="https://ragupathi05.github.io/MITS-CMS-Portal/"
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-primary font-medium hover:underline"
        >
          <ExternalLink className="w-3.5 h-3.5" />Visit CMS Portal
        </a>
      </div>

      <div className="space-y-8">
        {/* EVENTS */}
        {data.events.length > 0 && (
          <div>
            <SectionTitle icon={Calendar} title="Events & Programmes" count={data.events.length} color="#b30000" />
            <div className="grid sm:grid-cols-2 gap-3">
              {data.events.map(ev => <EventCard key={ev.id} event={ev} />)}
            </div>
          </div>
        )}

        {/* NEWS */}
        {data.news.length > 0 && (
          <div>
            <SectionTitle icon={Newspaper} title="News & Highlights" count={data.news.length} color="#0f2a44" />
            <div className="grid sm:grid-cols-2 gap-3">
              {data.news.map(n => <NewsCard key={n.id} item={n} />)}
            </div>
          </div>
        )}

        {/* MoUs */}
        {data.mous.length > 0 && (
          <div>
            <SectionTitle icon={Handshake} title="MoUs & Collaborations" count={data.mous.length} color="#0ea5e9" />
            <div className="grid sm:grid-cols-2 gap-3">
              {data.mous.map(m => <MoUCard key={m.id} mou={m} />)}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DeptCMSStrip;
