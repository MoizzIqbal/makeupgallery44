import React, { useState } from "react";
import contactimg from "../assets/images/photos/contact.webp";
function Contact() {
  const [formData, setFormdata] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormdata({
      fname: "",
      lname: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <main className="main-content">
        <section className="contact-area">
          <div className="container">
            <div className="row">
              <div className="offset-lg-6 col-lg-6">
                <div className="section-title position-relative">
                  <h2 className="title">Get in touch</h2>
                  <p className="m-0">
                    We’re just a message away — let’s start the conversation.
                  </p>
                  <div className="line-left-style mt-4 mb-1"></div>
                </div>

                <div className="contact-form">
                  <form id="contact-form" onSubmit={formSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="fname"
                            onChange={handelChange}
                            value={formData.fname}
                            placeholder="First Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="lname"
                            value={formData.lname}
                            onChange={handelChange}
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handelChange}
                            placeholder="Email address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            value={formData.message}
                            onChange={handelChange}
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-0">
                          <button className="btn btn-sm" type="submit">
                            SUBMIT
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="form-message"></div>
              </div>
            </div>
          </div>
          <div
            className="contact-left-img"
            style={{ backgroundImage: `url(${contactimg})` }}
          ></div>
        </section>

        <section className="section-space">
          <div className="container">
            <div className="contact-info">
              <div className="contact-info-item">
                <img
                  className="icon"
                  src="assets/images/icons/1.webp"
                  width="30"
                  height="30"
                  alt="Icon"
                />
                <a href="tel://+11020303023">+11 0203 03023</a>
                <a href="tel://+11020303023">+11 0203 03023</a>
              </div>
              <div className="contact-info-item">
                <img
                  className="icon"
                  src="assets/images/icons/2.webp"
                  width="30"
                  height="30"
                  alt="Icon"
                />
                <a href="mailto://example@demo.com">example@demo.com</a>
                <a href="mailto://demo@example.com">demo@example.com</a>
              </div>
              <div className="contact-info-item mb-0">
                <img
                  className="icon"
                  src="assets/images/icons/3.webp"
                  width="30"
                  height="30"
                  alt="Icon"
                />
                <p>Sunset Beach, North Carolina(NC), 28468</p>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="map-area">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d802879.9165497769!2d144.83475730949783!3d-38.180874157285366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1636803638401!5m2!1sen!2sbd"></iframe>
        </div> */}
      </main>
    </>
  );
}

export default Contact;
