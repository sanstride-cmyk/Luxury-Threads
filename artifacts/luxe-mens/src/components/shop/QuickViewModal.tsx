import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart, Check } from 'lucide-react';
import { Product } from '@/lib/mock-data';
import { useCart } from '@/context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const { addToCart, setIsOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Black', hex: '#1a1a1a' },
    { name: 'Navy', hex: '#1e293b' },
    { name: 'Camel', hex: '#d4a373' },
  ];

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    onClose();
    setIsOpen(true);
    // Reset state for next open
    setTimeout(() => {
      setQuantity(1);
      setSelectedSize('M');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-card border border-border shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors"
            >
              <X size={18} />
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 relative bg-secondary h-64 md:h-auto">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isNew && (
                <div className="absolute top-6 left-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 tracking-wider rounded-sm">
                  NEW ARRIVAL
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
              <div className="mb-2 text-primary text-sm font-medium tracking-widest uppercase">
                {product.category}
              </div>
              <h2 className="font-display text-3xl mb-4 text-foreground">{product.name}</h2>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-2xl font-medium text-foreground">${product.price.toFixed(2)}</span>
                <div className="flex items-center text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                  <span className="text-muted-foreground text-sm ml-2">({product.rating})</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Colors */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-foreground">Color</span>
                  <span className="text-sm text-muted-foreground">{selectedColor}</span>
                </div>
                <div className="flex space-x-3">
                  {colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        selectedColor === color.name ? 'ring-2 ring-primary ring-offset-2 ring-offset-card' : 'hover:scale-110'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor === color.name && <Check size={16} className="text-white mix-blend-difference" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-foreground">Size</span>
                  <button className="text-sm text-primary hover:underline underline-offset-4">Size Guide</button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-sm font-medium border rounded-md transition-all ${
                        selectedSize === size 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto flex space-x-4">
                <div className="flex items-center border border-border rounded-md bg-background w-32">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex-1 py-3 text-muted-foreground hover:text-foreground transition-colors flex justify-center"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-sm font-medium w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex-1 py-3 text-muted-foreground hover:text-foreground transition-colors flex justify-center"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
                >
                  ADD TO CART
                </button>
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-14 flex items-center justify-center border rounded-md transition-colors ${
                    isWishlisted ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                  }`}
                >
                  <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
