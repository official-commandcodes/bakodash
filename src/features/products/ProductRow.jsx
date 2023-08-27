import { HiOutlineCheck, HiOutlineTrash } from 'react-icons/hi2';
import { LiaEdit } from 'react-icons/lia';

import CreateProductTable from './CreateProductTable';

import Table from '../../ui/Table';
import Modal from '../../ui/Modal';
import Icon from '../../ui/Icon';
import ConfirmDelete from '../../ui/ConfirmDelete';

function ProductRow({ product }) {
  const { id, availability, color, company, image, price, title } =
    product;

  return (
    <Table.Row>
      <div className="hidden md:flex md:justify-center md:items-center">
        <img
          className="w-24 h-14 object-cover rounded-sm"
          src={image}
          alt={title}
        />
      </div>

      <div>{title}</div>

      <div>{color}</div>

      <div className="font-medium">${price}</div>

      <div className="hidden md:block">{company}</div>

      <div className="">
        {availability ? <HiOutlineCheck /> : 'X'}
      </div>

      <div className="hidden md:flex gap-3 text-[17px]">
        <Modal>
          <Modal.Open buttonName="edit">
            <Icon icon={<LiaEdit />} />
          </Modal.Open>
          <Modal.Open buttonName="delete">
            <Icon icon={<HiOutlineTrash />} />
          </Modal.Open>

          <Modal.Window windowName="edit">
            <CreateProductTable product={product} id={id} />
          </Modal.Window>

          <Modal.Window windowName="delete">
            <ConfirmDelete title={title} id={id} />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default ProductRow;
