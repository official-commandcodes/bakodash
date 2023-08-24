import {
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from 'react-icons/hi2';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSetting } from 'react-icons/ai';

import Logo from './Logo';
import MenuList from './MenuList';
import SidebarIcons from './SidebarIcons';

function Sidebar() {
  return (
    <div className="row-span-14 col-span-2 border-gray-300 border-r-[2px]">
      <SidebarIcons>
        <Logo />
      </SidebarIcons>

      <SidebarIcons>
        <MenuList text="Homepage" icon={<HiOutlineHome />} />
        <MenuList text="Profile" icon={<CgProfile />} />
      </SidebarIcons>

      <SidebarIcons>
        <MenuList text="Users" icon={<HiOutlineUser />} />
        <MenuList text="Products" icon={<HiOutlineShoppingCart />} />
        <MenuList text="Orders" icon={<HiOutlineShoppingBag />} />
      </SidebarIcons>

      <SidebarIcons>
        <MenuList text="Settings" icon={<AiOutlineSetting />} />
      </SidebarIcons>
    </div>
  );
}

export default Sidebar;
