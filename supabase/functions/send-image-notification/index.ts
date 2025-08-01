import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ImageNotificationRequest {
  fileName: string;
  fileSize: string;
  uploadTime: string;
  imageBase64?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fileName, fileSize, uploadTime, imageBase64 }: ImageNotificationRequest = await req.json();

    const attachments = imageBase64 ? [{
      filename: fileName,
      content: imageBase64.split(',')[1], // Remove data:image/png;base64, prefix
      type: "attachment"
    }] : [];

    const emailResponse = await resend.emails.send({
      from: "Help Tech Desk <onboarding@resend.dev>",
      to: ["hemanthkala04@gmail.com"],
      subject: "New Technical Issue Image Uploaded",
      attachments,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Technical Issue Image Received</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #334155;">Upload Details:</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li><strong>File Name:</strong> ${fileName}</li>
              <li><strong>File Size:</strong> ${fileSize}</li>
              <li><strong>Upload Time:</strong> ${uploadTime}</li>
            </ul>
          </div>
          
          ${imageBase64 ? `
          <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #15803d;">Uploaded Image:</h3>
            <img src="${imageBase64}" alt="Technical Issue Screenshot" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0;" />
          </div>
          ` : ''}
          
          <div style="background: #dbeafe; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Action Required:</strong> A customer has uploaded an image of their technical issue. 
              Please review and contact them within 24 hours as promised.
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This notification was sent automatically from Help Tech Desk.</p>
          </div>
        </div>
      `,
    });

    console.log("Image notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-image-notification function:", error);
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