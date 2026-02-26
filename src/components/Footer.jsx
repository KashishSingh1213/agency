import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Big CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-40 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8">Ready to evolve?</span>
          <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-none mb-16">
            LIT THE <br />
            <span className="text-gradient">SPARK.</span>
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="group px-16 py-8 glass rounded-full flex items-center gap-6 text-2xl font-black transition-all hover:bg-white hover:text-dark"
          >
            START A PROJECT
            <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-20 border-t border-white/5">
          <div className="flex items-center gap-6 cursor-pointer group" onClick={() => scrollToSection('#home')}>
            <span className="text-white font-black tracking-tighter text-3xl italic">FLUX.</span>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <p className="text-gray-500 font-medium text-sm">Next-gen digital flux agency.</p>
          </div>

          <div className="flex items-center gap-8 md:gap-12">
            {['TWITTER', 'INSTAGRAM', 'LINKEDIN', 'DRIBBBLE'].map(social => (
              <a key={social} href="#" className="text-[10px] font-black tracking-[0.2em] text-gray-400 hover:text-primary transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-16 text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">
          <div>© {currentYear} FLUX DESIGN SOLUTIONS. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
            <a href="#" className="hover:text-white transition-colors">COOKIES</a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
    </footer>
  );
};

export default Footer;
