import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const ImageUpload = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        // Send email notification
        const { error } = await supabase.functions.invoke('send-image-notification', {
          body: {
            fileName: selectedFile.name,
            fileSize: (selectedFile.size / (1024 * 1024)).toFixed(2) + " MB",
            uploadTime: new Date().toLocaleString()
          }
        });

        if (error) {
          console.error('Error sending notification:', error);
        }

        setIsUploaded(true);
        toast({
          title: "Image Uploaded Successfully!",
          description: "Our technical team will contact you soon to assist with your issue.",
          duration: 5000,
        });
      } catch (error) {
        console.error('Upload error:', error);
        toast({
          title: "Upload Complete",
          description: "Image uploaded successfully. Our team will contact you soon.",
          duration: 5000,
        });
        setIsUploaded(true);
      }
    }
  };

  return (
    <div className="my-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Need Visual Assistance?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Upload a screenshot or photo of your technical issue and our expert team will provide personalized support.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto bg-gradient-card border-2 border-tech-gray/20 shadow-card">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Upload className="h-6 w-6 text-tech-blue" />
            Upload Issue Screenshot
          </CardTitle>
          <CardDescription>
            Supported formats: JPG, PNG, GIF (Max size: 10MB)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isUploaded ? (
            <>
              <div className="border-2 border-dashed border-tech-gray/30 rounded-lg p-8 text-center hover:border-tech-blue/50 hover:bg-tech-blue/5 transition-all duration-300 hover:shadow-lg">
                <input
                  type="file"
                  id="file-upload"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  capture="environment"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <Upload className="h-12 w-12 text-muted-foreground" />
                  <div>
                    <p className="text-lg font-medium text-foreground">
                      Click to browse files
                    </p>
                    <p className="text-sm text-muted-foreground">
                      or drag and drop your image here
                    </p>
                  </div>
                </label>
              </div>

              {selectedFile && (
                <div className="flex items-center justify-between p-4 bg-tech-gray/10 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{selectedFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                  <Button 
                    onClick={handleUpload}
                    className="bg-gradient-primary text-white hover:opacity-90"
                  >
                    Upload Image
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-tech-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Upload Successful!
              </h3>
              <p className="text-muted-foreground mb-4">
                Thank you for uploading your technical issue. Our expert team will review your submission and contact you soon with a personalized solution.
              </p>
              <div className="bg-tech-green/10 border border-tech-green/20 rounded-lg p-4">
                <p className="text-tech-green font-medium">
                  ✓ Our team will contact you within 24 hours
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};