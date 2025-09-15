import React, { useState, useEffect } from "react";
import banner1 from "../assets/images/shop/banner/1.webp";
import banner2 from "../assets/images/shop/banner/2.webp";
import banner3 from "../assets/images/shop/banner/3.webp";
import products from "../Data/ProductsArray";
import Homecategory from "../components/Homecategory";
import HomeBanner from "../components/HomeBanner";
import HomeJoinUs from "../components/HomeJoinUs";
import HomeTopSale from "../components/HomeTopSale";

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" if you want instant
    });
  }, []);

  return (
    <>
      <main className="main-content">
        <HomeBanner />
        <Homecategory />
        <HomeTopSale />

        {/* <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <a className="product-banner-item">
                  <img
                    src={banner1}
                    width="400"
                    height="370"
                    alt="Image-HasTech"
                  />
                </a>
              </div>
              <div className="col-sm-6 col-lg-4 mt-sm-0 mt-6">
                <a className="product-banner-item">
                  <img
                    src={banner2}
                    width="400"
                    height="370"
                    alt="Image-HasTech"
                  />
                </a>
              </div>
              <div className="col-sm-6 col-lg-4 mt-lg-0 mt-6">
                <a className="product-banner-item">
                  <img
                    src={banner3}
                    width="400"
                    height="370"
                    alt="Image-HasTech"
                  />
                </a>
              </div>
            </div>
          </div>
        </section> */}

        <HomeJoinUs />
      </main>
    </>
  );
}

export default Home;
