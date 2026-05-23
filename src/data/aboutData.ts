// Centralized data for the About / institutional governance hub.
// All content sourced from official mits.ac.in pages.

export interface LeadershipProfile {
  slug: string;
  name: string;
  designation: string;
  qualification?: string;
  image: string;
  tagline?: string;
  message?: string;
  bio: string[];
  highlights?: string[];
  documents?: { label: string; url: string }[];
  sourceUrl: string;
}

export const leadershipProfiles: Record<string, LeadershipProfile> = {
  chancellor: {
    slug: "chancellor",
    name: "Dr. N. Vijaya Bhaskar Choudary",
    designation: "Founder & Chancellor",
    qualification: "M.Com., Ph.D.",
    image: "https://mits.ac.in/images/chancellor1.jpg",
    tagline: "Attracting global talent to local village",
    message:
      "By the grace of God, I have been entrusted with the sacred responsibility to serve as the Chancellor of a Deemed to be University — a divine opportunity to lay the foundation for a vibrant ecosystem of knowledge, innovation and transformation. I wish MITS shall stand as a beacon of learning, nurturing minds and shaping leaders for generations to come, attracting global talent to local village to create pathbreaking disruptive new technologies. To be able to give back to the very soil that shaped me and to serve the community that raised me, is both an honour and a responsibility I hold with deep reverence. This is not just about education; it is about building a legacy of hope, growth, and transformation for society at large.",
    bio: [
      "Dr. Nadella Vijaya Bhaskar Choudary is a distinguished academician, visionary entrepreneur, and philanthropist deeply committed to the cause of quality education. Hailing from Madanapalle, he has dedicated his life to the advancement of knowledge and the upliftment of society.",
      "He was awarded a doctoral degree from Jawaharlal Nehru Technological University, Anantapur, for his seminal work on Change Management Practices in the IT Industry. His in-depth analysis of organizational transformation and leadership dynamics has shaped his enduring vision.",
      "Originating from a modest agricultural family, Dr. Choudary firmly believes that while agriculture is the foundation of human existence, technology plays a crucial role in enhancing its productivity and sustainability. His noble vision to deliver quality technical and management education began with the establishment of MITS in 1998 with an intake of 180 students. In recognition of this perseverance, vision, and dedication to educational excellence, the UGC conferred MITS with the prestigious Deemed to be University status in 2025.",
      "Under his visionary leadership, MITS students successfully completed the University Innovation Fellowship program. Stanford University has recognized MITS as one of the most happening campuses — a testament to the vibrant culture of innovation and academic excellence that defines the institution.",
    ],
    highlights: [
      "Paul Harris Award by Rotary International (2008)",
      "Founded MITS in 1998; conferred Deemed to be University status in 2025",
      "Published research papers in reputed national and international journals",
      "Champions free medical camps, community outreach and blood donation drives",
    ],
    sourceUrl: "https://mits.ac.in/chancellor",
  },
  "pro-chancellor": {
    slug: "pro-chancellor",
    name: "Sri. Nadella Dwarakanath",
    designation: "Pro-Chancellor",
    image: "https://mits.ac.in/images/proc.jpg",
    bio: [
      "Sri. Nadella Dwarakanath is widely respected for his dedication to empowering communities through education and his intention to serve the common good. In recognition of decades of leadership in education and public service, he was formally appointed as the Pro-Chancellor of MITS Deemed to be University on 26th July 2025.",
      "With over 25 years of experience across education, he has consistently championed progress through integrity and local empowerment. He began his journey in public service as an elected ZPTC Member (Zilla Parishad Territorial Constituency) from 1995 to 2000, playing a crucial role in rural development.",
      "In 2004, he founded Indian Public School and served as the Founder and Correspondent until 2018. Under his dynamic leadership the school earned a reputation for academic excellence and holistic development.",
      "He assumed educational leadership from 1998 to 2021 as President of Ratakonda Ranga Reddy Academy, contributing to the institutional growth of Madanapalle Institute of Technology & Science. He also served as Estate Manager of Besant Theosophical College, Madanapalle, from 2017 to 2021.",
      "As Pro-Chancellor, he reflects a deep-rooted dedication to governance and institutional development with a special focus on community impact.",
    ],
    sourceUrl: "https://mits.ac.in/pro-chancellor",
  },
  "vice-chancellor": {
    slug: "vice-chancellor",
    name: "Dr. C. Yuvaraj",
    designation: "Vice-Chancellor (I/c)",
    qualification: "M.E., Ph.D., MISTE., FIE",
    image: "https://mits.ac.in/images/vc.jpg",
    bio: [
      "Dr. C. Yuvaraj is the Vice Chancellor (I/c) of MITS Deemed to be University. He completed his B.E at M.S. Ramaiah Institute of Technology, Bangalore; M.E at University Visvesvaraya College of Engineering, Bangalore; Ph.D at Bangalore University; and MBA at S.K. University, Anantapur.",
      "In a professional career of more than 34 years, Dr. Yuvaraj has contributed to academics in various capacities. His areas of interest include Composite Materials, Development of New Materials, Material Characterization, Development of Tubular Electrodes, and Hybrid Metal Matrix Composites.",
      "He has to his credit 42 publications in international journals and 30 conference/seminar presentations (17 National, 13 International). He has chaired several conference sessions, participated in 58 refresher/short-term courses, and supervised 7 Ph.D. scholars. He has completed two projects worth Rs. 39,12,690/- as Co-PI.",
    ],
    highlights: [
      "ISTE AP Section — Best Engineering College Principal Award (2023)",
      "University Best Principal Award (2023) — JNT University Anantapur",
      "Best Educationist Award — International Institute of Education & Management",
      "Rashtriya Vidya Gaurav Gold Medal Award — Indian Solidarity Council",
    ],
    sourceUrl: "https://mits.ac.in/vice-chancellor",
  },
  registrar: {
    slug: "registrar",
    name: "Dr. D. Pradeep Kumar",
    designation: "Registrar (I/c)",
    qualification: "Ph.D.",
    image: "https://mits.ac.in/public/uploads/faculty/pradeep.jfif",
    bio: [
      "Dr. D. Pradeep Kumar is a Professor of Management with an MBA (1988) and a Ph.D. in Strategic Marketing (2004) from Sri Krishnadevaraya University, Anantapur. He has over 36 years of experience — six years in industry and 30 years in academia at institutions such as ISSR Vellore, KSRMCE Kadapa, and MITS.",
      "His areas of expertise include Marketing Management, Human Resource Management, Strategy, Business Analytics and Digital Marketing. He has authored 4 books with leading publishers, published and presented more than 50 papers in reputed journals and conferences, and guided 10 Ph.D. scholars.",
      "He has organized AICTE-funded national and international conferences, delivered numerous guest lectures, and chaired technical sessions. He is a Member of the Board of Studies for AITS Rajampet, SSGS College Guntakal, and JNTUA Anantapuram.",
    ],
    sourceUrl: "https://mits.ac.in/registrar",
  },
  "controller-of-examinations": {
    slug: "controller-of-examinations",
    name: "Dr. Sai Kumar. V",
    designation: "Controller of Examinations (I/c)",
    qualification: "B.E., M.Tech., Ph.D.",
    image: "https://mits.ac.in/images/sai.jpg",
    bio: [
      "Dr. Sai Kumar. V has a professional career of over 18 years of academic and industry experience, of which more than 12 years have been in academic administration. He was awarded a Ph.D. from Rayalaseema University, Kurnool; an M.Tech in VLSI Design from VIT University, Vellore; and a B.E in Electrical and Electronics Engineering from Periyar University, Salem.",
      "His areas of expertise include VLSI, Micro and Nano Electronics, IC Fabrication, Image Processing, Neural Networks and Computer Vision. He has published research papers, filed multiple patents and guided numerous undergraduate and postgraduate students.",
      "At MITS he served as Assistant Controller of Examinations and Controller of Examinations (I/c) under Autonomous status. As the Controller of Examinations (I/c) for MITS Deemed to be University, he has been instrumental in developing examination policies, introducing reforms and digitalizing examination procedures.",
      "He is also the NEP 2020 Cell Coordinator and the NEP SAARTHI Coordinator launched by the UGC to promote NEP 2020 initiatives. He is reachable at coeu@mits.ac.in.",
    ],
    highlights: [
      "Over 11 years managing the examination process",
      "Led digitalization of academic credentials via NAD (UGC ABC)",
      "NEP 2020 Cell Coordinator & NEP SAARTHI Coordinator",
    ],
    sourceUrl: "https://mits.ac.in/controller-of-examinations",
  },
  ombudsperson: {
    slug: "ombudsperson",
    name: "Prof. Konanki Dasaratha Ramaiah",
    designation: "Ombudsperson",
    qualification: "Ph.D.",
    image: "https://mits.ac.in/images/ram.jpg",
    bio: [
      "Prof. K. Dasaratha Ramaiah is a distinguished academician and scholar in the field of Economics, with over three decades of experience in teaching, research and administration. He obtained his B.A., M.A. and Ph.D. in Economics from Sri Krishnadevaraya University, Ananthapuramu. His doctoral research focused on \u201CFinances of Gram Panchayats in Andhra Pradesh.\u201D",
      "He served at Sri Krishnadevaraya University in several key positions — Registrar; Director, Directorate of Admissions; Head & Chairman, Board of Studies, Department of Economics & Applied Economics; and Coordinator, University Examinations. He also served as Project Officer of Sarva Shiksha Abhiyan (SSA), Ananthapuramu District.",
      "Prof. Ramaiah has published 66 research papers in reputed national and international journals, authored 4 books and edited 3 books. He has guided 24 Ph.D. and 11 M.Phil. scholars in Public Economics, Local Finance and Agricultural Economics.",
      "He has completed three major research projects funded by the UGC and ICSSR on socio-economic themes including \u201CFinancial Resources of Panchayati Raj Institutions,\u201D \u201CTribal Development through Sericulture,\u201D and \u201CWatershed Development and Sustainable Livelihoods.\u201D",
      "He continues to uphold academic integrity and institutional ethics in his current role as the Ombudsperson of MITS (Deemed-to-be University).",
    ],
    highlights: [
      "State Best Teacher Award (2018) by the Hon\u2019ble CM of Andhra Pradesh",
      "Guided 24 Ph.D. and 11 M.Phil. scholars",
      "66 research papers; 4 authored & 3 edited books",
    ],
    documents: [
      {
        label: "Ombudsperson Appointment Order",
        url: "https://mits.ac.in/assets/pdf/admin/Ombudsperson%20Appointment.pdf",
      },
    ],
    sourceUrl: "https://mits.ac.in/ombudsperson",
  },
};

export const leadershipOrder = [
  "chancellor",
  "pro-chancellor",
  "vice-chancellor",
  "registrar",
  "controller-of-examinations",
  "ombudsperson",
];

// ── Deans ─────────────────────────────────────────────────────────────
export interface DeanEntry {
  name: string;
  designation: string;
  school: string;
  qualification: string;
  image: string;
  deptKey?: string; // department to navigate to; faculty name used to open profile
  facultyName?: string;
  externalProfile?: string;
}

export const deansList: DeanEntry[] = [
  {
    name: "Dr. Rama S Komaragiri",
    designation: "Professor & Dean",
    school: "Academics",
    qualification: "Ph.D. (Technical University of Darmstadt, Germany)",
    image: "https://mits.ac.in/public/uploads/faculty/rama.jpg",
    externalProfile: "https://mits.ac.in/facultyprofile/735",
  },
  {
    name: "Dr. Dipankar Roy",
    designation: "Professor & Dean",
    school: "School of Engineering",
    qualification: "Ph.D. (University of Pisa, Italy)",
    image: "https://mits.ac.in/public/uploads/faculty/drdipankarroy(1).jpg",
    externalProfile: "https://mits.ac.in/facultyprofile/1",
  },
  {
    name: "Dr. Chandra Prakash Gupta",
    designation: "Professor & Dean",
    school: "School of Computing",
    qualification: "Ph.D. (University of Kota)",
    image: "https://mits.ac.in/public/uploads/faculty/gupta.png",
    externalProfile: "https://mits.ac.in/facultyprofile/730",
  },
  {
    name: "Dr. Bhanu Sree Reddy",
    designation: "Professor & Dean",
    school: "School of Management",
    qualification: "Ph.D. (Sri Venkateswara University)",
    image: "https://mits.ac.in/public/uploads/faculty/bhanu.png",
    deptKey: "mba",
    facultyName: "Dr. Bhanu Sree Reddy",
    externalProfile: "https://mits.ac.in/facultyprofile/701",
  },
];

// ── Department Heads ─────────────────────────────────────────────────
export interface HODEntry {
  name: string;
  department: string;
  image: string;
  deptKey: string; // links to existing department page
  externalProfile?: string;
}

export const departmentHeads: HODEntry[] = [
  { name: "Dr. Vijayakumar Natesan", department: "Civil Engineering", image: "https://mits.ac.in/public/uploads/faculty/fc9b84db32042ded85ace96100f6848f.JPG", deptKey: "ce", externalProfile: "https://mits.ac.in/facultyprofile/7" },
  { name: "Dr. Manavaalan Gunasekaran", department: "Electrical & Electronics Engineering", image: "https://mits.ac.in/public/uploads/faculty/manavaalan.JPG", deptKey: "eee", externalProfile: "https://mits.ac.in/facultyprofile/931" },
  { name: "Dr. S. Bhaskaran", department: "Mechanical Engineering", image: "https://mits.ac.in/public/uploads/faculty/Baskaran.JPG", deptKey: "me", externalProfile: "https://mits.ac.in/facultyprofile/306" },
  { name: "Dr. Sanjay Kumar C. Gowre", department: "Electronics & Communication Engineering", image: "https://mits.ac.in/public/uploads/faculty/sanjay.JPG", deptKey: "ece", externalProfile: "https://mits.ac.in/facultyprofile/1018" },
  { name: "Dr. M. Sreedevi", department: "Computer Science & Engineering", image: "https://mits.ac.in/public/uploads/faculty/sri.jpg", deptKey: "cse", externalProfile: "https://mits.ac.in/facultyprofile/140" },
  { name: "Dr. R. Kalpana", department: "CSE (Artificial Intelligence)", image: "https://mits.ac.in/public/uploads/faculty/DSC_9033.JPG", deptKey: "ai", externalProfile: "https://mits.ac.in/facultyprofile/80" },
  { name: "Dr. S. Kusuma", department: "CSE (Data Science)", image: "https://mits.ac.in/public/uploads/faculty/Kusuma.JPG", deptKey: "cseds", externalProfile: "https://mits.ac.in/facultyprofile/98" },
  { name: "Dr. B. Persis Urbana IVY", department: "CSE (Cyber Security)", image: "https://mits.ac.in/public/uploads/faculty/persis.JPG", deptKey: "csecs", externalProfile: "https://mits.ac.in/facultyprofile/1022" },
  { name: "Dr. S. Padma", department: "CSE (AI & ML)", image: "https://mits.ac.in/public/uploads/faculty/Padma.jpeg", deptKey: "aiml", externalProfile: "https://mits.ac.in/facultyprofile/144" },
  { name: "Dr. N. Naveen Kumar", department: "Computer Applications (MCA)", image: "https://mits.ac.in/public/uploads/faculty/Naveen%20Kumar.JPG", deptKey: "mca", externalProfile: "https://mits.ac.in/facultyprofile/254" },
  { name: "Dr. Prageetha G Raju", department: "Humanities", image: "https://mits.ac.in/public/uploads/faculty/pragathi.png", deptKey: "bsh", externalProfile: "https://mits.ac.in/facultyprofile/704" },
  { name: "Dr. P. Ramesh Reddy", department: "Mathematics", image: "https://mits.ac.in/public/uploads/faculty/DSC_7332.JPG", deptKey: "bsh", externalProfile: "https://mits.ac.in/facultyprofile/354" },
  { name: "Dr. M. Chandra Sekhar", department: "Physics", image: "https://mits.ac.in/public/uploads/faculty/Chandra%20Sekhar.JPG", deptKey: "bsh", externalProfile: "https://mits.ac.in/facultyprofile/372" },
  { name: "Dr. Renjith Bhaskaran", department: "Chemistry", image: "https://mits.ac.in/public/uploads/faculty/Renjith%20Bhaskaran.JPG", deptKey: "bsh", externalProfile: "https://mits.ac.in/facultyprofile/377" },
  { name: "Dr. Sudhakar Beedam", department: "English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/sudhakar.JPG", deptKey: "bsh" },
];

// ── Councils & Governance ────────────────────────────────────────────
export const executiveCouncil = {
  title: "Executive Council",
  description:
    "The Executive Council is the principal governance body of MITS Deemed to be University. It is responsible for the overall administration, financial governance and strategic direction of the institution in accordance with UGC regulations.",
  constitutionUrl:
    "https://mits.ac.in/assets/pdf/admin/Executive%20Council%20Constitution-2025.pdf",
  sourceUrl: "https://mits.ac.in/mits-minutes-ec",
};

export const academicCouncil = {
  title: "Academic Council",
  description:
    "The Academic Council is the apex academic body of the University, responsible for academic policy, curriculum, evaluation reforms and overall academic standards of all schools and departments.",
  constitutionUrl:
    "https://mits.ac.in/assets/pdf/admin/Academic%20Council%20Constitution%20DTBU.pdf",
  sourceUrl: "https://mits.ac.in/mits-minutes-ac",
};

// ── Mandatory Disclosures ────────────────────────────────────────────
export interface DisclosureItem {
  label: string;
  url: string;
}
export interface DisclosureCategory {
  category: string;
  items: DisclosureItem[];
}

export const mandatoryDisclosures: DisclosureCategory[] = [
  {
    category: "Handbooks & Codes",
    items: [
      { label: "MITS Handbook — Service Rules", url: "https://mits.ac.in/assets/pdf/admin/Staff%20Hand%20Book%20Service%20Rules-2024-25.pdf" },
      { label: "MITS Student Handbook", url: "https://mits.ac.in/assets/pdf/admin/Code%20of%20Conduct-Student.pdf" },
      { label: "Code of Conduct for BoG / Principal", url: "https://mits.ac.in/assets/pdf/admin/Code-of-Conduct-for-BoG-Principal.pdf" },
      { label: "MITS Strategic Plan 2022–27", url: "https://mits.ac.in/assets/pdf/admin/Strategic%20Plan%202022-27.pdf" },
      { label: "Professional Code of Conduct", url: "https://mits.ac.in/assets/pdf/admin/Professional%20Code%20of%20Conduct.pdf" },
    ],
  },
  {
    category: "UGC",
    items: [
      { label: "UGC Guidelines", url: "https://mits.ac.in/assets/pdf/admin/UGC%20AUTONOMOUS%20GUIDELINES.pdf" },
      { label: "UGC Undertaking", url: "https://mits.ac.in/assets/pdf/admin/UGC-Undertaking.pdf" },
      { label: "UGC Approval Letter for Autonomous Status", url: "https://mits.ac.in/assets/pdf/admin/Extension%20of%20Autonomous%20Status.pdf" },
      { label: "2(f) & 12(B) Certificates", url: "https://mits.ac.in/assets/pdf/admin/2f%20&%2012B.pdf" },
    ],
  },
  {
    category: "Governance & Finance",
    items: [
      { label: "Executive Council Constitution 2025", url: "https://mits.ac.in/assets/pdf/admin/Executive%20Council%20Constitution-2025.pdf" },
      { label: "Minutes of 2nd Executive Council Meeting", url: "https://mits.ac.in/assets/pdf/admin/EC%20Minutes%202nd%20Meeting.pdf" },
      { label: "Minutes of 1st Executive Council Meeting", url: "https://mits.ac.in/assets/pdf/admin/EC%20Minutes%201st%20Meeting.pdf" },
      { label: "Minutes of Governing Council Meeting 2014–2025", url: "https://mits.ac.in/assets/pdf/admin/Governing%20Council%20Minutes.pdf" },
      { label: "Minutes of Academic Council Meeting 2014–2025", url: "https://mits.ac.in/assets/pdf/admin/Academic%20Council%20Minutes.pdf" },
      { label: "Delegation of Financial Power", url: "https://mits.ac.in/assets/pdf/admin/DELEGATION%20OF%20FINANCIAL-POWER.pdf" },
      { label: "Finance Committee (DTBU) 2025–26", url: "https://mits.ac.in/assets/pdf/admin/Finance%20Committee%202025-26.pdf" },
      { label: "Finance Committee 2015–16 to 2025–26", url: "https://mits.ac.in/assets/pdf/admin/Finance%20Committee%20Archive.pdf" },
    ],
  },
  {
    category: "Audited Financial Statements",
    items: [
      { label: "Audited Statement 2024–25", url: "https://mits.ac.in/assets/pdf/admin/Audit%20Report%202024-25.pdf" },
      { label: "Audited Statement 2023–24", url: "https://mits.ac.in/assets/pdf/admin/Audit%20Report%202023-24.pdf" },
      { label: "Audited Statement 2022–23", url: "https://mits.ac.in/assets/pdf/admin/Audit%20Report%202022-23.pdf" },
      { label: "Audited Statement 2021–22", url: "https://mits.ac.in/assets/pdf/admin/Audit%20Report%202021-22.pdf" },
      { label: "Audited Statement 2020–21", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202020-21-min.pdf" },
      { label: "Audited Statement 2019–20", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202019-20.pdf" },
      { label: "Audited Statement 2018–19", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202018-19.pdf" },
      { label: "Audited Statement 2017–18", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202017-18.pdf" },
      { label: "Audited Statement 2016–17", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202016-17.pdf" },
      { label: "Audited Statement 2015–16", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202015-16.pdf" },
      { label: "Audited Statement 2014–15", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202014-15.pdf" },
    ],
  },
  {
    category: "AICTE Mandatory Disclosures",
    items: [
      { label: "AICTE Mandatory Disclosure 2025–26", url: "https://mits.ac.in/assets/pdf/admin/MITS%20Mandatory%20Disclosure%202025-26.pdf" },
      { label: "AICTE Mandatory Disclosure 2024–25", url: "https://mits.ac.in/assets/pdf/admin/Mandatory%20Disclosures_2024-25.pdf" },
      { label: "AICTE Mandatory Disclosure 2018–19", url: "https://mits.ac.in/assets/pdf/admin/Mandatory%20Disclosures_2018-19.pdf" },
    ],
  },
  {
    category: "AICTE Approvals",
    items: [
      { label: "AICTE Approval 2026–27", url: "https://mits.ac.in/assets/pdf/admin/EOA%20Report%202026-2027.PDF" },
      { label: "AICTE Approval 2025–26", url: "https://mits.ac.in/public/uploads/affiliations/AICTE%20EoA%202026-26%20[16.01.2026].pdf" },
      { label: "AICTE Approval 2024–25", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202024-2025.PDF" },
      { label: "AICTE Approval 2023–24", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202023-2024.PDF" },
      { label: "AICTE Approval 2022–23", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202022-2023.PDF" },
      { label: "AICTE Approval 2021–22", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202021-2022.PDF" },
      { label: "AICTE Approval 2020–21", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202020-2021.PDF" },
      { label: "AICTE Approval 2019–20", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202019-2020.PDF" },
      { label: "AICTE Approval 2018–19", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202018-2019.PDF" },
      { label: "AICTE Approval 2017–18", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202017-2018.PDF" },
      { label: "AICTE Approval 2016–17", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202016-2017.PDF" },
      { label: "AICTE Approval 2015–16", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202015-2016.PDF" },
      { label: "AICTE Approval 2014–15", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202014-2015.PDF" },
    ],
  },
  {
    category: "Board of Studies (BoS) Documents",
    items: [
      { label: "BoS — Computer Science & Technology", url: "https://mits.ac.in/assets/pdf/admin/BOS-CST.pdf" },
      { label: "BoS — Computer Science & Information Technology", url: "https://mits.ac.in/assets/pdf/admin/BOS-CSIT.pdf" },
      { label: "BoS — Department of Management Studies (MBA)", url: "https://mits.ac.in/assets/pdf/admin/BOS-MBA.pdf" },
      { label: "BoS — Department of Computer Applications (MCA)", url: "https://mits.ac.in/assets/pdf/admin/BOS-MCA.pdf" },
      { label: "BoS — Department of Mathematics", url: "https://mits.ac.in/assets/pdf/admin/BOS-Mathematics.pdf" },
      { label: "BoS — Department of Physics", url: "https://mits.ac.in/assets/pdf/admin/BOS-Physics.pdf" },
      { label: "BoS — Department of Chemistry", url: "https://mits.ac.in/assets/pdf/admin/BOS-Chemistry.pdf" },
      { label: "BoS — Department of English & Foreign Languages", url: "https://mits.ac.in/assets/pdf/admin/BOS-English.pdf" },
      { label: "BoS — Department of Humanities", url: "https://mits.ac.in/assets/pdf/admin/BOS-Humanities.pdf" },
    ],
  },
  {
    category: "Accreditations & Certifications",
    items: [
      { label: "MITS TEQIP Revised IDP", url: "https://mits.ac.in/assets/pdf/admin/TEQIP-IDP.pdf" },
      { label: "SWAYAM-NPTEL Certificate", url: "https://mits.ac.in/assets/pdf/admin/MITS-NPTEL.pdf" },
      { label: "ISO 21001:2018 Certificate", url: "https://mits.ac.in/assets/pdf/admin/Madanapalle%20Institute%20of%20Technology%20&%20Science-ISO.pdf" },
      { label: "NABL Accredited Certificate (Labs)", url: "https://mits.ac.in/assets/pdf/admin/Certificate%20TC-15590.pdf" },
      { label: "Fire Safety NOC 2022–2027", url: "https://mits.ac.in/assets/pdf/admin/Fire%20safety%20NOC%202022-2027.pdf" },
    ],
  },
  {
    category: "NBA Accreditations",
    items: [
      { label: "NBA — PG MBA (2025–28)", url: "https://mits.ac.in/public/uploads/affiliations/MBA%20NBA%20Cetificate-2025.pdf" },
      { label: "NBA — PG MCA (2025–28)", url: "https://mits.ac.in/public/uploads/affiliations/MCA%20NBA%20Cetificate-2025.pdf" },
      { label: "NBA — UG Programmes Civil, CSE, ECE, EEE, ME (2025–28)", url: "https://mits.ac.in/public/uploads/affiliations/Madanapalle%20Institute%20of%20Technology%20_%20Science,%20Andhra%20Pradesh19_6_2025_12_45_57.pdf" },
      { label: "NBA — PG MCA (2024–25)", url: "https://mits.ac.in/public/uploads/affiliations/MCA%20NBA%202024-25.pdf" },
      { label: "NBA — UG CST (2024–27)", url: "https://mits.ac.in/public/uploads/affiliations/NBA%20-%20CST-%20confirmation%20-till%2030.6.2027.pdf" },
      { label: "NBA — UG Programmes Civil, CSE, ECE, EEE, ME (2022–25)", url: "https://mits.ac.in/public/uploads/affiliations/NBA%20UG%202022-25.pdf" },
      { label: "NBA — PG MCA (2022–24)", url: "https://mits.ac.in/public/uploads/affiliations/MCA%20NBA%202022-24.pdf" },
      { label: "NBA — PG MBA (2022–25)", url: "https://mits.ac.in/public/uploads/affiliations/MBA%20NBA%202022-25.pdf" },
      { label: "NBA — UG Programmes CSE, ECE, EEE, ME & PG MBA (2019–22)", url: "https://mits.ac.in/public/uploads/affiliations/NBA%202019-22.pdf" },
      { label: "NBA — UG Civil & PG MCA (2019–21)", url: "https://mits.ac.in/public/uploads/affiliations/NBA%20Civil%202019-21.pdf" },
    ],
  },
  {
    category: "Annual Reports",
    items: [
      { label: "Annual Report 2024–25", url: "https://mits.ac.in/assets/pdf/admin/AnnualReport%202024-25.pdf" },
      { label: "Annual Report 2023–24", url: "https://mits.ac.in/assets/pdf/admin/AnnualReport%202023-24.pdf" },
      { label: "Annual Report 2022–23", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202022-23.pdf" },
      { label: "Annual Report 2021–22", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%20AY%202021-22.pdf" },
      { label: "Annual Report 2018–19", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202018-19.pdf" },
      { label: "Annual Report 2017–18", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202017-18.pdf" },
      { label: "Annual Report 2016–17", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202016-17.pdf" },
      { label: "Annual Report 2015–16", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202015-16.pdf" },
      { label: "Annual Report 2014–15", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202014-15.pdf" },
    ],
  },
  {
    category: "Compliance & Other Disclosures",
    items: [
      { label: "Implementing Food Safety & Standard Act", url: "https://mits.ac.in/assets/pdf/admin/Food%20Safety%20Act.pdf" },
      { label: "Insurance for Students (valid up to June 2025)", url: "https://mits.ac.in/assets/pdf/admin/Student%20Insurance%202025.pdf" },
    ],
  },
];

// ── PDF references ───────────────────────────────────────────────────
export const bosPdfUrl =
  "https://mits.ac.in/assets/pdf/admin/MITS-DTBU-BOS-AY(2025-2026).pdf";
export const organogramPdfUrl =
  "https://mits.ac.in/assets/pdf/admin/Organogram%20-%20MITS%20Deemed%20to%20be%20University.pdf";

// ── About sections (used for mega menu & hub page) ───────────────────
export interface AboutSectionDef {
  key: string;
  label: string;
  href: string;
  description: string;
}

export const aboutSections: AboutSectionDef[] = [
  { key: "leadership", label: "Leadership", href: "/about/leadership", description: "Chancellor, Pro-Chancellor, Vice-Chancellor and statutory officers." },
  { key: "academic-leadership", label: "Academic Leadership", href: "/about/academic-leadership", description: "Deans of Academics, Engineering, Computing and Management." },
  { key: "deans", label: "Deans", href: "/about/deans", description: "School Deans steering each academic vertical at MITS." },
  { key: "department-heads", label: "Department Heads", href: "/about/department-heads", description: "Heads of every academic department across the University." },
  { key: "executive-council", label: "Executive Council", href: "/about/executive-council", description: "Apex governance body responsible for institutional administration." },
  { key: "academic-council", label: "Academic Council", href: "/about/academic-council", description: "Highest academic authority for curriculum and academic reforms." },
  { key: "bos", label: "Board of Studies (BoS)", href: "/about/bos", description: "Departmental academic boards across schools." },
  { key: "organogram", label: "Organogram", href: "/about/organogram", description: "Organisational structure of MITS Deemed to be University." },
  { key: "mandatory-disclosures", label: "Mandatory Disclosures", href: "/about/mandatory-disclosures", description: "Statutory compliance, audit reports and accreditations." },
];
