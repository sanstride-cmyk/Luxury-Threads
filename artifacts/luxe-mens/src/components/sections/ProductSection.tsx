import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { PRODUCTS, Product } from '@/lib/mock-data';
import { ProductCard } from '../shop/ProductCard';
import { QuickViewModal } from '../shop/QuickViewModal';
import { useCart } from '@/context/CartContext';

const categories = ["All", "Shirts", "T-Shirts", "Jackets", "Shoes"];

export function ProductSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  const { addToCart } = useCart();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCat = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleAddToCart = (product: Product) => {
    // Default size and color for direct add
    addToCart(product, 1, 'M', 'Black');
  };

  return (
    <section id="shop" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-6">SHOP THE EDIT</h2>
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-6">
            
            {/* Category Filter */}
            <div className="flex space-x-1 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                      : 'bg-transparent text-muted-foreground hover:text-foreground border border-transparent hover:border-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="text" 
                placeholder="Search pieces..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary/50 border border-border rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={setQuickViewProduct}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-muted-foreground">
            <Search className="mx-auto mb-4 opacity-20" size={48} />
            <p className="text-lg">No products found matching your criteria.</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
              className="mt-4 text-primary hover:underline underline-offset-4"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>

      <QuickViewModal 
        product={quickViewProduct} 
        isOpen={!!quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
      />
    </section>
  );
}
