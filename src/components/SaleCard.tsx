import { Button } from "@nextui-org/button";
import React from "react";
import { Image } from "@nextui-org/image";

import useAppStore, { ICard } from "@/store/store.ts";

interface CardProps {
  card: ICard;
}

export const SaleCard: React.FC<CardProps> = ({ card }) => {
  const setIsDrawerOpen = useAppStore((state) => state.setDrawerOpen);
  const setSelectedCard = useAppStore((state) => state.setSelectedCard);

  return (
    <Button
      className="whitespace-normal flex-col bg-default-100 gap-1.5 border-medium hover:border-primary hover:text-primary px-3 py-1.5 text-small rounded-medium border-default w-full h-full"
      onClick={() => {
        setSelectedCard(card);
        setIsDrawerOpen(true);
      }}
    >
      <Image
        height={24}
        radius={"md"}
        src={`icons/${card.iconSrc}`}
        width={24}
      />
      <div className={"text-wrap break-all font-mono font-semibold"}>
        {card.name}
      </div>
    </Button>
  );
};
