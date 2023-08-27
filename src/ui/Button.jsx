function Button({
  children,
  onClick,
  type,
  buttonType = 'normal',
  disabled,
}) {
  const style = {
    normal: 'bg-blue-700 text-neutral-200 font-medium',
    danger:
      'bg-red-600 text-neutral-100 focus:border-2 focus:border-red-900',
    afraid: '',
  };

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`p-2 rounded-sm md:rounded-md  transition-all ease-in-out duration-500 md:text-xs md:px-2 md:py-1 ${style[buttonType]}`}
    >
      {children}
    </button>
  );
}

export default Button;
