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
    name: "Computer Science and Engineering",
    shortName: "CSE",
    established: "1998",
    bannerImage: deptImg("cse"),
    about: "The Department of Computer Science and Engineering was established in 1998 and has been playing a vital role in producing value-based professionals. The department offers 4-year undergraduate program and 2-year postgraduate program to cater the ever-challenging needs of technical excellence in the emerging areas of Computer Science and Engineering. The course is designed in a flexible and structured way to meet the evolving needs of the IT industry. The CSE department has eminent faculty with rich academic and industry exposure who have pursued Masters/Ph.D. Degree from prestigious institutions like NITs, IITs, and Central Universities within India and abroad. Many research activities in the domain of Artificial Intelligence (AI) and Machine Learning (ML) are under progress. The department has good interactions and MoUs with leading Industries for technology domain Training & Development. The Department is accredited by NBA (National Board of Accreditation) of All India Council for Technical Education (AICTE), New Delhi.",
    vision: "To excel in technical education and research in area of Computer Science and Engineering and to provide expert, proficient and Knowledgeable individuals with high enthusiasm to meet the Societal challenges.",
    mission: [
      "To provide an open environment to the students and faculty that promotes professional and personal growth.",
      "To impart strong theoretical and practical background across the computer science discipline with an emphasis on software development and research.",
      "To inculcate the skills necessary to continue their education after graduation, as well as for the societal needs."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. M. Sreedevi", designation: "Professor & Head", qualification: "Ph.D. (S V University)", image: "https://mits.ac.in/public/uploads/faculty/sri.jpg", profileUrl: "https://mits.ac.in/facultyprofile/140" },
    achievements: { consultancyAmount: "â‚¹25+ Lakhs", researchProjects: "15+", patents: "12+", publications: "200+" },
    teachingApproach: {
      description: "The department follows an outcome-based education (OBE) framework integrated with experiential learning methodologies.",
      points: ["Project-based learning with industry problems", "NPTEL, Coursera & edX integrated MOOCs", "Hackathons and coding competitions", "Industry mentorship programs", "IBM, Microsoft, Accenture certification tracks"]
    },
    courses: ["B.Tech in Computer Science and Engineering", "M.Tech in Computer Science and Engineering", "Ph.D. in Computer Science and Engineering"],
    contactInfo: { email: "csehod@mits.ac.in", phone: "+91-9160020784; 8571-280255; 280706" },
    faculty: [
      { name: "Dr. M. Sreedevi", designation: "Professor & Head", qualification: "Ph.D. (S V University)", image: "https://mits.ac.in/public/uploads/faculty/sri.jpg", profileUrl: "https://mits.ac.in/facultyprofile/140" },
      { name: "Dr. R. Nidhya", designation: "Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7256.JPG", profileUrl: "https://mits.ac.in/facultyprofile/83" },
      { name: "Dr. G. Arun Kumar", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7263.JPG", profileUrl: "https://mits.ac.in/facultyprofile/84" },
      { name: "Dr. R. Sudhakar", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7283.JPG", profileUrl: "https://mits.ac.in/facultyprofile/86" },
      { name: "Dr. D. J. Ashpin Pabi", designation: "Assoc. Professor", qualification: "Ph.D. (Annamalai University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7265.JPG", profileUrl: "https://mits.ac.in/facultyprofile/90" },
      { name: "Dr. Thanikaivel. B", designation: "Sr. Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/thani.jpg", profileUrl: "https://mits.ac.in/facultyprofile/749" },
      { name: "Dr. K. Sree Divya", designation: "Asst. Professor", qualification: "Ph.D. (SPMVV, Tirupati)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7933.JPG", profileUrl: "https://mits.ac.in/facultyprofile/146" },
      { name: "Dr. G. Sreenivasulu", designation: "Asst. Professor", qualification: "Ph.D. (Bharathiar University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_5445.JPG", profileUrl: "https://mits.ac.in/facultyprofile/102" },
      { name: "Dr. Kuraku Nirmala", designation: "Asst. Professor", qualification: "Ph.D. (Puducherry Technological University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7299.JPG", profileUrl: "https://mits.ac.in/facultyprofile/635" },
      { name: "Dr. Senthil Kumar. K", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/senthil(1).jpg", profileUrl: "https://mits.ac.in/facultyprofile/679" },
      { name: "Mr. Prasath. B", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/prasanth.jpg", profileUrl: "https://mits.ac.in/facultyprofile/690" },
      { name: "Mr. Nitin B. Raut", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Amrita Vishwa Vidyapeetham)", image: "https://mits.ac.in/public/uploads/faculty/6efb3321a8cd48ce48cc2b95f81fe9bf.jpg", profileUrl: "https://mits.ac.in/facultyprofile/747" },
      { name: "Ms. S. Sowmyadevi", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (SRM University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7314.JPG", profileUrl: "https://mits.ac.in/facultyprofile/447" },
      { name: "Mr. K. Sathish", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Annamalai University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7307.JPG", profileUrl: "https://mits.ac.in/facultyprofile/114" },
      { name: "Mrs. Swarna Jyothi", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (JNTUA, Anantapuramu)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7295.JPG", profileUrl: "https://mits.ac.in/facultyprofile/581" },
      { name: "Mr. Ch. Hemanand", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Andhra University )", image: "https://mits.ac.in/public/uploads/faculty/DSC_7289.JPG", profileUrl: "https://mits.ac.in/facultyprofile/468" },
      { name: "Mr. P. Kaliyamoorthi", designation: "Asst. Professor", qualification: "M.E., (Ph.D) (SRM University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7279.JPG", profileUrl: "https://mits.ac.in/facultyprofile/106" },
      { name: "Mr. E. Rajesh", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (JNTU, Kakinada)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7311.JPG", profileUrl: "https://mits.ac.in/facultyprofile/576" },
      { name: "Mr. Aleemullakhan Pathan", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (NIT, Silchar)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Aleemullakhan Pathan.jpg", profileUrl: "https://mits.ac.in/facultyprofile/101" },
      { name: "Mr. B. Galeebathullah", designation: "Asst. Professor", qualification: "M.E., (Ph.D) (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7319.JPG", profileUrl: "https://mits.ac.in/facultyprofile/97" },
      { name: "Mrs. G. B. Renuka", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (SRM University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7276.JPG", profileUrl: "https://mits.ac.in/facultyprofile/120" },
      { name: "Mrs. Sangeetha.M", designation: "Asst. Professor", qualification: "M.E., (Ph.D) (St. Peter's Institute Of Higher Education and Research)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7281.JPG", profileUrl: "https://mits.ac.in/facultyprofile/471" },
      { name: "Mrs. M. Bommy", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (NIT, Puducherry)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7284.JPG", profileUrl: "https://mits.ac.in/facultyprofile/100" },
      { name: "Mrs. Thripthi P. Balakrishnan", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Amrita Vishwa Vidyapeetham)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7287.JPG", profileUrl: "https://mits.ac.in/facultyprofile/541" },
      { name: "Mrs. Deepthi. P", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Amrita Vishwa Vidyapeetham)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7268.JPG", profileUrl: "https://mits.ac.in/facultyprofile/535" },
      { name: "Mr. Anandaraj B", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (SRM Institute of Science & Technology)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7305.JPG", profileUrl: "https://mits.ac.in/facultyprofile/104" },
      { name: "Mrs. S. Varshadevi", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Dr. M.G.R. Educational and Research Institute)", image: "https://mits.ac.in/public/uploads/faculty/varshadevi.jpg", profileUrl: "https://mits.ac.in/facultyprofile/746" },
      { name: "Mrs. P. Jayaselvi", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (SRM Institute of Science and Technology)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7926.JPG", profileUrl: "https://mits.ac.in/facultyprofile/589" },
      { name: "Mr. L. Arul Jaya Prakash", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7919.JPG", profileUrl: "https://mits.ac.in/facultyprofile/590" },
      { name: "Mrs. R. Kavi Priya", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (SRM Institute Of Science And Technology)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7273.JPG", profileUrl: "https://mits.ac.in/facultyprofile/579" },
      { name: "Mr. Vijayaganth. R", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Puducherry Technological University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7302.JPG", profileUrl: "https://mits.ac.in/facultyprofile/617" },
      { name: "Mrs. G. Vasundara Devi", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (NIT, Puducherry)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7291.JPG", profileUrl: "https://mits.ac.in/facultyprofile/110" },
      { name: "Mr. A. Kumar", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (NIT, Puducherry)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7323.JPG", profileUrl: "https://mits.ac.in/facultyprofile/456" },
      { name: "Mrs. V. Geetha", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (NIT, Mizoram)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7293.JPG", profileUrl: "https://mits.ac.in/facultyprofile/117" },
      { name: "Mr. G. Muthugurunathan", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Kalasalingam University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7274.JPG", profileUrl: "https://mits.ac.in/facultyprofile/112" },
      { name: "Mr. Ramalingam. D", designation: "Asst. Professor", qualification: "M.E.", image: "https://mits.ac.in/public/uploads/faculty/ramalingam.JPG", profileUrl: "https://mits.ac.in/facultyprofile/651" },
      { name: "Mr. Thangarasan T", designation: "Asst. Professor", qualification: "M.E.", image: "https://mits.ac.in/public/uploads/faculty/DSC_7309.JPG", profileUrl: "https://mits.ac.in/facultyprofile/103" },
      { name: "Mr. D. M. Abhinay Kanth", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/abhi.jpg", profileUrl: "https://mits.ac.in/facultyprofile/109" },
      { name: "Mr. K H Shabbeer Basha", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/DSC_7259.JPG", profileUrl: "https://mits.ac.in/facultyprofile/115" },
      { name: "Mr. T. Murali", designation: "Asst. Professor", qualification: "M.E.", image: "https://mits.ac.in/public/uploads/faculty/murali.jpg", profileUrl: "https://mits.ac.in/facultyprofile/689" },
      { name: "Mr. K. Manju Preetham", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/9c0fd543b92b2b9fb41db5a88b0eb090.JPG", profileUrl: "https://mits.ac.in/facultyprofile/118" },
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
      { title: "Web Application Development", agency: "Local Industries", amount: "â‚¹3 Lakhs" },
      { title: "Data Analytics Training Program", agency: "AP State Government", amount: "â‚¹5 Lakhs" },
      { title: "Network Infrastructure Setup", agency: "Regional Businesses", amount: "â‚¹2 Lakhs" },
    ],
    events: [
      { title: "International FDP on Emerging Trends in Computer Science", date: "31st October to 5th November 2022", description: "Organized by Department of Computer Science and Engineering." },
      { title: "International Webinar on Cyber Security Applications using Python", date: "26th October 2022", description: "Organized by Department of Computer Science and Engineering in association with ISTE Student Chapter MITS." },
      { title: "Awareness and Professional Development Programme on Cyber Security", date: "20th October 2022", description: "Organized by Department of Computer Science and Technology & Department of CSE (Cyber Security)." },
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
      avgPackage: "â‚¹6.5 LPA",
      highestPackage: "â‚¹24 LPA",
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
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/CSE%20Stock%20Register.pdf" },
      { title: "BoS 2024-25", url: "https://www.mits.ac.in/public/uploads/departments/b3eb1bb0eeb2ed4149b1683e2e47d27d.pdf" },
      { title: "BoS DTBU 2025-26", url: "https://www.mits.ac.in/public/uploads/departments/ff4a954407b62475ffaf4933ca3f9caf.pdf" },
      { title: "BoS 2025-26", url: "https://www.mits.ac.in/public/uploads/departments/ace641c64a92a3b2249bf63ea83894eb.pdf" },
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
    achievements: { consultancyAmount: "â‚¹10+ Lakhs", researchProjects: "8+", patents: "5+", publications: "100+" },
    teachingApproach: {
      description: "The department emphasizes practical learning with site visits, surveying camps, and hands-on laboratory sessions.",
      points: ["Site visits and field surveys", "BIM-integrated design projects", "Industry guest lectures", "Sustainability-focused curriculum", "Geotechnical field testing"]
    },
    courses: ["B.Tech in Civil Engineering"],
    contactInfo: { email: "civilhod@mits.ac.in", phone: "+91-9100973371; 8571-280255; 280706" },
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
      { title: "Civil Faculty Achievements 2024-25", description: "Department maintains year-wise faculty achievement records in official tab.", type: "faculty" },
      { title: "Civil Faculty Achievements 2023-24", description: "Faculty achievement updates are published annually.", type: "faculty" },
      { title: "Civil Faculty Achievements 2022-23", description: "Official year-wise achievements are available on department page.", type: "faculty" },
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
      { title: "Faculty Publications 2024-2025", type: "journal", year: "2024-25" },
      { title: "Faculty Publications 2023-2024", type: "journal", year: "2023-24" },
      { title: "Faculty Publications 2022-2023", type: "journal", year: "2022-23" },
    ],
    consultancy: [
      { title: "Soil Testing for Construction Projects", agency: "Local Builders", amount: "â‚¹3 Lakhs" },
      { title: "Structural Design Review", agency: "AP Government", amount: "â‚¹5 Lakhs" },
    ],
    events: [
      { title: "Engineers' Day Celebration", date: "15th September 2022", description: "Organized by Department of Civil Engineering commemorating Sir M. Visvesvaraya." },
      { title: "National Level Student Symposium CITA'22", date: "30th May 2022", description: "Civil Engineering Technical Augury organized by Department of Civil Engineering." },
      { title: "Industrial Visit to ROOF INDIA Exhibition", date: "21st to 23rd April 2022", description: "Organized by Department of Civil Engineering." },
    ],
    mous: [
      { name: "L&T Construction", purpose: "Industrial Training", year: "2021" },
      { name: "NHAI", purpose: "Highway Design Projects", year: "2022" },
    ],
    placement: { percentage: "80%", avgPackage: "â‚¹4.5 LPA", highestPackage: "â‚¹9 LPA", recruiters: ["L&T", "Shapoorji Pallonji", "NCC", "Ramky Group", "Megha Engineering"] },
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
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/Civil%20Stock%20Register.pdf" },
      { title: "BoS 2024-25", url: "https://mits.ac.in/public/uploads/departments/5ebd8d1eccab5799909d40d4136d8f51.pdf" },
      { title: "BoS 2023-24", url: "https://mits.ac.in/public/uploads/departments/94cd2c24256628213ab83695f17dd91d.pdf" },
      { title: "DAB 2023-24", url: "https://mits.ac.in/public/uploads/departments/fb5e44d7665f44ca9232cc905fbad821.pdf" },
    ],
  },

  eee: {
    key: "eee",
    name: "Electrical & Electronics Engineering",
    shortName: "EEE",
    established: "1998",
    bannerImage: deptImg("eee"),
    about: "The Department of Electrical & Electronics Engineering was established in 1998 and offers an undergraduate programme in EEE with strong foundations in power systems, control systems, power electronics, digital signal processing, robotics and emerging electrical domains such as renewable power generation, smart grids, and electric/hybrid vehicles. The programme has been continuously accredited and re-accredited by NBA, including Tier-I accreditation cycles. The department regularly conducts seminars, workshops, guest lectures, and technical symposiums, and sustains active research, consultancy, publications, and patents to support industry and societal needs.",
    vision: "To become a department recognized for quality education in Electrical & Electronics Engineering, with research proficiency and ethics, to meet the challenges of society.",
    mission: [
      "To impart quality education and advancements in programme studies to produce engineers with scientific temperament and moral values in EEE.",
      "To create and develop a research culture with deep commitment so industries can adopt research outcomes.",
      "To enhance technical dexterity so graduates can find domain-appropriate solutions for societal welfare."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. Manavaalan Gunasekaran", designation: "Assoc. Professor & Head", qualification: "Ph.D. (IIT, Kanpur)", image: "https://mits.ac.in/public/uploads/faculty/manavaalan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/931" },
    achievements: { consultancyAmount: "â‚¹8+ Lakhs", researchProjects: "6+", patents: "3+", publications: "80+" },
    teachingApproach: { description: "Hands-on approach with emphasis on renewable energy projects and smart grid technologies.", points: ["Power systems simulation labs", "Renewable energy installations", "Industry visits to power plants", "Smart grid research projects", "NPTEL certification courses"] },
    courses: ["B.Tech in Electrical & Electronics Engineering"],
    contactInfo: { email: "hod_eee@mits.ac.in", phone: "+91-8571-280255" },
faculty: [
      { name: "Dr. Ravindranath C Cherukuri", designation: "Professor", qualification: "Ph.D. (University of Texas at San Antonio)", image: "https://mits.ac.in/public/uploads/faculty/4ef6caba3428935531fab2cad4eb9d73.jpg", profileUrl: "https://mits.ac.in/facultyprofile/748" },
      { name: "Dr. C. Kamal Basha", designation: "Professor & Vice Principal", qualification: "Ph.D. (JNTUA, Anantapur)", image: "https://mits.ac.in/public/uploads/faculty/kamalbasha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/223" },
      { name: "Dr. A. V. Pavan Kumar", designation: "Professor & Assistant Dean", qualification: "Ph.D. (BITS-Pilani, Hyderabad)", image: "https://mits.ac.in/public/uploads/faculty/Pavan Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/224" },
      { name: "Dr. Manavaalan Gunasekaran", designation: "Assoc. Professor & Head", qualification: "Ph.D. (IIT, Kanpur)", image: "https://mits.ac.in/public/uploads/faculty/manavaalan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/931" },
      { name: "Dr. Somu Vijaya Bhaskar", designation: "Assoc. Professor", qualification: "Ph.D. (University of Florida)", image: "https://mits.ac.in/public/uploads/faculty/somu.jpg", profileUrl: "https://mits.ac.in/facultyprofile/694" },
      { name: "Dr. K. Arul Kumar", designation: "Assoc. Professor", qualification: "Ph.D. (VIT University)", image: "https://mits.ac.in/public/uploads/faculty/Dr. K. Arul Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/225" },
      { name: "Dr. K. Lakshmikhandan", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Lakshmikhandan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/226" },
      { name: "Dr. T. S. Balaji Damodhar", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Balaji%20Damodhar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/227" },
      { name: "Dr. Sarat Kumar Mishra", designation: "Asst. Professor", qualification: "Ph.D. (B.I.T., Mesra)", image: "https://mits.ac.in/public/uploads/faculty/Sarat-Mishra.jpg", profileUrl: "https://mits.ac.in/facultyprofile/713" },
      { name: "Dr. V. B. Thurai Raaj", designation: "Asst. Professor", qualification: "Ph.D. (Vignan University)", image: "https://mits.ac.in/public/uploads/faculty/Thurai Raaj.JPG", profileUrl: "https://mits.ac.in/facultyprofile/230" },
      { name: "Dr. Vineet Kumar", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Hamirpur)", image: "https://mits.ac.in/public/uploads/faculty/Vineet Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/597" },
      { name: "Dr. Satish Kumar Ramoji", designation: "Asst. Professor", qualification: "Ph.D. (NIT Silchar)", image: "https://mits.ac.in/public/uploads/faculty/satish.jfif", profileUrl: "https://mits.ac.in/facultyprofile/625" },
      { name: "Dr. Srinivas Chikkam", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Delhi)", image: "https://mits.ac.in/public/uploads/faculty/Srinivas Chikkam.JPG", profileUrl: "https://mits.ac.in/facultyprofile/586" },
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
      { name: "Mr. M. Vamsi Krishna", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/122d712dff31696427d1582613293f9e.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/207" },
      { name: "Mr. E. Raghu Babu", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/Raghu Babu.JPG", profileUrl: "https://mits.ac.in/facultyprofile/484" },
      { name: "Mr. Ramesh Kumar R", designation: "Asst. Professor", qualification: "M.E.", image: "https://mits.ac.in/public/uploads/faculty/aravana Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/505" },
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
      { title: "Power Audit for Local Industries", agency: "APSPDCL", amount: "â‚¹4 Lakhs" },
    ],
    events: [
      { title: "EEE Alumni Meet-2026", date: "4th April 2026", description: "Organized by Department of Electrical & Electronics Engineering." },
      { title: "Skill Development Program on AI in Electronics", date: "9th to 13th March 2026", description: "Five-day offline training organized by APSSDC and Department of EEE." },
      { title: "Hands-on Workshop on Real World Applications of IoT", date: "19th to 21st February 2026", description: "Three-day workshop organized by Department of EEE in association with MITS IE(I) Studentsâ€™ Chapter." },
    ],
    mous: [
      { name: "APSPDCL", purpose: "Industrial Training & Internships", year: "2021" },
      { name: "Schneider Electric", purpose: "Automation Training", year: "2022" },
    ],
    placement: { percentage: "85%", avgPackage: "â‚¹4.5 LPA", highestPackage: "â‚¹10 LPA", recruiters: ["Schneider Electric", "Siemens", "ABB", "L&T", "BHEL"] },
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
      { title: "Faculty List 2024-25", url: "https://mits.ac.in/assets/pdf/eee/EEE Faculty List AY 2024-25.pdf" },
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/EEE%20Stock%20Register.pdf" },
      { title: "BoS 2025-26", url: "https://www.mits.ac.in/public/uploads/departments/995645838ce4a60d761c4a4c41b31439.pdf" },
      { title: "BoS DTBU 2025-26", url: "https://www.mits.ac.in/public/uploads/departments/731c6de00e50600f614706ca4d6c740a.pdf" },
    ],
  },

  me: {
    key: "me",
    name: "Mechanical Engineering",
    shortName: "ME",
    established: "1998",
    bannerImage: deptImg("mech"),
    about: "The Department of Mechanical Engineering was started in 1998 and currently offers a B.Tech programme in Mechanical Engineering. The programme has received continuous NBA accreditation cycles including Tier-I accreditation. The department has strong academic governance through AC and BoS, a thriving R&D ecosystem with funded projects and consultancy, and modern industry-linked laboratories established with core companies such as Siemens and Dassault Systems. The department focuses on employability, innovation, and research-driven learning aligned with present industrial demands.",
    vision: "To be a centre of excellence in Mechanical Engineering that develops quality human resources contributing to technological and socio-economic development.",
    mission: [
      "To provide globally competent mechanical engineers through experienced and committed faculty.",
      "To nurture graduates with scientific temperament, rational thinking, and humanistic approach for career excellence.",
      "To promote excellence in teaching and research through collaborative activities."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. S. Baskaran", designation: "Assoc. Professor & Head", qualification: "Ph.D. (NIT, Tiruchirappalli)", image: "https://mits.ac.in/public/uploads/faculty/Baskaran.JPG", profileUrl: "https://mits.ac.in/facultyprofile/306" },
    achievements: { consultancyAmount: "â‚¹12+ Lakhs", researchProjects: "10+", patents: "4+", publications: "120+" },
    teachingApproach: { description: "Emphasis on hands-on training through workshops, CAD/CAM labs, and industry-oriented projects.", points: ["Advanced CAD/CAM training", "Manufacturing workshop practice", "Industry visits", "Design competitions", "ANSYS simulation projects"] },
    courses: ["B.Tech in Mechanical Engineering"],
    contactInfo: { email: "mehod@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. C. Yuvaraj", designation: "Professor & Vice Chancellor (I/c)", qualification: "Ph.D. (Bangalore University)", image: "https://mits.ac.in/public/uploads/faculty/principal.JPG", profileUrl: "https://mits.ac.in/facultyprofile/245" },
      { name: "Dr. I. Arun", designation: "Professor", qualification: "Ph.D. (NIT, Tiruchirappalli)", image: "https://mits.ac.in/public/uploads/faculty/Arun.JPG", profileUrl: "https://mits.ac.in/facultyprofile/303" },
      { name: "Dr. V. Vamsidhar", designation: "Assoc. Professor", qualification: "Ph.D. (JNTUA, Anantapur)", image: "https://mits.ac.in/public/uploads/faculty/vamsidhar.jpg", profileUrl: "https://mits.ac.in/facultyprofile/304" },
      { name: "Dr. S. Baskaran", designation: "Assoc. Professor & Head", qualification: "Ph.D. (NIT, Tiruchirappalli)", image: "https://mits.ac.in/public/uploads/faculty/Baskaran.JPG", profileUrl: "https://mits.ac.in/facultyprofile/306" },
      { name: "Dr. K. V. Nagesha", designation: "Assoc. Professor", qualification: "Ph.D. (NITK, Surathkal)", image: "https://mits.ac.in/public/uploads/faculty/Nagesha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/307" },
      { name: "Dr. P. Sivaiah", designation: "Assoc. Professor", qualification: "Ph.D. (NIT, Karnataka)", image: "https://mits.ac.in/public/uploads/faculty/1743130408070.jpg", profileUrl: "https://mits.ac.in/facultyprofile/308" },
      { name: "Dr. R. Prithivirajan", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Prithivirajan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/309" },
      { name: "Dr. Praveen Kumar Bannaravuri", designation: "Sr. Asst. Professor", qualification: "Ph.D. (NIT, Manipur)", image: "https://mits.ac.in/public/uploads/faculty/praveen.JPG", profileUrl: "https://mits.ac.in/facultyprofile/728" },
      { name: "Dr. Kamlesh Kumar", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Rourkela)", image: "https://mits.ac.in/public/uploads/faculty/PHOTO_ Dr. Kamlesh Kumar(1).png", profileUrl: "https://mits.ac.in/facultyprofile/311" },
      { name: "Dr. Guniputi Balanarasimha", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Karnataka)", image: "https://mits.ac.in/public/uploads/faculty/bala.png", profileUrl: "https://mits.ac.in/facultyprofile/702" },
      { name: "Dr. Anantha Raman L", designation: "Asst. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Anantha Raman L.JPG", profileUrl: "https://mits.ac.in/facultyprofile/315" },
      { name: "Dr. Arun Kumar.D", designation: "Asst. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Thota S S Bhaskara Rao.JPG", profileUrl: "https://mits.ac.in/facultyprofile/316" },
      { name: "Dr. Manish Sharma", designation: "Asst. Professor", qualification: "Ph.D. (SVNIT, Surat)", image: "https://mits.ac.in/public/uploads/faculty/3c1c3241831b334db972daa4ffa6a6a2.jpg", profileUrl: "https://mits.ac.in/facultyprofile/318" },
      { name: "Dr. Thrinadh Jadam", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Rourkela)", image: "https://mits.ac.in/public/uploads/faculty/thrinadh.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/707" },
      { name: "Dr. Thota S S Bhaskara Rao", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Rourkela)", image: "https://mits.ac.in/public/uploads/faculty/thota.jpg", profileUrl: "https://mits.ac.in/facultyprofile/596" },
      { name: "Dr. G. Veeresalingam", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Rourkela)", image: "https://mits.ac.in/public/uploads/faculty/Veeresalingam.JPG", profileUrl: "https://mits.ac.in/facultyprofile/613" },
      { name: "Dr. Jagannath Pattar", designation: "Asst. Professor", qualification: "Ph.D. (SSAHE, Tumkur)", image: "https://mits.ac.in/public/uploads/faculty/Jagannath Pattar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/334" },
      { name: "Dr. Ved Prakash", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Rourkela)", image: "https://mits.ac.in/public/uploads/faculty/Ved Prakash.JPG", profileUrl: "https://mits.ac.in/facultyprofile/629" },
      { name: "Dr. Gejendhiran. S", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Puducherry)", image: "https://mits.ac.in/public/uploads/faculty/Gejendhiran.JPG", profileUrl: "https://mits.ac.in/facultyprofile/619" },
      { name: "Dr. Muthu Lakshmanan", designation: "Asst. Professor", qualification: "Ph.D. (SIMATS University)", image: "https://mits.ac.in/public/uploads/faculty/Muthu Laxmanan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/327" },
      { name: "Dr. A. Pruthvi Deep", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Durgapur)", image: "https://mits.ac.in/public/uploads/faculty/Pruthvi Deep.JPG", profileUrl: "https://mits.ac.in/facultyprofile/623" },
      { name: "Mr. S. Manoj Kumar", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Manoj Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/329" },
      { name: "Mr. Pujari Rajesh", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (NIT, Tiruchirappalli)", image: "https://mits.ac.in/public/uploads/faculty/Pujari Rajesh.JPG", profileUrl: "https://mits.ac.in/facultyprofile/333" },
      { name: "Mr. G. Kumar", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (VELS, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/G. Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/326" },
      { name: "Mr. P. Mohammed Rizwan Ali", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/rizwan ali.JPG", profileUrl: "https://mits.ac.in/facultyprofile/622" },
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
      { title: "Material Testing Services", agency: "Local Industries", amount: "â‚¹4 Lakhs" },
      { title: "CAD Design for SMEs", agency: "Small Enterprises", amount: "â‚¹3 Lakhs" },
    ],
    events: [
      { title: "Workshop on 3D Printing & Additive Manufacturing", date: "February 2024" },
      { title: "National Conference on Advanced Manufacturing", date: "March 2024" },
    ],
    mous: [
      { name: "Ashok Leyland", purpose: "Automotive Training", year: "2021" },
      { name: "TVS Motors", purpose: "Industrial Internships", year: "2022" },
    ],
    placement: { percentage: "88%", avgPackage: "â‚¹5 LPA", highestPackage: "â‚¹11 LPA", recruiters: ["Ashok Leyland", "TVS", "Mahindra", "Tata Motors", "L&T"] },
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
      { title: "Faculty List 2024-25", url: "https://mits.ac.in/public/uploads/departments/4715af8e6a43fe8dfdc8ef6c72de286f.pdf" },
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/Mechanical%20Stock%20Register.pdf" },
      { title: "BoS 2024-25", url: "https://mits.ac.in/public/uploads/departments/e24f944adcb19447e4b42ed17e83ab04.pdf" },
      { title: "IAAB 2024-25", url: "https://mits.ac.in/public/uploads/departments/3a98077bfb1d9689a33ce475cf2551a7.pdf" },
    ],
  },

  ece: {
    key: "ece",
    name: "Electronics & Communication Engineering",
    shortName: "ECE",
    established: "2005",
    bannerImage: deptImg("ece"),
    about: "The Department of Electronics & Communication Engineering was established in 1998 for B.Tech and currently offers undergraduate and postgraduate programmes. The department emphasizes all-round development of students, faculty, and staff through a strong academic environment, qualified faculty, and research infrastructure. Since autonomous status, the department has continuously evolved curriculum through AC and BoS to make students industry-ready. The programme is NBA accredited under AICTE.",
    vision: "To excel in technical education and research in Electronics and Communication Engineering and produce skilled, trained, and competent individuals to meet present-day societal challenges.",
    mission: [
      "To impart high quality education to enable students to face challenges in ECE.",
      "To provide infrastructure and environment for innovation, creativity, and research among students and faculty.",
      "To inculcate ethical and lifelong learning values to address societal needs."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. S. Rajasekaran", designation: "Professor & Head", qualification: "Ph.D.", image: "https://mits.ac.in/public/uploads/faculty/f8983b3c4255e5b248d9b51eb8f62e38.jpeg" },
    achievements: { consultancyAmount: "â‚¹15+ Lakhs", researchProjects: "12+", patents: "8+", publications: "150+" },
    teachingApproach: { description: "The department integrates simulation-based learning with hands-on hardware projects.", points: ["VLSI design with Cadence tools", "IoT prototyping with Arduino/Raspberry Pi", "PCB design and fabrication", "Communication system simulation", "MATLAB & Simulink projects"] },
    courses: ["B.Tech in Electronics & Communication Engineering"],
    contactInfo: { email: "hod_ece@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. Rama S Komaragiri", designation: "Professor & Dean-Academics", qualification: "Ph.D. (Technical University of Darmstadt, Germany)", image: "https://mits.ac.in/public/uploads/faculty/rama.jpg", profileUrl: "https://mits.ac.in/facultyprofile/735" },
      { name: "Dr. P. Ramanathan", designation: "Professor & Principal", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Dr. P. Ramanathan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/172" },
      { name: "Dr. Sanjay Kumar C. Gowre", designation: "Professor", qualification: "Ph.D. (IIT, Kharagpur)", image: "https://mits.ac.in/public/uploads/faculty/sanjay.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1018" },
      { name: "Dr. S. Rajasekaran", designation: "Professor & Head", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/f8983b3c4255e5b248d9b51eb8f62e38.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/173" },
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
      { title: "PCB Design Services", agency: "Electronics Firms", amount: "â‚¹5 Lakhs" },
      { title: "IoT Sensor Network Design", agency: "Agriculture Dept", amount: "â‚¹6 Lakhs" },
    ],
    events: [
      { title: "National Level Technical Symposium ECLECTICA 2K26", date: "1st April 2026", description: "Organized by Department of Electronics and Communication Engineering." },
      { title: "Seminar on Semiconductor Innovation", date: "24th February 2026", description: "Seminar on 'From Silicon to Systems: Powering the future with Semiconductor Innovation' organized by ECE with MITS IETE Students Forum." },
      { title: "MoU Signing Ceremony with Sense Semiconductor", date: "24th February 2026", description: "Organized by Department of ECE in association with Industry Relation Cell MITS." },
    ],
    mous: [
      { name: "Texas Instruments", purpose: "Embedded Systems Training", year: "2021" },
      { name: "Qualcomm", purpose: "5G Research Collaboration", year: "2022" },
      { name: "BSNL", purpose: "Telecom Training", year: "2020" },
    ],
    placement: { percentage: "90%", avgPackage: "â‚¹5 LPA", highestPackage: "â‚¹12 LPA", recruiters: ["Qualcomm", "Samsung", "Intel", "TCS", "Infosys", "Wipro"] },
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
    documents: [
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/ECE%20Stock%20Register.pdf" },
      { title: "BoS 2022-23", url: "https://mits.ac.in/public/uploads/departments/016da0715e97c1d3d0a16083565a153f.pdf" },
      { title: "IAAB 2023-24", url: "https://mits.ac.in/public/uploads/departments/0cb69816b5667fe09b0e368687a8dbed.pdf" },
      { title: "BOS 2021-22", url: "https://mits.ac.in/public/uploads/departments/7af6d7984f445b07f1d5868977680e08.pdf" },
    ],
  },

  cseds: {
    key: "cseds",
    name: "CSE - Data Science",
    shortName: "CSE-DS",
    established: "2020",
    bannerImage: deptImg("csd"),
    about: "The Department of CSE - Data Science was established in 2019, offering specialized curriculum in data analytics, machine learning, and big data technologies. The program prepares students for the modern data-driven economy.",
    vision: "To be a center of excellence in data science education producing data-driven problem solvers.",
    mission: ["To provide comprehensive education in data science and analytics.", "To promote research in machine learning and big data.", "To develop skilled professionals for the data economy."],
    nbaAccredited: false,
    hod: { name: "Dr. S. Kusuma", designation: "Asst. Professor & Head", qualification: "Ph.D. (VIT University)", image: "https://mits.ac.in/public/uploads/faculty/Kusuma.JPG", profileUrl: "https://mits.ac.in/facultyprofile/98" },
    achievements: { consultancyAmount: "INR 5+ Lakhs", researchProjects: "6+", patents: "4+", publications: "60+" },
    teachingApproach: { description: "Data-centric approach with Kaggle competitions, industry datasets, and hands-on ML projects.", points: ["Kaggle competition participation", "Industry dataset projects", "Python & R programming labs", "Tableau & Power BI training", "AWS/GCP cloud analytics"] },
    courses: ["B.Tech in CSE - Data Science"],
    contactInfo: { email: "dshod@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. K. Nirmala Devi", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/nirmaladevi.png", profileUrl: "https://mits.ac.in/facultyprofile/729" },
      { name: "Dr. S. Kusuma", designation: "Asst. Professor & Head", qualification: "Ph.D. (VIT University)", image: "https://mits.ac.in/public/uploads/faculty/Kusuma.JPG", profileUrl: "https://mits.ac.in/facultyprofile/98" },
      { name: "Dr. S. Gopalakrishnan", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Gopalakrishnan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/509" },
      { name: "Dr. M. Kiran Kumar", designation: "Asst. Professor", qualification: "Ph.D. (VIT University)", image: "https://mits.ac.in/public/uploads/faculty/kiran.jfif", profileUrl: "https://mits.ac.in/facultyprofile/408" },
      { name: "Dr. K. Pugazharasi", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Pugazharasi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/548" },
      { name: "Mr. T. Balaji", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Balaji.JPG", profileUrl: "https://mits.ac.in/facultyprofile/603" },
      { name: "Mrs. R. Roopa", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Sri Venkateswara University)", image: "https://mits.ac.in/public/uploads/faculty/Roopa.JPG", profileUrl: "https://mits.ac.in/facultyprofile/508" },
      { name: "Mrs. Vidhyashree B", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (Visvesvaraya Technological University)", image: "https://mits.ac.in/public/uploads/faculty/Vidhyashree.JPG", profileUrl: "https://mits.ac.in/facultyprofile/428" },
      { name: "Mrs. F. Twinkle Graf", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Twinkle.JPG", profileUrl: "https://mits.ac.in/facultyprofile/588" },
      { name: "Mr. Sheik Jamil Ahmed", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Presidency University)", image: "https://mits.ac.in/public/uploads/faculty/Shaik Jamil Ahmed.JPG", profileUrl: "https://mits.ac.in/facultyprofile/662" },
      { name: "Mr. A. Kalyan Kumar", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (Acharya Nagarjuna University)", image: "https://mits.ac.in/public/uploads/faculty/Kalyan Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/432" },
      { name: "Mrs. S. Manjula", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (Annamalai University)", image: "https://mits.ac.in/public/uploads/faculty/Manjula Prabakaran.JPG", profileUrl: "https://mits.ac.in/facultyprofile/123" },
      { name: "Mr. K. Durga Charan", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (JNTU, Kakinada)", image: "https://mits.ac.in/public/uploads/faculty/Durga Charan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/133" },
      { name: "Mrs. T. Swetha", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (Amrita Vishwa Vidyapeetham)", image: "https://mits.ac.in/public/uploads/faculty/Swetha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/431" },
      { name: "Mr. Vishnukumar Ravula", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (VIT University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_2849.JPG", profileUrl: "https://mits.ac.in/facultyprofile/661" },
      { name: "Mr. Rajkumar. G", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (St. Peter's Institute Of Higher Education and Research)", image: "https://mits.ac.in/public/uploads/faculty/Rajkumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/470" },
      { name: "Mr. G. Kiran Kumar", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Puducherry Technological University)", image: "https://mits.ac.in/public/uploads/faculty/Kiran Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/511" },
      { name: "Mrs. Anuradha Prudhivi", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Dayananda Sagar University)", image: "https://mits.ac.in/public/uploads/faculty/Anuradha Prudhivi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/134" },
      { name: "Mr. Arockia Raj Abraham", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Saveetha University)", image: "https://mits.ac.in/public/uploads/faculty/Arockia Raj Abraham.JPG", profileUrl: "https://mits.ac.in/facultyprofile/426" },
      { name: "Mrs. M. Nandhini", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Puducherry Technological University)", image: "https://mits.ac.in/public/uploads/faculty/Nandhini.JPG", profileUrl: "https://mits.ac.in/facultyprofile/453" },
      { name: "Mr. Rantu Das", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/Rantu Das.JPG", profileUrl: "https://mits.ac.in/facultyprofile/553" },
      { name: "Mr. B. Bhaskar", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/Bhaskar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/116" },
      { name: "Mr. Nukala Bhargav Krishna", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/krishna.jpg", profileUrl: "https://mits.ac.in/facultyprofile/750" },
      { name: "Mr. Yawar Ayub Matta", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/Yawar Ayub Matta.JPG", profileUrl: "https://mits.ac.in/facultyprofile/664" },
    ],
    detailedAchievements: [
      { title: "Faculty Achievements 2023-24", description: "Department maintains year-wise faculty achievement records on official page.", type: "faculty" },
      { title: "Student Achievements 2024-25", description: "Department highlights student achievements year-wise in the achievements tab.", type: "student" },
      { title: "Student Achievements 2023-24", description: "Official records include academic and co-curricular achievement updates.", type: "student" },
    ],
    facilities: [
      { name: "Digital Classrooms", description: "State-of-the-art digital classrooms for interactive learning.", equipment: ["Digital boards", "Projectors", "Audio systems"] },
      { name: "Air-Conditioned Seminar Hall", description: "Department seminar hall used for technical talks and events.", equipment: ["Presentation systems", "Seating and PA setup"] },
      { name: "IT-Enabled Computing Labs", description: "Department infrastructure includes IT-enabled labs for practical sessions.", equipment: ["High-performance workstations", "Programming toolchains"] },
    ],
    patents: [
      { title: "Predictive Analytics Model for Student Performance", status: "Filed", year: "2023" },
      { title: "Real-Time Data Pipeline Architecture", status: "Published", year: "2022" },
    ],
    publications: [
      { title: "Faculty Publications 2024-25", type: "journal", year: "2024-25" },
      { title: "Faculty Publications 2023-24", type: "journal", year: "2023-24" },
      { title: "Faculty Publications 2022-23", type: "journal", year: "2022-23" },
    ],
    consultancy: [{ title: "Data Analytics for SMEs", agency: "Local Businesses", amount: "INR 2 Lakhs" }],
    events: [
      { title: "National Level Technical Symposium DFesta-2026", date: "8th April 2026", description: "Organized by Department of CSE - Data Science." },
      { title: "Technical Talk on Fostering Innovation and Entrepreneurship in Engineering Education", date: "16th March 2026", description: "Organized by Departments of CSE-(AI) and CSE-(DS) under AICTE Sponsored DPS Scheme." },
      { title: "Career Talk on Process Mining and AI in Process Intelligence", date: "13th March 2026", description: "Organized by Department of Training & Skill Development in association with CSE - Data Science." },
    ],
    mous: [{ name: "Google", purpose: "Cloud Data Analytics", year: "2022" }, { name: "AWS", purpose: "Data Engineering Training", year: "2023" }],
    placement: { percentage: "2023-24: 50 offers out of 62 eligible", avgPackage: "As per placement cell records", highestPackage: "As per placement cell records", recruiters: ["TCS", "Infosys", "Wipro", "Capgemini", "Deloitte", "Accenture"] },
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
    documents: [
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/CSD%20Stock%20Register.pdf" },
      { title: "BoS DTBU 2025-26", url: "https://mits.ac.in/public/uploads/departments/134cb472d81ed7a3efdf49d4f9830ed4.pdf" },
      { title: "BoS 2024-25", url: "https://mits.ac.in/public/uploads/departments/61632879672f9d1af4e7af1e07014ba4.pdf" },
      { title: "MAGDATAZINE - 2023-24", url: "https://mits.ac.in/public/uploads/departments/a4baf88bf27ad0d2e296b8217cbc57fa.pdf" },
    ],
  },

  csecs: {
    key: "csecs",
    name: "CSE - Cyber Security",
    shortName: "CSE-CS",
    established: "2020",
    bannerImage: deptImg("csc"),
    about: "The Department of CSE - Cyber Security was established in 2020 with a focus on ethical hacking, network security, digital forensics, and cloud security. The program integrates industry certifications for comprehensive cybersecurity education.",
    vision: "To produce cybersecurity professionals capable of protecting digital infrastructure and ensuring information security.",
    mission: ["To provide comprehensive education in cybersecurity.", "To promote hands-on training in ethical hacking and penetration testing.", "To develop security professionals with industry certifications."],
    nbaAccredited: false,
    hod: { name: "Dr. B. Persis Urbana IVY", designation: "Professor & Head", qualification: "Ph.D. (Sathyabama University)", image: "https://mits.ac.in/public/uploads/faculty/persis.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1022" },
    achievements: { consultancyAmount: "INR 3+ Lakhs", researchProjects: "4+", patents: "2+", publications: "40+" },
    teachingApproach: { description: "Practice-oriented curriculum with CTF competitions, ethical hacking labs, and security audits.", points: ["Capture The Flag competitions", "Ethical hacking practical labs", "Network penetration testing", "Security certifications (CEH, CompTIA)", "Cyber forensics workshops"] },
    courses: ["B.Tech in CSE - Cyber Security"],
    contactInfo: { email: "cshod@mits.ac.in", phone: "+91-9100973396; 8571-280255; 280706" },
    faculty: [
      { name: "Dr. Chandra Prakash Gupta", designation: "Professor & Dean-School of Computing", qualification: "Ph.D. (University of Kota)", image: "https://mits.ac.in/public/uploads/faculty/gupta.png", profileUrl: "https://mits.ac.in/facultyprofile/730" },
      { name: "Dr. B. Persis Urbana IVY", designation: "Professor & Head", qualification: "Ph.D. (Sathyabama University)", image: "https://mits.ac.in/public/uploads/faculty/persis.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1022" },
      { name: "Dr. Sachikanta Dash", designation: "Assoc. Professor", qualification: "Ph.D. (Berhampur University)", image: "https://mits.ac.in/public/uploads/faculty/dash.JPG", profileUrl: "https://mits.ac.in/facultyprofile/745" },
      { name: "Dr. Brahm Prakash", designation: "Assoc. Professor", qualification: "Ph.D. (IKG Punjab Technical University)", image: "https://mits.ac.in/public/uploads/faculty/bhram.png", profileUrl: "https://mits.ac.in/facultyprofile/1085" },
      { name: "Dr. K. P. Manikandan", designation: "Asst. Professor", qualification: "Ph.D. (JNTU, Kakinada)", image: "https://mits.ac.in/public/uploads/faculty/Manikandan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/91" },
      { name: "Mr. Nagarajan. B", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (VIT, Vellore)", image: "https://mits.ac.in/public/uploads/faculty/nagara-Artguru.png", profileUrl: "https://mits.ac.in/facultyprofile/706" },
      { name: "Mrs. A. Komala", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (UoH, Hyderabad)", image: "https://mits.ac.in/public/uploads/faculty/Komala.JPG", profileUrl: "https://mits.ac.in/facultyprofile/95" },
      { name: "Mrs. M. Sri Lakshmi Preethi", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (Presidency University)", image: "https://mits.ac.in/public/uploads/faculty/Sri Lakshmi Preethi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/562" },
      { name: "Mr. T. Niranjan Babu", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (VELTECH University)", image: "https://mits.ac.in/public/uploads/faculty/Niranjan Babu.JPG", profileUrl: "https://mits.ac.in/facultyprofile/614" },
      { name: "Mrs. M. Fathima Begum", designation: "Asst. Professor", qualification: "M.E., (Ph.D) (VIT University)", image: "https://mits.ac.in/public/uploads/faculty/Fathima Begum.JPG", profileUrl: "https://mits.ac.in/facultyprofile/566" },
      { name: "Mr. Goli Nageswararao", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (IIT, Tirupati)", image: "https://mits.ac.in/public/uploads/faculty/goli.JPG", profileUrl: "https://mits.ac.in/facultyprofile/719" },
      { name: "Mr. M. Mutharasu", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_2084.JPG", profileUrl: "https://mits.ac.in/facultyprofile/489" },
      { name: "Mr. T. N. Siva Kumar", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Puducherry Technological University)", image: "https://mits.ac.in/public/uploads/faculty/f43f6669d7fab5aea3a814db847d9a46.JPG", profileUrl: "https://mits.ac.in/facultyprofile/665" },
      { name: "Mr. Roni Das", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Vikrant University)", image: "https://mits.ac.in/public/uploads/faculty/roni.JPG", profileUrl: "https://mits.ac.in/facultyprofile/741" },
      { name: "Mr. Gowtham A", designation: "Asst. Professor", qualification: "M.E.", image: "https://mits.ac.in/public/uploads/faculty/Gowtham.JPG", profileUrl: "https://mits.ac.in/facultyprofile/113" },
    ],
    detailedAchievements: [
      { title: "Faculty Achievements 2023-24", description: "Department publishes annual faculty achievements in the official achievements tab.", type: "faculty" },
      { title: "Student Achievements 2023-24", description: "Student achievement records are maintained year-wise by the department.", type: "student" },
      { title: "Student Achievements 2022-23", description: "Official page includes year-wise student performance highlights.", type: "student" },
    ],
    facilities: [
      { name: "Digital Classrooms", description: "IT-enabled classrooms support cybersecurity-focused teaching and demonstrations.", equipment: ["Digital boards", "Projectors", "Networked systems"] },
      { name: "Department Labs", description: "Lab facilities support practical sessions in security, systems, and computing.", equipment: ["Configured lab workstations", "Security software stack"] },
      { name: "Air-Conditioned Seminar Hall", description: "Used for workshops, hackathons, and technical seminars.", equipment: ["Presentation systems", "Audio setup"] },
    ],
    patents: [
      { title: "AI-based Intrusion Detection System", status: "Filed", year: "2023" },
    ],
    publications: [
      { title: "ML-based Malware Detection Framework", type: "journal", year: "2024" },
      { title: "Phishing URL Detection using Deep Learning", type: "conference", year: "2023" },
    ],
    consultancy: [{ title: "Security Audit Services", agency: "Local IT Companies", amount: "INR 2 Lakhs" }],
    events: [
      { title: "Workshop cum Hackathon on Ethical Hacking and Cyber Security", date: "2nd to 21st March 2026", description: "Organized by CSE - Cyber Security with IIIC and ISTE Student Chapter." },
      { title: "International Conference on Cyber and AI Security", date: "9th to 10th March 2026", description: "Organized by Department of CSE - Cyber Security." },
      { title: "National Level Technical Symposium EPICS 2K26", date: "26th February 2026", description: "Organized by Department of CSE - Cyber Security." },
    ],
    mous: [{ name: "EC-Council", purpose: "CEH Certification Training", year: "2022" }],
    placement: { percentage: "92%", avgPackage: "INR 5.5 LPA", highestPackage: "INR 15 LPA", recruiters: ["Deloitte", "KPMG", "TCS", "Infosys", "Wipro"] },
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
    documents: [
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/CS%20Stock%20register.pdf" },
      { title: "BoS DTBU 2025-26", url: "https://mits.ac.in/public/uploads/departments/ff1445758c7e035a46406f1ad1313fc6.pdf" },
      { title: "BoS 2025-26", url: "https://mits.ac.in/public/uploads/departments/4d63589b6b4b722a7d486b5ed5985382.pdf" },
      { title: "IAAB 2025-26", url: "https://mits.ac.in/public/uploads/departments/42577665d2b14fd0d4a8bcb325c6b965.pdf" },
    ],
  },

  ai: {
    key: "ai",
    name: "Computer Science and Engineering - Artificial Intelligence",
    shortName: "CSE-AI",
    established: "2020",
    bannerImage: deptImg("ai"),
    about: "The Department of Artificial Intelligence offers 4-year degree in Artificial Intelligence, which is established in the year 2020. The course is flexible and has been structured to meet the evolving needs of the IT industry. The College Academic Council, Board of Studies of the department strive to provide quality education and most advanced curriculum and syllabus to make the students industry ready and excel in the contemporary business world. B. Tech. in Artificial Intelligence (AI) is an undergraduate programme with advanced learning solutions imparting knowledge of advanced innovations like Artificial Intelligence, Machine Learning and Deep Learning. The main goal of artificial intelligence (AI) is to program computers to use example data or experience to solve a real-life / real-time problem.",
    vision: "To develop socially responsible, globally competent and skilled professionals with ethics through education and research in the field of Artificial intelligence.",
    mission: [
      "M1: To educate the students in fundamental principles of Mathematics, Statistics and Artificial Intelligence with the required infrastructure and well qualified faculty.",
      "M2: To provide state-of-the art computing laboratory facilities for strengthening innovation, research & development.",
      "M3: To motivate students to emerge as entrepreneurs with self-learning abilities, team spirit and leadership qualities through continuous industry-institute interaction."
    ],
    nbaAccredited: false,
    hod: { name: "Dr. R. Kalpana", designation: "Professor & Head", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_9033.JPG", profileUrl: "https://mits.ac.in/facultyprofile/80" },
    achievements: { consultancyAmount: "â‚¹8+ Lakhs", researchProjects: "8+", patents: "6+", publications: "80+" },
    teachingApproach: { description: "Research-driven approach with GPU cluster access, Kaggle competitions, and generative AI projects.", points: ["GPU cluster computing access", "Kaggle & competitive ML", "Generative AI hands-on projects", "Industry capstone projects", "Research paper writing workshops"] },
    courses: ["B.Tech in Artificial Intelligence"],
    contactInfo: { email: "aihod@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. R. Kalpana", designation: "Professor & Head", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_9033.JPG", profileUrl: "https://mits.ac.in/facultyprofile/80" },
      { name: "Dr. Ben Sujin", designation: "Professor", qualification: "Ph.D. (Karunya University)", image: "https://mits.ac.in/public/uploads/faculty/bensu.png", profileUrl: "https://mits.ac.in/facultyprofile/564" },
      { name: "Dr. S. Satheesh Kumar", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/sateesh.png", profileUrl: "https://mits.ac.in/facultyprofile/743" },
      { name: "Dr. K. Chokkanathan", designation: "Assoc. Professor", qualification: "Ph.D. (Veltech University)", image: "https://mits.ac.in/public/uploads/faculty/Chokkanathan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/121" },
      { name: "Dr. A. Poongodai", designation: "Asst. Professor", qualification: "Ph.D. (Pondicherry University)", image: "https://mits.ac.in/public/uploads/faculty/Poongodai.JPG", profileUrl: "https://mits.ac.in/facultyprofile/557" },
      { name: "Dr. Vamsi Bandi", designation: "Asst. Professor", qualification: "Ph.D. (Lincoln University College, Malaysia)", image: "https://mits.ac.in/public/uploads/faculty/Vamsi Bandi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/122" },
      { name: "Dr. Purandhar N", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Purandhar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/609" },
      { name: "Dr. K. Hemalatha", designation: "Asst. Professor", qualification: "Ph.D. (SPMVV, Tirupathi)", image: "https://mits.ac.in/public/uploads/faculty/Hemalatha.JPG", profileUrl: "https://mits.ac.in/facultyprofile/418" },
      { name: "Dr. G. Jenifa", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Jenifa.JPG", profileUrl: "https://mits.ac.in/facultyprofile/551" },
      { name: "Dr. R. Rampriya", designation: "Asst. Professor", qualification: "Ph.D (Annamalai University )", image: "https://mits.ac.in/public/uploads/faculty/Rampriya.JPG", profileUrl: "https://mits.ac.in/facultyprofile/547" },
      { name: "Mr. Y. Ravi Raju", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (K L University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7883.JPG", profileUrl: "https://mits.ac.in/facultyprofile/155" },
      { name: "Mr. K. Chandra Sekhar", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (GITAM University)", image: "https://mits.ac.in/public/uploads/faculty/K. Chandra Sekhar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/494" },
      { name: "Mr. J. Viswanath", designation: "Asst. Professor", qualification: "M.E., (Ph.D) (Jain University)", image: "https://mits.ac.in/public/uploads/faculty/Viswanath.JPG", profileUrl: "https://mits.ac.in/facultyprofile/129" },
      { name: "Mr. P. Raguraman", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (Jain University)", image: "https://mits.ac.in/public/uploads/faculty/Raguraman.JPG", profileUrl: "https://mits.ac.in/facultyprofile/427" },
      { name: "Mr. Praneel Kumar Peruru", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (JNTU Anantapur)", image: "https://mits.ac.in/public/uploads/faculty/peruru.jpg", profileUrl: "https://mits.ac.in/facultyprofile/676" },
      { name: "Mr. Vasudevan M", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Puducherry Technological University)", image: "https://mits.ac.in/public/uploads/faculty/Vasudevan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/488" },
      { name: "Mr. Kiran Palakeeti", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Puducherry Technological University)", image: "https://mits.ac.in/public/uploads/faculty/Mr. Kiran Palakeeti.JPG", profileUrl: "https://mits.ac.in/facultyprofile/497" },
      { name: "Mr. Toralkar Pawan", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Visvesvaraya Technological University (VTU))", image: "https://mits.ac.in/public/uploads/faculty/Toralkar Pawan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/138" },
      { name: "Mr. K. Mahammad", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (JNTU, Anantapur)", image: "https://mits.ac.in/public/uploads/faculty/Mahammad.JPG", profileUrl: "https://mits.ac.in/facultyprofile/403" },
      { name: "Mrs. A. Naga Lakshmi", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Amrita University)", image: "https://mits.ac.in/public/uploads/faculty/Naga Lakshmi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/475" },
      { name: "Mrs. A. Esther Merlin", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Visvesvaraya Technological University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_2848.JPG", profileUrl: "https://mits.ac.in/facultyprofile/659" },
      { name: "Ms. N. Mohana Priya", designation: "Asst. Professor", qualification: "M.Tech", image: "https://mits.ac.in/public/uploads/faculty/Mohana Priya.JPG", profileUrl: "https://mits.ac.in/facultyprofile/406" },
      { name: "Mr. Surya Bahadur", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/surya-bahudur.JPG", profileUrl: "https://mits.ac.in/facultyprofile/722" },
      { name: "Mrs. R. Dhanalakshmi", designation: "Asst. Professor", qualification: "M.E.", image: "https://mits.ac.in/public/uploads/faculty/Dhanalakshmi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/126" },
      { name: "Mr. D. Jaganathan", designation: "Asst. Professor", qualification: "M.Tech", image: "https://mits.ac.in/public/uploads/faculty/Jaganathan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/457" },
      { name: "Mr. Sreenath Kocharala", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/Sreenath Kocharala.JPG", profileUrl: "https://mits.ac.in/facultyprofile/599" },
    ],
    detailedAchievements: [
      { title: "Achievements Tab Status", description: "Official department tab currently indicates achievements will be updated soon.", type: "faculty" },
      { title: "AI Powered Solution Expo 2025-26", description: "Department conducted an innovation-driven AI/Industry 4.0 prototype demo day.", type: "student" },
    ],
    facilities: [
      { name: "Digital Classrooms", description: "State-of-the-art digital classrooms support AI-enabled teaching workflows.", equipment: ["Digital boards", "Projectors", "Network-enabled systems"] },
      { name: "Department Labs", description: "Lab facilities are listed in department infrastructure for practical AI sessions.", equipment: ["Computing workstations", "Programming environments"] },
      { name: "Air-Conditioned Seminar Hall", description: "Seminar hall supports talks, workshops, and research interactions.", equipment: ["Presentation systems", "Audio-visual setup"] },
    ],
    patents: [
      { title: "AI-based Medical Diagnosis System", status: "Published", year: "2023" },
      { title: "Generative AI for Content Creation", status: "Filed", year: "2024" },
      { title: "Autonomous Drone Navigation using RL", status: "Filed", year: "2023" },
    ],
    publications: [
      { title: "Publication Records", type: "journal", year: "Will be updated soon" },
    ],
    consultancy: [{ title: "AI Model Development for Agri-Tech", agency: "Agri Startups", amount: "â‚¹5 Lakhs" }],
    events: [
      { title: "AI Powered Solution Expo", date: "7th April 2026", description: "Innovation driven exhibition Demo Day for AI / Industry 4.0 prototypes organized by Department of CSE - Artificial Intelligence." },
      { title: "AI Innovation Workshop using LangChain and MCP", date: "17th March 2026", description: "Organized by Department of CSE - Artificial Intelligence." },
      { title: "Hands-on Workshop on AWS and Docker", date: "16th March 2026", description: "Industrial View of Cloud Computing workshop organized by Department of CSE - Artificial Intelligence." },
    ],
    mous: [
      { name: "NVIDIA", purpose: "GPU Computing Partnership", year: "2022" },
      { name: "Google DeepMind", purpose: "Research Collaboration", year: "2023" },
    ],
    placement: { percentage: "96%", avgPackage: "â‚¹8 LPA", highestPackage: "â‚¹20 LPA", recruiters: ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "IBM"] },
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
    documents: [
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/CAI%20Stock%20Register.pdf" },
      { title: "BOS 2025-26", url: "https://mits.ac.in/public/uploads/departments/c113d7cb15132aba80706010f82e7817.pdf" },
      { title: "IAAB-2025-26", url: "https://mits.ac.in/public/uploads/departments/ffb04bfeb3972fec2a32218964aecb15.pdf" },
      { title: "BOS 2024-25", url: "https://mits.ac.in/public/uploads/departments/4b0edb027df8d3f8c3c0c53679b5ff5b.pdf" },
    ],
  },

  aiml: {
    key: "aiml",
    name: "Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    shortName: "AI and ML",
    established: "2023",
    bannerImage: deptImg("ai&ml"),
    about: "The Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning) and Computer Science and Engineering (Networks) was established in 2023. The department offers four-year undergraduate degree program designed to be flexible and aligned with the evolving demands of the information technology industry. The College Academic Council and the department's Board of Studies are committed to deliver a high-quality education with an advanced curriculum, ensuring that students are industry-ready and prepared to excel in the modern business environment.",
    vision: "To be a centre of excellence in Artificial Intelligence and Machine Learning, driving cutting-edge research, innovation, and academic excellence to contribute to technological advancements and societal progress.",
    mission: [
      "M1: To foster analytical thinking, problem-solving, and interdisciplinary knowledge for future Artificial Intelligence Professionals through innovative curriculum and Collaborative initiatives that contribute to scientific and technological progress.",
      "M2: To strengthen industry partnerships and entrepreneurial ventures to develop ethical AI solutions for socio-economic and technological development."
    ],
    nbaAccredited: false,
    hod: { name: "Dr. S. Padma", designation: "Assoc. Professor & Head", qualification: "Ph.D. (Bharathiar University)", image: "https://mits.ac.in/public/uploads/faculty/Padma.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/144" },
    achievements: { consultancyAmount: "â‚¹8+ Lakhs", researchProjects: "8+", patents: "6+", publications: "80+" },
    teachingApproach: { description: "Research-driven approach with GPU cluster access, Kaggle competitions, and generative AI projects.", points: ["GPU cluster computing access", "Kaggle & competitive ML", "Generative AI hands-on projects", "Industry capstone projects", "Research paper writing workshops"] },
    courses: ["B.Tech in Artificial Intelligence and Machine Learning"],
    contactInfo: { email: "aimlhod@mits.ac.in", phone: "+91-9154291788; 8571-280255; 280706" },
    faculty: [
      { name: "Mr. Sanath Hegde", designation: "Professor of Practice", qualification: "M.B.A. (IISC, Bangalore)", image: "https://www.mits.ac.in//public/uploads/faculty/sanath.jpg", profileUrl: "https://mits.ac.in/facultyprofile/884" },
      { name: "Dr. M. Rajeswari", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University )", image: "https://mits.ac.in/public/uploads/faculty/rajeswari.jpg", profileUrl: "https://mits.ac.in/facultyprofile/744" },
      { name: "Dr. S. Padma", designation: "Assoc. Professor & Head", qualification: "Ph.D. (Bharathiar University)", image: "https://mits.ac.in/public/uploads/faculty/Padma.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/144" },
      { name: "Dr. Sandhya. E", designation: "Asst. Professor", qualification: "Ph.D. (SRMIST, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Sandhya.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/501" },
      { name: "Dr. R. Praveen Kumar", designation: "Asst. Professor", qualification: "Ph.D. (NIT, Durgapur)", image: "https://mits.ac.in/public/uploads/faculty/Praveen Kumar.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/628" },
      { name: "Mr. P. Udayakumar", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (VIT, Vellore)", image: "https://mits.ac.in/public/uploads/faculty/Udayakumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/660" },
      { name: "Mr. B. S. H. Shayeez Ahamed", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (Saveetha University)", image: "https://mits.ac.in/public/uploads/faculty/Ahamed.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/108" },
      { name: "Mrs. R. Usha", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (Saveetha University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7925.JPG", profileUrl: "https://mits.ac.in/facultyprofile/107" },
      { name: "Mrs. N. Geethanjali", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D) (Mohan Babu University)", image: "https://mits.ac.in/public/uploads/faculty/Geethanjali.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/515" },
      { name: "Mr. V. Sivaraman", designation: "Asst. Professor", qualification: "M.E., (Ph.D.) (Visvesvaraya Technological University)", image: "https://mits.ac.in/public/uploads/faculty/Sivaraman.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/594" },
      { name: "Mr. Tharakeswara Raju B", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (IIT, Tirupati)", image: "https://mits.ac.in/public/uploads/faculty/tarak.JPG", profileUrl: "https://mits.ac.in/facultyprofile/684" },
      { name: "Mr. Subhas Das", designation: "Asst. Professor", qualification: "M.Tech., (Ph.D.) (IIIT, Nagpur)", image: "https://mits.ac.in/public/uploads/faculty/DSC_3008.JPG", profileUrl: "https://mits.ac.in/facultyprofile/737" },
      { name: "Mr. G. Nithin", designation: "Asst. Professor", qualification: "MS", image: "https://mits.ac.in/public/uploads/faculty/nithin.JPG", profileUrl: "https://mits.ac.in/facultyprofile/685" },
      { name: "Mrs. D. Bhargavajyothi", designation: "Asst. Professor", qualification: "M.Tech", image: "https://mits.ac.in/public/uploads/faculty/93a2746129b622603a30e4d045391b32.jpg", profileUrl: "https://mits.ac.in/facultyprofile/686" },
    ],
    detailedAchievements: [
      { title: "Achievements Tab Status", description: "Official AIML achievements section currently marked to be updated shortly.", type: "faculty" },
      { title: "Industry Readiness Programme 2025-26", description: "Department conducted skill development programme for AIML engineers.", type: "student" },
    ],
    facilities: [
      { name: "Class Rooms", description: "Department class room infrastructure is maintained for regular academic delivery.", equipment: ["Smart boards", "Projection systems"] },
      { name: "Labs", description: "Department labs are listed in infrastructure and are progressively expanded.", equipment: ["Computing systems", "Programming toolchains"] },
      { name: "Seminar Hall", description: "Air-conditioned seminar hall is available for technical and co-curricular activities.", equipment: ["Audio-visual systems", "Presentation setup"] },
    ],
    patents: [
      { title: "AI-based Medical Diagnosis System", status: "Published", year: "2023" },
      { title: "Generative AI for Content Creation", status: "Filed", year: "2024" },
      { title: "Autonomous Drone Navigation using RL", status: "Filed", year: "2023" },
    ],
    publications: [
      { title: "Journals", type: "journal", year: "To be updated shortly" },
      { title: "Conferences", type: "conference", year: "To be updated shortly" },
    ],
    consultancy: [{ title: "AI Model Development for Agri-Tech", agency: "Agri Startups", amount: "â‚¹5 Lakhs" }],
    events: [
      { title: "Skill Development Programme for AIML Engineers", date: "6th April 2026", description: "Organized by Department of CSE - Artificial Intelligence and Machine Learning." },
      { title: "Online FDP on Next Generation Cyber Defense with Deep Learning", date: "16th to 21st March 2026", description: "Six-day online FDP organized by Department of CSE - Artificial Intelligence and Machine Learning." },
      { title: "Workshop on Interactive Game Development using Scratch", date: "13th March 2026", description: "One-day workshop organized by Department of CSE - Artificial Intelligence and Machine Learning." },
    ],
    mous: [
      { name: "NVIDIA", purpose: "GPU Computing Partnership", year: "2022" },
      { name: "Google DeepMind", purpose: "Research Collaboration", year: "2023" },
    ],
    placement: { percentage: "96%", avgPackage: "â‚¹8 LPA", highestPackage: "â‚¹20 LPA", recruiters: ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "IBM"] },
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
    documents: [
      { title: "Stock Register", url: "https://mits.ac.in/assets/pdf/stock-registers/Stock_Register_CSE_AIML.pdf" },
      { title: "BoS CSE (AI and ML) 2025-26", url: "https://mits.ac.in/public/uploads/departments/CSE_AIML_BOS_AY_2025-2026.pdf" },
      { title: "BoS CSE (AI and ML) DTBU 2025-26", url: "https://mits.ac.in/public/uploads/departments/MITS_Univ_CSE_AIML_BOS_AY_2025-2026.pdf" },
      { title: "IAAB CSE (AI and ML) 2025-26", url: "https://mits.ac.in/public/uploads/departments/CSE(AI and ML) IAAB 2025-26.pdf" },
    ],
  },

  mca: {
    key: "mca",
    name: "Computer Applications",
    shortName: "MCA",
    established: "2004",
    bannerImage: deptImg("mca"),
    about: "The Department of Computer Applications has grown steadily since 2004 and currently offers a three-year MCA and a two-year MCA (Direct Second Year) programme. The programmes are AICTE governed and aligned to industry needs through contemporary curriculum updates. The department emphasizes value-based education, strong academic outcomes, modern labs, structured academic processes, mentoring, and regular FDPs/workshops. The MCA programme is NBA accredited under AICTE and has consistently strong placement outcomes.",
    vision: "To be the source of producing competent computer application professionals in academic and research activities to serve industry and society.",
    mission: [
      "To empower students with computer application knowledge through state-of-the-art infrastructure and curriculum.",
      "To groom students into competent professionals in emerging technologies through industry-specific programmes.",
      "To inculcate ethical values, leadership, and managerial skills in students."
    ],
    nbaAccredited: true,
    hod: { name: "Dr. N. Naveen Kumar", designation: "Professor & Head", qualification: "Ph.D. (S V University, Tirupathi)", image: "https://mits.ac.in/public/uploads/faculty/Naveen Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/254" },
    achievements: { consultancyAmount: "â‚¹6+ Lakhs", researchProjects: "6+", patents: "4+", publications: "90+" },
    teachingApproach: { description: "Outcome-based teaching with industry projects, case studies, and research-oriented labs.", points: ["Industry-oriented mini and major projects", "Hands-on training in full-stack and enterprise development", "Research paper and patent mentoring", "Guest lectures from IT professionals", "Internship-integrated learning"] },
    courses: ["Bachelor of Computer Applications", "Master of Computer Applications"],
    contactInfo: { email: "mcahod@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. S. V. S. Ganga Devi", designation: "Professor", qualification: "Ph.D. (SPMVV, Tirupathi)", image: "https://mits.ac.in/public/uploads/faculty/Ganga Devi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/253" },
      { name: "Dr. N. Naveen Kumar", designation: "Professor & Head", qualification: "Ph.D. (S V University, Tirupathi)", image: "https://mits.ac.in/public/uploads/faculty/Naveen Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/254" },
      { name: "Dr. M. Saravanamuthu", designation: "Assoc. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Saravanamuthu.JPG", profileUrl: "https://mits.ac.in/facultyprofile/257" },
      { name: "Dr. K. Nirmala Devi", designation: "Assoc. Professor", qualification: "Ph.D., (Anna university)", image: "https://mits.ac.in/public/uploads/faculty/nir.jpg", profileUrl: "https://mits.ac.in/facultyprofile/600" },
      { name: "Dr. K. Prathapchandran", designation: "Asst. Professor", qualification: "Ph.D. (The Gandhigram Rural Institute)", image: "https://mits.ac.in/public/uploads/faculty/pratap.JPG", profileUrl: "https://mits.ac.in/facultyprofile/736" },
      { name: "Dr. R. Maruthamuthu", designation: "Asst. Professor", qualification: "Ph.D. (Anna University, Chennai)", image: "https://mits.ac.in/public/uploads/faculty/Maruthamuthu.JPG", profileUrl: "https://mits.ac.in/facultyprofile/260" },
      { name: "Dr. A. Althaf Ali", designation: "Asst. Professor", qualification: "Ph.D. (Bharathiar University)", image: "https://mits.ac.in/public/uploads/faculty/fb78e50c6be0622546160aa3ebc31f58.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/262" },
      { name: "Dr. Srinivasan Jagannathan", designation: "Asst. Professor", qualification: "Ph.D. (Bharathiar University)", image: "https://mits.ac.in/public/uploads/faculty/Srinivasan Jagannathan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/263" },
      { name: "Dr. T. Saravanan", designation: "Asst. Professor", qualification: "Ph.D. (Bharathidasan University)", image: "https://mits.ac.in/public/uploads/faculty/T. Saravanan.JPG", profileUrl: "https://mits.ac.in/facultyprofile/616" },
      { name: "Dr. N. Nirmala Devi", designation: "Asst. Professor", qualification: "Ph.D. (Bharathiar University)", image: "https://mits.ac.in/public/uploads/faculty/N. Nirmala Devi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/544" },
      { name: "Dr. Radhika K", designation: "Asst. Professor", qualification: "Ph.D. (Bharathidasan University )", image: "https://mits.ac.in/public/uploads/faculty/rad.JPG", profileUrl: "https://mits.ac.in/facultyprofile/611" },
      { name: "Dr. J. Jude Moses Anto Devakanth", designation: "Asst. Professor", qualification: "Ph.D. (Manonmaniam Sundaranar University)", image: "https://mits.ac.in/public/uploads/faculty/jude.jpeg", profileUrl: "https://mits.ac.in/facultyprofile/634" },
      { name: "Dr. Saravanan Thirunavukarasu", designation: "Asst. Professor", qualification: "Ph.D. (Anna University)", image: "https://mits.ac.in/public/uploads/faculty/Saravanan Thirunavukarasu.JPG", profileUrl: "https://mits.ac.in/facultyprofile/264" },
      { name: "Mrs. S. Suganya", designation: "Asst. Professor", qualification: "M.C.A, (Ph.D.) (SRM Institute of Science and Technology)", image: "https://mits.ac.in/public/uploads/faculty/Suganya.JPG", profileUrl: "https://mits.ac.in/facultyprofile/639" },
      { name: "Mr. G. R. Hemanth Kumar", designation: "Asst. Professor", qualification: "M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/hemanth.jpg", profileUrl: "https://mits.ac.in/facultyprofile/125" },
      { name: "Mr. S. Suresh", designation: "Asst. Professor", qualification: "M.C.A., (Ph.D.) (NIT Trichy)", image: "https://mits.ac.in/public/uploads/faculty/Suresh.JPG", profileUrl: "https://mits.ac.in/facultyprofile/268" },
      { name: "Mr. P. Hanok", designation: "Asst. Professor", qualification: "M.C.A., (Ph.D.) (NIT Trichy)", image: "https://mits.ac.in/public/uploads/faculty/Hanok.JPG", profileUrl: "https://mits.ac.in/facultyprofile/462" },
      { name: "Mr. P. Seshu Kumar", designation: "Asst. Professor", qualification: "M.C.A., M.Tech., (Ph.D) (JNTU Kakinada)", image: "https://mits.ac.in/public/uploads/faculty/Seshu Kumar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/473" },
      { name: "Mrs. Roopa", designation: "Asst. Professor", qualification: "M.C.A., M.Tech.", image: "https://mits.ac.in/public/uploads/faculty/Roopa Prasad.JPG", profileUrl: "https://mits.ac.in/facultyprofile/506" },
      { name: "Mr. Repana Mallikarjuna", designation: "Asst. Professor", qualification: "M.C.A., M.Tech", image: "https://mits.ac.in/public/uploads/faculty/malli.JPG", profileUrl: "https://mits.ac.in/facultyprofile/678" },
      { name: "Mrs. K. Kavitha", designation: "Asst. Professor", qualification: "M.C.A., M.Tech., (Ph.D) (NIT, Puducherry)", image: "https://mits.ac.in/public/uploads/faculty/Untitled.jpg", profileUrl: "https://mits.ac.in/facultyprofile/460" },
    ],
    detailedAchievements: [
      { title: "MCA Faculty Achievements 2025-26", description: "Department publishes year-wise faculty achievements in the official achievements tab.", type: "faculty" },
      { title: "MCA Faculty Achievements 2024-25", description: "Official annual records include academic and research accomplishments.", type: "faculty" },
      { title: "MCA Faculty Achievements 2023-24", description: "Achievements are maintained and updated year-wise.", type: "faculty" },
    ],
    facilities: [
      { name: "Class Rooms", description: "Department has sufficient class rooms supporting regular academic activities.", equipment: ["Digital teaching aids", "Projection systems"] },
      { name: "Department Labs", description: "Labs are available beyond curriculum requirements and used through weekly schedules.", equipment: ["Programming workstations", "Practical lab infrastructure"] },
      { name: "Department Library and Seminar Hall", description: "Dedicated library and seminar hall support learning, project work, and technical events.", equipment: ["Reference resources", "Audio-visual seminar setup"] },
    ],
    patents: [
      { title: "Smart Workflow Automation for Campus Services", status: "Filed", year: "2024" },
    ],
    publications: [
      { title: "Faculty Publications 2024-2025", type: "journal", year: "2024-25" },
      { title: "Faculty Publications 2023-2024", type: "journal", year: "2023-24" },
      { title: "Faculty Publications 2022-2023", type: "journal", year: "2022-23" },
    ],
    consultancy: [{ title: "Web Application Development Support", agency: "Local Organizations", amount: "â‚¹2 Lakhs" }],
    events: [
      { title: "Workshop on Machine Learning: From Fundamentals to Future Frontiers", date: "22nd December 2025", description: "Organized by Department of Computer Applications in association with ISTE, MITS." },
      { title: "Workshop on Generative AI Using Microservices Architecture", date: "13th June 2025", description: "One-day workshop organized by Department of Computer Applications in association with ISTE and IIC." },
      { title: "Workshop on NS3 for Cybersecurity through Cloud-based Innovations", date: "29th to 30th January 2025", description: "Two-day workshop organized by Department of Computer Applications in association with ISTE." },
    ],
    mous: [{ name: "Industry Partners (IT)", purpose: "Internships and project collaborations", year: "2024" }],
    placement: { percentage: "95%", avgPackage: "â‚¹8 LPA", highestPackage: "â‚¹14 LPA", recruiters: ["TCS", "Infosys", "Wipro", "Accenture", "Cognizant"] },
    studentProjects: [
      { title: "Enterprise Task Automation Platform", students: "Team of 4", description: "Workflow automation system for institutional operations" },
      { title: "AI-enabled Resume Screening Tool", students: "Team of 3", description: "ML-based profile matching for recruitment use-cases" },
    ],
    subjects: [
      { name: "Advanced Algorithms", semester: 1, type: "core" },
      { name: "Software Architecture", semester: 1, type: "core" },
      { name: "Cloud Computing", semester: 2, type: "core" },
      { name: "Artificial Intelligence", semester: 2, type: "core" },
      { name: "Enterprise Application Development", semester: 3, type: "core" },
      { name: "Data Science for Applications", semester: 3, type: "elective" },
      { name: "Cyber Security for Applications", semester: 4, type: "elective" },
      { name: "DevOps and MLOps", semester: 4, type: "elective" },
    ],
    documents: [
      { title: "BoS 2024-25", url: "https://mits.ac.in/public/uploads/departments/3ce2d90ae1fbe764f9eefdf900e2a803.pdf" },
      { title: "BoS 2023-24", url: "https://mits.ac.in/public/uploads/departments/40e13e2e004ed338002c36fc28347f68.pdf" },
      { title: "IAAB 2024-25", url: "https://mits.ac.in/public/uploads/departments/a81dde5b99179d390058f64e20235c06.pdf" },
      { title: "IAAB 2023-24", url: "https://mits.ac.in/public/uploads/departments/5add1cae928258f5fe7f0c97efe0fd58.pdf" },
    ],
  },

  mba: {
    key: "mba",
    name: "Management Studies",
    shortName: "MBA",
    established: "2004",
    bannerImage: deptImg("mba"),
    about: "The Department of Management Studies offers a full-time MBA programme started in 2004, governed by AICTE, with specializations in HR, Marketing, Systems, and Finance. The department operates with strong infrastructure and continuously collaborates with industry and academic institutions. Academic Council and BoS drive curriculum quality to make students industry-ready. The MBA programme under the department is NBA accredited under AICTE.",
    vision: "To become a globally recognized centre of excellence in management by building managerial competencies and preparing visionary global business leaders.",
    mission: ["To empower students to face real-time business situations and foster entrepreneurship.", "To facilitate industry-driven learning among students and faculty.", "To provide a platform for knowledge creation and dissemination through relevant infrastructure.", "To contribute to socio-economic development through excellence in teaching and research."],
    nbaAccredited: true,
    hod: { name: "Dr. Bhanu Sree Reddy", designation: "Professor & Dean-School of Management", qualification: "Ph.D. (Sri Venkateswara University)", image: "https://mits.ac.in/public/uploads/faculty/bhanu.png", profileUrl: "https://mits.ac.in/facultyprofile/701" },
    achievements: { consultancyAmount: "â‚¹5+ Lakhs", researchProjects: "4+", patents: "0", publications: "50+" },
    teachingApproach: { description: "Case-study based pedagogy with industry mentorship and live consulting projects.", points: ["Harvard case study methodology", "Industry mentorship programs", "Business simulation exercises", "National case competitions", "Live consulting projects"] },
    courses: ["Bachelor of Business Administration", "Master of Business Administration"],
    contactInfo: { email: "mbahod@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. Sremmant Basu", designation: "Professor & Dean-Administration, IR & UGC Affairs", qualification: "Ph.D. (IIT, Kharagpur)", image: "https://mits.ac.in/public/uploads/faculty/basu(1).jpg", profileUrl: "https://mits.ac.in/facultyprofile/269" },
      { name: "Dr. Bhanu Sree Reddy", designation: "Professor & Dean-School of Management", qualification: "Ph.D. (Sri Venkateswara University)", image: "https://mits.ac.in/public/uploads/faculty/bhanu.png", profileUrl: "https://mits.ac.in/facultyprofile/701" },
      { name: "Dr. Nagarajan. G", designation: "Professor", qualification: "Ph.D. (Bharathidasan University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_6987.JPG", profileUrl: "https://mits.ac.in/facultyprofile/636" },
      { name: "Dr. D. Pradeep Kumar", designation: "Professor & Registrar (I/c)", qualification: "Ph.D. (S K University, Ananthapur)", image: "https://mits.ac.in/public/uploads/faculty/pradeep.jfif", profileUrl: "https://mits.ac.in/facultyprofile/270" },
      { name: "Dr. N. Gangisetty", designation: "Professor", qualification: "Ph.D. (S V University,Tirupathi)", image: "https://mits.ac.in/public/uploads/faculty/gangi.JPG", profileUrl: "https://mits.ac.in/facultyprofile/271" },
      { name: "Dr. K. V. Geetha Devi", designation: "Assoc. Professor", qualification: "Ph.D. (S K University, Anantapur)", image: "https://mits.ac.in/public/uploads/faculty/DSC_6966.JPG", profileUrl: "https://mits.ac.in/facultyprofile/274" },
      { name: "Dr. N. Seshadri", designation: "Asst. Professor", qualification: "Ph.D. (JNTUA Anantapur)", image: "https://mits.ac.in/public/uploads/faculty/DSC_6973.JPG", profileUrl: "https://mits.ac.in/facultyprofile/276" },
      { name: "Dr. Venkateswarlu Karumuri", designation: "Asst. Professor", qualification: "Ph.D. (Andhra University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_6997.JPG", profileUrl: "https://mits.ac.in/facultyprofile/554" },
      { name: "Dr. E. Gnanaprasuna", designation: "Asst. Professor", qualification: "Ph.D. (S V University, Tirupati)", image: "https://mits.ac.in/public/uploads/faculty/DSC_6991.JPG", profileUrl: "https://mits.ac.in/facultyprofile/537" },
      { name: "Dr. B. Rajesh Kumar", designation: "Asst. Professor", qualification: "Ph.D. (Andhra University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7000.JPG", profileUrl: "https://mits.ac.in/facultyprofile/499" },
      { name: "Dr. G. Thouseef Ahamed", designation: "Asst. Professor", qualification: "Ph.D. (Sri Krishnadevaraya University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7021.JPG", profileUrl: "https://mits.ac.in/facultyprofile/640" },
      { name: "Dr. V V Subba Rao Adhikari", designation: "Asst. Professor", qualification: "Ph.D. (Tata Institute of Social Sciences )", image: "https://mits.ac.in/public/uploads/faculty/subba.jpg", profileUrl: "https://mits.ac.in/facultyprofile/718" },
      { name: "Dr. Kosaraju Sireesha", designation: "Asst. Professor", qualification: "Ph.D. (SPMVV, Tirupati))", image: "https://mits.ac.in/public/uploads/faculty/kosaraju.JPG", profileUrl: "https://mits.ac.in/facultyprofile/712" },
      { name: "Dr. Prem Sundar. M", designation: "Asst. Professor", qualification: "Ph.D. (NIT - Tiruchirappalli)", image: "https://mits.ac.in/public/uploads/faculty/prem.jfif", profileUrl: "https://mits.ac.in/facultyprofile/726" },
      { name: "Dr. Kolati Yeliyya", designation: "Asst. Professor", qualification: "Ph.D. (NIT - Puducherry)", image: "https://mits.ac.in/public/uploads/faculty/kolati.png", profileUrl: "https://mits.ac.in/facultyprofile/727" },
      { name: "Mr. Roja Kiran", designation: "Asst. Professor", qualification: "M.B.A., (Ph.D.) (Andhra University )", image: "https://mits.ac.in/public/uploads/faculty/DSC_7005.JPG", profileUrl: "https://mits.ac.in/facultyprofile/539" },
      { name: "Mr. V. Venkata Rao", designation: "Asst. Professor", qualification: "M.B.A., M.Phil.", image: "https://mits.ac.in/public/uploads/faculty/DSC_7012.JPG", profileUrl: "https://mits.ac.in/facultyprofile/292" },
      { name: "Mr. B. Sreekanth", designation: "Asst. Professor", qualification: "M.B.A.", image: "https://mits.ac.in/public/uploads/faculty/DSC_6964.JPG", profileUrl: "https://mits.ac.in/facultyprofile/399" },
      { name: "Mrs. Mythili N", designation: "Asst. Professor", qualification: "M.B.A.", image: "https://mits.ac.in/public/uploads/faculty/myth.JPG", profileUrl: "https://mits.ac.in/facultyprofile/1079" },
    ],
    detailedAchievements: [
      { title: "MBA Faculty Achievements 2024-25", description: "Department records faculty achievements year-wise in the achievements tab.", type: "faculty" },
      { title: "MBA Faculty Achievements 2023-24", description: "Annual faculty achievement records are maintained on official page.", type: "faculty" },
      { title: "MBA Faculty Achievements 2022-23", description: "Department publishes year-wise achievement updates for faculty.", type: "faculty" },
    ],
    facilities: [
      { name: "Business Analytics Lab", description: "Data-driven decision making training", equipment: ["SPSS", "Excel Advanced", "Tableau"] },
      { name: "Finance & Trading Lab", description: "Stock market simulation", equipment: ["Bloomberg Terminal", "Trading software"] },
      { name: "Conference Hall", description: "Guest lectures and seminars", equipment: ["100-seat capacity", "AV equipment"] },
    ],
    patents: [],
    publications: [
      { title: "Faculty Publications 2024-2025", type: "journal", year: "2024-25" },
      { title: "Faculty Publications 2023-2024", type: "journal", year: "2023-24" },
      { title: "Faculty Publications 2022-2023", type: "journal", year: "2022-23" },
    ],
    consultancy: [{ title: "Business Strategy Consulting", agency: "SMEs", amount: "â‚¹2 Lakhs" }],
    events: [
      { title: "Alumni Guest Lecture on Health Insurance Career Opportunities", date: "19th October 2024", description: "Organized by Department of Management Studies." },
      { title: "Alumni Guest Lecture on Surviving in the Corporate World", date: "27th June 2024", description: "Organized by Department of Management Studies." },
      { title: "Alumni Guest Lecture on Career Opportunities in Amazon", date: "22nd February 2024", description: "Organized by Department of Management Studies." },
    ],
    mous: [
      { name: "ICFAI Business School", purpose: "Academic Exchange", year: "2021" },
      { name: "CII", purpose: "Industry Interaction", year: "2022" },
    ],
    placement: { percentage: "90%", avgPackage: "â‚¹5 LPA", highestPackage: "â‚¹12 LPA", recruiters: ["Deloitte", "KPMG", "HDFC", "ICICI", "Amazon", "Flipkart"] },
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
    documents: [
      { title: "Faculty Initiatives on Teaching and Learning", url: "https://mits.ac.in/assets/pdf/mba/Faculty Initiatives on Teaching and learning-MBA.pdf" },
      { title: "BoS 2024-25", url: "https://mits.ac.in/public/uploads/departments/9b48d30c4372e6d4448b7e1343864fb3.pdf" },
      { title: "IAAB 2024-25", url: "https://mits.ac.in/public/uploads/departments/1d8fb739bdb0a8a2ff230e7ca05b7ff5.pdf" },
      { title: "DAB 2024-25", url: "https://mits.ac.in/public/uploads/departments/c488b4a26a4da652bf7ccc3906c2637c.pdf" },
    ],
  },

  bsh: {
    key: "bsh",
    name: "Basic Sciences & Humanities",
    shortName: "BSH",
    established: "2004",
    bannerImage: deptImg("cse"),
    about: "The Department of Basic Sciences & Humanities offers foundational subjects including English and Foreign Languages, Mathematics, Physics, Chemistry, and Humanities. The department supports first-year engineering education through a structured and time-tested curriculum, communication and personality development, and preparation support for competitive exams. It operates under autonomous curriculum governance with continuous updates through academic bodies.",
    vision: "To become a centre of excellence in language and foundational competencies by empowering global communication and multidisciplinary academic readiness.",
    mission: [
      "To provide students with comprehensive education in language, sciences, and humanities with strong conceptual foundations.",
      "To nurture multilingual, culturally sensitive, and globally competent learners.",
      "To empower students to engage thoughtfully in diverse local and global social contexts."
    ],
    nbaAccredited: false,
    hod: { name: "Dr. Prageetha G Raju", designation: "Professor & Head - Humanities", qualification: "Ph.D." },
    achievements: { consultancyAmount: "-", researchProjects: "-", patents: "-", publications: "Year-wise records" },
    teachingApproach: {
      description: "Interdisciplinary foundational training with communication labs, core sciences, mathematics, and humanities modules integrated for first-year engineering outcomes.",
      points: [
        "Foundation courses for all engineering streams",
        "Language and communication skill development",
        "Analytical and mathematical reasoning training",
        "Laboratory-oriented physics and chemistry learning",
        "Bridge and induction academic support"
      ]
    },
    courses: [
      "Common Core Courses for B.Tech First Year",
      "English & Foreign Languages",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Humanities"
    ],
    contactInfo: { email: "humhod@mits.ac.in", phone: "+91-8571-280255" },
    faculty: [
      { name: "Dr. Prageetha G Raju", designation: "Professor & Head", qualification: "Ph.D. (Osmania University)", image: "https://mits.ac.in/public/uploads/faculty/pragathi.png", profileUrl: "https://mits.ac.in/facultyprofile/704.html" },
      { name: "Dr. Sudhakar Beedam", designation: "Assoc. Professor", qualification: "Ph.D. (EFLU)", image: "https://mits.ac.in/public/uploads/faculty/sudhakar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/691.html" },
      { name: "Dr. S. Shanmuga Priya", designation: "Assoc. Professor", qualification: "Ph.D. (SPMVV, Women's University)", image: "https://mits.ac.in/public/uploads/faculty/DSC_7358.JPG", profileUrl: "https://mits.ac.in/facultyprofile/281.html" },
      { name: "Dr. R. Saravana", designation: "Assoc. Professor", qualification: "Ph.D. (S V University, Tirupati)", image: "https://mits.ac.in/public/uploads/faculty/Dr.%20R.%20Saravana.jpg", profileUrl: "https://mits.ac.in/facultyprofile/351.html" },
      { name: "Dr. K. V. Narasimha Murthy", designation: "Assoc. Professor", qualification: "Ph.D. (S K University, Anantapur)", image: "https://mits.ac.in/public/uploads/faculty/Dr.%20K.V%20N.%20Murthy.jpg", profileUrl: "https://mits.ac.in/facultyprofile/352.html" },
      { name: "Dr. M. Chandra Sekhar", designation: "Assoc. Professor & Head", qualification: "Ph.D. (S V University, Tirupati)", image: "https://mits.ac.in/public/uploads/faculty/Chandra%20Sekhar.JPG", profileUrl: "https://mits.ac.in/facultyprofile/372.html" },
      { name: "Dr. Renjith Bhaskaran", designation: "Asst. Professor & Head", qualification: "Ph.D. (IIT, Guwahati)", image: "https://mits.ac.in/public/uploads/faculty/Renjith%20Bhaskaran.JPG", profileUrl: "https://mits.ac.in/facultyprofile/377.html" }
    ],
    detailedAchievements: [
      { title: "English & Foreign Languages Events", description: "International conferences, language-day programs, and communication-focused FDPs are organized regularly.", type: "faculty" },
      { title: "Mathematics Day and FDP Series", description: "Department conducts Mathematics Day events and specialized FDPs in computational intelligence and applied mathematics.", type: "faculty" },
      { title: "Physics and Chemistry Conferences", description: "Departments organize science-day celebrations, international symposia, and domain seminars for student engagement.", type: "student" }
    ],
    facilities: [
      { name: "English & Foreign Languages", description: "Language and communication training facilities supporting professional communication and global competence." },
      { name: "Mathematics", description: "Mathematics support and foundational analytical learning modules for all engineering branches." },
      { name: "Physics", description: "Physics laboratory-based instruction for first-year engineering streams." },
      { name: "Chemistry", description: "Chemistry laboratory and foundational science practical facilities for first-year curriculum." },
      { name: "Humanities", description: "Humanities courses supporting ethics, society, and behavioural competency development." }
    ],
    patents: [],
    publications: [
      { title: "Department of English & Foreign Languages - Year-wise publications", type: "journal", year: "Published on official records" },
      { title: "Department of Mathematics - Year-wise publications", type: "journal", year: "Published on official records" },
      { title: "Department of Physics/Chemistry - Year-wise publications", type: "journal", year: "Published on official records" }
    ],
    consultancy: [],
    events: [
      { title: "Cultural Studies and AI-Enabled ELT", date: "11-12 Mar 2026", description: "Organized by Department of English & Foreign Languages." },
      { title: "National Science Day Celebrations", date: "28 Feb 2026", description: "Organized by Department of Physics with NSS." },
      { title: "Mathematics Day Celebrations", date: "22 Dec 2025", description: "Organized by Department of Mathematics." },
      { title: "World Ozone Day", date: "16 Sep 2025", description: "Organized by Department of Chemistry." }
    ],
    mous: [],
    placement: { percentage: "N/A", avgPackage: "N/A", highestPackage: "N/A", recruiters: [] },
    studentProjects: [],
    subjects: [
      { name: "Communicative English", semester: 1, type: "core" },
      { name: "English for Professional Purposes", semester: 2, type: "core" },
      { name: "Engineering Mathematics", semester: 1, type: "core" },
      { name: "Engineering Physics", semester: 1, type: "core" },
      { name: "Engineering Chemistry", semester: 1, type: "core" },
      { name: "Physics Laboratory", semester: 1, type: "core" },
      { name: "Chemistry Laboratory", semester: 1, type: "core" },
      { name: "Communicative English Laboratory", semester: 1, type: "core" }
    ],
    documents: [
      { title: "Department of English and Foreign Languages - BOS 2023-24", url: "https://mits.ac.in/public/uploads/departments/ca7f5260ce3ca09f652eb43f45f03f4f.pdf" },
      { title: "Department of Mathematics - BOS 2023-24", url: "https://mits.ac.in/public/uploads/departments/6e35d2d56bc6caf2ec6ec7f8ae0f471c.pdf" },
      { title: "Department of Physics - BOS 2023-24", url: "https://mits.ac.in/public/uploads/departments/Physics%20BoS%202023-2024.pdf" },
      { title: "Department of Chemistry - BOS 2024-25", url: "https://mits.ac.in/public/uploads/departments/R23_Chemistry_AY-2024-25.pdf" }
    ],
  },
};

// Helper to get all department keys
export const getAllDepartmentKeys = () => Object.keys(departmentsData);

// Helper to find department by key
export const getDepartmentByKey = (key: string): DepartmentData | undefined => departmentsData[key];

