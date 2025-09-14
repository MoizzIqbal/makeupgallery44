import React, { useState, useEffect } from "react";
import WOW from "wowjs";
import "animate.css";
import texttheme from "../assets/images/slider/text-theme.webp";
import text1 from "../assets/images/slider/text1.webp";
import slider1 from "../assets/images/slider/slider1.webp";
import slider2 from "../assets/images/slider/slider2.webp";
import joinus from "../assets/images/photos/bg1.webp";
import cat1 from "../assets/images/shop/category/1.webp";
import cat2 from "../assets/images/shop/category/2.webp";
import cat3 from "../assets/images/shop/category/3.webp";
import cat4 from "../assets/images/shop/category/4.webp";
import cat5 from "../assets/images/shop/category/5.webp";
import cat6 from "../assets/images/shop/category/6.webp";
import banner1 from "../assets/images/shop/banner/1.webp";
import banner2 from "../assets/images/shop/banner/2.webp";
import banner3 from "../assets/images/shop/banner/3.webp";
import products from "../Data/ProductsArray";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { allproducts } from "../utils/allproducts";
console.log(allproducts);

function Home() {
  const [cartItem, setCartItem] = useState(null);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" if you want instant
    });
  }, []);

  const addtocart = (namee) => {
    console.log(namee);
    setCartItem(namee);
  };
  return (
    <>
      <aside
        className="product-action-modal modal fade"
        id="action-CartAddModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="product-action-view-content">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                >
                  <i className="fa fa-times"></i>
                </button>
                <div className="modal-action-messages">
                  <i className="fa fa-check-square-o"></i> Added to cart
                  successfully!
                </div>
                {cartItem && (
                  <div className="modal-action-product">
                    <div className="thumb">
                      <img
                        src={cartItem.image}
                        alt={cartItem.title}
                        width="466"
                        height="200"
                        style={{ objectFit: "contain", height: "200px" }}
                      />
                    </div>
                    <h4 className="product-name">
                      <a>{cartItem.title}</a>
                    </h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className="main-content">
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
                        <h1 className="hero-slide-title wow animate__animated animate__fadeInDown">
                          CLEAN FRESH
                        </h1>
                        <p className="hero-slide-desc ">
                          <i>
                            Experience luxury makeup crafted for elegance,
                            radiance, and timeless beauty.
                          </i>
                        </p>
                        <NavLink className="btn btn-border-dark" to="/products">
                          BUY NOW
                        </NavLink>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="hero-slide-thumb">
                        <img
                          src={slider1}
                          width="841"
                          height="832"
                          alt="Image"
                        />
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
            <a href="" target="_blank" rel="noopener">
              <i className="fa fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/makeupgallery.44?igsh=eTBrZzFicnF0YWFs2"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a href="" target="_blank" rel="noopener">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </section>

        <section className="section-space pb-0 ">
          <div className="container">
            <div className="row g-3 g-sm-6 wow animate__animated animate__fadeInDown">
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
                <a href="" className="product-category-item">
                  <img
                    className="icon"
                    src={cat1}
                    width="70"
                    height="80"
                    alt="Image-HasTech"
                  />
                  <h3 className="title">Hare care</h3>
                </a>
              </div>
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
                <a
                  href=""
                  className="product-category-item"
                  style={{ backgroundColor: "#FFEDB4" }}
                >
                  <img
                    className="icon"
                    src={cat2}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  />
                  <h3 className="title">Skin care</h3>
                </a>
              </div>
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-lg-0 mt-sm-6 mt-4">
                <a
                  href=""
                  className="product-category-item"
                  style={{ backgroundColor: "#DFE4FF" }}
                >
                  <img
                    className="icon"
                    src={cat3}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  />
                  <h3 className="title">Lip stick</h3>
                </a>
              </div>
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                <a
                  href=""
                  className="product-category-item"
                  style={{ backgroundColor: "#FFEACC" }}
                >
                  <img
                    className="icon"
                    src={cat4}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  />
                  <h3 className="title">Face skin</h3>
                </a>
              </div>
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                <a
                  href=""
                  className="product-category-item"
                  style={{ backgroundColor: "#FFDAE0" }}
                >
                  <img
                    className="icon"
                    src={cat5}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  />
                  <h3 className="title">Blusher</h3>
                </a>
              </div>
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                <a
                  href=""
                  className="product-category-item"
                  style={{ backgroundColor: "#FFF3DA" }}
                >
                  <img
                    className="icon"
                    src={cat6}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  />
                  <h3 className="title">Natural</h3>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h2 className="title">Top sale</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis
                  </p>
                </div>
              </div>
            </div>
            <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6 wow animate__animated animate__fadeInUp">
              {allproducts.slice(0, 6).map((item, index) => (
                <div className="col-6 col-lg-4 mb-4 mb-sm-9" key={index}>
                  <div className="product-item">
                    <div className="product-thumb">
                      <NavLink
                        className="d-block"
                        to={`/productdetail/${item.slug}`}
                      >
                        <img
                          src={item.image}
                          width="400"
                          height="450"
                          alt="Image-HasTech"
                        />
                      </NavLink>

                      <div className="product-action">
                        {/* <button
                          type="button"
                          className="product-action-btn action-btn-quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#action-QuickViewModal"
                        >
                          <i className="fa fa-expand"></i>
                        </button> */}
                        <button
                          type="button"
                          className="product-action-btn action-btn-cart"
                          data-bs-toggle="modal"
                          data-bs-target="#action-CartAddModal"
                          onClick={() => addtocart(item)}
                        >
                          <span>Add to cart</span>
                        </button>
                        {/* <button
                          type="button"
                          className="product-action-btn action-btn-wishlist"
                          data-bs-toggle="modal"
                          data-bs-target="#action-WishlistModal"
                        >
                          <i className="fa fa-heart-o"></i>
                        </button> */}
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-rating">
                        <div className="rating">
                          {item.rating && item.rating > 0 ? (
                            Array(item.rating)
                              .fill(0)
                              .map((_, index) => (
                                <i className="fa fa-star-o" key={index}></i>
                              ))
                          ) : (
                            <span>No rating</span>
                          )}
                        </div>
                        <div className="reviews">{item.reviews} reviews</div>
                      </div>
                      <h4 className="title">
                        <NavLink to={`/productdetail/${item.id}`}>
                          {item.title}
                        </NavLink>
                      </h4>
                      <div className="prices">
                        <span className="price">RS {item.price}</span>
                        {/* <span className="price-old">300.00</span> */}
                      </div>
                    </div>
                    <div className="product-action-bottom">
                      <button
                        type="button"
                        className="product-action-btn action-btn-quick-view"
                        data-bs-toggle="modal"
                        data-bs-target="#action-QuickViewModal"
                      >
                        <i className="fa fa-expand"></i>
                      </button>
                      <button
                        type="button"
                        className="product-action-btn action-btn-wishlist"
                        data-bs-toggle="modal"
                        data-bs-target="#action-WishlistModal"
                      >
                        <i className="fa fa-heart-o"></i>
                      </button>
                      <button
                        type="button"
                        className="product-action-btn action-btn-cart"
                        data-bs-toggle="modal"
                        data-bs-target="#action-CartAddModal"
                      >
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <a className="product-banner-item">
                  <img
                    src={banner1}
                    width="400"
                    height="370"
                    alt="Image-HasTech"
                  />
                </a>
              </div>
              <div className="col-sm-6 col-lg-4 mt-sm-0 mt-6">
                <a className="product-banner-item">
                  <img
                    src={banner2}
                    width="400"
                    height="370"
                    alt="Image-HasTech"
                  />
                </a>
              </div>
              <div className="col-sm-6 col-lg-4 mt-lg-0 mt-6">
                <a className="product-banner-item">
                  <img
                    src={banner3}
                    width="400"
                    height="370"
                    alt="Image-HasTech"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="section-space">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h2 className="title">Blog posts</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis
                  </p>
                </div>
              </div>
            </div>
            <div className="row mb-n9">
              <div className="col-sm-6 col-lg-4 mb-8">
                <div className="post-item">
                  <a href="blog-details.html" className="thumb">
                    <img
                      src="assets/images/blog/1.webp"
                      width="400"
                      height="320"
                      alt="Image-HasTech"
                    />
                  </a>
                  <div className="content">
                    <a className="post-category" href="blog.html">
                      beauty
                    </a>
                    <h4 className="title">
                      <a href="blog-details.html">
                        Lorem ipsum dolor sit amet consectetur adipiscing.
                      </a>
                    </h4>
                    <ul className="meta">
                      <li className="author-info">
                        <span>By:</span> <a href="blog.html">Tomas De Momen</a>
                      </li>
                      <li className="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-8">
                <div className="post-item">
                  <a href="blog-details.html" className="thumb">
                    <img
                      src="assets/images/blog/2.webp"
                      width="400"
                      height="320"
                      alt="Image-HasTech"
                    />
                  </a>
                  <div className="content">
                    <a
                      className="post-category post-category-two"
                      data-bg-color="#A49CFF"
                      href="blog.html"
                    >
                      beauty
                    </a>
                    <h4 className="title">
                      <a href="blog-details.html">
                        Facial Scrub is natural treatment for face.
                      </a>
                    </h4>
                    <ul className="meta">
                      <li className="author-info">
                        <span>By:</span> <a href="blog.html">Tomas De Momen</a>
                      </li>
                      <li className="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-8">
                <div className="post-item">
                  <a href="blog-details.html" className="thumb">
                    <img
                      src="assets/images/blog/3.webp"
                      width="400"
                      height="320"
                      alt="Image-HasTech"
                    />
                  </a>
                  <div className="content">
                    <a
                      className="post-category post-category-three"
                      data-bg-color="#9CDBFF"
                      href="blog.html"
                    >
                      beauty
                    </a>
                    <h4 className="title">
                      <a href="blog-details.html">
                        Benefit of Hot Ston Spa for your health & life.
                      </a>
                    </h4>
                    <ul className="meta">
                      <li className="author-info">
                        <span>By:</span> <a href="blog.html">Tomas De Momen</a>
                      </li>
                      <li className="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="section-space pt-0 mt-5 mb-0">
          <div className="container">
            <div
              className="newsletter-content-wrap"
              style={{ backgroundImage: `url(${joinus})` }}
            >
              <div className="newsletter-content">
                <div className="section-title mb-0">
                  <h2 className="title">Join with us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam.
                  </p>
                </div>
              </div>
              <div className="newsletter-form">
                <form>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="enter your email"
                  />
                  <button className="btn-submit" type="submit">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
