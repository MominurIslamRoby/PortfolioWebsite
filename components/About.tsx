
import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Code2, GraduationCap, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <GraduationCap className="text-blue-400" />, label: "Status", value: "Final Year CSE" },
    { icon: <Cpu className="text-purple-400" />, label: "Focus", value: "AI & ML" },
    { icon: <Code2 className="text-green-400" />, label: "Stack", value: "React / .NET" },
  ];

  return (
    <section id="about" className="scroll-mt-32">
      <div className="text-center mb-16">
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          className="text-blue-500 font-mono text-sm tracking-widest uppercase"
        >
          The Narrative
        </motion.span>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="text-4xl font-bold mt-2"
        >
          Professional Profile
        </motion.h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:opacity-100 opacity-40 transition-opacity"></div>
          <div className="relative glass p-10 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Target size={24} className="text-blue-500" />
              Mission Statement
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-8 italic border-l-4 border-blue-600 pl-6">
              "To bridge the gap between machine intelligence and human-centric software, engineering scalable systems that solve real-world problems with precision."
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              I am a results-oriented Computer Science and Engineering student at <strong>American International University–Bangladesh (AIUB)</strong>. My expertise spans the full software lifecycle, from architecting robust desktop applications in <strong>.NET</strong> to crafting high-performance user interfaces with <strong>React</strong>. 
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-2xl text-center flex flex-col items-center gap-2 border border-white/5 group-hover:border-blue-500/20 transition-all">
                  <div className="p-2 bg-gray-900 rounded-xl mb-1">{stat.icon}</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">{stat.label}</div>
                  <div className="text-xs font-bold text-white whitespace-nowrap">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-blue-400 flex items-center gap-2 mb-4">
              <Zap size={22} className="text-cyan-400" />
              Technical Philosophy
            </h3>
            <p className="text-gray-400 leading-relaxed">
              My approach to development is rooted in **Software Engineering rigor**. Whether it's optimizing search algorithms for competitive programming or deploying AI models on **AWS**, I prioritize clean code, performance, and accessibility. 
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Key Focus Areas:</h4>
            <div className="grid gap-3">
              {[
                { title: "AI in Education", desc: "Developing smart learning paths and personalized feedback systems." },
                { title: "Distributed Systems", desc: "Building scalable backend services using .NET and Cloud architectures." },
                { title: "Frontend Excellence", desc: "Focusing on micro-interactions and performance-first web apps." }
              ].map((item, idx) => (
                <div key={idx} className="glass p-4 rounded-xl border-l-2 border-blue-500/50 hover:border-blue-500 transition-all">
                  <div className="font-bold text-gray-200 text-sm">{item.title}</div>
                  <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            {["AI Researcher", "Systems Architect", "Lifelong Learner"].map((tag) => (
              <span key={tag} className="px-5 py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold border border-blue-500/20 tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
