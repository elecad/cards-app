import { NavBar } from "@/components/NavBar.tsx";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="relative flex flex-col">
      <NavBar />
      <main className="container px-5 pt-4 mb-10">{children}</main>
      {/*<footer className="w-full flex items-center justify-center py-3 gap-1">*/}
      {/*  <span className="text-default-600">Powered by</span>*/}
      {/*  <p className="text-primary">ElecAD</p>*/}
      {/*</footer>*/}
    </div>
  );
}
