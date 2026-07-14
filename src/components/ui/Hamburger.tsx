import {} from "../../types";
import "./Hamburger.css";

type props = {
  theme: any;
  open: boolean;
  onToggle: () => void;
};

export default function Hamburger({ theme, open, onToggle }: props) {
  return (
    <>
      <button className="hamburgerContainer" onClick={onToggle}>
        <div
          className={`line1 ${open ? "Open" : ""}`}
          style={theme.icons}
        ></div>
        <div
          className={`line2 ${open ? "Open" : ""}`}
          style={theme.icons}
        ></div>
        <div
          className={`line3 ${open ? "Open" : ""}`}
          style={theme.icons}
        ></div>
      </button>
    </>
  );
}
