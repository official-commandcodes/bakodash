import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/apiProducts';

function useProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return { isLoading, products, error };
}

export default useProducts;
