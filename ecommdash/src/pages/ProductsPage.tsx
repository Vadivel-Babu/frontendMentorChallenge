import ProductCard from "@/components/ProductCard";
import Topbar from "@/components/Topbar";

const ProductsPage = () => {
  return (
    <div>
      <Topbar />
      <h1 className="text-center text-2xl my-3 md:text-4xl">Products</h1>
      <div className="flex flex-wrap gap-2 max-w-250 justify-between m-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i: number) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
