import { motion } from "framer-motion";
import data from "@/data/conference.json";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, FileSearch } from "lucide-react";

export function About() {
  const icons = {
    "Artificial Intelligence": Brain,
    "Cyber Security": Shield,
    "Digital Forensics": FileSearch,
    "Data Science": Brain
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">About The Conference</h2>
            <h3 className="text-4xl font-heading font-bold text-slate-900 mb-6">
              Advancing Technology for Humanity
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {data.about.mission}
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {data.about.overview}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-1">Organized By</h4>
                <p className="text-slate-600">{data.context.organizer}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-1">Theme</h4>
                <p className="text-slate-600">{data.context.theme}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            {data.about.focusAreas.map((area, idx) => (
              <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Brain className="w-6 h-6" /> 
                    {/* Placeholder icon logic, in real app we'd map dynamically */}
                  </div>
                  <span className="font-bold text-lg text-slate-800">{area}</span>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
