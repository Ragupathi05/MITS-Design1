import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Check, Upload, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = ["Personal Details", "Academic Details", "Document Upload", "Review & Submit"];

const Admissions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  const [form, setForm] = useState({
    fullName: "", dob: "", email: "", phone: "", gender: "",
    tenth: "", twelfth: "", entranceScore: "", preferredCourse: "",
    photo: null as File | null, marksMemo: null as File | null, idProof: null as File | null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (key: string, value: string | File | null) => {
    setForm((p) => ({ ...p, [key]: value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: "" }));
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 0) {
      if (!form.fullName.trim()) newErrors.fullName = "Name is required";
      if (!form.dob) newErrors.dob = "Date of birth is required";
      if (!form.email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email";
      if (!form.phone.trim()) newErrors.phone = "Phone number is required";
      else if (!/^\d{10,}$/.test(form.phone.replace(/\D/g, ""))) newErrors.phone = "Enter a valid phone number";
      if (!form.gender) newErrors.gender = "Gender is required";
    } else if (currentStep === 1) {
      if (!form.tenth.trim()) newErrors.tenth = "10th percentage is required";
      else if (isNaN(parseFloat(form.tenth)) || parseFloat(form.tenth) < 0 || parseFloat(form.tenth) > 100) newErrors.tenth = "Enter a valid percentage (0-100)";
      if (!form.twelfth.trim()) newErrors.twelfth = "12th percentage is required";
      else if (isNaN(parseFloat(form.twelfth)) || parseFloat(form.twelfth) < 0 || parseFloat(form.twelfth) > 100) newErrors.twelfth = "Enter a valid percentage (0-100)";
      if (!form.entranceScore.trim()) newErrors.entranceScore = "Entrance score is required";
      if (!form.preferredCourse) newErrors.preferredCourse = "Please select a course";
    } else if (currentStep === 2) {
      if (!form.photo) newErrors.photo = "Photo is required";
      if (!form.marksMemo) newErrors.marksMemo = "Marks memo is required";
      if (!form.idProof) newErrors.idProof = "ID proof is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => { if (validateStep() && currentStep < 3) setCurrentStep(currentStep + 1); };
  const prev = () => { if (currentStep > 0) setCurrentStep(currentStep - 1); };

  const handleSubmit = () => {
    toast({ title: "Application Submitted!", description: "Thank you for applying to MITS. We will review your application and get back to you soon." });
    setCurrentStep(0);
    setForm({ fullName: "", dob: "", email: "", phone: "", gender: "", tenth: "", twelfth: "", entranceScore: "", preferredCourse: "", photo: null, marksMemo: null, idProof: null });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-0">
        <div
          className="relative min-h-screen py-12"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}Hero-Section/image%205.JPG)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
          <div className="relative z-10 container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-8">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Admissions 2026</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">Register for Admissions 2026</h1>
              <p className="text-white/70">Complete the form below to apply for admission to MITS.</p>
            </div>

            <div className="flex items-center justify-between mb-8">
              {steps.map((step, i) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                      i < currentStep ? "bg-accent border-accent text-accent-foreground scale-110" :
                      i === currentStep ? "bg-white border-white text-primary ring-4 ring-white/30" :
                      "bg-white/10 border-white/30 text-white/60"
                    }`}>
                      {i < currentStep ? <Check className="w-5 h-5" /> : i + 1}
                    </div>
                    <span className={`text-xs mt-2 hidden sm:block text-center max-w-[80px] font-medium transition-colors ${i <= currentStep ? "text-white" : "text-white/50"}`}>{step}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${i < currentStep ? "bg-accent" : "bg-white/20"}`} />
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-8 transition-all duration-300">
            {currentStep === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-in fade-in duration-300">
                <div>
                  <Label htmlFor="fullName" className={`text-white/90 ${errors.fullName ? "text-red-400" : ""}`}>Full Name</Label>
                  <Input id="fullName" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Enter your full name" className={`mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.fullName ? "border-red-400" : ""}`} />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fullName}</p>}
                </div>
                <div>
                  <Label htmlFor="dob" className={`text-white/90 ${errors.dob ? "text-red-400" : ""}`}>Date of Birth</Label>
                  <Input id="dob" type="date" value={form.dob} onChange={(e) => update("dob", e.target.value)} className={`mt-1 bg-white/10 border-white/20 text-white ${errors.dob ? "border-red-400" : ""}`} />
                  {errors.dob && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.dob}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className={`text-white/90 ${errors.email ? "text-red-400" : ""}`}>Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="your.email@example.com" className={`mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.email ? "border-red-400" : ""}`} />
                  {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className={`text-white/90 ${errors.phone ? "text-red-400" : ""}`}>Phone Number</Label>
                  <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 XXXXXXXXXX" className={`mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.phone ? "border-red-400" : ""}`} />
                  {errors.phone && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
                </div>
                <div className="md:col-span-2">
                  <Label className={`text-white/90 ${errors.gender ? "text-red-400" : ""}`}>Gender</Label>
                  <Select value={form.gender} onValueChange={(v) => update("gender", v)}>
                    <SelectTrigger className={`mt-1 bg-white/10 border-white/20 text-white ${errors.gender ? "border-red-400" : ""}`}><SelectValue placeholder="Select gender" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.gender}</p>}
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-in fade-in duration-300">
                <div>
                  <Label htmlFor="tenth" className={`text-white/90 ${errors.tenth ? "text-red-400" : ""}`}>10th Percentage</Label>
                  <Input id="tenth" value={form.tenth} onChange={(e) => update("tenth", e.target.value)} placeholder="e.g., 92.5" className={`mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.tenth ? "border-red-400" : ""}`} />
                  {errors.tenth && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.tenth}</p>}
                </div>
                <div>
                  <Label htmlFor="twelfth" className={`text-white/90 ${errors.twelfth ? "text-red-400" : ""}`}>12th Percentage</Label>
                  <Input id="twelfth" value={form.twelfth} onChange={(e) => update("twelfth", e.target.value)} placeholder="e.g., 88.0" className={`mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.twelfth ? "border-red-400" : ""}`} />
                  {errors.twelfth && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.twelfth}</p>}
                </div>
                <div>
                  <Label htmlFor="entranceScore" className={`text-white/90 ${errors.entranceScore ? "text-red-400" : ""}`}>Entrance Exam Score</Label>
                  <Input id="entranceScore" value={form.entranceScore} onChange={(e) => update("entranceScore", e.target.value)} placeholder="e.g., JEE Main / EAMCET score" className={`mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.entranceScore ? "border-red-400" : ""}`} />
                  {errors.entranceScore && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.entranceScore}</p>}
                </div>
                <div>
                  <Label className={`text-white/90 ${errors.preferredCourse ? "text-red-400" : ""}`}>Preferred Course</Label>
                  <Select value={form.preferredCourse} onValueChange={(v) => update("preferredCourse", v)}>
                    <SelectTrigger className={`mt-1 bg-white/10 border-white/20 text-white ${errors.preferredCourse ? "border-red-400" : ""}`}><SelectValue placeholder="Select course" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="btech-cse">B.Tech - Computer Science</SelectItem>
                      <SelectItem value="btech-ece">B.Tech - Electronics</SelectItem>
                      <SelectItem value="btech-me">B.Tech - Mechanical</SelectItem>
                      <SelectItem value="btech-ce">B.Tech - Civil</SelectItem>
                      <SelectItem value="mtech">M.Tech</SelectItem>
                      <SelectItem value="mba">MBA</SelectItem>
                      <SelectItem value="mca">MCA</SelectItem>
                      <SelectItem value="phd">Ph.D.</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.preferredCourse && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.preferredCourse}</p>}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-in fade-in duration-300">
                {[
                  { key: "photo", label: "Passport Photo" },
                  { key: "marksMemo", label: "Marks Memo (10th & 12th)" },
                  { key: "idProof", label: "ID Proof (Aadhar / Passport)" },
                ].map((doc) => (
                  <div key={doc.key}>
                    <Label className={`text-white/90 ${errors[doc.key as keyof typeof errors] ? "text-red-400" : ""}`}>{doc.label}</Label>
                    <label className={`mt-2 flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl p-5 cursor-pointer transition-all ${
                      errors[doc.key as keyof typeof errors] ? "border-red-400 bg-red-500/10" : "border-white/20 hover:border-accent bg-white/5"
                    }`}>
                      <Upload className="w-5 h-5 text-white/60" />
                      <span className="text-white/60 text-xs text-center">
                        {(form as any)[doc.key] ? (form as any)[doc.key].name : "Click to upload"}
                      </span>
                      <input type="file" className="hidden" onChange={(e) => update(doc.key, e.target.files?.[0] || null)} />
                    </label>
                    {errors[doc.key as keyof typeof errors] && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors[doc.key as keyof typeof errors]}</p>}
                  </div>
                ))}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-white">Review Your Application</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  {[
                    ["Full Name", form.fullName], ["Date of Birth", form.dob],
                    ["Email", form.email], ["Phone", form.phone],
                    ["Gender", form.gender], ["10th %", form.tenth],
                    ["12th %", form.twelfth], ["Entrance Score", form.entranceScore],
                    ["Preferred Course", form.preferredCourse],
                    ["Photo", form.photo?.name || "Not uploaded"],
                    ["Marks Memo", form.marksMemo?.name || "Not uploaded"],
                    ["ID Proof", form.idProof?.name || "Not uploaded"],
                  ].map(([label, value]) => (
                    <div key={label as string} className="bg-white/10 rounded-lg p-3">
                      <p className="text-white/50 text-xs">{label}</p>
                      <p className="font-semibold text-white text-sm mt-0.5">{value || "—"}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-white/20">
              <Button variant="outline" onClick={prev} disabled={currentStep === 0} className="font-semibold border-white/30 text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 w-4 h-4" /> Previous
              </Button>
              {currentStep < 3 ? (
                <Button onClick={next} className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Next <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Submit Application <Check className="ml-2 w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
