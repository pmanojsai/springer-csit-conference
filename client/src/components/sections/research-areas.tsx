import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { starryBackground, starryOverlay } from "@/styles/theme";

export function ResearchAreas() {
  const researchAreas = [
    {
      title: "Artificial Intelligence and Machine Learning",
      description: "Deep Learning, Edge AI, Explainable AI, and AI-driven systems for real-world applications.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      gradient: "from-purple-600/20 to-purple-800/40"
    },
    {
      title: "Network Security & Cryptography",
      description: "Quantum cryptography, Blockchain security, Privacy-preserving protocols, and secure multi-party computation.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
      gradient: "from-red-600/20 to-red-800/40"
    },
    {
      title: "Digital Forensics & Incident Response",
      description: "Cybercrime investigation, Malware analysis, Network forensics, and incident response methodologies.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
      gradient: "from-orange-600/20 to-orange-800/40"
    },
    {
      title: "Big Data Analytics & Privacy",
      description: "Data mining, Privacy preservation, Statistical analysis, and large-scale data processing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      gradient: "from-blue-600/20 to-blue-800/40"
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized applications, Smart contracts, Cryptocurrency systems, and Web3 infrastructure.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
      gradient: "from-emerald-600/20 to-emerald-800/40"
    },
    {
      title: "Quantum Computing",
      description: "Quantum algorithms, Quantum cryptography, Quantum machine learning, and Quantum hardware systems.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
      gradient: "from-indigo-600/20 to-indigo-800/40"
    }
  ];

  return (
    <section id="research-areas" className="relative overflow-hidden py-24" style={starryBackground}>
      <div className={cn("absolute inset-0", starryOverlay)}></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[30%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="container px-4 mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4">
              Research Domains
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Key <span className="text-primary">Research Areas</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore cutting-edge research domains that are shaping the future of technology and innovation
            </p>
          </div>

          {/* Research Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {researchAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300"
              >
                {/* Large Image Container */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient}`}></div>
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Title Overlay on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                  </div>
                </div>
                
                {/* Description */}
                <div className="bg-slate-900/90 backdrop-blur-sm p-6">
                  <p className="text-gray-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-500/10 backdrop-blur-sm rounded-full border border-white/5">
              <span className="text-sm font-medium text-gray-300">
                Submit your research in any of these areas
              </span>
            </div>
            <p className="mt-6 text-gray-400">
              Interested in contributing?{' '}
              <a href="#registration" className="text-primary hover:underline">Register to present</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
