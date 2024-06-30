import { PathRouteProps } from "react-router/dist/lib/components";

import IndexPage from "@/pages/IndexPage.tsx";
import ScannerPage from "@/pages/ScannerPage.tsx";

export const routesUrl = {
  main: "/",
  scanner: "/scanner",
  create: "/create",
};

export const router: PathRouteProps[] = [
  { path: routesUrl.main, element: <IndexPage /> },
  { path: routesUrl.scanner, element: <ScannerPage /> },
];
