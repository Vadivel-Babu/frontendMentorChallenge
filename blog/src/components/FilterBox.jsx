import { ActionIcon, Button, Input, NativeSelect } from "@mantine/core";
import { FaSearch } from "react-icons/fa";
import { MdFilterAlt } from "react-icons/md";
import React from "react";

const FilterBox = ({ filters, setFilters, handleSearch, reset }) => {
  return (
    <div className="p-2 flex justify-center  flex-wrap gap-1">
      <div className="flex w-full md:w-95 gap-1 items-center justify-center">
        <Input
          placeholder="search"
          w={"100%"}
          leftSection={<FaSearch />}
          rightSection={
            true ? (
              <Input.ClearButton
                aria-label="Clear input"
                onClick={() => setFilters({ ...filters, search: "" })}
              />
            ) : null
          }
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          value={filters.search}
        />
        <ActionIcon size={"lg"} color="gray" onClick={handleSearch}>
          <FaSearch />
        </ActionIcon>
      </div>
      <div className="flex justify-center w-full md:w-95 gap-1">
        <NativeSelect
          value={filters.category}
          w={"100%"}
          onChange={(e) =>
            setFilters({ ...filters, category: e.currentTarget.value })
          }
          placeholder="category"
          data={["", "php", "javascript", "python"]}
        />
        <ActionIcon size={"lg"} color="gray" onClick={handleSearch}>
          <MdFilterAlt />
        </ActionIcon>
      </div>
      <Button ml={5} onClick={reset}>
        Reset
      </Button>
    </div>
  );
};

export default FilterBox;
