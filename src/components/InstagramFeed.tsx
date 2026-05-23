import { useEffect, useRef, useState } from "react";
import { Instagram, Play, ExternalLink } from "lucide-react";

interface IGItem {
  id: string;
  url: string;
  image: string;
  caption: string;
  date: string;
  isReel: boolean;
}

const USERNAME = "mits_mpl";
const PROFILE_URL = `https://www.instagram.com/${USERNAME}/`;

// Multiple public RSS-bridge sources tried in order.
const FEED_SOURCES = [
  `https://rsshub.app/instagram/user/${USERNAME}`,
  `https://rss-bridge.org/bridge01/?action=display&bridge=InstagramBridge&u=${USERNAME}&media_type=all&format=Atom`,
];
const CORS_PROXIES = [
  (u: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
  (u: string) => `https://corsproxy.io/?${encodeURIComponent(u)}`,
];

function timeAgo(iso: string): string {
  const d = new Date(iso).getTime();
  if (!d) return "";
  const diff = Math.max(0, Date.now() - d);
  const m = Math.floor(diff / 60000);
  if (m < 60) return `${m || 1}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const days = Math.floor(h / 24);
  if (days < 30) return `${days}d ago`;
  const mo = Math.floor(days / 30);
  if (mo < 12) return `${mo}mo ago`;
  return `${Math.floor(mo / 12)}y ago`;
}

function parseFeed(xml: string): IGItem[] {
  const doc = new DOMParser().parseFromString(xml, "text/xml");
  const items: IGItem[] = [];

  // RSS 2.0
  doc.querySelectorAll("item").forEach((node) => {
    const link = node.querySelector("link")?.textContent || "";
    const desc = node.querySelector("description")?.textContent || "";
    const title = node.querySelector("title")?.textContent || "";
    const pub = node.querySelector("pubDate")?.textContent || "";
    const imgMatch = desc.match(/<img[^>]+src="([^"]+)"/i);
    if (!link) return;
    items.push({
      id: link,
      url: link,
      image: imgMatch?.[1] || "",
      caption: title.replace(/<[^>]+>/g, "").trim(),
      date: pub ? new Date(pub).toISOString() : "",
      isReel: /\/reel\//i.test(link),
    });
  });

  // Atom (rss-bridge)
  if (items.length === 0) {
    doc.querySelectorAll("entry").forEach((node) => {
      const link = node.querySelector("link")?.getAttribute("href") || "";
      const content = node.querySelector("content")?.textContent || node.querySelector("summary")?.textContent || "";
      const title = node.querySelector("title")?.textContent || "";
      const updated = node.querySelector("updated")?.textContent || node.querySelector("published")?.textContent || "";
      const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i);
      if (!link) return;
      items.push({
        id: link,
        url: link,
        image: imgMatch?.[1] || "",
        caption: title.replace(/<[^>]+>/g, "").trim(),
        date: updated ? new Date(updated).toISOString() : "",
        isReel: /\/reel\//i.test(link),
      });
    });
  }

  return items.filter((i) => i.image);
}

const InstagramFeed = () => {
  const [items, setItems] = useState<IGItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const feed of FEED_SOURCES) {
        for (const proxy of CORS_PROXIES) {
          try {
            const res = await fetch(proxy(feed), { signal: AbortSignal.timeout(8000) });
            if (!res.ok) continue;
            const txt = await res.text();
            const parsed = parseFeed(txt);
            if (parsed.length > 0 && !cancelled) {
              setItems(parsed.slice(0, 30));
              setLoading(false);
              return;
            }
          } catch {
            // try next
          }
        }
      }
      if (!cancelled) {
        setLoading(false);
        setError(true);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f172a]">
          What's Trending <span className="text-[#b30000]">On</span>
        </h3>
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#b30000] hover:gap-2 transition-all"
        >
          <Instagram className="w-4 h-4" /> @{USERNAME}
        </a>
      </div>

      {loading && (
        <div className="flex gap-3 overflow-hidden flex-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-[220px] sm:w-[240px] flex-shrink-0 rounded-xl border border-border bg-muted/30 animate-pulse">
              <div className="h-12 bg-muted/60 rounded-t-xl" />
              <div className="h-64 bg-muted/40" />
              <div className="h-14 bg-muted/30 rounded-b-xl" />
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="flex-1 flex flex-col items-center justify-center text-center py-10 px-6 rounded-xl border border-dashed border-border bg-muted/20">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center mb-3 shadow-md">
            <Instagram className="w-7 h-7 text-white" />
          </div>
          <p className="font-display font-bold text-[#0f172a] mb-1">Follow us on Instagram</p>
          <p className="text-sm text-foreground/70 mb-4 max-w-xs">Live feed is loading from @{USERNAME}. Visit our page for the latest posts and reels.</p>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white text-sm font-semibold shadow-md hover:scale-105 transition-transform"
          >
            <Instagram className="w-4 h-4" /> Open Instagram
          </a>
        </div>
      )}

      {!loading && !error && items.length > 0 && (
        <>
          <div
            ref={scrollRef}
            className="flex-1 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary/40 [&::-webkit-scrollbar-thumb]:rounded-full"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex gap-3 min-w-max pr-2 h-full">
              {items.map((p) => (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group snap-start w-[220px] sm:w-[240px] flex-shrink-0 rounded-xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="px-3 py-2 border-b border-border/70 bg-white flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12px] leading-none font-semibold text-[#0f172a] truncate">MITS Madanapalle</p>
                      <p className="text-[11px] text-muted-foreground truncate">@{USERNAME}</p>
                    </div>
                  </div>
                  <div className="relative w-full aspect-square bg-muted overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.caption || "Instagram post"}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { (e.currentTarget.style.display = "none"); }}
                    />
                    {p.isReel && (
                      <span className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black/70 text-white text-[10px] font-semibold backdrop-blur">
                        <Play className="w-2.5 h-2.5 fill-white" /> Reel
                      </span>
                    )}
                    <span className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 text-[#0f172a] text-[10px] font-semibold">
                      <ExternalLink className="w-2.5 h-2.5" /> Open
                    </span>
                  </div>
                  <div className="px-3 py-2.5 bg-white flex-1">
                    {p.date && <p className="text-[11px] text-muted-foreground mb-1">{timeAgo(p.date)}</p>}
                    <p className="text-xs leading-relaxed text-foreground/85 line-clamp-2">{p.caption || "View on Instagram"}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-[#b30000] text-sm font-medium hover:underline self-start"
          >
            Follow @{USERNAME} to see what's happening on campus
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </>
      )}
    </div>
  );
};

export default InstagramFeed;
