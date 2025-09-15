import React from "react";
import logo from "../assets/images/logo.webp";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import moment from "moment";
function Footer() {
  return (
    <>
      <footer className="footer-area">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4" data-aos='fade-right'>
                <div className="widget-item">
                  <div className="widget-about">
                    <NavLink className="widget-logo" to="/">
                      <img src={logo} width="95" height="68" alt="Logo" />
                    </NavLink>
                    <p className="desc">
                     MakeupGallery – Your destination for beauty, elegance, and confidence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 mt-md-0 mt-9" data-aos='fade-up'>
                <div className="widget-item">
                  <h4 className="widget-title">Information</h4>
                  <ul className="widget-nav">
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faqs">Privacy</NavLink>
                    </li>

                    <li>
                      <NavLink to="/products">Shop</NavLink>
                    </li>

                    <li>
                      <NavLink to="/faqs">FAQs</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-lg-0 mt-6" data-aos='fade-left'>
                <div className="widget-item">
                  <h4 className="widget-title">Social Info</h4>
                  <div className="widget-social">
                    <a
                      href="https://www.instagram.com/makeupgallery.44?igsh=eTBrZzFicnF0YWFs"
                      target="_blank"
                      rel="noopener"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener"
                    >
                      <FaFacebookSquare />
                    </a>
                    <a
                      href="https://wa.me/923064492925" // Replace with your phone number (no spaces, plus sign optional)
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container pt-0 pb-0">
            <div className="footer-bottom-content">
              <p className="copyright">
                © {moment().format("YYYY")} MakeupGallery44. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
