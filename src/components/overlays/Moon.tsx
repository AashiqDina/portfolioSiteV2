import { useTheme } from "../../context/ThemeContext";
import "./Moon.css";

type props = {
  menuOpen: boolean;
  closeMenu: () => void;
};

export default function Moon({ menuOpen, closeMenu }: props) {
  const { theme } = useTheme();
  console.log(theme.moon);
  return (
    <>
      {menuOpen && <div className="backdrop" onClick={closeMenu}></div>}
      <div
        style={theme.moon}
        className={`OuterMoon ${menuOpen ? "open" : ""}`}
      ></div>
    </>
  );
}
