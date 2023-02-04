import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navba } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { useMediaQuery } from 'react-responsive'
import Footer from "./components/Footer";

function App() {

  {/* media queries */}
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navba />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
            </Router>
      <Footer/>
      </ShopContextProvider>

      

    </div>
  );
}

export default App;
