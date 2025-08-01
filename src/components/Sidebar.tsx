import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Calendar, MessageCircle, Star } from "lucide-react";
import { BookCallModal } from "./BookCallModal";
import { LiveChatModal } from "./LiveChatModal";
import { FeedbackModal } from "./FeedbackModal";

export const Sidebar = () => {
  console.log("Sidebar component is rendering");
  const [bookCallOpen, setBookCallOpen] = useState(false);
  const [liveChatOpen, setLiveChatOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const menuItems = [
    {
      icon: Calendar,
      label: "Book a Call",
      description: "Schedule a video call with our experts",
      onClick: () => setBookCallOpen(true),
      color: "text-tech-blue"
    },
    {
      icon: MessageCircle,
      label: "Live Chat",
      description: "Get instant answers to your questions",
      onClick: () => setLiveChatOpen(true),
      color: "text-tech-green"
    },
    {
      icon: Star,
      label: "Feedback",
      description: "Share your experience with us",
      onClick: () => setFeedbackOpen(true),
      color: "text-tech-orange"
    }
  ];

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="lg"
            className="fixed top-4 left-4 z-50 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-white/20"
          >
            <Menu className="h-6 w-6 mr-2" />
            <span className="font-semibold">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 bg-card border-r border-border shadow-2xl">
          <div className="py-6">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-primary mb-2">Help Center</h2>
              <p className="text-muted-foreground text-lg">Choose how you'd like to get support</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full h-auto p-6 justify-start hover:bg-primary/10 hover:border-primary/30 border-2 border-border/50 transition-all duration-300 rounded-xl hover:shadow-lg hover:scale-105"
                  onClick={item.onClick}
                >
                  <div className="flex items-start gap-4">
                    <item.icon className={`h-8 w-8 mt-1 ${item.color}`} />
                    <div className="text-left">
                      <h3 className="font-bold text-lg text-foreground">{item.label}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <BookCallModal open={bookCallOpen} onOpenChange={setBookCallOpen} />
      <LiveChatModal open={liveChatOpen} onOpenChange={setLiveChatOpen} />
      <FeedbackModal open={feedbackOpen} onOpenChange={setFeedbackOpen} />
    </>
  );
};