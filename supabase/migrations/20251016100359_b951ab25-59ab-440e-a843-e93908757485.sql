-- Remove water_quotes_secure view if it exists (security cleanup)
DROP VIEW IF EXISTS public.water_quotes_secure CASCADE;

-- This view was unused and had no RLS policies
-- All water quote access should go through the water_quotes table directly
-- which has proper RLS policies with admin verification and audit logging