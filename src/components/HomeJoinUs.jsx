import React, {useEffect} from 'react'
import joinus from "../assets/images/photos/bg1.webp";

function HomeJoinUs() {

  return (
    <>
        <section className="section-space pt-0 mt-5 mb-0" data-aos="fade-up">
                <div className="container">
                  <div
                    className="newsletter-content-wrap"
                    style={{ backgroundImage: `url(${joinus})` }}
                  >
                    <div className="newsletter-content">
                      <div className="section-title mb-0">
                        <h2 className="title">Join with us</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                          aliquam.
                        </p>
                      </div>
                    </div>
                    <div className="newsletter-form">
                      <form>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="enter your email"
                        />
                        <button className="btn-submit" type="submit">
                          <i className="fa fa-paper-plane"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
    </>
  )
}

export default HomeJoinUs
