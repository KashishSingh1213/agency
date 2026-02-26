import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Agency = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-10%' });

    const ethos = [
        { title: 'HYPER-FOCUS', text: 'We don\'t do everything. We do one thing perfectly: building the future.' },
        { title: 'RADICAL CLARITY', text: 'No buzzwords. No fluff. Just high-performance results.' },
        { title: 'LIQUID MOTION', text: 'Interfaces that feel alive, intuitive, and remarkably fast.' }
    ];

    return (
        <section id="agency" className="py-16 bg-dark relative overflow-hidden">
            {/* Background large text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
                THE AGENCY / THE AGENCY / THE AGENCY
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-5">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Evolution</span>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                                A NEW <br />
                                <span className="text-gradient">STANDARD</span> <br />
                                OF FLUX.
                            </h2>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="grid gap-12">
                            {ethos.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                                    className="flex gap-8 group"
                                >
                                    <div className="text-[10px] font-black text-primary mt-2">0{i + 1}</div>
                                    <div>
                                        <h3 className="text-2xl font-black tracking-tighter mb-4 group-hover:text-primary transition-colors cursor-default">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md">
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agency;
