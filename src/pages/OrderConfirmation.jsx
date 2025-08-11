import React from "react";
import { NavLink } from "react-router-dom";

function OrderConfirmation() {
  return (
   <main aria-labelledby="thankyou-title" className="py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8 col-xl-7">

        {/* Success Icon */}
        <div className="text-center mb-4">
          <span
            className="d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success fs-2 shadow"
            style={{ width: 80, height: 80 }}
            aria-hidden="true"
          >
            ✓
          </span>
          <span className="visually-hidden">Order placed successfully</span>
        </div>

        {/* Card */}
        <div className="card shadow border-0">
          <div className="card-body p-4 p-md-5 text-center">

            {/* Heading */}
            <h1 id="thankyou-title" className="h2 fw-bold mb-3">
              Thank you for your order!
            </h1>

            {/* Order ID */}
            <div className="d-inline-flex align-items-center gap-2 bg-light border rounded-pill px-3 py-1 mb-4">
              <span className="text-muted small">Order #</span>
              <span className="fw-semibold">ORD-123456</span>
            </div>

            {/* Info List */}
            <ul className="list-unstyled text-start mx-auto mb-4" style={{ maxWidth: "400px" }}>
              <li className="d-flex align-items-start mb-2">
                <span className="mt-1 rounded-circle bg-success" style={{ width: 8, height: 8 }} />
                <span className="ms-2 text-muted">
                  Estimated delivery <span className="fw-medium text-dark">3–5 working days</span>.
                </span>
              </li>
              <li className="d-flex align-items-start">
                <span className="mt-1 rounded-circle bg-success" style={{ width: 8, height: 8 }} />
                <span className="ms-2 text-muted">
                  Tracking details will be emailed once your order ships.
                </span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <NavLink to="/products" className="btn btn-success px-4 shadow-sm">
                Shop Again
              </NavLink>
              <NavLink to="/" className="btn btn-outline-secondary px-4">
                Go Home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  );
}

export default OrderConfirmation;
