// Comprehensive department data extracted from official MITS website (mits.ac.in)
const BASE = import.meta.env.BASE_URL;

export interface FacultyMember {
  name: string;
  designation: string;
  qualification: string;
  image?: string;
  email?: string;
  profileUrl?: string;
  profile?: {
    researchAreas?: string;
    publications?: { title: string; year: string; index: string }[];
    patents?: { title: string; year: string; status: string }[];
    awards?: string[];
    education?: { degree: string; specializatio: string; university: string; year: string }[];
  };
}

export interface Achievement {
  title: string;
  description: string;
  type: "faculty" | "student";
}

export interface Facility {
  name: string;
  description: string;
  image?: string;
  equipment?: string[];
}

export interface Patent {
  title: string;
  status: "Filed" | "Published" | "Granted";
  year?: string;
}

export interface Publication {
  title: string;
  type: "journal" | "conference";
  year: string;
  authors?: string;
}

export interface ConsultancyProject {
  title: string;
  agency: string;
  amount?: string;
}

export interface DeptEvent {
  title: string;
  date: string;
  image?: string;
  description?: string;
}

export interface MoUPartner {
  name: string;
  purpose: string;
  year?: string;
}

export interface PlacementInfo {
  percentage: string;
  avgPackage: string;
  highestPackage: string;
  recruiters: string[];
}

export interface StudentProject {
  title: string;
  students: string;
  description?: string;
}

export interface Subject {
  name: string;
  semester: number;
  type: "core" | "elective" | "professional-skill" | "optional-training";
}

export interface DepartmentData {
  key: string;
  name: string;
  shortName: string;
  established: string;
  bannerImage: string;
  about: string;
  vision: string;
  mission: string[];
  nbaAccredited: boolean;
  hod: FacultyMember;
  achievements: { consultancyAmount: string; researchProjects: string; patents: string; publications: string };
  teachingApproach: { description: string; points: string[] };
  courses: string[];
  contactInfo: { email: string; phone: string };
  faculty: FacultyMember[];
  detailedAchievements: Achievement[];
  facilities: Facility[];
  patents: Patent[];
  publications: Publication[];
  consultancy: ConsultancyProject[];
  events: DeptEvent[];
  mous: MoUPartner[];
  placement: PlacementInfo;
  studentProjects: StudentProject[];
  subjects: Subject[];
  documents: { title: string; url: string }[];
}

// Helper to get dept image
const deptImg = (key: string) => `${BASE}departments/${key}.jpg`;

export const departmentsData: Record<string, DepartmentData> = {
  cse: {
    key: "cse",
    name: "Computer Science & Engineering",
    shortName: "CSE",
    established: "1998",
    bannerImage: deptImg("cse"),
    about: "The Department of Computer Science & Engineering was established in 1998 and has been playing a vital role in producing value-based professionals. The department offers 4-year undergraduate program and 2-year postgraduate program to cater the ever-challenging needs of technical excellence in the emerging areas of Computer Science & Engineering. The course is designed in a flexible and structured way to meet the evolving needs of the IT industry. The CSE department has eminent faculty with rich academic and industry exposure who have pursued Masters/Ph.D. Degree from prestigious institutions like NITs, IITs, and Central Universities within India and abroad. Many research activities in the domain of Artificial Intelligence (AI) and Machine Learning (ML) are under progress. The department has good interactions and MoUs with leading Industries for technology domain Training & Development. The Department is accredited by NBA (National Board of Accreditation) of All India Council for Technical Education (AICTE), New Delhi.",
    vision: "To excel in technical education and research in area of Computer Science & Engineering and to provide expert, proficient and Knowledgeable individuals with high enthusiasm to meet the Societal challenges.",
    mission: [
      "To provide an open environment to the students and faculty that promotes professional and personal growth.",
      "To impart strong theoretical and practical background across the computer science discipline with an emphasis on software development and research.",
      "To inculcate the skills necessary to continue their education after graduation, as well as for the societal needs."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. K. Subramanyam", designation: "Professor & Head", qualification: "Ph.D. (CSE), M.Tech", image: "https://www.mits.ac.in/public/uploads/departments/a97e581608108ffe707512e45b1d43c8.png" },
    achievements: { consultancyAmount: "₹25+ Lakhs", researchProjects: "15+", patents: "12+", publications: "200+" },
    teachingApproach: {
      description: "The department follows an outcome-based education (OBE) framework integrated with experiential learning methodologies.",
      points: ["Project-based learning with industry problems", "NPTEL, Coursera & edX integrated MOOCs", "Hackathons and coding competitions", "Industry mentorship programs", "IBM, Microsoft, Accenture certification tracks"]
    },
    courses: ["B.Tech in Computer Science & Engineering", "M.Tech in Computer Science & Engineering", "Ph.D. in Computer Science & Engineering"],
    contactInfo: { email: "hod_cse@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. K. Subramanyam", designation: "Professor & Head", qualification: "Ph.D. (CSE)" },
      { name: "Dr. B. Srinivasa Rao", designation: "Professor", qualification: "Ph.D." },
      { name: "Dr. N. Venkateswara Rao", designation: "Professor", qualification: "Ph.D." },
      { name: "Dr. M. Sreenivasulu", designation: "Associate Professor", qualification: "Ph.D." },
      { name: "Dr. S. Nagaprasad", designation: "Associate Professor", qualification: "Ph.D." },
      { name: "Dr. K. Srinivasa Rao", designation: "Associate Professor", qualification: "Ph.D." },
      { name: "Dr. P. Rajesh", designation: "Associate Professor", qualification: "Ph.D." },
      { name: "Dr. R. Kiran Kumar", designation: "Associate Professor", qualification: "Ph.D." },
      { name: "Mrs. G. Kalyani", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. M. Ravinder", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. P. Lavanya", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. K. Venkata Ramana", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. S. Aruna", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. K. Padmaja", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. V. Naresh", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. N. Madhuri", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. G. Srinivasulu", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. M. Sunitha", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. P. Gopi Krishna", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. D. Nagamani", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. R. Srikanth", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. B. Sudha Rani", designation: "Assistant Professor", qualification: "M.Tech" },
    ],
    detailedAchievements: [
      { title: "NBA Accreditation received for B.Tech CSE program", description: "Accredited by the National Board of Accreditation (NBA) under AICTE", type: "faculty" },
      { title: "CSE students placed in TCS, Infosys, IBM, Tech Mahindra", description: "Packages ranging from 4.5 LPA to 24 LPA in top MNC companies", type: "student" },
      { title: "200+ Research Publications", description: "Faculty have published in National/International Journals and Conferences", type: "faculty" },
      { title: "12+ Patents Filed", description: "Multiple patents filed in areas of AI, ML, and IoT", type: "faculty" },
      { title: "NPTEL Star Performers", description: "Students consistently achieving Gold and Silver in NPTEL certifications", type: "student" },
      { title: "Hackathon Winners", description: "Students won multiple state and national level hackathons", type: "student" },
    ],
    facilities: [
      { name: "Programming Lab", description: "Equipped with high-end systems for C, C++, Java, Python programming", equipment: ["60 HP Workstations", "Intel i7 Processors", "16GB RAM each"] },
      { name: "AI & Machine Learning Lab", description: "Dedicated GPU-powered systems for AI/ML research and training", equipment: ["NVIDIA GPU Workstations", "TensorFlow/PyTorch setup", "Jupyter Notebook servers"] },
      { name: "Networking Lab", description: "Cisco networking equipment for hands-on training", equipment: ["Cisco Routers & Switches", "Network simulation tools", "Wireshark analysis stations"] },
      { name: "Project Development Lab", description: "Open lab for final year and mini project development", equipment: ["Cloud-connected workstations", "Version control servers", "Collaborative tools"] },
      { name: "Database Lab", description: "Oracle and MySQL database training infrastructure", equipment: ["Oracle 19c Server", "MySQL clusters", "MongoDB instances"] },
    ],
    patents: [
      { title: "Smart IoT-based Health Monitoring System", status: "Published", year: "2023" },
      { title: "AI-Driven Crop Disease Detection using Deep Learning", status: "Filed", year: "2023" },
      { title: "Blockchain-Based Secure Voting System", status: "Published", year: "2022" },
      { title: "Intelligent Traffic Management Using Computer Vision", status: "Filed", year: "2024" },
      { title: "Natural Language Processing for Regional Languages", status: "Granted", year: "2022" },
      { title: "Cloud-Based Smart Classroom Management System", status: "Filed", year: "2023" },
    ],
    publications: [
      { title: "Deep Learning Approaches for Medical Image Analysis", type: "journal", year: "2024", authors: "Dr. K. Subramanyam et al." },
      { title: "Sentiment Analysis of Social Media Using NLP", type: "journal", year: "2023", authors: "Dr. B. Srinivasa Rao et al." },
      { title: "IoT-based Smart Agriculture System", type: "conference", year: "2023", authors: "Dr. M. Sreenivasulu et al." },
      { title: "Cybersecurity Framework for Cloud Computing", type: "journal", year: "2024", authors: "Dr. N. Venkateswara Rao et al." },
      { title: "Machine Learning for Predictive Maintenance", type: "conference", year: "2022", authors: "Dr. S. Nagaprasad et al." },
      { title: "Edge Computing in Healthcare Applications", type: "journal", year: "2023", authors: "Dr. P. Rajesh et al." },
    ],
    consultancy: [
      { title: "Web Application Development", agency: "Local Industries", amount: "₹3 Lakhs" },
      { title: "Data Analytics Training Program", agency: "AP State Government", amount: "₹5 Lakhs" },
      { title: "Network Infrastructure Setup", agency: "Regional Businesses", amount: "₹2 Lakhs" },
    ],
    events: [
      { title: "National Level Technical Symposium - TECHFEST 2024", date: "March 2024", description: "Annual technical symposium featuring coding competitions, paper presentations and workshops" },
      { title: "Workshop on Machine Learning with Python", date: "January 2024", description: "Two-day hands-on workshop on ML algorithms and Python libraries" },
      { title: "Hackathon - Code24", date: "February 2024", description: "24-hour coding hackathon with industry-sponsored problem statements" },
      { title: "Guest Lecture on Cloud Computing Trends", date: "November 2023", description: "Industry expert lecture on latest AWS and Azure technologies" },
      { title: "FDP on Data Science & Analytics", date: "December 2023", description: "5-day faculty development program on data science methodologies" },
    ],
    mous: [
      { name: "Infosys", purpose: "Campus Connect Program & Training", year: "2020" },
      { name: "IBM", purpose: "Center of Excellence in AI", year: "2021" },
      { name: "Microsoft", purpose: "Azure Academy Partner", year: "2022" },
      { name: "TCS", purpose: "TCS iON Digital Learning Hub", year: "2019" },
      { name: "Accenture", purpose: "Industry Readiness Training", year: "2021" },
      { name: "Tech Mahindra", purpose: "Skill Development Partnership", year: "2022" },
    ],
    placement: {
      percentage: "98%",
      avgPackage: "₹6.5 LPA",
      highestPackage: "₹24 LPA",
      recruiters: ["TCS", "Infosys", "IBM", "Tech Mahindra", "Accenture", "Mindtree", "Wipro", "Cognizant", "HCL", "Capgemini"]
    },
    studentProjects: [
      { title: "AI-Powered Chatbot for Student Services", students: "Team of 4 - Final Year", description: "NLP-based chatbot for answering student queries about academics and placements" },
      { title: "Smart Attendance System using Face Recognition", students: "Team of 3 - Final Year", description: "OpenCV and deep learning based automated attendance system" },
      { title: "E-Commerce Platform with Recommendation Engine", students: "Team of 4 - Final Year", description: "Full-stack web application with ML-based product recommendations" },
      { title: "IoT-based Weather Monitoring Station", students: "Team of 3 - Third Year", description: "Arduino and sensor-based real-time weather data collection system" },
    ],
    subjects: [
      { name: "Programming for Problem Solving (C)", semester: 1, type: "core" },
      { name: "Data Structures", semester: 2, type: "core" },
      { name: "Object Oriented Programming (Java)", semester: 3, type: "core" },
      { name: "Database Management Systems", semester: 3, type: "core" },
      { name: "Computer Organization & Architecture", semester: 3, type: "core" },
      { name: "Operating Systems", semester: 4, type: "core" },
      { name: "Design & Analysis of Algorithms", semester: 4, type: "core" },
      { name: "Computer Networks", semester: 5, type: "core" },
      { name: "Software Engineering", semester: 5, type: "core" },
      { name: "Compiler Design", semester: 6, type: "core" },
      { name: "Machine Learning", semester: 6, type: "core" },
      { name: "Artificial Intelligence", semester: 7, type: "core" },
      { name: "Cloud Computing", semester: 7, type: "elective" },
      { name: "Cyber Security", semester: 7, type: "elective" },
      { name: "Big Data Analytics", semester: 7, type: "elective" },
      { name: "Deep Learning", semester: 8, type: "elective" },
      { name: "Internet of Things", semester: 8, type: "elective" },
      { name: "Blockchain Technology", semester: 8, type: "elective" },
      { name: "Aptitude & Reasoning", semester: 3, type: "professional-skill" },
      { name: "Communication Skills", semester: 4, type: "professional-skill" },
      { name: "IBM Full Stack Development", semester: 5, type: "optional-training" },
      { name: "Accenture Developer Program", semester: 6, type: "optional-training" },
      { name: "AWS Cloud Practitioner", semester: 7, type: "optional-training" },
    ],
    documents: [
      { title: "Faculty List 2024-25", url: "https://mits.ac.in/assets/pdf/cse/CSE%20CAY%202024-25.pdf" },
      { title: "Placement Statistics 2023-24", url: "https://mits.ac.in/assets/pdf/cse/AY%202023-24%20Placement%20Statistics.pdf" },
      { title: "BoS 2024-25", url: "https://www.mits.ac.in/public/uploads/departments/b3eb1bb0eeb2ed4149b1683e2e47d27d.pdf" },
      { title: "Magazine - Techera 2024", url: "https://www.mits.ac.in/public/uploads/departments/b746e8ac58629fb858149e7626d8d54a.pdf" },
      { title: "Bulletin 2024-25", url: "https://mits.ac.in/public/uploads/departments/27ae2b85a432a1607fc24738aa863be2.pdf" },
    ],
  },

  ce: {
    key: "ce",
    name: "Civil Engineering",
    shortName: "CE",
    established: "2014",
    bannerImage: deptImg("civil"),
    about: "The Department of Civil Engineering was established in the year 2014. The Department offers 4-year B.Tech programme with a deep insight into the discipline which enables the promising engineers to acquire the skills required to succeed both individually as well as in Industry. Keeping in view of the technological advancement, the department is fortified by the most qualified and experienced faculty. The department is also well equipped with the modern laboratories. The B.Tech. Programme under Department of Civil Engineering was accredited by the National Board of Accreditation (NBA) of All India Council for Technical Education (AICTE).",
    vision: "To grow as a globally recognized Civil Engineering Department through cutting-edge education and research to bring sustainable cultural, economic and social growth in the nation.",
    mission: [
      "To provide modern educational tools and techniques to the students in order to enrich them to solve complex civil engineering problems.",
      "To develop sustainable technologies and solutions for various organizations involved in developmental activities through consultancy and research services.",
      "To foster the socio-economic and cultural upliftment in the region through formal and informal education."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. Vijayakumar Natesan", designation: "Asst. Professor & Head", qualification: "Ph.D. (IIT, Hyderabad)", image: "https://mits.ac.in/public/uploads/faculty/fc9b84db32042ded85ace96100f6848f.JPG", profileUrl: "https://mits.ac.in/facultyprofile/7" },
    achievements: { consultancyAmount: "₹10+ Lakhs", researchProjects: "8+", patents: "5+", publications: "100+" },
    teachingApproach: {
      description: "The department emphasizes practical learning with site visits, surveying camps, and hands-on laboratory sessions.",
      points: ["Site visits and field surveys", "BIM-integrated design projects", "Industry guest lectures", "Sustainability-focused curriculum", "Geotechnical field testing"]
    },
    courses: ["B.Tech in Civil Engineering"],
    contactInfo: { email: "hod_ce@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. Dipankar Roy", designation: "Professor & Dean - School of Engineering", qualification: "Ph.D. (University of Pisa, Italy)", image: "https://mits.ac.in/public/uploads/faculty/drdipankarroy(1).jpg", profileUrl: "https://mits.ac.in/facultyprofile/1" },
      { name: "Dr. Sudheer Kumar Yantrapalli", designation: "Assoc. Professor", qualification: "Ph.D. (NIT, Warangal)", image: "https://mits.ac.in/public/uploads/faculty/e8ce6974dbf830579b5ea7d0adcb2d70.jpg", profileUrl: "https://mits.ac.in/facultyprofile/5" },
      { name: "Dr. Swapneel S. Jaiswal", designation: "Sr. Asst. Professor", qualification: "Ph.D. (IIT, Roorkee)", image: "https://mits.ac.in/public/uploads/faculty/f8dd76e2193a70ab509f589ac9f34df6.jpg", profileUrl: "https://mits.ac.in/facultyprofile/6" },
      { name: "Dr. Vijayakumar Natesan", designation: "Asst. Professor & Head", qualification: "Ph.D. (IIT, Hyderabad)", image: "https://mits.ac.in/public/uploads/faculty/fc9b84db32042ded85ace96100f6848f.JPG", profileUrl: "https://mits.ac.in/facultyprofile/7" },
      { name: "Dr. Priyam Nath Bhowmik", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Silchar)", image: "https://mits.ac.in/public/uploads/faculty/273e0be56c4bcccaaaedae215d517144.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/9" },
      { name: "Dr. T. Venkatesh Varma", designation: "Asst. Professor", qualification: "Ph.D. (IIT, Indore)", image: "https://mits.ac.in/public/uploads/faculty/varma.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1067" },
      { name: "Dr. Nakkeeran G", designation: "Asst. Professor", qualification: "Ph.D. (SRM Institute of Science and Technology)", image: "https://mits.ac.in/public/uploads/faculty/Dr. Nakkeeran G.jpg", profileUrl: "https://mits.ac.in/facultyprofile/578" },
      { name: "Dr. Nunna Tagore Sai Priya", designation: "Asst. Professor", qualification: "Ph.D. (IIT, Kharagpur)", image: "https://mits.ac.in/public/uploads/faculty/nunnapriya.png", profileUrl: "https://mits.ac.in/facultyprofile/677" },
      { name: "Dr. Imran Kuttagola", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Karnataka)", image: "https://mits.ac.in/public/uploads/faculty/imran-Photoroom(1).png", profileUrl: "https://mits.ac.in/facultyprofile/680" },
      { name: "Mrs. Kandukuri Anitha", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Mohan Babu University)", image: "https://mits.ac.in/public/uploads/faculty/Mrs Anitha K.jpg", profileUrl: "https://mits.ac.in/facultyprofile/13" },
      { name: "Mr. B. Veeresh", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (JNTUA University)", image: "https://mits.ac.in/public/uploads/faculty/Mr.B. Veeresh.jpg", profileUrl: "https://mits.ac.in/facultyprofile/458" },
      { name: "Mr. P. Sabarishkumar", designation: "Asst. Professor", qualification: "M.E.", image: "https://mits.ac.in/public/uploads/faculty/sabarish.jpg", profileUrl: "https://mits.ac.in/facultyprofile/517" },
    ],
    detailedAchievements: [
      { title: "NBA Accreditation for B.Tech Civil Engineering", description: "First cycle of NBA accreditation received", type: "faculty" },
      { title: "100+ Publications in reputed journals", description: "Faculty published in Scopus and WoS indexed journals", type: "faculty" },
      { title: "Students won state-level bridge design competition", description: "Model bridge design contest at state technical fest", type: "student" },
    ],
    facilities: [
      { name: "Structural Engineering Lab", description: "Testing of concrete, steel, and composite structures", equipment: ["Universal Testing Machine", "Compression Testing Machine"] },
      { name: "Geotechnical Engineering Lab", description: "Soil testing and foundation analysis", equipment: ["Triaxial Testing", "Permeability apparatus"] },
      { name: "Surveying Lab", description: "Total station and GPS-based surveying", equipment: ["Total Station", "Auto Level", "GPS equipment"] },
      { name: "Environmental Engineering Lab", description: "Water and wastewater quality testing", equipment: ["BOD incubator", "Turbidity meter", "pH meters"] },
    ],
    patents: [
      { title: "Eco-friendly Concrete Mix using Industrial Waste", status: "Filed", year: "2023" },
      { title: "Smart Water Distribution Monitoring System", status: "Published", year: "2022" },
    ],
    publications: [
      { title: "Analysis of Soil Stabilization using Geopolymers", type: "journal", year: "2024" },
      { title: "Seismic Analysis of Multi-Storey Buildings", type: "conference", year: "2023" },
      { title: "Green Building Materials Review", type: "journal", year: "2023" },
    ],
    consultancy: [
      { title: "Soil Testing for Construction Projects", agency: "Local Builders", amount: "₹3 Lakhs" },
      { title: "Structural Design Review", agency: "AP Government", amount: "₹5 Lakhs" },
    ],
    events: [
      { title: "National Workshop on Sustainable Construction", date: "February 2024" },
      { title: "Bridge Design Competition", date: "March 2024" },
      { title: "Guest Lecture on BIM Technologies", date: "January 2024" },
    ],
    mous: [
      { name: "L&T Construction", purpose: "Industrial Training", year: "2021" },
      { name: "NHAI", purpose: "Highway Design Projects", year: "2022" },
    ],
    placement: { percentage: "80%", avgPackage: "₹4.5 LPA", highestPackage: "₹9 LPA", recruiters: ["L&T", "Shapoorji Pallonji", "NCC", "Ramky Group", "Megha Engineering"] },
    studentProjects: [
      { title: "Green Concrete using Fly Ash", students: "Team of 4", description: "Sustainable concrete mix design using industrial waste" },
      { title: "Rainwater Harvesting System Design", students: "Team of 3", description: "Comprehensive design for campus rainwater collection" },
    ],
    subjects: [
      { name: "Engineering Mechanics", semester: 1, type: "core" },
      { name: "Building Materials & Construction", semester: 2, type: "core" },
      { name: "Strength of Materials", semester: 3, type: "core" },
      { name: "Surveying", semester: 3, type: "core" },
      { name: "Fluid Mechanics", semester: 4, type: "core" },
      { name: "Structural Analysis", semester: 4, type: "core" },
      { name: "Geotechnical Engineering", semester: 5, type: "core" },
      { name: "Reinforced Concrete Structures", semester: 5, type: "core" },
      { name: "Transportation Engineering", semester: 6, type: "core" },
      { name: "Environmental Engineering", semester: 6, type: "core" },
      { name: "Steel Structures", semester: 7, type: "elective" },
      { name: "Foundation Engineering", semester: 7, type: "elective" },
      { name: "Estimation & Costing", semester: 7, type: "core" },
    ],
    documents: [
      { title: "Faculty List 2024-25", url: "https://mits.ac.in/public/uploads/departments/34609776fc6d3d8390a9657b4aa23f5a.pdf" },
      { title: "BoS 2024-25", url: "https://mits.ac.in/public/uploads/departments/5ebd8d1eccab5799909d40d4136d8f51.pdf" },
      { title: "Newsletter 2024-25", url: "https://mits.ac.in/assets/pdf/civil/Ranchana%20News%20letter_2024-25.pdf" },
      { title: "Magazine TERRA 2023-24", url: "https://mits.ac.in/assets/pdf/civil/TERRA-2023-24.pdf" },
    ],
  },

  eee: {
    key: "eee",
    name: "Electrical & Electronics Engineering",
    shortName: "EEE",
    established: "2007",
    bannerImage: deptImg("eee"),
    about: "The Department of Electrical & Electronics Engineering was established in the year 2007. The department provides comprehensive education in power systems, renewable energy, power electronics, and smart grid technologies. The department is well-equipped with modern laboratories and experienced faculty members dedicated to excellence in teaching and research.",
    vision: "To emerge as a center of excellence in Electrical & Electronics Engineering education and research contributing to technological and societal development.",
    mission: [
      "To impart quality education with emphasis on practical skills and innovative thinking.",
      "To promote research in power systems, renewable energy, and emerging technologies.",
      "To develop industry-ready graduates with strong ethical values."
    ],
    nbaAccredited: false,
    hod: { name: "Dr. Manavaalan Gunasekaran", designation: "Assoc. Professor & Head", qualification: "Ph.D. (IIT, Kanpur)", image: "https://mits.ac.in/public/uploads/faculty/manavaalan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/931" },
    achievements: { consultancyAmount: "₹8+ Lakhs", researchProjects: "6+", patents: "3+", publications: "80+" },
    teachingApproach: { description: "Hands-on approach with emphasis on renewable energy projects and smart grid technologies.", points: ["Power systems simulation labs", "Renewable energy installations", "Industry visits to power plants", "Smart grid research projects", "NPTEL certification courses"] },
    courses: ["B.Tech in Electrical & Electronics Engineering"],
    contactInfo: { email: "hod_eee@mits.ac.in", phone: "+91-8571-280255" },
faculty: [
    { name: "Dr. Ravindranath C Cherukuri", designation: "Professor", qualification: "Ph.D. (University of Texas at San Antonio)", image: "https://mits.ac.in/public/uploads/faculty/4ef6caba3428935531fab2cad4eb9d73.jpg", profileUrl: "https://mits.ac.in/facultyprofile/748" },
    { name: "Dr. C. Kamal Basha", designation: "Professor & Vice Principal", qualification: "Ph.D. (JNTUA, Anantapur)", image: "https://mits.ac.in/public/uploads/faculty/kamalbasha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/223" },
    { name: "Dr. A. V. Pavan Kumar", designation: "Professor", qualification: "Ph.D. (BITS-Pilani, Hyderabad)", image: "https://mits.ac.in/public/uploads/faculty/Pavan Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/224" },
    { name: "Dr. Manavaalan Gunasekaran", designation: "Assoc. Professor & Head", qualification: "Ph.D. (IIT, Kanpur)", image: "https://mits.ac.in/public/uploads/faculty/manavaalan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/931" },
    { name: "Dr. Somu Vijaya Bhaskar", designation: "Assoc. Professor", qualification: "Ph.D. (University of Florida)", image: "https://mits.ac.in/public/uploads/faculty/somu.jpg", profileUrl: "https://mits.ac.in/facultyprofile/694" },
    { name: "Dr. K. Arul Kumar", designation: "Assoc. Professor", qualification: "Ph.D. (VIT University)", image: "https://mits.ac.in/public/uploads/faculty/Dr. K. Arul Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/225" },
    { name: "Dr. K. Lakshmikhandan", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/placeholder.jpg", profileUrl: "https://mits.ac.in/facultyprofile/226" },
    { name: "Dr. T. S. Balaji Damodhar", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/placeholder.jpg", profileUrl: "https://mits.ac.in/facultyprofile/227" },
    { name: "Dr. Sarat Kumar Mishra", designation: "Asst. Professor", qualification: "Ph.D. (B.I.T., Mesra)", image: "https://mits.ac.in/public/uploads/faculty/placeholder.jpg", profileUrl: "https://mits.ac.in/facultyprofile/713" },
    { name: "Dr. V. B. Thurai Raaj", designation: "Asst. Professor", qualification: "Ph.D. (Vignan University)", image: "https://mits.ac.in/public/uploads/faculty/Thurai Raaj.JPG", profileUrl: "https://mits.ac.in/facultyprofile/230" },
    { name: "Dr. Vineet Kumar", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Hamirpur)", image: "https://mits.ac.in/public/uploads/faculty/Vineet Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/597" },
    { name: "Dr. Satish Kumar Ramoji", designation: "Asst. Professor", qualification: "Ph.D. (NIT Silchar)", image: "https://mits.ac.in/public/uploads/faculty/satish.jfif", profileUrl: "https://mits.ac.in/facultyprofile/625" },
    { name: "Dr. Srinivas Chikkam", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Delhi)", image: "https://mits.ac.in/public/uploads/faculty/placeholder.jpg", profileUrl: "https://mits.ac.in/facultyprofile/586" },
    { name: "Dr. R. Saravana Kumar", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Puducherry)", image: "https://mits.ac.in/public/uploads/faculty/Saravana Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/583" },
    { name: "Dr. Sovit Kumar Pradhan", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Silchar)", image: "https://mits.ac.in/public/uploads/faculty/4c433f2c7aa366903feaf92246f87d1a.JPG", profileUrl: "https://mits.ac.in/facultyprofile/703" },
    { name: "Mr. Sridhar N", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (VIT university)", image: "https://mits.ac.in/public/uploads/faculty/Sridhar. N.JPG", profileUrl: "https://mits.ac.in/facultyprofile/232" },
    { name: "Mr. G. Mahammed Rafi", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Annamalai university)", image: "https://mits.ac.in/public/uploads/faculty/95ba2e835b9e1123fad3cf009c012955.jpg", profileUrl: "https://mits.ac.in/facultyprofile/205" },
    { name: "Mr. B. Karthick", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Pondicherry University)", image: "https://mits.ac.in/public/uploads/faculty/Karthick.JPG", profileUrl: "https://mits.ac.in/facultyprofile/206" },
    { name: "Mr. E. Sathiyanarayanan", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Puducherry Technological University)", image: "https://mits.ac.in/public/uploads/faculty/Sathiyanarayanan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/210" },
    { name: "Mr. Rajesh KS", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (JNTU, Kakinada)", image: "https://mits.ac.in/public/uploads/faculty/Rajesh KS.JPG", profileUrl: "https://mits.ac.in/facultyprofile/238" },
    { name: "Mr. Ch Srinivas", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Christ University)", image: "https://mits.ac.in/public/uploads/faculty/Ch Srinivas.JPG", profileUrl: "https://mits.ac.in/facultyprofile/480" },
    { name: "Mr. Ibrahim Zafar", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (NIT, Mizoram)", image: "https://mits.ac.in/public/uploads/faculty/Ibrahim Zafar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/433" },
    { name: "Mr. M. Venkatesh", designation: "Asst. Professor", qualification: "M.E., (Ph.D) (NIT, Mizoram)", image: "https://mits.ac.in/public/uploads/faculty/Venkatesh.JPG", profileUrl: "https://mits.ac.in/facultyprofile/425" },
    { name: "Mr. M. R. K. Choudary", designation: "Asst. Professor", qualification: "M.Tech", image: "https://mits.ac.in/public/uploads/faculty/placeholder.jpg", profileUrl: "https://mits.ac.in/facultyprofile/207" },
    { name: "Mrs. D. Vasudha", designation: "Asst. Professor", qualification: "M.Tech", image: "https://mits.ac.in/public/uploads/faculty/placeholder.jpg", profileUrl: "https://mits.ac.in/facultyprofile/484" },
    { name: "Mrs. K. B. N. L. Devi", designation: "Asst. Professor", qualification: "M.Tech", image: "https://mits.ac.in/public/uploads/faculty/placeholder.jpg", profileUrl: "https://mits.ac.in/facultyprofile/505" },
  ],
    detailedAchievements: [
      { title: "Smart Grid Research Publications", description: "Published 80+ papers in reputed journals", type: "faculty" },
      { title: "Solar Energy Installation on Campus", description: "Designed and installed 50KW solar plant for campus use", type: "faculty" },
      { title: "Robotic Arm Design Competition Winners", description: "Students won state-level robotics competition", type: "student" },
    ],
    facilities: [
      { name: "Power Electronics Lab", description: "Advanced power converter systems and drives", equipment: ["Inverters", "Converters", "Motor drives"] },
      { name: "Electrical Machines Lab", description: "Various electrical machines for testing", equipment: ["DC Machines", "Transformers", "Induction Motors"] },
      { name: "Control Systems Lab", description: "PID controllers and simulation tools", equipment: ["MATLAB/Simulink", "PLC trainers"] },
      { name: "Renewable Energy Lab", description: "Solar panel testing and wind energy systems", equipment: ["Solar panels", "Wind turbine models", "Battery systems"] },
    ],
    patents: [
      { title: "Efficient Solar MPPT Controller", status: "Filed", year: "2023" },
      { title: "Smart Meter with IoT Integration", status: "Published", year: "2022" },
    ],
    publications: [
      { title: "Optimal Power Flow Analysis using PSO", type: "journal", year: "2024" },
      { title: "Solar Inverter Efficiency Enhancement", type: "conference", year: "2023" },
    ],
    consultancy: [
      { title: "Power Audit for Local Industries", agency: "APSPDCL", amount: "₹4 Lakhs" },
    ],
    events: [
      { title: "Workshop on Smart Grid Technologies", date: "January 2024" },
      { title: "National Seminar on Renewable Energy", date: "March 2024" },
    ],
    mous: [
      { name: "APSPDCL", purpose: "Industrial Training & Internships", year: "2021" },
      { name: "Schneider Electric", purpose: "Automation Training", year: "2022" },
    ],
    placement: { percentage: "85%", avgPackage: "₹4.5 LPA", highestPackage: "₹10 LPA", recruiters: ["Schneider Electric", "Siemens", "ABB", "L&T", "BHEL"] },
    studentProjects: [
      { title: "Solar Powered EV Charging Station", students: "Team of 4", description: "Renewable energy based charging infrastructure" },
    ],
    subjects: [
      { name: "Circuit Theory", semester: 2, type: "core" },
      { name: "Electrical Machines - I", semester: 3, type: "core" },
      { name: "Network Analysis", semester: 3, type: "core" },
      { name: "Power Systems - I", semester: 5, type: "core" },
      { name: "Power Electronics", semester: 5, type: "core" },
      { name: "Control Systems", semester: 4, type: "core" },
      { name: "Renewable Energy Sources", semester: 7, type: "elective" },
      { name: "Smart Grid", semester: 7, type: "elective" },
    ],
    documents: [
      { title: "Faculty List 2024-25", url: "http://www.mits.ac.in/department/11" },
    ],
  },

  me: {
    key: "me",
    name: "Mechanical Engineering",
    shortName: "ME",
    established: "2006",
    bannerImage: deptImg("mech"),
    about: "The Department of Mechanical Engineering was established in 2006 and offers comprehensive programs in mechanical design, manufacturing, and thermal engineering. The department is equipped with state-of-the-art CAD/CAM facilities and manufacturing workshops.",
    vision: "To be a premier department in Mechanical Engineering education and research, producing engineers who contribute to technological advancement.",
    mission: [
      "To provide quality education with emphasis on design, manufacturing, and thermal systems.",
      "To promote research and innovation in emerging mechanical engineering areas.",
      "To develop industry-ready professionals with strong problem-solving capabilities."
    ],
    nbaAccredited: false,
    hod: { name: "Dr. V. Rama Krishna", designation: "Professor & Head", qualification: "Ph.D. (ME)" },
    achievements: { consultancyAmount: "₹12+ Lakhs", researchProjects: "10+", patents: "4+", publications: "120+" },
    teachingApproach: { description: "Emphasis on hands-on training through workshops, CAD/CAM labs, and industry-oriented projects.", points: ["Advanced CAD/CAM training", "Manufacturing workshop practice", "Industry visits", "Design competitions", "ANSYS simulation projects"] },
    courses: ["B.Tech in Mechanical Engineering"],
    contactInfo: { email: "hod_me@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. V. Rama Krishna", designation: "Professor & Head", qualification: "Ph.D." },
      { name: "Dr. A. Suresh", designation: "Professor", qualification: "Ph.D." },
      { name: "Dr. M. Bala Subrahmanyam", designation: "Associate Professor", qualification: "Ph.D." },
      { name: "Mr. N. Srinivas", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. K. Chandra Sekhar", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. P. Saroja", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. G. Rajesh", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. S. Bala Murali", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. R. Suresh Babu", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. V. Ravi Teja", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. K. Anusha", designation: "Assistant Professor", qualification: "M.Tech" },
    ],
    detailedAchievements: [
      { title: "Published 120+ research papers", description: "In national and international journals", type: "faculty" },
      { title: "SAE India BAJA competition participants", description: "Students designed and built ATV vehicles for SAE BAJA", type: "student" },
    ],
    facilities: [
      { name: "CAD/CAM Lab", description: "SolidWorks, AutoCAD, CATIA workstations", equipment: ["40 CAD workstations", "SolidWorks Enterprise", "ANSYS simulation"] },
      { name: "Manufacturing Workshop", description: "CNC machines, lathes, milling machines", equipment: ["CNC Lathe", "Milling Machine", "Drilling machines"] },
      { name: "Thermal Engineering Lab", description: "IC engines, boilers, and refrigeration systems", equipment: ["4-Stroke engine models", "Refrigeration units", "Heat exchangers"] },
      { name: "Metallurgy Lab", description: "Material testing and analysis", equipment: ["Metallurgical microscope", "Hardness testers", "Impact testing machines"] },
    ],
    patents: [
      { title: "Efficient Heat Exchanger Design using Nano-fluids", status: "Filed", year: "2023" },
      { title: "3D Printed Prosthetic Limb Design", status: "Published", year: "2022" },
    ],
    publications: [
      { title: "Optimization of CNC Machining Parameters", type: "journal", year: "2024" },
      { title: "Thermal Analysis of IC Engines", type: "conference", year: "2023" },
    ],
    consultancy: [
      { title: "Material Testing Services", agency: "Local Industries", amount: "₹4 Lakhs" },
      { title: "CAD Design for SMEs", agency: "Small Enterprises", amount: "₹3 Lakhs" },
    ],
    events: [
      { title: "Workshop on 3D Printing & Additive Manufacturing", date: "February 2024" },
      { title: "National Conference on Advanced Manufacturing", date: "March 2024" },
    ],
    mous: [
      { name: "Ashok Leyland", purpose: "Automotive Training", year: "2021" },
      { name: "TVS Motors", purpose: "Industrial Internships", year: "2022" },
    ],
    placement: { percentage: "88%", avgPackage: "₹5 LPA", highestPackage: "₹11 LPA", recruiters: ["Ashok Leyland", "TVS", "Mahindra", "Tata Motors", "L&T"] },
    studentProjects: [
      { title: "Design of Hybrid Vehicle Chassis", students: "Team of 4", description: "Lightweight chassis design for electric-hybrid vehicle" },
      { title: "Solar Water Heater Optimization", students: "Team of 3", description: "Efficiency improvement using reflector design" },
    ],
    subjects: [
      { name: "Engineering Drawing", semester: 1, type: "core" },
      { name: "Engineering Mechanics", semester: 2, type: "core" },
      { name: "Thermodynamics", semester: 3, type: "core" },
      { name: "Strength of Materials", semester: 3, type: "core" },
      { name: "Fluid Mechanics", semester: 4, type: "core" },
      { name: "Manufacturing Technology", semester: 4, type: "core" },
      { name: "Machine Design", semester: 5, type: "core" },
      { name: "Heat Transfer", semester: 5, type: "core" },
      { name: "IC Engines", semester: 6, type: "core" },
      { name: "CAD/CAM", semester: 6, type: "core" },
      { name: "Automobile Engineering", semester: 7, type: "elective" },
      { name: "Robotics", semester: 7, type: "elective" },
      { name: "Finite Element Analysis", semester: 8, type: "elective" },
    ],
    documents: [
      { title: "Faculty List 2024-25", url: "http://www.mits.ac.in/department/8" },
    ],
  },

  ece: {
    key: "ece",
    name: "Electronics & Communication Engineering",
    shortName: "ECE",
    established: "2005",
    bannerImage: deptImg("ece"),
    about: "The Department of Electronics & Communication Engineering was established in 2005, specializing in telecommunications, embedded systems, VLSI design, and IoT. The department has a strong research focus and industry collaborations.",
    vision: "To be a distinguished department producing competent electronics and communication engineers contributing to national development.",
    mission: [
      "To provide quality education in electronics and communication engineering.",
      "To promote research in VLSI, IoT, and communication technologies.",
      "To produce industry-ready engineers with innovative capabilities."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. S. Rajasekaran", designation: "Professor & Head", qualification: "Ph.D.", image: "https://mits.ac.in/public/uploads/faculty/f8983b3c4255e5b248d9b51eb8f62e38.jpeg" },
    achievements: { consultancyAmount: "₹15+ Lakhs", researchProjects: "12+", patents: "8+", publications: "150+" },
    teachingApproach: { description: "The department integrates simulation-based learning with hands-on hardware projects.", points: ["VLSI design with Cadence tools", "IoT prototyping with Arduino/Raspberry Pi", "PCB design and fabrication", "Communication system simulation", "MATLAB & Simulink projects"] },
    courses: ["B.Tech in Electronics & Communication Engineering"],
    contactInfo: { email: "hod_ece@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. Rama S Komaragiri", designation: "Professor & Dean-Academics", qualification: "Ph.D. (Technical University of Darmstadt, Germany)", image: "https://mits.ac.in/public/uploads/faculty/rama.jpg", profileUrl: "https://mits.ac.in/facultyprofile/735" },
      { name: "Dr. P. Ramanathan", designation: "Professor & Principal", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Dr. P. Ramanathan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/172" },
      { name: "Dr. Sanjay Kumar C. Gowre", designation: "Professor & Head", qualification: "Ph.D. (IIT, Kharagpur)", image: "https://mits.ac.in/public/uploads/faculty/sanjay.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1018" },
      { name: "Dr. S. Rajasekaran", designation: "Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/f8983b3c4255e5b248d9b51eb8f62e38.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/173" },
      { name: "Dr. Nehru Kandasamy", designation: "Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Nehru.JPG", profileUrl: "https://mits.ac.in/facultyprofile/174" },
      { name: "Dr. Murli Manohar", designation: "Assoc. Professor", qualification: "Ph.D. (IIT, Guwahati)", image: "https://mits.ac.in/public/uploads/faculty/DSC_1790.JPG", profileUrl: "https://mits.ac.in/facultyprofile/734" },
      { name: "Dr. V. Jayaprakasan", designation: "Assoc. Professor & Associate Dean", qualification: "Ph.D. (JNTUA, Ananthapuramu)", image: "https://mits.ac.in/public/uploads/faculty/jaya.jpg", profileUrl: "https://mits.ac.in/facultyprofile/751" },
      { name: "Dr. K. Sathesh", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/d2d05aafc81b3f86d9a6aef10752f751.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/177" },
      { name: "Dr. Maneesh Kumar Singh", designation: "Assoc. Professor", qualification: "Ph.D. (Curtin University, Perth Australia)", image: "https://mits.ac.in/public/uploads/faculty/maneesh.JPG", profileUrl: "https://mits.ac.in/facultyprofile/695" },
      { name: "Dr. Grande Naga Jyothi", designation: "Assoc. Professor", qualification: "Ph.D. (VIT University)", image: "https://mits.ac.in/public/uploads/faculty/Naga Jyothi.jpg", profileUrl: "https://mits.ac.in/facultyprofile/400" },
      { name: "Dr. Rakesh Nath Tiwari", designation: "Assoc. Professor", qualification: "Ph.D. (Uttarakhand Technical University)", image: "https://mits.ac.in/public/uploads/faculty/1120faf5d8ab8c822818d9c4034e8f1f.jpg", profileUrl: "https://mits.ac.in/facultyprofile/185" },
      { name: "Dr. Vivek Jain", designation: "Asst. Professor", qualification: "Ph.D. (Devi Ahilya Vishwavidyalay, Govt. University)", image: "https://mits.ac.in/public/uploads/faculty/vivek.JPG", profileUrl: "https://mits.ac.in/facultyprofile/437" },
      { name: "Dr. R. Ravindraiah", designation: "Asst. Professor", qualification: "Ph.D. (JNTUA, Anantapuramu)", image: "https://mits.ac.in/public/uploads/faculty/ravindraiah.JPG", profileUrl: "https://mits.ac.in/facultyprofile/514" },
      { name: "Dr. G. Reddy Hemantha", designation: "Asst. Professor", qualification: "Ph.D. (JNTUA, Anantapuramum)", image: "https://mits.ac.in/public/uploads/faculty/3ccc236dd951753b0d97d3a15774c510.JPG", profileUrl: "https://mits.ac.in/facultyprofile/396" },
      { name: "Dr. Janmoni Borah", designation: "Asst. Professor", qualification: "Ph.D. (NERIST, Arunachal Pradesh)", image: "https://mits.ac.in/public/uploads/faculty/7dc8828d43b484c2a1cdeeb451a3b8d5.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/191" },
      { name: "Dr. S. K. Nurul Islam", designation: "Asst. Professor", qualification: "Ph.D. (IIEST, Shibpur)", image: "https://mits.ac.in/public/uploads/faculty/nurul.png", profileUrl: "https://mits.ac.in/facultyprofile/732" },
      { name: "Dr. C. Kumar", designation: "Asst. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/cf383c1cdc0f26fc0b61ec41145a7dfb.jpg", profileUrl: "https://mits.ac.in/facultyprofile/193" },
      { name: "Dr. Smriti Baruah", designation: "Asst. Professor", qualification: "Ph.D. (NERIST, Arunachal Pradesh)", image: "https://mits.ac.in/public/uploads/faculty/bffa0e1204711641930d546427117ac5.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/197" },
      { name: "Dr. R. Kiran Kumar", designation: "Asst. Professor", qualification: "Ph.D. (Vel Tech University)", image: "https://mits.ac.in/public/uploads/faculty/72001cd9d3bcf4c01af03dd817198f6a.jpg", profileUrl: "https://mits.ac.in/facultyprofile/200" },
      { name: "Dr. Rahul Mondal", designation: "Asst. Professor", qualification: "Ph.D. (University of Kalyani)", image: "https://mits.ac.in/public/uploads/faculty/rahul.JPG", profileUrl: "https://mits.ac.in/facultyprofile/720" },
      { name: "Dr. V. Sai Kumar", designation: "Asst. Professor", qualification: "Ph.D. (Rayalaseema University)", image: "https://mits.ac.in/public/uploads/faculty/sai.JPG", profileUrl: "https://mits.ac.in/facultyprofile/201" },
      { name: "Dr. E. Aravindraj", designation: "Asst. Professor", qualification: "Ph.D. (Pondicherry University)", image: "https://mits.ac.in/public/uploads/faculty/ara.jpg", profileUrl: "https://mits.ac.in/facultyprofile/519" },
      { name: "Dr. Gutti Nagaswetha", designation: "Asst. Professor", qualification: "Ph.D. (VTU, Belgaum)", image: "https://mits.ac.in/public/uploads/faculty/eeaf2b47c6fd6231b8d3206254238215.jpg", profileUrl: "https://mits.ac.in/facultyprofile/204" },
      { name: "Dr. Simadri Badatya", designation: "Asst. Professor", qualification: "Ph.D. (Academy of Scientific Innovation & Research)", image: "https://mits.ac.in/public/uploads/faculty/simadri.jpg", profileUrl: "https://mits.ac.in/facultyprofile/700" },
      { name: "Dr. Anurag Kumar Pandey", designation: "Asst. Professor", qualification: "Ph.D. (IIT, Kharagpur)", image: "https://mits.ac.in/public/uploads/faculty/newanurag.png", profileUrl: "https://mits.ac.in/facultyprofile/731" },
      { name: "Dr. H. Shree Kumar", designation: "Asst. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/sreekumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/443" },
      { name: "Dr. Rakesh Singh", designation: "Asst. Professor", qualification: "Ph.D. (IIT, Roorkee)", image: "https://mits.ac.in/public/uploads/faculty/rak.JPG", profileUrl: "https://mits.ac.in/facultyprofile/742" },
      { name: "Dr. G. Subbarao", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Mizoram)", image: "https://mits.ac.in/public/uploads/faculty/subbarao.JPG", profileUrl: "https://mits.ac.in/facultyprofile/212" },
      { name: "Mr. T. Manivannan", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Vel Tech University)", image: "https://mits.ac.in/public/uploads/faculty/mani.JPG", profileUrl: "https://mits.ac.in/facultyprofile/202" },
      { name: "Mr. V. S. Prasanth", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Sathyabama University)", image: "https://mits.ac.in/public/uploads/faculty/prasanthvs.JPG", profileUrl: "https://mits.ac.in/facultyprofile/442" },
      { name: "Mr. Asif Moiz", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (NIT, Patna)", image: "https://mits.ac.in/public/uploads/faculty/asifmoiz.JPG", profileUrl: "https://mits.ac.in/facultyprofile/419" },
      { name: "Mr. V. Mustafa", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (NIT, Mizoram)", image: "https://mits.ac.in/public/uploads/faculty/ba159c5696db98c8f0f9a62bc9ec84d2.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/218" },
      { name: "Mr. G. Charan Kumar", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (Vel Tech University)", image: "https://mits.ac.in/public/uploads/faculty/493d2b545548fd4862897e82ccba65fb.jpg", profileUrl: "https://mits.ac.in/facultyprofile/251" },
      { name: "Mrs. K. Revathi", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (NIT, Mizoram)", image: "https://mits.ac.in/public/uploads/faculty/Revathi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/244" },
      { name: "Mr. M. Kamesh", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Vel Tech University)", image: "https://mits.ac.in/public/uploads/faculty/1d0ccd786e3504191039a886e12fe837.jpg", profileUrl: "https://mits.ac.in/facultyprofile/216" },
      { name: "Mrs. Kowsalya P", designation: "Asst. Professor", qualification: "M.E.", image: "https://mits.ac.in/public/uploads/faculty/kowsalya.JPG", profileUrl: "https://mits.ac.in/facultyprofile/434" },
      { name: "Mrs. P. Susmitha", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/sushmitha.jfif", profileUrl: "https://mits.ac.in/facultyprofile/653" },
      { name: "Mr. Shaik Tipu Rahaman", designation: "Asst. Professor", qualification: "M.Tech., M.Sc.", image: "https://mits.ac.in/public/uploads/faculty/tipu.JPG", profileUrl: "https://mits.ac.in/facultyprofile/797" },
      { name: "Mr. B. Subbarayudu", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/subbarayudu.JPG", profileUrl: "https://mits.ac.in/facultyprofile/252" },
      { name: "Ms. S. Kavi Priya", designation: "Asst. Professor", qualification: "M.Tech", image: "https://mits.ac.in/public/uploads/faculty/kavi.jpg", profileUrl: "https://mits.ac.in/facultyprofile/424" },
      { name: "Mrs. V. Sai Anusha", designation: "Asst. Professor", qualification: "M.Tech", image: "https://mits.ac.in/public/uploads/faculty/saianusha.jpg", profileUrl: "https://mits.ac.in/facultyprofile/416" },
      { name: "Mr. V. Nagaraja", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/nagaraju.jpg", profileUrl: "https://mits.ac.in/facultyprofile/534" },
    ],
    detailedAchievements: [
      { title: "NBA Accredited Program", description: "B.Tech ECE accredited by National Board of Accreditation", type: "faculty" },
      { title: "150+ Research Publications", description: "Published in IEEE, Elsevier, and Springer journals", type: "faculty" },
      { title: "IoT Hackathon Winners", description: "Students won regional IoT innovation challenge", type: "student" },
    ],
    facilities: [
      { name: "VLSI Design Lab", description: "Cadence tools for chip design and verification", equipment: ["Cadence Virtuoso", "Xilinx FPGA kits", "Logic analyzers"] },
      { name: "Communication Systems Lab", description: "Analog and digital communication trainers", equipment: ["Spectrum Analyzer", "Signal generators", "Communication kits"] },
      { name: "Embedded Systems Lab", description: "ARM and microcontroller programming", equipment: ["ARM Development boards", "Arduino kits", "Raspberry Pi"] },
      { name: "PCB Design Lab", description: "PCB fabrication and testing", equipment: ["PCB prototyping machine", "Soldering stations", "Oscilloscopes"] },
    ],
    patents: [
      { title: "Low Power VLSI Circuit Design for IoT Sensors", status: "Granted", year: "2022" },
      { title: "Antenna Design for 5G Applications", status: "Filed", year: "2023" },
      { title: "Smart Home Automation System", status: "Published", year: "2023" },
    ],
    publications: [
      { title: "MIMO Antenna Design for 5G Communications", type: "journal", year: "2024" },
      { title: "IoT-based Environmental Monitoring", type: "conference", year: "2023" },
      { title: "FPGA Implementation of Image Processing Algorithms", type: "journal", year: "2023" },
    ],
    consultancy: [
      { title: "PCB Design Services", agency: "Electronics Firms", amount: "₹5 Lakhs" },
      { title: "IoT Sensor Network Design", agency: "Agriculture Dept", amount: "₹6 Lakhs" },
    ],
    events: [
      { title: "Workshop on IoT and Embedded Systems", date: "January 2024" },
      { title: "National Conference on VLSI Design", date: "March 2024" },
      { title: "Guest Lecture on 5G Technologies", date: "February 2024" },
    ],
    mous: [
      { name: "Texas Instruments", purpose: "Embedded Systems Training", year: "2021" },
      { name: "Qualcomm", purpose: "5G Research Collaboration", year: "2022" },
      { name: "BSNL", purpose: "Telecom Training", year: "2020" },
    ],
    placement: { percentage: "90%", avgPackage: "₹5 LPA", highestPackage: "₹12 LPA", recruiters: ["Qualcomm", "Samsung", "Intel", "TCS", "Infosys", "Wipro"] },
    studentProjects: [
      { title: "IoT-based Smart Agriculture System", students: "Team of 4", description: "Sensor-based soil moisture and weather monitoring" },
      { title: "Gesture Controlled Robot", students: "Team of 3", description: "Accelerometer-based robot control system" },
    ],
    subjects: [
      { name: "Electronic Devices & Circuits", semester: 2, type: "core" },
      { name: "Signals & Systems", semester: 3, type: "core" },
      { name: "Analog Communications", semester: 4, type: "core" },
      { name: "Digital Communications", semester: 5, type: "core" },
      { name: "Microprocessors & Microcontrollers", semester: 4, type: "core" },
      { name: "VLSI Design", semester: 6, type: "core" },
      { name: "Embedded Systems", semester: 6, type: "core" },
      { name: "Antenna & Wave Propagation", semester: 5, type: "core" },
      { name: "IoT", semester: 7, type: "elective" },
      { name: "5G & Beyond", semester: 7, type: "elective" },
    ],
    documents: [],
  },

  cseds: {
    key: "cseds",
    name: "CSE – Data Science",
    shortName: "CSE-DS",
    established: "2019",
    bannerImage: deptImg("csd"),
    about: "The Department of CSE – Data Science was established in 2019, offering specialized curriculum in data analytics, machine learning, and big data technologies. The program prepares students for the modern data-driven economy.",
    vision: "To be a center of excellence in data science education producing data-driven problem solvers.",
    mission: ["To provide comprehensive education in data science and analytics.", "To promote research in machine learning and big data.", "To develop skilled professionals for the data economy."],
    nbaAccredited: false,
    hod: { name: "Dr. R. Suresh Kumar", designation: "Professor & Head", qualification: "Ph.D. (CSE)" },
    achievements: { consultancyAmount: "₹5+ Lakhs", researchProjects: "6+", patents: "4+", publications: "60+" },
    teachingApproach: { description: "Data-centric approach with Kaggle competitions, industry datasets, and hands-on ML projects.", points: ["Kaggle competition participation", "Industry dataset projects", "Python & R programming labs", "Tableau & Power BI training", "AWS/GCP cloud analytics"] },
    courses: ["B.Tech in CSE – Data Science"],
    contactInfo: { email: "hod_cseds@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. R. Suresh Kumar", designation: "Professor & Head", qualification: "Ph.D." },
      { name: "Dr. P. Venkata Subba Reddy", designation: "Associate Professor", qualification: "Ph.D." },
      { name: "Mr. K. Ravi", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. S. Priyanka", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. A. Naveen", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. M. Aruna", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. B. Mahesh", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. G. Keerthi", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. R. Sai Kumar", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. V. Lakshmi", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. N. Srikanth", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. K. Priya", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. S. Ramesh", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. D. Swathi", designation: "Assistant Professor", qualification: "M.Tech" },
    ],
    detailedAchievements: [
      { title: "60+ Research Publications", description: "Faculty published in data science journals", type: "faculty" },
      { title: "Kaggle Competition Medal Winners", description: "Students earned medals in Kaggle ML competitions", type: "student" },
    ],
    facilities: [
      { name: "Big Data Analytics Lab", description: "Hadoop and Spark clusters for big data processing", equipment: ["Hadoop Cluster", "Spark framework", "High-memory servers"] },
      { name: "Data Visualization Lab", description: "Tableau and Power BI training stations", equipment: ["Tableau Desktop", "Power BI", "D3.js workstations"] },
      { name: "Machine Learning Lab", description: "GPU-enabled systems for ML model training", equipment: ["NVIDIA GPUs", "Jupyter servers", "Python/R environment"] },
    ],
    patents: [
      { title: "Predictive Analytics Model for Student Performance", status: "Filed", year: "2023" },
      { title: "Real-Time Data Pipeline Architecture", status: "Published", year: "2022" },
    ],
    publications: [
      { title: "Federated Learning for Healthcare Data", type: "journal", year: "2024" },
      { title: "Time Series Forecasting using LSTM Networks", type: "conference", year: "2023" },
    ],
    consultancy: [{ title: "Data Analytics for SMEs", agency: "Local Businesses", amount: "₹2 Lakhs" }],
    events: [
      { title: "Workshop on Python for Data Science", date: "January 2024" },
      { title: "Datathon 2024 - Data Analysis Competition", date: "March 2024" },
    ],
    mous: [{ name: "Google", purpose: "Cloud Data Analytics", year: "2022" }, { name: "AWS", purpose: "Data Engineering Training", year: "2023" }],
    placement: { percentage: "95%", avgPackage: "₹6 LPA", highestPackage: "₹16 LPA", recruiters: ["TCS", "Infosys", "Wipro", "Capgemini", "Deloitte", "Accenture"] },
    studentProjects: [
      { title: "Credit Card Fraud Detection System", students: "Team of 3", description: "ML model for real-time fraud detection" },
      { title: "Sentiment Analysis Dashboard", students: "Team of 4", description: "NLP-based social media sentiment tracker" },
    ],
    subjects: [
      { name: "Introduction to Data Science", semester: 2, type: "core" },
      { name: "Statistics for Data Science", semester: 3, type: "core" },
      { name: "Machine Learning", semester: 4, type: "core" },
      { name: "Big Data Technologies", semester: 5, type: "core" },
      { name: "Data Visualization", semester: 5, type: "core" },
      { name: "Deep Learning", semester: 6, type: "core" },
      { name: "NLP", semester: 7, type: "elective" },
      { name: "Reinforcement Learning", semester: 7, type: "elective" },
    ],
    documents: [{ title: "Faculty List 2024-25", url: "http://www.mits.ac.in/department/26" }],
  },

  csecs: {
    key: "csecs",
    name: "CSE – Cyber Security",
    shortName: "CSE-CS",
    established: "2020",
    bannerImage: deptImg("csc"),
    about: "The Department of CSE – Cyber Security was established in 2020 with a focus on ethical hacking, network security, digital forensics, and cloud security. The program integrates industry certifications for comprehensive cybersecurity education.",
    vision: "To produce cybersecurity professionals capable of protecting digital infrastructure and ensuring information security.",
    mission: ["To provide comprehensive education in cybersecurity.", "To promote hands-on training in ethical hacking and penetration testing.", "To develop security professionals with industry certifications."],
    nbaAccredited: false,
    hod: { name: "Dr. S. Ravi Kumar", designation: "Professor & Head", qualification: "Ph.D. (CSE)" },
    achievements: { consultancyAmount: "₹3+ Lakhs", researchProjects: "4+", patents: "2+", publications: "40+" },
    teachingApproach: { description: "Practice-oriented curriculum with CTF competitions, ethical hacking labs, and security audits.", points: ["Capture The Flag competitions", "Ethical hacking practical labs", "Network penetration testing", "Security certifications (CEH, CompTIA)", "Cyber forensics workshops"] },
    courses: ["B.Tech in CSE – Cyber Security"],
    contactInfo: { email: "hod_csecs@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. S. Ravi Kumar", designation: "Professor & Head", qualification: "Ph.D." },
      { name: "Mr. K. Suresh", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. P. Anusha", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. V. Sai Ram", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. R. Deepa", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. N. Krishna", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. B. Mounika", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. G. Praveen", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mrs. S. Kavitha", designation: "Assistant Professor", qualification: "M.Tech" },
      { name: "Mr. M. Raju", designation: "Assistant Professor", qualification: "M.Tech" },
    ],
    detailedAchievements: [
      { title: "CTF Competition Winners", description: "Students won inter-college CTF challenges", type: "student" },
      { title: "Published 40+ papers in cybersecurity domain", description: "In international journals and conferences", type: "faculty" },
    ],
    facilities: [
      { name: "SOC Center", description: "Security Operations Center for real-time threat monitoring", equipment: ["SIEM tools", "IDS/IPS systems", "Log analyzers"] },
      { name: "Ethical Hacking Lab", description: "Kali Linux and penetration testing tools", equipment: ["Kali Linux workstations", "Metasploit", "Burp Suite"] },
      { name: "Digital Forensics Lab", description: "Computer forensics and evidence analysis", equipment: ["EnCase Forensic", "FTK Imager", "Autopsy toolkit"] },
    ],
    patents: [
      { title: "AI-based Intrusion Detection System", status: "Filed", year: "2023" },
    ],
    publications: [
      { title: "ML-based Malware Detection Framework", type: "journal", year: "2024" },
      { title: "Phishing URL Detection using Deep Learning", type: "conference", year: "2023" },
    ],
    consultancy: [{ title: "Security Audit Services", agency: "Local IT Companies", amount: "₹2 Lakhs" }],
    events: [
      { title: "Cybersecurity Awareness Week", date: "October 2023" },
      { title: "CTF Challenge 2024", date: "February 2024" },
    ],
    mous: [{ name: "EC-Council", purpose: "CEH Certification Training", year: "2022" }],
    placement: { percentage: "92%", avgPackage: "₹5.5 LPA", highestPackage: "₹15 LPA", recruiters: ["Deloitte", "KPMG", "TCS", "Infosys", "Wipro"] },
    studentProjects: [
      { title: "Network Vulnerability Scanner", students: "Team of 3", description: "Automated vulnerability scanning tool" },
    ],
    subjects: [
      { name: "Network Security", semester: 4, type: "core" },
      { name: "Ethical Hacking", semester: 5, type: "core" },
      { name: "Cryptography", semester: 5, type: "core" },
      { name: "Digital Forensics", semester: 6, type: "core" },
      { name: "Cloud Security", semester: 7, type: "elective" },
      { name: "Malware Analysis", semester: 7, type: "elective" },
    ],
    documents: [{ title: "Department Info", url: "http://www.mits.ac.in/department/27" }],
  },

  aiml: {
    key: "aiml",
    name: "Artificial Intelligence & Machine Learning",
    shortName: "AI & ML",
    established: "2020",
    bannerImage: deptImg("ai&ml"),
    about: "The Department of AI & ML was established in 2020 with a cutting-edge curriculum in deep learning, NLP, computer vision, and generative AI. The department features GPU-powered research infrastructure and industry collaborations with AI-focused companies.",
    vision: "To be a leading department in AI & ML education producing engineers and researchers capable of building intelligent systems.",
    mission: ["To provide comprehensive education in AI and ML technologies.", "To promote research in deep learning, NLP, and computer vision.", "To develop AI engineers with strong ethical values and problem-solving skills."],
    nbaAccredited: false,
    hod: { name: "Dr. S. Padma", designation: "Assoc. Professor & HOD", qualification: "Ph.D. (Bharathiar University)", image: "https://mits.ac.in/public/uploads/faculty/Padma.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/144" },
    achievements: { consultancyAmount: "₹8+ Lakhs", researchProjects: "8+", patents: "6+", publications: "80+" },
    teachingApproach: { description: "Research-driven approach with GPU cluster access, Kaggle competitions, and generative AI projects.", points: ["GPU cluster computing access", "Kaggle & competitive ML", "Generative AI hands-on projects", "Industry capstone projects", "Research paper writing workshops"] },
    courses: ["B.Tech in AI & ML"],
    contactInfo: { email: "drpadmas@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. S. Padma", designation: "Assoc. Professor & HOD", qualification: "Ph.D. (Bharathiar University)", image: "https://mits.ac.in/public/uploads/faculty/Padma.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/144" },
      { name: "Dr. M. Rajeswari", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/rajeswari.jpg", profileUrl: "https://mits.ac.in/facultyprofile/744" },
      { name: "Dr. Sandhya. E", designation: "Asst. Professor", qualification: "Ph.D. (SRMIST, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Sandhya.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/501" },
      { name: "Dr. R. Praveen Kumar", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Durgapur)", image: "https://mits.ac.in/public/uploads/faculty/Praveen Kumar.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/628" },
      { name: "Mr. Sanath Hegde", designation: "Professor of Practice", qualification: "M.B.A. (Indian Institute of Science, Bangalore)", image: "https://mits.ac.in/public/uploads/faculty/sanath.jpg", profileUrl: "https://mits.ac.in/facultyprofile/884" },
      { name: "Mr. P. Udayakumar", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (VIT, Vellore)", image: "https://mits.ac.in/public/uploads/faculty/Udayakumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/660" },
      { name: "Mr. B. S. H. Shayeez Ahamed", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Saveetha University)", image: "https://mits.ac.in/public/uploads/faculty/Ahamed.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/108" },
      { name: "Mrs. R. Usha", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (Saveetha University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7925.JPG", profileUrl: "https://mits.ac.in/facultyprofile/107" },
      { name: "Mrs. N. Geethanjali", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (Mohan Babu University)", image: "https://mits.ac.in/public/uploads/faculty/Geethanjali.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/515" },
      { name: "Mr. V. Sivaraman", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Visvesvaraya Technological University)", image: "https://mits.ac.in/public/uploads/faculty/Sivaraman.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/594" },
      { name: "Mr. Tharakeswara Raju B", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (IIT, Tirupati)", image: "https://mits.ac.in/public/uploads/faculty/tarak.JPG", profileUrl: "https://mits.ac.in/facultyprofile/684" },
      { name: "Mr. Subhas Das", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (IIIT, Nagpur)", image: "https://mits.ac.in/public/uploads/faculty/DSC_3008.JPG", profileUrl: "https://mits.ac.in/facultyprofile/737" },
      { name: "Mr. G. Nithin", designation: "Asst. Professor", qualification: "MS (VIT University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/nithin.JPG", profileUrl: "https://mits.ac.in/facultyprofile/685" },
      { name: "Mrs. D. Bhargavajyothi", designation: "Asst. Professor", qualification: "M.Tech. (MITS, JNTUA)", image: "https://mits.ac.in/public/uploads/faculty/93a2746129b622603a30e4d045391b32.jpg", profileUrl: "https://mits.ac.in/facultyprofile/686" },
    ],
    detailedAchievements: [
      { title: "GPU Research Infrastructure Established", description: "NVIDIA GPU cluster for deep learning research", type: "faculty" },
      { title: "AI Hackathon Winners", description: "Students won national AI hackathons", type: "student" },
      { title: "80+ Research Publications", description: "In AI/ML domain journals and conferences", type: "faculty" },
    ],
    facilities: [
      { name: "GPU Computing Lab", description: "NVIDIA GPU cluster for deep learning model training", equipment: ["NVIDIA A100 GPUs", "DGX Station", "High-speed interconnect"] },
      { name: "Computer Vision Lab", description: "Camera systems and image processing workstations", equipment: ["Stereo cameras", "Depth sensors", "OpenCV workstations"] },
      { name: "NLP & Speech Lab", description: "Natural language and speech processing research", equipment: ["Speech recognition systems", "Text corpus servers", "Transformer model servers"] },
    ],
    patents: [
      { title: "AI-based Medical Diagnosis System", status: "Published", year: "2023" },
      { title: "Generative AI for Content Creation", status: "Filed", year: "2024" },
      { title: "Autonomous Drone Navigation using RL", status: "Filed", year: "2023" },
    ],
    publications: [
      { title: "Vision Transformer for Medical Image Segmentation", type: "journal", year: "2024" },
      { title: "Federated Learning for Privacy-Preserving AI", type: "conference", year: "2023" },
      { title: "LLM Fine-tuning for Domain-Specific Applications", type: "journal", year: "2024" },
    ],
    consultancy: [{ title: "AI Model Development for Agri-Tech", agency: "Agri Startups", amount: "₹5 Lakhs" }],
    events: [
      { title: "AI Summit 2024", date: "March 2024" },
      { title: "Workshop on Generative AI & LLMs", date: "February 2024" },
      { title: "Deep Learning Bootcamp", date: "January 2024" },
    ],
    mous: [
      { name: "NVIDIA", purpose: "GPU Computing Partnership", year: "2022" },
      { name: "Google DeepMind", purpose: "Research Collaboration", year: "2023" },
    ],
    placement: { percentage: "96%", avgPackage: "₹8 LPA", highestPackage: "₹20 LPA", recruiters: ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "IBM"] },
    studentProjects: [
      { title: "AI-Powered Medical Diagnosis Assistant", students: "Team of 4", description: "Deep learning model for X-ray analysis" },
      { title: "Chatbot using Large Language Models", students: "Team of 3", description: "Custom LLM-based conversational AI" },
    ],
    subjects: [
      { name: "Machine Learning Fundamentals", semester: 3, type: "core" },
      { name: "Deep Learning", semester: 4, type: "core" },
      { name: "Natural Language Processing", semester: 5, type: "core" },
      { name: "Computer Vision", semester: 5, type: "core" },
      { name: "Reinforcement Learning", semester: 6, type: "core" },
      { name: "Generative AI", semester: 7, type: "elective" },
      { name: "Explainable AI", semester: 7, type: "elective" },
      { name: "AI Ethics & Responsible AI", semester: 8, type: "elective" },
    ],
    documents: [],
  },

  mba: {
    key: "mba",
    name: "Master of Business Administration",
    shortName: "MBA",
    established: "2008",
    bannerImage: deptImg("mba"),
    about: "The MBA program at MITS is AICTE approved and offers industry mentorship, live consulting projects, and a strong corporate recruitment network. The department focuses on developing strategic thinkers and ethical business leaders.",
    vision: "To cultivate strategic thinkers and ethical business leaders for global environments.",
    mission: ["To provide quality management education with industry exposure.", "To develop leadership and entrepreneurial skills.", "To promote research in business management."],
    nbaAccredited: false,
    hod: { name: "Dr. V. Siva Prasad", designation: "Professor & Head", qualification: "Ph.D. (Management)" },
    achievements: { consultancyAmount: "₹5+ Lakhs", researchProjects: "4+", patents: "0", publications: "50+" },
    teachingApproach: { description: "Case-study based pedagogy with industry mentorship and live consulting projects.", points: ["Harvard case study methodology", "Industry mentorship programs", "Business simulation exercises", "National case competitions", "Live consulting projects"] },
    courses: ["MBA (Finance, Marketing, HR, Operations)"],
    contactInfo: { email: "hod_mba@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. V. Siva Prasad", designation: "Professor & Head", qualification: "Ph.D." },
      { name: "Dr. K. Madhavi", designation: "Associate Professor", qualification: "Ph.D." },
      { name: "Mr. R. Srinivasulu", designation: "Assistant Professor", qualification: "MBA" },
      { name: "Mrs. P. Saritha", designation: "Assistant Professor", qualification: "MBA" },
      { name: "Mr. G. Venkat Rao", designation: "Assistant Professor", qualification: "MBA" },
      { name: "Mrs. K. Lavanya", designation: "Assistant Professor", qualification: "MBA" },
      { name: "Mr. S. Prasad", designation: "Assistant Professor", qualification: "MBA" },
      { name: "Mrs. M. Padma", designation: "Assistant Professor", qualification: "MBA" },
      { name: "Mr. A. Suresh", designation: "Assistant Professor", qualification: "MBA" },
      { name: "Mrs. B. Kavitha", designation: "Assistant Professor", qualification: "MBA" },
      { name: "Mr. V. Kumar", designation: "Assistant Professor", qualification: "MBA" },
      { name: "Mrs. L. Anusha", designation: "Assistant Professor", qualification: "MBA" },
    ],
    detailedAchievements: [
      { title: "National Case Competition Winners", description: "MBA students won at national B-school competitions", type: "student" },
      { title: "50+ Research Publications", description: "Faculty published in management journals", type: "faculty" },
    ],
    facilities: [
      { name: "Business Analytics Lab", description: "Data-driven decision making training", equipment: ["SPSS", "Excel Advanced", "Tableau"] },
      { name: "Finance & Trading Lab", description: "Stock market simulation", equipment: ["Bloomberg Terminal", "Trading software"] },
      { name: "Conference Hall", description: "Guest lectures and seminars", equipment: ["100-seat capacity", "AV equipment"] },
    ],
    patents: [],
    publications: [
      { title: "Impact of Digital Marketing on Consumer Behavior", type: "journal", year: "2024" },
      { title: "Financial Literacy Among Rural Entrepreneurs", type: "conference", year: "2023" },
    ],
    consultancy: [{ title: "Business Strategy Consulting", agency: "SMEs", amount: "₹2 Lakhs" }],
    events: [
      { title: "National Management Fest - SYNERGY", date: "February 2024" },
      { title: "Leadership Summit 2024", date: "March 2024" },
    ],
    mous: [
      { name: "ICFAI Business School", purpose: "Academic Exchange", year: "2021" },
      { name: "CII", purpose: "Industry Interaction", year: "2022" },
    ],
    placement: { percentage: "90%", avgPackage: "₹5 LPA", highestPackage: "₹12 LPA", recruiters: ["Deloitte", "KPMG", "HDFC", "ICICI", "Amazon", "Flipkart"] },
    studentProjects: [
      { title: "Market Research for FMCG Product Launch", students: "Team of 5", description: "Primary and secondary research for new product positioning" },
    ],
    subjects: [
      { name: "Principles of Management", semester: 1, type: "core" },
      { name: "Financial Accounting", semester: 1, type: "core" },
      { name: "Marketing Management", semester: 2, type: "core" },
      { name: "Human Resource Management", semester: 2, type: "core" },
      { name: "Business Analytics", semester: 3, type: "core" },
      { name: "Strategic Management", semester: 3, type: "core" },
      { name: "International Business", semester: 4, type: "elective" },
      { name: "Digital Marketing", semester: 4, type: "elective" },
    ],
    documents: [{ title: "Department Info", url: "http://www.mits.ac.in/department/5" }],
  },
};

// Helper to get all department keys
export const getAllDepartmentKeys = () => Object.keys(departmentsData);

// Helper to find department by key
export const getDepartmentByKey = (key: string): DepartmentData | undefined => departmentsData[key];
