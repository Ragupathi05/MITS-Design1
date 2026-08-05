/**
 * Madanapalle Institute of Technology & Science (MITS) - Administration & HOD Profiles
 * 
 * ============================================================================
 * HOW TO MODIFY HIGHER OFFICIALS & HOD DISPLAY POSITION / DATA
 * ============================================================================
 * 
 * 1. HOW TO CHANGE DISPLAY POSITION (REORDER):
 *    - To change the display order on the website, simply change the order of the
 *      profile objects in the arrays below (e.g. `administrationProfiles` or `hodProfiles`).
 *    - The website renders profiles sequentially in the exact order they are listed.
 * 
 * 2. HOW TO ADD A NEW PROFILE:
 *    - Add a new object to the array with the following fields:
 *      {
 *         name: "Dr. Name",
 *         designation: "Designation",
 *         image: "https://mits.ac.in/public/uploads/faculty/Dr. Name.JPG", // Official image URL
 *         externalProfile: "https://mits.ac.in/facultyprofile/ID",         // Official profile URL
 *         email: "email@mits.ac.in"
 *      }
 * 
 * 3. HOW TO EDIT DETAILS:
 *    - Locate the profile object by the name and modify the fields directly.
 */
// Centralized data for the About / institutional governance hub.
// All content sourced from official mits.ac.in pages.

export interface LeadershipProfile {
  slug: string;
  name: string;
  designation: string;
  qualification?: string;
  image: string;
  tagline?: string;
  message?: string;
  bio: string[];
  highlights?: string[];
  documents?: { label: string; url: string }[];
  sourceUrl: string;
}

export const leadershipProfiles: Record<string, LeadershipProfile> = {
  chancellor: {
    slug: "chancellor",
    name: "Dr. N. Vijaya Bhaskar Choudary",
    designation: "Founder & Chancellor",
    qualification: "M.Com., Ph.D.",
    image: "https://mits.ac.in/images/chancellor1.jpg",
    tagline: "Attracting global talent to local village",
    message:
      "By the grace of God, I have been entrusted with the sacred responsibility to serve as the Chancellor of a Deemed to be University — a divine opportunity to lay the foundation for a vibrant ecosystem of knowledge, innovation and transformation. I wish MITS shall stand as a beacon of learning, nurturing minds and shaping leaders for generations to come, attracting global talent to local village to create pathbreaking disruptive new technologies. To be able to give back to the very soil that shaped me and to serve the community that raised me, is both an honour and a responsibility I hold with deep reverence. This is not just about education; it is about building a legacy of hope, growth, and transformation for society at large.",
    bio: [
      "Dr. Nadella Vijaya Bhaskar Choudary is a distinguished academician, visionary entrepreneur, and philanthropist deeply committed to the cause of quality education. Hailing from Madanapalle, he has dedicated his life to the advancement of knowledge and the upliftment of society.",
      "He was awarded a doctoral degree from Jawaharlal Nehru Technological University, Anantapur, for his seminal work on Change Management Practices in the IT Industry. His in-depth analysis of organizational transformation and leadership dynamics has shaped his enduring vision.",
      "Originating from a modest agricultural family, Dr. Choudary firmly believes that while agriculture is the foundation of human existence, technology plays a crucial role in enhancing its productivity and sustainability. His noble vision to deliver quality technical and management education began with the establishment of MITS in 1998 with an intake of 180 students. In recognition of this perseverance, vision, and dedication to educational excellence, the UGC conferred MITS with the prestigious Deemed to be University status in 2025.",
      "Under his visionary leadership, MITS students successfully completed the University Innovation Fellowship program. Stanford University has recognized MITS as one of the most happening campuses — a testament to the vibrant culture of innovation and academic excellence that defines the institution.",
    ],
    highlights: [
      "Paul Harris Award by Rotary International (2008)",
      "Founded MITS in 1998; conferred Deemed to be University status in 2025",
      "Published research papers in reputed national and international journals",
      "Champions free medical camps, community outreach and blood donation drives",
    ],
    sourceUrl: "https://mits.ac.in/chancellor",
  },
  "pro-chancellor": {
    slug: "pro-chancellor",
    name: "Sri. Nadella Dwarakanath",
    designation: "Pro-Chancellor",
    image: "https://mits.ac.in/images/proc.jpg",
    bio: [
      "Sri. Nadella Dwarakanath is widely respected for his dedication to empowering communities through education and his intention to serve the common good. In recognition of decades of leadership in education and public service, he was formally appointed as the Pro-Chancellor of MITS Deemed to be University on 26th July 2025.",
      "With over 25 years of experience across education, he has consistently championed progress through integrity and local empowerment. He began his journey in public service as an elected ZPTC Member (Zilla Parishad Territorial Constituency) from 1995 to 2000, playing a crucial role in rural development.",
      "In 2004, he founded Indian Public School and served as the Founder and Correspondent until 2018. Under his dynamic leadership the school earned a reputation for academic excellence and holistic development.",
      "He assumed educational leadership from 1998 to 2021 as President of Ratakonda Ranga Reddy Academy, contributing to the institutional growth of Madanapalle Institute of Technology & Science. He also served as Estate Manager of Besant Theosophical College, Madanapalle, from 2017 to 2021.",
      "As Pro-Chancellor, he reflects a deep-rooted dedication to governance and institutional development with a special focus on community impact.",
    ],
    sourceUrl: "https://mits.ac.in/pro-chancellor",
  },
  "vice-chancellor": {
        "slug": "vice-chancellor",
        "name": "Dr. C. Yuvaraj",
        "designation": "Professor &amp; Vice Chancellor (I/c)",
        "qualification": "M.E., Ph.D., MISTE., FIE",
        "image": "https://mits.ac.in/public/uploads/faculty/Dr. C. Yuvaraj.JPG",
        "bio": [
            "Dr. C. Yuvaraj is the Vice Chancellor (I/c) of MITS Deemed to be University. He completed his B.E at M.S. Ramaiah Institute of Technology, Bangalore; M.E at University Visvesvaraya College of Engineering, Bangalore; Ph.D at Bangalore University; and MBA at S.K. University, Anantapur.",
            "In a professional career of more than 34 years, Dr. Yuvaraj has contributed to academics in various capacities. His areas of interest include Composite Materials, Development of New Materials, Material Characterization, Development of Tubular Electrodes, and Hybrid Metal Matrix Composites.",
            "He has to his credit 42 publications in international journals and 30 conference/seminar presentations (17 National, 13 International). He has chaired several conference sessions, participated in 58 refresher/short-term courses, and supervised 7 Ph.D. scholars. He has completed two projects worth Rs. 39,12,690/- as Co-PI."
        ],
        "highlights": [
            "ISTE AP Section \u2014 Best Engineering College Principal Award (2023)",
            "University Best Principal Award (2023) \u2014 JNT University Anantapur",
            "Best Educationist Award \u2014 International Institute of Education & Management",
            "Rashtriya Vidya Gaurav Gold Medal Award \u2014 Indian Solidarity Council"
        ],
        "sourceUrl": "https://mits.ac.in/vice-chancellor",
        "sections": [
            {
                "title": "Details of Educational Qualification",
                "content": [
                    {
                        "Course": "Ph.D.",
                        "Specialization": "Metal Matrix Composites",
                        "Branch": "Mechanical Engineering",
                        "College Name/University": "Bangalore University",
                        "Year of Passing": "2009"
                    },
                    {
                        "Course": "M.E.",
                        "Specialization": "Manufacturing Science and Engineering",
                        "Branch": "Mechanical Engineering",
                        "College Name/University": "University Visveswaraiah College of Engineering, Bangalore University, Bangalore.",
                        "Year of Passing": "2000"
                    },
                    {
                        "Course": "B.E.",
                        "Specialization": "Mechanical Engineering",
                        "Branch": "Mechanical Engineering",
                        "College Name/University": "M S Ramaiah Institute of Technology, Bangalore University, Bangalore.",
                        "Year of Passing": "1991"
                    }
                ]
            },
            {
                "title": "Research Areas",
                "content": "Composite Materials, Machining, Coatings and Tribology."
            },
            {
                "title": "Research Identifiers",
                "content": [
                    "Scopus: https://www.scopus.com/authid/detail.uri?authorId=57192235789",
                    "Vidwan: https://mits.irins.org/profile/274702",
                    "Google scholar: https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=mFyRNfUAAAAJ",
                    "h-Index (As per Scopus Data) : 10"
                ]
            },
            {
                "title": "Publication Details",
                "content": [
                    {
                        "S.No": "1",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2025-26",
                        "Author Position": "6",
                        "Details of Research Publication": "&quot;Facile Single-Step Electrodeposition of Flower-Shaped Cu doped ZnO Nanostructures for optical, photoluminescence and photocatalytic assessment.&quot; Optical Materials (2025): 117624.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                    },
                    {
                        "S.No": "2",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2024-25",
                        "Author Position": "6",
                        "Details of Research Publication": "&quot;Realization of CO2 gas sensors and broadband photodetectors using metal/high-k CeO2/p-Si heterojunction.&quot; Ceramics International 50.18 (2024): 31845-31858.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                    },
                    {
                        "S.No": "3",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2024-25",
                        "Author Position": "8",
                        "Details of Research Publication": "&quot;Optical, vibrational, and photoluminescence properties of holmium\u2010doped boro\u2010bismuth\u2010germanate glasses.&quot; Luminescence 39.7 (2024): e4822.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                    },
                    {
                        "S.No": "4",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2023-24",
                        "Author Position": "4",
                        "Details of Research Publication": "&quot;Performance evaluation of developed new textured tools during turning of AISI 321 material.&quot; Materials and Manufacturing Processes 39.5 (2024): 688-699.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                    },
                    {
                        "S.No": "5",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2022-23",
                        "Author Position": "11",
                        "Details of Research Publication": "&quot;Structure, morphology, photonconversion and energy transfer characteristics of Er3+/Yb3+: BaYF5 nanocrystals synthesized by hydrothermal method for photovoltaics.&quot; Ceramics International 49.16 (2023): 26879-26889.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                    },
                    {
                        "S.No": "6",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2022-23",
                        "Author Position": "3",
                        "Details of Research Publication": "&quot;UV-to-NIR broadband photodetecting sensors using n-TiO2 nanorods/p-Si heterojunction in lateral and vertical configurations.&quot; Applied Physics A 129.6 (2023): 412.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                    },
                    {
                        "S.No": "7",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2022-23",
                        "Author Position": "4",
                        "Details of Research Publication": "&ldquo;Investigation on turning process performance during machining of 15-5PH stainless steel material with eco-friendly machining technique.&rdquo; Materials Today: Proceedings. Scopus Conference None",
                        "Indexing": "Scopus",
                        "Publication": "Conference Proceedings",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                    },
                    {
                        "S.No": "8",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2021-22",
                        "Author Position": "2",
                        "Details of Research Publication": "&quot;Micro-structure and self-lubricant properties of powder mixed electrical discharge metal matrix composite coating.&quot; Proceedings of the Institution of Mechanical Engineers, Part E: Journal of Process Mechanical Engineering 236.4 (2022): 1369-1376.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                    },
                    {
                        "S.No": "9",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2021-22",
                        "Author Position": "2",
                        "Details of Research Publication": "&quot;Electric discharge coating process variation and its wear properties.&quot; International Journal of Surface Science and Engineering 15.2 (2021): 131-151.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q4"
                    },
                    {
                        "S.No": "10",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2020-21",
                        "Author Position": "5",
                        "Details of Research Publication": "&quot;High performance, self-powered and thermally stable 200&ndash;750 nm spectral responsive gallium nitride (GaN) based broadband photodetectors.&quot; Solar Energy Materials and Solar Cells 225 (2021): 111033.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                    },
                    {
                        "S.No": "11",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2020-21",
                        "Author Position": "2",
                        "Details of Research Publication": "&quot;A comparison on microstructure and mechanical properties of electric discharge metal matrix nickel and silica composite coating on duplex stainless steel.&quot; Journal of Composite Materials 55.4 (2021): 507-520.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                    },
                    {
                        "S.No": "12",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2020-21",
                        "Author Position": "3",
                        "Details of Research Publication": "&quot;Statistical analysis of current&ndash;voltage characteristics in Au/Ta2O5/n-GaN Schottky barrier heterojunction using different methods.&quot; Applied Physics A 127.1 (2021): 46.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                    },
                    {
                        "S.No": "13",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2020-21",
                        "Author Position": "2",
                        "Details of Research Publication": "&quot;Evaluation of electrical parameters of Ni/n-type Si Schottky barrier diodes using polyvinyl alcohol (PVA) as an interfacial layer.&quot; AIP Conference Proceedings. Vol. 2269. No. 1. AIP Publishing LLC, 2020.",
                        "Indexing": "Scopus",
                        "Publication": "Conference Proceedings",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                    },
                    {
                        "S.No": "14",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2019-20",
                        "Author Position": "2",
                        "Details of Research Publication": "&quot;Influence of silica on microstructural modification of electrical discharge composite coating and its wear performance. SILICON (2020).&quot;",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                    },
                    {
                        "S.No": "15",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2019-20",
                        "Author Position": "10",
                        "Details of Research Publication": "&quot;Near infrared broadband and visible upconversion emissions of erbium ions in oxyfluoride glasses for optical amplifier applications.&quot; Optics & Laser Technology 127 (2020): 106167.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q1"
                    },
                    {
                        "S.No": "16",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2019-20",
                        "Author Position": "3",
                        "Details of Research Publication": "&quot;Electrical discharge metal matrix composite coating on duplex stainless steel and its wear behavior under different environmental conditions.&quot; Materials Research Express 6.9 (2019): 0965c5.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                    },
                    {
                        "S.No": "17",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2018-19",
                        "Author Position": "2",
                        "Details of Research Publication": "&quot;Synthesis of electrical discharge metal matrix composite coating through compacted semi-sintered electrode and its tribological studies.&quot; Journal of the Brazilian Society of Mechanical Sciences and Engineering 41.5 (2019): 213.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                    },
                    {
                        "S.No": "18",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2018-19",
                        "Author Position": "2",
                        "Details of Research Publication": "&quot;Effect of feed rate on difficult to cut metals on surface roughness and tool wear using surface treated and untreated tools.&quot; Procedia Manufacturing 30 (2019): 216-223.",
                        "Indexing": "Scopus",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                    },
                    {
                        "S.No": "19",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2018-19",
                        "Author Position": "2",
                        "Details of Research Publication": "&quot;Analysis and optimization of metal injection molding feedstock SS 316L for rheological properties.&quot; Journal of The Institution of Engineers (India): Series D 99.2 (2018): 177-184.",
                        "Indexing": "SCIE",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q2"
                    },
                    {
                        "S.No": "20",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2018-19",
                        "Author Position": "2",
                        "Details of Research Publication": "&quot;Development and experimental investigation of mechanical and microstructural behaviour 0f welded dual phase steels (DPS).&quot; (2018).",
                        "Indexing": "Scopus",
                        "Publication": "Conference Proceedings",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                    },
                    {
                        "S.No": "21",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2017-18",
                        "Author Position": "2",
                        "Details of Research Publication": "&quot;Investigation of Mechanical Properties of a Composite Tubular Electrode Based Hard coating on Mild Steel Substrate.&quot;",
                        "Indexing": "Scopus",
                        "Publication": "Conference Proceedings",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                    },
                    {
                        "S.No": "22",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2016-17",
                        "Author Position": "2",
                        "Details of Research Publication": "&quot;Application of Taguchi Method for Optimizing the Parameters of Thermal Properties of Al/SiC-Gr Hybrid Composites.&quot; Bonfring International Journal of Advances in Image Processing 6.4 (2016): 28.",
                        "Indexing": "Scopus",
                        "Publication": "Conference Proceedings",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "None"
                    },
                    {
                        "S.No": "23",
                        "Publication Affiliation": "MITS",
                        "Academic Year": "2016-17",
                        "Author Position": "4",
                        "Details of Research Publication": "&quot;Fabrication of Cast Aluminium-Silicon (Al-Si) and Aluminium-Magnesium (Al-Mg) Alloys and Their Properties.&quot; Acta Metallurgica Slovaca 22.4 (2016): 212-221.",
                        "Indexing": "Scopus",
                        "Publication": "Article",
                        "Journal Quartile (Q1/Q2/Q3/Q4)": "Q3"
                    }
                ]
            },
            {
                "title": "Research Projects and Events",
                "content": [
                    {
                        "S.No": "1",
                        "Affiliation": "MITS",
                        "Academic Year": "2016-17",
                        "Project/Event": "Project",
                        "Role": "PI",
                        "Title of the Project/Event": "Development of High Strength Material for Micro Air Vehicle Structures",
                        "Amount in Rs. /-": "25,000",
                        "Funding Agency": "Institute of Engineers, Kolkatta"
                    },
                    {
                        "S.No": "2",
                        "Affiliation": "MITS",
                        "Academic Year": "2016-17",
                        "Project/Event": "Event - Seminar",
                        "Role": "PI",
                        "Title of the Project/Event": "Recent Advances in Additive Manufacturing",
                        "Amount in Rs. /-": "1,00,000",
                        "Funding Agency": "DST, SERB, New Delhi - Seminar"
                    },
                    {
                        "S.No": "3",
                        "Affiliation": "MITS",
                        "Academic Year": "2016-17",
                        "Project/Event": "Project",
                        "Role": "Co-PI",
                        "Title of the Project/Event": "Investigation and Characterization of Electrical Discharge Coated (EDC) Alloys for Mitigation of Biological Fouling on Maritime Structures",
                        "Amount in Rs. /-": "38,37,690",
                        "Funding Agency": "DST-SERB - ECRA"
                    },
                    {
                        "S.No": "4",
                        "Affiliation": "MITS",
                        "Academic Year": "2013-14",
                        "Project/Event": "Event - FDP",
                        "Role": "PI",
                        "Title of the Project/Event": "Fatigue & Fracture Mechanics in FE Analysis",
                        "Amount in Rs. /-": "7,00,000",
                        "Funding Agency": "AICTE - FDP"
                    },
                    {
                        "S.No": "5",
                        "Affiliation": "MITS",
                        "Academic Year": "2013-14",
                        "Project/Event": "Project",
                        "Role": "PI",
                        "Title of the Project/Event": "Design and Fabrication of Multi-Crop Smashing Combination Thresher",
                        "Amount in Rs. /-": "50,000",
                        "Funding Agency": "Institute of Engineers, Kolkatta"
                    }
                ]
            },
            {
                "title": "Patents",
                "content": [
                    {
                        "S.No": "1",
                        "Affiliation": "MITS",
                        "Academic Year": "2024-25",
                        "Application ID": "437596-001",
                        "Title of the Patent": "Multi-Sieving Machine",
                        "Status": "Examination"
                    },
                    {
                        "S.No": "2",
                        "Affiliation": "MITS",
                        "Academic Year": "2024-25",
                        "Application ID": "429724-001",
                        "Title of the Patent": "Textured turning cutting insert",
                        "Status": "Granted"
                    },
                    {
                        "S.No": "3",
                        "Affiliation": "MITS",
                        "Academic Year": "2024-25",
                        "Application ID": "443252-001",
                        "Title of the Patent": "Feedstock Filament Extuder",
                        "Status": "Granted"
                    },
                    {
                        "S.No": "4",
                        "Affiliation": "MITS",
                        "Academic Year": "2024-25",
                        "Application ID": "429875-001",
                        "Title of the Patent": "Dual surface textured tool",
                        "Status": "Granted"
                    },
                    {
                        "S.No": "5",
                        "Affiliation": "MITS",
                        "Academic Year": "2024-25",
                        "Application ID": "429725-001",
                        "Title of the Patent": "Cutting tool for turning operation",
                        "Status": "Examination"
                    },
                    {
                        "S.No": "6",
                        "Affiliation": "MITS",
                        "Academic Year": "2023-24",
                        "Application ID": "201941017448",
                        "Title of the Patent": "A Novel Hole Making Technique During The Thermoforming On Plastic Sheets",
                        "Status": "Granted"
                    },
                    {
                        "S.No": "7",
                        "Affiliation": "MITS",
                        "Academic Year": "2021-22",
                        "Application ID": "201941027725",
                        "Title of the Patent": "Removal Apparatus For Cylindrical Polymer Matrix Composite (Pmc) Parts Fabricated By Compression Cum Extruder Method",
                        "Status": "Granted"
                    },
                    {
                        "S.No": "8",
                        "Affiliation": "MITS",
                        "Academic Year": "2017-18",
                        "Application ID": "201741046532A",
                        "Title of the Patent": "New Invention of Low Cost Creep Testing Machine with Variable Temperature and Environmental and Environmental Conditions for Composite Material (pmmc)",
                        "Status": "Examination"
                    }
                ]
            },
            {
                "title": "Awards/Achievements",
                "content": [
                    "Ratified as Professor & Principal by JNTUA, Ananthapuramu.",
                    "Worked as BOS Member for the Dept. of Mechanical Engg., JNTUA, Ananthapuramu in the academic year 2020 & 2021.",
                    "Worked as a Committee Member for APECET during 2015-16.",
                    "Senior Life Member: Indian Society for Technical Education (ISTE), Membership No. SLM &ndash; 030 (dt: 20.09.2024).",
                    "Life Member: Indian Society for Technical Education (ISTE), Membership No. 68296 (year: 2010).",
                    "Life Member: Fellow of Institute of Engineers (FIE), Membership No. F-114969-1.",
                    "Life Member: International Association of Engineers (IAENG), Membership Number: 127904.",
                    "At the State Level Committees: Worked as Committee Member, APECET 2016.",
                    "At the University level: Member in BoS, Dept. of Mechanical Engineering, JNTUA, Ananthapuramu, Andhra Pradesh.",
                    "Received &ldquo;ISTE - Best Engineering College Principal Award for 2023&rdquo;, presented through the Sri G. Krishna Kumar Memorial State Award by the ISTE AP Section on 23rd September 2024.",
                    "Received Best Principal Award from JNT University Anantapur, Ananthapuramu, Andhra Pradesh during the &ldquo;University Principal Awards 2023&rdquo; on 13th December 2023.",
                    "&ldquo;Best Educationist Award&rdquo; received from International Institute of Education and Management, New Delhi in the year 2011 for outstanding achievements and remarkable role in the field of education.",
                    "&ldquo;Rashtriya Vidya Gaurav Gold Medal Award&rdquo; received from Indian Solidarity Council, New Delhi in the year 2011."
                ]
            },
            {
                "title": "Details of Educational Qualification",
                "content": [
                    {
                        "Course": "Ph.D.",
                        "Branch": "Mechanical Engineering",
                        "Specialization": "Metal Matrix Composites",
                        "College Name/University": "Bangalore University",
                        "Year of Passing": "2009"
                    },
                    {
                        "Course": "M.E.",
                        "Branch": "Mechanical Engineering",
                        "Specialization": "Manufacturing Science and Engineering",
                        "College Name/University": "University Visveswaraiah College of Engineering, Bangalore University, Bangalore.",
                        "Year of Passing": "2000"
                    },
                    {
                        "Course": "B.E.",
                        "Branch": "Mechanical Engineering",
                        "Specialization": "Mechanical Engineering",
                        "College Name/University": "M S Ramaiah Institute of Technology, Bangalore University, Bangalore.",
                        "Year of Passing": "1991"
                    }
                ]
            },
            {
                "title": "Research Projects",
                "content": [
                    {
                        "S.No": "1",
                        "Name of the Faculty": "Dr. I. Arun & Dr. C. Yuvaraj",
                        "Title of the Project/Event": "Investigation and characterization of Electrical Discharge Coated (EDC) alloys for mitigation of biological fouling on maritime structures.",
                        "Sanctioning Authority": "DST-SERB",
                        "Sanctioned Amount": "38.37 Lakhs",
                        "Duration of the Project": "3 Years"
                    },
                    {
                        "S.No": "2",
                        "Name of the Faculty": "Dr. C. Yuvaraj",
                        "Title of the Project/Event": "Design and Fabrication of multi-Crop Smashing Combination Thresher",
                        "Sanctioning Authority": "Institute of Engineers, Kolkata",
                        "Sanctioned Amount": "25,500",
                        "Duration of the Project": "1 Year"
                    }
                ]
            },
            {
                "title": "Research Guideship",
                "content": [
                    {
                        "S.No": "1",
                        "Scholar Name": "T. Siva Prasad",
                        "Guide Name": "Dr. C. Yuvaraj",
                        "Co-Guide from JNTUA College of Engineering, Anantapur": "Dr. K. Prahlada Rao Principal, JNTUA College of Engineering, Ananthapuramu",
                        "Date of Admission": "2015-16",
                        "Area of Research": "Composite Materials"
                    }
                ]
            },
            {
                "title": "My Publications",
                "content": [
                    {
                        "S.No": "1",
                        "Title of the Paper": "Analysis and Optimization of Metal Injection Molding Feedstock SS 316L for Rheological Properties",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of The Institution of Engineers (India): Series D, pp.1-8, 2018."
                    },
                    {
                        "S.No": "2",
                        "Title of the Paper": "Investigation of Mechanical Properties of a Composite Tubular Electrode Based Hard coating on Mild Steel Substrate",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Research Foundation, Volume 4, Issue 3, March 2017"
                    },
                    {
                        "S.No": "3",
                        "Title of the Paper": "Metal Injection Molding \u2013 A Review",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "Manufacturing Technology Today Journal, Vol. 15, Issue No. 12,2017"
                    },
                    {
                        "S.No": "4",
                        "Title of the Paper": "Structural Analysis and Fabrication of femoral component of Cemented Hip implant through Fused Deposition Modeling.",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Engineering Sciences and Research Technology, 72-80, 2016."
                    },
                    {
                        "S.No": "5",
                        "Title of the Paper": "Application of Taguchi Method for Optimizing the Parameters of Thermal Properties of Al/SiC-Gr Hybrid Composites",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "Bonfring International Journal of Advances in Image Processing, Vol. 6, No. 4, 2016."
                    },
                    {
                        "S.No": "6",
                        "Title of the Paper": "Fabrication of cast aluminium-silicon (Al-Si) and aluminium -Magnesium (Al-Mg) alloys and their properties",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "Acta Metallurgica Slovaca, Vol 22, No.4, pp. 212-221, 2016."
                    },
                    {
                        "S.No": "7",
                        "Title of the Paper": "Design, Analysis, Fabrication and Testing of CFRP with CNF Composite Cylinder for Space Applications",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Composite Materials, Vol.5, No.5, pp.102-128, 2015."
                    },
                    {
                        "S.No": "8",
                        "Title of the Paper": "Experimental Characterization of Carbon Fibre T700 / Epoxy towpreg for Space Applications",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Engineering Research and Applications, Vol.5, No.12, pp.1-14, 2015."
                    },
                    {
                        "S.No": "9",
                        "Title of the Paper": "Optimisation Of Welding Process Of Composite Chromium-Carbide Based Tubular Electrode For Hardfacing",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Mechanical and Production Engineering Research and Development, Vol.4, No.1, pp. 39-46, 2014."
                    },
                    {
                        "S.No": "10",
                        "Title of the Paper": "Effect of Nickel Content on Microstructure of Modified Zinc aluminium Cast Alloys",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Technical Research and Applications, Vol.2, No.4, pp.81-83, 2014."
                    },
                    {
                        "S.No": "11",
                        "Title of the Paper": "Design and analysis of a single seater race car chassis frame",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Research Aeronautical and Mechanical Engineering, Vol.2, No.8, pp.12-23, 2014."
                    },
                    {
                        "S.No": "12",
                        "Title of the Paper": "Evaluation of Mechanical Properties of Al/SiC-Graphite Hybrid Metal Matrix Composites",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Trends in Computer Science and Engineering, Vol.2, No.6, pp. 286-289, 2013."
                    },
                    {
                        "S.No": "13",
                        "Title of the Paper": "Microstructural and Mechanical Behaviour of Zinc-Aluminium Cast Alloys",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Mechanical Engineering and Technology (IJMET), Vol.4, No.4, pp. 243 \u2013 248, 2013."
                    },
                    {
                        "S.No": "14",
                        "Title of the Paper": "Characterization of Machinability Behaviour of Al/Al2O3 MMCs",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Advanced Engineering Research and Studies, Vol.1, No.2, pp. 114-117, 2012."
                    },
                    {
                        "S.No": "15",
                        "Title of the Paper": "Neural network for prediction of EDM of Al/SiC-graphite particulate reinforced hybrid composites",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "Int J Emerg Technol Adv Eng, Vol.2, No.12, pp. 730-739, 2012."
                    },
                    {
                        "S.No": "16",
                        "Title of the Paper": "Effect of Thermal Fatigue Behaviour on Bending Strength of Al/Al 2 O 3 MMCs.",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Engineering Research, Vol.5, No.7, 2010."
                    },
                    {
                        "S.No": "17",
                        "Title of the Paper": "Effect of Drilling Parameters on Drillability Behaviour of Al/Al 2 O 3 MMCs.",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Engineering Research, Vol.5, No.7, 2010."
                    },
                    {
                        "S.No": "18",
                        "Title of the Paper": "Study on Transition Behaviour of Al/Al2O3 MMCs",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "World Journal of Engineering, Vol.5, No.4, pp. 543-544, 2008."
                    },
                    {
                        "S.No": "19",
                        "Title of the Paper": "Optimization of machinability parameters of aluminium/alumina metal matrix composites",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "International Journal of Applied Engineering Research, Vol.3, No.9, pp.1197-1204, 2008."
                    },
                    {
                        "S.No": "20",
                        "Title of the Paper": "A study of transition wear behaviour of alumina particle reinforced Al-6061 MMCs",
                        "Full Journal Name / Conference Name, Volume number, page number, Date": "Journal of Reinforced Plastics and Composites, Vol.28, No.23, pp. 2903-2909, 2009."
                    }
                ]
            },
            {
                "title": "Conferences & Workshops attended",
                "content": [
                    "Participated in \u201cAcademia Day-Part of \u201c3Dverve 2019\u201d- An Annual Technical Conference of Dassault Systemes Foundation and Dassault Systemes\u201d at Dassault Systemes, India R&D (Auditorium), Hinjewadi Phase 1, Pune on 21 February 2019.",
                    "One Day workshop on Creating Roadmap for Innovation and Incubation Centres in AP Educational Institutions, organized by ITE&C department on 19-10-2016 at Gateway Hotel in Vijayawada.",
                    "A workshop on \u201cQuality Initiatives in Technical & Higher Educational Institutions (in compliance with NBA & NAAC Accreditation)\u201d organized by Engineering Staff College of India (ESCI), Hyderabad, from 07-09-16 to 9-09-16.",
                    "3rd International Conference in Transformations in Engineering Education (ICTIEE 2016) was organized by IUCEE (Indo-US Collaboration for Engineering Education) and College of Engineering, Pune (COEP) during 08-12 January 2016.",
                    "An Orientation Session on \u201cSiemens Centres of Excellence (COE) Clusters in AP\u201d organized by Andhra Pradesh State Skill Development Corporation at the Sri City Business Centre, Sri City on 27th August 2015.",
                    "A one-day workshop on \u201cAwareness on Various programs for Foreign University Collaborations\u201d was Organized at JNTUA, Ananthapuramu on 16th May 2015.",
                    "A meet in Chennai conducted by Higher Education Forum, South Zone to receive Campus Preparedness Award 2015 on 26th March 2015.",
                    "International conference in Transformations in Engineering Education (ICTIEE 2015). It is a four day International conference, among these first two days were pre-conference workshops conducted by the BMS College of Engineering, Bangalore and collaborating with Indo-US collaboration for Engineering Education (IUCEE) during 5-8 January 2015.",
                    "A workshop on TEQIP-II : Good Governance, Leadership and Management on 14th - 15th October 2014 at Metropolitan Hotel, Near Bangla Sahib Gurudwara Road, New Delhi.",
                    "Represented the college for the workshop on Procurement Practices attended on 22.08.2014, at PSG Institute of Technology, organized by PSG, SPFU-TN and NPIU at Coimbatore.",
                    "A National Conference on \u201cLeadership in Higher Education\u201d held on July 4, 2014 at Engineering staff college of India (ESCI), Hyderabad.",
                    "A one day workshop on \u201cAcademia Industry Management For creating Sustainable Employability\u201d held on 06-04-2014 Organized by GP Birla Institute of Human Excellence, Birla Center, Hyderabad.",
                    "Participated in a Seminar on \u201cInnovative Teaching, Research Learning & Accreditation Practices\u201d (IE-ITR SESSION) organized by ESCI as the constituent part of IE(I) Congress-2013 on 21 December, 2013 at Hotel Leela Palace, Chennai.",
                    "Appointed as the co ordinator of the program by AICTE and received a grant from AICTE to conduct 2 Weeks FDP On Fatigue & Fracture Mechanics In FE Analysis.",
                    "A Two Day Workshop on \u201cRecent Trends In Manufacturing \u201c Under TEQIP-II Organised by the Department of Mechanical Engineering, Chaitanya Bharathi Institute of Technology, Gandipet, Hyderabad on 29-30 July 2013.",
                    "A Two Day Workshop on \u201cProcurement Guidelines & PMSS Training\" under TEQIP-II conducted by NPIU - New Delhi and SPFU Andhra Pradesh at University College of engineering, Osmania University, Hyderabad on 16-17 May 2013.",
                    "A One Day workshop (28 September,2012) on \u201c Metallurgy For Non-Metallurgists\u201d (MNM-2012) organised by Indian Institute of Metals, Hyderabad Chapter on 28th September 2012.",
                    "Appointed as Principal Investigator, for the project \u201cDEVELOPMENT OF HIGH STRENGTH MATERIALS FOR Micro Air Vehicle STRUCTURES \u201c.",
                    "Participated in an interactive session with Dr. U. Chandrasekhar, Director, ESCI & Gp Capt B.S. Phillora, Head Management , Technology & Information Divisions, Engineering Staff College of India at Hyderabad on 14th December 2013."
                ]
            },
            {
                "title": "List of Patents",
                "content": [
                    {
                        "S.No": "1",
                        "Name of the Applicant": "Dr.C.Yuvaraj, Dr. G. Hemanth, Mr.A.Vasudeva Reddy, Dr.H.Mohit",
                        "Name of the Inventors": "Dr.C.Yuvaraj, Dr. G. Hemanth, Mr.A.Vasudeva Reddy, Dr.H.Mohit",
                        "Department": "ME",
                        "Title of the Patent": "Removal Apparatus For Cylindrical Polymer Matrix Composite (Pmc) Parts Fabricated By Compression Cum Extruder Method",
                        "App. No./Ref No.": "201941027725",
                        "Date of Filing": "10/7/2019",
                        "Date of Publishing": "2/8/2019",
                        "Status": "Filed & Published",
                        "MITS Affiliated": "yes"
                    },
                    {
                        "S.No": "2",
                        "Name of the Applicant": "Dr.C.Yuvaraj, Dr.G. Hemanth Kumar, Mr.S.Mohan Raj, Mr.H.Mohit",
                        "Name of the Inventors": "Dr.C.Yuvaraj, Dr.G. Hemanth Kumar, Mr.S.Mohan Raj, Mr.H.Mohit",
                        "Department": "ME",
                        "Title of the Patent": "A Novel Hole Making Technique During The Thermoforming On Plastic Sheets",
                        "App. No./Ref No.": "2019410117448",
                        "Date of Filing": "02/05/2019",
                        "Date of Publishing": "24/05/2019",
                        "Status": "Filed & Published",
                        "MITS Affiliated": "yes"
                    },
                    {
                        "S.No": "3",
                        "Name of the Applicant": "Dr. C. Yuvaraj, Dr. G. Hemanth Kumar, Mr. Harinandan Kumar, Dr. P. Sivaiah, Mr. Prabhu Jayaraman",
                        "Name of the Inventors": "Dr. C. Yuvaraj, Dr. G. Hemanth Kumar, Mr. Harinandan Kumar, Dr. P. Sivaiah, Mr. Prabhu Jayaraman",
                        "Department": "ME",
                        "Title of the Patent": "New Invention of Low Cost Creep Testing Machine with Variable Temperature and Environmental and Environmental Conditions for Composite Material(pmmc)",
                        "App. No./Ref No.": "201741046532",
                        "Date of Filing": "26/12/2017",
                        "Date of Publishing": "5/1/2018",
                        "Status": "filed and published",
                        "MITS Affiliated": "yes"
                    }
                ]
            },
            {
                "title": "Reach Us",
                "content": "Madanapalle Institute of Technology & Science Deemed to be University Madanapalle-Kadiri Road NH-42, kurabalakota Mandal, Madanapalle-517325 Andhra Pradesh, India +91-8571-280255; 280706 [emailprotected] Andhra Pradesh, India"
            },
            {
                "title": "Departments",
                "content": [
                    "--> B.Tech Civil Engineering --> <!--",
                    "--> B.Tech Computer Science --> <!--",
                    "--> B.Tech Mechanical --> <!--",
                    "--> B.Tech Electrical & Electronics --> <!--",
                    "--> MBA --> <!--",
                    "--> MCA --> <!--"
                ]
            },
            {
                "title": "Get in touch",
                "content": [
                    "--> Documentation --> <!--",
                    "--> Forums --> <!--",
                    "--> Language Packs --> <!--",
                    "--> Release Status --> <!--",
                    "--> Documentation --> <!--",
                    "Follow US:"
                ]
            }
        ]
    },
  registrar: {
    slug: "registrar",
    name: "Dr. D. Pradeep Kumar",
    designation: "Registrar (I/c)",
    qualification: "Ph.D.",
    image: "https://mits.ac.in/public/uploads/faculty/Dr. D. Pradeep.JPG",
    bio: [
      "Dr. D. Pradeep Kumar is a Professor of Management with an MBA (1988) and a Ph.D. in Strategic Marketing (2004) from Sri Krishnadevaraya University, Anantapur. He has over 36 years of experience — six years in industry and 30 years in academia at institutions such as ISSR Vellore, KSRMCE Kadapa, and MITS.",
      "His areas of expertise include Marketing Management, Human Resource Management, Strategy, Business Analytics and Digital Marketing. He has authored 4 books with leading publishers, published and presented more than 50 papers in reputed journals and conferences, and guided 10 Ph.D. scholars.",
      "He has organized AICTE-funded national and international conferences, delivered numerous guest lectures, and chaired technical sessions. He is a Member of the Board of Studies for AITS Rajampet, SSGS College Guntakal, and JNTUA Anantapuram.",
    ],
    sourceUrl: "https://mits.ac.in/registrar",
  },
  "controller-of-examinations": {
    slug: "controller-of-examinations",
    name: "Dr. Sai Kumar. V",
    designation: "Controller of Examinations (I/c)",
    qualification: "B.E., M.Tech., Ph.D.",
    image: "https://mits.ac.in/images/sai.jpg",
    bio: [
      "Dr. Sai Kumar. V has a professional career of over 18 years of academic and industry experience, of which more than 12 years have been in academic administration. He was awarded a Ph.D. from Rayalaseema University, Kurnool; an M.Tech in VLSI Design from VIT University, Vellore; and a B.E in Electrical and Electronics Engineering from Periyar University, Salem.",
      "His areas of expertise include VLSI, Micro and Nano Electronics, IC Fabrication, Image Processing, Neural Networks and Computer Vision. He has published research papers, filed multiple patents and guided numerous undergraduate and postgraduate students.",
      "At MITS he served as Assistant Controller of Examinations and Controller of Examinations (I/c) under Autonomous status. As the Controller of Examinations (I/c) for MITS Deemed to be University, he has been instrumental in developing examination policies, introducing reforms and digitalizing examination procedures.",
      "He is also the NEP 2020 Cell Coordinator and the NEP SAARTHI Coordinator launched by the UGC to promote NEP 2020 initiatives. He is reachable at coeu@mits.ac.in.",
    ],
    highlights: [
      "Over 11 years managing the examination process",
      "Led digitalization of academic credentials via NAD (UGC ABC)",
      "NEP 2020 Cell Coordinator & NEP SAARTHI Coordinator",
    ],
    sourceUrl: "https://mits.ac.in/controller-of-examinations",
  },
  principal: {
    slug: "principal",
    name: "Dr. P. Ramanathan",
    designation: "Principal",
    qualification: "B.E., M.E., Ph.D.",
    image: "https://mits.ac.in/public/uploads/faculty/a744ebed6a293a48de32e80ba66680c8.JPG",
    bio: [
      "Dr. P. Ramanathan is an eminent academician known for his distinguished record of academic leadership and scholarly excellence. He completed his Ph.D. in Information and Communication Engineering from Anna University in 2010. He completed his M.E. in VLSI Design from PSG College of Technology in 2006 and B.E. in Electronics and Instrumentation Engineering in 1997.",
      "He has distinguished teaching experience of over 25 years with expertise in VLSI Design and Embedded Systems. His profound commitment to excellence in teaching and research is reflected in 27 research articles published in reputed National / International Journals and research papers presented in various National and International Conferences. He has acted as Joint Supervisor for research scholars.",
      "He has completed nearly 20 Swayam NPTEL Courses and has secured NPTEL Domain Scholar Certification in Computer Science and Engineering (Data Science) and Computer Science and Engineering (Systems).",
      "He has worked as Assistant Professor at PSG College of Technology for a period of ten years and later at Manipal University, Dubai Campus. He has been working in Madanapalle Institute of Technology & Science since November 2017. He has served as Vice Principal (Academics) and IQAC Coordinator at MITS Madanapalle. He is currently the Principal of Madanapalle Institute of Technology & Science, Madanapalle, Andhra Pradesh.",
    ],
    highlights: [
      "Excellence in Leadership Award — Inspire Softech Solutions, Chennai (2024)",
      "27 research articles in reputed National / International Journals",
      "NPTEL Domain Scholar — CSE (Data Science) & CSE (Systems)",
      "Nearly 20 Swayam NPTEL Courses completed",
      "Life Member of ISTE and IEI; Fellow of IETE",
      "Over 25 years of teaching experience in VLSI Design & Embedded Systems",
    ],
    documents: [
      { label: "Email: principal@mits.ac.in", url: "mailto:principal@mits.ac.in" },
    ],
    sourceUrl: "https://mits.ac.in/principal",
  },
  ombudsperson: {
    slug: "ombudsperson",
    name: "Prof. Konanki Dasaratha Ramaiah",
    designation: "Ombudsperson",
    qualification: "Ph.D.",
    image: "https://mits.ac.in/images/ram.jpg",
    bio: [
      "Prof. K. Dasaratha Ramaiah is a distinguished academician and scholar in the field of Economics, with over three decades of experience in teaching, research and administration. He obtained his B.A., M.A. and Ph.D. in Economics from Sri Krishnadevaraya University, Ananthapuramu. His doctoral research focused on \u201CFinances of Gram Panchayats in Andhra Pradesh.\u201D",
      "He served at Sri Krishnadevaraya University in several key positions — Registrar; Director, Directorate of Admissions; Head & Chairman, Board of Studies, Department of Economics & Applied Economics; and Coordinator, University Examinations. He also served as Project Officer of Sarva Shiksha Abhiyan (SSA), Ananthapuramu District.",
      "Prof. Ramaiah has published 66 research papers in reputed national and international journals, authored 4 books and edited 3 books. He has guided 24 Ph.D. and 11 M.Phil. scholars in Public Economics, Local Finance and Agricultural Economics.",
      "He has completed three major research projects funded by the UGC and ICSSR on socio-economic themes including \u201CFinancial Resources of Panchayati Raj Institutions,\u201D \u201CTribal Development through Sericulture,\u201D and \u201CWatershed Development and Sustainable Livelihoods.\u201D",
      "He continues to uphold academic integrity and institutional ethics in his current role as the Ombudsperson of MITS (Deemed-to-be University).",
    ],
    highlights: [
      "State Best Teacher Award (2018) by the Hon\u2019ble CM of Andhra Pradesh",
      "Guided 24 Ph.D. and 11 M.Phil. scholars",
      "66 research papers; 4 authored & 3 edited books",
    ],
    documents: [
      {
        label: "Ombudsperson Appointment Order",
        url: "https://mits.ac.in/assets/pdf/admin/Ombudsperson%20Appointment.pdf",
      },
    ],
    sourceUrl: "https://mits.ac.in/ombudsperson",
  },
};

export const leadershipOrder = [
  "chancellor",
  "pro-chancellor",
  "vice-chancellor",
  "registrar",
  "controller-of-examinations",
  "ombudsperson",
];

// ── Deans ─────────────────────────────────────────────────────────────
export interface DeanEntry {
  name: string;
  designation: string;
  school: string;
  qualification: string;
  image: string;
  deptKey?: string; // department to navigate to; faculty name used to open profile
  facultyName?: string;
  externalProfile?: string;
}

export const deansList: DeanEntry[] = [
  
  {
    name: "Dr. Dipankar Roy",
    designation: "Professor & Dean",
    school: "School of Engineering",
    qualification: "Ph.D. (University of Pisa, Italy)",
    image: "https://mits.ac.in/public/uploads/faculty/Deepankar Roy.JPG",
    deptKey: "ce",
    facultyName: "Dr. Dipankar Roy",
    externalProfile: "https://mits.ac.in/facultyprofile/1",
  },
  {
    name: "Dr. Chandra Prakash Gupta",
    designation: "Professor & Dean",
    school: "School of Computing",
    qualification: "Ph.D. (University of Kota)",
    image: "https://mits.ac.in/public/uploads/faculty/Dr. Chandraprakash Guptha.JPG",
    deptKey: "csecs",
    facultyName: "Dr. Chandra Prakash Gupta",
    externalProfile: "https://mits.ac.in/facultyprofile/730",
  },
  {
    name: "Dr. Bhanu Sree Reddy",
    designation: "Professor & Dean",
    school: "School of Management",
    qualification: "Ph.D. (Sri Venkateswara University)",
    image: "https://mits.ac.in/public/uploads/faculty/Bhanu Sree Reddy.JPG",
    deptKey: "mba",
    facultyName: "Dr. Bhanu Sree Reddy",
    externalProfile: "https://mits.ac.in/facultyprofile/701",
  },
];

// ── Department Heads ─────────────────────────────────────────────────
export interface HODEntry {
  name: string;
  department: string;
  image: string;
  deptKey: string; // links to existing department page
  externalProfile?: string;
}

export const departmentHeads: HODEntry[] = [
  { name: "Dr. Vijayakumar Natesan", department: "Civil Engineering", image: "https://mits.ac.in/public/uploads/faculty/Dr. Vijayakumar Natesan.JPG", deptKey: "ce", externalProfile: "https://mits.ac.in/facultyprofile/7" },
  { name: "Dr. Manavaalan Gunasekaran", department: "Electrical & Electronics Engineering", image: "https://mits.ac.in/public/uploads/faculty/Dr. Manavaalan Gunasekaran.JPG", deptKey: "eee", externalProfile: "https://mits.ac.in/facultyprofile/931" },
  { name: "Dr. S. Baskaran", department: "Mechanical Engineering", image: "https://mits.ac.in/public/uploads/faculty/DR S BASKARAN.JPG", deptKey: "me", externalProfile: "https://mits.ac.in/facultyprofile/306" },
  { name: "Dr. Sanjay Kumar C. Gowre", department: "Electronics & Communication Engineering", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sanjay Kumar C. Gowre.JPG", deptKey: "ece", externalProfile: "https://mits.ac.in/facultyprofile/1018" },
  { name: "Dr. M. Sreedevi", department: "Computer Science & Engineering", image: "https://mits.ac.in/public/uploads/faculty/Dr. M. Sreedavi.JPG", deptKey: "cse", externalProfile: "https://mits.ac.in/facultyprofile/140" },
  { name: "Dr. R. Kalpana", department: "CSE (Artificial Intelligence)", image: "https://mits.ac.in/public/uploads/faculty/Dr. R. Kalpana.JPG", deptKey: "ai", externalProfile: "https://mits.ac.in/facultyprofile/80" },
  { name: "Dr. S. Kusuma", department: "CSE (Data Science)", image: "https://mits.ac.in/public/uploads/faculty/c9fcfd6e1946a61df27003a2c31fbb64.JPG", deptKey: "cseds", externalProfile: "https://mits.ac.in/facultyprofile/98" },
  { name: "Dr. B. Persis Urbana IVY", department: "CSE (Cyber Security)", image: "https://mits.ac.in/public/uploads/faculty/Dr. B. Persis Urbana IVY.JPG", deptKey: "csecs", externalProfile: "https://mits.ac.in/facultyprofile/1022" },
  { name: "Dr. S. Padma", department: "CSE (AI & ML)", image: "https://mits.ac.in/public/uploads/faculty/Dr. S. Padma.JPG", deptKey: "aiml", externalProfile: "https://mits.ac.in/facultyprofile/144" },
  { name: "Dr. N. Naveen Kumar", department: "Computer Applications (MCA)", image: "https://mits.ac.in/public/uploads/faculty/Naveen Kumar.JPG", deptKey: "mca", externalProfile: "https://mits.ac.in/facultyprofile/254" },
  { name: "Dr. Prageetha G Raju", department: "Humanities", image: "https://mits.ac.in/public/uploads/faculty/pragathi.png", deptKey: "bsh", externalProfile: "https://mits.ac.in/facultyprofile/704" },
  { name: "Dr. P. Ramesh Reddy", department: "Mathematics", image: "https://mits.ac.in/public/uploads/faculty/DSC_7332.JPG", deptKey: "bsh", externalProfile: "https://mits.ac.in/facultyprofile/354" },
  { name: "Dr. M. Chandra Sekhar", department: "Physics", image: "https://mits.ac.in/public/uploads/faculty/Dr. M. Chandra Sekhar.JPG", deptKey: "bsh", externalProfile: "https://mits.ac.in/facultyprofile/372" },
  { name: "Dr. Renjith Bhaskaran", department: "Chemistry", image: "https://mits.ac.in/public/uploads/faculty/renjithbhaskar.png", deptKey: "bsh", externalProfile: "https://mits.ac.in/facultyprofile/377" },
  { name: "Dr. Sudhakar Beedam", department: "English & Foreign Languages", image: "https://mits.ac.in/public/uploads/faculty/Dr. Sudhakar Beedam.JPG", deptKey: "bsh" },
];

// ── Councils & Governance ────────────────────────────────────────────
export const executiveCouncil = {
  title: "Executive Council",
  description:
    "The Executive Council is the principal governance body of MITS Deemed to be University. It is responsible for the overall administration, financial governance and strategic direction of the institution in accordance with UGC regulations.",
  constitutionUrl:
    "https://mits.ac.in/assets/pdf/admin/Executive%20Council%20Constitution-2025.pdf",
  sourceUrl: "https://mits.ac.in/mits-minutes-ec",
};

export const academicCouncil = {
  title: "Academic Council",
  description:
    "The Academic Council is the apex academic body of the University, responsible for academic policy, curriculum, evaluation reforms and overall academic standards of all schools and departments.",
  constitutionUrl:
    "https://mits.ac.in/assets/pdf/admin/Academic%20Council%20Constitution%20DTBU.pdf",
  sourceUrl: "https://mits.ac.in/mits-minutes-ac",
};

// ── Mandatory Disclosures ────────────────────────────────────────────
export interface DisclosureItem {
  label: string;
  url: string;
}
export interface DisclosureCategory {
  category: string;
  items: DisclosureItem[];
}

export const mandatoryDisclosures: DisclosureCategory[] = [
  {
    category: "Handbooks & Codes",
    items: [
      { label: "MITS Handbook — Service Rules", url: "https://mits.ac.in/assets/pdf/admin/Staff%20Hand%20Book%20Service%20Rules-2024-25.pdf" },
      { label: "MITS Student Handbook", url: "https://mits.ac.in/assets/pdf/admin/Code%20of%20Conduct-Student.pdf" },
      { label: "Code of Conduct for BoG / Principal", url: "https://mits.ac.in/assets/pdf/admin/Code-of-Conduct-for-BoG-Principal.pdf" },
      { label: "MITS Strategic Plan 2022–27", url: "https://mits.ac.in/assets/pdf/admin/Strategic%20Plan%202022-27.pdf" },
      { label: "Professional Code of Conduct", url: "https://mits.ac.in/assets/pdf/admin/Professional%20Code%20of%20Conduct.pdf" },
    ],
  },
  {
    category: "UGC",
    items: [
      { label: "UGC Guidelines", url: "https://mits.ac.in/assets/pdf/admin/UGC%20AUTONOMOUS%20GUIDELINES.pdf" },
      { label: "UGC Undertaking", url: "https://mits.ac.in/assets/pdf/admin/UGC-Undertaking.pdf" },
      { label: "UGC Approval Letter for Autonomous Status", url: "https://mits.ac.in/assets/pdf/admin/Extension%20of%20Autonomous%20Status.pdf" },
      { label: "2(f) & 12(B) Certificates", url: "https://mits.ac.in/assets/pdf/admin/2f%20&%2012B.pdf" },
    ],
  },
  {
    category: "Governance & Finance",
    items: [
      { label: "Executive Council Constitution 2025", url: "https://mits.ac.in/assets/pdf/admin/Executive%20Council%20Constitution-2025.pdf" },
      { label: "Minutes of 2nd Executive Council Meeting", url: "https://mits.ac.in/assets/pdf/admin/EC%20Minutes%202nd%20Meeting.pdf" },
      { label: "Minutes of 1st Executive Council Meeting", url: "https://mits.ac.in/assets/pdf/admin/EC%20Minutes%201st%20Meeting.pdf" },
      { label: "Minutes of Governing Council Meeting 2014–2025", url: "https://mits.ac.in/assets/pdf/admin/Governing%20Council%20Minutes.pdf" },
      { label: "Minutes of Academic Council Meeting 2014–2025", url: "https://mits.ac.in/assets/pdf/admin/Academic%20Council%20Minutes.pdf" },
      { label: "Delegation of Financial Power", url: "https://mits.ac.in/assets/pdf/admin/DELEGATION%20OF%20FINANCIAL-POWER.pdf" },
      { label: "Finance Committee (DTBU) 2025–26", url: "https://mits.ac.in/assets/pdf/admin/Finance%20Committee%202025-26.pdf" },
      { label: "Finance Committee 2015–16 to 2025–26", url: "https://mits.ac.in/assets/pdf/admin/Finance%20Committee%20Archive.pdf" },
    ],
  },
  {
    category: "Audited Financial Statements",
    items: [
      { label: "Audited Statement 2024–25", url: "https://mits.ac.in/assets/pdf/admin/Audit%20Report%202024-25.pdf" },
      { label: "Audited Statement 2023–24", url: "https://mits.ac.in/assets/pdf/admin/Audit%20Report%202023-24.pdf" },
      { label: "Audited Statement 2022–23", url: "https://mits.ac.in/assets/pdf/admin/Audit%20Report%202022-23.pdf" },
      { label: "Audited Statement 2021–22", url: "https://mits.ac.in/assets/pdf/admin/Audit%20Report%202021-22.pdf" },
      { label: "Audited Statement 2020–21", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202020-21-min.pdf" },
      { label: "Audited Statement 2019–20", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202019-20.pdf" },
      { label: "Audited Statement 2018–19", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202018-19.pdf" },
      { label: "Audited Statement 2017–18", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202017-18.pdf" },
      { label: "Audited Statement 2016–17", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202016-17.pdf" },
      { label: "Audited Statement 2015–16", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202015-16.pdf" },
      { label: "Audited Statement 2014–15", url: "https://mits.ac.in/assets/pdf/admin/AUDITED%20STATEMENT%202014-15.pdf" },
    ],
  },
  {
    category: "AICTE Mandatory Disclosures",
    items: [
      { label: "AICTE Mandatory Disclosure 2025–26", url: "https://mits.ac.in/assets/pdf/admin/MITS%20Mandatory%20Disclosure%202025-26.pdf" },
      { label: "AICTE Mandatory Disclosure 2024–25", url: "https://mits.ac.in/assets/pdf/admin/Mandatory%20Disclosures_2024-25.pdf" },
      { label: "AICTE Mandatory Disclosure 2018–19", url: "https://mits.ac.in/assets/pdf/admin/Mandatory%20Disclosures_2018-19.pdf" },
    ],
  },
  {
    category: "AICTE Approvals",
    items: [
      { label: "AICTE Approval 2026–27", url: "https://mits.ac.in/assets/pdf/admin/EOA%20Report%202026-2027.PDF" },
      { label: "AICTE Approval 2025–26", url: "https://mits.ac.in/public/uploads/affiliations/AICTE%20EoA%202026-26%20[16.01.2026].pdf" },
      { label: "AICTE Approval 2024–25", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202024-2025.PDF" },
      { label: "AICTE Approval 2023–24", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202023-2024.PDF" },
      { label: "AICTE Approval 2022–23", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202022-2023.PDF" },
      { label: "AICTE Approval 2021–22", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202021-2022.PDF" },
      { label: "AICTE Approval 2020–21", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202020-2021.PDF" },
      { label: "AICTE Approval 2019–20", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202019-2020.PDF" },
      { label: "AICTE Approval 2018–19", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202018-2019.PDF" },
      { label: "AICTE Approval 2017–18", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202017-2018.PDF" },
      { label: "AICTE Approval 2016–17", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202016-2017.PDF" },
      { label: "AICTE Approval 2015–16", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202015-2016.PDF" },
      { label: "AICTE Approval 2014–15", url: "https://mits.ac.in/public/uploads/affiliations/EOA%20Report%202014-2015.PDF" },
    ],
  },
  {
    category: "Board of Studies (BoS) Documents",
    items: [
      { label: "BoS — Computer Science & Technology", url: "https://mits.ac.in/assets/pdf/admin/BOS-CST.pdf" },
      { label: "BoS — Computer Science & Information Technology", url: "https://mits.ac.in/assets/pdf/admin/BOS-CSIT.pdf" },
      { label: "BoS — Department of Management Studies (MBA)", url: "https://mits.ac.in/assets/pdf/admin/BOS-MBA.pdf" },
      { label: "BoS — Department of Computer Applications (MCA)", url: "https://mits.ac.in/assets/pdf/admin/BOS-MCA.pdf" },
      { label: "BoS — Department of Mathematics", url: "https://mits.ac.in/assets/pdf/admin/BOS-Mathematics.pdf" },
      { label: "BoS — Department of Physics", url: "https://mits.ac.in/assets/pdf/admin/BOS-Physics.pdf" },
      { label: "BoS — Department of Chemistry", url: "https://mits.ac.in/assets/pdf/admin/BOS-Chemistry.pdf" },
      { label: "BoS — Department of English & Foreign Languages", url: "https://mits.ac.in/assets/pdf/admin/BOS-English.pdf" },
      { label: "BoS — Department of Humanities", url: "https://mits.ac.in/assets/pdf/admin/BOS-Humanities.pdf" },
    ],
  },
  {
    category: "Accreditations & Certifications",
    items: [
      { label: "MITS TEQIP Revised IDP", url: "https://mits.ac.in/assets/pdf/admin/TEQIP-IDP.pdf" },
      { label: "SWAYAM-NPTEL Certificate", url: "https://mits.ac.in/assets/pdf/admin/MITS-NPTEL.pdf" },
      { label: "ISO 21001:2018 Certificate", url: "https://mits.ac.in/assets/pdf/admin/Madanapalle%20Institute%20of%20Technology%20&%20Science-ISO.pdf" },
      { label: "NABL Accredited Certificate (Labs)", url: "https://mits.ac.in/assets/pdf/admin/Certificate%20TC-15590.pdf" },
      { label: "Fire Safety NOC 2022–2027", url: "https://mits.ac.in/assets/pdf/admin/Fire%20safety%20NOC%202022-2027.pdf" },
    ],
  },
  {
    category: "NBA Accreditations",
    items: [
      { label: "NBA — PG MBA (2025–28)", url: "https://mits.ac.in/public/uploads/affiliations/MBA%20NBA%20Cetificate-2025.pdf" },
      { label: "NBA — PG MCA (2025–28)", url: "https://mits.ac.in/public/uploads/affiliations/MCA%20NBA%20Cetificate-2025.pdf" },
      { label: "NBA — UG Programmes Civil, CSE, ECE, EEE, ME (2025–28)", url: "https://mits.ac.in/public/uploads/affiliations/Madanapalle%20Institute%20of%20Technology%20_%20Science,%20Andhra%20Pradesh19_6_2025_12_45_57.pdf" },
      { label: "NBA — PG MCA (2024–25)", url: "https://mits.ac.in/public/uploads/affiliations/MCA%20NBA%202024-25.pdf" },
      { label: "NBA — UG CST (2024–27)", url: "https://mits.ac.in/public/uploads/affiliations/NBA%20-%20CST-%20confirmation%20-till%2030.6.2027.pdf" },
      { label: "NBA — UG Programmes Civil, CSE, ECE, EEE, ME (2022–25)", url: "https://mits.ac.in/public/uploads/affiliations/NBA%20UG%202022-25.pdf" },
      { label: "NBA — PG MCA (2022–24)", url: "https://mits.ac.in/public/uploads/affiliations/MCA%20NBA%202022-24.pdf" },
      { label: "NBA — PG MBA (2022–25)", url: "https://mits.ac.in/public/uploads/affiliations/MBA%20NBA%202022-25.pdf" },
      { label: "NBA — UG Programmes CSE, ECE, EEE, ME & PG MBA (2019–22)", url: "https://mits.ac.in/public/uploads/affiliations/NBA%202019-22.pdf" },
      { label: "NBA — UG Civil & PG MCA (2019–21)", url: "https://mits.ac.in/public/uploads/affiliations/NBA%20Civil%202019-21.pdf" },
    ],
  },
  {
    category: "Annual Reports",
    items: [
      { label: "Annual Report 2024–25", url: "https://mits.ac.in/assets/pdf/admin/AnnualReport%202024-25.pdf" },
      { label: "Annual Report 2023–24", url: "https://mits.ac.in/assets/pdf/admin/AnnualReport%202023-24.pdf" },
      { label: "Annual Report 2022–23", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202022-23.pdf" },
      { label: "Annual Report 2021–22", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%20AY%202021-22.pdf" },
      { label: "Annual Report 2018–19", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202018-19.pdf" },
      { label: "Annual Report 2017–18", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202017-18.pdf" },
      { label: "Annual Report 2016–17", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202016-17.pdf" },
      { label: "Annual Report 2015–16", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202015-16.pdf" },
      { label: "Annual Report 2014–15", url: "https://mits.ac.in/assets/pdf/admin/Annual%20Report%202014-15.pdf" },
    ],
  },
  {
    category: "Compliance & Other Disclosures",
    items: [
      { label: "Implementing Food Safety & Standard Act", url: "https://mits.ac.in/assets/pdf/admin/Food%20Safety%20Act.pdf" },
      { label: "Insurance for Students (valid up to June 2025)", url: "https://mits.ac.in/assets/pdf/admin/Student%20Insurance%202025.pdf" },
    ],
  },
];

// ── PDF references ───────────────────────────────────────────────────
export const bosPdfUrl =
  "https://mits.ac.in/assets/pdf/admin/MITS-DTBU-BOS-AY(2025-2026).pdf";
export const organogramPdfUrl =
  "https://mits.ac.in/assets/pdf/admin/Organogram%20-%20MITS%20Deemed%20to%20be%20University.pdf";

// ── About sections (used for mega menu & hub page) ───────────────────
export interface AboutSectionDef {
  key: string;
  label: string;
  href: string;
  description: string;
}

export const aboutSections: AboutSectionDef[] = [
  { key: "leadership", label: "Leadership", href: "/about/leadership", description: "Chancellor, Pro-Chancellor, Vice-Chancellor and statutory officers." },
  { key: "academic-leadership", label: "Academic Leadership", href: "/about/academic-leadership", description: "Deans of Academics, Engineering, Computing and Management." },
  { key: "deans", label: "Deans", href: "/about/deans", description: "School Deans steering each academic vertical at MITS." },
  { key: "department-heads", label: "Department Heads", href: "/about/department-heads", description: "Heads of every academic department across the University." },
  { key: "executive-council", label: "Executive Council", href: "/about/executive-council", description: "Apex governance body responsible for institutional administration." },
  { key: "academic-council", label: "Academic Council", href: "/about/academic-council", description: "Highest academic authority for curriculum and academic reforms." },
  { key: "bos", label: "Board of Studies (BoS)", href: "/about/bos", description: "Departmental academic boards across schools." },
  { key: "organogram", label: "Organogram", href: "/about/organogram", description: "Organisational structure of MITS Deemed to be University." },
  { key: "important-links", label: "Important Links", href: "#", description: "NIRF, NAAC, Accreditations, Public Self Disclosures, and Mandatory Disclosures." },
];
