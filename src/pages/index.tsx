import { Layout, Responsive, WidthProvider } from "react-grid-layout";

import DefaultLayout from "@/layouts/default";
import { SearchInput } from "@/components/SearchInput.tsx";
import { SaleCard } from "@/components/SaleCard.tsx";
import { useScreen } from "usehooks-ts";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function IndexPage() {
  const screen = useScreen()
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
        {/*<div className="mt-4 grid grid-cols-2 gap-2 w-full">*/}
        {/*  {mock.map((item, index) => (*/}
        {/*    <SaleCard key={index} logoSrc={item.logoSrc} name={item.name} />*/}
        {/*  ))}*/}
        {/*</div>*/}
        <ResponsiveGridLayout
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          className="layout w-full"
          cols={{ lg: 4, md: 2, sm: 2, xs: 2, xxs: 2 }}
          layouts={{ lg: layout, md: layout, sm: layout, xs: layout }}
          rowHeight={screen.width / 4}

        >
          {mock.map((item) => (
            <div key={item.id}>
              <SaleCard logoSrc={item.logoSrc} name={item.name} />
            </div>
          ))}
          {/*<div key="a" className={"bg-primary-300 "}>a</div>*/}
          {/*<div key="b" className={"bg-primary-300"}>b</div>*/}
          {/*<div key="c" className={"bg-primary-300"}>c</div>*/}
        </ResponsiveGridLayout>
      </section>
    </DefaultLayout>
  );
}
