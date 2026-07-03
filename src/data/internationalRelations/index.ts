// International Relations - MITS Deemed to be University
// Source: https://mits.ac.in/international-relations
// All PDFs and images link to official mits.ac.in resources.

export type IRPerson = {
  name: string;
  designation: string;
  email?: string;
  phone?: string;
  image?: string;
};

export type Partner = {
  name: string;
  country: string;
  region: "US" | "Europe" | "Japan" | "Taiwan" | "South Korea" | "Singapore" | "Middle East" | "Other";
  website: string;
  highlight?: string;
};

export type ProgramCard = {
  title: string;
  subtitle?: string;
  period?: string;
  partner?: string;
  country?: string;
  description?: string;
  activity?: string;
  reportUrl?: string;
  brochureUrl?: string;
  image?: string;
  participants?: { sno: number; name: string; dept: string; roll: string; extra?: string }[];
};

export type IREvent = {
  title: string;
  date: string;
  description: string;
  reportUrl?: string;
  image?: string;
  scientists?: string[];
  objectives?: string[];
};

export type Fellow = {
  batch: string;
  facultyChampions: string;
  students: { sno: number; name: string; dept: string; roll: string; wiki?: string }[];
};

/* ---------- ABOUT ---------- */

export const aboutIR = {
  intro: [
    "MITS – Deemed to be University envisions becoming a globally recognized academic and research higher education institution. MITS has recruited faculty members with doctoral degrees from reputed foreign universities across the world. Many of MITS professors also have post-doctoral or industrial experience from abroad, and the institute has hosted faculty from abroad through seminars and conferences.",
    "The culture of internationalization is fostered by sending students abroad for internship programmes, student exchanges, short-term laboratory research and summer study programmes, while welcoming students from partner institutions to MITS under the exchange banner. Students can compete for several types of study-abroad scholarships to support their quest for international experience. The MITS International Relations Office handles institution-level international affairs including outbound and inbound opportunities.",
    "MITS focus on sending students abroad for international experience started in 2016 when the first batch of students went for the University Innovation Fellowship Program of d.school, Hasso Plattner Institute, Stanford University, California, USA. This process further accelerated when the first batch of five students went to Asia University, Taichung, Taiwan for fully-paid full-semester internships.",
  ],
  goal: "Promotion of the Institution's Internationalization and Academic Exchanges.",
  mission: [
    "Promote academic collaborations and faculty & student exchange programmes with foreign universities and research organisations.",
    "Handle MoUs of academic collaboration with foreign universities and institutions.",
    "Facilitate MITS students' internships, scholarships and other opportunities for global exposure.",
    "Serve as the international contact and assist visiting faculty and foreign students.",
    "Help international students with their life in India and Madanapalle (including admission information, academic and psychological counselling).",
  ],
  shortTerm: [
    "Encourage MITS faculty and students to avail global opportunities.",
    "Set up efficient service for international communication.",
    "Encourage outstanding students and provide increased opportunities to participate in internship & scholarship programmes of top-ranked institutions like NTU India Connect, USC Viterbi Scholarship, S. N. Bose Scholars program (Fulbright), Globalink Research Internship – Canada, etc.",
  ],
  longTerm: [
    "Establish MITS' name on the international horizon.",
    "Advance MITS' academic reputation internationally.",
  ],
  office:
    "Dr. S. Narayanan is the Advisor – International Relations Office, under whose guidance the IRO operates. The IRO of MITS is headed by Dr. Sremmant Basu, Dean of Administration & International Relations, supported by Mrs. U. Vijaya Lakshmi, Senior Manager – International Relations & Professional Counsellor, and Mrs. P. L. Susmitha, Assistant Manager. All departments have international coordinators and country-specific coordinators as well.",
};

export const aboutGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/T3-min.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/T4-min.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/T5-min.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/mou1.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/mou2.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/iro1.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/iro2.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/iro3.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/iro4.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/iro5.jpeg",
];

/* ---------- CONTACT ---------- */

export const contactCard = {
  office: "Office of International Relations (IRO)",
  institute: "Madanapalle Institute of Technology & Science (Deemed to be University)",
  address:
    "Angallu (V), Madanapalle - 517325, Annamayya District, Andhra Pradesh, India",
  timings: "Mon – Sat: 9:00 AM – 5:00 PM",
  phone: "+91-8571-280255",
  email: "iro@mits.ac.in",
  mapsUrl: "https://maps.google.com/?q=Madanapalle+Institute+of+Technology+and+Science",
  team: [
    { name: "Dr. S. Narayanan", designation: "Advisor – International Relations Office" },
    { name: "Dr. Sremmant Basu", designation: "Dean – Administration & International Relations" },
    { name: "Mrs. U. Vijaya Lakshmi", designation: "Senior Manager – International Relations & Student Counsellor", email: "vijayalakshmi@mits.ac.in" },
    { name: "Mrs. P. L. Susmitha", designation: "Assistant Manager – International Relations" },
  ] as IRPerson[],
};

/* ---------- MoUs ---------- */

export const partners: Partner[] = [
  { name: "Bowling Green State University (BGSU)", country: "USA", region: "US", website: "https://www.bgsu.edu/", highlight: "MoU signed 17 Feb 2025; Pathway, joint research, exchange & curriculum framing." },
  { name: "Rivier University", country: "USA", region: "US", website: "https://www.rivier.edu/", highlight: "Student exchange collaboration initiated 20 Feb 2025." },
  { name: "University of Applied Sciences, Hagenberg – Upper Austria", country: "Austria", region: "Europe", website: "https://fh-ooe.at/en" },
  { name: "BRNO University of Technology", country: "Czech Republic", region: "Europe", website: "https://www.vut.cz/en/?aid_redir=1" },
  { name: "Maharishi Vedic University", country: "Holland", region: "Europe", website: "https://meru.international/" },
  { name: "University of Eastern Finland", country: "Finland", region: "Europe", website: "https://www.uef.fi/en", highlight: "Professor-level student research programme." },
  { name: "Karlsruhe Institute of Technology", country: "Germany", region: "Europe", website: "https://www.kit.edu/english/", highlight: "Professor-level Mechanical research collaboration." },
  { name: "University of Aizu", country: "Japan", region: "Japan", website: "https://u-aizu.ac.jp/en/", highlight: "Long-standing research internship & MS programme partner." },
  { name: "Ichinoseki College (NIT)", country: "Japan", region: "Japan", website: "https://www.ichinoseki.ac.jp/english.html", highlight: "Host institute for the Sakura Science Exchange Program." },
  { name: "Iwate Prefectural University – Faculty of Software & Information Science", country: "Japan", region: "Japan", website: "https://www.iwate-pu.ac.jp/en/" },
  { name: "Asia University", country: "Taiwan", region: "Taiwan", website: "https://www.asia.edu.tw/", highlight: "Summer & semester exchange since 2017-18." },
  { name: "Providence University", country: "Taiwan", region: "Taiwan", website: "https://enpu.pu.edu.tw/", highlight: "Sponsor of the Global Immersion Program 2018-19." },
  { name: "National Chiao Tung University (NCTU)", country: "Taiwan", region: "Taiwan", website: "https://www.nycu.edu.tw/en", highlight: "Professor-level ECE research internships." },
  { name: "National Chung Cheng University (NCCU)", country: "Taiwan", region: "Taiwan", website: "https://www.ccu.edu.tw/eindex.php" },
  { name: "Pusan National University", country: "South Korea", region: "South Korea", website: "https://www.pusan.ac.kr/eng/Main.do" },
  { name: "Kookmin University", country: "South Korea", region: "South Korea", website: "https://english.kookmin.ac.kr/" },
  { name: "GS Co., Ltd. – Gyeonggi-do", country: "South Korea", region: "South Korea", website: "https://www.gscorp.co.kr/", highlight: "2025-26 industry research internship host." },
  { name: "Nanyang Technological University (NTU)", country: "Singapore", region: "Singapore", website: "https://www.ntu.edu.sg/", highlight: "NTU-India Connect programme partner." },
  { name: "Rise & Shine Group of Companies", country: "Dubai, UAE", region: "Middle East", website: "https://www.riseandshinegroup.com/", highlight: "Civil engineering internships." },
  { name: "Jenmars Technical Services LLC", country: "Dubai, UAE", region: "Middle East", website: "#", highlight: "MBA internships." },
];

export const partnerImages = [
  "https://mits.ac.in/public/uploads/internationalrelation/mou1.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/mou2.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/bowling.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/us-mou.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/Rivier%20University%201.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/Rivier%20University%202.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/nctu.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/germany.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/finland.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/dubai.png",
];

/* ---------- INTERNSHIPS / EXCHANGE ---------- */

export const internships: ProgramCard[] = [
  {
    title: "Research Internship – GS Co., Ltd., Gyeonggi-do",
    country: "South Korea",
    partner: "GS Co., Ltd.",
    period: "16 June 2025 – 14 August 2025",
    description: "Completed research internship programme under industry guidance for ECE and AI-ML students.",
    participants: [
      { sno: 1, name: "Pathakunta Lokeswar Reddy", dept: "ECE", roll: "22691A04C4" },
      { sno: 2, name: "Muli Vijay Kumar Reddy", dept: "ECE", roll: "23695A0407" },
      { sno: 3, name: "Madamanchi Mohan Krishna", dept: "AI-ML", roll: "23691A3334" },
      { sno: 4, name: "Matli Vishnu Vardhan Naidu", dept: "CSN (Networks)", roll: "24695A4006" },
    ],
  },
  {
    title: "Research Internship – University of Aizu, Fukushima",
    country: "Japan",
    partner: "University of Aizu",
    period: "15 January – 30 March 2026 (in progress)",
    participants: [
      { sno: 1, name: "Devisriprasad Subbanna Vinodkumar", dept: "IV-CSE-AI", roll: "22691A3131" },
      { sno: 2, name: "Gowri Shankar Mugadi", dept: "IV-CSE-AI", roll: "22691A3139" },
    ],
  },
  {
    title: "Sakura Science Exchange Program",
    country: "Japan",
    partner: "National Institute of Technology – Ichinoseki College",
    period: "17 – 23 November 2025",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/Report%20on%20Sakura%20Science%20Exchange%20Program%202025.pdf",
    description:
      "Faculty and student delegation from MITS participated in the Sakura Science Exchange Programme at Ichinoseki College, Japan.",
    participants: [
      { sno: 1, name: "Vamsi Bandi", dept: "AI Dept", roll: "Faculty", extra: "Asst. Professor" },
      { sno: 2, name: "Chershitha Reddy Chapati", dept: "IV-CSE-A", roll: "22691A0544" },
      { sno: 3, name: "Hema Charitha Kodanda", dept: "IV-CST-A", roll: "22691A2864" },
      { sno: 4, name: "Aniket Arun Sasmal", dept: "IV-CST-A", roll: "22691A2814" },
      { sno: 5, name: "Tejasree Kothapalli", dept: "IV-CAI-C", roll: "22691A31H2" },
      { sno: 6, name: "Vyshnavi Sarode", dept: "IV-CAI-C", roll: "22691A31J2" },
      { sno: 7, name: "Lokesh Ayyaswamy", dept: "IV-CAI-B", roll: "22691A3180" },
      { sno: 8, name: "Tejeswar Reddy Meegada", dept: "IV-ECE-E", roll: "22691A04S1" },
    ],
  },
  {
    title: "University of Aizu – Offline Research Internship",
    country: "Japan",
    partner: "University of Aizu",
    period: "30 December 2024 – 4 March 2025",
    participants: [
      { sno: 1, name: "Pallavi Konduru", dept: "IV AI-B", roll: "21691a31b5" },
      { sno: 2, name: "Manasa Nelluri", dept: "IV AI-B", roll: "21691a3190" },
      { sno: 3, name: "Ayesha Penugonda", dept: "IV AI-A", roll: "21691a3117" },
      { sno: 4, name: "Sai Ganeswari Nallapoosala", dept: "IV AI-A", roll: "21691a3145" },
      { sno: 5, name: "Bindusree Gopalappa", dept: "IV DS", roll: "21691A3210" },
      { sno: 6, name: "Indu Eswar Shivani Nayuni", dept: "IV DS", roll: "21691a3237" },
    ],
  },
  {
    title: "Iwate Prefectural University – Offline Internship",
    country: "Japan",
    partner: "Iwate Prefectural University",
    period: "16 January – 18 March 2025",
    participants: [
      { sno: 1, name: "Vivek Bhojanam", dept: "IV CSE", roll: "21691a05p1" },
      { sno: 2, name: "Teja Gorla", dept: "IV CSE", roll: "21691a05m9" },
      { sno: 3, name: "Maruthi Gowtham Reddy Kadapa", dept: "IV CSE", roll: "21691a05a8" },
      { sno: 4, name: "Sai Sandeep Arreddula", dept: "IV AI", roll: "21691a31e3" },
    ],
  },
  {
    title: "Asia University Taiwan – 2024 Summer Program",
    country: "Taiwan",
    partner: "Asia University",
    period: "6 July 2024 – 16 August 2024",
    activity: "MoU Activity – Artificial Intelligence",
    participants: [
      { sno: 1, name: "Sai Mounish Kesarla Venkata", dept: "CST", roll: "21691A28I5" },
      { sno: 2, name: "Dadapeer Agraharam Shaik", dept: "CST", roll: "21691a2821" },
      { sno: 3, name: "Rishitha Chokkappagari", dept: "CSE", roll: "21691a05h3" },
      { sno: 4, name: "Praneetha Neelapareddigari", dept: "CSE", roll: "21691a05f0" },
      { sno: 5, name: "Sai Spoorthi Konkala", dept: "CSE", roll: "21691a05i8" },
      { sno: 6, name: "Ameya Sree Kasa", dept: "CS-AI", roll: "21691a3110" },
      { sno: 7, name: "Dhanush Reddy Chinthaparthy Reddy", dept: "CS-AI", roll: "21691a3134" },
      { sno: 8, name: "Raiyan Ali Syed", dept: "CS-DS", roll: "21691a3271" },
      { sno: 9, name: "Indu Eswar Shivani Nayuni", dept: "CS-DS", roll: "21691a3237" },
      { sno: 10, name: "Poojitha Nagishetti", dept: "CS-DS", roll: "21691a3267" },
    ],
  },
];

export const internshipArchives = [
  {
    year: "2023-24",
    url: "https://mits.ac.in/assets/pdf/oir/2023-24%20Internships%20Data.pdf",
  },
  {
    year: "2021-22",
    url: "https://mits.ac.in/assets/pdf/oir/2021-22%20Internships%20Data.pdf",
  },
];

/* ---------- FELLOWSHIPS (Scholarships / Programmes referenced) ---------- */

export const fellowships: ProgramCard[] = [
  {
    title: "NTU India Connect Research Internship",
    country: "Singapore",
    partner: "Nanyang Technological University",
    period: "August – December",
    description:
      "Fully-funded research internship at NTU Singapore for outstanding undergraduate students in engineering and applied sciences.",
  },
  {
    title: "USC Viterbi Scholarship",
    country: "USA",
    partner: "University of Southern California",
    description:
      "Merit-based scholarship for research internships at the USC Viterbi School of Engineering.",
  },
  {
    title: "S. N. Bose Scholars Program (Fulbright)",
    country: "USA",
    partner: "IUSSTF / Fulbright",
    description:
      "Prestigious fellowship for Indian undergraduates to pursue a 10-12 week summer research internship at premier US universities.",
  },
  {
    title: "Globalink Research Internship – MITACS",
    country: "Canada",
    partner: "MITACS",
    description:
      "12-week research internship at leading Canadian universities for talented undergraduate students.",
  },
  {
    title: "Sakura Science Exchange Program",
    country: "Japan",
    partner: "Japan Science and Technology Agency (JST)",
    description:
      "Short-term exchange programme inviting Indian students & faculty for collaborative research at Japanese institutions.",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/Report%20on%20Sakura%20Science%20Exchange%20Program%202025.pdf",
  },
  {
    title: "University Innovation Fellows (Stanford d.school)",
    country: "USA",
    partner: "Hasso Plattner Institute of Design, Stanford University",
    description:
      "Global student leadership programme empowering students to become agents of change on their campus.",
  },
];

/* ---------- GLOBAL IMMERSION / SUMMER / WINTER ---------- */

export const globalPrograms: ProgramCard[] = [
  {
    title: "Asia University Summer Program (Offline)",
    country: "Taiwan",
    partner: "Asia University",
    period: "6 July – 16 August 2024",
    description: "Offline intensive Summer Program in Artificial Intelligence and smart technologies at Taichung, Taiwan.",
    participants: [
      { sno: 1, name: "Sai Mounish Kesarla Venkata", dept: "CST ", roll: "21691A28I5", extra: "Artificial Intelligence" },
      { sno: 2, name: "Dadapeer Agraharam Shaik", dept: "CST ", roll: "21691a2821", extra: "Artificial Intelligence" },
      { sno: 3, name: "Rishitha Chokkappagari", dept: "CSE", roll: "21691a05h3", extra: "Artificial Intelligence" },
      { sno: 4, name: "Praneetha Neelapareddigari", dept: "CSE", roll: "21691a05f0", extra: "Artificial Intelligence" },
      { sno: 5, name: "Sai Spoorthi Konkala", dept: "CSE", roll: "21691a05i8", extra: "Artificial Intelligence" },
      { sno: 6, name: "Ameya Sree Kasa", dept: "CS-AI", roll: "21691a3110", extra: "Artificial Intelligence" },
      { sno: 7, name: "Dhanush Reddy Chinthaparthy Reddy", dept: "CS-AI", roll: "21691a3134", extra: "Artificial Intelligence" },
      { sno: 8, name: "Raiyan Ali Syed", dept: "CS-DS", roll: "21691a3271", extra: "Artificial Intelligence" },
      { sno: 9, name: "Indu Eswar Shivani Nayuni", dept: "CS-DS", roll: "21691a3237", extra: "Artificial Intelligence" },
      { sno: 10, name: "Poojitha Nagishetti", dept: "CS-DS", roll: "21691a3267", extra: "Artificial Intelligence" },
    ],
  },
  {
    title: "Virtual Summer Program of Asia University",
    country: "Taiwan",
    partner: "Asia University",
    period: "26 June – 21 August 2023",
    description: "Online virtual exchange tracks covering Artificial Intelligence & AI Applications in Management.",
    participants: [
      { sno: 1, name: "Susindra Reddy Bandi", dept: "AI-DS", roll: "20691A3156", extra: "Artificial Intelligence" },
      { sno: 2, name: "Gayathri Priya Chennama Reddy Gari", dept: "AI-DS", roll: "20691A3112", extra: "Artificial Intelligence" },
      { sno: 3, name: "Hareesh Kumar Yerragolla", dept: "AI-DS", roll: "20691A3116", extra: "Artificial Intelligence" },
      { sno: 4, name: "Bindusree G.", dept: "AI-DS", roll: "21691A3210", extra: "Artificial Intelligence" },
      { sno: 5, name: "Niharika Kapu", dept: "AI-DS", roll: "20691A05A8", extra: "Artificial Intelligence" },
      { sno: 6, name: "Sai Gayathri Mukku", dept: "AI-DS", roll: "20691A3147", extra: "Artificial Intelligence" },
      { sno: 7, name: "Sai Manogyna K", dept: "AI-DS", roll: "20691A3148", extra: "Artificial Intelligence" },
      { sno: 8, name: "Umesh Chandra Sompalli Penchala", dept: "AI-DS", roll: "20691A3140", extra: "Artificial Intelligence" },
      { sno: 9, name: "Harikrishna Chidathala", dept: "AI-DS", roll: "21695A3103", extra: "Artificial Intelligence" },
      { sno: 10, name: "Hemalatha Vijapuram", dept: "AI-DS", roll: "20691A3119", extra: "Artificial Intelligence" },
      { sno: 11, name: "Jaswanth Muthineedi", dept: "AI-DS", roll: "21691A3168", extra: "Artificial Intelligence" },
      { sno: 12, name: "Dhanush Reddy Chinthaparthy Reddy", dept: "AI-DS", roll: "21691A3134", extra: "Artificial Intelligence" },
      { sno: 13, name: "Rishitha C", dept: "CSE", roll: "21691A05H3", extra: "Artificial Intelligence" },
      { sno: 14, name: "Mansoor Shaik", dept: "AI-DS", roll: "21691A3195", extra: "Artificial Intelligence" },
      { sno: 15, name: "Lakshmi Chandana Akkisetty", dept: "CSE", roll: "21691A0586", extra: "Artificial Intelligence" },
      { sno: 16, name: "Lakshmi Charani Akkisetty", dept: "CSE", roll: "21691A0587", extra: "Artificial Intelligence" },
      { sno: 17, name: "Abhitha Lakshmi Povakula", dept: "AIDS", roll: "21691A3102", extra: "Artificial Intelligence" },
      { sno: 18, name: "Manikantha Rudrapankti", dept: "MECH", roll: "21695A03l7", extra: "Artificial Intelligence" },
      { sno: 19, name: "Ameya Sree Kasa", dept: "AI-DS", roll: "21691A3110", extra: "Artificial Intelligence" },
      { sno: 20, name: "Shaik Ishrat", dept: "DI-DS", roll: "21691A3164", extra: "Artificial Intelligence" },
      { sno: 21, name: "Balabharathi Talla", dept: "MBA", roll: "22691E0020", extra: "AI Application in Management" },
      { sno: 22, name: "Mithila Katepalle", dept: "MBA", roll: "22691E00A0", extra: "AI Application in Management" },
      { sno: 23, name: "Muskan shaik", dept: "MBA", roll: "22691E00B0", extra: "AI Application in Management" },
      { sno: 24, name: "Bhavana Polem", dept: "MBA", roll: "22691E0028", extra: "AI Application in Management" },
      { sno: 25, name: "Khushnuma shaik", dept: "MBA", roll: "22691E0076", extra: "AI Application in Management" },
      { sno: 26, name: "Praveen Kimar Pogaku", dept: "MBA", roll: "22691E00 D1", extra: "AI Application in Management" },
      { sno: 27, name: "Navaneetha Y.", dept: "MBA", roll: "22691E00B4", extra: "AI Application in Management" },
      { sno: 28, name: "Latha Medikurthi", dept: "MBA", roll: "22691E0081", extra: "AI Application in Management" },
      { sno: 29, name: "Dhana Lakshmi Bompalli", dept: "MBA", roll: "22691E0040", extra: "AI Application in Management" },
      { sno: 30, name: "Malika Devi Karamala", dept: "MBA", roll: "22691E0089", extra: "AI Application in Management" },
      { sno: 31, name: "Saradhi Kamalesh Arkad", dept: "MBA", roll: "22691E00 F7", extra: "AI Application in Management" },
      { sno: 32, name: "Ismail Kalasamudram", dept: "MBA", roll: "22691E0060", extra: "AI Application in Management" },
      { sno: 33, name: "Vishnu Vardhan Rao S", dept: "MBA", roll: "22691E00J5", extra: "AI Application in Management" },
      { sno: 34, name: "Sai Sandhya Tamatam", dept: "MBA", roll: "22691E00 E9", extra: "AI Application in Management" },
      { sno: 35, name: "Shreya Annam", dept: "MBA", roll: "22691E00G1", extra: "AI Application in Management" },
      { sno: 36, name: "Roshan Ali N", dept: "MBA", roll: "22691E00E4", extra: "AI Application in Management" },
      { sno: 37, name: "Reddy Jayasree P", dept: "MBA", roll: "22691E00E1", extra: "AI Application in Management" },
    ],
  },
  {
    title: "Asia University Virtual Exchange Program – Spring Semester 2023",
    country: "Taiwan",
    partner: "Asia University",
    period: "13 February – 16 June 2023",
    description: "Virtual academic exchange modules spanning web design, machine learning, digital image processing, and auditing.",
    participants: [
      { sno: 1, name: "VAMSIDHAR REDDY ANNAREDDY", dept: "MBA", roll: "21691E00I8", extra: "Web Design" },
      { sno: 2, name: "SUMANTH LINGAMPALLI", dept: "CSE", roll: "20691A05J7", extra: "Web Design" },
      { sno: 3, name: "MOHAMMAD UMAR SHAIK", dept: "CSE", roll: "21695A0505", extra: "Web Design" },
      { sno: 4, name: "VENKATA SWETHA SURABOINA", dept: "CSE", roll: "20691A05M0", extra: "Web Design" },
      { sno: 5, name: "GOUTHAM SARADESI", dept: "CSE", roll: "20691A3504", extra: "Web Design" },
      { sno: 6, name: "RAKSHITHA KAMMARA", dept: "ECE", roll: "21695A0493", extra: "Web Design" },
      { sno: 7, name: "SAI THANUSH REDDY KAMATHAM", dept: "CSE", roll: "21695A2818", extra: "Web Design" },
      { sno: 8, name: "AVINASH THALUPULA", dept: "CSE", roll: "20691A05I1", extra: "Web Design" },
      { sno: 9, name: "SUPRIYA KONDETI", dept: "CSE", roll: "20691A05J9", extra: "Web Design" },
      { sno: 10, name: "GOVARDHAN SIVAKAVI", dept: "CSE", roll: "21695A2802", extra: "Machine Learning" },
      { sno: 11, name: "MONISHA POTHAMSETTY", dept: "CSE", roll: "20691A0592", extra: "Machine Learning" },
      { sno: 12, name: "SHAMANTH GIDDALURU", dept: "MECH", roll: "21695A0392", extra: "Machine Learning" },
      { sno: 13, name: "SUSHMANTH MUPPALLA", dept: "MECH", roll: "21695A03G3", extra: "Machine Learning" },
      { sno: 14, name: "NAVEEN RAMANJI", dept: "MECH", roll: "21695A03M1", extra: "Machine Learning" },
      { sno: 15, name: "MAHESH POLINENI", dept: "CSE", roll: "20691A0581", extra: "Digital Image Processing" },
      { sno: 16, name: "VAMSI YELAKAPATI", dept: "CSE", roll: "20691A05l0", extra: "Digital Image Processing" },
      { sno: 17, name: "NITISH SINE", dept: "CSE", roll: "20691A05B4", extra: "Digital Image Processing" },
      { sno: 18, name: "MOHAMMAD SUHAIL SHAIK", dept: "CSE", roll: "20691A0588", extra: "Digital Image Processing" },
      { sno: 19, name: "MAHAMMAD ALI PATHAN", dept: "CSE", roll: "20691A0578", extra: "Digital Image Processing" },
      { sno: 20, name: "MOULIDHAR PULI", dept: "CSE", roll: "21695A0518", extra: "Digital Image Processing" },
      { sno: 21, name: "SAHITYA J", dept: "CSE", roll: "20691A05B9", extra: "Digital Image Processing" },
      { sno: 22, name: "SAI MOHAN SRIRAM GUVVALA", dept: "CSE", roll: "20691A3528", extra: "Digital Image Processing" },
      { sno: 23, name: "VENKATA PUNEETH CHOWDARY GANGARAPU", dept: "CSE", roll: "20691A05L8", extra: "Digital Image Processing" },
      { sno: 24, name: "RAVINDRA SAI MANGALA", dept: "CSE", roll: "21695A0521", extra: "Digital Image Processing" },
      { sno: 25, name: "HARSHINI MARPURI", dept: "AI-DS", roll: "20691A3118", extra: "Digital Image Processing" },
      { sno: 26, name: "LINGALA DEVA DINESH", dept: "AI-DS", roll: "20691A3109", extra: "Digital Image Processing" },
      { sno: 27, name: "MANVITHA BL", dept: "CSE", roll: "20691A0585", extra: "Digital Image Processing" },
      { sno: 28, name: "GEETHA PRIYA DARSHINI VUJJA", dept: "AI-DS", roll: "20691A3114", extra: "Digital Image Processing" },
      { sno: 29, name: "HARSHITHA MARPURI", dept: "CSE", roll: "20691A3507", extra: "Digital Image Processing" },
      { sno: 30, name: "MAHESH BABU KONA", dept: "AI-DS", roll: "20691A3130", extra: "Digital Image Processing" },
      { sno: 31, name: "WAHAZ N.B", dept: "AI-DS", roll: "20691A3162", extra: "Digital Image Processing" },
      { sno: 32, name: "PRAHARSHA M", dept: "CST", roll: "20691A28D5", extra: "Digital Image Processing" },
      { sno: 33, name: "SIDDESWARA RAMSHETTI", dept: "CST", roll: "20691A28F7", extra: "Digital Image Processing" },
      { sno: 34, name: "SUBBARAYUDU BIRLA C", dept: "CST", roll: "20691A28G2", extra: "Digital Image Processing" },
      { sno: 35, name: "DHARANIDHAR BEERE", dept: "AI-DS", roll: "20691A3110", extra: "Digital Image Processing" },
      { sno: 36, name: "BHAVYA SRI K", dept: "AI-DS", roll: "206911A3107", extra: "Digital Image Processing" },
      { sno: 37, name: "PAVANI RAMISETTY", dept: "AI-DS", roll: "20691A3138", extra: "Digital Image Processing" },
      { sno: 38, name: "PRADEEPTHI SANDEPOGU", dept: "AI-DS", roll: "20691A3141", extra: "Digital Image Processing" },
      { sno: 39, name: "BHAVANA RAMISETTY", dept: "AI-DS", roll: "20691A3106", extra: "Digital Image Processing" },
      { sno: 40, name: "REDDY DEEPIKA GANJIKUNTA", dept: "CST", roll: "20691A28D8", extra: "Digital Image Processing" },
      { sno: 41, name: "VIKAS AMIDALA", dept: "CSE", roll: "20691A3548", extra: "Digital Image Processing" },
      { sno: 42, name: "SHREYA PALADI", dept: "CST", roll: "20691A28F6", extra: "Digital Image Processing" },
      { sno: 43, name: "SYED JAVEED HUSSAIN", dept: "MBA", roll: "21691E00I5", extra: "Marketing Management" },
      { sno: 44, name: "SALMANBASHA SHAIK", dept: "MBA", roll: "21691E00F5", extra: "Marketing Management" },
      { sno: 45, name: "MUHEED AHMED SHAIK", dept: "MBA", roll: "21691E00F2", extra: "Marketing Management" },
      { sno: 46, name: "ALTHAF SHAIK", dept: "MBA", roll: "21691E00D3", extra: " Marketing Management" },
      { sno: 47, name: "SHAZIYA SHAIK", dept: "MBA", roll: "21691E00F6", extra: "Marketing Management" },
      { sno: 48, name: "SABAALIYA SHAIK", dept: "MBA", roll: "21691E00F4", extra: "Auditing" },
      { sno: 49, name: "SAI JAHNAVI ALUVALA", dept: "MBA", roll: "21691E00C4", extra: "Auditing" },
      { sno: 50, name: "SAI JYOSHNA ALUVALA", dept: "MBA", roll: "21691E00C5", extra: "Auditing" },
      { sno: 51, name: "SURESH B", dept: "MBA", roll: "21691E00I0", extra: "Auditing" },
      { sno: 52, name: "KOWSAR NIGAR SHAIK", dept: "MBA", roll: "21691E00F0", extra: "Auditing" },
      { sno: 53, name: "REDDY BHAVAGANA MITRA B", dept: "MBA", roll: "21691E0065", extra: "Auditing" },
      { sno: 54, name: "MRUNALINI MARAM", dept: "MBA", roll: "21691E0084", extra: "Auditing" },
      { sno: 55, name: "SWATHI AVULAMACHAIAHGARI", dept: "MBA", roll: "21691E00I3", extra: " Auditing" },
      { sno: 56, name: "REDDY KUMARI YANAMALA", dept: "MBA", roll: "21691E00B6", extra: "Auditing" },
    ],
  },
  {
    title: "Asia University Virtual Summer Program 2022",
    country: "Taiwan",
    partner: "Asia University",
    period: "1 – 24 August 2022",
    description: "Online summer courses in AI Applications in Management for MBA and management students.",
    participants: [
      { sno: 1, name: "A GIRISH", dept: "MBA", roll: "21691E0030", extra: "AI Application in Management" },
      { sno: 2, name: "ALLEMPALLI ARAVIND", dept: "MBA", roll: "21691E0009", extra: "AI Application in Management" },
      { sno: 3, name: "ALUVALA SAI JAHNAVI", dept: "MBA", roll: "21691E00C4", extra: "AI Application in Management" },
      { sno: 4, name: "ALUVALA SAI JYOSHNA", dept: "MBA", roll: "21691E00C5", extra: "AI Application in Management" },
      { sno: 5, name: "AVVAGARI DEEPTHI", dept: "MBA", roll: "21691E0022", extra: "AI Application in Management" },
      { sno: 6, name: "BAPANA PALLE MUNIPRASADU", dept: "MBA", roll: "21691E0086", extra: "AI Application in Management" },
      { sno: 7, name: "BEEMAVARAM SAI HARISH", dept: "MBA", roll: "21691E00C3", extra: "AI Application in Management" },
      { sno: 8, name: "BUKKE CHINNA NAGARJUNA NAIK", dept: "MBA", roll: "21691E0088", extra: "AI Application in Management" },
      { sno: 9, name: "DADUBAIGARI SADDAM HUSSAIN", dept: "MBA", roll: "21691E00C0", extra: "AI Application in Management" },
      { sno: 10, name: "DESUGARI MANOJ KUMAR", dept: "MBA", roll: "21691E0078", extra: "AI Application in Management" },
      { sno: 11, name: "EEGA PRIYANKA", dept: "MBA", roll: "21691E00A7", extra: "AI Application in Management" },
      { sno: 12, name: "GANTASALA MAHIDHAR", dept: "MBA", roll: "21691E0072", extra: "AI Application in Management" },
      { sno: 13, name: "GOPU NIRANJAN", dept: "MBA", roll: "21691E0098", extra: "AI Application in Management" },
      { sno: 14, name: "GUNDLAPALLI ANITHA", dept: "MBA", roll: "21691E0005", extra: "AI Application in Management" },
      { sno: 15, name: "HASANAPURAM KEERTHANA", dept: "MBA", roll: "21691E0056", extra: "AI Application in Management" },
      { sno: 16, name: "JINKALA KIRAN KUMAR", dept: "MBA", roll: "21691E0059", extra: "AI Application in Management" },
      { sno: 17, name: "K.HARINADH", dept: "MBA", roll: "21691E0033", extra: "AI Application in Management" },
      { sno: 18, name: "KANAKANTI RAJESWARI", dept: "MBA", roll: "21691E00E6", extra: "AI Application in Management" },
      { sno: 19, name: "KOLLA SANTHOSH KUMAR REDDY", dept: "MBA", roll: "21691E00c8", extra: "AI Application in Management" },
      { sno: 20, name: "KONDAKAMARALA NAWAZ", dept: "MBA", roll: "21691E0095", extra: "AI Application in Management" },
      { sno: 21, name: "KOPPALLI PREETHI", dept: "MBA", roll: "21691E00A6", extra: "AI Application in Management" },
      { sno: 22, name: "KOSUVARIPALLI NANDEESH", dept: "MBA", roll: "21691E0089", extra: "AI Application in Management" },
      { sno: 23, name: "KUMMARA KARTHIK", dept: "MBA", roll: "21691E0051", extra: "AI Application in Management" },
      { sno: 24, name: "MEKALA KALYAN KUMAR", dept: "MBA", roll: "21691E0049", extra: "AI Application in Management" },
      { sno: 25, name: "MUULLAN JAVID KHAN", dept: "MBA", roll: "21691E0042", extra: "AI Application in Management" },
      { sno: 26, name: "MUPPA RADHA", dept: "MBA", roll: "21691E00B0", extra: "AI Application in Management" },
      { sno: 27, name: "NALLABOTHULA RVATHI", dept: "MBA", roll: "21691E00B8", extra: "AI Application in Management" },
      { sno: 28, name: "NALLAGUTTA MANIKANTA REDDY", dept: "MBA", roll: "21691e0075", extra: "AI Application in Management" },
      { sno: 29, name: "NARAYANOLLA ANIL KUMAR", dept: "MBA", roll: "21691E0004", extra: "AI Application in Management" },
      { sno: 30, name: "P MASOOD ALI KHAN", dept: "MBA", roll: "21691E0079", extra: "AI Application in Management" },
      { sno: 31, name: "PAGADALA SAI KIRAN", dept: "MBA", roll: "201691E00E", extra: "AI Application in Management" },
      { sno: 32, name: "PATAN AYESHA NIKHATH", dept: "MBA", roll: "21691E0013", extra: "AI Application in Management" },
      { sno: 33, name: "RAMAKKAGARI HARSHITHA", dept: "MBA", roll: "21691E0035", extra: "AI Application in Management" },
      { sno: 34, name: "RAMINENI ATHREYA", dept: "MBA", roll: "21691E0012", extra: "AI Application in Management" },
      { sno: 35, name: "RAYACHOTI PRATHIMA", dept: "MBA", roll: "21691E00A5", extra: "AI Application in Management" },
      { sno: 36, name: "S.GOVARDHANA", dept: "MBA", roll: "21691E0031", extra: "AI Application in Management" },
      { sno: 37, name: "SHAIK HALIMA SADIYA", dept: "MBA", roll: "21691E00C9", extra: "AI Application in Management" },
      { sno: 38, name: "SHAIK INTHIYAZ", dept: "MBA", roll: "21691E00D1", extra: "AI Application in Management" },
      { sno: 39, name: "SHAIK KARISHMA", dept: "MBA", roll: "21691E00D2", extra: "AI Application in Management" },
      { sno: 40, name: "SHAIK MOHAMMAD SANIYA", dept: "MBA", roll: "21691E00F1", extra: "AI Application in Management" },
      { sno: 41, name: "SHAIK SHAFEEQ UL AMEEN", dept: "MBA", roll: "21691E0055", extra: "AI Application in Management" },
      { sno: 42, name: "SHAIK SHAHID AKHEEL", dept: "MBA", roll: "21691E0066", extra: "AI Application in Management" },
      { sno: 43, name: "SIVALA PRASANNA", dept: "MBA", roll: "21691E00A2", extra: "AI Application in Management" },
      { sno: 44, name: "T CHIRANJEEVI", dept: "MBA", roll: "21691E0021", extra: "AI Application in Management" },
      { sno: 45, name: "T HEMANTH KUMAR", dept: "MBA", roll: "21691E0039", extra: "AI Application in Management" },
      { sno: 46, name: "VANISAE DHARANI", dept: "MBA", roll: "21691E0025", extra: "AI Application in Management" },
      { sno: 47, name: "VELPULA ANUPAMA", dept: "MBA", roll: "21691E0007", extra: "AI Application in Management" },
      { sno: 48, name: "YERRAMADDU MANOJ", dept: "MBA", roll: "21691E00E2", extra: "AI Application in Management" },
      { sno: 49, name: "ANKE NAVEEN KUMAR", dept: "MBA", roll: "21691E0093", extra: "AI Application in Management" },
      { sno: 50, name: "KAMBOJI REDDY PRIYA DARSHINI", dept: "ECE", roll: "20691A04H7", extra: "Artificial Intelligence" },
      { sno: 51, name: "UNDAVALLI POOJITHA", dept: "ECE", roll: "20691A04G1", extra: "Artificial Intelligence" },
      { sno: 52, name: "SHAIK SHAHEEN", dept: "ECE", roll: "21695A0414", extra: "Artificial Intelligence" },
      { sno: 53, name: "SAI VELLALA-BAKTHAVATHSALA", dept: "ECE", roll: "20691A0420", extra: "Artificial Intelligence" },
      { sno: 54, name: "VEMI REDDY MAHESWAR REDDY", dept: "ECE", roll: "20691A04C8", extra: "Artificial Intelligence" },
      { sno: 55, name: "BAGGIDI-ANSHITHA", dept: "ECE", roll: "20691A0407", extra: "Artificial Intelligence" },
      { sno: 56, name: "CHINTHAPARTHI CHANDANA", dept: "ECE", roll: "20691A0430", extra: "Artificial Intelligence" },
      { sno: 57, name: "CHUKKA THULASI KRISHNA", dept: "ECE", roll: "20691a04q1", extra: "Artificial Intelligence" },
      { sno: 58, name: "TADIMARRI SAI VARDHINI", dept: "CSE", roll: "20691A05F7", extra: "Artificial Intelligence" },
      { sno: 59, name: "GIRIGARI NANDINI", dept: "ECE", roll: "21695A0404", extra: "Artificial Intelligence" },
      { sno: 60, name: "PARNAPALLI SARAYU", dept: "ECE", roll: "21695A0446", extra: "Artificial Intelligence" },
      { sno: 61, name: "GOLLA VAMSHI KRISHANA", dept: "ECE", roll: "20691A04Q5", extra: "Artificial Intelligence" },
      { sno: 62, name: "YENUGANTI HASANTHI", dept: "ECE", roll: "20691A0470", extra: "Artificial Intelligence" },
      { sno: 63, name: "PEDDAKOTLA HEMA LATHA", dept: "ECE", roll: "20691A0472", extra: "Artificial Intelligence" },
      { sno: 64, name: "MADDIPATLA LASYA", dept: "ECE", roll: "20691A04A5", extra: "Artificial Intelligence" },
      { sno: 65, name: "GANAPURAM SAHITHYA", dept: "ECE", roll: "21695A0445", extra: "Artificial Intelligence" },
      { sno: 66, name: "MEESALA LIKHITH KRISHNA YADAV", dept: "ECE", roll: "20691a04A9", extra: "Artificial Intelligence" },
      { sno: 67, name: "CHINNAMUTRA ANUSHA", dept: "ECE", roll: "20691A0408", extra: "Artificial Intelligence" },
      { sno: 68, name: "MADDIRALA GOMATHI", dept: "ECE", roll: "20691A0452", extra: "Artificial Intelligence" },
      { sno: 69, name: "AYODHYAPURAM SHMRUTHI", dept: "ECE", roll: "21695A0405", extra: "Artificial Intelligence" },
      { sno: 70, name: "CHITTIPOTHALA JAYANTHI", dept: "ECE", roll: "20691A0483", extra: "Artificial Intelligence" },
      { sno: 71, name: "KANGANELLURU JAYANTH KUMAR", dept: "ECE", roll: "20691a0482", extra: "Artificial Intelligence" },
      { sno: 72, name: "PATAN APSIYA", dept: "ECE", roll: "20681a0410", extra: "Artificial Intelligence" },
      { sno: 73, name: "UMMANI ANJALI", dept: "ECE", roll: "20691a0405", extra: "Artificial Intelligence" },
      { sno: 74, name: "PUTHUMBAKAM MOKSHITHA", dept: "ECE", roll: "20691A0B7", extra: "Artificial Intelligence" },
    ],
  },
  {
    title: "Asia University Virtual Exchange Program – Fall Semester 2021",
    country: "Taiwan",
    partner: "Asia University",
    period: "13 September 2021 – 15 January 2022",
    description: "Semester-long online exchange program covering advanced computing and business management fields.",
    participants: [
      { sno: 1, name: "Mr. PAINENI SAI DINESH", dept: "CSE", roll: "19691A05D1", extra: "Digital Image Processing" },
      { sno: 2, name: "Ms. BANDLU SAI RUTHU", dept: "ECE", roll: "19691A04G5", extra: "Digital Image Processing" },
      { sno: 3, name: "Ms. V.SRAVANTHI", dept: "ECE", roll: "19691A04J0", extra: "Digital Image Processing" },
      { sno: 4, name: "Mr. SYED IRFAN BASHA", dept: "ECE", roll: "19691A0472", extra: "Digital Image Processing" },
      { sno: 5, name: "Ms. R SARATH CHANDRIKA", dept: "ECE", roll: "19691A04H3", extra: "Digital Image Processing" },
      { sno: 6, name: "Ms. UPPU SIVA SRUTHI", dept: "ECE", roll: "19691A04I5", extra: "Digital Image Processing" },
      { sno: 7, name: "Mr. GOTURU VISWANATH", dept: "ECE", roll: "20695A0428", extra: "Digital Image Processing" },
      { sno: 8, name: "Ms. SHAIK SHAFIYA BALKIES", dept: "ECE", roll: "20695A0420", extra: "Digital Image Processing" },
      { sno: 9, name: "Ms. TALARI SHIREESHA", dept: "ECE", roll: "19691a04h7", extra: "Digital Image Processing" },
      { sno: 10, name: "Ms. SUBBAREDDYPALLI SREE KEERTHANA", dept: "ECE", roll: "19691A04J1", extra: "Digital Image Processing" },
      { sno: 11, name: "Mr. PALA HEMANTH", dept: "ECE", roll: "20695A0406", extra: "Digital Image Processing" },
      { sno: 12, name: "Mr. BANDARLA MANOJ", dept: "ECE", roll: "19699a0448", extra: "Digital Image Processing" },
      { sno: 13, name: "Mr. SINGARAYACHERUVU SREEKAR", dept: "ECE", roll: "19699A0495", extra: "Digital Image Processing" },
      { sno: 14, name: "Mr. BUJJIREDDY SATHISH", dept: "ECE", roll: "19699A0487", extra: "Digital Image Processing" },
      { sno: 15, name: "Ms. GANJIGUNTLA BHARGAVI", dept: "ECE", roll: "20695A0402", extra: "Digital Image Processing" },
      { sno: 16, name: "Ms. BALENENI CHINNI", dept: "ECE", roll: "20695A0403", extra: "Digital Image Processing" },
      { sno: 17, name: "Ms. VURAGAYALA PADMINI", dept: "ECE", roll: "20690A0403", extra: "Digital Image Processing" },
      { sno: 18, name: "Mr. CHAPATLA ASWANI KUMAR", dept: "ECE", roll: "20690A0401", extra: "Digital Image Processing" },
      { sno: 19, name: "Mr. CHENNAM SETTY RAJESH", dept: "ECE", roll: "20690A0404", extra: "Digital Image Processing" },
      { sno: 20, name: "Mr. SHAIK ABDULLA", dept: "ECE", roll: "19699A0401", extra: "Digital Image Processing" },
      { sno: 21, name: "Ms. THUPAKULA NANDITHA", dept: "ECE", roll: "19691A04B8", extra: "Digital Image Processing" },
      { sno: 22, name: "Ms. K.VYSHNAVI", dept: "ECE", roll: "19691A04N8", extra: "Digital Image Processing" },
      { sno: 23, name: "Ms. B.MOUNIKA", dept: "ECE", roll: "19691A04B3", extra: "Digital Image Processing" },
      { sno: 24, name: "Ms. APPIREDDY MOUNIKA", dept: "ECE", roll: "20695A0411", extra: "Digital Image Processing" },
      { sno: 25, name: "Mr. VYKUNTAM RAKESH NAIDU", dept: "ECE", roll: "20695A0417", extra: "Digital Image Processing" },
      { sno: 26, name: "Mr. NARALA SRINIVASULA REDDY", dept: "ECE", roll: "20690A0408", extra: "Digital Image Processing" },
      { sno: 27, name: "Mr. BOGGADI RAMA KISHORE REDDY", dept: "ECE", roll: "20695A0427", extra: "Digital Image Processing" },
      { sno: 28, name: "Mr. SHEIK MUDASSIR KHALANDAR BABA", dept: "ECE", roll: "19691A0487", extra: "Digital Image Processing" },
      { sno: 29, name: "Ms. DEVANENI JAHNAVI", dept: "ECE", roll: "20695A0408", extra: "Digital Image Processing" },
      { sno: 30, name: "Mr. VASANTHA HARSHITH", dept: "ECE", roll: "19691a0467", extra: "Digital Image Processing" },
      { sno: 31, name: "Ms. LOURDHU LIKHITHA YERUVA", dept: "ECE", roll: "20695A0409", extra: "Digital Image Processing" },
      { sno: 32, name: "Ms. MEEGADA VENKATA KEERTHI REDDY", dept: "ECE", roll: "20695A0425", extra: "Digital Image Processing" },
      { sno: 33, name: "Ms. YESASWINI TANGUTURU", dept: "ECE", roll: "20690A0413", extra: "Digital Image Processing" },
      { sno: 34, name: "Mr. JALLA REDDY THARUN", dept: "ECE", roll: "19691A04F6", extra: "Digital Image Processing" },
      { sno: 35, name: "Ms. CHALLA THULASI NIKHILA", dept: "ECE", roll: "20690A0410", extra: "Digital Image Processing" },
      { sno: 36, name: "Ms. RAYASAM SARANYA", dept: "ECE", roll: "19691A04H2", extra: "Digital Image Processing" },
      { sno: 37, name: "Ms. GAJULAPALLI GOPIPRIYA", dept: "ECE", roll: "19691A0458", extra: "Digital Image Processing" },
      { sno: 38, name: "Ms. VOOTUKURI GNANA PRASANNA", dept: "ECE", roll: "19691A0455", extra: "Digital Image Processing" },
      { sno: 39, name: "Ms. KUMMETHA GNANESWARI", dept: "ECE", roll: "19691A0456", extra: "Digital Image Processing" },
      { sno: 40, name: "Mr. SADU DEVANAND PRASAD", dept: "ECE", roll: "19691A0442", extra: "Digital Image Processing" },
      { sno: 41, name: "Ms. HARSHITHA TANGALA", dept: "CSE", roll: "19699A0515", extra: "Data Science" },
      { sno: 42, name: "Ms. MANDI SHAIK ASHIFA ANJUM", dept: "CSE", roll: "19699A0551", extra: "Data Science" },
      { sno: 43, name: "Mr. GUNDLURU MAHESH", dept: "MCA", roll: "20691F0045", extra: "Data Science" },
      { sno: 44, name: "Mr. HARSHAVARDHAN REDDY", dept: "MCA", roll: "20691F0034", extra: "Data Science" },
      { sno: 45, name: "Mr. MADAN MOHAN REDDY.PERAM", dept: "MCA", roll: "20691f0044", extra: "Data Science" },
      { sno: 46, name: "Mr. KOTHAREDDYGARI MANIKANTA REDDY", dept: "MCA", roll: "20691F0048", extra: "Data Science" },
      { sno: 47, name: "Mr. SHAIK RAJMATH MOHAMMAD SADIK", dept: "MCA", roll: "20691F0087", extra: "Data Science" },
      { sno: 48, name: "Ms. KOPPULA MEGHANA", dept: "MCA", roll: "20691F0086", extra: "Text Mining" },
      { sno: 49, name: "Mr. GANESH BABU P", dept: "MCA", roll: "20691F0027", extra: "Text Mining" },
      { sno: 50, name: "Mr. SHAIK SAIFULLA", dept: "MCA", roll: "20691F00B8", extra: "Text Mining" },
      { sno: 51, name: "Ms. BRS PRASOONA SWATHI LAKSHMI", dept: "MCA", roll: "20691F00A8", extra: "Text Mining" },
      { sno: 52, name: "Ms. SHAIK NAZIYA", dept: "MCA", roll: "20691F0099", extra: "Text Mining" },
      { sno: 53, name: "Ms. K.MADHURI", dept: "MCA", roll: "20691F0080", extra: "Text Mining" },
      { sno: 54, name: "Ms. MUNI JYOTHIRMAI UNDELA", dept: "MCA", roll: "20691F0089", extra: "Text Mining" },
      { sno: 55, name: "Mr. VINUKONDA RAJITH BHARGAV", dept: "MCA", roll: "20691f00b2", extra: "Text Mining" },
      { sno: 56, name: "Mr. KUNI SUDHAKARA", dept: "MCA", roll: "20691F00H6", extra: "Text Mining" },
      { sno: 57, name: "Ms. KALLURI TAHEERA", dept: "MCA", roll: "20691F00I3", extra: "Text Mining" },
      { sno: 58, name: "Ms. NIHARIKA S", dept: "MCA", roll: "20691F00A0", extra: "Text Mining" },
      { sno: 59, name: "Ms. S LEKHA", dept: "MCA", roll: "20691F0079", extra: "Text Mining" },
      { sno: 60, name: "Mr. PRABHAT CHAURASIYA", dept: "MCA", roll: "20691F00A6", extra: "Text Mining" },
      { sno: 61, name: "Mr. G SUDHAKAR", dept: "MCA", roll: "20691F00C7", extra: "Text Mining" },
      { sno: 62, name: "Mr. VADDE CHAITHANYA", dept: "MCA", roll: "20691F0069", extra: "Text Mining" },
      { sno: 63, name: "Mr. ATHIKARI VENKATA PRASAD", dept: "MCA", roll: "20691F00C9", extra: "Text Mining" },
      { sno: 64, name: "Mr. KOTAGADDA PRASANTH", dept: "MBA", roll: "20691E00C5", extra: "Business Research Methods" },
      { sno: 65, name: "Mr. N.SUSHANTH", dept: "MBA", roll: "20691E00E4", extra: "Business Research Methods" },
      { sno: 66, name: "Mr. KANCHARLA HARSHA SAI", dept: "MBA", roll: "20691E0053", extra: "Business Research Methods" },
      { sno: 67, name: "Ms. DONTHI AVANI", dept: "MBA", roll: "20691E0013", extra: "Business Research Methods" },
      { sno: 68, name: "Mr. ASHOK KUMAR", dept: "MBA", roll: "20691E0009", extra: "Business Research Methods" },
      { sno: 69, name: "Ms. DIGAVINTI DEEPA CHANDANA", dept: "MBA", roll: "20691E0031", extra: "Business Research Methods" },
      { sno: 70, name: "Ms. PASALA RAMA", dept: "MBA", roll: "20691E0055", extra: "Business Research Methods" },
      { sno: 71, name: "Ms. ANNAM JAHNAVI", dept: "MBA", roll: "20691E0058", extra: "Business Research Methods" },
      { sno: 72, name: "Ms. MAHAMMAD HANEEFA BANU", dept: "MBA", roll: "20691E0040", extra: "Business Research Methods" },
      { sno: 73, name: "Ms. DEEPTHI S N", dept: "MBA", roll: "20691E0032", extra: "Business Research Methods" },
      { sno: 74, name: "Mr. SIDDALA SUDHARSHAN REDDY", dept: "MBA", roll: "20691E00I9", extra: "Business Research Methods" },
      { sno: 75, name: "Ms. AKUTHOTA SANDHYA", dept: "MBA", roll: "20691E00G0", extra: "Business Research Methods" },
      { sno: 76, name: "Mr. B.SASI KUMAR", dept: "MBA", roll: "20691E00G3", extra: "Business Research Methods" },
      { sno: 77, name: "Ms. SURAGIRI SAI VARSHINI", dept: "MBA", roll: "20691E00F4", extra: "Business Research Methods" },
      { sno: 78, name: "Mr. BURRA THARUN", dept: "MECH", roll: "19691A03E6", extra: "Product Semantics" },
    ],
  },
  {
    title: "Asia University Virtual Summer Program 2021 (5th Batch)",
    country: "Taiwan",
    partner: "Asia University",
    period: "2 – 24 August 2021",
    description: "Intensive summer program covering emerging computing trends and artificial intelligence.",
    participants: [
      { sno: 1, name: "Mr. THOTA ROOPESH", dept: "CSE", roll: "18691A05B3", extra: "Artificial Intelligence" },
      { sno: 2, name: "Ms. V. GREESHMA", dept: "ECE", roll: "18691A0451", extra: "Artificial Intelligence" },
      { sno: 3, name: "Ms. SHAIK DAHUBAIGARI ANISA", dept: "ECE", roll: "18691A0405", extra: "Artificial Intelligence" },
      { sno: 4, name: "Mr. GONDHIMALLA MYTHRESH", dept: "ECE", roll: "18691A04A8", extra: "Artificial Intelligence" },
      { sno: 5, name: "Mr. M.DEEPTHI VARDHAN", dept: "ECE", roll: "18691A0432", extra: "Artificial Intelligence" },
      { sno: 6, name: "Ms. NAGOTHI DIVYA", dept: "ECE", roll: "18691A0437", extra: "Artificial Intelligence" },
      { sno: 7, name: "Mr. OBULA REDDY GARI MAHESH REDDY", dept: "ECE", roll: "18691A0492", extra: "Artificial Intelligence" },
      { sno: 8, name: "Ms. YERRAGUDI LOHITHA", dept: "ECE", roll: "18691A0486", extra: "Artificial Intelligence" },
      { sno: 9, name: "Ms. NANDAVARAM SHIRISHA", dept: "ECE", roll: "18691A04H5", extra: "Artificial Intelligence" },
      { sno: 10, name: "Ms. KONKALA VYSHNAVI", dept: "ECE", roll: "18699A04B3", extra: "Artificial Intelligence" },
      { sno: 11, name: "Ms. ADUSUMALLI HARITHA", dept: "ECE", roll: "18691A0458", extra: "Artificial Intelligence" },
      { sno: 12, name: "Ms. OBULAMPALLI CHANDANA", dept: "ECE", roll: "18691A0430", extra: "Artificial Intelligence" },
      { sno: 13, name: "Mr. MAHESH BABU V", dept: "ECE", roll: "19695A0414", extra: "Artificial Intelligence" },
      { sno: 14, name: "Mr. TADIPATRI LAKSHMIKAR REDDY", dept: "ECE", roll: "18691A0484", extra: "Artificial Intelligence" },
      { sno: 15, name: "Mr. SANDA MOHAN KUMAR", dept: "ECE", roll: "18691A04A2", extra: "Artificial Intelligence" },
      { sno: 16, name: "Mr. PALLAMKUPPAM ROHITH", dept: "ECE", roll: "18691A04F3", extra: "Artificial Intelligence" },
      { sno: 17, name: "Ms. LEKKALA GIRIJA", dept: "ECE", roll: "18691A0446", extra: "Artificial Intelligence" },
      { sno: 18, name: "Mr. LINGASANI BHASKAR REDDY", dept: "ECE", roll: "18691A0422", extra: "Artificial Intelligence" },
      { sno: 19, name: "Ms. GADIPUTI NARMADA", dept: "ECE", roll: "18691A04B6", extra: "Artificial Intelligence" },
      { sno: 20, name: "Mr. PEDDANNAGARI JAYAPAL REDDY", dept: "ECE", roll: "18691A0475", extra: "Artificial Intelligence" },
      { sno: 21, name: "Ms. DAYADI SHARON JERUSHA", dept: "ECE", roll: "18691A04H3", extra: "Artificial Intelligence" },
      { sno: 22, name: "Ms. SHAIK SHEHANAZ", dept: "ECE", roll: "18691A04H4", extra: "Artificial Intelligence" },
      { sno: 23, name: "Ms. PAIDI HARITHA", dept: "MCA", roll: "20691F0033", extra: "Artificial Intelligence" },
      { sno: 24, name: "Mr. MUNIGOTI MANJUNATH", dept: "MCA", roll: "20691F0049", extra: "Artificial Intelligence" },
      { sno: 25, name: "Ms. BANDARU SANDHYA RANI", dept: "MCA", roll: "20691F00G1", extra: "Artificial Intelligence" },
      { sno: 26, name: "Ms. GELAVANI LAHARI", dept: "MCA", roll: "20691F0042", extra: "Artificial Intelligence" },
      { sno: 27, name: "MS. KALLURI THAHEERA", dept: "MCA", roll: "20691F00I3", extra: "Artificial Intelligence" },
      { sno: 28, name: "Mr. P. GANESH BABU", dept: "MCA", roll: "20691F0027", extra: "Artificial Intelligence" },
      { sno: 29, name: "Ms. UNDELA MUNI JYOTHIRMAI", dept: "MCA", roll: "20691F0089", extra: "Artificial Intelligence" },
      { sno: 30, name: "Ms. BEERANNAGARI GEETHA", dept: "MCA", roll: "20691F00D7", extra: "Artificial Intelligence" },
      { sno: 31, name: "Mr. DEGANIPALLE AJAY REDDY", dept: "MCA", roll: "20691F00D0", extra: "Artificial Intelligence" },
      { sno: 32, name: "Mr. A. SREEKANTH", dept: "MCA", roll: "20691F00H1", extra: "Artificial Intelligence" },
      { sno: 33, name: "Ms. P SUPRIYA", dept: "MCA", roll: "20691F00H9", extra: "Artificial Intelligence" },
      { sno: 34, name: "Mr. ATHIKARI VENKATA PRASAD", dept: "MCA", roll: "20691F00C9", extra: "Artificial Intelligence" },
      { sno: 35, name: "Ms. MARKAPURAM REVATHI", dept: "MCA", roll: "20691F00F4", extra: "Artificial Intelligence" },
      { sno: 36, name: "Ms. THALARI VASAVI", dept: "MCA", roll: "20691F00J0", extra: "Artificial Intelligence" },
      { sno: 37, name: "Ms. POOLA CHANDANA", dept: "MCA", roll: "20691F0019", extra: "Artificial Intelligence" },
      { sno: 38, name: "Ms. V. MOUNIKA", dept: "MCA", roll: "20691F00E5", extra: "Artificial Intelligence" },
      { sno: 39, name: "Ms. MALKARI JAYASREE", dept: "MCA", roll: "20691F00D9", extra: "Artificial Intelligence" },
      { sno: 40, name: "Ms. K.MADHURI", dept: "MCA", roll: "20691F0080", extra: "Artificial Intelligence" },
      { sno: 41, name: "Ms. BRS PRASOONA SWATHI LAKSHMI", dept: "MCA", roll: "20691F00A8", extra: "Artificial Intelligence" },
      { sno: 42, name: "Mr. PALETI MANAS KUMAR", dept: "MCA", roll: "20691F00E3", extra: "Artificial Intelligence" },
      { sno: 43, name: "Mr. SHAIK SAIFULLA", dept: "MCA", roll: "20691F00B8", extra: "Artificial Intelligence" },
      { sno: 44, name: "Mr. AKULETY HARSHA VARDHAN", dept: "Mech", roll: "18691A0331", extra: "Artificial Intelligence" },
      { sno: 45, name: "Mr. MARRIBOYINA THARUN YADAV", dept: "Mech", roll: "18691A03E6", extra: "Artificial Intelligence" },
      { sno: 46, name: "Mr. KURUBA AKHIL", dept: "Mech", roll: "18691A0309", extra: "Artificial Intelligence" },
      { sno: 47, name: "Mr. M.B.JASWANTH", dept: "Mech.", roll: "18691A0338", extra: "Artificial Intelligence" },
      { sno: 48, name: "Mr. BHARATH SIMHA V", dept: "ECE", roll: "18699A0412", extra: "Web Design" },
      { sno: 49, name: "Mr. PATAN ASLAM", dept: "ECE", roll: "18699A04B7", extra: "Web Design" },
      { sno: 50, name: "Mr. GULURU MANOJ REDDY", dept: "ECE", roll: "18699A0461", extra: "Web Design" },
      { sno: 51, name: "Ms. ALLURI EKSHITHA", dept: "MCA", roll: "20691F00D5", extra: "Web Design" },
      { sno: 52, name: "Ms. RATAKONDA SHALINI PRIYA", dept: "MCA", roll: "20691F00G4", extra: "Web Design" },
      { sno: 53, name: "Ms. SOWMYA E. C", dept: "MCA", roll: "20691F00C2", extra: "Web Design" },
      { sno: 54, name: "Mr. B REDDI SHEKHAR", dept: "MCA", roll: "20691F00F3", extra: "AI Application in Management" },
      { sno: 55, name: "Ms. YEDUGURU SAI KEERTHANA", dept: "MCA", roll: "20691F00F6", extra: "AI Application in Management" },
      { sno: 56, name: "Mr. NAGASAMUDHRAM PRAVEEN KUMAR", dept: "MCA", roll: "20691F00E9", extra: "AI Application in Management" },
      { sno: 57, name: "Ms. REDDEM SREELATHA", dept: "MCA", roll: "20691F00H3", extra: "AI Application in Management" },
      { sno: 58, name: "Mr. PATAN THABREZ", dept: "MCA", roll: "20691F00I6", extra: "AI Application in Management" },
      { sno: 59, name: "Mr. CHEVITI SOMA SAI DINESH", dept: "MCA", roll: "20691F00F5", extra: "AI Application in Management" },
      { sno: 60, name: "Ms. TALAMARLA PALLAVI", dept: "MCA", roll: "20691F00E8", extra: "AI Application in Management" },
      { sno: 61, name: "Ms. SHAIK SUMIYA", dept: "MCA", roll: "20691F00H7", extra: "AI Application in Management" },
      { sno: 62, name: "Ms. JINKALA DIVYA", dept: "MCA", roll: "20691F00D4", extra: "AI Application in Management" },
    ],
  },
  {
    title: "Asia University Virtual Exchange Program – Spring Semester 2021",
    country: "Taiwan",
    partner: "Asia University",
    period: "22 February – 25 June 2021",
    description: "Online study exchange program focusing on computing, communication, and languages.",
    participants: [
      { sno: 1, name: "Mr Munipranay Polampalli", dept: "CSE", roll: "17691A0595", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 2, name: "Mr. Munnaf Koilakuntla", dept: "CSE", roll: "17691A0581", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 3, name: "Mr. D Lokanath Reddy", dept: "CSE", roll: "17691A0561", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 4, name: "Mr. P Pratheek Reddy", dept: "CSE", roll: "17691A0596", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 5, name: "Mr. Sai Sumith G", dept: "CSE", roll: "17691A1241", extra: "Computer Networks" },
      { sno: 6, name: "Ms. Ramineni Sravani", dept: "ECE", roll: "17699A0496", extra: "Digital Image Processing" },
      { sno: 7, name: "Ms. M Sravani Lakshmi", dept: "ECE", roll: "17691A04I5", extra: "Digital Image Processing" },
      { sno: 8, name: "Ms. P V Sravani", dept: "ECE", roll: "17699A0494", extra: "Digital Image Processing" },
      { sno: 9, name: "Mr. P Vineeth", dept: "ECE", roll: "17699A04B6", extra: "Digital Image Processing" },
      { sno: 10, name: "Mr. Akula Saisankar", dept: "ECE", roll: "17699A0482", extra: "Digital Image Processing" },
      { sno: 11, name: "Mr. Madduri Sai Chandu", dept: "ECE", roll: "17699A0478", extra: "Digital Image Processing" },
      { sno: 12, name: "Mr. Talari Somasekhar", dept: "ECE", roll: "17691A04I2", extra: "Digital Image Processing" },
      { sno: 13, name: "Mr. Swarna Deva Wesley Jawahar", dept: "ECE", roll: "17691A04N7", extra: "Digital Image Processing" },
      { sno: 14, name: "Mr. Godhana Durga Prasad", dept: "MBA", roll: "19691E0034", extra: "Investment Portfolio Analysis" },
      { sno: 15, name: "Ms. Aleke Hithyshi", dept: "MBA", roll: "19691E0051", extra: "Investment Portfolio Analysis" },
      { sno: 16, name: "Ms. Desha Ramya", dept: "MBA", roll: "19691E00D1", extra: "Investment Portfolio Analysis" },
      { sno: 17, name: "Mr. Kuchigalla Hari Krishna", dept: "MBA", roll: "19691E0044", extra: "Investment Portfolio Analysis" },
      { sno: 18, name: "Mr. S.R. Naveen kumar", dept: "MBA", roll: "19691E00A8", extra: "Investment Portfolio Analysis" },
      { sno: 19, name: "Ms. Male Pallavi", dept: "MBA", roll: "19691E00O0", extra: "Investment Portfolio Analysis" },
      { sno: 20, name: "Mr. Shaik Mubarak", dept: "ECE", roll: "17691A04A7", extra: "Machine Learning" },
      { sno: 21, name: "Mr. Thimmapuram Piyush Datta", dept: "ECE", roll: "17691A04D4", extra: "Machine Learning" },
      { sno: 22, name: "Mr. Shaik Masthan Shareef", dept: "ECE", roll: "17691A0497", extra: "Machine Learning" },
      { sno: 23, name: "Mr. Somu Veera Sekhar Reddy", dept: "ECE", roll: "17699A04B0", extra: "Machine Learning" },
      { sno: 24, name: "Mr. Shaik Javeed Basha", dept: "ECE", roll: "17691A0463", extra: "Machine Learning" },
      { sno: 25, name: "Ms. Ganesham Sowmya", dept: "ECE", roll: "17699A0493", extra: "Machine Learning" },
      { sno: 26, name: "Mr.K Fayaz", dept: "ECE", roll: "18695A0443", extra: "Machine Learning" },
      { sno: 27, name: "Mr. Nagirimadugu Nageswar Reddy", dept: "ECE", roll: "17699A0462", extra: "Machine Learning" },
      { sno: 28, name: "Ms. Dhara Sruthi", dept: "ECE", roll: "17691A04J5", extra: "Machine Learning" },
      { sno: 29, name: "Mr. Vayalpadu Harish", dept: "ECE", roll: "18695A0439", extra: "Machine Learning" },
      { sno: 30, name: "Ms. Valleru Muralidharnaidu Sucharitha", dept: "ECE", roll: "17699A0499", extra: "Machine Learning" },
      { sno: 31, name: "Mr. V. Sunil Kumar Reddy", dept: "ECE", roll: "17699A04A0", extra: "Machine Learning" },
      { sno: 32, name: "Ms. Nandyala Vandana Reddy", dept: "ECE", roll: "17691A04L6", extra: "Machine Learning" },
      { sno: 33, name: "Mr. S. Reddy Prasad", dept: "ECE", roll: "18695A0438", extra: "Machine Learning" },
      { sno: 34, name: "Mr. Pujari Jeevan Kumar", dept: "ECE", roll: "18695A0444", extra: "Machine Learning" },
      { sno: 35, name: "Mr. Bodingar Vishnu", dept: "ECE", roll: "17699A04B9", extra: "Machine Learning" },
      { sno: 36, name: "Ms. Tejaswani Chinnamallayyagari", dept: "ECE", roll: "17699A04A8", extra: "Machine Learning" },
      { sno: 37, name: "Mr. P Shahulkhan", dept: "ECE", roll: "18690A0418", extra: "Machine Learning" },
      { sno: 38, name: "Mr. Teja Bhargava Reddy Mallappagari", dept: "ECE", roll: "17699A04A7", extra: "Machine Learning" },
      { sno: 39, name: "Mr. Poola Saibhagavan", dept: "ECE", roll: "18695A0429", extra: "Machine Learning" },
      { sno: 40, name: "Ms. K.N. Sri Chandana", dept: "ECE", roll: "17691A04J2", extra: "Machine Learning" },
      { sno: 41, name: "Mr. N. Izaz Ahmed", dept: "ECE", roll: "17691A0478", extra: "Machine Learning" },
      { sno: 42, name: "Mr. Poojari Sreekanth", dept: "ECE", roll: "17691A04I9", extra: "Machine Learning" },
      { sno: 43, name: "Mr. Rangam Raviteja", dept: "ECE", roll: "17699A0472", extra: "Machine Learning" },
      { sno: 44, name: "Ms. Bandlapalli Rohini", dept: "ECE", roll: "17699A0474", extra: "Machine Learning" },
      { sno: 45, name: "Ms. Manyamgiri Navya", dept: "ECE", roll: "17699A0464", extra: "Machine Learning" },
      { sno: 46, name: "Ms. Siddimatam Madeeha Jeelani", dept: "ECE", roll: "17691A0483", extra: "Machine Learning" },
      { sno: 47, name: "Ms. Rayadurgam Venkata Sai Meghana", dept: "ECE", roll: "17691A04M3", extra: "Machine Learning" },
      { sno: 48, name: "Ms. Susmitha Eerthineni", dept: "ECE", roll: "17699A04A5", extra: "Machine Learning" },
      { sno: 49, name: "Ms. Vineesha Gorla", dept: "ECE", roll: "17691A04N3", extra: "Machine Learning" },
      { sno: 50, name: "Mr. N V Srinivasulu", dept: "ECE", roll: "17691A04J4", extra: "Machine Learning" },
      { sno: 51, name: "Ms. Yanamala Sindhu", dept: "ECE", roll: "17699A0489", extra: "Machine Learning" },
      { sno: 52, name: "Mr. Putluru Nagamalleswara Reddy", dept: "ECE", roll: "18695A0437", extra: "Machine Learning" },
      { sno: 53, name: "Mr. Venkateswar Reddy Velugu", dept: "ECE", roll: "18690A0415", extra: "Machine Learning" },
      { sno: 54, name: "Mr. A Roopendra Kumar", dept: "ECE", roll: "17699A0475", extra: "Machine Learning" },
      { sno: 55, name: "Mr. Vinod Kumar Reddy Makireddy", dept: "ECE", roll: "18695A0440", extra: "Machine Learning" },
      { sno: 56, name: "Mr. Praveen Kumar Reddy", dept: "ECE", roll: "18695A0420", extra: "Machine Learning" },
      { sno: 57, name: "Mr. Kishore Kumar Reddy P", dept: "ECE", roll: "17691A0475", extra: "Machine Learning" },
      { sno: 58, name: "Mr. Vaddipuri Mahesh", dept: "ECE", roll: "17691A0490", extra: "Machine Learning" },
      { sno: 59, name: "Ms. P. M. Kousalya", dept: "ECE", roll: "17691A0477", extra: "Machine Learning" },
      { sno: 60, name: "Mr. Sunakanti Vara Prasad", dept: "ECE", roll: "17691A04L7", extra: "Machine Learning" },
      { sno: 61, name: "Ms. S. Lakshmi Prasanna", dept: "ECE", roll: "17691A0480", extra: "Machine Learning" },
      { sno: 62, name: "Mr. Yellala Venkata Jagadananda Reddy", dept: "ECE", roll: "18690A0414", extra: "Machine Learning" },
      { sno: 63, name: "Mr. V Venkata Surya Kiran Naidu", dept: "ECE", roll: "17699A04B3", extra: "Machine Learning" },
      { sno: 64, name: "Mr. Konduru Vinod Kumar Raju", dept: "ECE", roll: "17699A04B7", extra: "Machine Learning" },
      { sno: 65, name: "Ms. Vangimalli Mounika", dept: "ECE", roll: "18690A0416", extra: "Machine Learning" },
      { sno: 66, name: "Mr. Mantrala Abhinay", dept: "ECE", roll: "18690A0423", extra: "Machine Learning" },
      { sno: 67, name: "Mr. J.Venkata Rakesh", dept: "ECE", roll: "17691A04M2", extra: "Machine Learning" },
      { sno: 68, name: "Ms. Aaliya Samreen Shaik", dept: "ECE", roll: "17691A0406", extra: "Machine Learning" },
      { sno: 69, name: "Mr. Sibbala Narendra", dept: "ECE", roll: "18695A0441", extra: "Machine Learning" },
      { sno: 70, name: "Ms. R Sravani", dept: "ECE", roll: "17699A0495 ", extra: "Machine Learning" },
      { sno: 71, name: "Ms. Kanala Sreevani", dept: "ECE", roll: "17699A0498", extra: "Machine Learning" },
      { sno: 72, name: "Ms. Bisalamanepalli Bhavitha", dept: "ECE", roll: "17691A0422", extra: "Machine Learning" },
      { sno: 73, name: "Ms. Mallela Deekshitha", dept: "ECE", roll: "17691A0429", extra: "Machine Learning" },
      { sno: 74, name: "Mr. Y Suresh Reddy", dept: "ECE", roll: "17699A04A2 ", extra: "Machine Learning" },
      { sno: 75, name: "Mr. Puttaparthi Venugopal Reddy", dept: "ECE", roll: "17699A04B5 ", extra: "Machine Learning" },
      { sno: 76, name: "Ms. Ananthaneni Sravani", dept: "ECE", roll: "18690A0413", extra: "Machine Learning" },
      { sno: 77, name: "Mr. Sagi Chinna Obulu", dept: "Mechanical", roll: "18695A0336", extra: "Machine Learning" },
      { sno: 78, name: "Mr. S Sasikumar", dept: "Mechanical", roll: "17691A03H9", extra: "Machine Learning" },
      { sno: 79, name: "Mr. Guggilla Sreenath", dept: "Mechanical", roll: "18695A0330", extra: "Machine Learning" },
      { sno: 80, name: "Mr. Ganigipenta Sai Kumar", dept: "Mechanical", roll: "17691A03G5", extra: "Machine Learning" },
      { sno: 81, name: "Mr. Bonasi Ranjith Kumar Reddy", dept: "Mechanical", roll: "17691A03E8", extra: "Machine Learning" },
      { sno: 82, name: "Mr. Reddy Hemanth Babu M", dept: "Mechanical", roll: "17691A03F5", extra: "Machine Learning" },
      { sno: 83, name: "Ms. Makireddy Sushma Reddy", dept: "ECE", roll: " 17699A04A4", extra: "Machine Learning" },
      { sno: 84, name: "Mr. Ija Suchendra", dept: "Mechanical", roll: "18695A0337", extra: "Machine Learning" },
      { sno: 85, name: "Ms. Kundelu Gayathri", dept: "MBA", roll: "19691E0039", extra: "Managerial Ethics and Corporate Social Responsibility (Ethic 2)" },
      { sno: 86, name: "Ms. Nallabothula Jyothi Priyanka", dept: "MBA", roll: "19691E0057", extra: "Managerial Ethics and Corporate Social Responsibility (Ethic 2)" },
      { sno: 87, name: "Ms. Bhojanapu Bhargavi", dept: "MBA", roll: "19691E0015", extra: "Managerial Ethics and Corporate Social Responsibility (Ethic 2)" },
      { sno: 88, name: "Ms. Adi Andhra Chandrika", dept: "MBA", roll: "19691E0022", extra: "Managerial Ethics and Corporate Social Responsibility (Ethic 2)" },
      { sno: 89, name: "Mr. Shaik Mohemmed Ghouse", dept: "MBA", roll: "19691E0089", extra: "Managerial Ethics and Corporate Social Responsibility (Ethic 2)" },
      { sno: 90, name: "Ms. Gurram Parinitha", dept: "CSE", roll: "17691A0591", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 91, name: "Ms. Priyanka Kodidela", dept: "CSE", roll: "17691A0599", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 92, name: "Mr. Rohith Bopathi", dept: "CSE", roll: "17691A0581", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 93, name: "Mr. Puthin Kumar Reddy", dept: "CSE", roll: "17691A05A3", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 94, name: "Mr. Shaik Nayaz Basha", dept: "CSE", roll: "17691A0588", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 95, name: "Mr. Shaik Mansoor", dept: "CSE", roll: "17691A0573", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 96, name: "Mr. Shaik Nawaz", dept: "CSE", roll: "17691A0587", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 97, name: "Ms. M Pruthvi", dept: "CSE", roll: "17691A05A2", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 98, name: "Mr. P Mohith", dept: "CSE", roll: "17691A0578", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 99, name: "Mr. Akula Mahesh Babu", dept: "CSE", roll: "17691A0567", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 100, name: "Mr. Ketham Reddy Mohan Vamsi Reddy", dept: "CSE", roll: "17691A0577", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 101, name: "Ms. K Priyanka", dept: "CSE", roll: "17691A0598", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 102, name: "Ms. K Naga Poojitha", dept: "CSE", roll: "17691A0582", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 103, name: "Ms. C. Rishika Ram", dept: "CSE", roll: "17691A05A9", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 104, name: "Ms. Somisetty Sai Harsha", dept: "CSE", roll: "17691A05B7", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 105, name: "Mr. Abhishek Pasupulate", dept: "EEE", roll: "17691A0201", extra: "Python Programming Basics for Data Science and Machine Learning" },
      { sno: 106, name: "Mr. K Uday Kumar", dept: "Mechanical", roll: "17691A03K7", extra: "Python Programming Basics for Data Science and Machine Learning" },
    ],
  },
  {
    title: "Asia University Virtual Winter Program 2020-21",
    country: "Taiwan",
    partner: "Asia University",
    period: "18 January – 5 February 2021",
    description: "Winter school program covering Artificial Intelligence and web applications.",
    participants: [
      { sno: 1, name: "Mr. Koduru Balasubramanyam", dept: "CSE", roll: "18691A0511", extra: "Artificial Intelligence (AI)" },
      { sno: 2, name: "Mr. Peesugalla Dinesh", dept: "CSE", roll: "18691A0526", extra: "Artificial Intelligence (AI)" },
      { sno: 3, name: "Mr. Pogathota Viswanath Srujan", dept: "CSE", roll: "18691A05E0", extra: "Artificial Intelligence (AI)" },
      { sno: 4, name: "Ms. Sandra Lekhana", dept: "CSE", roll: "18699A0552", extra: "Artificial Intelligence (AI)" },
      { sno: 5, name: "Mr. Shaik. Asif Basha", dept: "CSE", roll: "18699A0502", extra: "Artificial Intelligence (AI)" },
      { sno: 6, name: "Ms. Tanguturi Manasa", dept: "ECE", roll: "18691A0494", extra: "Artificial Intelligence (AI)" },
      { sno: 7, name: "Mr. Yellammagari Madhu", dept: "ECE", roll: "18691A0488", extra: "Artificial Intelligence (AI)" },
      { sno: 8, name: "Ms. Ellanki Harshitha", dept: "ECE", roll: "18691A0488", extra: "Artificial Intelligence (AI)" },
      { sno: 9, name: "Ms. Shaik Shehanaz", dept: "ECE", roll: "18691A04H4", extra: "Artificial Intelligence (AI)" },
      { sno: 10, name: "Mr. Abdul Sameer Shiak", dept: "ECE", roll: "18699A0401", extra: "Artificial Intelligence (AI)" },
      { sno: 11, name: "Ms. Dayadi Sharon Jerusha", dept: "ECE", roll: "18691A04H3", extra: "Artificial Intelligence (AI)" },
      { sno: 12, name: "Ms. Chowla Akhila", dept: "ECE", roll: "19690A0401", extra: "Artificial Intelligence (AI)" },
      { sno: 13, name: "Ms. Nukareddy Devanandini", dept: "ECE", roll: "18699A0424", extra: "Artificial Intelligence (AI)" },
      { sno: 14, name: "Ms.Kommireddy Bhavani", dept: "ECE", roll: "18699A0416", extra: "Artificial Intelligence (AI)" },
      { sno: 15, name: "Ms. Animela Niharika", dept: "ECE", roll: "18699A0460", extra: "Artificial Intelligence (AI)" },
      { sno: 16, name: "Ms. Korrapati Nagareddy Sai Monisha", dept: "ECE", roll: "18699A0457", extra: "Artificial Intelligence (AI)" },
      { sno: 17, name: "Ms. Gangireddy Kusuma Priya", dept: "ECE", roll: "18699A0444", extra: "Artificial Intelligence (AI)" },
      { sno: 18, name: "Mr. Allam Mahesh Kumar Reddy", dept: "ECE", roll: "18699A0449", extra: "Artificial Intelligence (AI)" },
      { sno: 19, name: "Ms. Pidugu Manasa", dept: "ECE", roll: "18699A0452", extra: "Artificial Intelligence (AI)" },
      { sno: 20, name: "Ms. Bukka Kavya", dept: "ECE", roll: "18699A0443", extra: "Artificial Intelligence (AI)" },
      { sno: 21, name: "Ms. Andela Nethra", dept: "ECE", roll: "18699A0459", extra: "Artificial Intelligence (AI)" },
      { sno: 22, name: "Mr. S Gaurav Desai", dept: "ECE", roll: "18699A0431", extra: "Artificial Intelligence (AI)" },
      { sno: 23, name: "Ms.Y Girisree", dept: "ECE", roll: "18699A0432", extra: "Artificial Intelligence (AI)" },
      { sno: 24, name: "Mr. K Uday Kiran", dept: "ECE", roll: "18699A0498", extra: "Artificial Intelligence (AI)" },
      { sno: 25, name: "Ms. Poola Maneesha", dept: "ECE", roll: "18699A0452", extra: "Artificial Intelligence (AI)" },
      { sno: 26, name: "Ms. Yellela Jahnavi", dept: "ECE", roll: "18699A0439", extra: "Artificial Intelligence (AI)" },
      { sno: 27, name: "Mr. Shaik Mohammed Shoyab", dept: "EEE", roll: "18691A0244", extra: "Artificial Intelligence (AI)" },
      { sno: 28, name: "Mr. Pradyumna Simha. T", dept: "Mechanical", roll: "18691A0389", extra: "Artificial Intelligence (AI)" },
      { sno: 29, name: "Mr. Akram. S", dept: "Mechanical", roll: "18691A0310", extra: "Artificial Intelligence (AI)" },
      { sno: 30, name: "Ms. Gundluru Rushitha", dept: "Mechanical", roll: "18691A03A5", extra: "Artificial Intelligence (AI)" },
      { sno: 31, name: "Mr. Angadala Dileepkumar", dept: "Mechanical", roll: "19695A0374", extra: "Artificial Intelligence (AI)" },
      { sno: 32, name: "Mr. Kuncha Tharakesh", dept: "Mechanical", roll: "18691A0310", extra: "Artificial Intelligence (AI)" },
      { sno: 33, name: "Mr. Sajjanna Gari Rakesh", dept: "Mechanical", roll: "18691A0397", extra: "Artificial Intelligence (AI)" },
      { sno: 34, name: "Mr. Yammanuru Jagadeeswara Reddy", dept: "Mechanical", roll: "19695A0306", extra: "Artificial Intelligence (AI)" },
      { sno: 35, name: "Mr. Reddy Manoj Sai", dept: "Mechanical", roll: "18691A03A0", extra: "Artificial Intelligence (AI)" },
      { sno: 36, name: "Mr. Eligaram Reddy Prasad", dept: "Mechanical", roll: "18691A03A2", extra: "Artificial Intelligence (AI)" },
      { sno: 37, name: "Ms. Jajala Naga Pavithra", dept: "MCA", roll: "19691F0069", extra: "Web Design" },
      { sno: 38, name: "Ms. Tippu Noore Nusrath", dept: "MCA", roll: "19691F0078", extra: "Web Design" },
      { sno: 39, name: "Ms. Gangula Preethi", dept: "MCA", roll: "19691F0090", extra: "Web Design" },
      { sno: 40, name: "Ms. S Rehanuma Kousar", dept: "MCA", roll: "19691F00A1", extra: "Web Design" },
      { sno: 41, name: "Ms. K Rajitha", dept: "MCA", roll: "19691F0094", extra: "Web Design" },
      { sno: 42, name: "Ms. Macharam Pooja", dept: "CSE", roll: "18699A0527", extra: "Web Design" },
      { sno: 43, name: "Ms. Bangaru Tejaswari", dept: "CSE", roll: "18699A0546", extra: "Web Design" },
      { sno: 44, name: "Mr. Chinnam Harisrujan", dept: "CSE", roll: "18691A0544", extra: "Web Design" },
      { sno: 45, name: "Ms. Mummaadi Raane", dept: "CSE", roll: "18699A0529", extra: "Web Design" },
      { sno: 46, name: "Ms. M.Ramya", dept: "ECE", roll: "18691A04E8", extra: "Web Design" },
      { sno: 47, name: "Ms. K.Poojitha", dept: "ECE", roll: "18691A04D2", extra: "Web Design" },
      { sno: 48, name: "Ms. V.Poojitha", dept: "ECE", roll: "18691A04D3", extra: "Web Design" },
      { sno: 49, name: "Mr. Mallempallli Syed Dadapeer", dept: "MCA", roll: "19691F00C5", extra: "Web Design" },
      { sno: 50, name: "Mr. Koti Venkata Yuvatej Kumar", dept: "MCA", roll: "19691F00E2", extra: "Web Design" },
    ],
  },
  {
    title: "Asia University Virtual Exchange Program – Fall Semester 2020",
    country: "Taiwan",
    partner: "Asia University",
    period: "21 September 2020 – 19 January 2021",
    description: "First online semester-long exchange program initiated during global travel restrictions.",
    participants: [
      { sno: 1, name: "Mr. Shaik Babjan", dept: "ECE", roll: "17691A0414", extra: "Artificial Intelligence (AI)" },
      { sno: 2, name: "Mr. Shaik Ali Nawaz", dept: "ECE", roll: "17699A0402", extra: "Artificial Intelligence (AI)" },
      { sno: 3, name: "Mr. Chandragiri Vishnu Vardhan", dept: "ECE", roll: "17691A04N5", extra: "Artificial Intelligence (AI)" },
      { sno: 4, name: "Mr. Shaik Khazi Mohammad Affan", dept: "ECE", roll: "17699A0456", extra: "Artificial Intelligence (AI)" },
      { sno: 5, name: "Mr. Gorantla Ravi Teja", dept: "ECE", roll: "17691A04F0", extra: "Artificial Intelligence (AI)" },
      { sno: 6, name: "Ms. Baripireddy Bhavitha", dept: "ECE", roll: "17691A0421", extra: "Artificial Intelligence (AI)" },
      { sno: 7, name: "Ms. Tholeti Gayathri", dept: "ECE", roll: "17691A0438", extra: "Artificial Intelligence (AI)" },
      { sno: 8, name: "Mr. Perikipalli Arunteja", dept: "ECE", roll: "18695A0431", extra: "Artificial Intelligence (AI)" },
      { sno: 9, name: "Ms. B Kaushalya", dept: "ECE", roll: "17691A0418", extra: "Artificial Intelligence (AI)" },
      { sno: 10, name: "Mr. Marthala Praveen Kumar Reddy", dept: "ECE", roll: "17691A03D2", extra: "Artificial Intelligence (AI)" },
      { sno: 11, name: "Mr. Billi Bhargav", dept: "ECE", roll: "17691A0420", extra: "Data Science" },
      { sno: 12, name: "Mr. Ethamukkala Gnanendra Naidu", dept: "ECE", roll: "17699A0423", extra: "Data Science" },
      { sno: 13, name: "Ms. Vadla Madhuri", dept: "ECE", roll: "17699A0453", extra: "Data Science" },
      { sno: 14, name: "Ms. Maddala Maneesha", dept: "ECE", roll: "17699A0454", extra: "Data Science" },
      { sno: 15, name: "Mr. Vitalam Madhana Teja", dept: "ECE", roll: "18691A0487", extra: "Text Mining" },
      { sno: 16, name: "Mr. Malichetti Hima Vignesh", dept: "ECE", roll: "17699A0436", extra: "Text Mining" },
      { sno: 17, name: "Mr. Saparam Gnana Srinidhi", dept: "ECE", roll: "17699A0421", extra: "Text Mining" },
    ],
  },
  {
    title: "Asia University Virtual Summer Program 2020",
    country: "Taiwan",
    partner: "Asia University",
    period: "10 – 25 August 2020",
    description: "Short-term summer program on AI foundations and management applications.",
    participants: [
      { sno: 1, name: "Mr. Tanguturi Sanjeevaiah", dept: "CSE", roll: "17691A05C9", extra: "Artificial Intelligence (AI)" },
      { sno: 2, name: "Ms. A. Durga Dharani", dept: "ECE", roll: "17691A0433", extra: "Artificial Intelligence (AI)" },
      { sno: 3, name: "Ms. N.Bhavya Raj", dept: "ECE", roll: "17691A0423", extra: "Artificial Intelligence (AI)" },
      { sno: 4, name: "Mr. B. Chetan Sri Sai", dept: "Mech", roll: "17691A0332", extra: "Artificial Intelligence (AI)" },
      { sno: 5, name: "Ms. G.Anitha", dept: "Mech", roll: "17691A0309", extra: "Artificial Intelligence (AI)" },
      { sno: 6, name: "Mr. A.Arun", dept: "Mech", roll: "17691A0313", extra: "Artificial Intelligence (AI)" },
      { sno: 7, name: "Ms. M.Divya", dept: "Mech", roll: "17691A0340", extra: "Artificial Intelligence (AI)" },
      { sno: 8, name: "Ms. M. Jahnavi", dept: "CSE", roll: "17699A0522", extra: "Web Design" },
    ],
  },
  {
    title: "Global Immersion Program – Providence University",
    country: "Taiwan",
    partner: "Providence University",
    period: "16 December 2018 – 11 January 2019",
    description: "Sponsored international study program covering IoT, Big Data Analytics, and Artificial Intelligence, attended by both students and faculty.",
    participants: [
      { sno: 1, name: "Sunil Kumar Pattem", dept: "EEE", roll: "15699a0223", extra: "" },
      { sno: 2, name: "Harinatha Reddy Digavinti", dept: "EEE", roll: "15699a0210", extra: "" },
      { sno: 3, name: "Sai Sumanth Dega", dept: "EEE", roll: "15691a0258", extra: "" },
      { sno: 4, name: "Kodandaramu Saraipulikonda", dept: "EEE", roll: "15691A0225", extra: "" },
      { sno: 5, name: "Prem Kumar Gutta", dept: "EEE", roll: "15691A0247", extra: "" },
      { sno: 6, name: "Yandapalli Siva Reddy", dept: "ECE", roll: "15699a0494", extra: "" },
      { sno: 7, name: "Sravani Varapana", dept: "ECE", roll: "15699a0497", extra: "" },
      { sno: 8, name: "Sudheer Ragula", dept: "ECE", roll: "15699A04A1", extra: "" },
      { sno: 9, name: "Sai Santhosh Dinnuri", dept: "ECE", roll: "15699a0488", extra: "" },
      { sno: 10, name: "Umamaheswari Kaveti", dept: "ECE", roll: "16690a0402", extra: "" },
      { sno: 11, name: "M. Lokesh Gorrela Krishna Reddy", dept: "CSE", roll: "15691a0567", extra: "" },
      { sno: 12, name: "Srinath Laka", dept: "MECH", roll: "16695A0339", extra: "" },
      { sno: 13, name: "Patan Irfan Khan", dept: "MCA", roll: "16691F0010", extra: "" },
      { sno: 14, name: "Vamsi Thummakula", dept: "MCA", roll: "17699f00a0", extra: "" },
      { sno: 15, name: "Venkatesh Pagadala", dept: "MCA", roll: "17691f0056", extra: "" },
    ],
  },
  {
    title: "Asia Pacific Innovation Academy (APIA)",
    country: "China",
    partner: "Chinachem Foundation & European Innovation Institute",
    period: "19 July – 9 August 2018",
    description: "World's largest international innovation accelerator held at Shenzhen University with 350+ participants and mentors from Silicon Valley, EU & Asia. Team led by Sucharitha C. from MITS was selected in the top 5 among 42 teams.",
  },
];

/* ---------- EVENTS ---------- */

export const events: IREvent[] = [
  {
    title: "Visit of Dr. Mallesham Dasari – Northeastern University, Boston",
    date: "8 – 9 June 2026",
    description:
      "Director – Spatial Intelligence Research Group & Assistant Professor at Northeastern University, USA visited MITS for research collaboration discussions.",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/Pdf-Report%20of%20Dr.%20Mallesham%20Dasari%20-Director-Spatial%20Intelligence%20Research%20Group.pdf",
  },
  {
    title: "Awareness Program on Overseas Education – WhatNext Overseas Consultancy",
    date: "10 March 2026",
    description: "Awareness session for students planning to pursue higher education abroad.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/WhatNext%20Consultancy%20Team.pdf",
  },
  {
    title: "BGSU Senior Leadership Team Visit",
    date: "20 November 2025",
    description:
      "Dr. Rodney K. Rogers (President), Dr. Sandra Earle, Dr. Ravi Krovi, Dr. Ram Veerapaneni and Dr. Wael Mokhtar from Bowling Green State University, Ohio visited MITS to strengthen academic collaboration and sign an MoA/MoU.",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/Report%20of%20BGSU%20Team%2020.11.2025-min.pdf",
    image: "https://mits.ac.in/public/uploads/internationalrelation/bowling.JPG",
  },
  {
    title: "Academic Roundtable with Alabama Universities (ALIEEP)",
    date: "22 September 2025",
    description:
      "Roundtable organised by One Window Overseas Education and Alabama International Education & Economic Partnership at ITC Kakatiya, Hyderabad to foster India–Alabama academic collaboration.",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/Interactive%20Session%2022.09.2025.pdf",
  },
  {
    title: "Awareness Program – Higher Education Opportunities in Europe, UK & Australia",
    date: "16 September 2025",
    description:
      "Mr. Seshu Babu, Head of Marketing & Operations, Global Degrees addressed final-year students on academic prospects, scholarships and application procedures.",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/An%20Awareness%20Program%20on%2016-09-2025.pdf",
  },
  {
    title: "Interactive Session with H. E. Mr. Chang Nyun Kim – Consul General of the Republic of Korea",
    date: "10 September 2025",
    description:
      "ASSOCHAM-organised session at Hotel Novotel Vijayawada focusing on India–South Korea bilateral ties in trade, education, infrastructure and smart agriculture.",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/Interactive%20Session%2010-09-2025.pdf",
  },
  {
    title: "Visit of Ms. Barriga Dey – Rivier University, USA",
    date: "20 February 2025",
    description:
      "Director of Strategic Global Engagement at Rivier University, New Hampshire visited MITS to initiate an educational collaboration and student exchange programme.",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/Report%20on%20the%20visit%20of%20Ms.%20Barriga%20Dey-Rivier%20University.pdf",
    image: "https://mits.ac.in/public/uploads/internationalrelation/Rivier%20University%201.jpg",
  },
  {
    title: "US Delegation Visit & MoU Signing – Bowling Green State University",
    date: "17 February 2025",
    description:
      "Dr. Ram Veerapaneni, Dr. Wael Mokhtar and Mr. Can (Jon) Erdogmus from BGSU-USA entered into academic partnership with MITS by signing an MoU covering degree pathways, joint research, exchange and curriculum framing.",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/Report%20on%20A%202%20Day%20visit%20of%20US%20Delegation.pdf",
    image: "https://mits.ac.in/public/uploads/internationalrelation/us-mou.JPG",
  },
  {
    title: "Visit & Training by Prof. Uday Kiran Rage – University of Aizu",
    date: "August 2024",
    description:
      "Prof. Uday Kiran Rage delivered 16 hours of hands-on training in AI, Machine Learning, Data Mining and Pattern Mining for ~80 students and hosted two Japanese students at MITS for a two-week research internship (12 – 24 Aug 2024).",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/Dr.%20Uday%20Kiran%20Rage%20Visit%20Research%20Internship%20Program%20for%202%20Japanese%20Students.pdf",
  },
  {
    title: "Academic Address & Guidance on Research Internships – University of Aizu",
    date: "2 April 2024",
    description: "Prof. Uday Kiran Rage visited MITS, discussed the University of Aizu MoU and addressed AI students on global research internships & MS opportunities in Japan.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/Dr.%20Uday%20Kiran%20Rage%20Visit%20Research%20Internship%20Program%20for%202%20Japanese%20Students.pdf"
  },
  {
    title: "Switzerland Academic Collaboration Discussion – HEIG-VD",
    date: "27 October 2023",
    description: "Prof. Cédric Bornand from HEIG-VD visited MITS to explore academic and research collaboration opportunities in Switzerland.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/Visit%20of%20Cedric.pdf"
  },
  {
    title: "Visit of Japanese Academic Delegation",
    date: "31 July – 2 August 2023",
    description: "Prof. Yukari Shirota (Gakushuin University), Prof. Tetsuji Kuboyama (Gakushuin University), and Prof. Takako Hashimoto (Chiba University of Commerce) visited MITS. Addressed students on IEEE ethics and shared job opportunities in Japan. Schools of Computing and Management initiated joint research in AI, ML and Data Science.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/Visit%20of%20Japanese%20Delegation.pdf"
  },
  {
    title: "Visit of Asia University Delegation (5 Deans)",
    date: "7 July 2023",
    description: "Deans from International College, Medical & Health Sciences, Information & Electrical Engineering, Management, and Industry-Academia Collaboration visited MITS to renew MoUs and sign new MoAs, creating direct pathways for research, internships and MS degrees in Taiwan.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/Visit%20of%205%20Deans.pdf"
  },
  {
    title: "Microelectronics Collaboration Program – Brno University of Technology, Czech Republic",
    date: "20 – 23 February 2023",
    description: "Prof. Jiri Haze and Dr. Pavel Steffan visited MITS to draft the outline of the 1+3 Semesters MS Program in Microelectronics and interacted with ECE & EEE students to discuss trending technologies in semiconductors.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/Visit%20of%20Czech%20Republic%20Deans.pdf"
  },
  {
    title: "University of Aizu Partnership Discussion",
    date: "30 December 2022",
    description: "Prof. Uday Kiran Rage from University of Aizu visited the IRO regarding draft MoUs and future collaborative space research activities."
  },
  {
    title: "Academic Collaboration & Guest Lecture – Macquarie University, Australia",
    date: "29 December 2022",
    description: "Prof. Subhas Mukhopadhyay visited MITS to discuss joint research. He delivered a guest lecture for Mechanical & Computer Science students on higher education and research opportunities in Australia."
  },
  {
    title: "Higher Education Opportunities in Europe – Czech Technical University",
    date: "7 September 2022",
    description: "A virtual guest session by Dr. Vladimir Kulish, Visiting Professor at Czech Technical University, outlining academic and research opportunities in Europe for ECE & EEE students."
  },
  {
    title: "MITS Delegation Visit – Brno University of Technology, Czech Republic",
    date: "7 – 11 June 2022",
    description: "Dr. Sremmant Basu and Dr. Vladimir Kulish visited Brno University of Technology in Europe to discuss the implementation details of the 1+3 semesters MS program in Microelectronics."
  },
  {
    title: "Global Careers in AI & Machine Learning – Citrix Systems, USA",
    date: "20 June 2022",
    description: "Mr. Phani Madhav Jathi, Senior Manager at Citrix Systems, addressed the School of Computing on emerging global career pathways in AI and Machine Learning."
  },
  {
    title: "Transcendental Meditation & Research MoU – Maharishi Vedic University, Holland",
    date: "18 October 2019",
    description: "Prof. Brian and Prof. Ashley Deans visited MITS and signed an MoU to launch Transcendental Meditation sessions on campus and initiate joint research."
  },
  {
    title: "Cognitive Neuroscience & Mind-Body Research – Maharishi Vedic University, Holland",
    date: "4 September 2019",
    description: "Prof. Brian Levine addressed MCA faculty and conducted a specialized session for newly admitted MBA & MCA students."
  },
  {
    title: "International Collaboration Explorations – Czech Technical University",
    date: "26 – 29 August 2019",
    description: "Dr. Vladimir Kulish spent 3 days at MITS interacting with Deans and HoDs of Electrical & Mechanical Engineering to build pathways for international collaborations, internships and student exchanges."
  },
  {
    title: "Higher Education in 1000+ Global Universities – Azent Overseas Education",
    date: "28 August 2019",
    description: "A seminar on global admissions, scholarships, and free IELTS preparation for study programs in the US, UK, Canada, Ireland, Germany, Australia, and New Zealand."
  },
  {
    title: "Vidya Vahini Study Abroad Support – AP Govt Telugu Society (APNRT)",
    date: "26 August 2019",
    description: "Mr. Praveen from APNRT created awareness about AP government scholarships, financial support, and welfare schemes for pursuing higher education abroad."
  },
  {
    title: "AI and Smart Cities Collaboration – Brunel University London & Bennett University",
    date: "14 May 2019",
    description: "Dr. George Ghinea (Brunel University) and Dr. Sridhar Swaminathan (Bennett University) met MITS AI researchers to discuss research partnerships in AI-driven smart infrastructure."
  },
  {
    title: "Mandarin Language Centre & Academic Exchange – National Yunlin University, Taiwan",
    date: "16 April 2019",
    description: "President Prof. Dr. Neng-Shu Yang and team signed an MoU to establish a Mandarin language training center at MITS, and addressed students on MS and PhD opportunities."
  },
  {
    title: "Job Opportunities & HR Requirements in Japan – Conomity Tokyo",
    date: "6 March 2019",
    description: "Mr. Kobayashi (CEO) and HR managers from Tokyo, Japan visited MITS to guide students on job requirements, language proficiency, and technical careers in Japan."
  },
  {
    title: "Mandarin Language Training Agreement – Yuntech Taiwan",
    date: "13 February 2019",
    description: "Prof. Dr. Stanley Tseng and Ms. Carol Qiu visited MITS to sign the agreement establishing the Mandarin Language Centre on campus."
  },
  {
    title: "Space Research & Astronomy Initiatives – Chungnam National University, South Korea",
    date: "28 January 2019",
    description: "Dr. S. Eswar, Senior Researcher, Chungnam National University visited MITS to discuss starting dedicated space research activities."
  },
  {
    title: "Special Communication Research – Kookmin University, South Korea",
    date: "17 – 20 December 2018",
    description: "Prof. Soo Hyun Park and Prof. Soo Young Shin visited MITS as part of the MoU between SPRC Kookmin University and MITS to review joint communication engineering projects."
  },
  {
    title: "Innovative Technologies Seminar – University of Heidelberg, Germany",
    date: "13 December 2018",
    description: "Dr. Sreeganesh Thottempudi visited MITS and delivered an expert talk on global innovative tech trends for MCA students."
  },
  {
    title: "Japanese Language & Global Careers – Silverpeak Global",
    date: "30 August 2018",
    description: "Mr. Vinay N conducted a full-day seminar for all engineering branches on the Japanese Language Proficiency Test (JLPT) and tech job options in Japan."
  },
  {
    title: "IUCEE-EPICS Societal Projects Workshop – Purdue University, USA",
    date: "3 July 2018",
    description: "Prof. William Oakes (Director, EPICS Purdue) conducted a workshop on engineering projects in community services, reviewing MITS student-led societal projects."
  }
];

export const workshops: IREvent[] = [
  {
    title: "The First International Research Awareness Workshop (IRAW)",
    date: "16 – 18 June 2022",
    description: "The First International Research Awareness Workshop (IRAW) was held at MITS for 3 days to establish a pathway for new innovations and international research programmes. The workshop was inaugurated by Dr. C. Yuvaraj (Principal), Dr. Venkat Ratnam (NARL), and other academic council members, setting a milestone for global research collaborations at MITS.",
    reportUrl: "https://mits.ac.in/assets/pdf/oir/Report-%20The%20First%20International%20Research%20Awareness%20Workshop.pdf",
    scientists: [
      "Dr. Venkat Ratnam (Guest of Honour) – Shanti Swarup Bhatnagar Awardee, Senior Scientist & Head, NARL, Tirupati",
      "Prof. Priyadarshanam – Indian Institute of Space Science & Technology (IIST), Thiruvananthapuram, Kerala",
      "Prof. Dr. Harsha Simha M. S – Dept. of Avionics, IIST Thiruvananthapuram",
      "Dr. Eswar Sunkara – Senior Researcher, Pusan National University, South Korea",
      "Dr. Raghavendra Ashrit – Scientist-F, National Centre for Medium Range Weather Forecasting (NCMRWF), Ministry of Earth Sciences (MoES)",
      "Dr. Niranjan Kumar Kondapalli – Scientist-D, NCMRWF, Ministry of Earth Sciences (MoES)",
      "Dr. Jothiram Vivekanandan – Senior Scientist, National Centre for Atmospheric Research (NCAR), Boulder, NASA Colorado, USA",
      "Dr. Chalachew Kindie Mengist – Scientist, Adama Science and Technology University, Ethiopia"
    ],
    objectives: [
      "Establishment of research centres at MITS",
      "Giving a major impetus to international collaborations",
      "Securing financial support from renowned global organizations",
      "Arranging faculty and student visits to leading global labs",
      "Involving both faculty and students directly in high-impact research activities."
    ]
  },
  {
    title: "International Workshop on Advances in Space & Radar Technologies",
    date: "8 – 10 December 2022",
    description: "An International 3-day workshop focusing on Advances in Space & Radar Technologies. Distinguished scientists from ISRO, NARL, and ATRAD Australia interacted with students and faculty, sharing valuable insights on space exploration, radar signal processing, and atmospheric research.",
    reportUrl: "https://mits.ac.in/assets/pdf/oir/Report-%20The%20First%20International%20Research%20Awareness%20Workshop.pdf",
    scientists: [
      "Prof. G. Viswanath – Indian Space Research Organisation (ISRO)",
      "Dr. V. Vara Prasad – Satish Dhawan Space Centre (SHAR), Sriharikota",
      "Dr. M. Venkat Ratnam – National Atmospheric Research Laboratory (NARL)",
      "Dr. Durga Rao – Head of Radar Group, NARL",
      "Dr. P. V. Ramana – Radar Tracking Head, NARL",
      "Dr. Chris Adami – Chief Engineer, ATRAD, Australia",
      "Prof. Ion Reid – Director, ATRAD, Australia"
    ],
    objectives: [
      "Create awareness about Radar and Space technologies and their real-world applications",
      "Facilitate interactions between students and leading scientists from ISRO, NARL, and ATRAD Australia",
      "Promote space research and radar technology training at MITS"
    ]
  }
];

/* ---------- STANFORD INITIATIVE (UIF) ---------- */

export const stanfordAbout = {
  intro: [
    "The University Innovation Fellows (UIF) program empowers students to become agents of change on their campus. The Fellows are a global community of students leading a movement to ensure that all students gain the necessary attitudes, skills and knowledge required to compete in the economy of the future. These student leaders create new opportunities that help their peers develop an entrepreneurial mindset, build creative confidence, seize opportunities, define problems and address global challenges.",
    "Fellows create student innovation spaces, found entrepreneurship organisations, host experiential events, and work with faculty and administrators to develop courses. They serve as advocates for lasting institutional change with academic leaders and represent their schools at national events.",
    "The University Innovation Fellows is a programme of Stanford University's Hasso Plattner Institute of Design (d.school). The programme was created as part of the National Center for Engineering Pathways to Innovation (Epicenter), a five-year National Science Foundation grant.",
    "MITS has produced multiple batches of Fellows since Spring 2017, making MITS one of the most consistently represented Indian institutions in the global UIF network.",
  ],
  coordinator: {
    name: "Mrs. U. Vijaya Lakshmi",
    designation: "UIF Programme Coordinator",
    emailGmail: "mitsuifellows@gmail.com",
    emailOffice: "uif@mits.ac.in",
    website: "http://mitsuifellows.wixsite.com/mitsuif",
    qsIssue: "QS Wow News Issue No. 24 (February – April 2017)",
  },
};

export const stanfordFellows: Fellow[] = [
  {
    batch: "Fall 2024",
    facultyChampions: "Mr. Arjun Pogaku & Mrs. Vijaya Lakshmi Udayagiri",
    students: [
      { sno: 1, name: "Siri Reddy Nandi Reddy", dept: "CSE-D", roll: "23691A05K5", wiki: "https://universityinnovation.org/wiki/Fellow:Siri_Reddy_Nandireddy" },
      { sno: 2, name: "Devi Sri Samhita Kattamudi", dept: "CSE-D", roll: "23691A05l4", wiki: "https://universityinnovation.org/wiki/Fellow:Devi_Sri_Samhita_Kattamudi" },
      { sno: 3, name: "Jyothi Venkat Reddy Vellapalem", dept: "CSC-A", roll: "23691A3752", wiki: "https://universityinnovation.org/wiki/Fellow:Jyothi_Venkat_Reddy_Vellapalem" },
      { sno: 4, name: "Sai Charan Reddy Poreddy", dept: "CAI-C", roll: "23691A31E0", wiki: "https://universityinnovation.org/wiki/Fellow:P._Sai_Charan_Reddy" },
    ],
  },
  {
    batch: "Fall 2023",
    facultyChampions: "Mrs. Vijaya Lakshmi Udayagiri & Dr. Kusuma",
    students: [
      { sno: 1, name: "Munithanoj Vasanthapalle", dept: "CSE-AI", roll: "22691A31A1", wiki: "https://universityinnovation.org/wiki/Fellow:V.MUNI_THANOJ" },
      { sno: 2, name: "Lokesh Ayyaswamy", dept: "CSE-AI", roll: "22691A3180", wiki: "https://universityinnovation.org/wiki/Fellow:A_Lokesh" },
      { sno: 3, name: "Ameya Sree Kasa", dept: "CSE-AI", roll: "21691A3110", wiki: "https://universityinnovation.org/wiki/Fellow:Ameya_Sree" },
      { sno: 4, name: "Dharani Vemuri", dept: "EEE", roll: "21691A0213", wiki: "https://universityinnovation.org/wiki/Fellow:Dharani_Vemuri" },
    ],
  },
  {
    batch: "Fall 2022",
    facultyChampions: "Dr. Balaji Ramanujam, Mrs. Kusuma & Mrs. Vijaya Lakshmi Udayagiri",
    students: [
      { sno: 1, name: "R. Guru Aishwarya Reddy", dept: "CSE", roll: "20691A0537", wiki: "https://universityinnovation.org/wiki/Fellow:Guru_Aishwarya_Reddy.R" },
      { sno: 2, name: "K. Sai Spoorthi", dept: "CSE", roll: "21691A05I8", wiki: "https://universityinnovation.org/wiki/Fellow:K_._Sai_Spoorthi" },
      { sno: 3, name: "S. Chinmai", dept: "EEE", roll: "21691A0211", wiki: "https://universityinnovation.org/wiki/Fellow:Chinmai_Seshadri_(2022)" },
      { sno: 4, name: "Desai Rohith Reddy", dept: "CSC", roll: "21691A3743", wiki: "https://universityinnovation.org/wiki/Fellow:Desai_Rohith_Reddy" },
      { sno: 5, name: "D. Pavithra", dept: "CSE", roll: "21691A05E3", wiki: "https://universityinnovation.org/wiki/Fellow:Pavithra_Dinnemeeda" },
      { sno: 6, name: "Sai Nithya Sree K.", dept: "CSD", roll: "21691A3289", wiki: "https://universityinnovation.org/wiki/Fellow:Sai_Nithya_Sree_Kummara" },
    ],
  },
  {
    batch: "Fall 2021",
    facultyChampions: "Dr. Balaji Ramanujam & Mrs. Vijaya Lakshmi Udayagiri",
    students: [
      { sno: 1, name: "Thota Roopesh", dept: "CSE", roll: "18691A05B3", wiki: "https://universityinnovation.org/wiki/Fellow:Thota_Roopesh" },
      { sno: 2, name: "Hima Siri Kadepalli", dept: "CSE", roll: "19691A05J5", wiki: "https://universityinnovation.org/wiki/Fellow:Hima_Siri_Kadepalli" },
      { sno: 3, name: "Sine Nitish", dept: "CSE", roll: "20691A05B4", wiki: "https://universityinnovation.org/wiki/Fellow:Sine_Nitish" },
      { sno: 4, name: "Manvitha BL", dept: "CSE", roll: "20691A0585", wiki: "https://universityinnovation.org/wiki/Fellow:Manvitha_BL" },
      { sno: 5, name: "Sai Raghavi Vagga", dept: "CSE", roll: "20691A05F6", wiki: "https://universityinnovation.org/wiki/Fellow:Sai_Raghavi_Vagga" },
      { sno: 6, name: "Malle Sangeetha", dept: "CSE", roll: "20691A05G2", wiki: "https://universityinnovation.org/wiki/Fellow:Malle_Sangeetha" },
      { sno: 7, name: "Puneeth Gangarapu", dept: "CSE", roll: "20691A05L8", wiki: "https://universityinnovation.org/wiki/Fellow:Puneeth_Gangarapu" },
      { sno: 8, name: "Sulasya Jangam Mopidi", dept: "CSE", roll: "20691A05H6", wiki: "https://universityinnovation.org/wiki/Fellow:Sulasya_Jangam_Mopidi" },
    ],
  },
  {
    batch: "Fall 2020",
    facultyChampions: "Dr. Balaji Ramanujam & Dr. Pradeep Kumar",
    students: [
      { sno: 1, name: "T. Puthin Kumar Reddy", dept: "CSE", roll: "17691A05A3", wiki: "https://universityinnovation.org/wiki/Fellow:PUTHIN_KUMAR_REDDY_THALLAPALLI" },
      { sno: 2, name: "Sai Sumith Gorla", dept: "IT", roll: "17691A1241", wiki: "https://universityinnovation.org/wiki/Fellow:Sai_Sumith_Gorla" },
      { sno: 3, name: "Abdul Sameer Shaik", dept: "ECE", roll: "18691A0401", wiki: "https://universityinnovation.org/wiki/Fellow:Abdul_Sameer_Shaik" },
      { sno: 4, name: "Likitha Kurapothula", dept: "ECE", roll: "19695A0431", wiki: "https://universityinnovation.org/wiki/Fellow:Likhitha_Kurapothula" },
      { sno: 5, name: "Vishal Meda", dept: "CST", roll: "18691A2860", wiki: "https://universityinnovation.org/wiki/Fellow:Vishal_Meda" },
      { sno: 6, name: "Poojitha Reddy Konkala", dept: "CST", roll: "19691A2891", wiki: "https://universityinnovation.org/wiki/Fellow:Poojitha_Reddy_Konkala" },
      { sno: 7, name: "Sasi Supraja Muthakana", dept: "CSE", roll: "19691A05E2", wiki: "https://universityinnovation.org/wiki/Fellow:Sasi_Supraja_Muthakana" },
      { sno: 8, name: "B. N. V. Vasu Deva Rao", dept: "ECE", roll: "19691A04M5", wiki: "https://universityinnovation.org/wiki/Fellow:B.N.V._Vasu_Deva_Rao" },
    ],
  },
  {
    batch: "Fall 2019",
    facultyChampions: "Dr. Balaji Ramanujam & Dr. Pradeep Kumar",
    students: [
      { sno: 1, name: "K. Naga Bharat Kumar", dept: "CSE", roll: "18691A0584", wiki: "http://universityinnovation.org/wiki/Bharat" },
      { sno: 2, name: "M. Naga Bhavana", dept: "CSE", roll: "18691A0585", wiki: "http://universityinnovation.org/wiki/Bhavana" },
      { sno: 3, name: "K V N S Jayanth Sarma", dept: "ECE", roll: "18691A0474", wiki: "http://universityinnovation.org/wiki/K_V_N_S_Jayanth_Sarma" },
      { sno: 4, name: "N. Sai Sucharitha", dept: "ECE", roll: "18691A04G1", wiki: "http://universityinnovation.org/wiki/Sucharitha" },
      { sno: 5, name: "S. Sidharth Kartheek", dept: "MECH", roll: "17691A0312", wiki: "http://universityinnovation.org/wiki/SIDHARTHSARASA" },
      { sno: 6, name: "P. Himabindu", dept: "CSE", roll: "18691A0551", wiki: "http://universityinnovation.org/wiki/HIMABINDU_PERAMALA" },
      { sno: 7, name: "Sarafi Ahamed", dept: "EEE", roll: "18691A0251", wiki: "http://universityinnovation.org/wiki/Sarafi" },
      { sno: 8, name: "D. Sharon Jerusha", dept: "ECE", roll: "18691A04H3", wiki: "http://universityinnovation.org/wiki/Sharon" },
    ],
  },
  {
    batch: "Fall 2018",
    facultyChampions: "Dr. Balaji Ramanujam",
    students: [
      { sno: 1, name: "Abhishek P", dept: "EEE", roll: "17691A0201", wiki: "http://universityinnovation.org/wiki/Abhishek_pasupulate" },
      { sno: 2, name: "Rohith B.", dept: "CSE", roll: "17691A05B1", wiki: "http://universityinnovation.org/wiki/Rohith.B" },
      { sno: 3, name: "Sreevani Kanala", dept: "ECE", roll: "17699A0498", wiki: "http://universityinnovation.org/wiki/Sreevanikanala" },
      { sno: 4, name: "Tasmiya Samreen", dept: "ECE", roll: "17699A04A6", wiki: "http://universityinnovation.org/wiki/Tasmi_samreen" },
    ],
  },
  {
    batch: "Spring 2018",
    facultyChampions: "Mrs. U. Vijaya Lakshmi",
    students: [
      { sno: 1, name: "Arjun Chakravarthi P", dept: "ECE", roll: "15691A04N8", wiki: "http://universityinnovation.org/wiki/Arjun_Chakravarthi_Pogaku" },
      { sno: 2, name: "Hema Malini C", dept: "ECE", roll: "17691a0456", wiki: "http://universityinnovation.org/wiki/Hema_Malini_Charvakula" },
      { sno: 3, name: "Preethi Koduru", dept: "EEE", roll: "16695a0216", wiki: "http://universityinnovation.org/wiki/Preethi_Koduru" },
      { sno: 4, name: "Swapna Priya Pala", dept: "EEE", roll: "16691a0253", wiki: "http://universityinnovation.org/wiki/Swapna_Priya_Pala" },
    ],
  },
  {
    batch: "Fall 2017",
    facultyChampions: "Dr. Vara Prasad",
    students: [
      { sno: 1, name: "Harshavardhan B", dept: "MBA", roll: "16691e0061", wiki: "http://universityinnovation.org/wiki/Harshavardhan_Bandarla" },
      { sno: 2, name: "Kusuma Amilineni", dept: "ECE", roll: "14691a0482", wiki: "http://universityinnovation.org/wiki/Kusuma_Amilineni" },
      { sno: 3, name: "Sucharitha C", dept: "ECE", roll: "15699A04A0", wiki: "http://universityinnovation.org/wiki/Sucharitha_Chokkappagari" },
      { sno: 4, name: "Umeshwar Reddy N", dept: "ECE", roll: "15699A04A8", wiki: "http://universityinnovation.org/wiki/Umeshwar_Reddy" },
    ],
  },
  {
    batch: "Spring 2017",
    facultyChampions: "Dr. Rajendra Prasad Narne",
    students: [
      { sno: 1, name: "Nishkala Kollu", dept: "ECE", roll: "14691A04C1", wiki: "http://universityinnovation.org/wiki/KOLLU_NISHKALA" },
      { sno: 2, name: "Manasa Kakarla", dept: "ECE", roll: "14691A04K6", wiki: "http://universityinnovation.org/wiki/Manasa_kakarla" },
      { sno: 3, name: "Praneeth Sai", dept: "MECH", roll: "14691a03e0", wiki: "http://universityinnovation.org/wiki/Praneeth_sai" },
      { sno: 4, name: "Suchitra Nidiginti", dept: "ECE", roll: "14691A04C1", wiki: "http://universityinnovation.org/wiki/Suchitra_nidiginti" },
    ],
  },
  {
    batch: "Fall 2016",
    facultyChampions: "Dr. B. Rama Kumar",
    students: [
      { sno: 1, name: "Anitha Narnavaram", dept: "CSE", roll: "14691a0598", wiki: "http://universityinnovation.org/wiki/Anitha_Narnavaram" },
      { sno: 2, name: "Charan Sai Pala", dept: "ECE", roll: "14691a0432", wiki: "http://universityinnovation.org/wiki/Charan_Sai_Pala" },
      { sno: 3, name: "Priyanka Bonthala", dept: "CSE", roll: "14691a0569", wiki: "http://universityinnovation.org/wiki/Priyanka_Bonthala" },
      { sno: 4, name: "Sai Kiran Kumar Reddy", dept: "ECE", roll: "14691a04g2", wiki: "http://universityinnovation.org/wiki/Sai_Kiran" },
      { sno: 5, name: "M. N. Sameer Ahmed", dept: "ECE", roll: "14691A04H0", wiki: "http://universityinnovation.org/wiki/Sameer_Ahmed" },
      { sno: 6, name: "Sindhu Bhonsley", dept: "CSE", roll: "14691a0590", wiki: "http://universityinnovation.org/wiki/Sindhu_Bhonsley" },
    ],
  },
];

export const stanfordGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/uif6.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/uif7.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/uif8.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/UIF_2022.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/UIF_2021.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/cor1.png",
  "https://mits.ac.in/public/uploads/internationalrelation/IMG-20241214-WA0035.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/427ca6ac5a84e22be86999e91d3a4f5e.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/622dadcb06ff56feb21b462f9fe45ad1.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/b888ddfef19bf417b1c31eba407d986a.jpeg",
];

export const internshipGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/sakura4.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/sakura3.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/sakura2.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/sakura1.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/internships2024.png",
  "https://mits.ac.in/public/uploads/internationalrelation/1-min.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/IMG-20210106-WA0008.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/IMG-20210106-WA0007.jpg",
];

export const fellowshipGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/IMG-20241214-WA0035.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/cor1.png",
  "https://mits.ac.in/public/uploads/internationalrelation/UIF_2022.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/UIF_2021.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/uif6.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/uif7.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/uif8.jpeg",
];

export const globalGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/taiwanasiauniversity-min.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/taiwanasiauniversity-min (1).jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/asia.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/providence.jpg",
];

export const eventGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/bowling.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/us-mou.JPG",
  "https://mits.ac.in/public/uploads/internationalrelation/Rivier%20University%201.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/Rivier%20University%202.JPG",
];

export const workshopGallery: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/iraw_1.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/iraw_2.jpeg",
  "https://mits.ac.in/public/uploads/internationalrelation/iraw_3.jpeg",
];

export const heroBanners: string[] = [
  "https://mits.ac.in/public/uploads/internationalrelation/IMG-20210106-WA0006.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/IMG-20210106-WA0007.jpg",
  "https://mits.ac.in/public/uploads/internationalrelation/finland.jpg",
];

export const heroBanner =
  "https://mits.ac.in/public/uploads/internationalrelation/IMG-20210106-WA0006.jpg";

export const heroStats = [
  { value: "20+", label: "Global University Partners" },
  { value: "9", label: "Countries" },
  { value: "11", label: "UIF Batches since 2016" },
  { value: "300+", label: "Students Sent Abroad" },
];
