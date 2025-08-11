import React from "react";
import { NavLink } from "react-router-dom";
function Cart() {
  return (
    <>
      <main className="main-content">
        <nav aria-label="breadcrumb" className="breadcrumb-style1">
          <div className="container">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Cart
              </li>
            </ol>
          </div>
        </nav>

        <section className="section-space">
          <div className="container">
            <div className="shopping-cart-form table-responsive">
              <form action="#" method="post">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th className="product-remove">&nbsp;</th>
                      <th className="product-thumbnail">&nbsp;</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tbody-item">
                      <td className="product-remove">
                        <a className="remove">×</a>
                      </td>
                      <td className="product-thumbnail">
                        <div className="thumb">
                          <a>
                            <img
                              src="assets/images/shop/cart1.webp"
                              width="68"
                              height="84"
                              alt="Image-HasTech"
                            />
                          </a>
                        </div>
                      </td>
                      <td className="product-name">
                        <a className="title">
                          Condimentum posuere consectetur urna
                        </a>
                      </td>
                      <td className="product-price">
                        <span className="price">$115.00</span>
                      </td>
                      <td className="product-quantity">
                        <div className="pro-qty">
                          <input
                            type="text"
                            className="quantity"
                            title="Quantity"
                            value="1"
                          />
                          <div className="dec qty-btn">-</div>
                          <div className="inc qty-btn">+</div>
                        </div>
                      </td>
                      <td className="product-subtotal">
                        <span className="price">$115.00</span>
                      </td>
                    </tr>
                    <tr className="tbody-item">
                      <td className="product-remove">
                        <a className="remove">×</a>
                      </td>
                      <td className="product-thumbnail">
                        <div className="thumb">
                          <a>
                            <img
                              src="assets/images/shop/cart2.webp"
                              width="68"
                              height="84"
                              alt="Image-HasTech"
                            />
                          </a>
                        </div>
                      </td>
                      <td className="product-name">
                        <a className="title">
                          Kaoreet lobortis sagittis laoreet
                        </a>
                      </td>
                      <td className="product-price">
                        <span className="price">$95.00</span>
                      </td>
                      <td className="product-quantity">
                        <div className="pro-qty">
                          <input
                            type="text"
                            className="quantity"
                            title="Quantity"
                            value="1"
                          />
                          <div className="dec qty-btn">-</div>
                          <div className="inc qty-btn">+</div>
                        </div>
                      </td>
                      <td className="product-subtotal">
                        <span className="price">$95.00</span>
                      </td>
                    </tr>
                    <tr className="tbody-item">
                      <td className="product-remove">
                        <a className="remove">×</a>
                      </td>
                      <td className="product-thumbnail">
                        <div className="thumb">
                          <a>
                            <img
                              src="assets/images/shop/cart3.webp"
                              width="68"
                              height="84"
                              alt="Image-HasTech"
                            />
                          </a>
                        </div>
                      </td>
                      <td className="product-name">
                        <a className="title">
                          Nostrum exercitationem itae ipsum
                        </a>
                      </td>
                      <td className="product-price">
                        <span className="price">$79.00</span>
                      </td>
                      <td className="product-quantity">
                        <div className="pro-qty">
                          <input
                            type="text"
                            className="quantity"
                            title="Quantity"
                            value="1"
                          />
                          <div className="dec qty-btn">-</div>
                          <div className="inc qty-btn">+</div>
                        </div>
                      </td>
                      <td className="product-subtotal">
                        <span className="price">$79.00</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="cart-totals-wrap">
                  <h2 className="title">Cart totals</h2>
                  <table>
                    <tbody>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td>
                          <span className="amount">$499.00</span>
                        </td>
                      </tr>
                      <tr className="shipping-totals">
                        <th>Shipping</th>
                        <td>
                          <ul className="shipping-list">
                            <li className="radio">
                              <input
                                type="radio"
                                name="shipping"
                                id="radio1"
                                checked
                              />
                              <label for="radio1">
                                Flat rate: <span>$3.00</span>
                              </label>
                            </li>
                            <li className="radio">
                              <input type="radio" name="shipping" id="radio2" />
                              <label for="radio2">Free shipping</label>
                            </li>
                            <li className="radio">
                              <input type="radio" name="shipping" id="radio3" />
                              <label for="radio3">Local pickup</label>
                            </li>
                          </ul>
                          <p className="destination">
                            Shipping to <strong>USA</strong>.
                          </p>
                          <a className="btn-shipping-address">Change address</a>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Total</th>
                        <td>
                          <span className="amount">$504.00</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-end">
                    <NavLink to="/checkout" className="checkout-button">
                      Proceed to checkout
                    </NavLink>
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

export default Cart;
