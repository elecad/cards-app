import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useNavigate } from "react-router-dom";

import { CreateIcon, Logo, SettingsIcon } from "@/components/Icons.tsx";
import { ThemeSwitch } from "@/components/ThemeSwitch.tsx";
import { routesUrl } from "@/router/router.tsx";

interface NavBarProps {
  showIcon?: boolean;
}

export const NavBar = ({ showIcon = true }: NavBarProps) => {
  const navigate = useNavigate();

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

      {showIcon && (
        <NavbarContent className="basis-1 pl-4 text-default-500" justify="end">
          <ThemeSwitch />
          <Button
            isIconOnly
            color={"primary"}
            variant={"solid"}
            onClick={() => {
              navigate(routesUrl.scanner);
            }}
          >
            <CreateIcon />
          </Button>

          <Button isIconOnly className={"text-default-600"} variant={"flat"}>
            <SettingsIcon />
          </Button>
        </NavbarContent>
      )}
    </NextUINavbar>
  );
};
