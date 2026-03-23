export interface Product {
  id: string;
  name: string;
  category: "Shirts" | "T-Shirts" | "Jackets" | "Shoes";
  price: number;
  rating: number;
  image: string;
  description: string;
  isNew?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Midnight Formal Shirt",
    category: "Shirts",
    price: 140,
    rating: 5.0,
    /* luxury dark men's formal shirt */
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    description: "Impeccably tailored from fine Italian cotton, designed for the modern evening affair.",
    isNew: true
  },
  {
    id: "p2",
    name: "Oxford Classic Shirt",
    category: "Shirts",
    price: 120,
    rating: 4.8,
    /* classic men's white oxford shirt */
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    description: "The quintessential white shirt, elevated with mother-of-pearl buttons and a sharp collar."
  },
  {
    id: "p3",
    name: "Linen Breeze Shirt",
    category: "Shirts",
    price: 95,
    rating: 4.6,
    /* men's linen shirt lifestyle */
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80",
    description: "Breathable, lightweight linen sourced from Normandy for effortless summer elegance."
  },
  {
    id: "p4",
    name: "Premium V-Neck Tee",
    category: "T-Shirts",
    price: 65,
    rating: 4.7,
    /* men's premium black v neck t-shirt */
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    description: "A masterclass in basics. Woven from Pima cotton for an ultra-soft drape."
  },
  {
    id: "p5",
    name: "Essential Crew Tee",
    category: "T-Shirts",
    price: 55,
    rating: 4.9,
    /* men's essential white t-shirt */
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80",
    description: "Your daily foundation. Retains its shape and deep color wash after wash."
  },
  {
    id: "p6",
    name: "Graphic Art Tee",
    category: "T-Shirts",
    price: 70,
    rating: 4.5,
    /* abstract minimalist graphic tee */
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80",
    description: "Subtle geometric branding printed on our signature heavyweight jersey."
  },
  {
    id: "p7",
    name: "Tailored Blazer",
    category: "Jackets",
    price: 320,
    rating: 4.9,
    /* high end men's tailored blazer */
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    description: "Unstructured yet razor-sharp. Transitions seamlessly from boardroom to bar."
  },
  {
    id: "p8",
    name: "Leather Biker Jacket",
    category: "Jackets",
    price: 480,
    rating: 5.0,
    /* luxury men's leather biker jacket */
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    description: "Hand-finished full-grain leather, featuring bespoke gunmetal hardware."
  },
  {
    id: "p9",
    name: "Wool Overcoat",
    category: "Jackets",
    price: 550,
    rating: 4.8,
    /* elegant men's wool overcoat */
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600&q=80",
    description: "A commanding silhouette crafted from heavyweight virgin wool blend."
  },
  {
    id: "p10",
    name: "Oxford Derby Shoes",
    category: "Shoes",
    price: 280,
    rating: 4.7,
    /* luxury men's oxford leather shoes */
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    description: "Goodyear welted construction with hand-burnished calfskin leather."
  },
  {
    id: "p11",
    name: "Chelsea Boots",
    category: "Shoes",
    price: 320,
    rating: 4.9,
    /* premium men's suede chelsea boots */
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&q=80",
    description: "Italian suede with a sleek almond toe and durable leather sole."
  },
  {
    id: "p12",
    name: "Loafer Classics",
    category: "Shoes",
    price: 240,
    rating: 4.6,
    /* luxury men's leather loafers */
    image: "https://images.unsplash.com/photo-1614252209311-1da3296c0ee9?w=600&q=80",
    description: "Slip into sophistication. Features a signature gold-tone horsebit detail."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Arthur Pendelton",
    location: "London, UK",
    rating: 5,
    text: "The quality of the Wool Overcoat is exceptional. It commands presence while offering unparalleled comfort. A true investment piece.",
    /* distinguished mature man portrait */
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "New York, USA",
    rating: 5,
    text: "LUXE MEN redefined my wardrobe. The tailored blazer fits perfectly off the rack. The attention to detail in the stitching is sublime.",
    /* stylish young professional portrait */
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
  },
  {
    id: 3,
    name: "Julian Rossi",
    location: "Milan, IT",
    rating: 4,
    text: "Excellent craftsmanship on the Chelsea boots. The suede is buttery soft. Shipping was remarkably fast in elegant packaging.",
    /* elegant italian man portrait */
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80"
  }
];
