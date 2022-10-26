import Image from "next/image";

import useDarkmode from "../../../hooks/useDarkmode";
import sun from "../../../assets/svg/sun.svg";
import moon from "../../../assets/svg/moon.svg";

const DarkModeSwitch = () => {
  const { isDarkmode, switchDarkMode } = useDarkmode();

  return (
    <div
      className="flex justify-center items-center mx-4 w-6 h-6 pointer"
      onClick={switchDarkMode}
    >
      <Image src={isDarkmode ? moon : sun} alt={"다크모드 아이콘"} />
    </div>
  );
};

export default DarkModeSwitch;
