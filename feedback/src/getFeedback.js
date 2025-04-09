import { supabase } from './supabaseClient';

 const getFeedbacks = async () => {
  const res = await supabase
    .from('feedbacks')
    .select('*')
    .order('created_at', { ascending: false });

  return res.data || [];
};
export default getFeedbacks