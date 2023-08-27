function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 py-2">
      {children}
    </form>
  );
}

export default Form;
