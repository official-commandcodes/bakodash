function Overlay({ children, refName }) {
  return (
    <div
      ref={refName}
      className="fixed w-full h-screen top-0 left-0 right-0 bottom-0 z-10 transition-all duration-300 ease-in-out backdrop-blur-sm flex justify-center items-center"
    >
      {children}
    </div>
  );
}

export default Overlay;
