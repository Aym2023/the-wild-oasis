import supabase from './supabase';

export async function getCabines() {
const { data, error } = await supabase.from('cabins').select('*');

if (error) {
   console.error(error);
   throw new Error('Cabines could not be loaded');
}

return data;
}