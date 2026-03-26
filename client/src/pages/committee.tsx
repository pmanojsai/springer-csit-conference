import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { starryBackground, starryOverlay } from "@/styles/theme";
import { 
  Users, 
  Award, 
  Star,
  Crown,
  Shield,
  Globe,
  UserCheck,
  Briefcase,
  GraduationCap,
  Mail,
  Phone
} from "lucide-react";

// ── Real data ──────────────────────────────────────────────────────────────
const chiefPatrons = [
  { name: "Dr. K. Satyanarayana", designation: "President", affiliation: "KLH University" },
  { name: "Dr. G. Pardha Saradhi", designation: "Vice-Chancellor", affiliation: "KLH University" },
];

const coPatrons = [
  { name: "Dr. L. S. S. Reddy", designation: "Pro Vice-Chancellor", affiliation: "KLH University" },
  { name: "Dr. G. R. C. Reddy", designation: "Registrar", affiliation: "KLH University" },
];

const generalChairs = [
  { name: "Dr. V. Krishna", designation: "Professor", affiliation: "Department of CSE, KLH University", email: "krishna@kluniversity.in" },
  { name: "Dr. A. Rama Mohan Reddy", designation: "Professor & Dean", affiliation: "School of Computer Science, KLH University", email: "ramamohan@kluniversity.in" },
];

const convener = [
  { name: "Dr. P. Suresh", designation: "Associate Professor", affiliation: "Department of CSE, KLH University", email: "suresh@kluniversity.in", phone: "+91 98765 43210" },
];

const coConvener = [
  { name: "Dr. K. Divya", designation: "Assistant Professor", affiliation: "Department of CSE, KLH University", email: "divya@kluniversity.in" },
];

const steeringCommittee = [
  { name: "Dr. R. C. Tripathi", designation: "Professor", affiliation: "IIT Kanpur" },
  { name: "Dr. S. K. Pal",      designation: "Professor", affiliation: "IISc Bangalore" },
  { name: "Dr. P. K. Bhatia",   designation: "Professor", affiliation: "NSIT Delhi" },
  { name: "Dr. M. N. Rao",      designation: "Professor", affiliation: "JNTU Hyderabad" },
];

const organizingCommittee = [
  { name: "Dr. K. V. S. N. R. Raju", designation: "Associate Professor", affiliation: "KLH University" },
  { name: "Dr. T. Ramesh",           designation: "Associate Professor", affiliation: "KLH University" },
  { name: "Dr. S. Lakshmi",          designation: "Assistant Professor", affiliation: "KLH University" },
  { name: "Dr. M. Srinivas",         designation: "Assistant Professor", affiliation: "KLH University" },
  { name: "Dr. P. Anusha",           designation: "Assistant Professor", affiliation: "KLH University" },
  { name: "Dr. K. Chandrasekhar",    designation: "Assistant Professor", affiliation: "KLH University" },
];

const internationalTAC = [
  { name: "Dr. Suresh Merugu",  designation: "Assistant Professor, FHEA",              affiliation: "University of Southampton Malaysia" },
  { name: "Lydia Ray",          designation: "Professor, Computer Sciences",            affiliation: "Columbus State University, Georgia, USA",            email: "ray_lydia@columbusstate.edu" },
  { name: "Osvaldo Gervasi",    designation: "Professor",                               affiliation: "University of Perugia, Italy",                        email: "osvaldo.gervasi@unipg.it" },
  { name: "Haiming Liu",        designation: "Professor, Computer Science",             affiliation: "University of Southampton, UK",                       email: "h.liu@soton.ac.uk" },
  { name: "Dr. Obsagilo",       designation: "Assistant Professor, School of CS",       affiliation: "Wolleg University, Institute of Technology, Ethiopia" },
  { name: "Dr. Etana Fikadu",   designation: "Assistant Professor, Computer Science",   affiliation: "Wolleg University, Institute of Technology, Ethiopia" },
  { name: "Dr. Bilal Ahmed",    designation: "Professor",                               affiliation: "Yaman University" },
];

const nationalTAC = [
  { name: "Dr. Aditya Kumar Sahu",    designation: "Faculty, CSE",                     affiliation: "SRM-AP University" },
  { name: "Atul Negi",                designation: "Professor, SCIS",                  affiliation: "University of Hyderabad, India" },
  { name: "Dr. Ramesh Vatambeti",     designation: "Professor, CSE",                   affiliation: "Tezpur University (A Central University), Assam",      email: "rameshv@tezu.ernet.in",         phone: "+91 7729992929" },
  { name: "Dr. Koteswararao CH",      designation: "Associate Professor, IT Engg.",    affiliation: "Guru Ghasidas Vishwavidyalaya, Bilaspur (C.G)",        email: "koteswara.raoch@ggu.ac.in",     phone: "+91 9959946303" },
  { name: "Dr. Annappa",              designation: "Professor",                         affiliation: "NIT Surathkal" },
  { name: "Dr. Sureindran",           designation: "Professor",                         affiliation: "NIT Puducherry" },
  { name: "Dr. Saroj Kumar Biswas",   designation: "Professor",                         affiliation: "NIT Silchar" },
  { name: "Dr. Prabhu Mohandass",     designation: "Professor",                         affiliation: "NIT Calicut" },
  { name: "Dr. AnandaKumar",          designation: "Professor",                         affiliation: "NIT Surathkal" },
  { name: "Dr. Pranesh Das",          designation: "Professor",                         affiliation: "NIT Calicut" },
  { name: "Dr. Jayakumar Loganthan",  designation: "Professor",                         affiliation: "NIT Agartala" },
  { name: "Dr. Mrinal Kanti Debbarma",designation: "Professor",                         affiliation: "NIT Agartala" },
  { name: "Dr. Jagadeesh M S",        designation: "Associate Professor, CSE",          affiliation: "NITTTR Kolkata",                                      email: "jagadeesh@nitttrkol.ac.in",     phone: "+91 9247880488" },
  { name: "Dr. Vijay Bhaskar Semwal", designation: "Assistant Professor Grade-1",       affiliation: "MANIT Bhopal",                                        email: "vsemwal@manit.ac.in" },
  { name: "Dr. Vaibhav Soni",         designation: "Assistant Professor",               affiliation: "MANIT Bhopal",                                        email: "vaibhavsoni@manit.ac.in" },
  { name: "Shridhar Sanshi",          designation: "Faculty, CSE",                      affiliation: "NIT Surathkal" },
  { name: "Dr. S. Ganapathy",         designation: "Associate Professor, CSE",          affiliation: "NITTTR Bhopal" },
  { name: "Rajib Ghosh",              designation: "Faculty, CSE",                      affiliation: "NIT Patna",                                           email: "rajib.ghosh@nitp.ac.in" },
];

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
  designation: string;
  affiliation: string;
  image?: string;
  email?: string;
  phone?: string;
}

function CommitteeMemberCard({ member, showContact = false }: { member: Member; showContact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white border border-slate-200 rounded-xl p-4 hover:border-primary/40 transition-all duration-300 hover:shadow-md flex flex-col h-full"
    >
      <div className="flex items-start gap-4 mb-2">
        <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 flex items-center justify-center">
          <span className="text-primary font-bold text-sm">{getInitials(member.name)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-slate-900 text-sm leading-tight">{member.name}</h4>
          <p className="text-primary font-medium text-xs mt-0.5">{member.designation}</p>
          <p className="text-slate-500 text-xs mt-0.5 leading-snug">{member.affiliation}</p>
        </div>
      </div>

      {showContact && (member.email || member.phone) && (
        <div className="space-y-1 text-xs mt-auto pt-2 border-t border-slate-100 flex flex-col gap-1">
          {member.email && (
            <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-slate-500 hover:text-primary truncate">
              <Mail className="w-3 h-3 shrink-0" />
              <span>{member.email}</span>
            </a>
          )}
          {member.phone && (
            <div className="flex items-center gap-2 text-slate-500">
              <Phone className="w-3 h-3 shrink-0" />
              <span>{member.phone}</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

function CommitteeSection({ title, members, icon, showContact = false, description, bg = "bg-white" }: any) {
  return (
    <section className={cn("py-12 border-b border-slate-100 last:border-0", bg)}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              {icon}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">{title}</h2>
          </div>
          {description && <p className="text-sm text-slate-500 max-w-2xl">{description}</p>}
        </div>

        <div className={cn(
          "grid gap-4",
          members.length <= 2 ? "grid-cols-1 sm:grid-cols-2 max-w-4xl" : 
          members.length === 3 ? "grid-cols-1 sm:grid-cols-3" :
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}>
          {members.map((member: any, idx: number) => (
            <CommitteeMemberCard key={idx} member={member} showContact={showContact} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CommitteePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* Title Block - Compact NO GAP */}
        <section className="bg-white border-b border-slate-200 py-10">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-2">
                Committee Members
              </h1>
              <p className="text-slate-500">
                Organizing Team and Technical Advisory Committee of <span className="text-primary font-semibold tracking-tight">AI-CQCOM 2026</span>
              </p>
            </motion.div>
          </div>
        </section>

        <CommitteeSection title="Chief Patrons" members={chiefPatrons} icon={<Crown className="w-4 h-4" />} />
        <CommitteeSection title="Co-Patrons" members={coPatrons} icon={<Star className="w-4 h-4" />} bg="bg-slate-50" />
        <CommitteeSection title="General Chairs" members={generalChairs} icon={<Award className="w-4 h-4" />} showContact />
        <CommitteeSection title="Convener" members={convener} icon={<UserCheck className="w-4 h-4" />} showContact bg="bg-slate-50" />
        <CommitteeSection title="Co-Convener" members={coConvener} icon={<UserCheck className="w-4 h-4" />} showContact />
        <CommitteeSection title="Steering Committee" members={steeringCommittee} icon={<Shield className="w-4 h-4" />} bg="bg-slate-50" />
        <CommitteeSection title="Organizing Committee" members={organizingCommittee} icon={<Briefcase className="w-4 h-4" />} />

        {/* Technical Committee Section */}
        <CommitteeSection
          title="International Technical Advisory Committee"
          members={internationalTAC}
          icon={<Globe className="w-4 h-4" />}
          description="Global experts providing technical guidance."
          showContact
          bg="bg-slate-50"
        />

        <CommitteeSection
          title="National Technical Advisory Committee"
          members={nationalTAC}
          icon={<GraduationCap className="w-4 h-4" />}
          description="Leading academicians from across India."
          showContact
        />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
