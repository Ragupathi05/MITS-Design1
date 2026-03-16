import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  ShieldCheck,
  UserRoundPlus,
  Mail,
  Phone,
  KeyRound,
  MapPin,
  Building2,
  BookOpen,
  RefreshCw,
  ChevronDown,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

const processSteps = [
  {
    title: "Registration",
    description: "Fill the online form with basic details.",
    icon: UserRoundPlus,
  },
  {
    title: "Verification",
    description: "Verify email and mobile number via OTP.",
    icon: ShieldCheck,
  },
  {
    title: "Application",
    description: "Upload documents and submit the application.",
    icon: ClipboardCheck,
  },
  {
    title: "MITSUCET 2026",
    description: "Appear for entrance test and proceed to counseling.",
    icon: CalendarDays,
  },
];

const AdmissionHighlight = () => {
  return (
    <section
      id="admissions"
      className="relative py-12 md:py-14 overflow-hidden"
      style={{
        backgroundImage: `url(${BASE}admissions/admission1.jpg)`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(10,24,41,0.82)_0%,rgba(10,24,41,0.74)_45%,rgba(125,0,0,0.64)_100%)]" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b30000] via-[#ffffff]/60 to-[#0f2a44]" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="rounded-2xl border border-[#d6ddea] bg-[#eaf0f8] p-3 md:p-4 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)]">
            <div className="grid lg:grid-cols-12 gap-3 md:gap-4">
              <div className="lg:col-span-7 rounded-xl bg-[#0f2a44] p-5 md:p-6 border border-[#1f4266] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <p className="inline-flex rounded-full border border-white/25 bg-[#2a4a6b] px-4 py-1 text-xs md:text-sm font-semibold tracking-wide text-white">
                  Register for Admissions 2026
                </p>
                <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                  Admissions 2026 - MITS Deemed to be University
                </h2>
                <p className="mt-2 text-sm md:text-base text-white/90 leading-relaxed">
                  Join MITS through the official admission portal. Explore industry-aligned programs and complete your admission process for AY 2026-27.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs md:text-sm">
                  <span className="rounded-full border border-white/20 bg-[#2a4a6b] px-3 py-1 text-white">27+ Years of Legacy</span>
                  <span className="rounded-full border border-white/20 bg-[#2a4a6b] px-3 py-1 text-white">100% Placement Support</span>
                  <span className="rounded-full border border-white/20 bg-[#2a4a6b] px-3 py-1 text-white">50+ LPA Highest Package</span>
                  <span className="rounded-full border border-white/20 bg-[#2a4a6b] px-3 py-1 text-white">15+ Global Partners</span>
                </div>

                <div className="mt-5 rounded-xl bg-[#f9fbff] p-4 border border-[#d8e2ee]">
                  <p className="text-sm font-semibold text-[#0f2a44] mb-3">Admission Process</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {processSteps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div
                          key={`left-${step.title}`}
                          className="rounded-lg border border-[#d7e0ea] bg-white px-3 py-3"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className="flex items-center justify-center w-7 h-7 rounded-md bg-[#0f2a44]/10 text-[#0f2a44]">
                              <Icon className="w-4 h-4" />
                            </div>
                            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#b30000]">Step {index + 1}</p>
                          </div>
                          <p className="text-sm font-semibold text-[#0f2a44]">{step.title}</p>
                          <p className="text-xs text-slate-600 mt-1">{step.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6">
                <a href="https://admission.mits.ac.in/" target="_blank" rel="noreferrer">
                    <Button className="bg-[#b30000] text-white hover:bg-[#cd0000] font-bold px-7 py-5 rounded-xl shadow-[0_0_0_0_rgba(179,0,0,0)] hover:shadow-[0_0_24px_1px_rgba(179,0,0,0.45)] transition-all duration-300">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                </div>
              </div>

              <div className="lg:col-span-5 lg:max-w-[370px] lg:justify-self-end w-full rounded-xl bg-white p-4 md:p-5 border border-[#d8dce3] shadow-[0_12px_30px_-18px_rgba(15,42,68,0.45)]">
                <h3 className="text-2xl md:text-3xl font-bold text-[#b30000] text-center mb-5">Register for Admissions 2026</h3>

                <div className="space-y-2">
                  <div className="h-12 rounded-md border border-[#d7dbe2] bg-white px-3 flex items-center gap-3 text-[#1d2733]">
                    <UserRoundPlus className="w-4 h-4 text-[#254385]" />
                    <span>Enter Name *</span>
                  </div>

                  <div className="h-12 rounded-md border border-[#d7dbe2] bg-white px-3 flex items-center gap-3 text-[#1d2733]">
                    <Mail className="w-4 h-4 text-[#254385]" />
                    <span>Enter Email Address *</span>
                  </div>

                  <div className="h-12 rounded-md border border-[#d7dbe2] bg-white px-2 flex items-center gap-2 text-[#1d2733]">
                    <div className="h-8 min-w-[88px] px-2 rounded-md border border-[#d7dbe2] bg-[#f5f7fb] flex items-center justify-between text-[#1d2733]">
                      <span className="inline-flex items-center gap-1.5 font-medium text-sm"><Phone className="w-3.5 h-3.5 text-[#254385]" /> +91</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 px-2 flex items-center text-[#1d2733]">
                      <span>Enter Mobile Number *</span>
                    </div>
                  </div>

                  <div className="h-12 rounded-md border border-[#d7dbe2] bg-white px-3 flex items-center gap-3 text-[#1d2733]">
                    <KeyRound className="w-4 h-4 text-[#254385]" />
                    <span>Enter OTP</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-2.5">
                    <div className="h-12 rounded-md border border-[#d7dbe2] bg-white px-3 flex items-center gap-3 text-[#1d2733]">
                      <MapPin className="w-4 h-4 text-[#254385]" />
                      <span>Select State *</span>
                    </div>
                    <div className="h-12 rounded-md border border-[#d7dbe2] bg-white px-3 flex items-center gap-3 text-[#1d2733]">
                      <MapPin className="w-4 h-4 text-[#254385]" />
                      <span>Select City *</span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-2.5">
                    <div className="h-12 rounded-md border border-[#d7dbe2] bg-white px-3 flex items-center gap-3 text-[#1d2733]">
                      <Building2 className="w-4 h-4 text-[#254385]" />
                      <span>Select Program *</span>
                    </div>
                    <div className="h-12 rounded-md border border-[#d7dbe2] bg-white px-3 flex items-center gap-3 text-[#1d2733]">
                      <BookOpen className="w-4 h-4 text-[#254385]" />
                      <span>Select Course *</span>
                    </div>
                  </div>

                  <div className="h-12 rounded-md border border-[#d7dbe2] bg-white px-3 flex items-center text-[#1d2733]">
                    <span>Select Admission Type *</span>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1 h-12 rounded-md border border-[#d7dbe2] bg-white px-3 flex items-center justify-between text-[#1d2733] min-w-[110px] max-w-[120px]">
                      <span className="font-semibold tracking-wide">dc253c</span>
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <div className="flex-1 h-12 rounded-md border border-[#d7dbe2] bg-white px-3 flex items-center text-[#1d2733] min-w-[120px]">
                      <span>Enter Captcha</span>
                    </div>
                  </div>

                  <label className="flex items-start gap-2 text-[#1d2733] pt-1">
                    <input type="checkbox" className="mt-1" />
                    <span>I agree to receive information by signing up on MITS Deemed to be University In *</span>
                  </label>

                  <button
                    type="button"
                    className="w-full h-12 rounded-xl bg-[#ffd600] text-[#0f2a44] hover:bg-[#ffe066] font-bold text-lg tracking-wide transition-colors duration-300 border border-[#ffe066] shadow-sm"
                  >
                    REGISTER
                  </button>

                  <p className="text-center text-base font-semibold text-[#3b3b3b] mt-2">Already have an Account? <span className="text-[#b30000] underline cursor-pointer">Login</span></p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AdmissionHighlight;
