import Table from '../../ui/Table';
import ProductRow from './ProductRow';
import useProducts from './useProducts';

function ProductsTable() {
  const { isLoading, products } = useProducts();

  if (isLoading) console.log('Loading.....');

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
