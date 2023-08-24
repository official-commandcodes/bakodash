function ProductsRow() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-7 py-3 text-[12px]">
      <div className="hidden md:block"></div>
      <div>Title</div>
      <div>Color</div>
      <div>Price</div>
      <div className="hidden md:block">Company</div>
      <div>Avalability</div>
      <div className="hidden md:block">Action</div>
    </div>
  );
}

export default ProductsRow;
