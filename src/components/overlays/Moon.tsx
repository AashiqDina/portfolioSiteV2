import { useTheme } from "../../context/ThemeContext";
import HeaderMenuSection from "../home/HeaderMenuSection";
import Seperator from "../ui/Seperator";
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
      <div style={theme.moon} className={`OuterMoon ${menuOpen ? "open" : ""}`}>
        {menuOpen && (
          <div>
            <div className="moonHeader"></div>
            <Seperator colour={"#FFFFFF"} />
            <HeaderMenuSection fillHeight={true} />
          </div>
        )}
      </div>
    </>
  );
}
