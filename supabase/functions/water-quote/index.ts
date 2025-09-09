import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";
import { Resend } from "npm:resend@2.0.0";

// TODO: Update with actual pricing from client
const PLACEHOLDER_PRICING = {
  BASE_PRICE_PER_KL: {
    potable: 100,     // Placeholder - replace with actual
    nonPotable: 80    // Placeholder - replace with actual  
  },
  DELIVERY_FEE: 75,   // Placeholder base delivery fee
  MIN_DELIVERY: 10,   // Placeholder minimum KL
  BULK_DISCOUNT_THRESHOLD: 50, // KL for bulk discount
  BULK_DISCOUNT_RATE: 0.1 // 10% discount
};

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WaterQuoteRequest {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  delivery_address: string;
  water_type: 'potable' | 'nonPotable';
  quantity_kl: number;
  preferred_date: string;
  notes?: string;
}

const calculateQuote = (waterType: 'potable' | 'nonPotable', quantityKl: number) => {
  const basePrice = PLACEHOLDER_PRICING.BASE_PRICE_PER_KL[waterType];
  let waterCost = basePrice * quantityKl;
  
  // Apply bulk discount if applicable
  if (quantityKl >= PLACEHOLDER_PRICING.BULK_DISCOUNT_THRESHOLD) {
    waterCost = waterCost * (1 - PLACEHOLDER_PRICING.BULK_DISCOUNT_RATE);
  }
  
  const deliveryFee = PLACEHOLDER_PRICING.DELIVERY_FEE;
  const totalPrice = waterCost + deliveryFee;
  
  return {
    water_cost: waterCost,
    delivery_fee: deliveryFee,
    total_price: totalPrice,
    bulk_discount_applied: quantityKl >= PLACEHOLDER_PRICING.BULK_DISCOUNT_THRESHOLD
  };
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const requestData: WaterQuoteRequest = await req.json();
    
    // Validate minimum delivery
    if (requestData.quantity_kl < PLACEHOLDER_PRICING.MIN_DELIVERY) {
      return new Response(
        JSON.stringify({ 
          error: `Minimum delivery is ${PLACEHOLDER_PRICING.MIN_DELIVERY}KL` 
        }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Calculate pricing
    const priceBreakdown = calculateQuote(requestData.water_type, requestData.quantity_kl);

    // Save quote to database
    const { data: quote, error: dbError } = await supabase
      .from('water_quotes')
      .insert({
        customer_name: requestData.customer_name,
        customer_email: requestData.customer_email,
        customer_phone: requestData.customer_phone,
        delivery_address: requestData.delivery_address,
        water_type: requestData.water_type,
        quantity_kl: requestData.quantity_kl,
        preferred_date: requestData.preferred_date,
        calculated_price: priceBreakdown.total_price,
        price_breakdown: priceBreakdown,
        notes: requestData.notes || null,
        status: 'pending'
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save quote");
    }

    // Send customer confirmation email
    const customerEmailHtml = `
      <h2>Water Delivery Quote Request Received</h2>
      <p>Dear ${requestData.customer_name},</p>
      <p>Thank you for your water delivery quote request. Here are the details:</p>
      
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Quote Details</h3>
        <p><strong>Water Type:</strong> ${requestData.water_type === 'potable' ? 'Potable (Drinking)' : 'Non-Potable'}</p>
        <p><strong>Quantity:</strong> ${requestData.quantity_kl}KL</p>
        <p><strong>Delivery Address:</strong> ${requestData.delivery_address}</p>
        <p><strong>Preferred Date:</strong> ${new Date(requestData.preferred_date).toLocaleDateString()}</p>
        
        <h4>Pricing Estimate (Placeholder)</h4>
        <p><strong>Water Cost:</strong> $${priceBreakdown.water_cost.toFixed(2)}</p>
        <p><strong>Delivery Fee:</strong> $${priceBreakdown.delivery_fee.toFixed(2)}</p>
        ${priceBreakdown.bulk_discount_applied ? '<p><strong>Bulk Discount Applied:</strong> 10% off water cost</p>' : ''}
        <p style="font-size: 18px; font-weight: bold;"><strong>Total Estimate:</strong> $${priceBreakdown.total_price.toFixed(2)}</p>
        
        <p><em>Note: This is a preliminary estimate with placeholder pricing. Final pricing will be confirmed by our team.</em></p>
      </div>
      
      <p>Our team will review your request and contact you within 24 hours to confirm availability and finalize pricing.</p>
      
      <p>If you have any questions, please don't hesitate to contact us.</p>
      
      <p>Best regards,<br>More Civil Water Delivery Team</p>
    `;

    await resend.emails.send({
      from: "More Civil <noreply@morecivil.com.au>",
      to: [requestData.customer_email],
      subject: "Water Delivery Quote Request Received",
      html: customerEmailHtml,
    });

    // Send management notification email
    const managementEmailHtml = `
      <h2>New Water Delivery Quote Request</h2>
      <p>A new water delivery quote has been submitted:</p>
      
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Customer Details</h3>
        <p><strong>Name:</strong> ${requestData.customer_name}</p>
        <p><strong>Email:</strong> ${requestData.customer_email}</p>
        <p><strong>Phone:</strong> ${requestData.customer_phone}</p>
        
        <h3>Delivery Details</h3>
        <p><strong>Water Type:</strong> ${requestData.water_type === 'potable' ? 'Potable (Drinking)' : 'Non-Potable'}</p>
        <p><strong>Quantity:</strong> ${requestData.quantity_kl}KL</p>
        <p><strong>Address:</strong> ${requestData.delivery_address}</p>
        <p><strong>Preferred Date:</strong> ${new Date(requestData.preferred_date).toLocaleDateString()}</p>
        ${requestData.notes ? `<p><strong>Notes:</strong> ${requestData.notes}</p>` : ''}
        
        <h3>Calculated Estimate (Placeholder Pricing)</h3>
        <p><strong>Water Cost:</strong> $${priceBreakdown.water_cost.toFixed(2)}</p>
        <p><strong>Delivery Fee:</strong> $${priceBreakdown.delivery_fee.toFixed(2)}</p>
        <p><strong>Total:</strong> $${priceBreakdown.total_price.toFixed(2)}</p>
      </div>
      
      <p>Quote ID: ${quote.id}</p>
      <p>Please review and approve/modify this quote through the management dashboard.</p>
    `;

    await resend.emails.send({
      from: "More Civil System <noreply@morecivil.com.au>",
      to: ["ops@morecivil.com.au"],
      subject: `New Water Quote Request - ${requestData.customer_name}`,
      html: managementEmailHtml,
    });

    console.log(`Quote created successfully for ${requestData.customer_email}`, quote.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        quote_id: quote.id,
        price_breakdown: priceBreakdown
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in water-quote function:", error);
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