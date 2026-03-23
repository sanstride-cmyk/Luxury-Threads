import React from 'react';
import { Eye, ShoppingBag } from 'lucide-react';
import { Product } from '@/lib/mock-data';
import { TiltCard } from '../ui/TiltCard';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onQuickView, onAddToCart }: ProductCardProps) {
  return (
    <TiltCard intensity={10} className="h-full">
      <div className="group h-full flex flex-col bg-card border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-500 shadow-xl shadow-black/40">
        
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          {product.isNew && (
            <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 tracking-wider rounded-sm">
              NEW
            </div>
          )}
          
          <img 
            src={product.image} 
            alt={product.name} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
            <button 
              onClick={() => onAddToCart(product)}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg"
              title="Add to Cart"
            >
              <ShoppingBag size={20} />
            </button>
            <button 
              onClick={() => onQuickView(product)}
              className="w-12 h-12 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg backdrop-blur-md delay-75"
              title="Quick View"
            >
              <Eye size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1 relative z-10 bg-card">
          <div className="flex justify-between items-start mb-2">
            <p className="text-xs text-primary font-medium tracking-widest uppercase">{product.category}</p>
          </div>
          <h3 className="text-foreground font-display text-lg mb-2 line-clamp-1">{product.name}</h3>
          
          <div className="mt-auto flex justify-between items-end">
            <span className="text-foreground font-medium text-lg">${product.price.toFixed(2)}</span>
            <div className="w-8 h-[1px] bg-primary/50 group-hover:w-16 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
