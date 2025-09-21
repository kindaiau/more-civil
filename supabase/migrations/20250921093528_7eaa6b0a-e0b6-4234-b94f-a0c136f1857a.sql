-- Fix critical security vulnerability in water_quotes table
-- The current SELECT policy allows anyone to view all customer data

-- Step 1: Drop the problematic policies that expose customer data
DROP POLICY IF EXISTS "Anyone can view their own quotes by email" ON public.water_quotes;
DROP POLICY IF EXISTS "Authenticated users can manage quotes" ON public.water_quotes;

-- Step 2: Create secure policies that protect customer data
-- Only admin users can view quotes (for management purposes)
CREATE POLICY "Only admins can view water quotes"
    ON public.water_quotes
    FOR SELECT
    USING (public.is_admin());

-- Only admin users can update quotes (for approval/rejection)
CREATE POLICY "Only admins can update water quotes" 
    ON public.water_quotes
    FOR UPDATE
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

-- Only admin users can delete quotes if needed
CREATE POLICY "Only admins can delete water quotes"
    ON public.water_quotes
    FOR DELETE
    USING (public.is_admin());

-- Keep the public INSERT policy for form submissions (this is necessary for the contact form)
-- The existing "Anyone can create water quotes" policy remains as is