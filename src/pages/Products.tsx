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
      name: "Máy Cắt Băng Keo Chuyên Nghiệp",
      price: 599000,
      originalPrice: 729000,
      category: "dispensers",
      image: tapeDispenser,
      description: "Máy cắt băng keo hạng nặng với thiết kế ergonomic. Hoàn hảo cho các hoạt động đóng gói khối lượng lớn.",
      features: ["Tay cầm ergonomic", "Đế chống trượt", "Điều chỉnh lực căng", "Tương thích băng keo tiêu chuẩn"],
      rating: 4.9,
      reviews: 156,
      inStock: true
    },
    {
      id: 2,
      name: "Dao Cắt Thùng An Toàn",
      price: 459000,
      originalPrice: 559000,
      category: "cutters",
      image: boxCutter,
      description: "Dao cắt thùng chuyên nghiệp với lưỡi dao có thể thu vào và khóa an toàn. Thiết yếu cho việc mở kiện hàng an toàn.",
      features: ["Lưỡi dao thu vào", "Khóa an toàn", "Tay cầm ergonomic", "Lưỡi dao có thể thay thế"],
      rating: 4.8,
      reviews: 203,
      inStock: true
    },
    {
      id: 3,
      name: "Cân Đóng Gói Điện Tử",
      price: 2199000,
      originalPrice: 2699000,
      category: "scales",
      image: packagingScale,
      description: "Cân điện tử chính xác với màn hình lớn. Hoàn hảo cho việc cân kiện hàng lên đến 50kg.",
      features: ["Tải trọng 50kg", "Màn hình LCD lớn", "Chức năng Tare", "Nhiều đơn vị đo"],
      rating: 4.7,
      reviews: 89,
      inStock: true
    },
    {
      id: 4,
      name: "Bộ Máy Cắt Băng Keo Cao Cấp",
      price: 1119000,
      originalPrice: 1359000,
      category: "dispensers",
      image: tapeDispenser,
      description: "Bộ sản phẩm hoàn chỉnh với 2 máy cắt băng keo và 6 cuộn băng keo cao cấp.",
      features: ["Bao gồm 2 máy cắt", "6 cuộn băng keo", "Cấu trúc hạng nặng", "Cấp độ thương mại"],
      rating: 4.9,
      reviews: 124,
      inStock: true
    },
    {
      id: 5,
      name: "Bộ Dao Cắt Thùng Công Nghiệp",
      price: 799000,
      originalPrice: 969000,
      category: "cutters",
      image: boxCutter,
      description: "Bộ dụng cụ chuyên nghiệp với dao cắt thùng, 10 lưỡi dao thay thế và hộp đựng an toàn.",
      features: ["10 lưỡi dao thay thế", "Hộp đựng an toàn", "Cấp độ chuyên nghiệp", "Tay cầm chống trượt"],
      rating: 4.8,
      reviews: 167,
      inStock: false
    },
    {
      id: 6,
      name: "Cân Đóng Gói Di Động",
      price: 1459000,
      originalPrice: 1699000,
      category: "scales",
      image: packagingScale,
      description: "Cân nhỏ gọn và di động hoàn hảo cho hoạt động COD di động. Chạy bằng pin.",
      features: ["Chạy bằng pin", "Thiết kế nhỏ gọn", "Tải trọng 20kg", "Màn hình có đèn nền"],
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
      title: "Đã Thêm Vào Giỏ Hàng",
      description: `${product.name} đã được thêm vào giỏ hàng của bạn.`,
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sản Phẩm Của Chúng Tôi
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Khám phá dòng sản phẩm đầy đủ của chúng tôi về dụng cụ đóng gói COD chuyên nghiệp. 
            Mỗi sản phẩm được thiết kế để cải thiện hiệu quả và tính chuyên nghiệp trong hoạt động của bạn.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Danh mục" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất Cả Danh Mục</SelectItem>
              <SelectItem value="dispensers">Máy Cắt Băng Keo</SelectItem>
              <SelectItem value="cutters">Dao Cắt Thùng</SelectItem>
              <SelectItem value="scales">Cân Đóng Gói</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sắp xếp theo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Tên A-Z</SelectItem>
              <SelectItem value="price-low">Giá: Thấp đến Cao</SelectItem>
              <SelectItem value="price-high">Giá: Cao đến Thấp</SelectItem>
              <SelectItem value="rating">Đánh Giá Cao Nhất</SelectItem>
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
                    Tiết kiệm {((product.originalPrice - product.price) / 1000).toFixed(0)}k
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded font-medium">
                      Hết Hàng
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
                  <h4 className="text-sm font-medium text-foreground mb-2">Tính năng:</h4>
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
                        {(product.price / 1000).toFixed(0)}k VNĐ
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          {(product.originalPrice / 1000).toFixed(0)}k VNĐ
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
                    {product.inStock ? "Thêm Vào Giỏ" : "Hết Hàng"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Không tìm thấy sản phẩm phù hợp với tiêu chí của bạn.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;