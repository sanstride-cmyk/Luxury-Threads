import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

export function CartDrawer() {
  const { isOpen, setIsOpen, items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Checkout Unavailable",
      description: "Demo mode. Checkout is coming soon.",
      variant: "default",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-xl tracking-widest text-gradient-gold flex items-center gap-2">
                <ShoppingBag size={20} /> YOUR CART
              </h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
                  <ShoppingBag size={48} className="opacity-20" />
                  <p>Your cart is empty.</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-primary hover:underline underline-offset-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={`${item.product.id}-${item.size}-${item.color}`}
                    className="flex gap-4 p-4 rounded-xl border border-white/5 bg-secondary/30"
                  >
                    <div className="w-24 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-foreground text-sm line-clamp-1 pr-2">{item.product.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Size: {item.size} | Color: {item.color}
                        </p>
                        <p className="text-primary font-medium mt-2">${item.product.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-border rounded-md bg-background">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 bg-background/50 backdrop-blur-md">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-display text-2xl text-foreground">${cartTotal.toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold tracking-wide rounded-md hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
                >
                  SECURE CHECKOUT
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
