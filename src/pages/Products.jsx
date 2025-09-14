import React, { useState, useEffect } from "react";
import productbanner from "../assets/images/shop/banner/7.webp";
import products from "../Data/ProductsArray";
import { NavLink } from "react-router-dom";
import { Pagination } from "@mantine/core";
import { allproducts } from "../utils/allproducts";
console.log(allproducts);

function Products() {
  const [search, setSearch] = useState("");
  const [starfilter, setStarFilter] = useState('')
  const [filterProducts, setFilterProducts] = useState(allproducts);
  const [cartItem, setCartItem] = useState(null);
  // ----------matnain pagination-----------
  const [activePage, setPage] = useState(1);
  const itemsPerPage = 20; // or whatever number you want per page
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filterProducts.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" if you want instant
    });
  }, []);

  useEffect(() => {
    const filtered = allproducts.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterProducts(filtered);
  }, [search]);
  const uniquecategories = [
    ...new Set(allproducts.map((item) => item.category)),
  ];
  console.log(uniquecategories);

  const selectedCategory = (selectedCategory) => {
    console.log(selectedCategory);
    const filtercategory = allproducts.filter(
      (item) => item.category === selectedCategory
    );
    setFilterProducts(filtercategory);
  };

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
                  Showing {filterProducts.length} Results
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
                            to={`/productdetail/${item.slug}`}
                          >
                            <img
                              src={item.image}
                              width="370"
                              height="450"
                              alt="Image-HasTech"
                            />
                          </NavLink>
                          {/* <span className="flag-new">new</span> */}
                          <div className="product-action">
                            {/* <button
                              type="button"
                              className="product-action-btn action-btn-quick-view"
                              data-bs-toggle="modal"
                              data-bs-target="#action-QuickViewModal"
                              onClick={() => addtocart(item)}
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
                              <span>Adddd to cart</span>
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
                              {item.rating ? (
                                Array(item.rating)
                                  .fill(0)
                                  .map((_, index) => (
                                    <i className="fa fa-star-o" key={index}></i>
                                  ))
                              ) : (
                                <span>no rating</span>
                              )}
                            </div>
                            <div className="reviews">Brand: {item.brand}</div>
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
                          {/* <button
                            type="button"
                            className="product-action-btn action-btn-quick-view"
                            data-bs-toggle="modal"
                            data-bs-target="#action-QuickViewModal"
                             onClick={() => addtocart(item)}
                          >
                            <i className="fa fa-expand"></i>
                          </button> */}
                          {/* <button
                            type="button"
                            className="product-action-btn action-btn-wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#action-WishlistModal"
                          >
                            <i className="fa fa-heart-o"></i>
                          </button> */}
                          <button
                            type="button"
                            className="product-action-btn action-btn-cart"
                            data-bs-toggle="modal"
                            data-bs-target="#action-CartAddModal"
                            onClick={() => addtocart(item)}
                          >
                            <span>Add to carttt</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="col-12">
                    <div className="d-flex justify-content-center mt-4">
                      <Pagination
                        total={Math.ceil(allproducts.length / itemsPerPage)}
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
                  </div>
                  {/* <div className="product-widget">
                    <h4 className="product-widget-title">Price Filter</h4>
                    <div className="product-widget-range-slider">
                      <div className="slider-range" id="slider-range"></div>
                      <div className="slider-labels">
                        <span id="slider-range-value1"></span>
                        <span>—</span>
                        <span id="slider-range-value2"></span>
                      </div>
                    </div>
                  </div> */}
                  <div className="product-widget">
                    <h4 className="product-widget-title">Filter By Star</h4>
                    <ul className="product-widget-category p-0">
                      <li>
                        <input
                          type="checkbox"
                          id="rating5"
                          name="rating"
                          value="5"
                        />{" "}
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="rating4"
                          name="rating"
                          value="4"
                        />{" "}
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="rating3"
                          name="rating"
                          value="4"
                        />{" "}
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="rating2"
                          name="rating"
                          value="2"
                        />{" "}
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="rating1"
                          name="rating"
                          value="1"
                        />{" "}
                        <i className="fa fa-star-o"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="product-widget">
                    <h4 className="product-widget-title">Categories</h4>
                    <ul className="product-widget-category p-0">
                      {uniquecategories.map((item, index) => (
                        <li key={index}>
                          <a onClick={() => selectedCategory(item)}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="product-widget ">
                    <h4 className="product-widget-title">Reset All Filters</h4>
                    <p
                      className="btn btn-border-dark text-center"
                      onClick={() => setFilterProducts(allproducts)}
                    >
                      Reset
                    </p>
                  </div>
                  <div className="product-widget">
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
                      <input
                        type="search"
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Here"
                      />
                      <button
                        type="submit"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <i className="fa fa-search"></i>
                      </button>
                    </div>

                    {/* Other filters: price, categories, tags */}
                    {/* <div className="product-widget">
                      <h4 className="product-widget-title">Price Filter</h4>
                      ...
                    </div> */}

                    <div className="product-widget">
                      <h4 className="product-widget-title">Categoris</h4>
                      <ul className="product-widget-category p-0">
                        {uniquecategories.map((item, index) => (
                          <li key={index}>
                            <a
                              onClick={() => selectedCategory(item)}
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="product-widget ">
                      <h4 className="product-widget-title">
                        Reset All Filters
                      </h4>
                      <p
                        className="btn btn-border-dark text-center"
                        onClick={() => setFilterProducts(allproducts)}
                      >
                        Reset
                      </p>
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
            <a className="product-banner-item">
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
