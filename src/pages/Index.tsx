import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { TechAssistHero } from "@/components/TechAssistHero";
import { SearchBar } from "@/components/SearchBar";
import { ImageUpload } from "@/components/ImageUpload";
import { TechIssueCard } from "@/components/TechIssueCard";
import { Sidebar } from "@/components/Sidebar";
import { techIssues } from "@/data/techIssues";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIssues = useMemo(() => {
    if (!searchTerm.trim()) return techIssues;
    
    const searchLower = searchTerm.toLowerCase();
    return techIssues.filter(issue => 
      issue.title.toLowerCase().includes(searchLower) ||
      issue.category.toLowerCase().includes(searchLower) ||
      issue.description.toLowerCase().includes(searchLower) ||
      issue.searchTerms.some(term => term.includes(searchLower))
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <TechAssistHero />
      
      <div className="container mx-auto px-6 py-12">
        <SearchBar 
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search technical issues quickly..."
        />
        
        <ImageUpload />

        <div className="mb-8" id="tech-categories">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Technical Support Categories
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Browse through our comprehensive collection of technical issue guides. 
            Each guide includes step-by-step solutions, real-world examples, and preventive tips.
          </p>
        </div>

        {filteredIssues.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No issues found matching "{searchTerm}". Try a different search term.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredIssues.map((issue) => (
              <TechIssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        )}
      </div>

      <footer className="bg-foreground dark:bg-tech-gray/50 py-12 mt-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-background dark:text-foreground mb-4">Contact Us</h3>
              <div className="space-y-3 text-background/80 dark:text-muted-foreground">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                  </svg>
                  <p>support@helptechdesk.com</p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                    <path d="M6.62 10.79c.15-.24.36-.46.62-.62l.08-.05c.15-.09.32-.14.48-.14.16 0 .33.05.48.14l.08.05c.26.16.47.38.62.62.15.24.23.51.23.79 0 .28-.08.55-.23.79-.15.24-.36.46-.62.62l-.08.05c-.15.09-.32.14-.48.14-.16 0-.33-.05-.48-.14l-.08-.05c-.26-.16-.47-.38-.62-.62-.15-.24-.23-.51-.23-.79 0-.28.08-.55.23-.79z"/>
                  </svg>
                  <p>+91 98765 43210</p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <p>Brigade Road, Bangalore, Karnataka</p>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-background dark:text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2 text-background/80 dark:text-muted-foreground">
                <p className="hover:text-tech-blue cursor-pointer">About Us</p>
                <p className="hover:text-tech-blue cursor-pointer">Privacy Policy</p>
                <p className="hover:text-tech-blue cursor-pointer">Terms of Service</p>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold text-background dark:text-foreground mb-4">Support Hours</h3>
              <div className="space-y-2 text-background/80 dark:text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: 12:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 dark:border-border mt-8 pt-6 text-center">
            <p className="text-background/80 dark:text-muted-foreground">
              © 2024 Help Tech Desk (HTD). Your trusted technical support companion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
