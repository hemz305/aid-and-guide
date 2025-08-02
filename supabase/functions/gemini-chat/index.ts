import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ChatRequest {
  message?: string;
  image?: string; // base64 encoded image
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GOOGLE_AI_API_KEY = Deno.env.get('GOOGLE_AI_API_KEY');
    
    if (!GOOGLE_AI_API_KEY) {
      throw new Error('Google AI API key not configured');
    }

    const { message, image }: ChatRequest = await req.json();

    let apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GOOGLE_AI_API_KEY}`;
    
    let requestBody: any;

    if (image) {
      // Handle image + text request
      requestBody = {
        contents: [{
          parts: [
            { text: message || "Analyze this image and provide technical support advice." },
            {
              inline_data: {
                mime_type: "image/jpeg",
                data: image
              }
            }
          ]
        }],
        systemInstruction: {
          parts: [{
            text: "You are a technical support assistant. Analyze images for technical problems and provide step-by-step solutions. Be helpful, concise, and provide actionable advice."
          }]
        }
      };
    } else {
      // Handle text-only request
      requestBody = {
        contents: [{
          parts: [{ text: message }]
        }],
        systemInstruction: {
          parts: [{
            text: "You are a technical support assistant. Provide helpful, accurate, and step-by-step solutions to technical problems. Keep responses concise but thorough."
          }]
        }
      };
    }

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', errorText);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    
    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                  "I'm having trouble processing your request. Please try again or contact our support team.";

    console.log("Gemini response received successfully");

    return new Response(JSON.stringify({ answer }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in gemini-chat function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        answer: "I'm experiencing technical difficulties. Please try again later or contact our support team directly."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);