function ButtonIcon({ children, onClick }) {
  return (
    <button onClick={onClick} className="text-xl font-medium">
      {children}
    </button>
  );
}

export default ButtonIcon;
