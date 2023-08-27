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
        <MenuList text="Homepage" icon={<HiOutlineHome />} path="/" />
        <MenuList
          text="Profile"
          icon={<CgProfile />}
          path="/profile"
        />
      </SidebarIcons>

      <SidebarIcons>
        <MenuList
          text="Users"
          icon={<HiOutlineUser />}
          path="/users"
        />
        <MenuList
          text="Products"
          icon={<HiOutlineShoppingCart />}
          path="/products"
        />
      </SidebarIcons>

      <SidebarIcons>
        <MenuList
          text="Settings"
          icon={<AiOutlineSetting />}
          path="/settings"
        />
      </SidebarIcons>
    </div>
  );
}

export default Sidebar;
