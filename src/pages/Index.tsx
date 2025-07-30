import { useState, useMemo } from "react";
import { TechAssistHero } from "@/components/TechAssistHero";
import { SearchBar } from "@/components/SearchBar";
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
      <TechAssistHero />
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <SearchBar 
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search technical issues quickly..."
          />
        </div>

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

      <footer className="bg-tech-gray py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 TechAssist. Your trusted technical support companion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
