import React from "react";
import logo from "../assets/images/logo.webp";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="wrapper">
        <header className="header-area sticky-header  header-transparent">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-5 col-lg-2 col-xl-1">
                <div className="header-logo">
                  <NavLink to="/">
                    <img
                      className="logo-main"
                      src={logo}
                      width="95"
                      height="68"
                      alt="Logo"
                    />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-7 col-xl-7 d-none d-lg-block">
                <div className="header-navigation ps-7">
                  <ul className="main-nav justify-content-center">
                    <li className="has-submenu">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="has-submenu">
                      <NavLink to="products">shop</NavLink>
                    </li>
                    <li className="has-submenu">
                      <NavLink to="/blogs">Blog</NavLink>
                      {/* <ul className="submenu-nav">
                        <li className="has-submenu">
                          <a href="#/">Blog Layout</a>
                          <ul className="submenu-nav">
                            <li>
                              <a href="blog.html">Blog Grid</a>
                            </li>
                            <li>
                              <a href="blog-left-sidebar.html">
                                Blog Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-right-sidebar.html">
                                Blog Right Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul> */}
                    </li>

                    <li className="has-submenu">
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-7 col-lg-3 col-xl-4">
                <div className="header-action justify-content-end">
                  {/* <button
                    className="header-action-btn ms-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#AsideOffcanvasSearch"
                    aria-controls="AsideOffcanvasSearch"
                  >
                    <span className="icon">
                      <FaMagnifyingGlass />
                    </span>
                  </button> */}
                  <NavLink to="/cart">
                    <button className="header-action-btn">
                      <span className="icon">
                        <FaShoppingCart color="pink" />
                      </span>
                    </button>
                  </NavLink>

                  <button
                    className="header-menu-btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#AsideOffcanvasMenu"
                    aria-controls="AsideOffcanvasMenu"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* <div id="scroll-to-top" className="scroll-to-top">
          <span className="fa fa-angle-up"></span>
        </div> */}

        <aside
          className="product-action-modal modal fade"
          id="action-WishlistModal"
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
                    <i className="fa fa-check-square-o"></i> Added to wishlist
                    successfully!
                  </div>
                  <div className="modal-action-product">
                    <div className="thumb">
                      <img
                        src="assets/images/shop/modal1.webp"
                        alt="Organic Food Juice"
                        width="466"
                        height="320"
                      />
                    </div>
                    <h4 className="product-name">
                      <a>Readable content DX22</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
{/* 
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
                  <div className="modal-action-product">
                    <div className="thumb">
                      <img
                        src="assets/images/shop/modal1.webp"
                        alt="Organic Food Juice"
                        width="466"
                        height="320"
                      />
                    </div>
                    <h4 className="product-name">
                      <a>Readable content DX22</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside> */}

        <aside
          className="aside-search-box-wrapper offcanvas offcanvas-top"
          tabIndex="-1"
          id="AsideOffcanvasSearch"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="offcanvas-header">
            <h5 className="d-none" id="offcanvasTopLabel">
              Aside Search
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="fa fa-close"></i>
            </button>
          </div>
          <div className="offcanvas-body">
            <div className="container pt--0 pb--0">
              <div className="search-box-form-wrap">
                <div className="search-note">
                  <p>Start typing and press Enter to search</p>
                </div>
                <form action="#" method="post">
                  <div className="aside-search-form position-relative">
                    <label htmlFor="SearchInput" className="visually-hidden">
                      Search
                    </label>
                    <input
                      id="SearchInput"
                      type="search"
                      className="form-control"
                      placeholder="Search entire store…"
                    />
                    <button className="search-button" type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </aside>

        {/* <aside
          className="product-cart-view-modal modal fade"
          id="action-QuickViewModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="product-quick-view-content">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  >
                    <span className="fa fa-close"></span>
                  </button>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="product-single-thumb">
                          <img
                            src="assets/images/shop/quick-view1.webp"
                            width="544"
                            height="560"
                            alt="Image-HasTech"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="product-details-content">
                          <h5 className="product-details-collection">
                            Premioum collection
                          </h5>
                          <h3 className="product-details-title">
                            Offbline Instant Age Rewind Eraser.
                          </h3>
                          <div className="product-details-review mb-5">
                            <div className="product-review-icon">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-half-o"></i>
                            </div>
                            <button
                              type="button"
                              className="product-review-show"
                            >
                              150 reviews
                            </button>
                          </div>
                          <p className="mb-6">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Delectus, repellendus. Nam voluptate illo ut
                            quia non sapiente provident alias quos laborum
                            incidunt, earum accusamus, natus. Vero pariatur ut
                            veniam sequi amet consectetur.
                          </p>
                          <div className="product-details-pro-qty">
                            <div className="pro-qty">
                              <input type="text" title="Quantity" value="1" />
                            </div>
                          </div>
                          <div className="product-details-action">
                            <h4 className="price">$254.22</h4>
                            <div className="product-details-cart-wishlist">
                              <button
                                type="button"
                                className="btn"
                                data-bs-toggle="modal"
                                data-bs-target="#action-CartAddModal"
                              >
                                Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside> */}

        {/* <aside
          className="off-canvas-wrapper offcanvas offcanvas-start"
          tabIndex="-1"
          id="AsideOffcanvasMenu"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h1 className="d-none" id="offcanvasExampleLabel">
              Aside Menu
            </h1>
            <button
              className="btn-menu-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              menu <i className="fa fa-chevron-left"></i>
            </button>
          </div>
          <div className="offcanvas-body">
            <div id="offcanvasNav" className="offcanvas-menu-nav">
              <ul>
                <li
                  className="offcanvas-nav-parent"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <NavLink className="offcanvas-nav-item" to="/">
                    Home
                  </NavLink>
                </li>
                <li
                  className="offcanvas-nav-parent"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <NavLink className="offcanvas-nav-item" to="/about">
                    About
                  </NavLink>
                </li>
                <li
                  className="offcanvas-nav-parent"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <NavLink className="offcanvas-nav-item" to="/products">
                    Shop
                  </NavLink>
                </li>

                <li
                  className="offcanvas-nav-parent"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <NavLink className="offcanvas-nav-item" to="/blogs">
                    Blogs
                  </NavLink>
                </li>
                <li
                  className="offcanvas-nav-parent"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <NavLink className="offcanvas-nav-item" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </aside> */}
      </div>
    </>
  );
}

export default Navbar;
