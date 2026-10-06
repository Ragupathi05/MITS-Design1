/**
 * Madanapalle Institute of Technology & Science (MITS)
 * Department Under Graduate & Course Syllabus Data
 */

import { Subject } from "./departmentData";

export interface SyllabusRow {
  sno: string;
  name: string;
  type: string;
  credits: string;
}

export interface SyllabusTable {
  title: string;
  headers: string[];
  rows: SyllabusRow[];
}

export interface UnderGraduateData {
  programTitle: string;
  programOverview: string;
  syllabusTables?: SyllabusTable[];
}

// AI & ML (and Networks) complete R23 syllabus tables scraped from mits.ac.in/cse-ai-ml#ug-tab50
export const aimlUnderGraduateData: UnderGraduateData = {
  programTitle: "Bachelor of Technology (B.Tech) Program",
  programOverview:
    "The Department offers an outstanding undergraduate program aligned with the evolving needs of the IT industry. The curriculum is designed to be flexible, enabling students to prepare for advanced specializations. A wide range of elective courses is offered, allowing students to plan their academic journey effectively. The program maintains a well-balanced structure of mandatory and elective courses, ensuring both strong foundational knowledge and opportunities for specialization.",
  syllabusTables: [
    {
      title: "CSE - (AI & ML) First Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Linear Algebra and Calculus", type: "Theory", credits: "3" },
        { sno: "2", name: "Engineering Physics", type: "Theory", credits: "3" },
        { sno: "3", name: "Basic Electrical and Electronics Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Introduction to Programming", type: "Theory", credits: "3" },
        { sno: "5", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "6", name: "Engineering Physics Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Electrical and Electronics Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Computer Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "IT Workshop", type: "Lab", credits: "1" },
        { sno: "10", name: "NSS / NCC / Scouts and Guides / Community Service", type: "Activity", credits: "0.5" }
      ]
    },
    {
      title: "CSE - (AI & ML) First Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Communicative English", type: "Theory", credits: "2" },
        { sno: "2", name: "Differential Equations and Vector Calculus", type: "Theory", credits: "3" },
        { sno: "3", name: "Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "Basic Civil and Mechanical Engineering", type: "Theory", credits: "3" },
        { sno: "5", name: "Data Structures", type: "Theory", credits: "3" },
        { sno: "6", name: "Communicative English Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Chemistry Laboratory", type: "Lab", credits: "1" },
        { sno: "8", name: "Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Data Structures Laboratory", type: "Lab", credits: "1.5" },
        { sno: "10", name: "Health and Wellness, Yoga and Sports", type: "Activity", credits: "0.5" }
      ]
    },
    {
      title: "CSE - (AI & ML) Second Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Universal Human Values", type: "Theory", credits: "3" },
        { sno: "2", name: "Economics and Financial Accounting For Engineers", type: "Theory", credits: "2" },
        { sno: "3", name: "Probability and Statistics for Computer Science", type: "Theory", credits: "3" },
        { sno: "4", name: "Digital Logic and Computer Organization", type: "Theory", credits: "3" },
        { sno: "5", name: "Python Programming", type: "Theory", credits: "3" },
        { sno: "6", name: "Python Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Database Management Systems Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "JAVA Programming", type: "Theory", credits: "2" }
      ]
    },
    {
      title: "CSE - (AI & ML) Second Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Discrete Mathematical Structures", type: "Theory", credits: "3" },
        { sno: "2", name: "Innovation and Incubation Courses", type: "Theory", credits: "2" },
        { sno: "3", name: "Machine Learning", type: "Theory", credits: "3" },
        { sno: "4", name: "Principles of Artificial Intelligence", type: "Theory", credits: "3" },
        { sno: "5", name: "Advanced Data Structures and Algorithms Analysis", type: "Theory", credits: "3" },
        { sno: "6", name: "Artificial Intelligence and Machine Learning Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Advanced Data Structures and Algorithms Analysis Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Full Stack Development - I", type: "Theory", credits: "2" },
        { sno: "9", name: "Environmental Science", type: "Theory", credits: "-" }
      ]
    },
    {
      title: "CSE - (Networks) First Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Linear Algebra and Calculus", type: "Theory", credits: "3" },
        { sno: "2", name: "Engineering Physics", type: "Theory", credits: "3" },
        { sno: "3", name: "Basic Electrical and Electronics Engineering", type: "Theory", credits: "3" },
        { sno: "4", name: "Introduction to Programming", type: "Theory", credits: "3" },
        { sno: "5", name: "Engineering Graphics", type: "Theory", credits: "3" },
        { sno: "6", name: "Engineering Physics Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Electrical and Electronics Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Computer Programming Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "IT Workshop", type: "Lab", credits: "1" },
        { sno: "10", name: "NSS / NCC / Scouts and Guides / Community Service", type: "Activity", credits: "0.5" }
      ]
    },
    {
      title: "CSE - (Networks) First Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Communicative English", type: "Theory", credits: "2" },
        { sno: "2", name: "Differential Equations and Vector Calculus", type: "Theory", credits: "3" },
        { sno: "3", name: "Chemistry", type: "Theory", credits: "3" },
        { sno: "4", name: "Basic Civil and Mechanical Engineering", type: "Theory", credits: "3" },
        { sno: "5", name: "Data Structures", type: "Theory", credits: "3" },
        { sno: "6", name: "Communicative English Laboratory", type: "Lab", credits: "1" },
        { sno: "7", name: "Chemistry Laboratory", type: "Lab", credits: "1" },
        { sno: "8", name: "Engineering Workshop", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Data Structures Laboratory", type: "Lab", credits: "1.5" },
        { sno: "10", name: "Health and Wellness, Yoga and Sports", type: "Activity", credits: "0.5" }
      ]
    },
    {
      title: "CSE - (Networks) Second Year I Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Universal Human Values", type: "Theory", credits: "3" },
        { sno: "2", name: "Economics and Financial Accounting For Engineers", type: "Theory", credits: "2" },
        { sno: "3", name: "Probability and Statistics for Computer Science", type: "Theory", credits: "3" },
        { sno: "4", name: "Digital Logic and Computer Organization", type: "Theory", credits: "3" },
        { sno: "5", name: "Object-Oriented Programming Through JAVA", type: "Theory", credits: "3" },
        { sno: "6", name: "Operating Systems", type: "Theory", credits: "3" },
        { sno: "7", name: "Object-Oriented Programming Through JAVA Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Operating Systems Laboratory", type: "Lab", credits: "1.5" },
        { sno: "9", name: "Python Programming", type: "Theory", credits: "2" }
      ]
    },
    {
      title: "CSE - (Networks) Second Year II Semester - R23",
      headers: ["S.No", "Name of the Subject", "Theory/Lab", "Credits"],
      rows: [
        { sno: "1", name: "Discrete Mathematical Structures", type: "Theory", credits: "3" },
        { sno: "2", name: "Innovation and Incubation Courses", type: "Theory", credits: "2" },
        { sno: "3", name: "Data Communications and Computer Networks", type: "Theory", credits: "3" },
        { sno: "4", name: "Automata Theory and Compiler Design", type: "Theory", credits: "3" },
        { sno: "5", name: "Advanced Data Structures and Algorithms Analysis", type: "Theory", credits: "3" },
        { sno: "6", name: "Computer Networks Laboratory", type: "Lab", credits: "1.5" },
        { sno: "7", name: "Advanced Data Structures and Algorithms Analysis Laboratory", type: "Lab", credits: "1.5" },
        { sno: "8", name: "Data Science using Python", type: "Theory", credits: "2" },
        { sno: "9", name: "Environmental Science", type: "Theory", credits: "-" }
      ]
    }
  ]
};

/**
 * Returns undergraduate program and syllabus data for any department.
 * Defaults to a formatted curriculum table based on existing subjects if custom tables are not yet registered.
 */
export function getDepartmentUnderGraduate(deptKey: string, deptSubjects: Subject[] = []): UnderGraduateData {
  if (deptKey === "aiml" || deptKey === "cse-ai-ml" || deptKey === "ai") {
    return aimlUnderGraduateData;
  }

  // Generate syllabus tables grouped by semester from deptSubjects if available
  const semMap = new Map<number, Subject[]>();
  deptSubjects.forEach(s => {
    const list = semMap.get(s.semester) || [];
    list.push(s);
    semMap.set(s.semester, list);
  });

  const syllabusTables: SyllabusTable[] = [];
  const semNumbers = Array.from(semMap.keys()).sort((a, b) => a - b);

  if (semNumbers.length > 0) {
    semNumbers.forEach(sem => {
      const subs = semMap.get(sem) || [];
      syllabusTables.push({
        title: `Semester ${sem} Curriculum`,
        headers: ["S.No", "Name of the Subject", "Type", "Credits"],
        rows: subs.map((sub, idx) => ({
          sno: String(idx + 1),
          name: sub.name,
          type: sub.type.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase()),
          credits: sub.type === "core" ? "3" : sub.type === "elective" ? "3" : "1.5"
        }))
      });
    });
  }

  return {
    programTitle: "Bachelor of Technology (B.Tech) Program",
    programOverview:
      "The Department offers an outstanding undergraduate program aligned with the evolving needs of the industry. The curriculum is designed to be flexible, enabling students to prepare for advanced specializations. A wide range of elective courses is offered, allowing students to plan their academic journey effectively. The program maintains a well-balanced structure of mandatory and elective courses, ensuring both strong foundational knowledge and opportunities for specialization.",
    syllabusTables: syllabusTables.length > 0 ? syllabusTables : undefined
  };
}
