function SidebarIcons({ children }) {
  return (
    <div className="w-full flex justify-center gap-2 flex-col border-gray-300 border-b-[2px] py-3">
      {children}
    </div>
  );
}

export default SidebarIcons;
