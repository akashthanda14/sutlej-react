import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Header />
      <Routes>
        <Route path="https://www.sutlejindustrialcorp.com/" element={<Home />} />
        <Route path="https://www.sutlejindustrialcorp.com/about" element={<About />} />
        <Route path="https://www.sutlejindustrialcorp.com/contactus" element={<ContactUs />} />
        <Route path="https://www.sutlejindustrialcorp.com/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
