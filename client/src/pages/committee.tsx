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
  { name: "Dr. K. Satyanarayana", designation: "President", affiliation: "KL University" },
  { name: "Dr. G. Pardha Saradhi", designation: "Vice-Chancellor", affiliation: "KL University" },
];

const coPatrons = [
  { name: "Dr. L. S. S. Reddy", designation: "Pro Vice-Chancellor", affiliation: "KL University" },
  { name: "Dr. G. R. C. Reddy", designation: "Registrar", affiliation: "KL University" },
];

const generalChairs = [
  { name: "Dr. V. Krishna", designation: "Professor", affiliation: "Department of CSE, KL University", email: "krishna@kluniversity.in" },
  { name: "Dr. A. Rama Mohan Reddy", designation: "Professor & Dean", affiliation: "School of Computer Science, KL University", email: "ramamohan@kluniversity.in" },
];

const convener = [
  { name: "Dr. P. Suresh", designation: "Associate Professor", affiliation: "Department of CSE, KL University", email: "suresh@kluniversity.in", phone: "+91 98765 43210" },
];

const coConvener = [
  { name: "Dr. K. Divya", designation: "Assistant Professor", affiliation: "Department of CSE, KL University", email: "divya@kluniversity.in" },
];

const steeringCommittee = [
  { name: "Dr. R. C. Tripathi", designation: "Professor", affiliation: "IIT Kanpur" },
  { name: "Dr. S. K. Pal",      designation: "Professor", affiliation: "IISc Bangalore" },
  { name: "Dr. P. K. Bhatia",   designation: "Professor", affiliation: "NSIT Delhi" },
  { name: "Dr. M. N. Rao",      designation: "Professor", affiliation: "JNTU Hyderabad" },
];

const organizingCommittee = [
  { name: "Dr. K. V. S. N. R. Raju", designation: "Associate Professor", affiliation: "KL University" },
  { name: "Dr. T. Ramesh",           designation: "Associate Professor", affiliation: "KL University" },
  { name: "Dr. S. Lakshmi",          designation: "Assistant Professor", affiliation: "KL University" },
  { name: "Dr. M. Srinivas",         designation: "Assistant Professor", affiliation: "KL University" },
  { name: "Dr. P. Anusha",           designation: "Assistant Professor", affiliation: "KL University" },
  { name: "Dr. K. Chandrasekhar",    designation: "Assistant Professor", affiliation: "KL University" },
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

// ── Helper to generate initials avatar ────────────────────────────────────
function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
}

// ── Card ──────────────────────────────────────────────────────────────────
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-slate-200 rounded-xl p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col h-full"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-3 text-center sm:text-left">
        {/* Avatar — initials-based since no photos available */}
        <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 border-2 border-primary/20 flex items-center justify-center">
          <span className="text-primary font-bold text-lg">{getInitials(member.name)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-slate-900 text-base leading-tight">{member.name}</h4>
          <p className="text-primary font-medium text-sm mt-0.5">{member.designation}</p>
          <p className="text-slate-500 text-sm mt-0.5 leading-snug">{member.affiliation}</p>
        </div>
      </div>

      {showContact && (member.email || member.phone) && (
        <div className="space-y-1.5 text-sm mt-auto pt-3 border-t border-slate-100">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center sm:justify-start gap-2 text-slate-500 hover:text-primary transition-colors break-all sm:break-normal"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span className="text-xs">{member.email}</span>
            </a>
          )}
          {member.phone && (
            <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-500">
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="text-xs">{member.phone}</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

// ── Section wrapper ────────────────────────────────────────────────────────
interface CommitteeSectionProps {
  title: string;
  members: Member[];
  icon: React.ReactNode;
  showContact?: boolean;
  description?: string;
  bg?: string;
}

function CommitteeSection({ title, members, icon, showContact = false, description, bg = "bg-white" }: CommitteeSectionProps) {
  const cols =
    members.length === 1 ? "grid-cols-1 max-w-sm mx-auto"
    : members.length === 2 ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
    : members.length <= 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={`py-16 ${bg}`}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              {icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">{title}</h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-4 rounded-full" />
          {description && (
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">{description}</p>
          )}
        </motion.div>

        <div className={`grid gap-5 ${cols}`}>
          {members.map((member, idx) => (
            <CommitteeMemberCard key={idx} member={member} showContact={showContact} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function CommitteePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden" style={starryBackground}>
          <div className={cn("absolute inset-0", starryOverlay)} />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-[30%] -right-[30%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-3xl" />
          </div>

          <div className="container relative z-10 px-4 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/30 border border-primary/50 mb-6">
                <Users className="w-4 h-4" />
                <span className="text-xs font-medium tracking-wide uppercase">Leadership Team</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                  Committee Members
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Meet the distinguished leaders and experts organizing AICDF 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Committees */}
        <CommitteeSection title="Chief Patrons"  members={chiefPatrons}         icon={<Crown className="w-5 h-5" />}       description="The visionary leaders guiding the conference" />
        <CommitteeSection title="Co-Patrons"     members={coPatrons}            icon={<Star className="w-5 h-5" />}        description="Supporting the conference mission with their leadership" bg="bg-slate-50" />
        <CommitteeSection title="General Chairs" members={generalChairs}        icon={<Award className="w-5 h-5" />}       description="Leading the conference organization and academic oversight" showContact />
        <CommitteeSection title="Convener"       members={convener}             icon={<UserCheck className="w-5 h-5" />}   description="Coordinating all conference activities and operations" showContact bg="bg-slate-50" />
        <CommitteeSection title="Co-Convener"    members={coConvener}           icon={<UserCheck className="w-5 h-5" />}   description="Assisting in conference coordination and management" showContact />
        <CommitteeSection title="Steering Committee" members={steeringCommittee} icon={<Shield className="w-5 h-5" />}    description="Providing strategic direction and academic guidance" bg="bg-slate-50" />
        <CommitteeSection title="Organizing Committee" members={organizingCommittee} icon={<Briefcase className="w-5 h-5" />} description="Dedicated team working behind the scenes" />

        {/* International TAC */}
        <CommitteeSection
          title="International Technical Advisory Committee"
          members={internationalTAC}
          icon={<Globe className="w-5 h-5" />}
          description="Global experts providing technical guidance and ensuring international standards"
          showContact
          bg="bg-slate-50"
        />

        {/* National TAC */}
        <CommitteeSection
          title="National Technical Advisory Committee"
          members={nationalTAC}
          icon={<GraduationCap className="w-5 h-5" />}
          description="Leading academicians from premier institutions across India"
          showContact
        />

        {/* CTA */}
        <section className="relative py-16 overflow-hidden" style={starryBackground}>
          <div className={cn("absolute inset-0", starryOverlay)} />
          <div className="relative z-10 container px-4 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch with the Committee</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                For any queries about AICDF 2026, please feel free to contact our committee members
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => { window.location.href = '/contact'; }}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Contact Committee
                </button>
                <button
                  onClick={() => { window.location.href = '/registration'; }}
                  className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10"
                >
                  Register for Conference
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
