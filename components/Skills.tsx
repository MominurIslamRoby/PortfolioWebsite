
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Brain, Cloud, Database } from 'lucide-react';

interface SkillItem {
  name: string;
  level: number;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  color: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming",
      icon: <Code className="text-blue-500" />,
      color: "blue",
      skills: [
        { name: "Java (Swing)", level: 90, description: "Robust desktop framework for professional cross-platform GUI development." },
        { name: "C# (.NET)", level: 85, description: "Enterprise-level framework for building scalable desktop and backend systems." },
        { name: "C++", level: 80, description: "High-performance systems programming with focus on advanced algorithms." },
        { name: "Python", level: 85, description: "Versatile language for AI, data analysis, and backend automation." },
        { name: "JavaScript", level: 75, description: "Core language for dynamic web interactivity and modern client-side logic." }
      ]
    },
    {
      title: "Frontend",
      icon: <Layout className="text-cyan-500" />,
      color: "cyan",
      skills: [
        { name: "React.js", level: 95, description: "Component-based library for building complex, high-performance web applications." },
        { name: "Tailwind CSS", level: 95, description: "Utility-first framework for rapid, responsive, and consistent UI design." },
        { name: "Vite / Modern Tooling", level: 90, description: "Next-gen frontend tooling for highly optimized build processes." },
        { name: "Framer Motion", level: 80, description: "Advanced motion library for creating production-ready fluid animations." }
      ]
    },
    {
      title: "Data & AI",
      icon: <Brain className="text-purple-500" />,
      color: "purple",
      skills: [
        { name: "Machine Learning", level: 75, description: "Implementing predictive models using supervised and unsupervised learning." },
        { name: "Pandas & Matplotlib", level: 80, description: "Data manipulation and professional visualization for analytical insights." },
        { name: "Generative AI", level: 70, description: "Utilizing LLMs and prompt engineering for intelligent content creation." },
        { name: "Computer Vision", level: 65, description: "Processing and analyzing visual data using fundamental image recognition." }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="text-blue-400" />,
      color: "blue",
      skills: [
        { name: "AWS AI/ML Services", level: 70, description: "Leveraging cloud-native AI tools for scalable and intelligent applications." },
        { name: "Git / GitHub", level: 90, description: "Collaborative version control and source code management best practices." },
        { name: "Networking (Cisco)", level: 75, description: "Understanding core protocols and infrastructure security fundamentals." },
        { name: "IT Hardware/Software", level: 85, description: "Comprehensive system troubleshooting and enterprise lifecycle management." }
      ]
    },
    {
      title: "Competitive Programming",
      icon: <Database className="text-green-500" />,
      color: "green",
      skills: [
        { name: "Data Structures", level: 90, description: "Mastery of organization methods for efficient data access and storage." },
        { name: "Algorithms", level: 85, description: "Optimized logic for solving complex mathematical and computational tasks." },
        { name: "Problem Solving", level: 95, description: "Systematic approach to decomposing and solving intricate logical challenges." }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="scroll-mt-32 pb-20">
      <div className="text-center mb-16">
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          className="text-blue-500 font-mono text-sm tracking-widest uppercase"
        >
          Expertise Grid
        </motion.span>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="text-4xl font-bold mt-2"
        >
          Technical Proficiency
        </motion.h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          A visual representation of my core engineering skills, measured by project experience and academic rigor.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            className="glass p-8 rounded-3xl group relative overflow-hidden flex flex-col h-full border border-white/5 hover:border-blue-500/20 transition-all shadow-xl"
          >
            {/* Background Glow */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${category.color}-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500 border border-white/5">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
            </div>

            <div className="space-y-8 flex-grow">
              {category.skills.map((skill, sIdx) => (
                <div key={skill.name} className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-100 font-bold text-sm">{skill.name}</span>
                      <span className="text-blue-500 font-mono text-xs">{skill.level}%</span>
                    </div>
                    <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-2 italic">
                      {skill.description}
                    </p>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "circOut" }}
                      className={`h-full bg-gradient-to-r from-blue-600 to-${category.color}-400 rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
