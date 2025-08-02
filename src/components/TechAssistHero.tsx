import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

export const TechAssistHero = () => {
  const scrollToCategories = () => {
    const categoriesSection = document.getElementById("tech-categories");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 px-6 text-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-tech-blue rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-tech-green rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-tech-orange rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Tech Assist
          </span>
        </h1>
        
        <div className="overflow-hidden mb-8">
          <p className="text-xl md:text-2xl text-white font-medium animate-slide-right">
            Your personal tech test
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Get instant solutions to your technical problems with our AI-powered assistant. 
          From WiFi issues to system crashes, we've got you covered 24/7.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToCategories}
            size="lg" 
            className="bg-gradient-primary hover:bg-tech-blue-dark text-white px-8 py-4 text-lg font-medium shadow-premium hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Get Started
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
};