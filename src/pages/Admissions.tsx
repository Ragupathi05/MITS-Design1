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
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Admissions 2026</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Application Form</h1>
            <p className="text-muted-foreground">Complete the form below to apply for admission to MITS.</p>
          </div>

          {/* Stepper with smooth animation */}
          <div className="flex items-center justify-between mb-10">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                    i < currentStep ? "bg-secondary border-secondary text-secondary-foreground scale-110" :
                    i === currentStep ? "bg-primary border-primary text-primary-foreground ring-4 ring-primary/20" :
                    "bg-muted border-border text-muted-foreground"
                  }`}>
                    {i < currentStep ? <Check className="w-5 h-5" /> : i + 1}
                  </div>
                  <span className={`text-xs mt-2 hidden sm:block text-center max-w-[80px] font-medium transition-colors ${i <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>{step}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${i < currentStep ? "bg-secondary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl border border-border shadow-lg p-8 transition-all duration-300">
            {currentStep === 0 && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div>
                  <Label htmlFor="fullName" className={errors.fullName ? "text-red-600" : ""}>Full Name</Label>
                  <Input id="fullName" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Enter your full name" className={`mt-1 ${errors.fullName ? "border-red-500 focus:border-red-600" : ""}`} />
                  {errors.fullName && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fullName}</p>}
                </div>
                <div>
                  <Label htmlFor="dob" className={errors.dob ? "text-red-600" : ""}>Date of Birth</Label>
                  <Input id="dob" type="date" value={form.dob} onChange={(e) => update("dob", e.target.value)} className={`mt-1 ${errors.dob ? "border-red-500 focus:border-red-600" : ""}`} />
                  {errors.dob && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.dob}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className={errors.email ? "text-red-600" : ""}>Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="your.email@example.com" className={`mt-1 ${errors.email ? "border-red-500 focus:border-red-600" : ""}`} />
                  {errors.email && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className={errors.phone ? "text-red-600" : ""}>Phone Number</Label>
                  <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 XXXXXXXXXX" className={`mt-1 ${errors.phone ? "border-red-500 focus:border-red-600" : ""}`} />
                  {errors.phone && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
                </div>
                <div>
                  <Label className={errors.gender ? "text-red-600" : ""}>Gender</Label>
                  <Select value={form.gender} onValueChange={(v) => update("gender", v)}>
                    <SelectTrigger className={`mt-1 ${errors.gender ? "border-red-500" : ""}`}><SelectValue placeholder="Select gender" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.gender}</p>}
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div>
                  <Label htmlFor="tenth" className={errors.tenth ? "text-red-600" : ""}>10th Percentage</Label>
                  <Input id="tenth" value={form.tenth} onChange={(e) => update("tenth", e.target.value)} placeholder="e.g., 92.5" className={`mt-1 ${errors.tenth ? "border-red-500 focus:border-red-600" : ""}`} />
                  {errors.tenth && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.tenth}</p>}
                </div>
                <div>
                  <Label htmlFor="twelfth" className={errors.twelfth ? "text-red-600" : ""}>12th Percentage</Label>
                  <Input id="twelfth" value={form.twelfth} onChange={(e) => update("twelfth", e.target.value)} placeholder="e.g., 88.0" className={`mt-1 ${errors.twelfth ? "border-red-500 focus:border-red-600" : ""}`} />
                  {errors.twelfth && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.twelfth}</p>}
                </div>
                <div>
                  <Label htmlFor="entranceScore" className={errors.entranceScore ? "text-red-600" : ""}>Entrance Exam Score</Label>
                  <Input id="entranceScore" value={form.entranceScore} onChange={(e) => update("entranceScore", e.target.value)} placeholder="e.g., JEE Main / EAMCET score" className={`mt-1 ${errors.entranceScore ? "border-red-500 focus:border-red-600" : ""}`} />
                  {errors.entranceScore && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.entranceScore}</p>}
                </div>
                <div>
                  <Label className={errors.preferredCourse ? "text-red-600" : ""}>Preferred Course</Label>
                  <Select value={form.preferredCourse} onValueChange={(v) => update("preferredCourse", v)}>
                    <SelectTrigger className={`mt-1 ${errors.preferredCourse ? "border-red-500" : ""}`}><SelectValue placeholder="Select course" /></SelectTrigger>
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
                  {errors.preferredCourse && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.preferredCourse}</p>}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {[
                  { key: "photo", label: "Passport Photo" },
                  { key: "marksMemo", label: "Marks Memo (10th & 12th)" },
                  { key: "idProof", label: "ID Proof (Aadhar / Passport)" },
                ].map((doc) => (
                  <div key={doc.key}>
                    <Label className={errors[doc.key as keyof typeof errors] ? "text-red-600" : ""}>{doc.label}</Label>
                    <label className={`mt-2 flex items-center justify-center gap-3 border-2 border-dashed rounded-xl p-6 cursor-pointer transition-all ${
                      errors[doc.key as keyof typeof errors] ? "border-red-500 bg-red-50/50" : "border-border hover:border-secondary bg-muted/50"
                    }`}>
                      <Upload className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm">
                        {(form as any)[doc.key] ? (form as any)[doc.key].name : "Click to upload"}
                      </span>
                      <input type="file" className="hidden" onChange={(e) => update(doc.key, e.target.files?.[0] || null)} />
                    </label>
                    {errors[doc.key as keyof typeof errors] && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors[doc.key as keyof typeof errors]}</p>}
                  </div>
                ))}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="font-display text-xl font-bold text-card-foreground">Review Your Application</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    ["Full Name", form.fullName],
                    ["Date of Birth", form.dob],
                    ["Email", form.email],
                    ["Phone", form.phone],
                    ["Gender", form.gender],
                    ["10th %", form.tenth],
                    ["12th %", form.twelfth],
                    ["Entrance Score", form.entranceScore],
                    ["Preferred Course", form.preferredCourse],
                    ["Photo", form.photo?.name || "Not uploaded"],
                    ["Marks Memo", form.marksMemo?.name || "Not uploaded"],
                    ["ID Proof", form.idProof?.name || "Not uploaded"],
                  ].map(([label, value]) => (
                    <div key={label as string}>
                      <p className="text-muted-foreground text-xs">{label}</p>
                      <p className="font-semibold text-card-foreground">{value || "—"}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button variant="outline" onClick={prev} disabled={currentStep === 0} className="font-semibold">
                <ArrowLeft className="mr-2 w-4 h-4" /> Previous
              </Button>
              {currentStep < 3 ? (
                <Button onClick={next} className="bg-primary text-primary-foreground hover:bg-navy-light font-semibold">
                  Next <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-secondary text-secondary-foreground hover:bg-gold-light font-semibold">
                  Submit Application <Check className="ml-2 w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
