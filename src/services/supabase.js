import { createClient } from '@supabase/supabase-js';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwemp1bWJzeGJmeHBkcGFldGp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3ODYzNzIsImV4cCI6MjAwODM2MjM3Mn0.HpHJpKitcu87Ey1DFXvuhtcsy-1GmwqrsNF4aaKbdf0';

export const supabaseUrl = 'https://lpzjumbsxbfxpdpaetju.supabase.co';

export const supabase = createClient(supabaseUrl, supabaseKey);
