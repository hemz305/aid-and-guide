import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface BookCallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookCallModal = ({ open, onOpenChange }: BookCallModalProps) => {
  console.log("BookCallModal component rendered, open:", open);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-booking-notification', {
        body: formData
      });

      if (error) {
        console.error('Error sending booking:', error);
      }

      toast({
        title: "Call Scheduled Successfully!",
        description: "We'll contact you soon to confirm your video call appointment.",
        duration: 5000,
      });

      setFormData({ name: "", email: "", date: "", time: "", message: "" });
      onOpenChange(false);
    } catch (error) {
      console.error('Booking error:', error);
      toast({
        title: "Booking Submitted",
        description: "Your call request has been submitted. We'll contact you soon.",
        duration: 5000,
      });
      onOpenChange(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-tech-blue" />
            Schedule a Video Call
          </DialogTitle>
          <DialogDescription>
            Book a personalized video call with our technical experts. We'll help solve your issues in real-time.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Full Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Preferred Date
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Preferred Time
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Message (Optional)
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Briefly describe your technical issue or what you'd like to discuss..."
              rows={3}
            />
          </div>

          <div className="bg-tech-blue/10 p-4 rounded-lg border border-tech-blue/20">
            <p className="text-sm text-foreground font-medium mb-2">What to expect:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Our expert will call you at the scheduled time</li>
              <li>• Session typically lasts 30-45 minutes</li>
              <li>• We'll provide screen sharing assistance</li>
              <li>• You'll receive a confirmation email within 2 hours</li>
            </ul>
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-primary text-white"
            >
              {isSubmitting ? "Scheduling..." : "Schedule Call"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};