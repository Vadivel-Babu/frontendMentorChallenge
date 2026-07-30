import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./ui/button";

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
    <div className="flex gap-1 mx-auto  max-w-150 my-2">
      <Select>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue placeholder="fruites" />
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
          <SelectValue placeholder="fruites" />
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
        <label htmlFor="">Sort BY:</label>
        <RadioGroup defaultValue="comfortable" className="w-fit flex gap-3">
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
      <Button>filter</Button>
    </div>
  );
};

export default Filter;
