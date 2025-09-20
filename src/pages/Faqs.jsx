import React, { useEffect } from "react";
import faqimg from "../assets/images/photos/faq-home.webp";
import faqtext from "../assets/images/photos/faq.webp";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function Faqs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" if you want instant
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Faqs</title>
      </Helmet>
      <main className="main-content">
        <nav aria-label="breadcrumb" className="breadcrumb-style1">
          <div className="container">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Faq
              </li>
            </ol>
          </div>
        </nav>

        <section className="faq-area">
          <div className="container">
            <div className="row flex-xl-row-reverse">
              <div className="col-lg-6 col-xl-7">
                <div className="faq-thumb">
                  <img src={faqimg} width="601" height="368" alt="Image" />
                </div>
              </div>
              <div className="col-lg-6 col-xl-5">
                <div className="faq-content">
                  <div className="faq-text-img">
                    <img src={faqtext} width="199" height="169" alt="Image" />
                  </div>
                  <h2 className="faq-title">Frequently Questions</h2>
                  <div className="faq-line"></div>
                  <p className="faq-desc">
                    <i>
                      Find quick answers to common questions about our products,
                      shipping, and services.
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="accordion" id="FaqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse1"
                      >
                        What types of makeup products do you offer?
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading1"
                      data-bs-parent="#FaqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          We provide a wide range of cosmetics including
                          lipsticks, foundations, blushes, eyeshadows,
                          highlighters, and more from trusted brands.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        aria-expanded="false"
                        aria-controls="collapse2"
                      >
                        How can I choose the right shade for my skin tone?
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading2"
                      data-bs-parent="#FaqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Each product includes shade details and
                          recommendations. You can also contact our support team
                          for personalized guidance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapse3"
                      >
                        What payment methods do you accept?
                      </button>
                    </h2>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading3"
                      data-bs-parent="#FaqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          We accept major credit/debit cards, bank transfers,
                          and Cash on Delivery (COD) in selected locations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse4"
                        aria-expanded="false"
                        aria-controls="collapse4"
                      >
                        How long will it take to receive my order?
                      </button>
                    </h2>
                    <div
                      id="collapse4"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading4"
                      data-bs-parent="#FaqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Orders are usually delivered within 3–5 business days,
                          depending on your location.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading5">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse5"
                        aria-expanded="false"
                        aria-controls="collapse5"
                      >
                        How can I track my order?
                      </button>
                    </h2>
                    <div
                      id="collapse5"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading5"
                      data-bs-parent="#FaqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Once your order is confirmed, you will receive a
                          tracking ID and link via email or SMS to track your
                          shipment in real-time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading6">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse6"
                        aria-expanded="false"
                        aria-controls="collapse6"
                      >
                        How are shipping charges calculated?
                      </button>
                    </h2>
                    <div
                      id="collapse6"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading6"
                      data-bs-parent="#FaqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Shipping fees are calculated based on your delivery
                          location, package weight, and the courier service
                          selected.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading7">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse7"
                        aria-expanded="false"
                        aria-controls="collapse7"
                      >
                        Can I combine shipping charges if I order multiple
                        items?
                      </button>
                    </h2>
                    <div
                      id="collapse7"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading7"
                      data-bs-parent="#FaqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, if all items are ordered together, shipping is
                          charged only once based on the combined package
                          weight.
                        </p>
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

export default Faqs;
