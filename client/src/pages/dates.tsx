import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { starryBackground, starryOverlay } from "@/styles/theme";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Award,
  Bell,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Mail,
  Phone
} from "lucide-react";
import data from "@/data/conference.json";

export default function DatesPage() {
  const importantDates = data.importantDates;
  const registrationFees = data.registration.fees;

  // Additional timeline events for comprehensive view
  const timelineEvents = [
    {
      date: "June 1, 2026",
      title: "Conference Portal Opens",
      description: "Registration and paper submission portal becomes active",
      status: "upcoming",
      icon: <Bell className="w-5 h-5" />
    },
    {
      date: "June 15, 2026",
      title: "Early Bird Registration Starts",
      description: "Special discount rates available for early registrants",
      status: "upcoming",
      icon: <Users className="w-5 h-5" />
    },
    {
      date: "July 15, 2026",
      title: "Paper Submission Deadline",
      description: "Last date to submit research papers for review",
      status: "important",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      date: "August 15, 2026",
      title: "Review Process Complete",
      description: "All submitted papers reviewed and evaluated",
      status: "intermediate",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      date: "August 30, 2026",
      title: "Acceptance Notification",
      description: "Authors notified about paper acceptance status",
      status: "important",
      icon: <Mail className="w-5 h-5" />
    },
    {
      date: "September 15, 2026",
      title: "Camera-Ready Submission",
      description: "Final version of accepted papers due",
      status: "important",
      icon: <Clock className="w-5 h-5" />
    },
    {
      date: "September 30, 2026",
      title: "Registration Deadline",
      description: "Final date for conference registration",
      status: "critical",
      icon: <AlertCircle className="w-5 h-5" />
    },
    {
      date: "October 24-26, 2026",
      title: "Conference Dates",
      description: "Main conference event at KLH University, Bowrampet Campus, Hyderabad",
      status: "highlight",
      icon: <Award className="w-5 h-5" />
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'important':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'highlight':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'bg-red-500';
      case 'important':
        return 'bg-orange-500';
      case 'highlight':
        return 'bg-green-500';
      case 'intermediate':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

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
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-medium tracking-wide uppercase">Important Dates</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                  Conference Schedule
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Mark your calendar for AI-CQCOM 2026 - Important dates and deadlines
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>KLH University, Bowrampet Campus, Hyderabad</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>October 24-26, 2026</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Important Dates Timeline */}
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
                Important <span className="text-primary">Dates</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Stay updated with all important deadlines and events for AI-CQCOM 2026
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-500 to-primary"></div>
                
                {/* Timeline events */}
                <div className="space-y-8">
                  {timelineEvents.map((event, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="relative flex items-start gap-6"
                    >
                      {/* Timeline dot */}
                      <div className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center text-white z-10 flex-shrink-0",
                        getStatusBgColor(event.status)
                      )}>
                        {event.icon}
                      </div>
                      
                      {/* Event content */}
                      <div className="flex-1 bg-white border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                          <h3 className="text-xl font-semibold text-slate-900">{event.title}</h3>
                          <div className="flex items-center gap-2">
                            <span className={cn(
                              "px-3 py-1 rounded-full text-sm font-medium border",
                              getStatusColor(event.status)
                            )}>
                              {event.date}
                            </span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{event.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Fees */}
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
                  Registration <span className="text-primary">Fees</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Choose the registration category that best suits your needs
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
                    <h3 className="text-xl font-semibold text-white mb-6">{fee.category}</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Early Bird</span>
                        <span className="text-primary font-semibold">{fee.earlyBird}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Regular</span>
                        <span className="text-white font-semibold">{fee.regular}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Virtual</span>
                        <span className="text-blue-400 font-semibold">{fee.virtual}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Reference</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5" />
                      <div>
                        <div className="font-semibold">Conference Dates</div>
                        <div className="text-sm opacity-90">October 24-26, 2026</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <div>
                        <div className="font-semibold">Venue</div>
                        <div className="text-sm opacity-90">KLH University, Bowrampet Campus, Hyderabad</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5" />
                      <div>
                        <div className="font-semibold">Paper Submission</div>
                        <div className="text-sm opacity-90">July 15, 2026</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5" />
                      <div>
                        <div className="font-semibold">Registration Deadline</div>
                        <div className="text-sm opacity-90">September 30, 2026</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16" style={starryBackground}>
          <div className={cn("absolute inset-0", starryOverlay)}></div>
          <div className="relative z-10">
            <div className="container px-4 mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Join AI-CQCOM 2026?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Don't miss important deadlines - Register now and be part of this prestigious conference
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      window.location.href = '/registration';
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button
                    onClick={() => {
                      window.location.href = '/call-for-papers';
                    }}
                    className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10"
                  >
                    Submit Paper
                  </button>
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
