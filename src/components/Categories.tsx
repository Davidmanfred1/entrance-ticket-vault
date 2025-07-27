import { Card, CardContent } from "@/components/ui/card";
import { Music, Users, BookOpen, Heart, Church, Baby } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: Music,
      name: "Worship & Concerts",
      count: "324 events",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: BookOpen,
      name: "Conferences", 
      count: "156 events",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Users,
      name: "Bible Study",
      count: "289 events", 
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Church,
      name: "Church Services",
      count: "834 events",
      color: "text-orange-500", 
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Heart,
      name: "Fellowship & Community",
      count: "467 events",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Baby,
      name: "Youth & Children",
      count: "190 events",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Event Categories
          </h2>
          <p className="text-lg text-muted-foreground">
            Find Christian events that align with your spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0 bg-gradient-card"
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;