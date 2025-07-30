import { Button } from "@/components/ui/button";
import { HelpCircle, LogIn, UserPlus } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary text-white rounded-xl p-3 shadow-premium">
              <span className="text-2xl font-bold">HTD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">Help Tech Desk</h1>
              <p className="text-sm text-muted-foreground">Technical Support</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <HelpCircle className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Help</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <LogIn className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Login</span>
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-primary text-white">
              <UserPlus className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Sign Up</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};