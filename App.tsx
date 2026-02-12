import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { Services } from './components/Services';
import { Calculator } from './components/Calculator';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ui/ParticleBackground';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-200 selection:bg-electric selection:text-white relative">
      <ParticleBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Trust />
        <Services />
        <Calculator />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;