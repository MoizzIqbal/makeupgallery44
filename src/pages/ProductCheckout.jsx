import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function ProductCheckout() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    city: "",
    zip: "",
    message: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone must contain only numbers";
    }
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.agree) newErrors.agree = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      alert("Order placed successfully!");
      navigate('/confirmation')
    } else {
      console.log("Validation errors");
    }
  };
  return (
    <>
      <main className="main-content ">
        <nav aria-label="breadcrumb" className="breadcrumb-style1">
          <div className="container">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Checkout
              </li>
            </ol>
          </div>
        </nav>

        <section className="shopping-checkout-wrap section-space">
          <div className="container">
            <div className="checkout-page-coupon-wrap">
              <div className="coupon-accordion" id="CouponAccordion">
                <div className="card">
                  <h3>
                    <i className="fa fa-info-circle"></i>
                    Have a Coupon?
                    <a
                      href="#/"
                      data-bs-toggle="collapse"
                      data-bs-target="#couponaccordion"
                    >
                      {" "}
                      Click here to enter your code
                    </a>
                  </h3>
                  <div
                    id="couponaccordion"
                    className="collapse"
                    data-bs-parent="#CouponAccordion"
                  >
                    <div className="card-body">
                      <div className="apply-coupon-wrap">
                        <p>If you have a coupon code, please apply it below.</p>
                        <form action="#" method="post">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Coupon code"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <button type="button" className="btn-coupon">
                                Apply coupon
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="checkout-billing-details-wrap">
                  <h2 className="title">Billing details</h2>
                  <div className="billing-form-wrap">
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="f_name">
                              First name{" "}
                              <abbr className="required" title="required">
                                *
                              </abbr>
                            </label>
                            <input
                              id="f_name"
                              type="text"
                              name="firstName"
                              onChange={handleChange}
                              value={formData.firstName}
                              className="form-control"
                              required
                            />
                            {errors.firstName && (
                              <small className="text-danger">
                                {errors.firstName}
                              </small>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="l_name">
                              Last name{" "}
                              <abbr className="required" title="required">
                                *
                              </abbr>
                            </label>
                            <input
                              id="l_name"
                              type="text"
                              onChange={handleChange}
                              value={formData.lastName}
                              className="form-control"
                              name="lastName"
                              required
                            />
                            {errors.lastName && (
                              <small className="text-danger">
                                {errors.lastName}
                              </small>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="email">
                              Email address{" "}
                              <abbr className="required" title="required">
                                *
                              </abbr>
                            </label>
                            <input
                              id="email"
                              type="text"
                              name="email"
                              onChange={handleChange}
                              value={formData.email}
                              className="form-control"
                              required
                            />
                            {errors.email && (
                              <small className="text-danger">
                                {errors.email}
                              </small>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="phone">
                              Phone{" "}
                              <abbr className="required" title="required">
                                *
                              </abbr>
                            </label>
                            <input
                              id="phone"
                              type="text"
                              name="phone"
                              onChange={handleChange}
                              value={formData.phone}
                              className="form-control"
                              required
                            />
                            {errors.phone && (
                              <small className="text-danger">
                                {errors.phone}
                              </small>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6 mb-4">
                          <div className="form-group">
                            <label htmlFor="country">
                              Country{" "}
                              <abbr className="required" title="required">
                                *
                              </abbr>
                            </label>
                            <select
                              id="country"
                              className="form-control wide"
                              name="country"
                              onChange={handleChange}
                              value={formData.country}
                              required
                            >
                              <option value="">Select Country</option>
                              <option value="Pakistan">Pakistan</option>
                            </select>
                            {errors.country && (
                              <small className="text-danger">
                                {errors.country}
                              </small>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="town">
                              City{" "}
                              <abbr className="required" title="required">
                                *
                              </abbr>
                            </label>
                            <input
                              id="town"
                              type="text"
                              name="city"
                              onChange={handleChange}
                              value={formData.city}
                              className="form-control"
                              required
                            />
                            {errors.city && (
                              <small className="text-danger">
                                {errors.city}
                              </small>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="street-address">
                              Street address{" "}
                              <abbr className="required" title="required">
                                *
                              </abbr>
                            </label>
                            <input
                              id="street-address"
                              type="text"
                              name="address"
                              onChange={handleChange}
                              value={formData.address}
                              className="form-control"
                              placeholder="House number and street name"
                              required
                            />
                            {errors.address && (
                              <small className="text-danger">
                                {errors.address}
                              </small>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="pz-code">
                              Postcode / ZIP (optional)
                            </label>
                            <input
                              id="pz-code"
                              type="text"
                              name="zip"
                              onChange={handleChange}
                              value={formData.zip}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group mb-0">
                            <label htmlFor="order-notes">
                              Order notes (optional)
                            </label>
                            <textarea
                              id="order-notes"
                              className="form-control"
                              name="message"
                              onChange={handleChange}
                              value={formData.message}
                              placeholder="Notes about your order, e.g. special notes for delivery."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="checkout-order-details-wrap">
                  <div className="order-details-table-wrap table-responsive">
                    <h2 className="title mb-25">Your order</h2>
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-name">Product</th>
                          <th className="product-total">Total</th>
                        </tr>
                      </thead>
                      <tbody className="table-body">
                        <tr className="cart-item">
                          <td className="product-name">
                            Satin gown{" "}
                            <span className="product-quantity">× 1</span>
                          </td>
                          <td className="product-total">£69.99</td>
                        </tr>
                        <tr className="cart-item">
                          <td className="product-name">
                            Printed cotton t-shirt{" "}
                            <span className="product-quantity">× 1</span>
                          </td>
                          <td className="product-total">£20.00</td>
                        </tr>
                      </tbody>
                      <tfoot className="table-foot">
                        <tr className="cart-subtotal">
                          <th>Subtotal</th>
                          <td>£89.99</td>
                        </tr>
                        <tr className="shipping">
                          <th>Shipping</th>
                          <td>Flat rate: Rs 300</td>
                        </tr>
                        <tr className="order-total">
                          <th>Total </th>
                          <td>£91.99</td>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="shop-payment-method">
                      <div id="PaymentMethodAccordion">
                        <div className="card">
                          <div className="card-header" id="check_payments3">
                            <h5
                              className="title"
                              data-bs-toggle="collapse"
                              data-bs-target="#itemThree"
                              aria-controls="itemTwo"
                              aria-expanded="true"
                            >
                              Cash on delivery (COD)
                            </h5>
                          </div>
                          <div
                            id="itemThree"
                            className="collapse show"
                            aria-labelledby="check_payments3"
                            data-bs-parent="#PaymentMethodAccordion"
                          >
                            <div className="card-body">
                              <p>Pay with cash upon delivery.</p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="check_payments">
                            <h5
                              className="title"
                              data-bs-toggle="collapse"
                              data-bs-target="#itemOne"
                              aria-controls="itemOne"
                              aria-expanded="false"
                            >
                              Direct bank transfer
                            </h5>
                          </div>
                          <div
                            id="itemOne"
                            className="collapse "
                            aria-labelledby="check_payments"
                            data-bs-parent="#PaymentMethodAccordion"
                          >
                            <div className="card-body">
                              <p>
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order will not be shipped until
                                the funds have cleared in our account.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="p-text">
                        Your personal data will be used to process your order,
                        support your experience throughout this website, and for
                        other purposes described in our{" "}
                        <NavLink to="/faqs">privacy policy.</NavLink>
                      </p>
                      <div className="agree-policy">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="agree"
                            name="agree"
                            onChange={handleChange}
                            checked={formData.agree}
                            className="custom-control-input visually-hidden"
                            required
                          />

                          <label
                            htmlFor="agree"
                            className="custom-control-label"
                          >
                            I have read and agree to the website terms and
                            conditions <span className="required">*</span>
                          </label>
                        </div>
                        {errors.agree && (
                          <small className="text-danger">{errors.agree}</small>
                        )}
                      </div>
                      <a
                        className="btn-place-order"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Place order
                      </a>
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

export default ProductCheckout;
