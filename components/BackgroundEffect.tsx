
import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[70%] bg-purple-600/5 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[40%] left-[30%] w-[40%] h-[50%] bg-cyan-600/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Radial fade for focus */}
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#030712] to-[#030712] opacity-80"></div>
    </div>
  );
};

export default BackgroundEffect;
