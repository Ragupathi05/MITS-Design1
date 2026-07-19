import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Mail,
  MapPin,
  Info,
  CheckCircle2,
  Globe,
  ShieldAlert,
  CreditCard,
  AlertTriangle,
  FileCheck2,
  ExternalLink,
  Lock,
  Scale,
  ClipboardEdit,
  BookOpen,
  HelpCircle,
  LucideIcon
} from "lucide-react";

interface PolicySection {
  id: string;
  title: string;
  icon: LucideIcon;
  content: string[];
  sublists?: string[];
  subsections?: { title: string; content: string[] }[];
}

const POLICY_SECTIONS: PolicySection[] = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Info,
    content: [
      "Welcome to Madanapalle Institute of Technology & Science Deemed to be University.",
      "These Terms & Conditions (“Terms”) govern your access to and use of our website [www.mits.ac.in] and any services provided through it.",
      "By accessing or using this Site, you agree to be bound by these Terms. If you do not agree, you must discontinue using this Site immediately."
    ]
  },
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    icon: CheckCircle2,
    content: [
      "These Terms apply to all visitors, users, applicants, students, parents, and any other individuals accessing the Site.",
      "Certain sections of the Site (such as online applications, fee payments, or LMS/ERP access) may require you to accept additional terms and conditions specific to those services."
    ]
  },
  {
    id: "about-website",
    title: "2. About the Website",
    icon: Globe,
    content: [
      "The Site provides information and services related to:"
    ],
    sublists: [
      "Academic programs",
      "Admissions",
      "Online applications",
      "Fee payment services",
      "Examination details",
      "Research activities",
      "Downloads & resources",
      "Communication updates"
    ],
    subsections: [
      {
        title: "Site Modifications",
        content: [
          "We reserve the right to modify, suspend, or discontinue any part of the Site at any time without prior notice."
        ]
      }
    ]
  },
  {
    id: "user-responsibilities",
    title: "3. User Responsibilities",
    icon: ShieldAlert,
    content: [
      "By using this Site, you agree that:"
    ],
    sublists: [
      "You must provide information that is accurate, complete, and up to date.",
      "You must not hack, disrupt, damage, or interfere with the Site.",
      "You must not use the Site for any unlawful or harmful activities.",
      "You are responsible for keeping your login credentials (if any) confidential."
    ],
    subsections: [
      {
        title: "Enforcement",
        content: [
          "Any misuse of the Site may result in suspended access, legal action, or both."
        ]
      }
    ]
  },
  {
    id: "online-payments",
    title: "4. Online Payments",
    icon: CreditCard,
    content: [
      "If the Site provides fee payment or online services, the following terms will apply:",
      "Payments must be made using valid and authorized methods (such as credit/debit cards, net banking, UPI, or digital wallets).",
      "You are responsible for ensuring that all payment information provided is accurate."
    ],
    sublists: [
      "The institution is not responsible for failed transactions caused by bank or server issues.",
      "The institution is not responsible for incorrect details entered by the user.",
      "The institution is not responsible for delays in payment confirmation from payment gateway providers."
    ],
    subsections: [
      {
        title: "Refund Policy",
        content: [
          "Refunds, when applicable, will be processed according to the institution’s refund policy.",
          "Approved refunds will be issued to the original payment method within 5–10 working days.",
          "Admission or registration fees are generally non-refundable unless specifically stated."
        ]
      },
      {
        title: "Cancellation Policy",
        content: [
          "Cancellations must be made in accordance with the relevant departmental or institutional guidelines.",
          "All cancellation decisions are final and binding."
        ]
      }
    ]
  },
  {
    id: "accuracy",
    title: "5. Accuracy of Information",
    icon: AlertTriangle,
    content: [
      "We strive to ensure that the content on the Site is accurate and up to date.",
      "However, we do not guarantee its completeness, correctness, timeliness, or uninterrupted availability.",
      "In case of any discrepancies, official institutional notifications or records will take precedence."
    ]
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    icon: FileCheck2,
    content: [
      "Unless stated otherwise:",
      "All the text, photographs, graphics, videos, logos, and design elements on the Site are the intellectual property of MITS Deemed to be University.",
      "Users may view or download content only for personal, non-commercial use.",
      "Copying, editing, reproducing, distributing, or publishing any content without written permission is strictly prohibited."
    ]
  },
  {
    id: "third-party",
    title: "7. Third-Party Links",
    icon: ExternalLink,
    content: [
      "The Site may include links to external websites for your convenience:",
      "We do not endorse or control these third-party websites.",
      "We are not responsible for their content, privacy practices, or services.",
      "Accessing any third-party links is entirely at your own risk."
    ]
  },
  {
    id: "privacy-security",
    title: "8. Privacy & Data Security",
    icon: Lock,
    content: [
      "We respect your privacy.",
      "Personal data collected through forms, applications, or online services is used solely for official purposes.",
      "We may share this data with authorized internal departments or statutory bodies when required.",
      "For detailed guidelines, please refer strictly to these official policy statements."
    ]
  },
  {
    id: "limitation",
    title: "9. Limitation of Liability",
    icon: Scale,
    content: [
      "To the maximum extent permitted by the law:",
      "The Site and its services are provided on an “as is” and “as available” basis, without any warranties of any kind.",
      "We are not responsible for any direct, indirect, incidental, or consequential damages arising from use of the Site, inability to use the Site, technical issues, viruses, or data loss.",
      "Your sole remedy for dissatisfaction with the Site is to discontinue its use."
    ]
  },
  {
    id: "indemnification",
    title: "10. Indemnification",
    icon: ShieldCheck,
    content: [
      "You agree to indemnify and hold Madanapalle Institute of Technology & Science Deemed to be University, including its management, employees, and partners, harmless from any claims or demands arising from your use or misuse of the Site, your violation of these Terms, or your infringement of the rights of others."
    ]
  },
  {
    id: "modifications",
    title: "11. Modifications to Terms",
    icon: ClipboardEdit,
    content: [
      "We may revise these Terms at any time.",
      "Any changes will become effective immediately upon being posted on the Site.",
      "Your continued use of the Site after such changes indicates your acceptance of the updated Terms."
    ]
  },
  {
    id: "governing-law",
    title: "12. Governing Law",
    icon: BookOpen,
    content: [
      "These Terms are governed by the laws of India.",
      "Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Madanapalle, Andhra Pradesh."
    ]
  },
  {
    id: "contact-info",
    title: "13. Contact Information",
    icon: HelpCircle,
    content: [
      "For any questions or clarifications, please contact:"
    ]
  }
];

const TermsConditionsPolicy = () => {
  const [activeTab, setActiveTab] = useState("introduction");

  const activeSection = POLICY_SECTIONS.find((s) => s.id === activeTab) || POLICY_SECTIONS[0];
  const ActiveIcon = activeSection.icon;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <SEO
        title="Terms & Conditions & Privacy Policy – MITS Deemed to be University"
        description="Official privacy policy, terms, conditions, and cancellation rules of Madanapalle Institute of Technology & Science."
        canonical="/terms-conditions-policy"
      />
      <Header />
      {/* Spacer for sticky header */}
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />

      {/* Banner / Title Header */}
      <section className="relative bg-gradient-to-br from-[#0f2a44] via-[#123150] to-[#07192b] text-white py-14 md:py-20 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[#caa74d] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/5">
            <ShieldCheck className="w-4 h-4" /> MITS Policy Portal
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display leading-tight tracking-tight">
            Terms &amp; Conditions Policy
          </h1>
          <p className="text-white/70 text-sm md:text-lg mt-3 max-w-3xl leading-relaxed">
            These terms govern your access to and use of www.mits.ac.in, all official online services, privacy protection compliance, and transaction policies.
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 md:gap-10">
          {/* Sidebar Tabs (Desktop: Sticky Sidebar, Mobile: Scrollable Top Bar) */}
          <aside className="lg:sticky lg:top-36 lg:self-start z-10">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-3 lg:p-4 shadow-sm flex overflow-x-auto gap-2 lg:gap-1.5 pb-3 lg:pb-0 lg:flex-col scrollbar-thin scrollbar-thumb-slate-200">
              {POLICY_SECTIONS.map((section) => {
                const ItemIcon = section.icon;
                const isActive = activeTab === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={`shrink-0 flex items-center text-left gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 lg:w-full ${
                      isActive
                        ? "bg-gradient-to-r from-[#0f2a44] to-[#1a446c] text-white shadow-md border-l-4 border-[#caa74d]"
                        : "text-slate-600 hover:bg-slate-100 hover:text-[#0f2a44] border-l-4 border-transparent"
                    }`}
                  >
                    <ItemIcon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#caa74d]" : "text-slate-400"}`} />
                    <span className="truncate">{section.title.replace(/^\d+\.\s+/, "")}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Section Panel */}
          <div className="relative">
            {/* Top decorative accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#caa74d] via-amber-500 to-[#caa74d] rounded-t-2xl absolute top-0 left-0 right-0 z-10" />

            <article className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-12 shadow-md min-h-[500px] pt-10">
              <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#0f2a44] border border-slate-100 shadow-sm">
                  <ActiveIcon className="w-6 h-6 text-[#0f2a44]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f2a44] font-display">
                  {activeSection.title}
                </h2>
              </div>

              <div className="space-y-5 font-body text-slate-600 text-sm md:text-base leading-relaxed">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    {activeSection.content.map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}

                    {/* Sublists rendering */}
                    {activeSection.sublists && (
                      <div className="grid md:grid-cols-2 gap-3 mt-5 pl-2 mb-6">
                        {activeSection.sublists.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 bg-slate-50/70 border border-slate-100 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#caa74d] mt-2.5 shrink-0" />
                            <span className="text-slate-700 text-xs md:text-sm font-semibold leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Subsections rendering */}
                    {activeSection.subsections && (
                      <div className="space-y-6 mt-8 pt-6 border-t border-slate-100">
                        {activeSection.subsections.map((sub, index) => (
                          <div
                            key={index}
                            className="bg-slate-50/80 border border-slate-200/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                          >
                            {/* Accent badge line inside subsection */}
                            <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#caa74d] group-hover:bg-[#0f2a44] transition-colors" />
                            
                            <h3 className="text-base md:text-lg font-bold text-[#0f2a44] mb-3 font-display pl-2">
                              {sub.title}
                            </h3>
                            <div className="space-y-3 pl-2">
                              {sub.content.map((p, idx) => (
                                <p key={idx} className="text-slate-600 text-sm md:text-base leading-relaxed">{p}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Special rendering for Contact Info */}
                    {activeSection.id === "contact-info" && (
                      <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50/70 flex items-start gap-4 hover:shadow-md transition-shadow">
                          <div className="w-12 h-12 rounded-xl bg-[#0f2a44] text-white flex items-center justify-center shrink-0 shadow-md">
                            <MapPin className="w-6 h-6 text-[#caa74d]" />
                          </div>
                          <div>
                            <h4 className="font-extrabold text-[#0f2a44] text-sm md:text-base">Official Address</h4>
                            <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                              Web Master<br />
                              Madanapalle Institute of Technology &amp; Science<br />
                              <span className="text-[#caa74d] font-semibold">(Deemed to be University)</span><br />
                              Kadiri Road, Angallu, Madanapalle – 517325,<br />
                              Andhra Pradesh, India
                            </p>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50/70 flex items-start gap-4 hover:shadow-md transition-shadow">
                          <div className="w-12 h-12 rounded-xl bg-[#0f2a44] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Mail className="w-6 h-6 text-[#caa74d]" />
                          </div>
                          <div>
                            <h4 className="font-extrabold text-[#0f2a44] text-sm md:text-base font-display">Online Support</h4>
                            <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                              Email: <a href="mailto:webmaster@mits.ac.in" className="text-[#caa74d] hover:text-[#0f2a44] font-bold transition-colors">webmaster@mits.ac.in</a><br />
                              Website: <a href="https://www.mits.ac.in" target="_blank" rel="noopener noreferrer" className="text-[#caa74d] hover:text-[#0f2a44] font-bold transition-colors">https://www.mits.ac.in</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditionsPolicy;
