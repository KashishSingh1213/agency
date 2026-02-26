import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'INDEX', href: '#home' },
    { name: 'AGENCY', href: '#agency' },
    { name: 'FLUX', href: '#services' },
    { name: 'WORK', href: '#projects' },
    { name: 'FLOW', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${isScrolled ? 'glass py-2 mx-auto max-w-2xl' : 'bg-transparent'
            }`}
        >
          {/* Minimalist Logo */}
          <div
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin-slow group-hover:border-accent transition-colors" />
            <span className="text-white font-black tracking-tighter text-xl">FLUX.</span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-[10px] font-black tracking-[0.2em] text-gray-400 hover:text-white transition-all transition-duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden md:block px-6 py-2 bg-white text-dark text-[10px] font-black rounded-full hover:bg-primary hover:text-white transition-all duration-500 tracking-widest"
          >
            GET IN TOUCH
          </button>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden text-white w-10 h-10 flex items-center justify-center glass rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-dark z-[60] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-black italic">FLUX.</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 glass rounded-full flex items-center justify-center">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-6xl font-black text-left hover:text-primary transition-colors tracking-tighter"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            <div className="mt-auto">
              <p className="text-gray-500 font-bold mb-4 uppercase tracking-widest text-xs">Let's talk</p>
              <h3 className="text-2xl font-bold">hello@flux-agency.co</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

