// All data extracted from https://mits.ac.in/research and its linked subpages

export const researchOverview = {
  title: "Research & Development",
  description:
    "Research & Development Cell established at MITS promotes research, innovations, consultancy activities and also facilitates the protection of Intellectual Property (IP) thus generated at MITS.",
  recognisedCenter:
    "MITS has been recognized as a research centre (First college in the Rayalaseema region) for Doctoral programme admissions allotted by University.",
  scholarStipend:
    "Admitted students of the Ph.D. Programme will be paid Rs.18,000/- p.m. for engineering disciplines and Rs.10,000/- p.m. for management discipline up to a period of three years.",
  enrolledScholarsLink:
    "https://mits.ac.in/assets/pdf/research/Enrolled%20Research%20Scholars-List.pdf",
  contacts: [
    {
      name: "Dr. R. Thulasiram Naidu",
      role: "Advisor - R&D & Consultancy",
      email: "advisor-rnd@mits.ac.in",
      phone: "+91-8571-280255; 280706",
    },
    {
      name: "Dr. P. Sivaiah",
      role: "Associate Dean - R&D",
      email: "adresearch@mits.ac.in",
      phone: "+91-8571-280255; 280706",
    },
    {
      name: "Mr. G. Mallikarjuna",
      role: "AAO - R&D",
      email: "adresearchoffice@mits.ac.in",
      phone: "+91-8571-280255; 280706",
    },
  ],
};

export const projectsData = {
  sanctionedProjects: {
    title: "Sanctioned Research Projects",
    allProjectsLink:
      "https://mits.ac.in/assets/pdf/research/Sanctioned%20Research%20Projects.pdf",
    yearWise: [
      { year: "2024-25", link: "https://mits.ac.in/assets/pdf/research/Research%20Projects%202024-25.pdf" },
      { year: "2023-24", link: "https://mits.ac.in/assets/pdf/research/Research%20Projects%202023-24.pdf" },
      { year: "2022-23", link: "https://mits.ac.in/assets/pdf/research/Research%20Projects%202022-23.pdf" },
      { year: "2021-22", link: "https://mits.ac.in/assets/pdf/research/Research%20Projects%202021-22.pdf" },
      { year: "2020-21", link: "https://mits.ac.in/assets/pdf/research/Research%20Projects%202020-21.pdf" },
      { year: "2019-20", link: "https://mits.ac.in/assets/pdf/research/Research%20Projects%202019-20.pdf" },
      { year: "2018-19", link: "https://mits.ac.in/assets/pdf/research/Research%20Projects%202018-19.pdf" },
      { year: "2017-18", link: "https://mits.ac.in/assets/pdf/research/Research%20Projects%202017-18.pdf" },
      { year: "2016-17", link: "https://mits.ac.in/assets/pdf/research/Research%20Projects%202016-17.pdf" },
      { year: "2015-16", link: "https://mits.ac.in/assets/pdf/research/Research%20Projects%202015-16.pdf" },
      { year: "2014-15", link: "https://mits.ac.in/assets/pdf/research/Research%20Projects%202014-15.pdf" },
      { year: "2013-14", link: "https://mits.ac.in/assets/pdf/research/Research%20Projects%202013-14.pdf" },
    ],
  },
  subSections: [
    { title: "Research Areas", link: "https://mits.ac.in/assets/pdf/research/Research%20Areas.pdf" },
    { title: "Research Facilities", items: [
      { title: "Advanced Lab Equipment - Civil", link: "https://mits.ac.in/assets/pdf/research/List%20of%20Advanced%20Lab%20Equipment-Civil.pdf" },
      { title: "Advanced Lab Equipment - Mechanical", link: "https://mits.ac.in/assets/pdf/research/List%20of%20Advanced%20Lab%20Equipment-Mechanical.pdf" },
      { title: "Advanced Lab Equipment - Physics", link: "https://mits.ac.in/assets/pdf/research/List%20of%20Advanced%20Lab%20Equipment-Physics.pdf" },
      { title: "Advanced Lab Equipment - Chemistry", link: "https://mits.ac.in/assets/pdf/research/List%20of%20Advanced%20Lab%20Equipment-Chemistry.pdf" },
    ]},
    { title: "Writing Tips for Projects", link: "https://mits.ac.in/tips" },
  ],
  fundingAgencies: {
    indian: [
      { name: "DST SERB", link: "http://www.serb.gov.in/home.php" },
      { name: "University Grants Commission (UGC)", link: "http://www.ugc.ac.in/page/XII-Plan-Guidelines.aspx" },
      { name: "Indian Council of Social Science Research (ICSSR)", link: "http://icssr.org/" },
      { name: "Indian Space Research Organization (ISRO)", link: "http://www.icssr.org/rp_main.htm" },
      { name: "Indian Council of Agricultural Research (ICAR)", link: "http://www.icar.org.in/files/reports/other-reports/financial-assistance.pdf" },
      { name: "Department of Science and Technology", link: "https://mits.ac.in/dst.html" },
      { name: "Department of Biotechnology", link: "https://mits.ac.in/dbt.html" },
      { name: "Department of Atomic Energy", link: "https://mits.ac.in/dae.html" },
      { name: "Defence Research and Development Organization", link: "https://mits.ac.in/drdo.html" },
    ],
  },
};

export type Publication = {
  name: string;
  dept: string;
  details: string;
  ifPublisher: string;
};

export type PublicationYear = {
  year: string;
  entries: Publication[];
};

export const publicationsData = {
  title: "Research Publications",
  subtitle: "Top Rated Journals — MITS Affiliated Publications",
  topRated: [
    {
      year: "2024-25",
      entries: [
        { name: "Sonu Kumar Gupta, et al.", dept: "CE", details: "An overview of recent trends and future prospects of sustainable natural fiber-reinforced polymeric composites for tribological applications. Industrial Crops and Products 222 (2024): 119501.", ifPublisher: "6.2 (Elsevier)" },
        { name: "Kumar, Vineet, et al.", dept: "EEE", details: "Optimal voltage and frequency control strategy for renewable-dominated deregulated power network. Scientific Reports 15.1 (2025): 398.", ifPublisher: "3.8 (Scientific Reports)" },
        { name: "Veeresalingam Guruguntla et al.", dept: "MECH", details: "Advanced chatter detection in internal turning for industry 4.0: Adaptive Threshold Wavelet De-noising with enhanced ICEEMDAN–Hilbert fusion using Adaptive Probabilistic Neural Network. Journal of Manufacturing Processes 149 (2025): 1078-1105.", ifPublisher: "6.8 (Elsevier)" },
        { name: "Rakesh Nath Tiwari et al.", dept: "ECE", details: "An improved gain antenna array for telehealth monitoring on the Internet of Things platform. IEEE Internet of Things Journal 12.3 (2025): 3055-3066.", ifPublisher: "8.9 (IEEE)" },
        { name: "Sudhakar Kothandapani et al.", dept: "CSE", details: "Enhancing radiographic image interpretation: WARES-PRS model for knee bone tumour detection. Network: Computation in Neural Systems 36.3 (2025): 1107-1137.", ifPublisher: "1.6 (TF)" },
        { name: "Lakshmiramana, P et al.", dept: "CST", details: "Secuyolo: Secure Object Detection Framework With Darknet-53 and CBAM in Edge Devices. Concurrency and Computation: Practice and Experience 37.15-17 (2025): e70118.", ifPublisher: "1.5 (WILEY)" },
        { name: "Sreenath Kocharla et al.", dept: "CSE-AI", details: "EHA-LNN: Optimized light gradient-boosting machine enabled neural network for cancer detection using mammography. Biomedical Signal Processing and Control 105 (2025): 107540.", ifPublisher: "4.9 (Elsevier)" },
        { name: "Sandhya, E., et al.", dept: "CSE - AI&ML", details: "Enhancing security and efficiency in Mobile Ad Hoc Networks using a hybrid deep learning model for flooding attack detection. Scientific Reports 15.1 (2025): 818.", ifPublisher: "4.3 (Scientific Reports)" },
        { name: "S. Gopalakrishnan et al.", dept: "CSE - DS", details: "An efficient data mining technique and privacy preservation model for healthcare data using improved darts game optimizer-based weighted deep neural network and hybrid encryption. Biomedical Signal Processing and Control 100 (2025): 107168.", ifPublisher: "4.9 (Elsevier)" },
        { name: "Saini, Kezia, et al.", dept: "Maths", details: "A hybrid machine learning framework for predicting moisture-induced pavement failure: integrating sensitivity analysis and data augmentation. Road Materials and Pavement Design (2025): 1-26.", ifPublisher: "4.9 (TF)" },
        { name: "Chandra Sekhar Musalikunta et al.", dept: "Physics", details: "Recent breakthroughs in non-conjugated polymers for thermally activated delayed fluorescent OLEDs: emitters, hosts, and hole-transport materials. Materials Chemistry Frontiers (2025).", ifPublisher: "6.4 (RSC)" },
        { name: "Pitchamuthu Amaladass, et al.", dept: "Chemistry", details: "Recent synthetic strategies for the functionalization of fused bicyclic heteroaromatics using organo-Li,-Mg and-Zn reagents. Chemical Society Reviews (2024).", ifPublisher: "39 (RSC)" },
      ],
    },
    {
      year: "2023-24",
      entries: [
        { name: "Vijayakumar Natesan et al.", dept: "CE", details: "Numerical investigation of cold formed steel sleeve connection for channel sections subjected to combined bending and shear. Journal of Constructional Steel Research, 217, p.108588.", ifPublisher: "4 (Elsevier)" },
        { name: "Damodhar, T.B et al.", dept: "EEE", details: "A mutual certificate-based data privacy scheme for ubiquitous and sustainable computing system users. Sustainable Energy Technologies and Assessments, 58, p.103356.", ifPublisher: "7.1 (Elsevier)" },
        { name: "S. Baskaran et al.", dept: "MECH", details: "Identification of tool wear and surface morphology measurements in sustainable milling of Al 6082 hybrid metal matrix composite. Journal of Materials Research and Technology, 27, pp.7570-7581.", ifPublisher: "6.2 (Elsevier)" },
        { name: "Rakesh Nath Tiwari et al.", dept: "ECE", details: "Dual-Band MIMO Antenna Data Telemetry for Dual-Chamber Leadless Cardiac Pacing on Internet of Things Environment. IEEE Internet of Things Journal.", ifPublisher: "8.2 (IEEE)" },
        { name: "Mohan M et al.", dept: "CSE", details: "Hybrid deep learning enabled breast cancer detection using mammogram images. Biomedical Signal Processing and Control, 95, p.106310.", ifPublisher: "4.9 (Elsevier)" },
        { name: "Manikandan Rajagopal et al.", dept: "CST", details: "An Integration of Digital Twin and 6G Edge Computing Approach to Secure Cyber Physical Systems. Wireless Personal Communications, pp.1-17.", ifPublisher: "1.9 (Springer)" },
        { name: "K. V. Narasimha Murthy et al.", dept: "MATHS", details: "Characterization and prediction of southwest monsoon rainfall patterns in Central India as a linear state space modeling. Natural Hazards, 120(3), pp.2553-2569.", ifPublisher: "3.3 (Springer)" },
        { name: "Chandrasekar Perumalveeramalaiet al.", dept: "PHYSICS", details: "Monolithically grown CSPbBr3 by chemical vapor deposition for Self-Powered photodetector. Chemical Engineering Journal, 492, p.152213.", ifPublisher: "13.3 (Elsevier)" },
        { name: "Chikkili Venkateswara Raju et al.", dept: "CHEMISTRY", details: "Simultaneous electrochemical detection of dopamine and uric acid based on tri-composite of poly-pyrrole and α-Fe2O3 embedded MoS2 sheets modified electrode. Microchemical Journal, 198, p.110189.", ifPublisher: "4.9 (Elsevier)" },
      ],
    },
    {
      year: "2022-23",
      entries: [
        { name: "Roy D et al.", dept: "CIVIL", details: "Impact of temperature and precipitation lapse rate on hydrological modelling over Himalayan Gandak River Basin. Journal of Mountain Science, 19(12), pp.3487-3502.", ifPublisher: "2.3 (Springer)" },
        { name: "K Lakshmikhandan et al.", dept: "EEE", details: "A hybrid technique for grid-connected solar–wind hybrid system with electric vehicles. Energy & Environment, 35(5), pp.2753-2789.", ifPublisher: "4.0 (SAGE)" },
        { name: "Satyajit Pattanayak et al.", dept: "MECH", details: "Optimizing pyrolysis process parameters of plastic grocery bag, with mass–energy assessment and characterization of oil at optimal condition. Clean Technologies and Environmental Policy, 24(6), pp.1927-1944.", ifPublisher: "4.2 (Springer)" },
        { name: "M. Velumani et al.", dept: "ECE", details: "A bilayer SnO2/MoS2-coated evanescent wave fiber optic sensor for acetone detection—an experimental study. Biosensors, 12(9), p.734.", ifPublisher: "4.9 (MDPI)" },
        { name: "P. V. Venkateswara Rao et al.", dept: "CSE", details: "Secure authentication and key management protocol for deployment of internet of vehicles (IoV) concerning intelligent transport systems. IEEE Transactions on Intelligent Transportation Systems, 23(12), pp.24698-24713.", ifPublisher: "7.9 (IEEE)" },
        { name: "U. Padmavathi et al.", dept: "CSE-AI", details: "AE-LEACH: an incremental clustering approach for reducing the energy consumption in WSN. Microprocessors and Microsystems, 93, p.104602.", ifPublisher: "1.9 (Elsevier)" },
        { name: "Rajakumar Ramalingam et al.", dept: "CST", details: "Routing protocol for MANET based on QoS-aware service composition with dynamic secured broker selection. Electronics, 11(17), p.2637.", ifPublisher: "2.6 (MDPI)" },
        { name: "Ahsan Mahboob et al.", dept: "Mathematics", details: "On new filters in ordered semigroups. Symmetry, 14(8), p.1564.", ifPublisher: "2.7 (MDPI)" },
        { name: "V.K. Verma et al.", dept: "PHYSICS", details: "Effect of Cr-substitution on vanadium dioxide thin films studied by soft X-ray magnetic circular dichroism. Journal of Alloys and Compounds, 918, p.165515.", ifPublisher: "5.8 (Elsevier)" },
        { name: "Sumanta Sahoo et al.", dept: "CHEMISTRY", details: "Animal- and human-inspired nanostructures as supercapacitor electrode materials: a review. Nano-Micro Lett. 14, 199 (2022).", ifPublisher: "31.6 (Springer)" },
        { name: "K. Chokkanathan et al.", dept: "MCA", details: "Hybridization of mean shift clustering and deep packet inspected classification for network traffic analysis. Wireless Personal Communications, pp.1-17.", ifPublisher: "1.9 (Springer)" },
      ],
    },
  ],
  moreLink: "https://mits.ac.in/publications",
};

export const patentsData = {
  title: "Patent Details",
  description: "MITS faculty and students have filed patents across various engineering and science disciplines. The details of patents filed, published, and granted are listed below.",
  patentDetailsLink: "https://mits.ac.in/assets/pdf/patent/Patent_2024.xlsx",
  iprCellLink: "https://mits.ac.in/researchpatents",
  moreLink: "https://mits.ac.in/researchpatents",
};

export const policiesData = [
  { sno: 1, title: "Publication Incentive Policy", link: "https://mits.ac.in/assets/pdf/research/Incentive%20Policy%202025-26.pdf" },
  { sno: 2, title: "Seed Money Policy", link: "https://mits.ac.in/assets/pdf/research/Seed%20Money%20Policy.pdf" },
  { sno: 3, title: "MITS Startup Policy", link: "https://mits.ac.in/assets/pdf/research/MITS-Startup-Policy.pdf" },
  { sno: 4, title: "MITS Intellectual Property Rights Policy", link: "https://mits.ac.in/assets/pdf/admin/MITS-IPR-Policy.pdf" },
  { sno: 5, title: "MITS-Benefits", link: "https://mits.ac.in/assets/pdf/research/MITS-Benefits.pdf" },
];

export const eventsData = [
  { title: "One-Day National Level Workshop on \"Fundamentals and Disputes in IPR, WIPO Distance Learning Courses, and Pitching for Angel Investors\"", dept: "Dept. of Computer Applications in association with R&D Cell", date: "20th December 2025", link: "https://mits.ac.in/assets/pdf/ca/Fundamentals%20and%20Disputes%20in%20IPR,%20WIPO%20Distance%20Learning%20Courses,%20and%20Pitching%20for%20Angel%20Investors-min.pdf" },
  { title: "IRP Basics for Innovators and Entrepreneurs", dept: "Dept. of CSE - AI in collaboration with R&D Cell", date: "27th November 2025", link: "https://mits.ac.in/assets/pdf/aids/IRP%20Basics%20for%20Innovators%20and%20Entrepreneurs.pdf" },
  { title: "Publication Incentive Award Function for A.Y. 2024-25", dept: "R&D Cell", date: "07th November 2025", link: "https://mits.ac.in/assets/pdf/research/Publication%20Incentive%20Award%20function%20for%20AY%202024-25.pdf" },
  { title: "National Level IP-Yatra 2025 - Improving the lives of everyone, everywhere", dept: "R&D Cell", date: "21st & 22nd March 2025", link: "https://mits.ac.in/assets/pdf/research/National%20Level%20IP-Yatra%202025.pdf" },
  { title: "Publication Incentive Award Function for A.Y. 2023-24", dept: "R&D Cell", date: "14th March 2025", link: "https://mits.ac.in/assets/pdf/research/Publication%20Incentive%20Award%20function%20for%20the%202023-24.pdf" },
  { title: "Webinar on \"Effective Project Proposal Writing\"", dept: "R&D Cell", date: "23rd January 2025", link: "https://mits.ac.in/assets/pdf/research/15.%20Report%20on%20Online%20Webinar%2023-01-2025.pdf" },
  { title: "One Day Workshop on \"IPR: Patentability, Patent Drafting & Patent Filing Procedure\"", dept: "R&D Cell under IPFC-MITS & IPR Cell", date: "04th January 2025", link: "https://mits.ac.in/assets/pdf/research/14.Report%20IPR%20IPFC%20Jan%202025.pdf" },
  { title: "Three Days International Workshop on \"Fundamentals and Recent Trends in IPR, Startup Development, and Research Publication\"", dept: "Dept. of ECE in collaboration with MITS IPFC & MITS IEEE Student Branch", date: "27th–29th November 2024", link: "https://mits.ac.in/assets/pdf/research/13.%20Report%20_%20Fundamentals%20and%20Recent%20Trends%20in%20Intellectual%20Property%20Rights.pdf" },
  { title: "One Day Awareness Workshop on \"Intellectual Property Rights\"", dept: "Dept. of CSE (Data Science) in association with IIC, IPR Cell & IPFC", date: "13th November 2024", link: "https://mits.ac.in/assets/pdf/research/12.%20DS%20Dept%20IIC-1.pdf" },
  { title: "Seminar on \"Research and IPR Awareness Program\"", dept: "Dept. of Computer Applications in association with IPR Cell & IPFC", date: "06th November 2024", link: "https://mits.ac.in/assets/pdf/research/11.%20Report%20-%20Seminar%20-%20IPR%20By%20Dr.%20Sivaiah.pdf" },
  { title: "One Day Awareness Workshop on \"Intellectual Property Rights\"", dept: "Dept. of English & Foreign Languages in association with IIC, IPR Cell & IPFC", date: "21st October 2024", link: "https://mits.ac.in/assets/pdf/research/10.%20English%20Department.pdf" },
  { title: "Publication Incentive Award Function for A.Y. 2022-23", dept: "R&D Cell", date: "05th September 2024", link: "https://mits.ac.in/assets/pdf/research/9.%20report%20on%20incentive%20function%20AY_2023-24%20_%2005-09-2024.pdf" },
  { title: "Startup Mentoring Activity and Awareness Session on \"Trademark Registration\"", dept: "Dept. of ME, Startup & Innovation Cell in association with IPR Cell & IPFC", date: "23rd August 2024", link: "https://mits.ac.in/assets/pdf/research/8.%20Event%20Report.pdf" },
  { title: "One Day Awareness Program on \"Intellectual Property Rights\"", dept: "R&D Cell and IPR Cell under IPFC-MITS", date: "23rd August 2024", link: "https://mits.ac.in/assets/pdf/research/7.%20%20Report%20IPR%20IPFC%20Aug%202024.pdf" },
  { title: "Publication Incentive Award Function for A.Y. 2022-23", dept: "R&D Cell", date: "13th April 2024", link: "https://mits.ac.in/assets/pdf/research/6.%20report%20on%20incentive%20function%20AY_2022-23%20_%2013-04-2024.pdf" },
  { title: "Interaction Session with Dr KLS Reddy on \"About MSME Schemes\"", dept: "R&D Cell", date: "13th December 2023", link: "https://mits.ac.in/assets/pdf/research/5.%20Report%20on%2013-12-2023_Dr.KLS%20Reddy.pdf" },
  { title: "Interaction Session with P R Hariharan on \"Research Funding Opportunities\"", dept: "R&D Cell", date: "24th November 2023", link: "https://mits.ac.in/assets/pdf/research/4.%20Report%20on%2024-11-2023_Dr.Hariharan.pdf" },
  { title: "Online Training on \"Overview of Space Science and Technology\" (ISRO START Programme)", dept: "Dept. of ECE under ISRO START & R&D Cell", date: "20th July – 07th August 2023", link: "https://mits.ac.in/assets/pdf/research/3.%20ISRO%20START%20PROGRAM%20EVENT%20REPORT.pdf" },
  { title: "World MSME Day 2023", dept: "R&D Cell, IIC Cell & ED Cell", date: "27th June 2023", link: "https://mits.ac.in/assets/pdf/research/2.%20Report_World%20MSME%20day%202023.pdf" },
  { title: "Faculty Appreciation through Incentives for Research Publications & SWAYAM-NPTEL Toppers for A.Y. 2021-22", dept: "R&D Cell", date: "14th September 2022", link: "https://mits.ac.in/assets/pdf/research/1.%20Incentives%2014th%20Nov%202022%20_2021-22.pdf" },
];

export const documentsData = [
  { title: "Institutional Ethics Committee", link: "https://mits.ac.in/assets/pdf/research/ethics%20committee.pdf" },
  { title: "MITS R&D Steering Committee Members", link: "https://mits.ac.in/assets/pdf/research/MITS%20RandD%20Steering%20Committee%20Members.pdf" },
  { title: "R&D Cell Formation Committee", link: "https://mits.ac.in/assets/pdf/research/R&D%20Cell%20Fomation.PDF" },
  { title: "IPR Cell Committee", link: "https://mits.ac.in/assets/pdf/research/IPR%20Cell%20-%20Office%20Order%20-%202023.pdf" },
];

export const iprCellData = {
  title: "Intellectual Property Rights Cell",
  nationalPolicy: "The National IPR policy was released by Department of Industrial Policy and Promotion (DIPP), Ministry of Commerce and Industry, Government of India on May 12, 2016. This policy brings about a vibrant intellectual policy ecosystem to leverage technology and innovation for growth and competitiveness.",
  rationale: "Intellectual property plays an important role in providing a competitive edge with respect to tangible assets like inventions, designs, software, brand and innovative ideas. It is necessary to protect these creations in order to enable organizations to earn recognition or financial benefits.",
  committeeLink: "https://mits.ac.in/assets/pdf/admin/IPR%20Committee-17-12-2025.pdf",
  objectives: [
    "Create a conducive environment in MITS for development of IPs.",
    "Provide a single window reference system for all IP activities.",
    "Safeguard the inventor's intellectual property and provide incentives.",
    "Provide legal support to defend and protect IP rights against infringement.",
    "Ensure confidentiality of IP disclosures during patent processing.",
    "Enable MITS to make beneficial implementation of developed IPs.",
  ],
  vision: "An India where creativity and innovation are stimulated by Intellectual Property for the benefit of all; an India where intellectual property promotes advancement in Science and Technology, arts and culture, traditional knowledge and biodiversity resources.",
  mission: "Stimulate a dynamic, vibrant and balanced intellectual property rights system in India to foster creativity and innovation and thereby, promote entrepreneurship and enhance socio-economic and cultural development.",
  ipTypes: [
    { name: "Patent", desc: "An exclusive right granted for an invention — a product or process providing a new way of doing something." },
    { name: "Copyright", desc: "An exclusive right given to the author of original literary, architectural, dramatic, musical and artistic works." },
    { name: "Trade/Service Mark", desc: "A mark capable of distinguishing goods or services of one person from those of others." },
    { name: "Industrial Design", desc: "Features of shape, configuration, pattern, ornament or composition of lines or colours applied to any article." },
    { name: "IC Layout Designs", desc: "Layout of transistors and circuitry elements expressed in a semiconductor integrated circuit." },
    { name: "New Plant Variety", desc: "A plant variety that is novel, distinct and shows uniform and stable characteristics." },
    { name: "Biotechnology Inventions", desc: "Include recombinant products such as vectors, nucleotide sequences and micro-organisms." },
    { name: "Traditional Knowledge", desc: "Knowledge developed by indigenous or local communities for natural resource use." },
    { name: "Geographical Indications", desc: "Indications identifying goods as originating in a territory where quality is attributable to its geographical origin." },
  ],
  ideaSubmissionLink: "https://forms.gle/HWQToesWNo1oP1bU8",
  usefulLinks: [
    { name: "Cell for IPR Promotion and Management", link: "https://cipam.gov.in/" },
    { name: "Indian Patent Office", link: "https://ipindia.gov.in/" },
    { name: "Google Patent", link: "https://patents.google.com/" },
    { name: "Lens Database", link: "https://www.lens.org/" },
  ],
  policyDocuments: [
    { title: "MITS Intellectual Property Rights Policy", link: "https://mits.ac.in/assets/pdf/admin/MITS-IPR-Policy.pdf" },
    { title: "MITS Patent Details", link: "https://mits.ac.in/assets/pdf/patent/Patent_2024.xlsx" },
    { title: "IPR Events", link: "https://mits.ac.in/ipr-events" },
  ],
  contacts: [
    { name: "Dr. P. Sivaiah", role: "Coordinator", dept: "Associate Professor, Dept. of ME", email: "dean_research@mits.ac.in" },
    { name: "Dr. K. Arul Kumar", role: "Co-Coordinator", dept: "Associate Professor, Dept. of EEE", email: "arulkumark@mits.ac.in" },
  ],
};

export const mdrfData = {
  title: "Multidisciplinary Research Forum (MDRF)",
  about: "The Multidisciplinary Research Forum (MDRF) at Madanapalle Institute of Technology & Science (MITS), Deemed to be University, was constituted in 2024 with the vision of fostering collaborative research across diverse engineering and science disciplines.",
  platform: "The forum serves as a unified platform that brings together faculty, researchers, and students to address complex real-world challenges through integrated knowledge and innovative approaches. MDRF promotes a culture of research synergy, interdisciplinary collaboration, and knowledge sharing, aligned with national priorities and emerging global technological trends.",
  purpose: "The Multidisciplinary Research Forum (MDRF) aims to create a cohesive research ecosystem where expertise from Civil, Mechanical, Electrical, Electronics, and Computer Science disciplines is integrated to solve complex engineering and societal problems.",
  industryPerspective: "From an industry perspective, MDRF supports the development of practical, scalable, and technology-driven solutions by integrating core engineering knowledge with modern tools such as automation, data analytics, artificial intelligence, and sustainable practices.",
  societalImpact: "The forum focuses on addressing critical challenges such as sustainable infrastructure, renewable energy, environmental conservation, smart systems, and healthcare technologies.",
  objectives: [
    "To promote collaborative research across diverse departments and disciplines.",
    "To identify societal and industrial problems and develop interdisciplinary research solutions.",
    "To strengthen the University's research ecosystem on thrust / high priority areas through seminars, workshops, and capacity-building activities.",
    "To encourage faculty to actively submit interdisciplinary research proposals to national/international funding agencies.",
  ],
  goals: [
    "To promote a culture of regular research talks and scholarly discussions.",
    "To mentor young researchers, early-career faculty and students.",
    "To foster strong partnerships with industries, research labs, and universities for joint research.",
    "To establish interdisciplinary research clusters addressing contemporary societal and technological challenges.",
    "To secure external research funding through multidisciplinary project proposals to national/international funding agencies (DST, ANRF, MSME, AICTE, Industry etc.).",
  ],
};
