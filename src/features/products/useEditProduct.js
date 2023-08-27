import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAndEditProduct } from '../../services/apiProducts';
import { toast } from 'react-hot-toast';

function useEditProduct() {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editProduct } = useMutation({
    mutationFn: ({ values, id }) => createAndEditProduct(values, id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
      toast.success('Product updated successfully');
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, editProduct };
}

export default useEditProduct;
