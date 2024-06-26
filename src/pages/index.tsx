import DefaultLayout from "@/layouts/default";
import { SearchInput } from "@/components/searchInput.tsx";
import { Card } from "@/components/card.tsx";

export default function IndexPage() {
  const mock = [
    {
      name: "Лента",
      logoSrc: "lenta.png",
    },
    {
      name: "Магнит",
      logoSrc: "lenta.png",
    },
    {
      name: "Планета здоровья",
      logoSrc: "lenta.png",
    },
    {
      name: "Планета здоровья",
      logoSrc: "lenta.png",
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <SearchInput />
        <div className="mt-8 grid grid-cols-2 gap-4 w-full">
          {mock.map((item, index) => (
            <Card key={index} logoSrc={item.logoSrc} name={item.name} />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
