import { Button } from "@nextui-org/button";
import React from "react";
import { Image } from "@nextui-org/image";

interface CardProps {
  logoSrc?: string;
  name: string;
}

export const Card: React.FC<CardProps> = ({ logoSrc, name }) => {
  return (
    <Button className="whitespace-normal flex-col bg-transparent h-fit gap-1.5 border-medium hover:border-indigo-500 hover:text-indigo-800 px-3 py-1.5 text-small rounded-medium border-default aspect-video">
      <Image height={24} radius={"md"} src={logoSrc} width={24} />
      <div className={"text-wrap break-all  font-mono font-semibold"}>
        {name}
      </div>
    </Button>
  );
};
