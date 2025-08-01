import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FeedbackRequest {
  answers: Record<string, any>;
  userEmail?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { answers, userEmail }: FeedbackRequest = await req.json();

    // Format the feedback answers for email
    const feedbackContent = Object.entries(answers)
      .map(([key, value]) => {
        const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        if (typeof value === 'number') {
          return `${formattedKey}: ${value}/5 stars`;
        }
        return `${formattedKey}: ${value || 'No response'}`;
      })
      .join('\n');

    const emailResponse = await resend.emails.send({
      from: "Help Tech Desk <onboarding@resend.dev>",
      to: ["hemanthkala04@gmail.com"],
      subject: "New Feedback Received - Help Tech Desk",
      html: `
        <h1>New Feedback Received</h1>
        ${userEmail ? `<p><strong>From:</strong> ${userEmail}</p>` : ''}
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        
        <h2>Feedback Details:</h2>
        <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
${feedbackContent}
        </pre>
        
        <p>Best regards,<br>Help Tech Desk System</p>
      `,
    });

    console.log("Feedback email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-feedback function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);