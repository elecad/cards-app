import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { Drawer } from "vaul";

import { NavBar } from "@/components/NavBar.tsx";
import { CardIcon, CreateIcon, EditIcon, GridIcon, SaveIcon } from "@/components/Icons.tsx";
import useAppStore from "@/store/store.ts";
import { Image } from "@nextui-org/image";
import { Textarea } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import clsx from "clsx";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const isEdit = useAppStore((state) => state.isEdit);
  const setEdit = useAppStore((state) => state.setEdit);

  const isDrawerOpen = useAppStore((state) => state.isDrawerOpen);
  const setIsDrawerOpen = useAppStore((state) => state.setDrawerOpen);

  const [isGridMode, setIsGridMode] = useState(false)



  return (
    <div className="relative flex flex-col min-h-dvh content-wrapper" vaul-drawer-wrapper="">
      <NavBar />
      <main className="container px-5 pt-4 mb-10">{children}</main>


      <div className={"drawer-wrapper"}>
        <Drawer.Root shouldScaleBackground open={isDrawerOpen} onClose={() => {setIsDrawerOpen(false)}}>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" onClick={() => {setIsDrawerOpen(false)}}/>
            <Drawer.Content className="drawer-content 0 flex flex-col rounded-t-[10px] fixed bottom-0 left-0 right-0">
              <div className="p-4 rounded-t-[10px] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                <div className="max-w-md mx-auto">
                  <div className={"flex justify-between items-center"}>
                    <div className="font-medium mb-4 text-2xl">
                      Магнит
                    </div>
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

                  <div className={"flex justify-center items-center flex-col gap-2 mb-2"}>
                    <Image src={"qr-code.gif"} shadow={"sm"} />
                    <span className={"text-base"}>12345678910</span>
                  </div>
                  <Divider className={"my-3"}></Divider>
                  <div className={"text-sm font-medium mb-2"}>Дополнительные данные о карте:</div>
                  <Textarea

                    variant={"bordered"}
                    defaultValue="Код снятия: 236"
                    size="lg"
                    className={"secret-textarea"}
                  />
                  <label className="block text-xs font-medium mb-1 text-center mt-1">Для
                    того, чтобы посмотреть дополнительную информацию, нажмите на засекреченное поле
                    ввода</label>
                </div>

              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>


      <footer className={"fixed w-full p-5 flex items-center justify-end"} style={{ bottom: "0" }}>


        <Button
          isIconOnly
          color={isGridMode ? "primary" : "default"}
          size={"lg"}
          variant={"shadow"}
          onClick={() => {
            setIsGridMode(!isGridMode);
          }}
          className={clsx({"text-default-600": !isGridMode})}
        >
          {isGridMode ? <SaveIcon /> : <GridIcon />}
        </Button>
      </footer>
    </div>
  );
}
