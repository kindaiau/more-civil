-- Fix infinite recursion in user_roles table by creating security definer function
-- and updating RLS policies

-- First, drop the existing problematic policy
DROP POLICY IF EXISTS "Only admins can manage roles" ON public.user_roles;

-- Create a security definer function to check user roles without recursion
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT AS $$
  SELECT role::text FROM public.user_roles WHERE user_id = auth.uid() LIMIT 1;
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

-- Create a more specific admin check function
CREATE OR REPLACE FUNCTION public.is_current_user_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'::app_role
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

-- Update RLS policies for user_roles table to prevent recursion
CREATE POLICY "Users can view their own roles v2" 
ON public.user_roles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles v2" 
ON public.user_roles 
FOR ALL 
USING (public.is_current_user_admin())
WITH CHECK (public.is_current_user_admin());

-- Update the existing is_admin function to use the new approach
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $$
    SELECT public.is_current_user_admin()
$$;

-- Fix water_quotes table - restrict admin access to only actual admins
DROP POLICY IF EXISTS "Only admins can view water quotes" ON public.water_quotes;
DROP POLICY IF EXISTS "Only admins can update water quotes" ON public.water_quotes;
DROP POLICY IF EXISTS "Only admins can delete water quotes" ON public.water_quotes;

CREATE POLICY "Authenticated admins can view water quotes"
ON public.water_quotes
FOR SELECT
USING (public.is_admin());

CREATE POLICY "Authenticated admins can update water quotes"
ON public.water_quotes
FOR UPDATE
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Authenticated admins can delete water quotes"
ON public.water_quotes
FOR DELETE
USING (public.is_admin());

-- Fix overly permissive business data access
-- Update water_bookings to restrict access to admins only
DROP POLICY IF EXISTS "Anyone can view bookings" ON public.water_bookings;
DROP POLICY IF EXISTS "Authenticated users can manage bookings" ON public.water_bookings;

CREATE POLICY "Admins can view water bookings"
ON public.water_bookings
FOR SELECT
USING (public.is_admin());

CREATE POLICY "Admins can manage water bookings"
ON public.water_bookings
FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- Update booking_approvals to restrict access to admins only
DROP POLICY IF EXISTS "Anyone can view approvals" ON public.booking_approvals;
DROP POLICY IF EXISTS "Authenticated users can manage approvals" ON public.booking_approvals;

CREATE POLICY "Admins can view booking approvals"
ON public.booking_approvals
FOR SELECT
USING (public.is_admin());

CREATE POLICY "Admins can manage booking approvals"
ON public.booking_approvals
FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- Ensure we have at least one admin user for testing
-- This will create an admin role for the first user that signs up
-- You should manually assign admin roles through the Supabase dashboard after auth is set up