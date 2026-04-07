import { useState, useEffect } from "react";

export interface CMSEvent {
  id: string;
  department: string;
  title: string;
  date: string;
  description?: string;
  venue?: string;
  type?: string;
  image?: string;
}

export interface CMSNews {
  id: string;
  department: string;
  title: string;
  date: string;
  content?: string;
  category?: string;
  image?: string;
}

export interface CMSMoU {
  id: string;
  department: string;
  organization: string;
  purpose: string;
  year: string;
  country?: string;
}

export interface CMSContent {
  events: CMSEvent[];
  news: CMSNews[];
  mous: CMSMoU[];
}

// Static fallback data per department key
const FALLBACK_DATA: Record<string, CMSContent> = {
  cse: {
    events: [
      { id: "e1", department: "cse", title: "International Conference on AI & Data Science (ICADS 2024)", date: "March 15–16, 2024", description: "Two-day international conference bringing together researchers in Artificial Intelligence, Machine Learning, and Data Science.", venue: "MITS, Madanapalle", type: "Conference" },
      { id: "e2", department: "cse", title: "FDP on Deep Learning with TensorFlow 2.0", date: "December 18–22, 2023", description: "Five-day Faculty Development Programme funded by AICTE covering advanced deep learning frameworks.", venue: "MITS, Madanapalle", type: "FDP" },
      { id: "e3", department: "cse", title: "Smart India Hackathon – Internal Round", date: "September 10, 2023", description: "Internal selection round for Smart India Hackathon with 40+ student teams participating.", venue: "MITS Campus", type: "Hackathon" },
      { id: "e4", department: "cse", title: "Workshop on Cloud Computing & DevOps", date: "February 5–6, 2024", description: "Hands-on workshop covering AWS, Azure, Docker, and Kubernetes for students and faculty.", venue: "MITS, Madanapalle", type: "Workshop" },
    ],
    news: [
      { id: "n1", department: "cse", title: "CSE Department Receives NBA Accreditation for 2024–2027", date: "January 2024", content: "The Department of Computer Science & Engineering has received NBA accreditation for the next three years, recognizing its commitment to quality education.", category: "Accreditation" },
      { id: "n2", department: "cse", title: "IBM Center of Excellence Inaugurated at MITS", date: "October 2023", content: "MITS inaugurated an IBM Center of Excellence in collaboration with IBM India, offering students access to IBM tools and certifications.", category: "Industry" },
      { id: "n3", department: "cse", title: "Students Win First Prize at National Coding Championship", date: "December 2023", content: "Team CodeForce from CSE bagged first place at the National Coding Championship held at IIT Bombay.", category: "Achievement" },
      { id: "n4", department: "cse", title: "New DST-SERB Funded Project Worth ₹25 Lakhs Approved", date: "August 2023", content: "Dr. K. Subramanyam's research project on AI for Medical Imaging received ₹25 lakh funding from DST-SERB.", category: "Research" },
    ],
    mous: [
      { id: "m1", department: "cse", organization: "IBM India Pvt. Ltd.", purpose: "Center of Excellence in Artificial Intelligence and Cloud Computing", year: "2021", country: "India" },
      { id: "m2", department: "cse", organization: "Infosys BPO Ltd.", purpose: "Campus Connect Program – Training and Placement", year: "2020", country: "India" },
      { id: "m3", department: "cse", organization: "Microsoft Corporation (MSFT)", purpose: "Microsoft Azure Cloud Lab & Student Certification Program", year: "2022", country: "USA" },
      { id: "m4", department: "cse", organization: "TCS iON", purpose: "Skill Development & Online Assessment Platform", year: "2019", country: "India" },
    ],
  },
  eee: {
    events: [
      { id: "e1", department: "eee", title: "National Conference on Smart Grid & Renewable Energy", date: "February 10–11, 2024", description: "Conference on Smart Grid technologies and renewable energy integration.", venue: "MITS, Madanapalle", type: "Conference" },
      { id: "e2", department: "eee", title: "Workshop on Electric Vehicle Technology", date: "November 2023", description: "Interactive workshop on EV design, battery management systems, and charging infrastructure.", venue: "EEE Lab, MITS", type: "Workshop" },
    ],
    news: [
      { id: "n1", department: "eee", title: "EEE Department Signs MoU with APEPDCL", date: "March 2024", content: "The EEE Department has signed an MoU with AP Eastern Power Distribution Company for student internships and collaborative research.", category: "Industry" },
      { id: "n2", department: "eee", title: "Smart Grid Project Completed Successfully", date: "December 2023", content: "DST-SERB funded Smart Grid Integration project worth ₹18 lakhs completed with significant research publications.", category: "Research" },
    ],
    mous: [
      { id: "m1", department: "eee", organization: "APEPDCL", purpose: "Student Internships & Industry Training in Power Systems", year: "2024", country: "India" },
      { id: "m2", department: "eee", organization: "Siemens India", purpose: "Automation & Drives Technology Training", year: "2021", country: "India" },
    ],
  },
  me: {
    events: [
      { id: "e1", department: "me", title: "National Seminar on Advanced Manufacturing Technologies", date: "January 2024", description: "Seminar covering CNC, additive manufacturing, and Industry 4.0.", venue: "MITS, Madanapalle", type: "Seminar" },
      { id: "e2", department: "me", title: "CAD/CAM Workshop using CATIA & SolidWorks", date: "October 2023", description: "Practical training on CAD modelling and simulation tools.", venue: "CAD Lab, MITS", type: "Workshop" },
    ],
    news: [
      { id: "n1", department: "me", title: "ME Students Win National Robocon Competition", date: "February 2024", content: "Team RoboMITS from Mechanical Engineering won the regional round of ABU Robocon 2024.", category: "Achievement" },
    ],
    mous: [
      { id: "m1", department: "me", organization: "Bharat Heavy Electricals Ltd. (BHEL)", purpose: "Industrial Training and Research Collaboration in Thermal Engineering", year: "2020", country: "India" },
    ],
  },
};

const getGenericFallback = (deptKey: string): CMSContent => {
  return FALLBACK_DATA[deptKey] ?? { events: [], news: [], mous: [] };
};

export function useDeptCMSContent(deptKey: string) {
  const [data, setData] = useState<CMSContent>({ events: [], news: [], mous: [] });
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState<"live" | "static">("static");

  useEffect(() => {
    if (!deptKey) return;
    setLoading(true);

    const CMS_BASE = "https://ragupathi05.github.io/MITS-CMS-Portal";
    const endpoints = [
      `${CMS_BASE}/published/${deptKey}.json`,
      `${CMS_BASE}/data/departments/${deptKey}.json`,
      `${CMS_BASE}/api/${deptKey}.json`,
    ];

    let cancelled = false;

    const tryFetch = async () => {
      for (const url of endpoints) {
        try {
          const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
          if (res.ok) {
            const json: CMSContent = await res.json();
            if (!cancelled) {
              // Filter by department
              setData({
                events: json.events?.filter((e) => !e.department || e.department === deptKey) ?? [],
                news: json.news?.filter((n) => !n.department || n.department === deptKey) ?? [],
                mous: json.mous?.filter((m) => !m.department || m.department === deptKey) ?? [],
              });
              setSource("live");
              setLoading(false);
            }
            return;
          }
        } catch {
          // try next endpoint
        }
      }
      // All failed — use static fallback
      if (!cancelled) {
        setData(getGenericFallback(deptKey));
        setSource("static");
        setLoading(false);
      }
    };

    tryFetch();
    return () => { cancelled = true; };
  }, [deptKey]);

  return { data, loading, source };
}
