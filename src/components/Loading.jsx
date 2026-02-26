import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-dark z-[100] flex flex-col items-center justify-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-8xl md:text-[12rem] font-black tracking-tighter italic text-white/5"
        >
          {progress}%
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-black tracking-[0.5em] text-white"
          >
            FLUX.
          </motion.h1>
        </div>
      </div>

      <div className="w-48 h-px bg-white/5 mt-10 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-primary"
          initial={{ x: '-100%' }}
          animate={{ x: `${progress - 100}%` }}
        />
      </div>

      <p className="mt-4 text-[10px] font-bold text-gray-600 tracking-widest uppercase">
        Initializing Flux engine
      </p>
    </div>
  );
};


export default Loading;
