-- Update the remaining business data access policies to fix overly permissive access

-- Fix water_quotes table - only allow public access for INSERT (for quote requests)
-- All other operations require admin authentication
DROP POLICY IF EXISTS "Anyone can create water quotes" ON public.water_quotes;

CREATE POLICY "Public can submit water quote requests"
ON public.water_quotes
FOR INSERT
WITH CHECK (true);

-- Ensure contact form remains publicly accessible for submissions only
-- (This is already correctly configured, just confirming)

-- Create an initial admin user policy helper for easier admin setup
-- This will help when setting up the first admin user after authentication is implemented
CREATE OR REPLACE FUNCTION public.ensure_admin_exists()
RETURNS BOOLEAN AS $$
BEGIN
  -- Check if any admin users exist
  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin'::app_role) THEN
    -- If no admin exists, return true to allow initial setup
    RETURN true;
  END IF;
  
  -- If admins exist, require proper authentication
  RETURN public.is_current_user_admin();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;