import React from 'react'
import cat1 from "../assets/images/shop/category/1.webp";
import cat2 from "../assets/images/shop/category/2.webp";
import cat3 from "../assets/images/shop/category/3.webp";
import cat4 from "../assets/images/shop/category/4.webp";
import cat5 from "../assets/images/shop/category/5.webp";
import cat6 from "../assets/images/shop/category/6.webp";
function Homecategory() {
  return (
    <>
      
        <section className="section-space pb-0 ">
          <div className="container" data-aos="fade-up">
            <div className="row g-3 g-sm-6">
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2" >
                <a href="" className="product-category-item">
                  <img
                    className="icon"
                    src={cat1}
                    width="70"
                    height="80"
                    alt="Image-HasTech"
                  />
                  <h3 className="title">Hare care</h3>
                </a>
              </div>
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
                <a
                  href=""
                  className="product-category-item"
                  style={{ backgroundColor: "#FFEDB4" }}
                >
                  <img
                    className="icon"
                    src={cat2}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  />
                  <h3 className="title">Skin care</h3>
                </a>
              </div>
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-lg-0 mt-sm-6 mt-4">
                <a
                  href=""
                  className="product-category-item"
                  style={{ backgroundColor: "#DFE4FF" }}
                >
                  <img
                    className="icon"
                    src={cat3}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  />
                  <h3 className="title">Lip stick</h3>
                </a>
              </div>
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                <a
                  href=""
                  className="product-category-item"
                  style={{ backgroundColor: "#FFEACC" }}
                >
                  <img
                    className="icon"
                    src={cat4}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  />
                  <h3 className="title">Face skin</h3>
                </a>
              </div>
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                <a
                  href=""
                  className="product-category-item"
                  style={{ backgroundColor: "#FFDAE0" }}
                >
                  <img
                    className="icon"
                    src={cat5}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  />
                  <h3 className="title">Blusher</h3>
                </a>
              </div>
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                <a
                  href=""
                  className="product-category-item"
                  style={{ backgroundColor: "#FFF3DA" }}
                >
                  <img
                    className="icon"
                    src={cat6}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  />
                  <h3 className="title">Natural</h3>
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Homecategory
