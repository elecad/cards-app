import { Button } from "@nextui-org/button";
import { ChangeEvent, useRef, useState } from "react";

import { CameraSearchIcon, Logo } from "@/components/Icons.tsx";
import { useBarcode } from "@/hooks/useBarcode.ts";
import { Spinner } from "@nextui-org/spinner";
import { useNavigate } from "react-router-dom";
import { routesUrl } from "@/router/router.tsx";

export const File = () => {
  const fileElement = useRef<HTMLInputElement>(null);
  const { isScanning, scanning, hasSupport, createBarcode } = useBarcode();
  const [isNotFound, setIsNotFound] = useState(false)
  const navigate = useNavigate()

  const clickHandler = () => {
    if (fileElement.current) fileElement.current.click();
  };

  const loadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    console.log("Событие загрузки");

    if (!files) return;

    const file = files[0];
    const Reader = new FileReader();

    Reader.addEventListener("load", async (f) => {
      if (!(f.target && f.target.result)) return;

      const blob = new Blob([f.target.result]);
      const codes = await scanning(blob);

      if(codes.length == 0) {
        event.target.value = ""
        setIsNotFound(true)
        setTimeout(() => {
          setIsNotFound(false)
        }, 1500)
      } else {
        console.log({state: codes[0]});
        navigate(routesUrl.create, {state: codes[0]})
      }

      // alert(JSON.stringify(codes));
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
      {isScanning &&  <Spinner size="lg" className={"absolute"} style={{bottom: "15%"}}/>}

      {isNotFound &&  <div className={"p-3 absolute bg-default-200 rounded-xl shadow-2xl text-sm"} style={{bottom: "15%"}}>Штрих-код не найден. Попробуйте снова...</div>}

    </div>
  );
};
