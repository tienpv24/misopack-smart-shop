import { Users, Target, Heart, Award, CheckCircle, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly innovate to bring you the latest in packaging technology and design."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your success is our priority. We're committed to providing exceptional service and support."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every product meets our rigorous quality standards for durability and performance."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build lasting relationships with our clients, growing together as trusted partners."
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "5+", label: "Years of Excellence" },
    { number: "50+", label: "Product Range" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  const commitments = [
    "Premium quality materials in all our products",
    "Rigorous testing for durability and performance",
    "Continuous innovation and product development",
    "Exceptional customer service and support",
    "Fast and reliable shipping nationwide",
    "Competitive pricing without compromising quality"
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About MisoPack
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since our founding, MisoPack has been dedicated to revolutionizing the COD packaging industry 
            with innovative, high-quality tools that help businesses operate more efficiently and professionally. 
            We understand the unique challenges of COD operations and design our products to address them directly.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading provider of smart packaging solutions, empowering businesses 
                worldwide to deliver exceptional customer experiences through innovative, reliable, 
                and efficient packaging tools that streamline operations and enhance professionalism.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary/50 to-background border-secondary">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To design and manufacture premium packaging tools that solve real-world challenges 
                faced by COD businesses. We are committed to delivering products that combine 
                functionality, durability, and innovation while providing exceptional customer service.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
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
            Our Achievements
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
            Our Commitments
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
            Why Choose MisoPack?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Industry Expertise
              </h3>
              <p className="text-muted-foreground text-sm">
                Years of experience in understanding and solving COD packaging challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Reliable Service
              </h3>
              <p className="text-muted-foreground text-sm">
                Fast shipping, excellent customer support, and hassle-free returns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Proven Results
              </h3>
              <p className="text-muted-foreground text-sm">
                Thousands of satisfied customers who have improved their operations with our tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;