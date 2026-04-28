import { ActionIcon, Button, Input, NativeSelect } from "@mantine/core";
import { FaSearch } from "react-icons/fa";
import { MdFilterAlt } from "react-icons/md";
import React from "react";

const FilterBox = () => {
  return (
    <div className="p-2 flex justify-center  flex-wrap">
      <div className="flex w-95 gap-1 items-center">
        <Input
          placeholder="search"
          leftSection={<FaSearch />}
          rightSection={
            true ? <Input.ClearButton aria-label="Clear input" /> : null
          }
        />
        <ActionIcon size={"lg"} color="gray">
          <FaSearch />
        </ActionIcon>
      </div>
      <div className="flex max-w-75 gap-1">
        <NativeSelect data={["php", "javascript", "python"]} />
        <ActionIcon size={"lg"} color="gray">
          <MdFilterAlt />
        </ActionIcon>
      </div>
    </div>
  );
};

export default FilterBox;
