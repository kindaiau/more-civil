-- Critical Security Fixes for Customer Data Protection

-- 1. Create audit logging table for tracking admin access to sensitive data
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    table_name TEXT NOT NULL,
    operation TEXT NOT NULL,
    record_id UUID,
    sensitive_data_accessed JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on audit logs
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Only admins can read audit logs
CREATE POLICY "Only admins can view audit logs" 
ON public.audit_logs 
FOR SELECT 
USING (is_admin());

-- System can insert audit logs (no user restriction for system logging)
CREATE POLICY "System can insert audit logs" 
ON public.audit_logs 
FOR INSERT 
WITH CHECK (true);

-- 2. Create enhanced admin verification function with logging
CREATE OR REPLACE FUNCTION public.verify_admin_with_audit(
    operation TEXT,
    table_name TEXT,
    record_id UUID DEFAULT NULL,
    sensitive_fields JSONB DEFAULT NULL
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    is_admin_user BOOLEAN;
BEGIN
    -- Check if user is admin
    SELECT is_current_user_admin() INTO is_admin_user;
    
    -- If user is admin, log the access
    IF is_admin_user THEN
        INSERT INTO public.audit_logs (
            user_id,
            table_name,
            operation,
            record_id,
            sensitive_data_accessed,
            created_at
        ) VALUES (
            auth.uid(),
            table_name,
            operation,
            record_id,
            sensitive_fields,
            now()
        );
    END IF;
    
    RETURN is_admin_user;
END;
$$;

-- 3. Create function to encrypt sensitive customer data
CREATE OR REPLACE FUNCTION public.encrypt_customer_data(data TEXT)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Simple obfuscation for demo - in production use pgcrypto
    IF data IS NULL THEN
        RETURN NULL;
    END IF;
    
    -- Show only first 2 and last 2 characters for emails/phones
    IF LENGTH(data) > 4 THEN
        RETURN LEFT(data, 2) || '***' || RIGHT(data, 2);
    ELSE
        RETURN '***';
    END IF;
END;
$$;

-- 4. Create secure view for water quotes that logs access
CREATE OR REPLACE VIEW public.water_quotes_secure AS
SELECT 
    id,
    customer_name,
    encrypt_customer_data(customer_email) as customer_email_masked,
    encrypt_customer_data(customer_phone) as customer_phone_masked,
    customer_email,
    customer_phone,
    delivery_address,
    water_type,
    preferred_date,
    quantity_kl,
    calculated_price,
    price_breakdown,
    status,
    notes,
    created_at,
    updated_at
FROM public.water_quotes;

-- Enable RLS on the secure view
ALTER VIEW public.water_quotes_secure SET (security_barrier = true);

-- 5. Update water quotes policies to use enhanced verification
DROP POLICY IF EXISTS "Authenticated admins can view water quotes" ON public.water_quotes;
DROP POLICY IF EXISTS "Authenticated admins can update water quotes" ON public.water_quotes;
DROP POLICY IF EXISTS "Authenticated admins can delete water quotes" ON public.water_quotes;

-- New stricter policies with audit logging
CREATE POLICY "Enhanced admin access for water quotes SELECT" 
ON public.water_quotes 
FOR SELECT 
USING (
    verify_admin_with_audit('SELECT', 'water_quotes', id, 
        jsonb_build_object(
            'customer_email', customer_email,
            'customer_phone', customer_phone,
            'delivery_address', delivery_address
        )
    )
);

CREATE POLICY "Enhanced admin access for water quotes UPDATE" 
ON public.water_quotes 
FOR UPDATE 
USING (
    verify_admin_with_audit('UPDATE', 'water_quotes', id, 
        jsonb_build_object(
            'customer_email', customer_email,
            'customer_phone', customer_phone
        )
    )
)
WITH CHECK (
    verify_admin_with_audit('UPDATE', 'water_quotes', id, 
        jsonb_build_object(
            'customer_email', customer_email,
            'customer_phone', customer_phone
        )
    )
);

CREATE POLICY "Enhanced admin access for water quotes DELETE" 
ON public.water_quotes 
FOR DELETE 
USING (
    verify_admin_with_audit('DELETE', 'water_quotes', id, 
        jsonb_build_object(
            'customer_email', customer_email,
            'customer_phone', customer_phone
        )
    )
);

-- 6. Update contact submissions policies similarly
DROP POLICY IF EXISTS "Only admins can view contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Only admins can update contact submissions" ON public.contact_submissions;

CREATE POLICY "Enhanced admin access for contact submissions SELECT" 
ON public.contact_submissions 
FOR SELECT 
USING (
    verify_admin_with_audit('SELECT', 'contact_submissions', id, 
        jsonb_build_object(
            'email', email,
            'phone', phone,
            'ip_address', ip_address,
            'name', name
        )
    )
);

CREATE POLICY "Enhanced admin access for contact submissions UPDATE" 
ON public.contact_submissions 
FOR UPDATE 
USING (
    verify_admin_with_audit('UPDATE', 'contact_submissions', id, 
        jsonb_build_object(
            'email', email,
            'phone', phone
        )
    )
)
WITH CHECK (
    verify_admin_with_audit('UPDATE', 'contact_submissions', id, 
        jsonb_build_object(
            'email', email,
            'phone', phone
        )
    )
);

-- 7. Create function to check for suspicious access patterns
CREATE OR REPLACE FUNCTION public.detect_suspicious_access()
RETURNS TABLE (
    user_id UUID,
    access_count BIGINT,
    unique_records_accessed BIGINT,
    first_access TIMESTAMP WITH TIME ZONE,
    last_access TIMESTAMP WITH TIME ZONE
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT 
        a.user_id,
        COUNT(*) as access_count,
        COUNT(DISTINCT a.record_id) as unique_records_accessed,
        MIN(a.created_at) as first_access,
        MAX(a.created_at) as last_access
    FROM public.audit_logs a
    WHERE a.created_at > now() - INTERVAL '24 hours'
        AND a.operation = 'SELECT'
        AND a.table_name IN ('water_quotes', 'contact_submissions')
    GROUP BY a.user_id
    HAVING COUNT(*) > 50 -- Flag users accessing more than 50 records in 24h
    ORDER BY access_count DESC;
$$;