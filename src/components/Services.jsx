import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Palette,
  Code,
  Megaphone,
  TrendingUp,
  Smartphone,
  Cloud,
  Zap,
  Shield,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Create intuitive and beautiful user interfaces that enhance user experience and engagement.',
    gradient: 'from-pink-500 to-rose-500',
    delay: 0.1,
  },
  {
    icon: Code,
    title: 'Web Dev',
    description: 'Build robust and scalable web applications using cutting-edge technologies.',
    gradient: 'from-violet-500 to-purple-500',
    delay: 0.2,
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Drive growth with data-driven marketing strategies and campaigns.',
    gradient: 'from-cyan-500 to-blue-500',
    delay: 0.3,
  },
  {
    icon: TrendingUp,
    title: 'SEO',
    description: 'Improve your online visibility and organic search rankings.',
    gradient: 'from-green-500 to-emerald-500',
    delay: 0.4,
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Develop cross-platform mobile applications for iOS and Android.',
    gradient: 'from-orange-500 to-amber-500',
    delay: 0.5,
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Leverage cloud infrastructure for scalability and performance.',
    gradient: 'from-sky-500 to-blue-500',
    delay: 0.6,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-16 relative bg-dark">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                Capabilities
              </span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mt-4">
                WE SOLVE <br />
                <span className="text-gradient">COMPLEX</span> PROBLEMS
              </h2>
            </div>
            <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed font-medium">
              A full-stack agency powering the next generation of digital products.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Main Service - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] glass p-12 flex flex-col justify-between min-h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mb-8">
                <Palette className="text-primary" size={32} />
              </div>
              <h3 className="text-4xl font-black mb-4">Strategic <br />UI/UX Design</h3>
              <p className="text-gray-400 text-xl max-w-md leading-relaxed">
                We craft digital interfaces that are not just beautiful, but conversion-focused and user-centric.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-3 mt-10">
              {['Visual Identity', 'Design Systems', 'Prototyping'].map(t => (
                <span key={t} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] glass p-8 flex flex-col"
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <Code className="text-secondary" size={24} />
            </div>
            <h3 className="text-2xl font-black mb-3 text-white">Engineering</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Clean, scalable codebases built with the latest tech stacks.
            </p>
          </motion.div>

          {/* Marketing Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-primary p-8 flex flex-col justify-end min-h-[240px]"
          >
            <h3 className="text-2xl font-black mb-3 text-white">Marketing</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Growth strategies that actually scale your revenue.
            </p>
            <div className="flex justify-between items-center">
              <Megaphone className="text-white/30" size={40} />
              <ArrowRight className="text-white" size={24} />
            </div>
          </motion.div>

          {/* Small Cards Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 group relative overflow-hidden rounded-[2.5rem] glass p-10 flex items-center gap-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
              <TrendingUp className="text-accent" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Search SEO</h3>
              <p className="text-gray-500 text-sm mt-1">Dominate the rankings organically.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-3 group relative overflow-hidden rounded-[2.5rem] glass p-10 flex items-center gap-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
              <Smartphone className="text-blue-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Mobile First</h3>
              <p className="text-gray-500 text-sm mt-1">Apps that people actually love using.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Services;

