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
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "5", "Details of Research Publication": "A Synergistic Machine Learning – Metaheuristic Approach for Smart Grid Load Dispatch at ICSCSS 2025", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Feature extraction and feature selection in medical images, Editor(s): Bikesh Kumar Singh, G.R. Sinha, Intelligent Computing Techniques in Biomedical Imaging, Academic Press, 2025, Pages 83-97, ISBN 9780443159992", Indexing: "Scopus", Publication: "Book chapter", "Journal Quartile": "None" },
            { "S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "3", "Details of Research Publication": "Leveraging EfficientNetB3 in a Deep Learning Framework for High-Accuracy MRI Tumor Classification, CMC-Computers, Materials & Continua, DOI:10.32604/cmc.2024.053563", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "5", "Details of Research Publication": "Brain Tumour Detection and Multi-Classification Using Advanced Deep Learning Techniques, Vol 20 No 3(2024), pp 2077-2088", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Classification of Mental Health and Emotion of Human from Text using Machine Learning Approaches, 2023 6th International Conference on Information Systems and Computer Networks (ISCON), Mathura, India, 2023, pp. 1-7, IEEE Xplore", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Predictive Modeling of Academic Success using Extreme Learning Machine, at ICCICCT – 2024", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "A Review on Smart Agriculture System, at ICCICCT – 2024", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Network Intrusion Detection using Gradient Boosting Algorithm", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Effective Water Quality Prediction using Random Forest Algorithm", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2022", "Author Position": "2", "Details of Research Publication": "Regression based Machine Learning Model to Predict IPL Score after PowerPlay", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "Analyzing How E-Learning and Virtual Reality could be Integrated to Enhance Studies, ECS Transactions, 107 (1) 13163-13173 (2022), The Electrochemical Society", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Eye Disease Detection from Retinal Fundus Image Using CNN, Biomedical Signal Processing for Healthcare Applications, CRC Press", Indexing: "Scopus", Publication: "Book chapter", "Journal Quartile": "None" },
            { "S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Imparting OBE to the Younger Generation, Assessment Tools for Mapping Learning Outcomes With Learning Objectives, IGI Global, 2021", Indexing: "Scopus", Publication: "Book chapter", "Journal Quartile": "None" },
            { "S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Combined Fuzzy and Projection based Learning in META-Cognitive Neural Network for MAMMOGRAM classification, Journal of Computing and Intelligent Systems, Vol. 4, Issue 1, 93-98", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Breast Cancer Detection and Classification using Fuzzy and Projection Based Learning in Meta-cognitive Extreme Learning Machine, Compliance Engineering Journal, Vol. 11, Issue 1, 2020, 265-279", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "2", "Details of Research Publication": "Current Status of Research on Myanmar Currency Recognition at the First International Conference on Computational Science and Intelligence, 2020", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "17", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Improved Classification Performance in Imbalanced Dataset Using Projection Based Learning Algorithm with Radial Basis Function at 107th Indian Science Congress, 2020", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "18", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Design of Classifiers, Advances in Biometrics, Springer", Indexing: "Scopus", Publication: "Book chapter", "Journal Quartile": "None" },
            { "S.No": "19", "Publication Affiliation": "Others", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Solving Classification Problems Using Projection Based Learning Algorithm With Fuzzy Radial Basis Function Neural Network, International Journal of Computer Intelligence and Applications (IJCIA) Vol. 17, No. 03, 1850013-1-11,2018", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Projection Based Learning with Radial Basis Function Neural Network for Improved Classification Performance, Shanlax International Journal of Arts, Science and Humanities, Special Issue 2, Oct 2017, Vol. 5, pp. 407-413", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Improved Radial Basis Functions using Projection Based Learning Algorithm for Classification Problems, Journal of Computing and Intelligent Systems, Volume 01, Issue 01, May-2017", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2015", "Author Position": "1", "Details of Research Publication": "A Survey on study of various machine learning methods for classification, International Journal of Database Theory and Application Vol 8. No 5(2015)", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "23", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "1", "Details of Research Publication": "A Comparative Study on Different Meta-Cognitive Learning for Classification Problems, Journal of NanoScience and NanoTechnology - Spring Edition Vol 2, No 1 (2014)", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "24", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "1", "Details of Research Publication": "Classification of Escherichia Coli Bacteria using Meta-Cognitive Neural Network, International Journal of Computer Science & Engineering Technology (IJCSET) Vol. 5 No. 02 Feb 2014", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "25", "Publication Affiliation": "Others", "Academic Year": "2014", "Author Position": "1", "Details of Research Publication": "Classification of Real Value and Complex Value Data using Machine Learning Concepts, International Journal of Computer Science and Information Technologies, Vol. 5 (2), 2014", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "26", "Publication Affiliation": "Others", "Academic Year": "2013", "Author Position": "1", "Details of Research Publication": "Novel Methods for Classification using Machine Learning Concepts at NCR Region, Delhi, on Dec 13th and 14th 2013", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "27", "Publication Affiliation": "Others", "Academic Year": "2010", "Author Position": "1", "Details of Research Publication": "Patterns of security for voice over IP networks in the International Conference on Computing, Communication and Technology", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "28", "Publication Affiliation": "Others", "Academic Year": "2010", "Author Position": "1", "Details of Research Publication": "Parallel Intrusion detection system with multiclassifier mechanism in the International conference on System On Chip", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "29", "Publication Affiliation": "Others", "Academic Year": "2010", "Author Position": "3", "Details of Research Publication": "A Framework for Adaptive Intelligent Character Recognition Algorithm using Neural Networks, in the International conference on Recent Advancement in Electrical Science", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024-25", "Funded Project /Event": "Funded Event", Role: "Coordinator", "Title of the Project/Event": "WIE Funding – Tech Queens", "Amount in Rs. /-": "($200) 17,000", "Funding Agency": "IEEE - WIE" },
            { "S.No": "2", Affiliation: "MITS", "Academic Year": "2023-24", "Funded Project /Event": "Funded Event", Role: "Coordinator", "Title of the Project/Event": "Number Analytics and Data Science", "Amount in Rs. /-": "2,29,500", "Funding Agency": "Indian Academy of Sciences, Bengaluru" },
            { "S.No": "3", Affiliation: "MITS", "Academic Year": "2021-22", "Funded Project /Event": "Funded Event", Role: "Coordinator", "Title of the Project/Event": "Modern Computational Techniques", "Amount in Rs. /-": "22,500", "Funding Agency": "(Online) Indian Academy of Sciences, Bengaluru" },
            { "S.No": "4", Affiliation: "MITS", "Academic Year": "2020-21", "Funded Project /Event": "Funded Event", Role: "Coordinator", "Title of the Project/Event": "Scientific Computations", "Amount in Rs. /-": "22,500", "Funding Agency": "(Online) Indian Academy of Sciences, Bengaluru" },
            { "S.No": "5", Affiliation: "Others", "Academic Year": "2017-18", "Funded Project /Event": "Funded Event", Role: "Coordinator", "Title of the Project/Event": "Numerical methods and Scientific Computing", "Amount in Rs. /-": "1,28,262", "Funding Agency": "Indian Academy of Sciences, Bengaluru" },
            { "S.No": "6", Affiliation: "Others", "Academic Year": "2016-17", "Funded Project /Event": "Funded Event", Role: "Coordinator", "Title of the Project/Event": "Entering Life Science Research Arena through Bigdata", "Amount in Rs. /-": "50,000", "Funding Agency": "DBT (Department of Biotechnology)" },
            { "S.No": "7", Affiliation: "Others", "Academic Year": "2016-17", "Funded Project /Event": "Funded Event", Role: "Coordinator", "Title of the Project/Event": "Artificial Intelligence and Computational Biology", "Amount in Rs. /-": "1,85,200", "Funding Agency": "Indian Academy of Sciences, Bengaluru" },
            { "S.No": "8", Affiliation: "Others", "Academic Year": "2015-17", "Funded Project /Event": "Funded Project", Role: "Coordinator", "Title of the Project/Event": "Computer Training for Rural School Students", "Amount in Rs. /-": "4,50,000", "Funding Agency": "KSR Educational and Charitable Trust" },
            { "S.No": "9", Affiliation: "Others", "Academic Year": "2019-20", "Funded Project /Event": "Funded Project", Role: "Coordinator", "Title of the Project/Event": "Unnat Bharat Abhiyan", "Amount in Rs. /-": "50,000", "Funding Agency": "UBA, MHRD" }
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
            "Recognized with ICT Academy Awards (2018): Best Practices Award for Engaging Students towards Social Responsibility.",
            "Best Academic Partner Excellence Award for Skill Development Initiatives.",
            "Acted as Session Chair and Reviewer for several international conferences including ASCIS 2024, ISCAIE 2021, and ISIEA 2021.",
            "Reviewer and Editorial Board Member for reputed international journals such as Inderscience's Journal of Business Intelligence and Data Mining and American Journal of Data Mining and Knowledge Discovery.",
            "Invited Teacher at the Indian Academy of Sciences Annual and Mid-Year Meetings (BHU, Varanasi 2018, IISc Bangalore 2019; SRM University AP 2022).",
            "Serving as Mentor for the Women in Machine Learning (WiML) Mentorship Program",
            "Senior Member IEEE – Membership No: 98329128",
            "IEEE WIE Student Advisor – MITS Student Branch",
            "Life Member ISTE – Membership No : LM140721"
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
            { "S.No": "1", Course: "Ph.D.", Specialization: "Hydraulics", Branch: "Civil Engineering", "College Name/University": "Leonardo Da Vinci School of Engineering, University of Pisa, Pisa, Italy.", "Year of Passing": "2010" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Soil and Water Conservation Engineering", Branch: "Soil and Water Conservation Engineering", "College Name/University": "Indian Institute of Technology, Kharagpur, India", "Year of Passing": "2006" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "Agricultural Engineering", Branch: "Agricultural Engineering", "College Name/University": "Faculty of Agricultural Engineering, Bidhan Chandra Krishi Viswavidyalaya, West Bengal,India.", "Year of Passing": "2004" }
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
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/272776" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=mqCWzHsAAAAJ&hl=en" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "8" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2026", "Author Position": "2", "Details of Research Publication": "Machine learning for land use and land cover mapping in Google earth engine: A review of methods, applications and challenges", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2026", "Author Position": "3", "Details of Research Publication": "Sustainable Brick Production Using Ceramic Waste and Coconut Fibers: Performance Pre-diction Using Ma-chine Learning", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "" },
            { "S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2026", "Author Position": "3", "Details of Research Publication": "Optimization of Eco-Efficient Mix Designs Using Nano Enhanced Binders for Enhanced Mechanical and Durability Performance", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "A review of remote sensing and GIS applications in flood monitoring and management", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "3", "Details of Research Publication": "Evaluation of net-zero materials in mortar bricks with predictive modelling using random forest and gradient boosting techniques Q1", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "3", "Details of Research Publication": "Impact of biochar on strength, durability, and carbon sequestration in cement based materials.", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "3", "Details of Research Publication": "Mechanical properties and machine learning analysis of concrete incorporating waste glass as coarse aggregate", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Recycling glass waste into concrete aggregates: enhancing mechanical properties and sustainability", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Innovative approaches to sustainable construction: a detailed study of rice husk ash as an ecofriendly substitute in cement production", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Optimization and prediction of paver block properties with ceramic waste as fine aggregate using response surface methodology", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Mechanical proper-ties and machine learning analysis of concrete incorporating waste glass as coarse aggregate", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Mechanical and sustainability performance of concrete incorporated limestone powder, recycled ceramic aggregates, and coconut fibers", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Machine learning-based destructive and non-destructive testing of paver block using fly ash and polyvinyl chlo-ride into sustainable pedestrians", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2011-12", "Author Position": "2", "Details of Research Publication": "Stilling basin ero-sion due to vertical crossing jets", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2010-11", "Author Position": "2", "Details of Research Publication": "Analysis of scour characteristics in presence of aerated crossing jets", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "NA" },
            { "S.No": "16", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "2", "Details of Research Publication": "Analysis of flood-ing and drying con-ditions through trend analysis of amsre satellite soil moisture over the Himalayan Gandak River basin", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "17", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "Impact of temperature and precipitation lapse rate on hydrological model-ling over Himala-yan Gandak River Basin", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "18", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Recycling glass waste in mortar: a sustainable ap-proach to enhancing strength and density", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "19", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Evaluation of SCBA-replaced cement for carbon credits and reduc-tion in CO2 emissions", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "20", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Evaluating the use of recycled fine aggregates in 3D printing: a systematic review", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Entropy-weighted-multicriteria decisionmaking (E-MCDM) approach for erosion area prioritization case study of a Himala-yan River Basin", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "NA" },
            { "S.No": "22", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Correction to: Mechanical and sustainability perfor-mance of concrete incorporated lime-stone powder, recycled ceramic aggregates, and coconut fibers", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "23", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Spatiotemporal Intercomparison of WMO's Gauge Ad-justed Satellite Precipitation Product Over India", Indexing: "Scopus", Publication: "Erratum", "Journal Quartile": "Q1" },
            { "S.No": "24", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Investigating the potential of waste glass in paver block production using RSM", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "25", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "achine learning application to pre-dict the mechanical properties of glass fiber mortar", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "26", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Adaptive neuro-fuzzy inference system prediction model for the me-chanical behaviour of rice husk ash and periwinkle shell concrete blend for sustainable construction", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "27", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Experimental investigation of Bambara nut shell ash in the production of con-crete and mortar", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "28", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Prediction of cement mortar strength by replacement of hydrated lime using RSM and ANN", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q2" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024-25", "Application ID": "437599-001", "Title of the Patent": "ZIP LOCK INTERLOCKING BRICK", Status: "Granted" },
            { "S.No": "2", Affiliation: "MITS", "Academic Year": "2024-25", "Application ID": "428578-001", "Title of the Patent": "INTERLOCKED HEXAGONAL HOLLOW BLOCK", Status: "Granted" },
            { "S.No": "3", Affiliation: "MITS", "Academic Year": "2024-25", "Application ID": "428580-001", "Title of the Patent": "GRIP-TITE INTERLOCKING BRICKS", Status: "Granted" },
            { "S.No": "4", Affiliation: "MITS", "Academic Year": "2023-24", "Application ID": "427507-001", "Title of the Patent": "C-SHAPE INTERLOCKING PAVER BLOCK", Status: "Granted" },
            { "S.No": "5", Affiliation: "MITS", "Academic Year": "2023-24", "Application ID": "429097-001", "Title of the Patent": "H-SHAPED INTERLOCKING PAVER BLOCK", Status: "Granted" },
            { "S.No": "6", Affiliation: "MITS", "Academic Year": "2023-24", "Application ID": "427544-001", "Title of the Patent": "HEAD-FOOT INTERLOCKING PAVER BLOCK", Status: "Granted" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Reviewer in Scientific Reports, Nature: March 18, 2025 to March 18, 2025",
            "Reviewer in Water Management for Proceedings of ICE: April 18, 2022",
            "Guest Lecture on Applications of AI&ML in Civil Engineering: Sept. 19, 2024 to Sept. 19, 2024",
            "Expert - ASCE SR 2024 Outstanding Thesis Presentation: July 30, 2024 to July 30, 2024",
            "IAHR - International Scientific Committee (ISC).-9th International Symposium on Hydraulic Structures (ISHS 2022): April 23, 2021 to April 23, 2021"
          ]
        }
      ]
    },
    "Dr. Vijayakumar Natesan": {
      name: "Dr. Vijayakumar Natesan",
      designation: "Asst. Professor & Head",
      email: "vijayakumarn@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/fc9b84db32042ded85ace96100f6848f.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Structural Engineering", Branch: "Civil Engineering", "College Name/University": "Indian Institute of Technology, Hyderabad", "Year of Passing": "2020" },
            { "S.No": "2", Course: "M.E.", Specialization: "Structural Engineering", Branch: "Civil Engineering", "College Name/University": "Alagappa Chettiar College of Engineering & Technology, Karaikudi", "Year of Passing": "2013" },
            { "S.No": "3", Course: "B.E.", Specialization: "Civil Engineering", Branch: "Civil Engineering", "College Name/University": "Institute of Road & Transport Technology, Erode", "Year of Passing": "2011" }
          ]
        },
        {
          title: "Research Areas",
          content: "Structural steel and Cold-formed steel, Connections in steel structure, Composite structure, Pre-cast construction, and Construction Materials"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57209005001" },
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/280524" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=ie86Yn4AAAAJ&hl=en" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "6" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Numerical investigation of cold-formed steel sleeve connection for channel sections subjected to combined bending and shear", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2021", "Author Position": "1", "Details of Research Publication": "Effectiveness of Web Cleat Bolted Connections for Beam-to Column CFS Sections", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "2", "Details of Research Publication": "Effect of Staggered Bolted Connections on CFS Channel Sections", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Comparative Experimental Studies on the Web Cleat Bolted CFS Beam to Column Connection", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2020", "Author Position": "1", "Details of Research Publication": "Experimental Study on Ultimate Strength of Bolted L-Shaped Sleeve Joints between Cold-Formed Steel Channel Sections", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Structural performance on bolted sleeved connections between two CFS channel sections subjected to combined bending and shear", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Experimental study on beam-to-column clip angle bolted connection", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Performance of CFS Beam-to-Beam Bolted Connection Using Clip Angle and Flange Strip: Experimental Investigation", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Experimental investigation on clip angle bolted connection between two cold-formed steel channels", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2017", "Author Position": "1", "Details of Research Publication": "Rotational behavior of cold-formed steel beams connected through clip angles", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        },
        {
          title: "Consultancy & Testing",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024-25", "Name of the Consulting Firm": "AP PRI", "Title of the Project": "Quality assessment in various engineering works", "Amount in Rs. /-": "9,000" },
            { "S.No": "2", Affiliation: "MITS", "Academic Year": "2023-24", "Name of the Consulting Firm": "Ap RWS", "Title of the Project": "Quality assessment in various engineering works", "Amount in Rs. /-": "9,000" },
            { "S.No": "3", Affiliation: "MITS", "Academic Year": "2022-23", "Name of the Consulting Firm": "AP- R & B", "Title of the Project": "Quality assessment in various engineering works", "Amount in Rs. /-": "6,000" },
            { "S.No": "4", Affiliation: "MITS", "Academic Year": "2021-22", "Name of the Consulting Firm": "AP PRI", "Title of the Project": "Quality assessment in various engineering works", "Amount in Rs. /-": "8,000" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Reviewer of the Journal: Thin-Walled Structures, Journal of The Institution of Engineers (India): Series A (IEIA), and Arabian Journal of Geosciences",
            "Recognized as an NPTEL Discipline Star by Swayam NPTEL for July–December 2023",
            "Session Chair in the Indian Structural Steel Conference held on January 06th to 08th, 2022 Organized by Structural Steel Research Group, IIT Hyderabad"
          ]
        }
      ]
    },
    "Dr. Sudheer Kumar Yantrapalli": {
      name: "Dr. Sudheer Kumar Yantrapalli",
      designation: "Assoc. Professor",
      email: "sudheeryantrapallik@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/e8ce6974dbf830579b5ea7d0adcb2d70.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Geotechnical Engineering", Branch: "Civil Engineering", "College Name/University": "National Institute of Technology, Warangal", "Year of Passing": "2019" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Geotechnical Engineering", Branch: "Civil Engineering", "College Name/University": "National Institute of Technology, Warangal", "Year of Passing": "2013" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "Civil Engineering", Branch: "Civil Engineering", "College Name/University": "Koneru Lakshmiah College of Engineering (KLCE), Guntur", "Year of Passing": "2010" }
          ]
        },
        {
          title: "Research Areas",
          content: "Ground improvement Techniques, Geo - Environmental Engineering, Composite materials, sustainable construction materials."
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57205500699" },
            { Identifier: "Vidwan", Link: "https://mits.irins.org/profile/272691" },
            { Identifier: "Google scholar", Link: "https://scholar.google.co.in/citations?hl=en&user=CJqzh98AAAAJ&view_op=list_works&sortby=pubdate" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "2" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "Experimental Investigation and Optimization of Cellular Light Weight Concrete Using foam content and Prediction Using Response Surface Methodology", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "2", "Details of Research Publication": "Emerging Management Tools in Civil Engineering: Trends, Technologies, and Transformations", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "-" },
            { "S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "A study on de-contamination of dairy wastewater using natural coagulants", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Sudy on Influence of Brine Solution on swelling Behaviour of Expansive soil", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "Desiccation Induced Cracking Characteristics of Locally Available Soils in Warangal", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "2", "Details of Research Publication": "A Study on Influence of Organic Ligand on the Adsorption of Lead by Clayey Soil", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "A Study on Influence of Organic Ligand on the Adsorption of Lead by Clayey Soil", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "4", "Details of Research Publication": "Permanent deformation behaviour of black cotton soil treated with calcium carbide residue", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "A Study on the Influence of Heavy Metals on Crack Intensity Factor and Hydraulic Conductivity of Locally Available Soils", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2017-18", "Author Position": "2", "Details of Research Publication": "A Study on Influence of pH and Organic Chemical on the Retention Capacity of Red Earth", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2016 - 17", "Author Position": "1", "Details of Research Publication": "A Study on influence of organic ligands on migration of heavy metals through compacted clayey soil", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" },
            { "S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2016 - 17", "Author Position": "1", "Details of Research Publication": "A study on influence of real municipal solid waste leachate on properties of soils in Warangal, India", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q4" }
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024-2025", "Funded Project /Event": "AICTE – VAANI", Role: "Coordinator", "Title of the Project/Event": "The Role of AI in Smart City and Mobility in India", "Amount in Rs. /-": "2,00,000", "Funding Agency": "AICTE" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024-25", "Application ID": "431535-001", "Title of the Patent": "SOIL CORE SAMPLE COLLECTOR", Status: "Published" },
            { "S.No": "2", Affiliation: "MITS", "Academic Year": "2024-25", "Application ID": "437594-001", "Title of the Patent": "AUTOMATED AGGREGATES IMPACT TESTING MACHINE", Status: "Published" }
          ]
        },
        {
          title: "Consultancy",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024-25", "Name of the Consulting Firm": "NHAI – MMLP", "Title of the Project": "Geotechnical Investigation at NHAU – MMLP park", "Amount in Rs. /-": "10,00,000" },
            { "S.No": "2", Affiliation: "MITS", "Academic Year": "2024-25", "Name of the Consulting Firm": "AP PRI", "Title of the Project": "Quality assessment in various engineering works", "Amount in Rs. /-": "15,00,000" },
            { "S.No": "3", Affiliation: "MITS", "Academic Year": "2023-24", "Name of the Consulting Firm": "Ap RWS", "Title of the Project": "Geotechnical Investigation in proposed Government schools", "Amount in Rs. /-": "15,00,000" },
            { "S.No": "4", Affiliation: "MITS", "Academic Year": "2023-24", "Name of the Consulting Firm": "AP PRI", "Title of the Project": "Quality assessment in various engineering works", "Amount in Rs. /-": "10,00,000" },
            { "S.No": "5", Affiliation: "MITS", "Academic Year": "2022-23", "Name of the Consulting Firm": "Ap R & B", "Title of the Project": "Geotechnical Investigation in proposed Government offices", "Amount in Rs. /-": "10,00,000" },
            { "S.No": "6", Affiliation: "MITS", "Academic Year": "2022-23", "Name of the Consulting Firm": "AP PRI", "Title of the Project": "Quality assessment in various engineering works", "Amount in Rs. /-": "10,00,000" },
            { "S.No": "7", Affiliation: "MITS", "Academic Year": "2021-22", "Name of the Consulting Firm": "AP Irrigation", "Title of the Project": "Quality assessment in various engineering works  in Mudivedu Reservoir", "Amount in Rs. /-": "5,00,000" },
            { "S.No": "8", Affiliation: "MITS", "Academic Year": "2021-22", "Name of the Consulting Firm": "AP PRI", "Title of the Project": "Quality assessment in various engineering works", "Amount in Rs. /-": "10,00,000" },
            { "S.No": "9", Affiliation: "MITS", "Academic Year": "2020-21", "Name of the Consulting Firm": "HPCl", "Title of the Project": "Quality Monitoring and assessment for Fuel stations", "Amount in Rs. /-": "2,00,000" },
            { "S.No": "10", Affiliation: "MITS", "Academic Year": "2020-21", "Name of the Consulting Firm": "AP PRI", "Title of the Project": "Quality assessment in various engineering works  and Quality assessment in various engineering works", "Amount in Rs. /-": "10,00,000" }
          ]
        }
      ]
    },
    "Dr. Swapneel S. Jaiswal": {
      name: "Dr. Swapneel S. Jaiswal",
      designation: "Sr. Asst. Professor",
      email: "jaiswals@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/f8dd76e2193a70ab509f589ac9f34df6.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Urban and Rural Transportation", Branch: "Civil", "College Name/University": "Indian Institute of Technology, Roorkee", "Year of Passing": "2020" },
            { "S.No": "2", Course: "M.Plan.", Specialization: "Transportation Planning", Branch: "Civil", "College Name/University": "School of Planning & Architecture (SPA), New Delhi", "Year of Passing": "2009" },
            { "S.No": "3", Course: "B.E.", Specialization: "Civil Engineering", Branch: "Civil", "College Name/University": "Dr. Babasaheb Ambedkar Marathwara University, Aurangabad", "Year of Passing": "2005" }
          ]
        },
        {
          title: "Research Areas",
          content: "Urban and Rural Mobility, Transportation planning and Engineering, Accessibility, Persons with Disability and Elderlies"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=56201871600" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "1" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2014-15", "Author Position": "", "Details of Research Publication": "Universal Design for Indian Public Transportation Systems", Indexing: "SCI", Publication: "Conference Proceedings", "Journal Quartile": "Q3" }
          ]
        },
        {
          title: "Consultancy",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2023-24", "Name of the Consulting Firm": "VERCOS, Lucknow", "Title of the Project": "Geo-Tech survey for Anantapur Multi-Modal Logistic Project at Anantapur, Andhra Pradesh", "Amount in Rs. /-": "8,39,000" }
          ]
        }
      ]
    },
    "Dr. Priyam Nath Bhowmik": {
      name: "Dr. Priyam Nath Bhowmik",
      designation: "Asst. Professor",
      email: "bhowmikpn@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/273e0be56c4bcccaaaedae215d517144.jpeg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Transportation Engineering", Branch: "Civil Engineering", "College Name/University": "National Institute of Technology, Silchar", "Year of Passing": "2022" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Transportation Engineering", Branch: "Civil Engineering", "College Name/University": "National Institute of Technology, Silchar", "Year of Passing": "2017" },
            { "S.No": "3", Course: "B.E.", Specialization: "Civil Engineering", Branch: "Civil Engineering", "College Name/University": "Annamalai University, Tamil Nadu", "Year of Passing": "2013" }
          ]
        },
        {
          title: "Research Areas",
          content: "Pavement Materials; ML Modelling in Pavement; Reliability Analysis of Pavement; Traffic Flow Modelling; AI and ML in Transportation Engineering; Nanomaterials and applications in Pavement."
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57209850292" },
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/287985" },
            { Identifier: "Google scholar", Link: "https://scholar.google.co.in/citations?user=PHlqJ6oAAAAJ&hl=en&oi=ao" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "4" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Reliability-Based Pavement Design in Hot Climates: A Probabilistic Framework Using Environmental Damage Index", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Multimodal AI framework for forecasting tree cover loss and carbon emissions in India: integrated time-series modeling, spatial volatility mapping, and explainable causal analysis", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Eco-Modified asphalt binders: enhancing pavement longevity with Delonix seed extract and optimized crumb rubber granulometry", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "Synergistic use of recycled aggregates and waste glass powder for sustainable concrete: mechanical properties, durability performance, and microstructural insights", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "A Scalable Machine Learning Framework for Hydrological Water Quality Monitoring Using Physicochemical and Microbial Parameters", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "AI-Driven Optimization of Nano-modified Bitumen: CO2 reduction Efficiency Through Machine Learning and Optimization Framework", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Addressing uncertainty in pavement performance prediction: a quasi-Monte Carlo simulation-based reliability approach", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "A hybrid machine learning framework for predicting moisture-induced pavement failure: integrating sensitivity analysis and data augmentation", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "A study on de-contamination of dairy wastewater using natural coagulants", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "Enhancing Concrete Sustainability: Synergistic Effects of Individual and Dual Treatments on Recycled Coarse Aggregate from Construction and Demolition Waste", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Remarkable Reduction of Carbon Dioxide Emission from Crumb Rubber Modified Bitumen by Introducing Hydroxyapatite Encapsulated Magnesium Ferrite (HAP/MgFe2O4) Nanocomposite in Varying Proportions", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Optimizing Agricultural Waste By-Products: A Machine Learning Approach for Sustainable Construction Practices", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Optimizing concrete mix proportions with zeolite, GGBS, and CDW: a data-driven approach integrating experimental analysis and machine learning models", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "14", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Study on Influence of Brine Solution on swelling Behaviour of Expansive soil", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Layered Double Hydroxide for Carbon dioxide mitigation from Bitumen and formation of Carbonic acid: A Step toward Achieving Greener Pavements", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Iron-polyphenol complex nanoparticles for removal of greenhouse gas emission from bitumen and formation of paraffins", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2025-26", "Application ID": "466382-001 Indian Design Patent", "Title of the Patent": "Drone-based agricultural health mapping system using GIS and Remote Sensing.", Status: "FER generated on 20/11/2025" },
            { "S.No": "2", Affiliation: "MITS", "Academic Year": "2024-25", "Application ID": "437594-001 Indian Design Patent", "Title of the Patent": "Patent    Automated aggregates impact Testing machine", Status: "Granted" },
            { "S.No": "3", Affiliation: "MITS", "Academic Year": "2024-25", "Application ID": "431535-001 Indian Design Patent", "Title of the Patent": "Soil core sample collector", Status: "Granted" },
            { "S.No": "4", Affiliation: "MITS", "Academic Year": "2023-24", "Application ID": "398428-001 Indian Design Patent", "Title of the Patent": "Digital concrete mixing device", Status: "Granted" },
            { "S.No": "5", Affiliation: "MITS", "Academic Year": "2023-24", "Application ID": "202321057245 Indian Utility Patent", "Title of the Patent": "Develop Railway Sleeper using Recycled Plastic", Status: "Published" },
            { "S.No": "6", Affiliation: "MITS", "Academic Year": "2023-24", "Application ID": "202341076651 Indian Utility Patent", "Title of the Patent": "Evaluation of High-Volume Fly Ash Concrete for Rigid Pavement Overlays", Status: "Published" },
            { "S.No": "7", Affiliation: "MITS", "Academic Year": "2023-24", "Application ID": "202441001209 Indian Utility Patent", "Title of the Patent": "Hybrid Power Generation by using Road Speed Breakers", Status: "Published" },
            { "S.No": "8", Affiliation: "Others", "Academic Year": "2023-24", "Application ID": "DE 20 2022 105 413 U1 German Utility Patent", "Title of the Patent": "System to reduce carbon dioxide emissions from crumb rubber modified bitumen by hydroxyapatite encapsulated magnesium ferrite nanocomposite", Status: "Granted" }
          ]
        },
        {
          title: "Consultancy",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024-25", "Name of the Consulting Firm": "PLR Constructions", "Title of the Project": "Quality testing of Aggregates", "Amount in Rs. /-": "1,00,000" },
            { "S.No": "2", Affiliation: "MITS", "Academic Year": "2023-24", "Name of the Consulting Firm": "PLR Constructions and R&B", "Title of the Project": "Quality testing of Aggregates, Marshall Mix Design, Marshall Test", "Amount in Rs. /-": "2,00,000" },
            { "S.No": "3", Affiliation: "MITS", "Academic Year": "2022-23", "Name of the Consulting Firm": "PLR Constructions", "Title of the Project": "Quality testing of aggregates", "Amount in Rs. /-": "1,00,000" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Delivered a seminar talk (online) titled \"Neuro-Responsive Traffic Systems: Integrating Cognitive Modeling into Smart Mobility Planning\" focusing on cognitive science integration in smart traffic systems at Haldia Institute of Technology, West Bengal (24th Apr 2025) under the Distinguished Lecture Series in Advanced Transportation Research.",
            "Distinguished Speaker – Online Seminar: Delivered an expert talk on the topic \"Beyond Access: Reimagining Mobility through the Lens of Social Equity and Everyday Lives\" highlighting on inclusive urban mobility and transport equity as part of the HCN Global Webinar Series hosted by Thammasat University at the Episode 2 of Transport Equity in Action: Serving the Needs of the Vulnerable and Marginalized, Health Cities Network (HCN), Thailand (16th June 2025).",
            "Delivered an Expert Talk on \"Designing Climate-Resilient Pavements: Integrating Environmental Damage Index with Reliability\" in the National Seminar on \"Recent Geological and Geotechnical Understanding in Civil Engineering\" organized by the Department of Civil Engineering, Haldia Institute of Technology, West Bengal, held in Hybrid Mode from 8th to 12th September 2025.",
            "Editorial Board Member – International Journal of Environment and Waste Management (IJEWM)",
            "Editorial Board Member – International Journal of Environmental Engineering (IJEE)",
            "Editorial Board Member – Journal of Advances in Civil Engineering Researches (JACER)",
            "Associate Editor- International Journal of Transportation Engineering and Technology (IJTES)"
          ]
        }
      ]
    },
    "Dr. T. Venkatesh Varma": {
      name: "Dr. T. Venkatesh Varma",
      designation: "Asst. Professor",
      email: "venkateshvaramt@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/varma.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Postdoctoral Fellow", Specialization: "Mechanical Engineering", Branch: "Mechanical Engineering", "College Name/University": "Technion - Israel Istitute of Technology, Haifa, Israel", "Year of Passing": "June 2023 - Feb 2026" },
            { "S.No": "2", Course: "Ph.D.", Specialization: "Structural Engineering", Branch: "Civil Engineering", "College Name/University": "Indian Institute of Technology Indore", "Year of Passing": "2023" },
            { "S.No": "3", Course: "M.Tech.", Specialization: "Structural Engineering", Branch: "Civil Engineering", "College Name/University": "Indian Institute of Technology Bhubaneswar", "Year of Passing": "2019" },
            { "S.No": "4", Course: "B.Tech.", Specialization: "Civil Engineering", Branch: "Civil Engineering", "College Name/University": "College of Engineering and Technology, Bhubaneswar", "Year of Passing": "2015" }
          ]
        },
        {
          title: "Research Areas",
          content: "Computational mechanics, Mechanical metamaterials, Fracture and failure mechanics, Evolutionary Optimisation"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57217862023" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=AxLd5RcAAAAJ&hl=en" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "4" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2025-26", "Author Position": "5", "Details of Research Publication": "Distinct exceptional points in Hermitian Phononic Laminates", Indexing: "SCI", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Redirecting Crack with Learning-based Approach for Structural Durability", Indexing: "SCI", Publication: "Book Chapter", "Journal Quartile": "" },
            { "S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Computational Analysis of Truss Optimization Methods", Indexing: "SCI", Publication: "Book Chapter", "Journal Quartile": "" },
            { "S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Effect of nonlocality on the dispersion relations of mechanical metamaterials", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Third-order exceptional points and frozen modes in planar elastic laminates", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Effect of Crystal Orientation and Crystallographic Anisotropy on Shear Band Formation During Ductile Fracture in Fe Single Crystals", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": " A numerical study to assess the role of pre-stressed inclusions on enhancing fracture toughness and strength of periodic composites", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "The Influence of Clamping, Structure Geometry, and Material on Seismic Metamaterial Performance", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Designing polymer metamaterial for protective armor: a coarse-grained formulation", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Buckling Restrained Sizing and Shape Optimization of Truss Structures", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Visiting scholar to Imperial College London, London (UK) during the doctoral studies (2022)",
            "Students' representative in the DPG (Discipline of Post-graduate) committee at IIT Indore (2022)",
            "Received CET merit scholarship based on academic merit performance during undergraduate level (2011-2015)"
          ]
        }
      ]
    },
    "Dr. Nakkeeran G": {
      name: "Dr. Nakkeeran G",
      designation: "Asst. Professor",
      email: "nakkeerang@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/Dr. Nakkeeran G.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Construction Engineering and Management", Branch: "Civil Engineering", "College Name/University": "SRM Institute of Science and Technology", "Year of Passing": "2024" },
            { "S.No": "2", Course: "M.E.", Specialization: "Quality Engineering and Management", Branch: "Civil Engineering", "College Name/University": "College of Engineering, Anna University", "Year of Passing": "2018" },
            { "S.No": "3", Course: "B.E.", Specialization: "Civil Engineering", Branch: "Civil Engineering", "College Name/University": "GKM College Of Engineering and Technology", "Year of Passing": "2015" }
          ]
        },
        {
          title: "Research Areas",
          content: "Product development, Carbon sequestration, Carbon Capture, 3D concretes, characterization studies, Building Physics, Optimization and prediction techniques, Machine Learning, Building Energy Analysis, Building Materials"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57392076900" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?hl=en&user=nXl3l3AAAAAJ&view_op=list_works&sortby=pubdate" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "13" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Evaluation of net-zero materials in mortar bricks with predictive modelling using random forest and gradient boosting techniques", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Impact of biochar on strength, durability, and carbon sequestration in cement based materials", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Mechanical properties and machine learning analysis of concrete incorporating waste glass as coarse aggregate.", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Mechanical and thermal performance of bio-brick masonry with hydrated lime mortar at high temperature", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Adaptive neuro-fuzzy inference system optimization of natural rubber latex modified concrete's mechanical Properties.", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "ANFIS modelling of the strength properties of natural rubber latex modified concrete.", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Artificial neural network modeling to predict compressive strength and static modulus for self-compacting concrete using different percentage of recycled concrete aggregate", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Experimental and ANN Analysis of Cold-Formed Steel Build-Up Columns with and without Intermediate Web Stiffeners under Axial Compression.", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Mechanical and sustainability performance of concrete incorporated limestone powder, recycled ceramic aggregates, and coconut fibers.", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "3", "Details of Research Publication": "Exploring the Application of Lean Tools for Sustainable Construction: A Strategy Based on Analytic Hierarchy Process Model.", Indexing: "Scopus", Publication: "Book Chapter", "Journal Quartile": "None" },
            { "S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Machine learning-based destructive and non-destructive testing of paver block using fly ash and polyvinyl chloride into sustainable pedestrians.", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Optimization of waste plastic fiber concrete with recycled coarse aggregate using RSM and ANN.", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "2", "Details of Research Publication": "Evaluation of SCBA-replaced cement for carbon credits and reduction in CO2 emissions", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "14", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Thermal distribution of paver block with machine learning optimized design with alternative eco-friendly materials.", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "15", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Enhancing the mechanical properties' performances coconut fiber and CDW composite in paver block: multiple AI techniques with a Performance analysis", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "16", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Evaluating the use of recycled fine aggregates in 3D printing: a systematic review.", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "17", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Innovative approaches to sustainable construction: a detailed study of rice husk ash as an eco-friendly substitute in cement production.", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "18", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Recycling glass waste in mortar: a sustainable approach to enhancing strength and density.", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "19", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Optimization and prediction of paver block properties with ceramic waste as fine aggregate using response surface methodology.", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "20", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Recycling glass waste into concrete aggregates: enhancing mechanical properties and sustainability", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "21", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Mechanical properties optimization and cost analysis of agricultural waste as an alternative in brick production.", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "22", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "Investigating the potential of waste glass in paver block production using RSM", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "23", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "3", "Details of Research Publication": "Soft computing techniques for predicting the compressive strength properties of fly ash geopolymer concrete using regression-based machine learning approaches.", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "None" },
            { "S.No": "24", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "5", "Details of Research Publication": "Optimization of cassava peel ash concrete using central composite design method", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "25", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Modeling the influence of bacteria concentration on the mechanical properties of self-healing concrete (SHC) for sustainable bio-concrete structures.", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "26", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "7", "Details of Research Publication": "Prediction of steel plate-based damper for improving the behavior of concentrically braced frames based on RSM and ML approaches for sustainable structures", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "27", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Machine learning optimization of bio-sandcrete brick modelling using response surface methodology", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "28", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "4", "Details of Research Publication": "Review on electronic waste used as construction materials-a scientometric analysis", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "29", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Soft Computing Techniques for Predicting the Properties of Raw Rice Husk Concrete Bricks Using Regression-Based Machine Learning Approaches", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "30", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "4", "Details of Research Publication": "Numerical Analysis and Parametric Study on Multiple Degrees-of-Freedom Frames", Indexing: "ESCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "31", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "7", "Details of Research Publication": "Machine learning optimization and prediction of waste glass used as partial replacement of coarse aggregate in concrete.", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "32", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Comparative Study on Net-zero Masonry Walls Made of Clay and Fly Ash Bricks and Grouts/Mortars/Stuccos with The Effect of Super Fine Fly Ash Blended Cement – Low Carbon Cement", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "33", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Predicting an Energy Use Intensity and Cost of Residential Energy Efficient Buildings Using Various Parameters: ANN Analysis", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "34", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Synergistic effect of Alliance Contract and Lean Methodology on project performance measures in the construction industry: SEM Analysis.", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "35", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Machine learning application to predict the Mechanical properties of Glass Fiber mortar.", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "36", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Experimental Investigation And Optimization Of Lightweight Bricks Developed With Vermiculite.", Indexing: "SCI", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "37", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Developing lightweight concrete bricks by replacing fine aggregate with vermiculite: a regression analysis prediction approach", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "38", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Prediction of cement mortar strength by replacement of hydrated lime using RSM and ANN", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "39", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "A Scientometric Analysis Review on Agricultural Wastes Used as Building Materials", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "40", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "2", "Details of Research Publication": "Evaluation and optimization of lean waste in construction industries", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q3" },
            { "S.No": "41", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "1", "Details of Research Publication": "Optimization and Performance Analysis of Residential Building for Sustainable Energy Design Through BIM", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "42", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "3", "Details of Research Publication": "Evaluation of Failure Mode Analysis and Strength Behavior of Fly Ash Brick Masonry Prisms", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "Q3" },
            { "S.No": "43", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Scientometric Analysis of Building Energy Analysis in the Construction During 2005–2022", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "Q3" },
            { "S.No": "44", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "An Ergonomic Risk Evaluation of the Construction Industry Based on Specific Factors", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "Q3" },
            { "S.No": "45", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Prediction Of Mechanical Properties of the Cement Brick with Bio-Aggregate.", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "Q3" },
            { "S.No": "46", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "1", "Details of Research Publication": "Identification Of the Lean Tools Used in The Tamil Nadu Construction Industry.", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "Q3" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "Others", "Academic Year": "2023-24", "Application ID": "202441052543 A", "Title of the Patent": "Brick Composition and A Process for Its Preparation", Status: "Published & Under Examination" },
            { "S.No": "2", Affiliation: "Others", "Academic Year": "2021-22", "Application ID": "202241057183 A", "Title of the Patent": "Machine Learning Techniques Integrated with Concrete for Analyzing and Predicting the Properties", Status: "Published" },
            { "S.No": "3", Affiliation: "Others", "Academic Year": "2021-22", "Application ID": "202241070564 A", "Title of the Patent": "Development of Bio Bricks Using Agricultural Waste (Raw Groundnut Shell)", Status: "Published" },
            { "S.No": "4", Affiliation: "Others", "Academic Year": "2022-23", "Application ID": "202341000247 A", "Title of the Patent": "Usage of Waste Printed Circuit Board (WPCB) As Fiber in Paver Block", Status: "Published" },
            { "S.No": "5", Affiliation: "MITS", "Academic Year": "2024-25", "Application ID": "437599-001 Design Patent", "Title of the Patent": "ZIP LOCK INTERLOCKING BRICK", Status: "Granted" },
            { "S.No": "6", Affiliation: "MITS", "Academic Year": "2024-25", "Application ID": "428578-001 Design Patent", "Title of the Patent": "INTERLOCKED HEXAGONAL HOLLOW BLOCK", Status: "Granted" },
            { "S.No": "7", Affiliation: "MITS", "Academic Year": "2024-25", "Application ID": "428580-001 Design Patent", "Title of the Patent": "GRIP-TITE INTERLOCKING BRICKS", Status: "Granted" },
            { "S.No": "8", Affiliation: "MITS", "Academic Year": "2023-24", "Application ID": "427507-001 Design Patent", "Title of the Patent": "C-SHAPE INTERLOCKING PAVER BLOCK", Status: "Granted" },
            { "S.No": "9", Affiliation: "MITS", "Academic Year": "2023-24", "Application ID": "429097-001 Design Patent", "Title of the Patent": "H-SHAPED INTERLOCKING PAVER BLOCK", Status: "Granted" },
            { "S.No": "10", Affiliation: "MITS", "Academic Year": "2023-24", "Application ID": "427544-001 Design Patent", "Title of the Patent": "HEAD-FOOT INTERLOCKING PAVER BLOCK", Status: "Granted" },
            { "S.No": "11", Affiliation: "Others", "Academic Year": "2021-22", "Application ID": "379138-001 Design Patent", "Title of the Patent": "MULTIPURPOSE CONCRETE BLOCK", Status: "Granted" },
            { "S.No": "12", Affiliation: "Others", "Academic Year": "2021-22", "Application ID": "378580-001 Design Patent", "Title of the Patent": "HEXAGONAL HOLLOW BRICKS", Status: "Granted" }
          ]
        },
        {
          title: "Consultancy",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024-25", "Name of the Consulting Firm": "Irrigation Department", "Title of the Project": "Mix Design and Concrete Testing", "Amount in Rs. /-": "50,000" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Mentor and Director - GEIA ENTERPRISES PRIVATE LIMITED,AP,India",
            "Mentor and Director - EZZO MANUFACTURER PRIVATE LIMITED,AP,India",
            "Mentor and Director - GUIDEMENEXT PRIVATE LIMITED,AP,India",
            "Editor Team in Scientific Report (SCIE-3.9)-Q1 Springer Nature Journal",
            "Special Issue Editor - Frontiers in Built Environment – SPECIAL ISSUE \"Advancements in Sustainable Urban Development: Integrating Technology and Design\""
          ]
        }
      ]
    },
    "Dr. Nunna Tagore Sai Priya": {
      name: "Dr. Nunna Tagore Sai Priya",
      designation: "Asst. Professor",
      email: "tagoresaiprim@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/nunnapriya.png",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Community and Regional Planning", Branch: "Infrastructure Design and Management", "College Name/University": "IIT Kharagpur", "Year of Passing": "2024" },
            { "S.No": "2", Course: "MPlan", Specialization: "Urban Planning", Branch: "Architecture and Planning", "College Name/University": "NIT Calicut", "Year of Passing": "2017" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "Civil Engineering", Branch: "Civil Engineering", "College Name/University": "Bapatla Engineering College, Acharya Nagarjuna University", "Year of Passing": "2015" }
          ]
        },
        {
          title: "Research Areas",
          content: "Land Use Dynamics, Spatial Planning, Sustainable Built-environment"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=57209978292" },
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/623119/NjIzMTE5" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?user=hOAk1-kAAAAJ&hl=en" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "2" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "3", "Details of Research Publication": "A Scalable Machine Learning Framework for Hydrological Water Quality Monitoring Using Physicochemical and Microbial Parameters", Indexing: "SCIE, SCOPUS", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Urban Growth Patterns and Spatial Sustainability in Coastal Cities: The Case of Visakhapatnam in India", Indexing: "SCOPUS", Publication: "Book Chapter", "Journal Quartile": "" },
            { "S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2022", "Author Position": "1", "Details of Research Publication": "Understanding the impact of tourism on spatial growth for sustainable development of tourist destinations through the measure of land use efficiency", Indexing: "ESCI, SCOPUS", Publication: "Article", "Journal Quartile": "Q2" },
            { "S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2019", "Author Position": "1", "Details of Research Publication": "Impact of tourism on spatial growth of the destination", Indexing: "SCOPUS", Publication: "Conference Proceedings", "Journal Quartile": "" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Associate member of the Indian Institute of Town Planners (ITPI) since 2021.",
            "Scientist member in the Global Land Programme since 2024",
            "Received Institute Travel grants to present research work at two international conferences in 2019, 2022",
            "Received Student Travel grant at AGU Fall meeting 2022, held in Chicago",
            "Received MHRD Fellowship during M.Plan (2015 – 2017) and Ph.D (2017 – 2023)",
            "Qualified in GATE in 2015 with AIR 6262"
          ]
        }
      ]
    },
    "Dr. Imran Kuttagola": {
      name: "Dr. Imran Kuttagola",
      designation: "Asst. Professor",
      email: "imrank@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/imran-Photoroom(1).png",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Structural Engineering", Branch: "Civil Engineering", "College Name/University": "National Institute of Technology, Karnataka", "Year of Passing": "2025" },
            { "S.No": "2", Course: "M.Tech", Specialization: "Structural Engineering", Branch: "Civil Engineering", "College Name/University": "National Institute of Technology, Karnataka", "Year of Passing": "2020" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "Civil Engineering", Branch: "Civil Engineering", "College Name/University": "MB University", "Year of Passing": "2013" }
          ]
        },
        {
          title: "Research Areas",
          content: "Sustainable Geopolymer Concrete, Lightweight Concrete, Fracture and Fatigue Investigation, Concrete 3D printing"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=58094301400" },
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/656148" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=EqoYvewAAAAJ" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "1" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Application of Taguchi's optimization techniques for enhancing the fracture characteristics and brittleness of self-compacting alkali-activated concrete. Theoretical and Applied Fracture Mechanics, 138, 104931.", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2025", "Author Position": "1", "Details of Research Publication": "Development and performance evaluation of self-compacting lightweight alkali-activated concrete incorporating hydroton clay balls. Structures, 71, 108124.", Indexing: "SCIE", Publication: "Article", "Journal Quartile": "Q1" },
            { "S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "5", "Details of Research Publication": "Experimental study on shear reinforced and shear deficient RC beams subjected to preloading and wrapping with CFRP sheets. Materials Today: Proceedings", Indexing: "SCOPUS", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "1", "Details of Research Publication": "Numerical study on the behavior of RC beams by using GFRP bars as an alternate to steel bars. Materials Today: Proceedings 88, 66-70.", Indexing: "SCOPUS", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "3", "Details of Research Publication": "Numerical Study on Static and Fatigue Behavior of Alkali-Activated Fly Ash Concrete Modelled using Concrete Damage Plasticity (CDP) Model. IOP Conference Series: Earth and Environmental Science 1387 (1), 012014", Indexing: "SCOPUS", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2024", "Author Position": "4", "Details of Research Publication": "Application of fractal analysis to characterise the fracture and mechanical properties of concrete. IOP Conference Series: Earth and Environmental Science 1387 (1), 012015", Indexing: "SCOPUS", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "Study on the effectiveness of prefabricated cage system reinforcement in columns. IOP Conference Series: Earth and Environmental Science 1149 (1), 012010", Indexing: "SCOPUS", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "3", "Details of Research Publication": "Numerical investigation of the hybrid reinforced concrete beam using GFRP bars. IOP Conference Series: Earth and Environmental Science 1149 (1), 012011", Indexing: "SCOPUS", Publication: "Conference Proceedings", "Journal Quartile": "" },
            { "S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2023", "Author Position": "2", "Details of Research Publication": "Experimental Studies on the Mechanical and Durability Properties of Mortar Containing Waste Glass Powder as Partial Replacement of Cement. International Conference on Sustainable Infrastructure: Innovation, Opportunities and Challenges. 709-721", Indexing: "SCOPUS", Publication: "Book Chapter", "Journal Quartile": "" }
          ]
        }
      ]
    },
    "Mrs. Kandukuri Anitha": {
      name: "Mrs. Kandukuri Anitha",
      designation: "Asst. Professor",
      email: "anithak@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/Mrs Anitha K.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Structural Engineering", Branch: "Civil Engineering", "College Name/University": "Mohan Babu University", "Year of Passing": "Pursuing" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Structural Engineering", Branch: "Civil Engineering", "College Name/University": "Annamacharya Institute of Technology and Sciences, JNTU, Anantapur", "Year of Passing": "2015" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "Civil Engineering", Branch: "Civil Engineering", "College Name/University": "AVR & SVR Institute Of Technology& Sciences, JNTU, Anantapur", "Year of Passing": "2013" }
          ]
        },
        {
          title: "Research Areas",
          content: "Sustainable development of self compacting concrete through GGBS and STP water utilization"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in//profile/272789" },
            { Identifier: "Google scholar", Link: "https://scholar.google.co.in/citations?user=IpMFWMQAAAAJ" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-2025", "Author Position": "4", "Details of Research Publication": "Study on Influence of Brine Solution on swelling Behaviour of Expansive soil", Indexing: "Scopus", Publication: "Conference Proceedings", "Journal Quartile": "" }
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024-2025", "Funded Project /Event": "Workshop", Role: "Co-Coordinator", "Title of the Project/Event": "The Role of AI in Mobility and Smart Cities (TRAMS 2024)", "Amount in Rs. /-": "2,00,000", "Funding Agency": "AICTE- VAANI Scheme" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024-2025", "Application ID": "Patent No. 431535-001", "Title of the Patent": "SOIL CORE SAMPLE COLLECTOR", Status: "Published" },
            { "S.No": "2", Affiliation: "MITS", "Academic Year": "2024-2025", "Application ID": "Patent No. 428580-001", "Title of the Patent": "GRIP-TITE INTERLOCKING BRICKS", Status: "Published" }
          ]
        },
        {
          title: "Consultancy",
          content: [
            { "S.No": "1", Affiliation: "Cores", "Academic Year": "2025-26", "Name of the Consulting Firm": "Panchayat Raj Department", "Title of the Project": "CC Roads", "Amount in Rs. /-": "10,000" },
            { "S.No": "2", Affiliation: "Mix design", "Academic Year": "2025-26", "Name of the Consulting Firm": "Panchayat Raj Department", "Title of the Project": "Mix design for Dams", "Amount in Rs. /-": "15,000" },
            { "S.No": "3", Affiliation: "Cores", "Academic Year": "2024-25", "Name of the Consulting Firm": "Panchayat Raj Department", "Title of the Project": "CC Roads", "Amount in Rs. /-": "10,000" },
            { "S.No": "4", Affiliation: "Mix design", "Academic Year": "2024-25", "Name of the Consulting Firm": "Panchayat Raj Department", "Title of the Project": "Mix Design for Nagarjuna Construction Company", "Amount in Rs. /-": "15,000" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Served as Session Chair for the conference \"Advances in Intelligent Civil Engineering (AICE) – 2025\" (Sept. 10–14, 2025).",
            "Received Appreciation for Outstanding Contribution to Institute Consultancy at MITS.",
            "Recognized as the Best Performer in the EDC Cell, MITS (2025)."
          ]
        }
      ]
    },
    "Mr. B. Veeresh": {
      name: "Mr. B. Veeresh",
      designation: "Asst. Professor",
      email: "veereshb@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/Mr.B. Veeresh.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "Ph.D.", Specialization: "Environmental Engineering", Branch: "Civil Engineering", "College Name/University": "JNTUA, University", "Year of Passing": "Pursuing" },
            { "S.No": "2", Course: "M.Tech.", Specialization: "Environmental Engineering", Branch: "Civil Engineering", "College Name/University": "JNTUA, University", "Year of Passing": "2022" },
            { "S.No": "3", Course: "B.Tech.", Specialization: "Civil Engineering", Branch: "Civil Engineering", "College Name/University": "N.B.K.R Institute of Science and Technology, JNTUA, Anantapuramu", "Year of Passing": "2018" }
          ]
        },
        {
          title: "Research Areas",
          content: "Water Quality, Water & Wastewater Treatment, Solid Waste Management and GeoEnvironment"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Scopus", Link: "https://www.scopus.com/authid/detail.uri?authorId=59561286000" },
            { Identifier: "Vidwan", Link: "https://mits.irins.org/profile/460383" },
            { Identifier: "h-Index (As per Scopus Data)", Link: "1" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "4", "Details of Research Publication": "Optimizing Agricultural Waste By-Products: A Machine Learning Approach for Sustainable Construction Practices", Indexing: "Scopus", Publication: "Article", "Journal Quartile": "Q1" }
          ]
        },
        {
          title: "Patents",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2024", "Application ID": "431535-001", "Title of the Patent": "Soil Core Sample Collector", Status: "Published" }
          ]
        },
        {
          title: "Consultancy",
          content: [
            { "S.No": "1", Affiliation: "MITS", "Academic Year": "2023", "Name of the Consulting Firm": "Private Organisation", "Title of the Project": "", "Amount in Rs. /-": "10,000" },
            { "S.No": "2", Affiliation: "Mix MITS", "Academic Year": "2024", "Name of the Consulting Firm": "Private Organisation", "Title of the Project": "", "Amount in Rs. /-": "10,000" }
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Received a Silver Medal for being a topper in Geotechnical Engineering Laboratory (NPTEL), during July 1–Aug. 1, 2024."
          ]
        }
      ]
    },
    "Mr. P. Sabarishkumar": {
      name: "Mr. P. Sabarishkumar",
      designation: "Asst. Professor",
      email: "sabarishkumarpm@mits.ac.in",
      image: "https://mits.ac.in/public/uploads/faculty/sabarish.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            { "S.No": "1", Course: "M.E.", Specialization: "Structural Engineering", Branch: "Civil Engineering", "College Name/University": "Institute of Road & Transport Technology, Anna University", "Year of Passing": "2011" },
            { "S.No": "2", Course: "B.E.", Specialization: "Civil Engineering", Branch: "Civil Engineering", "College Name/University": "Institute of Road & Transport Technology, Anna University", "Year of Passing": "2009" }
          ]
        },
        {
          title: "Research Areas",
          content: "Structural Engineering"
        },
        {
          title: "Research Identifiers",
          content: [
            { Identifier: "Vidwan", Link: "https://vidwan.inflibnet.ac.in/profile/462964" },
            { Identifier: "Google scholar", Link: "https://scholar.google.com/citations?view_op=new_articles&hl=en&imq=P.Sabarishkumar#" }
          ]
        },
        {
          title: "Publication Details",
          content: [
            { "S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2015-2016", "Author Position": "1", "Details of Research Publication": "STUDY ON STRUCTURAL ANALYSIS AND DESIGN OF RCC BIN", Indexing: "SCOPUS", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2015-2016", "Author Position": "1", "Details of Research Publication": "ANALYSIS AND DESIGN OF RCC OFFSHORE PLATFORM", Indexing: "SCOPUS", Publication: "Conference Proceedings", "Journal Quartile": "None" },
            { "S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2010-2011", "Author Position": "1", "Details of Research Publication": "Experimental Study on RCC Columns with various types of Confinement techniques", Indexing: "SCOPUS", Publication: "Conference Proceedings", "Journal Quartile": "None" }
          ]
        }
      ]
    }
  }
};

export function getFacultyProfile(deptKey: string, facultyName: string): FacultyProfile | undefined {
  return facultyProfiles[deptKey]?.[facultyName];
}
