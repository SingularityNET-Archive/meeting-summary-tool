import { createClient } from "@supabase/supabase-js";

// Regular client setup (public-facing, uses ANON key)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL; // Ensure this is set in your environment variables
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Public ANON key for general client operations

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
