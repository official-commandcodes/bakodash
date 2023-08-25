import { HiOutlineCheck, HiOutlineTrash } from 'react-icons/hi2';
import { LiaEdit } from 'react-icons/lia';
import Table from '../../ui/Table';
import Icon from '../../ui/Icon';

function ProductRow({ product }) {
  const { availability, color, company, image, price, title } =
    product;

  return (
    <Table.Row>
      <div className="hidden md:flex md:justify-center md:items-center">
        <img
          className="w-24 h-14 object-cover rounded-sm"
          src="https://images.unsplash.com/photo-1659132453315-d11e295fbc41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDEzJTIwcHJvJTIwbWF4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="Iphone 13 Pro max"
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
        <Icon icon={<LiaEdit />} />
        <Icon icon={<HiOutlineTrash />} />
      </div>
    </Table.Row>
  );
}

export default ProductRow;
