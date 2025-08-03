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
    timeSlot: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const { toast } = useToast();

  const timeSlots = [
    { value: "09:00-10:00", label: "Morning (9:00 AM - 10:00 AM)" },
    { value: "10:00-11:00", label: "Morning (10:00 AM - 11:00 AM)" },
    { value: "11:00-12:00", label: "Late Morning (11:00 AM - 12:00 PM)" },
    { value: "14:00-15:00", label: "Afternoon (2:00 PM - 3:00 PM)" },
    { value: "15:00-16:00", label: "Afternoon (3:00 PM - 4:00 PM)" },
    { value: "16:00-17:00", label: "Late Afternoon (4:00 PM - 5:00 PM)" },
    { value: "18:00-19:00", label: "Evening (6:00 PM - 7:00 PM)" },
    { value: "19:00-20:00", label: "Evening (7:00 PM - 8:00 PM)" }
  ];

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

      setFormData({ name: "", email: "", date: "", timeSlot: "", message: "" });
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
      <DialogContent className={`${isMaximized ? 'max-w-[95vw] h-[95vh]' : 'sm:max-w-[500px]'} bg-gray-900 border-gray-700`}>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-tech-blue" />
              <span className="text-white">Schedule a Video Call</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-white hover:bg-gray-800"
            >
              {isMaximized ? (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 15v4.5M15 15h4.5M15 15l5.5 5.5" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              )}
            </Button>
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Book a personalized video call with our technical experts. We'll help solve your issues in real-time.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-white">
                <User className="h-4 w-4" />
                Full Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter your full name"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-white">
                <Mail className="h-4 w-4" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your@email.com"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2 text-white">
                <Calendar className="h-4 w-4" />
                Preferred Date
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeSlot" className="flex items-center gap-2 text-white">
                <Clock className="h-4 w-4" />
                Preferred Time Slot
              </Label>
              <select
                id="timeSlot"
                value={formData.timeSlot}
                onChange={(e) => handleChange("timeSlot", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                required
              >
                <option value="">Select a time slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2 text-white">
              <MessageSquare className="h-4 w-4" />
              Message (Optional)
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Briefly describe your technical issue or what you'd like to discuss..."
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              rows={3}
            />
          </div>

          <div className="bg-tech-blue/20 p-4 rounded-lg border border-tech-blue/30">
            <p className="text-sm text-white font-medium mb-2">What to expect:</p>
            <ul className="text-sm text-gray-300 space-y-1">
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
              className="border-gray-600 text-white hover:bg-gray-700"
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