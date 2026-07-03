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
    title: "Global Immersion Program – Providence University",
    country: "Taiwan",
    partner: "Providence University (PU)",
    period: "16 Dec 2018 – 11 Jan 2019",
    description:
      "Sponsored programme covering 'IoT & Big Data Analytics' and 'Introduction to Big Data & Artificial Intelligence' attended by 15 students and 5 faculty members.",
  },
  {
    title: "Asia University – Summer Program 2024",
    country: "Taiwan",
    partner: "Asia University",
    period: "6 July – 16 August 2024",
    description: "Offline summer school in Artificial Intelligence for 10 MITS students.",
  },
  {
    title: "Asia University – Virtual Summer Program 2023",
    country: "Taiwan",
    partner: "Asia University",
    period: "26 June – 21 August 2023",
    description: "37 MITS students participated in Artificial Intelligence & AI Applications in Management tracks.",
  },
  {
    title: "Asia University – Spring Semester Virtual Exchange 2023",
    country: "Taiwan",
    partner: "Asia University",
    period: "13 February – 16 June 2023",
    description: "56 MITS students undertook web design, machine learning, digital image processing, marketing management & auditing modules.",
  },
  {
    title: "Asia Pacific Innovation Academy (APIA)",
    country: "China",
    partner: "Chinachem Foundation & European Innovation Institute",
    period: "19 July – 9 August 2018",
    description:
      "World's largest international innovation accelerator held at Shenzhen University with 350+ participants and mentors from Silicon Valley, EU & Asia. Team led by Sucharitha C. from MITS was selected in the top 5 among 42 teams.",
  },
  {
    title: "Asia University – 2022 Summer Program",
    country: "Taiwan",
    partner: "Asia University",
    period: "1 – 24 August 2022",
    description: "MBA students undertook AI Applications in Management online.",
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
];

/* ---------- WORKSHOPS ---------- */

export const workshops: IREvent[] = [
  {
    title: "Higher Education Opportunities – Europe, UK & Australia",
    date: "16 September 2025",
    description:
      "Country-specific overview of academic programmes, scholarships and application procedures delivered by Global Degrees.",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/An%20Awareness%20Program%20on%2016-09-2025.pdf",
  },
  {
    title: "Research Internship Workshop – University of Aizu",
    date: "August 2024",
    description:
      "16-hour hands-on training in AI, ML, Data Mining, Data Structures & Pattern Mining by Prof. Uday Kiran Rage.",
    reportUrl:
      "https://mits.ac.in/assets/pdf/event/Dr.%20Uday%20Kiran%20Rage%20Visit%20Research%20Internship%20Program%20for%202%20Japanese%20Students.pdf",
  },
  {
    title: "Overseas Education Awareness – WhatNext Consultancy",
    date: "10 March 2026",
    description: "Interactive workshop guiding students on overseas education pathways.",
    reportUrl: "https://mits.ac.in/assets/pdf/event/WhatNext%20Consultancy%20Team.pdf",
  },
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

/* ---------- HERO / STATS ---------- */

export const heroBanner =
  "https://mits.ac.in/public/uploads/internationalrelation/IMG-20210106-WA0006.jpg";

export const heroStats = [
  { value: "20+", label: "Global University Partners" },
  { value: "9", label: "Countries" },
  { value: "11", label: "UIF Batches since 2016" },
  { value: "300+", label: "Students Sent Abroad" },
];
