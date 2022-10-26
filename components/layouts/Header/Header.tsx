import Nav from "./Nav";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full max-w-screen-md h-24 p-8 mb-24">
      <Nav />
      <div className="flex items-center">
        <DarkModeSwitch />
        <span>yunsu</span>
      </div>
    </header>
  );
};

export default Header;
