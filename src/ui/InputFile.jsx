function InputFile({ id, name, onChange }) {
  return (
    <div className="border-2 border-blue-200 col-span-4 rounded-sm outline-none focus:border-blue-200 focus:bg-blue-100 focus:border-[1px] transition-all duration-300 ease-in-out text-xs ">
      <input
        className="focus:border-blue-200 focus:bg-blue-100 focus:border-[1px] w-full p-2"
        type="file"
        id={id}
        accept="image/*"
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

export default InputFile;
