-- Create water_quotes table for storing water delivery quote requests
CREATE TABLE IF NOT EXISTS public.water_quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  delivery_address TEXT NOT NULL,
  water_type TEXT NOT NULL CHECK (water_type IN ('potable', 'nonPotable')),
  quantity_kl NUMERIC NOT NULL CHECK (quantity_kl > 0),
  preferred_date DATE NOT NULL,
  additional_notes TEXT,
  calculated_price NUMERIC NOT NULL,
  price_breakdown JSONB,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'quoted', 'confirmed', 'completed', 'cancelled')),
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.water_quotes ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Anyone can submit quote requests (public form)
CREATE POLICY "Anyone can submit water quotes"
ON public.water_quotes
FOR INSERT
WITH CHECK (true);

-- RLS Policy: Only admins can view quotes (protect customer PII)
CREATE POLICY "Admins can view all water quotes"
ON public.water_quotes
FOR SELECT
USING (public.is_current_user_admin());

-- RLS Policy: Only admins can update quotes (change status, pricing, notes)
CREATE POLICY "Admins can update water quotes"
ON public.water_quotes
FOR UPDATE
USING (public.is_current_user_admin())
WITH CHECK (public.is_current_user_admin());

-- RLS Policy: Only admins can delete quotes
CREATE POLICY "Admins can delete water quotes"
ON public.water_quotes
FOR DELETE
USING (public.is_current_user_admin());

-- Add trigger for automatic updated_at timestamp
CREATE TRIGGER update_water_quotes_updated_at
BEFORE UPDATE ON public.water_quotes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for common queries
CREATE INDEX idx_water_quotes_status ON public.water_quotes(status);
CREATE INDEX idx_water_quotes_created_at ON public.water_quotes(created_at DESC);
CREATE INDEX idx_water_quotes_customer_email ON public.water_quotes(customer_email);