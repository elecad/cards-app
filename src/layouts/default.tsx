import { Button } from "@nextui-org/button";
import React, { useState } from "react";
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
  const isEdit = useAppStore((state) => state.isEdit);
  const setEdit = useAppStore((state) => state.setEdit);

  const isDrawerOpen = useAppStore((state) => state.isDrawerOpen);
  const setIsDrawerOpen = useAppStore((state) => state.setDrawerOpen);

  const [isGridMode, setIsGridMode] = useState(false);

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
                      <div className="font-medium mb-4 text-2xl">Магнит</div>
                    </Drawer.Title>

                    <Button
                      isIconOnly
                      color={isEdit ? "primary" : "default"}
                      size={"lg"}
                      variant={"shadow"}
                      onClick={() => {
                        setEdit(!isEdit);
                      }}
                    >
                      {isEdit ? <SaveIcon /> : <EditIcon />}
                    </Button>
                  </div>

                  <div
                    className={
                      "flex justify-center items-center flex-col gap-2 mb-2"
                    }
                  >
                    <Image shadow={"sm"} src={"qr-code.gif"} />
                    <span className={"text-base"}>12345678910</span>
                  </div>
                  <Divider className={"my-3"} />
                  <div className={"text-sm font-medium mb-2"}>
                    Дополнительные данные о карте:
                  </div>
                  <Textarea
                    className={"secret-textarea"}
                    defaultValue="Код снятия: 236"
                    size="lg"
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
          className={clsx({ "text-default-600": !isGridMode })}
          color={isGridMode ? "primary" : "default"}
          size={"lg"}
          variant={"shadow"}
          onClick={() => {
            setIsGridMode(!isGridMode);
          }}
        >
          {isGridMode ? <SaveIcon /> : <GridIcon />}
        </Button>
      </footer>
    </div>
  );
}
