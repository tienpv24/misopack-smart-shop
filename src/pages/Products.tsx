import { useState } from "react";
import { Star, ShoppingCart, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import tapeDispenser from "@/assets/tape-dispenser.jpg";
import boxCutter from "@/assets/box-cutter.jpg";
import packagingScale from "@/assets/packaging-scale.jpg";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Professional Tape Dispenser",
      price: 24.99,
      originalPrice: 29.99,
      category: "dispensers",
      image: tapeDispenser,
      description: "Heavy-duty tape dispenser with ergonomic design. Perfect for high-volume packaging operations.",
      features: ["Ergonomic grip", "Non-slip base", "Adjustable tension", "Compatible with standard tapes"],
      rating: 4.9,
      reviews: 156,
      inStock: true
    },
    {
      id: 2,
      name: "Safety Box Cutter",
      price: 18.99,
      originalPrice: 22.99,
      category: "cutters",
      image: boxCutter,
      description: "Professional box cutter with retractable blade and safety lock. Essential for safe package opening.",
      features: ["Retractable blade", "Safety lock", "Ergonomic handle", "Replaceable blades"],
      rating: 4.8,
      reviews: 203,
      inStock: true
    },
    {
      id: 3,
      name: "Digital Packaging Scale",
      price: 89.99,
      originalPrice: 109.99,
      category: "scales",
      image: packagingScale,
      description: "Accurate digital scale with large display. Perfect for weighing packages up to 50kg.",
      features: ["50kg capacity", "Large LCD display", "Tare function", "Multiple units"],
      rating: 4.7,
      reviews: 89,
      inStock: true
    },
    {
      id: 4,
      name: "Premium Tape Dispenser Set",
      price: 45.99,
      originalPrice: 55.99,
      category: "dispensers",
      image: tapeDispenser,
      description: "Complete set with 2 tape dispensers and 6 rolls of premium packing tape.",
      features: ["2 dispensers included", "6 tape rolls", "Heavy-duty construction", "Commercial grade"],
      rating: 4.9,
      reviews: 124,
      inStock: true
    },
    {
      id: 5,
      name: "Industrial Box Cutter Kit",
      price: 32.99,
      originalPrice: 39.99,
      category: "cutters",
      image: boxCutter,
      description: "Professional kit with box cutter, 10 replacement blades, and safety storage case.",
      features: ["10 replacement blades", "Safety storage case", "Professional grade", "Non-slip grip"],
      rating: 4.8,
      reviews: 167,
      inStock: false
    },
    {
      id: 6,
      name: "Portable Packaging Scale",
      price: 59.99,
      originalPrice: 69.99,
      category: "scales",
      image: packagingScale,
      description: "Compact and portable scale perfect for mobile COD operations. Battery powered.",
      features: ["Battery powered", "Compact design", "20kg capacity", "Backlit display"],
      rating: 4.6,
      reviews: 78,
      inStock: true
    }
  ];

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === "all" || product.category === filterCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleAddToCart = (product: typeof products[0]) => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our complete range of professional COD packaging tools. 
            Each product is designed to improve efficiency and professionalism in your operations.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="dispensers">Tape Dispensers</SelectItem>
              <SelectItem value="cutters">Box Cutters</SelectItem>
              <SelectItem value="scales">Scales</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-medium transition-all duration-300">
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? "fill-primary text-primary" 
                          : "text-muted-foreground"
                      }`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({product.reviews})
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {product.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="group"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;