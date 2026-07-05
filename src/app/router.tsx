import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import StarryBackground from '../components/background/StarryBackground';
import Home from '../pages/Home';

export default function Router() {
  const hideBurger = location.pathname === '/';

  return (
    <BrowserRouter>
      <div className="App">
        <StarryBackground />
        <div className="Content">
          <Header hideHamburger={hideBurger} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
