import { FC, ReactElement } from "react";

import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactElement;
}

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <section className="flex flex-col flex-nowrap w-full min-h-screen items-center justify-between bg-white dark:bg-[#1d1e25] transition-colors duration-300">
      <Header />
      <main className="flex flex-col flex-nowrap items-center w-full max-w-screen-md px-8">
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
