import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Hamburger from "../ui/Hamburger";
import "./Header.css";
import { Link } from "react-router-dom";
import HeaderMenuSections from "../home/HeaderMenuSection";
import AashiqDinaLogo from "../../assets/Aashiq-Dina-Logo.svg?react";

type props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

export default function Header({ isMenuOpen, toggleMenu, closeMenu }: props) {
  const { theme } = useTheme();

  return (
    <header style={theme.header}>
      <div className="HeaderRowOne">
        <Hamburger
          theme={theme}
          open={isMenuOpen}
          onToggle={() => toggleMenu()}
        />

        <Link to={"/"}>
          <AashiqDinaLogo
            style={theme.svgIcons}
            className="HeaderLogo"
            onClick={closeMenu}
          />
        </Link>
      </div>
      <div className={`quickSection ${isMenuOpen ? "open" : ""}`}>
        <HeaderMenuSections closeMenu={closeMenu} />
      </div>
    </header>
  );
}
