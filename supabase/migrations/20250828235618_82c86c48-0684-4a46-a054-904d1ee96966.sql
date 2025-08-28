-- Security Fix 1: Update invoice_processing_log INSERT policy to restrict to user's own data
DROP POLICY IF EXISTS "System can insert processing logs" ON public.invoice_processing_log;

CREATE POLICY "Users can insert their own processing logs" 
ON public.invoice_processing_log 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Security Fix 2: Harden refresh_job_cost_summary function with explicit search_path
CREATE OR REPLACE FUNCTION public.refresh_job_cost_summary()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
BEGIN
    REFRESH MATERIALIZED VIEW CONCURRENTLY public.job_cost_summary;
END;
$function$;