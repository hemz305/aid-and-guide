import { useState, useEffect } from "react";
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
  const [tempLanguage, setTempLanguage] = useState("english");

  useEffect(() => {
    const handleOpenBookCall = () => setBookCallOpen(true);
    const handleOpenLiveChat = () => setLiveChatOpen(true);
    
    window.addEventListener('openBookCall', handleOpenBookCall);
    window.addEventListener('openLiveChat', handleOpenLiveChat);
    
    return () => {
      window.removeEventListener('openBookCall', handleOpenBookCall);
      window.removeEventListener('openLiveChat', handleOpenLiveChat);
    };
  }, []);

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
      color: "text-tech-blue",
      dataAttr: "data-book-call-trigger"
    },
    {
      icon: MessageCircle,
      label: "Live Chat",
      description: "Get instant answers to your questions",
      onClick: () => setLiveChatOpen(true),
      color: "text-tech-green",
      dataAttr: "data-live-chat-trigger"
    },
    {
      icon: Star,
      label: "Feedback",
      description: "Share your experience with us",
      onClick: () => setFeedbackOpen(true),
      color: "text-tech-orange",
      dataAttr: ""
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
        <SheetContent side="left" className="w-80 bg-gray-900 border-r border-gray-700 shadow-2xl">
          <div className="py-6">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Help Center</h2>
              <p className="text-gray-300 text-lg">Choose how you'd like to get support</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full h-auto p-4 justify-start hover:bg-gray-800 hover:border-primary/30 border-2 border-gray-700 transition-all duration-300 rounded-xl hover:shadow-lg"
                  onClick={item.onClick}
                  {...(item.dataAttr && { [item.dataAttr]: true })}
                >
                  <div className="flex items-start gap-3 w-full">
                    <item.icon className={`h-6 w-6 flex-shrink-0 ${item.color}`} />
                    <div className="text-left flex-1 min-w-0">
                      <h3 className="font-bold text-base text-white whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</h3>
                      <p className="text-xs text-gray-300 mt-1 break-words leading-tight">{item.description}</p>
                    </div>
                  </div>
                </Button>
              ))}
              
              {/* Language Selection */}
              <div className="mt-8 border-t border-gray-700 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-base text-white">Language</h3>
                </div>
                <Select value={tempLanguage} onValueChange={setTempLanguage}>
                  <SelectTrigger className="w-full bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value} className="text-white hover:bg-gray-600">
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  className="w-full mt-3 bg-gradient-primary text-white"
                  onClick={() => {
                    setSelectedLanguage(tempLanguage);
                    // Trigger comprehensive language translation
                    const event = new CustomEvent('languageChange', { 
                      detail: { 
                        language: tempLanguage,
                        elements: [
                          'welcome-text',
                          'tech-assist-text', 
                          'search-placeholder',
                          'tech-categories',
                          'solutions-text',
                          'contact-text',
                          'nav-items',
                          'button-text',
                          'all-text-content'
                        ]
                      } 
                    });
                    window.dispatchEvent(event);
                    console.log('Language changed to:', tempLanguage);
                    
                    // Force re-render of all components with new language
                    window.location.reload();
                  }}
                >
                  Submit
                </Button>
                
                {/* Logout Button */}
                <Button 
                  className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
                  onClick={() => {
                    // Handle logout logic - redirect to auth page
                    console.log('Logging out...');
                    window.location.href = '/auth';
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                  </svg>
                  Logout
                </Button>
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