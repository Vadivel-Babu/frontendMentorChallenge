import Topbar from "@/components/Topbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items: any = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
];

const CreateProductPage = () => {
  return (
    <>
      <Topbar />
      <div className="mx-4">
        <h1 className="text-xl my-2 md:text-3xl text-center">Add Product</h1>
        <form
          action=""
          className="border rounded-2xl p-2 space-y-2 max-w-100 mx-auto"
        >
          <Input type="text" placeholder="Productname" name="productname" />
          <Input
            type="text"
            placeholder="Product description"
            name="description"
          />
          <Input type="number" placeholder="product quantity" name="quantity" />
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                {items.map((item: any) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input type="file" name="img" />
          <Button className="bg-primary-blue text-white">Add</Button>
        </form>
      </div>
    </>
  );
};

export default CreateProductPage;
