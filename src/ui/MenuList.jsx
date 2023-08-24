function MenuList({ text, icon }) {
  return (
    <div className="flex items-center justify-center lg:justify-normal gap-2 lg:mx-[6px] p-3 rounded-sm hover:bg-neutral-200 transition-all ease-in-out duration-300 cursor-pointer">
      <span className="text-[26px] font-bold">{icon}</span>
      <span className="hidden lg:block text-[13px] xl:text-[18px] tracking-widest">
        {text}
      </span>
    </div>
  );
}

export default MenuList;
