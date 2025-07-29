import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">MisoPack</h3>
            <p className="text-muted-foreground">
              Dụng cụ đóng gói COD thông minh dành cho doanh nghiệp hiện đại. 
              Giải pháp đáng tin cậy, hiệu quả và sáng tạo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Liên Kết</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Trang Chủ
              </Link>
              <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                Sản Phẩm
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                Về Chúng Tôi
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Liên Hệ
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Sản Phẩm</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Máy Cắt Băng Keo
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Dao Cắt Thùng Carton
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cân Đóng Gói
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Dụng Cụ Niêm Phong
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Thông Tin Liên Hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+84 (028) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@misopack.vn</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  123 Đường Kinh Doanh, Quận 1<br />
                  TP. Hồ Chí Minh, Việt Nam
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 MisoPack. Bảo lưu mọi quyền. | Chính Sách Bảo Mật | Điều Khoản Dịch Vụ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;