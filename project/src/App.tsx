import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';
import ShaderBackground from './components/ShaderBackground';
import NeuralCore from './components/NeuralCore';
import CustomCursor from './components/CustomCursor';
import BootSequence from './components/BootSequence';
import TypingTagline from './components/TypingTagline';
import FloatingNav from './components/FloatingNav';
import ProjectCard from './components/ProjectCard';
import InteractiveTerminal from './components/InteractiveTerminal';
import MagneticButton from './components/MagneticButton';
import VisualOverlays from './components/VisualOverlays';

const projects = [
  {
    title: 'Neural Rendering Engine',
    description: 'Real-time volumetric rendering system using custom GLSL shaders and compute pipelines for procedural world generation.',
    tech: ['WebGL', 'GLSL', 'Three.js', 'TypeScript']
  },
  {
    title: 'Distributed Task Orchestrator',
    description: 'Microservices architecture handling 10M+ daily operations with event-driven design and advanced caching strategies.',
    tech: ['Node.js', 'Redis', 'PostgreSQL', 'Docker']
  },
  {
    title: 'Quantum State Visualizer',
    description: 'Interactive data visualization platform for quantum computing simulations with real-time WebGL particle systems.',
    tech: ['React', 'WebGL', 'D3.js', 'Python']
  },
  {
    title: 'AI-Powered Code Assistant',
    description: 'Machine learning model integration for intelligent code completion and refactoring suggestions in real-time.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'WebSockets']
  }
];

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Three.js', 'WebGL', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'] },
  { category: 'Graphics', items: ['GLSL', 'Shaders', 'Blender', 'Unity', 'Unreal'] },
  { category: 'Tools', items: ['Git', 'CI/CD', 'AWS', 'Linux', 'Figma'] }
];

function App() {
  const [booted, setBooted] = useState(false);
  const scrollRef = useRef(0);
  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true, margin: '-80px' });

  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      scrollRef.current = Math.min(Math.max(scrollProgress, 0), 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <BootSequence onComplete={() => setBooted(true)} />

      {booted && (
        <>
          <CustomCursor />
          <div className="relative bg-[#030306] text-white overflow-x-hidden">
            <ShaderBackground />
            <NeuralCore scrollRef={scrollRef} />
            <VisualOverlays />
            <FloatingNav />

            <div className="relative z-10">
              <section id="home" className="min-h-screen flex items-center justify-center px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-w-4xl text-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-6"
                  >
                    <h1 className="text-7xl md:text-8xl font-bold mb-4 text-white">
                      Alex Chen
                    </h1>
                    <div className="text-2xl md:text-3xl">
                      <TypingTagline />
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                  >
                    Building immersive digital experiences at the intersection of code, design, and cutting-edge technology.
                    Specializing in real-time graphics, distributed systems, and performant web applications.
                  </motion.p>
                </motion.div>
              </section>

              <section id="projects" className="py-36 px-8">
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00D4FF]" />
                      <span className="text-[#00D4FF] text-sm font-mono tracking-wider">SELECTED WORK</span>
                    </div>
                    <h2 className="text-5xl font-bold">Featured Projects</h2>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} index={index} />
                    ))}
                  </div>
                </div>
              </section>

              <section id="skills" className="py-36 px-8" ref={skillsRef}>
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00D4FF]" />
                      <span className="text-[#00D4FF] text-sm font-mono tracking-wider">EXPERTISE</span>
                    </div>
                    <h2 className="text-5xl font-bold">Technical Skills</h2>
                  </motion.div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="p-6 rounded-lg border border-white/5 bg-white/[0.02]"
                      >
                        <h3 className="text-xl font-bold mb-4 text-[#00D4FF]">{skillGroup.category}</h3>
                        <ul className="space-y-2">
                          {skillGroup.items.map((skill, j) => (
                            <li key={j} className="text-gray-400 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="terminal" className="py-36 px-8">
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00D4FF]" />
                      <span className="text-[#00D4FF] text-sm font-mono tracking-wider">INTERACTIVE</span>
                    </div>
                    <h2 className="text-5xl font-bold mb-4">Neural Terminal</h2>
                    <p className="text-gray-500">
                      Try out commands like <code className="text-[#00D4FF] font-mono">help</code>,{' '}
                      <code className="text-[#00D4FF] font-mono">show skills</code>, or{' '}
                      <code className="text-[#00D4FF] font-mono">run project</code>
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <InteractiveTerminal />
                  </motion.div>
                </div>
              </section>

              <section id="contact" className="py-36 px-8">
                <div className="max-w-2xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00D4FF]" />
                      <span className="text-[#00D4FF] text-sm font-mono tracking-wider">GET IN TOUCH</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00D4FF]" />
                    </div>
                    <h2 className="text-5xl font-bold mb-6">Let's Build Something</h2>
                    <p className="text-gray-500 text-lg mb-12">
                      Open to collaboration on innovative projects. Whether it's cutting-edge web experiences,
                      real-time graphics, or scalable systems architecture.
                    </p>

                    <div className="flex items-center justify-center gap-6 mb-12">
                      <MagneticButton
                        as="a"
                        href="https://github.com"
                        className="p-4 rounded-full border border-white/10 bg-white/5 hover:border-[#00D4FF]/30 transition-colors"
                      >
                        <Github size={24} />
                      </MagneticButton>
                      <MagneticButton
                        as="a"
                        href="https://linkedin.com"
                        className="p-4 rounded-full border border-white/10 bg-white/5 hover:border-[#00D4FF]/30 transition-colors"
                      >
                        <Linkedin size={24} />
                      </MagneticButton>
                      <MagneticButton
                        as="a"
                        href="mailto:alex@example.com"
                        className="p-4 rounded-full border border-white/10 bg-white/5 hover:border-[#00D4FF]/30 transition-colors"
                      >
                        <Mail size={24} />
                      </MagneticButton>
                    </div>

                    <MagneticButton
                      as="a"
                      href="mailto:alex@example.com"
                      className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#0099cc] to-[#00D4FF] text-white font-semibold hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-shadow"
                    >
                      Start a Conversation
                    </MagneticButton>
                  </motion.div>
                </div>
              </section>

              <footer className="py-8 px-8 border-t border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-gray-600 text-sm font-mono">
                    Crafted with React, Three.js & GLSL
                  </p>
                  <p className="text-gray-700 text-sm">
                    © 2024 Alex Chen. All rights reserved.
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
