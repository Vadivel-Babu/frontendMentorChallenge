import Loader from "@/components/Loader";
import Topbar from "@/components/Topbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useState } from "react";

const CategoryPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <Topbar />
      <h1 className="text-center text-2xl my-3 md:text-4xl">Categories</h1>
      <div className="max-w-250 flex gap-1 mx-auto mb-3">
        <Input className="max-w-50" placeholder="type new category" />
        <Button className="bg-primary-blue">Add</Button>
        <Button className="bg-primary-blue">Add Bulk</Button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-250 mx-auto border rounded-2xl p-2 min-h-50">
          <Badge className="bg-primary-blue p-2 ">
            hello
            <Button
              size={"xs"}
              className="cursor-pointer bg-transperent p-0 ml-1.5"
            >
              <X />
            </Button>
          </Badge>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
