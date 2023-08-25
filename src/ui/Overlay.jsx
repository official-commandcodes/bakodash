function Overlay({ children }) {
  return (
    <div className="fixed w-full h-screen top-0 left-0 right-0 bottom-0 z-10 transition-all duration-300 ease-in-out backdrop-blur-sm">
      {children}
    </div>
  );
}

export default Overlay;
