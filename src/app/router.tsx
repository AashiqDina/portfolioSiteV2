import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import StarryBackground from "../components/background/StarryBackground";
import Home from "../pages/Home";

export default function Router() {
  const hideHeader = location.pathname === "/";

  return (
    <BrowserRouter>
      <div className="App">
        <StarryBackground />
        <div className="Content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
