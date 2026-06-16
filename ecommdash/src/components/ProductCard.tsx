import { Button } from "./ui/button";

const ProductCard = () => {
  return (
    <div className="p-2 border rounded-2xl w-fit space-y-2">
      <img
        src="https://www.tropicaltickets.com/cdn/shop/files/download_72.jpg?v=1691659648"
        alt="img"
        className="w-40 object-cover rounded-2xl"
      />
      <h1 className="text-xl font-bold capitalize">title</h1>
      <p className="w-40">category:</p>
      <Button>view</Button>
    </div>
  );
};

export default ProductCard;
