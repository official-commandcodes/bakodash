function Checkbox({ id, name, onChange, value }) {
  return (
    <div className="w-4">
      <input
        className="h-4 w-full bg-blue-100 rounded-md focus:border-1 focus:border-slate-100 border-0 transition-all ease-in-out duration-150"
        type="checkbox"
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Checkbox;
