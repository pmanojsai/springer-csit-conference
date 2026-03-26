import { motion } from "framer-motion";
import { Users, BookOpen, CalendarDays, Clock, Award, TrendingUp, ArrowRight, Calendar, Brain, Shield, FileSearch, Database, Cpu, Network, BarChart3, Cloud, Code2, Globe, Bot, Server, Link2, Atom } from "lucide-react";
import { cn } from "@/lib/utils";
import { starryBackground, starryOverlay } from "@/styles/theme";
import data from "@/data/conference.json";

export function About() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Cutting-Edge Research",
      description: "Discover the latest advancements in AI and cybersecurity from leading experts."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Networking Opportunities",
      description: "Connect with industry professionals and like-minded individuals."
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Hands-On Workshops",
      description: "Gain practical skills through interactive sessions and workshops."
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Innovative Solutions",
      description: "Explore groundbreaking technologies and their real-world applications."
    }
  ];

  const stats = [
    { value: "24+", label: "World-Class Speakers" },
    { value: "500+", label: "Industry Professionals" },
    { value: "15+", label: "Technical Sessions" },
    { value: "3 Days", label: "Of Learning & Networking" },
  ];

  return (
    <section id="about" className="relative overflow-hidden" style={starryBackground}>
      <div className={cn("absolute inset-0", starryOverlay)}></div>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[30%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 py-24">
        <div className="container px-4 mx-auto">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4">
              About The Conference
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Shaping the Future of <span className="text-primary">AI & Cybersecurity</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {data.about.mission}
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/10 rounded-2xl -z-10 blur-xl"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-sm p-8 rounded-xl border border-white/5">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {data.about.overview}
                  </p>
                  <div className="space-y-4">
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{feature.title}</h4>
                          <p className="text-sm text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-full min-h-[400px] bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-2xl p-1 border border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="relative h-full bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-6">Key Focus Areas</h3>
                    <div className="space-y-4">
                      {data.about.focusAreas.map((area, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 * idx }}
                          className="group"
                        >
                          <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 group-hover:border-primary/30">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                              {area.includes("AI") ? <Cpu className="w-5 h-5" /> :
                               area.includes("Security") ? <Shield className="w-5 h-5" /> :
                               area.includes("Data") ? <Database className="w-5 h-5" /> :
                               area.includes("Network") ? <Network className="w-5 h-5" /> :
                               area.includes("Cloud") ? <Cloud className="w-5 h-5" /> :
                               area.includes("Analytics") ? <BarChart3 className="w-5 h-5" /> :
                               area.includes("Blockchain") ? <Link2 className="w-5 h-5" /> :
                               area.includes("Quantum") ? <Atom className="w-5 h-5" /> :
                               <Brain className="w-5 h-5" />}
                            </div>
                            <span className="font-medium text-white">{area}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"></div>
            <div className="relative z-10 p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to be part of AI-CQCOM 2026?
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join us for an unforgettable experience of learning, networking, and innovation at the forefront of AI and cybersecurity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => {
                      const element = document.getElementById('registration');
                      if (element) {
                        const headerOffset = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="group px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('dates');
                      if (element) {
                        const headerOffset = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    View Schedule
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
