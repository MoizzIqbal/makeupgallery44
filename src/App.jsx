import react, { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowUp } from "react-icons/io";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Faqs = lazy(() => import("./pages/Faqs.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));
const ProductDetail = lazy(() => import("./pages/ProductDetail.jsx"));
const PagenotFound = lazy(() => import("./pages/PagenotFound.jsx"));
const ProductCheckout = lazy(() => import("./pages/ProductCheckout.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));
const OrderConfirmation = lazy(() => import("./pages/OrderConfirmation.jsx"));
const Blogs = lazy(() => import("./pages/Blogs.jsx"));
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
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
        </Suspense>
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
