import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.0';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  company?: string;
  email: string;
  phone: string;
  message: string;
  website?: string; // honeypot field
  timestamp: number;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const requestData: ContactRequest = await req.json();
    
    // Honeypot check
    if (requestData.website) {
      console.warn(`Honeypot triggered for contact form submission`);
      return new Response(
        JSON.stringify({ error: "Invalid request" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Enhanced rate limiting check
    const submissionTime = requestData.timestamp;
    const now = Date.now();
    if (now - submissionTime < 3000) { // Less than 3 seconds = suspicious
      console.warn(`Suspicious fast submission detected`);
      return new Response(
        JSON.stringify({ error: "Please take your time filling out the form" }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Check for excessively old timestamps (possible replay attack)
    if (now - submissionTime > 3600000) { // More than 1 hour old
      return new Response(
        JSON.stringify({ error: "Form session expired, please refresh and try again" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate required fields
    if (!requestData.name || !requestData.email || !requestData.phone || !requestData.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate input lengths
    if (requestData.name.length > 100 || requestData.email.length > 100 || 
        requestData.phone.length > 50 || requestData.message.length > 2000) {
      return new Response(
        JSON.stringify({ error: "Input too long" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (requestData.company && requestData.company.length > 200) {
      return new Response(
        JSON.stringify({ error: "Company name too long" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Simple HTML sanitization for email display
    const sanitize = (str: string) => str.replace(/[<>&"']/g, (char) => {
      const entities: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#x27;'
      };
      return entities[char];
    });

    const sanitizedData = {
      name: sanitize(requestData.name),
      company: requestData.company ? sanitize(requestData.company) : '',
      email: sanitize(requestData.email),
      phone: sanitize(requestData.phone),
      message: sanitize(requestData.message).replace(/\n/g, '<br>')
    };

    // Store submission in database
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: requestData.name,
        company: requestData.company || null,
        email: requestData.email,
        phone: requestData.phone,
        message: requestData.message,
        ip_address: req.headers.get('x-forwarded-for') || 'unknown',
        user_agent: req.headers.get('user-agent') || 'unknown'
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      // Continue with email sending even if database fails
    } else {
      console.log('Contact submission stored:', submission?.id);
    }

    // Send email to management
    const managementEmailHtml = `
      <h2>New Contact Form Submission</h2>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        ${sanitizedData.company ? `<p><strong>Company:</strong> ${sanitizedData.company}</p>` : ''}
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
        <p><strong>Message:</strong></p>
        <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
          ${sanitizedData.message}
        </div>
      </div>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Adelaide' })}</small></p>
    `;

    await resend.emails.send({
      from: "More Civil Website <noreply@morecivil.com.au>",
      to: ["ops@morecivil.com.au"],
      subject: `[More Civil Website] New enquiry from ${sanitizedData.name}`,
      html: managementEmailHtml,
    });

    // Send confirmation email to customer
    const customerEmailHtml = `
      <h2>Thank you for contacting More Civil</h2>
      <p>Dear ${sanitizedData.name},</p>
      <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
      
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Your Message</h3>
        <div style="background: white; padding: 15px; border-radius: 4px;">
          ${sanitizedData.message}
        </div>
      </div>
      
      <p>Our team typically responds within 24 hours during business days.</p>
      
      <p>If you have an urgent matter, please call us directly at the number listed on our website.</p>
      
      <p>Best regards,<br>The More Civil Team</p>
    `;

    await resend.emails.send({
      from: "More Civil <noreply@morecivil.com.au>",
      to: [requestData.email],
      subject: "Thank you for contacting More Civil",
      html: customerEmailHtml,
    });

    console.log(`Contact form submitted successfully from ${sanitizedData.email} at ${new Date().toISOString()}`);

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ error: "Unable to send message at this time. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);