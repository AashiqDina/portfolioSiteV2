import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import StarryBackground from "../components/background/StarryBackground";
import Home from "../pages/Home";
import { useState } from "react";

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
