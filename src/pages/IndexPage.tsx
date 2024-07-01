import { Responsive, WidthProvider } from "react-grid-layout";
import { useScreen } from "usehooks-ts";
import React, { useMemo, useState } from "react";
import { Input } from "@nextui-org/input";

import DefaultLayout from "@/layouts/default";
import { SaleCard } from "@/components/SaleCard.tsx";
import { ResizeIcon, SearchIcon } from "@/components/Icons.tsx";
import useAppStore from "@/store/store.ts";

export default function IndexPage() {
  const ResponsiveReactGridLayout = useMemo(
    () => WidthProvider(Responsive),
    [],
  );


  const screen = useScreen();
  const cards = useAppStore((state) => state.cards);
  const layout = useAppStore((state) => state.layout);
  const isGridEdit = useAppStore((state) => state.isGridEdit);
  const setLayout = useAppStore((state) => state.setLayout);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
          }}
          labelPlacement="outside"
          placeholder="Поиск карты..."
          startContent={
            <SearchIcon className="text-default-400 pointer-events-none" />
          }
          type="search"
        />
        <div className={"w-full mt-6"}>
          <p className="font-bold">Мои карты</p>
        </div>
        <ResponsiveReactGridLayout
          className="layout w-full mt-4"
          cols={{ lg: 2, md: 2, sm: 2, xs: 2, xxs: 2 }}
          containerPadding={[0, 0]}
          layouts={{
            lg: layout.map((el) => ({ ...el, static: !isGridEdit })),
          }}
          resizeHandle={
            <div
              className={"absolute react-resizable-handle"}
              style={{ bottom: "0", right: "0" }}
            >
              <ResizeIcon className={"opacity-20"} size={18} />
            </div>
          }
          rowHeight={screen.width / 4}
          useCSSTransforms={true}
          onLayoutChange={(event) => {
            console.log(isGridEdit);
            if(isGridEdit)
              setLayout(event);
          }}
        >
          {cards.map((item) => (
            <div key={item.id}>
              <SaleCard card={item} />
            </div>
          ))}
        </ResponsiveReactGridLayout>
      </section>
    </DefaultLayout>
  );
}
