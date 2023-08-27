function Input({ id, name, onChange, value }) {
  return (
    <input
      className="col-span-4 rounded-sm outline-none px-2 py-1 focus:border-blue-200 focus:bg-blue-100 focus:border-[1px] transition-all duration-300 ease-in-out text-xs "
      type="text"
      id={id}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
