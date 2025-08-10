import React from "react";
import productdetailimg from "../assets/images/shop/product-details/2.webp";
import productbanner from "../assets/images/shop/banner/7.webp";
import relimg1 from "../assets/images/shop/8.webp";
function ProductDetail() {
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
                      Product Detail
                    </li>
                  </ol>
                  <h2 className="page-header-title">Product Detail</h2>
                </div>
              </div>
              <div className="col-md-7">
                <h5 className="showing-pagination-results mt-5 mt-md-9 text-center text-md-end">
                  Showing Single Product
                </h5>
              </div>
            </div>
          </div>
        </section> */}

        <section className="">
          <div className="container">
            <div className="row product-details">
              <div className="col-lg-6">
                <div className="product-details-thumb">
                  <img
                    src={productdetailimg}
                    width="570"
                    height="693"
                    alt="Image"
                  />
                  <span className="flag-new">new</span>
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
                  <div className="product-details-review mb-7">
                    <div className="product-review-icon">
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-half-o"></i>
                    </div>
                    <button type="button" className="product-review-show">
                      150 reviews
                    </button>
                  </div>
                  <p className="mb-7">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus, repellendus. Nam voluptate illo ut quia non
                    sapiente provident alias quos laborum incidunt, earum
                    accusamus, natus. Vero pariatur ut veniam sequi amet
                    consectetur.
                  </p>
                  <div className="product-details-pro-qty">
                    <div className="pro-qty">
                      <input type="text" title="Quantity" value="1" />
                      <div className="dec qty-btn">-</div>
                      <div className="inc qty-btn">+</div>
                    </div>
                  </div>

                  <div className="product-details-action">
                    <h4 className="price">$254.22</h4>
                    <div className="product-details-cart-wishlist">
                      <button
                        type="button"
                        className="btn-wishlist"
                        data-bs-toggle="modal"
                        data-bs-target="#action-WishlistModal"
                      >
                        <i className="fa fa-heart-o"></i>
                      </button>
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
        </section>

        <div className="container">
          <a href="product.html" className="product-banner-item">
            <img
              src={productbanner}
              width="1170"
              height="240"
              alt="Image-HasTech"
            />
          </a>
        </div>
      </main>
    </>
  );
}

export default ProductDetail;
