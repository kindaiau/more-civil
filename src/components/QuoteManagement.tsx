import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { CheckCircle, XCircle, Clock, Eye } from "lucide-react";

interface WaterQuote {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  delivery_address: string;
  water_type: string;
  quantity_kl: number;
  preferred_date: string;
  calculated_price: number;
  price_breakdown: any;
  notes: string | null;
  status: string;
  created_at: string;
}

export default function QuoteManagement() {
  const [quotes, setQuotes] = useState<WaterQuote[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<WaterQuote | null>(null);
  const [approvalNotes, setApprovalNotes] = useState("");
  const [adjustedPrice, setAdjustedPrice] = useState("");
  const [processing, setProcessing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const { data, error } = await supabase
        .from('water_quotes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setQuotes(data || []);
    } catch (error: any) {
      console.error('Error fetching quotes:', error);
      toast({
        title: "Error",
        description: "Failed to load quotes",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (quoteId: string, status: 'approved' | 'rejected') => {
    if (!selectedQuote) return;
    
    setProcessing(true);
    try {
      // Update quote status
      const finalPrice = adjustedPrice ? parseFloat(adjustedPrice) : selectedQuote.calculated_price;
      
      const { error: updateError } = await supabase
        .from('water_quotes')
        .update({ 
          status: status,
          calculated_price: finalPrice
        })
        .eq('id', quoteId);

      if (updateError) throw updateError;

      // Create approval record
      const { error: approvalError } = await supabase
        .from('booking_approvals')
        .insert({
          quote_id: quoteId,
          approval_status: status,
          approval_notes: approvalNotes || null,
          approved_by: 'Management' // In a real app, this would be the current user
        });

      if (approvalError) throw approvalError;

      // If approved, create booking
      if (status === 'approved') {
        const { error: bookingError } = await supabase
          .from('water_bookings')
          .insert({
            quote_id: quoteId,
            confirmed_date: selectedQuote.preferred_date,
            confirmed_price: finalPrice,
            booking_reference: `WB-${Date.now()}`,
            delivery_status: 'scheduled'
          });

        if (bookingError) throw bookingError;
      }

      toast({
        title: status === 'approved' ? "Quote Approved" : "Quote Rejected",
        description: `Quote has been ${status} and customer will be notified.`,
      });

      // Refresh quotes list
      fetchQuotes();
      setSelectedQuote(null);
      setApprovalNotes("");
      setAdjustedPrice("");

    } catch (error: any) {
      console.error('Error processing approval:', error);
      toast({
        title: "Error",
        description: "Failed to process approval",
        variant: "destructive",
      });
    } finally {
      setProcessing(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'approved':
        return <Badge variant="default" className="bg-green-600"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case 'rejected':
        return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Water Delivery Quote Management</h1>
        <p>Loading quotes...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Water Delivery Quote Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quotes List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Quote Requests ({quotes.length})</h2>
          
          {quotes.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">No quote requests found.</p>
              </CardContent>
            </Card>
          ) : (
            quotes.map((quote) => (
              <Card key={quote.id} className="cursor-pointer hover:bg-muted/50" onClick={() => setSelectedQuote(quote)}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{quote.customer_name}</CardTitle>
                      <CardDescription>
                        {quote.quantity_kl}KL {quote.water_type === 'potable' ? 'Potable' : 'Non-Potable'} Water
                      </CardDescription>
                    </div>
                    {getStatusBadge(quote.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm">
                    <p><strong>Delivery Date:</strong> {format(new Date(quote.preferred_date), 'PPP')}</p>
                    <p><strong>Estimated Price:</strong> ${quote.calculated_price.toFixed(2)}</p>
                    <p><strong>Requested:</strong> {format(new Date(quote.created_at), 'PPP')}</p>
                  </div>
                  {quote.id === selectedQuote?.id && (
                    <div className="mt-2 flex items-center text-primary">
                      <Eye className="w-4 h-4 mr-1" />
                      <span className="text-sm">Selected for review</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Quote Details & Approval */}
        <div>
          {selectedQuote ? (
            <Card>
              <CardHeader>
                <CardTitle>Quote Details</CardTitle>
                <CardDescription>Review and approve/reject this quote request</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Customer:</strong> {selectedQuote.customer_name}
                  </div>
                  <div>
                    <strong>Email:</strong> {selectedQuote.customer_email}
                  </div>
                  <div>
                    <strong>Phone:</strong> {selectedQuote.customer_phone}
                  </div>
                  <div>
                    <strong>Status:</strong> {getStatusBadge(selectedQuote.status)}
                  </div>
                </div>

                <div>
                  <strong>Delivery Address:</strong>
                  <p className="text-sm mt-1">{selectedQuote.delivery_address}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Water Type:</strong><br />
                    {selectedQuote.water_type === 'potable' ? 'Potable' : 'Non-Potable'}
                  </div>
                  <div>
                    <strong>Quantity:</strong><br />
                    {selectedQuote.quantity_kl}KL
                  </div>
                  <div>
                    <strong>Preferred Date:</strong><br />
                    {format(new Date(selectedQuote.preferred_date), 'MMM d, yyyy')}
                  </div>
                </div>

                {selectedQuote.price_breakdown && (
                  <div className="bg-muted p-4 rounded">
                    <strong>Price Breakdown (Placeholder):</strong>
                    <div className="text-sm mt-2 space-y-1">
                      <div className="flex justify-between">
                        <span>Water Cost:</span>
                        <span>${selectedQuote.price_breakdown.water_cost?.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Fee:</span>
                        <span>${selectedQuote.price_breakdown.delivery_fee?.toFixed(2)}</span>
                      </div>
                      {selectedQuote.price_breakdown.bulk_discount_applied && (
                        <div className="flex justify-between text-green-600">
                          <span>Bulk Discount:</span>
                          <span>Applied</span>
                        </div>
                      )}
                      <div className="flex justify-between font-semibold border-t pt-1">
                        <span>Total:</span>
                        <span>${selectedQuote.calculated_price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedQuote.notes && (
                  <div>
                    <strong>Customer Notes:</strong>
                    <p className="text-sm mt-1 bg-muted p-2 rounded">{selectedQuote.notes}</p>
                  </div>
                )}

                {selectedQuote.status === 'pending' && (
                  <div className="space-y-4 border-t pt-4">
                    <div>
                      <Label htmlFor="adjusted-price">Adjusted Price (optional)</Label>
                      <Input
                        id="adjusted-price"
                        type="number"
                        step="0.01"
                        placeholder={selectedQuote.calculated_price.toFixed(2)}
                        value={adjustedPrice}
                        onChange={(e) => setAdjustedPrice(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Leave empty to use calculated price
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="approval-notes">Approval Notes</Label>
                      <Textarea
                        id="approval-notes"
                        placeholder="Add any notes about this approval/rejection..."
                        value={approvalNotes}
                        onChange={(e) => setApprovalNotes(e.target.value)}
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleApproval(selectedQuote.id, 'approved')}
                        disabled={processing}
                        className="flex-1"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve Quote
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => handleApproval(selectedQuote.id, 'rejected')}
                        disabled={processing}
                        className="flex-1"
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject Quote
                      </Button>
                    </div>
                  </div>
                )}

                {selectedQuote.status !== 'pending' && (
                  <div className="bg-muted p-4 rounded">
                    <p className="text-sm">
                      This quote has already been {selectedQuote.status}.
                      {selectedQuote.status === 'approved' && ' A booking has been created.'}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Select a quote from the list to review details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}