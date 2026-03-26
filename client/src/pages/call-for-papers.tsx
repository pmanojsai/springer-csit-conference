import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { starryBackground, starryOverlay } from "@/styles/theme";
import { 
  Calendar, 
  FileText, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Download,
  Send,
  Target,
  BookOpen,
  Lightbulb,
  Globe,
  ArrowRight,
  Brain,
  Shield,
  Database,
  Link2,
  Atom,
  Cpu,
  Network,
  BarChart3,
  Cloud,
  Bot,
  Server,
  Eye,
  Lock,
  Wifi,
  Smartphone
} from "lucide-react";

export default function CallForPapersPage() {
  const importantDates = [
    { 
      date: "July 15, 2026", 
      event: "Paper Submission Deadline", 
      status: "upcoming" 
    },
    { 
      date: "August 30, 2026", 
      event: "Notification of Acceptance", 
      status: "upcoming" 
    },
    { 
      date: "September 15, 2026", 
      event: "Camera-Ready Submission", 
      status: "upcoming" 
    },
    { 
      date: "October 15-17, 2026", 
      event: "Conference Dates", 
      status: "upcoming" 
    }
  ];

  const submissionGuidelines = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Paper Format",
      description: "All submissions must be in standard academic format, maximum 6 pages including references."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Author Guidelines",
      description: "Maximum of 5 authors per paper. At least one author must register for the conference."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Review Process",
      description: "Double-blind peer review process by international experts in the field."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Publication",
      description: "Accepted papers will be published in conference proceedings with ISBN."
    }
  ];

  const topics = [
    { 
      title: "Artificial Intelligence and Machine Learning", 
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-600/20 to-purple-800/40",
      iconBg: "bg-purple-600/10"
    },
    { 
      title: "Network Security & Cryptography", 
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-600/20 to-red-800/40",
      iconBg: "bg-red-600/10"
    },
    { 
      title: "Digital Forensics & Incident Response", 
      icon: <Lock className="w-6 h-6" />,
      color: "from-orange-600/20 to-orange-800/40",
      iconBg: "bg-orange-600/10"
    },
    { 
      title: "Big Data Analytics & Privacy", 
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-600/20 to-blue-800/40",
      iconBg: "bg-blue-600/10"
    },
    { 
      title: "Blockchain & Web3", 
      icon: <Link2 className="w-6 h-6" />,
      color: "from-emerald-600/20 to-emerald-800/40",
      iconBg: "bg-emerald-600/10"
    },
    { 
      title: "Quantum Computing", 
      icon: <Atom className="w-6 h-6" />,
      color: "from-indigo-600/20 to-indigo-800/40",
      iconBg: "bg-indigo-600/10"
    },
    { 
      title: "Deep Learning & Neural Networks", 
      icon: <Cpu className="w-6 h-6" />,
      color: "from-cyan-600/20 to-cyan-800/40",
      iconBg: "bg-cyan-600/10"
    },
    { 
      title: "Computer Vision & Image Processing", 
      icon: <Eye className="w-6 h-6" />,
      color: "from-pink-600/20 to-pink-800/40",
      iconBg: "bg-pink-600/10"
    },
    { 
      title: "Cybersecurity & Information Assurance", 
      icon: <Shield className="w-6 h-6" />,
      color: "from-rose-600/20 to-rose-800/40",
      iconBg: "bg-rose-600/10"
    },
    { 
      title: "IoT & Smart Systems", 
      icon: <Wifi className="w-6 h-6" />,
      color: "from-green-600/20 to-green-800/40",
      iconBg: "bg-green-600/10"
    },
    { 
      title: "Cloud Computing & Edge AI", 
      icon: <Cloud className="w-6 h-6" />,
      color: "from-sky-600/20 to-sky-800/40",
      iconBg: "bg-sky-600/10"
    },
    { 
      title: "Wireless Networks & Communications", 
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-violet-600/20 to-violet-800/40",
      iconBg: "bg-violet-600/10"
    }
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
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium tracking-wide uppercase">Submissions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                  Call for Papers
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Submit your research papers to AI-CQCOM 2026 and contribute to the advancement of AI, Cyber Security, and Digital Forensics
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                  <Download className="mr-2 w-5 h-5" />
                  Download Template
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => window.location.href = '/#registration'}
                  className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Submit Paper
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Important <span className="text-primary">Dates</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Mark your calendars for these important deadlines
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {importantDates.map((date, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-primary/20 overflow-hidden">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${idx === 0 ? 'from-red-50 to-pink-50' : idx === 1 ? 'from-blue-50 to-indigo-50' : idx === 2 ? 'from-green-50 to-emerald-50' : 'from-purple-50 to-violet-50'} opacity-50`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header with icon and status */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-xl ${idx === 0 ? 'bg-red-100 text-red-600' : idx === 1 ? 'bg-blue-100 text-blue-600' : idx === 2 ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Calendar className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse shadow-lg"></div>
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Upcoming</span>
                        </div>
                      </div>
                      
                      {/* Date */}
                      <div className={`text-lg font-bold mb-3 ${idx === 0 ? 'text-red-600' : idx === 1 ? 'text-blue-600' : idx === 2 ? 'text-green-600' : 'text-purple-600'}`}>
                        {date.date}
                      </div>
                      
                      {/* Event */}
                      <div className="text-slate-700 font-semibold text-sm leading-tight mb-4">
                        {date.event}
                      </div>
                      
                      {/* Progress indicator */}
                      <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${
                            idx === 0 ? 'bg-gradient-to-r from-red-500 to-pink-500' : 
                            idx === 1 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 
                            idx === 2 ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 
                            'bg-gradient-to-r from-purple-500 to-violet-500'
                          }`}
                          style={{width: `${Math.min((idx + 1) * 25, 100)}%`}}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    
                    {/* Decorative corner */}
                    <div className={`absolute top-0 right-0 w-24 h-24 ${idx === 0 ? 'bg-red-500' : idx === 1 ? 'bg-blue-500' : idx === 2 ? 'bg-green-500' : 'bg-purple-500'} opacity-5 rounded-bl-full`}></div>
                  </div>
                  
                  {/* Number indicator */}
                  <div className={`absolute -top-3 -left-3 w-8 h-8 ${idx === 0 ? 'bg-red-500' : idx === 1 ? 'bg-blue-500' : idx === 2 ? 'bg-green-500' : 'bg-purple-500'} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg`}>
                    {idx + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Topics of Interest */}
        <section className="py-24" style={starryBackground}>
          <div className={cn("absolute inset-0", starryOverlay)}></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute -bottom-[30%] -right-[30%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="container px-4 mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                  Topics of <span className="text-primary">Interest</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  We invite submissions on original research in the following areas
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {topics.map((topic, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group relative"
                  >
                    <div className={`relative h-full p-6 rounded-2xl border border-white/5 bg-gradient-to-br ${topic.color} backdrop-blur-sm hover:border-primary/30 transition-all duration-300 overflow-hidden`}>
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                      
                      {/* Icon */}
                      <div className={`relative w-14 h-14 rounded-xl ${topic.iconBg} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {topic.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-white font-semibold text-lg mb-2 leading-tight">
                        {topic.title}
                      </h3>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      
                      {/* Subtle glow effect */}
                      <div className="absolute -inset-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Submission Guidelines */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Submission <span className="text-primary">Guidelines</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Follow these guidelines for successful paper submission
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {submissionGuidelines.map((guideline, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {guideline.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{guideline.title}</h3>
                    <p className="text-slate-600">{guideline.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                  Ready to Submit Your Research?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join researchers from around the world and share your innovations at AI-CQCOM 2026
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                    <Send className="mr-2 w-5 h-5" />
                    Submit Your Paper
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => window.location.href = '/about'}
                    className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center"
                  >
                    <BookOpen className="mr-2 w-5 h-5" />
                    Learn More
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
