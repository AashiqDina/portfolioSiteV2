import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import StarryBackground from "../components/background/StarryBackground";
import Home from "../pages/Home";
import { useState } from "react";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Hobbies from "../pages/Hobbies";
import Settings from "../pages/Settings";

export default function Router() {
  // const hideHeader = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <div className="App">
        <StarryBackground />
        <div className="Content">
          <Header
            isMenuOpen={menuOpen}
            toggleMenu={() => setMenuOpen((prev) => !prev)}
            closeMenu={() => setMenuOpen(false)}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  closeMenu={() => {
                    setMenuOpen(false);
                  }}
                />
              }
            />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
