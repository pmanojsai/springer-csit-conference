import data from "@/data/conference.json";
import { CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

export function Dates() {
  return (
    <section id="dates" className="py-24 bg-slate-900 text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Schedule</h2>
          <h3 className="text-3xl font-heading font-bold text-white">Important Dates</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {data.importantDates.map((item, idx) => (
              <div key={idx} className={cn(
                "relative flex items-center justify-between md:justify-center gap-8",
                idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              )}>
                {/* Date Bubble */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-slate-900 z-10 hidden md:block" />

                <div className="w-full md:w-[45%]">
                  <div className={cn(
                    "bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors",
                    idx % 2 === 0 ? "text-left" : "md:text-right text-left"
                  )}>
                    <div className={cn(
                      "flex items-center gap-3 mb-2",
                      idx % 2 === 0 ? "justify-start" : "md:justify-end justify-start"
                    )}>
                      <CalendarDays className="w-5 h-5 text-primary" />
                      <span className="font-bold text-lg text-primary">{item.date}</span>
                    </div>
                    <h4 className="text-xl font-heading font-medium text-white">{item.label}</h4>
                  </div>
                </div>
                
                <div className="hidden md:block w-full md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
