import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { starryBackground, starryOverlay } from "@/styles/theme";
import { 
  Users, 
  Award, 
  BookOpen, 
  Globe, 
  Target, 
  Lightbulb, 
  Microscope, 
  GraduationCap,
  Building,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Brain,
  Shield,
  Code2
} from "lucide-react";

export default function AboutPage() {
  const universityStats = [
    { value: "2000+", label: "Students Enrolled" },
    { value: "150+", label: "Faculty Members" },
    { value: "50+", label: "Research Programs" },
    { value: "100+", label: "Industry Partnerships" }
  ];

  const departmentHighlights = [
    { icon: <Brain className="w-6 h-6" />, title: "AI & ML Research", description: "Cutting-edge research in artificial intelligence and machine learning" },
    { icon: <Shield className="w-6 h-6" />, title: "Cybersecurity", description: "Advanced security protocols and digital forensics" },
    { icon: <Code2 className="w-6 h-6" />, title: "Software Engineering", description: "Modern software development practices and methodologies" },
    { icon: <Microscope className="w-6 h-6" />, title: "Hardware Systems", description: "VLSI design and embedded systems research" }
  ];

  const conferenceFeatures = [
    { icon: <Globe className="w-6 h-6" />, title: "Global Participation", description: "Researchers from 30+ countries" },
    { icon: <Award className="w-6 h-6" />, title: "Conference Publication", description: "All accepted papers published in conference proceedings with ISBN" },
    { icon: <Users className="w-6 h-6" />, title: "Expert Speakers", description: "Keynotes from industry leaders and academicians" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Workshops", description: "Hands-on sessions on latest technologies" }
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
                <span className="text-xs font-medium tracking-wide uppercase">About</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                  Discover Our Excellence
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Learn about KL University, CSIT Department, and the prestigious AICDF 2026 conference
              </p>
            </motion.div>
          </div>
        </section>

        {/* About University Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/10 rounded-2xl -z-10 blur-xl"></div>
                  <div className="relative bg-slate-50 p-8 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Building className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900">About KL University</h2>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Koneru Lakshmaiah Education Foundation (KLEF) Deemed to be university was established in 1980-81, as KL College of Engineering, which was upgraded to KL College of Engineering Autonomous in 2006 by UGC, and was declared as a Deemed to be University in 2009 by UGC, MHRD Government of India. The university has expanded its presence with multiple campuses including Hyderabad (Moinabad and Bachupally). KLEF (Deemed to be University) offers outstanding undergraduate, postgraduate and doctoral programmes in engineering and management streams from its campuses. KLEF has established an ecosystem to promote innovation, including a centre for Innovation, Incubation and Entrepreneurship Cell (IIEC), leading to start-ups in different disciplines. Through publishing research articles in various national and international refereed journals, particularly in Scopus/WoS/SCI Indexed journals, research has taken a quantum leap towards improving its quality, resulting in good h-index.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-slate-700">NAAC 'A++' Accredited</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-slate-700">Autonomous Institution</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-slate-700">Industry-Integrated Curriculum</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-slate-700">Global Alumni Network</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-slate-600">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Bachupally, Hyderabad, Telangana</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/40"></div>
                  <div className="relative h-full bg-slate-900/60 backdrop-blur-sm p-8 flex flex-col justify-end">
                    <div className="grid grid-cols-2 gap-4">
                      {universityStats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                          <div className="text-sm text-slate-300">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About CSIT Department Section */}
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
                  About <span className="text-primary">CSIT Department</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  The Department of Computer Science and Information Technology is a center of excellence in education, research, and innovation
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-0 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-1"
                >
                  <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/40"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-1 lg:pl-12"
                >
                  <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-xl border border-white/5 h-full">
                    <h3 className="text-2xl font-bold text-white mb-6">B.Tech. Computer Science and Information Technology</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      The B.Tech. Computer Science and Information Technology, an undergraduate programme, is crafted to nurture motivated, innovative, and passionate graduates to fill ICT positions across sectors who can conceptualize, design, analyse, and develop ICT applications to meet modern-day requirements.
                    </p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      The B.Tech. in Computer Science and Information Technology curriculum is outcome-based and it delivers the most advanced theoretical concepts and practical skills in the domain. By enrolling on this programme, students develop critical, innovative, and problem-solving abilities for a smooth transition from academia to the corporate world. In addition, students are trained in interdisciplinary topics and attitudinal skills to enhance their scope of work.
                    </p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Computer Science and Information Technology (CS & IT) encompasses a variety of areas related to computation and applications of computing like the development of algorithms, analysis of algorithms, programming languages, software design, computer hardware, e-commerce, business information technology, Data Analytics, Machine Learning, Block Chain Technology, Augmented Virtual Reality, Mobile Application Development, IoT, Wireless Sensor network, Web Technology.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      {departmentHighlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            {highlight.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">{highlight.title}</h4>
                            <p className="text-sm text-gray-400">{highlight.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-300">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span>Offering B.Tech, M.Tech, and Ph.D. programs</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About AICDF 2026 Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                About <span className="text-primary">AICDF 2026</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                International Conference on Artificial Intelligence, Cyber Security, and Digital Forensics 2026
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Conference Overview</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    AICDF 2026 is a premier international conference that brings together researchers, academicians, and industry professionals to discuss the latest advancements in Artificial Intelligence, Cyber Security, and Digital Forensics. The conference serves as a platform for sharing innovative ideas, presenting research findings, and fostering collaborations.
                  </p>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    This year's conference focuses on the convergence of robotics, computer vision, and AI, exploring how these technologies are transforming industries and shaping the future. The event will feature keynote speeches, technical sessions, workshops, and networking opportunities.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold text-slate-900">October 24-26, 2026</div>
                        <div className="text-sm text-slate-600">3-Day Conference</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold text-slate-900">KL University</div>
                        <div className="text-sm text-slate-600">Bachupally, Hyderabad</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <Target className="w-6 h-6 text-primary" />
                      <div>
                        <div className="font-semibold text-slate-900">Conference Theme</div>
                        <div className="text-sm text-slate-600">"Intelligent Systems for Sustainable Future"</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-primary to-blue-600 p-8 rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5" />
                      <span>International Conference</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5" />
                      <span>International Conference</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5" />
                      <span>Proceedings Published</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5" />
                      <span>500+ Expected Delegates</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Conference Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conferenceFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
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
                  Join Us at AICDF 2026
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Be part of this prestigious international conference and contribute to the future of AI and cybersecurity
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      window.location.href = '/registration';
                    }}
                    className="group px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a 
                    href="#contact" 
                    className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Us
                  </a>
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
