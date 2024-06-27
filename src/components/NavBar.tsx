import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import { CreateIcon, Logo, SettingsIcon } from "@/components/Icons.tsx";
import { ThemeSwitch } from "@/components/ThemeSwitch.tsx";

export const NavBar = () => {
  return (
    <NextUINavbar position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo size={22} />
            <p className="font-bold text-inherit">Картница</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 text-default-500" justify="end">
        <ThemeSwitch />
        <Button isIconOnly color={"primary"} variant={"solid"}>
          <CreateIcon />
        </Button>

        <Button isIconOnly className={"text-default-600"} variant={"flat"}>
          <SettingsIcon />
        </Button>
      </NavbarContent>
    </NextUINavbar>
  );
};
