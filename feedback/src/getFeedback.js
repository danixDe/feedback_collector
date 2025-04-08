import { supabase } from './supabaseClient';

export const getFeedbacks = async () => {
  const res = await supabase
    .from('feedbacks')
    .select('*')
    .order('created_at', { ascending: false });

  return res.data || [];
};
