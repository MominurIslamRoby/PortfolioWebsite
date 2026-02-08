
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Globe } from 'lucide-react';

const SocialProfile: React.FC = () => {
  const leftSocials = [
    { icon: <Facebook size={22} />, href: "https://www.facebook.com/mominur.roby.00000007" },
    { icon: <Github size={22} />, href: "https://github.com/MominurIslamRoby" },
  ];

  const rightSocials = [
    { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/mominur-islam-roby" },
    { icon: <Globe size={22} />, href: "https://mominurislamroby.github.io/roby-portfolio/" },
  ];

  // Direct link for Google Drive image (ID: 1EdftMVnCnVyXNPP6Z0ZTEoBRdjEHB_x6)
  const profileImageUrl = "https://lh3.googleusercontent.com/d/1EdftMVnCnVyXNPP6Z0ZTEoBRdjEHB_x6";

  return (
    <section className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Main Pill Container - Floating Glass Aesthetic */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative flex items-center justify-center gap-6 md:gap-10 px-10 py-8 glass rounded-full border-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.5)] bg-[#0A0D14]/40 backdrop-blur-2xl"
      >
        {/* Left Icons */}
        <div className="flex items-center gap-4">
          {leftSocials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-[#111827]/80 border border-white/5 rounded-[1.25rem] text-gray-400 hover:text-blue-400 transition-all shadow-lg"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Central Portrait - Updated with user image link */}
        <div className="relative group">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 md:w-32 md:h-32 rounded-full p-0.5 bg-gradient-to-tr from-blue-600/30 via-transparent to-purple-600/30 border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)] relative z-10 overflow-hidden"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-950 border border-white/5">
              <img 
                src={profileImageUrl} 
                alt="Mominur Islam Roby" 
                className="w-full h-full object-cover object-center scale-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Final fallback to high-quality placeholder if Drive link fails
                  target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
          </motion.div>
          
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full -z-10 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {rightSocials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-[#111827]/80 border border-white/5 rounded-[1.25rem] text-gray-400 hover:text-blue-400 transition-all shadow-lg"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-[9px] font-mono tracking-[0.6em] uppercase text-gray-400 font-bold"
      >
        Connect with me
      </motion.p>
    </section>
  );
};

export default SocialProfile;
