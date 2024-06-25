import { Navbar } from "@/components/navbar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container max-w-7xl px-6 flex-grow pt-4">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 gap-1">
        <span className="text-default-600">Powered by</span>
        <p className="text-primary">ElecAD</p>
      </footer>
    </div>
  );
}
