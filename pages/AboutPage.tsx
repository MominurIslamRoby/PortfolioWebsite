
import React from 'react';
import About from '../components/About.tsx';
import Education from '../components/Education.tsx';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  // Direct link for the transparent profile image
  const profileImageUrl = "https://lh3.googleusercontent.com/d/1b2vQfJi0pf9Xb-gbDVYZwgJc8V1NA41V";

  return (
    <div className="space-y-24 pt-10">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-5xl font-black font-display tracking-tight mb-4">The Professional <span className="text-blue-500">Narrative</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto italic">Behind the code: My journey, values, and academic milestones.</p>
      </motion.div>

      {/* Hero Profile Image Section - Optimized for Transparent Cutout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="relative group">
          {/* Multi-layered Background Glow for Depth */}
          <div className="absolute -inset-10 bg-blue-600/10 rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity duration-1000"></div>
          <div className="absolute -inset-10 bg-purple-600/5 rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 delay-150"></div>
          
          <div className="relative aspect-[4/5] md:aspect-[16/9] rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 via-[#030712] to-gray-950 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] flex items-center justify-center">
            
            {/* Ambient Radial Background (Matches UI Color) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15),transparent_70%)]"></div>
            
            {/* Background Decorative Element */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Main Transparent Image Layer */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative z-10 h-full w-full flex items-center justify-center"
            >
              <img 
                src={profileImageUrl} 
                alt="Mominur Islam Roby" 
                className="h-full w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1600";
                }}
              />
            </motion.div>
            
            {/* Cinematic Foreground Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none z-20"></div>
            
            {/* Modern Frame Accents */}
            <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/10 rounded-tl-[2.5rem]"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/10 rounded-br-[2.5rem]"></div>
            
            {/* Dynamic Light Sweep */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
          </div>
        </div>
      </motion.div>
      
      <About />
      
      {/* Education section integrated into About Page */}
      <div className="py-10 border-t border-white/5">
        <Education />
      </div>
      
      {/* Extended personal section for About page */}
      <section className="max-w-5xl mx-auto p-10 glass rounded-[2.5rem] border-blue-500/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full"></div>
        <h3 className="text-2xl font-bold mb-8 text-blue-400 flex items-center gap-3">
          <div className="w-8 h-1 bg-blue-500 rounded-full"></div> Core Values
        </h3>
        <div className="grid sm:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Problem-First Approach</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              I believe software is only as good as the problem it solves. My engineering process starts with deep stakeholder understanding and requirement analysis before a single line of code is written. I strive for functional simplicity.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Ethical Innovation</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              In the rapidly evolving landscape of AI, ethical considerations are paramount. I am committed to building smart systems that are transparent, unbiased, and designed to augment human capability rather than replace it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
