import supabase, { supabaseUrl } from './supabase';

export async function getCabines() {
const {data, error} = await supabase.from('cabins').select('*');

if (error) {
   console.error(error);
   throw new Error('Cabins could not be loaded');
}

return data;
}


export async function createCabin (newCabin) {
   // https://znfmmkrjaydtmpkpbstq.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg

   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');

   const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

   // 1- create cabin
   const {data, error} = await supabase.from('cabins').insert([{...newCabin, image: imagePath}]);


 if (error) {
   throw new Error('Cabines could not be created');
}

// 2-upload images
const { error: storageError } = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName, newCabin.image );
 
// 3- delete the capin if there was an error uploading 
if (storageError) { 
   await supabase
   .from('cabins')
   .delete()
   .eq('id', data.id);

   console.error(storageError);
   throw new Error('Cabins could not be uploaded and the capin was not created');
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