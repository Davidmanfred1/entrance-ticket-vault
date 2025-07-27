import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";
import festivalImage from "@/assets/event-festival.jpg";
import comedyImage from "@/assets/event-comedy.jpg";
import theaterImage from "@/assets/event-theater.jpg";

const FeaturedEvents = () => {
  const featuredEvents = [
    {
      id: "1",
      title: "Summer Music Festival 2024",
      image: festivalImage,
      date: "July 15, 2024",
      time: "6:00 PM",
      venue: "Central Park",
      location: "New York, NY",
      price: "From $89",
      category: "Music"
    },
    {
      id: "2", 
      title: "Comedy Night with Dave Johnson",
      image: comedyImage,
      date: "July 20, 2024",
      time: "8:00 PM",
      venue: "Laugh Factory",
      location: "Los Angeles, CA",
      price: "From $45",
      category: "Comedy"
    },
    {
      id: "3",
      title: "Shakespeare in the Park: Hamlet",
      image: theaterImage,
      date: "July 25, 2024", 
      time: "7:30 PM",
      venue: "Delacorte Theater",
      location: "New York, NY",
      price: "From $65",
      category: "Theater"
    },
    {
      id: "4",
      title: "Electronic Dance Festival",
      image: festivalImage,
      date: "August 5, 2024",
      time: "9:00 PM", 
      venue: "Miami Beach",
      location: "Miami, FL",
      price: "From $120",
      category: "Music"
    },
    {
      id: "5",
      title: "Stand-up Comedy Showcase",
      image: comedyImage,
      date: "August 10, 2024",
      time: "8:30 PM",
      venue: "Comedy Club",
      location: "Chicago, IL", 
      price: "From $35",
      category: "Comedy"
    },
    {
      id: "6",
      title: "Broadway Musical: The Lion King",
      image: theaterImage,
      date: "August 15, 2024",
      time: "7:00 PM",
      venue: "Minskoff Theatre",
      location: "New York, NY",
      price: "From $89",
      category: "Theater"
    }
  ];

  const handleViewDetails = (id: string) => {
    console.log("View details for event:", id);
    // This would navigate to the event detail page
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these amazing experiences happening near you
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