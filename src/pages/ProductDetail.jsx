import React, { useState, useEffect } from "react";
import productdetailimg from "../assets/images/shop/product-details/2.webp";
import productbanner from "../assets/images/shop/banner/7.webp";
import product1 from "../assets/images/shop/1.webp";
import product2 from "../assets/images/shop/2.webp";
import product3 from "../assets/images/shop/3.webp";
import { FaStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { NavLink, useNavigation, useParams } from "react-router-dom";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { allproducts } from "../utils/allproducts";
import useCartStore from "../cartstore";
import { useNavigate } from "react-router-dom";
function ProductDetail() {
  const navigate = useNavigate()
  const { increaseQty, decreaseQty, addToCart, cart } = useCartStore();
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" if you want instant
    });
  }, []);

  const { slug } = useParams();
  const product = allproducts.find((item) => item.slug === slug);

  // find if product is already in cart
  const cartProduct = cart.find((item) => item.id === product.id);
  console.log(product);

  const addtocart = (namee) => {
    console.log(namee);
    setCartItem(namee);
    addToCart(namee);
  };

  const buynow = (product) => {
    console.log(product);
    navigate('/checkout')
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
                      <NavLink to="/" className="text-dark">
                        Home
                      </NavLink>
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
        </section>

        <section className="section-space">
          <div className="container">
            <div className="row product-details">
              <div className="col-lg-6">
                <div className="product-details-thumb">
                  {/* <img
                    src={productdetailimg}
                    width="570"
                    height="693"
                    alt="Image"
                  /> */}
                  <Carousel withIndicators height={500}>
                    {product.detailImages.map((img, index) => (
                      <Carousel.Slide key={index}>
                        {" "}
                        <img
                          src={img}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                          alt="Image"
                        />
                      </Carousel.Slide>
                    ))}
                  </Carousel>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-details-content">
                  <h5 className="product-details-collection">
                    <strong>Brand Name:</strong> {product.brand}
                  </h5>
                  <h3 className="product-details-title">{product.title}</h3>

                  <div className="product-details-review mb-7">
                    <div className="product-review-icon">
                      {Array(product.rating)
                        .fill(0)
                        .map((_, index) => (
                          // <i className="fa fa-star-o" key={index}></i>
                          <FaStar key={index} />
                        ))}
                    </div>
                    <button type="button" className="product-review-show">
                      150 reviews
                    </button>
                  </div>
                  <h5 className="price mt-2">Rs {product.price} </h5>
                  <p className="mb-7">{product.description}</p>
                  <div className="product-details-pro-qty">
                    <div className="pro-qty">
                      <input
                        type="text"
                        title="Quantity"
                        value={cartProduct ? cartProduct.qty : 1}
                        readOnly
                      />
                      <div
                        className="dec qty-btn"
                        onClick={
                          () =>
                            cartProduct
                              ? decreaseQty(product.id) // if in cart, decrease
                              : null // do nothing if not in cart
                        }
                      >
                        <FaMinus size={15} />
                      </div>
                      <div
                        className="inc qty-btn"
                        onClick={
                          () =>
                            cartProduct
                              ? increaseQty(product.id) // if in cart, increase
                              : addtocart(product) // if not in cart, add first
                        }
                      >
                        <FaPlus size={15} />
                      </div>
                    </div>
                  </div>

                  <div className="product-details-action">
                    <div className="product-details-cart-wishlist d-flex flex-column flex-sm-row gap-2 w-100">
                      <button
                        type="button"
                        className="btn btn-primary flex-fill"
                        data-bs-toggle="modal"
                        data-bs-target="#action-CartAddModal"
                        onClick={() => addtocart(product)}
                      >
                        Add to cart
                      </button>
                      <button
                        type="button"
                        className="btn btn-success flex-fill"
                        onClick={() => buynow(product)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <a href="" className="product-banner-item">
            <img
              src={productbanner}
              width="1170"
              height="240"
              alt="Image-HasTech"
            />
          </a>
        </div>
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
            <div className="row justify-content-between flex-xl-row-reverse">
              <div className="col-xl-12">
                <div className="row g-3 g-sm-6">
                  <div className="col-6 col-lg-4 col-xl-4 mb-4 mb-sm-8">
                    <div className="product-item product-st3-item">
                      <div className="product-thumb">
                        <NavLink className="d-block" to="/productdetail">
                          <img
                            src={product1}
                            width="370"
                            height="450"
                            alt="Image-HasTech"
                          />
                        </NavLink>
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
                            <FaStar />
                            <FaStar />
                            <FaStar />
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
                        {/* <button
                          type="button"
                          className="product-action-btn action-btn-quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#action-QuickViewModal"
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
                        >
                          <span>Add to cart</span>
                        </button>
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

export default ProductDetail;
