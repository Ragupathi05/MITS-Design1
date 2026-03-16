<<<<<<< HEAD
=======
import { useState } from "react";
>>>>>>> d332adf7abdd367be2b1dd1e65c83abd81f34ed5
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
<<<<<<< HEAD
  ChevronDown,
=======
>>>>>>> d332adf7abdd367be2b1dd1e65c83abd81f34ed5
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
<<<<<<< HEAD
=======
  const [form, setForm] = useState({ name: "", email: "", phone: "", otp: "", state: "", city: "", program: "", course: "", admissionType: "", captcha: "", agree: false });
  const u = (k: string, v: string | boolean) => setForm(p => ({ ...p, [k]: v }));
  const inputCls = "w-full h-10 rounded-md border border-white/20 bg-white/10 px-3 text-white text-sm placeholder:text-white/40 outline-none focus:border-white/50 focus:bg-white/15 transition-all";
  const selectCls = "w-full h-10 rounded-md border border-white/20 bg-white/10 px-3 text-white text-sm outline-none focus:border-white/50 focus:bg-white/15 transition-all appearance-none [&>option]:bg-[#0f2a44] [&>option]:text-white";
>>>>>>> d332adf7abdd367be2b1dd1e65c83abd81f34ed5
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

              <div className="lg:col-span-5 w-full rounded-xl p-4 md:p-5 border border-white/20 shadow-2xl backdrop-blur-md" style={{background: "rgba(15,42,68,0.55)"}}>
                <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4">Register for Admissions 2026</h3>

                <div className="grid grid-cols-2 gap-2">
                  {/* Name */}
                  <div className="col-span-2 relative">
                    <UserRoundPlus className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    <input className={`${inputCls} pl-9`} placeholder="Enter Name *" value={form.name} onChange={e => u("name", e.target.value)} />
                  </div>

                  {/* Email */}
                  <div className="col-span-2 relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    <input type="email" className={`${inputCls} pl-9`} placeholder="Enter Email Address *" value={form.email} onChange={e => u("email", e.target.value)} />
                  </div>

                  {/* Phone */}
                  <div className="col-span-2 flex gap-2">
                    <div className="h-10 px-3 rounded-md border border-white/20 bg-white/10 flex items-center gap-1 text-white text-sm shrink-0">
                      <Phone className="w-3 h-3" /> +91
                    </div>
                    <input type="tel" className={inputCls} placeholder="Enter Mobile Number *" value={form.phone} onChange={e => u("phone", e.target.value)} />
                  </div>

                  {/* OTP */}
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    <input className={`${inputCls} pl-9`} placeholder="Enter OTP" value={form.otp} onChange={e => u("otp", e.target.value)} />
                  </div>

                  {/* State */}
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 z-10" />
                    <select className={`${selectCls} pl-9`} value={form.state} onChange={e => u("state", e.target.value)}>
                      <option value="">Select State *</option>
                      <option>Andhra Pradesh</option>
                      <option>Telangana</option>
                      <option>Karnataka</option>
                      <option>Tamil Nadu</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* City */}
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 z-10" />
                    <input className={`${inputCls} pl-9`} placeholder="Enter City *" value={form.city} onChange={e => u("city", e.target.value)} />
                  </div>

                  {/* Program */}
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 z-10" />
                    <select className={`${selectCls} pl-9`} value={form.program} onChange={e => u("program", e.target.value)}>
                      <option value="">Select Program *</option>
                      <option>B.Tech</option>
                      <option>M.Tech</option>
                      <option>MBA</option>
                      <option>MCA</option>
                      <option>Ph.D.</option>
                    </select>
                  </div>

                  {/* Course */}
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 z-10" />
                    <select className={`${selectCls} pl-9`} value={form.course} onChange={e => u("course", e.target.value)}>
                      <option value="">Select Course *</option>
                      <option>Computer Science</option>
                      <option>Electronics</option>
                      <option>Mechanical</option>
                      <option>Civil</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Admission Type */}
                  <div className="col-span-2">
                    <select className={selectCls} value={form.admissionType} onChange={e => u("admissionType", e.target.value)}>
                      <option value="">Select Admission Type *</option>
                      <option>Management Quota</option>
                      <option>Convener Quota</option>
                      <option>NRI Quota</option>
                    </select>
                  </div>

                  {/* Captcha */}
                  <div className="h-10 rounded-md border border-white/20 bg-white/10 px-3 flex items-center justify-between text-white text-sm">
                    <span className="font-semibold tracking-widest">dc253c</span>
                    <RefreshCw className="w-4 h-4 text-white/60 cursor-pointer hover:text-white transition-colors" />
                  </div>
                  <input className={inputCls} placeholder="Enter Captcha" value={form.captcha} onChange={e => u("captcha", e.target.value)} />

                  {/* Agree */}
                  <label className="col-span-2 flex items-start gap-2 text-white/70 text-xs pt-1 cursor-pointer">
                    <input type="checkbox" className="mt-0.5 accent-yellow-400" checked={form.agree} onChange={e => u("agree", e.target.checked)} />
                    <span>I agree to receive information by signing up on MITS Deemed to be University *</span>
                  </label>

                  <button type="button" className="col-span-2 h-11 rounded-xl bg-[#ffd600] text-[#0f2a44] hover:bg-[#ffe066] font-bold text-base tracking-wide transition-colors duration-300 shadow-lg">
                    REGISTER
                  </button>

                  <p className="col-span-2 text-center text-sm font-semibold text-white/70 mt-1">Already have an Account? <span className="text-[#ffd600] underline cursor-pointer">Login</span></p>
                </div>
              </div>
              <div className="lg:col-span-5 w-full rounded-xl p-4 md:p-5 border border-white/20 shadow-2xl backdrop-blur-md" style={{background: "rgba(15,42,68,0.55)"}}>
                <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4">Register for Admissions 2026</h3>

                <div className="grid grid-cols-2 gap-2">
                  {/* Name */}
                  <div className="col-span-2 relative">
                    <UserRoundPlus className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    <input className={`${inputCls} pl-9`} placeholder="Enter Name *" value={form.name} onChange={e => u("name", e.target.value)} />
                  </div>

                  {/* Email */}
                  <div className="col-span-2 relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    <input type="email" className={`${inputCls} pl-9`} placeholder="Enter Email Address *" value={form.email} onChange={e => u("email", e.target.value)} />
                  </div>

                  {/* Phone */}
                  <div className="col-span-2 flex gap-2">
                    <div className="h-10 px-3 rounded-md border border-white/20 bg-white/10 flex items-center gap-1 text-white text-sm shrink-0">
                      <Phone className="w-3 h-3" /> +91
                    </div>
                    <input type="tel" className={inputCls} placeholder="Enter Mobile Number *" value={form.phone} onChange={e => u("phone", e.target.value)} />
                  </div>

                  {/* OTP */}
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    <input className={`${inputCls} pl-9`} placeholder="Enter OTP" value={form.otp} onChange={e => u("otp", e.target.value)} />
                  </div>

                  {/* State */}
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 z-10" />
                    <select className={`${selectCls} pl-9`} value={form.state} onChange={e => u("state", e.target.value)}>
                      <option value="">Select State *</option>
                      <option>Andhra Pradesh</option>
                      <option>Telangana</option>
                      <option>Karnataka</option>
                      <option>Tamil Nadu</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* City */}
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 z-10" />
                    <input className={`${inputCls} pl-9`} placeholder="Enter City *" value={form.city} onChange={e => u("city", e.target.value)} />
                  </div>

                  {/* Program */}
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 z-10" />
                    <select className={`${selectCls} pl-9`} value={form.program} onChange={e => u("program", e.target.value)}>
                      <option value="">Select Program *</option>
                      <option>B.Tech</option>
                      <option>M.Tech</option>
                      <option>MBA</option>
                      <option>MCA</option>
                      <option>Ph.D.</option>
                    </select>
                  </div>

                  {/* Course */}
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 z-10" />
                    <select className={`${selectCls} pl-9`} value={form.course} onChange={e => u("course", e.target.value)}>
                      <option value="">Select Course *</option>
                      <option>Computer Science</option>
                      <option>Electronics</option>
                      <option>Mechanical</option>
                      <option>Civil</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Admission Type */}
                  <div className="col-span-2">
                    <select className={selectCls} value={form.admissionType} onChange={e => u("admissionType", e.target.value)}>
                      <option value="">Select Admission Type *</option>
                      <option>Management Quota</option>
                      <option>Convener Quota</option>
                      <option>NRI Quota</option>
                    </select>
                  </div>

                  {/* Captcha */}
                  <div className="h-10 rounded-md border border-white/20 bg-white/10 px-3 flex items-center justify-between text-white text-sm">
                    <span className="font-semibold tracking-widest">dc253c</span>
                    <RefreshCw className="w-4 h-4 text-white/60 cursor-pointer hover:text-white transition-colors" />
                  </div>
                  <input className={inputCls} placeholder="Enter Captcha" value={form.captcha} onChange={e => u("captcha", e.target.value)} />

                  {/* Agree */}
                  <label className="col-span-2 flex items-start gap-2 text-white/70 text-xs pt-1 cursor-pointer">
                    <input type="checkbox" className="mt-0.5 accent-yellow-400" checked={form.agree} onChange={e => u("agree", e.target.checked)} />
                    <span>I agree to receive information by signing up on MITS Deemed to be University *</span>
                  </label>

                  <button type="button" className="col-span-2 h-11 rounded-xl bg-[#ffd600] text-[#0f2a44] hover:bg-[#ffe066] font-bold text-base tracking-wide transition-colors duration-300 shadow-lg">
                    REGISTER
                  </button>

                  <p className="col-span-2 text-center text-sm font-semibold text-white/70 mt-1">Already have an Account? <span className="text-[#ffd600] underline cursor-pointer">Login</span></p>
>>>>>>> d332adf7abdd367be2b1dd1e65c83abd81f34ed5
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
