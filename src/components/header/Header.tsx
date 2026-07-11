import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Hamburger from "../ui/Hamburger";
import "./Header.css";
import { Link } from "react-router-dom";
import HomeQuickSection from "../home/HeaderMenuSection";
import AashiqDinaLogo from "../../assets/Aashiq-Dina-Logo.svg?react";

export default function Header() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header style={theme.header}>
      <div className="HeaderRowOne">
        <Hamburger
          theme={theme}
          open={menuOpen}
          onToggle={() => setMenuOpen((prev) => !prev)}
        />

        <Link to={"/"}>
          <AashiqDinaLogo style={theme.svgIcons} className="HeaderLogo" />
        </Link>
      </div>
      <div className={`quickSection ${menuOpen ? "open" : ""}`}>
        <HomeQuickSection />
      </div>
    </header>
  );
}
