import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { TechIssue } from "@/data/techIssues";
import { useNavigate } from "react-router-dom";

interface TechIssueCardProps {
  issue: TechIssue;
}

export const TechIssueCard = ({ issue }: TechIssueCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleDownload = async () => {
    setIsLoading(true);
    
    // Navigate to solutions page for this issue
    setTimeout(() => {
      navigate(`/solutions/${issue.id}`);
      setIsLoading(false);
    }, 500);
  };

  return (
    <Card className="group h-full bg-gradient-card hover:shadow-premium hover:border-tech-blue hover:border-2 transition-all duration-300 cursor-pointer border-0 overflow-hidden hover:scale-105 hover:bg-tech-gray/20 dark:hover:bg-tech-blue/10">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 p-3 bg-gradient-primary rounded-xl text-white group-hover:animate-float transition-all duration-300">
            {issue.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-tech-blue mb-1 uppercase tracking-wider">
              {issue.category}
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-tech-blue transition-colors duration-300 line-clamp-2">
              {issue.title}
            </h3>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-6 flex-1 line-clamp-3">
          {issue.description}
        </p>
        
        <Button 
          onClick={handleDownload}
          disabled={isLoading}
          className="w-full bg-gradient-primary hover:bg-tech-blue-dark text-white border-0 shadow-card hover:shadow-premium transition-all duration-300"
        >
          <Download className="w-4 h-4 mr-2" />
          {isLoading ? "Loading..." : "Download"}
        </Button>
      </CardContent>
    </Card>
  );
};