import React from 'react';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="bg-background pt-24 pb-12 border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl tracking-widest text-gradient-gold mb-6">LUXE MEN</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Curating the finest garments for the modern gentleman. Elevate your presence with our exclusive collections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Formal Wear</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Casual Staples</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Footwear</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-6">Client Care</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Bespoke Tailoring</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-secondary border border-border rounded-l-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
              />
              <button className="bg-primary text-primary-foreground px-4 py-3 rounded-r-md hover:bg-primary/90 transition-colors flex items-center justify-center">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LUXE MEN. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
