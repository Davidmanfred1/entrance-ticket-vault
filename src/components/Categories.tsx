import { Card, CardContent } from "@/components/ui/card";
import { Music, Laugh, Drama, Calendar, Heart, Gamepad2 } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: Music,
      name: "Music",
      count: "1,234 events",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Laugh,
      name: "Comedy", 
      count: "456 events",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Drama,
      name: "Theater",
      count: "789 events", 
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Calendar,
      name: "Festivals",
      count: "234 events",
      color: "text-green-500", 
      bgColor: "bg-green-500/10"
    },
    {
      icon: Heart,
      name: "Arts & Culture",
      count: "567 events",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Gamepad2,
      name: "Sports",
      count: "890 events",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Browse Categories
          </h2>
          <p className="text-lg text-muted-foreground">
            Find events that match your interests
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