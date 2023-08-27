import { supabase, supabaseUrl } from './supabase';

export async function getProducts() {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    throw new Error('Cannot find products');
  }

  return data;
}

export async function createAndEditProduct(newProduct, id) {
  const hasImagePath = typeof newProduct.image === 'string';

  let imageName, imageUrl;

  if (!hasImagePath) {
    // 1) CREATE IMAGE NAME
    imageName = `${Math.random() * 6}-${newProduct.image.name}`;

    // 2) CONSTRUCT THE IMAGE PATH TO SUPABSE BUCKET
    imageUrl = `${supabaseUrl}/storage/v1/object/public/product-images/${imageName}`;
  }

  let query = supabase.from('products');
  // CREATE PRODUCT
  if (!id)
    query = query
      .insert([{ ...newProduct, image: imageUrl }])
      .select();

  if (id)
    query = query
      .update({
        ...newProduct,
        image: hasImagePath ? newProduct.image : imageUrl,
      })
      .eq('id', id)
      .select();

  const { data: product, error } = await query;

  if (error) {
    throw new Error('Product could not be created');
  }

  if (!hasImagePath) {
    // Upload image to supabase
    const { storageError } = await supabase.storage
      .from('product-images')
      .upload(imageName, newProduct.image);

    // IF THERE WAS ANY ERROR WHILE UPLOADING DELETE THE RECENTLY CREATED ROW
    if (storageError) {
      await supabase.from('products').delete().eq('id', product.id);
    }
  }

  return product;
}

export async function deleteProduct(id) {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) {
    throw new Error('Product could not be deleted');
  }
}
