import { Input, Textarea } from "@nextui-org/input";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import uuid from "react-uuid";

import { useBarcode } from "@/hooks/useBarcode.ts";
import useAppStore from "@/store/store.ts";
import { useTheme } from "@/hooks/useTheme.ts";
import { NavBar } from "@/components/NavBar.tsx";
import { fileIcons, notFoundIcon } from "@/config/CardsPattern.ts";
import { routesUrl } from "@/router/router.tsx";

export default function CreatePage() {
  useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as DetectedBarcode;

  const [imageSrc, setImageSrc] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { createBarcode } = useBarcode();

  const generateCode = async () => {
    const src = await createBarcode(state.rawValue, state.format);

    setImageSrc(src);
  };

  const isSubmit = useMemo(() => name.trim().length !== 0, [name]);

  const createCard = useAppStore((state) => state.createCard);
  const cards = useAppStore((state) => state.cards);

  useEffect(() => {
    if (!state) return;
    generateCode();
  }, []);

  const createHandler = () => {
    const pattern = "Магнит".trim().toLowerCase();
    const names = name.trim().toLowerCase();

    console.log(names.includes(pattern));

    const icon = fileIcons.find((el) => {
      const nameFix = name.trim().toLowerCase();
      const patternFix = el.pattern.trim().toLowerCase();

      return nameFix.includes(patternFix);
    });
    const iconSrc = icon ? icon.file : notFoundIcon;

    createCard({
      id: uuid(),
      name,
      iconSrc,
      base64: imageSrc,
      rawValue: state.rawValue,
      description,
    });
    navigate(routesUrl.main);
  };

  const CreateTemplate = () => {
    return (
      <>
        <h2 className={"font-bold text-inherit text-xl mb-5"}>
          Добавление новой карты
        </h2>
        <div className={"mb-3"}>
          <label className="block text-sm font-medium mb-1">Название: </label>
          <Input
            color={"primary"}
            placeholder={"Как карта будет называться?"}
            radius={"sm"}
            type={"text"}
            value={name}
            variant={"bordered"}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className={"mb-3"}>
          <label className="block text-sm font-medium mb-1">
            Номер карты:{" "}
          </label>
          <Input
            readOnly
            color={"primary"}
            placeholder={"Номер карты..."}
            radius={"sm"}
            type={"text"}
            value={state.rawValue}
            variant={"bordered"}
          />
          <label className="block text-xs font-medium text-gray-500 dark:text-gray-400  mb-1 text-center mt-1">
            Если вдруг номер отличается от того, что есть на Вашей карте,
            просканируйте карту снова!
          </label>
        </div>

        <div className={"flex justify-center items-center flex-col gap-2 my-5"}>
          <Image shadow={"sm"} src={imageSrc} />
        </div>

        <label className="block text-sm font-medium mb-1">
          Дополнительные данные о карте:{" "}
        </label>
        <Textarea
          className={"secret-textarea"}
          color={"primary"}
          defaultValue="Код снятия: 236"
          placeholder={"Что можно сохранить о карте?"}
          value={description}
          variant={"bordered"}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 text-center mt-1">
          Здесь можно сохранить код списания бонусов, дату создания или другую
          дополнительную информацию
        </label>

        <div className={"flex items-center justify-end mt-10"}>
          <Button
            color={isSubmit ? "primary" : "default"}
            disabled={!isSubmit}
            variant={"shadow"}
            onClick={createHandler}
          >
            Добавить карту
          </Button>
        </div>
      </>
    );
  };

  const ErrorTemplate = () => {
    return (
      <div
        className={
          "w-full h-64 flex items-center justify-center flex-col font-bold text-inherit text-xl gap-5"
        }
      >
        <div className={""}>Что-то пошло не так...</div>
        <div style={{ transform: "rotate(90deg)", fontSize: "32pt" }}>:(</div>
      </div>
    );
  };

  return (
    <div
      className="relative flex flex-col min-h-dvh content-wrapper"
      vaul-drawer-wrapper=""
    >
      <NavBar showIcon={true} />
      <main className="container px-5 pt-4 mb-10">
        {state ? CreateTemplate() : ErrorTemplate()}
      </main>
    </div>
  );
}
