// src/data/departmentData.ts

export interface DepartmentProgram {
  name: string;
  duration: string;
  intake: number;
  accreditation: string;
}

export interface DepartmentFaculty {
  name: string;
  designation: string;
  specialization: string;
  email: string;
}

export interface DepartmentLab {
  name: string;
  description: string;
  icon: string;
}

export interface DepartmentEvent {
  date: string;
  title: string;
  description: string;
}

export interface DepartmentNews {
  title: string;
  date: string;
  description?: string;
}

export interface DepartmentPlacements {
  placementPercent: number;
  avgPackage: string;
  highestPackage: string;
  recruiters: string[];
}

export interface DepartmentContact {
  hod: string;
  designation: string;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
  officeHours: string;
}

export interface DepartmentData {
  id: number;
  slug: string;
  shortName: string;
  fullName: string;
  bannerImages: string[];
  stats: {
    faculty: number;
    journalPublications: number;
    conferencePublications: number;
    researchProjects: number;
    phdAwarded: number;
  };
  news: DepartmentNews[];
  about: string;
  programs: DepartmentProgram[];
  vision: string;
  mission: string[];
  faculty: DepartmentFaculty[];
  labs: DepartmentLab[];
  researchAreas: string[];
  events: DepartmentEvent[];
  achievements: string[];
  placements: DepartmentPlacements;
  contact: DepartmentContact;
}

const MAROON_COLORS = ["#7B1C1C", "#9B2525", "#B03030"];

export const departments: Record<number, DepartmentData> = {
  4: {
    id: 4,
    slug: "cse",
    shortName: "CSE",
    fullName: "Department of Computer Science & Engineering",
    bannerImages: [MAROON_COLORS[0], MAROON_COLORS[1], MAROON_COLORS[2], MAROON_COLORS[0]],
    stats: { faculty: 35, journalPublications: 450, conferencePublications: 620, researchProjects: 25, phdAwarded: 18 },
    news: [
      { title: "Workshop: Cloud Computing and DevOps", date: "2026-03-10" },
      { title: "Hackathon: Code Sprint 2026", date: "2026-02-28" },
      { title: "Guest Lecture: Future of Software Engineering", date: "2026-02-15" },
      { title: "Industry Visit to Tech Park Bangalore", date: "2026-01-20" },
      { title: "MoU with Leading IT Companies", date: "2026-01-10" }
    ],
    about: "Established in 2005, the CSE department offers comprehensive programs in computer science with focus on emerging technologies like AI, Cloud Computing, and Cybersecurity. NBA accredited with strong industry partnerships.",
    programs: [
      { name: "B.Tech CSE", duration: "4 Years", intake: 180, accreditation: "NBA Accredited" },
      { name: "M.Tech CSE", duration: "2 Years", intake: 24, accreditation: "AICTE Approved" },
      { name: "Ph.D", duration: "-", intake: 0, accreditation: "UGC Recognized" }
    ],
    vision: "To be a center of excellence in computer science education and research, producing globally competitive professionals.",
    mission: [
      "Provide quality education in computer science and engineering",
      "Foster innovation and research in emerging technologies",
      "Develop industry-ready professionals with strong ethical values"
    ],
    faculty: [
      { name: "Dr. K. Rajesh", designation: "Professor & HOD", specialization: "Cloud Computing", email: "hod.cse@mits.ac.in" },
      { name: "Dr. S. Priya", designation: "Associate Professor", specialization: "Machine Learning", email: "priya.s@mits.ac.in" },
      { name: "Dr. M. Kumar", designation: "Assistant Professor", specialization: "Cybersecurity", email: "kumar.m@mits.ac.in" },
      { name: "Dr. R. Lakshmi", designation: "Assistant Professor", specialization: "Data Science", email: "lakshmi.r@mits.ac.in" }
    ],
    labs: [
      { name: "Programming Lab", description: "Core programming and algorithm development.", icon: "code" },
      { name: "Cloud Computing Lab", description: "Cloud infrastructure and services.", icon: "cloud" },
      { name: "AI/ML Lab", description: "Artificial intelligence and machine learning projects.", icon: "brain" },
      { name: "Cybersecurity Lab", description: "Network security and ethical hacking.", icon: "shield" }
    ],
    researchAreas: ["Cloud Computing", "Artificial Intelligence", "Machine Learning", "Cybersecurity", "Big Data Analytics", "IoT"],
    events: [
      { date: "2026-03-10", title: "Workshop: Cloud Computing and DevOps", description: "Hands-on workshop on cloud technologies." },
      { date: "2026-02-28", title: "Hackathon: Code Sprint 2026", description: "24-hour coding competition." }
    ],
    achievements: [
      "NBA Accreditation for B.Tech program",
      "25 funded research projects",
      "Over 1000 publications",
      "98% placement record"
    ],
    placements: {
      placementPercent: 98,
      avgPackage: "7.5 LPA",
      highestPackage: "45 LPA",
      recruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "Amazon", "Microsoft", "Google", "IBM"]
    },
    contact: {
      hod: "Dr. K. Rajesh",
      designation: "Professor & HOD",
      address: "Dept. of CSE, MITS, Madanapalle-517325, Andhra Pradesh, India.",
      phone: "08571-280220",
      email: "hod.cse@mits.ac.in",
      mapEmbedUrl: "https://maps.google.com/?q=MITS+Madanapalle",
      officeHours: "Mon–Fri: 9:00 AM – 5:00 PM"
    }
  },
  5: {
    id: 5,
    slug: "eee",
    shortName: "EEE",
    fullName: "Department of Electrical & Electronics Engineering",
    bannerImages: [MAROON_COLORS[1], MAROON_COLORS[2], MAROON_COLORS[0], MAROON_COLORS[1]],
    stats: { faculty: 25, journalPublications: 280, conferencePublications: 380, researchProjects: 15, phdAwarded: 12 },
    news: [
      { title: "Workshop: Smart Grid Technologies", date: "2026-03-05" },
      { title: "Seminar: Renewable Energy Systems", date: "2026-02-20" },
      { title: "Industry Visit to Power Plant", date: "2026-02-10" },
      { title: "Guest Lecture: Electric Vehicle Technology", date: "2026-01-25" },
      { title: "Research Project on Solar Energy", date: "2026-01-15" }
    ],
    about: "Established in 2007, the EEE department focuses on power systems, renewable energy, and smart grid technologies. Strong emphasis on practical learning with state-of-the-art laboratories.",
    programs: [
      { name: "B.Tech EEE", duration: "4 Years", intake: 120, accreditation: "NBA Accredited" },
      { name: "M.Tech Power Systems", duration: "2 Years", intake: 18, accreditation: "AICTE Approved" },
      { name: "Ph.D", duration: "-", intake: 0, accreditation: "UGC Recognized" }
    ],
    vision: "To excel in electrical engineering education and research, producing skilled professionals for the power and energy sector.",
    mission: [
      "Provide quality education in electrical and electronics engineering",
      "Promote research in renewable energy and smart grids",
      "Develop industry-ready engineers with ethical values"
    ],
    faculty: [
      { name: "Dr. V. Ramesh", designation: "Professor & HOD", specialization: "Power Systems", email: "hod.eee@mits.ac.in" },
      { name: "Dr. P. Sujatha", designation: "Associate Professor", specialization: "Renewable Energy", email: "sujatha.p@mits.ac.in" },
      { name: "Dr. N. Kiran", designation: "Assistant Professor", specialization: "Power Electronics", email: "kiran.n@mits.ac.in" },
      { name: "Dr. A. Madhavi", designation: "Assistant Professor", specialization: "Smart Grids", email: "madhavi.a@mits.ac.in" }
    ],
    labs: [
      { name: "Power Systems Lab", description: "Power system analysis and simulation.", icon: "zap" },
      { name: "Electrical Machines Lab", description: "Study of electrical machines and drives.", icon: "settings" },
      { name: "Power Electronics Lab", description: "Power electronic circuits and applications.", icon: "cpu" },
      { name: "Renewable Energy Lab", description: "Solar and wind energy systems.", icon: "sun" }
    ],
    researchAreas: ["Power Systems", "Renewable Energy", "Smart Grids", "Power Electronics", "Electric Vehicles", "Energy Storage"],
    events: [
      { date: "2026-03-05", title: "Workshop: Smart Grid Technologies", description: "Workshop on modern power grid systems." },
      { date: "2026-02-20", title: "Seminar: Renewable Energy Systems", description: "Seminar on sustainable energy solutions." }
    ],
    achievements: [
      "NBA Accreditation for B.Tech program",
      "15 funded research projects",
      "Strong industry partnerships",
      "85% placement record"
    ],
    placements: {
      placementPercent: 85,
      avgPackage: "6.2 LPA",
      highestPackage: "22 LPA",
      recruiters: ["TCS", "Infosys", "L&T", "ABB", "Siemens", "BHEL", "Power Grid", "NTPC", "BSNL"]
    },
    contact: {
      hod: "Dr. V. Ramesh",
      designation: "Professor & HOD",
      address: "Dept. of EEE, MITS, Madanapalle-517325, Andhra Pradesh, India.",
      phone: "08571-280215",
      email: "hod.eee@mits.ac.in",
      mapEmbedUrl: "https://maps.google.com/?q=MITS+Madanapalle",
      officeHours: "Mon–Fri: 9:00 AM – 5:00 PM"
    }
  },
  6: {
    id: 6,
    slug: "mba",
    shortName: "MBA",
    fullName: "Department of Management Studies (MBA)",
    bannerImages: [MAROON_COLORS[2], MAROON_COLORS[0], MAROON_COLORS[1], MAROON_COLORS[2]],
    stats: { faculty: 15, journalPublications: 120, conferencePublications: 180, researchProjects: 8, phdAwarded: 5 },
    news: [
      { title: "Industry Conclave 2026", date: "2026-03-15" },
      { title: "Guest Lecture: Digital Marketing Trends", date: "2026-02-25" },
      { title: "Case Study Competition", date: "2026-02-12" },
      { title: "Workshop: Business Analytics", date: "2026-01-30" },
      { title: "MoU with Corporate Partners", date: "2026-01-18" }
    ],
    about: "Established in 2008, the MBA program offers specializations in Finance, Marketing, HR, and Operations. AICTE approved with strong industry connections and excellent placement record.",
    programs: [
      { name: "MBA", duration: "2 Years", intake: 60, accreditation: "AICTE Approved" },
      { name: "Ph.D Management", duration: "-", intake: 0, accreditation: "UGC Recognized" }
    ],
    vision: "To develop ethical and competent business leaders capable of driving organizational success in a global environment.",
    mission: [
      "Provide quality management education with industry focus",
      "Foster entrepreneurial mindset and leadership skills",
      "Promote research and innovation in management practices"
    ],
    faculty: [
      { name: "Dr. S. Venkatesh", designation: "Professor & Director", specialization: "Strategic Management", email: "director.mba@mits.ac.in" },
      { name: "Dr. M. Swathi", designation: "Associate Professor", specialization: "Marketing", email: "swathi.m@mits.ac.in" },
      { name: "Dr. R. Prasad", designation: "Assistant Professor", specialization: "Finance", email: "prasad.r@mits.ac.in" },
      { name: "Dr. K. Divya", designation: "Assistant Professor", specialization: "HR Management", email: "divya.k@mits.ac.in" }
    ],
    labs: [
      { name: "Business Analytics Lab", description: "Data analytics and business intelligence tools.", icon: "chart" },
      { name: "Finance Lab", description: "Financial modeling and trading simulations.", icon: "dollar" },
      { name: "Marketing Lab", description: "Digital marketing and consumer research.", icon: "megaphone" },
      { name: "Entrepreneurship Cell", description: "Startup incubation and mentoring.", icon: "lightbulb" }
    ],
    researchAreas: ["Strategic Management", "Marketing", "Finance", "HR Management", "Operations", "Business Analytics"],
    events: [
      { date: "2026-03-15", title: "Industry Conclave 2026", description: "Annual industry interaction event." },
      { date: "2026-02-25", title: "Guest Lecture: Digital Marketing Trends", description: "Expert talk on modern marketing strategies." }
    ],
    achievements: [
      "AICTE Approved program",
      "Strong corporate partnerships",
      "90% placement record",
      "Active entrepreneurship cell"
    ],
    placements: {
      placementPercent: 90,
      avgPackage: "6.8 LPA",
      highestPackage: "18 LPA",
      recruiters: ["ICICI Bank", "HDFC Bank", "Deloitte", "EY", "Amazon", "Flipkart", "Accenture", "Capgemini", "TCS"]
    },
    contact: {
      hod: "Dr. S. Venkatesh",
      designation: "Professor & Director",
      address: "Dept. of Management Studies, MITS, Madanapalle-517325, Andhra Pradesh, India.",
      phone: "08571-280225",
      email: "director.mba@mits.ac.in",
      mapEmbedUrl: "https://maps.google.com/?q=MITS+Madanapalle",
      officeHours: "Mon–Fri: 9:00 AM – 5:00 PM"
    }
  },
  8: {
    id: 8,
    slug: "mechanical",
    shortName: "ME",
    fullName: "Department of Mechanical Engineering",
    bannerImages: [MAROON_COLORS[0], MAROON_COLORS[2], MAROON_COLORS[1], MAROON_COLORS[0]],
    stats: { faculty: 30, journalPublications: 350, conferencePublications: 480, researchProjects: 20, phdAwarded: 15 },
    news: [
      { title: "Workshop: CAD/CAM Technologies", date: "2026-03-08" },
      { title: "Industry Visit to Manufacturing Plant", date: "2026-02-22" },
      { title: "Seminar: Additive Manufacturing", date: "2026-02-14" },
      { title: "Guest Lecture: Automotive Engineering", date: "2026-01-28" },
      { title: "Research Project on Thermal Systems", date: "2026-01-12" }
    ],
    about: "Established in 2006, the Mechanical Engineering department offers comprehensive programs with focus on design, manufacturing, and thermal systems. NBA accredited with excellent laboratory facilities.",
    programs: [
      { name: "B.Tech Mechanical", duration: "4 Years", intake: 120, accreditation: "NBA Accredited" },
      { name: "M.Tech Thermal Engineering", duration: "2 Years", intake: 18, accreditation: "AICTE Approved" },
      { name: "Ph.D", duration: "-", intake: 0, accreditation: "UGC Recognized" }
    ],
    vision: "To be a leading department in mechanical engineering education and research, producing innovative engineers for industry and society.",
    mission: [
      "Provide quality education in mechanical engineering",
      "Promote research in design, manufacturing, and thermal systems",
      "Develop skilled engineers with strong fundamentals and practical knowledge"
    ],
    faculty: [
      { name: "Dr. B. Srinivas", designation: "Professor & HOD", specialization: "Thermal Engineering", email: "hod.mech@mits.ac.in" },
      { name: "Dr. T. Ramya", designation: "Associate Professor", specialization: "Manufacturing", email: "ramya.t@mits.ac.in" },
      { name: "Dr. G. Naveen", designation: "Assistant Professor", specialization: "Machine Design", email: "naveen.g@mits.ac.in" },
      { name: "Dr. L. Anusha", designation: "Assistant Professor", specialization: "CAD/CAM", email: "anusha.l@mits.ac.in" }
    ],
    labs: [
      { name: "CAD/CAM Lab", description: "Computer-aided design and manufacturing.", icon: "box" },
      { name: "Manufacturing Lab", description: "Machining and fabrication processes.", icon: "settings" },
      { name: "Thermal Lab", description: "Heat transfer and thermodynamics experiments.", icon: "flame" },
      { name: "Dynamics Lab", description: "Vibration and dynamics analysis.", icon: "activity" }
    ],
    researchAreas: ["Thermal Engineering", "Manufacturing", "Machine Design", "CAD/CAM", "Automotive Engineering", "Robotics"],
    events: [
      { date: "2026-03-08", title: "Workshop: CAD/CAM Technologies", description: "Hands-on workshop on design and manufacturing tools." },
      { date: "2026-02-22", title: "Industry Visit to Manufacturing Plant", description: "Visit to modern manufacturing facility." }
    ],
    achievements: [
      "NBA Accreditation for B.Tech program",
      "20 funded research projects",
      "State-of-the-art laboratories",
      "88% placement record"
    ],
    placements: {
      placementPercent: 88,
      avgPackage: "6.5 LPA",
      highestPackage: "25 LPA",
      recruiters: ["TCS", "Infosys", "L&T", "Ashok Leyland", "Mahindra", "Tata Motors", "Bosch", "Hyundai", "TVS"]
    },
    contact: {
      hod: "Dr. B. Srinivas",
      designation: "Professor & HOD",
      address: "Dept. of Mechanical Engineering, MITS, Madanapalle-517325, Andhra Pradesh, India.",
      phone: "08571-280218",
      email: "hod.mech@mits.ac.in",
      mapEmbedUrl: "https://maps.google.com/?q=MITS+Madanapalle",
      officeHours: "Mon–Fri: 9:00 AM – 5:00 PM"
    }
  },
  11: {
    id: 11,
    slug: "civil",
    shortName: "CE",
    fullName: "Department of Civil Engineering",
    bannerImages: [MAROON_COLORS[1], MAROON_COLORS[0], MAROON_COLORS[2], MAROON_COLORS[1]],
    stats: { faculty: 22, journalPublications: 240, conferencePublications: 320, researchProjects: 12, phdAwarded: 10 },
    news: [
      { title: "Workshop: BIM Technology in Construction", date: "2026-03-12" },
      { title: "Seminar: Sustainable Construction Practices", date: "2026-02-26" },
      { title: "Industry Visit to Infrastructure Project", date: "2026-02-18" },
      { title: "Guest Lecture: Smart Cities", date: "2026-01-22" },
      { title: "Research Project on Green Buildings", date: "2026-01-14" }
    ],
    about: "Established in 2008, the Civil Engineering department focuses on structural design, construction management, and sustainable infrastructure. Strong emphasis on practical training with modern laboratory facilities.",
    programs: [
      { name: "B.Tech Civil", duration: "4 Years", intake: 60, accreditation: "NBA Accredited" },
      { name: "M.Tech Structural Engineering", duration: "2 Years", intake: 18, accreditation: "AICTE Approved" },
      { name: "Ph.D", duration: "-", intake: 0, accreditation: "UGC Recognized" }
    ],
    vision: "To be a center of excellence in civil engineering education, producing skilled professionals for infrastructure development.",
    mission: [
      "Provide quality education in civil engineering",
      "Promote research in sustainable construction and infrastructure",
      "Develop competent engineers with ethical values and social responsibility"
    ],
    faculty: [
      { name: "Dr. A. Suresh", designation: "Professor & HOD", specialization: "Structural Engineering", email: "hod.civil@mits.ac.in" },
      { name: "Dr. K. Manjula", designation: "Associate Professor", specialization: "Geotechnical Engineering", email: "manjula.k@mits.ac.in" },
      { name: "Dr. P. Ravi", designation: "Assistant Professor", specialization: "Transportation Engineering", email: "ravi.p@mits.ac.in" },
      { name: "Dr. S. Bhavani", designation: "Assistant Professor", specialization: "Environmental Engineering", email: "bhavani.s@mits.ac.in" }
    ],
    labs: [
      { name: "Structural Engineering Lab", description: "Testing of structural materials and components.", icon: "building" },
      { name: "Geotechnical Lab", description: "Soil mechanics and foundation engineering.", icon: "layers" },
      { name: "Transportation Lab", description: "Highway and traffic engineering.", icon: "truck" },
      { name: "Environmental Lab", description: "Water and wastewater treatment.", icon: "droplet" }
    ],
    researchAreas: ["Structural Engineering", "Geotechnical Engineering", "Transportation Engineering", "Environmental Engineering", "Construction Management", "Sustainable Infrastructure"],
    events: [
      { date: "2026-03-12", title: "Workshop: BIM Technology in Construction", description: "Workshop on Building Information Modeling." },
      { date: "2026-02-26", title: "Seminar: Sustainable Construction Practices", description: "Seminar on green building technologies." }
    ],
    achievements: [
      "NBA Accreditation for B.Tech program",
      "12 funded research projects",
      "Modern laboratory facilities",
      "80% placement record"
    ],
    placements: {
      placementPercent: 80,
      avgPackage: "5.8 LPA",
      highestPackage: "20 LPA",
      recruiters: ["L&T", "Tata Projects", "Shapoorji Pallonji", "NCC", "Gammon India", "Larsen & Toubro", "RITES", "NHAI", "PWD"]
    },
    contact: {
      hod: "Dr. A. Suresh",
      designation: "Professor & HOD",
      address: "Dept. of Civil Engineering, MITS, Madanapalle-517325, Andhra Pradesh, India.",
      phone: "08571-280212",
      email: "hod.civil@mits.ac.in",
      mapEmbedUrl: "https://maps.google.com/?q=MITS+Madanapalle",
      officeHours: "Mon–Fri: 9:00 AM – 5:00 PM"
    }
  },
  9: {
    id: 9,
    slug: "ece",
    shortName: "ECE",
    fullName: "Department of Electronics & Communication Engineering",
    bannerImages: [MAROON_COLORS[0], MAROON_COLORS[1], MAROON_COLORS[2], MAROON_COLORS[0]],
    stats: { faculty: 28, journalPublications: 320, conferencePublications: 450, researchProjects: 18, phdAwarded: 22 },
    news: [
      { title: "Seminar: From Silicon to Systems: Semiconductor Innovation", date: "2026-02-24" },
      { title: "MoU with Sense Semiconductor & IT Solutions Pvt. Ltd", date: "2026-02-24" },
      { title: "Workshop: Advanced VLSI Testing and Physical Design", date: "2026-02-17" },
      { title: "Workshop: Multi Rotor Drone Technology", date: "2026-01-29" },
      { title: "Workshop: LUT-Based Device Modeling, Cadence Workflow", date: "2026-01-06" }
    ],
    about: "Established in 1998, the dept offers 4-yr B.Tech and 2-yr M.Tech. Stresses all-round development of students and faculty. B.Tech accredited by NBA/AICTE. UGC-Autonomous status since 2014.",
    programs: [
      { name: "B.Tech ECE", duration: "4 Years", intake: 120, accreditation: "NBA Accredited" },
      { name: "M.Tech VLSI & Embedded Systems", duration: "2 Years", intake: 18, accreditation: "AICTE Approved" },
      { name: "Ph.D", duration: "-", intake: 0, accreditation: "UGC Recognized" }
    ],
    vision: "To excel in technical education and research in ECE, producing skilled professionals to meet current and future societal challenges.",
    mission: [
      "Impart high quality education in ECE",
      "Provide infrastructure for innovation and research",
      "Inculcate ethical values and lifelong learning"
    ],
    faculty: [
      { name: "Dr. S. Ramesh", designation: "Professor & HOD", specialization: "VLSI Design", email: "hod.ece@mits.ac.in" },
      { name: "Dr. A. Priya", designation: "Associate Professor", specialization: "Embedded Systems", email: "priya.a@mits.ac.in" },
      { name: "Dr. K. Suresh", designation: "Assistant Professor", specialization: "Signal Processing", email: "suresh.k@mits.ac.in" },
      { name: "Dr. M. Lakshmi", designation: "Assistant Professor", specialization: "Wireless Communication", email: "lakshmi.m@mits.ac.in" }
    ],
    labs: [
      { name: "ECE Main Lab", description: "Core experiments in analog/digital electronics.", icon: "cpu" },
      { name: "VLSI Design Lab", description: "VLSI design, simulation, and testing.", icon: "chip" },
      { name: "Embedded Systems Lab", description: "Microcontroller and embedded system projects.", icon: "settings" },
      { name: "Communication Systems Lab", description: "Analog/digital comms and modulation.", icon: "radio" }
    ],
    researchAreas: ["VLSI Design", "Embedded Systems", "Signal Processing", "IoT", "Wireless Communication", "Antenna Design"],
    events: [
      { date: "2026-02-24", title: "Seminar: From Silicon to Systems", description: "Seminar on advances in semiconductor technology." },
      { date: "2026-02-17", title: "Workshop: Advanced VLSI Testing", description: "Hands-on workshop on VLSI testing and design tools." }
    ],
    achievements: [
      "NBA Accreditation for B.Tech program",
      "UGC-Autonomous status since 2014",
      "18 funded research projects",
      "Over 770 publications"
    ],
    placements: {
      placementPercent: 88,
      avgPackage: "5.2 LPA",
      highestPackage: "18 LPA",
      recruiters: ["TCS", "Infosys", "Wipro", "HCL", "Cognizant", "L&T", "BSNL", "ISRO", "DRDO"]
    },
    contact: {
      hod: "Dr. S. Ramesh",
      designation: "Professor & HOD",
      address: "Dept. of ECE, MITS, Post Box No: 14, Kadiri Road, Angallu (V), Madanapalle-517325, Andhra Pradesh, India.",
      phone: "08571-280210",
      email: "hod.ece@mits.ac.in",
      mapEmbedUrl: "https://maps.google.com/?q=MITS+Madanapalle",
      officeHours: "Mon–Fri: 9:00 AM – 5:00 PM"
    }
  },
  28: {
    id: 28,
    slug: "cse-ai-ml",
    shortName: "CSE AI/ML",
    fullName: "Dept of CSE (Artificial Intelligence & Machine Learning)",
    bannerImages: [MAROON_COLORS[1], MAROON_COLORS[2], MAROON_COLORS[0], MAROON_COLORS[1]],
    stats: { faculty: 18, journalPublications: 95, conferencePublications: 140, researchProjects: 8, phdAwarded: 5 },
    news: [
      { title: "FDP: Next Generation Cyber Defense with Deep Learning", date: "2026-03-16" },
      { title: "National Symposium AIMEX 2K26", date: "2026-03-05" },
      { title: "MoU with Woollemia Infosec Pvt. Ltd, Bengaluru", date: "2025-12-22" },
      { title: "FDP: The Intelligent City: Building Urban Futures with IoT & AI", date: "2025-12-08" },
      { title: "Workshop: Edge Computing in Practice", date: "2025-10-28" }
    ],
    about: "Offers a cutting-edge B.Tech program combining core CSE with AI & ML frontiers. Strong industry collaboration with MoUs signed with Woollemia Infosec, Hackers Infotech, and others.",
    programs: [
      { name: "B.Tech CSE (AI & ML)", duration: "4 Years", intake: 120, accreditation: "AICTE Approved" }
    ],
    vision: "To nurture globally competitive AI/ML engineers who drive innovation and address real-world challenges.",
    mission: [
      "Deliver future-ready AI/ML curriculum aligned with industry",
      "Foster research in Deep Learning, NLP, and Generative AI",
      "Build ethical AI practitioners with entrepreneurial mindset"
    ],
    faculty: [
      { name: "Dr. P. Anil", designation: "Professor & HOD", specialization: "Machine Learning", email: "hod.csaiml@mits.ac.in" },
      { name: "Dr. S. Kavya", designation: "Associate Professor", specialization: "Data Science", email: "kavya.s@mits.ac.in" },
      { name: "Dr. R. Ajay", designation: "Assistant Professor", specialization: "Deep Learning", email: "ajay.r@mits.ac.in" },
      { name: "Dr. M. Sneha", designation: "Assistant Professor", specialization: "NLP", email: "sneha.m@mits.ac.in" }
    ],
    labs: [
      { name: "AI & ML Research Lab", description: "Research in deep learning, NLP, and generative AI.", icon: "brain" },
      { name: "Deep Learning GPU Lab", description: "GPU-powered experiments in neural networks.", icon: "cpu" },
      { name: "Data Analytics Lab", description: "Big data analytics and visualization.", icon: "database" },
      { name: "NLP & Vision Lab", description: "Natural language and computer vision projects.", icon: "eye" }
    ],
    researchAreas: ["Deep Learning", "Neural Networks", "NLP", "Computer Vision", "Generative AI", "Reinforcement Learning"],
    events: [
      { date: "2026-03-16", title: "FDP: Next Generation Cyber Defense with Deep Learning", description: "Faculty development program on deep learning for cyber defense." },
      { date: "2026-03-05", title: "National Symposium AIMEX 2K26", description: "Annual symposium on AI and ML advancements." }
    ],
    achievements: [
      "Strong industry collaboration with MoUs",
      "Multiple funded research projects"
    ],
    placements: {
      placementPercent: 85,
      avgPackage: "6.8 LPA",
      highestPackage: "24 LPA",
      recruiters: ["TCS", "Infosys", "Wipro", "HCL", "Cognizant"]
    },
    contact: {
      hod: "Dr. P. Anil",
      designation: "Professor & HOD",
      address: "Dept. of CSE (AI & ML), MITS, Madanapalle, Andhra Pradesh, India.",
      phone: "08571-280215",
      email: "hod.csaiml@mits.ac.in",
      mapEmbedUrl: "https://maps.google.com/?q=MITS+Madanapalle",
      officeHours: "Mon–Fri: 9:00 AM – 5:00 PM"
    }
  }
};

export function getDepartmentById(id: number): DepartmentData | undefined {
  return departments[id];
}
