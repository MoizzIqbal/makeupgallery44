import React from "react";
import notfound from "../assets/images/photos/page-not-found.webp";
import { NavLink } from "react-router-dom";
function PagenotFound() {
  return (
    <>
      <main className="main-content">
        <section className="page-not-found-area">
          <div className="container">
            <div className="page-not-found">
              <img src={notfound} width="975" height="538" alt="Image" />
              <h3 className="title">Opps! You Lost</h3>
              <h5 className="back-btn">
                Go to <NavLink to="/">Home</NavLink> Page
              </h5>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default PagenotFound;
