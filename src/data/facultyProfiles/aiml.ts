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
  officeAddress?: string;
  sections: FacultySection[];
}

export const aimlProfiles: Record<string, FacultyProfile> = {
    "Mr. Sanath Hegde": {
      name: "Mr. Sanath Hegde",
      designation: "Professor of Practice",
      email: "cto@mits.ac.in",
      officeAddress: "NPN204",
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

    "Dr. Ramakanta Mohanty":{
      name: "Dr. Ramakanta Mohanty",
      designation: "Professor",
      email: "drramakantham@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/Mohanty.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Computer Science and Engineering", Branch: "Computer Science and Engineering", "College Name/University": "Berhampur University", "Year of Passing": "2011" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Software Engineering", Branch: "Software Engineering", "College Name/University": "NIT Allahabad", "Year of Passing": "2002" },
            { "S.No": "3", Course: "M.Tech.", Specialization: "Computer Science and Engineering", Branch: "Computer Science and Engineering", "College Name/University": "JNTUH, Hyderabad", "Year of Passing": "2013" },
            { "S.No": "4", Course: "AMIE", Specialization: "Electronics & Communication Engineering", Branch: "Electronics & Communication Engineering", "College Name/University": "Institution of Engineers (IEI) ", "Year of Passing": "1999" }
          ]
        }
      ]
    },

    "Dr. M. Rajeswari": {
      name: "Dr. M. Rajeswari",
      designation: "Assoc. Professor",
      email: "drrajeswarim@mits.ac.in",
      officeAddress: "NPN204",
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
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2026", "Author Position": "1", "Details of Research Publication": "Design and Validation of an Explainable Artificial Intelligence Based Decision Intelligence Model for Cyber Risk Aware Quality Systems and Ethical Human Resource Management: Investigating the Moderating Influence of Corporate Social Responsibility in Digitally Transformed Organizations, Quality - Access to Success, Vol.27, No.210, 2026", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2026", "Author Position": "2", "Details of Research Publication": "Ontology-Enabled Digital Twin Design with AI-Based Data Management and Privacy-Preserving Mechanisms for Secure 6G Communication Systems", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "" },
            { "S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "AI-Enabled Neural Computing and Genetic Algorithm Optimization for Resource-Efficient Smart Environments in IoT Applications, Natural and Engineering Sciences, 10 (3), Dec 2025", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Assessing the Performance of WBAN using Reliability Analysis: UGFT-A Universal Generating Function Technique, Journal of Sensor Science and Technology", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "4", "Details of Research Publication": "Mental Health Treatment Prediction Using Machine Learning, Biomedical and Pharmacology Journal, 2025", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "3", "Details of Research Publication": "Early-Stage Detection of Colorectal Cancer Using Image Classification, 4th International Conference on Sentiment Analysis and Deep Learning Icsadl 2025 Proceedingspp. 1613-1618", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Performance Analysis of AlN/GaN HEMTs on β-Ga2O3 Through Exploration of Varied Back Barriers: An Investigative Study for Advanced RF Power Applications, Journal of Electronic Materials53(7), pp. 3887-3900", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Innovative Financial Fraud Detection: Combining GCRNN and DiffPool with N-Way K-Shot Classification Techniques, 3rd International Conference on Automation Computing and Renewable Systems Icacrs 2024 Proceedingspp. 636-643", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "3", "Details of Research Publication": "Fetal Health Status Classification Using Machine Learning Algorithms-A Comparative Analysis, 2024 International Conference on Smart Electronics and Communication Systems Isense 2024", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "A Comprehensive Review of Recent Artificial Intelligence Techniques and IOT Applications in Dairy Farms, 10th International Conference on Advanced Computing and Communication Systems Icaccs 2024 pp. 242-247", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "AI-Based Desktop VIZ: A Voice-Activated Personal Assistant-Futuristic and Sustainable Technology, Proceedings of the 2024 10th International Conference on Communication and Signal Processing Iccsp 2024 pp. 1095-1100", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Prior Alzehmiers detection using Deep Learning, Proceedings of the 2024 10th International Conference on Communication and Signal Processing Iccsp 2024 pp. 1095-1100", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Study on a solar water heater performance under the influence of nanofluid, Energy Environment Efficiency Resources Globalization 10(2), pp. 7-18", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "6", "Details of Research Publication": "NLP-ML Hybrid: Identifying Signs of Suicidal Thoughts in Social Media Content, 2nd International Conference on Self Sustainable Artificial Intelligence Systems Icssas 2024 Proceedingspp. 1373-1379", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Comparable Works in Blockchain Technology, Blockchain Intelligent Systems Protocols Application and Approaches for Future Generation Computingpp. 34-50", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "" },
            { "S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Voice-based Virtual Assistant with Security, Proceedings of the 2023 2nd International Conference on Electronics and Renewable Systems Icears 2023 pp. 822-827", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "17", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Song Recommendation based on Voice Tone Analysis, Proceedings of the 2023 2nd International Conference on Electronics and Renewable Systems Icears 2023 pp. 708-712", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "18", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Empowering Tourists with Context-Aware Recommendations using GAN, Proceedings of the 2023 2nd International Conference on Electronics and Renewable Systems Icears 2023 pp. 1444-1449", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "19", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Neural Network-based Prognostic Model for Cerebrovascular Accident using CT Scans, 2nd International Conference on Sustainable Computing and Data Communication Systems Icscds 2023 Proceedings pp. 497-502", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "2", "Details of Research Publication": "Analysis of DC and RF performance of Al0.31Ga0.69N/Al0.1Ga0.9N/ β-Ga2O3 double quantum well HEMT on silicon carbide substrate, International Journal of RF and Microwave Computer Aided Engineering 32(6)", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "Utilization of deep learning technology in recognizing bird species, Aip Conference Proceedings 2463", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "1", "Details of Research Publication": "Detection of tyre defects using weighted quality-based convolutional neural network, Soft Computing 26(9), pp. 4261-4273", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "23", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "Exploration of sentiment analysis and legitimate artistry for opinion mining, Multimedia Tools and Applications, 81(9), pp. 11989-12004", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "24", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "Prevention of School Shooting using Neural Networks and Computer Vision, Proceedings of the 2022 3rd International Conference on Intelligent Computing Instrumentation and Control Technologies Computational Intelligence for Smart Systems Icicict 2022 pp. 1703-1709", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "25", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "2", "Details of Research Publication": "Visual Saliency Prediction Using Deep Learning, 2021 7th International Conference on Advanced Computing and Communication Systems", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "26", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "5", "Details of Research Publication": "Recent Survey on Emotion Recognition Using Physiological Signals, 2021 7th International Conference on Advanced Computing and Communication Systems Icaccs 2021 pp. 1858-1863", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "27", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "2", "Details of Research Publication": "Adaptive beam formation and channel allocation using substance near multicast protocol and CS-iEHO, Soft Computing 25(6), pp. 4663-4676", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "28", "Publication Affiliation": "Others", "Academic Year": "2021", "Author Position": "2", "Details of Research Publication": "Tyre inspection through multi-state convolutional neural networks, Intelligent Automation and Soft Computing 27(1), pp. 1-13", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "29", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Person identification with aerial imagery using SegNet based semantic segmentation, Earth Science Informatics 13(4), pp. 1293-1304", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "30", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "4", "Details of Research Publication": "Cascading Model in Underwater Wireless Sensors using Routing Policy for State Transitions, Microprocessors and Microsystems 79", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "31", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Usage of energy efficient sensor nodes on wearable device for fall and child abduction detection, International Journal of Engineering and Advanced Technology 9(1), pp. 6482-6485", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "32", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "3", "Details of Research Publication": "A secure model for hiding multimedia files within two cover images, International Journal of Recent Technology and Engineering 7(5), pp. 406-409", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "33", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Dispersal of traffic alert messages without missing the reliability for environmental protection, Ekoloji 28(107), pp. 571-581", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "34", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Performability of VBRCP in VANET using UGFT, International Journal of Innovative Technology and Exploring Engineering 8(3), pp. 42-46", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "35", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "3", "Details of Research Publication": "Game theoretical approach with Audit based Misbehavior Detection system, Proceedings of the International Conference on Inventive Communication and Computational Technologies Icicct 2018 pp. 1932-1935", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "36", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "2", "Details of Research Publication": "Emerging trends in computing: Reliability design for a VANET with WUGFT subject to time and cost constraints, International Journal of Engineering and Advanced Technology 8(2), pp. 195-200", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "37", "Publication Affiliation": "Others", "Academic Year": "2016", "Author Position": "2", "Details of Research Publication": "Reliability analysis of MANET with RCFP: Reliable cluster forming protocol, International Journal of Applied Engineering Research 11(1), pp. 440-447", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "38", "Publication Affiliation": "Others", "Academic Year": "2016", "Author Position": "1", "Details of Research Publication": "Assessing the reliability of adhoc network using UGF: Probabilistic approach, Asian Journal of Information Technology 15(3), pp. 563-566", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "39", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "2", "Details of Research Publication": "Reliable fuzzy reputation system to enhance the performance of disseminating the information in VANET, International Journal of Engineering and Technology 6(4), pp. 1856-1866", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "40", "Publication Affiliation": "Others", "Academic Year": "2012", "Author Position": "1", "Details of Research Publication": "Performance analysis of AODV, DSR, TORA and OLSR to achieve group communication in MANET, 4th International Conference on Advanced Computing Icoac 2012", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "41", "Publication Affiliation": "Others", "Academic Year": "2010", "Author Position": "1", "Details of Research Publication": "Maximizing resource sharing by minimizing response time in ad-hoc network, Proceedings of 2010 International Conference on Communication and Computational Intelligence Incocci 2010pp. 63-67", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" }
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
          title: "Consultancy",
          content: [
            { "S.No": "1", Affiliation: "Others", "Academic Year": "2020", "Client/Organization": "Sahrdaya College of Engineering and Technology", Project: "QuerySoft: A Personalized Query Software", Amount: "70,000" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Received Best faculty award for the academic year 2010 – 2011 in Angel College of Engineering and Technology, Tirupur",
            "Received Gold Coin for producing 100% results in Nandha Engineering College, Erode",
            "Received certificate of appreciation for producing 100% results in various subjects in Angel College of Engineering and Technology, Tirupur"
          ]
        }
      ]
    },

    "Dr. S. Padma": {
      name: "Dr. S. Padma",
      designation: "Assoc. Professor & Head",
      email: "drpadmas@mits.ac.in",
      officeAddress: "NPN204",
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
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "5", "Details of Research Publication": "A Synergistic Machine Learning – Metaheuristic Approach for Smart Grid Load Dispatch at ICSCSS 2025", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Feature extraction and feature selection in medical images, Editor(s): Bikesh Kumar Singh, G.R. Sinha, Intelligent Computing Techniques in Biomedical Imaging, Academic Press, 2025, Pages 83-97, ISBN 9780443159992, https://doi.org/10.1016/B978-0-443-15999-2.00008-6.", Indexing: "Scopus", Publication: "Book chapter", "Journal Quartile": "None" },
            { "S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "3", "Details of Research Publication": "Leveraging EfficientNetB3 in a Deep Learning Framework for High-Accuracy MRI Tumor Classification", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "5", "Details of Research Publication": "Brain Tumour Detection and Multi‐Classification Using Advanced Deep Learning Techniques, Vol 20 No 3 (2024), pp 2077-2088", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Classification of Mental Health and Emotion of Human from Text using Machine Learning Approaches", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Predictive Modeling of Academic Success using Extreme Learning Machine, ICCICCT 2024", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "A Review on Smart Agriculture System, ICCICCT 2024", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Network Intrusion Detection using Gradient Boosting Algorithm", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Effective Water Quality Prediction using Random Forest Algorithm", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2022", "Author Position": "2", "Details of Research Publication": "Regression based Machine Learning Model to Predict IPL Score after PowerPlay", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "Analyzing How E-Learning and Virtual Reality could be Integrated to Enhance Studies, ECS Transactions, 107 (1) 13163-13173 (2022)", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Eye Disease Detection from Retinal Fundus Image Using CNN In Bajaj, V., Sinha, G.R., & Chakraborty, C. (eds) Biomedical Signal Processing for Healthcare Applications (1st ed.). CRC Press. https://doi.org/10.1201/9781003147817", Indexing: "Scopus", Publication: "Book chapter", "Journal Quartile": "None" },
            { "S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Imparting OBE to the Younger Generation. Assessment Tools for Mapping Learning Outcomes With Learning Objectives, edited by G. R. Sinha, IGI Global, 2021, pp. 27-41. https://doi.org/10.4018/978-1-7998-4784-7.ch003", Indexing: "Scopus", Publication: "Book chapter", "Journal Quartile": "None" },
            { "S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Combined Fuzzy and Projection based Learning in META-Cognitive Neural Network for MAMMOGRAM classification, Journal of Computing and Intelligent Systems , Vol. 4, Issue 1, 93 – 98", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Breast Cancer Detection and Classification using Fuzzy and Projection Based Learning in Meta-cognitive Extreme Learning Machine, Compliance Engineering Journal, Vol. 11, Issue 1, 2020, 265 – 279", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "2", "Details of Research Publication": "Current Status of Research on Myanmar Currency Recognition at the First International Conference on Computational Science and Intelligence, 2020", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "17", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Improved Classification Performance in Imbalanced Dataset Using Projection Based Learning Algorithm with Radial Basis Function at 107th Indian Science Congress, 2020", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "18", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Design of Classifiers. In: Sinha, G. (eds) Advances in Biometrics. Springer, Cham. https://doi.org/10.1007/978-3-030-30436-2_6", Indexing: "Scopus", Publication: "Book chapter", "Journal Quartile": "None" },
            { "S.No": "19", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Solving Classification Problems Using Projection Based Learning Algorithm With Fuzzy Radial Basis Function Neural Network, International Journal of Computer Intelligence and Applications (IJCIA) Vol. 17, No. 03, 1850013-1-11, 2018", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Projection Based Learning with Radial Basis Function Neural Network for Improved Classification Performance, Shanlax International Journal of Arts, Science and Humanities, Special Issue 2, Oct 2017, Vol. 5, pp. 407–413", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Improved Radial Basis Functions using Projection Based Learning Algorithm for Classification Problems, Journal of Computing and Intelligent Systems, Volume 01, Issue 01, May-2017", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2015", "Author Position": "1", "Details of Research Publication": "A Survey on study of various machine learning methods for classification, International Journal of Database Theory and Application Vol 8. No 5 (2015)", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "23", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "1", "Details of Research Publication": "A Comparative Study on Different Meta-Cognitive Learning for Classification Problems, Journal of NanoScience and NanoTechnology - Spring Edition Vol 2, No 1 (2014)", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "24", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "1", "Details of Research Publication": "Classification of Escherichia Coli Bacteria using Meta-Cognitive Neural Network, International Journal of Computer Science & Engineering Technology (IJCSET) Vol. 5 No. 02 Feb 2014", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "25", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "1", "Details of Research Publication": "Classification of Real Value and Complex Value Data using Machine Learning Concepts, International Journal of Computer Science and Information Technologies, Vol. 5 (2), 2014", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "26", "Publication Affiliation": "Others", "Academic Year": "2013", "Author Position": "1", "Details of Research Publication": "Novel Methods for Classification using Machine Learning Concepts held at NCR Region, Delhi, on Dec 13th and 14th 2013", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "27", "Publication Affiliation": "Others", "Academic Year": "2010", "Author Position": "1", "Details of Research Publication": "Patterns of security for voice over IP networks in the International Conference on Computing, Communication and Technology", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "28", "Publication Affiliation": "Others", "Academic Year": "2010", "Author Position": "1", "Details of Research Publication": "Parallel Intrusion detection system with multiclassifier mechanism in the International conference on System On Chip", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "29", "Publication Affiliation": "Others", "Academic Year": "2010", "Author Position": "3", "Details of Research Publication": "A Framework for Adaptive Intelligent Character Recognition Algorithm using Neural Networks in the International conference on Recent Advancement in Electrical Science", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024-25", Type: "Funded Event", Role: "Coordinator", Title: "WIE Funding – Tech Queens", Amount: "17,000", Agency: "IEEE - WIE" },
            { "S.No": "2", Affiliation: "MITS", "Academic Year": "2023-24", Type: "Funded Event", Role: "Coordinator", Title: "Number Analytics and Data Science", Amount: "2,29,500", Agency: "Indian Academy of Sciences, Bengaluru" },
            { "S.No": "3", Affiliation: "MITS", "Academic Year": "2021-22", Type: "Funded Event", Role: "Coordinator", Title: "Modern Computational Techniques", Amount: "22,500", Agency: "Indian Academy of Sciences, Bengaluru" },
            { "S.No": "4", Affiliation: "MITS", "Academic Year": "2020-21", Type: "Funded Event", Role: "Coordinator", Title: "Scientific Computations", Amount: "22,500", Agency: "Indian Academy of Sciences, Bengaluru" },
            { "S.No": "5", Affiliation: "Others", "Academic Year": "2017-18", Type: "Funded Event", Role: "Coordinator", Title: "Numerical methods and Scientific Computing", Amount: "1,28,262", Agency: "Indian Academy of Sciences, Bengaluru" },
            { "S.No": "6", Affiliation: "Others", "Academic Year": "2016-17", Type: "Funded Event", Role: "Coordinator", Title: "Entering Life Science Research Arena through Bigdata", Amount: "50,000", Agency: "DBT" },
            { "S.No": "7", Affiliation: "Others", "Academic Year": "2016-17", Type: "Funded Project", Role: "Coordinator", Title: "Artificial Intelligence and Computational Biology", Amount: "1,85,200", Agency: "Indian Academy of Sciences, Bengaluru" },
            { "S.No": "8", Affiliation: "Others", "Academic Year": "2015-17", Type: "Funded Project", Role: "Coordinator", Title: "Computer Training for Rural School Students", Amount: "4,50,000", Agency: "KSR Educational and Charitable Trust" },
            { "S.No": "9", Affiliation: "Others", "Academic Year": "2019-20", Type: "Funded Project", Role: "Coordinator", Title: "Unnat Bharat Abhiyan", Amount: "50,000", Agency: "UBA, MHRD" }
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
            "Elected as CSTA India Chapter Leader (Curriculum and Professional Development) in 2024.",
            "Recognized with ICT Academy Awards (2018): Best Practices Award for Engaging Students towards Social Responsibility; Best Academic Partner Excellence Award for Skill Development Initiatives.",
            "Acted as Session Chair and Reviewer for several international conferences including ASCIS 2024, ISCAIE 2021, and ISIEA 2021.",
            "Reviewer and Editorial Board Member for reputed international journals such as Inderscience’s Journal of Business Intelligence and Data Mining and American Journal of Data Mining and Knowledge Discovery.",
            "Invited Teacher at the Indian Academy of Sciences Annual and Mid-Year Meetings (BHU, Varanasi 2018, IISc Bangalore 2019; SRM University AP 2022).",
            "Serving as Mentor for the Women in Machine Learning (WiML) Mentorship Program; Senior Member IEEE – Membership No: 98329128; IEEE WIE Student Advisor – MITS Student Branch.",
            "Life Member ISTE – Membership No : LM140721"
          ]
        }
      ]
    },

    "Dr. Sandhya. E": {
      name: "Dr. Sandhya. E",
      designation: "Asst. Professor",
      email: "drsandhyae@mits.ac.in",
      officeAddress: "NPN204",
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
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Enhancing security and efficiency in Mobile Ad Hoc Networks using a hybrid deep learning model for flooding attack detection, Scientific Reports, Volume 15, Issue 1, 2025", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "AI-Driven Threat Detection in Cloud Environments, Convergence of Cyber security and Cloud Computing, Pages 261-284, Publisher IGI Global Scientific Publishing, 2025", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Cutting-Edge approaches to data protection and encryption in cloud computing security, Convergence of Cybersecurity and Cloud Computing, Pages 261-284, IGI Global Scientific Publishing", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "A comprehensive review of computerized respiratory sound analysis and deep learning techniques for acoustic signal-based disease classification, AIP Conference Proceedings, Volume 3237, Issue 1, 2025, Publisher AIP Publishing LLC", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Visual data analysis and inference through dimensionality reduction techniques, Interactive and Dynamic Dashboard Pages 21-68, 2024, Publisher CRC Press", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "Performance Analysis of ML and DL Models: Impact of Linear and Non-Linear Optimizers on Model Efficiency, Advances in Nonlinear Variational Inequalities, Volume 28, Issue 1s, 2024", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Deep learning model for intrusion detection in SDN networks, 1st International Conference on Optimization Techniques for Learning (ICOTL), Pages 1-6, Publisher IEEE, 2023", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "Intrusion Detection using HRO with Ensemble Learning Models and Comparison, 1st International Conference on Optimization Techniques for Learning (ICOTL), Pages 1-6, Publisher IEEE, 2023", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Intrusion Detection System for IoT Networks, 1st International Conference on Optimization Techniques for Learning (ICOTL), Pages 1-6, Publisher IEEE, 2023", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Energy Management and Network Traffic Avoidance Using GAODM and E-AODV Protocols in Mobile Ad-Hoc Network, International Journal of Computer Network and Information Security, Volume 3, 78-89, 2023", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "6", "Details of Research Publication": "Selection of Features Using Adaptive Tunicate Swarm Algorithm with Optimized Deep Learning Model for Thyroid Disease Classification, Ingenierie des Systemes d'Information, Volume 28, Issue 2, Pages 299-308, 2023", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "A Hybrid Spider Monkey and Hierarchical Particle Swarm Optimization Approach for Intrusion Detection on Internet of Things, Sensors, MDPI, 2022", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Enhancing the Performance of an Intrusion Detection System Using Spider Monkey Optimization in IoT, International Journal of Intelligent Engineering and Systems, Volume 14, Issue 6, 2021", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2017-18", "Author Position": "3", "Details of Research Publication": "Health Monitoring System using Integration of Cloud and Data Mining Techniques, Helix International Journal (Thomson Reuters), Vol. 7(5), pg. no 2047-2052, 2017", Indexing: "WoS", Publication: "Article", "Journal Quartile": "None" }
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

    "Dr. R. Praveen Kumar": {
      name: "Dr. R. Praveen Kumar",
      designation: "Asst. Professor",
      email: "drpraveenkumarr@mits.ac.in",
      officeAddress: "NPN204",
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
    },

    "Mr. P. Udayakumar": {
      name: "Mr. P. Udayakumar",
      designation: "Asst. Professor",
      email: "udayakumarp@mits.ac.in",
      officeAddress: "NPN204",
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
            { "S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Connectome graph attention network (CGAT): A multimodal approach for enhanced classification of Alzheimer's disease", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Connectome-based schizophrenia prediction using structural connectivity - Deep Graph Neural Network (sc-DGNN)", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Integrating Deep Learning in Brain Connectome Mapping: Insights from a Systematic Review", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "" },
            { "S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "fMRI Data to Connectivity Matrices: Building Functional Connectomes for Deep Learning Models", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Diffusion MRI preprocessing for Deep Learning Analysis of Brain Structural Connectivity", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" }
          ]
        }
      ]
    },

    "Mr. B. S. H. Shayeez Ahamed": {
      name: "Mr. B. S. H. Shayeez Ahamed",
      designation: "Asst. Professor",
      email: "shayeezahamedbsh@mits.ac.in",
      officeAddress: "NPN204",
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
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Integrating DCCS-Net for High-Fidelity Watermarking and Tampering Detection in Brain Scan Images", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Enhanced Brain Tumor MRI Scan Reconstruction via the EI-Fusion-Net Model", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "Multi Objective Evaluator Model Development for Analyze the Customer Behavior", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2022", "Author Position": "1", "Details of Research Publication": "A Deep Learning-based Methodology for Predicting Monkey Pox from Skin Sores", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Acted as Reviewer for Two Day National Conference on Recent Advancements in Computing, Communication & Societal Applications (NASA’ 23).",
            "Acted as Reviewer for Two Day IEEE International Conference on Optimization Techniques for Learning (ICOTL’ 23).",
            "Best Paper Award for the title Evaluation Ensembles of Machine Learning Models for the Prediction of Smart Phone Addiction.",
            "Best Paper Award for the title Diabetes Prediction using Supervised and Unsupervised Learning.",
            "Recognized as NPTEL Discipline Star.",
            "Recognized as NPTEL Motivated Learner.",
            "Received Feedback Appreciation for the Academic Year 2023-24.",
            "Received Feedback Appreciation for the Academic Year 2024-25.",
            "Received Appreciation as mentor for the NPTEL Online Certification Course Privacy and Security in online social media.",
            "Received Appreciation as mentor for the NPTEL Online Certification Course Understanding Incubation and Entrepreneurship.",
            "Received Appreciation for acting as Co-Convener for ASHV – 2K25.",
            "Organized a MoU Exchange between Dept. of CSE – AI & ML and Xenovex Technologies on 8th November 2024.",
            "Organized a MoU Exchange between Dept. of CSE – AI & ML and Techno hub Software Solutions on 21st November 2024.",
            "Organized an Expert Talk on Software Life Cycle on 21st November 2024.",
            "Organized a 5 Days Skill Development Program on Python Programming from 25th November to 29th November 2024.",
            "Organized a MoU Exchange between Dept. of CSE – AI & ML and Menmozhi Technologies on 2nd December 2024.",
            "Organized a Hands-on session on GenAI Tools and App Development on 2nd December 2024.",
            "Organized a 3 Day Hands-on Workshop on Web and Mobile App Development: From Basics to Deployment from 27th January to 29th January 2025.",
            "Organized a Workshop on AI & ML Product Development Bootcamp: From Idea to Deployment.",
            "Organized a Faculty Development Program on Microsoft Azure AI Engineer Associate from 07th to 11th April 2025.",
            "Organized a National Level Technical Symposium AIMEX 2k25 on 23rd April 2025.",
            "Organized a Two-Day Career Guidance Programme Engineering Elevates and Enlightens on 9th and 10th September 2025."
          ]
        }
      ]
    },

    "Mrs. R. Usha": {
      name: "Mrs. R. Usha",
      designation: "Asst. Professor",
      email: "ushar@mits.ac.in",
      officeAddress: "NPN204",
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
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Deep Learning-Based Hybrid Segmentation and Decision-Support Model for Tomato Leaf Disease Classification and Treatment Guidance, 2026 IEEE International Conference on Emerging Computing and Intelligent Technologies (ICoECIT)", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "Enhanced Rainfall Prediction Using Conv1D and Temporal Fusion Transformers for Precision Forecasting, 2026 IEEE International Conference on Emerging Computing and Intelligent Technologies (ICoECIT)", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "Balancing Pesticides Production and Environmental Agricultural Farming, 2025 9th International Conference on Electronics, Communication and Aerospace Technology (ICECA)", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Deep Learning-Based Depression Detection: Insights from Twitter data through Hashtag Text Analysis, 2026 IEEE International Conference on Emerging Computing and Intelligent Technologies (ICoECIT)", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Early Detection of Student Depression Using Deep Learning Algorithms, 2025 Second International Conference on Networks and Soft Computing (ICNSoC)", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "2", "Details of Research Publication": "A Machine-Learning (ML)-Based Conventional Charge Management System Guiding Electric Cars (EVs) To Charging Stations, 22nd International Conference on New Frontiers in Communication, Automation, Management and Security (ICCAMS)", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Automated Detection of Tomato Leaf Diseases: A Comprehensive Review and Framework Development Using Machine Learning Techniques", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "FungiDetect-Ensemble: A Novel Model for the Comprehensive Detection of Diseases in Tomato Leaves", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "2", "Details of Research Publication": "Hybrid AI Framework for Detecting Deep-Fake Tweets on social media", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "2", "Details of Research Publication": "Integrating Data into Machine Learning Models for Better Bankruptcy Prediction", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Automated Early Detection of Oral Cancer using CNN based Multimodal Analysis", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "A Hybrid Transfer Learning Model for Predicting Chronic Kidney Disease Using DenseNet121 and InceptionV3", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Deep Learning Driven - Pest Classification and Sustainable Agriculture, 2025 International Conference on Electronics and Renewable Systems (ICEARS)", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "14", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Factors Influencing Customers' Inclination to buy Green Products: An Indian Perspective", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "" },
            { "S.No": "15", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Integrating the Bigdata and Deep Learning Analysis Human Movement to Improve the Sports, 2023 International Conference on New Frontiers in Communication, Automation Management and Security (ICCAMS)", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "16", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Development of CNN Model to Avoid the Food Spoiling Level in 2023 3rd International Conference on Advancement in Electronics & Communication Engineering (AECE)", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "17", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "A Deep Learning-based Methodology for Predicting Monkey Pox from Skin Sores, IEEE MysuruCon 2022", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2025-2026", "Application ID": "482761-001", "Title of the Patent": "IoT Based Robot for Library Management", Status: "Filed" },
            { "S.No": "2", Affiliation: "MITS", "Academic Year": "2025-2026", "Application ID": "473973-001", "Title of the Patent": "IoT -Enabled interactive Device for Emotion – Aware Personalized Learning Recommendations", Status: "Published" },
            { "S.No": "3", Affiliation: "MITS", "Academic Year": "2025-2026", "Application ID": "202541092300", "Title of the Patent": "DEEP LEARNING-DRIVEN DIAGNOSTIC TOOL FOR AUTOMATED DETECTION OF PULMONARY DISEASES FROM X-RAYS", Status: "Published" },
            { "S.No": "4", Affiliation: "MITS", "Academic Year": "2024-2025", "Application ID": "20254100293", "Title of the Patent": "Detection and Classification of Skin Cancer using Back Propagated Artificial Neural Networks", Status: "Published" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Best Paper Award for the title Deep Learning-Based Emotion Recognition System with Depression Detection Capability.",
            "Best Paper Award for the title Evaluating Ensemble Machine Learning Approaches for Accurate Flight Pricing Predictions.",
            "Recognized as NPTEL Discipline Star July - Dec 2025.",
            "Recognized as NPTEL Discipline Star July - Dec 2023."
          ]
        }
      ]
    },

    "Mr. Manoj Kumar K": {
      name: "Mr. Manoj Kumar K",
      designation: "Asst. Professor",
      email: "manojkumark@mits.ac.in",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/manoj.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Deep Learning", "Branch": "CSE", "College Name/University": "Anna University", "Year of Passing": "Pursuing"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "Sathyabama University, Chennai", "Year of Passing": "2015"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "CSE", "Branch": "CSE", "College Name/University": "Sree Vidyanikethan Engineering College, JNTU Anantapur", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Research Areas",
          content: "Cloud Computing & DevOps, Artificial Intelligence & Machine Learning, Software Engineering & Automation, Computer Networks & Security"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=56599626100"},
            {"Identifier": "Vidwan", "Link": ""},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.co.in/citations?user=FoxUuv4AAAAJ&hl=en&oi=sra"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "9"}
          ]
        }
      ]
    },

    "Mrs. N. Geethanjali": {
      name: "Mrs. N. Geethanjali",
      designation: "Asst. Professor",
      email: "geethanjalin@mits.ac.in",
      officeAddress: "NPN204",
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
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Metaheuristics and Hybrid Evolutionary Methods for Feature Selection, International Conference on Innovations in Bio-Inspired Computing and Applications, Conference paper First Online: 04 June 2025, pp 432–442", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
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
      officeAddress: "NPN204",
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
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "3", "Details of Research Publication": "Locating Patient Health Data Theft Using Gradient Boosting with Hybrid Microwave Transmission-Based Wearable Device, International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication (IConSCEPT), IEEE, DOI: 10.1109/IConSCEPT61884.2024.10627827", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "4", "Details of Research Publication": "Emerging Trends in Edge AI for Industry 4.0 and 5.0: Technologies, Applications, and Challenges, Advances in Hospitality, Tourism, and the Services Industry, IGI Global, Pages 211-228", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "4", "Details of Research Publication": "Accelerating Alzheimer's Research with Machine Learning Models for Improved Detection, 7th International Conference on Electronics, Communication and Aerospace Technology (ICECA), IEEE, DOI: 10.1109/ICECA58529.2023.10395855", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Awarded for top performing mentor for NPTEL course Understanding Incubation and Entrepreneurship during Jan-Apr 2025.",
            "Certificate of appreciation in recognition role as mentor for NPTEL course German-1 during Jul-Dec 2024."
          ]
        }
      ]
    },

    "Mr. Tharakeswara Raju B": {
      name: "Mr. Tharakeswara Raju B",
      designation: "Asst. Professor",
      email: "tharakeswararajub@mits.ac.in",
      officeAddress: "NPN204",
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
      email: "Subhasdas@mits.ac.in",
      officeAddress: "NPN204",
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
      officeAddress: "NPN204",
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

    "Mr. M. Esakkiraj": {
      name: "Mr. M. Esakkiraj",
      designation: "Asst. Professor",
      email: "",
      officeAddress: "NPN204",
      image: "https://mits.ac.in/public/uploads/faculty/7fb428929e53ed95946b70746e57d138.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "M.Tech.", "Specialization": "Information Technology", "Branch": "Information Technology", "College Name/University": "Manonmaniam Sundaranar University", "Year of Passing": "2017"},
            {"S.No": "2", "Course": "B.Tech.", "Specialization": "Information Technology", "Branch": "Information Technology", "College Name/University": "Manonmaniam Sundaranar University", "Year of Passing": "2016"}
          ]
        }
      ]
    }
};
