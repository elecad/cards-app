import React from "react";
import { Input } from "@nextui-org/input";

import { SearchIcon } from "@/components/Icons.tsx";

export const SearchInput: React.FC = () => {
  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Поиск карты..."
      startContent={
        <SearchIcon className="text-default-400 pointer-events-none" />
      }
      type="search"
    />
  );
};
