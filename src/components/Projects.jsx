import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'TEMPORAL.',
    category: 'LUXURY WEB.',
    image: '/luxury.png',
    size: 'large', // 8 columns
  },
  {
    id: '02',
    title: 'VOYAGE.AI',
    category: 'PRODUCT DESIGN.',
    image: '/ai_travel.png',
    size: 'small', // 4 columns
  },
  {
    id: '03',
    title: 'STARK ARCH.',
    category: 'EDITORIAL.',
    image: '/brutalist.png',
    size: 'small', // 4 columns
  },
  {
    id: '04',
    title: 'NEURAL FLUX.',
    category: 'ENGINEERING.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000',
    size: 'large', // 8 columns
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-10% 0px' });

  const getCardStyle = () => {
    switch (project.size) {
      case 'large': return 'md:col-span-8 h-[50vh] md:h-[70vh]';
      case 'medium': return 'md:col-span-6 h-[50vh] md:h-[70vh]';
      default: return 'md:col-span-4 h-[50vh] md:h-[70vh]';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className={`relative group overflow-hidden ${getCardStyle()} rounded-2xl md:rounded-[3rem] cursor-pointer`}
    >
      <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 bg-dark/40 backdrop-blur-sm">
        <div className="flex justify-between items-start">
          <span className="text-[10px] font-black tracking-[0.4em] bg-white text-dark px-4 py-1 rounded-full uppercase">
            {project.category}
          </span>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass border-white/20 flex items-center justify-center -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <ArrowUpRight size={24} className="group-hover:text-primary transition-colors" />
          </div>
        </div>

        <div>
          <span className="text-[10px] font-black text-white/50 mb-2 block">{project.id}</span>
          <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
      />
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' });

  return (
    <section id="projects" className="pt-40 pb-20 bg-dark relative overflow-hidden">
      {/* Design Grid Background */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-12 pointer-events-none px-6 max-w-7xl mx-auto">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="border-x border-white/[0.03] h-full w-full first:border-l-0 last:border-r-0" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            ref={sectionRef}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-8">
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 md:mb-8 block">Selected Artifacts</span>
                <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.85]">
                  CASE <br />
                  <span className="text-gradient">STUDIES.</span>
                </h2>
              </div>
              <div className="md:col-span-4 pb-4">
                <p className="text-gray-500 text-xl md:text-2xl font-medium leading-tight max-w-xs">
                  Brutal engineering meets fluid aesthetics. No compromises.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-12 md:px-16 py-6 md:py-8 border border-white/10 rounded-full flex items-center gap-6 text-lg md:text-xl font-bold hover:bg-white hover:text-dark transition-all duration-500"
          >
            SEE ALL FLUX
            <Plus size={24} className="group-hover:rotate-90 transition-transform duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

