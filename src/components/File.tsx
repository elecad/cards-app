import { Button } from "@nextui-org/button";
import { useRef } from "react";

import { CameraSearchIcon, Logo } from "@/components/Icons.tsx";

export const File = () => {
  const fileElement = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    if (fileElement.current) fileElement.current.click();
  };

  return (
    <div
      className={
        "flex min-h-dvh w-full items-center justify-center flex-col gap-3"
      }
    >
      <div className={"flex gap-2 items-center justify-center"}>
        <Logo size={22} />
        <p className="font-bold text-inherit">Картница</p>
      </div>

      <div className="flex items-center justify-center w-full p-5">
        <div className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <CameraSearchIcon
              className={"mb-4 text-gray-500 dark:text-gray-400"}
              size={36}
            />

            <Button variant={"faded"} onClick={clickHandler}>
              Выбор файла...
            </Button>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Поддерживаются только изображения с кодом карты
            </p>
          </div>
          <input
            ref={fileElement}
            accept="image/png, image/jpeg"
            className="hidden"
            id="dropzone-file"
            type="file"
          />
        </div>
      </div>
    </div>
  );
};
