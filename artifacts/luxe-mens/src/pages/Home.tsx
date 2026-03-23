import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { FeaturedCollections } from '@/components/sections/FeaturedCollections';
import { ProductSection } from '@/components/sections/ProductSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { CartDrawer } from '@/components/shop/CartDrawer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <CartDrawer />
      
      <main className="flex-1">
        <Hero />
        <FeaturedCollections />
        <ProductSection />
        
        {/* Banner Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black">
            {/* dark fashion abstract */}
            <img 
              src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1600&q=80" 
              alt="Editorial Banner" 
              className="w-full h-full object-cover opacity-40 grayscale"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6">BESPOKE TAILORING</h2>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
              Experience the ultimate luxury. Book a private consultation with our master tailors to create garments uniquely yours.
            </p>
            <button className="px-10 py-4 border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm tracking-widest text-sm">
              BOOK APPOINTMENT
            </button>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
