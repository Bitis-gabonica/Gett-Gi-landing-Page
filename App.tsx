import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Challenges } from './components/Challenges';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Technology } from './components/Technology';
import { Audience } from './components/Audience';
import { Impact } from './components/Impact';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Background } from './components/Background';

function App() {
  return (
    <div className="relative min-h-screen bg-transparent selection:bg-black/10 selection:text-black">
      <Background />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Challenges />
          <Solution />
          <Features />
          <HowItWorks />
          
          <Technology />

          <Audience />
          
          <Impact />
          
          <Pricing />
          
          <Contact />

        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;