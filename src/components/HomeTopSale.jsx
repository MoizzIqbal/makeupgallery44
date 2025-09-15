import React, {useState} from 'react'
import { allproducts } from "../utils/allproducts";
import { NavLink } from 'react-router-dom';
import useCartStore from '../cartstore';
function HomeTopSale() {
    const addToCart = useCartStore((state) => state.addToCart);
    const [cartItem, setCartItem] = useState(null);
     const addtocart = (namee) => {
    console.log(namee);
    setCartItem(namee);
    addToCart(namee)
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
       <section className="section-space">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h2 className="title" data-aos="fade-up">Top sale</h2>
                  <p>
                   <i> Grab the best deals at unbeatable prices!</i>
                  </p>
                </div>
              </div>
            </div>
            <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
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
                      {/* <button
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default HomeTopSale
