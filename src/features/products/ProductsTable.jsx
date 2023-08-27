import { SpinnerCircularSplit } from 'spinners-react';
import Table from '../../ui/Table';
import ProductRow from './ProductRow';
import useProducts from './useProducts';

function ProductsTable() {
  const { isLoading, products } = useProducts();

  if (isLoading) {
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <SpinnerCircularSplit
          size={70}
          thickness={90}
          color="#3b82f6"
          speed={100}
        />
      </div>
    );
  }

  return (
    <>
      <Table columns="grid grid-cols-4 md:grid-cols-7 ">
        <Table.Header>
          <div className="hidden md:flex"></div>
          <div>Title</div>
          <div>Color</div>
          <div>Price</div>
          <div className="hidden md:block">Company</div>
          <div>Availability</div>
          <div className="hidden md:block">Action</div>
        </Table.Header>

        <Table.Body
          data={products}
          render={(product) => (
            <ProductRow key={product.id} product={product} />
          )}
        />
      </Table>
    </>
  );
}

export default ProductsTable;
