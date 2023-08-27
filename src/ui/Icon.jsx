function Icon({ icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-blue-200 text-blue-950 hover:text-slate-500 transition-all ease-in-out duration-300 w-8 h-8 rounded-full flex justify-center items-center"
    >
      {icon}
    </div>
  );
}

export default Icon;
