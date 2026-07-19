export interface CellItem {
  name: string;
  abbreviation?: string;
  href: string;
}

export interface CellCategory {
  id: string;
  title: string;
  description: string;
  cells: CellItem[];
}

export const cellCategories: CellCategory[] = [
  {
    id: "student-welfare",
    title: "Student Support & Welfare",
    description: "Support systems dedicated to student wellbeing, mentoring, counseling, and activities.",
    cells: [
      { name: "Grievance Redressal Cell", abbreviation: "GRC", href: "https://mits.ac.in/grc" },
      { name: "Anti-Ragging Cell", href: "https://mits.ac.in/anti-ragging" },
      { name: "Internal Complaints Cell", abbreviation: "ICC", href: "https://mits.ac.in/icc" },
      { name: "Psychological Counselling Cell", abbreviation: "PCC", href: "https://mits.ac.in/pcc" },
      { name: "Student Welfare Cell", abbreviation: "SWC", href: "https://mits.ac.in/swc" },
      { name: "Student Activity Centre", abbreviation: "SAC", href: "https://mits.ac.in/student-activity-center-sac" },
      { name: "Mentor - Mentee Cell", abbreviation: "MMC", href: "https://mits.ac.in/mentor-menteecell" },
      { name: "Alumni Cell", href: "https://alumni.mits.ac.in/" },
    ],
  },
  {
    id: "equity-inclusion",
    title: "Equity & Inclusion",
    description: "Cells ensuring equal opportunities, safety, and empowerment for diverse student groups.",
    cells: [
      { name: "Minority Cell", href: "https://mits.ac.in/minoritycell" },
      { name: "SC & ST Cell", href: "https://mits.ac.in/sc-st-cell" },
      { name: "Women Empowerment Cell", abbreviation: "WEC", href: "https://mits.ac.in/wec" },
      { name: "Socio-Economically Disadvantaged Group Cell", abbreviation: "SEDG Cell", href: "https://mits.ac.in/sedg-cell" },
      { name: "Equal Opportunity Facilitation Cell", abbreviation: "EOF Cell", href: "https://mits.ac.in/eofc" },
    ],
  },
  {
    id: "academic-quality",
    title: "Academic & Quality Governance",
    description: "Governance cells driving institutional quality, policy implementation, and strategic planning.",
    cells: [
      { name: "Planning, Approvals, Accreditations, Rankings & Certifications Cell", abbreviation: "PAARCC", href: "https://mits.ac.in/paarc-cell" },
      { name: "Internal Quality Assurance Cell", abbreviation: "IQAC", href: "https://mits.ac.in/newiqac1" },
      { name: "Universal Human Values Cell", abbreviation: "UHVC", href: "https://mits.ac.in/uhv-cell" },
      { name: "AICTE PARAKH Cell", href: "https://mits.ac.in/parakh" },
      { name: "National Education Policy Cell", abbreviation: "NEP Cell", href: "https://www.mits.ac.in/nep-cell" },
      { name: "Sustainable Development Goals Cell", abbreviation: "SDG Cell", href: "https://mits.ac.in/sdg-cell" },
    ],
  },
  {
    id: "innovation-career",
    title: "Innovation, Research & Entrepreneurship",
    description: "Incubation, start-ups, intellectual property facilitation, and industry linkage cells.",
    cells: [
      { name: "Startup Cell", href: "https://mits.ac.in/nisp" },
      { name: "Intellectual Property Rights Cell", abbreviation: "IPRC", href: "https://mits.ac.in/ipr" },
      { name: "Design Thinking Studio", abbreviation: "DTS", href: "https://mits.ac.in/dts" },
      { name: "Centre of Innovation & Incubation", abbreviation: "CII", href: "https://mits.ac.in/innovation-center" },
      { name: "Intellectual Property Facilitation Centre", abbreviation: "IPFC", href: "https://mits.ac.in/ipfc" },
      { name: "Industry-Institute Interaction Cell", abbreviation: "IIIC", href: "https://mits.ac.in/iiic" },
      { name: "Entrepreneurship Development Cell", abbreviation: "EDC", href: "https://mits.ac.in/ed-cell" },
      { name: "R & D Cell Formation", href: "https://mits.ac.in/r&d-cell" },
    ],
  },
  {
    id: "national-schemes",
    title: "Extracurricular & National Service",
    description: "National service units encouraging civic engagement, leadership, and discipline.",
    cells: [
      { name: "National Service Scheme - NSS Unit", href: "https://mits.ac.in/nss" },
      { name: "National Cadet Corps (Army) - NCC Unit", href: "https://mits.ac.in/ncc" },
      { name: "National Cadet Corps (Air Wing) - NCC Unit", href: "https://mits.ac.in/ncc-airwing" },
    ],
  },
  {
    id: "professional-societies",
    title: "Professional Societies & Chapters",
    description: "Student and faculty chapters of national and international professional bodies.",
    cells: [
      { name: "Institute of Electrical and Electronics Engineers - IEEE Student Branch", href: "https://mits.ac.in/ieee" },
      { name: "Indian Society for Technical Education - ISTE Chapter", href: "https://mits.ac.in/iste" },
      { name: "Computer Society of India - CSI Student Branch", href: "https://mits.ac.in/csi-content" },
      { name: "Institution of Electronics and Telecommunication Engineers", abbreviation: "IETE", href: "https://mits.ac.in/iete" },
      { name: "National Association of Software and Services Companies", abbreviation: "NASSCOM", href: "https://mits.ac.in/nasscom-cell" },
      { name: "The Institution of Engineers (India)", abbreviation: "IEI", href: "https://mits.ac.in/iei" },
    ],
  },
];
