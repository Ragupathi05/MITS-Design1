import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { UserCheck, Star, Phone, Globe } from "lucide-react";

const eligibility = [
  {
    program: "B.Tech (All Branches)",
    criteria: [
      "10+2 with minimum 70% aggregate (varies by branch)",
      "Valid score in JEE / State CET / CBSE / ICSE or equivalent",
      "Direct admission for top rankers and high scorers",
    ],
  },
  {
    program: "M.Tech",
    criteria: [
      "Relevant UG degree with minimum 60% aggregate",
      "Valid GATE / PGECET or equivalent score",
    ],
  },
  {
    program: "BBA / BCA",
    criteria: [
      "10+2 with minimum 75% aggregate",
      "Direct admission for merit students",
    ],
  },
  {
    program: "MBA / MCA",
    criteria: [
      "UG degree with minimum 60% aggregate",
      "Valid ICET / CAT / MAT or equivalent score",
    ],
  },
];

/* ── shared table classes ── */
const TH = "py-3 px-4 text-center font-bold text-sm border border-gray-300 bg-[#d8ec7a] text-[#222]";
const TD = "py-2.5 px-4 text-center text-sm border border-gray-300 align-middle";
const SCHOOL_TD = "py-2.5 px-4 text-left text-sm font-bold border border-gray-300 align-middle bg-[#dfead1]";
const PROG_TD = "py-2.5 px-4 text-left text-sm font-semibold border border-gray-300 align-middle";
const BASE_TD = "py-2.5 px-4 text-center text-sm font-bold border border-gray-300 align-middle bg-[#f3f3f3]";
const FINAL_TD = "py-2.5 px-4 text-center text-sm font-bold border border-gray-300 align-middle text-[#b30000] text-base";

const EligibilityAndFees = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>

      {/* ── HERO ── */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <Badge className="mb-4 text-lg bg-accent/80">Admissions 2026</Badge>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
              Eligibility &amp; Fee Structure
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto mb-8">
              Explore eligibility criteria and transparent fee structure for all programs at MITS Deemed to be University.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ELIGIBILITY ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Eligibility Criteria</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Check your eligibility for various UG &amp; PG programs</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {eligibility.map((item, i) => (
              <Card key={i} className="p-6 shadow-md hover:shadow-xl transition-all">
                <h3 className="font-display text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-accent" /> {item.program}
                </h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  {item.criteria.map((c, j) => <li key={j}>{c}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEE STRUCTURE ── */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-[#b30000] font-semibold tracking-widest uppercase text-sm mb-2">2026–27</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0f2a44] mb-3">Fee Structure</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Transparent and merit-based fee structure for all programs</p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto space-y-10">

            {/* ── TABLE 1: School of Engineering ── */}
            <ScrollReveal>
              <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className={TH}>Schools</th>
                      <th className={TH}>Program Name</th>
                      <th className={TH}>Base Fee<br />(Fee/Sem)</th>
                      <th className={TH}>10+2 (%)</th>
                      <th className={TH}>CBSE / ICSE</th>
                      <th className={TH}>Any State CETs</th>
                      <th className={TH}>JEE</th>
                      <th className={TH}>Final Fee<br />(Fee/Sem)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* ECE */}
                    <tr>
                      <td className={SCHOOL_TD} rowSpan={9}>School of<br />Engineering</td>
                      <td className={PROG_TD}>B.Tech. Electronics &amp; Communication Engineering</td>
                      <td className={BASE_TD} rowSpan={5}>₹99,000</td>
                      <td className={TD}>90–100</td>
                      <td className={TD}>9 and above</td>
                      <td className={TD}>≤10000</td>
                      <td className={TD}>≤30000</td>
                      <td className={FINAL_TD}>₹80,000</td>
                    </tr>
                    <tr>
                      <td className={PROG_TD} rowSpan={4}>B.Tech. Bioinformatics</td>
                      <td className={TD}>85–89.99</td>
                      <td className={TD}>8 and above</td>
                      <td className={TD}>10001–15000</td>
                      <td className={TD}>30001–50000</td>
                      <td className={FINAL_TD}>₹85,000</td>
                    </tr>
                    <tr>
                      <td className={TD}>80–84.99</td>
                      <td className={TD}>7 and above</td>
                      <td className={TD}>15001–25000</td>
                      <td className={TD}>50001–70000</td>
                      <td className={FINAL_TD}>₹90,000</td>
                    </tr>
                    <tr>
                      <td className={TD}>70–79.99</td>
                      <td className={TD}>6 and above</td>
                      <td className={TD}>25001–40000</td>
                      <td className={TD}>70001–90000</td>
                      <td className={FINAL_TD}>₹95,000</td>
                    </tr>
                    <tr>
                      <td className={TD} colSpan={4}>Other eligible candidates</td>
                      <td className={FINAL_TD}>₹99,000</td>
                    </tr>
                    {/* Civil / Mech / EEE */}
                    <tr>
                      <td className={PROG_TD}>B.Tech. Civil Engineering</td>
                      <td className={BASE_TD} rowSpan={3}>₹65,000</td>
                      <td className={TD}>85–100</td>
                      <td className={TD}>8 and above</td>
                      <td className={TD}>≤10000</td>
                      <td className={TD}>≤50000</td>
                      <td className={FINAL_TD}>₹50,000</td>
                    </tr>
                    <tr>
                      <td className={PROG_TD}>B.Tech. Mechanical Engineering</td>
                      <td className={TD}>75–84.99</td>
                      <td className={TD}>7 and above</td>
                      <td className={TD}>≤30000</td>
                      <td className={TD}>50001–80000</td>
                      <td className={FINAL_TD}>₹55,000</td>
                    </tr>
                    <tr>
                      <td className={PROG_TD}>B.Tech. Electrical &amp; Electronics Engineering</td>
                      <td className={TD}>65–74.99</td>
                      <td className={TD}>6 and above</td>
                      <td className={TD}>≤50000</td>
                      <td className={TD}>80001–120000</td>
                      <td className={FINAL_TD}>₹60,000</td>
                    </tr>
                    <tr>
                      <td className={TD} colSpan={6}>Other eligible candidates</td>
                      <td className={FINAL_TD}>₹65,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            {/* ── TABLE 2: School of Computing ── */}
            <ScrollReveal delay={0.1}>
              <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className={TH}>Schools</th>
                      <th className={TH}>Program Name</th>
                      <th className={TH}>Base Fee<br />(Fee/Sem)</th>
                      <th className={TH}>10+2 (%)</th>
                      <th className={TH}>CBSE / ICSE</th>
                      <th className={TH}>Any State CETs</th>
                      <th className={TH}>JEE</th>
                      <th className={TH}>Final Fee<br />(Fee/Sem)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={SCHOOL_TD} rowSpan={5}>School of<br />Computing</td>
                      <td className={PROG_TD}>B.Tech. Computer Science &amp; Engineering</td>
                      <td className={BASE_TD} rowSpan={4}>₹1,25,000</td>
                      <td className={TD}>95–100</td>
                      <td className={TD}>9 and above</td>
                      <td className={TD}>≤10000</td>
                      <td className={TD}>≤30000</td>
                      <td className={FINAL_TD}>₹99,000</td>
                    </tr>
                    <tr>
                      <td className={PROG_TD}>B.Tech. CSE (AI &amp; Data Science)</td>
                      <td className={TD}>90–94.99</td>
                      <td className={TD}>8 and above</td>
                      <td className={TD}>10001–15000</td>
                      <td className={TD}>30001–50000</td>
                      <td className={FINAL_TD}>₹1,07,500</td>
                    </tr>
                    <tr>
                      <td className={PROG_TD}>B.Tech. CSE (AI &amp; ML)</td>
                      <td className={TD}>85–89.99</td>
                      <td className={TD}>7 and above</td>
                      <td className={TD}>15001–25000</td>
                      <td className={TD}>50001–70000</td>
                      <td className={FINAL_TD}>₹1,12,500</td>
                    </tr>
                    <tr>
                      <td className={PROG_TD}>B.Tech. CSE (Cyber Security)</td>
                      <td className={TD}>75–84.99</td>
                      <td className={TD}>6 and above</td>
                      <td className={TD}>25001–40000</td>
                      <td className={TD}>70001–90000</td>
                      <td className={FINAL_TD}>₹1,17,500</td>
                    </tr>
                    <tr>
                      <td className={TD} colSpan={6}>Other eligible candidates</td>
                      <td className={FINAL_TD}>₹1,25,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            {/* ── TABLE 3: School of Business / Sciences – UG ── */}
            <ScrollReveal delay={0.1}>
              <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className={TH}>Schools</th>
                      <th className={TH}>Program Name</th>
                      <th className={TH}>Base Fee<br />(Fee/Sem)</th>
                      <th className={TH}>Qualifying Exam (%)</th>
                      <th className={TH}>Final Fee<br />(Fee/Sem)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={SCHOOL_TD} rowSpan={3}>School of Business<br />School of Sciences</td>
                      <td className={PROG_TD}>BBA – Bachelor of Business Administration</td>
                      <td className={BASE_TD}>₹45,000</td>
                      <td className={TD}>75–100</td>
                      <td className={FINAL_TD}>₹37,500</td>
                    </tr>
                    <tr>
                      <td className={PROG_TD}>BCA – Bachelor of Computer Applications</td>
                      <td className={BASE_TD}>₹45,000</td>
                      <td className={TD}>75–100</td>
                      <td className={FINAL_TD}>₹37,500</td>
                    </tr>
                    <tr>
                      <td className={TD} colSpan={3}>Other eligible candidates</td>
                      <td className={FINAL_TD}>₹45,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            {/* ── TABLE 4: M.Tech ── */}
            <ScrollReveal delay={0.1}>
              <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className={TH}>Schools</th>
                      <th className={TH}>Program Name</th>
                      <th className={TH}>Base Fee<br />(Fee/Sem)</th>
                      <th className={TH}>UG CGPA</th>
                      <th className={TH}>PGECET / Other CET Rank</th>
                      <th className={TH}>GATE</th>
                      <th className={TH}>Final Fee<br />(Fee/Sem)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { prog: "M.Tech. VLSI Design & Embedded Systems",                              cgpa: "9 and above", cet: "<100",  gate: "Qualified with any rank", fee: "₹0" },
                      { prog: "M.Tech. Civil Engg. (Construction Engg. & Management)",               cgpa: "8 and above", cet: "<300",  gate: "—",                      fee: "₹10,000" },
                      { prog: "M.Tech. Automation and Robotics",                                     cgpa: "7 and above", cet: "<500",  gate: "—",                      fee: "₹20,000" },
                      { prog: "M.Tech. Electric Vehicle Technology",                                 cgpa: "Other eligible candidates", cet: "", gate: "",              fee: "₹35,000" },
                      { prog: "M.Tech. Computer Science & Engineering",                              cgpa: "As per eligibility",        cet: "", gate: "",              fee: "₹35,000" },
                      { prog: "M.Tech. Computer Science & Engineering (AI & ML)",                    cgpa: "As per eligibility",        cet: "", gate: "",              fee: "₹35,000" },
                    ].map((r, i) => (
                      <tr key={i}>
                        {i === 0 && <td className={SCHOOL_TD} rowSpan={6}>School of Engineering /<br />School of Computing</td>}
                        <td className={PROG_TD}>{r.prog}</td>
                        <td className={BASE_TD}>₹35,000</td>
                        {r.cet !== "" ? (
                          <>
                            <td className={TD}>{r.cgpa}</td>
                            <td className={TD}>{r.cet}</td>
                            <td className={TD}>{r.gate}</td>
                          </>
                        ) : (
                          <td className={TD} colSpan={3}>{r.cgpa}</td>
                        )}
                        <td className={FINAL_TD}>{r.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            {/* ── TABLE 5: MBA / MCA ── */}
            <ScrollReveal delay={0.1}>
              <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className={TH}>Schools</th>
                      <th className={TH}>Program Name</th>
                      <th className={TH}>Base Fee<br />(Fee/Sem)</th>
                      <th className={TH}>Qualifying Exam (%)</th>
                      <th className={TH}>ICET / Other CET Rank</th>
                      <th className={TH}>CAT / MAT Percentile</th>
                      <th className={TH}>Final Fee<br />(Fee/Sem)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={SCHOOL_TD} rowSpan={3}>School of Business<br />School of Sciences</td>
                      <td className={PROG_TD}>MBA – Master of Business Administration</td>
                      <td className={BASE_TD}>₹60,000</td>
                      <td className={TD}>75–100</td>
                      <td className={TD}>&lt;500</td>
                      <td className={TD}>75 and above</td>
                      <td className={FINAL_TD}>₹50,000</td>
                    </tr>
                    <tr>
                      <td className={PROG_TD}>MCA – Master of Computer Applications</td>
                      <td className={BASE_TD}>₹60,000</td>
                      <td className={TD}>75–100</td>
                      <td className={TD}>&lt;500</td>
                      <td className={TD}>—</td>
                      <td className={FINAL_TD}>₹50,000</td>
                    </tr>
                    <tr>
                      <td className={TD} colSpan={5}>Other eligible candidates</td>
                      <td className={FINAL_TD}>₹60,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            {/* ── MITSUCET Fee Waiver ── */}
            <ScrollReveal delay={0.1}>
              <div className="max-w-sm overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 text-left font-bold bg-[#b30000] text-white" colSpan={2}>
                        <span className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-300" /> MITSUCET Fee Waiver
                        </span>
                      </th>
                    </tr>
                    <tr className="bg-[#900000] text-white/80 text-xs uppercase tracking-widest">
                      <th className="py-2.5 px-6 text-left font-semibold border border-[#7a0000]">Rank</th>
                      <th className="py-2.5 px-6 text-right font-semibold border border-[#7a0000]">Waiver</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { rank: "Rank 1",     waiver: "100%" },
                      { rank: "Rank 2–5",   waiver: "75%" },
                      { rank: "Rank 6–10",  waiver: "50%" },
                      { rank: "Rank 10–20", waiver: "25%" },
                    ].map((fw, i) => (
                      <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-[#fff8f8]"} hover:bg-[#fff0f0] transition-colors`}>
                        <td className="py-3 px-6 font-semibold text-[#0f2a44] border border-gray-200">{fw.rank}</td>
                        <td className="py-3 px-6 text-right border border-gray-200">
                          <span className="bg-[#b30000] text-white text-xs font-bold px-4 py-1.5 rounded-full">{fw.waiver}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Apply?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              For detailed eligibility, scholarships, and personalized guidance, contact our admissions team or apply online.
            </p>
            <a href="https://admission.mits.ac.in/" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#b30000] hover:bg-[#900000] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all text-lg mb-6">
                Apply Now
              </button>
            </a>
            <div className="mt-4 text-[#e66a00] font-bold text-lg space-y-1">
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> 7330 803 555 &nbsp;/&nbsp; 7330 852 555
              </p>
              <p className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" /> www.mits.ac.in
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
    <Footer />
  </div>
);

export default EligibilityAndFees;
