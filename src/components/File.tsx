import { Button } from "@nextui-org/button";
import { ChangeEvent, useRef } from "react";

import { CameraSearchIcon, Logo } from "@/components/Icons.tsx";
import { useBarcode } from "@/hooks/useBarcode.ts";

export const File = () => {
  const fileElement = useRef<HTMLInputElement>(null);
  const { isScanning, scanning, hasSupport, createBarcode } = useBarcode();

  const clickHandler = () => {
    if (fileElement.current) fileElement.current.click();
  };

  const loadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files) return;

    const file = files[0];
    const Reader = new FileReader();

    Reader.addEventListener("load", async (f) => {
      if (!(f.target && f.target.result)) return;

      const blob = new Blob([f.target.result]);
      const codes = await scanning(blob);

      alert(JSON.stringify(codes));
    });
    Reader.readAsArrayBuffer(file);
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
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center px-2">
              Поддерживаются только изображения с штрих-кодом карты
            </p>
          </div>
          <input
            ref={fileElement}
            accept="image/*"
            className="hidden"
            type="file"
            onChange={loadHandler}
          />
        </div>
      </div>
    </div>
  );
};
