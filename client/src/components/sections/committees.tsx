import data from "@/data/conference.json";
import { motion } from "framer-motion";
import { Globe, GraduationCap, ArrowRight } from "lucide-react";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
}

interface Member {
  name: string;
  role: string;
  affiliation: string;
  image?: string;
  email?: string;
}

function MemberCard({ member }: { member: Member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-slate-200 rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex items-start gap-4"
    >
      <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 border-2 border-primary/20 flex items-center justify-center">
        <span className="text-primary font-bold text-sm">{getInitials(member.name)}</span>
      </div>
      <div className="min-w-0">
        <h4 className="font-semibold text-slate-900 text-sm leading-tight">{member.name}</h4>
        <p className="text-primary text-xs font-medium mt-0.5">{member.role}</p>
        <p className="text-slate-500 text-xs mt-0.5 leading-snug">{member.affiliation}</p>
      </div>
    </motion.div>
  );
}

export function Committees() {
  const international: Member[] = data.internationalTechnicalCommittee;
  const national: Member[] = data.nationalTechnicalCommittee;

  return (
    <section id="committees" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm">AI-CQCOM 2026</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4">
            Technical Advisory Committee
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            Eminent researchers and practitioners from leading institutions around the world providing 
            technical guidance for AI-CQCOM 2026.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* International */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">International Committee</h3>
            </div>
            <div className="space-y-3">
              {international.map((m, i) => (
                <MemberCard key={i} member={m} />
              ))}
            </div>
          </div>

          {/* National */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">National Committee</h3>
            </div>
            <div className="space-y-3">
              {national.map((m, i) => (
                <MemberCard key={i} member={m} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-14"
        >
          <a
            href="/committee"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            View Full Committee
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
