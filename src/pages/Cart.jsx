import React from "react";
import { NavLink } from "react-router-dom";
import useCartStore from "../cartstore";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, cartTotal, clearCart} =
    useCartStore();

  console.log(cart);

  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
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
             <div className="text-end">
                    <p className="mb-3">
                    <button className='btn btn-sm rounded-1'   onClick={(e) => {
                      e.preventDefault(); // prevent form submission
                      clearCart(); // call the store action
                    }}> Clear Cart</button>
                    </p>
                  </div>
              <form>
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
                    {cart.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center py-5">
                          <p>Your cart is empty</p>
                          <NavLink
                            to="/products"
                            className="bg-blue-500  px-4 py-2 mt-3 inline-block rounded hover:bg-blue-600"
                          >
                            ← Go back to shopping
                          </NavLink>
                        </td>
                      </tr>
                    ) : (
                      cart.map((item) => (
                        <tr className="tbody-item" key={item.id}>
                          <td className="product-remove">
                            <a
                              className="remove"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <RxCross2 />
                            </a>
                          </td>
                          <td className="product-thumbnail">
                            <div className="thumb">
                              <img
                                src={
                                  item.image || "assets/images/shop/cart1.webp"
                                }
                                width="68"
                                height="84"
                                alt={item.title}
                              />
                            </div>
                          </td>
                          <td className="product-name">
                            <span className="title">{item.title}</span>
                          </td>
                          <td className="product-price">
                            <span className="price">Rs {item.price}</span>
                          </td>
                          <td className="product-quantity">
                            <div className="pro-qty flex items-center justify-center gap-2">
                              <div
                                className="dec qty-btn"
                                onClick={() => decreaseQty(item.id)}
                              >
                                <FaMinus size={15} />
                              </div>
                              <input
                                type="text"
                                className="quantity"
                                value={item.qty}
                                readOnly
                              />
                              <div
                                className="inc qty-btn"
                                onClick={() => increaseQty(item.id)}
                              >
                                <FaPlus size={15} />
                              </div>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="price">
                              Rs {item.price * item.qty}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </form>
            </div>

            {/* Cart Totals */}
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="cart-totals-wrap">
                  <h2 className="title">Cart totals</h2>
                  <table>
                    <tbody>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td>
                          <span className="amount">Rs {cartTotal()}</span>
                        </td>
                      </tr>
                      <tr className="shipping-totals">
                        <th>Shipping</th>
                        <td>
                          <ul className="shipping-list">
                            <li className="radio">
                              <label htmlFor="radio1">
                                Shipping Charges: <span>Rs 300</span>
                              </label>
                            </li>
                          </ul>
                          {/* <p className="destination">
                            Shipping to <strong>Pakistan</strong>.
                          </p>
                          */}
                        </td>
                      </tr>
                      {/* <tr className="order-total">
                        <th>Total</th>
                        <td>
                          <span className="amount">Rs {cartTotal()}</span>
                        </td>
                      </tr> */}
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
