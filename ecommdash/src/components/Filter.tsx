import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./ui/button";
import { Funnel } from "lucide-react";

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
];

const Filter = () => {
  return (
    <div className="flex gap-1 justify-end mx-auto max-w-200 my-2">
      <Popover>
        <PopoverTrigger>
          {" "}
          <Button size="icon" className="bg-primary-blue">
            <Funnel />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-2 space-y-1.5">
            <Select>
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="categories" />
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
            <Select>
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Status" />
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
            <div className="flex  items-center gap-1">
              <label htmlFor="sort">Sort BY:</label>
              <RadioGroup
                defaultValue="latest"
                id="sort"
                className="w-fit flex gap-3"
              >
                <div className="flex items-center gap-1">
                  <RadioGroupItem value="latest" id="r2" />
                  <label htmlFor="r2">latest</label>
                </div>
                <div className="flex items-center gap-1">
                  <RadioGroupItem value="old" id="r3" />
                  <label htmlFor="r3">old</label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <Button className="bg-primary-blue">Filter</Button>
        </PopoverContent>
      </Popover>
      <Button className="bg-red-400">Delete</Button>
    </div>
  );
};

export default Filter;
