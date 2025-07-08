"use client";

import { useLoading } from "../LoadingProvider";
import LoadingScreen from "../LoadingScreen";
import Header from "../Header";
import Footer from "../Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, setIsLoading } = useLoading();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div className="grid grid-rows-[auto_1fr_auto] gap-6 max-w-[1100px] mx-auto h-full p-6">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
