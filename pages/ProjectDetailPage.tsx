
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Cpu, Globe, Code2, Rocket, Share2, Youtube, ArrowRight } from 'lucide-react';
import { projectsData } from '../components/Projects.tsx';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-blue-500 hover:underline">Back to Projects</Link>
      </div>
    );
  }

  // Enhanced project details
  const detailedInfo: Record<string, { problem: string, solution: string, features: string[], techDeepDive: string }> = {
    "inventory-management-system": {
      problem: "Local businesses often struggle with manual stock tracking, leading to discrepancies, overstocking, or unexpected shortages in auto parts inventory.",
      solution: "A high-performance C#/.NET desktop application that centralizes inventory management. It uses a SQL Server backend to ensure data integrity and provides real-time analytics for stock optimization.",
      features: [
        "Real-time stock level monitoring with automated low-stock alerts.",
        "Secure user authentication and role-based access control.",
        "Advanced filtering and multi-parameter search for thousands of parts.",
        "Automated PDF report generation for daily and monthly sales/stock."
      ],
      techDeepDive: "Utilized ADO.NET for efficient database communication and layered architecture for scalability. The UI was crafted using WinForms with custom styling for a modern feel."
    },
    "study-buddy-ai": {
      problem: "Students struggle to convert voluminous lecture notes into effective study materials, leading to inefficient rote learning and 'information overload'.",
      solution: "A comprehensive AI Study Assistant that automates the creation of summaries, flashcards, and quizzes from raw notes. It provides an interactive tutor interface to clarify complex concepts instantly.",
      features: [
        "Smart Summaries: Get concise bullet points from pages of notes automatically.",
        "Quiz Generator: Auto-generate MCQs and short-answer tests to measure knowledge retention.",
        "Ask AI: Get instant, context-aware explanations for complex topics via an integrated LLM chat.",
        "Personalized Flashcards: Spaced repetition system based on generated course material."
      ],
      techDeepDive: "Built with Python for the backend AI logic using Gemini API for advanced reasoning. The React frontend uses Framer Motion for a fluid, high-end educational interface."
    },
    "scientific-calculator": {
      problem: "Standard browser-based calculators often lack advanced scientific functions or suffer from poor responsive layouts on mobile devices.",
      solution: "A dedicated React-based scientific calculator that balances complex functionality with extreme usability, featuring a clean grid layout and precision math logic.",
      features: [
        "Full support for trigonometric, logarithmic, and exponential functions.",
        "Persistent history log for tracking multiple calculations.",
        "Dark/Light mode support with CSS custom properties.",
        "Full keyboard accessibility and touch-optimized interface."
      ],
      techDeepDive: "Implemented using a state machine pattern to handle complex operation sequences. Used CSS Grid for the layout to maintain perfect alignment across screen sizes."
    },
    "modern-web-portfolio": {
      problem: "Standard portfolios often feel static and fail to demonstrate high-end frontend capabilities like animations and 3D integration.",
      solution: "A next-generation portfolio site built to push the boundaries of React and Framer Motion. It acts as a live case study for my own engineering standards.",
      features: [
        "Smooth page transitions and scroll-triggered reveal animations.",
        "Dynamic background effects using canvas and CSS gradients.",
        "Interactive project grid with custom micro-interactions.",
        "Highly accessible and SEO-optimized architecture."
      ],
      techDeepDive: "Heavily utilized the Framer Motion AnimatePresence for layout transitions. Focused on optimized component re-rendering and fluid motion orchestration."
    },
    "endless-escape": {
      problem: "Simple browser games often lack the 'polish' of native apps, particularly in terms of smooth frame rates and satisfying feedback loops.",
      solution: "A fast-paced 'escape' game that focuses on 60FPS performance and responsive motion controls, demonstrating mastery of the browser's rendering cycle.",
      features: [
        "Procedural level generation for endless replayability.",
        "High-score persistence using LocalStorage.",
        "Satisfying visual feedback using Framer Motion springs.",
        "One-touch control scheme suitable for desktop and mobile."
      ],
      techDeepDive: "Used a custom game loop hook to manage state updates independent of React's render cycle for maximum performance."
    },
    "infoverse": {
      problem: "Sourcing and synthesizing information from vast datasets is time-consuming for researchers and students.",
      solution: "A multi-modal AI explorer that synthesizes information from diverse sources into concise, actionable insights using advanced prompt engineering.",
      features: [
        "Multi-modal input processing (text and images).",
        "Context-aware information synthesis using Gemini API.",
        "Markdown export for researchers.",
        "Collaborative link sharing for team research."
      ],
      techDeepDive: "Focused on API optimization and stream-based UI updates to provide real-time 'thought' process visualization for the AI."
    }
  };

  const details = detailedInfo[project.slug] || {
    problem: "To be added.",
    solution: "To be added.",
    features: ["Details coming soon..."],
    techDeepDive: "Details coming soon..."
  };

  return (
    <div className="pt-10 pb-24 max-w-6xl mx-auto px-4">
      {/* Navigation */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12 flex items-center justify-between"
      >
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors font-medium group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </button>
        <div className="flex gap-4">
          <button className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
            <Share2 size={18} className="text-gray-400" />
          </button>
        </div>
      </motion.div>

      {/* Hero Header */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-[2.5rem] overflow-hidden glass border border-white/10 shadow-2xl aspect-video lg:aspect-square"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              {project.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-display leading-tight">{project.title}</h1>
          </div>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed font-medium italic">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-auto">
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all flex items-center gap-2 shadow-xl shadow-blue-600/20"
            >
              {project.isVideo ? <Youtube size={20} /> : <ExternalLink size={20} />}
              View Live Project
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 glass hover:bg-white/10 text-white rounded-2xl font-bold transition-all flex items-center gap-2 border border-white/10"
            >
              <Github size={20} /> Source Code
            </a>
          </div>
        </motion.div>
      </div>

      {/* Detailed Content */}
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-16">
          {/* Problem & Solution */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-red-500 rounded-full"></div>
                The Challenge
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">{details.problem}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-green-500 rounded-full"></div>
                The Solution
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">{details.solution}</p>
            </div>
          </motion.section>

          {/* Features */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-1.5 h-8 bg-blue-500 rounded-full"></div>
              Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {details.features.map((feature, i) => (
                <div key={i} className="glass p-6 rounded-2xl border-l-4 border-blue-500 group hover:border-blue-400 transition-all">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 size={24} className="text-blue-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-8 rounded-[2rem] border-white/10"
          >
            <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Cpu size={20} className="text-blue-400" /> Tech Stack
            </h4>
            <div className="space-y-4">
              {project.tags.map(tag => (
                <div key={tag} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 group hover:bg-white/10 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xs">
                    {tag.charAt(0)}
                  </div>
                  <span className="text-gray-300 font-bold text-sm tracking-tight">{tag}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/5">
              <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Engineering Insight</h5>
              <p className="text-xs text-gray-400 leading-relaxed italic">
                {details.techDeepDive}
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass p-8 rounded-[2rem] border-white/10 bg-blue-600/5"
          >
            <h4 className="text-xl font-bold mb-6">Contact Roby</h4>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Interested in this project or want to build something similar?</p>
            <Link 
              to="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20"
            >
              Let's Talk <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Next Steps / Related Work */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 pt-20 border-t border-white/5 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold transition-all group"
        >
          View All Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectDetailPage;
