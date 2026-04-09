// Faculty profile data - stored as flexible content sections

export interface FacultySection {
  title: string;
  content: string | string[] | Record<string, string>[];
}

export interface FacultyProfile {
  name: string;
  designation: string;
  image?: string;
  email?: string;
  sections: FacultySection[];
}

export const facultyProfiles: Record<string, Record<string, FacultyProfile>> = {
  aiml: {
    "Dr. S. Padma": {
      name: "Dr. S. Padma",
      designation: "Assoc. Professor & HOD",
      email: "drpadmas@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/Padma.jpeg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Machine Learning", Branch: "Computer Science", "College Name/University": "Bharathiar University", "Year of Passing": "2020" },
            { "S.No": "2", Course: "M.Phil.", Specialization: "Computer Science", Branch: "Computer Science", "College Name/University": "Bharathidasan University", "Year of Passing": "2010" },
            { "S.No": "3", Course: "M.E.", Specialization: "Computer Science and Engineering", Branch: "Computer Science and Engineering", "College Name/University": "Anna University", "Year of Passing": "2010" },
            { "S.No": "4", Course: "M.C.A", Specialization: "Computer Applications", Branch: "Computer Applications", "College Name/University": "Bharathidasan University", "Year of Passing": "2002" },
            { "S.No": "5", Course: "B.Sc.", Specialization: "Computer Science", Branch: "B.Sc.", "College Name/University": "Bharathiar University", "Year of Passing": "1998" }
          ]
        },
        {
          title: "Research Areas",
          content: "Machine Learning, Computer Vision"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57421746300" },
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/154008" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=ZsrUdcwAAAAJ&hl=en" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "4" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "5", "Details of Research Publication": "A Synergistic Machine Learning – Metaheuristic Approach for Smart Grid Load Dispatch at ICSCSS 2025", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2021-22", "Application ID": "202141055281 A", "Title of the Patent": "AUTOMATED EDUCATION PROCESS WITH FEEDBACK SYSTEM USING MACHINE LEARNING AND AI", Status: "Published" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Received the Best Administrator Award (2017) from Dr. Kalam Educational Trust, Chennai.",
            "Elected as CSTA India Chapter Leader (Curriculum and Professional Development) in 2024."
          ]
        }
      ]
    },
    "Dr. M. Rajeswari": {
      name: "Dr. M. Rajeswari",
      designation: "Assoc. Professor",
      email: "rajeshwarim@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/rajeswari.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "ICE", Branch: "CSE", "College Name/University": "Anna University", "Year of Passing": "2016" },
            { "S.No": "2", Course: "M.E.", Specialization: "ME", Branch: "CSE", "College Name/University": "Nandha Engineering College, Anna University", "Year of Passing": "2008" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "IT", Branch: "IT", "College Name/University": "Maharaja Engineering College, Anna University", "Year of Passing": "2005" }
          ]
        },
        {
          title: "Research Areas",
          content: "Networking, MANET, VANET, Artificial Intelligence, Machine Learning, Deep Learning"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57218711503" },
            { Identifier: "Vidwan", Link: "https://mits.irins.org/profile/356408" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=oxRIARoAAAAJ&hl=en" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "8" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2026", "Author Position": "1", "Details of Research Publication": "Design and Validation of an Explainable Artificial Intelligence Based Decision Intelligence Model for Cyber Risk Aware Quality Systems and Ethical Human Resource Management", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2026", "Author Position": "2", "Details of Research Publication": "Ontology-Enabled Digital Twin Design with AI-Based Data Management and Privacy-Preserving Mechanisms for Secure 6G Communication Systems", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "None" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "Others", "Academic Year": "2019", "Application ID": "201941028900", "Title of the Patent": "A system and method of biometric identification based on distributed Internet-of-Things lock and unlocking thereof", Status: "Published" },
            { "S.No": "2", Affiliation: "Others", "Academic Year": "2020", "Application ID": "202041029484 A", "Title of the Patent": "Portable low cost smart Spirometer using Embedded & IOT", Status: "Published" },
            { "S.No": "3", Affiliation: "Others", "Academic Year": "2022", "Application ID": "2021103130", "Title of the Patent": "A system and method for person detection in aerial imagery using semantic segmentation", Status: "Granted" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Received Best faculty award for the academic year 2010–2011 in Angel College of Engineering and Technology, Tirupur",
            "Received Gold Coin for producing 100% results in Nandha Engineering College, Erode"
          ]
        }
      ]
    },
    "Dr. Sandhya. E": {
      name: "Dr. Sandhya. E",
      designation: "Asst. Professor",
      email: "sandhyae@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/Sandhya.jpeg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "IoT Security", Branch: "CSE", "College Name/University": "SRM Institute of Science and Technology", "Year of Passing": "2023" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "CSE", Branch: "CSE", "College Name/University": "SRM University", "Year of Passing": "2010" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "Information Technology", Branch: "Information Technology", "College Name/University": "JNTU, Hyderabad", "Year of Passing": "2008" }
          ]
        },
        {
          title: "Research Areas",
          content: "IoT Security, Network Security, Machine Learning"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=58308190400" },
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/460126" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=OOjpzlYAAAAJ&hl=en" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "4" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Enhancing security and efficiency in Mobile Ad Hoc Networks using a hybrid deep learning model for flooding attack detection", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "Others", "Academic Year": "2024-25", "Application ID": "202241029619", "Title of the Patent": "A Machine Learning-based Hybrid Intrusion Detection System for Detecting the Cyber-Physical Attacks", Status: "Granted" },
            { "S.No": "2", Affiliation: "Others", "Academic Year": "2023-24", "Application ID": "202141007324", "Title of the Patent": "A Smart Wearable Travel Support System for Supervising Visually Impaired People", Status: "Granted" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Top Performing Mentor for Course on Introduction on Intellectual Property to Engineers and Technologists - Jan to Apr 2025 - NPTEL",
            "Top Performing Mentor for Course on Cloud Computing and Distributed Systems - Jan to Mar 2024 - NPTEL"
          ]
        }
      ]
    },
    "Mr. Sanath Hegde": {
      name: "Mr. Sanath Hegde",
      designation: "Professor of Practice",
      email: "sanathh@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/sanath.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "M.B.A.", Specialization: "Quantitative Finanace", Branch: "M.B.A.", "College Name/University": "Indian Institute of Science, Bangalore", "Year of Passing": "2005" },
            { "S.No": "2", Course: "B.E.", Specialization: "CSE", Branch: "CSE", "College Name/University": "Malnad College of Engineering, Hassan", "Year of Passing": "2001" }
          ]
        },
        {
          title: "Skill Areas",
          content: "Machine Learning, Natura Language Processing, Artificial Intelligence, Text Mining, Business Analytics & Strategy, CRM & Marketing Strategy, Customer Experience, Digital Analytics, Fraud Analytics, Python/SAS/SQL, Adobe Marketing Cloud"
        }
      ]
    },
    "Mr. P. Udayakumar": {
      name: "Mr. P. Udayakumar",
      designation: "Asst. Professor",
      email: "udayakumarp@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/Udayakumar.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Artificial Intelligence", Branch: "CSE", "College Name/University": "Vellore Institute of Technology, Vellore", "Year of Passing": "Pursuing" },
            { "S.No": "2", Course: "M.E.", Specialization: "CSE", Branch: "CSE", "College Name/University": "Anna University", "Year of Passing": "2010" },
            { "S.No": "3", Course: "B.E.", Specialization: "CSE", Branch: "CSE", "College Name/University": "Anna University", "Year of Passing": "2006" }
          ]
        },
        {
          title: "Research Areas",
          content: "Machine and Deep Learning, Neuro Imaging Data analysis, GenAI, Connectome, Network Programming, Full Stack Development"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=58091327400" },
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/263889" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=cV5MPAQAAAAJ&hl=en" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "2" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Connectome graph attention network (CGAT): A multimodal approach for enhanced classification of Alzheimer's disease", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "2024 - Raman Research Award, Vellore Institute of Technology, Vellore, India",
            "2025 - Raman Research Award, Vellore Institute of Technology, Vellore, India"
          ]
        }
      ]
    },
    "Mr. B. S. H. Shayeez Ahamed": {
      name: "Mr. B. S. H. Shayeez Ahamed",
      designation: "Asst. Professor",
      email: "ahamedbsh@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/Ahamed.jpeg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Deep Learning", Branch: "CSE", "College Name/University": "Saveetha University, SIMATS", "Year of Passing": "Pursuing" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Artificial Intelligence", Branch: "CSE", "College Name/University": "JNTU Anantapur", "Year of Passing": "2013" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "CSIT", Branch: "CSIT", "College Name/University": "JNTUK-Vizianagaram", "Year of Passing": "2011" }
          ]
        },
        {
          title: "Research Areas",
          content: "Deep Learning, Machine Learning & AI"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=58038999500" },
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/273691" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=DYHMOyIAAAAJ&hl=en" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "2" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Integrating DCCS-Net for High-Fidelity Watermarking and Tampering Detection in Brain Scan Images", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Best Paper Award for title Evaluation Ensembles of Machine Learning Models for the Prediction of Smart Phone Addiction",
            "Best Paper Award for title Diabetes Prediction using Supervised and Unsupervised Learning"
          ]
        }
      ]
    },
    "Mrs. R. Usha": {
      name: "Mrs. R. Usha",
      designation: "Asst. Professor",
      email: "ushar@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_7925.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "CSE", Branch: "CSE", "College Name/University": "Saveetha University", "Year of Passing": "Pursuing" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "CSE", Branch: "CSE", "College Name/University": "Madanapalle Institute of Technology & Science, JNTUA Anathapur", "Year of Passing": "2013" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "CSE", Branch: "CSE", "College Name/University": "Madanapalle Institute of Technology & Science, JNTUA Ananthapur", "Year of Passing": "2009" }
          ]
        },
        {
          title: "Research Areas",
          content: "Image Processing and Machine Learning for Automated Plant Disease Detection in Precision Agriculture"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=58038839300" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "3" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Early Detection of Student Depression Using Deep Learning Algorithms", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2025-2026", "Application ID": "482761-001", "Title of the Patent": "IoT Based Robot for Library Management", Status: "Filed" },
            { "S.No": "2", Affiliation: "MITS", "Academic Year": "2025-2026", "Application ID": "473973-001", "Title of the Patent": "IoT -Enabled interactive Device for Emotion – Aware Personalized Learning Recommendations", Status: "Published" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Best Paper Award for title Deep Learning-Based Emotion Recognition System with Depression Detection Capability",
            "Best Paper Award for title Evaluating Ensemble Machine Learning Approaches for Accurate Flight Pricing Predictions"
          ]
        }
      ]
    },
    "Mrs. N. Geethanjali": {
      name: "Mrs. N. Geethanjali",
      designation: "Asst. Professor",
      email: "geethanjalin@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/Geethanjali.jpeg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "CSE", Branch: "CSE", "College Name/University": "Mohan Babu University", "Year of Passing": "Pursuing" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "CSE", Branch: "CSE", "College Name/University": "Sri Venkateshwara University", "Year of Passing": "2021" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "CSC", Branch: "CSC", "College Name/University": "Sri Venkateshwara Engineering College for women", "Year of Passing": "2018" }
          ]
        },
        {
          title: "Research Areas",
          content: "Machine Learning"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=58798743500" },
            { Identifier: "Google scholar", Link: "https://scholar.google.co.uk/citations?hl=en&pli=1&user=Ao-lmqAAAAAJ" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "1" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Achieved Top performing Mentor in NPTEL for the Course Managing Intellectual Property in Universities (Jul-Dec 2024)",
            "Achieved NPTEL Discipline Star Certificate in (Jan-Apr 2025)"
          ]
        }
      ]
    },
    "Mr. V. Sivaraman": {
      name: "Mr. V. Sivaraman",
      designation: "Asst. Professor",
      email: "sivaramanv@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/Sivaraman.jpeg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Deep Learning", Branch: "CSE", "College Name/University": "Visvesvaraya Technological University", "Year of Passing": "Pursuing" },
            { "S.No": "2", Course: "M.E.", Specialization: "CSE", Branch: "CSE", "College Name/University": "Jayaram College of Engg. and Technology, Anna University", "Year of Passing": "2009" },
            { "S.No": "3", Course: "B.E.", Specialization: "CSE", Branch: "CSE", "College Name/University": "Madha Engineering College, Madras University", "Year of Passing": "2004" }
          ]
        },
        {
          title: "Research Areas",
          content: "Deep Learning, GenAI"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=59312432500" },
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/587078" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=7hNiIUYAAAAJ&hl=en" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "2" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "3", "Details of Research Publication": "Locating Patient Health Data Theft Using Gradient Boosting with Hybrid Microwave Transmission-Based Wearable Device", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Awarded for top performing mentor for NPTEL course Understanding Incubation and Entrepreneurship during Jan-Apr 2025"
          ]
        }
      ]
    },
    "Mr. Tharakeswara Raju B": {
      name: "Mr. Tharakeswara Raju B",
      designation: "Asst. Professor",
      email: "tharakeswararajub@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/tarak.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Wireless networks", Branch: "CSE", "College Name/University": "IIT, Tirupati", "Year of Passing": "Pursuing" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "CSE", Branch: "CSE", "College Name/University": "Sri Venkateswara University", "Year of Passing": "2017" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "CSC", Branch: "CSC", "College Name/University": "Madanapalle Institute of Technology & Science, JNTUA", "Year of Passing": "2011" }
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/657369" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=BLr32e000QsC&hl=en&authuser=1" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "1" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "How Fresh is the Data? An Optimal Learning-Based End-to-End Pull-Based Forwarding Framework for NDNoTs", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        }
      ]
    },
    "Mr. Subhas Das": {
      name: "Mr. Subhas Das",
      designation: "Asst. Professor",
      email: "subhasd@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/DSC_3008.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "CSE", Branch: "CSE", "College Name/University": "IIIT, Nagpur", "Year of Passing": "Pursuing" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "CSE", Branch: "CSE", "College Name/University": "MAKAUT", "Year of Passing": "2020" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "CSE", Branch: "CSE", "College Name/University": "West Bengal University of Technology", "Year of Passing": "2009" }
          ]
        },
        {
          title: "Research Areas",
          content: "Missing Value Prediction using Machine Learning"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=59940833600" },
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/664282" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?hl=en&user=233OYz0AAAAJ" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Neural Network-Based Prediction of Sensor Data for Enhanced Decision-Making in Smart Agriculture", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        }
      ]
    },
    "Mr. G. Nithin": {
      name: "Mr. G. Nithin",
      designation: "Asst. Professor",
      email: "nithing@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/nithin.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "MS (5 Year Integrated Degree)", Specialization: "Software Engineering", Branch: "Computing Science and Engineering", "College Name/University": "VIT University, Chennai", "Year of Passing": "2017" }
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/657375" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?hl=en&user=AlwJ-dUAAAAJ" }
          ]
        }
      ]
    },
    "Mrs. D. Bhargavajyothi": {
      name: "Mrs. D. Bhargavajyothi",
      designation: "Asst. Professor",
      email: "bhargavajyothid@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/93a2746129b622603a30e4d045391b32.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "M.Tech.", Specialization: "CSE", Branch: "CSE", "College Name/University": "Madanapalle Institute of Technology & Science", "Year of Passing": "2018" },
            { "S.No": "2", Course: "B.Tech.", Specialization: "CSE", Branch: "CSE", "College Name/University": "BIT Institute of Technology & Science, JNTUA", "Year of Passing": "2015" }
          ]
        }
      ]
    },
    "Dr. R. Praveen Kumar": {
      name: "Dr. R. Praveen Kumar",
      designation: "Asst. Professor",
      email: "praveenkumarr@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/Praveen Kumar.jpeg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Computer Science and Engineering", Branch: "Computer Science and Engineering", "College Name/University": "National Institute of Technology, Durgapur, West Bengal", "Year of Passing": "2024" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Computer Networks and Information Security", Branch: "Computer Science and Engineering", "College Name/University": "Sree Vidyanikethan Engineering college, Tirupathi", "Year of Passing": "2013" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "Computer Science and Engineering", Branch: "Computer Science and Engineering", "College Name/University": "Priyadarshini College of Engineering, JNTU Ananthapur", "Year of Passing": "2011" }
          ]
        },
        {
          title: "Research Areas",
          content: "Sensor Data Processing, Applications of Machine Learning, Information Security, Internet of Things"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57213825906" },
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/587138" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?hl=en&user=bPBx07wAAAAJ&view_op=list_works" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "5" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Enhanced Unimodal Continuous Authentication Architecture on Smartphones for User Identification through Behavioral Biometrics", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        }
      ]
    }
  },
  ce: {
    "Dr. Dipankar Roy": {
      name: "Dr. Dipankar Roy",
      designation: "Professor & Dean - School of Engineering",
      email: "roy_dipankar@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/drdipankarroy(1).jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Hydraulics", Branch: "Civil Engineering", "College Name/University": "Leonardo Da Vinci School of Engineering, University of Pisa, Italy", "Year of Passing": "2010" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Soil and Water Conservation Engineering", Branch: "Civil Engineering", "College Name/University": "IIT Kharagpur", "Year of Passing": "2006" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "Agricultural Engineering", Branch: "Agricultural Engineering", "College Name/University": "Bidhan Chandra Krishi Viswavidyalaya", "Year of Passing": "2004" }
          ]
        },
        {
          title: "Research Areas",
          content: "Hydraulics, Hydrological Modelling, Materials Science & Sustainable Construction"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "http://www.scopus.com/authid/detail.url?authorId=57223173350" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=mqCWzHsAAAAJ&hl=en" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "8" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2026", "Author Position": "2", "Details of Research Publication": "Machine learning for land use and land cover mapping", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q2" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024-25", "Application ID": "437599-001", "Title of the Patent": "ZIP LOCK INTERLOCKING BRICK", Status: "Granted" }
          ]
        }
      ]
    }
  },
  ece: {
    "Dr. Rama S Komaragiri": {
      name: "Dr. Rama S Komaragiri",
      designation: "Professor & Dean-Academics",
      email: "rama@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/rama.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Microelectronics and VLSI", Branch: "Electrical and Information Technology", "College Name/University": "Technical University of Darmstadt, Germany", "Year of Passing": "2005" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Solid State Technology", Branch: "EE/Physics", "College Name/University": "IIT Madras", "Year of Passing": "2002" },
            { "S.No": "3", Course: "M.Sc.", Specialization: "Physics", Branch: "Physics", "College Name/University": "IIT Bombay", "Year of Passing": "2000" }
          ]
        },
        {
          title: "Research Areas",
          content: "VLSI, NEMS/MEMS, Semiconductor Devices, Biomedical Systems, Pedagogy"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=9845916000" },
            { Identifier: "Vidwan", Link: "https://mits.irins.org/profile/319324" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=bO5yElsAAAAJ&hl=en" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "18" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "Cascaded Approach to Estimate HR Using Remote PPG, 2025 International Conference on Modeling, Simulation & Intelligent Computing (MoSICom), Dubai, DOI: 10.1109/MoSICom67153.2025.11398329", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "5", "Details of Research Publication": "Cuffless Monitoring of Blood Pressure Using Photoplethysmography Signal: A Comprehensive Review of Artificial Intelligence and Edge Computing Solutions, Archives of Computational Methods in Engineering, DOI:10.1007/s11831-25-10415-4", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "5", "Details of Research Publication": "A cascaded approach of group sparse mode decomposition and deep neural network for heart rate estimation using reference signal-less PPG signal, Measurement: Journal, DOI:10.1016/j.measurement.2024.116546", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "5", "Details of Research Publication": "Integrated wearable PPG: a multi-vital sign monitoring based on group sparse mode decomposition framework in remote health care using PPG signal, Physical and Engineering Sciences in Medicine, DOI:10.1007/s13246-025-01534-0", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "5", "Details of Research Publication": "A novel eXplainable AI agent for social interaction training of people with Autism Spectrum Disorder (ASD), International Journal of Information Technology, DOI:10.1007/s41870-025-02486-0", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "4", "Details of Research Publication": "Towards the Development of eXplainable Digital Twins for Precision Agriculture, IC2SDT 2024 Proceedings, DOI:10.1109/IC2SDT62152.2024.10696477", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "4", "Details of Research Publication": "Edge-Based Computation of Super-Resolution Superlet Spectrograms for Real-Time Estimation of Heart Rate Using an IoMT-Based Reference-Signal-Less PPG Sensor, IEEE Internet of Things Journal, DOI:10.1109/JIOT.2023.3322947", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "3", "Details of Research Publication": "Multi-Agent Based Social Interaction Model for Neurological Disorder, IC2SDT 2024 Proceedings, DOI:10.1109/IC2SDT62152.2024.10695958", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Implementation of XOR Gate using AOI model by Reconfigurable Artificial Neural Network on FPGA, ICCCNT 2024, DOI:10.1109/ICCCNT61001.2024.10726252", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "ECG Signal Detection and Lossless Data Compression Techniques for Implantable Cardiac Pacemaker Systems, Energy Systems in Electrical Engineering, DOI:10.1007/978-981-19-5303-3_4", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "ECG Signal Denoising Techniques for Cardiac Pacemaker Systems, Energy Systems in Electrical Engineering, DOI:10.1007/978-981-19-5303-3_3", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "FPGA Implementation of Combined ECG Signal Denoising, Peak Detection Technique for Cardiac Pacemaker Systems, Energy Systems in Electrical Engineering, DOI:10.1007/978-981-19-5303-3_5", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "Digital ECG Signal Watermarking and Compression, Energy Systems in Electrical Engineering, DOI:10.1007/978-981-19-5303-3_6", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "Blood pressure estimation and classification using a reference signal-less photoplethysmography signal: a deep learning framework, Physical and Engineering Sciences in Medicine, DOI:10.1007/s13246-023-01322-8", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "4", "Details of Research Publication": "Analysis of photoplethysmogram signal to estimate heart rate during physical activity using fractional fourier transform, Computer Methods and Programs in Biomedicine, DOI:10.1016/j.cmpb.2022.107294", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "A novel CS-NET architecture based on the unification of CNN, SVM and super-resolution spectrogram to monitor and classify blood pressure using photoplethysmography, Computer Methods and Programs in Biomedicine, DOI:10.1016/j.cmpb.2023.107716", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "17", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "4", "Details of Research Publication": "Optimized deep neural network models for blood pressure classification using Fourier analysis-based time–frequency spectrogram of photoplethysmography signal, Biomedical Engineering Letters, DOI:10.1007/s13534-023-00296-6", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "18", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "Basic Formation on Wavelet Transforms, Energy Systems in Electrical Engineering, DOI:10.1007/978-981-19-5303-3_7", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "19", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "Existing Methods to Evaluate Pacemaker Device Performance, Energy Systems in Electrical Engineering, DOI:10.1007/978-981-19-5303-3_2", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "High Performance and Power Efficient Electrocardiogram Detectors, Energy Systems in Electrical Engineering", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "4", "Details of Research Publication": "Automatic seizure detection and classification using super-resolution superlet transform and deep neural network, Computer Methods and Programs in Biomedicine, DOI:10.1016/j.cmpb.2023.107680", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "Estimation of Respiratory Rate from a Corrupted PPG Signal using Time-Frequency Spectrogram, Proceedings of SPIN 2023, DOI:10.1109/SPIN57001.2023.10117416", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "23", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "Introduction, Energy Systems in Electrical Engineering, DOI:10.1007/978-981-19-5303-3_1", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "24", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "Watermarking of ECG signals compressed using Fourier decomposition method, Multimedia Tools and Applications, DOI:10.1007/s11042-021-11492-w", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "25", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "Fourier Analysis Based Respiration Rate Estimation Using Corrupted Photoplethysmogram Signal, IMPACT 2022, DOI:10.1109/IMPACT55510.2022.10029065", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "26", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "2", "Details of Research Publication": "Via-free single metal level planar microcoil sensors for detection of magnetic microbeads, Journal of Magnetism and Magnetic Materials, DOI:10.1016/j.jmmm.2021.168469", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "27", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "A novel approach for real-time ECG signal denoising using Fourier decomposition method, Research on Biomedical Engineering, DOI:10.1007/s42600-022-00237-9", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "28", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "4", "Details of Research Publication": "Multilevel Classification and Detection of Cardiac Arrhythmias With High-Resolution Superlet Transform and Deep Convolution Neural Network, IEEE Transactions on Instrumentation and Measurement, DOI:10.1109/TIM.2022.3186355", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "29", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "4", "Details of Research Publication": "Hardware Requirements of Different Wavelet Filter Bank Architectures for ECG Signal Denoising, IATMSI 2022, DOI:10.1109/IATMSI56455.2022.10119389", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "30", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "2", "Details of Research Publication": "Simulation of reconfigurable fet circuits using sentaurus tcad tool, Sub-Micron Semiconductor Devices: Design and Applications, DOI:10.1201/9781003126393-11", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "31", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "4", "Details of Research Publication": "STSR: Spectro-Temporal Super-Resolution Analysis of a Reference Signal Less Photoplethysmogram for Heart Rate Estimation During Physical Activity, IEEE Transactions on Instrumentation and Measurement, DOI:10.1109/TIM.2022.3192831", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "32", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "A Review on Computational Methods for Denoising and Detecting ECG Signals to Detect Cardiovascular Diseases, Archives of Computational Methods in Engineering, DOI:10.1007/s11831-021-09642-2", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "33", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "2", "Details of Research Publication": "High-performance reconfigurable FET for a simple variable gain buffer amplifier design, International Journal of Electronics, DOI:10.1080/00207217.2021.1908618", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "34", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "Analytical modeling of reconfigurable transistors, Sub-Micron Semiconductor Devices: Design and Applications, DOI:10.1201/9781003126393-22", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "35", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "Reference signal less Fourier analysis based motion artifact removal algorithm for wearable photoplethysmography devices to estimate heart rate during physical exercises, Computers in Biology and Medicine, DOI:10.1016/j.compbiomed.2021.105081", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "36", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "A Review on Computation Methods Used in Photoplethysmography Signal Analysis for Heart Rate Estimation, Archives of Computational Methods in Engineering, DOI:10.1007/s11831-021-09597-4", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "37", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "3", "Details of Research Publication": "An analytical model for a TFET with an n-doped channel operating in accumulation and inversion modes, Journal of Computational Electronics, DOI:10.1007/s10825-021-01683-x", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "38", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "2", "Details of Research Publication": "Effect of Geometrical Parameters of Nonspiral microcoils on the Magnetic field Generation for Microactuating Applications, ICSCC 2021, DOI:10.1109/ICSCC51209.2021.9528177", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "39", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "4", "Details of Research Publication": "A robust digital ECG signal watermarking and compression using biorthogonal wavelet transform, Research on Biomedical Engineering, DOI:10.1007/s42600-020-00108-1", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "40", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "4", "Details of Research Publication": "Stationary wavelet transform based ECG signal denoising method, ISA Transactions, DOI:10.1016/j.isatra.2020.12.029", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "41", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "2", "Details of Research Publication": "Design and Analysis of Induction-Balance Sensor Using Non-spiral Planar Microcoils for Biomedical Applications, Nanotechnology in the Life Sciences, DOI:10.1007/978-3-030-64410-9_22", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "42", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "4", "Details of Research Publication": "Hardware Emulation of a Biorthogonal Wavelet Transform-Based Heart Rate Monitoring Device, IEEE Sensors Journal, DOI:10.1109/JSEN.2020.3034742", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "43", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "5", "Details of Research Publication": "Classification of Normal and Abnormal ECG signals using Support Vector Machine and Fourier Decomposition Method, iSES 2020, DOI:10.1109/iSES50453.2020.00044", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "44", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "2", "Details of Research Publication": "Reconfigurable circuits based on Single Gate Reconfigurable Field-Effect Transistors, CONECCT 2020, DOI:10.1109/CONECCT50063.2020.9198322", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "45", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "6", "Details of Research Publication": "Classification of epileptic seizure in EEG signal using support vector machine and EMD, Handbook of Research on Advancements of Artificial Intelligence in Healthcare Engineering, DOI:10.4018/978-1-7998-2120-5.ch005", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "46", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "2", "Details of Research Publication": "Performance Evaluation of Via-free Non-spiral Planar Microcoils, NEMS 2020, DOI:10.1109/NEMS50311.2020.9265635", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "47", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "2", "Details of Research Publication": "Performance analysis of non-spiral planar microcoils for biomedical electromagnetic microactuators, AIP Conference Proceedings, DOI:10.1063/5.0003966", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "48", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "2", "Details of Research Publication": "Performance Evaluation of Via-free Non-spiral Planar Microcoils for Biomedical Wireless Links, iSES 2020, DOI:10.1109/iSES50453.2020.00054", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "49", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "2", "Details of Research Publication": "Time–frequency localization using three-tap biorthogonal wavelet filter bank for electrocardiogram compressions, Biomedical Engineering Letters, DOI:10.1007/s13534-019-00117-9", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "50", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "3", "Details of Research Publication": "Performance analysis of planar microcoils for biomedical wireless power transfer links, Sadhana, DOI:10.1007/s12046-019-1170-5", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "51", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "2", "Details of Research Publication": "Design of efficient fractional operator for ECG signal detection in implantable cardiac pacemaker systems, International Journal of Circuit Theory and Applications, DOI:10.1002/cta.2667", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "52", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "3", "Details of Research Publication": "An analytical model for a reconfigurable tunnel field effect transistor, Superlattices and Microstructures, DOI:10.1016/j.spmi.2019.05.025", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "53", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "2", "Details of Research Publication": "Microfabrication and electrical characterization of non-spiral planar microcoils for biomedical applications, Lecture Notes in Electrical Engineering, DOI:10.1007/978-981-13-6447-1_16", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "54", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "2", "Details of Research Publication": "Fabrication, characterization, and modelling of a novel via-less single metal level magnetic microcoil sensor for biosensing applications, Sensors and Actuators A: Physical, DOI:10.1016/j.sna.2019.02.025", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "55", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "3", "Details of Research Publication": "Efficient QRS complex detection algorithm based on Fast Fourier Transform, Biomedical Engineering Letters, DOI:10.1007/s13534-018-0087-y", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "56", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "2", "Details of Research Publication": "Modelling, microfabrication and performance evaluation of non-spiral planar microcoils for biomedical wireless power transfer systems, Micro and Nano Letters, DOI:10.1049/mnl.2019.0158", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "57", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "2", "Details of Research Publication": "Design and Analysis of Non-spiral Planar Microcoil-Based Electromagnetic Microactuator, Arabian Journal for Science and Engineering, DOI:10.1007/s13369-018-3639-7", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "58", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "2", "Details of Research Publication": "From Pacemaker to Wearable: Techniques for ECG Detection Systems, Journal of Medical Systems, DOI:10.1007/s10916-017-0886-1", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "59", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "3", "Details of Research Publication": "Electromagnetic Microactuators using Non-spiral Planar Microcoils for Robotic Applications, Procedia Computer Science, DOI:10.1016/j.procs.2018.07.068", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "60", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "3", "Details of Research Publication": "Analysis of reconfigurable tunnel field effect transistor for improved current characteristics, ISNE 2018, DOI:10.1109/ISNE.2018.8394667", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "61", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "4", "Details of Research Publication": "Two dimensional analytical model for a reconfigurable field effect transistor, Superlattices and Microstructures, DOI:10.1016/j.spmi.2017.12.006", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "62", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "2", "Details of Research Publication": "Design of wavelet transform based electrocardiogram monitoring system, ISA Transactions, DOI:10.1016/j.isatra.2018.08.003", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "63", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "2", "Details of Research Publication": "Study of Circuits Based on SOI-vertical Gate-All-Around FET, INDICON 2018, DOI:10.1109/INDICON45594.2018.8987021", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "64", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "2", "Details of Research Publication": "Heart rate monitoring and therapeutic devices: A wavelet transform based approach for the modeling and classification of congestive heart failure, ISA Transactions, DOI:10.1016/j.isatra.2018.05.003", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "65", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "2", "Details of Research Publication": "A wavelet transform-based filter bank architecture for ECG signal denoising, Advances in Intelligent Systems and Computing, DOI:10.1007/978-981-10-8636-6_26", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "66", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "2", "Details of Research Publication": "Detection of Magnetic Particles Using Induction-Balance Microsensor Based on Non-Spiral Planar Microcoils, Proceedings of IEEE Sensors, DOI:10.1109/ICSENS.2018.8589879", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "67", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "3", "Details of Research Publication": "Design of a Biorthogonal Wavelet Transform Based R-Peak Detection and Data Compression Scheme for Implantable Cardiac Pacemaker Systems, Journal of Medical Systems, DOI:10.1007/s10916-018-0953-2", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "68", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "2", "Details of Research Publication": "Reconfigurable tunnel field effect transistor exhibiting reduced ambipolar behaviour, INDICON 2016, DOI:10.1109/INDICON.2016.7838995", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "69", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "2", "Details of Research Publication": "Modeling and simulation of non-spiral coil for magnetic sensing applications, Journal of Mechanical Science and Technology, DOI:10.1007/s12206-017-1036-x", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "70", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "2", "Details of Research Publication": "Significance of non-spiral planar microcoils over spiral coils for biomedical applications, ICEE 2016, DOI:10.1109/ICEmElec.2016.8074614", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "71", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "2", "Details of Research Publication": "Non-spiral planar microcoils for biomedical applications, NEMS 2017, DOI:10.1109/NEMS.2017.8017134", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "72", "Publication Affiliation": "Others", "Academic Year": "2016", "Author Position": "3", "Details of Research Publication": "Analysing the Effects of Temperature and Doping Concentration in Silicon Based MEMS Piezoresistive Pressure Sensor, Procedia Computer Science, DOI:10.1016/j.procs.2016.07.189", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "73", "Publication Affiliation": "Others", "Academic Year": "2015", "Author Position": "2", "Details of Research Publication": "Computer aided modeling for a miniature silicon-on-insulator MEMS piezoresistive pressure sensor, Photonic Sensors, DOI:10.1007/s13320-015-0239-y", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "74", "Publication Affiliation": "Others", "Academic Year": "2015", "Author Position": "2", "Details of Research Publication": "Drift region optimization by double epitaxial layer in low and medium power rated silicon power MOSFETs, Journal of Materials Science: Materials in Electronics, DOI:10.1007/s10854-015-3271-1", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "75", "Publication Affiliation": "Others", "Academic Year": "2015", "Author Position": "3", "Details of Research Publication": "Recessed MOSFET in 28 nm FDSOI for Better Breakdown Characteristics, Proceedings of the IEEE International Conference on VLSI Design, DOI:10.1109/VLSID.2015.54", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "76", "Publication Affiliation": "Others", "Academic Year": "2015", "Author Position": "4", "Details of Research Publication": "Dimension and doping concentration based noise and performance optimization of a piezoresistive MEMS pressure sensor, Microsystem Technologies, DOI:10.1007/s00542-014-2118-7", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "77", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "2", "Details of Research Publication": "Analytical studies of vertical double gate NTFET, ICECS 2014, DOI:10.1109/ECS.2014.6892630", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "78", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "2", "Details of Research Publication": "Performance optimization of MEMS capacitive accelerometer, ICDCCom 2014, DOI:10.1109/ICDCCom.2014.7024738", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "79", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "6", "Details of Research Publication": "Ferroelectric characteristics of MFIS structure with P(VDF–TrFE)/BaTiO3 nanocomposite as ferroelectric layer, Applied Physics A, DOI:10.1007/s00339-014-8590-1", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "80", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "3", "Details of Research Publication": "Performance analysis of a silicon piezoresistive pressure sensor based on diaphragm geometry and piezoresistor dimensions, ICCPCT 2014, DOI:10.1109/ICCPCT.2014.7055011", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "81", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "3", "Details of Research Publication": "Sensitivity enhancement of a silicon Based MEMS pressure sensor by optimization of size and position of piezoresistor, ICECS 2014, DOI:10.1109/ECS.2014.6892559", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "82", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "2", "Details of Research Publication": "Verifying finite element simulation in miniature silicon based stacked diaphragm pressure sensors, Microsystem Technologies, DOI:10.1007/s00542-013-1936-3", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "83", "Publication Affiliation": "Others", "Academic Year": "2013", "Author Position": "3", "Details of Research Publication": "Optimized design of a stacked diaphragm MEMS pressure sensor for Tsunami warning system, GHTC-SAS 2013, DOI:10.1109/GHTC-SAS.2013.6629943", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "84", "Publication Affiliation": "Others", "Academic Year": "2013", "Author Position": "3", "Details of Research Publication": "Design and simulation of pressure sensor for ocean depth measurements, Applied Mechanics and Materials, DOI:10.4028/www.scientific.net/AMM.313-314.666", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "85", "Publication Affiliation": "Others", "Academic Year": "2013", "Author Position": "2", "Details of Research Publication": "A simulation study of multifunction double-halo field effect transistor, AICERA/ICMiCR 2013, DOI:10.1109/AICERA-ICMiCR.2013.6575978", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "86", "Publication Affiliation": "Others", "Academic Year": "2013", "Author Position": "3", "Details of Research Publication": "Comparison of a 30nm tunnel field effect transistor and CMOS inverter characteristics, ICACC 2013, DOI:10.1109/ICACC.2013.36", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "87", "Publication Affiliation": "Others", "Academic Year": "2013", "Author Position": "3", "Details of Research Publication": "Mixed mode circuit simulation of a junction less transistor and a comparative study with CMOS inverter, ICACC 2013, DOI:10.1109/ICACC.2013.99", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "88", "Publication Affiliation": "Others", "Academic Year": "2013", "Author Position": "2", "Details of Research Publication": "A vertical JFET with improved on to off current performance, AICERA/ICMiCR 2013, DOI:10.1109/AICERA-ICMiCR.2013.6575962", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "89", "Publication Affiliation": "Others", "Academic Year": "2013", "Author Position": "2", "Details of Research Publication": "Germanium-source germanium-channel silicon-drain vertical TFET for low power applications, AICERA/ICMiCR 2013, DOI:10.1109/AICERA-ICMiCR.2013.6575963", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "90", "Publication Affiliation": "Others", "Academic Year": "2013", "Author Position": "3", "Details of Research Publication": "Optimized design of a silicon based MEMS pressure sensor for wider range and better sensitivity, AICERA/ICMiCR 2013, DOI:10.1109/AICERA-ICMiCR.2013.6575971", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "91", "Publication Affiliation": "Others", "Academic Year": "2013", "Author Position": "2", "Details of Research Publication": "Performance comparison of 4H-SiC MESFETs, AICERA/ICMiCR 2013, DOI:10.1109/AICERA-ICMiCR.2013.6575965", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "92", "Publication Affiliation": "Others", "Academic Year": "2012", "Author Position": "2", "Details of Research Publication": "Feasibility study of AC bridges in MEMS pressure sensors, SCEECS 2012, DOI:10.1109/SCEECS.2012.6184727", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "93", "Publication Affiliation": "Others", "Academic Year": "2012", "Author Position": "3", "Details of Research Publication": "Finite element analysis on miniature silicon and SOI pressure sensors, INDICON 2012, DOI:10.1109/INDCON.2012.6420715", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "94", "Publication Affiliation": "Others", "Academic Year": "2012", "Author Position": "2", "Details of Research Publication": "Dual gate enhancement-mode JFET (DG-JFET) for ultra low power applications, SCEECS 2012, DOI:10.1109/SCEECS.2012.6184726", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "95", "Publication Affiliation": "Others", "Academic Year": "2012", "Author Position": "3", "Details of Research Publication": "DG-JFET for low power applications and behavior of it as a MOS capacitor, ICACC 2012, DOI:10.1109/ICACC.2012.30", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "96", "Publication Affiliation": "Others", "Academic Year": "2012", "Author Position": "3", "Details of Research Publication": "Simulation studies of tunnel field effect transistor (TFET), ICACC 2012, DOI:10.1109/ICACC.2012.31", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "97", "Publication Affiliation": "Others", "Academic Year": "2011", "Author Position": "2", "Details of Research Publication": "Simulation and comparison studies of silicon carbide and silicon power devices, IICPE 2010, DOI:10.1109/IICPE.2011.5728089", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "98", "Publication Affiliation": "Others", "Academic Year": "2008", "Author Position": "2", "Details of Research Publication": "Spinel-SiAlONs - A New Group of Silicon-Based Hard Materials, Organosilicon Chemistry V, DOI:10.1002/9783527619924.ch123", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "99", "Publication Affiliation": "Others", "Academic Year": "2008", "Author Position": "2", "Details of Research Publication": "Spinel-SiAlONs - A New Group of Silicon-Based Hard Materials, Organosilicon Chemistry, DOI:10.1002/9783527620777.ch123d", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "100", "Publication Affiliation": "Others", "Academic Year": "2005", "Author Position": "9", "Details of Research Publication": "Introduction of crystalline high-k gate dielectrics in a CMOS process, Journal of Non-Crystalline Solids, DOI:10.1016/j.jnoncrysol.2005.04.032", Indexing: "SCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "101", "Publication Affiliation": "Others", "Academic Year": "2005", "Author Position": "2", "Details of Research Publication": "Spinel-SiAlONs - A New Group of Silicon-Based Hard Materials, Organosilicon Chemistry Set, DOI:10.1002/9783527620777.ch123d", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "102", "Publication Affiliation": "Others", "Academic Year": "2004", "Author Position": "2", "Details of Research Publication": "Global and local electrical behaviour of crystalline praseodymium oxide high-K gate dielectric MOSFETs, Proceedings - Electrochemical Society", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "103", "Publication Affiliation": "Others", "Academic Year": "2003", "Author Position": "3", "Details of Research Publication": "Electrical characterisation of crystalline praseodymium oxide high-k gate dielectric MOSFETs, European Solid-State Device Research Conference, DOI:10.1109/ESSDERC.2003.1256859", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "Others", "Academic Year": "2020-21", "Application ID": "Patent Number: 542152", "Title of the Patent": "ELECTROENCEPHALOGRAPHY (EEG) MONITORING DEVICE", Status: "Granted" },
            { "S.No": "2", Affiliation: "Others", "Academic Year": "2020-21", "Application ID": "202111021669", "Title of the Patent": "SELF-STARTING ENERGY HARVESTING SYSTEM", Status: "Application Hearing" },
            { "S.No": "3", Affiliation: "Others", "Academic Year": "2021-22", "Application ID": "Patent Number: 569081", "Title of the Patent": "AN AUTOMATED SYSTEM AND METHOD FOR MONITORING HEALTH CONDITION OF A USER", Status: "Granted" },
            { "S.No": "4", Affiliation: "Others", "Academic Year": "2023-24", "Application ID": "202311055234", "Title of the Patent": "A MULTI-LEVEL SECURITY MECHANISM FOR TRANSFERRING BIOMEDICAL HEALTH INFORMATION OF A USER", Status: "Under Examination" },
            { "S.No": "5", Affiliation: "Others", "Academic Year": "2023-24", "Application ID": "202411022166", "Title of the Patent": "AI BASED AUTISM SPECTRUM DISORDER (ASD) CARE AGENT FOR SOCIAL INTERACTION TRAINING IN B2C BUSINESS MODE", Status: "Awaiting Examination" },
            { "S.No": "6", Affiliation: "Others", "Academic Year": "2023-24", "Application ID": "202411022165", "Title of the Patent": "EXPLAINABLE DIGITAL TWINS (XDTS) AND ENHANCED EXPLAINABLE DIGITAL TWINS (EXDTS)", Status: "Awaiting Examination" }
          ]
        }
      ]
    },
    "Dr. P. Ramanathan": {
      name: "Dr. P. Ramanathan",
      designation: "Professor & Principal",
      email: "ramanathan@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/Dr. P. Ramanathan.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Information & Communication Engineering", Branch: "ECE", "College Name/University": "PSG College of Technology & Anna University", "Year of Passing": "2010" },
            { "S.No": "2", Course: "M.E.", Specialization: "VLSI Design", Branch: "VLSI", "College Name/University": "PSG College of Technology", "Year of Passing": "2006" },
            { "S.No": "3", Course: "B.E.", Specialization: "Electronics and Instrumentation", Branch: "EIE", "College Name/University": "Tamilnadu College of Engineering", "Year of Passing": "1997" }
          ]
        },
        {
          title: "Research Areas",
          content: "VLSI Design & Biomedical Engineering"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=56703722200" },
            { Identifier: "Vidwan", Link: "https://mits.irins.org/profile/460984" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "7" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "5", "Details of Research Publication": "Low Power Parallel Prefix Adders Design and Power Estimation, IEEE AECE 2025", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "5", "Details of Research Publication": "Efficient Noise Cancellation in Lung Signals Using Pipelined Adaptive LMS Algorithm, IEEE ICSSEECC 2024", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Multi-Class Skin Disease Classification: A Study of Transfer Learning Strategies, IEEE IConSCEPT 2024", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "Estimating Lithium-Ion Battery State of Health with Least Squares Approach, IEEE ETITE 2024", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "A Compact Sierpinski Gasket Fractal Antenna for S, C, X, and Ku Band Applications, PIERC", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Details of Research Publication": "Comparative Analysis of Mice Protein Expression Data, Springer 2024", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Koch Snowflake Fractal Embedded Octagonal Patch Antenna with Hexagonal Split Ring, PIERC", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "2", "Details of Research Publication": "Investigation of Techniques to Recognize Optimal Power Structuring of Vedic Multiplier, Springer 2019", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "3", "Details of Research Publication": "Indoor Channel Characterization with Multiple Hypotheses Testing in Massive MIMO, JCTN 2019", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "3", "Details of Research Publication": "Innovative Localization Algorithm Using the Line of Intersection Technique in WSN, JCSI 2020", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "2", "Details of Research Publication": "Modified Low-Power Built-in Self-test for Image Processing Application, Springer 2019", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2017-18", "Author Position": "3", "Details of Research Publication": "Optimal test suite selection in regression testing with testcase prioritization, Springer 2017", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "1", "Details of Research Publication": "Modified low power Wallace Tree multiplier using higher order compressors, Int. J. Electronics 2016", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "2", "Details of Research Publication": "Comparative Analysis and Comparison of Various AQM Algorithm, IJSI 2015", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "1", "Details of Research Publication": "High Performance Parallel Prefix Adder for Wider Word Lengths, GJPAM 2015", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2014-15", "Author Position": "2", "Details of Research Publication": "Effect of BIRADS shape descriptors on breast cancer analysis, IJMEI 2015", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "17", "Publication Affiliation": "Others", "Academic Year": "2013-14", "Author Position": "2", "Details of Research Publication": "Area Efficient Carry Select Adder Using Negative Edge Triggered D-Flipflop, AMM 2014", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "18", "Publication Affiliation": "Others", "Academic Year": "2014-15", "Author Position": "2", "Details of Research Publication": "A new hybrid multiplier using Dadda and Wallace method, IEEE ECS 2014", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "19", "Publication Affiliation": "Others", "Academic Year": "2013-14", "Author Position": "3", "Details of Research Publication": "Low Power Parallel Prefix Adder, AMM 2014", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2009-10", "Author Position": "1", "Details of Research Publication": "A novel logarithmic prefix adder with minimized power delay product", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2008-09", "Author Position": "1", "Details of Research Publication": "Decomposition algorithm for power delay product optimization in Wallace multiplier, IEEE 2008", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2007-08", "Author Position": "2", "Details of Research Publication": "Comparative analysis of low power high performance flip-flops in 0.13um technology, IEEE ADCOM 2007", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "Others", "Academic Year": "2017-18", "Application ID": "201717017890", "Title of the Patent": "Optimal test suite selection in regression testing with testcase prioritization", Status: "Published" }
          ]
        }
      ]
    },
    "Dr. Sanjay Kumar C. Gowre": {
      name: "Dr. Sanjay Kumar C. Gowre",
      designation: "Professor",
      email: "sanjay@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/sanjay.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Photonics", Branch: "ECE", "College Name/University": "IIT Kharagpur", "Year of Passing": "2013" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Fiber Optics", Branch: "ECE", "College Name/University": "IIT Kharagpur", "Year of Passing": "2006" },
            { "S.No": "3", Course: "B.E.", Specialization: "E&CE", Branch: "E&CE", "College Name/University": "Gulbarga University", "Year of Passing": "1995" }
          ]
        },
        {
          title: "Research Areas",
          content: "Photonics, Optics, Biosensors"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=16401166700" },
            { Identifier: "Google scholar", Link: "https://scholar.google.co.in/citations?user=b2Vv3usAAAAJ" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "10" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "Others", "Academic Year": "2021", "Application ID": "201921033981", "Title of the Patent": "Design & Development of Miniaturized 2x1 square array of Micro-strip Textile Antenna", Status: "Published" }
          ]
        }
      ]
    },
    "Dr. S. Rajasekaran": {
      name: "Dr. S. Rajasekaran",
      designation: "Professor & Head",
      email: "rajasekaran@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/f8983b3c4255e5b248d9b51eb8f62e38.jpeg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Control systems and Antenna", Branch: "ICE", "College Name/University": "Coimbatore Institute of Technology", "Year of Passing": "2014" },
            { "S.No": "2", Course: "M.E.", Specialization: "Information and Communication", Branch: "ICE", "College Name/University": "Bannari Amman Institute of Technology", "Year of Passing": "2007" },
            { "S.No": "3", Course: "B.E.", Specialization: "Electronics and Instrumentation Engineering", Branch: "EIE", "College Name/University": "Jayaram College of Engineering", "Year of Passing": "2003" }
          ]
        },
        {
          title: "Research Areas",
          content: "Control systems and Antenna"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57194531697" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "6" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2025", "Application ID": "202541080004", "Title of the Patent": "A System for Electricity Generation from Food Waste and A Method of Monitoring Using IOT", Status: "Under Examination" }
          ]
        }
      ]
    },
    "Dr. Nehru Kandasamy": {
      name: "Dr. Nehru Kandasamy",
      designation: "Professor",
      email: "nehru@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/nehru.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Image Processing", Branch: "ECE", "College Name/University": "Anna University", "Year of Passing": "2014" },
            { "S.No": "2", Course: "M.E.", Specialization: "Embedded Systems", Branch: "ECE", "College Name/University": "Anna University", "Year of Passing": "2006" },
            { "S.No": "3", Course: "B.E.", Specialization: "ECE", Branch: "ECE", "College Name/University": "Mahatma Gandhi University", "Year of Passing": "2001" }
          ]
        },
        {
          title: "Research Areas",
          content: "Image Processing, Embedded Systems, IoT"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57201562500" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "5" }
          ]
        }
      ]
    },
    "Dr. Murli Manohar": {
      name: "Dr. Murli Manohar",
      designation: "Assoc. Professor",
      email: "murlimanohar@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/murli.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Wireless Communications", Branch: "ECE", "College Name/University": "JNTUA", "Year of Passing": "2019" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Digital Communications", Branch: "ECE", "College Name/University": "JNTU Hyderabad", "Year of Passing": "2008" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "ECE", Branch: "ECE", "College Name/University": "JNTUA", "Year of Passing": "2005" }
          ]
        },
        {
          title: "Research Areas",
          content: "Wireless Communications, Signal Processing"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57208987600" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "4" }
          ]
        }
      ]
    },
    "Dr. V. Jayaprakasan": {
      name: "Dr. V. Jayaprakasan",
      designation: "Assoc. Professor & Associate Dean",
      email: "jayaprakasan@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/jayaprakasan.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "VLSI Design", Branch: "ECE", "College Name/University": "Anna University", "Year of Passing": "2016" },
            { "S.No": "2", Course: "M.E.", Specialization: "VLSI Design", Branch: "ECE", "College Name/University": "Anna University", "Year of Passing": "2009" },
            { "S.No": "3", Course: "B.E.", Specialization: "ECE", Branch: "ECE", "College Name/University": "Anna University", "Year of Passing": "2004" }
          ]
        },
        {
          title: "Research Areas",
          content: "VLSI Design, Low Power Circuits"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57193789000" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "6" }
          ]
        }
      ]
    },
    "Dr. K. Sathesh": {
      name: "Dr. K. Sathesh",
      designation: "Assoc. Professor",
      email: "satheshk@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/sathesh.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Microwave Engineering", Branch: "ECE", "College Name/University": "Anna University", "Year of Passing": "2015" },
            { "S.No": "2", Course: "M.E.", Specialization: "Microwave and Optical Engineering", Branch: "ECE", "College Name/University": "Anna University", "Year of Passing": "2008" },
            { "S.No": "3", Course: "B.E.", Specialization: "ECE", Branch: "ECE", "College Name/University": "Madras University", "Year of Passing": "2003" }
          ]
        },
        {
          title: "Research Areas",
          content: "Microwave Engineering, Antennas"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57194531200" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "5" }
          ]
        }
      ]
    },
    "Dr. Maneesh Kumar Singh": {
      name: "Dr. Maneesh Kumar Singh",
      designation: "Assoc. Professor",
      email: "maneesh@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/maneesh.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Signal Processing", Branch: "ECE", "College Name/University": "IIT Delhi", "Year of Passing": "2018" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Signal Processing", Branch: "ECE", "College Name/University": "IIT Delhi", "Year of Passing": "2012" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "ECE", Branch: "ECE", "College Name/University": "UP Technical University", "Year of Passing": "2008" }
          ]
        },
        {
          title: "Research Areas",
          content: "Signal Processing, Machine Learning"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57205678000" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "7" }
          ]
        }
      ]
    },
    "Dr. Grande Naga Jyothi": {
      name: "Dr. Grande Naga Jyothi",
      designation: "Assoc. Professor",
      email: "jyothi@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/jyothi.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Communication Systems", Branch: "ECE", "College Name/University": "JNTUA", "Year of Passing": "2020" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Communication Systems", Branch: "ECE", "College Name/University": "JNTUA", "Year of Passing": "2012" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "ECE", Branch: "ECE", "College Name/University": "JNTUA", "Year of Passing": "2009" }
          ]
        },
        {
          title: "Research Areas",
          content: "Communication Systems, Wireless Networks"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57211563000" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "3" }
          ]
        }
      ]
    },
    "Dr. Rakesh Nath Tiwari": {
      name: "Dr. Rakesh Nath Tiwari",
      designation: "Assoc. Professor",
      email: "rakesh@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/1120faf5d8ab8c822818d9c4034e8f1f.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Electronics and Communication Engineering", Branch: "ECE", "College Name/University": "Uttarakhand Technical University", "Year of Passing": "2020" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Optical and Wireless Communication Technology", Branch: "ECE", "College Name/University": "Jaypee University of Information Technology", "Year of Passing": "2008" },
            { "S.No": "3", Course: "M.Sc.", Specialization: "Electronics", Branch: "Electronics", "College Name/University": "Deen Dayal Upadhyaya Gorakhpur University", "Year of Passing": "2004" },
            { "S.No": "4", Course: "B.Sc.", Specialization: "Electronics & Physics", Branch: "Electronics", "College Name/University": "University of Allahabad", "Year of Passing": "2002" }
          ]
        },
        {
          title: "Research Areas",
          content: "Communication and Computational Electromagnetic, Antenna Theory, MIMO Antennas for 5G and 6G Communications, Implantable and Wearable Antennas, mmWave, THz"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57198002672" },
            { Identifier: "Vidwan", Link: "https://mits.irins.org/profile/295615" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=WiphX9oAAAAJ" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "18" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "3", "Details of Research Publication": "Multiband flexible MIMO antenna for NB-IoT/ISM/5G and wearable applications", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q1" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "Others", "Academic Year": "2024", "Application ID": "202311004785", "Title of the Patent": "A loop-based ultraminiature low-profile ultrawideband capsule antenna device", Status: "Granted" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Received Best Researcher Award (2023-2024), MITS",
            "Best research paper award 2020, AEU-International Journal of Electronics and Communications"
          ]
        }
      ]
    },
    "Dr. Vivek Jain": {
      name: "Dr. Vivek Jain",
      designation: "Asst. Professor",
      email: "vivekjain@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/vivek.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D", Specialization: "Electronics and Communication (VLSI Design)", Branch: "ECE", "College Name/University": "Devi Ahilya Vishwavidyalaya", "Year of Passing": "2021" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Microelectronics & VLSI Design", Branch: "ECE", "College Name/University": "S.G.S.I.T.S., Indore", "Year of Passing": "2010" },
            { "S.No": "3", Course: "B.E.", Specialization: "Electronics & Communication Engineering", Branch: "ECE", "College Name/University": "HCET, Jabalpur", "Year of Passing": "2002" }
          ]
        },
        {
          title: "Research Areas",
          content: "VLSI Design, Nano Electronics"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57211563505" },
            { Identifier: "Vidwan", Link: "https://mits.irins.org/profile/461210" },
            { Identifier: "Google scholar", Link: "https://scholar.google.co.in/citations?user=YpWyZgUAAAAJ" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "2" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Design and Analysis of an Energy-Efficient Full Adder Using Reversible Charge Recovery Logic", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024-25", "Application ID": "202521031900", "Title of the Patent": "E-Governance and Public Administration in the Digital Era", Status: "Published" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "GATE qualified in 2006 (Score 333)"
          ]
        }
      ]
    }
  }
};

export function getFacultyProfile(deptKey: string, facultyName: string): FacultyProfile | undefined {
  return facultyProfiles[deptKey]?.[facultyName];
}
