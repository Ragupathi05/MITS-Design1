export type NewsEventItem = {
  slug: string;
  date: string;
  title: string;
  category: "Event" | "News" | "Announcement";
  image: string;
  location: string;
  excerpt: string;
  details: string;
};

export const getNewsEventImageSrc = (imagePath: string) => {
  const normalizedPath = imagePath.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
};

export const newsEvents: NewsEventItem[] = [
  {
    slug: "3k-run-for-fitness-and-student-wellbeing",
    date: "Feb 24, 2026",
    title: "3K Run for Fitness and Student Wellbeing",
    category: "Event",
    image: "news-events/3k-run.jpg",
    location: "MITS Campus Grounds",
    excerpt: "Students and faculty joined a campus-wide 3K fitness run promoting health and team spirit.",
    details:
      "The Physical Education Department hosted a vibrant 3K run with participation from students, faculty, and staff. The event focused on wellness, discipline, and active campus life. Participation certificates were issued to all finishers, and top performers were recognized during the closing ceremony.",
  },
  {
    slug: "aimex-2026-innovation-and-entrepreneurship-expo",
    date: "Feb 18, 2026",
    title: "AIMEX 2026: Innovation and Entrepreneurship Expo",
    category: "News",
    image: "news-events/aimex-2026.jpg",
    location: "MITS Innovation Hub",
    excerpt: "Young innovators presented prototypes and startup ideas during the AIMEX 2026 showcase.",
    details:
      "AIMEX 2026 highlighted student-led projects in AI, IoT, robotics, and sustainable technologies. Industry mentors reviewed prototypes and provided live feedback on product design, commercialization, and funding opportunities. The expo strengthened collaboration between academia, startups, and corporate partners.",
  },
  {
    slug: "mou-signed-to-strengthen-industry-collaboration",
    date: "Feb 12, 2026",
    title: "MoU Signed to Strengthen Industry Collaboration",
    category: "Announcement",
    image: "news-events/rampex-mou.jpg",
    location: "Administrative Block, MITS",
    excerpt: "MITS signed a strategic MoU to expand internships, live projects, and placement pipelines.",
    details:
      "The Memorandum of Understanding establishes a long-term framework for joint research, internship opportunities, expert sessions, and placement support. Department heads and industry representatives jointly outlined the roadmap for collaborative skill-development programs aligned with emerging job roles.",
  },
  {
    slug: "ieee-distinguished-guest-lecture-on-emerging-computing",
    date: "Feb 09, 2026",
    title: "IEEE Distinguished Guest Lecture on Emerging Computing",
    category: "Event",
    image: "news-events/ieee-guest-lecture.jpg",
    location: "ECE Seminar Hall",
    excerpt: "A distinguished IEEE speaker addressed students on next-generation computing technologies.",
    details:
      "The session covered edge AI, low-power architectures, and practical pathways for research publication. Faculty and students interacted with the speaker through a dedicated Q&A segment. The lecture also introduced global IEEE student opportunities, certifications, and networking channels.",
  },
  {
    slug: "smruthi-sangamam-alumni-meet-2026",
    date: "Jan 31, 2026",
    title: "Smruthi Sangamam Alumni Meet 2026",
    category: "News",
    image: "news-events/smruthi-sangamam.jpg",
    location: "Central Auditorium",
    excerpt: "Alumni returned to campus to mentor students and share career journeys across industries.",
    details:
      "The annual alumni meet brought together graduates from multiple batches for networking, mentoring, and institution-building discussions. Alumni shared insights on higher studies, international careers, and entrepreneurship. The event concluded with a commitment to support internships and domain-specific guidance cells.",
  },
  {
    slug: "mca-alumni-interaction-career-pathways-in-digital-era",
    date: "Jan 20, 2026",
    title: "MCA Alumni Interaction: Career Pathways in the Digital Era",
    category: "Event",
    image: "news-events/mca-alumni.jpg",
    location: "MCA Department Block",
    excerpt: "MCA alumni conducted an interactive session on modern software careers and interview readiness.",
    details:
      "The alumni interaction focused on full-stack development, cloud engineering, and data-driven careers. Students received practical guidance on resume building, coding interviews, and real-world project portfolios. The department announced periodic alumni-led mentoring circles for final-year students.",
  },
];

export const getNewsEventBySlug = (slug: string) => newsEvents.find((item) => item.slug === slug);
