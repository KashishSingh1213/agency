import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('FLOW SYNCHRONIZED. WE WILL REACH OUT SOON.');
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 relative bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Connect</span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-12">
              START <br />
              <span className="text-gradient">THE FLOW.</span>
            </h2>

            <div className="space-y-12">
              <div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-4">Email</p>
                <a href="mailto:hello@flux-agency.co" className="text-3xl font-black hover:text-primary transition-colors">
                  hello@flux-agency.co
                </a>
              </div>

              <div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-4">Office</p>
                <p className="text-3xl font-black">SAN FRANCISCO, CA</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-2 group">
                <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/10 py-4 text-2xl font-black focus:outline-none focus:border-primary transition-colors placeholder:text-gray-800"
                  placeholder="Full name"
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/10 py-4 text-2xl font-black focus:outline-none focus:border-primary transition-colors placeholder:text-gray-800"
                  placeholder="name@email.com"
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase ml-1">The Goal</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-white/10 py-4 text-2xl font-black focus:outline-none focus:border-primary transition-colors placeholder:text-gray-800 resize-none"
                  placeholder="Tell us about it"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-6 text-2xl font-black tracking-tighter"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Contact;

