
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center gap-2 group cursor-pointer relative z-10"
        >
          <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-blue-600/20">
            <Terminal size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight text-white uppercase">
            ROBY
          </span>
        </Link>

        {/* Desktop Links */}
        <div 
          className="hidden md:flex items-center gap-2"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              className={({ isActive }) => 
                `relative px-1 py-1 rounded-full overflow-visible transition-all duration-300`
              }
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative px-3 py-1 flex items-center justify-center rounded-full"
                >
                  <span className={`relative z-10 text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 
                    hoveredLink === link.name ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'text-gray-400'
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Glass Hover Pill */}
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-white/[0.08] border border-white/10 backdrop-blur-md rounded-full -z-0 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavIndicator" 
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-blue-500 rounded-full z-10 shadow-[0_0_10px_rgba(37,99,235,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-10">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-gray-300 p-2 hover:bg-white/5 rounded-xl transition-colors"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scaleY: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scaleY: 1 }}
            exit={{ opacity: 0, height: 0, scaleY: 0.95 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="md:hidden glass overflow-hidden border-t border-white/5 origin-top"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => 
                      `block px-6 py-4 text-lg font-bold transition-all rounded-2xl relative group ${
                        isActive ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20 shadow-[inset_0_0_20px_rgba(37,99,235,0.1)]' : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    <div className="flex items-center justify-between">
                      {link.name}
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }} 
                        whileHover={{ opacity: 1, x: 0 }} 
                        className="text-blue-500"
                      >
                        <Terminal size={18} />
                      </motion.div>
                    </div>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
