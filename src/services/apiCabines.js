import supabase from './supabase';

export async function getCabines() {
const { data, error } = await supabase.from('cabins').select('*');

if (error) {
   console.error(error);
   throw new Error('Cabines could not be loaded');
}

return data;
}

export async function  deleteCabin(id) {

   const { data, error } = await supabase
   .from('cabins')
   .delete()
   .eq('id', id);

   if (error) {
      console.error(error);
      throw new Error('Cabines could not be deleted');
   }
   
   return data;
}