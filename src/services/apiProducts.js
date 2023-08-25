import { supabase } from './supabase';

export async function getProducts() {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    throw new Error('Cannot find products');
  }

  return data;
}
