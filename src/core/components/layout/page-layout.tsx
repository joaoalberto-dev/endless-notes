import { Toaster } from "sonner";

type PageLayoutProps = {
  children: React.ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative flex flex-col h-screen w-screen overflow-x-hidden pb-32 items-start sm:items-center justify-start">
      <Toaster />
      {children}
    </div>
  );
}

export { PageLayout };
