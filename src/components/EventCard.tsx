import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  price: string;
  category: string;
  onViewDetails?: (id: string) => void;
}

const EventCard = ({ 
  id, 
  title, 
  image, 
  date, 
  time, 
  venue, 
  location, 
  price, 
  category,
  onViewDetails 
}: EventCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0 bg-gradient-card">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-background/90 backdrop-blur-sm text-foreground text-sm font-bold px-3 py-1 rounded-full">
            {price}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-accent" />
            <span>{date}</span>
            <Clock className="h-4 w-4 text-accent ml-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="line-clamp-1">{venue}, {location}</span>
          </div>
        </div>
        
        <Button 
          variant="default" 
          className="w-full"
          onClick={() => onViewDetails?.(id)}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;