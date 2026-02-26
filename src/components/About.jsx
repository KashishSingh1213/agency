import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Award, Users, Clock, TrendingUp } from 'lucide-react';

const Counter = ({ value, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
      {prefix}{count}{suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: 12, suffix: '+', label: 'YEARS IN FLOW' },
    { value: 500, suffix: '+', label: 'CLIENTS SCALE' },
    { value: 150, suffix: '+', label: 'FLUX COMPLETED' },
    { value: 24, suffix: '/7', label: 'GLOBAL SYNC' },
  ];

  return (
    <section id="about" className="py-16 relative bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Our Ethos</span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-6">
              WE ARE <br />
              <span className="text-gradient">NOT</span> JUST AN <br />
              AGENCY.
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-medium max-w-xl">
              Flux is a high-performance design partner for category-leading startups. We blend brutalist principles with fluid motion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass p-10 rounded-[2.5rem] flex flex-col justify-between aspect-square group">
                <div className="text-[10px] font-black text-gray-500 tracking-widest">{stat.label}</div>
                <div className="text-5xl font-black group-hover:text-primary transition-colors">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default About;

