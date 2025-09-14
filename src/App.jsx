import { useState , useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from 'wowjs';
import 'animate.css';
import { IoIosArrowUp } from "react-icons/io";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Faqs from "./pages/Faqs.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import PagenotFound from "./pages/PagenotFound";
import ProductCheckout from "./pages/ProductCheckout.jsx";
import Cart from "./pages/Cart.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";
import Blogs from "./pages/Blogs.jsx";

function App() {
   useEffect(() => {
    new WOW.WOW({
      live: false, // Disable live updates (improves performance)
    }).init();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetail/:slug" element={<ProductDetail />} />
          <Route path="/checkout" element={<ProductCheckout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirmation" element={<OrderConfirmation />} />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
        <Footer />
        <ScrollToTop
          smooth
          component={<IoIosArrowUp size={24} color="#ff6565" />}
          style={{ borderRadius: "50%" }}
        />
      </Router>
    </>
  );
}

export default App;
