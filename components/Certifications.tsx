
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Calendar, Bookmark, Trophy, Database, Brain, Globe, TrendingUp, Camera, Cpu } from 'lucide-react';

const Certifications: React.FC = () => {
  const certs = [
    { 
      name: "CS205: Building with Artificial Intelligence", 
      issuer: "Saylor Academy", 
      type: "AI Core",
      date: "Feb 2026",
      id: "2297706276MR",
      icon: <Brain className="text-blue-500" size={24} />
    },
    { 
      name: "CS250: Python for Data Science", 
      issuer: "Saylor Academy", 
      type: "Data Science",
      date: "Feb 2026",
      id: "4555286344MR",
      icon: <Database className="text-cyan-500" size={24} />
    },
    { 
      name: "CS207: Fundamentals of Machine Learning", 
      issuer: "Saylor Academy", 
      type: "Machine Learning",
      date: "Feb 2026",
      id: "1718436981MR",
      icon: <ShieldCheck className="text-purple-500" size={24} />
    },
    { 
      name: "Amazon Braket – Getting Started", 
      issuer: "Amazon Web Services (AWS)", 
      type: "Quantum Computing",
      date: "Nov 2025",
      id: "AWS-QM-25",
      icon: <Award className="text-blue-400" size={24} />
    },
    { 
      name: "Exploring AI Use Cases & Applications", 
      issuer: "Amazon Web Services (AWS)", 
      type: "AI Business",
      date: "Aug 2025",
      id: "AWS-AI-25",
      icon: <Cpu className="text-indigo-400" size={24} />
    },
    { 
      name: "Fundamentals of ML and AI", 
      issuer: "Amazon Web Services (AWS)", 
      type: "Cloud AI",
      date: "Aug 2025",
      id: "AWS-ML-25",
      icon: <Award className="text-blue-600" size={24} />
    },
    { 
      name: "CCAI Architecture", 
      issuer: "Google", 
      type: "Cloud Architecture",
      date: "Jul 2024",
      id: "9683922",
      icon: <Award className="text-yellow-500" size={24} />
    },
    { 
      name: "Introduction to Generative AI", 
      issuer: "Google", 
      type: "GenAI",
      date: "Jul 2024",
      id: "9683470",
      icon: <Award className="text-orange-500" size={24} />
    },
    { 
      name: "Using AI in Academics", 
      issuer: "Lions Clubs International", 
      type: "AI Education",
      date: "Feb 2026",
      id: "Workshop",
      icon: <Bookmark className="text-green-500" size={24} />
    },
    { 
      name: "AI for Networking", 
      issuer: "Indian Cyber Security Solutions", 
      type: "Cyber Security",
      date: "Aug 2023",
      id: "WKS-AIN-23",
      icon: <Globe className="text-cyan-400" size={24} />
    },
    { 
      name: "Fundamentals of Digital Marketing", 
      issuer: "Google Digital Garage", 
      type: "Marketing",
      date: "Mar 2023",
      id: "G-DIGI-23",
      icon: <TrendingUp className="text-pink-500" size={24} />
    },
    { 
      name: "IT Essentials", 
      issuer: "Cisco", 
      type: "Infrastructure",
      date: "Jan 2023",
      id: "CISCO-ITE-23",
      icon: <ShieldCheck className="text-blue-500" size={24} />
    },
    { 
      name: "AIUB Indoor Games 2022 (Handball)", 
      issuer: "AIUB Achievement", 
      type: "Sports",
      date: "Dec 2022",
      id: "1st Runner-Up",
      icon: <Trophy className="text-yellow-600" size={24} />
    },
    { 
      name: "LinkedIn Profile Optimization", 
      issuer: "AIUB English Club", 
      type: "Professional Dev",
      date: "2024",
      id: "Workshop",
      icon: <Award className="text-blue-400" size={24} />
    },
    { 
      name: "Digital Photography", 
      issuer: "Corporate Finance Institute®", 
      type: "Visual Arts",
      date: "Professional",
      id: "CFI-Photo",
      icon: <Camera className="text-gray-400" size={24} />
    }
  ];

  return (
    <section id="certifications" className="scroll-mt-32">
      <div className="text-center mb-16">
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          className="text-blue-500 font-mono text-sm tracking-widest uppercase"
        >
          Credentials & Badges
        </motion.span>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="text-4xl font-bold mt-2"
        >
          Licenses & Certifications
        </motion.h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Validated expertise through industry-standard certifications and specialized milestones in AI, Data Science, and Software Engineering.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ y: -5 }}
            transition={{ delay: idx * 0.05 }}
            className="glass p-6 rounded-2xl flex flex-col border border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-blue-500/10 transition-colors"></div>
            
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-500">
                {cert.icon}
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                <Calendar size={10} /> {cert.date}
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="font-bold text-gray-100 text-lg mb-1 leading-tight group-hover:text-blue-400 transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm text-blue-500/80 font-medium mb-3">{cert.issuer}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 py-0.5 bg-white/5 inline-block rounded border border-white/5">
                  ID: {cert.id}
                </span>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest px-2 py-0.5 bg-blue-500/10 inline-block rounded border border-blue-500/10">
                  {cert.type}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] text-gray-500 italic">Verify Credential</span>
              <ExternalLink size={14} className="text-blue-500 cursor-pointer hover:text-blue-400" />
            </div>
          </motion.div>
        ))}
        
        {/* Placeholder for future certs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="p-6 rounded-2xl border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-blue-500/20 transition-all"
        >
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-blue-500/10 transition-colors">
            <Bookmark className="text-gray-600 group-hover:text-blue-500" size={20} />
          </div>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Ongoing Learning...</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
