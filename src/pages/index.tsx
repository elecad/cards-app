import DefaultLayout from "@/layouts/default";
import { SearchInput } from "@/components/SearchInput.tsx";
import { SaleCard } from "@/components/SaleCard.tsx";

export default function IndexPage() {
  const mock = [
    {
      name: "Лента",
      logoSrc: "lenta.png",
    },
    {
      name: "Магнит",
      logoSrc: "magnit.png",
    },
    {
      name: "Планета здоровья",
      logoSrc: "planeta-zdorovya.png",
    },
    {
      name: "Пятёрочка",
      logoSrc: "5.png",
    },
    {
      name: "Лента",
      logoSrc: "lenta.png",
    }
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <SearchInput />
        <div className={"w-full mt-6"}>
          <p className="font-bold">Мои карты</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 w-full">
          {mock.map((item, index) => (
            <SaleCard key={index} logoSrc={item.logoSrc} name={item.name} />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
