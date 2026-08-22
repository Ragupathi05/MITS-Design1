// Central Library — official data (source: attached Central Library Details doc + mits.ac.in)

export interface LibStat {
  key: string;
  label: string;
  value: number;
  suffix?: string;
  note?: string;
}

export const libraryStats: LibStat[] = [
  { key: "titles", label: "Book Titles", value: 10507, note: "Incl. 597 complimentary & donated" },
  { key: "volumes", label: "Total Volumes", value: 64003 },
  { key: "reference", label: "Reference Books", value: 10507 },
  { key: "ebooks", label: "E-Books", value: 14225, note: "Incl. DELNET, NDL & GDLC" },
  { key: "ejournals", label: "E-Journals", value: 3406, note: "IEEE, Springer, EBSCO" },
  { key: "projectReports", label: "Project Reports", value: 5009 },
  { key: "boundVolumes", label: "Bound Volumes", value: 587 },
  { key: "cdroms", label: "CD-ROM Collection", value: 2002 },
  { key: "digitalSystems", label: "Digital Library Systems", value: 30 },
  { key: "newspapers", label: "Newspapers", value: 12, note: "10 Telugu + 5 English" },
  { key: "periodicals", label: "Intl. & National Journals", value: 136 },
  { key: "magazines", label: "Magazines", value: 14 },
];

export interface DigitalResource {
  name: string;
  count?: string;
  desc: string;
  category: "Journals" | "E-Books" | "Network" | "Platform" | "Software";
  href?: string;
}

export const digitalResources: DigitalResource[] = [
  { name: "IEEE Digital Library", count: "219 journals", desc: "Full-text access to IEEE's premier engineering and technology research journals.", category: "Journals", href: "https://ieeexplore.ieee.org/" },
  { name: "Springer Nature", count: "776 journals", desc: "Peer-reviewed research spanning science, technology and medicine.", category: "Journals", href: "https://link.springer.com/" },
  { name: "EBSCO (Management)", count: "1,510 journals", desc: "Comprehensive management, business and social sciences database.", category: "Journals", href: "https://www.ebsco.com/" },
  { name: "DELNET", count: "1,000+ e-books", desc: "Developing Library Network — resource sharing (Membership ID: IM-9078).", category: "Network", href: "https://delnet.in/" },
  { name: "National Digital Library (NDL)", count: "3,200+ e-books", desc: "Government of India's virtual repository of learning resources.", category: "E-Books", href: "https://ndl.iitkgp.ac.in/" },
  { name: "INFLIBNET SOUL 3.0", desc: "Software for University Libraries — integrated library management system.", category: "Software", href: "https://inflibnet.ac.in/soul/" },
];

export const memberships = [
  { title: "DELNET", id: "IM-9078", desc: "Developing Library Network membership for national resource sharing." },
  { title: "National Digital Library of India", id: "Institutional Member", desc: "IIT Kharagpur-hosted digital library repository." },
  { title: "NDL Club", id: "INTGNC5MX4PHLSJ", desc: "Officially registered NDL Club with unique institutional ID." },
];

export const facilities = [
  { title: "Digital Library", desc: "30 dedicated systems with high-speed internet access for digital learning and research." },
  { title: "SOUL 3.0", desc: "INFLIBNET software for circulation, cataloguing and OPAC-based discovery." },
  { title: "Photocopying", desc: "In-house photocopy service for approved materials." },
  { title: "Printing", desc: "Print facility for academic and research documents." },
  { title: "Scanning", desc: "Document and page scanning for digital archiving." },
  { title: "Barcoding", desc: "Barcode-enabled circulation and inventory management." },
  { title: "Reading Hall", desc: "Spacious reading spaces for individual and group study." },
  { title: "Reference Section", desc: "Curated reference books, encyclopedias and manuals." },
  { title: "Internet & Wi-Fi", desc: "Campus-wide internet access throughout the library." },
];

export const services = [
  { title: "Book Lending", desc: "Circulation of books to students, faculty and staff." },
  { title: "Reference Services", desc: "Assistance in locating information and research material." },
  { title: "Digital Access", desc: "Access to e-books, e-journals and digital databases." },
  { title: "Journal Access", desc: "Print and online journal subscriptions across disciplines." },
  { title: "Research Support", desc: "Literature search, citation and plagiarism-check guidance." },
  { title: "Library Membership", desc: "Membership issuance for all campus stakeholders." },
  { title: "Document Delivery", desc: "Inter-library document delivery via DELNET." },
  { title: "Online Catalogue (OPAC)", desc: "Web-based catalogue search for the entire collection." },
  { title: "Current Awareness", desc: "Alerts on new arrivals, journals and research updates." },
];

export const collections = [
  { title: "Books", value: "64,003 vols" },
  { title: "Reference Books", value: "10,507" },
  { title: "Journals", value: "136 print + 3406 e-journals" },
  { title: "Magazines", value: "14 titles" },
  { title: "Newspapers", value: "12" },
  { title: "Project Reports", value: "5,009" },
  { title: "CD-ROM Collection", value: "2,002" },
  { title: "Digital Content", value: "4,200+" },
  { title: "Research Resources", value: "IEEE • Springer • EBSCO" },
];

export const quickAccess = [
  { title: "IEEE Xplore", href: "https://ieeexplore.ieee.org/" },
  { title: "Springer Nature", href: "https://link.springer.com/" },
  { title: "EBSCO", href: "https://www.ebsco.com/" },
  { title: "DELNET", href: "https://delnet.in/" },
  { title: "National Digital Library of India", href: "https://ndl.iitkgp.ac.in/" },
];

export const libraryContact = {
  location: "Central Library, MITS Campus, Angallu (V), Madanapalle – 517325, Chittoor Dist., A.P.",
  email: "library@mits.ac.in",
  phone: "+91 8571 280255",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 10:00 PM" },
    { day: "Saturday", time: "9:00 AM – 5:00 PM" },
    { day: "Sunday & Holidays", time: "Closed" },
  ],
};
