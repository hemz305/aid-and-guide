import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu, Calendar, MessageCircle, Star, Globe } from "lucide-react";
import { BookCallModal } from "./BookCallModal";
import { LiveChatModal } from "./LiveChatModal";
import { FeedbackModal } from "./FeedbackModal";

export const Sidebar = () => {
  console.log("Sidebar component is rendering");
  const [bookCallOpen, setBookCallOpen] = useState(false);
  const [liveChatOpen, setLiveChatOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const languages = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Español" },
    { value: "french", label: "Français" },
    { value: "german", label: "Deutsch" },
    { value: "italian", label: "Italiano" },
    { value: "portuguese", label: "Português" },
    { value: "chinese", label: "中文" },
    { value: "japanese", label: "日本語" },
    { value: "korean", label: "한국어" },
    { value: "russian", label: "Русский" },
    { value: "arabic", label: "العربية" },
    { value: "hindi", label: "हिन्दी" },
    { value: "dutch", label: "Nederlands" },
    { value: "swedish", label: "Svenska" },
    { value: "norwegian", label: "Norsk" }
  ];

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
            className="fixed top-4 left-4 z-50 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-white/20 px-4"
          >
            <Menu className="h-6 w-6" />
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
                  className="w-full h-auto p-4 justify-start hover:bg-primary/10 hover:border-primary/30 border-2 border-border/50 transition-all duration-300 rounded-xl hover:shadow-lg"
                  onClick={item.onClick}
                >
                  <div className="flex items-start gap-3 w-full">
                    <item.icon className={`h-6 w-6 flex-shrink-0 ${item.color}`} />
                    <div className="text-left flex-1 min-w-0">
                      <h3 className="font-bold text-base text-foreground">{item.label}</h3>
                      <p className="text-xs text-muted-foreground mt-1 break-words">{item.description}</p>
                    </div>
                  </div>
                </Button>
              ))}
              
              {/* Language Selection */}
              <div className="mt-8 border-t border-border pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-base text-foreground">Language</h3>
                </div>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
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