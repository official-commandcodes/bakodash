import ProductRow from './ProductRow';
import ProductsHeader from './ProductsHeader';

function Product() {
  return (
    <div className="p-1">
      {/* Table Operations */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold tracking-wider">Product</h3>

        <div>
          <button className="text-xs">Add new Product</button>
          <select name="" id="">
            <option value="">Filter by Gray</option>
            <option value="">Filter by White</option>
            <option value="">Filter by Black</option>
          </select>
        </div>
      </div>

      <div className="bg-orange-300 px-1">
        {/* Table Header */}
        <ProductsHeader />

        {/* Table Body */}
        <div className="flex gap-2 flex-col">
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
        </div>
      </div>
    </div>
  );
}

export default Product;
