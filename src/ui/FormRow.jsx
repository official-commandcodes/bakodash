function FormRow({ children, label, error }) {
  return (
    <div className="grid grid-cols-7 items-center">
      <label
        className="col-span-1 text-xs font-medium"
        htmlFor={children.props.id}
      >
        {label}:
      </label>

      {children}

      <div className="col-span-2 text-xs ml-3 text-red-600 font-medium justify-end">
        {error ? error : null}
      </div>
    </div>
  );
}

export default FormRow;
