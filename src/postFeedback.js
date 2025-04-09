import { supabase } from './supabaseClient';

 const postFeedback = async (data) => {
  const { error } = await supabase.from('feedbacks').insert([data]);
  if (error) throw error;
};
export default postFeedback