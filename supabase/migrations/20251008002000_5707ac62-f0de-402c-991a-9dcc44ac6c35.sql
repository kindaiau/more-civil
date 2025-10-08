-- Fix CRITICAL and HIGH severity security issues

-- 1. Fix water_quotes_secure view - Remove SECURITY DEFINER
DROP VIEW IF EXISTS public.water_quotes_secure;

CREATE VIEW public.water_quotes_secure AS
SELECT 
  id,
  customer_name,
  CASE 
    WHEN LENGTH(customer_email) > 4 THEN LEFT(customer_email, 2) || '***' || RIGHT(customer_email, 2)
    ELSE '***'
  END as customer_email_masked,
  customer_email,
  CASE 
    WHEN LENGTH(customer_phone) > 4 THEN LEFT(customer_phone, 2) || '***' || RIGHT(customer_phone, 2)
    ELSE '***'
  END as customer_phone_masked,
  customer_phone,
  delivery_address,
  water_type,
  quantity_kl,
  preferred_date,
  calculated_price,
  price_breakdown,
  status,
  notes,
  created_at,
  updated_at
FROM public.water_quotes;

-- 2. Fix notify_suspicious_access function - Add stable search_path
CREATE OR REPLACE FUNCTION public.notify_suspicious_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    -- Placeholder for notification logic
    -- In production, this could send alerts via email or messaging
    RAISE NOTICE 'Suspicious access detected for user %', NEW.user_id;
    RETURN NEW;
END;
$$;

-- 3. Fix trigger_detect_suspicious_access function - Add stable search_path
CREATE OR REPLACE FUNCTION public.trigger_detect_suspicious_access()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
    access_count INTEGER;
BEGIN
    -- Count recent accesses by this user
    SELECT COUNT(*) INTO access_count
    FROM public.audit_logs
    WHERE user_id = NEW.user_id
    AND created_at > now() - INTERVAL '1 hour';
    
    -- If more than 50 accesses in 1 hour, trigger notification
    IF access_count > 50 THEN
        PERFORM public.notify_suspicious_access();
    END IF;
    
    RETURN NEW;
END;
$$;

-- 4. Strengthen user_roles RLS policies - Prevent privilege escalation
DROP POLICY IF EXISTS "Users cannot modify their own roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users cannot grant admin to others" ON public.user_roles;

-- Prevent users from inserting their own admin role
CREATE POLICY "Users cannot self-assign roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (false);

-- Prevent users from updating any roles
CREATE POLICY "Users cannot update roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (false);

-- Prevent users from deleting roles
CREATE POLICY "Users cannot delete roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (false);

-- Recreate the trigger for suspicious access detection
DROP TRIGGER IF EXISTS trigger_detect_suspicious_access ON public.audit_logs;

CREATE TRIGGER trigger_detect_suspicious_access
AFTER INSERT ON public.audit_logs
FOR EACH ROW
EXECUTE FUNCTION public.trigger_detect_suspicious_access();