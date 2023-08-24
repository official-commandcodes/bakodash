function Select() {
  return (
    <select className="text-xs px-2 py-0.5 focus:border-[1px] rounded-sm focus:border-blue-500 transition-all ease-in-out duration-500 md:px-4 md:py-1">
      <option value="all" className="text-[12px]">
        filter by all
      </option>
      <option value="gray" className="text-[12px]">
        filter by gray
      </option>
      <option value="white" className="text-[12px]">
        filter by white
      </option>
      <option value="black" className="text-[12px]">
        filter by black
      </option>
    </select>
  );
}

export default Select;
