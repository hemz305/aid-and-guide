import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface FeedbackModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Question {
  id: string;
  question: string;
  type: 'rating' | 'text';
}

export const FeedbackModal = ({ open, onOpenChange }: FeedbackModalProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();

  const questions: Question[] = [
    { id: 'overall', question: 'How would you rate your overall experience with Help Tech Desk?', type: 'rating' },
    { id: 'support_quality', question: 'How satisfied are you with the quality of technical support?', type: 'rating' },
    { id: 'response_time', question: 'How would you rate our response time?', type: 'rating' },
    { id: 'ease_of_use', question: 'How easy was it to find the help you needed?', type: 'rating' },
    { id: 'problem_resolution', question: 'How well did we solve your technical problem?', type: 'rating' },
    { id: 'recommend', question: 'How likely are you to recommend Help Tech Desk to others?', type: 'rating' },
    { id: 'improvements', question: 'What can we improve? Please share any suggestions or comments.', type: 'text' }
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleRatingClick = (rating: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: rating }));
  };

  const handleTextChange = (text: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: text }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Send feedback to email
      const { error } = await supabase.functions.invoke('send-feedback', {
        body: {
          answers,
          userEmail: 'anonymous' // You can get user email from auth if available
        }
      });

      if (error) {
        console.error('Error sending feedback:', error);
        toast({
          title: "Error sending feedback",
          description: "Please try again later.",
          variant: "destructive",
          duration: 5000,
        });
        return;
      }

      setIsComplete(true);
      toast({
        title: "Thank you for your feedback!",
        description: "Your responses have been sent and help us improve our service quality.",
        duration: 5000,
      });
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsComplete(false);
        setCurrentQuestionIndex(0);
        setAnswers({});
        onOpenChange(false);
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error sending feedback",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  const isCurrentAnswered = () => {
    if (currentQuestion.type === 'rating') {
      return answers[currentQuestion.id] !== undefined;
    }
    return true; // Text questions are optional
  };

  const renderStarRating = () => {
    const currentRating = answers[currentQuestion.id] || 0;
    
    return (
      <div className="flex gap-2 justify-center my-8">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRatingClick(star)}
            className="transition-all duration-200 hover:scale-110"
          >
            <Star
              className={`h-12 w-12 ${
                star <= currentRating
                  ? 'fill-tech-orange text-tech-orange'
                  : 'text-muted-foreground hover:text-tech-orange'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  if (isComplete) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-tech-green mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
            <p className="text-muted-foreground">
              Your feedback has been submitted successfully. We appreciate you taking the time to help us improve.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-tech-orange" />
            Share Your Feedback
          </DialogTitle>
          <DialogDescription>
            Question {currentQuestionIndex + 1} of {questions.length}
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          <div className="mb-4">
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            {currentQuestion.question}
          </h3>

          {currentQuestion.type === 'rating' ? (
            <>
              {renderStarRating()}
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </>
          ) : (
            <Textarea
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder="Please share your thoughts..."
              rows={4}
              className="w-full"
            />
          )}
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          <div className="flex gap-2">
            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
            >
              Skip Survey
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentQuestion.type === 'rating' && !isCurrentAnswered()}
              className="bg-gradient-primary text-white"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};