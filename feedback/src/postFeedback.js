import { supabase } from './supabaseClient';

export const postFeedbacks = async (data) => {
  await supabase.from('feedbacks').insert([data]);
};
