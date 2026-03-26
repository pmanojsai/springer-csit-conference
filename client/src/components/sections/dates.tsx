import { motion } from "framer-motion";
import data from "@/data/conference.json";
import { CalendarDays, Clock, AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { starryBackground, starryOverlay } from "@/styles/theme";

export function Dates() {
  const getStatusIcon = (status: string) => {
    switch(status.toLowerCase()) {
      case 'upcoming':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'ongoing':
        return <AlertCircle className="w-4 h-4 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <CalendarDays className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <section id="dates" className="relative overflow-hidden py-24" style={starryBackground}>
      <div className={cn("absolute inset-0", starryOverlay)}></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[30%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4">
              Conference Timeline
            </span>
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Important Dates</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Mark your calendars for these key dates and deadlines for AI-CQCOM 2026
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {data.importantDates.map((item, idx) => {
                const isEven = idx % 2 === 0;
                const status = (item as any).status || 'upcoming';
                
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={cn(
                      "relative flex flex-col md:flex-row",
                      isEven ? "md:flex-row-reverse" : "md:flex-row"
                    )}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-6 w-6 h-6 flex items-center justify-center rounded-full bg-slate-900 border-4 border-primary z-10">
                      {getStatusIcon(status)}
                    </div>
                    
                    {/* Empty space for alignment */}
                    <div className={cn("hidden md:block", isEven ? "md:w-1/2" : "md:w-1/2")}></div>
                    
                    {/* Date Card */}
                    <div className={cn(
                      "w-full md:w-5/12 bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-white/5 transition-all hover:border-primary/30",
                      isEven ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                    )}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <CalendarDays className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary">{item.date}</div>
                          <div className="text-xs text-gray-400 flex items-center gap-1">
                            {getStatusIcon(status)}
                            <span className="capitalize">{status}</span>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.label}</h4>
                      {(item as any).description && (
                        <p className="text-sm text-gray-300">{(item as any).description}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-500/10 backdrop-blur-sm rounded-full border border-white/5">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-gray-300">
                All times are in <span className="text-white">IST (UTC+5:30)</span>
              </span>
            </div>
            <p className="mt-6 text-gray-400">
              Need more information about the schedule?{' '}
              <a href="#contact" className="text-primary hover:underline">Contact us</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
