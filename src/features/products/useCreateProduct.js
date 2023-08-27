import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAndEditProduct } from '../../services/apiProducts';
import { toast } from 'react-hot-toast';

export function useCreateProduct() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createProduct } =
    useMutation({
      mutationKey: ['product'],
      mutationFn: createAndEditProduct,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['products'],
        });

        toast.success('Product created successfully');
      },

      onError: (err) => {
        toast.error(err.message);
      },
    });

  return { isCreating, createProduct };
}
