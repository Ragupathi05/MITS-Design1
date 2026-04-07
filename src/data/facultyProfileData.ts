// Faculty detailed profile data structure and sample data

export interface EducationEntry {
  degree: string;
  specialization: string;
  branch?: string;
  institution: string;
  year: string;
}

export interface PostDocEntry {
  institution: string;
  researchArea: string;
  duration: string;
  description?: string;
}

export interface ResearchProfileLinks {
  scopus?: string;
  vidwan?: string;
  googleScholar?: string;
  orcid?: string;
  hIndex?: string;
}

export interface FundedProject {
  title: string;
  fundingAgency: string;
  amount: string;
  duration: string;
  role?: string;
  status?: string;
}

export interface PatentEntry {
  title: string;
  applicationNumber?: string;
  status: string;
  year: string;
}

export interface BookChapter {
  title: string;
  publisher: string;
  year: string;
  isbn?: string;
  type: "book" | "chapter";
}

export interface AwardEntry {
  awardName: string;
  organization: string;
  year: string;
  description?: string;
}

export interface CollaborationEntry {
  organization: string;
  area: string;
  duration?: string;
  description?: string;
}

export interface EventEntry {
  title: string;
  role: string;
  venue?: string;
  date: string;
}

export interface AffiliationEntry {
  organization: string;
  membershipId?: string;
  since?: string;
}

export interface InvitationEntry {
  title: string;
  event: string;
  venue?: string;
  date: string;
}

export interface AcademicVisit {
  institution: string;
  purpose: string;
  date: string;
}

export interface OutreachActivity {
  title: string;
  description: string;
  date?: string;
}

export interface PublicationEntry {
  title: string;
  journal?: string;
  conference?: string;
  year: string;
  authors: string;
  doi?: string;
}

export interface FacultyProfile {
  name: string;
  email?: string;
  phone?: string;
  designation: string;
  department: string;
  image?: string;
  education?: EducationEntry[];
  postDoctoral?: PostDocEntry[];
  researchInterests?: string[];
  researchProfileLinks?: ResearchProfileLinks;
  researchSummary?: string;
  fundedProjects?: FundedProject[];
  consultancyProjects?: FundedProject[];
  patents?: PatentEntry[];
  booksChapters?: BookChapter[];
  publications?: PublicationEntry[];
  awards?: AwardEntry[];
  industryCollaboration?: CollaborationEntry[];
  academicExposure?: EventEntry[];
  eventsOrganised?: EventEntry[];
  eventsAttended?: EventEntry[];
  professionalAffiliations?: AffiliationEntry[];
  invitations?: InvitationEntry[];
  academicVisits?: AcademicVisit[];
  outreachActivities?: OutreachActivity[];
  otherInformation?: string;
}

// Faculty profiles indexed by department key, then by faculty name
export const facultyProfiles: Record<string, Record<string, FacultyProfile>> = {
  cse: {
    "Dr. K. Subramanyam": {
      name: "Dr. K. Subramanyam",
      email: "subramanyam_cse@mits.ac.in",
      designation: "Professor & Head",
      department: "Computer Science & Engineering",
      image: "https://www.mits.ac.in/public/uploads/departments/a97e581608108ffe707512e45b1d43c8.png",
      education: [
        { degree: "Ph.D.", specialization: "Computer Science & Engineering", institution: "JNTUA, Ananthapuramu", year: "2015" },
        { degree: "M.Tech", specialization: "Computer Science", branch: "CSE", institution: "JNTUA, Ananthapuramu", year: "2007" },
        { degree: "B.Tech", specialization: "Computer Science & Engineering", institution: "JNTUA, Ananthapuramu", year: "2002" },
      ],
      researchInterests: ["Machine Learning", "Deep Learning", "Medical Image Analysis", "Data Mining", "Cloud Computing"],
      researchProfileLinks: {
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57200",
        googleScholar: "https://scholar.google.com/citations?user=example",
        orcid: "https://orcid.org/0000-0002-XXXX-XXXX",
        hIndex: "12",
        vidwan: "https://vidwan.inflibnet.ac.in/profile/example",
      },
      researchSummary: "Dr. K. Subramanyam has over 20 years of teaching and research experience. His primary research focuses on Machine Learning and Deep Learning approaches for Medical Image Analysis. He has published extensively in Scopus and Web of Science indexed journals and has guided multiple Ph.D. scholars. He actively collaborates with industry partners on AI-driven healthcare solutions.",
      fundedProjects: [
        { title: "Deep Learning Framework for Early Detection of Diabetic Retinopathy", fundingAgency: "DST-SERB", amount: "₹25,00,000", duration: "2021-2024", role: "PI", status: "Completed" },
        { title: "AI-based Smart Agriculture Monitoring System", fundingAgency: "AICTE-RPS", amount: "₹15,00,000", duration: "2022-2025", role: "PI", status: "Ongoing" },
      ],
      consultancyProjects: [
        { title: "Data Analytics Solution for Healthcare Dashboard", fundingAgency: "Apollo Hospitals", amount: "₹3,00,000", duration: "2023", role: "Consultant", status: "Completed" },
      ],
      patents: [
        { title: "Smart IoT-based Health Monitoring System using ML", applicationNumber: "202241012345", status: "Published", year: "2023" },
        { title: "AI-Driven Crop Disease Detection using Deep Learning", applicationNumber: "202341056789", status: "Filed", year: "2023" },
      ],
      booksChapters: [
        { title: "Deep Learning Approaches in Medical Imaging", publisher: "Springer", year: "2023", isbn: "978-3-030-XXXXX", type: "chapter" },
        { title: "Fundamentals of Machine Learning with Python", publisher: "PHI Learning", year: "2022", isbn: "978-93-XXXXX", type: "book" },
      ],
      publications: [
        { title: "Deep Learning Approaches for Diabetic Retinopathy Detection", journal: "IEEE Access", year: "2024", authors: "K. Subramanyam, B. Srinivasa Rao" },
        { title: "Transfer Learning for Medical Image Classification", journal: "Computers in Biology and Medicine", year: "2023", authors: "K. Subramanyam et al." },
        { title: "CNN-based Lung Nodule Detection in CT Images", conference: "IEEE ICCCI 2023", year: "2023", authors: "K. Subramanyam, M. Sreenivasulu" },
      ],
      awards: [
        { awardName: "Best Researcher Award", organization: "MITS Deemed University", year: "2023", description: "For outstanding research contributions in AI/ML" },
        { awardName: "Best Paper Award", organization: "IEEE ICCCI Conference", year: "2022" },
      ],
      industryCollaboration: [
        { organization: "IBM India Pvt. Ltd.", area: "Center of Excellence in AI", duration: "2021-Present" },
        { organization: "Infosys BPO", area: "Campus Connect Training Program", duration: "2020-Present" },
      ],
      eventsOrganised: [
        { title: "International Conference on AI & Data Science", role: "Convener", venue: "MITS, Madanapalle", date: "March 2024" },
        { title: "FDP on Deep Learning with TensorFlow", role: "Coordinator", venue: "MITS, Madanapalle", date: "December 2023" },
      ],
      eventsAttended: [
        { title: "IEEE International Conference on Computing", role: "Presenter", venue: "Bangalore", date: "January 2024" },
        { title: "AICTE-Sponsored Workshop on Research Methodology", role: "Participant", venue: "NIT Warangal", date: "November 2023" },
      ],
      professionalAffiliations: [
        { organization: "IEEE", membershipId: "SM-12345678", since: "2015" },
        { organization: "ACM", since: "2016" },
        { organization: "CSI (Computer Society of India)", membershipId: "CSI-98765", since: "2010" },
        { organization: "ISTE (Indian Society for Technical Education)", since: "2008" },
      ],
      invitations: [
        { title: "Keynote: AI in Healthcare - Challenges and Opportunities", event: "National Conference on AI, VIT Vellore", date: "February 2024" },
        { title: "Invited Talk: ML for Medical Imaging", event: "JNTUA Research Scholars Workshop", venue: "JNTUA Ananthapuramu", date: "October 2023" },
      ],
      academicVisits: [
        { institution: "IIT Hyderabad", purpose: "Research Collaboration on Medical AI", date: "June 2023" },
        { institution: "NIT Warangal", purpose: "PhD Thesis Evaluation", date: "March 2023" },
      ],
      outreachActivities: [
        { title: "AI Awareness Workshop for School Students", description: "Conducted hands-on AI/ML workshop for 200+ school students in Madanapalle", date: "August 2023" },
        { title: "Digital Literacy Campaign", description: "Led digital literacy camp in rural villages around Madanapalle", date: "January 2023" },
      ],
      otherInformation: "Dr. Subramanyam serves as the NBA coordinator for the CSE department and has been instrumental in obtaining NBA accreditation. He is also the coordinator of the IBM Center of Excellence at MITS.",
    },
    "Dr. B. Srinivasa Rao": {
      name: "Dr. B. Srinivasa Rao",
      email: "srinivasarao_cse@mits.ac.in",
      designation: "Professor",
      department: "Computer Science & Engineering",
      education: [
        { degree: "Ph.D.", specialization: "Computer Science", institution: "SK University, Ananthapuramu", year: "2016" },
        { degree: "M.Tech", specialization: "CSE", institution: "JNTUA", year: "2008" },
        { degree: "B.Tech", specialization: "CSE", institution: "JNTUA", year: "2003" },
      ],
      researchInterests: ["Natural Language Processing", "Sentiment Analysis", "Data Science", "Social Media Analytics"],
      researchProfileLinks: {
        googleScholar: "https://scholar.google.com/citations?user=example2",
        hIndex: "9",
      },
      researchSummary: "Dr. B. Srinivasa Rao specializes in Natural Language Processing and Sentiment Analysis with applications in social media analytics and regional language processing. He has published over 50 research papers in national and international journals.",
      fundedProjects: [
        { title: "Sentiment Analysis Framework for Telugu Language Social Media", fundingAgency: "UGC", amount: "₹8,00,000", duration: "2020-2023", role: "PI", status: "Completed" },
      ],
      patents: [
        { title: "Natural Language Processing for Regional Languages", applicationNumber: "202141098765", status: "Granted", year: "2022" },
      ],
      publications: [
        { title: "Sentiment Analysis of Social Media Using NLP", journal: "Journal of King Saud University", year: "2023", authors: "B. Srinivasa Rao et al." },
        { title: "Deep Learning for Telugu Text Classification", conference: "ACM ICCAI 2022", year: "2022", authors: "B. Srinivasa Rao, K. Subramanyam" },
      ],
      awards: [
        { awardName: "Best Faculty Award", organization: "MITS Deemed University", year: "2022" },
      ],
      professionalAffiliations: [
        { organization: "CSI", since: "2012" },
        { organization: "ISTE", since: "2010" },
      ],
    },
    "Dr. N. Venkateswara Rao": {
      name: "Dr. N. Venkateswara Rao",
      email: "venkateswarrao_cse@mits.ac.in",
      designation: "Professor",
      department: "Computer Science & Engineering",
      education: [
        { degree: "Ph.D.", specialization: "Computer Science", institution: "Acharya Nagarjuna University", year: "2014" },
        { degree: "M.Tech", specialization: "CSE", institution: "JNTUA", year: "2006" },
      ],
      researchInterests: ["Cybersecurity", "Cloud Computing", "Network Security", "Blockchain"],
      researchSummary: "Dr. N. Venkateswara Rao focuses on cybersecurity frameworks for cloud environments and blockchain-based security solutions. He has guided 4 Ph.D. scholars and published extensively in security-related domains.",
      fundedProjects: [
        { title: "Cybersecurity Framework for Educational Cloud Infrastructure", fundingAgency: "AICTE-RPS", amount: "₹12,00,000", duration: "2021-2024", role: "PI", status: "Ongoing" },
      ],
      patents: [
        { title: "Blockchain-Based Secure Voting System", applicationNumber: "202241078901", status: "Published", year: "2022" },
      ],
      publications: [
        { title: "Cybersecurity Framework for Cloud Computing", journal: "Journal of Cloud Computing", year: "2024", authors: "N. Venkateswara Rao et al." },
      ],
      professionalAffiliations: [
        { organization: "IEEE", since: "2014" },
        { organization: "ISTE", since: "2009" },
      ],
    },
  },
  eee: {
    "Dr. P. Srinivasa Rao": {
      name: "Dr. P. Srinivasa Rao",
      email: "srinivasarao_eee@mits.ac.in",
      designation: "Professor & Head",
      department: "Electrical & Electronics Engineering",
      education: [
        { degree: "Ph.D.", specialization: "Electrical Engineering", institution: "JNTUA, Ananthapuramu", year: "2013" },
        { degree: "M.Tech", specialization: "Power Systems", institution: "JNTUA", year: "2005" },
      ],
      researchInterests: ["Power Systems", "Renewable Energy", "Smart Grid", "Electric Vehicles"],
      researchSummary: "Dr. P. Srinivasa Rao has over 18 years of experience in teaching and research in Electrical Engineering with focus on renewable energy integration and smart grid technologies.",
      fundedProjects: [
        { title: "Smart Grid Integration of Solar PV Systems", fundingAgency: "DST-SERB", amount: "₹18,00,000", duration: "2020-2023", role: "PI", status: "Completed" },
      ],
      publications: [
        { title: "Optimal Placement of DG in Distribution Systems", journal: "International Journal of Electrical Power", year: "2023", authors: "P. Srinivasa Rao et al." },
      ],
      professionalAffiliations: [
        { organization: "IEEE PES", since: "2013" },
        { organization: "ISTE", since: "2008" },
      ],
    },
  },
  me: {
    "Dr. K. Vijaya Kumar Reddy": {
      name: "Dr. K. Vijaya Kumar Reddy",
      email: "vijaykumar_me@mits.ac.in",
      designation: "Professor & Head",
      department: "Mechanical Engineering",
      education: [
        { degree: "Ph.D.", specialization: "Mechanical Engineering", institution: "JNTUA, Ananthapuramu", year: "2012" },
        { degree: "M.Tech", specialization: "Thermal Engineering", institution: "JNTUA", year: "2004" },
      ],
      researchInterests: ["Thermal Engineering", "Composite Materials", "Manufacturing Processes", "Renewable Energy"],
      researchSummary: "Dr. K. Vijaya Kumar Reddy specializes in thermal engineering and composite materials with over 20 years of academic experience. His research focuses on advanced manufacturing processes and sustainable energy systems.",
      publications: [
        { title: "Thermal Analysis of Composite Materials for Aerospace Applications", journal: "Materials Today: Proceedings", year: "2023", authors: "K. Vijaya Kumar Reddy et al." },
      ],
      professionalAffiliations: [
        { organization: "Institution of Engineers (India)", since: "2010" },
        { organization: "ISTE", since: "2006" },
      ],
    },
  },
};

export function getFacultyProfile(deptKey: string, facultyName: string): FacultyProfile | undefined {
  return facultyProfiles[deptKey]?.[facultyName];
}
