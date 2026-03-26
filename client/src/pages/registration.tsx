import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { starryBackground, starryOverlay } from "@/styles/theme";
import {
  Calendar,
  Users,
  CreditCard,
  CheckCircle,
  ArrowRight,
  User,
  Mail,
  Phone,
  Building,
  GraduationCap,
  Briefcase,
  Globe,
  Shield,
  Clock,
  AlertCircle,
  Star
} from "lucide-react";
import data from "@/data/conference.json";
import { useState, useRef } from "react";
import { RegistrationForm } from "@/components/RegistrationForm";

export default function RegistrationPage() {
  const registrationFees = data.registration.fees;
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const formRef = useRef<HTMLDivElement>(null);

  const handleRegistration = (category: string, type: string) => {
    setSelectedCategory(category);
    setSelectedType(type);
    // Scroll to the form
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const registrationSteps = [
    {
      step: 1,
      title: "Select Category",
      description: "Choose your registration category based on your affiliation",
      icon: <User className="w-5 h-5" />
    },
    {
      step: 2,
      title: "Choose Type",
      description: "Select Early Bird, Regular, or Virtual participation",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      step: 3,
      title: "Complete Form",
      description: "Fill in your personal and professional details",
      icon: <Mail className="w-5 h-5" />
    },
    {
      step: 4,
      title: "Make Payment",
      description: "Secure payment processing for your registration",
      icon: <CreditCard className="w-5 h-5" />
    }
  ];

  const benefits = [
    "Access to all technical sessions",
    "Conference proceedings and materials",
    "Networking opportunities with experts",
    "Certificate of participation",
    "Conference kit and welcome reception",
    "Access to workshops and tutorials"
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" style={starryBackground}>
          <div className={cn("absolute inset-0", starryOverlay)}></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute -bottom-[30%] -right-[30%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-3xl"></div>
          </div>

          <div className="container relative z-10 px-4 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/30 border border-primary/50 mb-6">
                <Users className="w-4 h-4" />
                <span className="text-xs font-medium tracking-wide uppercase">Registration</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                  Register Now
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join AI-CQCOM 2026 - Secure your spot at the premier AI and Cyber Security conference
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>October 24-26, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Building className="w-5 h-5 text-primary" />
                  <span>KLH University, Bowrampet Campus, Hyderabad</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Registration Steps */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                How to <span className="text-primary">Register</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Simple 4-step registration process to join AI-CQCOM 2026
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {registrationSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    {idx < registrationSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-primary" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Categories */}
        <section className="py-20" style={starryBackground}>
          <div className={cn("absolute inset-0", starryOverlay)}></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute -bottom-[30%] -right-[30%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="container px-4 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                  Registration <span className="text-primary">Categories</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Choose the category that best suits your professional background
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {registrationFees.map((fee, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                        {idx === 0 && <GraduationCap className="w-8 h-8" />}
                        {idx === 1 && <Briefcase className="w-8 h-8" />}
                        {idx === 2 && <Users className="w-8 h-8" />}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{fee.category}</h3>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400 text-sm">Early Bird</span>
                          <span className="text-green-400 font-bold text-lg">{fee.earlyBird}</span>
                        </div>
                        <div className="text-xs text-gray-500">Valid until July 15, 2026</div>
                      </div>

                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400 text-sm">Regular</span>
                          <span className="text-white font-bold text-lg">{fee.regular}</span>
                        </div>
                        <div className="text-xs text-gray-500">July 16 - September 30, 2026</div>
                      </div>

                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400 text-sm">Virtual</span>
                          <span className="text-blue-400 font-bold text-lg">{fee.virtual}</span>
                        </div>
                        <div className="text-xs text-gray-500">Online participation only</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => handleRegistration(fee.category, 'early-bird')}
                        className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        Register Early Bird
                      </button>
                      <button
                        onClick={() => handleRegistration(fee.category, 'regular')}
                        className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm"
                      >
                        Register Regular
                      </button>
                      <button
                        onClick={() => handleRegistration(fee.category, 'virtual')}
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        Register Virtual
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                  What's <span className="text-primary">Included</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16" style={starryBackground}>
          <div className={cn("absolute inset-0", starryOverlay)}></div>
          <div className="relative z-10">
            <div className="container px-4 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <AlertCircle className="w-6 h-6" />
                    Important Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Early Bird Deadline</div>
                          <div className="text-sm opacity-90">July 15, 2026 - Save up to 20%</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Secure Payment</div>
                          <div className="text-sm opacity-90">All transactions are encrypted and secure</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Confirmation</div>
                          <div className="text-sm opacity-90">Email confirmation within 24 hours</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Support</div>
                          <div className="text-sm opacity-90">contact@AI-CQCOM2026.org | +91 123 456 7890</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="py-20 bg-slate-50">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Registration <span className="text-primary">Form</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Complete the form below to proceed with your registration
              </p>
            </motion.div>

            <RegistrationForm
              ref={formRef}
              preSelectedCategory={selectedCategory}
              preSelectedType={selectedType}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to Join AI-CQCOM 2026?
              </h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Don't miss this opportunity to connect with global experts in AI and Cyber Security
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/dates';
                  }}
                  className="px-6 py-3 bg-slate-100 text-slate-900 font-medium rounded-lg hover:bg-slate-200 transition-colors border border-slate-300"
                >
                  View Important Dates
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
