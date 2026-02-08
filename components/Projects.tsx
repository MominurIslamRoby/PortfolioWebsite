
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Calculator, Plane, GraduationCap, Globe, Database, Gamepad2, Info, Youtube, PlayCircle, ArrowRight } from 'lucide-react';

export const projectsData = [
  {
    slug: "inventory-management-system",
    title: "StoreMate: Smart Shop Management System",
    subtitle: "Intelligent Shop Management & Inventory Solution",
    description: "A professional C# desktop application for smart inventory management. Built for modern stores with real-time tracking, SQL integration, and automated reporting.",
    image: "https://lh3.googleusercontent.com/d/1K9hq3LoXD_Mj2Jwa6qhn7kt8jb6qrb6Q",
    tags: ["C#", ".NET", "SQL Server", "Desktop App"],
    demoLink: "https://youtu.be/2CtclPaCkEo?si=1fMBKCkwIjIwWijN",
    githubLink: "https://github.com/MominurIslamRoby",
    icon: <Database size={20} className="text-green-400" />,
    highlight: true,
    isVideo: true
  },
  {
    slug: "study-buddy-ai",
    title: "Study Buddy AI: Your Study Assistant",
    subtitle: "AI-Powered Academic Assistant",
    description: "Transform your lecture notes into summaries, flashcards, and quizzes. Featuring Smart Summaries, Quiz Generator, and 'Ask AI' for instant explanations of complex topics.",
    image: "https://lh3.googleusercontent.com/d/1O0kXbCWrjbGHAf--0cLSMfY3LdAt6JxV",
    tags: ["Python", "AWS AI", "Gemini API", "React"],
    demoLink: "https://study-genius-web.lovable.app",
    githubLink: "https://github.com/MominurIslamRoby/study-buddy-ai",
    icon: <GraduationCap size={20} className="text-purple-400" />
  },
  {
    slug: "scientific-calculator",
    title: "Scientific Calculator",
    subtitle: "Precision Mathematics & Responsive Tool",
    description: "Fully functional scientific calculator with responsive design and keyboard support. Built with precise mathematical logic.",
    image: "https://lh3.googleusercontent.com/d/1fmQMptMGY7ktVaLlOs3Prny2l0ILFWux",
    tags: ["React", "Vite", "Tailwind", "GitHub Pages"],
    demoLink: "https://mominurislamroby.github.io/scientific-calculator/",
    githubLink: "https://github.com/MominurIslamRoby/scientific-calculator",
    icon: <Calculator size={20} className="text-blue-400" />
  },
  {
    slug: "modern-web-portfolio",
    title: "Modern Web Portfolio",
    subtitle: "Interactive 3D Engineering Showcase",
    description: "Interactive 3D portfolio with smooth animations and responsive UI. Showcasing modern frontend techniques.",
    image: "https://lh3.googleusercontent.com/d/1JjQcDrgMIbdMKGsyncnz4lE6vGsqLHuV",
    tags: ["React", "Vite", "Tailwind", "Three.js"],
    demoLink: "https://mominurislamroby.github.io/roby-portfolio/",
    githubLink: "https://github.com/MominurIslamRoby/roby-portfolio",
    icon: <Globe size={20} className="text-pink-400" />
  },
  {
    slug: "endless-escape",
    title: "Endless Escape",
    subtitle: "High-Performance Procedural Browser Game",
    description: "A fast-paced browser game featuring smooth motion controls and procedural obstacle generation. Focus on micro-interactions.",
    image: "https://lh3.googleusercontent.com/d/1_-dG5O828k9c3orZiwp5JnUp9Z4BBani",
    tags: ["React", "Framer Motion", "Game Design"],
    demoLink: "https://endless-escape.vercel.app",
    githubLink: "https://github.com/MominurIslamRoby/endless-escape",
    icon: <Gamepad2 size={20} className="text-orange-400" />
  },
  {
    slug: "infoverse",
    title: "Infoverse",
    subtitle: "Multi-modal AI Knowledge Synthesis",
    description: "AI-driven content exploration tool utilizing the Gemini API for deep information synthesis and multi-modal interactions.",
    image: "https://lh3.googleusercontent.com/d/1Y7Y-gI5GfB-h1TniEQ24PsJIoAJcQ4hr",
    tags: ["AI Studio", "Gemini API", "Node.js"],
    demoLink: "https://ai.studio/apps/drive/1sgLbqYyz9AeCsjOtse3To73OBedFq8f4",
    githubLink: "https://ai.studio/apps/drive/1sgLbqYyz9AeCsjOtse3To73OBedFq8f4",
    icon: <Info size={20} className="text-cyan-400" />
  }
];

const Projects: React.FC = () => {
  const featuredProject = projectsData.find(p => p.highlight);
  const otherProjects = projectsData.filter(p => !p.highlight);

  return (
    <section id="projects" className="scroll-mt-32 pb-20">
      <div className="text-center mb-16">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mt-2 font-display tracking-tight"
        >
          Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          A selection of recent projects showcasing my software engineering and AI/ML expertise.
        </p>
      </div>

      {/* Featured Project Row */}
      {featuredProject && (
        <div className="mb-12">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ y: -8, scale: 1.015 }}
            viewport={{ once: true }}
            className="glass rounded-[2.5rem] overflow-hidden group border border-white/5 hover:border-blue-500/40 transition-all duration-500 flex flex-col lg:flex-row h-full shadow-2xl bg-gray-900/40 min-h-[400px] hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)]"
          >
            {/* Project Visual */}
            <div className="relative lg:w-3/5 h-[300px] lg:h-auto overflow-hidden m-4 rounded-[2rem] bg-black">
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800";
                }}
              />
              
              {featuredProject.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                  <PlayCircle size={80} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </div>
              )}
              
              <div className="absolute top-6 right-6 bg-gray-950/80 p-3.5 rounded-2xl backdrop-blur-md border border-white/10 z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                {featuredProject.icon}
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-500/20 group-hover:border-blue-400/40 transition-colors">
                  Featured Case Study
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-black group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {featuredProject.title}
                </h3>
                <p className="text-blue-400/80 text-sm font-bold mt-1 tracking-wide uppercase font-mono">
                  {featuredProject.subtitle}
                </p>
              </div>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">
                {featuredProject.description}
              </p>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <a 
                  href={featuredProject.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-sm font-bold shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                >
                  {featuredProject.isVideo ? <Youtube size={18} /> : <ExternalLink size={16} />}
                  {featuredProject.isVideo ? 'Watch Project' : 'Live Demo'}
                </a>
                <a 
                  href={featuredProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-sm font-bold border border-white/10 transition-all active:scale-95"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
              
              <Link 
                to={`/projects/${featuredProject.slug}`}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm transition-all group/link"
              >
                Deep Dive into Details <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-300" />
              </Link>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10">
                {featuredProject.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-[10px] font-bold tracking-tight px-3 py-1 bg-white/5 text-gray-500 rounded-full border border-white/5 group-hover:border-blue-500/20 group-hover:text-blue-400 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Other Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ y: -10, scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4, ease: "easeOut" }}
            className="glass rounded-[2rem] overflow-hidden group border border-white/5 hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full shadow-2xl bg-gray-900/40 hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.15)]"
          >
            {/* Project Visual */}
            <div className="relative h-48 overflow-hidden m-4 rounded-[1.5rem] bg-black">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800";
                }}
              />
              
              {!project.isVideo && (
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              )}
              
              <div className="absolute top-4 right-4 bg-gray-950/80 p-2.5 rounded-xl backdrop-blur-md border border-white/10 z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                {project.icon}
              </div>
            </div>
            
            {/* Content */}
            <div className="px-8 pb-8 pt-2 flex flex-col flex-grow">
              <div className="mb-3">
                <h3 className="font-bold group-hover:text-blue-400 transition-colors duration-300 leading-tight text-xl">
                  {project.title}
                </h3>
                <p className="text-blue-400/80 text-[10px] font-bold mt-0.5 tracking-wider uppercase font-mono">
                  {project.subtitle}
                </p>
              </div>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed font-medium">
                {project.description}
              </p>
              
              {/* Actions */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white rounded-xl text-xs font-bold border border-blue-500/20 transition-all duration-300"
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-bold border border-white/10 transition-all duration-300"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
                
                <Link 
                  to={`/projects/${project.slug}`}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-blue-500/10 text-gray-400 hover:text-blue-400 rounded-xl text-xs font-bold border border-white/10 transition-all group/btn duration-300"
                >
                  View Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map(tag => (
                  <span 
                    key={tag} 
                    className="text-[10px] font-bold tracking-tight px-2.5 py-1 bg-white/5 text-gray-500 rounded-full border border-white/5 group-hover:border-blue-500/20 group-hover:text-blue-400 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/MominurIslamRoby"
          target="_blank"
          className="inline-flex items-center gap-2 px-12 py-4 bg-gray-900 text-white rounded-2xl font-bold border border-white/5 hover:border-blue-500/30 transition-all shadow-2xl"
        >
          <Github size={20} className="text-blue-500" /> Explore All Repositories
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;
