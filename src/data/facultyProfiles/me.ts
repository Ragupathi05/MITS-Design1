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

export const meProfiles: Record<string, FacultyProfile> = {
    "Dr. C. Yuvaraj": {
      name: "Dr. C. Yuvaraj",
      designation: "Professor & Vice Chancellor (I/c)",
      email: "vicechancellor@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/principal.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Metal Matrix Composites", "Branch": "Mechanical Engineering", "College Name/University": "Bangalore University", "Year of Passing": "2009"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Manufacturing Science and Engineering", "Branch": "Mechanical Engineering", "College Name/University": "University Visveswaraiah College of Engineering, Bangalore University, Bangalore.", "Year of Passing": "2000"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "M S Ramaiah Institute of Technology, Bangalore University, Bangalore.", "Year of Passing": "1991"}
          ]
        },
        {
          title: "Research Areas",
          content: "Composite Materials, Machining, Coatings and Tribology."
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57192235789"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/274702"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=2Egv9JwAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "10"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "6", "Details of Research Publication": "\"Facile Single-Step Electrodeposition of Flower-Shaped Cu doped ZnO Nanostructures for optical, photoluminescence and photocatalytic assessment.\" Optical Materials (2025): 117624.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Details of Research Publication": "\"Realization of CO2 gas sensors and broadband photodetectors using metal/high-k CeO2/p-Si heterojunction.\" Ceramics International 50.18 (2024): 31845-31858.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "8", "Details of Research Publication": "\"Optical, vibrational, and photoluminescence properties of holmium‐doped boro‐bismuth‐germanate glasses.\" Luminescence 39.7 (2024): e4822.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "\"Performance evaluation of developed new textured tools during turning of AISI 321 material.\" Materials and Manufacturing Processes 39.5 (2024): 688-699.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "11", "Details of Research Publication": "\"Structure, morphology, photonconversion and energy transfer characteristics of Er3+/Yb3+: BaYF5 nanocrystals synthesized by hydrothermal method for photovoltaics.\" Ceramics International 49.16 (2023): 26879-26889.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "\"UV-to-NIR broadband photodetecting sensors using n-TiO2 nanorods/p-Si heterojunction in lateral and vertical configurations.\" Applied Physics A 129.6 (2023): 412.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "4", "Details of Research Publication": "“Investigation on turning process performance during machining of 15-5PH stainless steel material with eco-friendly machining technique.” Materials Today: Proceedings.    Scopus    Conference    None", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "\"Micro-structure and self-lubricant properties of powder mixed electrical discharge metal matrix composite coating.\" Proceedings of the Institution of Mechanical Engineers, Part E: Journal of Process Mechanical Engineering 236.4 (2022): 1369-1376.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "\"Electric discharge coating process variation and its wear properties.\" International Journal of Surface Science and Engineering 15.2 (2021): 131-151.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "5", "Details of Research Publication": "\"High performance, self-powered and thermally stable 200–750 nm spectral responsive gallium nitride (GaN) based broadband photodetectors.\" Solar Energy Materials and Solar Cells 225 (2021): 111033.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "2", "Details of Research Publication": "\"A comparison on microstructure and mechanical properties of electric discharge metal matrix nickel and silica composite coating on duplex stainless steel.\" Journal of Composite Materials 55.4 (2021): 507-520.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "3", "Details of Research Publication": "\"Statistical analysis of current–voltage characteristics in Au/Ta2O5/n-GaN Schottky barrier heterojunction using different methods.\" Applied Physics A 127.1 (2021): 46.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "2", "Details of Research Publication": "\"Evaluation of electrical parameters of Ni/n-type Si Schottky barrier diodes using polyvinyl alcohol (PVA) as an interfacial layer.\" AIP Conference Proceedings. Vol. 2269. No. 1. AIP Publishing LLC, 2020.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "14", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "2", "Details of Research Publication": "\"Influence of silica on microstructural modification of electrical discharge composite coating and its wear performance. SILICON (2020).\"", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "15", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "10", "Details of Research Publication": "\"Near infrared broadband and visible upconversion emissions of erbium ions in oxyfluoride glasses for optical amplifier applications.\" Optics & Laser Technology 127 (2020): 106167.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "16", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "3", "Details of Research Publication": "\"Electrical discharge metal matrix composite coating on duplex stainless steel and its wear behavior under different environmental conditions.\" Materials Research Express 6.9 (2019): 0965c5.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "17", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "2", "Details of Research Publication": "\"Synthesis of electrical discharge metal matrix composite coating through compacted semi-sintered electrode and its tribological studies.\" Journal of the Brazilian Society of Mechanical Sciences and Engineering 41.5 (2019): 213.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "18", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "2", "Details of Research Publication": "\"Effect of feed rate on difficult to cut metals on surface roughness and tool wear using surface treated and untreated tools.\" Procedia Manufacturing 30 (2019): 216-223.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "19", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "2", "Details of Research Publication": "\"Analysis and optimization of metal injection molding feedstock SS 316L for rheological properties.\" Journal of The Institution of Engineers (India): Series D 99.2 (2018): 177-184.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "20", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "2", "Details of Research Publication": "\"Development and experimental investigation of mechanical and microstructural behaviour 0f welded dual phase steels (DPS).\" (2018).", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "21", "Publication Affiliation": "MITS", "Academic Year": "2017-18", "Author Position": "2", "Details of Research Publication": "\"Investigation of Mechanical Properties of a Composite Tubular Electrode Based Hard coating on Mild Steel Substrate.\"", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "22", "Publication Affiliation": "MITS", "Academic Year": "2016-17", "Author Position": "2", "Details of Research Publication": "\"Application of Taguchi Method for Optimizing the Parameters of Thermal Properties of Al/SiC-Gr Hybrid Composites.\" Bonfring International Journal of Advances in Image Processing 6.4 (2016): 28.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "23", "Publication Affiliation": "MITS", "Academic Year": "2016-17", "Author Position": "4", "Details of Research Publication": "\"Fabrication of Cast Aluminium-Silicon (Al-Si) and Aluminium-Magnesium (Al-Mg) Alloys and Their Properties.\" Acta Metallurgica Slovaca 22.4 (2016): 212-221.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2016-17", "Project/Event": "Project", "Role": "PI", "Title": "Development of High Strength Material for Micro Air Vehicle Structures", "Amount": "25,000", "Agency": "Institute of Engineers, Kolkatta"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2016-17", "Project/Event": "Event - Seminar", "Role": "PI", "Title": "Recent Advances in Additive Manufacturing", "Amount": "1,00,000", "Agency": "DST, SERB, New Delhi - Seminar"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2016-17", "Project/Event": "Project", "Role": "Co-PI", "Title": "Investigation and Characterization of Electrical Discharge Coated (EDC) Alloys for Mitigation of Biological Fouling on Maritime Structures", "Amount": "38,37,690", "Agency": "DST-SERB - ECRA"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2013-14", "Project/Event": "Event - FDP", "Role": "PI", "Title": "Fatigue & Fracture Mechanics in FE Analysis", "Amount": "7,00,000", "Agency": "AICTE - FDP"},
            {"S.No": "5", "Affiliation": "MITS", "Academic Year": "2013-14", "Project/Event": "Project", "Role": "PI", "Title": "Design and Fabrication of Multi-Crop Smashing Combination Thresher", "Amount": "50,000", "Agency": "Institute of Engineers, Kolkatta"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "437596-001", "Title of the Patent": "Multi-Sieving Machine", "Status": "Examination"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "429724-001", "Title of the Patent": "Textured turning cutting insert", "Status": "Granted"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "443252-001", "Title of the Patent": "Feedstock Filament Extuder", "Status": "Granted"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "429875-001", "Title of the Patent": "Dual surface textured tool", "Status": "Granted"},
            {"S.No": "5", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "429725-001", "Title of the Patent": "Cutting tool for turning operation", "Status": "Examination"},
            {"S.No": "6", "Affiliation": "MITS", "Academic Year": "2023-24", "Application ID": "201941017448", "Title of the Patent": "A Novel Hole Making Technique During The Thermoforming On Plastic Sheets", "Status": "Granted"},
            {"S.No": "7", "Affiliation": "MITS", "Academic Year": "2021-22", "Application ID": "201941027725", "Title of the Patent": "Removal Apparatus For Cylindrical Polymer Matrix Composite (Pmc) Parts Fabricated By Compression Cum Extruder Method", "Status": "Granted"},
            {"S.No": "8", "Affiliation": "MITS", "Academic Year": "2017-18", "Application ID": "201741046532A", "Title of the Patent": "New Invention of Low Cost Creep Testing Machine with Variable Temperature and Environmental and Environmental Conditions for Composite Material (pmmc)", "Status": "Examination"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Ratified as Professor & Principal by JNTUA, Ananthapuramu.",
            "Worked as BOS Member for the Dept. of Mechanical Engg., JNTUA, Ananthapuramu in the academic year 2020 & 2021.",
            "Worked as a Committee Member for APECET during 2015-16.",
            "Senior Life Member: Indian Society for Technical Education (ISTE), Membership No. SLM – 030 (dt: 20.09.2024).",
            "Life Member: Indian Society for Technical Education (ISTE), Membership No. 68296 (year: 2010).",
            "Life Member: Fellow of Institute of Engineers (FIE), Membership No. F-114969-1.",
            "Life Member: International Association of Engineers (IAENG), Membership Number: 127904.",
            "At the State Level Committees: Worked as Committee Member, APECET 2016.",
            "At the University level: Member in BoS, Dept. of Mechanical Engineering, JNTUA, Ananthapuramu, Andhra Pradesh.",
            "Received “ISTE - Best Engineering College Principal Award for 2023”, presented through the Sri G. Krishna Kumar Memorial State Award by the ISTE AP Section on 23rd September 2024.",
            "Received Best Principal Award from JNT University Anantapur, Ananthapuramu, Andhra Pradesh during the “University Principal Awards 2023” on 13th December 2023.",
            "“Best Educationist Award” received from International Institute of Education and Management, New Delhi in the year 2011 for outstanding achievements and remarkable role in the field of education.",
            "“Rashtriya Vidya Gaurav Gold Medal Award” received from Indian Solidarity Council, New Delhi in the year 2011."
          ]
        }
      ]
    },

    "Dr. I. Arun": {
      name: "Dr. I. Arun",
      designation: "Professor",
      email: "draruni@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Arun.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Tribology", "Branch": "Production Engineering", "College Name/University": "National Institute of Technology, Tiruchirappalli", "Year of Passing": "2015"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Computer Aided Design", "Branch": "Mechanical Engineering", "College Name/University": "Government College of Engineering / Anna University", "Year of Passing": "2009"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Sona College of Technology / Anna University", "Year of Passing": "2006"}
          ]
        },
        {
          title: "Research Areas",
          content: "Coating Tribology/ Space Materials"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=56199283000"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/273096"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=9WlF8UAAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "7"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Hot Corrosion Behaviour of Electrical Discharge Coated Duplex Stainless Steel Under Sulfur Environment", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Electrical discharge shape memory alloying of Ti-6Al-4V: Mechanisms and Mechanical properties", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Micro-Structure and Self-Lubricant Properties of Powder Mixed Electrical Discharge Metal Matrix Composite Coating", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Electric Discharge Coating process variation and its wear Properties", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "A comparison on microstructure and mechanical properties of electric discharge metal matrix nickel and silica composite coating on duplex stainless steel", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Influence of Silica on microstructural modification of electrical discharge composite coating and its wear performance", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Electrical discharge metal matrix composite coating on duplex stainless steel and its wear behaviour under different environmental conditions", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "4", "Details of Research Publication": "Effect of feed rate on difficult to cut metals on surface roughness and tool wear using surface treated and untreated tools", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Synthesis of electrical discharge metal matrix composite coating through compacted semi‑sintered electrode and its tribological studies", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "1", "Details of Research Publication": "Synthesis of electric discharge alloyed nickel–tungsten coating on tool steel and its tribological studies", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "1", "Details of Research Publication": "Modelling and analysis of ElectricalDischarge Alloying through Taguchi technique", "Indexing": "SCI", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2014-15", "Author Position": "1", "Details of Research Publication": "Development of carbide intermetallic layer by electric discharge alloying on AISI-D2 tool steel and its wear resistance", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2022-23", "Project /Event": "Event", "Role": "Principal Investigator", "Title": "Defence Research and Innovation Summit", "Amount": "1,88,000", "Agency": "Science and Engineering Research Board (SERB)"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2016-17", "Project /Event": "Project", "Role": "Principal Investigator", "Title": "Investigation and characterization of Electrical Discharge Coated (EDC) alloys for mitigation of biological fouling on maritime structures", "Amount": "38,39,000", "Agency": "Science and Engineering Research Board (SERB)"}
          ]
        },
        {
          title: "Consultancy",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2023-2024", "Client/Organization": "RGM College Of Engineering and Technology", "Project": "Pin on Disc Tribo-meter", "Amount": "4,500"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2023-2024", "Client/Organization": "RGM College Of Engineering and Technology", "Project": "Pin on Disc Tribo-meter", "Amount": "4,500"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2022-2023", "Client/Organization": "RGM College Of Engineering and Technology", "Project": "Pin on Disc Tribo-meter", "Amount": "2,500"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2022-2023", "Client/Organization": "Department of Mechanical Engineering, SVCET, Chittoor", "Project": "Surface Roughness & Optical Profilometer", "Amount": "3,000"},
            {"S.No": "5", "Affiliation": "MITS", "Academic Year": "2022-2023", "Client/Organization": "Department of Mechanical Engineering, JNTUK", "Project": "Electrical Discharge Machine", "Amount": "2,000"},
            {"S.No": "6", "Affiliation": "MITS", "Academic Year": "2022-2023", "Client/Organization": "Department of Mechanical Engineering, JNTUK", "Project": "Pin on Disc Tribo-meter", "Amount": "12,000"}
          ]
        }
      ]
    },

    "Dr. V. Vamsidhar": {
      name: "Dr. V. Vamsidhar",
      designation: "Assoc. Professor",
      email: "vamsi6@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/vamsidhar.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Thermal Engineering", "Branch": "Mechanical Engineering", "College Name/University": "J.N.T.U.A, Anantapuram", "Year of Passing": "2019"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Quality, Reliability, OR", "Branch": "Mechanical Engineering", "College Name/University": "Indian Statistical Institute, Kolkatta", "Year of Passing": "1992"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "S.V.U. College of Engineering, Tirupathi", "Year of Passing": "1990"}
          ]
        },
        {
          title: "Conferences & Workshops attended",
          content: [
            "A Three-day International Conference on Transformation in Engineering Education (ICTIEE 2017) organized by IUCEE at Vardhaman College of Engineering, Hyderabad during 06.01.17 to 08.01.17.",
            "A Two Day International Conference on “Conversations for Advancing” \"Digital India\" and \"Make in India” - “Digital Bharat 2015” organized by FICCI at FICCI, Federation House, New Delhi from 14th May to 15th May 2015",
            "International conference in Transformations in Engineering Education (ICTIEE 2015). It is a four day International conference, among these first two days were pre-conference workshops conducted by the BMS College of Engineering, Bangalore and collaborating with Indo-US collaboration for Engineering Education (IUCEE) during 5-8 January 2015.",
            "A workshop on TEQIP-II : Good Governance, Leadership and Management on 14th - 15th October 2014 at Metropolitan Hotel, Near Bangla Sahib Gurudwara Road, New Delhi.",
            "The Confederation of Indian Industry (CII) organized the tenth edition of its “India Innovation Summit”, on 8th & 9th August 2014 at Hotel ITC Royal Gardenia in Bangalore.",
            "\"QUALITY EDUCATION IN PRIVATE ENGINEERING COLLEGES\" on 8 - July, 2014 at JNTU Engineering College Campus.",
            "Participated in the Second World Summit on Accreditation – WOSA-2014 on the theme \"International Recognition of Educational Qualifications\" organized by National Board of Accreditation during 8-10 March 2014 at Hotel Ashok, New Delhi.",
            "A five day training program at Chandigarh from 16-12-13 to 20-12-13. The training is called Pedagogical Training (Module-I) and was conducted by Department of Education and Educational Management from National Institute of Technical Teachers’ Training and Research (NITTTR), Chandigarh.",
            "“CII’s higher education conclave” organized by The Confederation of Indian Industry (CII) held at Hotel Le Meridien, Coimbatore on Nov. 29, 30, 2013. The theme of the conclave is Transformational Change in Higher Education: Global Excellence through Governance, Research and Innovation.",
            "A One Day National Workshop on “Advanced Trends in IC Engines and Combustion” hosted by Department of Mechanical Engineering, JNTUH College of Engineering, Hyderabad on 28th February 2013 to mark the retirement of Prof. K. Rajagopal, Former Vice- Chancellor of JNTU.",
            "The meeting on National Knowledge Functional Hub organized by FICCI on 23rd May, 2013 at GW Precision Tools India Pvt. Ltd. Bangalore."
          ]
        }
      ]
    },

    "Dr. S. Baskaran": {
      name: "Dr. S. Baskaran",
      designation: "Assoc. Professor & Head",
      email: "drbaskarans@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Baskaran.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Tribology", "Branch": "Production Engineering", "College Name/University": "National Institute of Technology, Trichy", "Year of Passing": "2015"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Manufacturing Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Jayaram College of Engineering and Technology, Trichy", "Year of Passing": "2007"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Jayaram College of Engineering and Technology, Trichy", "Year of Passing": "2004"}
          ]
        },
        {
          title: "Research Areas",
          content: "Sustainable Machining, Tribology, Surface Engineering, Additive Manufacturing, Machine Learning"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=56630534200"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/273109"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.co.in/citations?user=jHV9xVwAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "12"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "Optimization and prediction of tribological performance in HNT/LLDPE composites for rotational molding using machine learning and Taguchi – TOPSIS. 2025, Vol. 0(0) 1 – 29 DOI: 10.1177/08927057251411898", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Experimental studies on dilution, microstructural, mechanical and wear characteristics of Inconel 718 deposited over stainless steel 304 employing cold metal transfer process. Materials Letters 381 (2025) 137795, https://doi.org/10.1016/j.matlet.2024.137795.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "Hot Corrosion Behavior of Electrical Discharge‑Coated Duplex Stainless Steel Under Sulfur Environment. Trans Indian Inst Met, 2024, Aug 8,2024, 1-8, https://doi.org/10.1007/s12666-024-03432-7.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Towards sustainability assessment, energy consumption, and carbon emissions in cryogenic drilling of Alloy https://doi.org/10.1007/s00170-024-13144-3, 05 February 2024, Volume 131, pages 1151–1165.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "5", "Details of Research Publication": "Identification of tool wear and surface morphology measurements in sustainable milling of Al 6082 hybrid metal matrix composite.DOI: 10.1016/j.jmrt.2023.11.109.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "A mathematical approach of evaluating sustainability indicators in milling of aluminium hybrid composite by different eco-friendly cooling strategies. https://doi.org/10.1016/j.susmat.2023.e00605", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "3", "Details of Research Publication": "Investigations on effectiveness of transfer layer on specific wear rate and coefficient of friction during dry sliding of hybrid polymer matrix composites.  https://doi.org/10.1002/pc.26371", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "5", "Details of Research Publication": "Influence of Optimization Techniques on Wire Electrical Discharge Machining of Ti–6Al–2Sn–4Zr–2Mo Alloy using Modeling Approach. https://doi.org/10.1007/s10904-021-01953-y", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "Development of multi functioning organic waste shredding machine for natural compost.  Lecture Notes in Mechanical Engineering.  https://link.springer.com/chapter/10.1007/978-981-15-4739-3_90", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "7", "Details of Research Publication": "Investigation on slurry pot erosion wear behaviour of AA5083 aluminium alloy. https://link.springer.com/chapter/10.1007/978-981-15-4739-3_47", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "4", "Details of Research Publication": "Wear behaviour of whisker-reinforced ceramic tools in the turning of Inconel 718 assisted by an atomized spray of solid lubricants. https://www.sciencedirect.com/science/article/abs/pii/S0301679X20300785", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "2", "Details of Research Publication": "A review on the suitability of wire arc additive manufacturing (WAAM) for stainless steel 316. https://aip.scitation.org/doi/pdf/10.1063/5.0004148", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "2", "Details of Research Publication": "Corrosion behavior of detonation gun sprayed cermet coatings on AA5083. https://www.tandfonline.com/doi/abs/10.1080/02670844.2020.1807096", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "14", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "4", "Details of Research Publication": "Use of Atomized Spray Cutting Fluid Technique for the Turning of a Nickel Base Superalloy. https://www.tandfonline.com/doi/abs/10.1080/10426914.2020.1832687", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "15", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "3", "Details of Research Publication": "Experimental investigation of tool wear in cryogenic treated insert during end milling of hard Ti alloy. https://link.springer.com/article/10.1007/s40430-019-1612-3", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "16", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "3", "Details of Research Publication": "Investigation of cryogenically treated PVD TiAlN/NbN coated carbide inserts in end milling of hard Ti alloy.  https://www.astm.org/DIGITAL_LIBRARY/JOURNALS/ TESTEVAL/PAGES/JTE20180728.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "17", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "3", "Details of Research Publication": "Statistical evaluation and performance analysis of electrical discharge machining (EDM) characteristics of hard Ti-6Al-2Sn-4Zr-2Mo alloy. https://iopscience.iop.org/article/10.1088/2053-1591/ab06da/meta", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "18", "Publication Affiliation": "MITS", "Academic Year": "2017-18", "Author Position": "1", "Details of Research Publication": "Statistical analysis of Co-efficient of friction during dry sliding wear behaviour of TiC reinforced Aluminium Metal Matrix Composites. https://www.sciencedirect.com/science/article/pii/S2214785318305856", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "19", "Publication Affiliation": "Others", "Academic Year": "2014-15", "Author Position": "1", "Details of Research Publication": "Investigations on dry sliding wear behavior of in situ casted AA7075–TiC metal matrix composites by using Taguchi technique. https://www.sciencedirect.com/science/article/abs/pii/S0261306914002672", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2013-14", "Author Position": "3", "Details of Research Publication": "Multi-objective optimization of upsetting parameters of Al–TiC metal matrix composites: A grey Taguchi approach. https://journals.sagepub.com/doi/abs/10.1177/0954405413519434", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2013-14", "Author Position": "1", "Details of Research Publication": "Taguchi Grey Relational Analysis of Dry Sliding Wear Behaviour of Annealed AA7075-TiC metal matrix composites. https://www.scientific.net/AMM.541-542.258", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2013-14", "Author Position": "1", "Details of Research Publication": "Effect of Heat Treatment on Wear Behavior of Hot Extruded AA7075 - 4%TiC in-situ Metal Matrix Composite.  https://www.scientific.net/AMM.541-542.263", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "23", "Publication Affiliation": "Others", "Academic Year": "2012-13", "Author Position": "2", "Details of Research Publication": "Synthesis and Forming Behavior of In- Situ AA 7075 - TiC Composites. https://www.scientific.net/AMR.651.251", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2019-20", "Project /Event": "Project", "Role": "Principal Investigator", "Title": "Investigation and identification of machinability challenges of Hadfield steel through novel sustainable machining approach", "Amount": "18,93,922", "Agency": "AICTE-RPS"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2018-19", "Project /Event": "Project", "Role": "Principal Investigator", "Title": "Investigations on wear resistance of high strength aluminium alloy under cryogenic treatment", "Amount": "50,000", "Agency": "Institute Seed Grant"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2017-18", "Project /Event": "Project", "Role": "Principal Investigator", "Title": "Design and Fabrication of Multi-Function Organic Waste Shredder Machine", "Amount": "12,000", "Agency": "Institute Seed Grant"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2023-24", "Project /Event": "FDP", "Role": "FDP Coordinator", "Title": "Sustainable Machining for Tomorrow: Machine Learning Based Approach", "Amount": "3,50,000", "Agency": "AICTE ATAL"},
            {"S.No": "5", "Affiliation": "MITS", "Academic Year": "", "Project /Event": "FDP", "Role": "Coordinator", "Title": "Contemporary progressions, Challenges and Issues in 3D Metal Printing Technology", "Amount": "1,00,000", "Agency": "JNTU Anantapur"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "427495-001", "Title of the Patent": "Cuboid Type Low-Cost FDM 3D Printer PV systems", "Status": "Under Examination"}
          ]
        },
        {
          title: "Consultancy",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Client/Organization": "Academic Institutions", "Project": "Machining", "Amount": "20,000"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2018-19", "Client/Organization": "Academic Institutions", "Project": "Wear test", "Amount": "3,150"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2017-18", "Client/Organization": "Academic Institutions", "Project": "Mechanical Testing", "Amount": "4,000"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Faculty Coordinator - AICTE IDEA Lab",
            "NPTEL Discipline Star (Computer Science and Engineering Jan-Apr 2025)",
            "NPTEL Motivated Learners (July- Dec 2025)",
            "NPTEL Believers (July- Dec 2025)",
            "Outstanding Reviewer Award in 2024 for the Measurement Science and Technology",
            "NPTEL Domain Certification in Data Science July 2024",
            "Outstanding Reviewer Award in 2023 for the Journal of Materials Engineering and Performance",
            "Outstanding Reviewer Award in 2023 for the Surface Topography: Metrology and Properties",
            "Achieved IOP trusted reviewer status (ID 81719243).",
            "Recognized as NPTEL Motivated Learner Jan-Apr 2023",
            "Convener for International Conference on Materials, Energy and Mechanical Engineering 2021 (ICME2-2021), 17th & 18th December 2021, MITS, Madanapalle.",
            "Convener of 5-Day Workshop on MATLAB & Applications, 8th to 12th November 2021, MITS, Madanapalle.",
            "Received “Best Research Award” in International Research Awards on New Science Inventions, NESIN 2020 Awards by ScienceFather",
            "Bentham Science Ambassador",
            "Student project titled “Hydrogen Powered Engine” was selected for Grand Finale “KPIT SPARKLE 2018” out of 12,000 registrations held on 17-18th Feb 2018 at Pimpri Chinchward College of Engineering, Pune",
            "Convener of National Level Students Technical Symposium “MECHONANCE 2017” held on 18th Apr 2017, MITS, Madanapalle.",
            "Research paper received “Excellent oral presentation award” in International Conference (ICMMA-14) hosted by the International Association of Computer Science and Information Technology (IACSIT) during 18-19 February 2014 at Singapore 2014.",
            "Received “Half-Time Research Assistantship (HTRA)” funded by MHRD for pursuing Ph.D."
          ]
        }
      ]
    },

    "Dr. K. V. Nagesha": {
      name: "Dr. K. V. Nagesha",
      designation: "Assoc. Professor",
      email: "drnageshakv@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Nagesha.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Drilling Technology", "Branch": "Mechanical Engineering", "College Name/University": "National Institute of Technology, Karnataka", "Year of Passing": "2016"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Computer Integrated Manufacturing", "Branch": "Mechanical Engineering", "College Name/University": "Visvesvaraya Technological University, Belagum", "Year of Passing": "2010"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Visvesvaraya Technological University, Belagum", "Year of Passing": "2008"}
          ]
        },
        {
          title: "Research Areas",
          content: "Manufacturing"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57203485462"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/274340"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.co.in/citations?user=R91i5TIAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "4"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Analysis on Implementation of Artificial Intelligence in the sports Activity", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Parametric study on four station ball mill for synthesis of ultrafine powders", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Influence of rock properties on emission rate of Particulates Matter (Pm) during drilling operation in surface mines", "Indexing": "ESCI/ Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "5", "Details of Research Publication": "Determination of strength parameters of glass fibers reinforced composites for engineering applications", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Development of statistical models to predict emission rate and concentration of particulate matters (PM) for drilling operation in opencast mines", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "3", "Details of Research Publication": "Evaluation of Multilayer Thin Film Coatings for Solar Thermal Applications", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2018", "Author Position": "1", "Details of Research Publication": "Development of empirical model to predict particulate matter", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2018", "Author Position": "2", "Details of Research Publication": "Simulation studies on multilayer coatings for solar absorptance", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "377800-001", "Title of the Patent": "IOT Based devise for controlling electrical appliance", "Status": "Granted"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2018", "Application ID": "201841017716", "Title of the Patent": "Utilization of Waste Poly Ethylene Bags and Fly Ash for Engineering Application", "Status": "Granted"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2018", "Application ID": "201841005118", "Title of the Patent": "Development of New Thermal Absorber Coatings for Enhanced Solar Application", "Status": "Granted"}
          ]
        }
      ]
    },

    "Dr. P. Sivaiah": {
      name: "Dr. P. Sivaiah",
      designation: "Assoc. Professor",
      email: "sivaiahp@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/1743130408070.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Manufacturing", "Branch": "Mechanical Engineering", "College Name/University": "National Institute of Technology, Karnataka", "Year of Passing": "2017"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Production Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Sri Venkateswara University, Tirupathi", "Year of Passing": "2011"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Annamacharya Institute of Technology and Science, Rajampeta", "Year of Passing": "2008"}
          ]
        },
        {
          title: "Research Areas",
          content: "Sustainable machining techniques, Artificial Intelligence in Manufacturing."
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57192977154"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/274543"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=2Egv9JwAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "17"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Sivaiah, P., et al. Machining performance investigation on 17-4PH steel material with innovative textured tools. Scientific Reports (2026).", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Textured tools machinability assessment while turning of H13 material under various cutting environments. Materials and Manufacturing Processes, 40(13), pp.1725-1734.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "MQL turning processing of EN24 alloy steel material with novel textured tools. Materials and Manufacturing Processes, 40(13), pp.1713-1724.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "Processing of AISI304 material with novel textured tools under sustainable manufacturing practice. Materials and Manufacturing Processes, pp.1-10.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "Role of dual textured tools in MQL turning operation. Scientific Reports, 15(1), pp.1-11.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Performance evaluation of developed new textured tools during turning of AISI 321 material. Materials and Manufacturing Processes, 39(5), 688-699.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Comparative analysis and experimental exploration of the milling process in the machining of Inconel 825 material under MQL. Materials and Manufacturing Processes, 39(9), 1213-1223", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "6", "Details of Research Publication": "Artificial Intelligence Model for Machinability Investigations on Drilling of AA6061 with Micro Textured Tool for Automobile Applications (No. 2023-28-0082). SAE Technical Paper.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Simulation of metal ceramic single layer coatings for solar energy applications. Materials Science for Energy Technologies, 7, pp.85-90.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Investigation on turning process performance during machining of 15-5PH stainless steel material with eco-friendly machining technique. Materials Today: Proceedings.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Selection of best WEDM process parameters using grey relational analysis method. Materials Today: Proceedings.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Sustainable manufacturing strategies in machining. Sustainable Manufacturing Processes, Academic press, Elsevier, Pages 113-154,ISBN: 978-0-323-99990-8 978-0-323-99990-8", "Indexing": "Scopus", "Publication": "Book chapter", "Journal Quartile": "None"},
            {"S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "4", "Details of Research Publication": "Neural Network Model for Machinability Investigations on CNC Turning of AA5052 for Marine Applications with MQL (No. 2022-28-0515). SAE Technical Paper.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Performance improvement of turning operation during processing of AISI 304 with novel textured tools under minimum quantity lubrication using hybrid optimization technique. Materials and Manufacturing Processes, 37(6), pp.693-700", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "14", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Processing of 17-4 PH steel in turning operation with hybrid textured tools. Materials and Manufacturing Processes, 37(3), pp.241-250.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "15", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Effect of single and hybrid pattern textured tools on turning process performance. Materials and Manufacturing Processes, 37(3), pp.251-259.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "16", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "3", "Details of Research Publication": "Characterization of Aluminium and Alumina Thin Films Coatings using different Deposition Methods for Enhancement of Optical Properties. International Journal of Materials Engineering Innovation, 12(3), pp.165-187", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "17", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Identifying the effectiveness of manner of cryogenic coolant supply in different cryogenic cooling techniques in turning process—a review. Machining Science and Technology, 24(6), pp.948-999.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "18", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "A comparative study on different textured and untextured tools performance in turning process. Materials and Manufacturing Processes, 36(8), pp.926-935.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "19", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "3", "Details of Research Publication": "Evaluation of Mechanical Properties of Glass Fiber-BMPM/DABA-PMC Composite. Transactions of the Indian Institute of Metals, 74, pp.2185-2192.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "20", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Machinability evaluation during machining of AISI 52100 steel with textured tools under Minimum Quantity Lubrication- A comparative study. Materials and Manufacturing Processes 35(15), pp.1761-1768.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "21", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Investigation on turning process performance using hybrid-textured tools under dry and conventional cooling environment. Materials and Manufacturing Processes, 35(16), pp.1852-1859.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "22", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "4", "Details of Research Publication": "Alumina Thin film Coatings at Optimized Conditions using RF Magnetron Sputtering Process. International Journal of Thin Film Science and Technology, 10(1), 13-20.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "23", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Effect of novel hybrid texture tool on turning process performance in MQL machining of Inconel 718 superalloy. Materials and Manufacturing Processes, 35(1), pp.61-71.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "24", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "4", "Details of Research Publication": "Determination of Strength Parameters of Glass Fibers Reinforced Composites for Engineering Applications. Silicon, 12(1), pp.1-11.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "25", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Effect of surface texture tools and minimum quantity lubrication (MQL) on tool wear and surface roughness in CNC turning of AISI 52100 steel. Journal of The Institution of Engineers (India): Series C, 101(1), pp.85-95.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "26", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Experimental investigation and modelling of MQL assisted turning process during machining of 15-5 PH stainless steel using response surface methodology. SN Applied Sciences, 1(8), p.913.", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "27", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Multi objective optimization of sustainable turning process using TOPSIS method. Emerging Materials Research, 8(4), pp.686-695", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "28", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Evaluation of hybrid textured tool performance under minimum quantity lubrication while turning of AISI 304 steel. Journal of the Brazilian Society of Mechanical Sciences and Engineering, 41(12), p.571-581.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "29", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "4", "Details of Research Publication": "Evaluation of Multilayer Thin Film Coatings for Solar Thermal Applications. Arabian Journal for Science and Engineering, 44(9), pp.7789-7797.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "30", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Performance improvement of cryogenic turning process during machining of 17-4 PH stainless steel using multi objective optimization techniques. Measurement, 136, pp.326-336.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "31", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "The effectiveness of a novel cryogenic cooling approach on turning performance characteristics during machining of 17-4 PH stainless steel material. Silicon, 11(1), pp.25-38.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "32", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Effect of cryogenic coolant on turning performance: a comparative study. SN Applied    Sciences, 1(1), p.67.    ESCI    Article    Q2", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "33", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Modeling and optimization of sustainable manufacturing process in machining of 17-4 PH stainless steel. Measurement, 134, pp.142-152.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "34", "Publication Affiliation": "MITS", "Academic Year": "2017-18", "Author Position": "1", "Details of Research Publication": "Analysis and modeling of cryogenic turning operation using response surface methodology. Silicon, 10(6), pp.2751-2768.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "35", "Publication Affiliation": "MITS", "Academic Year": "2017-18", "Author Position": "1", "Details of Research Publication": "Effect of cryogenic coolant on turning performance characteristics during machining of 17-4 PH stainless steel: A comparison with MQL, wet, dry machining. CIRP Journal of Manufacturing Science and Technology, 21, pp.86-96.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "36", "Publication Affiliation": "MITS", "Academic Year": "2017-18", "Author Position": "1", "Details of Research Publication": "Multi performance characteristics optimization in cryogenic turning of 17-4 PH stainless steel using Taguchi coupled grey relational analysis. Advances in Materials and Processing Technologies, 4(3), pp.431-447", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "37", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "1", "Details of Research Publication": "Machinability studies on 17-4 PH stainless steel under cryogenic cooling environment. Materials and Manufacturing Processes, 32(15), pp.1775-1788.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "38", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "1", "Details of Research Publication": "Influence of cryogenic coolant on turning performance characteristics: A comparison with wet machining. Materials and Manufacturing Processes, 32(13), pp.1475-1485.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "39", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "1", "Details of Research Publication": "Multi-objective optimisation of cryogenic turning process using Taguchi-based grey relational analysis. International Journal of Machining and Machinability of Materials, 19(4), pp.297-312.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "40", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "1", "Details of Research Publication": "Comparative evaluations of machining performance during turning of 17-4 PH stainless steel under cryogenic and wet machining conditions. Machining Science and Technology, 22(1), pp.147-162.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "437596-001", "Title of the Patent": "Multi-Sieving Machine", "Status": "Examination"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "429724-001", "Title of the Patent": "Textured turning cutting insert", "Status": "Granted"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "429875-001", "Title of the Patent": "Dual surface textured tool", "Status": "Granted"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "429725-001", "Title of the Patent": "Cutting tool for turning operation", "Status": "Examination"},
            {"S.No": "5", "Affiliation": "MITS", "Academic Year": "2023-24", "Application ID": "400149-001", "Title of the Patent": "Conical shaped micro grooved surface textured tool", "Status": "Examination"},
            {"S.No": "6", "Affiliation": "MITS", "Academic Year": "2020-21", "Application ID": "201841017716A", "Title of the Patent": "Utilization of Waste Poly Ethylene Bags and Fly Ash for Engineering Application", "Status": "Granted"},
            {"S.No": "7", "Affiliation": "MITS", "Academic Year": "2017-18", "Application ID": "201741046532A", "Title of the Patent": "New Invention of Low Cost Creep Testing Machine with Variable Temperature and Environmental and Environmental Conditions for Composite Material (pmmc)", "Status": "Examination"}
          ]
        },
        {
          title: "Consultancy",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Client/Organization": "Academic Institutions", "Project": "Manufacturing of steel components & characterization testing", "Amount": "50,000"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2023-24", "Client/Organization": "Academic Institutions", "Project": "Manufacturing of steel components & characterization testing", "Amount": "20,000"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2022-23", "Client/Organization": "Academic Institutions", "Project": "Manufacturing of steel components & characterization testing", "Amount": "20,000"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2021-22", "Client/Organization": "Academic Institutions", "Project": "Manufacturing of steel components & characterization testing", "Amount": "10,000"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Stanford University recognized him as one of the Top 2% Scientists for the years 2021, 2023, 2024, and 2025.",
            "Received the “Best Researcher Award” for the academic years 2018-19, 2019-20, and 2022-23 at MITS College."
          ]
        }
      ]
    },

    "Dr. R. Prithivirajan": {
      name: "Dr. R. Prithivirajan",
      designation: "Assoc. Professor",
      email: "prithivirajanr@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Prithivirajan.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Anna University, Chennai", "Year of Passing": "2017"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Manufacturing Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Anna University, Chennai", "Year of Passing": "2012"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Annamalai University, Chidambaram.", "Year of Passing": "2008"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=56123153400"},
            {"Identifier": "Vidwan", "Link": ""},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=NYnKKAUAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "11"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Surface Topographical Analysis and Empirical Assessment of Wire Electrical Discharge Machining on Ti-6242 Alpha-Beta Alloy, Journal of Materials Engineering and Performance, March 2025", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "Experimental studies on dilution, microstructural, mechanical and wear characteristics of Inconel 718 deposited over stainless steel 304 employing cold metal transfer process, Materials Letters, vol. (381), pp. 137795, February 2025", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Hot Corrosion Behavior of Electrical Discharge-Coated Duplex Stainless Steel Under Sulphur Environment, Transactions of the Indian Institute of Metals, vol. (27), pp. 3699 - 3706, August 2024", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Investigation of Mechanical Properties of Environmentally Friendly Human Hair Fiber-reinforced Polymer Composite, vol. (32), Polymer research – December 2024", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Cenosphere filled epoxy composites: Structural, mechanical, and dynamic mechanical studies, Biomass Conversion and Bio refinery, vol. (14), pp.28893–28900, April 2023.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "4", "Details of Research Publication": "Properties and characteristics of alkali treated calotropis gigantea fiber- reinforced nanoparticle-filled epoxy composites, Composites Theory and Practice, vol. (22), pp. 99 - 105, 2022.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "4", "Details of Research Publication": "Investigations on effectiveness of transfer layer on specific wear rate and coefficient of friction during dry sliding of hybrid polymer matrix composites, Applied polymer composites vol. (43), pp. 250 - 266, October 2022", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "4", "Details of Research Publication": "Influence of optimization techniques on wire electrical discharge machining of Ti–6Al–2Sn–4Zr–2Mo alloy using modeling approach”, Journal of Inorganic and Organometallic Polymers and Materials, vol. (31), pp. 1– 8, May 2021.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "4", "Details of Research Publication": "characteristics and corrosion properties of detonation gun sprayed cermet coatings prepared on AA5083 for marine applications”, Surface Engineering, vol. 37(2), pp. 263 – 270, May 2021", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "4", "Details of Research Publication": "Experimental Investigation and Optimization of Process Parameters in Ti – (6242) Alpha–Beta Alloy Using Electrical Discharge Machining”, Journal of Inorganic and Organometallic Polymers and Materials, vol. 31(4), pp.1787– 1800, 2021.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "2", "Details of Research Publication": "Montmorillonite clay addition of epoxy\\ unsaturated polymer blended composites: effect of thermal and mechanical properties”, Journal of Polymer Science and Technology, vol.6 (2), 2021.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "3", "Details of Research Publication": "Investigating the Mechanical, Thermal and Melt Flow Index properties of HNTs –  LLDPE Nano Composites for the Applications of Rotational Moulding”, Journal of Polymer Testing, vol.89, pp. 1 – 8, September 2020", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "3", "Details of Research Publication": "Development of Multi-Functioning Organic Waste Shredding Machine for Natural Compost”, accepted in Advances in Industrial Automation and Smart Manufacturing, pp 1043 – 1055, October 2020.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "14", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "5", "Details of Research Publication": "Experimental Investigation on Surface morphology and Parametric Optimization of Ti- 6Al- 2Sn- 4Zr- 2Mo alpha-beta alloy through AWJM”, Tierarztliche Praxis, vol.40, pp. 1681 – 1702, 2020.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "15", "Publication Affiliation": "MITS", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "“Characterization of Musa paradisiaca L. cellulosic natural fibers from agro-discarded blossom petal waste”, Journal of Natural Fibers. vol. 7(11), pp.1640 – 53, Nov 2020.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "16", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "5", "Details of Research Publication": "Physico-chemical study of pistachio (Pistacia vera) nutshell particles as a bio-filler for eco-friendly composites”, Material Research Express, vol.6 (10), pp. 105339, August 2019", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "17", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "4", "Details of Research Publication": "Statistical evaluation and performance analysis of electrical discharge machining (EDM) characteristics of hard Ti-6Al-2Sn-4Zr-2Mo alloy”, Material Research Express, vol.6(5), pp. 056552, Feb 2019", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "18", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "4", "Details of Research Publication": "A new natural cellulosic Pigeon Pea (Cajanus cajan) pod fiber Characterization for bio-degradable polymeric composites”, Accepted for Publication, Journal of Natural Fiber, vol. 18 (9), pp. 1285 – 1295, Nov 2019.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "19", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Characterization of cellulosic fibers from Morus alba L. stem, Journal of Natural Fibers, vol. 16 (4), pp.  503 – 511.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "20", "Publication Affiliation": "MITS", "Academic Year": "2018-19", "Author Position": "5", "Details of Research Publication": "Extraction and characterization of new natural cellulosic chloris barbata Fiber”, Journal of Natural Fibers, vol. 15(3), pp.  436 – 444, Jan 2018.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "1", "Details of Research Publication": "Hybrid bio composites from agricultural residues: Mechanical, water absorption and tribological behaviors”, Journal of Polymer Engineering, vol.36 (7), pp. 633 – 671, Sep 2016.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "1", "Details of Research Publication": "Hybrid bio composites from agricultural residues: Mechanical and thickness swelling behavior”, International Journal of Chem Tech Research. vol.9 (3), pp. 609 – 615, April 2016.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "23", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "3", "Details of Research Publication": "Properties and performance of bio particulated natural green husk coir fiber-vinyl ester composites”, International Journal of Chem Tech Research.vol.9 (2), pp. 65 – 69, March 2016.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "24", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "1", "Details of Research Publication": "Bio-Based Composites from waste agricultural residues: Mechanical and morphological properties”, Cellulose Chemistry and Technology. vol. 49 (1), pp.65 – 68, 2015.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "25", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "4", "Details of Research Publication": "Statistical analysis and fractography study of tensile behavior in bio particulated coir-vinyl ester composites”, Advanced Materials Research, vol. 984 – 985, pp.214 – 220, July 2014.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025 -2026", "Application ID": "202541074623", "Title of the Patent": "Multi-Sieving Machine", "Status": "Published"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2023", "Project /Event": "Project", "Role": "Mentor", "Title": "Compact Sustainable Origami based Furniture", "Amount": "3,67,000", "Agency": "MSME"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2023", "Project /Event": "Event", "Role": "Coordinator", "Title": "Contemporary Progressions, Challenges, and Issues in Metal 3D Printing Technology", "Amount": "93,000", "Agency": "JNTUA - Anantapur"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Top SPOC SWAYAM NPTEL AWARD for AAA rating – IIT Madras, Jan – April 2022."
          ]
        }
      ]
    },

    "Dr. Praveen Kumar Bannaravuri": {
      name: "Dr. Praveen Kumar Bannaravuri",
      designation: "Sr. Asst. Professor",
      email: "drpraveenkumarb@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/praveen.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Post Doctoral Fellow", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "IIT, Guwahati", "Year of Passing": "2019"},
            {"S.No": "2", "Course": "Ph.D.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "NIT, Manipur", "Year of Passing": "2018"},
            {"S.No": "3", "Course": "M.E.", "Specialization": "Tribology and Maintenance Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Shri.G.S.I.T.S, Indore", "Year of Passing": "2013"},
            {"S.No": "4", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "KLCE, Guntur", "Year of Passing": "2009"}
          ]
        },
        {
          title: "Research Areas",
          content: "Composite Materials, Medical Device"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57215558466"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/356372"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=fMBM9q8AAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "10"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "5", "Details of Research Publication": "Enhancing Wear Resistance and Mechanical Properties of TiB2-Reinforced AZ91D Magnesium Alloys https://doi.org/10.1007/s11665-025-13020-5", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2025-26", "Author Position": "2", "Details of Research Publication": "Enhancing Surface Integrity of Al–Cu–Ni Composites with FeNb Reinforcement Through Laser Surface Melting", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Towards Inclusive Transportation: Smart Steps for Elderly Commuters in the Public Transport Buses", "Indexing": "SCOPUS", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "7", "Details of Research Publication": "Synergistic effects of boron carbide and niobium reinforcements on the mechanical performance of Al-8090 alloys", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Wear and Corrosion Behavior of Electromagnetic Stir Casted Al-5Cu-2Ni/(0–5 wt%) FeNb Alloy Composites", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "Effect of Bamboo Leaf and Pista Shell Powder Particles on Mechanical and Wear Behaviour of Polymer Composites", "Indexing": "SCOPUS", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Comparative Study on Metallography and Mechanical Properties of Al–Cu–Ni/FeNb Composites Fabricated by Electromagnetic Stir Casting Processes via Sand and Metal Mold System", "Indexing": "SCOPUS", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "9", "Details of Research Publication": "Effect on properties of nickel alloy with the addition of iron and magnesium oxide by gas cladding method", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "9", "Details of Research Publication": "Strengthening of polymer composites with an addition of Ashoka seeds and eggshell powder particles", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Effect on density and hardness of aluminium metal matrix composite with the addition of bamboo leaf ash", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Effects of fiber laser treatment on properties of Ti-64 alloy", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Conceptual Design and Analysis of Smart Steps for Elderly/Differently Abled Persons in Rural Public Transport Buses", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Effect of novel grain refiner and Ni alloying additions on microstructure and mechanical properties of Al-Si9.8-Cu3.4 HPDC castings – optimization using Multi Criteria Decision making approach", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Porosity formation studies in high pressure die castings of Al-9Si-3Cu alloy based on Taguchi method", "Indexing": "ESCI & Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Mechatronic system for an automated dynamics staircase for walking difficulty people to travel in public road transportation vehicles", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Influence of Fly Ash and Cement with Molasses Addition on Moulding Properties in Silica Sand: A Comparison", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "17", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "mpact on the microstructure and mechanical properties of Al-4.5 Cu alloy by the addition of MoS2", "Indexing": "ESCI&Scopus", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "18", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "6", "Details of Research Publication": "ZrC-impregnated titanium-based coating as an effective lubricating barrier for artificial hip prosthesis", "Indexing": "ESCI&Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "19", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "3", "Details of Research Publication": "Effect of cavitation and spallation on ribbon morphology of Fe73. 5Si13. 5B9Cu1Nb3 alloy in planar flow melt spinning process", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "Integrity on properties of Cu-based composites with the addition of reinforcement: A review", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "21", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "3", "Details of Research Publication": "Surface strengthening of aluminium alloys/composites by laser applications: A comprehensive review", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "22", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "3", "Details of Research Publication": "The recent trends of EDM applications and its relevance in the machining of aluminium MMCs: A comprehensive review", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "23", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "7", "Details of Research Publication": "Fabrication of Jackfruit Stems Fiber Composites", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "24", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "3", "Details of Research Publication": "Aerodynamic simulation of optimized vortex generators and rear spoiler for performance vehicles", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "25", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "8", "Details of Research Publication": "Fabrication and bend testing of DHAK fiber composites", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "26", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "9", "Details of Research Publication": "Impact characteristics of DHAK fiber composites", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "27", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Effect of laser surface melting on surface integrity of Al− 4.5 Cu composites reinforced with SiC and MoS2", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "28", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "2", "Details of Research Publication": "Effect on corrosion behaviour of the surface of aluminium 4.5 Cu with bamboo leaf ash composites by laser treatment", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "29", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "7", "Details of Research Publication": "TG/DTA studies on the oxidation and thermal behaviour of Ti-6Al-4V-B4C coatings obtained by magnetron sputtering", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "30", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Surface Modification of Al–4.5%Cu/MoS2 Composites by Laser Surface Melting", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "31", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Strengthening of Al-4.5% Cu alloy with the addition of silicon carbide and bamboo leaf ash", "Indexing": "ESCI & Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "32", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Strengthening of mechanical and tribological properties of Al-4.5% Cu matrix alloy with the addition of bamboo leaf ash", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "33", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Characterization of Al-4.5% Cu alloy with the addition of silicon carbide and bamboo leaf ash", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "34", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Tribological behavior of aluminium metal matrix composite with addition of bamboo leaf ash by GRA-Taguchi method", "Indexing": "SCOPUS", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "35", "Publication Affiliation": "Others", "Academic Year": "2017-18", "Author Position": "1", "Details of Research Publication": "Microstructure and mechanical properties of aluminium metal matrix composites with addition of bamboo leaf ash by stir casting method", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "36", "Publication Affiliation": "Others", "Academic Year": "2017-18", "Author Position": "2", "Details of Research Publication": "Influence of Fluidity of Al-Cu Alloy with Fly Ash Reinforcement by Single Spiral Fluidity Test", "Indexing": "SCOPUS", "Publication": "Article", "Journal Quartile": ""}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2025", "Application ID": "431480-001", "Title of the Patent": "Eco friendly and hassle free adjustable flame cooking apparatus.", "Status": "Under Examination"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2025", "Application ID": "431479-001", "Title of the Patent": "Accessible boarding system for elderly individuals with lower limb challenges in Public Transportation", "Status": "Granted"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2024", "Application ID": "431479-001", "Title of the Patent": "Intelligent aid system for elderly and wheelchair users in public transit", "Status": "Published"},
            {"S.No": "4", "Affiliation": "Others", "Academic Year": "2020", "Application ID": "202041019684", "Title of the Patent": "An Escalator for lifting the elderly or physically challenged person from ground level", "Status": "Granted"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2021-2022", "Project /Event": "Project", "Role": "Co – P. I.", "Title": "Development of smart steps for elderly or differently abled people to travel safely and comfortably in the public vehicles", "Amount": "25,00,000", "Agency": "SEED-TIDE (DST)"}
          ]
        }
      ]
    },

    "Dr. Kamlesh Kumar": {
      name: "Dr. Kamlesh Kumar",
      designation: "Asst. Professor",
      email: "drkamleshkumar@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/PHOTO_ Dr. Kamlesh Kumar(1).png",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Manufacturing", "Branch": "Mechanical Engineering", "College Name/University": "National Institute of Technology, Rourkela, Odisha, India.", "Year of Passing": "2020"},
            {"S.No": "2", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Siksha 'O' Anusandhan University, Bhubaneswar, Odisha, India.", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=8862630800"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/274523"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=p_9puS8AAAAJ&view_op=list_works&sortby=pubdate"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "7"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Numerical simulation and experimental investigation of TIG welding of AISI 304 Stainless steel plate https://doi.org/10.1080/09507116.2025.2584027", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Welding of Ti-6Al-4V Alloy: A Review", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Effect of reducing heat input on autogenous TIG welding of Ti–6Al–4V alloy", "Indexing": "SCI-E", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "A review on TIG welding technology variants and its effect on weld geometry", "Indexing": "Scopus", "Publication": "Conf. Proceedings", "Journal Quartile": "None"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "3", "Details of Research Publication": "Investigation on the Stress Distribution During Hard Turning of AISI 52100 Steel Using Al2O3/TiCN Cutting Tool Coated with Mono-layered AlCrN and Multi-layered AlTiN/TiN Coating", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "3", "Details of Research Publication": "Pulse laser welding of high carbon alloy steel: assessment of melt pool geometry and mechanical performance    SCI-E    Article    Q2", "Indexing": "SCI-E", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "3", "Details of Research Publication": "Effect of overlapping condition on large area NiTi layer deposited on Ti-6Al-4V alloy by TIG cladding technique    SCI    Article    Q1", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Microstructure evolution and metallurgical characteristic of bead-on-plate TIG welding of Ti-6Al-4V alloy", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Effect of activated flux on TIG welding of 304 austenitic stainless steel", "Indexing": "Scopus", "Publication": "Conf. Proceedings", "Journal Quartile": "None"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2017-18", "Author Position": "1", "Details of Research Publication": "Influence of welding current on the mechanical property of 3 mm thick commercial 1050 aluminium butt joint weld by AC-TIG welding method", "Indexing": "Scopus", "Publication": "Conf. Proceedings", "Journal Quartile": "None"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2016-17", "Author Position": "4", "Details of Research Publication": "Sliding abrasive wear characteristic of TIG cladded TiC reinforced Inconel825 composite coating", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "1", "Details of Research Publication": "Effect of Varying Root Gap on Butt Welding of 6 mm Thick AISI 1020 Plate by Autogenous TIG Welding Process", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-26", "Application ID": "451043-001", "Title of the Patent": "Sun tracking system for small scale domestic PV systems", "Status": "Granted"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "431997-001", "Title of the Patent": "Sun tracking solar panel system for cloudy weather", "Status": "Granted"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "202541012935", "Title of the Patent": "A body massage unit for management of pain", "Status": "Published"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2023-24", "Application ID": "464951-001", "Title of the Patent": "Power line inspection robot", "Status": "Granted"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Top performing mentor for NPTEL online certification course “Plastic waste management”.",
            "Delivered a webinar on “Recent Advancements in TIG Welding Process” conducted by The Indian Institute of Welding (IIW-INDIA), Students’ Chapter, Saintgits College of Engineering, Kerala on 19/06/2021.",
            "GATE qualified with score 388 in Mechanical Engineering in 2014."
          ]
        }
      ]
    },

    "Dr. Guniputi Balanarasimha": {
      name: "Dr. Guniputi Balanarasimha",
      designation: "Asst. Professor",
      email: "drbalanarasimhag@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/bala.png",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Smart Materials", "Branch": "Mechanical Engineering", "College Name/University": "National Institute of Technology, Karnataka", "Year of Passing": "2020"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Machine Design", "Branch": "Mechanical Engineering", "College Name/University": "Madanapalle Institute of Technology & Science, Madanapalle", "Year of Passing": "2013"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Chadalawada Ramanamma Engineering College, Tirupati", "Year of Passing": "2010"}
          ]
        },
        {
          title: "Research Areas",
          content: "Smart Materials, Smart Structures, Additive Manufacturing, Tribology, Metal Matrix Composites, Machine Learning, Material Modelling."
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=56505621600"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/578569"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=nIvafIYAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "7"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Role of infill pattern and density on strength of 3D printed shape memory alloy hybrid composites https://doi.org/10.1080/10667857.2025.2597880", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "Development and Characterization of Pseudo-Elastic Ternary Cu-Al-Be Shape Memory Alloy and Its Scope as Shape Memory Hybrid Composites. Journal of Polymer and Composites. 2025; 13(05):370-385. https://journals.stmjournals.com/jopc/article=2025/view=228803", "Indexing": "ESCI/ WoS", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "Other", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "An investigation on stabilisation and phase transformation characteristics of Cu-Al-Be shape-memory alloys quenched in different media. https://doi.org/10.1080/2374068X.2024.2402975", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "Other", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Effect of quenchant on the phase transformation of Cu–Al–Be–B shape memory alloys. https://doi.org/10.1007/s12666-023-02939-9", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "Other", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Effect of in-situ reaction time on the strength of AA5052/ZrAl3 metal matrix nano composites.\nhttps://doi.org/10.1080/2374068X.2022.2091188", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "Other", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Role of alloying additions on phase transformations, mechanical and pseudoelastic behavior of Cu-Al-Be shape memory alloys.\nhttps://doi.org/10.1016/j.matpr.2021.12.092", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q2"},
            {"S.No": "7", "Publication Affiliation": "Other", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Effect of Cerium and Aluminium on the phase stability and properties of polycrystalline Cu-Al-Be shape memory alloys.\nhttps://doi.org/10.1016/j.matchar.2021.111590", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "8", "Publication Affiliation": "Other", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Effect of manganese and homogenization on the phase stability and properties of Cu–Al–Be shape memory alloys\nhttps://doi.org/10.1016/j.jmrt.2021.07.027", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "9", "Publication Affiliation": "Other", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "An investigation on the properties of boron modified Cu–Al–Be polycrystalline shape memory alloys.\nhttps://doi.org/10.1016/j.jallcom.2020.153733", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "10", "Publication Affiliation": "Other", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Effect of zirconium on the properties of polycrystalline Cu-Al-Be shape memory alloy.\nhttps://doi.org/10.1016/j.msea.2019.04.022", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "11", "Publication Affiliation": "Other", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Influence of Gd on the microstructure, mechanical and shape memory properties of Cu-Al-Be polycrystalline shape memory alloy\nhttps://doi.org/10.1016/j.msea.2018.09.064", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "12", "Publication Affiliation": "Other", "Academic Year": "2014-15", "Author Position": "2", "Details of Research Publication": "Optimization of Influential Parameters on Mechanical Behaviour of AlMg1SiCu Hybrid Metal Matrix Composites using Taguchi Integrated Fuzzy Approach. https://doi:10.1016/j.matpr.2015.07.071", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q2"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2014-15", "Author Position": "1", "Details of Research Publication": "A Comparative Study on Analytical and Experimental Buckling Stability of Metal Matrix Composite Columns with Fixed & Hinged Ends. Int. J. Appl. Eng. Res. 9,191–196.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "14", "Publication Affiliation": "Other", "Academic Year": "2014-15", "Author Position": "1", "Details of Research Publication": "Prediction of wear behaviour of almg1sicu hybrid MMC using taguchi with grey rational analysis.\nhttps://doi.org/10.1016/j.proeng.2014.12.283", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q2"},
            {"S.No": "15", "Publication Affiliation": "MITS", "Academic Year": "2012-13", "Author Position": "1", "Details of Research Publication": "A Review on Processing of Particulate Metal Matrix Composites and its Properties\nhttps://dx.doi.org/10.37622/IJAER/8.6.2013.647-666", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"}
          ]
        },
        {
          title: "Research Projects & Events",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-26", "Project/Event": "Project", "Role": "PI", "Title": "Investigation of Nanofluid-Coated SMA Actuators to Achieve Rapid Cooling Cycles and Enhanced Functional Durability", "Amount": "45,000", "Agency": "The Institution of Engineers India, Kolkatta"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2025-26", "Project/Event": "Seminar", "Role": "Coordinator", "Title": "Drone Technology and It's Career Opportunities-Evolution and Engineerng Design Perspectives", "Amount": "", "Agency": "AICTE-DPS"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2024-25", "Application ID": "202441088595", "Title of the Patent": "Real-Time Monitoring Tool for Mechanical System Performance", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Editorial Board Member for Scientific Reports (Springer Nature), a reputed international journal.",
            "Peer reviewer for international journals i.e., Journal of Alloys and Compounds, Materials Chemistry and Physics, Applied Physics A, and Transactions of the Indian Institute of Metals.",
            "E-content on Engineering Graphics with AutoCAD"
          ]
        }
      ]
    },

    "Dr. Anantha Raman L": {
      name: "Dr. Anantha Raman L",
      designation: "Asst. Professor",
      email: "dranantharamanl@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Anantha Raman L.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Thermal Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Anna University, Chennai", "Year of Passing": "2021"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Thermal Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Adhiparasakthi Engineering College, Chennai", "Year of Passing": "2012"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Aeronautical Engineering", "Branch": "Aeronautical Engineering", "College Name/University": "Infant Jesus College of Engineering, Chennai", "Year of Passing": "2009"}
          ]
        },
        {
          title: "Research Areas",
          content: "I.C. Engines, Industrial IoT, Refrigeration and Air Conditioning"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://scopus.com/authid/detail.uri?authorId=54392375300"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/362575"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=NCnLwKsAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "6"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025", "Author Position": "4", "Details of Research Publication": "Enhanced removal of manganese ions from wastewater media by oxidized MNT-based filters: EDS and raman investigations”, AIP Conference Proceedings, Vol. 3342, 070046 (2025), doi: 10.1063/5.0296480", "Indexing": "SCOPUS", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024", "Author Position": "2", "Details of Research Publication": "“Design and Implementation of an IoT-Enabled Medication Delivery Robot for Isolated Patient Care”, IEEE Xplore, 2024 2nd International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS) - 23-25 Oct. 2024, doi: 10.1109/ICSSAS64001.2024.10760515", "Indexing": "SCOPUS", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2023 - 24", "Author Position": "4", "Details of Research Publication": "AI-based Prognostic Analysis of NOx Emission from Industrial Diesel Engine for Feedback Control System, IEEE Xplore, 2023 1st International Conference on Optimization Techniques for Learning (ICOTL), Feb 2024, 10.1109/ICOTL59758.2023.10435308", "Indexing": "SCOPUS", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2023 - 24", "Author Position": "1", "Details of Research Publication": "Shear strength, wear, thermal conductivity, and hydrophobicity behavior of fox millet husk biosilica and Amaranthus dubius stem fiber–reinforced epoxy composite: a concept of biomass conversion, https://doi.org/10.1007/s13399-023-04854-x", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Effect of Adding Rice Husk Ash Functional Silicon Additives on Flammability Wear and Thermal Stability of Ramie-Epoxy Composite”,     https://doi.org/10.1007/s12633-023-02463-x", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Assessment of charging technologies, infrastructure and charging station recommendation schemes of electric vehicles: A review,  https://doi.org/10.1016/j.asej.2022.101938", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "A review on recent trends in the microbial production of biodiesel”, AIP Conference Proceedings, Vol. 2396, PP: 020007-1 – 020007-15, 2021,doi: 10.1063/5.0066418", "Indexing": "SCOPUS", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "2", "Details of Research Publication": "Investigation and Optimization of Machining Parameters Influence on Surface Roughness in Turning AISI 4340 Steel. doi:10.5937/fme2002383B", "Indexing": "SCOPUS", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2019-2020", "Author Position": "1", "Details of Research Publication": "Experimental investigation on performance, combustion and emission analysis of a direct injection diesel engine fuelled with rapeseed oil biodiesel. doi.org/10.1016/j.fuel.2019.02.106", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2017-18", "Author Position": "1", "Details of Research Publication": "Study on Performance and Emission Characteristics of a  Single Cylinder Diesel Engine using Exhaust Gas Recirculation”, Thermal Science, Vol. 21, Supplement 02, PP: S435-S441, 2017, ISSN 2334-7163", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2013 -14", "Author Position": "4", "Details of Research Publication": "Performance and emission characteristics of low heat rejection diesel engine fuelled with rice bran oil biodiesel, Advanced Materials Research,  doi: 10.4028/www.scientific.net/AMR.768.245.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2011 - 12", "Author Position": "2", "Details of Research Publication": "The Effect of Preheated Crude Palm Oil on Performance and Emission Characteristics of a Compression Ignition Engine”, Applied Mechanics and Materials, Vol. 110-116, Pg. 142-147, Oct 2011, doi: 10.4028/www.scientific.net/AMM.110-116.142", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "392223-001", "Title of the Patent": "WIRELESS ROBOTIC HAND", "Status": "Granted"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "448484-001", "Title of the Patent": "ULTRA WIDEBAND ANTENNA FOR MASS COMMUNICATION", "Status": "Granted"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "439577-001", "Title of the Patent": "VISCOUS FLOW APPARATUS", "Status": "Granted"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "434805-001", "Title of the Patent": "AUTONOMOUS MOBILE-CONTROLLED ROBOT FOR WATERWAY WASTE", "Status": "Granted"},
            {"S.No": "5", "Affiliation": "MITS", "Academic Year": "2024", "Application ID": "427760-001", "Title of the Patent": "PORTABLE THERMOELECTRIC AIR CONDITIONING SYSTEM", "Status": "Granted"},
            {"S.No": "6", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "391763-001", "Title of the Patent": "MACHINE LEARNING BASED HUMANOID DEVICE FOR OBJECT IDENTIFICATION", "Status": "Granted"},
            {"S.No": "7", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "392222-001", "Title of the Patent": "SOLAR POWERED GLASS CLEANING ROBOT", "Status": "Granted"},
            {"S.No": "8", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "389840-001", "Title of the Patent": "AN INTELLIGENCE SENSOR BASED BIODEGRADABLE WASTE COLLECTION UNIT", "Status": "Granted"},
            {"S.No": "9", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "389052-001", "Title of the Patent": "IOT BASED SOLAR POWERED AGRICULTURE ROBOT", "Status": "Granted"},
            {"S.No": "10", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "382160-001", "Title of the Patent": "MILK QUALITY ANALYSING DEVICE", "Status": "Granted"},
            {"S.No": "11", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "382157-001", "Title of the Patent": "AIR AND WATER QUALITY IDENTIFYING PEN", "Status": "Granted"},
            {"S.No": "12", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "381139-001", "Title of the Patent": "HYDROGEN FUEL BIKE", "Status": "Granted"},
            {"S.No": "13", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "381042-001", "Title of the Patent": "BATTERY PACK FOR ELECTRIC VEHICLE", "Status": "Granted"},
            {"S.No": "14", "Affiliation": "MITS", "Academic Year": "2023", "Application ID": "6275188 (United Kingdom)", "Title of the Patent": "AUTOMATED HEADLIGHT INTENSITY CONTROLLER FOR BIKE", "Status": "Granted"},
            {"S.No": "15", "Affiliation": "MITS", "Academic Year": "2022", "Application ID": "2022022211203800DE (Germany)", "Title of the Patent": "A CONSTRUCTION SITE SUPERVISION SYSTEM BASED ON INTERNET OF THINGS AND BLOCK CHAIN", "Status": "Granted"},
            {"S.No": "16", "Affiliation": "Others", "Academic Year": "2019", "Application ID": "201941042244", "Title of the Patent": "EDM ELECTROLYTE WITH BIODEGRABABLE OIL AND NANO PARTICLE FOR HASTE ALLOY", "Status": "Published"},
            {"S.No": "17", "Affiliation": "Others", "Academic Year": "2019", "Application ID": "201941026612", "Title of the Patent": "SMART BIO – TRANSESTERIFICATION PROCESS FOR BIODIESEL EXTRACTION", "Status": "Published"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Received “Best Teacher Award” from Madanapalle Institute of Technology & Science, Madanapalle for the academic year 2022-2023, April 2024.",
            "Received “Best Paper Award” from S.A. Engineering College, for publishing a research paper in Fuel-Elsevier Journal with Impact Factor: 5.05, March 2019.",
            "Received “Best Paper Award” from the International Conference on Automobile, Marine and Mechanical Engineering, ICAMME 2018, SVCE Chennai, May 2018.",
            "Received “Best Paper Award” from TRANSIST ONLINE for the paper submitted and presented in International Conference on Recent Innovations in Science and Technology, held on March 2017.",
            "Received “Best Teacher Award” from Rajadhani Institute of Engineering and Technology, Attingal during Teachers Day celebration, September 2016."
          ]
        }
      ]
    },

    "Dr. Arun Kumar.D": {
      name: "Dr. Arun Kumar.D",
      designation: "Asst. Professor",
      email: "drarunkumard@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Thota S S Bhaskara Rao.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Energy", "Branch": "Mechanical Engineering", "College Name/University": "PSG College of Technology/Anna University", "Year of Passing": "2021"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Engineering Design", "Branch": "Mechanical Engineering", "College Name/University": "Adhiyamaan College of Engineering, Hosur", "Year of Passing": "2012"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Thanthai Periyar Govt Institute of Technology, Vellore", "Year of Passing": "2010"}
          ]
        },
        {
          title: "Research Areas",
          content: "Design of Cooling Systems, Energy Savings, Composite"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57415516400"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in//profile/273112"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=IDypDskAAAAJ&hl=en&oi=sra"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "6"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Energy, economic and mathematical modelling of a solar drying system with Lauric acid based latent heat storage unit: an experimental study", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Development of Porous Biocarbon from Waste Wild Jack Husk for Enhanced EMI Shielding and Mechanical Performance in Wheat Straw Microfiber-Reinforced Vinyl Ester Composites", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Drying kinetics, mathematical modelling and colour analysis of an indirect solar dryer with latent heat storage unit for cucumber drying", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "High-performance biocomposites: leveraging lotus fiber and waste Kigelia pinnata fruit shell biochar for enhanced mechanical and fire-retardant properties", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Application of potential green algal for power generation as a likely and fractional alternative", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Experimental Investigations of Flammability, Mechanical and Moisture Absorption Properties of Natural Flax/NanoSiO2 Based Hybrid Polypropylene Composites", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "8", "Details of Research Publication": "Investigation of mechanical and dynamic mechanical analysis of bamboo/olive tree leaves powder-based hybrid composites under cryogenic conditions", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Parametric study on four station ball mill for synthesis of ultrafine powders", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Phase Change Material integrated in building wall for thermal management of buildings using design builder software", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": ""},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "4", "Details of Research Publication": "Performance, emission characteristics of compressed ignition engine with alternative fuel.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Experimental and Numerical analysis of soil to air heat exchanger system for domestic buildings", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Experimentally Investigation of Ground Coupled Heat Exchanger Coupled with Air Conditioning Machine for Southern India.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Investigation of heat transfer of wall with and without using phase change material", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "4", "Details of Research Publication": "Design and material characteristics of hybrid electric vehicle", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-2025", "Application ID": "439577-001", "Title of the Project": "Viscous Flow Apparatus", "Status": "Published"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2023-2024", "Application ID": "377799-001", "Title of the Project": "Mechanical Stopper for Constrained Deflection", "Status": "Published"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2022-2023", "Application ID": "202341003891", "Title of the Project": "Blueprint of Green Sustainable and Clean Renewable Energy", "Status": "Published"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2021-2022", "Application ID": "202241007991A", "Title of the Project": "Analysis of Integrated-Semi-transparent using Photovoltaic Thermal in an Uneven Span Greenhouse", "Status": "Published"}
          ]
        }
      ]
    },

    "Dr. Manish Sharma": {
      name: "Dr. Manish Sharma",
      designation: "Asst. Professor",
      email: "drmanishsharma@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/3c1c3241831b334db972daa4ffa6a6a2.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Thermal Fluid", "Branch": "Mechanical Engineering", "College Name/University": "Sardar Vallabhbhai National Institute\n\t\t\tof Technology, Surat", "Year of Passing": "2021"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Hydro Power Engineering", "Branch": "Hydro Power Engineering", "College Name/University": "Maulana Azad National Institute\n\t\t\tof Technology, Bhopal", "Year of Passing": "2014"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Government Engineering College, Bikaner", "Year of Passing": "2011"}
          ]
        },
        {
          title: "Research Areas",
          content: "Turbomachines, CFD, Optimization, Thermal system design"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57207149261"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/590239"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=X9Gfr18AAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "03"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Comparative Design Analysis of Rotor and Stator Blades of Subsonic Axial Flow Compressors Using Radial  Equilibrium and Fundamental Approach", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "Q4"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "8", "Details of Research Publication": "Analysis of Interfacial Heat Transfer Coefficients in Squeeze Casting of AA6061 Aluminum Alloy with H13 Steel Die: Impact of Section Thickness on Thermal Behavior ” Thermal Science, 28 (1), pp. 223-232.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "A study of the effect of curvature and pressure gradient on aerodynamics performance and turbulent structure of S-shaped compressor transition duct. Australian Journal of Mechanical Engineering, 21(3), pp. 1-16.", "Indexing": "ESCI/Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Influence of Mach number on the off-Design Performance of S-shaped compressor transition duct under the combined effect of curvature and pressure gradient. Australian Journal of Mechanical Engineering, 20(5), pp. 1-14.", "Indexing": "ESCI/Scopus", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Design optimization of a compressor transition S-shaped duct using a teaching–learning-based optimization algorithm. Journal of the Brazilian Society of Mechanical Sciences and  Engineering, 41(12), pp. 565.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Design optimization of S-shaped compressor transition duct using particle swarm optimization algorithm. SN Applied Sciences, 2(2), pp.1-17.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Review on Aerodynamics of Intermediate Compressor Duct,” Journal of  Mechanical Engineering and Sciences, 14(4), pp .7446-7468.", "Indexing": "ESCI/Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Flow characteristic study of contraction of compressor intermediate S-shaped duct facility in Proceedings of the 1st International Conference on Applied Mechanical Engineering Research, May 2-4,  2019, NIT Warangal (India)", "Indexing": "SCOPUS", "Publication": "Conference Proceedings", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "437594-001", "Title of the Patent": "AUTOMATED AGGREGATES IMPACT TESTING MACHINE", "Status": "Granted"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "431535-001", "Title of the Patent": "SOIL CORE SAMPLE COLLECTOR", "Status": "Granted"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Recipient of Best Paper Award on 3rd International Conference on Sustainable Technologies and Advances in Automation, Aerospace and Robotics at VIT Bhopal in 2024.",
            "Recipient of Elite-Silver Certificate for NPTEL Course on“Accreditation and Outcome Based Learning” conducted by IIT Kharagpur in 2024",
            "Recipient of Elite Certificate for NPTEL Course on“Fundamentals of Compressible Flow” conducted by IIT Guwahati in 2024",
            "Recipient of Elite-Silver Certificate for NPTEL Course on“ Aerodynamics design of axial flow compressor & Fans” conducted by IIT Kharagpur in 2023",
            "Recipient of Elite Certificate for NPTEL Course on“ Viscous Fluid Flow” conducted by IIT Guwahati  in 2023",
            "Recipient of Ministry of Human Resource Development (MHRD) scholarship at NIT Surat",
            "Recipient of Ministry of Human Resource Development (MHRD) scholarship at NIT Bhopal"
          ]
        }
      ]
    },

    "Dr. Thrinadh Jadam": {
      name: "Dr. Thrinadh Jadam",
      designation: "Asst. Professor",
      email: "drthrinadhj@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/thrinadh.jpeg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Production Engineering", "Branch": "Mechanical Engineering", "College Name/University": "National Institute of Technology (NIT), Rourkela", "Year of Passing": "2021"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Production Engineering", "Branch": "Mechanical Engineering", "College Name/University": "National Institute of Technology (NIT), Rourkela", "Year of Passing": "2017"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "RVR & JC College of Engineering, ANU", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57218384731"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/579189"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=jdOrULEAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "13"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2021 - 22", "Author Position": "1", "Details of Research Publication": "Electro-Discharge Machining (EDM) of Super Alloy Inconel 718 using Triangular Cross Sectioned Copper Tool Electrode: Emphasis on Topography and Metallurgical Characteristics of the EDMed Work Surface", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2021 - 22", "Author Position": "1", "Details of Research Publication": "Influence of cutting tool material on machinability of Inconel 718 super alloy, Machining Science and Technology, an International Journal", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Wear morphology of microwave post-treated WC-Co tool during machining of Inconel 718 superalloy, International Conference and Exposition on Mechanical, Material and Manufacturing", "Indexing": "Scopus", "Publication": "Conf. Proceedings", "Journal Quartile": "Q3"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Machinability of Ti-5Al-2.5Sn for Electro-Discharge Machining: An Experimental Investigation", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Studies on Chip Morphology and Modes of Tool Wear during Machining of Ti-6Al-4V using Uncoated Carbide Tool: Application of Multi- Walled Carbon Nano Tubes Added Rice Bran Oil as Nano cutting Fluid", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Machinability of Ti–6Al–4V Superalloy: Performance of Dry Cutting and Nanofluid MQL (MWCNT-Added Rice Bran Oil)", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Powder Mixed Electro- Discharge Machining Performance of Inconel 718: Effect of Concentration of Multi- Walled Carbon Nanotube Added to the Dielectric Media", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Machining Behavior of Inconel 718 Superalloy: Effects of Cutting Speed and Depth of Cut", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "EDM Performance of Inconel 718 Super Alloy: Application of Multi-Walled Carbon Nanotube (MWCNT) Added Dielectric Media", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2019 -20", "Author Position": "2", "Details of Research Publication": "Assessment of surface integrity during electrical discharge machining of titanium grade 5 alloys (Ti-6Al-4V)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q2"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2019 -20", "Author Position": "2", "Details of Research Publication": "Performance of dielectric media (conventional EDM oil and distilled water) during machining of Inconel 825 super alloy", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2019 -20", "Author Position": "1", "Details of Research Publication": "Study of Surface Integrity and Machining Performance during Main/Rough cut and Trim/Finish Cut Mode of WEDM on Ti-6Al-4V: Effects of Wire Material", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2019 -20", "Author Position": "3", "Details of Research Publication": "Electro-Discharge Machining Performance of Nimonic 80A: An Experimental Observation", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2018 -19", "Author Position": "1", "Details of Research Publication": "Effect of using SiC Power Added Dielectric Media during Electro-Discharge Machining of Inconel 718 Super Alloys", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2018 -19", "Author Position": "1", "Details of Research Publication": "Electro-Discharge Machining of Inconel 718 Using Square Cross Sectioned Copper Tool Electrode: Studies on Topography and Metallurgical Features of the EDMed Work Surface", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q2"},
            {"S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2018 -19", "Author Position": "2", "Details of Research Publication": "Application of SiC Power Added in Kerosene Dielectric Media for Electro-Discharge Machining of Inconel 718 Super Alloys: Effects of Powder Concentration", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q2"},
            {"S.No": "17", "Publication Affiliation": "Others", "Academic Year": "2018 -19", "Author Position": "3", "Details of Research Publication": "Effects of Addition of Copper Powder in the Dielectric Media (EDM Oil) on Performance of Electro-Discharge Machining of Inconel 718 Super Alloys", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q2"},
            {"S.No": "18", "Publication Affiliation": "Others", "Academic Year": "2017 -18", "Author Position": "1", "Details of Research Publication": "Analysis on Topography and Metallurgical Aspects of EDMed Work Surface of Inconel 718 Obtained Using Triangular Cross Sectioned Copper Tool Electrode", "Indexing": "ESCI", "Publication": "Conference Proceedings", "Journal Quartile": "None"}
          ]
        }
      ]
    },

    "Dr. Thota S S Bhaskara Rao": {
      name: "Dr. Thota S S Bhaskara Rao",
      designation: "Asst. Professor",
      email: "drbhaskararaotss@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/thota.jpg",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Solar Thermal Engineering", "Branch": "Mechanical Engineering", "College Name/University": "National Institute of Technology, Rourkela", "Year of Passing": "2023"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Thermal Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Gokul Group of Institutions, JNTU Kakinada", "Year of Passing": "2015"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Kakinada Institute of Technology and Sciences, JNTU Kakinada", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Research Areas",
          content: "Solar Thermal Engineering, Energy Storage, Solar Drying, Evacuated Tube Solar Collectors"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57224955076"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/445180"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=1FGvG0YAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "05"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Sustainable Gossypium arboreum biodiesel production using an industrial waste heterogeneous catalyst for RCCI engine applications. https://doi.org/10.1038/s41598-025-21878-7", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "Optimized multi-body modelling of automobile drivers for analysing biodynamic responses and ride comfort under whole-body vibration. https://doi.org/10.1177/09544070251384691", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "5", "Details of Research Publication": "Multimodal fusion of ultrasound images using HXM net for breast cancer diagnosis. https://doi.org/10.1038/s41598-025-23912-0", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Advanced prediction and optimization of VCR engine characteristics using response surface methodology with DFA for sustainable biofuel derived from waste lemon peel. https://doi.org/10.1038/s41598-025-20103-9.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Sustainable, Synthesis and Advanced Optimization of Prosopis Juliflora Biomass Catalyst for Efficient Biodiesel Production and Environmental Impact Assessment. https://doi.org/10.1038/s41598-025-88355-z", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Optimization of cashew nut shell biodiesel production with industrial waste catalysts and butanol additives for ecofriendly CRDI engine applications.  https://doi.org/10.1038/s41598-025-93805-9", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Performance investigation of drying Ashwagandha roots in a forced convection-evacuated tube indirect solar dryer. https://doi:10.1177/09544089231215949", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Experimental investigation of drying neem (Azadirachta indica) in an evacuated tube solar dryer: Performance, drying kinetics and characterization. https://doi.org/10.1016/j.solener.2023.02.031", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Assessment of energy, exergy, environmental, and economic study of an evacuated tube solar dryer for drying Krishna Tulsi. https://doi.org/10.1007/s11356-023-27085-z", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Energetic and exergetic performance of an evacuated tube U-type solar collector for medium temperature industrial process air heating: An experimental study https://doi.org/10.1007/978-981-99-7047-6_3", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Solar drying of medicinal herbs: A review https://doi.org/10.1016/j.solener.2021.05.065", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q1"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "Performance Enhance-ment and Exergy Analysis of Thermosyphon ETSC with TiO2 + CuO Hybrid Nanofluid. https://doi.org/10.1007/978-981-16-4489-4_6", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "444896-001", "Title of the Patent": "Battery Operated Banana Stem Peeling Machine", "Status": "Filed"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Best paper award for the paper titled “Bird Species Classification Using Convolutional Neural Networks and Data Augmentation” in the International conference on Interactive Design And Digital Manufacturing (ICIDDM 2K25)."
          ]
        }
      ]
    },

    "Dr. G. Veeresalingam": {
      name: "Dr. G. Veeresalingam",
      designation: "Asst. Professor",
      email: "drveeresalingamg@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Veeresalingam.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Industrial Design", "Branch": "Industrial Design", "College Name/University": "National Institute of Technology, Rourkela", "Year of Passing": "2023"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Machine Design", "Branch": "Mechanical Engineering", "College Name/University": "Indian Institute of Technology, Roorkee", "Year of Passing": "2013"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Pragati Engineering College, Surampalem", "Year of Passing": "2011"}
          ]
        },
        {
          title: "Research Areas",
          content: "Whole Body Vibration, Ergonomics, Biomechanics, Robotics, Artificial Intelligence, Machine Learning."
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57192106625"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/561494"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=iv_nztIAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "04"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Optimized Multi-Body Modelling of Automobile Drivers for Analysing Biodynamic Responses and Ride Comfort under Whole-Body Vibration", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "Multimodal Fusion of Ultrasound Images Using HXM Net for Breast Cancer Diagnosis", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "4", "Details of Research Publication": "Development of an Interface to Identify the Unregistered Boarders Accessing Hostel Amenities", "Indexing": "SCOPUS", "Publication": "Conference Proceedings", "Journal Quartile": ""},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "Advanced chatter detection in internal turning for industry 4.0: Adaptive Threshold Wavelet De-noising with enhanced ICEEMDAN–Hilbert fusion using Adaptive Probabilistic Neural Network", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "A state-of-the-art review on biomechanical models and biodynamic responses", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Ride comfort and segmental vibration transmissibility analysis of an automobile passenger model under whole body vibration", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Multi-body modelling and ride comfort analysis of a seated occupant under whole-body vibration", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Development and analysis of a novel biomechanical model for seated occupants", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "An improved biomechanical model to optimize biodynamic responses under vibrating medium", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Analysis of segmental vibration transmissibility of seated human", "Indexing": "SCOPUS", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Development of novel biodynamic model of the seated occupants", "Indexing": "SCOPUS", "Publication": "Article", "Journal Quartile": "None"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2021-22", "Application ID": "202131009459", "Title of the Patent": "Method and apparatus for continuous electric power generation using compressed air", "Status": "Under Examination"},
            {"S.No": "2", "Affiliation": "Others", "Academic Year": "2021-22", "Application ID": "202211018418", "Title of the Patent": "Non-Thermal Plasma Reactor Suitable for Real-Time Diesel Exhaust Treatment at High Flow Rates", "Status": "Filed"},
            {"S.No": "3", "Affiliation": "Others", "Academic Year": "2021-22", "Application ID": "371217 - 001", "Title of the Patent": "Hassle free-swing hook", "Status": "Granted"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Secured All India Rank 677 with a GATE score of 635 and an estimated 99.17 percentile among 81,175 candidates in the GATE 2011 examination, scoring 60.67 marks out of 100."
          ]
        }
      ]
    },

    "Dr. Jagannath Pattar": {
      name: "Dr. Jagannath Pattar",
      designation: "Asst. Professor",
      email: "jagannathp@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Jagannath Pattar.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Material Science & Tribology", "Branch": "Mechanical Engineering", "College Name/University": "Sri Siddhartha Academy of Higher Education, Tumkur", "Year of Passing": "2024"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Product Design and Manufacturing", "Branch": "Mechanical Engineering", "College Name/University": "Sri Siddhartha Academy of Higher Education, Tumkur", "Year of Passing": "2015"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "K.V.G College Of Engineering, VTU University, Belgaum", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Research Areas",
          content: "Metal Matrix Composites, Additive Manufacturing, Tribology"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=58297590600"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/460883"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=GrQ00u0AAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "1"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025–26", "Author Position": "1", "Details of Research Publication": "Multifunctional Epoxy Composites with Nutmeg Fiber and Banana Peel Carbon Quantum Dots for EMI Shielding", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024–25", "Author Position": "1", "Details of Research Publication": "Influence of Hybrid Fiber Reinforcement on the Interfacial Bonding and Fracture Toughness of Epoxy-Based Polymer Composites Under Cyclic Loading", "Indexing": "ESCI", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024–25", "Author Position": "1", "Details of Research Publication": "The Design and Development of a Four-Way Hacksaw Machine: A Design Thinking Approach", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "Q3"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2024–25", "Author Position": "1", "Details of Research Publication": "Investigation of AA6063-Based Metal Matrix Composite Reinforced with TiO₂ Dispersoids for Its Mechanical, Tribological, and Microstructural Characteristics through Digitally Assisted Techniques", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Study of the Mechanical Properties of Composite Materials AA6063 Reinforced with B4C & TiO₂ for Engineering Application", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Micro grids with Day-Ahead Energy Forecasting for Efficient Energy Management in Smart Grids: Hybrid CS-RERNN", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Investigating the Multifaceted Applications of Nanotechnology in Wireless Sensor Networks for Environmental Monitoring: Advancing Monitoring Capabilities for a Sustainable Future", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "A Study of Density Calculation for Composite Materials Aluminum Alloy 6063 Reinforced with TiO₂ and B₄C Hybrid MMCs", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "1", "Details of Research Publication": "Design, Fabrication and Testing of Automatic Side Stand Retrieval System Using Electronic Components", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Study on Fatigue Possessions of Glass Epoxy Composite Laminate", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2018-19", "Author Position": "1", "Details of Research Publication": "Study on Behavior of Ilmenite as Reinforcing Element on Properties of Al2014 Based MMC by Stir Casting Method", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2015-16", "Author Position": "1", "Details of Research Publication": "Design and Fabrication of Environmental Friendly Areca Nut Collecting and Bagging Agri-Machine", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2022–23", "Application ID": "382628-001", "Title of the Patent": "Automated Joint Pain Relief Chair", "Status": "Granted"}
          ]
        }
      ]
    },

    "Dr. Ved Prakash": {
      name: "Dr. Ved Prakash",
      designation: "Asst. Professor",
      email: "drvedprakash@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Ved Prakash.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Design", "Branch": "Mechanical Engineering", "College Name/University": "National Institute of Technology, Rourkela", "Year of Passing": "2024"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "National Institute of Technology, Rourkela", "Year of Passing": "2018"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "R.G.P.V, Bhopal", "Year of Passing": "2010"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57219024696"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/561578"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=We3srvMAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "7"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Evaluation of dry sliding wear behavior of abaca/glass fiber hybrid composite for tribological applications", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "The Role of Impingement Angle and Velocity on the Solid Particle Erosion Behavior of Agave Lechuguilla Fiber-Reinforced Polymer Composite", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Effect of Drying Route and Sintering Temperature on Zirconia Nanoparticle Synthesis for Filler Application in Polymer Composites", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Influence of alkali treatment on the interfacial shear strength of Agave lechuguilla fiber and its significance as a reinforcing material in polymer composites for mechanical applications", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Effect of stacking sequence on abrasive wear behavior of abaca natural fiber reinforced polymer composites hybridized with glass fiber", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Influence of fiber surface modification on impact strength behaviour of Agave Lechuguilla fiber reinforced polymer composites", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "Influence of Chemical Modification on Structural, Morphological, Thermal, and Weathering Behavior of Eulaliopsis Binata Fiber and Its Composites", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "Bio waste (Pistacia vera nut shell) filled polymer composites for tribological applications.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "Dry Sliding Wear Behaviour of Epoxy/Biochar Composites.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "10", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "2", "Details of Research Publication": "Effect of weathering on physical and mechanical characteristics of eulaliopsis binata fiber/epoxy composites", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "11", "Publication Affiliation": "Others", "Academic Year": "2021-22", "Author Position": "3", "Details of Research Publication": "Abrasive Wear Behavior of Bio-Fiber-Reinforced Epoxy Composite with Taguchi Approach.", "Indexing": "Scopus", "Publication": "Book Chapter", "Journal Quartile": "None"},
            {"S.No": "12", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Tribological behavior of Syngonanthus nitens natural fiber reinforced epoxy composite.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "13", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "2", "Details of Research Publication": "Erosion wear behaviour of A357/fly ash composites. Proceedings of the Institution of Mechanical Engineers", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "14", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "2", "Details of Research Publication": "Effect of Heat Treatment on Wear Behavior of A357/Cenosphere Composites. Transactions of the Indian Institute of Metals", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "15", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "2", "Details of Research Publication": "Modelling and parametric analysis of erosion wear response of Eulaliopsis Binata fiber polymer composites using response surface methodology", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "None"},
            {"S.No": "16", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "3", "Details of Research Publication": "Mechanical, morphological, and tribological behavior of Eulaliopsis binata fiber epoxy composites.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "17", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "3", "Details of Research Publication": "Effect of stacking sequence on the tribological behaviour of jute-glass hybrid epoxy composite", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "None"},
            {"S.No": "18", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Potential of Syngonanthus nitens fiber as a reinforcement in epoxy composite and its mechanical characterization.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "19", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "1", "Details of Research Publication": "Mechanical and erosive wear behavior of rubber wood particulate reinforced epoxy composite", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"},
            {"S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2019-20", "Author Position": "3", "Details of Research Publication": "Moisture absorption and thickness swelling behaviour of luffa fibre/epoxy composite", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "446255-001", "Title of the Patent": "Pin-on-Disk Tester with Integrated Motion Mechanism", "Status": "Granted"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "464951-001", "Title of the Patent": "Power Line Inspection Robot", "Status": "Granted"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "411602-001", "Title of the Patent": "Solid Lubricate Bearing", "Status": "Granted"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Best paper award in “4th International conference on processing and characterization of material (ICPCM 2022)”. NIT Rourkela, Odisha, 09 – 11 Dec. 2022.",
            "Best poster award in “3rd International Conference on Processing and Characterization of Materials (ICPCM 2021)”. NIT Rourkela, Odisha, 7 – 8 Dec. 2021."
          ]
        }
      ]
    },

    "Dr. Gejendhiran. S": {
      name: "Dr. Gejendhiran. S",
      designation: "Asst. Professor",
      email: "gejendhirans@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Gejendhiran.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "National Institute of Technology, Puducherry", "Year of Passing": "2024"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Engineering Design", "Branch": "Mechanical Engineering", "College Name/University": "Kongu Engineering College, Anna University", "Year of Passing": "2014"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Anna University, Coimbatore", "Year of Passing": "2011"}
          ]
        },
        {
          title: "Research Areas",
          content: "Surface Coatings, Additive Manufacturing, Welding"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=56287939500"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/387663"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.co.in/citations?hl=en&user=s1c_8bQAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "04"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "Experimental studies on dilution, microstructural, mechanical and wear characteristics of Inconel 718 deposited over stainless steel 304 employing cold metal transfer process.\" Materials Letters (2024): 137795.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "“Effect of cold metal transfer process on hardfacing of Inconel 718 over stainless steel 304.\" Materials Letters (2024): 137030.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Experimental investigations on Inconel 718 hard-faced layer deposited over SS304 using cold metal transfer.\" Surface and Coatings Technology (2023): 129739.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Experimental study on mechanical, damping and corrosion properties of Inconel 718 hard-faced stainless steel 304 using cold metal transfer. Engineering Failure Analysis (2023): 107871.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "4", "Details of Research Publication": "Mechanical and Tribology Behavior of Hard-Faced Inconel 718 on Stainless Steel 321. Surface Review and Letters (2023): 2450025.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Dissimilar Welding of Nickel-Based Superalloy-A Review. Advances in Science and Technology 130 (2023): 3-11.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "Disruptive Technologies - A promising key for Sustainable Future Education”. Procedia Computer Science (Elsevier). 2020.", "Indexing": "SCOPUS", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "8", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "1", "Details of Research Publication": "“Process Parameters Optimization for Improving the Mechanical Properties of IS2062 Mild steel Weldments by GMAW”. International Journal of Innovative Technology and Exploring Engineering (IJITEE). Vol. 8 pp.1144-1149.", "Indexing": "SCOPUS", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "9", "Publication Affiliation": "Others", "Academic Year": "2014 -15", "Author Position": "2", "Details of Research Publication": "Comparative investigation of mechanical properties in GMAW/ GTAW for various shielding gas composition. Materials and Manufacturing Processes, Taylor & Francis.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024 - 2025", "Application ID": "202541074623", "Title of the Patent": "An Oral Care Hygiene System", "Status": "Published"}
          ]
        },
        {
          title: "Consultancy",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2017", "Client/Organization": "Subavalar Industries", "Project": "5S implementation", "Amount": "3,000"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Received Innovative Professional Award from Society of Professional Engineers.",
            "Received Best Faculty Award from Top Engineers, Chennai.",
            "Received Best Proctor Award from Nandha Engineering College.",
            "Awarded as Top Performing Mentor from Swayam – NPTEL."
          ]
        }
      ]
    },

    "Dr. Muthu Lakshmanan": {
      name: "Dr. Muthu Lakshmanan",
      designation: "Asst. Professor",
      email: "muthulakshmanan@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Muthu Laxmanan.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Design", "Branch": "Mechanical Engineering", "College Name/University": "SIMATS University, Chennai", "Year of Passing": "2025"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Mechanical", "Branch": "Mechanical Engineering", "College Name/University": "Anna University, Chennai", "Year of Passing": "2011"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical", "Branch": "Mechanical Engineering", "College Name/University": "Madurai Kamaraj University, Chennai", "Year of Passing": "2003"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57200605528"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/460993/NDYwOTkz"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&authuser=2&user=VxAgjdoAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "03"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "Analysis of Characteristics of PCM Inside Altered Design of Shell and Tube Thermal Energy Storage Unit. International Journal of Vehicle Structures & Systems, Vol. 17 No. 1 (2025)", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "6", "Details of Research Publication": "Analysis of Thermal Heat Transfer Systems Integrated with Foam of Polystyrene into Phase Change Materials. International Journal of Vehicle Structures & Systems, 12(1), 234-240 ISSN: 0975-3060 (Print), 0975-3540.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "4", "Details of Research Publication": "Mechanical, wear, hydrophobic, and thermal behavior of waste cassava root cellulose and twill- weaved banana fiber-reinforced unsaturated polyester composites DOI: 10.1007/s13399-024-05349-z", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "An investigation into cut surface quality of Al6061/Al2O3 /B4C composite using hydro-abrasive machining process. DOI: 10.1063/5.0192582.", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Wear behavior of heat treated, and chromium nitride coated 316L SS steel against steel ball in wet condition, AIP Conference Proceedings 2747, 020012 (2023)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Tribological investigation of shot peened NiP-CN electroless coating on EN31 steel.  AIP Conference Proceedings 2747, 020021 (2023)", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"},
            {"S.No": "7", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Grey Incidence Method on Abrasive Water Jet Machining of Al7075/Al2O3 Composite. ARPN Journal of Engineering and Applied Sciences, Vol. 17, No. 11, June 2022, ISSN 1819-6608.", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "Others", "Academic Year": "2021", "Application ID": "20194104289A", "Title of the Patent": "Performance Analysis of Four Stroke SI Engine Using Distilled Water", "Status": "Granted"}
          ]
        }
      ]
    },

    "Dr. A. Pruthvi Deep": {
      name: "Dr. A. Pruthvi Deep",
      designation: "Asst. Professor",
      email: "pruthvideepa@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Pruthvi Deep.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "National Institute of Technology, Durgapur", "Year of Passing": "2025"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Refrigeration & Air Conditioning", "Branch": "Mechanical Engineering", "College Name/University": "JNTU Anantapuramu", "Year of Passing": "2014"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechatronics", "Branch": "Mechatronics", "College Name/University": "SASTRA University, Thanjavur", "Year of Passing": "2011"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=58809013400"},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/590276"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?hl=en&user=jTtuzfcAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "03"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Techno-Economic Analysis of 500 MWe Supercritical Thermal Power Plant with the Integration of Solid Oxide Fuel Cell", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "2", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "Thermodynamic and Economic Analysis of a Standalone Supercritical Thermal Power Plant Integratd with Molten Carbonate Fuel Cell", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "1", "Details of Research Publication": "An equilibrium modelling and a parametric study of gasification process", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "4", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Thermodynamic analysis of a reconfigured 500 MWe supercritical thermal power plant by integrating solid oxide fuel cell and a gas turbine", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "5", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "1", "Details of Research Publication": "Thermodynamic analysis of a coal fired supercritical thermal power plant integrated with molten carbonate fuel cell powered by coal gasification", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "6", "Publication Affiliation": "Others", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Thermodynamic Analysis of Integrated Gasification Combined Cycle Integrated with Organic Rankine Cycle for Waste Heat Utilization", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"}
          ]
        }
      ]
    },

    "Mr. S. Manoj Kumar": {
      name: "Mr. S. Manoj Kumar",
      designation: "Asst. Professor",
      email: "manojkumars@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Manoj Kumar.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Anna University, Chennai", "Year of Passing": "Pursuing"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Advanced Manufacturing", "Branch": "Mechanical Engineering", "College Name/University": "Coimbature Institute Of Technology, Anna University", "Year of Passing": "2011"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "KanchiPallavan Engineering College, Anna University", "Year of Passing": "2008"}
          ]
        },
        {
          title: "Research Areas",
          content: "Material science, Polymer, Surface Engineering, Tribology"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57223696164"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/274375"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=oMIiJYAAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": "06"}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "2", "Details of Research Publication": "Development and characterization of Loofah vine stem fiber–volcanic pumice dust reinforced 3d printed bio composites: mechanical, wear, thermal, and wettability analysis Published: 21-May-2026 https://doi.org/10.1007/s11696-026-04894-3", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Role of biomass‑extracted natural fiber and copper oxide/nickel oxide nanoparticle‑reinforced vinyl ester composite and its characterization study. Published: 22-March-2026 https://doi.org/10.1007/s10973-025-15037-3", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "Multi-response optimization of bamboo/PALF–TiC hybrid composites for enhanced mechanical and tribological performance. Published online: 7 January 2026 https://doi.org/10.1051/epjconf/2026345010624", "Indexing": "Scopus", "Publication": "Conference", "Journal Quartile": "Q4"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "5", "Details of Research Publication": "Optimizing Fabrication Parameters for Carbon and Hemp Fiber Reinforced Bio-Composites in Automotive Applications: A Study using Response Surface Methodology Published: 25 November 2025 https://doi.org/10.4273/ijvss.17.4.28", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "Effect of aging conditions on surface-modified biochar and nutmeg short fiber-reinforced polyester composite: properties and performance Published: 26 Nov 2025 https://doi.org/10.1080/09276440.2025.2574156", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "6", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "Hybrid PVA composites with basalt fibre and functionalized biocarbon: Mechanical strengthening and EMI shielding efficiency. Journal of Thermoplastic Composite Materials. 2025 Published: 07 Nov 2025 https://doi.org/10.1177/08927057251382851", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q1"},
            {"S.No": "7", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Effect of High Temperature-Treated SI2N2O on Mechanical, Tribology, Fatigue, and Creep Behavior of AA7075 Metal Matrix Composite https://doi.org/10.1142/S0218625X25501884", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "8", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Load Bearing Performance of Alkali-Silane-Treated Pineapple Fiber and Polyethylene Terephthalate Core-Reinforced Sandwich Composite for Building Applications.  https://doi.org/10.1007/s12649-025-03225-z", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "9", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "3", "Details of Research Publication": "Evaluation of Dielectric, Magnetic, Mechanical and EMI Shielding Behaviours of Flexible PVA Composites Incorporated with Bio-Carbon Particles and Basalt Fiber.  https://doi.org/10.1007/s12649-025-03182-7", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "10", "Publication Affiliation": "MITS", "Academic Year": "2025-26", "Author Position": "1", "Details of Research Publication": "Mechanical, Tribological, Thermal Conductivity and Flame Retardant Behaviour of Natural Fibre and Biomass Derived Biochar Toughened Vinyl Ester Eco-Friendly Composite: A Sustainable Automotive Material", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "11", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Mechanical, wear, fatigue, water absorption and flammability of silane-treated Indian squid chitin powder-dispersed pineapple fiber-polyester composite.  https://doi.org/10.1007/s00289-024-05589-z", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "12", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "2", "Details of Research Publication": "Effect of wheat husk biogenic ceramic Si3N4 addition on mechanical, wear and flammability behaviour of castor sheath fibre-reinforced epoxy composite.  https://doi.org/10.1007/s41779-025-01153-8", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q3"},
            {"S.No": "13", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "3", "Details of Research Publication": "Enhancement of mechanical, microstructural and fatigue properties of cassava tuber peel biosilica toughened dissimilar AA 6061-AZ31B Mg welds. https://doi.org/10.1007/s00289-025-05732-4", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "14", "Publication Affiliation": "MITS", "Academic Year": "2024-25", "Author Position": "1", "Details of Research Publication": "IoT-Driven Mushroom Farm Automation Using Neural Turing Machines 10.1109/ICMNWC63764.2024.10872242", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Others"},
            {"S.No": "15", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "3", "Details of Research Publication": "Characterization of heat-treated bio silica from biomass waste fox tail millet husks and banana fiber reinforced epoxy composite. https://doi.org/10.1007/s13399-024-05411-w", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "16", "Publication Affiliation": "MITS", "Academic Year": "2023-24", "Author Position": "2", "Details of Research Publication": "Mechanical, wear, hydrophobic, and thermal behavior of waste cassava root cellulose and twill-weaved banana fiber-reinforced unsaturated polyester composites.  https://doi.org/10.1007/s13399-024-05349-z", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "17", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "2", "Details of Research Publication": "Mechanical, Dielectric and Thermal Stability of Silicon Oxynitride Nanoparticle Dispersed Tamarind Fiber-Reinforced Epoxy  https://doi.org/10.1007/s12633-023-02320", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "18", "Publication Affiliation": "MITS", "Academic Year": "2022-23", "Author Position": "3", "Details of Research Publication": "Wear behavior of heat treated and chromium nitride coated 316L SS steel against steel ball in wet condition. https://doi.org/10.1063/5.0132535", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Others"},
            {"S.No": "19", "Publication Affiliation": "MITS", "Academic Year": "2021-22", "Author Position": "4", "Details of Research Publication": "Tribological Investigation of Shot Peened NiP-CN Electroless Coating on EN31 Steel. https://doi.org/10.1063/5.0132537", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Others"},
            {"S.No": "20", "Publication Affiliation": "Others", "Academic Year": "2020-21", "Author Position": "4", "Details of Research Publication": "Effect of Silicon Coupling Grafted Ferric Oxide and E-Glass Fibre in Thermal Stability, Wear and Tensile Fatigue Behaviour of Epoxy Hybrid Composite.  https://doi.org/10.1007/s12633-019-00347-7", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2026", "Application ID": "468338-001", "Title of the Patent": "SENSOR-BASED DEVICE FOR OPTIMIZING CARBON SEQUESTRATION AND PLANT GROWTH", "Status": "Granted"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "471917-001", "Title of the Patent": "THERMO-MECHANICAL LEAF STRAIGHTENING MACHINE", "Status": "Granted"},
            {"S.No": "3", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "471598-001", "Title of the Patent": "IOT-ENABLED DEVICE FOR THE CONTROLLED SYNTHESIS OF NANOPARTICLES", "Status": "Granted"},
            {"S.No": "4", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "459421-001", "Title of the Patent": "IOT BASED ADDITIVE MANUFACTURING DEVICE", "Status": "Granted"},
            {"S.No": "5", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "459419-001", "Title of the Patent": "CLOUD BASED HEALTHCARE MONITORING SYSTEM USING IOT", "Status": "Granted"},
            {"S.No": "6", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "448272-001", "Title of the Patent": "CONSTRUCTION MATERIAL TESTING DEVICE", "Status": "Granted"},
            {"S.No": "7", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "443274-001", "Title of the Patent": "SOLAR POWERED SEAWATER DESALINATION APPARATUS", "Status": "Granted"},
            {"S.No": "8", "Affiliation": "MITS", "Academic Year": "2025", "Application ID": "443930-001", "Title of the Patent": "AI BASED CARBON POLLUTION DETECTING DEVICE", "Status": "Granted"},
            {"S.No": "9", "Affiliation": "MITS", "Academic Year": "2024", "Application ID": "0234108659 A", "Title of the Patent": "SYSTEM AND METHOD FOR EXPLORING NEW MATERIALS AND ALLOYS FOR HIGH-PERFORMANCE WELDED STRUCTURES", "Status": "Filed"},
            {"S.No": "10", "Affiliation": "MITS", "Academic Year": "2024", "Application ID": "202341057325 A", "Title of the Patent": "MACHINE LEARNING-BASED APPROACHES TO ANALYZE THE VEHICLE ACTIVE STEERING STABILITY CONTROL BASED ON VARIABLE TIME DOMAIN INPUT AND STATE INFORMATION PREDICTION IN A SUPERCAPACITOR FOR ENERGY STORAGE", "Status": "Filed"}
          ]
        },
        {
          title: "Consultancy",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2025-2026", "Client/Organization": "MATTEST POWER PRIVATE LIMITED", "Project": "CNC MACHINING WORK", "Amount": "35000"},
            {"S.No": "2", "Affiliation": "MITS", "Academic Year": "2024-2025", "Client/Organization": "ANNA UNIVERSITY CHENNAI", "Project": "HEAT TREATMENT", "Amount": "5000"}
          ]
        }
      ]
    },

    "Mr. Pujari Rajesh": {
      name: "Mr. Pujari Rajesh",
      designation: "Asst. Professor",
      email: "rajeshp@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/Pujari Rajesh.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Welding Engineering", "Branch": "Metallurgy and Materials Engineering", "College Name/University": "National Institute of Technology, Tiruchirappalli", "Year of Passing": "Pursuing"},
            {"S.No": "2", "Course": "M.Tech.", "Specialization": "Advanced Manufacturing Systems", "Branch": "Mechanical Engineering", "College Name/University": "Madanapalle Institute of Technology and Science, Madanapalle", "Year of Passing": "2015"},
            {"S.No": "3", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Sri Krishnadevaraya Engineering College, Gooty, Anantapuramu", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Research Areas",
          content: "Manufacturing"
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": ""},
            {"Identifier": "Vidwan", "Link": "https://mits.irins.org/profile/272680"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.co.in/citations?user=UiwlnNoAAAAJ"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": ""}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2014-15", "Author Position": "1", "Details of Research Publication": "Experimental and Parametric Studies of Nd:YAG laser Drilling on Austenitic Stainless Steel, International journal of Advanced Manufacturing Technology. Springer, August 8th 2015, ISSN: 0268-3768.", "Indexing": "SCIE", "Publication": "Article", "Journal Quartile": "Q1"}
          ]
        },
        {
          title: "Consultancy",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2022-23", "Client/Organization": "Adithya Engineering College", "Project": "Optimization of Machining Parameters", "Amount": "2,500"}
          ]
        },
        {
          title: "Awards/Achievements",
          content: [
            "Best NSS Programme Officer by JNTU Anantapur"
          ]
        }
      ]
    },

    "Mr. G. Kumar": {
      name: "Mr. G. Kumar",
      designation: "Asst. Professor",
      email: "kumarg@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/G. Kumar.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "Ph.D.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "VELS University", "Year of Passing": "Pursuing"},
            {"S.No": "2", "Course": "M.E.", "Specialization": "Computer Aided Design", "Branch": "Mechanical Engineering", "College Name/University": "Sathyabama University", "Year of Passing": "2009"},
            {"S.No": "3", "Course": "B.E.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Adhiparasakthi Engineering college, University of Madras", "Year of Passing": "2002"}
          ]
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=59771450000"},
            {"Identifier": "Vidwan", "Link": ""},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=R83Fxd4AAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": ""}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "MITS", "Academic Year": "2025-2026", "Author Position": "3", "Details of Research Publication": "Innovative building thermal insulation: Bamboo fiber-based eco-composite with eggshell Powder and cardboard waste reinforcement", "Indexing": "Scopus", "Publication": "Article", "Journal Quartile": "Q4"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2024-2025", "Author Position": "3", "Details of Research Publication": "Mechanical and Structural Characterization of Curauá Fiber, Sugarcane Biochar, and Poly Lactic Acid Hybrid Green Composites for Sustainable Biomass Utilization.", "Indexing": "SCI", "Publication": "Article", "Journal Quartile": "Q2"},
            {"S.No": "3", "Publication Affiliation": "MITS", "Academic Year": "2023-2024", "Author Position": "2", "Details of Research Publication": "Experimental investigation of mechanical and erosion properties of twill E-glass/sisal fiber reinforced hybrid polymer composite", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q3"},
            {"S.No": "4", "Publication Affiliation": "MITS", "Academic Year": "2022-2023", "Author Position": "6", "Details of Research Publication": "Wear behavior of heat treated and chromium nitride coated316L SS steel against steel ball in wet condition", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"},
            {"S.No": "5", "Publication Affiliation": "MITS", "Academic Year": "2022-2023", "Author Position": "6", "Details of Research Publication": "Tribological investigation of shot peened NiP-CN electroless coating on EN31 steel", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"}
          ]
        }
      ]
    },

    "Mr. P. Mohammed Rizwan Ali": {
      name: "Mr. P. Mohammed Rizwan Ali",
      designation: "Asst. Professor",
      email: "rizwanalip@mits.ac.in",
      officeAddress: "East Block",
      image: "https://mits.ac.in/public/uploads/faculty/rizwan ali.JPG",
      sections: [
        {
          title: "Details of Educational Qualification",
          content: [
            {"S.No": "1", "Course": "M.Tech.", "Specialization": "Advanced Manufacturing Systems", "Branch": "Mechanical Engineering", "College Name/University": "Madanapalle Institute of Technology and Science, JNTUA", "Year of Passing": "2015"},
            {"S.No": "2", "Course": "B.Tech.", "Specialization": "Mechanical Engineering", "Branch": "Mechanical Engineering", "College Name/University": "Fathima Institute of Technology and Management, JNTUA", "Year of Passing": "2013"}
          ]
        },
        {
          title: "Research Areas",
          content: "3D Printing, Additive manufacturing, composites, polymers."
        },
        {
          title: "Research Identifiers",
          content: [
            {"Identifier": "Scopus", "Link": "https://www.scopus.com/authid/detail.uri?authorId=57219993746"},
            {"Identifier": "Vidwan", "Link": "https://vidwan.inflibnet.ac.in/profile/562005"},
            {"Identifier": "Google scholar", "Link": "https://scholar.google.com/citations?user=aEmB69wAAAAJ&hl=en"},
            {"Identifier": "h-Index (As per Scopus Data)", "Link": ""}
          ]
        },
        {
          title: "Publication Details",
          content: [
            {"S.No": "1", "Publication Affiliation": "Others", "Academic Year": "2022-23", "Author Position": "6", "Details of Research Publication": "The influence of Machine Learning in Additive Manufacturing. https://link.springer.com/chapter/10.1007/978-981-19-5347-7_29", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"},
            {"S.No": "2", "Publication Affiliation": "MITS", "Academic Year": "2019-20", "Author Position": "3", "Details of Research Publication": "Experimentation and Process Parametric Optimization of 3D printing of ABS based Polymer parts. https://link.springer.com/chapter/10.1007/978-981-15-4739-3_42", "Indexing": "Scopus", "Publication": "Conference Proceedings", "Journal Quartile": "Q4"}
          ]
        },
        {
          title: "Patents",
          content: [
            {"S.No": "1", "Affiliation": "MITS", "Academic Year": "2024-25", "Application ID": "443252-001", "Title of the Patent": "Feed stock filament Extruder", "Status": "Published"}
          ]
        }
      ]
    }
};
