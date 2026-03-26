import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { starryBackground, starryOverlay } from "@/styles/theme";
import { 
  MapPin, 
  Mail, 
  Phone,
  Clock,
  MessageSquare
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden" style={starryBackground}>
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
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs font-medium tracking-wide uppercase">Get in Touch</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6 tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                  Contact Us
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Have questions about AI-CQCOM 2026? We're here to help. Reach out to us through any of the channels below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content Area */}
        <section className="py-20 bg-[#0B0F19] relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0B0F19] to-[#0B0F19]"></div>
          
          <div className="container relative z-10 mx-auto px-4 lg:max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Left Column: Contact Cards */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#131A2A] border border-white/5 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden"
              >
                {/* Decorative subtle gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                
                <h2 className="text-2xl font-bold text-white mb-8 relative z-10">Contact Information</h2>
                
                <div className="space-y-6 mb-10 relative z-10">
                  {/* Address */}
                  <div className="flex bg-[#1E2536] p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
                    <div className="w-12 h-12 rounded-lg bg-[#272E3F] flex items-center justify-center text-red-400 group-hover:text-red-500 transition-colors shrink-0 mr-5">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">Address</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-2">
                        KLH University, Bachupally, Hyderabad, Telangana 500090
                      </p>
                      <span className="text-xs text-gray-500">Visit us at our location</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex bg-[#1E2536] p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
                    <div className="w-12 h-12 rounded-lg bg-[#272E3F] flex items-center justify-center text-red-400 group-hover:text-red-500 transition-colors shrink-0 mr-5">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                      <a href="mailto:contact@AI-CQCOM2026.org" className="text-gray-400 text-sm hover:text-white transition-colors">
                        contact@AI-CQCOM2026.org
                      </a>
                      <p className="text-xs text-gray-500 mt-2">Drop us a message anytime</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex bg-[#1E2536] p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
                    <div className="w-12 h-12 rounded-lg bg-[#272E3F] flex items-center justify-center text-red-400 group-hover:text-red-500 transition-colors shrink-0 mr-5">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                      <a href="tel:+911234567890" className="text-gray-400 text-sm hover:text-white transition-colors block mb-2">
                        +91 123 456 7890
                      </a>
                      <span className="text-xs text-gray-500">Mon - Fri, 9:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 relative z-10">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-6">
                    <Clock className="w-5 h-5 text-red-400" />
                    Working Hours
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center text-gray-400">
                      <span>Monday - Friday:</span>
                      <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-400">
                      <span>Saturday:</span>
                      <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-400">
                      <span>Sunday:</span>
                      <span className="text-red-400 font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Google Map */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[#131A2A] border border-white/5 rounded-2xl p-6 shadow-2xl h-full min-h-[500px] flex flex-col"
              >
                <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                  <MapPin className="w-5 h-5 text-red-500" />
                  Our Location
                </h3>
                <div className="flex-1 rounded-xl overflow-hidden border border-white/10 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.84024479979!2d78.36151680193155!3d17.558362624535303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d2e6fcce9a7%3A0xe5452fcdfd9cb57c!2sKL%20University%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1709825424564!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '400px' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
