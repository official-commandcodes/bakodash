import ProductsTable from '../features/products/ProductsTable';
import ProductsTableOperation from '../features/products/ProductsTableOperation';
import TableOperationsWrapper from '../ui/TableOperationsWrapper';
import Heading from '../ui/Heading';

function Products() {
  return (
    <div className="p-1 md:px-10 md:py-3">
      <TableOperationsWrapper>
        <Heading>All Products</Heading>

        <ProductsTableOperation />
      </TableOperationsWrapper>

      <>
        <ProductsTable />
      </>
    </div>
  );
}

export default Products;
