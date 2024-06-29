import { Button } from "@nextui-org/button";
import React from "react";
import { Drawer } from "vaul";

import { NavBar } from "@/components/NavBar.tsx";
import { EditIcon, SaveIcon } from "@/components/Icons.tsx";
import useAppStore from "@/store/store.ts";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const isEdit = useAppStore((state) => state.isEdit);
  const setEdit = useAppStore((state) => state.setEdit);

  return (
    <div className="relative flex flex-col min-h-screen content-wrapper" vaul-drawer-wrapper="">
      <NavBar />
      <main className="container px-5 pt-4 mb-10">{children}</main>


      <div className={"drawer-wrapper"}>
        <Drawer.Root shouldScaleBackground >
          <Drawer.Trigger asChild>
            <Button>Open Drawer</Button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] fixed bottom-0 left-0 right-0">
              <div className="p-4 bg-white rounded-t-[10px] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                <div className="max-w-md mx-auto">
                  <div className="font-medium mb-4">
                    Unstyled drawer for React.
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>


      <footer className={"fixed m-5"} style={{ bottom: "0", right: "0" }}>
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
      </footer>
    </div>
  );
}
