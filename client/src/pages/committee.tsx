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

export default function CommitteePage() {
  // Committee data
  const chiefPatrons = [
    {
      name: "Dr. K. Satyanarayana",
      designation: "President",
      affiliation: "KL University",
      image: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
      name: "Dr. G. Pardha Saradhi",
      designation: "Vice-Chancellor",
      affiliation: "KL University", 
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    }
  ];

  const coPatrons = [
    {
      name: "Dr. L. S. S. Reddy",
      designation: "Pro Vice-Chancellor",
      affiliation: "KL University",
      image: "https://randomuser.me/api/portraits/men/58.jpg"
    },
    {
      name: "Dr. G. R. C. Reddy",
      designation: "Registrar",
      affiliation: "KL University",
      image: "https://randomuser.me/api/portraits/men/71.jpg"
    }
  ];

  const generalChairs = [
    {
      name: "Dr. V. Krishna",
      designation: "Professor",
      affiliation: "Department of CSE, KL University",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      email: "krishna@kluniversity.in"
    },
    {
      name: "Dr. A. Rama Mohan Reddy",
      designation: "Professor & Dean",
      affiliation: "School of Computer Science, KL University",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      email: "ramamohan@kluniversity.in"
    }
  ];

  const convener = [
    {
      name: "Dr. P. Suresh",
      designation: "Associate Professor",
      affiliation: "Department of CSE, KL University",
      image: "https://randomuser.me/api/portraits/men/38.jpg",
      email: "suresh@kluniversity.in",
      phone: "+91 98765 43210"
    }
  ];

  const coConvener = [
    {
      name: "Dr. K. Divya",
      designation: "Assistant Professor",
      affiliation: "Department of CSE, KL University",
      image: "https://randomuser.me/api/portraits/women/35.jpg",
      email: "divya@kluniversity.in"
    }
  ];

  const steeringCommittee = [
    {
      name: "Dr. R. C. Tripathi",
      designation: "Professor",
      affiliation: "IIT Kanpur",
      image: "https://randomuser.me/api/portraits/men/68.jpg"
    },
    {
      name: "Dr. S. K. Pal",
      designation: "Professor",
      affiliation: "IISc Bangalore",
      image: "https://randomuser.me/api/portraits/men/72.jpg"
    },
    {
      name: "Dr. P. K. Bhatia",
      designation: "Professor",
      affiliation: "NSIT Delhi",
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      name: "Dr. M. N. Rao",
      designation: "Professor",
      affiliation: "JNTU Hyderabad",
      image: "https://randomuser.me/api/portraits/men/48.jpg"
    }
  ];

  const organizingCommittee = [
    {
      name: "Dr. K. V. S. N. R. Raju",
      designation: "Associate Professor",
      affiliation: "KL University",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
      name: "Dr. T. Ramesh",
      designation: "Associate Professor",
      affiliation: "KL University",
      image: "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
      name: "Dr. S. Lakshmi",
      designation: "Assistant Professor",
      affiliation: "KL University",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      name: "Dr. M. Srinivas",
      designation: "Assistant Professor",
      affiliation: "KL University",
      image: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
      name: "Dr. P. Anusha",
      designation: "Assistant Professor",
      affiliation: "KL University",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Dr. K. Chandrasekhar",
      designation: "Assistant Professor",
      affiliation: "KL University",
      image: "https://randomuser.me/api/portraits/men/40.jpg"
    }
  ];

  const internationalTechnicalAdvisoryCommittee = [
    {
      name: "Dr. J. Smith",
      designation: "Professor",
      affiliation: "Stanford University, USA",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Dr. M. Johnson",
      designation: "Professor",
      affiliation: "MIT, USA",
      image: "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
      name: "Dr. A. Kumar",
      designation: "Professor",
      affiliation: "University of Cambridge, UK",
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      name: "Dr. L. Wang",
      designation: "Professor",
      affiliation: "National University of Singapore",
      image: "https://randomuser.me/api/portraits/women/38.jpg"
    },
    {
      name: "Dr. H. Tanaka",
      designation: "Professor",
      affiliation: "University of Tokyo, Japan",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Dr. S. Mueller",
      designation: "Professor",
      affiliation: "Technical University of Munich, Germany",
      image: "https://randomuser.me/api/portraits/men/56.jpg"
    }
  ];

  const nationalTechnicalAdvisoryCommittee = [
    {
      name: "Dr. R. Sharma",
      designation: "Professor",
      affiliation: "IIT Bombay",
      image: "https://randomuser.me/api/portraits/men/63.jpg"
    },
    {
      name: "Dr. S. Gupta",
      designation: "Professor",
      affiliation: "IIT Delhi",
      image: "https://randomuser.me/api/portraits/men/49.jpg"
    },
    {
      name: "Dr. P. Reddy",
      designation: "Professor",
      affiliation: "IIT Madras",
      image: "https://randomuser.me/api/portraits/men/53.jpg"
    },
    {
      name: "Dr. A. Patel",
      designation: "Professor",
      affiliation: "IIT Kharagpur",
      image: "https://randomuser.me/api/portraits/women/41.jpg"
    },
    {
      name: "Dr. K. Singh",
      designation: "Professor",
      affiliation: "NIT Warangal",
      image: "https://randomuser.me/api/portraits/men/47.jpg"
    },
    {
      name: "Dr. M. Nair",
      designation: "Professor",
      affiliation: "NIT Trichy",
      image: "https://randomuser.me/api/portraits/women/36.jpg"
    },
    {
      name: "Dr. V. Kumar",
      designation: "Professor",
      affiliation: "IIIT Hyderabad",
      image: "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
      name: "Dr. T. Rao",
      designation: "Professor",
      affiliation: "University of Hyderabad",
      image: "https://randomuser.me/api/portraits/men/59.jpg"
    }
  ];

  const CommitteeMemberCard = ({ member, showContact = false }: { member: any; showContact?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col h-full"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 text-center sm:text-left">
        <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-primary/20">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-slate-900 text-lg">{member.name}</h4>
          <p className="text-primary font-medium text-sm">{member.designation}</p>
          <p className="text-slate-600 text-sm">{member.affiliation}</p>
        </div>
      </div>
      {showContact && (
        <div className="space-y-2 text-sm mt-auto pt-4 border-t border-slate-100">
          {member.email && (
            <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-600 break-all sm:break-normal">
              <Mail className="w-4 h-4 shrink-0" />
              <span>{member.email}</span>
            </div>
          )}
          {member.phone && (
            <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-600">
              <Phone className="w-4 h-4 shrink-0" />
              <span>{member.phone}</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );

  const CommitteeSection = ({ 
    title, 
    members, 
    icon, 
    showContact = false,
    description 
  }: { 
    title: string; 
    members: any[]; 
    icon: React.ReactNode;
    showContact?: boolean;
    description?: string;
  }) => (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              {icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              {title}
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6 rounded-full"></div>
          {description && (
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, idx) => (
            <CommitteeMemberCard 
              key={idx} 
              member={member} 
              showContact={showContact}
            />
          ))}
        </div>
      </div>
    </section>
  );

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

        {/* Chief Patrons */}
        <CommitteeSection 
          title="Chief Patrons"
          members={chiefPatrons}
          icon={<Crown className="w-6 h-6" />}
          description="The visionary leaders guiding the conference with their expertise and experience"
        />

        {/* Co-Patrons */}
        <CommitteeSection 
          title="Co-Patrons"
          members={coPatrons}
          icon={<Star className="w-6 h-6" />}
          description="Supporting the conference mission with their leadership and guidance"
        />

        {/* General Chairs */}
        <CommitteeSection 
          title="General Chairs"
          members={generalChairs}
          icon={<Award className="w-6 h-6" />}
          showContact={true}
          description="Leading the conference organization and academic oversight"
        />

        {/* Convener */}
        <CommitteeSection 
          title="Convener"
          members={convener}
          icon={<UserCheck className="w-6 h-6" />}
          showContact={true}
          description="Coordinating all conference activities and operations"
        />

        {/* Co-Convener */}
        <CommitteeSection 
          title="Co-Convener"
          members={coConvener}
          icon={<UserCheck className="w-6 h-6" />}
          showContact={true}
          description="Assisting in conference coordination and management"
        />

        {/* Steering Committee */}
        <CommitteeSection 
          title="Steering Committee"
          members={steeringCommittee}
          icon={<Shield className="w-6 h-6" />}
          description="Providing strategic direction and academic guidance for the conference"
        />

        {/* Organizing Committee */}
        <CommitteeSection 
          title="Organizing Committee"
          members={organizingCommittee}
          icon={<Briefcase className="w-6 h-6" />}
          description="Dedicated team working behind the scenes to make the conference successful"
        />

        {/* International Technical Advisory Committee */}
        <CommitteeSection 
          title="International Technical Advisory Committee"
          members={internationalTechnicalAdvisoryCommittee}
          icon={<Globe className="w-6 h-6" />}
          description="Global experts providing technical guidance and ensuring international standards"
        />

        {/* National Technical Advisory Committee */}
        <CommitteeSection 
          title="National Technical Advisory Committee"
          members={nationalTechnicalAdvisoryCommittee}
          icon={<GraduationCap className="w-6 h-6" />}
          description="Leading academicians from premier institutions across India"
        />

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
                  Get in Touch with the Committee
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  For any queries or information about AICDF 2026, please feel free to contact our committee members
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      window.location.href = '/#contact';
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Contact Committee
                  </button>
                  <button
                    onClick={() => {
                      window.location.href = '/registration';
                    }}
                    className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10"
                  >
                    Register for Conference
                  </button>
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
