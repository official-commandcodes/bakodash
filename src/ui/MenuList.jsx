import { NavLink } from 'react-router-dom';

function MenuList({ text, icon, path }) {
  return (
    <NavLink
      to={path}
      className="flex items-center justify-center lg:justify-normal gap-2 lg:mx-[6px] p-3 rounded-sm hover:bg-neutral-200 transition-all ease-in-out duration-300 cursor-pointer"
    >
      <span className="text-[17px]">{icon}</span>
      <span className="hidden lg:block md:text-[8px] xl:text-[13px] tracking-wider">
        {text}
      </span>
    </NavLink>
  );
}

export default MenuList;
