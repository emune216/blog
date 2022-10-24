import Nav from "./Nav";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <header className="fixed top-0 flex justify-between items-center w-full h-24 py-4 px-8 bg-white dark:bg-zinc-900 border">
      <Nav />
      <div className="flex items-center">
        <DarkModeSwitch />
        <span>Logo</span>
      </div>
    </header>
  );
};

export default Header;
