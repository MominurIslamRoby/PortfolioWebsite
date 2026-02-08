
import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-gray-950">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Terminal size={16} className="text-white" />
            </div>
            <span className="text-lg font-bold font-display tracking-tight uppercase">
              ROBY
            </span>
          </Link>
        </div>
        
        <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
          Crafting the future of software with clean code and intelligent solutions. Inspired by innovation.
        </p>

        <div className="flex justify-center gap-8 mb-8 text-gray-400 text-sm flex-wrap px-4">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/skills" className="hover:text-white transition-colors">Skills</Link>
          <Link to="/experience" className="hover:text-white transition-colors">Experience</Link>
          <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link to="/certifications" className="hover:text-white transition-colors">Certifications</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Hire Me</Link>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600">
          Designed & Built with <Heart size={12} className="text-red-500 fill-red-500" /> by Mominur Islam Roby © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
