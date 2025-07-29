import { Link } from "react-router-dom";
import { ArrowRight, Package, Shield, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-packaging.jpg";
import tapeDispenser from "@/assets/tape-dispenser.jpg";
import boxCutter from "@/assets/box-cutter.jpg";
import packagingScale from "@/assets/packaging-scale.jpg";

const Home = () => {
  const features = [
    {
      icon: Package,
      title: "Chất Lượng Chuyên Nghiệp",
      description: "Dụng cụ đóng gói cao cấp được thiết kế cho doanh nghiệp COD mọi quy mô"
    },
    {
      icon: Shield,
      title: "Đáng Tin Cậy & Bền Bỉ",
      description: "Được chế tạo để sử dụng lâu dài với vật liệu chất lượng cao và thủ công tinh xảo"
    },
    {
      icon: Truck,
      title: "Giao Hàng Nhanh Chóng",
      description: "Giao hàng nhanh để doanh nghiệp của bạn hoạt động trơn tru"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Máy Cắt Băng Keo Chuyên Nghiệp",
      price: "599.000đ",
      image: tapeDispenser,
      description: "Máy cắt băng keo hạng nặng cho đóng gói hiệu quả"
    },
    {
      id: 2,
      name: "Dao Cắt Thùng An Toàn",
      price: "459.000đ",
      image: boxCutter,
      description: "Dao cắt thùng chuyên nghiệp với tính năng an toàn"
    },
    {
      id: 3,
      name: "Cân Đóng Gói Điện Tử",
      price: "2.199.000đ",
      image: packagingScale,
      description: "Cân điện tử chính xác cho việc cân kiện hàng"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Dụng Cụ <span className="text-primary">Đóng Gói COD</span> Thông Minh
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Giải pháp đóng gói chuyên nghiệp cho doanh nghiệp hiện đại. 
                  Khám phá các dụng cụ sáng tạo được thiết kế để tối ưu hóa hoạt động COD của bạn.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/products">
                    Mua Ngay
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Tìm Hiểu Thêm</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="MisoPack Packaging Tools" 
                className="rounded-lg shadow-strong w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tại Sao Chọn MisoPack?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi cung cấp dụng cụ đóng gói cao cấp giúp doanh nghiệp hoạt động hiệu quả 
              và chuyên nghiệp hơn trong thị trường COD.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sản Phẩm Nổi Bật
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Khám phá các dụng cụ đóng gói phổ biến nhất được thiết kế cho hoạt động COD chuyên nghiệp.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-medium transition-all duration-300">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.9)</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <Button size="sm">Thêm Vào Giỏ</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/products">Xem Tất Cả Sản Phẩm</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn Sàng Nâng Cấp Dụng Cụ Đóng Gói?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Hàng nghìn doanh nghiệp đã tin tưởng MisoPack cho nhu cầu đóng gói COD. 
            Dụng cụ chuyên nghiệp, dịch vụ xuất sắc, kết quả đảm bảo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link to="/products">
                Mua Ngay
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Liên Hệ Ngay</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;