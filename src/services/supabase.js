
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://znfmmkrjaydtmpkpbstq.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuZm1ta3JqYXlkdG1wa3Bic3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMzAwNzMsImV4cCI6MjA0NjkwNjA3M30.gka3nSj3VkhrYszcTTtKHitl-sv2PsGHesojtXLeyTk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;