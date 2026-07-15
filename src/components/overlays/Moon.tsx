import { useTheme } from "../../context/ThemeContext";
import HeaderMenuSection, { QuickSectionBox } from "../home/HeaderMenuSection";
import AppButton from "../ui/AppButton";
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
            <div className="moonHeader" onClick={closeMenu}>
              <QuickSectionBox
                data={{
                  title: "Exit",
                  description: "",
                  borderHoverColour: theme.HeaderHoverColor7.colour,
                  path: "",
                }}
                parentIndex={1}
                childIndex={0}
                center={true}
              />
            </div>
            <HeaderMenuSection fillHeight={true} />
          </div>
        )}
      </div>
    </>
  );
}
