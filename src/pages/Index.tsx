import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { TechAssistHero } from "@/components/TechAssistHero";
import { SearchBar } from "@/components/SearchBar";
import { ImageUpload } from "@/components/ImageUpload";
import { TechIssueCard } from "@/components/TechIssueCard";
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
      <Header />
      <TechAssistHero />
      
      <div className="container mx-auto px-6 py-12">
        <SearchBar 
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search technical issues quickly..."
        />
        
        <ImageUpload />

        <div className="mb-8">
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

      <footer className="bg-tech-gray/50 py-12 mt-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-4">Contact Us</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 support@helptechdesk.com</p>
                <p>📞 +91 98765 43210</p>
                <p>📍 Brigade Road, Bangalore, Karnataka</p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="hover:text-tech-blue cursor-pointer">About Us</p>
                <p className="hover:text-tech-blue cursor-pointer">Privacy Policy</p>
                <p className="hover:text-tech-blue cursor-pointer">Terms of Service</p>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold text-foreground mb-4">Support Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: 12:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-6 text-center">
            <p className="text-muted-foreground">
              © 2024 Help Tech Desk (HTD). Your trusted technical support companion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
