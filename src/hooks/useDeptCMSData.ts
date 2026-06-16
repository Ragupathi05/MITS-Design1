import { useState, useEffect } from "react";

const IS_LOCAL = typeof window !== "undefined" && window.location.hostname === "localhost";
const CMS_DIRECT = "https://mits-cms.freedev.app/backend/public_api";

const CMS_CODE: Record<string, string> = {
  cse:   "CSE",
  ce:    "CIVIL",
  eee:   "EEE",
  me:    "MECH",
  ece:   "ECE",
  ai:    "AI",
  aiml:  "AIML",
  cseds: "DS",
  csecs: "CS",
};

export interface CMSEvent {
  id: number;
  title: string;
  date?: string;
  from_date?: string;
  type?: string;
  event_type?: string;
  venue?: string;
  description?: string;
  poster?: string | null;
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
  year?: string;
  inventors?: string;
  patent_number?: string;
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

const EMPTY: CMSDeptData = {
  events: [], mous: [], achievements: [],
  patents: [], publications: [], placements: [], projects: [],
};

async function safeFetch<T>(endpoint: string, key: string): Promise<T[]> {
  const base = IS_LOCAL ? "/cms-api" : CMS_DIRECT;
  const url = base + "/" + endpoint;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) return [];
    const text = await res.text();
    if (text.trimStart().startsWith("<")) return [];
    const json = JSON.parse(text);
    return json.success ? ((json[key] as T[]) ?? []) : [];
  } catch {
    return [];
  }
}

function normalizeEvents(items: CMSEvent[]): CMSEvent[] {
  return items.map((e) => ({ ...e, type: e.type || e.event_type }));
}

function normalizeMoUs(items: CMSMoU[]): CMSMoU[] {
  return items.map((m) => ({
    ...m,
    organization: m.organization || m.partner_org || "",
  }));
}

export function useDeptCMSData(deptKey: string) {
  const [data, setData] = useState<CMSDeptData>(EMPTY);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cmsCode = CMS_CODE[deptKey];
    if (!deptKey || !cmsCode) { setLoading(false); return; }
    let cancelled = false;
    setLoading(true);

    const d = encodeURIComponent(cmsCode);
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
    });

    return () => { cancelled = true; };
  }, [deptKey]);

  return { data, loading };
}
