
import { jsPDF } from 'jspdf';

export type CVRole = 'frontend' | 'aiml' | 'software' | 'fullstack';

interface RoleContent {
  summary: string;
  titleLine: string;
  expertise: string[];
}

const roleConfigs: Record<CVRole, RoleContent> = {
  frontend: {
    titleLine: 'FRONTEND DEVELOPER || REACT ENGINEER || WEB DEVELOPER',
    summary: 'Detail-oriented Frontend Engineer with expertise in building high-performance, responsive web applications using React and Tailwind CSS. Focused on optimizing user experience and implementing scalable architectural patterns in modern web ecosystems.',
    expertise: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'JavaScript/TypeScript', 'UI/UX Design Systems', 'Frontend Performance Optimization', 'Cross-browser Compatibility']
  },
  aiml: {
    titleLine: 'AI & MACHINE LEARNING ENGINEER || SOFTWARE ENGINEER || CLOUD DEVELOPER',
    summary: 'Computer Science Engineer and AWS Certified AI specialist dedicated to integrating machine intelligence into production-grade software. Proficient in developing predictive models, leveraging AWS AI/ML services, and building data-driven applications.',
    expertise: ['Python', 'Machine Learning Basics', 'AWS AI/ML Services (Braket, SageMaker)', 'Generative AI', 'Pandas & Matplotlib', 'Data Synthesis', 'Computer Vision', 'Deep Learning Foundations']
  },
  software: {
    titleLine: 'SOFTWARE ENGINEER || .NET DEVELOPER || SYSTEMS ARCHITECT',
    summary: 'Results-driven Software Engineer with a strong foundation in C#, Java, and C++. Experienced in the full software development lifecycle, from architecting robust desktop systems to optimizing complex algorithms for competitive programming.',
    expertise: ['C# (.NET)', 'Java (Swing)', 'C++', 'Data Structures & Algorithms', 'SQL Server Management', 'Enterprise System Design', 'Git Version Control', 'Software Lifecycle Management']
  },
  fullstack: {
    titleLine: 'FULL STACK DEVELOPER || SOFTWARE ENGINEER || AI ENTHUSIAST',
    summary: 'Versatile Full Stack Developer bridging the gap between intelligent backend logic and human-centric frontend design. Experienced in building end-to-end applications using .NET, React, and integrated AI services for smart system solutions.',
    expertise: ['React & Tailwind', '.NET Core', 'SQL Server', 'Python', 'AWS Cloud Services', 'RESTful API Development', 'System Integration', 'AI-Driven Development']
  }
};

/**
 * Generates an ATS-optimized professional CV for Mominur Islam Roby.
 */
export const generateRobyCV = async (role: CVRole = 'software') => {
  const config = roleConfigs[role];
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const margin = 40;
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 50;

  // Helper for text wrapping
  const addWrappedText = (text: string, fontSize: number, style: 'bold' | 'normal', currentY: number, align: 'left' | 'center' = 'left') => {
    doc.setFont('helvetica', style);
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, pageWidth - margin * 2);
    doc.text(lines, align === 'center' ? pageWidth / 2 : margin, currentY, { align });
    return currentY + lines.length * (fontSize * 1.2);
  };

  // 1. PROFESSIONAL SUMMARY
  y = addWrappedText(config.summary, 10, 'normal', y);
  y += 10;

  // 2. FULL NAME (ALL CAPS)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('MOMINUR ISLAM ROBY', margin, y);
  y += 20;

  // 3. CONTACT INFO
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const contactInfo = 'Dhaka, Bangladesh | +88 01793146103 | mominur.roby@gmail.com | github.com/MominurIslamRoby | linkedin.com/in/mominur-islam-roby';
  doc.text(contactInfo, margin, y);
  y += 15;

  // 4. PROFESSIONAL TITLE LINE
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(config.titleLine, margin, y);
  y += 25;

  // 5. AREA OF EXPERTISE
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('AREA OF EXPERTISE', margin, y);
  y += 5;
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 15;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const chunkedExpertise = [];
  for (let i = 0; i < config.expertise.length; i += 2) {
    chunkedExpertise.push(config.expertise.slice(i, i + 2).join(' | '));
  }
  chunkedExpertise.forEach(line => {
    doc.text(`• ${line}`, margin + 10, y);
    y += 12;
  });
  y += 10;

  // 6. PROJECTS
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('PROJECTS', margin, y);
  y += 5;
  doc.line(margin, y, pageWidth - margin, y);
  y += 15;

  const projects = [
    { name: 'StoreMate: Smart Shop Management System', stack: 'C#, .NET, SQL Server', desc: 'Professional desktop solution for intelligent inventory tracking and automated reporting.', links: 'Demo: https://youtu.be/2CtclPaCkEo | Repository: github.com/MominurIslamRoby' },
    { name: 'Study Buddy AI', stack: 'Python, AWS AI, Gemini API, React', desc: 'Educational assistant transforming lecture notes into summaries, flashcards, and interactive quizzes.', links: 'Demo: study-buddy-ai.vercel.app | Repository: github.com/MominurIslamRoby/study-buddy-ai' },
    { name: 'Modern Web Portfolio', stack: 'React, Vite, Tailwind, Framer Motion', desc: 'High-performance interactive engineering showcase with smooth transitions and AI integration.', links: 'Demo: mominurislamroby.github.io/roby-portfolio/ | Repository: github.com/MominurIslamRoby/roby-portfolio' }
  ];

  projects.forEach(p => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(`${p.name} – ${p.stack} || ${p.desc}`, margin, y);
    y += 12;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(p.links, margin + 10, y);
    y += 18;
  });
  y += 5;

  // 7. PROFESSIONAL EXPERIENCE
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('PROFESSIONAL EXPERIENCE', margin, y);
  y += 5;
  doc.line(margin, y, pageWidth - margin, y);
  y += 15;

  const experiences = [
    { role: 'Frontend Development Intern', company: 'CodeAlpha', period: 'Feb 2026 - Mar 2026', bullets: ['Selected for a specialized Frontend Development Internship focusing on user-centric interfaces.', 'Developing responsive web applications using modern CSS and React frameworks.', 'Collaborating on real-world development tasks to bridge design and engineering.'] },
    { role: '.NET Development Intern', company: 'Codveda Technologies', period: 'Jan 2026 - Present', bullets: ['Developing desktop applications using C# and .NET Framework focusing on modular architecture.', 'Implementing database operations and optimization using SQL Server for high-integrity data management.', 'Collaborating on system design patterns to enhance application performance and scalability.'] },
    { role: 'Managing Director', company: 'Ataur Battery House & Auto Parts Centre', period: 'Feb 2019 - Present', bullets: ['Managing operations for a multi-generational business, ensuring reliability and long-standing customer trust.', 'Overseeing technical and operational maintenance of specialized enterprise inventory systems.', 'Directed business expansion through strategic service modernization and customer relationship management.'] }
  ];

  experiences.forEach(exp => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(`${exp.role} | ${exp.company}`, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text(exp.period, pageWidth - margin, y, { align: 'right' });
    y += 12;
    exp.bullets.forEach(b => {
      y = addWrappedText(`• ${b}`, 9, 'normal', y);
      y += 2;
    });
    y += 8;
  });

  // 8. EDUCATION
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('EDUCATION', margin, y);
  y += 5;
  doc.line(margin, y, pageWidth - margin, y);
  y += 15;

  const education = [
    { degree: 'BSc in Computer Science & Engineering', school: 'American International University-Bangladesh', year: 'Aug 2022 - Present' },
    { degree: 'Higher Secondary Certificate (HSC)', school: 'Dhaka College', year: '2021' }
  ];

  education.forEach(edu => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(edu.degree, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text(`${edu.school} | ${edu.year}`, pageWidth - margin, y, { align: 'right' });
    y += 15;
  });
  y += 5;

  // 9. ADDITIONAL INFORMATION
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('ADDITIONAL INFORMATION', margin, y);
  y += 5;
  doc.line(margin, y, pageWidth - margin, y);
  y += 15;

  const additionals = [
    'Certifications: AWS Amazon Braket, Fundamentals of ML/AI, Google GenAI, IT Essentials (Cisco)',
    'Technical Interests: AI in Education, Distributed Systems, Performance-First Web Interfaces',
    'Languages: English (Fluent), Bengali (Native)'
  ];

  additionals.forEach(add => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(`• ${add}`, margin, y);
    y += 12;
  });

  doc.save(`Mominur_Islam_Roby_CV_${role.toUpperCase()}.pdf`);
};
