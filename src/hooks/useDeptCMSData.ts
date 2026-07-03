import { useState, useEffect } from "react";

const IS_LOCAL = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
const CMS_DIRECT = "https://mits-cms.freedev.app/backend/public_api";
// In production (GitHub Pages) we read pre-fetched static JSON baked at build time.
// This avoids all CORS issues. The files live at /MITS-Design1/cms-data/<deptKey>/<endpoint>.json
const STATIC_BASE = "/MITS-Design1/cms-data";

async function staticFetch<T>(deptKey: string, endpoint: string, key: string): Promise<T[]> {
  try {
    const res = await fetch(`${STATIC_BASE}/${deptKey}/${endpoint}.json`, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) return [];
    const json = await res.json();
    return json.success ? ((json[key] as T[]) ?? []) : [];
  } catch {
    return [];
  }
}

const CMS_CODE: Record<string, string> = {
  cse:   "CSE",
  ce:    "CE",
  civil: "CE",
  eee:   "EEE",
  me:    "MECH",
  ece:   "ECE",
  ai:    "AI",
  aiml:  "AIML",
  cseds: "CSEDS",
  csecs: "CSECS",
  mca:   "MCA",
  mba:   "MBA",
};

export interface CMSEvent {
  id: number;
  title: string;
  date?: string;
  from_date?: string;
  to_date?: string;
  from_time?: string | null;
  to_time?: string | null;
  type?: string;
  event_type?: string;
  venue?: string;
  department?: string;
  description?: string;
  poster?: string | null;
  // detail fields (populated by event_detail.php)
  posterDataUrl?: string | null;
  gallery?: string[];
  registrationLink?: string | null;
  registrationDeadline?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  sponsorOrg?: string | null;
  sponsorAmount?: string | null;
  collaborationDept?: string | null;
  approvedBudget?: string | null;
  totalRegistered?: number | null;
  totalAttended?: number | null;
  feedbackLink?: string | null;
  createdAt?: string;
  coordinators?: CMSEventCoordinator[];
  resourcePersons?: CMSEventResourcePerson[];
}

export interface CMSEventCoordinator {
  id: number;
  name: string;
  role?: string;
  type?: string;  // 'faculty' | 'student'
  phone?: string;
  email?: string;
}

export interface CMSEventResourcePerson {
  id: number;
  name: string;
  designation?: string;
  organization?: string;
  topic?: string;
}

export interface CMSMoU {
  id: number;
  title: string;
  organization: string;
  partner_org?: string;
  purpose?: string;
  country?: string;
  year: string;
  status?: string;
  collabAreas?: string[];
}

export interface CMSAchievement {
  id: number;
  title: string;
  type: "faculty" | "student";
  name?: string;
  date?: string;
  description?: string;
  external_link?: string;
}

export interface CMSPatent {
  id: number;
  title: string;
  status: "Filed" | "Published" | "Granted";
  patent_type?: string;
  year?: string;
  inventors?: string;
  patent_number?: string;
  application_number?: string;
  abstract?: string;
  external_link?: string;
}

export interface CMSPublication {
  id: number;
  title: string;
  type: "journal" | "conference";
  year: string;
  authors?: string;
  venue?: string;
  doi?: string;
  indexing?: string;
  citationCount?: number;
  external_link?: string;
}

export interface CMSPlacement {
  id: number;
  subtype: "Placement" | "Internship" | "Training";
  studentName?: string;
  rollNumber?: string;
  companyName?: string;
  package?: string;
  role?: string;
  year?: string;
  programTitle?: string;
  conductedBy?: string;
  startDate?: string;
  endDate?: string;
  numberOfStudents?: number;
  description?: string;
}

export interface CMSProject {
  id: number;
  title: string;
  students?: string;
  guide?: string;
  stack?: string;
  github?: string;
  demo?: string;
  description?: string;
  academicYear?: string;
}

export interface CMSDeptData {
  events: CMSEvent[];
  mous: CMSMoU[];
  achievements: CMSAchievement[];
  patents: CMSPatent[];
  publications: CMSPublication[];
  placements: CMSPlacement[];
  projects: CMSProject[];
}

// Solve the AES-CBC cookie challenge the CMS server sends to non-browser clients.
// The challenge HTML embeds three hex strings (key a, iv b, ciphertext c);
// we decrypt c with AES-128-CBC(a, b) and set __test=<hex result> as a cookie,
// then retry the original request.
async function solveCMSChallenge(html: string, retryUrl: string): Promise<string | null> {
  const match = (pat: RegExp) => { const m = html.match(pat); return m ? m[1] : null; };
  const aHex = match(/\ba=toNumbers\("([0-9a-f]+)"\)/);
  const bHex = match(/\bb=toNumbers\("([0-9a-f]+)"\)/);
  const cHex = match(/\bc=toNumbers\("([0-9a-f]+)"\)/);
  if (!aHex || !bHex || !cHex) return null;
  try {
    // Use Web Crypto (AES-CBC decrypt)
    const hexToBytes = (h: string) => new Uint8Array(h.match(/../g)!.map(b => parseInt(b, 16)));
    const key = await crypto.subtle.importKey("raw", hexToBytes(aHex), { name: "AES-CBC" }, false, ["decrypt"]);
    const decrypted = await crypto.subtle.decrypt({ name: "AES-CBC", iv: hexToBytes(bHex) }, key, hexToBytes(cHex));
    const cookieVal = Array.from(new Uint8Array(decrypted)).map(b => b.toString(16).padStart(2, "0")).join("");
    // Set the cookie and retry
    document.cookie = `__test=${cookieVal}; max-age=21600; path=/`;
    const res = await fetch(retryUrl, { credentials: "include", signal: AbortSignal.timeout(10000) });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

async function safeFetch<T>(endpoint: string, key: string): Promise<T[]> {
  const base = IS_LOCAL ? "/cms-api" : CMS_DIRECT;
  const url = base + "/" + endpoint;
  try {
    const res = await fetch(url, { credentials: "include", signal: AbortSignal.timeout(10000) });
    if (!res.ok) return [];
    let text = await res.text();
    // CMS bot-protection challenge — solve it and retry once
    if (text.trimStart().startsWith("<")) {
      text = (await solveCMSChallenge(text, url)) ?? "";
    }
    if (!text || text.trimStart().startsWith("<")) return [];
    const json = JSON.parse(text);
    return json.success ? ((json[key] as T[]) ?? []) : [];
  } catch {
    return [];
  }
}

function normalizeEvents(items: CMSEvent[]): CMSEvent[] {
  return items.map((e) => ({
    ...e,
    type: e.type || e.event_type,
    // In dev, rewrite image URLs through the Vite proxy
    poster: IS_LOCAL && e.poster
      ? e.poster.replace("https://mits-cms.freedev.app/backend", "/cms-api")
      : (e.poster ?? null),
  }));
}

function normalizeMoUs(items: CMSMoU[]): CMSMoU[] {
  return items.map((m) => ({
    ...m,
    organization: m.organization || m.partner_org || "",
  }));
}

export async function fetchEventDetail(id: number): Promise<CMSEvent | null> {
  if (!IS_LOCAL) {
    // Production: read from pre-fetched static event detail file
    for (const deptKey of Object.keys(CMS_CODE)) {
      try {
        const res = await fetch(`${STATIC_BASE}/${deptKey}/event_${id}.json`, { signal: AbortSignal.timeout(5000) });
        if (!res.ok) continue;
        const json = await res.json();
        if (json.success && json.event) return json.event as CMSEvent;
      } catch { continue; }
    }
    return null;
  }
  const base = IS_LOCAL ? "/cms-api" : CMS_DIRECT;
  const url = `${base}/event_detail.php?id=${id}`;
  try {
    const res = await fetch(url, { credentials: "include", signal: AbortSignal.timeout(15000) });
    if (!res.ok) return null;
    let text = await res.text();
    if (text.trimStart().startsWith("<")) {
      text = (await solveCMSChallenge(text, url)) ?? "";
    }
    if (!text || text.trimStart().startsWith("<")) return null;
    const json = JSON.parse(text);
    if (!json.success) return null;
    const ev = json.event as CMSEvent;
    // In dev, rewrite image URLs to go through the Vite proxy
    if (IS_LOCAL) {
      const rewrite = (url: string | null | undefined) =>
        url ? url.replace("https://mits-cms.freedev.app/backend", "/cms-api") : url;
      ev.poster = rewrite(ev.poster) ?? null;
      ev.gallery = (ev.gallery ?? []).map((u) => rewrite(u) ?? u);
    }
    return ev;
  } catch {
    return null;
  }
}

export function useDeptCMSData(deptKey: string) {
  const [data, setData] = useState<CMSDeptData>({
    events: [], mous: [], achievements: [],
    patents: [], publications: [], placements: [], projects: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cmsCode = CMS_CODE[deptKey];
    if (!deptKey || !cmsCode) {
      setData({ events: [], mous: [], achievements: [], patents: [], publications: [], placements: [], projects: [] });
      setLoading(false);
      return;
    }
    let cancelled = false;

    // Reset to empty + show loading IMMEDIATELY so stale data from a
    // previous department never bleeds into the new department's view.
    setData({ events: [], mous: [], achievements: [], patents: [], publications: [], placements: [], projects: [] });
    setLoading(true);

    const d = encodeURIComponent(cmsCode);

    if (IS_LOCAL) {
      // Dev: fetch live from CMS via Vite proxy
      Promise.all([
        safeFetch<CMSEvent>       ("events.php?dept=" + d,       "events"),
        safeFetch<CMSMoU>         ("mous.php?dept=" + d,         "mous"),
        safeFetch<CMSAchievement> ("achievements.php?dept=" + d, "achievements"),
        safeFetch<CMSPatent>      ("patents.php?dept=" + d,      "patents"),
        safeFetch<CMSPublication> ("publications.php?dept=" + d, "publications"),
        safeFetch<CMSPlacement>   ("placements.php?dept=" + d,   "placements"),
        safeFetch<CMSProject>     ("projects.php?dept=" + d,     "projects"),
      ]).then(([events, mous, achievements, patents, publications, placements, projects]) => {
        if (!cancelled) {
          setData({
            events: normalizeEvents(events),
            mous: normalizeMoUs(mous),
            achievements,
            patents,
            publications,
            placements,
            projects,
          });
          setLoading(false);
        }
      }).catch(() => {
        if (!cancelled) setLoading(false);
      });
    } else {
      // Production: read pre-built static JSON files (no CORS)
      Promise.all([
        staticFetch<CMSEvent>       (deptKey, "events",       "events"),
        staticFetch<CMSMoU>         (deptKey, "mous",         "mous"),
        staticFetch<CMSAchievement> (deptKey, "achievements", "achievements"),
        staticFetch<CMSPatent>      (deptKey, "patents",      "patents"),
        staticFetch<CMSPublication> (deptKey, "publications", "publications"),
        staticFetch<CMSPlacement>   (deptKey, "placements",   "placements"),
        staticFetch<CMSProject>     (deptKey, "projects",     "projects"),
      ]).then(([events, mous, achievements, patents, publications, placements, projects]) => {
        if (!cancelled) {
          setData({
            events: normalizeEvents(events),
            mous: normalizeMoUs(mous),
            achievements,
            patents,
            publications,
            placements,
            projects,
          });
          setLoading(false);
        }
      }).catch(() => {
        if (!cancelled) setLoading(false);
      });
    }

    return () => { cancelled = true; };
  }, [deptKey]);

  return { data, loading };
}
