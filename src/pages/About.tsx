import { Users, Target, Heart, Award, CheckCircle, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Đổi Mới",
      description: "Chúng tôi liên tục đổi mới để mang đến cho bạn những công nghệ và thiết kế đóng gói mới nhất."
    },
    {
      icon: Heart,
      title: "Tập Trung Khách Hàng",
      description: "Sự thành công của bạn là ưu tiên hàng đầu. Chúng tôi cam kết cung cấp dịch vụ và hỗ trợ xuất sắc."
    },
    {
      icon: Award,
      title: "Chất Lượng Tuyệt Vời",
      description: "Mọi sản phẩm đều đáp ứng tiêu chuẩn chất lượng nghiêm ngặt về độ bền và hiệu suất."
    },
    {
      icon: Users,
      title: "Đối Tác",
      description: "Chúng tôi xây dựng mối quan hệ lâu dài với khách hàng, cùng nhau phát triển như những đối tác tin cậy."
    }
  ];

  const achievements = [
    { number: "10.000+", label: "Khách Hàng Hài Lòng" },
    { number: "5+", label: "Năm Hoàn Hảo" },
    { number: "50+", label: "Dòng Sản Phẩm" },
    { number: "99%", label: "Sự Hài Lòng Khách Hàng" }
  ];

  const commitments = [
    "Vật liệu cao cấp trong tất cả sản phẩm của chúng tôi",
    "Kiểm tra nghiêm ngặt về độ bền và hiệu suất",
    "Đổi mới và phát triển sản phẩm liên tục",
    "Dịch vụ khách hàng và hỗ trợ đặc biệt",
    "Giao hàng nhanh chóng và đáng tin cậy toàn quốc",
    "Giá cả cạnh tranh mà không ảnh hưởng đến chất lượng"
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Về MisoPack
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kể từ khi thành lập, MisoPack đã tận tâm cách mạng hóa ngành đóng gói COD 
            với những dụng cụ sáng tạo, chất lượng cao giúp doanh nghiệp hoạt động hiệu quả và chuyên nghiệp hơn. 
            Chúng tôi hiểu những thách thức độc đáo của hoạt động COD và thiết kế sản phẩm để giải quyết trực tiếp các vấn đề đó.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-foreground mb-4">Tầm Nhìn Của Chúng Tôi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Trở thành nhà cung cấp hàng đầu các giải pháp đóng gói thông minh, trao quyền cho các doanh nghiệp 
                trên toàn thế giới mang đến trải nghiệm khách hàng đặc biệt thông qua các dụng cụ đóng gói sáng tạo, đáng tin cậy, 
                và hiệu quả giúp tối ưu hóa hoạt động và nâng cao tính chuyên nghiệp.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary/50 to-background border-secondary">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-foreground mb-4">Sứ Mệnh Của Chúng Tôi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Thiết kế và sản xuất dụng cụ đóng gói cao cấp giải quyết những thách thức thực tế 
                mà các doanh nghiệp COD gặp phải. Chúng tôi cam kết cung cấp sản phẩm kết hợp 
                chức năng, độ bền và sự đổi mới cùng với dịch vụ khách hàng đặc biệt.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Giá Trị Cốt Lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Thành Tích Của Chúng Tôi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Commitments */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Cam Kết Của Chúng Tôi
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-card rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Tại Sao Chọn MisoPack?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Chuyên Môn Ngành
              </h3>
              <p className="text-muted-foreground text-sm">
                Nhiều năm kinh nghiệm trong việc hiểu và giải quyết các thách thức đóng gói COD.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Dịch Vụ Đáng Tin Cậy
              </h3>
              <p className="text-muted-foreground text-sm">
                Giao hàng nhanh, hỗ trợ khách hàng xuất sắc và đổi trả không rắc rối.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Kết Quả Đã Chứng Minh
              </h3>
              <p className="text-muted-foreground text-sm">
                Hàng nghìn khách hàng hài lòng đã cải thiện hoạt động với dụng cụ của chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;