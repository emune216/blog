import useDarkmode from "../../../hooks/useDarkmode";

const DarkModeSwitch = () => {
  const { isDarkmode, switchDarkMode } = useDarkmode();

  return (
    <div
      className="flex justify-center items-center ml-4 w-6 h-6"
      onClick={switchDarkMode}
    >
      <span className="text-neutral-500 pointer">{"다크모드"}</span>
    </div>
  );
};

export default DarkModeSwitch;
