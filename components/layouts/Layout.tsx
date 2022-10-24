import { FC, ReactElement } from "react";

import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactElement;
}

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <section className="flex flex-col flex-nowrap pt-24 w-full min-h-screen items-center justify-between bg-white dark:bg-zinc-900 transition-colors duration-200">
      <Header />
      <main className="flex flex-col flex-nowrap w-full max-w-screen-md items-center z-10 px-5">
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
