import supabase, { supabaseUrl } from './supabase';

export async function getCabines() {
const { data, error } = await supabase.from('cabins').select('*');

if (error) {
   console.error(error);
   throw new Error('Cabins could not be loaded');
}

return data;
}

export async function createEditCabin (newCabin, id) {
   const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');

   const imagePath = hasImagePath ? newCabin.image :`${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;

   // 1- create/edit cabin
   let query =  supabase.from('cabins');

   // A- create 
  if (!id) query = query.insert([{...newCabin, image: imagePath }]);

   // B- edit
  if (id) query = query.update({...newCabin, image: imagePath })
   .eq('id', id);

   const { data, error } = await query.select()
   .single();

 if (error) {
   console.error(error);
   throw new Error('Cabines could not be created');
}

// 2-upload images
if (hasImagePath) return data;

const { error: storageError } = await supabase
  .storage
  .from('cabins-images')
  .upload(imageName, newCabin.image );
 
// 3- delete the capin if there was an error uploading 
if (storageError) { 
   await supabase
   .from('cabins')
   .delete()
   .eq('id', data.id);

   console.error(storageError);
   throw new Error('Cabin image could not be uploaded and the capin was not created');
}

return data;
}


export async function  deleteCabin(id) {

   const {data, error } = await supabase
   .from('cabins')
   .delete()
   .eq('id', id);

   if (error) {
      console.error(error);
      throw new Error('Cabins could not be deleted');
   }
   
   return data;
}