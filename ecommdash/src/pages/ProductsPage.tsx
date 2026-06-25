import ProductsTable from "@/components/ProductsTable";
import Topbar from "@/components/Topbar";

const ProductsPage = () => {
  return (
    <div>
      <Topbar />
      <h1 className="text-center text-2xl my-3 md:text-4xl">Products</h1>
      <ProductsTable />
    </div>
  );
};

export default ProductsPage;
