import React, { useEffect } from "react";
import texttheme from "../assets/images/slider/text-theme.webp";
import text1 from "../assets/images/slider/text1.webp";
import slider1 from "../assets/images/slider/slider1.webp";
import slider2 from "../assets/images/slider/slider2.webp";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
function HomeBanner() {
  return (
    <>
      <section className="hero-slider-area position-relative">
        <div className="swiper hero-slider-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide hero-slide-item">
              <div className="container">
                <div className="row align-items-center position-relative">
                  <div className="col-12 col-md-6 ">
                    <div className="hero-slide-content">
                      <div className="hero-slide-text-img">
                        <img
                          src={texttheme}
                          width="427"
                          height="232"
                          alt="Image"
                        />
                      </div>
                      {/* <motion.h2
  className="hero-slide-title"
  initial={{ opacity: 0, y: 50 }}   // hidden + neeche
  animate={{ opacity: 1, y: 0 }}    // visible + normal
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  CLEAN FRESH
</motion.h2> */}
                      <h1 className="hero-slide-title" data-aos="fade-up">
                        CLEAN FRESH
                      </h1>
                      <p className="hero-slide-desc ">
                        <i>
                          Experience luxury makeup crafted for elegance,
                          radiance, and timeless beauty.
                        </i>
                      </p>
                      <NavLink className="btn btn-border-dark" to="/products" data-aos='fade-up'>
                        BUY NOW
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-12 col-md-6" data-aos="fade-left">
                    <div className="hero-slide-thumb">
                      <img src={slider1} width="841" height="832" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-slide-text-shape">
                <img src={text1} width="70" height="955" alt="Image" />
              </div>
              <div className="hero-slide-social-shape"></div>
            </div>
          </div>

          <div className="hero-slider-pagination"></div>
        </div>
        <div className="hero-slide-social-media">
          <a  href="https://wa.me/923064492925" target="_blank" rel="noopener">
            {/* <i className="fa fa-whatsapp"></i> */}
            <IoLogoWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/makeupgallery.44?igsh=eTBrZzFicnF0YWFs2"
            target="_blank"
            rel="noopener"
          >
          <RiInstagramFill />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener">
           <FaFacebook />
          </a>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;
