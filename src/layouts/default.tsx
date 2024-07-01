import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import { Drawer } from "vaul";
import { Image } from "@nextui-org/image";
import { Textarea } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import clsx from "clsx";

import useAppStore from "@/store/store.ts";
import { EditIcon, GridIcon, SaveIcon } from "@/components/Icons.tsx";
import { NavBar } from "@/components/NavBar.tsx";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const [isCardEdit, setIsCardEdit] = useState(false);

  const selectedCard = useAppStore((state) => state.selectedCard);

  const isDrawerOpen = useAppStore((state) => state.isDrawerOpen);
  const setIsDrawerOpen = useAppStore((state) => state.setDrawerOpen);

  const setIsGridEdit = useAppStore((state) => state.setGridEdit);
  const isGridEdit = useAppStore((state) => state.isGridEdit);

  useEffect(() => {
    console.log("Тест", isGridEdit);
  }, [isGridEdit]);

  return (
    <div
      className="relative flex flex-col min-h-dvh content-wrapper"
      vaul-drawer-wrapper=""
    >
      <NavBar />
      <main className="container px-5 pt-4 mb-10">{children}</main>

      <div className={"drawer-wrapper"}>
        <Drawer.Root
          shouldScaleBackground
          open={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
          }}
        >
          <Drawer.Portal>
            <Drawer.Overlay
              className="fixed inset-0 bg-black/40"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            />
            <Drawer.Content
              aria-describedby={undefined}
              className="drawer-content 0 flex flex-col rounded-t-[10px] fixed bottom-0 left-0 right-0"
            >
              <div className="p-4 rounded-t-[10px] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                <div className="max-w-md mx-auto">
                  <div className={"flex justify-between items-center"}>
                    <Drawer.Title>
                      <div className="font-medium mb-4 text-2xl">
                        {selectedCard?.name}
                      </div>
                    </Drawer.Title>

                    <Button
                      isIconOnly
                      color={isCardEdit ? "primary" : "default"}
                      size={"lg"}
                      variant={"shadow"}
                      onClick={() => {
                        setIsCardEdit(!isCardEdit);
                      }}
                    >
                      {isCardEdit ? <SaveIcon /> : <EditIcon />}
                    </Button>
                  </div>

                  <div
                    className={
                      "flex justify-center items-center flex-col gap-2 mb-2"
                    }
                  >
                    <Image shadow={"sm"} src={selectedCard?.base64} />
                    <span className={"text-base"}>
                      {selectedCard?.rawValue}
                    </span>
                  </div>
                  <Divider className={"my-3"} />
                  <div className={"text-sm font-medium mb-2"}>
                    Дополнительные данные о карте:
                  </div>
                  <Textarea
                    className={"secret-textarea"}
                    defaultValue="Код снятия: 236"
                    size="lg"
                    value={selectedCard?.description}
                    variant={"bordered"}
                  />
                  <label className="block text-xs font-medium mb-1 text-center mt-1">
                    Для того, чтобы посмотреть дополнительную информацию,
                    нажмите на засекреченное поле ввода
                  </label>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>

      <footer
        className={"fixed w-full p-5 flex items-center justify-end"}
        style={{ bottom: "0" }}
      >
        <Button
          isIconOnly
          className={clsx({ "text-default-600": !isGridEdit })}
          color={isGridEdit ? "primary" : "default"}
          size={"lg"}
          variant={"shadow"}
          onClick={() => {
            setIsGridEdit(!isGridEdit);
          }}
        >
          {isGridEdit ? <SaveIcon /> : <GridIcon />}
        </Button>
      </footer>
    </div>
  );
}
