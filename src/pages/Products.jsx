import React from "react";
import product1 from "../assets/images/shop/1.webp";
import product2 from "../assets/images/shop/2.webp";
import product3 from "../assets/images/shop/3.webp";
import product4 from "../assets/images/shop/4.webp";
import product5 from "../assets/images/shop/5.webp";
import product6 from "../assets/images/shop/6.webp";
import product7 from "../assets/images/shop/7.webp";
import product8 from "../assets/images/shop/8.webp";
function Products() {
  return (
    <>
      <main className="main-content mt-5">
        {/* <section className="page-header-area pt-10 pb-9" data-bg-color="#FFF3DA">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="page-header-st3-content text-center text-md-start">
                  <ol className="breadcrumb justify-content-center justify-content-md-start">
                    <li className="breadcrumb-item">
                      <a className="text-dark" href="index.html">
                        Home
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item active text-dark"
                      aria-current="page"
                    >
                      Products
                    </li>
                  </ol>
                  <h2 className="page-header-title">All Products</h2>
                </div>
              </div>
              <div className="col-md-7">
                <h5 className="showing-pagination-results mt-5 mt-md-9 text-center text-md-end">
                  Showing 09 Results
                </h5>
              </div>
            </div>
          </div>
        </section> */}

        <section className="section-space">
          <div className="container">
            <div className="row justify-content-between flex-xl-row-reverse">
              <div className="col-xl-9">
                <div className="row g-3 g-sm-6">
                  <div className="col-6 col-lg-4 col-xl-4 mb-4 mb-sm-8">
                    <div className="product-item product-st3-item">
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
                            <i className="fa fa-heart-o"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-rating">
                          <div className="rating">
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-half-o"></i>
                          </div>
                          <div className="reviews">150 reviews</div>
                        </div>
                        <h4 className="title">
                          <a href="product-details.html">
                            Readable content DX22
                          </a>
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
                  <div className="col-6 col-lg-4 col-xl-4 mb-4 mb-sm-8">
                    <div className="product-item product-st3-item">
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
                            <i className="fa fa-heart-o"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-rating">
                          <div className="rating">
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-half-o"></i>
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
                  <div className="col-6 col-lg-4 col-xl-4 mb-4 mb-sm-8">
                    <div className="product-item product-st3-item">
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
                            <i className="fa fa-heart-o"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-rating">
                          <div className="rating">
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-half-o"></i>
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
                  <div className="col-6 col-lg-4 col-xl-4 mb-4 mb-sm-8">
                    <div className="product-item product-st3-item">
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
                            <i className="fa fa-heart-o"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-rating">
                          <div className="rating">
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-half-o"></i>
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
                  <div className="col-6 col-lg-4 col-xl-4 mb-4 mb-sm-8">
                    <div className="product-item product-st3-item">
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
                            <i className="fa fa-heart-o"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-rating">
                          <div className="rating">
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-half-o"></i>
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
                  <div className="col-6 col-lg-4 col-xl-4 mb-4 mb-sm-8">
                    <div className="product-item product-st3-item">
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
                            <i className="fa fa-heart-o"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-rating">
                          <div className="rating">
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-half-o"></i>
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
                  <div className="col-6 col-lg-4 col-xl-4 mb-4 mb-sm-8">
                    <div className="product-item product-st3-item">
                      <div className="product-thumb">
                        <a className="d-block" href="product-details.html">
                          <img
                            src={product7}
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
                            <i className="fa fa-heart-o"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-rating">
                          <div className="rating">
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-half-o"></i>
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
                  <div className="col-6 col-lg-4 col-xl-4 mb-4 mb-sm-8">
                    <div className="product-item product-st3-item">
                      <div className="product-thumb">
                        <a className="d-block" href="product-details.html">
                          <img
                            src={product8}
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
                            <i className="fa fa-heart-o"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-rating">
                          <div className="rating">
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-half-o"></i>
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

                  <div className="col-12">
                    <ul className="pagination justify-content-center me-auto ms-auto mt-5 mb-10">
                      <li className="page-item">
                        <a
                          className="page-link previous"
                          href="product.html"
                          aria-label="Previous"
                        >
                          <span
                            className="fa fa-chevron-left"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="product.html">
                          01
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="product.html">
                          02
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="product.html">
                          03
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="product.html">
                          ....
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link next"
                          href="product.html"
                          aria-label="Next"
                        >
                          <span
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="product-sidebar-widget">
                  <div className="product-widget-search">
                    <form action="#">
                      <input type="search" placeholder="Search Here" />
                      <button type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="product-widget">
                    <h4 className="product-widget-title">Price Filter</h4>
                    <div className="product-widget-range-slider">
                      <div className="slider-range" id="slider-range"></div>
                      <div className="slider-labels">
                        <span id="slider-range-value1"></span>
                        <span>—</span>
                        <span id="slider-range-value2"></span>
                      </div>
                    </div>
                  </div>
                  <div className="product-widget">
                    <h4 className="product-widget-title">Categoris</h4>
                    <ul className="product-widget-category p-0">
                      <li>
                        <a href="product.html">
                          Accesasories <span>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a href="product.html">
                          Computer <span>(4)</span>
                        </a>
                      </li>
                      <li>
                        <a href="product.html">
                          Covid-19 <span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a href="product.html">
                          Electronics <span>(6)</span>
                        </a>
                      </li>
                      <li>
                        <a href="product.html">
                          Frame Sunglasses <span>(12)</span>
                        </a>
                      </li>
                      <li>
                        <a href="product.html">
                          Furniture <span>(7)</span>
                        </a>
                      </li>
                      <li>
                        <a href="product.html">
                          Genuine Leather <span>(9)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-widget mb-0">
                    <h4 className="product-widget-title">Popular Tags</h4>
                    <ul className="product-widget-tags p-0">
                      <li>
                        <a href="blog.html">Beauty</a>
                      </li>
                      <li>
                        <a href="blog.html">MakeupArtist</a>
                      </li>
                      <li>
                        <a href="blog.html">Makeup</a>
                      </li>
                      <li>
                        <a href="blog.html">Hair</a>
                      </li>
                      <li>
                        <a href="blog.html">Nails</a>
                      </li>
                      <li>
                        <a href="blog.html">Hairstyle</a>
                      </li>
                      <li>
                        <a href="blog.html">Skincare</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <a href="product.html" className="product-banner-item">
              <img
                src="assets/images/shop/banner/7.webp"
                width="1170"
                height="240"
                alt="Image-HasTech"
              />
            </a>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2 className="title">Related Products</h2>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis
                  </p>
                </div>
              </div>
            </div>
            <div className="row mb-n10">
              <div className="col-12">
                <div className="swiper related-product-slide-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide mb-8">
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
                              <i className="fa fa-heart-o"></i>
                            </button>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-rating">
                            <div className="rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-half-o"></i>
                            </div>
                            <div className="reviews">150 reviews</div>
                          </div>
                          <h4 className="title">
                            <a href="product-details.html">
                              Readable content DX22
                            </a>
                          </h4>
                          <div className="prices">
                            <span className="price">$210.00</span>
                            <span className="price-old">300.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide mb-8">
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
                              <i className="fa fa-heart-o"></i>
                            </button>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-rating">
                            <div className="rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-half-o"></i>
                            </div>
                            <div className="reviews">150 reviews</div>
                          </div>
                          <h4 className="title">
                            <a href="product-details.html">
                              Readable content DX22
                            </a>
                          </h4>
                          <div className="prices">
                            <span className="price">$210.00</span>
                            <span className="price-old">300.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide mb-8">
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
                              <i className="fa fa-heart-o"></i>
                            </button>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-rating">
                            <div className="rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-half-o"></i>
                            </div>
                            <div className="reviews">150 reviews</div>
                          </div>
                          <h4 className="title">
                            <a href="product-details.html">
                              Readable content DX22
                            </a>
                          </h4>
                          <div className="prices">
                            <span className="price">$210.00</span>
                            <span className="price-old">300.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Products;
