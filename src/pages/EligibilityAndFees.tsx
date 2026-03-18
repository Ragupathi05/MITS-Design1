import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, School, Star } from "lucide-react";

const eligibility = [
  {
    program: "B.Tech (All Branches)",
    criteria: [
      "10+2 with minimum 70% aggregate (varies by branch)",
      "Valid score in JEE/State CET/CBSE/ICSE or equivalent",
      "Direct admission for top rankers and high scorers",
    ],
  },
  {
    program: "M.Tech",
    criteria: [
      "Relevant UG degree with minimum 60% aggregate",
      "Valid GATE/PGECET or equivalent score",
    ],
  },
  {
    program: "BBA/BCA",
    criteria: [
      "10+2 with minimum 75% aggregate",
      "Direct admission for merit students",
    ],
  },
  {
    program: "MBA/MCA",
    criteria: [
      "UG degree with minimum 60% aggregate",
      "Valid ICET/CAT/MAT or equivalent score",
    ],
  },
];

const feeRows = [
  { sno: 1, school: "School of Engineering",       program: "B.Tech. ECE",                    duration: "4 Years", feeSem: "₹80,000 – ₹99,000",    note: "Based on merit" },
  { sno: 2, school: "School of Engineering",       program: "B.Tech. Civil / Mech / EEE",     duration: "4 Years", feeSem: "₹50,000 – ₹65,000",    note: "Based on merit" },
  { sno: 3, school: "School of Computing",         program: "B.Tech. CSE / AI / ML / DS",     duration: "4 Years", feeSem: "₹99,000 – ₹1,25,000",  note: "Based on merit" },
  { sno: 4, school: "School of Business/Sciences", program: "BBA / BCA",                      duration: "3 Years", feeSem: "₹37,500 – ₹45,000",    note: "Based on merit" },
  { sno: 5, school: "School of Business/Sciences", program: "MBA / MCA",                      duration: "2 Years", feeSem: "₹50,000 – ₹60,000",    note: "Based on merit" },
  { sno: 6, school: "PG Programs",                 program: "M.Tech (All Branches)",           duration: "2 Years", feeSem: "₹0 – ₹35,000",         note: "With scholarships" },
];

const feeWaivers = [
  { rank: "Rank 1", waiver: "100% Fee Waiver" },
  { rank: "Rank 2–5", waiver: "75% Fee Waiver" },
  { rank: "Rank 6–10", waiver: "50% Fee Waiver" },
  { rank: "Rank 11–20", waiver: "25% Fee Waiver" },
];

const EligibilityAndFees = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 overflow-hidden">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <ScrollReveal>
              <Badge className="mb-4 text-lg bg-accent/80">Admissions 2026</Badge>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Eligibility & Fee Structure</h1>
              <p className="text-white/80 text-xl max-w-3xl mx-auto mb-8">
                Explore eligibility criteria and transparent fee structure for all programs at MITS Deemed to be University.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Eligibility Criteria</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Check your eligibility for various UG & PG programs</p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {eligibility.map((item, i) => (
                <Card key={i} className="p-6 shadow-md hover:shadow-xl transition-all">
                  <h3 className="font-display text-xl font-bold text-primary mb-3 flex items-center gap-2">
                    <UserCheck className="w-6 h-6 text-accent" /> {item.program}
                  </h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    {item.criteria.map((c, j) => (
                      <li key={j}>{c}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fee Structure Section */}
        <section className="py-16 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-[#b30000] font-semibold tracking-widest uppercase text-sm mb-2">2026–27</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0f2a44] mb-3">Fee Structure</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Transparent and merit-based fee structure for all programs</p>
              </div>
            </ScrollReveal>

            {/* Main Fee Table */}
            <ScrollReveal>
              <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0f2a44] text-white">
                      <th className="py-4 px-5 text-left font-bold tracking-wide w-10">#</th>
                      <th className="py-4 px-5 text-left font-bold tracking-wide">School</th>
                      <th className="py-4 px-5 text-left font-bold tracking-wide">Program</th>
                      <th className="py-4 px-5 text-center font-bold tracking-wide">Duration</th>
                      <th className="py-4 px-5 text-right font-bold tracking-wide">Fee / Semester</th>
                      <th className="py-4 px-5 text-center font-bold tracking-wide">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeRows.map((row, i) => (
                      <tr
                        key={row.sno}
                        className={`border-b border-gray-100 transition-colors duration-150 ${
                          i % 2 === 0 ? "bg-white" : "bg-[#f9f9fb]"
                        } hover:bg-[#fff4f4]`}
                      >
                        <td className="py-3.5 px-5 text-gray-400 font-medium">{row.sno}</td>
                        <td className="py-3.5 px-5">
                          <span className="inline-flex items-center gap-1.5 font-semibold text-[#0f2a44]">
                            <School className="w-4 h-4 text-[#b30000] shrink-0" />
                            {row.school}
                          </span>
                        </td>
                        <td className="py-3.5 px-5 text-gray-700 font-medium">{row.program}</td>
                        <td className="py-3.5 px-5 text-center">
                          <span className="bg-[#0f2a44]/8 text-[#0f2a44] text-xs font-semibold px-3 py-1 rounded-full">{row.duration}</span>
                        </td>
                        <td className="py-3.5 px-5 text-right font-bold text-[#b30000] text-base">{row.feeSem}</td>
                        <td className="py-3.5 px-5 text-center">
                          <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">{row.note}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            {/* Fee Waiver Table */}
            <ScrollReveal delay={0.15}>
              <div className="max-w-2xl mx-auto mt-12 overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#b30000] text-white">
                      <th colSpan={2} className="py-4 px-6 text-left font-bold tracking-wide">
                        <span className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-300" /> MITSUCET Merit Fee Waivers</span>
                      </th>
                    </tr>
                    <tr className="bg-[#900000] text-white/80 text-xs uppercase tracking-widest">
                      <th className="py-2.5 px-6 text-left font-semibold">Rank</th>
                      <th className="py-2.5 px-6 text-right font-semibold">Fee Waiver</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeWaivers.map((fw, i) => (
                      <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-[#fff8f8]"} hover:bg-[#fff0f0] transition-colors`}>
                        <td className="py-3.5 px-6 font-semibold text-[#0f2a44]">{fw.rank}</td>
                        <td className="py-3.5 px-6 text-right">
                          <span className="bg-[#b30000] text-white text-xs font-bold px-4 py-1.5 rounded-full">{fw.waiver}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Apply?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">For detailed eligibility, scholarships, and personalized guidance, contact our admissions team or apply online.</p>
              <a href="https://mits.ac.in/admission-form" target="_blank" rel="noopener noreferrer">
                <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all text-lg">Apply Now</button>
              </a>
              <div className="mt-6 text-muted-foreground">
                <p>Contact: <a href="tel:+917330803555" className="text-primary font-semibold">7330 803 555</a> / <a href="tel:+917330852555" className="text-primary font-semibold">7330 852 555</a></p>
                <p>Email: <a href="mailto:admissions@mits.ac.in" className="text-primary font-semibold">admissions@mits.ac.in</a></p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EligibilityAndFees;
