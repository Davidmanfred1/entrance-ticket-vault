import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import conferenceImage from "@/assets/event-conference.jpg";
import ghanaGospelImage from "@/assets/event-ghana-gospel.jpg";
import youthImage from "@/assets/event-youth.jpg";

const FeaturedEvents = () => {
  const navigate = useNavigate();
  
  const featuredEvents = [
    {
      id: "1",
      title: "Hillsong Worship Live in Concert",
      image: conferenceImage,
      date: "August 15, 2024",
      time: "7:00 PM",
      venue: "National Theatre",
      location: "Accra, Ghana",
      price: "From ₵150",
      category: "Worship"
    },
    {
      id: "2", 
      title: "Joe Mettle Gospel Night",
      image: ghanaGospelImage,
      date: "August 20, 2024",
      time: "6:00 PM",
      venue: "Trade Fair Centre",
      location: "La, Accra",
      price: "From ₵80",
      category: "Gospel"
    },
    {
      id: "3",
      title: "Youth Explosion Conference 2024",
      image: youthImage,
      date: "August 25, 2024", 
      time: "9:00 AM",
      venue: "University of Ghana",
      location: "Legon, Accra",
      price: "From ₵50",
      category: "Youth"
    },
    {
      id: "4",
      title: "Diana Hamilton Worship Experience",
      image: ghanaGospelImage,
      date: "September 5, 2024",
      time: "6:30 PM", 
      venue: "Perez Chapel",
      location: "Dzorwulu, Accra",
      price: "From ₵100",
      category: "Worship"
    },
    {
      id: "5",
      title: "Passion Conference: Heart of Worship",
      image: conferenceImage,
      date: "September 10, 2024",
      time: "8:00 AM",
      venue: "Accra International Conference Centre",
      location: "Ridge, Accra", 
      price: "From ₵200",
      category: "Conference"
    },
    {
      id: "6",
      title: "Sonnie Badu Live Ministration",
      image: ghanaGospelImage,
      date: "September 15, 2024",
      time: "5:00 PM",
      venue: "El-Roi Chapel",
      location: "Tema, Ghana",
      price: "From ₵120",
      category: "Ministry"
    }
  ];

  const handleViewDetails = (id: string) => {
    navigate(`/event/${id}`);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Christian Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands in worship, fellowship, and spiritual growth experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredEvents.map((event) => (
            <EventCard
              key={event.id}
              {...event}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;