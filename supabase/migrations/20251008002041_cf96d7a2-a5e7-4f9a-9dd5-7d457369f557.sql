-- Fix remaining security linter issues

-- 1. Fix all remaining functions with mutable search_path
-- Update has_role function
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM public.user_roles
        WHERE user_id = _user_id
        AND role = _role
    )
$$;

-- Update is_admin function
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
    SELECT public.is_current_user_admin()
$$;

-- Update get_current_user_role function
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS text
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role::text FROM public.user_roles WHERE user_id = auth.uid() LIMIT 1;
$$;

-- Update is_current_user_admin function
CREATE OR REPLACE FUNCTION public.is_current_user_admin()
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'::app_role
  );
$$;

-- Update ensure_admin_exists function
CREATE OR REPLACE FUNCTION public.ensure_admin_exists()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Check if any admin users exist
  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin'::app_role) THEN
    -- If no admin exists, return true to allow initial setup
    RETURN true;
  END IF;
  
  -- If admins exist, require proper authentication
  RETURN public.is_current_user_admin();
END;
$$;

-- Update update_spend_summary function
CREATE OR REPLACE FUNCTION public.update_spend_summary()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  -- Delete old summary data for this user/supplier/month if updating
  IF TG_OP = 'UPDATE' AND OLD.user_id IS NOT NULL THEN
    DELETE FROM public.spend_summary 
    WHERE user_id = OLD.user_id 
    AND supplier = OLD.supplier 
    AND month_year = TO_CHAR(OLD.invoice_date, 'YYYY-MM');
  END IF;
  
  -- Recalculate summary for the affected month
  INSERT INTO public.spend_summary (user_id, supplier, category, month_year, total_amount, invoice_count)
  SELECT 
    NEW.user_id,
    NEW.supplier,
    COALESCE(NEW.category, 'Uncategorized'),
    TO_CHAR(NEW.invoice_date, 'YYYY-MM'),
    SUM(total_amount),
    COUNT(*)
  FROM public.invoices 
  WHERE user_id = NEW.user_id 
  AND supplier = NEW.supplier 
  AND TO_CHAR(invoice_date, 'YYYY-MM') = TO_CHAR(NEW.invoice_date, 'YYYY-MM')
  GROUP BY user_id, supplier, category
  ON CONFLICT (user_id, supplier, month_year) 
  DO UPDATE SET 
    total_amount = EXCLUDED.total_amount,
    invoice_count = EXCLUDED.invoice_count,
    updated_at = now();
    
  RETURN NEW;
END;
$$;

-- Update update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Update trigger_refresh_job_cost_summary function
CREATE OR REPLACE FUNCTION public.trigger_refresh_job_cost_summary()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
    -- Schedule a refresh (this will be called by the financial workflow sync)
    PERFORM pg_notify('job_cost_summary_refresh', '');
    RETURN COALESCE(NEW, OLD);
END;
$$;

-- Update refresh_job_cost_summary function
CREATE OR REPLACE FUNCTION public.refresh_job_cost_summary()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    REFRESH MATERIALIZED VIEW CONCURRENTLY public.job_cost_summary;
END;
$$;

-- Update handle_new_user function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$;

-- Update update_updated_at_water function
CREATE OR REPLACE FUNCTION public.update_updated_at_water()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;