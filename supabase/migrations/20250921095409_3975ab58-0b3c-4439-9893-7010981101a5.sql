-- Drop all existing policies on user_roles first
DROP POLICY IF EXISTS "Users can view their own roles v2" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can manage all roles v2" ON public.user_roles;

-- Create security definer functions (recreate to ensure they exist)
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT AS $$
  SELECT role::text FROM public.user_roles WHERE user_id = auth.uid() LIMIT 1;
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

CREATE OR REPLACE FUNCTION public.is_current_user_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'::app_role
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

-- Create new non-recursive policies for user_roles
CREATE POLICY "Users view own roles only" 
ON public.user_roles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Admins manage all roles" 
ON public.user_roles 
FOR ALL 
USING (public.is_current_user_admin())
WITH CHECK (public.is_current_user_admin());