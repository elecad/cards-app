import { Button } from "@nextui-org/button";
import { useState } from "react";

import { NavBar } from "@/components/NavBar.tsx";
import { EditIcon, SaveIcon } from "@/components/Icons.tsx";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="relative flex flex-col">
      <NavBar />
      <main className="container px-5 pt-4 mb-10">{children}</main>

      <footer className={"fixed m-5"} style={{ bottom: "0", right: "0" }}>
        <Button
          isIconOnly
          color={isEdit ? "secondary" : "default"}
          size={"lg"}
          variant={"shadow"}
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        >
          {isEdit ? <SaveIcon /> : <EditIcon />}
        </Button>
      </footer>

      {/*<footer className="w-full flex items-center justify-center py-3 gap-1">*/}
      {/*  <span className="text-default-600">Powered by</span>*/}
      {/*  <p className="text-primary">ElecAD</p>*/}
      {/*</footer>*/}
    </div>
  );
}
