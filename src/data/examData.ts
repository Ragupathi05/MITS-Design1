// Examination portal data — sourced from official MITS pages:
//   https://mits.ac.in/university-exam  (current Deemed-to-be-University portal)
//   https://mits.ac.in/ugc-autonomous-exam-portal  (UGC-Autonomous archive)
//   https://mits.ac.in/results

export type ExamLink = {
  no?: number;
  title: string;
  href: string;
  kind?: "pdf" | "doc" | "xlsx" | "rar" | "link";
};

export type ExamGroup = {
  id: string;
  title: string;
  items: ExamLink[];
};

const pdf = (no: number, title: string, href: string): ExamLink => ({ no, title, href, kind: "pdf" });

// -------------------- UG PROGRAMMES (Deemed University, R25) --------------------
export const ugNotifications: ExamLink[] = [
  pdf(5, "Notification for B.Tech I Year I Semester (R25) Supplementary End Semester Examinations June 2026", "https://mits.ac.in/public/uploads/files/Notification%20for%20B.Tech%20I%20Year%20I%20Semester%20(R25)%20Supplementary%20End%20Semester%20Examinations%20June%202026.pdf"),
  pdf(4, "Notification for B.Tech I Year II Semester (R25) Regular End Semester Examinations June 2026", "https://mits.ac.in/public/uploads/files/Notification%20for%20B.Tech%20I%20Year%20II%20Semester%20(R25)%20Regular%20End%20Semester%20Examinations%20June%202026.pdf"),
  pdf(3, "Recounting Notification for B.Tech I Year I Semester (R25) Regular End Exams January 2026", "https://mits.ac.in/public/uploads/files/Recounting%20Notification%20for%20B.Tech%20I%20year%20I%20Semester%20(R25)%20Regular%20End%20Exams%20January%202026.pdf"),
  pdf(2, "Re-Evaluation Notification for B.Tech I Year I Semester (R25) Regular End Exams January 2026", "https://mits.ac.in/public/uploads/files/Re-Evaluation%20Notification%20for%20B.Tech%20I%20Year%20I%20Semester%20(R25)%20Regular%20End%20Exams%20January%202026.pdf"),
  pdf(1, "Notification for B.Tech I Year I Semester (R25) Regular End Semester Exams January 2026", "https://mits.ac.in/public/uploads/files/Notification%20for%20B.Tech%20I%20Year%20I%20Semester%20(R25)%20Regular%20End%20Semester%20Examinations%20January%202026.pdf"),
];

export const ugMidTermTimetables: ExamLink[] = [
  pdf(9, "Time Table for B.Tech I Year II Semester (R25) II Mid Exams June 2026", "https://mits.ac.in/public/uploads/ugc/Mid%20Exam%20Time%20Table%20for%20B.Tech%20I%20Year%20II%20Semester%20(R25)%20Exams%20June%202026-1.pdf"),
  pdf(12, "Engineering Graphics II Mid Time Table — B.Tech I Year II Semester (R25) June 2026", "https://mits.ac.in/public/uploads/exam/Engineering%20Graphics%20Mid%20Time%20Table%20for%20B.Tech%20I%20year%20II%20Semester%20(R25)%20Exams%20June%202026.pdf"),
  pdf(8, "Engineering Graphics Time Table — B.Tech I Year II Semester (R25) I Mid Exams April 2026", "https://mits.ac.in/public/uploads/ugc/Engineering%20Graphics%20Time%20Table%20for%20B.Tech%20I%20Year%20II%20Semester%20(R25)%20I%20Mid%20Exams%20April%202026.pdf"),
  pdf(7, "Time Table for B.Tech I Year II Semester (R25) I Mid Exams April 2026", "https://mits.ac.in/public/uploads/ugc/Time%20Table%20for%20B.Tech%20I%20Year%20II%20Semester%20(R25)%20I%20Mid%20Exams%20April%202026.pdf"),
  pdf(6, "Time Table for B.Tech I Year I Semester (R25) II Mid Exams January 2026", "https://mits.ac.in/public/uploads/ugc/Time%20Table%20for%20B.Tech%20I%20Year%20I%20Semester%20(R25)%20II%20Mid%20Exams%20January%202026.pdf"),
  pdf(3, "Engineering Graphics Mid Time Table — B.Tech I Year I Semester (R25) II Mid Exams Dec/Jan 2025-2026", "https://mits.ac.in/public/uploads/ugc/Engineering%20Graphics%20Time%20Table%20for%20B.Tech%20I%20Year%20I%20Semester%20(R25)%20II%20Mid%20Exams%20December-January-2025-2026.pdf"),
  pdf(2, "Engineering Graphics Mid Time Table — B.Tech I Year I Semester (R25) I Mid Exams November 2025", "https://mits.ac.in/public/uploads/ugc/Engineering%20Graphics%20Mid%20Time%20Table%20for%20B.Tech%20I%20Year%20I%20Semester%20(R25)%20November%202025.pdf"),
  pdf(1, "Time Table for B.Tech I Year I Semester (R25) I Mid Term Exams November 2025", "https://mits.ac.in/public/uploads/ugc/Time%20Table%20for-B.Tech%20I%20Year%20I%20Semester%20(R25)%20I%20Mid%20Term%20Exams%20November%202025.pdf"),
];

export const ugEndSemTimetables: ExamLink[] = [
  pdf(11, "Model Lab Time Table — B.Tech I Year II Semester (R25) Regular June 2026 (Physics Stream)", "https://mits.ac.in/public/uploads/exam/Model%20Lab%20Time%20Table%20for%20B.Tech%20I%20Year%20II%20Semester%20(R25)%20Regular%20Exams%20June%202026%20(Physics%20Stream).pdf"),
  pdf(10, "Model Lab Time Table — B.Tech I Year II Semester (R25) Regular June 2026 (Chemistry Stream)", "https://mits.ac.in/public/uploads/exam/Model%20Lab%20Time%20Table%20for%20B.Tech%20I%20Year%20II%20Semester%20(R25)%20Regular%20Exams%20June%202026%20(Chemistry%20Stream).pdf"),
  pdf(5, "Engineering Graphics Time Table — B.Tech I Year I Semester (R25) Regular End Exams January 2026", "https://mits.ac.in/public/uploads/exam/Engineering%20Graphics%20Time%20Table%20for%20B.Tech%20I%20Year%20I%20Semester%20(R25)%20Regular%20End%20Exams%20January%202026.pdf"),
  pdf(4, "Time Table for B.Tech I Year I Semester (R25) Regular End Exams January 2026 (Chemistry Stream)", "https://mits.ac.in/public/uploads/exam/Time%20Table%20for%20B.Tech%20I%20Year%20I%20Semester%20(R25)%20Regular%20End%20Exams%20January%202026%20(Chemistry%20Stream).pdf"),
  pdf(3, "Time Table for B.Tech I Year I Semester (R25) Regular End Exams January 2026 (Physics Stream)", "https://mits.ac.in/public/uploads/exam/Time%20Table%20for%20B.Tech%20I%20Year%20I%20Semester%20(R25)%20Regular%20End%20Exams%20January%202026%20(Physics%20Stream).pdf"),
  pdf(2, "B.Tech I Year I Semester (R25) Regular End Semester Practical Exams January 2026 (Chemistry Stream)", "https://mits.ac.in/public/uploads/exam/B.Tech%20I%20Year%20I%20Semester%20(R25)%20Regular%20End%20Semester%20Practical%20Exams%20January%202026(Chemistry%20Stream).pdf"),
  pdf(1, "B.Tech I Year I Semester (R25) Regular End Semester Practical Exams January 2026 (Physics Stream)", "https://mits.ac.in/public/uploads/exam/B.Tech%20I%20Year%20I%20Semester%20(R25)%20Regular%20End%20Semester%20Practical%20Exams%20January%202026(Physics%20Stream).pdf"),
];

export const ugFacultyFormats: ExamLink[] = [
  { no: 1, title: "End Semester Examinations — Invigilation Duty Substitution Letter", href: "https://mits.ac.in/public/uploads/ugc/ES_Invigilation_Substitute_Letter.docx", kind: "doc" },
  { no: 2, title: "UG External Lab Award Format (R23)", href: "https://mits.ac.in/public/uploads/ugc/UG_Ext_Lab_Award%20Format_R23.xlsx", kind: "xlsx" },
];

export const ugStudentFormats: ExamLink[] = [
  pdf(1, "Re-Evaluation Application Form", "https://mits.ac.in/public/uploads/ugc/Re%20Valuation-MITS%20DTBU_Application%20Form.pdf"),
  pdf(2, "Recounting Application Form", "https://mits.ac.in/public/uploads/ugc/Recounting-MITS%20DTBU_Application.pdf"),
];

export const ugDownloads: ExamLink[] = [
  pdf(1, "B.Tech I Year I Semester (R25) Regular End Semester Exams — Question Papers January 2026", "https://mits.ac.in/public/uploads/ugc/Question%20Papers%20for%20-B.Tech%20I%20Year%20I%20Semester%20(R25)%20Regular%20End%20Semester%20Exams%20January%202026.pdf"),
  pdf(3, "Academic Regulations R23", "https://mits.ac.in/public/uploads/ugc/B.Tech%20R23%20Regulations.pdf"),
  pdf(35, "Course Structure & Syllabi (R23) — B.Tech Civil Engineering", "https://mits.ac.in/public/uploads/ugc/B.Tech%20CIVIL-R23.pdf"),
  pdf(63, "UGC-Autonomous Academic Calendar 2025-26 — B.Tech II Year I & II Semesters", "https://mits.ac.in/public/uploads/ugc/UGC-Autonomous%20Academic%20Calendar%202025-26%20For%20B.Tech%20II%20Year%20I%20&%20II%20Semesters.pdf"),
  { no: 116, title: "B.Tech II Year II Semester (R23) End Semester Examinations — Applications (RAR archive)", href: "https://mits.ac.in/public/uploads/ugc/B.%20Tech%20II%20Year%20II%20Semester%20(R23)%20End%20Semester%20Examinations%20Applications.rar", kind: "rar" },
];

// -------------------- PG PROGRAMMES --------------------
export const pgNotifications: ExamLink[] = [
  pdf(1, "MBA I Year I Semester (R25) Regular End Semester Examinations January 2026", "https://mits.ac.in/public/uploads/ugc/MBA%20I%20Year%20I%20Semester%20(R25)%20Regular%20End%20Semester%20Examinations%20January%202026.pdf"),
  pdf(1, "MCA I Year I Semester (R25) Regular End Semester Examinations January 2026", "https://mits.ac.in/public/uploads/ugc/MCA%20I%20Year%20I%20Semester%20(R25)%20Regular%20End%20Semester%20Examinations%20%20January%202026.pdf"),
  pdf(1, "M.Tech (VLSI & ES) I Year I Semester (R25) Regular End Semester Examinations January 2026", "https://mits.ac.in/public/uploads/ugc/M.Tech%20(VLSI%20%20ES)%20I%20Year%20I%20Semester%20(R25)%20Regular%20End%20Semester%20Examinations%20January%202026.pdf"),
  pdf(2, "M.Tech (CSE) I Year I Semester Regular End Semester Examinations January 2026", "https://mits.ac.in/public/uploads/ugc/M.Tech%20(CSE)%20I%20Year%20I%20Semester%20Regular%20End%20Semester%20Examinations%20January%202026.pdf"),
];

// -------------------- RESULTS --------------------
export const ugResults: ExamLink[] = [
  { title: "UG Results — Announced from May 2024 onwards (Live Portal)", href: "http://125.16.54.154/mitsresults/resultug", kind: "link" },
  { title: "UG Results — Announced up to April 2024", href: "https://mits.ac.in/ugresults", kind: "link" },
  { title: "UG Recounting Results — Announced from May 2024 onwards", href: "https://mits.ac.in/recountingugresults", kind: "link" },
  pdf(1, "Re-Evaluation Results — B.Tech I Year I Semester (R25) Regular End Exams January 2026", "https://mits.ac.in/public/uploads/ugc/Re%20Evaluation%20Results%20for%20B.Tech%20I%20Year%20I%20Semester%20(R25)%20Regular%20End%20Exams%20January%202026.pdf"),
];

export const pgResults: ExamLink[] = [
  { title: "PG Results — Announced from May 2024 onwards (Live Portal)", href: "http://125.16.54.154/mitsresults/resultpg", kind: "link" },
  { title: "PG Results — Announced up to April 2024", href: "https://mits.ac.in/pgresults", kind: "link" },
  { title: "PG Recounting Results — Announced from May 2024 onwards", href: "https://mits.ac.in/recountingpgresults", kind: "link" },
];

// -------------------- APAAR / ABC --------------------
export const apaarAbc: ExamLink[] = [
  pdf(1, "Manual for APAAR / ABC ID Creation", "https://mits.ac.in/assets/pdf/exam/APAAR%20ID%20Creation.pdf"),
  { title: "Academic Bank of Credits (ABC) — Official Portal", href: "https://www.abc.gov.in/", kind: "link" },
  { title: "APAAR ID — Official Portal", href: "https://apaar.education.gov.in/", kind: "link" },
];

// -------------------- AUTONOMOUS (Archive) — top-30 recent --------------------
export const autonomousArchive: ExamLink[] = [
  pdf(436, "B.Tech III Year I Semester (R23) Supplementary End Exams May 2026", "https://mits.ac.in/ugc-autonomous-exam-portal"),
  pdf(435, "B.Tech III Year II Semester (R23) Regular End Semester Exams May 2026", "https://mits.ac.in/ugc-autonomous-exam-portal"),
  pdf(428, "B.Tech II Year II Semester (R23) Regular & Supplementary End Semester Exams May 2026", "https://mits.ac.in/ugc-autonomous-exam-portal"),
  pdf(420, "B.Tech IV Year II Semester (R20) Regular & Supplementary End Semester Exams April 2026", "https://mits.ac.in/ugc-autonomous-exam-portal"),
  pdf(412, "B.Tech II Year II Semester (R23) Supplementary End Semester Exams January 2026", "https://mits.ac.in/ugc-autonomous-exam-portal"),
];

// -------------------- CoE OFFICE --------------------
export const coeOffice = {
  name: "Dr. K. V. Narasimha Murthy",
  designation: "Controller of Examinations",
  address: "Madanapalle Institute of Technology & Science, Post Box No: 14, Kadiri Road, Angallu, Madanapalle — 517325, Andhra Pradesh, India",
  phone: "08571-280255, 280706",
  email: "coe@mits.ac.in",
};

// -------------------- CoE RESPONSIBILITIES --------------------
export const coeResponsibilities: string[] = [
  "Releasing examination Notifications, Circulars and Time Tables for all programmes.",
  "Managing registration for end-semester examinations.",
  "Issuing Hall Tickets to all eligible students.",
  "Acquiring mid-term and end-semester question papers confidentially.",
  "Conducting continuous internal assessments and end-semester examinations.",
  "Logistics — stationery, exam venues, invigilators, seating arrangements.",
  "Appointing examiners for practical end-semester examinations.",
  "Appointing examiners for spot evaluation of theory courses.",
  "Implementing measures to prevent malpractice and ensure integrity.",
  "Ensuring confidentiality of all examination materials.",
  "Compiling marks, processing results and verifying accuracy of final grades.",
  "Publishing student results accurately and in a timely manner.",
  "Awarding class to students who satisfy academic norms.",
  "Issuing Grade Cards, Transcripts, Provisional, Degree, Migration and Duplicate Certificates.",
  "Issuing CGPA-to-percentage conversion and Medium-of-Instruction certificates.",
  "Maintaining detailed examination records for audit and reference.",
  "Acting as central contact for exam grievances of students and faculty.",
  "Organising the Graduation Day Ceremony for successful candidates.",
  "Providing genuineness & verification services to government, institutions and verification agencies.",
];
