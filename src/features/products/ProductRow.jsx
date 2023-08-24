import { HiOutlineCheck, HiOutlineTrash } from 'react-icons/hi2';
import { LiaEdit } from 'react-icons/lia';

function ProductRow() {
  return (
    <div className="bg-neutral-200 w-full grid grid-cols-4 rounded-sm px-[2px] py-1 items-center hover:bg-neutral-200 text-[11px] transition-all ease-in-out duration-300 cursor-pointer md:grid-cols-7 md:text-[14px]">
      <div className="hidden w-16 h-full text-center md:block">
        <img
          className="object-cover rounded-md"
          src="https://images.unsplash.com/photo-1659132453315-d11e295fbc41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDEzJTIwcHJvJTIwbWF4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="Iphone 13 Pro max"
        />
      </div>
      <div>Playstation</div>
      <div>Black</div>
      <div>$250.99</div>
      <div className="hidden md:block">Apple</div>
      <div className="">
        <HiOutlineCheck />
      </div>
      <div className="hidden md:flex">
        <LiaEdit />
        <HiOutlineTrash />
      </div>
    </div>
  );
}

export default ProductRow;
