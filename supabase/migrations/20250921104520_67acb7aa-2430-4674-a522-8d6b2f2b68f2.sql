-- Remove unused Xero-related tables that are causing security warnings
-- These tables contain sensitive token fields but aren't being used for More Civil

-- Drop the unused Xero tables
DROP TABLE IF EXISTS public.xero_tokens CASCADE;
DROP TABLE IF EXISTS public.xero_invoices CASCADE;

-- Also clean up any references to xero in bank_transactions table
-- Update bank_transactions to remove xero reference column if not needed
-- (keeping this comment for now as we should verify if this field is actually used)