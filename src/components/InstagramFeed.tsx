import { useEffect, useMemo, useRef, useState } from "react";
import { Instagram, Play, ExternalLink, ArrowLeft, ArrowRight, Pause, PlayCircle } from "lucide-react";

interface IGItem {
  id: string;
  url: string;
  image: string;
  caption: string;
  date: string;
  isReel: boolean;
  pinned?: boolean;
  order: number;
}

const USERNAME = "mits_mpl";
const PROFILE_URL = `https://www.instagram.com/${USERNAME}/`;

function normalizeText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function parseProfileFeed(html: string): IGItem[] {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const links = Array.from(doc.querySelectorAll('article a[href*="/p/"], article a[href*="/reel/"]'));
  const seen = new Set<string>();
  const items: IGItem[] = [];

  links.forEach((anchor, index) => {
    const href = anchor.getAttribute("href") || "";
    if (!href || seen.has(href)) return;

    const image =
      anchor.querySelector("img")?.getAttribute("src") ||
      anchor.querySelector("img")?.getAttribute("srcset")?.split(",").pop()?.trim().split(" ")[0] ||
      "";
    const caption = normalizeText(
      anchor.querySelector("img")?.getAttribute("alt") ||
      anchor.getAttribute("aria-label") ||
      anchor.textContent ||
      ""
    );

    if (!image) return;
    seen.add(href);
    items.push({
      id: href,
      url: `https://www.instagram.com${href}`,
      image,
      caption,
      date: "",
      isReel: /\/reel\//i.test(href),
      order: index,
    });
  });

  return items;
}

const InstagramFeed = () => {
  const [items, setItems] = useState<IGItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(true);
  const itemsRef = useRef<IGItem[]>([]);

  const visibleItems = useMemo(
    () => [...items].sort((a, b) => {
      const pinnedA = a.pinned ? 1 : 0;
      const pinnedB = b.pinned ? 1 : 0;
      if (pinnedA !== pinnedB) return pinnedB - pinnedA;
      return a.order - b.order;
    }),
    [items]
  );

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const loadFeed = async (silent = false) => {
    if (!silent && mountedRef.current) {
      setLoading(true);
      setError(false);
    }

    const sourceUrls = [
      PROFILE_URL,
      `https://www.instagram.com/${USERNAME}/?__a=1&__d=dis`,
    ];

    for (const sourceUrl of sourceUrls) {
      try {
        const response = await fetch(sourceUrl, { credentials: "omit" });
        if (!response.ok) continue;

        const html = await response.text();
        const parsed = parseProfileFeed(html).slice(0, 30);

        if (parsed.length > 0) {
          if (mountedRef.current) {
            setItems(parsed);
            setError(false);
            setLoading(false);
          }
          return;
        }
      } catch {
        // Try the next source.
      }
    }

    if (mountedRef.current) {
      if (!silent || itemsRef.current.length === 0) {
        setError(true);
      }
      setLoading(false);
    }
  };

  const scrollByCardRow = (direction: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.max(240, Math.floor(el.clientWidth * 0.8));
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  const resetScrollIfNeeded = () => {
    const el = scrollRef.current;
    if (!el) return;
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 8) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    void loadFeed(false);

    const refreshHandle = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        void loadFeed(true);
      }
    }, 1000 * 60 * 15);

    return () => window.clearInterval(refreshHandle);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || loading || error || visibleItems.length === 0) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const autoScrollHandle = window.setInterval(() => {
      if (isPaused || document.visibilityState !== "visible") return;
      el.scrollLeft += 1;
      resetScrollIfNeeded();
    }, 24);

    return () => window.clearInterval(autoScrollHandle);
  }, [error, isPaused, loading, visibleItems.length]);

  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="flex flex-col gap-4 mb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-2">
            <h3 className="relative inline-block font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight">
              What&apos;s Trending <span className="text-gradient-red">On</span>
              <span className="absolute left-0 -bottom-2 h-1 w-24 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] shadow-[0_0_18px_rgba(221,42,123,0.35)]" />
            </h3>
          </div>

          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-[#0f172a] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <Instagram className="w-4 h-4 text-[#dd2a7b]" /> @{USERNAME}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          {!loading && !error && visibleItems.length > 0 && (
            <button
              type="button"
              onClick={() => setIsPaused((value) => !value)}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 border border-border text-[#0f172a] transition-colors hover:border-[#b30000] hover:text-[#b30000]"
            >
              {isPaused ? <Pause className="w-3.5 h-3.5" /> : <PlayCircle className="w-3.5 h-3.5" />}
              {isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            </button>
          )}
        </div>
      </div>

      {loading && (
        <div className="flex gap-4 overflow-hidden flex-1 min-h-0">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-[250px] sm:w-[268px] flex-shrink-0 rounded-[1.35rem] border border-border bg-white shadow-sm overflow-hidden animate-pulse">
              <div className="h-12 bg-gradient-to-r from-muted/70 via-muted/50 to-muted/70" />
              <div className="h-[320px] bg-muted/40" />
              <div className="p-4 space-y-2">
                <div className="h-3 w-24 rounded-full bg-muted/60" />
                <div className="h-3 w-full rounded-full bg-muted/50" />
                <div className="h-3 w-2/3 rounded-full bg-muted/50" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="flex-1 flex flex-col items-center justify-center text-center py-10 px-6 rounded-[1.35rem] border border-dashed border-border bg-white/80 min-h-[340px]">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center mb-3 shadow-lg">
            <Instagram className="w-7 h-7 text-white" />
          </div>
          <p className="font-display font-bold text-[#0f172a] mb-1">Follow us on Instagram</p>
          <p className="text-sm text-foreground/70 mb-4 max-w-xs">Live feed is temporarily unavailable. Open @{USERNAME} for the latest posts and reels.</p>
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

      {!loading && visibleItems.length > 0 && (
        <>
          <div className="hidden sm:flex items-center justify-between mb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b30000]">Latest posts and reels</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByCardRow(-1)}
                className="w-9 h-9 rounded-full border border-border bg-white text-[#0f172a] shadow-sm hover:bg-[#b30000] hover:text-white hover:border-[#b30000] transition-all"
                aria-label="Scroll Instagram feed left"
              >
                <ArrowLeft className="w-4 h-4 mx-auto" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCardRow(1)}
                className="w-9 h-9 rounded-full border border-border bg-white text-[#0f172a] shadow-sm hover:bg-[#b30000] hover:text-white hover:border-[#b30000] transition-all"
                aria-label="Scroll Instagram feed right"
              >
                <ArrowRight className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex-1 overflow-x-auto overflow-y-hidden pb-3 snap-x snap-mandatory scroll-smooth touch-pan-x rounded-[1.35rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: "touch", overscrollBehaviorX: "contain" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <div className="flex gap-4 min-w-max pr-2 h-full">
              {visibleItems.map((p) => (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group snap-start w-[250px] sm:w-[268px] flex-shrink-0 rounded-[1.35rem] border border-border bg-white overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.16)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="px-3.5 py-2.5 border-b border-border/70 bg-white/95 backdrop-blur flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Instagram className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <p className="text-[12px] leading-none font-semibold text-[#0f172a] truncate">MITS Madanapalle</p>
                        <span className="w-2 h-2 rounded-full bg-[#0f2a44] shrink-0" />
                      </div>
                      <p className="text-[11px] text-muted-foreground truncate">@{USERNAME}</p>
                    </div>
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold ${p.isReel ? "bg-[#8134af]/10 text-[#8134af]" : "bg-[#0f2a44]/10 text-[#0f2a44]"}`}>
                      {p.isReel ? <Play className="w-3 h-3" /> : <Instagram className="w-3 h-3" />}
                      {p.isReel ? "Reel" : "Post"}
                    </span>
                  </div>
                  <div className="relative w-full aspect-[4/5] bg-muted overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.caption || "Instagram post"}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { (e.currentTarget.style.display = "none"); }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-[#0f172a] shadow-sm backdrop-blur">
                      {p.pinned ? "Pinned" : "New"}
                    </div>
                    {p.isReel && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/72 text-white text-[10px] font-semibold backdrop-blur">
                        <Play className="w-2.5 h-2.5 fill-white" /> Reel
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-[#0f172a] text-[10px] font-semibold shadow-sm">
                      <ExternalLink className="w-2.5 h-2.5" /> Open post
                    </span>
                  </div>
                  <div className="px-3.5 py-3 bg-white flex-1 flex flex-col gap-2">
                    <p className="text-[11px] text-muted-foreground">{p.isReel ? "Reel" : "Post"}</p>
                    <p className="text-xs leading-relaxed text-foreground/85 line-clamp-3">{p.caption || "View on Instagram"}</p>
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
            Follow @{USERNAME} to see what&apos;s happening on campus
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </>
      )}
    </div>
  );
};

export default InstagramFeed;
