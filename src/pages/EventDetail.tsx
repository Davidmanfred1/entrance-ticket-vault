import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, MapPin, Clock, Users, Star, ArrowLeft } from "lucide-react";
import { useState } from "react";
import TicketBooking from "@/components/TicketBooking";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample event data (in a real app, this would come from an API/database)
import conferenceImage from "@/assets/event-conference.jpg";
import ghanaGospelImage from "@/assets/event-ghana-gospel.jpg";
import youthImage from "@/assets/event-youth.jpg";

const eventData: { [key: string]: any } = {
  "1": {
    id: "1",
    title: "Hillsong Worship Live in Concert",
    image: conferenceImage,
    date: "August 15, 2024",
    time: "7:00 PM",
    venue: "National Theatre",
    location: "Accra, Ghana",
    price: "From ₵150",
    category: "Worship",
    description: "Join us for an incredible evening of worship with Hillsong Worship team. Experience powerful worship songs that have touched millions of hearts worldwide. This concert promises to be a night of spiritual renewal and divine encounter.",
    duration: "3 hours",
    capacity: "2,500 seats",
    organizer: "Grace Chapel International",
    rating: 4.8,
    reviews: 324,
    highlights: [
      "Live worship with international Hillsong team",
      "Special guest appearances",
      "Meet & greet opportunities",
      "Exclusive merchandise available"
    ],
    ticketTypes: [
      { name: "Regular", price: 150, description: "Standard seating" },
      { name: "VIP", price: 300, description: "Front row seats + meet & greet" },
      { name: "Premium", price: 500, description: "VIP + backstage access + signed merchandise" }
    ]
  },
  "2": {
    id: "2",
    title: "Joe Mettle Gospel Night",
    image: ghanaGospelImage,
    date: "August 20, 2024",
    time: "6:00 PM",
    venue: "Trade Fair Centre",
    location: "La, Accra",
    price: "From ₵80",
    category: "Gospel",
    description: "Experience the anointed ministry of Joe Mettle in a powerful gospel concert. Known for his soul-stirring worship songs and prophetic ministry, this night promises divine healing and breakthrough.",
    duration: "4 hours",
    capacity: "5,000 seats", 
    organizer: "Overflow Incorporated",
    rating: 4.9,
    reviews: 567,
    highlights: [
      "Live performance by Joe Mettle",
      "Special guest ministers",
      "Prophetic ministry session",
      "Prayer and healing service"
    ],
    ticketTypes: [
      { name: "General", price: 80, description: "General admission" },
      { name: "Premium", price: 150, description: "Reserved seating" },
      { name: "VIP", price: 250, description: "VIP lounge + artist meet & greet" }
    ]
  },
  "3": {
    id: "3",
    title: "Youth Explosion Conference 2024",
    image: youthImage,
    date: "August 25, 2024",
    time: "9:00 AM",
    venue: "University of Ghana",
    location: "Legon, Accra",
    price: "From ₵50",
    category: "Youth",
    description: "A life-changing conference designed for young people seeking purpose, direction, and spiritual growth. Features dynamic speakers, interactive workshops, and powerful worship sessions.",
    duration: "8 hours",
    capacity: "3,000 seats",
    organizer: "Youth Alive Ministry",
    rating: 4.7,
    reviews: 189,
    highlights: [
      "Dynamic youth speakers",
      "Interactive workshops",
      "Networking opportunities",
      "Free lunch and resources"
    ],
    ticketTypes: [
      { name: "Student", price: 50, description: "Student discount rate" },
      { name: "Regular", price: 100, description: "Standard admission" },
      { name: "Group (5+)", price: 75, description: "Group discount per person" }
    ]
  }
};

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);
  
  const event = eventData[id || ""];
  
  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Event Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  if (showBooking) {
    return <TicketBooking event={event} onBack={() => setShowBooking(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          onClick={() => navigate("/")} 
          variant="ghost" 
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  {event.category}
                </Badge>
              </div>
            </div>

            {/* Event Info */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {event.title}
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{event.rating}</span>
                  <span className="text-sm">({event.reviews} reviews)</span>
                </div>
                <span>•</span>
                <span className="text-sm">Organized by {event.organizer}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">{event.date}</p>
                    <p className="text-sm text-muted-foreground">Date</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">{event.time}</p>
                    <p className="text-sm text-muted-foreground">Start Time</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">{event.venue}</p>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">{event.capacity}</p>
                    <p className="text-sm text-muted-foreground">Capacity</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-foreground mb-3">About This Event</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Event Highlights</h3>
                <ul className="space-y-2">
                  {event.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl">Book Your Tickets</CardTitle>
                <p className="text-2xl font-bold text-primary">{event.price}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {event.ticketTypes.map((ticket: any, index: number) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                      <div>
                        <p className="font-medium">{ticket.name}</p>
                        <p className="text-sm text-muted-foreground">{ticket.description}</p>
                      </div>
                      <span className="font-bold">₵{ticket.price}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => setShowBooking(true)}
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                >
                  Book Now
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Secure booking • Instant confirmation • Mobile tickets
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EventDetail;