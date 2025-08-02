import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { HelpCircle, LogIn, UserPlus, User, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser, Session } from "@supabase/supabase-js";

export const Header = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);


  const scrollToCategories = () => {
    const categoriesSection = document.getElementById("tech-categories");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary text-white rounded-xl p-3 shadow-premium transition-all duration-300 hover:scale-105">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H11V21H5V3H13V9H21Z" />
                <path d="M17 12C15.89 12 15 12.89 15 14S15.89 16 17 16 19 15.11 19 14 18.11 12 17 12ZM17 18C14.79 18 13 16.21 13 14S14.79 10 17 10 21 11.79 21 14 19.21 18 17 18Z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">Help Tech Desk</h1>
              <p className="text-sm text-muted-foreground">Technical Support</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-foreground hover:text-foreground font-bold"
              onClick={scrollToCategories}
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Help</span>
            </Button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full p-0">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-primary text-white text-xs">
                        {user.email?.[0]?.toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-foreground hover:text-foreground font-bold"
                  onClick={() => navigate("/auth")}
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Login</span>
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-gradient-primary text-white"
                  onClick={() => navigate("/auth")}
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Sign Up</span>
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};