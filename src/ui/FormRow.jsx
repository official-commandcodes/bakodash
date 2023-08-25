function FormRow({ children, label, error }) {
  return (
    <div className="grid grid-cols-7 items-center">
      <label
        className="col-span-1 text-sm font-medium"
        htmlFor={children.props.id}
      >
        {label}:
      </label>

      {children}

      <div className="col-span-2">{error && error}</div>
    </div>
  );
}

export default FormRow;
