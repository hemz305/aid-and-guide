import { useParams, useNavigate } from "react-router-dom";
import { techIssues } from "@/data/techIssues";
import { solutionsData } from "@/data/solutionsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, AlertTriangle, Info } from "lucide-react";


export default function Solutions() {
  const { issueId } = useParams();
  const navigate = useNavigate();
  
  const issue = techIssues.find(issue => issue.id === issueId);
  const solutions = solutionsData[issueId as keyof typeof solutionsData] || [];

  if (!issue) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="h-12 w-12 text-tech-orange mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Issue Not Found</h2>
            <p className="text-muted-foreground mb-4">The requested technical issue could not be found.</p>
            <Button onClick={() => navigate('/')} className="bg-gradient-primary text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-dark py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="mb-6 border-border hover:bg-accent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Issues
          </Button>
          
          <Card className="bg-gradient-card border-border shadow-premium">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-primary rounded-xl text-white">
                  {issue.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-tech-blue mb-1 uppercase tracking-wider">
                    {issue.category}
                  </div>
                  <CardTitle className="text-2xl text-foreground">{issue.title}</CardTitle>
                  <p className="text-muted-foreground mt-2">{issue.description}</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-6">Step-by-Step Solutions</h2>
          
          {solutions.length > 0 ? (
            solutions.map((solution, index) => (
              <Card key={index} className="bg-gradient-card border-2 border-tech-blue shadow-card hover:shadow-premium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-primary rounded-full text-primary-foreground font-bold text-lg">
                      {solution.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                      </div>
                      <p className="text-white/80 leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6 text-center">
                <Info className="h-12 w-12 text-tech-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Solutions Coming Soon</h3>
                <p className="text-muted-foreground">
                  We're working on detailed solutions for this issue. Please check back later or contact our support team for immediate assistance.
                </p>
                <div className="mt-6 space-y-2">
                  <Button className="bg-gradient-primary text-white mr-4">
                    Contact Support
                  </Button>
                  <Button variant="outline" onClick={() => navigate('/')}>
                    Browse Other Issues
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Card className="mt-8 bg-gradient-card border-border">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Still Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              If these solutions didn't resolve your issue, our expert support team is here to help.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                className="bg-gradient-primary text-white"
                onClick={() => {
                  const bookCallButton = document.querySelector('[data-book-call-trigger]') as HTMLElement;
                  if (bookCallButton) {
                    bookCallButton.click();
                  }
                }}
              >
                Book a Call
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  const liveChatButton = document.querySelector('[data-live-chat-trigger]') as HTMLElement;
                  if (liveChatButton) {
                    liveChatButton.click();
                  }
                }}
              >
                Live Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}