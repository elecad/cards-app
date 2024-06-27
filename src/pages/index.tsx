import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import { useScreen } from "usehooks-ts";
import { useMemo } from "react";

import DefaultLayout from "@/layouts/default";
import { SearchInput } from "@/components/SearchInput.tsx";
import { SaleCard } from "@/components/SaleCard.tsx";
import { ResizeIcon } from "@/components/Icons.tsx";

export default function IndexPage() {
  const ResponsiveReactGridLayout = useMemo(
    () => WidthProvider(Responsive),
    [],
  );
  const screen = useScreen();
  const mock = [
    {
      id: "a",
      name: "Лента",
      logoSrc: "lenta.png",
    },
    {
      id: "b",
      name: "Магнит",
      logoSrc: "magnit.png",
    },
    {
      id: "c",
      name: "Планета здоровья",
      logoSrc: "planeta-zdorovya.png",
    },
    {
      id: "d",
      name: "Пятёрочка",
      logoSrc: "5.png",
    },
    {
      id: "e",
      name: "Лента",
      logoSrc: "lenta.png",
    },
  ];

  const layout: Layout[] = [
    { i: "a", x: 1, y: 0, w: 1, h: 1 },
    { i: "b", x: 0, y: 0, w: 1, h: 1 },
    { i: "c", x: 1, y: 1, w: 1, h: 1 },
    { i: "d", x: 1, y: 1, w: 1, h: 1 },
    { i: "e", x: 0, y: 1, w: 1, h: 1 },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <SearchInput />
        <div className={"w-full mt-6"}>
          <p className="font-bold">Мои карты</p>
        </div>
        <ResponsiveReactGridLayout
          className="layout w-full mt-4"
          cols={{ lg: 2, md: 2, sm: 2, xs: 2, xxs: 2 }}
          containerPadding={[0, 0]}
          layouts={{ lg: layout, md: layout, sm: layout, xs: layout }}
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
        >
          {mock.map((item) => (
            <div key={item.id}>
              <SaleCard logoSrc={item.logoSrc} name={item.name} />
            </div>
          ))}
          {/*<div key="a" className={"bg-primary-300 "}>a</div>*/}
          {/*<div key="b" className={"bg-primary-300"}>b</div>*/}
          {/*<div key="c" className={"bg-primary-300"}>c</div>*/}
        </ResponsiveReactGridLayout>
      </section>
    </DefaultLayout>
  );
}
