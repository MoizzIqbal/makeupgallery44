import React from "react";
import texttheme from "../assets/images/slider/text-theme.webp";
import text1 from "../assets/images/slider/text1.webp";
import slider1 from "../assets/images/slider/slider1.webp";
import slider2 from "../assets/images/slider/slider2.webp";
import product1 from "../assets/images/shop/1.webp";
import product2 from "../assets/images/shop/2.webp";
import product3 from "../assets/images/shop/3.webp";
import product4 from "../assets/images/shop/4.webp";
import product5 from "../assets/images/shop/5.webp";
import product6 from "../assets/images/shop/6.webp";
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
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
function Home() {
  return (
    <>
      <main className="main-content">
        <section className="hero-slider-area position-relative">
          <div className="swiper hero-slider-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide hero-slide-item">
                <div className="container">
                  <div className="row align-items-center position-relative">
                    <div className="col-12 col-md-6">
                      <div className="hero-slide-content">
                        <div className="hero-slide-text-img">
                          <img
                            src={texttheme}
                            width="427"
                            height="232"
                            alt="Image"
                          />
                        </div>
                        <h2 className="hero-slide-title">CLEAN FRESH</h2>
                        <p className="hero-slide-desc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut aliquam, purus sit amet luctus venenatis.
                        </p>
                        <a className="btn btn-border-dark" href="product.html">
                          BUY NOW
                        </a>
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
              <div className="swiper-slide hero-slide-item">
                <div className="container">
                  <div className="row align-items-center position-relative">
                    <div className="col-12 col-md-6">
                      <div className="hero-slide-content">
                        <div className="hero-slide-text-img">
                          <img
                            src={texttheme}
                            width="427"
                            height="232"
                            alt="Image"
                          />
                        </div>
                        <h2 className="hero-slide-title">Facial Cream</h2>
                        <p className="hero-slide-desc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut aliquam, purus sit amet luctus venenatis.
                        </p>
                        <a className="btn btn-border-dark" href="product.html">
                          BUY NOW
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="hero-slide-thumb">
                        <img
                          src={slider2}
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
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener">
              <i className="fa fa-pinterest-p"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </section>

        <section className="section-space pb-0">
          <div className="container">
            <div className="row g-3 g-sm-6">
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
                <a href="product.html" className="product-category-item">
                  <img
                    className="icon"
                    src={cat1}
                    width="70"
                    height="80"
                    alt="Image-HasTech"
                  />
                  <h3 className="title">Hare care</h3>
                  <span className="flag-new">new</span>
                </a>
              </div>
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
                <a
                  href="product.html"
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
                  href="product.html"
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
                  href="product.html"
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
                  <span data-bg-color="#835BF4" className="flag-new">
                    sale
                  </span>
                </a>
              </div>
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                <a
                  href="product.html"
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
                  href="product.html"
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
            <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
              <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                <div className="product-item">
                  <div className="product-thumb">
                    <a className="d-block" href="product-details.html">
                      <img
                        src={product1}
                        width="370"
                        height="450"
                        alt="Image-HasTech"
                      />
                    </a>
                    <span className="flag-new">new</span>
                    <div className="product-action">
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
                        className="product-action-btn action-btn-cart"
                        data-bs-toggle="modal"
                        data-bs-target="#action-CartAddModal"
                      >
                        <span>Add to cart</span>
                      </button>
                      <button
                        type="button"
                        className="product-action-btn action-btn-wishlist"
                        data-bs-toggle="modal"
                        data-bs-target="#action-WishlistModal"
                      >
                        <i class="fa fa-heart-o"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-rating">
                      <div className="rating">
                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>
                      </div>
                      <div className="reviews">150 reviews</div>
                    </div>
                    <h4 className="title">
                      <a href="product-details.html">Readable content DX22</a>
                    </h4>
                    <div className="prices">
                      <span className="price">$210.00</span>
                      <span className="price-old">300.00</span>
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
                      <i class="fa fa-heart-o"></i>
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
              <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                <div className="product-item">
                  <div className="product-thumb">
                    <a className="d-block" href="product-details.html">
                      <img
                        src={product2}
                        width="370"
                        height="450"
                        alt="Image-HasTech"
                      />
                    </a>
                    <span className="flag-new">new</span>
                    <div className="product-action">
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
                        className="product-action-btn action-btn-cart"
                        data-bs-toggle="modal"
                        data-bs-target="#action-CartAddModal"
                      >
                        <span>Add to cart</span>
                      </button>
                      <button
                        type="button"
                        className="product-action-btn action-btn-wishlist"
                        data-bs-toggle="modal"
                        data-bs-target="#action-WishlistModal"
                      >
                        <i class="fa fa-heart-o"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-rating">
                      <div className="rating">
                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>
                      </div>
                      <div className="reviews">150 reviews</div>
                    </div>
                    <h4 className="title">
                      <a href="product-details.html">Modern Eye Brush</a>
                    </h4>
                    <div className="prices">
                      <span className="price">$210.00</span>
                      <span className="price-old">300.00</span>
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
                      <i class="fa fa-heart-o"></i>
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
              <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                <div className="product-item">
                  <div className="product-thumb">
                    <a className="d-block" href="product-details.html">
                      <img
                        src={product3}
                        width="370"
                        height="450"
                        alt="Image-HasTech"
                      />
                    </a>
                    <span className="flag-new">new</span>
                    <div className="product-action">
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
                        className="product-action-btn action-btn-cart"
                        data-bs-toggle="modal"
                        data-bs-target="#action-CartAddModal"
                      >
                        <span>Add to cart</span>
                      </button>
                      <button
                        type="button"
                        className="product-action-btn action-btn-wishlist"
                        data-bs-toggle="modal"
                        data-bs-target="#action-WishlistModal"
                      >
                        <i class="fa fa-heart-o"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-rating">
                      <div className="rating">
                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>
                      </div>
                      <div className="reviews">150 reviews</div>
                    </div>
                    <h4 className="title">
                      <a href="product-details.html">Voyage face cleaner</a>
                    </h4>
                    <div className="prices">
                      <span className="price">$210.00</span>
                      <span className="price-old">300.00</span>
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
                      <i class="fa fa-heart-o"></i>
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
              <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                <div className="product-item">
                  <div className="product-thumb">
                    <a className="d-block" href="product-details.html">
                      <img
                        src={product4}
                        width="370"
                        height="450"
                        alt="Image-HasTech"
                      />
                    </a>
                    <span className="flag-new">new</span>
                    <div className="product-action">
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
                        className="product-action-btn action-btn-cart"
                        data-bs-toggle="modal"
                        data-bs-target="#action-CartAddModal"
                      >
                        <span>Add to cart</span>
                      </button>
                      <button
                        type="button"
                        className="product-action-btn action-btn-wishlist"
                        data-bs-toggle="modal"
                        data-bs-target="#action-WishlistModal"
                      >
                        <i class="fa fa-heart-o"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-rating">
                      <div className="rating">
                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>
                      </div>
                      <div className="reviews">150 reviews</div>
                    </div>
                    <h4 className="title">
                      <a href="product-details.html">Impulse Duffle</a>
                    </h4>
                    <div className="prices">
                      <span className="price">$210.00</span>
                      <span className="price-old">300.00</span>
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
                      <i class="fa fa-heart-o"></i>
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
              <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                <div className="product-item">
                  <div className="product-thumb">
                    <a className="d-block" href="product-details.html">
                      <img
                        src={product5}
                        width="370"
                        height="450"
                        alt="Image-HasTech"
                      />
                    </a>
                    <span className="flag-new">new</span>
                    <div className="product-action">
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
                        className="product-action-btn action-btn-cart"
                        data-bs-toggle="modal"
                        data-bs-target="#action-CartAddModal"
                      >
                        <span>Add to cart</span>
                      </button>
                      <button
                        type="button"
                        className="product-action-btn action-btn-wishlist"
                        data-bs-toggle="modal"
                        data-bs-target="#action-WishlistModal"
                      >
                        <i class="fa fa-heart-o"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-rating">
                      <div className="rating">
                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>
                      </div>
                      <div className="reviews">150 reviews</div>
                    </div>
                    <h4 className="title">
                      <a href="product-details.html">Sprite Yoga Straps1</a>
                    </h4>
                    <div className="prices">
                      <span className="price">$210.00</span>
                      <span className="price-old">300.00</span>
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
                      <i class="fa fa-heart-o"></i>
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
              <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                <div className="product-item">
                  <div className="product-thumb">
                    <a className="d-block" href="product-details.html">
                      <img
                        src={product6}
                        width="370"
                        height="450"
                        alt="Image-HasTech"
                      />
                    </a>
                    <span className="flag-new">new</span>
                    <div className="product-action">
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
                        className="product-action-btn action-btn-cart"
                        data-bs-toggle="modal"
                        data-bs-target="#action-CartAddModal"
                      >
                        <span>Add to cart</span>
                      </button>
                      <button
                        type="button"
                        className="product-action-btn action-btn-wishlist"
                        data-bs-toggle="modal"
                        data-bs-target="#action-WishlistModal"
                      >
                        <i class="fa fa-heart-o"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-rating">
                      <div className="rating">
                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>
                      </div>
                      <div className="reviews">150 reviews</div>
                    </div>
                    <h4 className="title">
                      <a href="product-details.html">Fusion facial cream</a>
                    </h4>
                    <div className="prices">
                      <span className="price">$210.00</span>
                      <span className="price-old">300.00</span>
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
                      <i class="fa fa-heart-o"></i>
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
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <a href="product.html" className="product-banner-item">
                  <img
                    src={banner1}
                    width="370"
                    height="370"
                    alt="Image-HasTech"
                  />
                </a>
              </div>
              <div className="col-sm-6 col-lg-4 mt-sm-0 mt-6">
                <a href="product.html" className="product-banner-item">
                  <img
                    src={banner2}
                    width="370"
                    height="370"
                    alt="Image-HasTech"
                  />
                </a>
              </div>
              <div className="col-sm-6 col-lg-4 mt-lg-0 mt-6">
                <a href="product.html" className="product-banner-item">
                  <img
                    src={banner3}
                    width="370"
                    height="370"
                    alt="Image-HasTech"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="section-space pb-0">
          <div className="container">
            <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
              <div className="col-6 col-lg-4 mb-4 mb-sm-8">
                <div className="product-item">
                  <div className="product-thumb">
                    <a className="d-block" href="product-details.html">
                      <img
                        src="assets/images/shop/4.webp"
                        width="370"
                        height="450"
                        alt="Image-HasTech"
                      />
                    </a>
                    <span className="flag-new">new</span>
                    <div className="product-action">
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
                        className="product-action-btn action-btn-cart"
                        data-bs-toggle="modal"
                        data-bs-target="#action-CartAddModal"
                      >
                        <span>Add to cart</span>
                      </button>
                      <button
                        type="button"
                        className="product-action-btn action-btn-wishlist"
                        data-bs-toggle="modal"
                        data-bs-target="#action-WishlistModal"
                      >
                        <i class="fa fa-heart-o"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-rating">
                      <div className="rating">
                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>
                      </div>
                      <div className="reviews">150 reviews</div>
                    </div>
                    <h4 className="title">
                      <a href="product-details.html">Readable content DX22</a>
                    </h4>
                    <div className="prices">
                      <span className="price">$210.00</span>
                      <span className="price-old">300.00</span>
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
                      <i class="fa fa-heart-o"></i>
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
              <div className="col-6 col-lg-4 mb-4 mb-sm-8">
                <div className="product-item">
                  <div className="product-thumb">
                    <a className="d-block" href="product-details.html">
                      <img
                        src="assets/images/shop/5.webp"
                        width="370"
                        height="450"
                        alt="Image-HasTech"
                      />
                    </a>
                    <span className="flag-new">new</span>
                    <div className="product-action">
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
                        className="product-action-btn action-btn-cart"
                        data-bs-toggle="modal"
                        data-bs-target="#action-CartAddModal"
                      >
                        <span>Add to cart</span>
                      </button>
                      <button
                        type="button"
                        className="product-action-btn action-btn-wishlist"
                        data-bs-toggle="modal"
                        data-bs-target="#action-WishlistModal"
                      >
                        <i class="fa fa-heart-o"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-rating">
                      <div className="rating">
                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>
                      </div>
                      <div className="reviews">150 reviews</div>
                    </div>
                    <h4 className="title">
                      <a href="product-details.html">Voyage face cleaner</a>
                    </h4>
                    <div className="prices">
                      <span className="price">$210.00</span>
                      <span className="price-old">300.00</span>
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
                      <i class="fa fa-heart-o"></i>
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
              <div className="col-6 col-lg-4 mb-4 mb-sm-8">
                <div className="product-item">
                  <div className="product-thumb">
                    <a className="d-block" href="product-details.html">
                      <img
                        src="assets/images/shop/6.webp"
                        width="370"
                        height="450"
                        alt="Image-HasTech"
                      />
                    </a>
                    <span className="flag-new">new</span>
                    <div className="product-action">
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
                        className="product-action-btn action-btn-cart"
                        data-bs-toggle="modal"
                        data-bs-target="#action-CartAddModal"
                      >
                        <span>Add to cart</span>
                      </button>
                      <button
                        type="button"
                        className="product-action-btn action-btn-wishlist"
                        data-bs-toggle="modal"
                        data-bs-target="#action-WishlistModal"
                      >
                        <i class="fa fa-heart-o"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-rating">
                      <div className="rating">
                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>

                        <i class="fa fa-star-o"></i>
                      </div>
                      <div className="reviews">150 reviews</div>
                    </div>
                    <h4 className="title">
                      <a href="product-details.html">Impulse Duffle</a>
                    </h4>
                    <div className="prices">
                      <span className="price">$210.00</span>
                      <span className="price-old">300.00</span>
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
                      <i class="fa fa-heart-o"></i>
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
            </div>
          </div>
        </section> */}

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
                      width="370"
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
                      width="370"
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
                      width="370"
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
