
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Camera, Users, Settings, Layout } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "CodeAlpha",
      role: "Frontend Development Intern",
      period: "Feb 2026 - Mar 2026",
      location: "Remote",
      icon: <Layout className="text-cyan-400" />,
      details: [
        "Selected for a Frontend Development Internship at CodeAlpha",
        "Focused on building responsive and user-friendly web interfaces",
        "Hands-on learning with real-world frontend development tasks",
        "Strengthening core frontend skills and practical implementation"
      ]
    },
    {
      company: "Codveda Technologies",
      role: ".NET Development Intern",
      period: "Jan 2026 - Present",
      location: "Remote",
      icon: <Settings className="text-blue-500" />,
      details: [
        "Working with C# and .NET Framework",
        "Developing desktop-based applications",
        "Implementing database operations using SQL Server",
        "Strengthening problem-solving and software development skills"
      ]
    },
    {
      company: "Ataur Battery House & Auto Parts Centre",
      role: "Managing Director",
      period: "Feb 2019 - Present",
      location: "Thakurgaon, Bangladesh",
      icon: <Briefcase className="text-purple-500" />,
      details: [
        "7+ years of experience in managing and growing business",
        "Expanding services and ensuring customer excellence",
        "Maintaining reliability and long-standing customer trust",
        "Overseeing technical and operational aspects of a legacy business"
      ]
    },
    {
      company: "Photography",
      role: "Professional Photographer",
      period: "April 2017 - Present",
      location: "Dhaka, Bangladesh",
      icon: <Camera className="text-cyan-500" />,
      details: [
        "Specialized in high-end corporate headshots and event coverage",
        "Combining technical proficiency with creative direction",
        "Project management from concept to final delivery"
      ]
    },
    {
      company: "AIUB Clubs",
      role: "Event Manager (Photography/Computer/Social Welfare)",
      period: "2022 - 2024",
      location: "Dhaka, Bangladesh",
      icon: <Users className="text-green-500" />,
      details: [
        "AIUB Photography Club: Organized photography-related events",
        "AIUB Computer Club: Facilitated workshops and seminars",
        "AIUB Social Welfare Club: Involved in community service initiatives"
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-32">
      <div className="text-center mb-16">
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          className="text-blue-500 font-mono text-sm tracking-widest uppercase"
        >
          History
        </motion.span>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="text-4xl font-bold mt-2"
        >
          Professional Journey
        </motion.h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-transparent md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-950 md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>

              <div className="w-full md:w-1/2 pl-8 md:pl-0">
                <div className="glass p-6 rounded-2xl hover:border-blue-500/40 transition-all group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/5 rounded-lg">{exp.icon}</div>
                    <span className="text-sm font-mono text-blue-400">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <div className="text-gray-300 font-medium mb-4">{exp.company}</div>
                  <ul className="space-y-2">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-gray-400 text-sm flex gap-2">
                        <span className="text-blue-500">•</span> {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/5 text-xs text-gray-500 italic">
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Spacing for layout */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
