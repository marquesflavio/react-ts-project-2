import { useTheme } from "../hooks/useTheme";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full  hover:cursor-pointer"
    >
      {theme === "dark" 
        ? <MdSunny /> 
        : <IoMoon />
      }
    </button>
  );
};
