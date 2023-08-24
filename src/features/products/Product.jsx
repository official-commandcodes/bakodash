import Button from '../../ui/Button';
import Table from '../../ui/Table';
import TableOperationsWrapper from '../../ui/TableOperationsWrapper';
import ProductRow from './ProductRow';
import ProductsHeader from './ProductsHeader';

function Product() {
  return (
    <Table>
      {/* Table Operations */}
      <TableOperationsWrapper>
        <Table.Title title="Products" />

        <TableOperationsWrapper>
          <Button>Add new Product</Button>

          <Table.Selector />
        </TableOperationsWrapper>
      </TableOperationsWrapper>

      <div className="bg-white mt-2 rounded-md md:p-2">
        {/* Table Header */}
        <ProductsHeader />

        {/* Table Body */}
        <div className="flex gap-2 flex-col py-1 mt-2 h-[25rem] overflow-y-scroll scrollbar-none">
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
        </div>
      </div>
    </Table>
  );
}

export default Product;
