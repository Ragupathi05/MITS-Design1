export type DocLink = {
  title: string;
  url: string;
  type?: "pdf" | "video" | "link";
};

const BASE = "https://mits.ac.in/public/uploads/naac/";
const DVV = "https://mits.ac.in/public/uploads/dvv/";

export const NAAC_GRADE = "A+";
export const NAAC_CYCLE = "Cycle 1 (Reassessment 2020)";
export const NAAC_INSTITUTE = "Madanapalle Institute of Technology & Science";

export const accreditationCore: DocLink[] = [
  { title: "NAAC Certificate", url: BASE + "9b55cb6cdd40bf4ca955cdd3a5383031.pdf", type: "pdf" },
  { title: "Peer Team Report", url: BASE + "Peer%20Team%20Report.pdf", type: "pdf" },
  { title: "Self Study Report (SSR)", url: BASE + "MITS-Updated-SSR-16.pdf", type: "pdf" },
  { title: "MITS NAAC Visit Video", url: "https://mits.ac.in/assets/videos/MITS-NAAC.mp4", type: "video" },
];

export const cycle1Documents: DocLink[] = [
  { title: "NAAC Certificate", url: BASE + "9b55cb6cdd40bf4ca955cdd3a5383031.pdf", type: "pdf" },
  { title: "NAAC Institutional Grade Sheet", url: BASE + "Institutional_Grade_Sheet.pdf", type: "pdf" },
  { title: "NAAC Peer Team Report", url: BASE + "NAAC%20PEER%20TEAM%20REPORT.pdf", type: "pdf" },
  { title: "Peer Team Metric-wise Score Report", url: BASE + "NAAC%20Peer%20Team%20Metric%20wise%20Score%20Report.pdf", type: "pdf" },
  { title: "NAAC Revised Advisory Committee", url: BASE + "NAAC%20Revised%20Advisory%20Committee.pdf", type: "pdf" },
  { title: "NAAC Undertaking", url: BASE + "NAAC%20Undertaking.pdf", type: "pdf" },
  { title: "NAAC Declaration", url: BASE + "NAAC%20%20Declaration.pdf", type: "pdf" },
  { title: "IIQA", url: BASE + "IIQA.pdf", type: "pdf" },
  { title: "SSR of MITS", url: BASE + "SSR%20of%20MITS.pdf", type: "pdf" },
];

export const aisheReports: DocLink[] = [
  { title: "AISHE 2024-25", url: BASE + "AISHE%20Certificate%202024-25.pdf", type: "pdf" },
  { title: "AISHE 2023-24", url: BASE + "AISHE%20Certificate%202023-24.pdf", type: "pdf" },
  { title: "AISHE 2022-23", url: BASE + "AISHE%20Certificate%202022-23.pdf", type: "pdf" },
  { title: "AISHE 2021-22", url: BASE + "AISHE%20Certificate%202021-22.pdf", type: "pdf" },
  { title: "AISHE 2020-21", url: BASE + "AISHE_Certificate%202020-21.pdf", type: "pdf" },
  { title: "AISHE 2019-20", url: BASE + "AISHE%20Certificate-2019-20.pdf", type: "pdf" },
  { title: "AISHE 2018-19", url: BASE + "f5af7fa3126e73f5849448285357c15b.pdf", type: "pdf" },
  { title: "AISHE 2017-18", url: BASE + "abb32c1c49e24a4aa4cc09776ea9f0e5.pdf", type: "pdf" },
  { title: "AISHE 2016-17", url: BASE + "b888a17d471e9045000bf6179deb334b.pdf", type: "pdf" },
  { title: "AISHE 2015-16", url: BASE + "3ea2b62d7c31398763fa3b97008d33ec.pdf", type: "pdf" },
];

export type Criterion = {
  number: number;
  title: string;
  description: string;
  url: string;
};

export const criteria: Criterion[] = [
  { number: 1, title: "Curricular Aspects", description: "Curriculum design, development, planning and implementation aligned with the institution's vision.", url: "https://mits.ac.in/criterion/1" },
  { number: 2, title: "Teaching, Learning & Evaluation", description: "Student-centric methods, assessment processes and quality of learning experiences.", url: "https://mits.ac.in/criterion/2" },
  { number: 3, title: "Research, Innovations & Extension", description: "Promotion of research culture, innovation ecosystem and community engagement.", url: "https://mits.ac.in/criterion/3" },
  { number: 4, title: "Infrastructure & Learning Resources", description: "Adequate physical, academic and support infrastructure to facilitate effective teaching-learning.", url: "https://mits.ac.in/criterion/4" },
  { number: 5, title: "Student Support & Progression", description: "Student support services, scholarships, progression to higher studies and placements.", url: "https://mits.ac.in/criterion/5" },
  { number: 6, title: "Governance, Leadership & Management", description: "Institutional vision, governance practices, strategy deployment and financial management.", url: "https://mits.ac.in/criterion/6" },
  { number: 7, title: "Institutional Values & Best Practices", description: "Gender equity, environmental consciousness, inclusive practices and institutional distinctiveness.", url: "https://mits.ac.in/criterion/7" },
];

export const extendedProfileDVV: DocLink[] = [
  { title: "Number of programs offered year-wise for last five years", url: DVV + "EP-DVV-1.1.pdf", type: "pdf" },
  { title: "Number of departments offering academic programmes", url: DVV + "EP-DVV-1.2.pdf", type: "pdf" },
  { title: "Number of students year-wise during last five years", url: DVV + "EP-DVV-2.1.pdf", type: "pdf" },
  { title: "Number of outgoing / final year students year-wise during last five years", url: DVV + "EP-DVV-2.2.pdf", type: "pdf" },
  { title: "Number of students appeared in examinations conducted by the Institution", url: DVV + "EP-DVV-2.3.pdf", type: "pdf" },
  { title: "Number of revaluation applications year-wise during last five years", url: DVV + "EP-DVV-2.4.pdf", type: "pdf" },
  { title: "Number of courses in all programs year-wise during last five years", url: DVV + "EP-DVV-3.1.pdf", type: "pdf" },
  { title: "Number of full-time teachers year-wise during the last five years", url: DVV + "EP-DVV-3.2.pdf", type: "pdf" },
  { title: "Number of sanctioned posts year-wise during last five years", url: DVV + "EP-DVV-3.3.pdf", type: "pdf" },
  { title: "Number of eligible applications received for admissions year-wise", url: DVV + "EP-DVV-4.1.pdf", type: "pdf" },
  { title: "Number of seats earmarked for reserved category year-wise", url: DVV + "EP-DVV-4.2.pdf", type: "pdf" },
  { title: "Total number of classrooms and seminar halls", url: DVV + "EP-DVV-4.3.pdf", type: "pdf" },
  { title: "Total number of computers in the campus for academic purpose", url: DVV + "EP-DVV-4.4.pdf", type: "pdf" },
];

export const iqacLinks: DocLink[] = [
  { title: "Internal Quality Assurance Cell (IQAC) Portal", url: "#/iqac", type: "link" },
  { title: "IIQA Submission", url: BASE + "IIQA.pdf", type: "pdf" },
  { title: "NAAC Advisory Committee", url: BASE + "NAAC%20Revised%20Advisory%20Committee.pdf", type: "pdf" },
];

export const highlights = [
  { label: "NAAC Grade", value: "A+", note: "First Cycle Accreditation" },
  { label: "Deemed to be University", value: "2025", note: "Section 3 of UGC Act, 1956" },
  { label: "Established", value: "1998", note: "27+ Years of Legacy" },
  { label: "Criteria Covered", value: "7", note: "Comprehensive Assessment" },
];

export const coordinator = {
  office: "Internal Quality Assurance Cell (IQAC)",
  institute: "Madanapalle Institute of Technology & Science",
  address: "Post Box No. 4, Angallu, Madanapalle – 517325, Andhra Pradesh, India",
  email: "iqac@mits.ac.in",
  phone: "+91-7330803555",
};
