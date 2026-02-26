import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#030303] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/80 to-dark z-10" />

      {/* Premium Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-secondary/10 rounded-full blur-[150px] animate-pulse pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <div className="px-4 py-1.5 rounded-full glass border-white/5 flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Future of Digital Design
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[clamp(3.5rem,15vw,12rem)] font-black mb-10 tracking-[-0.05em] leading-[0.85] text-center"
        >
          WE BUILD <br />
          <span className="text-gradient">DIGITAL</span> FLUX
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed text-center font-medium"
        >
          Hyper-growth design and development for startups that dare to lead. We turn complexity into clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#contact')}
            className="group px-12 py-5 bg-primary text-white font-bold rounded-full flex items-center gap-3 transition-all duration-500 hover:brightness-110"
          >
            Start Your Flow
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#projects')}
            className="group px-12 py-5 glass text-white font-bold rounded-full flex items-center gap-3 transition-all duration-500"
          >
            Explore Work
          </motion.button>
        </motion.div>

        {/* Floating Badges */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden 2xl:flex flex-col gap-6">
          {[
            { label: 'Fast Turnaround', value: '48h' },
            { label: 'Cloud Native', value: '100%' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.2 }}
              className="p-6 glass rounded-[2rem] border-white/5 backdrop-blur-3xl"
            >
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-2xl font-black text-primary">{item.value}</div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden 2xl:flex flex-col gap-6">
          {[
            { label: 'Client Satisfaction', value: '100%' },
            { label: 'Projects Finished', value: '250+' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.2 }}
              className="p-6 glass rounded-[2rem] border-white/5 backdrop-blur-3xl"
            >
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-2xl font-black text-secondary">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;

