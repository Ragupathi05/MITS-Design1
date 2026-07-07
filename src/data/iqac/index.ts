// IQAC Portal data — sourced from https://mits.ac.in/newiqac1
// All PDFs preserved with official URLs.

export type Doc = { title: string; url: string; type?: "pdf" | "link" | "video" | "doc" | "xlsx" | "zip" };
export type YearGroup = { year: string; docs: Doc[] };

const PDF = "https://mits.ac.in/assets/pdf/iqac/";
const ADMIN = "https://mits.ac.in/assets/pdf/admin/";
const UP = "https://mits.ac.in/public/uploads/";

// ---------------- ABOUT ----------------
export const about = {
  intro: [
    "In pursuance of its Action Plan for performance evaluation, assessment & accreditation & quality up-gradation of institutions of higher education, NAAC proposes that every accredited institution should establish an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. Since quality enhancement is a continuous process, the IQAC will become a part of the institution's system & work towards realisation of the goals of quality enhancement & sustenance.",
    "The prime task of the IQAC is to develop a system for conscious, consistent & catalytic improvement in the overall performance of institutions. For this, during the post-accreditation period, it will channelize all efforts & measures of the institution towards promoting its holistic academic excellence.",
    "The IQAC at MITS operates not as a hierarchical structure or a mere record-keeping exercise but as a facilitating and participatory voluntary entity. It possesses the potential to serve as a catalyst for enhancing quality by implementing planned interventionist strategies, similar to the concept of 'Quality Circles' in industries.",
  ],
  vision:
    "To make quality the defining element of higher education in India through a combination of self and external quality evaluation, promotion, and sustenance initiatives, while simultaneously striving to become a globally recognized research and academic institution contributing to the technological and socio-economic development of the nation.",
  mission: [
    "Conducting regular assessments and accreditation of higher education institutions, their units, academic programs, and projects.",
    "Fostering an academic atmosphere that enhances the quality of teaching, learning, and research in higher education institutions.",
    "Promoting self-evaluation, accountability, autonomy, and innovation in higher education.",
    "Engaging in research studies, consultancy, and training programs related to quality assurance.",
    "Collaborating with various stakeholders in the field of higher education to ensure the evaluation, promotion, and sustainability of quality standards.",
  ],
};

// ---------------- OBJECTIVES & STRATEGIES ----------------
export const objectives = [
  "To develop a quality system for conscious, consistent and catalytic programmed action to improve the academic and administrative performance of the Institution.",
  "To promote measures for institutional functioning towards quality enhancement through internationalization of quality culture and institutionalization of best practices.",
];

export const strategies = [
  "Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks.",
  "The relevance and quality of academic and research programmes.",
  "Equitable access to and affordability of academic programmes for various sections of society.",
  "Optimization and integration of modern methods of teaching and learning.",
  "The credibility of evaluation procedures.",
  "Ensuring the adequacy, maintenance and functioning of the support structure and services.",
  "Research sharing and networking with other institutions in India and abroad.",
];

// ---------------- FUNCTIONS & BENEFITS ----------------
export const functions = [
  "Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution.",
  "Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation.",
  "Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes.",
  "Dissemination of information on various quality parameters of higher education.",
  "Organization of inter and intra institutional workshops, seminars on quality-related themes and promotion of quality circles.",
  "Documentation of the various programmes/activities leading to quality improvement.",
  "Acting as a nodal agency of the Institution for coordinating quality-related activities.",
  "Development and maintenance of institutional database through MIS for maintaining/enhancing institutional quality.",
  "Development of Quality Culture in the institution.",
  "Preparation of the Annual Quality Assurance Report (AQAR) for submission to NAAC.",
  "Bi-annual development of Quality Radars (QRs) and Ranking of Integral Units of institution based on the AQAR.",
  "Interaction with SQACs in the pre and post accreditation quality assessment, sustenance and enhancement endeavours.",
];

export const benefits = [
  "Ensure heightened level of clarity and focus in institutional functioning towards quality enhancement.",
  "Ensure internalization of the quality culture.",
  "Ensure enhancement and coordination among various activities of the institution and institutionalize all good practices.",
  "Provide a sound basis for decision-making to improve institutional functioning.",
  "Act as a dynamic system for quality changes in the Institution.",
  "Build an organised methodology of documentation and internal communication.",
];

// ---------------- COMPOSITION ----------------
export const compositionNotes = [
  "Chairperson: Head of the Institution",
  "A few senior administrative officers",
  "Three to eight teachers",
  "One member from the Management",
  "One/two nominees from local society, Students and Alumni",
  "One/two nominees from Employers/Industrialists/stakeholders",
  "One of the senior teachers as the Coordinator/Director of the IQAC",
];

export const compositionYearly: Doc[] = [
  { title: "Composition of Committee Members 2025-2026", url: PDF + "Composition%20of%20committee%20members%20for%20Year%202025-2026.pdf", type: "pdf" },
  { title: "Composition of Committee Members 2024-2025", url: PDF + "Composition%20of%20committee%20members%20for%20Year%202024-2025.pdf", type: "pdf" },
  { title: "Composition of Committee Members 2023-2024", url: PDF + "Composition%20of%20committee%20members%20for%20Year%202023-2024.pdf", type: "pdf" },
  { title: "Composition of Committee Members 2022-2023", url: PDF + "Composition%20of%20committee%20members%20for%20Year%202022-2023.pdf", type: "pdf" },
  { title: "Composition of Committee Members 2021-2022", url: PDF + "Composition%20of%20committee%20members%20for%20Year%202021-2022.pdf", type: "pdf" },
  { title: "Composition of Committee Members 2020-2021", url: PDF + "Composition%20of%20committee%20members%20for%20Year%202020-2021.pdf", type: "pdf" },
  { title: "Composition of Committee Members 2019-2020", url: PDF + "Composition%20of%20committee%20members%20for%20Year%202019-2020.pdf", type: "pdf" },
  { title: "Composition of Committee Members 2018-2019", url: PDF + "Composition%20of%20committee%20members%20for%20Year%202018-2019.pdf", type: "pdf" },
  { title: "Composition of Committee Members 2015-2016", url: PDF + "Composition%20of%20committee%20members%20for%20Year%202015-2016.pdf", type: "pdf" },
];

// ---------------- ORGANOGRAM ----------------
export const organogram = {
  imageUrl: "https://mits.ac.in/assets/images/mits-logo.png",
  note: "IQAC Organogram — MITS institutional quality governance structure. Chairperson (Vice-Chancellor) at apex, followed by IQAC Director, IQAC Coordinator, Criterion Coordinators, Department Coordinators, and functional cells.",
};

// ---------------- NAAC REFORMS 2024 / QUICK ACCESS ----------------
export const naacReforms2024: Doc[] = [
  { title: "Institution-wise NAAC Criterion Coordinators 2026", url: PDF + "Institution-wise%20NAAC%20Criterion%20Coordinators_2026.pdf", type: "pdf" },
  { title: "Department-wise NAAC Coordinators", url: PDF + "Department-wise%20NAAC%20Coordinators.pdf", type: "pdf" },
  { title: "Institutional Cells & Committee Incharges Details", url: PDF + "Institutional%20Cells%20&%20Committee%20Incharges%20Details.pdf", type: "pdf" },
  { title: "NAAC-Reforms in Accreditation (Press Release Jan 2024)", url: "http://naac.gov.in/images/docs/NAAC-Major_Reforms_in_Accreditation-Press_Release-27January_2024.pdf", type: "pdf" },
  { title: "Dr Radhakrishnan Committee Report", url: "http://naac.gov.in/images/docs/DrRadhakrishnanCommittee-FinalReport.pdf", type: "pdf" },
  { title: "NAAC Reforms 2024 — 29th June 2024", url: "http://naac.gov.in/images/docs/announcement/NAAC_Reforms_2024-Announcements-29thJune2024_240629_143341.pdf", type: "pdf" },
  { title: "SoP for Colleges/Universities & Assessors — 7 Apr 2025", url: "http://naac.gov.in/images/docs/announcement/NAAC_Press_Release_10022025.pdf", type: "pdf" },
  { title: "Validity Extension Notification — 5 Dec 2025", url: "http://naac.gov.in/images/docs/notification/validity_extension_notification_5_12_25.pdf", type: "pdf" },
  { title: "MITS Responsibilities Matrix for NAAC 2024 Reforms (MBGL)", url: PDF + "New%20Reforms%20Correlation%20and%20MIts%20Responsibilities.pdf", type: "pdf" },
  { title: "NAAC Accreditation Preparedness", url: PDF + "NAAC%20Accreditation%20Preparedness%2021-04-2026-%20Dr.K.Sathesh.pdf", type: "pdf" },
  { title: "NAAC Survey (Draft)", url: PDF + "NAAC_Survey%2021-04-2026-%20Dr.K.Sathesh.pdf", type: "pdf" },
  { title: "Department-wise Stakeholder Feedback Coordinators", url: PDF + "Department-wise%20Stakeholder%20Feedback%20Coordinators.pdf", type: "pdf" },
  { title: "NAAC Reforms 2024 Pilot Survey — Binary Accreditation Data Template", url: PDF + "NAAC%20Reforms%202024%20Pilot%20Survey%20for%20Binary%20Accreditation%20Framework%20(University)%20(Draft%20Copy)_Data_Template.docx", type: "doc" },
  { title: "NAAC Survey — QnM & QlM Data Collection Manual (Draft)", url: PDF + "MITS%20NAAC%20Survey%E2%80%93%20QnM%20&%20QlM%20Data%20Collection%20Manual%20(Draft%20Copy).docx", type: "doc" },
  { title: "NAAC Accreditation Preparedness — Supporting Document Manual (Draft)", url: PDF + "NAAC%20Accreditation%20Preparedness%20_Supporting_Document_Manual%20(Draft%20Copy).docx", type: "doc" },
  { title: "NAAC Supporting Document Manual — Radhakrishnan Report Nov 2023 (Draft)", url: PDF + "NAAC%20Supporting%20Document%20Manual%20Based%20on%20Dr.%20K.%20Radhakrishnan%20Report,%20November%202023%20(Draft%20Copy).docx", type: "doc" },
];

// ---------------- MILESTONES ----------------
export const milestones = [
  { year: "2025", text: "Conferred Deemed to be University status by Government of India (Section 3, UGC Act 1956)." },
  { year: "2024", text: "NAAC A+ Grade in First Cycle Accreditation; NBA Accreditation renewed." },
  { year: "2023", text: "ISO 21001:2018 Educational Organizations Management System Certification." },
  { year: "2022", text: "MITS ranked in NIRF Engineering band 251-300; Strategic Plan 2022-27 rolled out." },
  { year: "2021", text: "First Cycle NAAC Accreditation — Grade A+ (Valid 2021-2026)." },
  { year: "2020", text: "Institution of Eminence application submitted; new PG programmes launched." },
  { year: "2019", text: "UGC-Autonomous status extended 2019-2020 to 2024-2025." },
  { year: "2018", text: "First institutional annual academic and administrative audit conducted." },
  { year: "2017", text: "MITS conferred 'Best Private Engineering College' National Award by ISTE 2016-17." },
  { year: "2016", text: "Comprehensive quality benchmarking framework established." },
  { year: "2015", text: "Board of Studies constituted for all autonomous programs." },
  { year: "2014", text: "UGC-Autonomous status granted (2014-2015 to 2019-2020)." },
  { year: "2013", text: "IQAC framework formally institutionalized." },
  { year: "2012", text: "First institutional Strategic Plan published." },
  { year: "2011", text: "Expansion of PG programmes; new departments established." },
  { year: "2010", text: "AICTE approval renewed for expanded intake." },
  { year: "2009", text: "Feedback-driven quality assurance mechanism operationalized." },
  { year: "2008", text: "IQAC Cell established at MITS." },
];

// ---------------- CERTIFICATIONS ----------------
export const certifications: Doc[] = [
  { title: "UGC - Deemed to be University Approval (Gazette 15.07.2025)", url: ADMIN + "Gazette%20Notification%20No.%209-1-2025-U.3A%20dated%2015.07.2025-1.pdf", type: "pdf" },
  { title: "AICTE Approval (2025-2026)", url: UP + "affiliations/EOA-Corrigendum%202025-26_1-44642479593%20(1).pdf", type: "pdf" },
  { title: "AICTE Approval (2024-2025)", url: UP + "affiliations/EOA%20Report%202024-2025.PDF", type: "pdf" },
  { title: "AICTE Approval (2023-2024)", url: UP + "affiliations/EOA-Report-2023-2024.PDF", type: "pdf" },
  { title: "NAAC 1st Cycle (Valid 2021–2026)", url: UP + "naac/9b55cb6cdd40bf4ca955cdd3a5383031.pdf", type: "pdf" },
  { title: "NBA — PG (MBA) 2025-2028", url: UP + "affiliations/MBA%20NBA%20Cetificate-2025.pdf", type: "pdf" },
  { title: "NBA — PG (MCA) 2025-2028", url: UP + "affiliations/MCA%20NBA%20Cetificate-2025.pdf", type: "pdf" },
  { title: "NBA — UG Programmes 2025-2028", url: UP + "affiliations/Madanapalle%20Institute%20of%20Technology%20_%20Science,%20Andhra%20Pradesh19_6_2025_12_45_57.pdf", type: "pdf" },
  { title: "NBA — UG (CST) 2024-2027", url: UP + "affiliations/NBA%20-%20CST-%20confirmation%20-till%2030.6.2027.pdf", type: "pdf" },
  { title: "NBA — PG (MCA) 2024-2025", url: UP + "affiliations/NBA-MCA%20Extention%20till%202025%20June.pdf", type: "pdf" },
  { title: "NBA — PG (MBA) 2022-2025", url: UP + "affiliations/NBA-MBA-2022-25.pdf", type: "pdf" },
  { title: "NBA — UG Programmes 2022-2025", url: UP + "affiliations/b6c8a081779294cbbd70a1180dc7746f.pdf", type: "pdf" },
  { title: "NBA — PG (MCA) 2022-2024", url: UP + "affiliations/NBA-MCA-2022-24.pdf", type: "pdf" },
  { title: "UGC-Autonomous 2025-26 to 2034-35", url: ADMIN + "UGC-2025-35-Madanapalle%20Institute%20of%20Technology%20Science.pdf", type: "pdf" },
  { title: "UGC-Autonomous 2019-20 to 2024-25", url: ADMIN + "UGC-Autonomous%202020-25.pdf", type: "pdf" },
  { title: "UGC-Autonomous 2014-15 to 2019-20", url: ADMIN + "UGC-Autonomous%202014-20.pdf", type: "pdf" },
  { title: "NIRF 2025 — Engineering Band 201-300", url: UP + "scholarship/MITS_Engg_ranking-2025.pdf", type: "pdf" },
  { title: "NIRF 2024 — Engineering Band 201-300", url: UP + "scholarship/MITS_Engg_ranking-2024.pdf", type: "pdf" },
  { title: "NIRF 2022 — Engineering Band 251-300", url: UP + "scholarship/MITS-RankBand-251-300.pdf", type: "pdf" },
  { title: "ISO 9001:2015 Quality Management System", url: ADMIN + "ISO%20Certificarte.pdf", type: "pdf" },
  { title: "ISO 21001:2018 Educational Organizations Management System", url: ADMIN + "ISO-210012018-cerificate.pdf", type: "pdf" },
];

// ---------------- AICTE QUALITY MANDATE ----------------
export const aicteMandate: Doc[] = [
  { title: "AICTE Quality Initiatives in Technical Education", url: "https://www.aicte-india.org/sites/default/files/AICTE%20QUALITY%20INITIATIVES%20IN%20TECHNICAL%20EDUCATION.pdf", type: "pdf" },
  { title: "AICTE PARAKH — Student Learning Assessment (Circular)", url: "https://aslapapi.aicte-india.org/api/downloadAnnouncementHomepage?id=MTA=", type: "pdf" },
  { title: "AICTE PARAKH Portal", url: "https://parakh.aicte-india.org/", type: "link" },
  { title: "AICTE Anuvadini — AI Translation Tool", url: "https://anuvadini.aicte-india.org/", type: "link" },
  { title: "NEAT Portal — National Educational Alliance for Technology", url: "https://neat.aicte-india.org/", type: "link" },
  { title: "One Nation One Data (ONOD)", url: "https://onod.aicte-india.org/", type: "link" },
  { title: "NETF — National Educational Technology Forum", url: "https://netf.aicte-india.org/about-netf.html", type: "link" },
  { title: "AICTE Examination Reforms (Nov 2018)", url: PDF + "AICTE%20-ExaminationReforms%20(Nov%202018)%20(uploaded%20on%2020231102).pdf", type: "pdf" },
  { title: "AICTE Model Question Paper", url: PDF + "AICTE-Model%20Question%20Paper%20(uploaded%20on%2020231102).pdf", type: "pdf" },
  { title: "AICTE Workshop on Examination Reforms — Day 1", url: "https://www.youtube.com/watch?v=8pkY6VnmQK8", type: "video" },
  { title: "AICTE Workshop on Examination Reforms — Day 2", url: "https://www.youtube.com/watch?v=2l1OXd-VLrg", type: "video" },
  { title: "AICTE Workshop on Examination Reforms — Day 3", url: "https://www.youtube.com/watch?v=RezQsx6SpFM", type: "video" },
  { title: "Sensitization — AICTE PARAKH Project", url: "https://youtu.be/59XVSVoKros", type: "video" },
];

export const aicte360Feedback: Doc[] = [
  { title: "AICTE 360 Degree Feedback Portal", url: "https://smartcookie.in/AICTE-360degreefeedback", type: "link" },
  { title: "AICTE Circular", url: "https://www.aicte-india.org/sites/default/files/Corrigendum%20Exemption%20from%20360%20degree%20feedback.pdf", type: "pdf" },
  { title: "Coordinator — Office Order", url: PDF + "Coordinator-%20Office-Order.pdf", type: "pdf" },
  { title: "MITS AICTE 360° Feedback Committee 2024-25", url: PDF + "AICTE%20360%20%C2%B0%20office%20order.pdf", type: "pdf" },
  { title: "AICTE 360° Feedback 2021-22", url: ADMIN + "Certificate_SMC-2023-AWD100197.pdf", type: "pdf" },
  { title: "AICTE 360° Feedback 2022-23", url: ADMIN + "AWD100195.pdf", type: "pdf" },
  { title: "AICTE 360° Feedback 2023-24", url: ADMIN + "Cert%20AICTE%20360%20Degree%20Feedback-2023-24.pdf", type: "pdf" },
  { title: "AICTE 360° Feedback 2024-25", url: ADMIN + "AWD100203.pdf", type: "pdf" },
];

// ---------------- FEEDBACK ----------------
export const feedbackPolicy: Doc[] = [
  { title: "MITS Stakeholder Feedback — Policy", url: PDF + "MITS-Stakeholder%20Feedback-Policy.pdf", type: "pdf" },
  { title: "MITS Stakeholder Feedback Questionnaire (Up to AY 2023-24)", url: PDF + "MITS_Stakeholder%20Feedback%20Questionnaire.pdf", type: "pdf" },
  { title: "MITS Stakeholder Feedback Questionnaire (From AY 2024-25 Onwards)", url: PDF + "MITS%20Stakeholder%20Feedback%20Questionnaire%20from%20(AY%202024-25%20Onwards).pdf", type: "pdf" },
];

export const actionTakenReports: Doc[] = [
  { title: "Action Taken Report 2024-25", url: PDF + "Action%20Taken%20Report%202024-25.pdf", type: "pdf" },
  { title: "Action Taken Report 2023-24", url: PDF + "Action%20Taken%20Report%202023-24.pdf", type: "pdf" },
  { title: "Action Taken Report 2022-23", url: PDF + "Action%20Taken%20Report%202022-23.pdf", type: "pdf" },
  { title: "Action Taken Report 2021-22", url: UP + "naac/ATR%202021-22.pdf", type: "pdf" },
  { title: "Action Taken Report 2020-21", url: UP + "naac/ATR%202020-21.pdf", type: "pdf" },
  { title: "Action Taken Report 2019-20", url: UP + "naac/ATR%202019-20.pdf", type: "pdf" },
  { title: "Action Taken Report 2018-19", url: UP + "naac/ATR%202018-19.pdf", type: "pdf" },
];

export const atrEvidence: Doc[] = [
  { title: "Evidence — ATR 2024-25 (CSE)", url: PDF + "CSE%20ATR%2024-25.pdf", type: "pdf" },
  { title: "Evidence — ATR 2023-24", url: PDF + "Evidence%20ATR%202023-24.pdf", type: "pdf" },
  { title: "Evidence — ATR 2022-23", url: PDF + "Evidence_on_ATR_2022-23.pdf", type: "pdf" },
  { title: "Evidence — ATR 2021-22", url: PDF + "Evidence_on_ATR_2021-22.pdf", type: "pdf" },
];

export const feedbackForms: { label: string; url: string }[] = [
  { label: "Students — Feedback on Curriculum", url: "https://74.235.98.35/mits_fb_iqac_24/students_form.php" },
  { label: "Faculty — Feedback on Curriculum", url: "https://74.235.98.35/mits_fb_iqac_24/faculty_feedback.html" },
  { label: "Parents", url: "https://74.235.98.35/mits_fb_iqac_24/parent.php" },
  { label: "Alumni", url: "https://74.235.98.35/mits_fb_iqac_24/alumni.php" },
  { label: "Employer", url: "https://74.235.98.35/mits_fb_iqac_24/employer.php" },
  { label: "National / International Experts", url: "https://74.235.98.35/mits_fb_iqac_24/national_international_experts.html" },
  { label: "Curriculum Enrichment from Industry Experts", url: "https://74.235.98.35/mits_fb_iqac_24/industry_experts.php" },
  { label: "Student Satisfaction Survey (Teaching-Learning)", url: "https://74.235.98.35/mits_fb_iqac_24/feedback_form.php" },
  { label: "Students Feedback on Facilities", url: "http://74.235.98.35/mits_fb_iqac_24/student_feedback_on_facilities.php" },
  { label: "Faculty Feedback on Infrastructure", url: "https://74.235.98.35/mits_fb_iqac_24/facultyinfrastructure.php" },
  { label: "Faculty Feedback on Governance", url: "https://74.235.98.35/mits_fb_iqac_24/governance.php" },
  { label: "Faculty Feedback on Teaching, Learning, Evaluation & Research", url: "https://74.235.98.35/mits_fb_iqac_24/teaching.php" },
  { label: "Non-Teaching Faculty", url: "https://74.235.98.35/mits_fb_iqac_24/nonTeaching.php" },
  { label: "Graduate Exit Survey", url: "https://74.235.98.35/mits_fb_iqac_24/graduate_exit.php" },
  { label: "Course Exit Survey", url: "http://74.235.98.35/mits_fb_iqac_24/course_exit_survey.html" },
];

// ---------------- AAA (Academic & Administrative Audit) ----------------
export const aaaOverview = {
  policy: "MITS is committed to maintaining academic excellence through a structured Quality assurance mechanism. Academic & Administrative Audit assesses, monitors and improves the quality of Teaching-Learning, Academic processes and the administrative system that supports quality delivery. The audit process is monitored through the Internal Quality Assurance Cell (IQAC).",
  academic: "Academic Audit is a structured and methodical approach to evaluate the Quality of an Institution's academic processes — Teaching-Learning practices, Curriculum Design and evaluation, Research initiatives, outreach programs and other academic endeavours.",
  administrative: "Administrative Audit evaluates the effectiveness of processes that facilitate academic activities — student support services, Academic Infrastructure management, Campus maintenance, IT services, student facilities and safety measures.",
};

export const aaaPolicyDocs: Doc[] = [
  { title: "Academic and Administrative Audit Policy", url: PDF + "MITS%20IQAC%20Academic%20Audit%20Policy.pdf", type: "pdf" },
];

export const externalAuditReports: Doc[] = [
  { title: "External Audit Report 2023-24", url: PDF + "External%20Audit%20Report%202023-24.pdf", type: "pdf" },
  { title: "External Audit Report 2022-23", url: PDF + "External%20Audit%20Report%202022-23.pdf", type: "pdf" },
  { title: "External Audit Report 2021-22", url: PDF + "External%20Audit%20Report%202021-22.pdf", type: "pdf" },
];

export const internalAuditReports: Doc[] = [
  { title: "Internal Audit Report 2024-25", url: PDF + "Internal%20Audit%20Report%202024-25.pdf", type: "pdf" },
  { title: "Internal Audit Report 2023-24", url: PDF + "Internal%20Audit%20Report%202023-24.pdf", type: "pdf" },
  { title: "Internal Audit Report 2022-23", url: PDF + "Internal%20Audit%20Report%202022-23.pdf", type: "pdf" },
  { title: "Internal Audit Report 2021-22", url: PDF + "Internal%20Audit%20Report%202021-22.pdf", type: "pdf" },
];

export const externalAuditATR: Doc[] = [
  { title: "External Audit ATR 2023-24", url: PDF + "External%20Audit%20ATR%202023-24.pdf", type: "pdf" },
  { title: "External Audit ATR 2022-23", url: PDF + "External%20Audit%20ATR%202022-23.pdf", type: "pdf" },
  { title: "External Audit ATR 2021-22", url: PDF + "External%20Audit%20ATR%202021-22.pdf", type: "pdf" },
];

export const internalAuditATR: Doc[] = [
  { title: "Internal Audit ATR 2023-24", url: PDF + "Internal%20Audit%20ATR%202023-24.pdf", type: "pdf" },
  { title: "Internal Audit ATR 2022-23", url: PDF + "Internal%20Audit%20ATR%202022-23.pdf", type: "pdf" },
  { title: "Internal Audit ATR 2021-22", url: PDF + "Internal%20Audit%20ATR%202021-22.pdf", type: "pdf" },
];

// ---------------- AAA & References ----------------
export const aaaReferences: Doc[] = [
  { title: "NAAC (1st Cycle) — Self Study Report (SSR)", url: PDF + "NAAC%20(1st%20Cycle)%20-%20Self%20Study%20Report%20(SSR).pdf", type: "pdf" },
  { title: "NAAC Autonomous College Benchmarks — December 2022", url: PDF + "NAAC%20Autonomous_College%20Benchmarks%20December%202022.pdf", type: "pdf" },
  { title: "NAAC Autonomous College SOP — December 2022", url: PDF + "NAAC%20Autonomous_College_SOP%20December%202022.pdf", type: "pdf" },
  { title: "NAAC Autonomous College Manual 2023", url: PDF + "NAAC%20Autonomous_College%20Manual_29-03-2023_Updated_9-8-2023.pdf", type: "pdf" },
  { title: "NAAC — Reforms in Accreditation", url: "http://naac.gov.in/images/docs/NAAC-Major_Reforms_in_Accreditation-Press_Release-27January_2024.pdf", type: "pdf" },
  { title: "Comparison of NAAC Criteria and ISO 21001:2018 EOMS", url: PDF + "Comparison%20of%20NAAC%20Criteria%20and%20ISO%20210012018%20EOMS%20Clauses.pdf", type: "pdf" },
  { title: "NBA Guidelines for Faculty 2023", url: PDF + "NBA_Guidelines%20for%20Faculty%20Updated%2022-08-2023.pdf", type: "pdf" },
  { title: "NBA UG Engg Tier I Manual", url: PDF + "NBA_UGEngg_Tier_I_Manual%20(uploaded%20on%2020231102)-2.pdf", type: "pdf" },
  { title: "NBA SAR — UG Engineering (Tier-I)", url: "https://www.nbaind.org/files/2-SAR-UG-EG-T1_1%20August%202024_revised_Format_20240801144723.pdf", type: "pdf" },
  { title: "NBA SAR — PG Management (Tier-I)", url: "https://www.nbaind.org/files/SAR-PG-MAG-18-4-2024_Format_20240514144527.pdf", type: "pdf" },
  { title: "NBA SAR — PG MCA (Tier-I)", url: "https://www.nbaind.org/Files/MCA_New/2-SAR-MCA-final-21-12-2023.pdf", type: "pdf" },
  { title: "NBA — New SAR UG Engineering (Tier-I)", url: "https://nbaind.org/files/2-SAR-UG-EG-T1_1%20August%202024_Format_20240801124948.pdf", type: "pdf" },
  { title: "NBA SAR — PG Engineering (Tier-I)", url: "https://www.nbaind.org/files/PG-Eng-SAR-13-8-24_Format_20240813153128.pdf", type: "pdf" },
  { title: "NIRF 2023 Methodology — Engineering", url: PDF + "NIRF%202023%20Methodology%20-%20Engineering.pdf", type: "pdf" },
  { title: "NIRF 2023 Methodology — Management", url: PDF + "NIRF%202023%20Methodology%20-%20Management.pdf", type: "pdf" },
  { title: "NIRF 2023 Methodology — Overall", url: PDF + "NIRF%202023%20Methodology%20-%20Overall.pdf", type: "pdf" },
];

// ---------------- STRATEGIC PLAN ----------------
export const strategicPlan: Doc[] = [
  { title: "Strategic Plan (2022-23 to 2026-27)", url: ADMIN + "Strategic%20Plan%202022-27.pdf", type: "pdf" },
  { title: "Strategic Plan Implementation", url: ADMIN + "Strategic-Plan-Implementation.pdf", type: "pdf" },
  { title: "Strategic Plan Implementation — AY 2023-24 Gap Analysis Report", url: PDF + "23-24_GAp%20ANalysis%20Report.pdf", type: "pdf" },
  { title: "Strategic Plan Implementation — AY 2022-23 Gap Analysis Report", url: PDF + "22-23_GAp%20ANalysis%20Report.pdf", type: "pdf" },
];

// ---------------- E-CONTENT ----------------
export const econtent: Doc[] = [
  { title: "e-Content Development Center", url: PDF + "MITS%20e-Content.pdf", type: "pdf" },
  { title: "e-Content Facilities in MITS CRS", url: PDF + "E-%20Content%20Facilities%20in%20MITS%20CRS.pdf", type: "pdf" },
  { title: "e-Content Preparation Declaration Form", url: PDF + "E-%20Content%20Preparation%20_%20Declaration%20Form.pdf", type: "pdf" },
  { title: "e-Content Preparation Standard Operating Procedure (SOP)", url: PDF + "E-%20Content%20Preparation%20Standard%20Operating%20Procedure-SOP.pdf", type: "pdf" },
  { title: "e-Content by MITS Faculty", url: "https://mits.ac.in/e-content", type: "link" },
];

// ---------------- PO/PSO/CO ----------------
export const poPsoCoUG: Doc[] = [
  { title: "B.Tech — Civil Engineering", url: UP + "courseattainment/ed46c87d7524601b5488d7516cf131d5.pdf", type: "pdf" },
  { title: "B.Tech — Computer Science & Engineering", url: UP + "courseattainment/CSE%20UG%20PEOs%20&%20POs.pdf", type: "pdf" },
  { title: "B.Tech — Computer Science and Technology", url: UP + "courseattainment/5bd07f16cbebedd4a2ae66f779cb8412.pdf", type: "pdf" },
  { title: "B.Tech — Electronics & Communication Engineering", url: UP + "courseattainment/bf5cbf47b24c0038d0214b4c63a286fb.pdf", type: "pdf" },
  { title: "B.Tech — Electrical and Electronics Engineering", url: UP + "courseattainment/3085fc5bac5d124dfac551ddc5c04bc4.pdf", type: "pdf" },
  { title: "B.Tech — Mechanical Engineering", url: UP + "courseattainment/dad4367ee11ac4205b47349921354e98.pdf", type: "pdf" },
];

export const poPsoCoPG: Doc[] = [
  { title: "M.B.A. — Master of Business Administration", url: UP + "courseattainment/a362fcdaee05429e6c443f6b052b7282.pdf", type: "pdf" },
  { title: "M.C.A. — Master of Computer Applications", url: UP + "courseattainment/3246f8050efcce5e4666346725a26690.pdf", type: "pdf" },
  { title: "M.Tech — Computer Science and Engineering", url: UP + "courseattainment/CSE%20UG%20PEOs%20&%20POs.pdf", type: "pdf" },
  { title: "M.Tech — VLSI Design and Embedded Systems", url: UP + "courseattainment/bf5cbf47b24c0038d0214b4c63a286fb.pdf", type: "pdf" },
];

// ---------------- ANNUAL REPORTS ----------------
export const annualReports: Doc[] = [
  { title: "Annual Report 2024-25", url: ADMIN + "AnnualReport%202024-25.pdf", type: "pdf" },
  { title: "Annual Report 2023-24", url: ADMIN + "AnnualReport%202023-24.pdf", type: "pdf" },
  { title: "Annual Report 2022-23", url: ADMIN + "Annual%20Report%202022-23.pdf", type: "pdf" },
  { title: "Annual Report 2021-22", url: ADMIN + "Annual%20Report%20AY%202021-22.pdf", type: "pdf" },
  { title: "Annual Report 2018-19", url: ADMIN + "2018-19%20Annual%20Report.pdf", type: "pdf" },
  { title: "Annual Report 2017-18", url: ADMIN + "2017-18%20Annual%20Report.pdf", type: "pdf" },
  { title: "Annual Report 2016-17", url: ADMIN + "2016-17%20Annual%20Report.pdf", type: "pdf" },
  { title: "Annual Report 2015-16", url: ADMIN + "2015-16%20Annual%20Report.pdf", type: "pdf" },
  { title: "Annual Report 2014-15", url: ADMIN + "2014-15%20Annual%20Report.pdf", type: "pdf" },
];

export const iqacHoursReports: Doc[] = [
  { title: "IQAC Hours — May 2025 (ENGG, MBA, MCA & BSH)", url: PDF + "IQAC%20Hours%20May%202025.pdf", type: "pdf" },
  { title: "IQAC Hours — April 2025", url: PDF + "IQAC%20Hours%20April%202025.pdf", type: "pdf" },
  { title: "IQAC Hours — March 2025", url: PDF + "IQAC%20Hours%20March%202025.pdf", type: "pdf" },
  { title: "IQAC Hours — February 2025", url: PDF + "IQAC%20Hours%20February%202025.pdf", type: "pdf" },
  { title: "IQAC Hours — January 2025", url: PDF + "IQAC%20Hours%20January%202025.pdf", type: "pdf" },
  { title: "IQAC Hours — December 2024", url: PDF + "IQAC%20Hours%20December%202024.pdf", type: "pdf" },
  { title: "IQAC Hours — November 2024", url: PDF + "IQAC%20HOURS%20November%202024%20Report.pdf", type: "pdf" },
  { title: "IQAC Hours — October 2024", url: PDF + "IQAC%20HOURS%20October%202024%20Report.pdf", type: "pdf" },
  { title: "IQAC Hours — July-September 2024 (ENGG, MBA & MCA)", url: PDF + "IQAC%202024%20ENGG.pdf", type: "pdf" },
  { title: "IQAC Hours — July-September 2024 (BSH)", url: PDF + "IQAC%202024%20BSH.pdf", type: "pdf" },
  { title: "IQAC Hours — Jul 2023-Jun 2024 (ENGG, MBA & MCA)", url: PDF + "IQAC%20Hours%20ENGG_MBA_MCA%20July%20to%20June%202024.pdf", type: "pdf" },
  { title: "IQAC Hours — Jul 2023-Jun 2024 (BSH)", url: PDF + "IQAC%20Hours%20BSH%20July%202023%20-%20Jun%202024.pdf", type: "pdf" },
  { title: "IQAC Hours — June 2024", url: PDF + "IQAC%20Hours%20June%202024.pdf", type: "pdf" },
  { title: "IQAC Hours — May 2024", url: PDF + "IQAC%20Hours%20May%202024.pdf", type: "pdf" },
  { title: "IQAC Hours — April 2024", url: PDF + "IQAC%20Hours%20April.pdf", type: "pdf" },
  { title: "IQAC Hours — March 2024", url: PDF + "IQAC%20Hours%20March.pdf", type: "pdf" },
  { title: "IQAC Hours — February 2024", url: PDF + "IQAC%20HOURS%20February%202024%20Report.pdf", type: "pdf" },
  { title: "IQAC Hours — January 2024", url: PDF + "IQAC%20HOURS%20January%202024%20Report.pdf", type: "pdf" },
  { title: "IQAC Hours — December 2023", url: PDF + "IQAC%20HOURS%20December%202023%20Report.pdf", type: "pdf" },
  { title: "IQAC Hours — November 2023", url: PDF + "IQAC%20HOURS%20November%202023%20Report.pdf", type: "pdf" },
  { title: "IQAC Hours — July-October 2023", url: PDF + "IQAC%20Hours%20July%20to%20Oct%202023.pdf", type: "pdf" },
];

// ---------------- UGC QUALITY MANDATE ----------------
export const ugcMandate: Doc[] = [
  { title: "Bureau of Indian Standards (BIS)", url: "https://www.bis.gov.in/", type: "link" },
  { title: "Anusandhan National Research Foundation (ANRF)", url: "https://anrfonline.in/ANRF/HomePage", type: "link" },
  { title: "Grading of HEIs based on NEP 2020 Implementation", url: "https://www.ugc.gov.in/pdfnews/8308176_NAAC-Grading.pdf", type: "pdf" },
  { title: "NEP 2020 — Akhil Bharatiya Shiksha Samagam 2022", url: "https://www.education.gov.in/nep/abss-2022", type: "link" },
  { title: "NEP 2020 — Akhil Bharatiya Shiksha Samagam 2023", url: "https://www.education.gov.in/nep/abss-2023", type: "link" },
  { title: "NEP 2020 — Akhil Bharatiya Shiksha Samagam 2024", url: "https://www.education.gov.in/hi/node/22597", type: "link" },
  { title: "Radhakrishnan Committee Final Report — Assessment & Accreditation", url: "https://www.ugc.gov.in/pdfnews/1238790_Dr_Radhakrishnan-Committee-Final-Report.pdf", type: "pdf" },
  { title: "Quality Mandate for HEIs in India", url: "https://www.ugc.gov.in/e-book/Quality%20Mandate%20E-BOOK.pdf", type: "pdf" },
  { title: "Deeksharambh — Student Induction Programme (SIP)", url: "https://www.ugc.gov.in/pdfnews/3830821_DeeksharambhEnglish.pdf", type: "pdf" },
  { title: "LOCF — Learning Outcomes-Based Curriculum Framework", url: "https://www.ugc.gov.in/e-book/locf.pdf", type: "pdf" },
  { title: "Jeevan Kaushal — Curriculum for Life Skills", url: "https://www.ugc.gov.in/pdfnews/4874522_Draft-Curriculum-for-Life-SKill-Jeevan-Kaushal.pdf", type: "pdf" },
  { title: "Social and Industry Connect — Unnat Bharat Abhiyan", url: "https://www.ugc.gov.in/e-book/UNNAT%20BHARAT%20ABHIYAN.pdf", type: "pdf" },
  { title: "CARE — Consortium for Academic Research & Ethics", url: "https://www.ugc.gov.in/e-book/CARE%20ENGLISH.pdf", type: "pdf" },
  { title: "STRIDE — Trans-disciplinary Research Scheme", url: "https://www.ugc.gov.in/pdfnews/2089255_STRIDE_FINAL_BOOK.pdf", type: "pdf" },
  { title: "SATAT — Sustainable Campus Development Framework", url: "https://www.ugc.gov.in/e-book/STAT%20ENGLISH/mobile/index.html#p=6", type: "link" },
  { title: "MULYA PRAVAH — Human Values & Professional Ethics", url: "https://www.ugc.gov.in/pdfnews/8799370_Mulya-Parvah_Guideline.pdf", type: "pdf" },
  { title: "GURU DAKSHTA — Faculty Induction Programme (FIP)", url: "https://www.ugc.gov.in/e-book/GURU%20DAKSHTA%20English.pdf", type: "pdf" },
  { title: "PARAMARSH — Mentoring Aspirant Institutions", url: "https://paramarsh.ugc.ac.in/", type: "link" },
  { title: "IQAC Guidelines for Universities (XII Plan)", url: "https://www.ugc.gov.in/pdfnews/0899501_IQAC-guidelines-for-University.pdf", type: "pdf" },
  { title: "IQAC Guidelines for Colleges (XII Plan)", url: "https://www.ugc.gov.in/pdfnews/5172195_Guideline_IQACs.pdf", type: "pdf" },
  { title: "Evaluation Reforms in HEIs", url: "https://www.ugc.gov.in/e-book/EVALUATION%20ENGLISH.pdf", type: "pdf" },
  { title: "Guidelines for Innovative Pedagogical Approaches & Evaluation Reforms", url: "https://www.ugc.gov.in/pdfnews/1031121_Guidelines-Innovative-Pedagogical-Approaches-Evaluation-Reforms.pdf", type: "pdf" },
  { title: "National Higher Education Qualifications Framework (NHEQF)", url: "https://www.ugc.gov.in/pdfnews/2990035_Final-NHEQF.pdf", type: "pdf" },
  { title: "National Credit Framework (NCrF)", url: "https://www.ugc.gov.in/pdfnews/9028476_Report-of-National-Credit-Framework.pdf", type: "pdf" },
  { title: "Curriculum & Credit Framework for UG Programmes", url: "https://www.ugc.gov.in/e-book/FYUGP/mobile/index.html", type: "link" },
  { title: "Guidelines for Research & Development Cell in HEIs", url: "https://www.ugc.gov.in/e-book/RDC_Guidelines/mobile/index.html", type: "link" },
  { title: "UTSAH — Transformative Strategies in HE", url: "https://utsah.ugc.ac.in/", type: "link" },
  { title: "National Educational Policy (NEP) 2020", url: "https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf", type: "pdf" },
  { title: "NEP SAARTHI — Student Ambassador Programme", url: "https://www.ugc.gov.in/pdfnews/1566510_SAARTHI-GUIDELINES.pdf", type: "pdf" },
  { title: "NEP 2020 — Multiple Entry & Exit Guidelines", url: "https://www.ugc.gov.in/e-book/GL%20Multipe%20Entry%20Exit.pdf", type: "pdf" },
  { title: "UGC Initiatives for NEP-2020 Implementation", url: "https://www.ugc.gov.in/pdfnews/6769753_UGC-Letter-Implementation-of-NEP.pdf", type: "pdf" },
  { title: "ICT Initiatives of MoE", url: "https://www.education.gov.in/ict-initiatives", type: "link" },
  { title: "National Skills Qualification Framework (NSQF)", url: "https://nqr.gov.in/downloads/pdfs/NSQF_Gazette_Notification.pdf", type: "pdf" },
  { title: "SWAYAM Plus", url: "https://swayam-plus.swayam2.ac.in/courses", type: "link" },
  { title: "UGC UG & PG Regulations 2025", url: "https://www.ugc.gov.in/pdfnews/0920543_Public-Notice-UG-and-PG-Regulations-2025.pdf", type: "pdf" },
  { title: "Curriculum & Credit Framework for PG Programmes", url: PDF + "Curriculum-and-Credit-Framework-for-Postgraduate-Programmes.pdf", type: "pdf" },
];

// ---------------- IQAC EVENTS ----------------
export type IqacEvent = { title: string; date: string; url?: string };
export const iqacEvents: IqacEvent[] = [
  { title: "5-Day PDP on 'AI in Teaching and Learning' — IQAC in association with NITTTR Chennai", date: "6-10 April 2026", url: PDF + "AI%20in%20teaching%20and%20Learning.pdf" },
  { title: "3-Day ISO 21001:2018 Surveillance Audit 2 by TUV SUD South Asia", date: "22-24 January 2026", url: PDF + "ISO%20Surveillnace%202%20Audit%20Report%2022nd%20&%2024th%20January%202026.pdf" },
  { title: "5-Day PDP on 'UI/UX Design' — NITTTR Chennai", date: "30 June-4 July 2025", url: PDF + "Report_UI%20%20UX%20Design.pdf" },
  { title: "2-Day ISO 21001:2018 EOMS First Surveillance Audit", date: "10-11 March 2025", url: PDF + "ISO%20210012018%20Surveillance%20Audit%20-%20EOMS.pdf" },
  { title: "Awareness Programme on 'Enhancing Digital Skills' (SDP)", date: "22 March 2025", url: PDF + "SDP.pdf" },
  { title: "5-Day PDP on 'National Education Policy 2020 & Institutional Development'", date: "10-14 March 2025", url: PDF + "Report_National%20Education%20Policy%202020%20&%20Institutional%20Development.pdf" },
  { title: "6-Day PDP on 'Augmented Reality & Virtual Reality'", date: "24 Feb-1 Mar 2025", url: PDF + "Augmented%20Reality%20&%20Virtual%20Reality.pdf" },
  { title: "Awareness Programme on 'AICTE 360° Feedback System'", date: "15 February 2025", url: PDF + "AICTE%20360%20Feedback%20System%20Published%20Report.pdf" },
  { title: "Awareness Programme on 'AICTE 360° Feedback System'", date: "1 February 2025", url: PDF + "AICTE360-Report-1.2.2025.pdf" },
  { title: "One-Day Workshop on 'National Credit Framework (NCrF)'", date: "29 January 2025", url: PDF + "one-day%20workshop%20on%20National%20Credit%20Framework%20(NCrF).pdf" },
  { title: "2-Day External Academic & Administrative Audit for AY 2023-24", date: "18-19 December 2024", url: PDF + "External%20Academic%20and%20Administrative%20Audit%202023-24.pdf" },
  { title: "Expert Talk on 'Generative AI'", date: "21 November 2024", url: PDF + "Published_Generative_AI%20_Report.pdf" },
  { title: "Guru-Dakshta Faculty Induction Program (FIP) 2024-25", date: "17-27 September 2024", url: PDF + "Guru-Dakshta%20Faculty%20Induction%20Program.pdf" },
  { title: "5-Day PDP on 'Block Chain Technologies' — NITTTR Chennai", date: "3-7 June 2024", url: PDF + "Block%20Chain%20Technologies.pdf" },
  { title: "5-Day PDP on 'NBA Accreditation' — NITTTR Chennai", date: "12-16 February 2024", url: PDF + "5%20Days%20Professional%20Development%20Programme%20(PDP)%20on%20NBA%20ACCREDITATION%20in%20association%20with%20NITTTR,%20Chennai%20_12.02.2024%20%E2%80%93%2016.02.2024.pdf" },
  { title: "5-Day ISO 21001:2018 Certification Audit — EOMS Stage 2", date: "27 Nov-1 Dec 2023", url: PDF + "ISO%20Stage%202%20Audit%20Report.pdf" },
];

// ---------------- E-NOTICE BOARD ----------------
export const eNoticeBoard: { title: string; date: string; detail?: string; url?: string }[] = [
  { title: "NITTTR PDP on 'AI in Teaching and Learning'", date: "6-10 April 2026", url: PDF + "IQAC%20PDP%20poster-2026.pdf" },
  { title: "Internal Academic Audit — AY 2025-26 (I Sem)", date: "9-13 March 2026", detail: "UG (II/III/IV-Year B.Tech) and PG (MBA, MCA, M.Tech). Conducted by PAARC & IQAC Team - MITS" },
  { title: "ISO 21001:2018 EOMS Surveillance Audit", date: "22-24 January 2026" },
  { title: "Cell/Committee Review Meeting", date: "5 November 2025 - 12 January 2026" },
  { title: "Guru Dakshta Faculty Induction Program (FIP)", date: "27 October - 14 November 2025", detail: "Venue: Seminar Hall-A, 4:00 to 5:00 PM" },
  { title: "NITTTR PDP on 'UI/UX Design'", date: "30 June - 4 July 2025" },
  { title: "IQAC Hours (Last Thursday of Every Month)", date: "26 June 2025 · 10:00 AM - 04:00 PM" },
  { title: "NITTTR PDP on 'NEP 2020 & Institutional Development'", date: "10-14 March 2025", url: PDF + "IQAC%20poster_PDP.pdf" },
  { title: "ISO 21001:2018 EOMS Surveillance Audit", date: "10-11 March 2025" },
  { title: "NITTTR PDP on 'Augmented Reality & Virtual Reality'", date: "24 February - 1 March 2025" },
  { title: "External Academic & Administrative Audit — AY 2023-24", date: "18-19 December 2024", detail: "Conducted By: IQAC - MITS" },
  { title: "Guru Dakshta Faculty Induction Program (FIP)", date: "17-27 September 2024" },
  { title: "Internal Academic & Administrative Audit — AY 2023-24 (II Sem)", date: "9-13 & 17 September 2024" },
  { title: "Internal Audit — AY 2023-24 (I Sem) MBA, MCA & BSH", date: "1-2 May 2024" },
  { title: "NITTTR PDP on 'NBA Accreditation'", date: "12-16 February 2024", url: PDF + "NITTTR%20Banner.pdf" },
  { title: "Internal Audit — AY 2023-24 (I Sem) Engineering Depts", date: "3-12 January 2024" },
  { title: "Internal Inspection — MITS Cells/Committees", date: "22 December 2023" },
  { title: "ISO 21001:2018 Stage 2 Audit", date: "30 November - 1 December 2023" },
];

// ---------------- DOWNLOADS ----------------
export const auditFormats: Doc[] = [
  { title: "Admin Audit Format", url: PDF + "ADMIN%20AUDIT%20FORMAT.pdf", type: "pdf" },
  { title: "External Department Audit Format", url: PDF + "External%20Department%20Audit%20Format.pdf", type: "pdf" },
  { title: "External Audit Framework — Mapping of P Files & Supporting Files", url: PDF + "External%20Audit%20Frame%20work%20-%20Mapping%20of%20P%20Files%20&%20Supporting%20FIles.pdf", type: "pdf" },
  { title: "Faculty Audit Format", url: PDF + "FACULTY%20AUDIT%20FORMAT.pdf", type: "pdf" },
  { title: "MITS EOMS NCR Report ISO 21001", url: PDF + "MITS%20EOMS%20NCR%20Report%20ISO%2021001.pdf", type: "pdf" },
  { title: "MITS EOMS Department Check List ISO 21001", url: PDF + "MITS%20EOMS%20Department%20Check%20List%20ISO%2021001.pdf", type: "pdf" },
  { title: "MITS EOMS Internal Audit Notes ISO 21001", url: PDF + "MITS%20EOMS%20Internal%20Audit%20Notes%20ISO%2021001.pdf", type: "pdf" },
  { title: "MITS EOMS Course File Audit ISO 21001", url: PDF + "MITS%20EOMS%20Course%20File%20Audit%20ISO%2021001.pdf", type: "pdf" },
  { title: "MITS Check List — Laboratory Audit", url: PDF + "MITS%20Check%20List%20Laboratory%20Audit.pdf", type: "pdf" },
  { title: "MITS EOMS Theory Course File Audit ISO 21001 (2024-25)", url: PDF + "MITS%20EOMS%20Theory%20Course%20File%20Audit%20ISO%2021001%202024-25.pdf", type: "pdf" },
  { title: "MITS EOMS Lab Course File Audit ISO 21001 (2024-25)", url: PDF + "MITS%20EOMS%20Lab%20Course%20File%20Audit%20ISO%2021001%202024-25.pdf", type: "pdf" },
];

export const naacFormats: Doc[] = [
  { title: "NAAC AQAR Support Documents", url: PDF + "AQAR_MITS%20Support%20Documents.pdf", type: "pdf" },
  { title: "NAAC Supporting Document Manual — Quantitative Inputs for AQAR", url: PDF + "Supporting%20Document%20Manual%20-%20Quantitative%20Inputs%20For%20AQAR.pdf", type: "pdf" },
  { title: "NAAC Benchmarks & SOP", url: PDF + "MITS_benchmarks-_IQAC.xlsx", type: "xlsx" },
  { title: "NAAC AQAR Benchmarks & SOP", url: PDF + "MITS-AQAR-Benchmarks-SOP.pdf", type: "pdf" },
  { title: "Stakeholders Feedback — ATR Format", url: PDF + "MITS%20Dept_Stakeholders%20Action%20Taken%20Report_format.docx", type: "doc" },
  { title: "Correlation — NAAC Reforms 2024 & Existing NAAC Criterion", url: PDF + "Correlation%20between%20New%20NAAC%20Reforms%202024%20&%20Existing%20NAAC%20Criterion%20Key%20Indicators.pdf", type: "pdf" },
  { title: "MITS Responsibilities Matrix for NAAC 2024 Reforms (MBGL)", url: PDF + "New%20Reforms%20Correlation%20and%20MIts%20Responsibilities.pdf", type: "pdf" },
];

export const nbaFormats: Doc[] = [
  { title: "NBA Supporting Document Manual — Program Specific Files", url: PDF + "NBA%20Supporting%20Document%20Manual%20-%20Program%20Specific%20Files.pdf", type: "pdf" },
  { title: "NBA — List of Files (BSH Department)", url: PDF + "BSH_NBA_Files%20List.pdf", type: "pdf" },
  { title: "AICTE CO-PO Mapping Template — CSE Allied Branches", url: PDF + "AICTE%20CO-PO%20Mapping%20Template_CSE%20Allied%20Branches.xlsx", type: "xlsx" },
  { title: "AICTE CO-PO Mapping Template — Core Branches", url: PDF + "AICTE%20CO-PO%20Mapping%20Template_Core%20Branches.xlsx", type: "xlsx" },
  { title: "Complex Engineering Problem Solving (CPS) Form", url: PDF + "Complex%20Engineering%20Problem-Solving%20_CPS_Form.xlsx", type: "xlsx" },
  { title: "Program Outcomes (PO) Mapping with WA & WK", url: PDF + "Program%20Outcomes%20(PO)%20Mapping%20with%20WA%20&%20WK.xlsx", type: "xlsx" },
  { title: "SDG Mapping", url: PDF + "SDG%20Mapping.xlsx", type: "xlsx" },
  { title: "IEA-GAPC2021 Graduate Attributes & Professional Competencies", url: PDF + "IEA-GAPC2021_GRADUATE%20ATTRIBUTES%20&%20PROFESSIONAL%20COMPETENCIES.xlsx", type: "xlsx" },
];

export const nirfFormats: Doc[] = [
  { title: "NIRF — Department Data Template", url: PDF + "NIRF-%20Department_data_template_MITS(3).xlsx", type: "xlsx" },
  { title: "NIRF — Financial Data Template", url: PDF + "NIRF%20-%20Financial_data_template_MITS(3).xlsx", type: "xlsx" },
];

export const checkLists: Doc[] = [
  { title: "Check List — Anti-Ragging Committee (ARC)", url: PDF + "Check%20List-%20Anti-Ragging%20Committee%20(ARC).pdf", type: "pdf" },
  { title: "Check List — Culturals", url: PDF + "Check%20List-%20Culturals.pdf", type: "pdf" },
  { title: "Check List — Events Organized (NSS/NCC)", url: PDF + "Check%20List-%20EVENTS%20ORGANIZED%20(NSS_NCC).pdf", type: "pdf" },
  { title: "Check List — Events Organized", url: PDF + "Check%20List-%20Events%20Organized.pdf", type: "pdf" },
  { title: "Check List — Grievances and Redressal Committee (GRC)", url: PDF + "Check%20List-%20Grievances%20and%20Redressal%20Committee%20(GRC).pdf", type: "pdf" },
  { title: "Check List — Internal Complaint Committee (ICC)", url: PDF + "Check%20List-%20Internal%20Complaint%20Committee%20(ICC).pdf", type: "pdf" },
  { title: "Check List — Sports", url: PDF + "Check%20List-%20Sports.pdf", type: "pdf" },
  { title: "Check List — Stakeholders Feedback", url: PDF + "Check%20List-%20Stakeholders%20Feedback.pdf", type: "pdf" },
  { title: "MITS Check List — DAB, PAC & IAAB", url: PDF + "MITS%20Check%20List%20-%20DAB,%20PAC%20&%20IAAB.pdf", type: "pdf" },
  { title: "MITS Check List — Value Added Course", url: PDF + "Check%20lIst-Value%20Added%20Course.pdf", type: "pdf" },
];

// ---------------- MANUALS / FORMATS / GUIDELINES ----------------
export const manualsTable: { no: number; title: string; docs: Doc[] }[] = [
  { no: 2, title: "Quality Objective Parameters", docs: [{ title: "Quality Objective Parameters", url: PDF + "Quality%20Objective%20Parameters.xlsx", type: "xlsx" }] },
  { no: 3, title: "Files to be Maintained by Department for B.Tech Programme", docs: [{ title: "B.Tech Files V0.1", url: PDF + "Files%20to%20be_maintained%20by%20Department%20for%20B.Tech%20V0.1.pdf", type: "pdf" }] },
  { no: 4, title: "Files to be Maintained by Department for M.Tech/MBA/MCA Programme", docs: [{ title: "M.Tech / MBA / MCA Files V0.1", url: PDF + "Files%20to%20be_maintained%20by%20Department%20for%20B.Tech%20V0.1.pdf", type: "pdf" }] },
  { no: 5, title: "General Information to be Maintained by the Department", docs: [{ title: "General Information Format", url: PDF + "General%20Information%20to%20be%20maintained%20by%20Department.pdf", type: "pdf" }] },
  { no: 6, title: "Action Taken Reports to be Maintained", docs: [{ title: "Action Taken Reports Format", url: PDF + "Action%20Taken%20Reports%20to%20be%20maintained.pdf", type: "pdf" }] },
  { no: 7, title: "Academic Calendar (Institute & Department)", docs: [
    { title: "Institute Academic Calendar", url: "https://mits.ac.in/ugc-autonomous-exam-portal", type: "link" },
    { title: "Department Activity Calendar", url: PDF + "Department%20Activity%20Calendar.xlsx", type: "xlsx" },
  ]},
  { no: 8, title: "Curriculum (R20 & R23 Regulations)", docs: [
    { title: "R20 Curriculum & Regulations", url: "https://mits.ac.in/ugc-autonomous-exam-portal", type: "link" },
    { title: "R23 Curriculum & Regulations", url: "https://mits.ac.in/ugc-autonomous-exam-portal", type: "link" },
  ]},
  { no: 9, title: "Course Allocation", docs: [{ title: "Course Allocation Template", url: PDF + "Course_Allocation.xlsx", type: "xlsx" }] },
  { no: 12, title: "Continuous Internal Evaluation — Result Analysis", docs: [{ title: "Department Internal Exam Result Analysis", url: PDF + "Department%20Internal%20-%20Exam%20Result%20Analysis.xlsx", type: "xlsx" }] },
  { no: 14, title: "Course File Theory (DTBU & UGC-Autonomous)", docs: [
    { title: "Course File Theory (DTBU)", url: PDF + "MITS%20DTBU%20Theory%20Course%20File.rar", type: "zip" },
    { title: "Course File Theory (UGC-Autonomous)", url: PDF + "Course%20File%20Theory.rar", type: "zip" },
    { title: "Master List — B.Tech Theory Course File", url: PDF + "DOC-ID_B.Tech%20Theory%20Course%20File.pdf", type: "pdf" },
    { title: "Master List — M.Tech Theory Course File", url: PDF + "DOC-ID_M.Tech%20Theory%20Course%20File.pdf", type: "pdf" },
    { title: "Course File Theory — MCA", url: PDF + "Course%20File%20Theory-MCA.rar", type: "zip" },
    { title: "Master List — MCA Theory Course File", url: PDF + "DOC-ID_M.C.A%20Theory%20Course%20File.pdf", type: "pdf" },
    { title: "Course File Theory — MBA", url: PDF + "Coursefile%20Theory-MBA.rar", type: "zip" },
    { title: "Master List — MBA Theory Course File", url: PDF + "DOC-ID_M.B.A%20Theory%20Course%20File.pdf", type: "pdf" },
  ]},
  { no: 15, title: "Course File Laboratory", docs: [
    { title: "Course File Laboratory (DTBU)", url: PDF + "MITS%20DTBU%20Laboratory%20Course%20FIle.rar", type: "zip" },
    { title: "Course File Laboratory (UGC-Autonomous)", url: PDF + "Course%20File%20Laboratory.rar", type: "zip" },
    { title: "Master List — B.Tech Lab Course File", url: PDF + "DOC-ID_B.Tech%20Laboratory%20Course%20File.pdf", type: "pdf" },
    { title: "Course File Laboratory — MBA", url: PDF + "Lab%20Coursefile%20Theory-MBA.rar", type: "zip" },
    { title: "Master List — MBA Lab Course File", url: PDF + "DOC-ID_M.B.A%20Laboratory%20Course%20File.pdf", type: "pdf" },
    { title: "Course File Laboratory — MCA", url: PDF + "Course%20File_Laboratory_MCA.rar", type: "zip" },
    { title: "Master List — MCA Lab Course File", url: PDF + "DOC-ID_M.C.A%20Laboratory%20Course%20File.pdf", type: "pdf" },
  ]},
  { no: 17, title: "Value Added Course", docs: [
    { title: "Proposal for Value-Added Courses", url: PDF + "Proposal_to_Conduct_Value_Added_Courses.docx", type: "doc" },
    { title: "Checklist — Value-Added Courses", url: PDF + "Check%20lIst-Value%20Added%20Course.docx", type: "doc" },
  ]},
  { no: 18, title: "Remedial Classes", docs: [{ title: "Remedial Class Schedule & Attendance", url: PDF + "Remedial%20Class%20Schedule%20&%20Attendance%20Improvement.xlsx", type: "xlsx" }] },
  { no: 19, title: "Mentoring Scheme", docs: [{ title: "Mentoring Scheme Template", url: PDF + "Mentoring%20Scheme.xlsx", type: "xlsx" }] },
  { no: 20, title: "Bridge Course", docs: [{ title: "Bridge Course Schedule & Attendance", url: PDF + "Bridge%20Course%20Schedule%20&%20Attendance.xlsx", type: "xlsx" }] },
  { no: 21, title: "Stakeholder Feedback", docs: [
    { title: "Questionnaire (AY 2024-25 Onwards)", url: PDF + "MITS%20Stakeholder%20Feedback%20Questionnaire%20from%20(AY%202024-25%20Onwards).pdf", type: "pdf" },
    { title: "Stakeholder Feedback — ATR", url: PDF + "Stakeholders%20Action%20Taken%20Report%20format.docx", type: "doc" },
  ]},
  { no: 22, title: "Industrial Visit", docs: [
    { title: "Permission for Industrial Visit", url: PDF + "Permission%20for%20Industrial%20Visit.docx", type: "doc" },
    { title: "Industrial Visit Report", url: PDF + "Industrial%20Visit%20Report.doc", type: "doc" },
  ]},
  { no: 23, title: "Application for Event Participation", docs: [{ title: "Application Format", url: PDF + "Application_for_Event_Participation.docx", type: "doc" }] },
  { no: 24, title: "Proposal to Organize Events", docs: [{ title: "Proposal Format", url: PDF + "Proposal_to_Organize_Event.docx", type: "doc" }] },
  { no: 25, title: "Proposal for Research Seed Funding", docs: [{ title: "Research Seed Funding Proposal", url: PDF + "Proposal%20for%20Research%20Seed%20Funding.docx", type: "doc" }] },
  { no: 26, title: "Proposal for Organizing NSS, NCC, Sports & Cultural Events", docs: [{ title: "Proposal Format", url: PDF + "Proposal_to_Organize_NSS_Sports_Cultural%20Events.docx", type: "doc" }] },
  { no: 27, title: "Laboratory Equipment Maintenance", docs: [{ title: "Maintenance Format", url: PDF + "Laboratory%20Equipment%20Maintenance.docx", type: "doc" }] },
  { no: 28, title: "Laboratory Dead Stock Equipment", docs: [{ title: "Dead Stock Format", url: PDF + "Laboratory_Dead_Stock_Equipment.docx", type: "doc" }] },
  { no: 29, title: "Laboratory Equipment Maintenance — Action Report", docs: [{ title: "Action Report Format", url: PDF + "Laboratory%20Equipment%20%20Maintenance%20Action%20Report.docx", type: "doc" }] },
  { no: 30, title: "Appraisal and 360° Feedback Calculation", docs: [{ title: "Calculation Sheet", url: PDF + "Appraisal%20and%20360%C2%B0%20Feedback%20Calculation.pdf", type: "pdf" }] },
  { no: 31, title: "Minutes of Meeting", docs: [
    { title: "MOM Format — Cell", url: PDF + "MOM_format_Cells.docx", type: "doc" },
    { title: "MOM Format — Department", url: PDF + "MOM_format_Department.docx", type: "doc" },
  ]},
];

// ---------------- QUALITY INITIATIVES ----------------
export const qualityInitiatives = [
  { title: "Outcome Based Education (OBE)", desc: "Systematic implementation of OBE across UG/PG with defined POs, PSOs, COs, direct/indirect attainment, and closing-the-loop reviews." },
  { title: "Academic & Administrative Audits", desc: "Annual Internal & External AAA with action-taken reports, gap analysis and continuous improvement." },
  { title: "Faculty Development", desc: "NITTTR PDPs, Guru Dakshta Faculty Induction Programme, and department-level capability building." },
  { title: "Student Development", desc: "Mentoring, bridge courses, remedial classes, value-added courses, life-skills and career progression tracking." },
  { title: "Stakeholder Feedback Loop", desc: "Structured feedback from students, faculty, parents, alumni, employers with published ATR & evidence." },
  { title: "Best Practices & Distinctive Performance", desc: "Institutionalized best practices with measurable outcomes and distinct MITS identity in research, sports, culture and social impact." },
  { title: "ISO 21001:2018 EOMS", desc: "Educational Organizations Management System — surveillance audits by TUV SUD, aligned with NAAC criteria." },
  { title: "e-Content & Digital Learning", desc: "MITS e-Content Development Center, faculty e-content repository, SOP and declaration frameworks." },
];

// ---------------- CONTACT ----------------
export const contact = {
  office: "Internal Quality Assurance Cell (IQAC)",
  institute: "Madanapalle Institute of Technology & Science (Deemed to be University)",
  address: "Post Box No. 4, Angallu, Madanapalle – 517325, Chittoor District, Andhra Pradesh, India",
  email: "iqac@mits.ac.in",
  phone: "+91-7330803555",
  hours: "IQAC Hours — Last Thursday of every month, 10:00 AM to 04:00 PM",
  maps: "https://www.google.com/maps?q=Madanapalle+Institute+of+Technology+%26+Science",
};

export const bannerImage = "https://mits.ac.in/images/inner-banner.jpg";
