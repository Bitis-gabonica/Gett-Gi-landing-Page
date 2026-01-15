import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Produit', href: '#produit' },
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Pour qui', href: '#pour-qui' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel h-20' : 'h-24 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo Textuel Minimaliste */}
        <div className="hover:opacity-60 transition-opacity cursor-pointer">
          <span className="text-xl font-bold tracking-tight text-black">GETT GI</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-text-secondary hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="hidden md:flex items-center justify-center bg-black text-white text-sm font-bold px-6 py-3 rounded-full transition-all hover:bg-gray-800 hover:scale-105 shadow-sm"
          >
            <span>Demander une démo</span>
          </a>
          
          <button className="md:hidden text-black p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};