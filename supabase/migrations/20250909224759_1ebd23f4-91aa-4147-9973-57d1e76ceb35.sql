-- Create water quotes table
CREATE TABLE public.water_quotes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  delivery_address TEXT NOT NULL,
  water_type TEXT NOT NULL CHECK (water_type IN ('potable', 'non-potable')),
  quantity_kl INTEGER NOT NULL,
  preferred_date DATE NOT NULL,
  calculated_price NUMERIC(10,2) NOT NULL,
  price_breakdown JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'expired')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create water bookings table (for approved quotes)
CREATE TABLE public.water_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  quote_id UUID NOT NULL REFERENCES public.water_quotes(id),
  booking_reference TEXT NOT NULL UNIQUE,
  confirmed_date DATE NOT NULL,
  confirmed_price NUMERIC(10,2) NOT NULL,
  delivery_status TEXT NOT NULL DEFAULT 'scheduled' CHECK (delivery_status IN ('scheduled', 'in_transit', 'delivered', 'cancelled')),
  delivery_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create booking approvals table (for management workflow)
CREATE TABLE public.booking_approvals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  quote_id UUID NOT NULL REFERENCES public.water_quotes(id),
  approved_by TEXT NOT NULL,
  approval_status TEXT NOT NULL CHECK (approval_status IN ('approved', 'rejected')),
  approval_notes TEXT,
  approved_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.water_quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.water_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_approvals ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (customers don't need auth for quotes)
CREATE POLICY "Anyone can create water quotes" 
ON public.water_quotes 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view their own quotes by email" 
ON public.water_quotes 
FOR SELECT 
USING (true);

-- Policies for bookings (public read access for confirmation)
CREATE POLICY "Anyone can view bookings" 
ON public.water_bookings 
FOR SELECT 
USING (true);

-- Policies for approvals (public read access)
CREATE POLICY "Anyone can view approvals" 
ON public.booking_approvals 
FOR SELECT 
USING (true);

-- For authenticated users (management), allow all operations
CREATE POLICY "Authenticated users can manage quotes" 
ON public.water_quotes 
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can manage bookings" 
ON public.water_bookings 
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can manage approvals" 
ON public.booking_approvals 
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_water()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_water_quotes_updated_at
BEFORE UPDATE ON public.water_quotes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_water();

CREATE TRIGGER update_water_bookings_updated_at
BEFORE UPDATE ON public.water_bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_water();

-- Create index for better performance
CREATE INDEX idx_water_quotes_status ON public.water_quotes(status);
CREATE INDEX idx_water_quotes_created_at ON public.water_quotes(created_at);
CREATE INDEX idx_water_bookings_quote_id ON public.water_bookings(quote_id);