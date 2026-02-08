import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CheckCircle, ChevronDown, ChevronRight, Download, FileText, Sparkles } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [isCVMenuOpen, setIsCVMenuOpen] = useState(false);
  const cvMenuRef = useRef<HTMLDivElement>(null);

  const roles = [
    "Computer Science & Engineering Student",
    "Frontend Developer",
    "AI & Machine Learning Enthusiast",
    "Competitive Programmer"
  ];

  const cvRoleOptions = [
    { 
      label: 'Software Engineer', 
      filename: 'Mominur_Islam_Roby_Software_Engineer.pdf',
      description: 'Systems & Core Dev focus' 
    },
    { 
      label: 'Frontend Developer', 
      filename: 'Mominur_Islam_Roby_Frontend_Developer.pdf',
      description: 'UI/UX & Web Optimization' 
    },
    { 
      label: 'AI/ML Specialist', 
      filename: 'Mominur_Islam_Roby_AI_ML_Engineer.pdf',
      description: 'Data Science & AWS AI focus' 
    },
  ];

  const profileImageUrl = "https://lh3.googleusercontent.com/d/1EdftMVnCnVyXNPP6Z0ZTEoBRdjEHB_x6";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(event.target as Node)) {
        setIsCVMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const moveX = useTransform(springX, [-500, 500], [-20, 20]);
  const moveY = useTransform(springY, [-500, 500], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden pt-24 pb-32"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Blurs */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div 
        style={{ x: useTransform(moveX, x => x * -1.5), y: useTransform(moveY, y => y * -1.5) }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Blurred Profile Image Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        style={{ x: useTransform(moveX, x => x * 0.5), y: useTransform(moveY, y => y * 0.5) }}
        className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] pointer-events-none z-0"
      >
        <div className="w-full h-full relative">
          <img 
            src={profileImageUrl} 
            alt="" 
            className="w-full h-full object-contain filter blur-[100px] opacity-60 scale-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <div className="max-w-7xl w-full">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500/50" />
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-blue-400 font-mono text-xs md:text-sm tracking-[0.6em] uppercase font-bold">
              Software Architect
            </span>
            <Sparkles size={16} className="text-blue-400" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-blue-500/50" />
          </motion.div>

          {/* Main Name Heading */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[8vw] md:text-7xl lg:text-8xl xl:text-9xl font-black font-display mb-10 tracking-tighter leading-tight whitespace-nowrap overflow-visible"
          >
            <motion.span 
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-white py-2"
            >
              MOMINUR ISLAM ROBY
            </motion.span>
          </motion.h1>

          {/* Animated Roles */}
          <div className="h-12 md:h-16 relative mb-12 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoleIdx}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-xl md:text-3xl text-gray-300 font-light tracking-tight w-full absolute drop-shadow-sm"
              >
                {roles[currentRoleIdx]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Descriptive Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-3xl mx-auto text-gray-400 text-lg md:text-2xl mb-16 leading-relaxed font-normal px-4 opacity-80"
          >
            Engineering high-performance software solutions with a focus on AI integration and modern frontend excellence. 
            Bridging the gap between complex logic and human-centric design.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 relative z-30 mb-20"
          >
            <Link to="/projects">
              <motion.div 
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden px-14 py-5 bg-blue-600 text-white rounded-full font-bold text-lg transition-all flex items-center gap-3 shadow-[0_20px_60px_rgba(37,99,235,0.4)] group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                View My Work <ChevronRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
              </motion.div>
            </Link>
            
            <div className="relative" ref={cvMenuRef}>
              <motion.button 
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsCVMenuOpen(!isCVMenuOpen)}
                className={`px-14 py-5 glass hover:bg-white/10 rounded-full font-bold text-lg transition-all flex items-center gap-3 border border-white/10 min-w-[300px] justify-center group shadow-xl ${isCVMenuOpen ? 'bg-white/10 border-blue-500/50 ring-2 ring-blue-500/20 shadow-blue-500/10' : ''}`}
              >
                <Download size={22} className="text-blue-400 group-hover:translate-y-0.5 transition-transform" /> 
                Download CV 
                <ChevronDown size={22} className={`text-blue-400/50 transition-transform duration-300 ml-1 ${isCVMenuOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isCVMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 25, scale: 0.95 }}
                    animate={{ opacity: 1, y: 15, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 glass rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] z-[100] p-4 backdrop-blur-3xl min-w-[340px]"
                  >
                    <div className="text-[10px] uppercase tracking-[0.25em] text-blue-400/90 font-black mb-4 px-4 pt-2 flex items-center gap-2 border-b border-white/5 pb-2">
                      <FileText size={12} /> ATS-Optimized Formats
                    </div>
                    <div className="grid gap-2">
                      {cvRoleOptions.map((opt) => (
                        <a
                          key={opt.filename}
                          href={`/${opt.filename}`}
                          download={opt.filename}
                          onClick={() => setIsCVMenuOpen(false)}
                          className="w-full text-left px-5 py-5 hover:bg-blue-600/25 rounded-3xl transition-all flex items-center justify-between group/item border border-transparent hover:border-blue-500/20"
                        >
                          <div className="flex flex-col text-left">
                            <span className="text-sm font-bold text-gray-100 group-hover/item:text-white transition-colors">
                              {opt.label}
                            </span>
                            <span className="text-[10px] text-gray-500 group-hover/item:text-blue-300/80 transition-colors font-medium mt-1">
                              {opt.description}
                            </span>
                          </div>
                          <div className="p-2.5 bg-white/5 rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:scale-110 transition-all shadow-lg">
                            <Download size={14} />
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="mt-4 px-4 py-4 bg-white/5 rounded-[1.5rem] border border-white/5 flex items-center justify-center">
                      <p className="text-[9px] text-gray-500 leading-relaxed uppercase tracking-widest font-black flex items-center gap-2">
                        <CheckCircle size={10} className="text-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" /> Verified Recruitment Friendly
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none opacity-[0.012] whitespace-nowrap text-[38vw] font-black text-white tracking-tighter">
        ENGINEER
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-700">Explore</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-blue-600/60 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;