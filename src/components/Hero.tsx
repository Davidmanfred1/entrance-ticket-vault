import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-worship.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Find Your Next
            <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Faith Journey
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Discover inspiring Christian events, conferences, concerts, and worship experiences
          </p>

          {/* Search Bar */}
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Search Christian events, speakers, churches..." 
                  className="pl-10 h-12 border-0 bg-secondary/50 focus:bg-background transition-colors"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Location" 
                  className="pl-10 h-12 border-0 bg-secondary/50 focus:bg-background transition-colors"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Any date" 
                  className="pl-10 h-12 border-0 bg-secondary/50 focus:bg-background transition-colors"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <Button variant="hero" size="xl" className="px-12">
                Find Events
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default Hero;