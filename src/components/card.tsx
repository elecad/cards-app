import { Button } from "@nextui-org/button";
import React from "react";
import { Image } from "@nextui-org/image";

interface CardProps {
  logoSrc?: string;
  name: string;
}

export const Card: React.FC<CardProps> = ({ logoSrc, name }) => {
  return (
    <Button className="whitespace-normal flex-wrap bg-transparent font-mono font-semibold h-fit gap-2 border-medium hover:border-indigo-500 hover:text-indigo-800 px-3 py-1.5 text-small rounded-medium border-default text-foreground aspect-video">
      <Image className={"border-2"} height={28} src={logoSrc} width={28} />
      <div>{name}</div>
    </Button>
  );
};
