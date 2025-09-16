import React from "react";
import logo from "../assets/images/logo.webp";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useCartStore from "../cartstore";
import { Avatar, Indicator } from "@mantine/core";
function Navbar() {
  const { cart } = useCartStore();
  const totalcartItems = cart.length;
  console.log(totalcartItems);

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
                    <Indicator
                      label={cart.length}
                      processing
                      size={20}
                      offset={7}
                      position="bottom-end"
                      color="red"
                      withBorder
                      disabled={cart.length === 0}
                    >
                      <Avatar size="md" radius="xl" color="gray">
                        <FaShoppingCart color="pink" size={20} />
                      </Avatar>
                    </Indicator>
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
        </aside>
      </div>
    </>
  );
}

export default Navbar;
