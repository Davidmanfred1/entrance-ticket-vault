import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ArrowLeft, CreditCard, Shield, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "./Header";
import Footer from "./Footer";

interface TicketBookingProps {
  event: any;
  onBack: () => void;
}

const TicketBooking = ({ event, onBack }: TicketBookingProps) => {
  const [selectedTickets, setSelectedTickets] = useState<{ [key: string]: number }>({});
  const [step, setStep] = useState(1); // 1: Select tickets, 2: Personal info, 3: Payment, 4: Confirmation
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    paymentMethod: "",
  });
  const { toast } = useToast();

  const handleTicketChange = (ticketName: string, quantity: number) => {
    setSelectedTickets(prev => ({
      ...prev,
      [ticketName]: Math.max(0, quantity)
    }));
  };

  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce((sum, qty) => sum + qty, 0);
  };

  const getTotalPrice = () => {
    return event.ticketTypes.reduce((total: number, ticket: any) => {
      const quantity = selectedTickets[ticket.name] || 0;
      return total + (ticket.price * quantity);
    }, 0);
  };

  const getServiceFee = () => {
    return Math.round(getTotalPrice() * 0.03); // 3% service fee
  };

  const getFinalTotal = () => {
    return getTotalPrice() + getServiceFee();
  };

  const handleContinue = () => {
    if (step === 1) {
      if (getTotalTickets() === 0) {
        toast({
          title: "Select Tickets",
          description: "Please select at least one ticket to continue.",
          variant: "destructive"
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        toast({
          title: "Complete Information",
          description: "Please fill in all required fields.",
          variant: "destructive"
        });
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!formData.paymentMethod) {
        toast({
          title: "Select Payment Method",
          description: "Please select a payment method.",
          variant: "destructive"
        });
        return;
      }
      // Simulate payment processing
      setTimeout(() => {
        setStep(4);
        toast({
          title: "Booking Confirmed!",
          description: "Your tickets have been booked successfully. Check your email for confirmation.",
        });
      }, 2000);
    }
  };

  const handleBack = () => {
    if (step === 1) {
      onBack();
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button onClick={handleBack} variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {step === 1 ? "Back to Event" : "Back"}
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  stepNum <= step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {stepNum < step ? <Check className="w-4 h-4" /> : stepNum}
                </div>
                {stepNum < 4 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    stepNum < step ? 'bg-primary' : 'bg-muted'
                  }`}></div>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Select Your Tickets</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {event.ticketTypes.map((ticket: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{ticket.name}</h4>
                          <p className="text-sm text-muted-foreground">{ticket.description}</p>
                          <p className="text-lg font-bold text-primary">₵{ticket.price}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleTicketChange(ticket.name, (selectedTickets[ticket.name] || 0) - 1)}
                          >
                            -
                          </Button>
                          <span className="w-8 text-center font-medium">
                            {selectedTickets[ticket.name] || 0}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleTicketChange(ticket.name, (selectedTickets[ticket.name] || 0) + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, paymentMethod: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="momo">Mobile Money (MTN/Vodafone)</SelectItem>
                        <SelectItem value="visa">Visa Card</SelectItem>
                        <SelectItem value="mastercard">Mastercard</SelectItem>
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Your payment information is secure and encrypted</span>
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 4 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-green-600">Booking Confirmed!</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">Thank you for your booking!</p>
                      <p className="text-muted-foreground">
                        Your tickets have been sent to {formData.email}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      Booking ID: ENT-{Date.now().toString().slice(-6)}
                    </Badge>
                    <div className="pt-4">
                      <Button onClick={onBack} variant="outline" className="mr-4">
                        Back to Event
                      </Button>
                      <Button onClick={() => window.location.href = "/"}>
                        Browse More Events
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">{event.title}</h4>
                    <p className="text-sm">{event.date} • {event.time}</p>
                    <p className="text-sm text-muted-foreground">{event.venue}</p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    {Object.entries(selectedTickets).map(([ticketName, quantity]) => {
                      if (quantity === 0) return null;
                      const ticket = event.ticketTypes.find((t: any) => t.name === ticketName);
                      return (
                        <div key={ticketName} className="flex justify-between text-sm">
                          <span>{ticketName} x{quantity}</span>
                          <span>₵{ticket.price * quantity}</span>
                        </div>
                      );
                    })}
                  </div>

                  {getTotalTickets() > 0 && (
                    <>
                      <Separator />
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>₵{getTotalPrice()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Service Fee</span>
                          <span>₵{getServiceFee()}</span>
                        </div>
                        <div className="flex justify-between font-bold text-base">
                          <span>Total</span>
                          <span>₵{getFinalTotal()}</span>
                        </div>
                      </div>
                    </>
                  )}

                  {step < 4 && (
                    <Button 
                      onClick={handleContinue}
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={step === 3 && !formData.paymentMethod}
                    >
                      {step === 1 && "Continue"}
                      {step === 2 && "Continue to Payment"}
                      {step === 3 && "Complete Booking"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TicketBooking;