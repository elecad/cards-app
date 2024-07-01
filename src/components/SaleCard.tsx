import { Button } from "@nextui-org/button";
import React from "react";
import { Image } from "@nextui-org/image";

import useAppStore from "@/store/store.ts";

interface CardProps {
  logoSrc?: string;
  name: string;
}

export const SaleCard: React.FC<CardProps> = ({ logoSrc, name }) => {
  const setIsDrawerOpen = useAppStore((state) => state.setDrawerOpen);

  return (
    <Button
      className="whitespace-normal flex-col bg-default-100 gap-1.5 border-medium hover:border-primary hover:text-primary px-3 py-1.5 text-small rounded-medium border-default w-full h-full"
      onClick={() => {
        setIsDrawerOpen(true);
      }}
    >
      <Image height={24} radius={"md"} src={`icons/${logoSrc}`} width={24} />
      <div className={"text-wrap break-all font-mono font-semibold"}>
        {name}
      </div>
    </Button>
  );
};
