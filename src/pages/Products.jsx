import React, { useState, useEffect } from "react";
import productbanner from "../assets/images/shop/banner/7.webp";
import products from "../Data/ProductsArray";
import { NavLink } from "react-router-dom";
import { Pagination } from "@mantine/core";
console.log(products);

function Products() {
  const [search, setSearch] = useState("");
  // ----------matnain pagination-----------
  const [activePage, setPage] = useState(1);
  const itemsPerPage = 6; // or whatever number you want per page
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" if you want instant
    });
  }, []);

  return (
    <>
      <main className="main-content mt-5">
        <section
          className="page-header-area pt-10 pb-9"
          style={{ backgroundColor: "#FFF3DA" }}
        >
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
                  Showing {products.length} Results
                </h5>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <div className="d-block d-xl-none mb-5 text-center">
              <button
                className="btn btn-dark"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#filterSidebar"
                aria-controls="filterSidebar"
              >
                <i className="fa fa-filter me-2"></i> Filters
              </button>
            </div>
            <div className="row justify-content-between flex-xl-row-reverse">
              <div className="col-xl-9">
                <div className="row g-3 g-sm-6">
                  {currentItems.map((item, index) => (
                    <div
                      className="col-6 col-lg-4 col-xl-4 mb-4 mb-sm-8"
                      key={index}
                    >
                      <div className="product-item product-st3-item">
                        <div className="product-thumb">
                          <NavLink
                            className="d-block"
                            to={`/productdetail/${item.id}`}
                          >
                            <img
                              src={item.img}
                              width="370"
                              height="450"
                              alt="Image-HasTech"
                            />
                          </NavLink>
                          {/* <span className="flag-new">new</span> */}
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
                              {Array(item.rating)
                                .fill(0)
                                .map((_, index) => (
                                  <i className="fa fa-star-o" key={index}></i>
                                ))}
                            </div>
                            <div className="reviews">
                              {item.reviews} reviews
                            </div>
                          </div>
                          <h4 className="title">
                            <NavLink to={`/productdetail/${item.id}`}>
                              {item.name}
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
                  <div className="col-12">
                    {/* <ul className="pagination justify-content-center me-auto ms-auto mt-5 mb-10">
                      <li className="page-item">
                        <a
                          className="page-link previous"
                          
                          aria-label="Previous"
                        >
                          <span
                            className="fa fa-chevron-left"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" >
                          01
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" >
                          02
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" >
                          03
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" >
                          ....
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link next"
                          
                          aria-label="Next"
                        >
                          <span
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </li>
                    </ul> */}

                    <div className="d-flex justify-content-center mt-4">
                      <Pagination
                        total={Math.ceil(products.length / itemsPerPage)}
                        value={activePage}
                        onChange={setPage}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 d-none d-xl-block">
                <div className="product-sidebar-widget">
                  <div className="product-widget-search">
                    <form>
                      <input
                        type="search"
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Here"
                      />
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
                        <a >
                          Lipstics <span>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a >
                          Blush <span>(4)</span>
                        </a>
                      </li>
                      <li>
                        <a >
                          -Highlighter <span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a >
                          Foundations <span>(6)</span>
                        </a>
                      </li>
                      <li>
                        <a >
                          Nails <span>(12)</span>
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
              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="filterSidebar"
                aria-labelledby="filterSidebarLabel"
              >
                <div className="offcanvas-header">
                  <h5 id="filterSidebarLabel">Filters</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  {/* 👇 Put your current filters here */}
                  <div className="product-sidebar-widget">
                    <div className="product-widget-search">
                      <form>
                        <input
                          type="search"
                          name="search"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Search Here"
                        />
                        <button type="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </form>
                    </div>

                    {/* Other filters: price, categories, tags */}
                    <div className="product-widget">
                      <h4 className="product-widget-title">Price Filter</h4>
                      ...
                    </div>

                    <div className="product-widget">
                      <h4 className="product-widget-title">Categoris</h4>
                      <ul className="product-widget-category p-0">
                        <li>
                          <a>
                            Lipstics <span>(5)</span>
                          </a>
                        </li>
                        <li>
                          <a >
                            Blush <span>(4)</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            -Highlighter <span>(2)</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            Foundations <span>(6)</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            Nails <span>(12)</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-widget mb-0">
                      <h4 className="product-widget-title">Popular Tags</h4>
                      <ul className="product-widget-tags p-0">
                        <li>
                          <a>Beauty</a>
                        </li>
                        <li>
                          <a>MakeupArtist</a>
                        </li>
                        <li>
                          <a>Makeup</a>
                        </li>
                        <li>
                          <a>Hair</a>
                        </li>
                        <li>
                          <a>Nails</a>
                        </li>
                        <li>
                          <a>Hairstyle</a>
                        </li>
                        <li>
                          <a>Skincare</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <a  className="product-banner-item">
              <img
                src={productbanner}
                width="1170"
                height="240"
                alt="Image-HasTech"
              />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Products;
