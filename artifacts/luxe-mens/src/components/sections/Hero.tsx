import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 pt-12 lg:pt-0 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6 block">
              The Fall/Winter Collection
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-foreground leading-[1.1] mb-6">
              DEFINE <br />
              YOUR <br />
              <span className="text-gradient-gold">LEGACY</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
              Impeccable craftsmanship meets modern silhouette. Discover garments designed for the exceptional few.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#shop" 
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wide rounded-sm hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(224,170,62,0.3)] text-center"
              >
                SHOP THE COLLECTION
              </a>
              <a 
                href="#collections" 
                className="px-8 py-4 border border-white/20 text-white font-semibold tracking-wide rounded-sm hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-sm text-center"
              >
                EXPLORE EDITORIAL
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3D Abstract Silhouette / Graphic */}
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-[80vh] flex items-center justify-center mt-12 lg:mt-0 relative perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full max-w-md aspect-[3/4] animate-float"
          >
            {/* Abstract Mannequin SVG Construction */}
            <svg viewBox="0 0 400 600" className="w-full h-full drop-shadow-2xl animate-glow">
              <defs>
                <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F9F295" />
                  <stop offset="50%" stopColor="#E0AA3E" />
                  <stop offset="100%" stopColor="#8A6300" />
                </linearGradient>
                <linearGradient id="dark-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1A1A1A" />
                  <stop offset="100%" stopColor="#050505" />
                </linearGradient>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="15" stdDeviation="15" floodOpacity="0.5" />
                </filter>
              </defs>
              
              {/* Outer floating frames */}
              <motion.rect 
                x="40" y="40" width="320" height="520" 
                fill="none" stroke="url(#gold-grad)" strokeWidth="1" strokeOpacity="0.3"
                initial={{ rotate: -5 }}
                animate={{ rotate: 5 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              <motion.rect 
                x="60" y="60" width="280" height="480" 
                fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"
                initial={{ rotate: 5 }}
                animate={{ rotate: -5 }}
                transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />

              {/* Main Silhouette (Suit Jacket abstraction) */}
              <g filter="url(#shadow)">
                {/* Left Lapel */}
                <path d="M140 150 L200 350 L100 500 L80 180 Z" fill="url(#dark-grad)" stroke="url(#gold-grad)" strokeWidth="1" />
                {/* Right Lapel */}
                <path d="M260 150 L200 350 L300 500 L320 180 Z" fill="url(#dark-grad)" stroke="url(#gold-grad)" strokeWidth="1" />
                {/* Collar/Neck area */}
                <path d="M160 100 L200 180 L240 100 Z" fill="#0A0A0A" />
                {/* Tie abstract */}
                <path d="M195 180 L205 180 L210 320 L200 340 L190 320 Z" fill="url(#gold-grad)" />
                {/* Pocket Square line */}
                <line x1="260" y1="260" x2="290" y2="250" stroke="url(#gold-grad)" strokeWidth="3" />
              </g>
            </svg>
          </motion.div>
        </div>
        
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest text-muted-foreground mb-2 rotate-90 my-4">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
}
