import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Code, Briefcase, ChevronRight } from 'lucide-react';
import SocialProfile from '../components/SocialProfile';

const Home = () => {
  const shortcuts = [
    {
      title: 'Who I Am',
      desc: 'CSE student at AIUB with AI passion.',
      link: '/about',
      icon: <User className="text-blue-400" />,
    },
    {
      title: 'Expertise',
      desc: 'React, C#, Python, & AWS AI.',
      link: '/skills',
      icon: <Code className="text-cyan-400" />,
    },
    {
      title: 'Journey',
      desc: 'From Intern to MD & Creator.',
      link: '/experience',
      icon: <Briefcase className="text-purple-400" />,
    },
  ];

  return (
    <div className="space-y-24 md:space-y-32 overflow-x-hidden">
      
      {/* ✅ HERO WRAPPER — FIXES TEXT CUTTING WITHOUT TOUCHING HERO CODE */}
      <div className="w-full max-w-[100vw] overflow-visible px-4">
        <Hero />
      </div>

      {/* Brief Overview Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display"
          >
            A Professional At A Glance
          </motion.h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {shortcuts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl hover:border-blue-500/30 transition-all group"
            >
              <div className="mb-4 bg-white/5 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {item.desc}
              </p>
              <Link
                to={item.link}
                className="flex items-center gap-2 text-blue-400 text-sm font-bold group-hover:gap-3 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote / Vision snippet */}
      <section className="text-center max-w-4xl mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-3xl font-display italic text-gray-300 leading-relaxed font-light">
            "Build systems like your future depends on them - because it does."
          </p>
          <div className="mt-8 text-blue-500 font-mono tracking-widest text-sm uppercase">
            — MOMINUR ISLAM ROBY
          </div>
        </motion.div>
      </section>

      {/* Social Profile Section */}
      <SocialProfile />
    </div>
  );
};

export default Home;
