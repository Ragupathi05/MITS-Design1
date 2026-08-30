import { useState, useEffect, useCallback, useMemo } from "react";
import {
  fetchFacultyProfiles,
  apiFacultyToFacultyMember,
  apiFacultyToFacultyProfile,
  mapApiDeptToDeptKey,
  type APIFacultyMember,
} from "@/lib/facultyApi";
import { slugifyFaculty } from "@/lib/facultySlug";
import { departmentsData, type FacultyMember } from "@/data/departmentData";
import { facultyProfiles, type FacultyProfile } from "@/data/facultyProfiles";

// Shared in-memory cache to avoid duplicate network fetches across components
let sharedFacultyCache: APIFacultyMember[] | null = null;
let sharedFetchPromise: Promise<APIFacultyMember[]> | null = null;

// Precompute static images map for seamless fallback
const staticImageMap: Record<string, string> = {};
if (typeof window !== "undefined" || true) {
  try {
    Object.values(departmentsData).forEach((dept) => {
      dept.faculty?.forEach((f) => {
        if (f.image) {
          staticImageMap[slugifyFaculty(f.name)] = f.image;
        }
      });
    });
    Object.values(facultyProfiles).forEach((deptProfiles) => {
      Object.values(deptProfiles).forEach((p) => {
        if (p.image) {
          staticImageMap[slugifyFaculty(p.name)] = p.image;
        }
      });
    });
  } catch {
    // ignore
  }
}

export function useFacultyData() {
  const [facultyList, setFacultyList] = useState<APIFacultyMember[]>(sharedFacultyCache || []);
  const [loading, setLoading] = useState<boolean>(!sharedFacultyCache);
  const [error, setError] = useState<Error | null>(null);

  const loadData = useCallback(async (forceRefresh = false) => {
    if (!forceRefresh && sharedFacultyCache) {
      setFacultyList(sharedFacultyCache);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      if (!sharedFetchPromise || forceRefresh) {
        sharedFetchPromise = fetchFacultyProfiles(forceRefresh);
      }
      const data = await sharedFetchPromise;
      sharedFacultyCache = data;
      setFacultyList(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to load faculty profiles"));
    } finally {
      setLoading(false);
      sharedFetchPromise = null;
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  /**
   * Returns list of FacultyMember objects formatted for department grids
   */
  const getFacultyByDept = useCallback(
    (deptKey: string): FacultyMember[] => {
      const normalizedKey = deptKey.toLowerCase();
      const filtered = facultyList.filter((f) => {
        const mapped = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
        if (mapped === normalizedKey) return true;
        // Map both ai and aiml to CSE-AI records from database
        if ((normalizedKey === "aiml" || normalizedKey === "ai") && (mapped === "ai" || mapped === "aiml")) {
          return true;
        }
        return false;
      });

      // Designation sorting priority (Professors -> Associate -> Assistant -> Others)
      const getPriority = (d: string) => {
        const des = (d || "").toLowerCase();
        if (des.includes("hod") || des.includes("head")) return 1;
        if (des.includes("professor") && !des.includes("assistant") && !des.includes("associate")) return 2;
        if (des.includes("associate professor")) return 3;
        if (des.includes("assistant professor")) return 4;
        return 5;
      };

      return [...filtered]
        .sort((a, b) => {
          const pA = getPriority(a.designation);
          const pB = getPriority(b.designation);
          if (pA !== pB) return pA - pB;
          return a.fullName.localeCompare(b.fullName);
        })
        .map((f) => {
          const slug = slugifyFaculty(f.fullName);
          return apiFacultyToFacultyMember(f, staticImageMap[slug]);
        });
    },
    [facultyList]
  );

  /**
   * Returns raw API faculty records for a department
   */
  const getRawFacultyByDept = useCallback(
    (deptKey: string): APIFacultyMember[] => {
      const normalizedKey = deptKey.toLowerCase();
      return facultyList.filter((f) => {
        const mapped = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
        if (mapped === normalizedKey) return true;
        if ((normalizedKey === "aiml" || normalizedKey === "ai") && (mapped === "ai" || mapped === "aiml")) {
          return true;
        }
        return false;
      });
    },
    [facultyList]
  );

  /**
   * Finds a faculty member by URL slug and builds their rich profile
   */
  const getFacultyProfileBySlug = useCallback(
    (deptKey: string, slug: string): FacultyProfile | undefined => {
      const normalizedKey = deptKey.toLowerCase();
      const match = facultyList.find((f) => {
        const memberDept = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
        const memberSlug = slugifyFaculty(f.fullName);
        const matchesDept =
          memberDept === normalizedKey ||
          normalizedKey === "all" ||
          ((normalizedKey === "aiml" || normalizedKey === "ai") && (memberDept === "ai" || memberDept === "aiml"));
        return memberSlug === slug && matchesDept;
      }) || facultyList.find((f) => slugifyFaculty(f.fullName) === slug);

      if (match) {
        const profile = apiFacultyToFacultyProfile(match);
        if (!profile.image) {
          const s = slugifyFaculty(match.fullName);
          profile.image = staticImageMap[s];
        }
        return profile;
      }
      return undefined;
    },
    [facultyList]
  );

  /**
   * Finds raw API faculty member by slug or ID
   */
  const getRawFacultyBySlug = useCallback(
    (slugOrId: string, deptKey?: string): APIFacultyMember | undefined => {
      const normalizedKey = deptKey?.toLowerCase();
      return facultyList.find((f) => {
        if (f._id === slugOrId) return true;
        const memberSlug = slugifyFaculty(f.fullName);
        if (memberSlug !== slugOrId) return false;
        if (normalizedKey) {
          const memberDept = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
          return memberDept === normalizedKey;
        }
        return true;
      }) || facultyList.find((f) => slugifyFaculty(f.fullName) === slugOrId || f._id === slugOrId);
    },
    [facultyList]
  );

  /**
   * Search across all faculty members
   */
  const searchFaculty = useCallback(
    (query: string, deptKey?: string): APIFacultyMember[] => {
      if (!query && !deptKey) return facultyList;
      const q = query.toLowerCase().trim();
      const normalizedKey = deptKey?.toLowerCase();

      return facultyList.filter((f) => {
        if (normalizedKey) {
          const memberDept = mapApiDeptToDeptKey(f.department?.code, f.department?.name);
          if (memberDept !== normalizedKey) return false;
        }
        if (!q) return true;

        const nameMatch = f.fullName.toLowerCase().includes(q);
        const desMatch = f.designation?.toLowerCase().includes(q);
        const emailMatch = f.email?.toLowerCase().includes(q);
        const specMatch = f.specialization?.some((s) => s.toLowerCase().includes(q));
        const pubMatch = f.publications?.some((p) => p.title?.toLowerCase().includes(q));

        return nameMatch || desMatch || emailMatch || specMatch || pubMatch;
      });
    },
    [facultyList]
  );

  return useMemo(
    () => ({
      facultyList,
      loading,
      error,
      refresh: () => loadData(true),
      getFacultyByDept,
      getRawFacultyByDept,
      getFacultyProfileBySlug,
      getRawFacultyBySlug,
      searchFaculty,
    }),
    [
      facultyList,
      loading,
      error,
      loadData,
      getFacultyByDept,
      getRawFacultyByDept,
      getFacultyProfileBySlug,
      getRawFacultyBySlug,
      searchFaculty,
    ]
  );
}
