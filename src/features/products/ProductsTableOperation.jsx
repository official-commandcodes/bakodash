import CreateProductTable from './CreateProductTable';
import TableOperationsWrapper from '../../ui/TableOperationsWrapper';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import Select from '../../ui/Select';

function ProductsTableOperation() {
  return (
    <TableOperationsWrapper>
      <Modal>
        <Modal.Open buttonName="addProduct">
          <Button>Add new Product</Button>
        </Modal.Open>

        <Modal.Window windowName="addProduct">
          <CreateProductTable />
        </Modal.Window>
      </Modal>

      <Select />
    </TableOperationsWrapper>
  );
}

export default ProductsTableOperation;
