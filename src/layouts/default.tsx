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
  const editCard = useAppStore((state) => state.editCard);
  const deleteCard = useAppStore((state) => state.deleteCard);

  const isDrawerOpen = useAppStore((state) => state.isDrawerOpen);
  const setIsDrawerOpen = useAppStore((state) => state.setDrawerOpen);

  const setIsGridEdit = useAppStore((state) => state.setGridEdit);
  const isGridEdit = useAppStore((state) => state.isGridEdit);

  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const [isSecret, setIsSecret] = useState(true);

  useEffect(() => {
    if (selectedCard) {
      setNewName(selectedCard.name);
      setNewDescription(selectedCard.description);
    }
  }, [selectedCard]);

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
            setIsCardEdit(false);
          }}
        >
          <Drawer.Portal>
            <Drawer.Overlay
              className="fixed inset-0 bg-black/40"
              onClick={() => {
                setIsDrawerOpen(false);
                setIsCardEdit(false);
              }}
            />
            <Drawer.Content
              aria-describedby={undefined}
              className="drawer-content 0 flex flex-col rounded-t-[10px] fixed bottom-0 left-0 right-0"
            >
              <div className="p-4 rounded-t-[10px] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                <div className="max-w-md mx-auto">
                  <div className={"flex justify-between items-center mb-4"}>
                    <Drawer.Title>
                      {!isCardEdit ? (
                        <div className="font-medium text-2xl">
                          {selectedCard?.name}
                        </div>
                      ) : (
                        <input
                          className={"font-medium text-2xl bg-transparent"}
                          value={newName}
                          onChange={(event) => setNewName(event.target.value)}
                        />
                      )}
                    </Drawer.Title>

                    <Button
                      isIconOnly
                      color={isCardEdit ? "primary" : "default"}
                      size={"lg"}
                      variant={"shadow"}
                      onClick={() => {
                        if (isCardEdit && selectedCard) {
                          console.log("Сохраняем изменения");

                          editCard({
                            ...selectedCard,
                            name: newName,
                            description: newDescription,
                          });
                        }
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
                    isReadOnly={!isCardEdit}
                    size="lg"
                    value={
                      isSecret
                        ? newDescription.replace(/./g, "*")
                        : newDescription
                    }
                    variant={"bordered"}
                    onChange={(event) => {
                      setNewDescription(event.target.value);
                    }}
                    onClick={() => setIsSecret(!isSecret)}
                  />
                  <div className="block text-xs font-medium mb-1 text-center mt-1">
                    Для того, чтобы посмотреть дополнительную информацию,
                    нажмите на засекреченное поле ввода
                  </div>
                  {isCardEdit && (
                    <div className={"flex items-center justify-center mt-5"}>
                      <Button
                        color={"danger"}
                        size={"lg"}
                        onClick={() => {
                          if (!selectedCard) return;

                          deleteCard(selectedCard.id);

                          setIsDrawerOpen(false);
                          setTimeout(() => {
                            setIsGridEdit(true);
                            setTimeout(() => {
                              setIsGridEdit(false);
                            }, 100);
                          }, 300);
                        }}
                      >
                        Удалить карту
                      </Button>
                    </div>
                  )}
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
