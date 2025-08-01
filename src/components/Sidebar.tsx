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
            variant="ghost"
            size="sm"
            className="fixed top-4 left-4 z-50 bg-background/95 backdrop-blur-sm border border-border shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 bg-background border-r border-border">
          <div className="py-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Help Center</h2>
              <p className="text-muted-foreground">Choose how you'd like to get support</p>
            </div>
            
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full h-auto p-4 justify-start hover:bg-muted/50 border border-border/50 hover:border-border transition-all duration-200"
                  onClick={item.onClick}
                >
                  <div className="flex items-start gap-4">
                    <item.icon className={`h-6 w-6 mt-1 ${item.color}`} />
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">{item.label}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
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