import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';

const collections = [
  {
    title: "SHIRTS",
    count: "24 Items",
    image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=500&q=80"
  },
  {
    title: "JACKETS",
    count: "18 Items",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80"
  },
  {
    title: "SHOES",
    count: "12 Items",
    image: "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?w=500&q=80"
  },
  {
    title: "ACCESSORIES",
    count: "36 Items",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=500&q=80"
  }
];

export function FeaturedCollections() {
  return (
    <section id="collections" className="py-24 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">THE CATEGORIES</h2>
            <p className="text-muted-foreground leading-relaxed">
              Explore our curated selections. Each piece is designed with an uncompromising commitment to quality and timeless aesthetics.
            </p>
          </div>
          <a href="#shop" className="hidden md:flex items-center text-primary font-medium tracking-wide hover:text-white transition-colors group mt-6 md:mt-0">
            VIEW ALL <ArrowUpRight className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item, i) => (
            <TiltCard key={item.title} intensity={5}>
              <a href="#shop" className="group block relative h-[400px] rounded-xl overflow-hidden glass-panel">
                <div className="absolute inset-0 bg-black/50 z-10 transition-colors duration-500 group-hover:bg-black/20"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  <span className="text-xs font-bold tracking-widest text-primary mb-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {item.count}
                  </span>
                  <div className="flex justify-between items-center">
                    <h3 className="font-display text-2xl text-white tracking-wide">{item.title}</h3>
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </a>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
