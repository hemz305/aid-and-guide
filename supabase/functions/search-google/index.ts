import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SearchRequest {
  query: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query }: SearchRequest = await req.json();

    // Use DuckDuckGo Instant Answer API as a free alternative to Google
    const searchUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`;
    
    const response = await fetch(searchUrl);
    const data = await response.json();

    // Format the response to provide helpful technical answers
    let answer = "";
    
    if (data.Answer) {
      answer = data.Answer;
    } else if (data.AbstractText) {
      answer = data.AbstractText;
    } else if (data.RelatedTopics && data.RelatedTopics.length > 0) {
      answer = data.RelatedTopics[0].Text;
    } else {
      // Provide generic tech support answers based on common keywords
      const lowerQuery = query.toLowerCase();
      
      if (lowerQuery.includes("wifi") || lowerQuery.includes("wi-fi") || lowerQuery.includes("internet")) {
        answer = "For WiFi connection issues, try these steps: 1) Restart your router and device 2) Check if WiFi is enabled 3) Forget and reconnect to the network 4) Move closer to the router 5) Check for interference from other devices. If the problem persists, contact your internet service provider.";
      } else if (lowerQuery.includes("slow") || lowerQuery.includes("performance")) {
        answer = "For slow device performance: 1) Restart your device 2) Close unnecessary applications 3) Clear cache and temporary files 4) Check available storage space 5) Run antivirus scan 6) Update your operating system and drivers.";
      } else if (lowerQuery.includes("password") || lowerQuery.includes("login")) {
        answer = "For password/login issues: 1) Check caps lock and typing accuracy 2) Try password reset option 3) Clear browser cache and cookies 4) Disable browser extensions temporarily 5) Try incognito/private browsing mode.";
      } else if (lowerQuery.includes("blue screen") || lowerQuery.includes("crash")) {
        answer = "For system crashes/blue screens: 1) Note the error code 2) Restart in safe mode 3) Check for recent hardware/software changes 4) Run memory diagnostic 5) Update drivers 6) Check for overheating. If frequent, consult a technician.";
      } else {
        answer = "I understand you're having a technical issue. For the best assistance, please try: 1) Restart the device/application 2) Check for updates 3) Review error messages carefully 4) Try basic troubleshooting steps 5) Contact our technical support team for personalized help.";
      }
    }

    return new Response(JSON.stringify({ 
      answer: answer || "I couldn't find specific information about your query. Please contact our technical support team for personalized assistance.",
      source: data.AbstractURL || "Help Tech Desk Knowledge Base"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in search-google function:", error);
    return new Response(
      JSON.stringify({ 
        answer: "I'm having trouble processing your request right now. Please try again or contact our support team directly.",
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);