
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, Send, Facebook, Youtube, CheckCircle2, Loader2, User, Tag, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const contactInfo = [
    { icon: <Mail className="text-blue-500" />, label: "Email", value: "mominur.roby@gmail.com", href: "mailto:mominur.roby@gmail.com", external: false },
    { icon: <Phone className="text-green-500" />, label: "Phone", value: "+88 01793146103", href: "tel:+8801793146103", external: false },
    { icon: <Linkedin className="text-blue-400" />, label: "LinkedIn", value: "linkedin.com/in/mominur-islam-roby", href: "https://www.linkedin.com/in/mominur-islam-roby", external: true },
    { icon: <Github className="text-gray-400" />, label: "GitHub", value: "github.com/MominurIslamRoby", href: "https://github.com/MominurIslamRoby", external: true },
    { icon: <Facebook className="text-blue-600" />, label: "Facebook", value: "mominur.roby.00000007", href: "https://www.facebook.com/mominur.roby.00000007", external: true },
    { icon: <Youtube className="text-red-600" />, label: "YouTube", value: "@Tech.WithRoby", href: "https://www.youtube.com/@Tech.WithRoby", external: true },
    { icon: <MapPin className="text-red-500" />, label: "Location", value: "Dhaka, Bangladesh", href: "https://google.com/maps/search/Dhaka,+Bangladesh", external: true },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="scroll-mt-32">
      <div className="text-center mb-16">
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          className="text-blue-500 font-mono text-sm tracking-widest uppercase"
        >
          Reach Out
        </motion.span>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="text-4xl font-bold mt-2"
        >
          Contact Me
        </motion.h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="glass p-8 rounded-2xl h-full">
            <h3 className="text-2xl font-bold mb-6">Let's build something together</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Open for internships, freelance projects, and collaborations in Frontend development, AI research, and smart system architectures.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx}
                  href={info.href} 
                  target={info.external ? "_blank" : "_self"} 
                  rel={info.external ? "noopener noreferrer" : ""}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all text-gray-300">
                    {info.icon}
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{info.label}</div>
                    <div className="text-sm font-medium group-hover:text-blue-400 transition-colors truncate max-w-[180px] md:max-w-full">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          className="lg:col-span-3"
        >
          <div className="glass p-8 rounded-2xl relative overflow-hidden min-h-[500px]">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-gray-400 max-w-sm mb-8">
                    Thank you for reaching out, {formData.name.split(' ')[0]}. I'll review your inquiry and get back to you shortly.
                  </p>
                  <button 
                    onClick={handleReset}
                    className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold border border-white/10 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Name</label>
                      <div className="relative">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-blue-500 focus:outline-none transition-all" 
                          placeholder="John Doe" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-blue-500 focus:outline-none transition-all" 
                          placeholder="john@example.com" 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                    <div className="relative">
                      <Tag size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input 
                        required
                        type="text" 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-blue-500 focus:outline-none transition-all" 
                        placeholder="Project Inquiry" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-6 text-gray-500" />
                      <textarea 
                        required
                        rows={5} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-blue-500 focus:outline-none transition-all resize-none" 
                        placeholder="Hey Roby, I'd like to discuss a project..."
                      ></textarea>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/20 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>Processing... <Loader2 size={18} className="animate-spin" /></>
                    ) : (
                      <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-400 text-xs text-center font-medium">Something went wrong. Please try again or email me directly.</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
