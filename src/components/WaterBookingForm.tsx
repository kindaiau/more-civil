import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const waterBookingSchema = z.object({
  customer_name: z.string().min(2, "Name must be at least 2 characters"),
  customer_email: z.string().email("Please enter a valid email address"),
  customer_phone: z.string().min(10, "Please enter a valid phone number"),
  delivery_address: z.string().min(10, "Please enter a complete delivery address"),
  water_type: z.enum(["potable", "nonPotable"]).refine((val) => val !== undefined, {
    message: "Please select a water type",
  }),
  quantity_kl: z.number().min(10, "Minimum delivery is 10KL").max(1000, "Maximum delivery is 1000KL"),
  preferred_date: z.date().refine((val) => val !== undefined, {
    message: "Please select a preferred delivery date",
  }),
  notes: z.string().optional(),
});

type WaterBookingFormData = z.infer<typeof waterBookingSchema>;

interface PriceBreakdown {
  water_cost: number;
  delivery_fee: number;
  total_price: number;
  bulk_discount_applied: boolean;
}

export default function WaterBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [priceEstimate, setPriceEstimate] = useState<PriceBreakdown | null>(null);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<WaterBookingFormData>({
    resolver: zodResolver(waterBookingSchema),
    defaultValues: {
      customer_name: "",
      customer_email: "",
      customer_phone: "",
      delivery_address: "",
      quantity_kl: 10,
      notes: "",
    },
  });

  // Calculate estimate when water type or quantity changes
  const watchedValues = form.watch(["water_type", "quantity_kl"]);
  
  const calculateEstimate = (waterType: string, quantity: number) => {
    if (!waterType || !quantity || quantity < 10) return null;
    
    // Placeholder pricing calculation (matches edge function)
    const basePricePerKL = waterType === "potable" ? 100 : 80;
    let waterCost = basePricePerKL * quantity;
    
    // Bulk discount for 50KL+
    const bulkDiscountApplied = quantity >= 50;
    if (bulkDiscountApplied) {
      waterCost = waterCost * 0.9; // 10% discount
    }
    
    const deliveryFee = 75;
    const totalPrice = waterCost + deliveryFee;
    
    return {
      water_cost: waterCost,
      delivery_fee: deliveryFee,
      total_price: totalPrice,
      bulk_discount_applied: bulkDiscountApplied
    };
  };

  // Update estimate when form values change
  React.useEffect(() => {
    const [waterType, quantity] = watchedValues;
    const estimate = calculateEstimate(waterType, quantity);
    setPriceEstimate(estimate);
  }, [watchedValues]);

  const onSubmit = async (data: WaterBookingFormData) => {
    setIsSubmitting(true);
    
    try {
      const { data: result, error } = await supabase.functions.invoke('water-quote', {
        body: {
          ...data,
          preferred_date: data.preferred_date.toISOString().split('T')[0], // Convert to YYYY-MM-DD
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!result?.success) {
        throw new Error(result?.error || "Failed to submit quote request");
      }

      setQuoteSubmitted(true);
      toast({
        title: "Quote Request Submitted!",
        description: "We'll review your request and contact you within 24 hours.",
      });
      
      form.reset();
      setPriceEstimate(null);
      
    } catch (error: any) {
      console.error('Quote submission error:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (quoteSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto border-2 border-primary rounded-md">
        <CardHeader className="text-center">
          <CardTitle className="text-green-600">Quote Request Submitted!</CardTitle>
          <CardDescription>
            Thank you for your water delivery request. We'll review your quote and contact you within 24 hours with confirmation and final pricing.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button 
            onClick={() => setQuoteSubmitted(false)}
            variant="outline"
          >
            Submit Another Quote
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto border-2 border-primary rounded-md">
      <CardHeader>
        <CardTitle>Request Water Delivery Quote</CardTitle>
        <CardDescription>
          Get an instant estimate for professional water delivery services. Minimum delivery 10KL.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="customer_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Smith" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="customer_phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="0400 123 456" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="customer_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="delivery_address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Address</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="123 Main Street, Adelaide SA 5000"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="water_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Water Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select water type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="potable">Potable (Drinking Water)</SelectItem>
                        <SelectItem value="nonPotable">Non-Potable (Construction/Irrigation)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quantity_kl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity (KL)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min="10" 
                        max="1000" 
                        placeholder="20"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="preferred_date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Preferred Delivery Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any special delivery instructions or requirements..."
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {priceEstimate && (
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Price Estimate (Placeholder)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Water Cost ({form.watch("quantity_kl")}KL):</span>
                    <span>${priceEstimate.water_cost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span>${priceEstimate.delivery_fee.toFixed(2)}</span>
                  </div>
                  {priceEstimate.bulk_discount_applied && (
                    <div className="flex justify-between text-green-600">
                      <span>Bulk Discount (10%):</span>
                      <span>Applied</span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold text-lg border-t pt-2">
                    <span>Total Estimate:</span>
                    <span>${priceEstimate.total_price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    * This is a preliminary estimate. Final pricing will be confirmed by our team.
                  </p>
                </CardContent>
              </Card>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Quote Request...
                </>
              ) : (
                "Request Quote"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}