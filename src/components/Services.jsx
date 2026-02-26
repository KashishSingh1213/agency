import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bot, MessageSquare, Globe, Briefcase, Cpu, ArrowRight } from 'lucide-react';

const serviceItems = [
  {
    icon: Bot,
    title: 'AI CHATBOT.',
    description: 'Hyper-intelligent conversational neural networks designed to automate complex user journeys with semantic understanding.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000',
    size: 'large',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    icon: MessageSquare,
    title: 'WA. AUTOMATION.',
    description: 'End-to-end WhatsApp ecosystem automation. Scale your reach with intelligent broadcast and reply flows.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2000',
    size: 'small',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Globe,
    title: 'WEB APPS.',
    description: 'Next-generation web applications. Brutal performance meets fluid design for industry-disruptive scale.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000',
    size: 'small',
    color: 'from-orange-500 to-rose-600'
  },
  {
    icon: Cpu,
    title: 'AI INTEGRATION.',
    description: 'Inject direct intelligence into your existing stack. From data processing to predictive analytics.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000',
    size: 'small',
    color: 'from-purple-500 to-fuchsia-600'
  },
  {
    icon: Briefcase,
    title: 'BUSINESS ADVISORY.',
    description: 'Transformative digital strategy. We align your tech stack with radical market innovation goals.',
    image: 'https://images.unsplash.com/photo-1454165833767-02ba08a846bc?q=80&w=2000',
    size: 'small',
    color: 'from-amber-400 to-orange-500'
  }
];

const ServiceCard = ({ service, index, isInView }) => {
  const Icon = service.icon;

  const getCardStyle = () => {
    switch (service.size) {
      case 'large': return 'md:col-span-8 h-[60vh]';
      default: return 'md:col-span-4 h-[60vh] md:h-[50vh]';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group overflow-hidden rounded-[2.5rem] bg-surface border border-white/5 ${getCardStyle()}`}
    >
      <div className="absolute inset-0 z-20 p-10 flex flex-col justify-between transition-all duration-700">
        <div className="flex justify-between items-start">
          <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center border-white/10 group-hover:border-primary/50 transition-all duration-500">
            <Icon className="text-white group-hover:text-primary transition-all duration-500 scale-110" size={32} />
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 45 }}
            className="w-14 h-14 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-3xl border-white/20"
          >
            <ArrowRight size={24} className="text-white" />
          </motion.div>
        </div>

        <div className="relative z-30">
          <span className="text-[10px] font-black tracking-[0.5em] text-white/30 mb-4 block group-hover:text-primary transition-colors">0{index + 1} // FLUX</span>
          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6 uppercase group-hover:tracking-normal transition-all duration-700">
            {service.title}
          </h3>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-sm opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out">
            {service.description}
          </p>
        </div>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent z-10 opacity-90 transition-opacity duration-700 group-hover:opacity-60" />
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-10 mix-blend-overlay`} />

      {/* Decorative Grid on card */}
      <div className="absolute inset-0 z-15 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none grid grid-cols-6 grid-rows-6">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="border-[0.5px] border-white/20" />
        ))}
      </div>

      <motion.img
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 z-0"
      />
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="services" className="py-16 relative bg-dark overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block px-4 py-1.5 glass rounded-full w-fit">
                Our Ecosystem
              </span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
                WE SOLVE <br />
                <span className="text-gradient">COMPLEX</span> PROBLEMS
              </h2>
            </div>
            <p className="text-gray-500 text-xl md:text-2xl font-medium max-w-sm leading-tight border-l-2 border-primary/20 pl-8">
              Fusing artificial intelligence with radical design to build what's next.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {serviceItems.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;

