import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Agency from './components/Agency';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Agency />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
