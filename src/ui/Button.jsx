function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-[7px] text-white bg-blue-700 px-2 py-1 rounded-sm md:rounded-md hover:bg-blue-800 transition-all ease-in-out duration-500 md:text-xs md:px-4 md:py-2"
    >
      {children}
    </button>
  );
}

export default Button;
