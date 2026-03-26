import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Globe, Users, BookOpen } from "lucide-react";
import data from "@/data/conference.json";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Simple Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/klu.avif')" }}
      />
      <div className="absolute inset-0 bg-slate-900/60" />

      <div className="container relative z-10 px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/30 border border-primary/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase">KL University</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              {data.context.title}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {data.hero.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-lg px-8 h-14 bg-primary hover:bg-primary/90 rounded-full group transition-all duration-300 shadow-lg hover:shadow-primary/30"
              onClick={() => window.location.href = '/registration'}
            >
              Register Now 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 h-14 bg-white/10 border-white/20 hover:bg-white/20 text-white rounded-full backdrop-blur-sm hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
                >
                  Call for Papers
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] bg-slate-900 border-slate-700 text-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">Call for Papers</DialogTitle>
                  <DialogDescription className="text-slate-300">
                    Submission guidelines and topics of interest for AICDF 2026
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Topics of Interest</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Artificial Intelligence',
                        'Machine Learning',
                        'Deep Learning',
                        'Computer Vision',
                        'Natural Language Processing',
                        'Cybersecurity',
                        'Digital Forensics',
                        'Blockchain Technology',
                        'IoT Security',
                        'Cloud Security',
                        'Ethical Hacking',
                        'Data Privacy'
                      ].map((topic, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-sm text-slate-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-primary">Important Dates</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Paper Submission Deadline</span>
                        <span className="font-medium">July 15, 2026</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Notification of Acceptance</span>
                        <span className="font-medium">August 30, 2026</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Camera Ready Submission</span>
                        <span className="font-medium">September 15, 2026</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-slate-300">Conference Dates</span>
                        <span className="font-medium">October 15-17, 2026</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Submit Paper</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <p className="text-xs text-slate-400 mt-2">
                      Submission portal will open on June 1, 2026
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8">
            <div className="flex flex-col items-center gap-2">
              <Globe className="text-primary w-6 h-6" />
              <span className="text-sm font-medium">Hybrid Event</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Calendar className="text-primary w-6 h-6" />
              <span className="text-sm font-medium">Annual</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BookOpen className="text-primary w-6 h-6" />
              <span className="text-sm font-medium">Conference Publication</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="text-primary w-6 h-6" />
              <span className="text-sm font-medium">Global</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
