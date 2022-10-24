import { useTheme } from "next-themes";
import { useState, useEffect, useMemo, useCallback } from "react";

const useDarkmode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");

    if (userTheme) {
      setTheme(userTheme);
    }
    setMounted(true);
  }, [setTheme]);

  const isDarkmode = useMemo(() => {
    return theme === "dark";
  }, [theme]);

  const switchDarkMode = useCallback(() => {
    const nextTheme = isDarkmode ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }, [isDarkmode, setTheme]);

  return {
    mounted,
    isDarkmode,
    switchDarkMode,
  };
};

export default useDarkmode;
