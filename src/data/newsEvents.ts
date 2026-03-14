export type NewsEventItem = {
  slug: string;
  date: string;
  title: string;
  category: "Event";
  image: string;
  location: string;
  excerpt: string;
  details: string;
};

export type TrendingItem = {
  id: string;
  source: string;
  handle: string;
  timeAgo: string;
  image: string;
  text: string;
  ctaLabel: string;
  ctaUrl: string;
};

export type LatestNewsItem = {
  id: string;
  slug: string;
  date: string;
  title: string;
  summary: string;
  image: string;
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
    category: "Event",
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
    category: "Event",
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
    category: "Event",
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

export const trendingOn: TrendingItem[] = [
  {
    id: "mitsucet-2026-registrations",
    source: "MITS Instagram",
    handle: "@mits_mpl",
    timeAgo: "2 days ago",
    image: "news-events/mm.webp",
    text: "MITSUCET 2026 registrations are open with scholarship opportunities and merit-based admissions.",
    ctaLabel: "Apply Now",
    ctaUrl: "https://admission.mits.ac.in",
  },
  {
    id: "future-ready-campaign",
    source: "MITS Instagram",
    handle: "@mits_mpl",
    timeAgo: "4 days ago",
    image: "news-events/ista-image.png",
    text: "Admissions campaign highlights campus-to-career readiness, industry exposure, and internship-driven learning.",
    ctaLabel: "Explore Admissions",
    ctaUrl: "https://admission.mits.ac.in",
  },
  {
    id: "student-success-post",
    source: "MITS Instagram",
    handle: "@mits_mpl",
    timeAgo: "1 week ago",
    image: "news-events/gy.jpg",
    text: "Student success stories emphasize practical learning, placements, and international opportunities at MITS.",
    ctaLabel: "View Highlights",
    ctaUrl: "/news-events",
  },
  {
    id: "fdp-cyber-defense",
    source: "MITS Instagram",
    handle: "@mits_mpl",
    timeAgo: "1 week ago",
    image: "news-events/digital-era.jpg",
    text: "Faculty development activity on next-generation cyber defense and AI-based security practices was highlighted.",
    ctaLabel: "See Post",
    ctaUrl: "/news-events",
  },
  {
    id: "international-conference",
    source: "MITS Instagram",
    handle: "@mits_mpl",
    timeAgo: "2 weeks ago",
    image: "news-events/icotl-2026.jpg",
    text: "International conference participation showcased interdisciplinary research culture and publication outcomes.",
    ctaLabel: "Know More",
    ctaUrl: "/news-events",
  },
  {
    id: "industry-visit-update",
    source: "MITS Instagram",
    handle: "@mits_mpl",
    timeAgo: "2 weeks ago",
    image: "news-events/microsoft-visit.jpg",
    text: "Students joined a major industry visit to strengthen practical exposure in software and product ecosystems.",
    ctaLabel: "View Story",
    ctaUrl: "/news-events",
  },
  {
    id: "alumni-network-update",
    source: "MITS Instagram",
    handle: "@mits_mpl",
    timeAgo: "3 weeks ago",
    image: "news-events/mca-alumni.jpg",
    text: "Alumni mentoring circles and career sessions continue to support final-year students with placement readiness.",
    ctaLabel: "Explore",
    ctaUrl: "/news-events",
  },
  {
    id: "campus-fitness-drive",
    source: "MITS Instagram",
    handle: "@mits_mpl",
    timeAgo: "3 weeks ago",
    image: "news-events/3k-run.jpg",
    text: "Campus fitness and wellbeing campaign encouraged students to participate in structured health initiatives.",
    ctaLabel: "Highlights",
    ctaUrl: "/news-events",
  },
];

export const latestNews: LatestNewsItem[] = [
  {
    id: "interaction-army-news",
    slug: "mou-signed-to-strengthen-industry-collaboration",
    date: "Mar 05, 2026",
    title: "Interaction Session with Indian Army Officers",
    summary: "Leadership and defense career opportunities were discussed in a high-impact campus interaction session.",
    image: "news-events/rampex-mou.jpg",
  },
  {
    id: "singularity-summit-news",
    slug: "aimex-2026-innovation-and-entrepreneurship-expo",
    date: "Feb 25, 2026",
    title: "INT'L Singularity India Summit Participation",
    summary: "MITS students and faculty represented the institution in a major innovation and future-tech summit.",
    image: "news-events/aimex-2026.jpg",
  },
  {
    id: "science-day-news",
    slug: "ieee-distinguished-guest-lecture-on-emerging-computing",
    date: "Feb 20, 2026",
    title: "National Science Day Activities Conducted",
    summary: "Departments and student cells hosted awareness and technical sessions celebrating scientific inquiry.",
    image: "news-events/ieee-guest-lecture.jpg",
  },
  {
    id: "alumni-news",
    slug: "smruthi-sangamam-alumni-meet-2026",
    date: "Feb 12, 2026",
    title: "Smruthi Sangamam Alumni Engagement Highlights",
    summary: "Alumni mentorship focused on emerging careers, higher studies, and industry-aligned skill growth.",
    image: "news-events/smruthi-sangamam.jpg",
  },
  {
    id: "fdp-cyber-news",
    slug: "ieee-distinguished-guest-lecture-on-emerging-computing",
    date: "Feb 10, 2026",
    title: "Faculty Development Programme on Cyber Defense",
    summary: "A focused academic programme emphasized deep learning applications for cyber defense and risk analysis.",
    image: "news-events/digital-era.jpg",
  },
  {
    id: "industry-visit-news",
    slug: "aimex-2026-innovation-and-entrepreneurship-expo",
    date: "Feb 07, 2026",
    title: "Industry Immersion Visit Strengthens Practical Skills",
    summary: "Students gained insights into enterprise workflows, innovation pipelines, and product engineering practices.",
    image: "news-events/microsoft-visit.jpg",
  },
  {
    id: "icotl-conference-news",
    slug: "ieee-distinguished-guest-lecture-on-emerging-computing",
    date: "Feb 04, 2026",
    title: "International Conference Participation at ICOTL 2026",
    summary: "Research contributions from MITS teams were presented across optimization and learning domains.",
    image: "news-events/icotl-2026.jpg",
  },
  {
    id: "campus-fitness-news",
    slug: "3k-run-for-fitness-and-student-wellbeing",
    date: "Jan 29, 2026",
    title: "3K Fitness Drive Builds Student Wellness Momentum",
    summary: "The campus-wide run encouraged healthy routines, participation spirit, and disciplined lifestyle habits.",
    image: "news-events/3k-run.jpg",
  },
  {
    id: "mca-alumni-news",
    slug: "mca-alumni-interaction-career-pathways-in-digital-era",
    date: "Jan 22, 2026",
    title: "MCA Alumni Interaction on Career Pathways",
    summary: "Alumni experts shared practical guidance on software careers, interviews, and portfolio building.",
    image: "news-events/mca-alumni.jpg",
  },
  {
    id: "admission-campaign-news",
    slug: "mou-signed-to-strengthen-industry-collaboration",
    date: "Jan 18, 2026",
    title: "Admissions Campaign Focuses on Scholarships and Outcomes",
    summary: "Recent communication highlighted merit scholarships and outcome-driven learning opportunities.",
    image: "news-events/mm.webp",
  },
];

export const getNewsEventBySlug = (slug: string) => newsEvents.find((item) => item.slug === slug);
