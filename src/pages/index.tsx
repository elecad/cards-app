import { Image } from "@nextui-org/image";

import DefaultLayout from "@/layouts/default";
import { SearchInput } from "@/components/searchInput.tsx";
import { Card } from "@/components/card.tsx";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <SearchInput />
        <div className="mt-8 grid grid-cols-2 gap-4 w-full">
          <Card>Порядок</Card>
          <Card>Магнит</Card>
          <Card>Планета здоровья</Card>
          <Card>Пятёрочка</Card>
          <Card>
            <Image src="lenta.png" className={"border-medium"} width={28}/>
            <div>Лента</div>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
