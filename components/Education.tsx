
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educations = [
    {
      institution: "American International University-Bangladesh (AIUB)",
      degree: "BSc in Computer Science & Engineering",
      period: "Aug 2022 - Present",
      location: "Dhaka, Bangladesh",
      description: "Focus: software development, competitive programming, AI/ML.",
      icon: <GraduationCap size={20} className="text-blue-400" />
    },
    {
      institution: "Dhaka College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2020 - 2021",
      location: "Dhaka, Bangladesh",
      description: "Science stream with emphasis on mathematics and physics.",
      icon: <BookOpen size={20} className="text-purple-400" />
    },
    {
      institution: "Thakurgaon Govt. Boys' High School",
      degree: "Secondary School Certificate (SSC)",
      period: "2011 - 2019",
      location: "Dhaka, Bangladesh",
      description: "Strong fundamentals in mathematics and problem solving.",
      icon: <School size={20} className="text-cyan-400" />
    }
  ];

  return (
    <section id="education" className="scroll-mt-32">
      <div className="text-center mb-16">
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          className="text-blue-500 font-mono text-sm tracking-widest uppercase"
        >
          Milestones
        </motion.span>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="text-4xl font-bold mt-2"
        >
          Academic Qualifications
        </motion.h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {educations.map((edu, idx) => (
          <motion.div
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col p-8 glass rounded-3xl group border border-white/5 hover:border-blue-500/20 transition-all relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500 border border-white/5">
                {edu.icon}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded w-fit">
                  <Calendar size={10} /> {edu.period}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest">
                  <MapPin size={10} /> {edu.location}
                </div>
              </div>
            </div>

            <div className="flex-grow space-y-3">
              <h3 className="text-lg font-bold text-gray-100 leading-tight group-hover:text-blue-400 transition-colors">
                {edu.degree}
              </h3>
              <p className="text-sm font-medium text-gray-400">
                {edu.institution}
              </p>
              <div className="pt-4 mt-auto border-t border-white/5">
                <p className="text-sm text-gray-500 leading-relaxed italic">
                  {edu.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
