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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase">{data.context.organizer}</span>
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
            <Button size="lg" className="text-lg px-8 h-14 bg-primary hover:bg-primary/90 rounded-full" onClick={() => document.getElementById('registration')?.scrollIntoView({behavior: 'smooth'})}>
              Register Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 bg-white/10 border-white/20 hover:bg-white/20 text-white rounded-full backdrop-blur-sm">
                  Call for Papers
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Call for Papers</DialogTitle>
                  <DialogDescription>
                    Submission guidelines and topics of interest.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <p className="text-sm text-slate-500">
                    We invite original research papers on Artificial Intelligence, Cyber Security, and Digital Forensics.
                  </p>
                  <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                    <li>Full Paper Submission Deadline: July 15, 2026</li>
                    <li>Notification of Acceptance: August 30, 2026</li>
                  </ul>
                  <div className="p-4 bg-slate-100 rounded text-xs font-mono text-slate-500 mt-2">
                    // TODO: Insert Submission Portal Link Here
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8">
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
              <span className="text-sm font-medium">IEEE Publication</span>
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
