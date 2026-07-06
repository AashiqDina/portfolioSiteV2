import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Hamburger from "../ui/Hamburger";
import "./Header.css";
import { Link } from "react-router-dom";
import { headerTab } from "../../types";
import HomeQuickSection from "../home/HeaderMenuSection";

export default function Header() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="HeaderRowOne">
        <Hamburger
          theme={theme}
          open={menuOpen}
          onToggle={() => setMenuOpen((prev) => !prev)}
        />

        <Link to={"/"}>
          <h1 className="HeaderTitle" style={theme.primaryText}>
            Aashiq Dina
          </h1>
        </Link>
      </div>
      <div className={`quickSection ${menuOpen ? "open" : ""}`}>
        <HomeQuickSection />
      </div>
    </header>
  );
}
